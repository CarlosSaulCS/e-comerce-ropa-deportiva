export default function Loading() {
  return (
    <div className="container-luxe py-10">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-3">
          <div className="aspect-[4/5] rounded-2xl border border-slate-700/50 bg-slate-800/40" />
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg border border-slate-700/60 bg-slate-800/40"
              />
            ))}
          </div>
        </div>
        <div>
          <div className="h-8 w-2/3 rounded bg-slate-800/50" />
          <div className="mt-3 h-4 w-24 rounded bg-slate-800/50" />
          <div className="mt-4 h-7 w-28 rounded bg-slate-800/50" />
          <div className="mt-6 space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-4 w-full rounded bg-slate-800/40" />
            ))}
          </div>
          <div className="mt-8 h-10 w-48 rounded-full bg-slate-800/50" />
        </div>
      </div>
    </div>
  );
}
