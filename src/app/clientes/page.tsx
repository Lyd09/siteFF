import React from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export const metadata = {
  title: 'Clientes | FastFilms',
  description: 'Veja quem confia em nosso trabalho.',
};

const clients = [
  { name: 'Balcão 360', logo: '/clientes-logos/Balcao360.svg', location: 'Youtube/Spotfy' },
  { name: 'Fazenda do Moinho', logo: '/clientes-logos/Fazenda-do-Moinho.svg', location: 'Pedro Leopoldo' },
  { name: 'Laiite', logo: '/clientes-logos/Laiite.svg', location: 'Pedro Leopoldo' },
  { name: 'My Broker', logo: '/clientes-logos/My-Broker.svg', location: 'Lagoa Santa' },
  { name: 'RHLA Incoporadora', logo: '/clientes-logos/RHLA.svg', location: 'Lagoa Santa' },
  { name: 'Valadares Gontijo', logo: '/clientes-logos/Valadares-Gontijo.svg', location: 'Contagem' },
];

export default function ClientesPage() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Nossos Clientes</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Criar junto é como pegar a estrada: precisa confiança, troca e uma boa trilha sonora. Essas marcas vieram no banco da frente.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {clients.map((client) => (
          <Card key={client.name} className="flex flex-col items-center p-6 bg-card hover:bg-muted/50 transition-colors duration-300 aspect-[3/2]">
            <div className="relative w-full flex-1">
              <Image
                src={client.logo}
                alt={`Logo ${client.name}`}
                fill
                className="object-contain p-1"
                data-ai-hint="client logo"
              />
            </div>
            <div className="flex-shrink-0 mt-4 text-center">
              <p className="font-semibold text-card-foreground">{client.name}</p>
              {client.location && (
                <p className="text-xs text-muted-foreground">{client.location}</p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
