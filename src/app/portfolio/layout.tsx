import SimpleHeader from '@/components/layout/SimpleHeader';
import React from 'react';

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SimpleHeader />
      <main className="flex-grow">{children}</main>
      <footer className="py-6 text-center text-muted-foreground text-sm border-t">
        © {new Date().getFullYear()} FastFilms. Todos os direitos reservados.
      </footer>
    </div>
  );
}
