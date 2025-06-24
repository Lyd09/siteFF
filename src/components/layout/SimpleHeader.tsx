import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const SimpleHeader = () => {
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
      </div>
    </header>
  );
};

export default SimpleHeader;
