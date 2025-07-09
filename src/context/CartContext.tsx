'use client';

import React, { createContext, useState, useContext, ReactNode, useMemo } from 'react';

export interface CartItem {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  itemCount: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const parsePrice = (price: string): number => {
    return parseFloat(price.replace('R$', '').trim().replace('.', '').replace(',', '.'));
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (itemToAdd: Omit<CartItem, 'quantity'>) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === itemToAdd.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === itemToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...itemToAdd, quantity: 1 }];
    });
  };

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const price = parsePrice(item.price);
      return total + price * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, itemCount, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
