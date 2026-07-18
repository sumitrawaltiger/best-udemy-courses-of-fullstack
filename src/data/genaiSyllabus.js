import { genaiChapters } from './genaiChapters';
import { GENAI_COURSE_URL } from './trackConfig';

// The Complete Generative AI Engineering Bootcamp — Year 1 (JavaScript stack).
// Agentic AI in JavaScript with LangChain.js, LangGraph & LangSmith.

export const GENAI_META = {
  title: 'Thunder+ : GenAI Engineering with JavaScript',
  subtitle:
    'Build & deploy autonomous AI agents — the modern GenAI stack in JavaScript (LangChain.js, LangGraph, LangSmith)',
  description:
    'From the Transformer architecture to production-grade autonomous agents. Learn Generative AI end to end and graduate with a portfolio of intelligent agents.',
  courseUrl: GENAI_COURSE_URL,
  langchainJs: 'https://js.langchain.com/docs/introduction/',
  langgraphJs: 'https://langchain-ai.github.io/langgraphjs/',
  langsmith: 'https://docs.smith.langchain.com/',
  totalModules: 13,
  calendarDays: 13,
  phaseWindow: 'Days 191–203 · Year 1',
  startsAfter: 'React Native (Days 151–190)',
};

function lessonToModule(ch) {
  return {
    id: ch.id,
    number: ch.genaiDay,
    title: ch.title,
    slug: ch.slug,
    day: ch.genaiDay,
    published: true,
    href: `/genai/learn/${ch.slug}`,
  };
}

function modulesForRange(start, end) {
  return genaiChapters
    .filter((c) => c.genaiDay >= start && c.genaiDay <= end)
    .map(lessonToModule);
}

export const genaiParts = [
  {
    id: 'part-1',
    title: 'Part I · Core Concepts & Theoretical Foundations',
    blurb: 'From the AI landscape to Transformers, embeddings and vector databases.',
    modules: modulesForRange(1, 5),
  },
  {
    id: 'part-2',
    title: 'Part II · Building Applications & Autonomous Agents',
    blurb: 'LangChain, RAG, your first autonomous agent, and multi-agent systems with LangGraph.',
    modules: modulesForRange(6, 10),
  },
  {
    id: 'part-3',
    title: 'Part III · Production, Evaluation & Mastery',
    blurb: 'Deploy and scale agents, evaluate with LangSmith, and ship a full-stack capstone.',
    modules: modulesForRange(11, 13),
  },
];
