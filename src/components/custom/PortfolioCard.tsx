import NextImage from 'next/image'; // Renamed to avoid conflict with local Image component
import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface PortfolioCardProps {
  icon: React.ReactNode;
  description: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
  className?: string;
  dataAiHint?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  icon,
  description,
  imageUrl,
  imageAlt,
  className,
  dataAiHint,
}) => {
  return (
    <Card className={cn('flex items-center p-4 md:p-5 gap-4 shadow-lg w-full hover:shadow-xl transition-shadow duration-300', className)} role="listitem">
      <div className="flex-shrink-0 bg-accent/20 rounded-lg p-3 flex justify-center items-center text-2xl text-primary min-w-[48px] min-h-[48px] md:min-w-[56px] md:min-h-[56px]">
        {icon}
      </div>
      <div className="text-sm flex-grow basis-[40%] max-w-[40%] md:basis-[45%] md:max-w-[45%] text-card-foreground">
        {typeof description === 'string' ? <span className="font-body">{description}</span> : description}
      </div>
      <div className="relative flex-grow basis-[calc(60%-1rem)] max-w-[calc(60%-1rem)] md:basis-[calc(55%-1rem)] md:max-w-[calc(55%-1rem)] h-20 md:h-[80px] rounded-lg overflow-hidden shadow-md">
        <NextImage // Use the renamed import
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          data-ai-hint={dataAiHint}
        />
      </div>
    </Card>
  );
};

export default PortfolioCard;
