'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCartStore, useCartSubtotal } from '@/store/cart';

const schema = z.object({
  fullName: z.string().min(2, 'Nombre requerido'),
  email: z.string().email('Email inválido'),
  address: z.string().min(5, 'Dirección requerida'),
  city: z.string().min(2, 'Ciudad requerida'),
  country: z.string().min(2, 'País requerido'),
  card: z.string().min(12, 'Tarjeta inválida'),
});

type FormData = z.infer<typeof schema>;

export default function CheckoutPage() {
  const subtotal = useCartSubtotal();
  const clear = useCartStore((s) => s.clear);
  const [orderId, setOrderId] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  if (orderId) {
    return (
      <div className="container-luxe py-16 text-center">
        <h1 className="heading">Gracias por tu compra</h1>
        <p className="mt-2 text-slate-400">Número de pedido: {orderId}</p>
      </div>
    );
  }

  return (
    <div className="container-luxe py-12">
      <h1 className="heading">Checkout</h1>
      <form
        className="mt-8 grid gap-10 md:grid-cols-[2fr_1fr]"
        onSubmit={handleSubmit(async (data) => {
          await new Promise((r) => setTimeout(r, 800));
          clear();
          setOrderId(
            'LM-' +
              Math.floor(Math.random() * 10_000)
                .toString()
                .padStart(4, '0'),
          );
          console.log('Order placed', data);
        })}
      >
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-700/50 p-6">
            <h2 className="text-lg font-medium">Envío</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-slate-300">Nombre completo</label>
                <input
                  className="mt-1 w-full rounded-md border border-slate-600 bg-slate-800 p-2"
                  {...register('fullName')}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-300">{errors.fullName.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input
                  className="mt-1 w-full rounded-md border border-slate-600 bg-slate-800 p-2"
                  {...register('email')}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-300">{errors.email.message}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-300">Dirección</label>
                <input
                  className="mt-1 w-full rounded-md border border-slate-600 bg-slate-800 p-2"
                  {...register('address')}
                />
                {errors.address && (
                  <p className="mt-1 text-xs text-red-300">{errors.address.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm text-slate-300">Ciudad</label>
                <input
                  className="mt-1 w-full rounded-md border border-slate-600 bg-slate-800 p-2"
                  {...register('city')}
                />
                {errors.city && <p className="mt-1 text-xs text-red-300">{errors.city.message}</p>}
              </div>
              <div>
                <label className="text-sm text-slate-300">País</label>
                <input
                  className="mt-1 w-full rounded-md border border-slate-600 bg-slate-800 p-2"
                  {...register('country')}
                />
                {errors.country && (
                  <p className="mt-1 text-xs text-red-300">{errors.country.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-700/50 p-6">
            <h2 className="text-lg font-medium">Pago</h2>
            <div className="mt-4">
              <label className="text-sm text-slate-300">Tarjeta</label>
              <input
                className="mt-1 w-full rounded-md border border-slate-600 bg-slate-800 p-2"
                placeholder="0000 0000 0000 0000"
                {...register('card')}
              />
              {errors.card && <p className="mt-1 text-xs text-red-300">{errors.card.message}</p>}
            </div>
          </div>
        </div>
        <aside className="rounded-xl border border-slate-700/50 p-6">
          <div className="flex items-center justify-between text-sm text-slate-300">
            <span>Total</span>
            <span className="text-gold">${subtotal}</span>
          </div>
          <button type="submit" disabled={isSubmitting} className="btn btn-primary mt-6 w-full">
            {isSubmitting ? 'Procesando…' : 'Confirmar pedido'}
          </button>
          <p className="mt-2 text-xs text-slate-500">
            Este es un checkout de demostración. No se realizan cobros reales.
          </p>
        </aside>
      </form>
    </div>
  );
}
