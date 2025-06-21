
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
        'relative w-full max-w-[220px] h-72 bg-black rounded-2xl shadow-xl p-4 overflow-hidden cursor-default select-none',
        className
      )}
      aria-label="Logotipo FastFilms"
    >
      <Image
        src="/logoFF.svg"
        alt="FastFilms Logo"
        fill
        className="object-contain"
        data-ai-hint="company logo"
      />
    </div>
  );
};

export default LogoBox;
