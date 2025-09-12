'use client';

import Link from 'next/link';
import { ShoppingBag, Menu } from 'lucide-react';
import { useCartItemCount } from '@/store/cart';
import { useState } from 'react';
import { CartDrawer } from '@/components/cart/cart-drawer';

export function Navbar() {
  const count = useCartItemCount();
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-700/50 bg-slate-900/70 backdrop-blur">
      <div className="container-luxe flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
          <Link href="/" className="font-display text-xl tracking-tight">
            <span className="text-gold">Luxe</span>Motion
          </Link>
          <nav className="relative hidden items-center gap-6 text-sm md:flex">
            <Link className="nav-link" href={{ pathname: '/shop', query: { category: 'men' } }}>
              Hombre
            </Link>
            <Link className="nav-link" href={{ pathname: '/shop', query: { category: 'women' } }}>
              Mujer
            </Link>
            <Link
              className="nav-link"
              href={{ pathname: '/shop', query: { category: 'footwear' } }}
            >
              Calzado
            </Link>
            <Link
              className="nav-link"
              href={{ pathname: '/shop', query: { category: 'accessories' } }}
            >
              Accesorios
            </Link>
            <button
              className="rounded-full border border-slate-600 px-3 py-1"
              onMouseEnter={() => setMega(true)}
              onMouseLeave={() => setMega(false)}
              aria-haspopup="menu"
              aria-expanded={mega}
              aria-controls="mega-menu"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setMega((v) => !v);
                }
                if (e.key === 'ArrowDown') {
                  setMega(true);
                }
                if (e.key === 'Escape') {
                  setMega(false);
                }
              }}
            >
              Colecciones
            </button>
            {mega && (
              <div
                id="mega-menu"
                role="menu"
                aria-label="Colecciones"
                onMouseEnter={() => setMega(true)}
                onMouseLeave={() => setMega(false)}
                className="absolute left-0 top-full w-[680px] translate-y-2 rounded-b-2xl border border-slate-700/50 bg-slate-900/95 p-6 opacity-0 shadow-xl transition-all duration-200 ease-out data-[state=open]:translate-y-0 data-[state=open]:opacity-100"
                data-state={mega ? 'open' : 'closed'}
              >
                <div className="grid grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="mb-2 font-medium">Ropa</div>
                    <ul className="space-y-1 text-slate-300">
                      <li>
                        <Link href={{ pathname: '/shop', query: { category: 'men' } }}>Hombre</Link>
                      </li>
                      <li>
                        <Link href={{ pathname: '/shop', query: { category: 'women' } }}>
                          Mujer
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="mb-2 font-medium">Calzado</div>
                    <ul className="space-y-1 text-slate-300">
                      <li>
                        <Link href={{ pathname: '/shop', query: { category: 'footwear' } }}>
                          Running
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: '/shop', query: { category: 'footwear' } }}>
                          Entrenamiento
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="mb-2 font-medium">Accesorios</div>
                    <ul className="space-y-1 text-slate-300">
                      <li>
                        <Link href={{ pathname: '/shop', query: { category: 'accessories' } }}>
                          Gorras
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: '/shop', query: { category: 'accessories' } }}>
                          Bolsos
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <CartDrawer>
            <button className="relative" aria-label="Abrir carrito">
              <ShoppingBag className="h-6 w-6" />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-gold px-1 text-xs font-semibold text-black">
                  {count}
                </span>
              )}
            </button>
          </CartDrawer>
        </div>
      </div>
      {open && (
        <div className="border-t border-slate-700/50 bg-slate-900 md:hidden">
          <div className="container-luxe flex flex-col py-4 text-sm">
            <Link
              href={{ pathname: '/shop', query: { category: 'men' } }}
              onClick={() => setOpen(false)}
              className="py-2"
            >
              Hombre
            </Link>
            <Link
              href={{ pathname: '/shop', query: { category: 'women' } }}
              onClick={() => setOpen(false)}
              className="py-2"
            >
              Mujer
            </Link>
            <Link
              href={{ pathname: '/shop', query: { category: 'footwear' } }}
              onClick={() => setOpen(false)}
              className="py-2"
            >
              Calzado
            </Link>
            <Link
              href={{ pathname: '/shop', query: { category: 'accessories' } }}
              onClick={() => setOpen(false)}
              className="py-2"
            >
              Accesorios
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
