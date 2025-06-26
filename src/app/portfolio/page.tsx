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
        title: 'DIA DE/GRAVAÇÃO/CONDOMÍNIO ESTÂNCIA DAS AMENDOEIRAS',
        imageUrl: '/Portfolio/GRAVAÇÃO.png',
        videoUrl: 'https://www.instagram.com/_fastfilms_/reel/DGGx-zExFu4/',
        dataAiHint: 'real estate recording',
    },
    {
        title: 'GRAVAÇÃO DE UMA CASA DE/R$15.000.000,00/CONDOMÍNIO ESTÂNCIAS DAS AMENDOEIRAS',
        imageUrl: '/Portfolio/IMOBILIÁRIO.png',
        videoUrl: 'https://www.instagram.com/_fastfilms_/reel/DGGx-zExFu4/',
        dataAiHint: 'luxury real estate',
    },
    {
        title: 'GRAVAÇÃO NO MERCADO /IMOBBILIÁRIO/CONDOMÍNIO RETIRO DAS ÁGUAS',
        imageUrl: '/Portfolio/CASA%2015M.png',
        videoUrl: 'https://www.instagram.com/_fastfilms_/reel/DGGx-zExFu4/',
        dataAiHint: 'real estate market video',
    },
    {
        title: 'ONDE O TEMPO/RESPIRA /FAZENDA DO MOINHO • HECTARES PREMIUM',
        imageUrl: '/Portfolio/RESPIRA.png',
        videoUrl: 'https://www.instagram.com/_fastfilms_/reel/DGGx-zExFu4/',
        dataAiHint: 'farm lifestyle video',
    },
];

export default function PortfolioPage() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Nosso Portfólio</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Aqui estão alguns dos projetos que tivemos o prazer de produzir. Cada vídeo é uma história que ajudamos a contar.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {portfolioProjects.map((project, index) => (
          <Link key={index} href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="block group">
            <Card className="overflow-hidden relative aspect-[9/16] rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image 
                src={project.imageUrl} 
                alt={project.title.replaceAll('/', ' ')} 
                fill 
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={project.dataAiHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                 <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <PlayCircle className="w-20 h-20 text-white/80" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h2 className="text-white font-headline text-xl lg:text-2xl leading-tight drop-shadow-lg">
                    {project.title.split('/').map((line, i) => (
                        <span key={i} className="block">
                        {line.trim()}
                        </span>
                    ))}
                    </h2>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}