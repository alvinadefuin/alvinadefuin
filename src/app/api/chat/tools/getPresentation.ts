import { tool } from 'ai';
import { z } from 'zod';
import { getConfig } from '@/lib/config-loader';

export const getPresentation = tool({
  description:
    'This tool provides a comprehensive professional introduction and personal background, suitable for interviews and formal presentations.',
  parameters: z.preprocess(val => val ?? {}, z.object({})),
  execute: async () => {
    const config = getConfig();
    
    return {
      presentation: config.personal.bio,
      name: config.personal.name,
      title: config.personal.title,
      age: config.personal.age,
      location: config.personal.location,
      education: config.education.current,
      traits: config.personality.traits,
      interests: config.personality.interests,
      motivation: config.personality.motivation,
      professionalSummary: "I'm a Mid-Level AI Software Developer currently working at Cambridge University Press & Assessment within a Generative AI Centre of Excellence. I specialize in generative AI, RAG systems, and semantic search — building production-ready AI applications with Python, FastAPI, React/Preact, Typesense, and LangChain. Previously at Journey Better Business Group, I delivered AI systems used by 9+ organizations supporting thousands of users and 47,000+ LLM API calls. I'm strong in rapid prototyping, PoC development, and working autonomously in cross-functional teams."
    };
  },
});
