'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShow(y > 600);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-[70] inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-700/60 bg-slate-900/80 text-slate-200 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur transition-all hover:translate-y-[-2px] hover:border-gold hover:text-gold"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
