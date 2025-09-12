'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const OPTIONS = [
  { key: 'featured', label: 'Destacados' },
  { key: 'price-asc', label: 'Precio: menor a mayor' },
  { key: 'price-desc', label: 'Precio: mayor a menor' },
];

export function SortBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const value = searchParams.get('sort') ?? 'featured';

  function onChange(next: string) {
    const params = new URLSearchParams(searchParams);
    if (next === 'featured') params.delete('sort');
    else params.set('sort', next);
    router.replace({ pathname, query: Object.fromEntries(params) } as any);
  }

  return (
    <div className="text-sm text-slate-300">
      Ordenar:{' '}
      <select
        className="rounded-md border border-slate-600 bg-slate-800 p-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {OPTIONS.map((o) => (
          <option key={o.key} value={o.key}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
