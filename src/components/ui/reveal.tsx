'use client';

import { useEffect, useRef, useState } from 'react';

export type RevealProps = {
  children: React.ReactNode;
  /** fade | left | right | scale | default (bottom) */
  variant?: 'fade' | 'left' | 'right' | 'scale' | 'bottom';
  /** Delay in ms before marking as visible once intersected */
  delay?: number;
  /** Intersection threshold */
  threshold?: number;
  /** Only animate on first appearance */
  once?: boolean;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export function Reveal({
  children,
  variant = 'bottom',
  delay = 0,
  threshold = 0.15,
  once = true,
  className,
  as = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current as Element | null;
    if (!el) return;
    if (visible && once) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (delay) {
              const id = window.setTimeout(() => setVisible(true), delay);
              return () => window.clearTimeout(id);
            }
            setVisible(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, once, threshold, visible]);

  const Comp = as as any;
  return (
    <Comp
      ref={ref as any}
      className={`reveal ${visible ? 'reveal-in' : ''} ${className ?? ''}`.trim()}
      data-variant={variant === 'bottom' ? undefined : variant}
    >
      {children}
    </Comp>
  );
}
