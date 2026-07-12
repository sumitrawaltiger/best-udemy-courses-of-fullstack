// Cheat Sheets gallery — quick-reference images and PDFs for tools and topics.
// Each entry: { id, title, description, category, tags, image? , pdf? }
// Provide `image` for an image cheat sheet (with zoom) or `pdf` for a PDF one.
// Drop the file into public/cheatsheets/ with the matching filename.

export const CHEATSHEET_CATEGORIES = [
  { id: 'api-tools', label: 'API & Tools', icon: '🛠️' },
  { id: 'languages', label: 'Languages', icon: '💻' },
  { id: 'python', label: 'Python', icon: '🐍' },
  { id: 'devops-cloud', label: 'DevOps & Cloud', icon: '☁️' },
  { id: 'kubernetes', label: 'Kubernetes', icon: '☸️' },
  { id: 'java', label: 'Java', icon: '☕' },
  { id: 'react', label: 'React', icon: '⚛️' },
  { id: 'sql', label: 'SQL & Databases', icon: '🗄️' },
];

export const CHEAT_SHEETS = [
  {
    id: 'python-ultimate',
    title: 'Python — The Ultimate Cheat Sheet',
    description:
      'A one-page Python quick reference — basics, data structures, operators, control flow, functions, common modules, file handling, list comprehensions, exceptions, and handy snippets.',
    category: 'python',
    image: '/cheatsheets/python-ultimate-cheat-sheet.jpeg',
    tags: ['Python', 'Basics', 'Reference'],
  },
  {
    id: 'python-for-loops',
    title: 'For Loops in Python',
    description:
      'Everything about Python for loops — syntax, iterating over lists, strings, tuples, dictionaries and range(), loop control (break, continue, pass), nested loops, and quick tips.',
    category: 'python',
    image: '/cheatsheets/python-for-loops-cheat-sheet.jpeg',
    tags: ['Python', 'For Loop', 'Iteration'],
  },
  {
    id: 'python-loops',
    title: 'Loops in Python',
    description:
      'A visual guide to Python loops — for vs while, syntax and examples, loop control statements, common use cases, nested loops, and a side-by-side for/while cheat sheet.',
    category: 'python',
    image: '/cheatsheets/python-loops-cheat-sheet.jpeg',
    tags: ['Python', 'Loops', 'While'],
  },
  {
    id: 'python-dsa',
    title: 'DSA in Python',
    description:
      'Data Structures & Algorithms in Python at a glance — core data structures, basic examples, common algorithms, time complexity, real-world uses, and quick tips.',
    category: 'python',
    image: '/cheatsheets/python-dsa-cheat-sheet.jpeg',
    tags: ['Python', 'DSA', 'Algorithms'],
  },
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
    id: 'java-interview',
    title: 'Java Interview Cheat Sheet',
    description:
      'A one-page interview quick reference — OOP concepts, collections, exception handling, multithreading, Java 8+ features, and design patterns at a glance.',
    category: 'java',
    image: '/cheatsheets/java-interview-cheat-sheet.png',
    tags: ['Java', 'Interview', 'OOP'],
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
  {
    id: 'sql',
    title: 'SQL Cheat Sheet',
    description:
      'A visual SQL quick reference — basic commands, joins, indexing, CTEs, filtering, subqueries, transactions, window functions, set operations, views, aggregations, and triggers.',
    category: 'sql',
    image: '/cheatsheets/sql-cheat-sheet.jpg',
    tags: ['SQL', 'Database', 'Queries'],
  },
];
