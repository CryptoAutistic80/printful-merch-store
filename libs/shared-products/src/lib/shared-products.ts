import { Category, Product } from '@g7/shared-types';

const heroImages = {
  tee: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
  hoodie: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
  hat: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
  accessory: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80',
};

const baseVariants = [
  { id: 'blk-s', size: 'S', color: 'Black', label: 'Black / S', hex: '#050608', printfulVariantId: 0 },
  { id: 'blk-m', size: 'M', color: 'Black', label: 'Black / M', hex: '#050608', printfulVariantId: 0 },
  { id: 'blk-l', size: 'L', color: 'Black', label: 'Black / L', hex: '#050608', printfulVariantId: 0 },
  { id: 'gry-m', size: 'M', color: 'Gray', label: 'Gray / M', hex: '#7F8EA3', printfulVariantId: 0 },
];

export const products: Product[] = [
  {
    slug: 'protocol-tee',
    name: 'Protocol Tee',
    category: 'tee',
    description: 'Soft heavyweight tee with the Group 7 monoline mark and cryptic gridlines.',
    heroTagline: 'Signal the protocol.',
    basePrice: 38,
    images: [heroImages.tee, 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1100&q=80'],
    variants: baseVariants,
    tags: ['daily uniform', 'limited run'],
    features: ['240gsm combed cotton', 'Boxy Euro fit', 'Pre-shrunk'],
  },
  {
    slug: 'resonant-hoodie',
    name: 'Resonant Hoodie',
    category: 'hoodie',
    description: 'Fleece pullover with matte ink detailing and oversized front pocket.',
    heroTagline: 'Uniform for night ops.',
    basePrice: 78,
    images: [heroImages.hoodie],
    variants: baseVariants,
    tags: ['drop favorite'],
    features: ['French terry interior', 'Hidden device sleeve', 'Tonal drawcords'],
  },
  {
    slug: 'field-cap',
    name: 'Field Cap',
    category: 'hat',
    description: 'Six-panel cap with laser-cut vents and silicon crest.',
    heroTagline: 'Keep the glare off the mission.',
    basePrice: 42,
    images: [heroImages.hat],
    variants: [
      { id: 'one-black', size: 'OS', color: 'Matte Black', label: 'Matte Black', hex: '#050608', printfulVariantId: 0 },
      { id: 'one-sand', size: 'OS', color: 'Sand', label: 'Sand', hex: '#B59F83', printfulVariantId: 0 },
    ],
    tags: ['adjustable'],
    features: ['Performance nylon', 'Quick-release closure'],
  },
  {
    slug: 'datapath-sling',
    name: 'Datapath Sling',
    category: 'accessory',
    description: 'Ballistic sling built for tablets, notebooks, and mission cards.',
    heroTagline: 'Carry the schematics.',
    basePrice: 64,
    images: [heroImages.accessory],
    variants: [
      { id: 'sling-black', size: 'OS', color: 'Black', label: 'Midnight Black', hex: '#0F1115', printfulVariantId: 0 },
    ],
    features: ['Weather sealed zipper', 'Magnetic buckle', 'Hidden tether pocket'],
  },
];

export function listProductsByCategory(category?: Category): Product[] {
  if (!category) {
    return products;
  }

  return products.filter((product) => product.category === category);
}

export function findProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(limit = 3): Product[] {
  return products.slice(0, limit);
}
