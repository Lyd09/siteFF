import AiSuggestionForm from '@/components/custom/AiSuggestionForm';
import React from 'react';

export const metadata = {
  title: 'Sugestões de Portfólio com IA | FastFilms',
  description: 'Use nossa ferramenta de IA para obter sugestões de portfólio personalizadas.',
};

export default function AiSuggestionsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <AiSuggestionForm />
    </div>
  );
}
