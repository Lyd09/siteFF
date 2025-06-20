'use client';

import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Brain, Lightbulb, AlertTriangle } from 'lucide-react';
import type { SuggestPortfolioPiecesOutput } from '@/ai/flows/suggest-portfolio-pieces';
import { suggestPortfolioAction } from '@/app/ai-suggestions/actions';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  clientNeeds: z.string().min(20, {
    message: 'Por favor, descreva as necessidades do cliente com pelo menos 20 caracteres.',
  }).max(1000, {
    message: 'A descrição não pode exceder 1000 caracteres.',
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function AiSuggestionForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<SuggestPortfolioPiecesOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientNeeds: '',
    },
  });

  const onSubmit = (values: FormData) => {
    setError(null);
    setResult(null);
    startTransition(async () => {
      try {
        const response = await suggestPortfolioAction({ clientNeeds: values.clientNeeds });
        setResult(response);
      } catch (e: any) {
        const errorMessage = e.message || 'Ocorreu um erro ao buscar sugestões. Tente novamente.';
        setError(errorMessage);
        toast({
          variant: "destructive",
          title: "Erro na Sugestão",
          description: errorMessage,
        });
      }
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center font-headline text-2xl text-primary">
            <Brain className="mr-2 h-6 w-6" />
            Gerador de Sugestões IA
          </CardTitle>
          <CardDescription>
            Descreva as necessidades do seu cliente e nossa IA irá sugerir os projetos mais relevantes do nosso portfólio.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="clientNeeds"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Necessidades do Cliente</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex: Preciso de um vídeo promocional dinâmico para um novo produto de tecnologia, com foco em um público jovem..."
                        className="min-h-[120px] focus:ring-accent"
                        {...field}
                        aria-describedby="clientNeedsHelp"
                      />
                    </FormControl>
                    <p id="clientNeedsHelp" className="text-sm text-muted-foreground mt-1">
                      Quanto mais detalhes você fornecer, melhores serão as sugestões.
                    </p>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analisando...
                  </>
                ) : (
                  <>
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Obter Sugestões
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && (
         <Card className="mt-8 border-destructive bg-destructive/10">
          <CardHeader>
            <CardTitle className="flex items-center text-destructive">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Erro
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive-foreground">{error}</p>
          </CardContent>
        </Card>
      )}

      {result && (
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-xl text-primary">Sugestões Personalizadas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-accent">Projetos Sugeridos:</h3>
              {result.suggestedPieces && result.suggestedPieces.length > 0 ? (
                <ul className="list-disc list-inside space-y-1 pl-4">
                  {result.suggestedPieces.map((piece, index) => (
                    <li key={index} className="text-foreground">{piece}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">Nenhum projeto específico foi sugerido com base na descrição.</p>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-accent">Raciocínio:</h3>
              <p className="text-foreground whitespace-pre-wrap text-sm leading-relaxed bg-muted/50 p-4 rounded-md">
                {result.reasoning || "Nenhum raciocínio fornecido."}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
