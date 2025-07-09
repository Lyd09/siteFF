'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const editionPacks = [
  {
    title: 'Pack de Transições Cinematográficas',
    description: '100 transições suaves para dar um toque profissional aos seus vídeos.',
    price: 'R$ 49,90',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'video transitions',
  },
  {
    title: 'Coleção de Trilhas Sonoras Épicas',
    description: 'Músicas livres de royalties para criar a atmosfera perfeita.',
    price: 'R$ 79,90',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'music production',
  },
  {
    title: 'Pacote de Efeitos Sonoros Essenciais',
    description: 'De "whooshes" a "dings", tudo que você precisa para sound design.',
    price: 'R$ 39,90',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'sound effects',
  },
];

export default function PacksPage() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        setIsDialogOpen(true);
    }, []);

  return (
    <>
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Em Breve!</AlertDialogTitle>
            <AlertDialogDescription>
              Nossa loja de packs para edição está quase pronta. Volte em breve para conferir as novidades!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Fechar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-headline">Nossos Packs</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ferramentas criadas por editores, para editores. Otimize seu fluxo de trabalho e eleve a qualidade das suas produções.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {editionPacks.map((pack, index) => (
          <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <CardHeader className="p-0">
              <div className="relative w-full aspect-video">
                <Image
                  src={pack.imageUrl}
                  alt={`Imagem para ${pack.title}`}
                  fill
                  className="object-cover"
                  data-ai-hint={pack.dataAiHint}
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <CardTitle className="font-headline text-xl mb-2">{pack.title}</CardTitle>
              <p className="text-muted-foreground text-sm">{pack.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between items-center">
              <p className="text-lg font-bold text-primary">{pack.price}</p>
              <Button disabled>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Comprar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
