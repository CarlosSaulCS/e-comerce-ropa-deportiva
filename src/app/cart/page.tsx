'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore, useCartSubtotal } from '@/store/cart';

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const remove = useCartStore((s) => s.remove);
  const updateQty = useCartStore((s) => s.updateQty);
  const subtotal = useCartSubtotal();

  if (items.length === 0) {
    return (
      <div className="container-luxe py-16 text-center">
        <h1 className="heading">Tu carrito está vacío</h1>
        <p className="mt-2 text-slate-400">Descubre algo extraordinario para entrenar.</p>
        <Link href="/shop" className="btn btn-primary mt-6 inline-block">
          Ir a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="container-luxe py-12">
      <h1 className="heading">Carrito</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          {items.map((it) => (
            <div key={it.id} className="flex gap-4 rounded-xl border border-slate-700/50 p-3">
              <div className="relative h-24 w-24 overflow-hidden rounded-lg">
                <Image src={it.image} alt={it.name} fill className="object-cover" />
              </div>
              <div className="flex flex-1 items-center justify-between">
                <div>
                  <div className="font-medium">{it.name}</div>
                  <div className="text-sm text-slate-400">
                    {it.color} {it.size}
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <button
                      onClick={() => updateQty(it.id, Math.max(1, it.qty - 1))}
                      className="rounded-full border border-slate-600 px-2"
                    >
                      -
                    </button>
                    <span>{it.qty}</span>
                    <button
                      onClick={() => updateQty(it.id, it.qty + 1)}
                      className="rounded-full border border-slate-600 px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gold">${it.price * it.qty}</div>
                  <button onClick={() => remove(it.id)} className="mt-2 text-sm text-red-300">
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <aside className="rounded-xl border border-slate-700/50 p-6">
          <div className="flex items-center justify-between text-sm text-slate-300">
            <span>Subtotal</span>
            <span className="text-gold">${subtotal}</span>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            El envío y los impuestos se calculan en el checkout.
          </p>
          <Link href="/checkout" className="btn btn-primary mt-6 block text-center">
            Proceder al pago
          </Link>
        </aside>
      </div>
    </div>
  );
}
