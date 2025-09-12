'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useState, useTransition } from 'react';

type Props = {
  categories: string[];
  sizes: string[];
  colors: string[];
};

export function FilterSidebar({ categories, sizes, colors }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const selected = useMemo(() => {
    const cat = searchParams.get('category') ?? '';
    const sz = (searchParams.get('sizes') ?? '').split(',').filter(Boolean);
    const cl = (searchParams.get('colors') ?? '').split(',').filter(Boolean);
    const min = Number(searchParams.get('min') ?? '0');
    const max = Number(searchParams.get('max') ?? '9999');
    return { cat, sz, cl, min, max };
  }, [searchParams]);

  const [min, setMin] = useState<number>(selected.min);
  const [max, setMax] = useState<number>(selected.max);

  function updateParams(next: Record<string, string | undefined>) {
    const params = new URLSearchParams(searchParams);
    Object.entries(next).forEach(([k, v]) => {
      if (v === undefined || v === '') params.delete(k);
      else params.set(k, v);
    });
    startTransition(() => router.replace({ pathname, query: Object.fromEntries(params) } as any));
  }

  function toggleCSVParam(key: string, value: string) {
    const current = (searchParams.get(key) ?? '').split(',').filter(Boolean);
    const exists = current.includes(value);
    const next = exists ? current.filter((v) => v !== value) : [...current, value];
    updateParams({ [key]: next.join(',') || undefined });
  }

  return (
    <aside className="rounded-2xl border border-slate-700/50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-medium">Filtros</h3>
        {isPending && <span className="text-xs text-slate-400">Actualizando…</span>}
      </div>
      <div className="space-y-6 text-sm">
        <div>
          <div className="mb-2 font-medium">Categoría</div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                className={`rounded-full border px-3 py-1 ${selected.cat === c ? 'border-gold text-gold' : 'border-slate-600 text-slate-300'}`}
                onClick={() => updateParams({ category: selected.cat === c ? undefined : c })}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-2 font-medium">Tallas</div>
          <div className="flex flex-wrap gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                className={`rounded-full border px-3 py-1 ${selected.sz.includes(s) ? 'border-gold text-gold' : 'border-slate-600 text-slate-300'}`}
                onClick={() => toggleCSVParam('sizes', s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-2 font-medium">Colores</div>
          <div className="flex flex-wrap gap-2">
            {colors.map((c) => (
              <button
                key={c}
                className={`rounded-full border px-3 py-1 ${selected.cl.includes(c) ? 'border-gold text-gold' : 'border-slate-600 text-slate-300'}`}
                onClick={() => toggleCSVParam('colors', c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-2 font-medium">Precio</div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              className="w-24 rounded-md border border-slate-600 bg-slate-800 p-1"
              value={min}
              onChange={(e) => setMin(Number(e.target.value))}
              onBlur={() => updateParams({ min: String(min) })}
              placeholder="Min"
            />
            <span className="text-slate-500">—</span>
            <input
              type="number"
              className="w-24 rounded-md border border-slate-600 bg-slate-800 p-1"
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
              onBlur={() => updateParams({ max: String(max) })}
              placeholder="Max"
            />
          </div>
        </div>
        <div>
          <button
            className="rounded-full border border-slate-600 px-4 py-2 text-sm"
            onClick={() => startTransition(() => router.replace({ pathname } as any))}
          >
            Limpiar filtros
          </button>
        </div>
      </div>
    </aside>
  );
}
