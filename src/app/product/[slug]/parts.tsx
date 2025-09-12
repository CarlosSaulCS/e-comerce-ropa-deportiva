'use client';

import { useCartStore } from '@/store/cart';
import type { Product } from '@/data/products';
import { toast } from 'sonner';
import { useState } from 'react';
import { ImageGallery } from '@/components/product/image-gallery';

const COLOR_MAP: Record<string, string> = {
  negro: '#0f172a',
  black: '#0f172a',
  blanco: '#e2e8f0',
  white: '#e2e8f0',
  pizarra: '#334155',
  gris: '#64748b',
  arena: '#d6d3d1',
  marfil: '#f5f5f4',
  vino: '#7f1d1d',
  oliva: '#365314',
};

export function VariantSelector({
  product,
  onChange,
}: {
  product: Product;
  onChange: (v: { size?: string; color?: string }) => void;
}) {
  const [size, setSize] = useState<string | undefined>();
  const [color, setColor] = useState<string | undefined>();
  return (
    <div className="space-y-6">
      {!!product.sizes.length && (
        <div>
          <div className="mb-2 text-sm text-slate-300">Talla</div>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                  size === s
                    ? 'border-gold bg-slate-800/60 text-gold'
                    : 'border-slate-600 text-slate-300 hover:border-slate-500'
                }`}
                aria-pressed={size === s}
                title={`Talla ${s}`}
                onClick={() => {
                  const next = size === s ? undefined : s;
                  setSize(next);
                  onChange({ size: next, color });
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
      {!!product.colors.length && (
        <div>
          <div className="mb-2 text-sm text-slate-300">Color</div>
          <div className="flex flex-wrap gap-3">
            {product.colors.map((c) => (
              <button
                key={c}
                className={`relative inline-flex h-8 w-8 items-center justify-center rounded-full border transition ${
                  color === c ? 'border-gold' : 'border-slate-600 hover:border-slate-500'
                }`}
                aria-pressed={color === c}
                title={`Color ${c}`}
                onClick={() => {
                  const next = color === c ? undefined : c;
                  setColor(next);
                  onChange({ size, color: next });
                }}
              >
                <span
                  className="absolute inset-1 rounded-full"
                  style={{ backgroundColor: COLOR_MAP[c.toLowerCase()] ?? '#64748b' }}
                />
                {color === c && (
                  <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-gold/70" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function AddToCartButton({
  product,
  size,
  color,
}: {
  product: Product;
  size?: string;
  color?: string;
}) {
  const add = useCartStore((s) => s.add);
  const disabled = Boolean((product.sizes.length && !size) || (product.colors.length && !color));
  return (
    <button
      className="btn btn-primary disabled:opacity-50"
      disabled={disabled}
      onClick={() => {
        add({
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          qty: 1,
          size,
          color,
        });
        toast.success('Añadido al carrito');
      }}
    >
      Añadir al carrito
    </button>
  );
}

export function ProductActions({ product }: { product: Product }) {
  const [variant, setVariant] = useState<{ size?: string; color?: string }>({});
  return (
    <div className="space-y-6">
      <VariantSelector product={product} onChange={setVariant} />
      <AddToCartButton product={product} size={variant.size} color={variant.color} />
    </div>
  );
}

export function ProductInteractive({ product }: { product: Product }) {
  const [variant, setVariant] = useState<{ size?: string; color?: string }>({});
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div className="space-y-4">
        <ImageGallery
          images={product.images}
          alt={product.name}
          imagesByColor={product.imageMap as Record<string, string[]> | undefined}
          activeColor={variant.color}
        />
      </div>
      <div>
        <h1 className="heading">{product.name}</h1>
        <p className="mt-2 text-slate-400">{product.brand}</p>
        <div className="mt-4 text-2xl text-gold">${product.price}</div>
        <p className="mt-6 text-slate-300">{product.description}</p>
        <div className="mt-8 space-y-6">
          <VariantSelector product={product} onChange={setVariant} />
          <AddToCartButton product={product} size={variant.size} color={variant.color} />
          {/* Details / Materials */}
          <div className="mt-8 space-y-3">
            <details className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-4">
              <summary className="cursor-pointer list-none text-sm font-medium text-slate-200">
                Detalles y materiales
              </summary>
              <div className="mt-3 text-sm text-slate-300">
                - Tejidos técnicos premium con elasticidad en 4 direcciones.
                <br />- Costuras planas termoselladas para evitar rozaduras.
                <br />- Acabado antibacteriano y control de humedad.
              </div>
            </details>
            <details className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-4">
              <summary className="cursor-pointer list-none text-sm font-medium text-slate-200">
                Envío y devoluciones
              </summary>
              <div className="mt-3 text-sm text-slate-300">
                Envío premium gratuito a partir de $250. Cambios y devoluciones extendidos a 45
                días.
              </div>
            </details>
            <details className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-4">
              <summary className="cursor-pointer list-none text-sm font-medium text-slate-200">
                Cuidado
              </summary>
              <div className="mt-3 text-sm text-slate-300">
                Lavar a máquina en frío con colores similares. No usar suavizante. Secar a la
                sombra.
              </div>
            </details>
          </div>
        </div>
      </div>
      {/* Sticky mobile add-to-cart */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 p-4 md:hidden">
        <div className="pointer-events-auto rounded-2xl border border-slate-700/50 bg-slate-900/80 p-3 backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-sm font-medium text-slate-200">{product.name}</div>
              <div className="text-gold">${product.price}</div>
            </div>
            <AddToCartButton product={product} size={variant.size} color={variant.color} />
          </div>
        </div>
      </div>
    </div>
  );
}
