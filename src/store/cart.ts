'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartItem = {
  id: string; // product id + variant key
  productId: string;
  name: string;
  price: number;
  image: string;
  size?: string;
  color?: string;
  qty: number;
};

type State = {
  items: CartItem[];
};

type Actions = {
  add: (item: Omit<CartItem, 'id'>) => void;
  remove: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
};

export const useCartStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      items: [],
      add: (item) => {
        const key = `${item.productId}:${item.size ?? ''}:${item.color ?? ''}`;
        const existing = get().items.find((i) => i.id === key);
        if (existing) {
          set({ items: get().items.map((i) => (i.id === key ? { ...i, qty: i.qty + item.qty } : i)) });
        } else {
          set({ items: [...get().items, { ...item, id: key }] });
        }
      },
      remove: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
      updateQty: (id, qty) => set({ items: get().items.map((i) => (i.id === id ? { ...i, qty } : i)) }),
      clear: () => set({ items: [] })
    }),
    { name: 'luxemotion-cart' }
  )
);

export const cartSelectors = {
  subtotal: (s: State) => s.items.reduce((sum, i) => sum + i.price * i.qty, 0),
  totalItems: (s: State) => s.items.reduce((sum, i) => sum + i.qty, 0)
};

// Derivations for convenience hooks
export const useCartSubtotal = () => useCartStore((s) => cartSelectors.subtotal(s));
export const useCartItemCount = () => useCartStore((s) => cartSelectors.totalItems(s));
