import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Drone, Lightbulb, Mic2, Film } from 'lucide-react';

export const metadata = {
  title: 'Equipamentos | FastFilms',
  description: 'Conheça os equipamentos que usamos para dar vida às suas ideias.',
};

const equipmentList = [
  { title: 'Câmeras de Cinema', description: 'Utilizamos câmeras de ponta como RED e ARRI para garantir a máxima qualidade de imagem.', icon: <Camera className="h-10 w-10" /> },
  { title: 'Lentes Premium', description: 'Uma vasta seleção de lentes prime e zoom para criar a estética perfeita para cada cena.', icon: <Film className="h-10 w-10" /> },
  { title: 'Drones Cinematográficos', description: 'Capturamos imagens aéreas de tirar o fôlego com drones equipados com câmeras 4K.', icon: <Drone className="h-10 w-10" /> },
  { title: 'Iluminação Profissional', description: 'Kits de iluminação completos para controlar cada detalhe da luz e da sombra.', icon: <Lightbulb className="h-10 w-10" /> },
  { title: 'Captação de Áudio', description: 'Microfones shotgun, lapelas e gravadores de alta fidelidade para um som cristalino.', icon: <Mic2 className="h-10 w-10" /> },
];

export default function EquipamentosPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Nossos Equipamentos</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Acreditamos que a ferramenta certa faz toda a diferença. Por isso, investimos em equipamentos de última geração para entregar resultados excepcionais.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {equipmentList.map((item, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow text-center p-6 flex flex-col items-center">
            <div className="p-4 bg-accent/10 rounded-full mb-4 text-accent">
              {item.icon}
            </div>
            <CardHeader className="p-0">
              <CardTitle className="mb-2">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
