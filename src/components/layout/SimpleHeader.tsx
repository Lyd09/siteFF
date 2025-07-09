'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { Separator } from '../ui/separator';

const CartDisplay = () => {
  const { cartItems, itemCount, subtotal } = useCart();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Carrinho de Compras"
          className="relative"
        >
          <ShoppingCart className="h-6 w-6" />
          {itemCount > 0 && (
            <Badge
              variant="default"
              className="absolute -top-2 -right-2 h-6 w-6 rounded-full flex items-center justify-center p-0"
            >
              {itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Seu Carrinho</SheetTitle>
        </SheetHeader>
        {cartItems.length > 0 ? (
          <>
            <div className="flex-grow overflow-y-auto -mr-6 pr-6 mt-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="rounded-md object-cover aspect-square"
                  />
                  <div className="flex-grow">
                    <p className="font-semibold leading-tight">{item.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.price}
                    </p>
                  </div>
                  <p className="font-semibold">x{item.quantity}</p>
                </div>
              ))}
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between items-center text-lg font-semibold px-1">
              <span>Subtotal</span>
              <span>
                {subtotal.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>
            <SheetFooter className="mt-4">
              <Button className="w-full">Continuar Compra</Button>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground">Seu carrinho está vazio.</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

const SimpleHeader = ({ showCart = false }: { showCart?: boolean }) => {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors"
        >
          <Image
            src="/FF-COM-FUNDO-CINZA.svg"
            alt="FastFilms Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <div className="shine">FastFilms</div>
        </Link>
        {showCart && <CartDisplay />}
      </div>
    </header>
  );
};

export default SimpleHeader;
