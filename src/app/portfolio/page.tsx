import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export const metadata = {
  title: 'Portfólio | FastFilms',
  description: 'Conheça nossos projetos de vídeo.',
};

const portfolioProjects = [
    { title: 'Curta-Metragem "Amanhecer"', description: 'Uma história emocionante sobre recomeços.', imageUrl: 'https://placehold.co/600x400', dataAiHint: 'short film emotional' },
    { title: 'Videoclipe "Noites de Verão"', description: 'Clipe vibrante para a banda Sol Poente.', imageUrl: 'https://placehold.co/600x400', dataAiHint: 'music video summer' },
    { title: 'Comercial TechCorp', description: 'Vídeo de lançamento para o novo smartphone da TechCorp.', imageUrl: 'https://placehold.co/600x400', dataAiHint: 'corporate commercial tech' },
    { title: 'Vídeo Institucional "Nossa História"', description: 'Documentário celebrando os 50 anos da empresa ABC.', imageUrl: 'https://placehold.co/600x400', dataAiHint: 'documentary history' },
];

export default function PortfolioPage() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Nosso Portfólio</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Aqui estão alguns dos projetos que tivemos o prazer de produzir. Cada vídeo é uma história que ajudamos a contar.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioProjects.map((project, index) => (
          <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
            <div className="relative h-64 w-full">
                <Image src={project.imageUrl} alt={project.title} fill className="rounded-t-lg object-cover transition-transform group-hover:scale-105" data-ai-hint={project.dataAiHint}/>
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
