// Cheat Sheets gallery — quick-reference images and PDFs for tools and topics.
// Each entry: { id, title, description, category, tags, image? , pdf? }
// Provide `image` for an image cheat sheet (with zoom) or `pdf` for a PDF one.
// Drop the file into public/cheatsheets/ with the matching filename.

export const CHEATSHEET_CATEGORIES = [
  { id: 'api-tools', label: 'API & Tools', icon: '🛠️' },
  { id: 'languages', label: 'Languages', icon: '💻' },
  { id: 'javascript', label: 'JavaScript', icon: '🟨' },
  { id: 'python', label: 'Python', icon: '🐍' },
  { id: 'devops-cloud', label: 'DevOps & Cloud', icon: '☁️' },
  { id: 'git', label: 'Git & GitHub', icon: '🐙' },
  { id: 'kubernetes', label: 'Kubernetes', icon: '☸️' },
  { id: 'java', label: 'Java', icon: '☕' },
  { id: 'react', label: 'React', icon: '⚛️' },
  { id: 'sql', label: 'SQL & Databases', icon: '🗄️' },
  { id: 'system-design', label: 'System Design', icon: '📐' },
];

export const CHEAT_SHEETS = [
  {
    id: 'javascript-series-47',
    title: 'The JavaScript Series — 47 Illustrated Episodes',
    description:
      'A complete hand-drawn JavaScript journey in 47 one-page episodes. Starts with the history — the origins of JS, the Browser Wars, ECMAScript standardization, the Dark Ages, ES5 and the ES6+ game changer — then walks the language itself: variables, types, functions, arrays, objects, strings, scope, closures, this, prototypes, DOM & events, event delegation, async/await, promises, Fetch API, LocalStorage & SessionStorage, modules, iterators, generators, and finishes with how the JavaScript engine actually runs your code.',
    category: 'javascript',
    pdf: '/cheatsheets/javascript-series-47-episodes.pdf',
    tags: ['JavaScript', 'ES6+', 'DOM', 'Async', 'Fetch', 'JS Engine', '47 Episodes'],
  },
  {
    id: 'javascript-objects',
    title: 'JavaScript Objects Cheat Sheet',
    description:
      'Every Object method at a glance — creating objects (object literals, Object.create()), accessing properties (dot/bracket notation, computed property names), iterating (keys(), values(), entries(), fromEntries()), copying & merging (spread syntax, Object.assign()), property descriptors (defineProperty(), getOwnPropertyDescriptor()), immutability helpers (freeze(), seal(), preventExtensions()), checking properties (hasOwn(), the in operator), and prototypes (getPrototypeOf(), setPrototypeOf()) — each with a runnable code example. By @thedevspaceio (Full-Stack AI Developer Roadmap).',
    category: 'javascript',
    pdf: '/cheatsheets/javascript-objects-cheat-sheet.pdf',
    tags: ['JavaScript', 'Objects', 'Object.keys', 'Prototypes', 'Immutability'],
  },
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
    id: 'python-basics',
    title: 'Python Basics — Full Revision Notes',
    description:
      'A full revision sheet for Python fundamentals — what Python is, key features, syntax rules, keywords & identifiers, variables, data types overview, and exam tips.',
    category: 'python',
    image: '/cheatsheets/python-basics-revision-notes.jpeg',
    tags: ['Python', 'Basics', 'Revision'],
  },
  {
    id: 'python-lists',
    title: 'Python Lists',
    description:
      'Everything about Python lists — definition, key features, creating & accessing lists, indexing & slicing, list methods, list comprehension, and list vs tuple.',
    category: 'python',
    image: '/cheatsheets/python-lists-cheat-sheet.jpeg',
    tags: ['Python', 'Lists', 'Data Structures'],
  },
  {
    id: 'python-tuples',
    title: 'Python Tuples',
    description:
      'A complete Python tuples reference — definition, key features, creating & accessing tuples, common operations, methods, packing & unpacking, and tuple vs list.',
    category: 'python',
    image: '/cheatsheets/python-tuples-cheat-sheet.jpeg',
    tags: ['Python', 'Tuples', 'Immutable'],
  },
  {
    id: 'python-dictionaries',
    title: 'Python Dictionaries',
    description:
      'A complete Python dictionaries reference — definition, key features, creating & updating, common operations, methods, iterating, dict vs list, and revision points.',
    category: 'python',
    image: '/cheatsheets/python-dictionaries-cheat-sheet.jpeg',
    tags: ['Python', 'Dictionaries', 'Key-Value'],
  },
  {
    id: 'python-quick',
    title: 'Python Cheat Sheet — Quick Reference',
    description:
      'A one-page Python quick reference with code snippets — basics (print, variables, type, input), data types (list, tuple, set, dict), conditionals, loops, functions, classes, file operations, and error handling.',
    category: 'python',
    image: '/cheatsheets/python-quick-cheat-sheet.jpg',
    tags: ['Python', 'Reference', 'Snippets'],
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
    id: 'git-github',
    title: 'Git & GitHub Cheat Sheet',
    description:
      'A 14-page Git & GitHub datasheet — an introduction (what & why Git, its features, and GitHub), configuring Git for the first time, general features (init, staging, committing, status & log), git help, branching (create, list, switch, delete, merge), working with GitHub (push/pull repos and branches), and undoing changes (revert, reset, amend).',
    category: 'git',
    pdf: '/cheatsheets/git-github-cheat-sheet.pdf',
    tags: ['Git', 'GitHub', 'Branching', 'Version Control'],
  },
  {
    id: 'devops',
    title: 'DevOps Cheat Sheet',
    description:
      'A comprehensive 286-page DevOps reference covering Linux and shell scripting, version control, CI/CD, infrastructure as code, containers, Kubernetes, cloud platforms, monitoring, security, and production workflows.',
    category: 'devops-cloud',
    pdf: '/cheatsheets/devops-cheat-sheet.pdf',
    tags: ['DevOps', 'CI/CD', 'Docker', 'Kubernetes', 'Cloud', '286 Pages'],
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
  {
    id: 'system-design',
    title: 'System Design Cheat Sheet',
    description:
      'A one-page system design reference — the 5 pillars, a design approach, scale estimation, core components, high-level architecture, storage options, scaling strategies, consistency models, bottlenecks, design patterns, fault tolerance, the CAP theorem, worked examples, key metrics, and interview tips.',
    category: 'system-design',
    image: '/cheatsheets/system-design-cheat-sheet.jpg',
    tags: ['System Design', 'Architecture', 'Interview'],
  },
  {
    id: 'networking',
    title: 'Networking Cheat Sheet',
    description:
      'A side-by-side networking reference mapping each core network element to its AWS, Azure, and Google Cloud equivalent — VPC / Virtual Network, subnets, load balancers, firewall / WAF, CDN, dedicated connectivity, VPN, DDoS protection, DNS, monitoring, security groups, route tables, and peering.',
    category: 'devops-cloud',
    image: '/cheatsheets/networking-cheat-sheet.jpg',
    tags: ['Networking', 'AWS', 'Azure', 'GCP'],
  },
];
