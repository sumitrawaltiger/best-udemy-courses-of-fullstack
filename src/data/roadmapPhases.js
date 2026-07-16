// The complete 1461-day / 4-year learning path, phase by phase.
// Journey Day 1 = 17 Jul 2026; last day = 16 Jul 2030. Study 5:00–8:00 AM (3 hrs/day), 4 AM wake-up.
// Re-sequenced into four stack-years: each year's dates contain only that year's stack,
// with DSA & System Design practiced in that year's language (Y1 JS, Y2 Python, Y3 Java).

export const ROADMAP_ARCS = [
  {
    id: 'y1',
    label: 'Year 1 · TypeScript Stack',
    range: 'Days 1–365',
    dates: '17 Jul 2026 – 16 Jul 2027',
    blurb: 'The TypeScript stack end to end — JS, React, Next.js, React Native, Node/Express, plus DSA & system design in JavaScript.',
  },
  {
    id: 'y2',
    label: 'Year 2 · Python Stack',
    range: 'Days 366–731',
    dates: '17 Jul 2027 – 16 Jul 2028',
    blurb: 'Core Python, Django, and Agentic AI, with DSA & system design practiced in Python.',
  },
  {
    id: 'y3',
    label: 'Year 3 · Java Stack',
    range: 'Days 732–1096',
    dates: '17 Jul 2028 – 16 Jul 2029',
    blurb: 'Spring Boot, microservices, and design patterns, with DSA & system design practiced in Java.',
  },
  {
    id: 'y4',
    label: 'Year 4 · DevOps & Cloud',
    range: 'Days 1097–1461',
    dates: '17 Jul 2029 – 16 Jul 2030',
    blurb: 'Ship and scale everything — AWS, Docker, Kubernetes, and DevOps with CI/CD.',
  },
];

export const ROADMAP_STATS = [
  { value: '1,461', label: 'days · 4 years' },
  { value: '≈4,383', label: 'study hours' },
  { value: '3 hrs', label: 'daily · 5:00–8:00 AM' },
  { value: '20', label: 'phases · 4 stacks' },
];

