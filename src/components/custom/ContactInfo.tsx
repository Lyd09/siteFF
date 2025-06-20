
import React from 'react';
import { cn } from '@/lib/utils';

// WhatsApp Icon SVG
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.61 15.35 3.48 16.81L2 22L7.32 20.55C8.73 21.33 10.34 21.76 12.04 21.76C17.5 21.76 21.95 17.31 21.95 11.85C21.95 6.39 17.5 2 12.04 2ZM12.04 20.14C10.56 20.14 9.13 19.76 7.9 19.05L7.53 18.82L4.42 19.65L5.27 16.63L5.03 16.26C4.19 14.93 3.75 13.4 3.75 11.85C3.75 7.33 7.46 3.62 12.04 3.62C16.62 3.62 20.33 7.33 20.33 11.85C20.33 16.37 16.62 20.14 12.04 20.14ZM16.57 14.47C16.31 14.34 15.13 13.76 14.89 13.67C14.65 13.58 14.49 13.53 14.32 13.77C14.15 14.01 13.63 14.64 13.49 14.79C13.35 14.94 13.2 14.96 12.94 14.83C12.68 14.71 11.88 14.43 10.91 13.56C10.15 12.88 9.63 12.04 9.49 11.8C9.34 11.56 9.45 11.44 9.56 11.33C9.67 11.22 9.81 11.03 9.95 10.88C10.08 10.73 10.13 10.61 10.23 10.42C10.33 10.23 10.28 10.09 10.21 9.96C10.14 9.84 9.65 8.61 9.45 8.13C9.26 7.66 9.06 7.71 8.92 7.71C8.78 7.71 8.61 7.71 8.44 7.71C8.28 7.71 8.01 7.79 7.77 8.03C7.54 8.27 7.02 8.76 7.02 9.84C7.02 10.92 8.48 12.36 8.61 12.51C8.75 12.66 10.88 15.87 13.81 17.2C14.31 17.42 14.69 17.56 14.99 17.66C15.51 17.83 15.94 17.79 16.27 17.5C16.65 17.16 17.08 16.49 17.24 16.15C17.4 15.81 17.4 15.52 17.32 15.39C17.24 15.26 16.83 15.1 16.57 14.97V14.47Z" />
  </svg>
);

// Instagram Icon SVG
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);


interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
  iconContainerClassName?: string; // Renamed from iconClassName to avoid conflict if SVG has its own className
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, className, iconContainerClassName, href }) => {
  const content = (
    <>
      <div className={cn('text-2xl', iconContainerClassName)} aria-hidden="true">
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
        icon={<WhatsAppIcon />}
        text="Solicite o seu orçamento!"
        iconContainerClassName="text-[#25D366]" // WhatsApp Green
        href="https://wa.me/yourphonenumber" // Replace with actual WhatsApp link
      />
      <ContactItem
        icon={<InstagramIcon />}
        text="Já nos segue no Insta?"
        iconContainerClassName="text-[#E4405F]" // Instagram Pink
        href="https://instagram.com/yourprofile" // Replace with actual Instagram link
      />
    </div>
  );
};
export default ContactInfo;
