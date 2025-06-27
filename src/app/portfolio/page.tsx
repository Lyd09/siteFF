import React from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react';

export const metadata = {
  title: 'Portfólio | FastFilms',
  description: 'Conheça nossos projetos de vídeo.',
};

const portfolioProjects = [
    {
        title: 'Vídeo "Onde o tempo respira" para Fazenda do Moinho',
        imageUrl: '/Portfolio/RESPIRA.png',
        videoUrl: 'https://www.instagram.com/_fastfilms_/reel/DGGx-zExFu4/',
        dataAiHint: 'farm lifestyle video',
    },
    {
        title: 'Gravação de uma casa de R$15.000.000,00 no Condomínio Estâncias das Amendoeiras',
        imageUrl: '/Portfolio/IMOBILIÁRIO.png',
        videoUrl: 'https://www.instagram.com/_fastfilms_/reel/DGGx-zExFu4/',
        dataAiHint: 'luxury real estate',
    },
    {
        title: 'Gravação no mercado imobiliário no Condomínio Retiro das Águas',
        imageUrl: '/Portfolio/CASA%2015M.png',
        videoUrl: 'https://www.instagram.com/_fastfilms_/reel/DGGx-zExFu4/',
        dataAiHint: 'real estate market video',
    },
    {
        title: 'Dia de gravação no Condomínio Estância das Amendoeiras',
        imageUrl: '/Portfolio/GRAVAÇÃO.png',
        videoUrl: 'https://www.instagram.com/_fastfilms_/reel/DGGx-zExFu4/',
        dataAiHint: 'real estate recording',
    },
    {
        title: 'Vídeo institucional sobre investimentos',
        imageUrl: '/Portfolio/INVESTIMENTO.png',
        videoUrl: 'https://www.instagram.com/reel/DLaHI3LuUg7/?utm_source=ig_web_copy_link&igsh=MXdqazN3cmpnejVxMA==',
        dataAiHint: 'investment video',
    },
];

export default function PortfolioPage() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Nosso Portfólio</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Tudo aqui passou pelo nosso crivo criativo (e por umas boas horas de render)
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {portfolioProjects.map((project, index) => (
          <Link key={index} href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="block group">
            <Card className="overflow-hidden relative aspect-[9/16] rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image 
                src={project.imageUrl} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={project.dataAiHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <PlayCircle className="w-20 h-20 text-white/80" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
