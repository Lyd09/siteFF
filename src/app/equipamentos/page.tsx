
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Cpu, Headphones, Keyboard, MemoryStick, Mic2, Monitor, Mouse, Video, Camera, Wand2, HardDrive, PackagePlus, Axis3d } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Equipamentos | FastFilms',
  description: 'Conheça as ferramentas e tecnologias que dão vida aos nossos projetos.',
};

const setups = [
  {
    title: "Workstation Ryzen",
    user: "Performance AMD para edição e renderização pesada.",
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
    title: "Workstation Intel",
    user: "Agilidade Intel para um fluxo de trabalho criativo e versátil.",
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
  },
  {
    title: "Galaxy Workstation",
    user: "Samsung Galaxy Book4: Mobilidade e performance para gravações e edições em campo.",
    imageUrl: '/Equipamentos/Galaxy2.svg',
    dataAiHint: 'samsung laptop',
    components: [
      { icon: <Cpu className="h-5 w-5" />, category: 'Processador', model: 'Intel Core i5-120U' },
      { icon: <Video className="h-5 w-5" />, category: 'Placa de Vídeo', model: 'NVIDIA GeForce MX570 (Dedicada)' },
      { icon: <MemoryStick className="h-5 w-5" />, category: 'RAM', model: '16GB LPDDR4x' },
      { icon: <HardDrive className="h-5 w-5" />, category: 'Armazenamento', model: '512GB NVMe SSD' },
      { icon: <Monitor className="h-5 w-5" />, category: 'Tela', model: '15.6" Full HD (1920x1080) IPS Antirreflexo' },
    ]
  },
  {
    title: "MacBook Workstation",
    user: "MacBook Air M1: A eficiência e o ecossistema Apple para edições e gerenciamento de projetos em qualquer lugar.",
    imageUrl: '/Equipamentos/Macbook2.svg',
    dataAiHint: 'apple macbook',
    components: [
      { icon: <Cpu className="h-5 w-5" />, category: 'Processador', model: 'Apple M1 (8-core CPU)' },
      { icon: <Video className="h-5 w-5" />, category: 'GPU', model: 'GPU de 7 núcleos (Integrada)' },
      { icon: <MemoryStick className="h-5 w-5" />, category: 'Memória Unificada', model: '8GB' },
      { icon: <HardDrive className="h-5 w-5" />, category: 'Armazenamento', model: '256GB SSD' },
      { icon: <Monitor className="h-5 w-5" />, category: 'Tela', model: '13.3" Retina com True Tone' },
    ]
  }
];

const mainEquipment = [
  {
    title: 'Câmera',
    icon: <Camera className="h-7 w-7" />,
    items: [
      { name: 'Sony A6500', description: 'Pequena no tamanho, gigante na entrega. Estabilização no corpo e 4K na veia pra capturar cada detalhe, mesmo em movimento.', imageUrl: '/Equipamentos/A6500.svg', dataAiHint: 'sony camera' },
    ]
  },
  {
    title: 'Áudio',
    icon: <Mic2 className="h-7 w-7" />,
    items: [
      { name: 'Hollyland LARK M2', description: 'Captura de voz cristalina até no improviso. Porque o áudio também conta história.', imageUrl: '/Equipamentos/Hollyland.svg', dataAiHint: 'wireless microphone' },
    ]
  },
  {
    title: 'Estabilização',
    icon: <Axis3d className="h-7 w-7" />,
    items: [
      { name: 'Gimbal Scorp Mini', description: 'Movimentos suaves e cenas cinematográficas na ponta dos dedos. Estabilidade profissional para takes dinâmicos.', imageUrl: 'https://placehold.co/400x300.png', dataAiHint: 'camera gimbal' },
    ]
  }
];

