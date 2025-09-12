'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function Pagination({ total, pageSize = 8 }: { total: number; pageSize?: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page') ?? '1');
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  function go(to: number) {
    const p = new URLSearchParams(searchParams);
    if (to <= 1) p.delete('page');
    else p.set('page', String(to));
    router.replace({ pathname, query: Object.fromEntries(p) } as any);
  }

  return (
    <div className="mt-8 flex items-center justify-center gap-2 text-sm">
      <button
        disabled={page <= 1}
        onClick={() => go(page - 1)}
        className="rounded-md border border-slate-600 px-3 py-1 disabled:opacity-40"
      >
        Anterior
      </button>
      <span className="text-slate-400">
        Página {page} de {totalPages}
      </span>
      <button
        disabled={page >= totalPages}
        onClick={() => go(page + 1)}
        className="rounded-md border border-slate-600 px-3 py-1 disabled:opacity-40"
      >
        Siguiente
      </button>
    </div>
  );
}
