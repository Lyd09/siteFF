import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

export const metadata = {
  title: 'Clientes | FastFilms',
  description: 'Veja quem confia em nosso trabalho.',
};

const testimonials = [
  { name: 'Ana Souza', company: 'TechCorp', quote: 'A FastFilms superou nossas expectativas. O vídeo corporativo que produziram foi um sucesso absoluto!', avatar: 'https://placehold.co/100x100', dataAiHint: 'woman portrait' },
  { name: 'Marcos Rocha', company: 'Banda Sol Poente', quote: 'O videoclipe ficou incrível! A equipe captou a energia da nossa música perfeitamente.', avatar: 'https://placehold.co/100x100', dataAiHint: 'man portrait' },
  { name: 'Juliana Lima', company: 'Café Sabor', quote: 'Profissionalismo e criatividade do início ao fim. Recomendo a todos!', avatar: 'https://placehold.co/100x100', dataAiHint: 'woman smiling' },
  { name: 'Pedro Martins', company: 'Diretor de Cinema', quote: 'Trabalhar com a FastFilms no meu curta-metragem foi uma experiência fantástica. Talento puro.', avatar: 'https://placehold.co/100x100', dataAiHint: 'man glasses' },
]

export default function ClientesPage() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Gente que Confia na Gente</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        O sucesso dos nossos clientes é o nosso maior prêmio. Veja o que alguns deles têm a dizer sobre nossa parceria.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" />)}
              </div>
              <blockquote className="italic text-foreground flex-grow">"{testimonial.quote}"</blockquote>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
