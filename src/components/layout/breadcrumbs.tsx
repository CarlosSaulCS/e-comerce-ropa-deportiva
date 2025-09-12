import Link from 'next/link';
import type { UrlObject } from 'url';

export type Crumb = { name: string; href?: UrlObject };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${it.name}-${i}`} className="inline-flex items-center gap-1">
              {i > 0 && <span className="text-slate-600">/</span>}
              {isLast || !it.href ? (
                <span className="text-slate-300" aria-current="page">
                  {it.name}
                </span>
              ) : (
                <Link href={it.href} className="transition-colors hover:text-gold">
                  {it.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
