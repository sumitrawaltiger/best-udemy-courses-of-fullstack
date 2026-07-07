import { pythonChapters } from './pythonChapters';
import { ASHOK_IT_URL } from './trackConfig.js';

export const PYTHON_META = {
  title: 'Thunder++ — Python & Agentic AI',
  subtitle: 'Gen AI & Agentic AI with Python — Ashok IT Hyderabad',
  description:
    'Master Python, Django, FastAPI, Generative AI, LangChain, RAG, and Agentic AI with LangGraph, MCP, and n8n.',
  portalUrl: ASHOK_IT_URL,
  githubRepo: 'https://github.com/ashok-bollepalli/GEN-AI-Agentic-AI-Training',
  institute: 'Ashok IT',
  tagline: 'Learn Here.. Lead Anywhere..!!',
  totalModules: 45,
  startsAfter: 'React Native',
};

function lessonToModule(ch) {
  return {
    id: ch.id,
    number: ch.pyDay,
    title: ch.title,
    slug: ch.slug,
    day: ch.pyDay,
    published: true,
    href: `/python/learn/${ch.slug}`,
  };
}

function modulesForRange(start, end) {
  return pythonChapters
    .filter((c) => c.pyDay >= start && c.pyDay <= end)
    .map(lessonToModule);
}

export const pythonPhases = [
  {
    id: 'python-foundations',
    number: 1,
    title: 'Python Foundations',
    moduleCount: modulesForRange(1, 10).length,
    status: 'published',
    modules: modulesForRange(1, 10),
  },
  {
    id: 'ml-nlp',
    number: 2,
    title: 'ML & NLP',
    moduleCount: modulesForRange(11, 14).length,
    status: 'published',
    modules: modulesForRange(11, 14),
  },
  {
    id: 'advanced-dl',
    number: 3,
    title: 'Advanced Deep Learning',
    moduleCount: modulesForRange(15, 20).length,
    status: 'published',
    modules: modulesForRange(15, 20),
  },
  {
    id: 'gen-ai',
    number: 4,
    title: 'Gen AI & LLMs',
    moduleCount: modulesForRange(21, 25).length,
    status: 'published',
    modules: modulesForRange(21, 25),
  },
  {
    id: 'langchain',
    number: 5,
    title: 'OpenAI & LangChain',
    moduleCount: modulesForRange(26, 30).length,
    status: 'published',
    modules: modulesForRange(26, 30),
  },
  {
    id: 'rag-deploy',
    number: 6,
    title: 'RAG & Deployment',
    moduleCount: modulesForRange(31, 34).length,
    status: 'published',
    modules: modulesForRange(31, 34),
  },
  {
    id: 'django',
    number: 7,
    title: 'Django Web Framework',
    moduleCount: modulesForRange(35, 38).length,
    status: 'published',
    modules: modulesForRange(35, 38),
  },
  {
    id: 'fastapi',
    number: 8,
    title: 'FastAPI',
    moduleCount: modulesForRange(39, 42).length,
    status: 'published',
    modules: modulesForRange(39, 42),
  },
  {
    id: 'agentic-ai',
    number: 9,
    title: 'Agentic AI',
    moduleCount: modulesForRange(43, 45).length,
    status: 'published',
    modules: modulesForRange(43, 45),
  },
];

export const pythonHighlights = [
  'Python from basics to OOP',
  'ML, NLP & Transformers',
  'Generative AI & LLMs',
  'LangChain, RAG & Fine-Tuning',
  'Django REST Framework',
  'FastAPI production APIs',
  'Agentic AI with LangGraph & n8n',
];
