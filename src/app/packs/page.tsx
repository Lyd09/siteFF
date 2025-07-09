'use client';

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Zap, Clock, Star } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';

const features = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Economize Tempo Precioso',
    description: 'Chega de passar horas procurando o efeito certo ou a trilha perfeita. Nossos packs são organizados e prontos para arrastar e soltar na sua timeline.',
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: 'Qualidade Profissional, Sem Complicação',
    description: 'Dê aos seus vídeos o acabamento que eles merecem. Efeitos, transições e sons que elevam sua produção instantaneamente, mesmo que você esteja começando.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Custo Acessível, Valor Gigante',
    description: 'Invista em você sem pesar no bolso. Nossos packs low-ticket são o atalho perfeito para construir um portfólio de impacto e conquistar seus primeiros clientes.',
  },
];

const editionPacks = [
  {
    id: 'pack-transicoes',
    title: 'Pack de Transições Cinematográficas',
    description: '100 transições suaves para dar um toque profissional aos seus vídeos.',
    price: 'R$ 19,90',
    imageUrl: '/Packs/Transitions.svg',
    dataAiHint: 'video transitions',
  },
  {
    id: 'colecao-trilhas',
    title: 'Coleção de Trilhas Sonoras Épicas',
    description: 'Músicas livres de royalties para criar a atmosfera perfeita.',
    price: 'R$ 19,90',
    imageUrl: '/Packs/Soundtracks.svg',
    dataAiHint: 'music production',
  },
  {
    id: 'pacote-efeitos',
    title: 'Pacote de Efeitos Sonoros Essenciais',
    description: 'De "whooshes" a "dings", tudo que você precisa para sound design.',
    price: 'R$ 19,90',
    imageUrl: '/Packs/SoundEffects.svg',
    dataAiHint: 'sound effects',
  },
];

const upsellMap: { [key: string]: (typeof editionPacks[0]) } = {
  'pack-transicoes': editionPacks[1], // offer soundtracks
  'colecao-trilhas': editionPacks[2], // offer sound effects
  'pacote-efeitos': editionPacks[0], // offer transitions
};

export default function PacksPage() {
  const { addToCart, cartItems } = useCart();
  const { toast } = useToast();

  const handleUpsellAddToCart = (pack: (typeof editionPacks)[0]) => {
    const discountedPack = {
      ...pack,
      id: `${pack.id}-oferta`,
      title: `${pack.title} (Oferta)`,
      price: 'R$ 9,90',
    };
    addToCart(discountedPack);
    toast({
      title: 'Oferta Adicionada!',
      description: `${discountedPack.title} foi adicionado ao seu carrinho.`,
    });
  };

  const handleAddToCart = (pack: (typeof editionPacks)[0]) => {
    addToCart(pack);

    const upsellPack = upsellMap[pack.id];
    if (!upsellPack) {
      toast({
        title: 'Item Adicionado!',
        description: `${pack.title} foi adicionado ao seu carrinho.`,
      });
      return;
    };
    
    const isUpsellPackInCart = cartItems.some(item => item.id === upsellPack.id || item.id === `${upsellPack.id}-oferta`);
    
    if (isUpsellPackInCart) {
        toast({
            title: 'Item Adicionado!',
            description: `${pack.title} foi adicionado ao seu carrinho.`,
        });
    } else {
        toast({
            title: '🎉 Oferta Especial Para Você!',
            description: `Aproveite e leve também: ${upsellPack.title} por apenas R$ 9,90!`,
            duration: 10000,
            action: (
            <ToastAction
                altText={`Adicionar ${upsellPack.title} por R$ 9,90`}
                onClick={() => handleUpsellAddToCart(upsellPack)}
            >
                Adicionar por R$ 9,90
            </ToastAction>
            ),
        });
    }
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-headline">Dê um Salto na Sua Edição</h1>
        <p className="text-muted-foreground mb-12 max-w-3xl mx-auto">
          Sabemos que começar pode ser um desafio. Milhares de arquivos, tutoriais sem fim e a pressão para entregar um trabalho profissional. É por isso que criamos nossos packs: para que você pule a parte chata e vá direto para a criatividade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <Card key={index} className="bg-card/50 border-dashed text-center p-4">
            <CardHeader>
              <div className="mx-auto bg-accent/10 p-3 rounded-full w-fit mb-2">
                {feature.icon}
              </div>
              <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-8 md:my-16" />

      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-headline">Nossos Packs</h2>
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
              <Button onClick={() => handleAddToCart(pack)}>
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
