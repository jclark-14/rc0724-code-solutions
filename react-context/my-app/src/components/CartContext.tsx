import { createContext } from 'react';
import { type Product } from '../lib';
import { useState } from 'react';

export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

const defaultCartValue: CartValue = {
  cart: [],
  addToCart: () => undefined,
};

export const CartContext = createContext(defaultCartValue);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const addToCart = (product: Product) =>
    setCart((prevCart) => [...prevCart, product]);
  const cardContextValues = {
    cart,
    addToCart,
  };
  return (
    <CartContext.Provider value={cardContextValues}>
      {children}
    </CartContext.Provider>
  );
}
