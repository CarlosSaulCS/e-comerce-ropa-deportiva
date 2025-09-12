import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/data/products';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="hover-glow overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/50 transition-transform duration-300 hover:-translate-y-0.5">
        <div className="relative aspect-[4/5]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt="Vista alternativa"
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium">{product.name}</h3>
            <span className="text-gold">${product.price}</span>
          </div>
          <p className="mt-1 text-sm text-slate-400">{product.brand}</p>
        </div>
      </div>
    </Link>
  );
}
