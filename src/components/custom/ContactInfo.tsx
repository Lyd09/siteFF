
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ContactItemProps {
  iconSrc: string;
  iconAlt: string;
  text: string;
  className?: string;
  href?: string;
  dataAiHint?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ iconSrc, iconAlt, text, className, href, dataAiHint }) => {
  const content = (
    <>
      <div className="relative w-6 h-6 [filter:drop-shadow(12px_13px_3px_rgba(0,0,0,0.4))]" aria-hidden="true">
        <Image
          src={iconSrc}
          alt={iconAlt}
          fill
          className="object-contain"
          data-ai-hint={dataAiHint}
        />
      </div>
      <span className="text-sm text-foreground">{text}</span>
    </>
  );
  
  const itemClasses = cn('flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity', className);

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={itemClasses}>
        {content}
      </a>
    );
  }
  return <div className={itemClasses}>{content}</div>;
};


interface ContactInfoProps {
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ className }) => {
  return (
    <div className={cn('mt-8 w-full max-w-[220px]', className)} aria-label="Contato FastFilms">
      <ContactItem
        iconSrc="/whatsapp.svg"
        iconAlt="WhatsApp Logo"
        text="Solicite o seu orçamento!"
        href="https://wa.me/yourphonenumber"
        dataAiHint="whatsapp logo"
      />
      <ContactItem
        iconSrc="/instagram.svg"
        iconAlt="Instagram Logo"
        text="Já nos segue no Insta?"
        href="https://instagram.com/yourprofile"
        dataAiHint="instagram logo"
      />
    </div>
  );
};
export default ContactInfo;
