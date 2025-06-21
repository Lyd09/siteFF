
import Image from 'next/image';
import Link from 'next/link';
import { Users, Video } from 'lucide-react';
import LogoBox from '@/components/custom/LogoBox';
import ContactInfo from '@/components/custom/ContactInfo';
import PortfolioCard from '@/components/custom/PortfolioCard';
import SectionTitle from '@/components/custom/SectionTitle';

export default function Home() {
  const projects = [
    {
      icon: (
        <Image src="/filmPLAY.svg" alt="Ícone de filme com play" width={32} height={32} />
      ),
      description: <>Portfólio feito com alma e café forte <span aria-label="xícara de café">☕</span></>,
      imageUrl: 'https://placehold.co/300x200/000000/FFFFFF.png', // Primary/Background
      imageAlt: 'Ícone pasta de arquivos estilizada',
      dataAiHint: 'creative portfolio',
    },
  ];

  const clients = [
    {
      icon: <Users />,
      description: 'Clientes',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Pessoas em colaboração em um projeto',
      dataAiHint: 'team collaboration',
    },
  ];

  const equipment = [
    {
      icon: <Video />,
      description: 'Equipamentos',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Câmera de vídeo profissional em um tripé',
      dataAiHint: 'video camera',
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 page-grid grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-start">
      <aside className="w-full md:sticky md:top-12 flex flex-col items-center md:items-start">
        <LogoBox />
        <div className="contact-info-wrapper mt-16 mb-8 w-full">
          <ContactInfo />
        </div>
        
        <Link href="#" className="learn-more-button">
          <span className="circle" aria-hidden="true">
            <span className="icon user-lock-icon"></span>
          </span>
          <span className="button-text">Só pra quem joga junto</span>
        </Link>
      </aside>

      <main className="flex flex-col gap-12 md:gap-16 items-center md:items-stretch">
        <section aria-labelledby="proj-title" className="w-full max-w-2xl mx-auto md:mx-0">
          <SectionTitle id="proj-title">Nossos Projetos</SectionTitle>
          <div className="space-y-6">
            {projects.map((item, index) => (
              <PortfolioCard key={`project-${index}`} {...item} />
            ))}
          </div>
        </section>

        <section aria-labelledby="client-title" className="w-full max-w-2xl mx-auto md:mx-0">
          <SectionTitle id="client-title">Gente boa que já contou com a gente</SectionTitle>
          <div className="space-y-6">
            {clients.map((item, index) => (
              <PortfolioCard key={`client-${index}`} {...item} />
            ))}
          </div>
        </section>

        <section aria-labelledby="equip-title" className="w-full max-w-2xl mx-auto md:mx-0">
          <SectionTitle id="equip-title">Os brinquedos de gente grande</SectionTitle>
          <div className="space-y-6">
            {equipment.map((item, index) => (
              <PortfolioCard key={`equipment-${index}`} {...item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
