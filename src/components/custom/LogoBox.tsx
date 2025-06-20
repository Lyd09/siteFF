import React from 'react';
import { cn } from '@/lib/utils';

interface LogoBoxProps {
  className?: string;
}

const LogoBox: React.FC<LogoBoxProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'w-full max-w-[220px] aspect-square bg-primary rounded-2xl shadow-xl flex flex-col justify-center items-center p-6 text-primary-foreground text-center cursor-default select-none',
        className
      )}
      aria-label="Logotipo FastFilms"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 mb-2"
      >
        <rect width="80" height="80" className="fill-primary" />
        <rect x="20" y="10" width="40" height="60" rx="8" ry="8" className="fill-primary-foreground" />
        <polygon points="38,18 65,18 46,42 65,62 46,62" className="fill-primary" />
        <rect x="43" y="33" width="10" height="10" className="fill-primary-foreground" />
        <polygon points="45,35 52,35 45,42" className="fill-primary" />
      </svg>
      <div className="font-headline font-bold mt-3 text-xl">FastFilms</div>
    </div>
  );
};

export default LogoBox;
