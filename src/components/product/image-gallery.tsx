'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

export function ImageGallery({
  images,
  alt,
  imagesByColor,
  activeColor,
}: {
  images: string[];
  alt: string;
  imagesByColor?: Record<string, string[]>;
  activeColor?: string;
}) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [pinching, setPinching] = useState(false);
  const [startScale, setStartScale] = useState(1);
  const [pinchStartDist, setPinchStartDist] = useState<number | null>(null);
  const [lastX, setLastX] = useState<number | null>(null);
  const [lastY, setLastY] = useState<number | null>(null);
  const [swipeStartX, setSwipeStartX] = useState<number | null>(null);
  const [swipeDeltaX, setSwipeDeltaX] = useState(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const gallery = (imagesByColor && activeColor && imagesByColor[activeColor]) || images;
  const current = gallery[index] ?? gallery[0];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(gallery.length - 1, i + 1));
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(0, i - 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, gallery.length]);

  useEffect(() => {
    setIndex(0);
    resetTransform();
  }, [activeColor]);

  const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));
  const resetTransform = () => {
    setScale(1);
    setTx(0);
    setTy(0);
    setDragging(false);
    setPinching(false);
    setPinchStartDist(null);
    setLastX(null);
    setLastY(null);
    setSwipeStartX(null);
    setSwipeDeltaX(0);
  };

  const boundTranslate = (nx: number, ny: number) => {
    const el = viewportRef.current;
    if (!el) return { x: nx, y: ny };
    const rect = el.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const maxX = (Math.max(1, scale) - 1) * (w / 2);
    const maxY = (Math.max(1, scale) - 1) * (h / 2);
    return { x: clamp(nx, -maxX, maxX), y: clamp(ny, -maxY, maxY) };
  };

  const onDoubleClick = () => {
    if (scale > 1) {
      resetTransform();
    } else {
      setScale(1.6);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const [a, b] = [e.touches[0], e.touches[1]];
      const dist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      setPinching(true);
      setPinchStartDist(dist);
      setStartScale(scale);
    } else if (e.touches.length === 1) {
      const t = e.touches[0];
      setLastX(t.clientX);
      setLastY(t.clientY);
      setSwipeStartX(t.clientX);
      setSwipeDeltaX(0);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchStartDist) {
      e.preventDefault();
      const [a, b] = [e.touches[0], e.touches[1]];
      const dist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      const next = clamp((dist / pinchStartDist) * startScale, 1, 2.5);
      setScale(next);
    } else if (e.touches.length === 1) {
      const t = e.touches[0];
      if (scale > 1 && lastX != null && lastY != null) {
        e.preventDefault();
        const nx = tx + (t.clientX - lastX);
        const ny = ty + (t.clientY - lastY);
        const bounded = boundTranslate(nx, ny);
        setTx(bounded.x);
        setTy(bounded.y);
        setLastX(t.clientX);
        setLastY(t.clientY);
      } else if (scale === 1 && swipeStartX != null) {
        setSwipeDeltaX(t.clientX - swipeStartX);
      }
    }
  };

  const onTouchEnd = () => {
    if (scale === 1 && swipeStartX != null) {
      if (swipeDeltaX < -60) setIndex((i) => Math.min(images.length - 1, i + 1));
      if (swipeDeltaX > 60) setIndex((i) => Math.max(0, i - 1));
    }
    setPinching(false);
    setPinchStartDist(null);
    setLastX(null);
    setLastY(null);
    setSwipeStartX(null);
    setSwipeDeltaX(0);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (scale === 1) return;
    setDragging(true);
    setLastX(e.clientX);
    setLastY(e.clientY);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging || lastX == null || lastY == null) return;
    const nx = tx + (e.clientX - lastX);
    const ny = ty + (e.clientY - lastY);
    const bounded = boundTranslate(nx, ny);
    setTx(bounded.x);
    setTy(bounded.y);
    setLastX(e.clientX);
    setLastY(e.clientY);
  };

  const onMouseUp = () => {
    setDragging(false);
    setLastX(null);
    setLastY(null);
  };

  const onWheel = (e: React.WheelEvent) => {
    if (!open) return;
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    const next = clamp(scale + delta, 1, 2.5);
    setScale(next);
  };

  const isAnimating = !dragging && !pinching;

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-700/50"
        aria-label="Ampliar imagen"
      >
        {/* Main image */}
        <Image
          key={current}
          src={current}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs text-white backdrop-blur">
          <Maximize2 className="h-3.5 w-3.5" />
          Ver
        </span>
      </button>

      {gallery.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {gallery.slice(0, 10).map((src, i) => (
            <button
              key={src + i}
              onClick={() => setIndex(i)}
              className={`relative aspect-square overflow-hidden rounded-lg border ${i === index ? 'border-gold' : 'border-slate-700/60'}`}
              aria-label={`Ver imagen ${i + 1}`}
            >
              <Image src={src} alt={`${alt} miniatura ${i + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <Dialog.Root
        open={open}
        onOpenChange={(v) => {
          setOpen(v);
          if (!v) resetTransform();
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm" />
          <Dialog.Content className="fixed inset-0 z-[61] flex flex-col">
            <div className="relative mx-auto mt-6 w-full max-w-6xl flex-1 px-4">
              <button
                className="absolute right-6 top-0 z-[62] inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/60 bg-slate-900/80 text-slate-200"
                aria-label="Cerrar"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
              <button
                className="absolute left-0 top-1/2 z-[62] -translate-y-1/2 rounded-full border border-slate-700/60 bg-slate-900/80 p-2 text-slate-200"
                aria-label="Anterior"
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                disabled={index === 0}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                className="absolute right-0 top-1/2 z-[62] -translate-y-1/2 rounded-full border border-slate-700/60 bg-slate-900/80 p-2 text-slate-200"
                aria-label="Siguiente"
                onClick={() => setIndex((i) => Math.min(gallery.length - 1, i + 1))}
                disabled={index === gallery.length - 1}
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="relative mx-auto h-[80vh] w-full overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900/50">
                <div
                  ref={viewportRef}
                  className="relative h-full w-full touch-none select-none"
                  onDoubleClick={onDoubleClick}
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                  onMouseDown={onMouseDown}
                  onMouseMove={onMouseMove}
                  onMouseUp={onMouseUp}
                  onMouseLeave={onMouseUp}
                  onWheel={onWheel}
                >
                  <Image
                    key={`lb-${current}-${scale}-${tx}-${ty}`}
                    src={current}
                    alt={alt}
                    fill
                    draggable={false}
                    className="object-contain"
                    sizes="(min-width: 1024px) 80vw, 100vw"
                    style={{
                      transform: `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`,
                      transition: isAnimating ? 'transform 200ms ease' : undefined,
                    }}
                  />
                </div>
                <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white">
                  {scale > 1
                    ? 'Arrastra para mover · Doble clic para alejar'
                    : 'Pellizca o doble clic para acercar'}
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
