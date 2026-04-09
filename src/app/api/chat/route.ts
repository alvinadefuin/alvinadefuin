import { createGroq } from '@ai-sdk/groq';
import { streamText } from 'ai';

import { SYSTEM_PROMPT } from './prompt';
import { getContact } from './tools/getContact';
import { getInternship } from './tools/getIntership';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getResume } from './tools/getResume';
import { getSkills } from './tools/getSkills';

export const maxDuration = 30;

// Create Groq AI provider
const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

// ❌ Pas besoin de l'export ici, Next.js n'aime pas ça
function errorHandler(error: unknown) {
  if (error == null) {
    return 'Unknown error';
  }
  if (typeof error === 'string') {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log('[CHAT-API] Incoming messages:', messages);
    
    // Check if API key is available
    if (!process.env.GROQ_API_KEY) {
      console.error('[CHAT-API] Missing GROQ_API_KEY environment variable');
      return new Response('Missing API key', { status: 500 });
    }

    console.log('[CHAT-API] API key available:', process.env.GROQ_API_KEY?.slice(0, 10) + '...');

    // Add tools
    const tools = {
      getProjects,
      getPresentation,
      getResume,
      getContact,
      getSkills,
      getInternship,
    };

    console.log('[CHAT-API] About to call streamText');

    const result = await streamText({
      model: groq('llama-3.3-70b-versatile'),
      system: SYSTEM_PROMPT.content,
      messages,
      tools,
      maxSteps: 5,
      onStepFinish: ({ stepType, toolCalls, toolResults, finishReason, text }) => {
        console.log('[CHAT-API] Step finished:', { stepType, finishReason, text: text?.slice(0, 100) });
        if (toolCalls?.length) console.log('[CHAT-API] Tool calls:', toolCalls.map(tc => tc.toolName));
        if (toolResults?.length) console.log('[CHAT-API] Tool results received:', toolResults.map(tr => tr.toolName));
      },
    });

    console.log('[CHAT-API] streamText completed successfully');

    const response = result.toDataStreamResponse({
      getErrorMessage: (error) => {
        console.error('[CHAT-API] Stream error:', error);
        return error instanceof Error ? error.message : String(error);
      },
    });
    console.log('[CHAT-API] DataStreamResponse created');
    
    return response;
  } catch (error) {
    console.error('Chat API error:', error);
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    // Handle specific error types
    if (error instanceof Error && error.message?.includes('quota')) {
      return new Response('API quota exceeded. Please try again later.', { status: 429 });
    }
    
    if (error instanceof Error && error.message?.includes('network')) {
      return new Response('Network error. Please check your connection and try again.', { status: 503 });
    }
    
    return new Response(`Internal Server Error: ${error instanceof Error ? error.message : 'Unknown error'}`, { status: 500 });
  }
}
