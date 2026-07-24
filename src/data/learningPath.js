// Header/nav track list, ordered to the Python-first 1,600-day roadmap:
// Prerequisite (Gen AI & Agentic AI in Python) → Year 1 Python → Year 2 TypeScript
// (React & Next.js, React Native) → Year 3 Java → Year 4 DevOps (DevOps, Kubernetes, AWS)
// → System Design & Interview Prep finale. Thunder (JavaScript) is a separate, unmodified
// bonus track, not part of the main chronological path.
// Descriptions are dateless — personal calendar dates live only in the user's private schedule.
export const LEARNING_PATH = [
  {
    id: 'genai',
    label: 'GenAI & Agentic AI',
    short: 'GEN',
    desc: 'Prerequisite · Gen AI in Python',
    path: '/genai',
  },
  {
    id: 'python',
    label: 'Python & AI',
    short: 'PY',
    desc: 'Year 1 · Python stack',
    path: '/python',
  },
  {
    id: 'nextjs',
    label: 'React & Next.js',
    short: 'NX',
    desc: 'Year 2 · TypeScript stack',
    path: '/nextjs',
  },
  {
    id: 'mobile',
    label: 'React Native',
    short: 'RN',
    desc: 'Year 2 · TypeScript stack',
    path: '/mobile',
  },
  {
    id: 'java',
    label: 'Java & Spring',
    short: 'JV',
    desc: 'Year 3 · Java stack',
    path: '/java',
  },
  {
    id: 'devops',
    label: 'DevOps & CI/CD',
    short: 'DO',
    desc: 'Year 4 · DevOps',
    path: '/devops',
  },
  {
    id: 'k8s',
    label: 'Kubernetes',
    short: 'K8s',
    desc: 'Year 4 · DevOps',
    path: '/k8s',
  },
  {
    id: 'aws',
    label: '100 Days of AWS',
    short: 'AWS',
    desc: 'Year 4 · DevOps',
    path: '/aws',
  },
  {
    id: 'interview',
    label: 'System Design & Interview Prep',
    short: 'SD',
    desc: 'Finale · 100 days after Year 4',
    path: '/interview',
  },
  { id: 'thunder', label: 'Thunder', short: 'JS', desc: 'Bonus · 100 Days of JavaScript', path: '/' },
];
