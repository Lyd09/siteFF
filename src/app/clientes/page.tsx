'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const clients = [
  { name: 'Balcão 360', logo: '/clientes-logos/Balcao360.svg', location: 'Youtube/Spotfy' },
  { name: 'CFPL - CrossFit Pedro Leopoldo', logo: '/clientes-logos/CFPL.svg', location: 'Pedro Leopoldo' },
  { name: 'Fazenda do Moinho', logo: '/clientes-logos/Fazenda-do-Moinho.svg', location: 'Pedro Leopoldo' },
  { name: 'Laiite', logo: '/clientes-logos/Laiite.svg', location: 'Pedro Leopoldo' },
  { name: 'My Broker', logo: '/clientes-logos/My-Broker.svg', location: 'Lagoa Santa' },
  { name: 'RHLA Incoporadora', logo: '/clientes-logos/RHLA.svg', location: 'Lagoa Santa' },
  { name: 'Valadares Gontijo', logo: '/clientes-logos/Valadares-Gontijo.svg', location: 'Contagem' },
];

export default function ClientesPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setIsDialogOpen(true);
  }, []);

  return (
    <>
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Aviso</AlertDialogTitle>
            <AlertDialogDescription>
              Em breve!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Fechar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Nossos Clientes</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Criar junto é como pegar a estrada: precisa confiança, troca e uma boa trilha sonora. Essas marcas vieram no banco da frente.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {clients.map((client) => (
          <Card key={client.name} className="grid grid-rows-[2fr_1fr] items-center p-4 md:p-6 bg-card hover:bg-muted/50 transition-colors duration-300 aspect-[3/2]">
            <div className="relative w-full h-full">
              <Image
                src={client.logo}
                alt={`Logo ${client.name}`}
                fill
                className="object-contain"
                data-ai-hint="client logo"
                sizes="(max-width: 768px) 40vw, 25vw"
              />
            </div>
            <div className="text-center self-end">
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