'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="container-luxe py-24 text-center">
          <h2 className="heading">Algo salió mal</h2>
          <p className="mt-3 text-slate-400">Por favor, inténtalo de nuevo.</p>
          <div className="mt-6">
            <button className="btn btn-primary" onClick={() => reset()}>
              Reintentar
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
