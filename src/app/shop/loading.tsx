export default function Loading() {
  return (
    <div className="container-luxe py-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <div className="h-8 w-40 rounded bg-slate-800/50" />
          <div className="mt-2 h-4 w-64 rounded bg-slate-800/40" />
        </div>
        <div className="h-9 w-40 rounded bg-slate-800/50" />
      </div>
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-8 rounded bg-slate-800/40" />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/40"
            >
              <div className="aspect-[4/5] bg-slate-800/50" />
              <div className="p-4">
                <div className="h-5 w-2/3 rounded bg-slate-800/50" />
                <div className="mt-2 h-4 w-24 rounded bg-slate-800/40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
