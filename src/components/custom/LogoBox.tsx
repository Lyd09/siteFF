
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoBoxProps {
  className?: string;
}

const LogoBox: React.FC<LogoBoxProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'relative w-full max-w-[220px] aspect-square bg-primary rounded-2xl shadow-xl p-4 overflow-hidden cursor-default select-none',
        className
      )}
      aria-label="Logotipo FastFilms"
    >
      <Image
        src="/logoFF.png" // Make sure logoFF.png is in your /public folder
        alt="FastFilms Logo"
        layout="fill"
        objectFit="contain"
        data-ai-hint="company logo"
      />
    </div>
  );
};

export default LogoBox;
