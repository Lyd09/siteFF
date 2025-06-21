
import React from 'react';
import { cn } from '@/lib/utils';

// WhatsApp Icon SVG from Flaticon (https://www.flaticon.com/free-icon/whatsapp_5968841)
const WhatsAppIcon = () => (
  <svg viewBox="0 0 512 512" className="w-6 h-6">
    <path fill="#4CAF50" d="M437.1,74.9C388.6,26.4,324.4,0,256,0C114.6,0,0,114.6,0,256c0,45.5,11.9,88.9,34.1,126.9L0,512 l130.3-33.4C167.3,499.8,210.7,512,256,512c141.4,0,256-114.6,256-256C512,187.6,485.6,123.4,437.1,74.9z"/>
    <path fill="#FAFAFA" d="M256,422.4c-36.9,0-72.5-9.6-103.4-27.4l-11-6.5l-77.2,19.8l20.1-75.2l-7.1-11.4 c-20.1-32.1-30.8-68.8-30.8-107.1c0-101.7,82.8-184.5,184.5-184.5s184.5,82.8,184.5,184.5S357.7,422.4,256,422.4z"/>
    <path fill="#4CAF50" d="M363.3,314.1c-4.1-2-24.1-11.9-27.9-13.2c-3.7-1.3-6.4-2-9.1,2c-2.7,4.1-10.5,13.2-13,15.9 c-2.4,2.7-4.8,3-9.1,1c-4.2-2-18-6.6-34.3-21.2c-12.7-11.4-21.2-25.5-23.7-29.8c-2.4-4.2-0.2-6.4,1.8-8.4 c1.8-1.8,4.1-4.7,6.1-7.1c2-2.4,2.7-4.1,4.1-6.8c1.3-2.7,0.7-5.1-0.3-7.1c-1-2-9.1-21.8-12.4-29.8c-3.3-8-6.6-6.9-9.1-7.1 c-2.4-0.1-5.1-0.2-7.8-0.2s-7.1,1-10.8,4.7c-3.7,3.7-14.2,13.9-14.2,34c0,20.1,14.5,39.4,16.5,42.1c2,2.7,28.5,43.5,69.2,60.6 c40.7,17.1,40.7,11.4,48,10.8c7.3-0.6,24.1-9.8,27.5-19.3c3.4-9.5,3.4-17.6,2.4-19.3C372.4,318.1,367.5,316.1,363.3,314.1z"/>
  </svg>
);

// Instagram Icon SVG from Flaticon (https://www.flaticon.com/free-icon/instagram_1409946)
const InstagramIcon = () => (
    <svg viewBox="0 0 512 512" className="w-6 h-6">
        <defs>
            <radialGradient id="instagram_grad" cx="351.6" cy="160.4" r="238.441" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#FCD277"/>
                <stop offset="0.279" stopColor="#F58529"/>
                <stop offset="0.576" stopColor="#DD2A7B"/>
                <stop offset="0.841" stopColor="#8134AF"/>
                <stop offset="1" stopColor="#515BD4"/>
            </radialGradient>
        </defs>
        <g>
          <path fill="url(#instagram_grad)" d="M450.4,144.1V368c0,19.3-7.9,37.3-21,50.4c-13.1,13.1-31.1,21-50.4,21H133.1 c-19.3,0-37.3-7.9-50.4-21c-13.1-13.1-21-31.1-21-50.4V144.1c0-19.3,7.9-37.3,21-50.4c13.1-13.1,31.1-21,50.4-21h245.8 c19.3,0,37.3,7.9,50.4,21c13.1,13.1,21,31.1,21,50.4z"/>
          <path fill="#FFFFFF" d="M256,167.4c-48.9,0-88.6,39.7-88.6,88.6s39.7,88.6,88.6,88.6s88.6-39.7,88.6-88.6 S304.9,167.4,256,167.4z M256,308.7c-29.1,0-52.7-23.6-52.7-52.7s23.6-52.7,52.7-52.7s52.7,23.6,52.7,52.7 S285.1,308.7,256,308.7z M394.2,124.7c0-13.2,10.7-23.9,23.9-23.9s23.9,10.7,23.9,23.9s-10.7,23.9-23.9,23.9 S394.2,137.9,394.2,124.7z"/>
        </g>
    </svg>
);


interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, className, href }) => {
  const content = (
    <>
      <div className="text-2xl" aria-hidden="true">
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
        href="https://wa.me/yourphonenumber"
      />
      <ContactItem
        icon={<InstagramIcon />}
        text="Já nos segue no Insta?"
        href="https://instagram.com/yourprofile"
      />
    </div>
  );
};
export default ContactInfo;