const softwareEquipment = {
  title: 'Software',
  icon: <Wand2 className="h-7 w-7" />,
  items: [
    { name: 'Adobe Premiere Pro', description: 'Se tem play no final, é porque teve Premiere no começo.', imageUrl: '/Equipamentos/premiere.svg', dataAiHint: 'premiere pro logo' },
    { name: 'Adobe After Effects', description: 'A mágica visual que o público vê, mas não imagina como foi feita.', imageUrl: '/Equipamentos/after%20effects.svg', dataAiHint: 'after effects logo' },
    { name: 'Adobe Photoshop', description: 'Para deixar tudo exatamente como imaginamos — ou melhor.', imageUrl: '/Equipamentos/photoshop.svg', dataAiHint: 'photoshop logo' },
    { name: 'Adobe Lightroom', description: 'Um toque nas cores, um ajuste na luz — e pronto: identidade.', imageUrl: '/Equipamentos/lightroom.svg', dataAiHint: 'lightroom logo' },
  ]
};

export default function EquipamentosPage() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-headline">Nossas Workstations</h1>
        <p className="text-muted-foreground mb-12 max-w-3xl mx-auto">
          Tem arte, tem café, tem alma. Mas também tem hardware robusto, software de ponta e equipamentos que aguentam o tranco.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
        {setups.map((setup: any, index) => (
          <Card key={index} className="transition-shadow w-full flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{setup.title}</CardTitle>
              <CardDescription>{setup.user}</CardDescription>
            </CardHeader>
            <CardContent>
              {setup.imageUrl && (
                <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-6 shadow-md">
                  <Image
                    src={setup.imageUrl}
                    alt={`Imagem do ${setup.title}`}
                    fill
                    className="object-contain"
                    data-ai-hint={setup.dataAiHint}
                  />
                </div>
              )}
              <ul className="space-y-4">
                {setup.components.map((component: any, compIndex: number) => (
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

      <Separator className="my-8 md:my-16" />

      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-headline">Câmera, Áudio e Software</h2>
        <p className="text-muted-foreground mb-12 max-w-3xl mx-auto">
          Câmeras afiadas, áudio cristalino e softwares que fazem tudo ganhar forma e ritmo.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {mainEquipment.map((category, index) => (
          <Card key={index} className="transition-shadow flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="text-accent p-3 bg-accent/10 rounded-lg">
                  {category.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{category.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {category.items.map((item) => (
                <div key={item.name}>
                  <div className="relative w-full rounded-lg overflow-hidden mb-4 shadow-md aspect-[4/3]">
                    <Image
                      src={item.imageUrl}
                      alt={`Imagem para ${item.name}`}
                      fill
                      className="object-contain"
                      data-ai-hint={item.dataAiHint}
                    />
                  </div>
                  <p className="font-semibold text-left">{item.name}</p>
                  <p className="text-sm text-muted-foreground text-left">{item.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="transition-shadow flex flex-col w-full">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="text-accent p-3 bg-accent/10 rounded-lg">
              {softwareEquipment.icon}
            </div>
            <CardTitle className="font-headline text-2xl">{softwareEquipment.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
            {softwareEquipment.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex flex-col items-center text-center">
                 <div className="relative w-full max-w-[100px] rounded-full overflow-hidden mb-4 shadow-md aspect-square">
                   <Image
                      src={item.imageUrl}
                      alt={`Imagem para ${item.name}`}
                      fill
                      className="object-cover"
                      data-ai-hint={item.dataAiHint}
                    />
                </div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Separator className="my-8 md:my-16" />

      <div className="text-center">
        <div className="flex justify-center items-center gap-4 mb-4">
            <div className="text-accent p-3 bg-accent/10 rounded-lg">
                <PackagePlus className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">E Muito Mais</h2>
        </div>
        <p className="text-muted-foreground mb-12 max-w-3xl mx-auto">
          Além do que listamos, nosso arsenal está sempre crescendo. Contamos com uma variedade de acessórios e equipamentos profissionais para garantir que cada projeto tenha exatamente o que precisa para brilhar.
        </p>
      </div>
    </>
  );
}
