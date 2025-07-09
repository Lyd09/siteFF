import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const SimpleHeader = ({ showCart = false }: { showCart?: boolean }) => {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors">
          <Image
            src="/FF-COM-FUNDO-CINZA.svg"
            alt="FastFilms Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <div className="shine">FastFilms</div>
        </Link>
        {showCart && (
          <div className="flex items-center gap-4">
            <Button>Continuar Compra</Button>
            <Button variant="ghost" size="icon" aria-label="Carrinho de Compras">
                <ShoppingCart className="h-6 w-6" />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default SimpleHeader;
