import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Cpu, Headphones, Keyboard, MemoryStick, Mic2, Monitor, Mouse, Video } from 'lucide-react';

export const metadata = {
  title: 'Estações de Trabalho | FastFilms',
  description: 'Conheça as máquinas por trás da nossa magia.',
};

const setups = [
  {
    title: "Estação de Edição Principal",
    user: "Setup 1",
    components: [
      { icon: <Cpu className="h-5 w-5" />, category: 'Processador', model: 'Ryzen 5 5600G' },
      { icon: <Video className="h-5 w-5" />, category: 'Placa de Vídeo', model: 'INNO3D NVIDIA GeForce RTX 4060 COMPACT 8GB' },
      { icon: <MemoryStick className="h-5 w-5" />, category: 'RAM', model: '32GB Asgard' },
      { icon: <Monitor className="h-5 w-5" />, category: 'Monitor 1', model: 'ASRock Phantom Gaming PG27FF1A 27" 165Hz IPS' },
      { icon: <Monitor className="h-5 w-5" />, category: 'Monitor 2', model: 'LG 23.8" 75Hz' },
      { icon: <Keyboard className="h-5 w-5" />, category: 'Teclado', model: 'SuperFrame PLAYER 1 Mecânico Switch Blue' },
      { icon: <Mouse className="h-5 w-5" />, category: 'Mouse', model: 'RED Dragon King Cobra M711-FPS-1' },
      { icon: <Mic2 className="h-5 w-5" />, category: 'Microfone', model: 'FIFINE A6T' },
      { icon: <Headphones className="h-5 w-5" />, category: 'Headset', model: 'Hyperx Cloud Stinger' },
    ]
  },
  {
    title: "Estação de Pós-produção e Suporte",
    user: "Setup 2",
    components: [
      { icon: <Cpu className="h-5 w-5" />, category: 'Processador', model: 'Intel Core i5 12400F' },
      { icon: <Video className="h-5 w-5" />, category: 'Placa de Vídeo', model: 'NVIDIA GeForce RTX 4060' },
      { icon: <MemoryStick className="h-5 w-5" />, category: 'RAM', model: '16GB' },
      { icon: <Monitor className="h-5 w-5" />, category: 'Monitor 1', model: 'ASUS 24" 144Hz' },
      { icon: <Monitor className="h-5 w-5" />, category: 'Monitor 2', model: 'Samsung 22" 60Hz' },
      { icon: <Keyboard className="h-5 w-5" />, category: 'Teclado', model: 'MOTOSPEED CK61' },
      { icon: <Mouse className="h-5 w-5" />, category: 'Mouse', model: 'Logitech G PRO' },
      { icon: <Mic2 className="h-5 w-5" />, category: 'Microfone', model: 'FIFINE A6T' },
      { icon: <Headphones className="h-5 w-5" />, category: 'Headset', model: 'Astro A10 - Logitech' },
    ]
  }
];

export default function EquipamentosPage() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-headline">Nossas Estações de Trabalho</h1>
        <p className="text-muted-foreground mb-12 max-w-3xl mx-auto">
          Para entregar resultados de alta performance, contamos com equipamentos à altura. Estes são os setups que dão vida aos nossos projetos, garantindo fluidez e qualidade máxima da captura à finalização.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {setups.map((setup, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow w-full flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{setup.title}</CardTitle>
              <CardDescription>{setup.user}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {setup.components.map((component, compIndex) => (
                  <li key={compIndex}>
                    <div className="flex items-center gap-4">
                      <div className="text-accent">
                        {component.icon}
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold">{component.category}</p>
                        <p className="text-sm text-muted-foreground">{component.model}</p>
                      </div>
                    </div>
                    {compIndex < setup.components.length - 1 && <Separator className="mt-4" />}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
