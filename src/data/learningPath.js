// Header/nav track list, ordered to the 16-phase, 1,600-day roadmap (100 days
// per phase, no separate prerequisite and no separate finale — see
// RoadmapHome.jsx): Python → FastAPI → Agentic AI using Python (Phases 1-3,
// all under /python) → JavaScript (Phase 4) → TypeScript (Phase 5, no nav
// entry yet) → React JS/Next JS (Phases 6-7) → React Native (Phase 8) →
// Express/Node JS (Phase 9, also under /nextjs) → J2SE/J2EE/JPA/Spring
// Boot/Microservices (Phases 10-14, all under /java) → DevOps (Phase 15) →
// AWS Cloud (Phase 16). DSA & System Design are practiced throughout, not a
// separate phase. GenAI (Agentic AI in JavaScript) is a separate, unmodified
// bonus track — distinct from the Python-based Agentic AI in Phase 3.
// Descriptions are dateless — personal calendar dates live only in the user's private schedule.
export const LEARNING_PATH = [
  {
    id: 'python',
    label: 'Python & AI',
    short: 'PY',
    desc: 'Phases 1–3 · Python, FastAPI & Agentic AI',
    path: '/python',
  },
  { id: 'thunder', label: 'Thunder', short: 'JS', desc: 'Phase 4 · JavaScript', path: '/' },
  {
    id: 'nextjs',
    label: 'React & Next.js',
    short: 'NX',
    desc: 'Phases 6–7 · React JS & Next JS',
    path: '/nextjs',
  },
  {
    id: 'mobile',
    label: 'React Native',
    short: 'RN',
    desc: 'Phase 8 · React Native',
    path: '/mobile',
  },
  {
    id: 'java',
    label: 'Java & Spring',
    short: 'JV',
    desc: 'Phases 10–14 · Java stack',
    path: '/java',
  },
  {
    id: 'devops',
    label: 'DevOps & CI/CD',
    short: 'DO',
    desc: 'Phase 15 · DevOps',
    path: '/devops',
  },
  {
    id: 'k8s',
    label: 'Kubernetes',
    short: 'K8s',
    desc: 'Phase 15 · DevOps',
    path: '/k8s',
  },
  {
    id: 'aws',
    label: '100 Days of AWS',
    short: 'AWS',
    desc: 'Phase 16 · AWS Cloud',
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
