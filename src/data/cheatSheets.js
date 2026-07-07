// Cheat Sheets gallery — quick-reference images and PDFs for tools and topics.
// Each entry: { id, title, description, category, tags, image? , pdf? }
// Provide `image` for an image cheat sheet (with zoom) or `pdf` for a PDF one.
// Drop the file into public/cheatsheets/ with the matching filename.

export const CHEATSHEET_CATEGORIES = [
  { id: 'api-tools', label: 'API & Tools', icon: '🛠️' },
  { id: 'languages', label: 'Languages', icon: '💻' },
  { id: 'devops-cloud', label: 'DevOps & Cloud', icon: '☁️' },
  { id: 'kubernetes', label: 'Kubernetes', icon: '☸️' },
  { id: 'java', label: 'Java', icon: '☕' },
  { id: 'react', label: 'React', icon: '⚛️' },
];

export const CHEAT_SHEETS = [
  {
    id: 'postman',
    title: 'Postman Cheat Sheet',
    description:
      'A quick reference for API testing with Postman — HTTP methods, requests, auth types, variables, pre-request & test scripts, status codes, and handy shortcuts.',
    category: 'api-tools',
    image: '/cheatsheets/postman-cheat-sheet.jpg',
    tags: ['Postman', 'API Testing', 'REST'],
  },
  {
    id: 'linux-essential-commands',
    title: 'Linux Essential Commands',
    description:
      '25 essential Linux commands every developer should know — navigating the filesystem, working with files, searching, archiving, permissions, and managing processes.',
    category: 'devops-cloud',
    image: '/cheatsheets/linux-essential-commands.jpg',
    tags: ['Linux', 'CLI', 'Shell'],
  },
  {
    id: 'devops',
    title: 'DevOps Cheat Sheet',
    description:
      'A handy DevOps quick reference — core tools and commands across CI/CD, containers, orchestration, and cloud workflows, bundled as a downloadable PDF.',
    category: 'devops-cloud',
    pdf: '/cheatsheets/devops-cheat-sheet.pdf',
    tags: ['DevOps', 'CI/CD', 'PDF'],
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes Cheat Sheet',
    description:
      '40 essential kubectl commands grouped by task — context & config, viewing resources, updating & creating, scaling, interacting with pods, and managing nodes & clusters.',
    category: 'kubernetes',
    image: '/cheatsheets/kubernetes-cheat-sheet.jpg',
    tags: ['Kubernetes', 'kubectl', 'k8s'],
  },
  {
    id: 'java',
    title: 'Java Cheat Sheet',
    description:
      'A comprehensive Java quick reference — syntax, data types, OOP, collections, streams, and core APIs, bundled as a downloadable PDF.',
    category: 'java',
    pdf: '/cheatsheets/java-cheat-sheet.pdf',
    tags: ['Java', 'Core Java', 'PDF'],
  },
  {
    id: 'react',
    title: 'React 19 Cheat Sheet',
    description:
      'A React 19 quick reference — components, JSX, props & state, hooks, and the latest React 19 features, bundled as a downloadable PDF.',
    category: 'react',
    pdf: '/cheatsheets/react-cheat-sheet.pdf',
    tags: ['React', 'Hooks', 'PDF'],
  },
  {
    id: 'react-quickref',
    title: 'React Cheat Sheet — Quick Reference',
    description:
      'A concise React quick-reference covering components, JSX, props, state, hooks, and common patterns — a compact companion PDF.',
    category: 'react',
    pdf: '/cheatsheets/react-cheat-sheet-v2.pdf',
    tags: ['React', 'JSX', 'PDF'],
  },
];
