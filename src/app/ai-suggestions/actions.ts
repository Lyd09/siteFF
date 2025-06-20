'use server';

import { suggestPortfolioPieces as genAISuggestPortfolioPieces, type SuggestPortfolioPiecesInput, type SuggestPortfolioPiecesOutput } from '@/ai/flows/suggest-portfolio-pieces';
import { z } from 'zod';

// Optional: Define the input schema again for server-side validation if needed, or rely on the imported one.
const ActionInputSchema = z.object({
  clientNeeds: z.string().min(10, "Client needs description is too short.").max(1000, "Client needs description is too long."),
});

export async function suggestPortfolioAction(input: SuggestPortfolioPiecesInput): Promise<SuggestPortfolioPiecesOutput> {
  try {
    // Validate input using Zod schema
    const validatedInput = ActionInputSchema.parse(input);
    const result = await genAISuggestPortfolioPieces(validatedInput);
    return result;
  } catch (error: any) {
    console.error("Error in AI suggestion action:", error);
    if (error instanceof z.ZodError) {
      // Construct a user-friendly error message from Zod errors
      const formattedErrors = error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ');
      throw new Error(`Validation failed: ${formattedErrors}`);
    }
    // For other errors, re-throw a generic message or the original error message if safe
    throw new Error(error.message || "Failed to get AI suggestions. Please try again.");
  }
}
