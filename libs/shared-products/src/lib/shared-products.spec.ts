import { findProductBySlug, listProductsByCategory, products } from './shared-products';

describe('shared-products catalogue', () => {
  it('exposes demo products', () => {
    expect(products.length).toBeGreaterThan(0);
  });

  it('finds a product by slug', () => {
    const first = products[0];
    expect(findProductBySlug(first.slug)).toEqual(first);
  });

  it('filters by category', () => {
    const hoodies = listProductsByCategory('hoodie');
    expect(hoodies.every((item) => item.category === 'hoodie')).toBe(true);
  });
});