export const ROADMAP_PHASES = [
  // ---------------- Year 1 · TypeScript Stack ----------------
  {
    n: 1, arc: 'y1', icon: '🟨',
    title: 'Thunder — JavaScript',
    window: '17 Jul – 24 Oct 2026', days: 100, dayRange: 'Days 1–100',
    source: 'Thunder++ · Rohit Negi', to: '/',
  },
  {
    n: 2, arc: 'y1', icon: '⚛️',
    title: 'React & Next.js',
    window: '25 Oct – 13 Dec 2026', days: 50, dayRange: 'Days 101–150',
    source: 'Udemy · Anil Dollor', to: '/nextjs',
  },
  {
    n: 3, arc: 'y1', icon: '📱',
    title: 'React Native',
    window: '14 Dec 2026 – 22 Jan 2027', days: 40, dayRange: 'Days 151–190',
    source: 'ChaiCode Mobile Cohort', to: '/mobile',
  },
  {
    n: 4, arc: 'y1', icon: '🟢',
    title: 'Express / Node.js',
    window: '23 Jan – 16 Feb 2027', days: 25, dayRange: 'Days 191–215',
    source: 'Thunder++ · Rohit Negi', to: '/',
  },
  {
    n: 5, arc: 'y1', icon: '🧠',
    title: 'DSA in JavaScript',
    window: '17 Feb – 27 May 2027', days: 100, dayRange: 'Days 216–315',
    source: 'Udemy · Elshad Karimov',
    href: 'https://www.udemy.com/course/javascript-data-structures-and-algorithms/',
  },
  {
    n: 6, arc: 'y1', icon: '🏗️',
    title: 'System Design in JavaScript',
    window: '28 May – 16 Jul 2027', days: 50, dayRange: 'Days 316–365',
    source: 'ChaiCode + GeeksForGeeks', to: '/interview',
  },
  // ---------------- Year 2 · Python Stack ----------------
  {
    n: 7, arc: 'y2', icon: '🐍',
    title: 'Python',
    window: '17 Jul – 24 Oct 2027', days: 100, dayRange: 'Days 366–465',
    source: 'Udemy · Dr. Angela Yu', to: '/python',
  },
  {
    n: 8, arc: 'y2', icon: '🎸',
    title: 'Django',
    window: '25 Oct – 29 Dec 2027', days: 66, dayRange: 'Days 466–531',
    source: 'Udemy',
    href: 'https://www.udemy.com/course/django-course/',
  },
  {
    n: 9, arc: 'y2', icon: '🤖',
    title: 'Agentic AI in Python',
    window: '30 Dec 2027 – 17 Feb 2028', days: 50, dayRange: 'Days 532–581',
    source: 'Ashok IT / Piyush Garg', to: '/python',
  },
  {
    n: 10, arc: 'y2', icon: '🧠',
    title: 'DSA in Python',
    window: '18 Feb – 27 May 2028', days: 100, dayRange: 'Days 582–681',
    source: 'Udemy / ChaiCode', to: '/interview',
  },
  {
    n: 11, arc: 'y2', icon: '🏗️',
    title: 'System Design in Python',
    window: '28 May – 16 Jul 2028', days: 50, dayRange: 'Days 682–731',
    source: 'ChaiCode + GeeksForGeeks', to: '/interview',
  },
  // ---------------- Year 3 · Java Stack ----------------
  {
    n: 12, arc: 'y3', icon: '☕',
    title: 'Java & Spring Boot',
    window: '17 Jul – 24 Oct 2028', days: 100, dayRange: 'Days 732–831',
    source: 'Udemy', to: '/java',
  },
  {
    n: 13, arc: 'y3', icon: '🧩',
    title: 'Microservices',
    window: '25 Oct – 23 Dec 2028', days: 60, dayRange: 'Days 832–891',
    source: 'Udemy', to: '/java',
  },
  {
    n: 14, arc: 'y3', icon: '📐',
    title: 'Java Design Patterns',
    window: '24 Dec 2028 – 6 Feb 2029', days: 45, dayRange: 'Days 892–936',
    source: 'Udemy', to: '/java',
  },
  {
    n: 15, arc: 'y3', icon: '🧠',
    title: 'DSA in Java',
    window: '7 Feb – 17 May 2029', days: 100, dayRange: 'Days 937–1036',
    source: 'Udemy · Holczer Balazs',
    href: 'https://www.udemy.com/course/leetcode-in-java-algorithms-coding-interview-questions/',
  },
  {
    n: 16, arc: 'y3', icon: '🏗️',
    title: 'System Design in Java',
    window: '18 May – 16 Jul 2029', days: 60, dayRange: 'Days 1037–1096',
    source: 'ChaiCode + GeeksForGeeks', to: '/interview',
  },
  // ---------------- Year 4 · DevOps & Cloud ----------------
  {
    n: 17, arc: 'y4', icon: '☁️',
    title: 'AWS Cloud',
    window: '17 Jul – 24 Oct 2029', days: 100, dayRange: 'Days 1097–1196',
    source: 'CloudFolksHub / KodeKloud', to: '/aws',
  },
  {
    n: 18, arc: 'y4', icon: '🐳',
    title: 'Docker',
    window: '25 Oct – 3 Dec 2029', days: 40, dayRange: 'Days 1197–1236',
    source: 'Udemy / KodeKloud', to: '/k8s',
  },
  {
    n: 19, arc: 'y4', icon: '☸️',
    title: 'Kubernetes',
    window: '4 Dec 2029 – 13 Mar 2030', days: 100, dayRange: 'Days 1237–1336',
    source: 'Udemy / KodeKloud', to: '/k8s',
  },
  {
    n: 20, arc: 'y4', icon: '⚙️', final: true,
    title: 'DevOps & CI/CD',
    window: '14 Mar – 16 Jul 2030', days: 125, dayRange: 'Days 1337–1461',
    source: 'CloudFolksHub / KodeKloud', to: '/devops',
  },
];
