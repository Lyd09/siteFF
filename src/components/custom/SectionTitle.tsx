import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className, ...props }) => {
  return (
    <h2
      className={cn(
        'font-headline text-center text-3xl font-semibold mb-6 text-primary',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
