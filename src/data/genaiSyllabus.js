import { genaiChapters } from './genaiChapters';
import { GENAI_COURSE_URL } from './trackConfig';

// The Complete Generative AI Engineering Bootcamp — Year 1 (JavaScript stack).
// Agentic AI in JavaScript with LangChain.js, LangGraph & LangSmith.

export const GENAI_META = {
  title: 'Thunder+ : GenAI Engineering with JavaScript',
  subtitle:
    'Build & deploy autonomous AI agents — the modern GenAI stack in JavaScript (LangChain.js, LangGraph, LangSmith)',
  description:
    'From the Transformer architecture to production-grade autonomous agents. Learn Generative AI end to end and graduate with a portfolio of intelligent agents — deployed, observed, and battle-tested.',
  courseUrl: GENAI_COURSE_URL,
  langchainJs: 'https://js.langchain.com/docs/introduction/',
  langgraphJs: 'https://langchain-ai.github.io/langgraphjs/',
  langsmith: 'https://docs.smith.langchain.com/',
  totalModules: 34,
  calendarDays: 145,
  phaseWindow: 'Days 191–335 · Year 1',
  startsAfter: 'React Native (Days 151–190)',
  parts: 7,
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
    blurb: 'From the AI landscape to Transformers, embeddings and vector databases — the theory that makes everything else make sense.',
    modules: modulesForRange(1, 5),
  },
  {
    id: 'part-2',
    title: 'Part II · Building Applications & Autonomous Agents',
    blurb: 'Write your first code, then LangChain, RAG, your first autonomous agent, and multi-agent systems with LangGraph.',
    modules: modulesForRange(6, 11),
  },
  {
    id: 'part-3',
    title: 'Part III · Production, Evaluation & Mastery',
    blurb: 'Deploy and scale agents, evaluate with LangSmith, and ship a full-stack capstone.',
    modules: modulesForRange(12, 14),
  },
  {
    id: 'part-4',
    title: 'Part IV · Advanced Agentic Engineering',
    blurb: 'Advanced prompt engineering, tool calling with Zod, stateful LangGraph agents, multi-layer memory architectures, and responsible AI guardrails.',
    modules: modulesForRange(26, 30),
  },
  {
    id: 'part-5',
    title: 'Part V · Production Mastery & The Frontier',
    blurb: 'Production-grade RAG with hybrid search and RAGAS evals, reflection loops, agent APIs with SSE streaming, multimodal agents, and fine-tuning strategy.',
    modules: modulesForRange(56, 60),
  },
  {
    id: 'part-6',
    title: 'Part VI · Expert Engineering & The Frontier',
    blurb: 'MCP servers, full observability with LangSmith, AI code generation agents, full-stack SaaS architecture, and the road ahead with reasoning models and computer use.',
    modules: modulesForRange(111, 115),
  },
  {
    id: 'part-7',
    title: 'Part VII · Real-World Systems & Advanced Patterns',
    blurb: 'Autonomous research agents, event-driven BullMQ pipelines, a complete agent testing pyramid, domain-specific compliance guardrails, and a multi-provider LLM gateway.',
    modules: modulesForRange(141, 145),
  },
];

// Flat ordered list of all published modules — useful for prev/next navigation
export const genaiAllModules = genaiParts.flatMap((p) => p.modules);

// Curriculum summary table (for README and landing page)
export const CURRICULUM_TABLE = [
  { part: 'I',   days: '1–14',     title: 'Core Concepts & Theoretical Foundations',        modules: 14, status: 'published' },
  { part: 'II',  days: '6–11',     title: 'Building Applications & Autonomous Agents',       modules: 6,  status: 'published' },
  { part: 'III', days: '12–14',    title: 'Production, Evaluation & Mastery',                modules: 3,  status: 'published' },
  { part: 'IV',  days: '26–30',    title: 'Advanced Agentic Engineering',                    modules: 5,  status: 'published' },
  { part: 'V',   days: '56–60',    title: 'Production Mastery & The Frontier',               modules: 5,  status: 'published' },
  { part: 'VI',  days: '111–115',  title: 'Expert Engineering & The Frontier',               modules: 5,  status: 'published' },
  { part: 'VII', days: '141–145',  title: 'Real-World Systems & Advanced Patterns',          modules: 5,  status: 'published' },
];
