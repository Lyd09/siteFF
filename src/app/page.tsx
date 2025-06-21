
import Link from 'next/link';
import { Film, Users, Camera } from 'lucide-react'; // Removed Brain
import LogoBox from '@/components/custom/LogoBox';
import ContactInfo from '@/components/custom/ContactInfo';
import PortfolioCard from '@/components/custom/PortfolioCard';
import SectionTitle from '@/components/custom/SectionTitle';
// Removed Button import as it's no longer used for AI suggestions link here

export default function Home() {
  const projects = [
    {
      icon: <Film />,
      description: <>Portfólio feito com alma e café forte <span aria-label="Emoji pensativo">🤔</span></>,
      imageUrl: 'https://placehold.co/300x200/000000/FFFFFF.png', // Primary/Background
      imageAlt: 'Ícone pasta de arquivos estilizada',
      dataAiHint: 'creative portfolio',
    },
    {
      icon: <Film />,
      description: 'Curtas metragens premiados internacionalmente.',
      imageUrl: 'https://placehold.co/300x200/000000/FFFFFF.png', // Accent/Background
      imageAlt: 'Cena de filme abstrata',
      dataAiHint: 'film scene',
    },
  ];

  const clients = [
    {
      icon: <Users />,
      description: 'Clientes Satisfeitos que Confiam na FastFilms.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Pessoas em colaboração em um projeto',
      dataAiHint: 'team collaboration',
    },
  ];

  const equipment = [
    {
      icon: <Camera />,
      description: 'Equipamentos de Ponta para Produções Incríveis.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Câmera de vídeo profissional em um tripé',
      dataAiHint: 'video camera',
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-start">
        <aside className="w-full md:sticky md:top-12 flex flex-col items-center md:items-start">
          <LogoBox />
          <ContactInfo className="my-8" />
          {/* AI Suggestions Button Removed */}
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
    </div>
  );
}
