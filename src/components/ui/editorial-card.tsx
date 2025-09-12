import Image from 'next/image';
import Link from 'next/link';
import type { UrlObject } from 'url';
import type { Route } from 'next';

export function EditorialCard({
  href,
  title,
  subtitle,
  image,
}: {
  href: Route | UrlObject;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/40"
    >
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/60 px-3 py-1 text-xs tracking-wide text-slate-200 backdrop-blur">
          NUEVO
        </div>
        <h3 className="mt-3 text-2xl font-medium text-slate-100">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-slate-300">{subtitle}</p>}
      </div>
    </Link>
  );
}
