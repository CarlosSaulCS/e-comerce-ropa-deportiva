export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  colors: string[];
  sizes: string[];
  images: string[];
  imageMap?: Record<string, string[]>;
  tags: string[];
  featured?: boolean;
  inventory: number;
  category: 'men' | 'women' | 'footwear' | 'accessories';
};

export const PRODUCTS: Product[] = [
  {
    id: 'lm-tee-001',
    slug: 'silk-tech-tee',
    name: 'Silk-Tech Tee',
    brand: 'LuxeMotion',
    description:
      'Camiseta técnica con tacto seda, microperforaciones de alta ventilación y costuras termoselladas para máxima comodidad durante el rendimiento.',
    price: 120,
    colors: ['negro', 'blanco', 'pizarra'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop',
    ],
    tags: ['best', 'tops'],
    featured: true,
    inventory: 50,
    category: 'men',
  },
  {
    id: 'lm-tights-002',
    slug: 'aero-sculpt-tights',
    name: 'Aero Sculpt Tights',
    brand: 'LuxeMotion',
    description:
      'Mallas compresivas con paneles termoadaptativos, cintura anatómica y costuras invisibles para un soporte elegante y sin rozaduras.',
    price: 220,
    colors: ['negro', 'vino'],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop',
    ],
    tags: ['featured', 'women'],
    featured: true,
    inventory: 35,
    category: 'women',
  },
  {
    id: 'lm-shoe-003',
    slug: 'carbon-elite-runner',
    name: 'Carbon Elite Runner',
    brand: 'LuxeMotion',
    description:
      'Zapatillas con placa de carbono y espuma responsiva de última generación. Tracción multidireccional y malla premium de alto flujo para carreras explosivas.',
    price: 420,
    colors: ['negro/oro'],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    images: [
      'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop',
    ],
    tags: ['best', 'footwear'],
    inventory: 22,
    category: 'footwear',
  },
  {
    id: 'lm-hoodie-004',
    slug: 'cashmere-performance-hoodie',
    name: 'Cashmere Performance Hoodie',
    brand: 'LuxeMotion',
    description:
      'Sudadera con mezcla de cashmere y fibras técnicas: calidez ultraligera, interior cepillado y capucha ergonómica. Acabado mate de lujo.',
    imageMap: {
      negro: [
        'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
      ],
      gris: [
        'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
      ],
    },
    price: 380,
    colors: ['negro', 'gris'],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop',
    ],
    tags: ['tops'],
    featured: true,
    inventory: 28,
    category: 'men',
  },
  {
    id: 'lm-bra-005',
    slug: 'silhouette-support-bra',
    name: 'Silhouette Support Bra',
    brand: 'LuxeMotion',
    description:
      'Sujeción alta con paneles transpirables, tejido de tacto sedoso y espalda ergonómica que acompaña el movimiento.',
    imageMap: {
      negro: [
        'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
      ],
      vino: [
        'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop',
      ],
      marfil: [
        'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
      ],
    },
    price: 160,
    colors: ['negro', 'vino', 'marfil'],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
    ],
    tags: ['best'],
    featured: true,
    inventory: 40,
    category: 'women',
  },
  {
    id: 'lm-shorts-006',
    slug: 'aeroflex-shorts',
    name: 'AeroFlex Shorts',
    brand: 'LuxeMotion',
    description:
      'Shorts ultraligeros con tejido repelente al agua, bolsillos sellados y cinturilla elástica plana para libertad total.',
    price: 150,
    colors: ['negro', 'oliva'],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop',
    ],
    tags: ['men'],
    inventory: 52,
    category: 'men',
  },
  {
    id: 'lm-jacket-007',
    slug: 'stormguard-windbreaker',
    name: 'StormGuard Windbreaker',
    brand: 'LuxeMotion',
    description:
      'Cortavientos de triple capa con membrana respirable, costuras selladas y acabado mate para una protección impecable.',
    imageMap: {
      pizarra: [
        'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
      ],
      arena: [
        'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop',
      ],
    },
    price: 320,
    colors: ['pizarra', 'arena'],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop',
    ],
    tags: ['featured'],
    inventory: 31,
    category: 'women',
  },
  {
    id: 'lm-shoe-008',
    slug: 'velocity-pro-trainer',
    name: 'Velocity Pro Trainer',
    brand: 'LuxeMotion',
    description:
      'Entrenadora versátil con amortiguación de retorno de energía y malla 3D. Estabilidad lateral y plantilla de confort antibacteriana.',
    price: 280,
    colors: ['negro', 'blanco'],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    images: [
      'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop',
    ],
    tags: ['footwear', 'best'],
    inventory: 48,
    category: 'footwear',
  },
  {
    id: 'lm-cap-009',
    slug: 'monogram-cap',
    name: 'Monogram Cap',
    brand: 'LuxeMotion',
    description:
      'Gorra con logo bordado, visera estructurada y banda interior absorbente para un ajuste premium.',
    imageMap: {
      negro: [
        'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
      ],
      marfil: [
        'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop',
      ],
    },
    price: 90,
    colors: ['negro', 'marfil'],
    sizes: ['TU'],
    images: [
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop',
    ],
    tags: ['accessories'],
    inventory: 120,
    category: 'accessories',
  },
  {
    id: 'lm-bag-010',
    slug: 'urban-gym-tote',
    name: 'Urban Gym Tote',
    brand: 'LuxeMotion',
    description:
      'Bolso deportivo premium con compartimento para calzado, forro impermeable y herrajes metálicos anodizados.',
    price: 240,
    colors: ['negro', 'pizarra'],
    sizes: ['TU'],
    images: [
      'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop',
    ],
    tags: ['accessories', 'best'],
    inventory: 64,
    category: 'accessories',
  },
  {
    id: 'lm-leggings-011',
    slug: 'luxe-sculpt-leggings',
    name: 'Luxe Sculpt Leggings',
    brand: 'LuxeMotion',
    description:
      'Leggings moldeadores con cintura alta, tejido opaco 4D stretch y soporte estratégico en caderas y glúteos.',
    price: 210,
    colors: ['negro', 'vino'],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
    ],
    tags: ['women'],
    inventory: 46,
    category: 'women',
  },
  {
    id: 'lm-socks-012',
    slug: 'cushion-pro-socks',
    name: 'Cushion Pro Socks',
    brand: 'LuxeMotion',
    description:
      'Calcetas con zonas amortiguadas, canales de ventilación y puño sin presión para uso prolongado.',
    price: 38,
    colors: ['negro', 'blanco'],
    sizes: ['S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop',
    ],
    tags: ['accessories'],
    inventory: 200,
    category: 'accessories',
  },
  {
    id: 'lm-track-013',
    slug: 'primefiber-track-pants',
    name: 'PrimeFiber Track Pants',
    brand: 'LuxeMotion',
    description:
      'Pantalón deportivo con forro de microfibra, ajuste cónico y cremalleras invisibles en tobillos.',
    price: 260,
    colors: ['pizarra', 'negro'],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop',
    ],
    tags: ['men'],
    inventory: 38,
    category: 'men',
  },
  {
    id: 'lm-bra-014',
    slug: 'aero-lift-bra',
    name: 'Aero Lift Bra',
    brand: 'LuxeMotion',
    description:
      'Top deportivo de alto impacto con soporte lateral, espalda ergonómica y tejido de secado rápido con tacto ultrasuave.',
    price: 175,
    colors: ['negro', 'marfil'],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=1600&auto=format&fit=crop',
    ],
    tags: ['women', 'best'],
    inventory: 57,
    category: 'women',
  },
];

export function getFeaturedProducts() {
  return PRODUCTS.filter((p) => p.featured);
}

export function getBestSellers() {
  return PRODUCTS.filter((p) => p.tags.includes('best'));
}

export function findBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}
