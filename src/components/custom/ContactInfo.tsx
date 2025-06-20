import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
  iconClassName?: string;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, className, iconClassName, href }) => {
  const content = (
    <>
      <div className={cn('text-2xl', iconClassName)} aria-hidden="true">
        {icon}
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
        icon={<MessageCircle />}
        text="Solicite o seu orçamento!"
        iconClassName="text-[#25D366]" // WhatsApp Green
        href="https://wa.me/yourphonenumber" // Replace with actual WhatsApp link
      />
      <ContactItem
        icon={<Instagram />}
        text="Já nos segue no Insta?"
        iconClassName="text-[#E4405F]" // Instagram Pink
        href="https://instagram.com/yourprofile" // Replace with actual Instagram link
      />
    </div>
  );
};
export default ContactInfo;
