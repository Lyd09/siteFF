'use server';

/**
 * @fileOverview A Genkit flow for suggesting relevant portfolio pieces based on a client's needs.
 *
 * - suggestPortfolioPieces - A function that suggests portfolio pieces.
 * - SuggestPortfolioPiecesInput - The input type for the suggestPortfolioPieces function.
 * - SuggestPortfolioPiecesOutput - The output type for the suggestPortfolioPieces function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPortfolioPiecesInputSchema = z.object({
  clientNeeds: z
    .string()
    .describe('A description of the prospective client’s needs and preferences.'),
});
export type SuggestPortfolioPiecesInput = z.infer<
  typeof SuggestPortfolioPiecesInputSchema
>;

const SuggestPortfolioPiecesOutputSchema = z.object({
  suggestedPieces: z
    .array(z.string())
    .describe(
      'A list of suggested portfolio pieces that align with the client’s needs.'
    ),
  reasoning: z
    .string()
    .describe(
      'The reasoning behind the suggested portfolio pieces, explaining why they are relevant to the client’s needs.'
    ),
});
export type SuggestPortfolioPiecesOutput = z.infer<
  typeof SuggestPortfolioPiecesOutputSchema
>;

export async function suggestPortfolioPieces(
  input: SuggestPortfolioPiecesInput
): Promise<SuggestPortfolioPiecesOutput> {
  return suggestPortfolioPiecesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestPortfolioPiecesPrompt',
  input: {schema: SuggestPortfolioPiecesInputSchema},
  output: {schema: SuggestPortfolioPiecesOutputSchema},
  prompt: `You are an expert portfolio curator for FastFilms, a video production company. A prospective client has described their needs and preferences.  Based on these needs, suggest 3 portfolio pieces from FastFilms that would be most relevant and impressive to the client. Explain your reasoning for each suggested piece.

Client Needs: {{{clientNeeds}}}

Output the suggested pieces and reasoning in JSON format.`,
});

const suggestPortfolioPiecesFlow = ai.defineFlow(
  {
    name: 'suggestPortfolioPiecesFlow',
    inputSchema: SuggestPortfolioPiecesInputSchema,
    outputSchema: SuggestPortfolioPiecesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
