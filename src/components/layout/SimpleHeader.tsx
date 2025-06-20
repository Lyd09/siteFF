import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const SimpleHeader = () => {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <svg
            aria-hidden="true"
            viewBox="0 0 80 80"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 md:w-10 md:h-10"
          >
            <rect width="80" height="80" className="fill-primary" />
            <rect x="20" y="10" width="40" height="60" rx="8" ry="8" className="fill-card" /> 
            <polygon points="38,18 65,18 46,42 65,62 46,62" className="fill-primary" />
            <rect x="43" y="33" width="10" height="10" className="fill-card" />
            <polygon points="45,35 52,35 45,42" className="fill-primary" />
          </svg>
          <span className="font-headline text-xl md:text-2xl font-bold">FastFilms</span>
        </Link>
        <Button variant="outline" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao Portfólio
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default SimpleHeader;
