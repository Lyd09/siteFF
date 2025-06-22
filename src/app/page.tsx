'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Users, Video } from 'lucide-react';
import LogoBox from '@/components/custom/LogoBox';
import ContactInfo from '@/components/custom/ContactInfo';
import PortfolioCard from '@/components/custom/PortfolioCard';
import SectionTitle from '@/components/custom/SectionTitle';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export default function Home() {
  const projects = [
    {
      icon: (
        <Image src="/filmPLAY.svg" alt="Ícone de filme com play" width={32} height={32} />
      ),
      description: <>Portfólio feito com alma e café forte <span aria-label="xícara de café">☕</span></>,
      imageUrl: '/PORTFOLIO.svg',
      imageAlt: 'Ilustração do portfólio',
      dataAiHint: 'creative portfolio',
    },
  ];

  const clients = [
    {
      icon: <Users />,
      description: 'Clientes',
      imageUrl: '/CLIENTES.svg',
      imageAlt: 'Ilustração de clientes',
      dataAiHint: 'team collaboration',
    },
  ];

  const equipment = [
    {
      icon: <Video />,
      description: 'Equipamentos',
      imageUrl: '/EQUIPAMENTOS.svg',
      imageAlt: 'Ilustração de equipamentos',
      dataAiHint: 'video camera',
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 page-grid grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-start">
      <aside className="w-full md:sticky md:top-12 flex flex-col items-center md:items-start z-20">
        <LogoBox />
        <div className="contact-info-wrapper mt-16 mb-8 w-full">
          <ContactInfo />
        </div>
        
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="learn-more-button">
              <span className="circle" aria-hidden="true">
                <span className="icon user-lock-icon"></span>
              </span>
              <span className="button-text">Só pra quem joga junto</span>
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Acesso Restrito</AlertDialogTitle>
              <AlertDialogDescription>
                Esta área é exclusiva para os parceiros e colaboradores da FastFilms e o acesso requer login e senha. Se você já tem suas credenciais, clique em 'Continuar'. Novos colaboradores devem solicitar o seu acesso.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={() => window.open('https://gestao-de-clientes-ff.netlify.app/', '_blank', 'noopener,noreferrer')}>
                Continuar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </aside>

      <main className="flex flex-col gap-12 md:gap-16 items-center md:items-stretch">
        <section aria-labelledby="proj-title" className="w-full max-w-2xl mx-auto md:mx-0">
          <SectionTitle id="proj-title">Nossos Projetos</SectionTitle>
          <div className="space-y-6">
            {projects.map((item, index) => (
              <a href="/portfolio" key={`project-link-${index}`} className="block transition-transform hover:scale-[1.02]">
                <PortfolioCard {...item} />
              </a>
            ))}
          </div>
        </section>

        <section aria-labelledby="client-title" className="w-full max-w-2xl mx-auto md:mx-0">
          <SectionTitle id="client-title">Gente boa que já contou com a gente</SectionTitle>
          <div className="space-y-6">
            {clients.map((item, index) => (
              <Link href="/clientes" key={`client-link-${index}`} className="block transition-transform hover:scale-[1.02]">
                <PortfolioCard {...item} />
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="equip-title" className="w-full max-w-2xl mx-auto md:mx-0">
          <SectionTitle id="equip-title">Os brinquedos de gente grande</SectionTitle>
          <div className="space-y-6">
            {equipment.map((item, index) => (
              <Link href="/equipamentos" key={`equipment-link-${index}`} className="block transition-transform hover:scale-[1.02]">
                <PortfolioCard {...item} />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
