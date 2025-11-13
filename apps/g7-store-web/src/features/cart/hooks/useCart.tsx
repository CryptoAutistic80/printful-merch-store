'use client';

import { CartItem } from '@g7/shared-types';
import { findProductBySlug } from '@g7/shared-products';
import { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from 'react';

const STORAGE_KEY = 'g7-cart';

type CartAction =
  | { type: 'hydrate'; payload: CartItem[] }
  | { type: 'add'; payload: CartItem }
  | { type: 'remove'; payload: { productSlug: string; variantId: string } }
  | { type: 'updateQty'; payload: { productSlug: string; variantId: string; quantity: number } }
  | { type: 'clear' };

function reducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'hydrate':
      return action.payload;
    case 'add': {
      const existing = state.find(
        (item) => item.productSlug === action.payload.productSlug && item.variantId === action.payload.variantId,
      );
      if (existing) {
        return state.map((item) =>
          item === existing ? { ...item, quantity: item.quantity + action.payload.quantity } : item,
        );
      }
      return [...state, action.payload];
    }
    case 'remove':
      return state.filter(
        (item) => !(item.productSlug === action.payload.productSlug && item.variantId === action.payload.variantId),
      );
    case 'updateQty':
      return state.map((item) =>
        item.productSlug === action.payload.productSlug && item.variantId === action.payload.variantId
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item,
      );
    case 'clear':
      return [];
    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productSlug: string, variantId: string) => void;
  updateQuantity: (productSlug: string, variantId: string, quantity: number) => void;
  clear: () => void;
  subtotal: number;
  totalQuantity: number;
  enrichedItems: Array<
    CartItem & {
      productName: string;
      price: number;
      image: string;
      variantLabel: string;
    }
  >;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      dispatch({ type: 'hydrate', payload: JSON.parse(raw) });
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((item: CartItem) => dispatch({ type: 'add', payload: item }), []);
  const removeItem = useCallback(
    (productSlug: string, variantId: string) => dispatch({ type: 'remove', payload: { productSlug, variantId } }),
    [],
  );
  const updateQuantity = useCallback(
    (productSlug: string, variantId: string, quantity: number) =>
      dispatch({ type: 'updateQty', payload: { productSlug, variantId, quantity } }),
    [],
  );
  const clear = useCallback(() => dispatch({ type: 'clear' }), []);

  const enrichedItems = useMemo(() => {
    return items
      .map((item) => {
        const product = findProductBySlug(item.productSlug);
        const variant = product?.variants.find((variantItem) => variantItem.id === item.variantId);

        if (!product || !variant) {
          return null;
        }

        return {
          ...item,
          productName: product.name,
          price: product.basePrice,
          image: product.images[0],
          variantLabel: variant.label,
        };
      })
      .filter((value): value is NonNullable<typeof value> => Boolean(value));
  }, [items]);

  const subtotal = useMemo(
    () => enrichedItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [enrichedItems],
  );

  const value: CartContextValue = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clear,
    subtotal,
    totalQuantity: items.reduce((total, item) => total + item.quantity, 0),
    enrichedItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used inside CartProvider');
  }
  return context;
}
