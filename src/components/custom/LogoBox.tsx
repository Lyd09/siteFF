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
        'w-full max-w-[220px] h-72 bg-black rounded-2xl p-4 flex justify-center items-center cursor-default select-none',
        className
      )}
      aria-label="Logotipo FastFilms"
    >
      <Image
        src="/logoFF.svg"
        alt="FastFilms Logo"
        width={188}
        height={256}
        className="object-contain [filter:drop-shadow(12px_13px_3px_rgba(0,0,0,0.4))]"
        data-ai-hint="company logo"
      />
    </div>
  );
};

export default LogoBox;
