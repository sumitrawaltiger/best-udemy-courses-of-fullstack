// Header/nav track list, ordered to the 5-stack, 1,620-day roadmap (see
// RoadmapHome.jsx): Agentic AI using Python (Phase 1, under /python) →
// TypeScript Stack — JavaScript, TypeScript, React JS/Next JS, React Native,
// Express/Node JS (Phase 2, under /, /typescript, /nextjs, /mobile) → Java
// Stack — J2SE/J2EE/JPA/Spring Boot/Microservices (Phase 3, under /java) →
// Python Stack — Python & FastAPI (Phase 4, also under /python) → DevOps
// Stack — DevOps, Kubernetes & AWS Cloud (Phase 5). DSA & System Design are
// practiced throughout, not a separate stack. GenAI (Agentic AI in
// JavaScript) is a separate, unmodified bonus track — distinct from the
// Python-based Agentic AI in Phase 1.
// Descriptions are dateless — personal calendar dates live only in the user's private schedule.
export const LEARNING_PATH = [
  {
    id: 'python',
    label: 'Python & AI',
    short: 'PY',
    desc: 'Phases 1 & 4 · Agentic AI + Python Stack',
    path: '/python',
  },
  { id: 'thunder', label: 'Thunder', short: 'JS', desc: 'Phase 2 · TypeScript Stack', path: '/' },
  {
    id: 'nextjs',
    label: 'React & Next.js',
    short: 'NX',
    desc: 'Phase 2 · TypeScript Stack',
    path: '/nextjs',
  },
  {
    id: 'mobile',
    label: 'React Native',
    short: 'RN',
    desc: 'Phase 2 · TypeScript Stack',
    path: '/mobile',
  },
  {
    id: 'java',
    label: 'Java & Spring',
    short: 'JV',
    desc: 'Phase 3 · Java Stack',
    path: '/java',
  },
  {
    id: 'devops',
    label: 'DevOps & CI/CD',
    short: 'DO',
    desc: 'Phase 5 · DevOps Stack',
    path: '/devops',
  },
  {
    id: 'k8s',
    label: 'Kubernetes',
    short: 'K8s',
    desc: 'Phase 5 · DevOps Stack',
    path: '/k8s',
  },
  {
    id: 'aws',
    label: '100 Days of AWS',
    short: 'AWS',
    desc: 'Phase 5 · DevOps Stack',
    path: '/aws',
  },
  {
    id: 'interview',
    label: 'DSA & System Design',
    short: 'SD',
    desc: 'Throughout · DSA & System Design',
    path: '/interview',
  },
  {
    id: 'genai',
    label: 'GenAI & Agentic AI',
    short: 'GEN',
    desc: 'Bonus · Agentic AI in JavaScript',
    path: '/genai',
  },
];
