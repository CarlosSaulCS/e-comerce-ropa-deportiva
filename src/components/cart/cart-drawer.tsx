'use client';

import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { useCartStore, useCartSubtotal } from '@/store/cart';

export function CartDrawer({ children }: { children: React.ReactNode }) {
  const items = useCartStore((s) => s.items);
  const remove = useCartStore((s) => s.remove);
  const updateQty = useCartStore((s) => s.updateQty);
  const subtotal = useCartSubtotal();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 transition-opacity duration-300 data-[state=closed]:opacity-0 data-[state=open]:opacity-100" />
        <Dialog.Content
          aria-label="Carrito"
          className="fixed right-0 top-0 z-50 h-full w-full max-w-md translate-x-full overflow-auto border-l border-slate-700/50 bg-slate-900 p-6 shadow-xl transition-transform duration-300 data-[state=closed]:translate-x-full data-[state=open]:translate-x-0"
        >
          <div className="mb-4 flex items-center justify-between">
            <Dialog.Title className="text-lg font-medium">Carrito</Dialog.Title>
            <Dialog.Close asChild>
              <button aria-label="Cerrar carrito">
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>

          {items.length === 0 ? (
            <div className="py-12 text-center text-slate-400">Tu carrito está vacío.</div>
          ) : (
            <div className="space-y-4">
              {items.map((it) => (
                <div key={it.id} className="flex gap-3 rounded-lg border border-slate-700/50 p-3">
                  <div className="relative h-16 w-16 overflow-hidden rounded-md">
                    <Image src={it.image} alt={it.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-2">
                    <div>
                      <div className="text-sm font-medium">{it.name}</div>
                      <div className="text-xs text-slate-400">
                        {it.color} {it.size}
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-xs">
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
                      <button onClick={() => remove(it.id)} className="mt-2 text-xs text-red-300">
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="sticky bottom-0 mt-6 border-t border-slate-700/50 bg-slate-900 pt-4">
            <div className="flex items-center justify-between text-sm">
              <span>Subtotal</span>
              <span className="text-gold">${subtotal}</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Envío y tasas se calculan en el checkout.</p>
            <div className="mt-4 flex gap-3">
              <Dialog.Close asChild>
                <Link href="/cart" className="btn flex-1 border border-slate-600 text-center">
                  Ver carrito
                </Link>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Link href="/checkout" className="btn btn-primary flex-1 text-center">
                  Checkout
                </Link>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
