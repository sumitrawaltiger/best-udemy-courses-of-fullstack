// The complete 1461-day / 4-year learning path, phase by phase.
// Journey Day 1 = 5 Jul 2026; last day = 4 Jul 2030. Study 5:30–8:30 AM (3 hrs/day).
// Kept in sync with trackConfig.js, interviewSyllabus.js, learningPath.js and the
// [[four-year-plan]] memory. See those for the canonical per-phase windows.

export const ROADMAP_ARCS = [
  {
    id: 'frontend',
    label: 'Frontend & Core',
    range: 'Days 1–185',
    dates: '5 Jul 2026 – 4 Jan 2027',
    blurb: 'TypeScript-first web foundations — JavaScript, React, Next.js, and mobile.',
  },
  {
    id: 'backend',
    label: 'Backend & Cloud',
    range: 'Days 186–758',
    dates: '5 Jan 2027 – 30 Jul 2028',
    blurb: 'Server-side depth — Python & AI, Java & Spring, then AWS, DevOps, and Kubernetes.',
  },
  {
    id: 'interview',
    label: 'Interview & Mastery',
    range: 'Days 759–1462',
    dates: '31 Jul 2028 – 4 Jul 2030',
    blurb: 'System design, DSA, and a run of focused course sprints to interview-ready mastery.',
  },
];

export const ROADMAP_STATS = [
  { value: '1,461', label: 'days · 4 years' },
  { value: '≈4,383', label: 'study hours' },
  { value: '3 hrs', label: 'daily · 5:30–8:30 AM' },
  { value: '18', label: 'phases' },
];

export const ROADMAP_PHASES = [
  // ---------------- Frontend & Core ----------------
  {
    n: 1, arc: 'frontend', icon: '🟨',
    title: 'Thunder — JavaScript',
    window: '5 Jul – 12 Oct 2026', days: 100, dayRange: 'Days 1–100',
    source: 'Thunder++ · Rohit Negi', to: '/',
  },
  {
    n: 2, arc: 'frontend', icon: '⚛️',
    title: 'React & Next.js',
    window: '13 Oct – 26 Nov 2026', days: 45, dayRange: 'Days 101–145',
    source: 'Udemy · Anil Dollor', to: '/nextjs',
  },
  {
    n: 3, arc: 'frontend', icon: '📱',
    title: 'React Native',
    window: '27 Nov 2026 – 4 Jan 2027', days: 40, dayRange: 'Days 146–185',
    source: 'ChaiCode Mobile Cohort', to: '/mobile',
  },
  // ---------------- Backend & Cloud ----------------
  {
    n: 4, arc: 'backend', icon: '🐍',
    title: 'Python & Agentic AI',
    window: '5 Jan – 4 May 2027', days: 120, dayRange: 'Days 186–305',
    source: 'Ashok IT', to: '/python',
  },
  {
    n: 5, arc: 'backend', icon: '☕',
    title: 'Java & Spring',
    window: '5 May – 4 Oct 2027', days: 153, dayRange: 'Days 306–458',
    source: 'Udemy', to: '/java',
  },
  {
    n: 6, arc: 'backend', icon: '☁️',
    title: 'AWS Cloud',
    window: '5 Oct 2027 – 12 Jan 2028', days: 100, dayRange: 'Days 459–558',
    source: 'CloudFolksHub · KodeKloud', to: '/aws',
  },
  {
    n: 7, arc: 'backend', icon: '⚙️',
    title: 'DevOps',
    window: '13 Jan – 21 Apr 2028', days: 100, dayRange: 'Days 559–658',
    source: 'CloudFolksHub · KodeKloud · Udemy', to: '/devops',
  },
  {
    n: 8, arc: 'backend', icon: '☸️',
    title: 'Kubernetes',
    window: '22 Apr – 30 Jul 2028', days: 100, dayRange: 'Days 659–758',
    source: 'Udemy · KodeKloud', to: '/k8s',
  },
  // ---------------- Interview & Mastery ----------------
  {
    n: 9, arc: 'interview', icon: '🏗️',
    title: 'System Design',
    window: '31 Jul – 7 Nov 2028', days: 100, dayRange: 'Days 759–858',
    source: 'ChaiCode + GeeksForGeeks', to: '/interview',
  },
  {
    n: 10, arc: 'interview', icon: '🧮',
    title: 'Data Structures',
    window: '8 Nov 2028 – 15 Feb 2029', days: 100, dayRange: 'Days 859–958',
    source: 'ChaiCode', to: '/interview#dsa-foundations',
  },
  {
    n: 11, arc: 'interview', icon: '🧠',
    title: '100 Days of JavaScript DSA',
    window: '16 Feb – 26 May 2029', days: 100, dayRange: 'Days 959–1058',
    source: 'Udemy · Elshad Karimov',
    href: 'https://www.udemy.com/course/javascript-data-structures-and-algorithms/',
  },
  {
    n: 12, arc: 'interview', icon: '⚛️',
    title: '50 Days React Bootcamp',
    window: '27 May – 15 Jul 2029', days: 50, dayRange: 'Days 1059–1108',
    source: 'Udemy · Sufa Digital',
    href: 'https://www.udemy.com/course/build-real-world-application-projects-using-react/',
  },
  {
    n: 13, arc: 'interview', icon: '🐍',
    title: '100 Days of Python',
    window: '16 Jul – 23 Oct 2029', days: 100, dayRange: 'Days 1109–1208',
    source: 'Udemy · Dr. Angela Yu',
    href: 'https://www.udemy.com/course/100-days-of-code/',
  },
  {
    n: 14, arc: 'interview', icon: '🟨',
    title: '100 Days of JavaScript',
    window: '24 Oct 2029 – 31 Jan 2030', days: 100, dayRange: 'Days 1209–1308',
    source: 'Udemy · Ewomazino Akpareva',
    href: 'https://www.udemy.com/course/100-days-of-javascript/',
  },
  {
    n: 15, arc: 'interview', icon: '🧩',
    title: 'LeetCode in Java',
    window: '1 Feb – 22 Mar 2030', days: 50, dayRange: 'Days 1309–1358',
    source: 'Udemy · Holczer Balazs',
    href: 'https://www.udemy.com/course/leetcode-in-java-algorithms-coding-interview-questions/',
  },
  {
    n: 16, arc: 'interview', icon: '☕',
    title: '60 Days of Java Masterclass',
    window: '23 Mar – 21 May 2030', days: 60, dayRange: 'Days 1359–1418',
    source: 'Udemy · Denis Panjuta',
    href: 'https://www.udemy.com/course/javamasterclass/',
  },
  {
    n: 17, arc: 'interview', icon: '🟨',
    title: '30 JavaScript Projects',
    window: '22 May – 20 Jun 2030', days: 30, dayRange: 'Days 1419–1448',
    source: 'Udemy · Course Max One',
    href: 'https://www.udemy.com/course/30-javascript-projects-in-30-days/',
  },
  {
    n: 18, arc: 'interview', icon: '🐼', final: true,
    title: 'Two-Week Python Bootcamp',
    window: '21 Jun – 4 Jul 2030', days: 14, dayRange: 'Days 1449–1462',
    source: 'Udemy · Ayman Khoshouey',
    href: 'https://www.udemy.com/course/learn-python-from-start-to-unlimited/',
  },
];
