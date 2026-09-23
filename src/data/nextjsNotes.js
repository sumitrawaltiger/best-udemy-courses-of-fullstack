// Next.js Handwritten Notes Series — illustrated episodes.
// Each episode pairs a hand-drawn one-page image (public/nextjs-notes/)
// with written notes + code snippets.

export const NEXTJS_NOTES_META = {
  title: 'Next.js Handwritten Notes Series',
  subtitle: 'The React Framework for the Web.',
  blurb:
    'Next.js from the ground up — illustrated, one episode at a time. What Next.js is, how it compares to React, why frameworks matter, its architecture, major features (SSR, SSG, API routes, image optimisation), file-based routing, and when to reach for it — each episode paired with full written notes and every code snippet.',
  totalEpisodes: 1,
  startDate: 'Year 2 · JavaScript Stack',
};

export const NEXTJS_NOTES_GROUPS = [
  { id: 'foundations', label: 'Foundations',  icon: '🏗️', desc: 'What Next.js is, why it exists, and how it compares to plain React.' },
  { id: 'routing',     label: 'Routing',      icon: '🗺️', desc: 'File-based routing, dynamic segments, layouts, and navigation.' },
  { id: 'rendering',   label: 'Rendering',    icon: '⚡', desc: 'SSR, SSG, ISR, and the App Router rendering model.' },
  { id: 'data',        label: 'Data',         icon: '🗄️', desc: 'Server Components, data fetching, caching, and API routes.' },
  { id: 'advanced',    label: 'Advanced',     icon: '🚀', desc: 'Auth, deployment, optimisation, and real-world patterns.' },
];

export const NEXTJS_NOTES_EPISODES = [
  {
    ep: 1,
    group: 'foundations',
    title: 'What is Next.js?',
    tagline: 'The React framework for the web — full-stack capabilities, built-in routing, and production-ready from day one.',
    image: '/nextjs-notes/next1.jpeg',
    tags: ['What is Next.js', 'React vs Next.js', 'Frameworks', 'SSR', 'SSG', 'Full-stack React', 'File-based Routing'],
    notes: [
      { k: 'What is Next.js?', v: 'Next.js is a React framework for the web. It builds on top of React and adds full-stack capabilities, built-in routing, rendering strategies, and optimisations — so you can focus on building your app rather than reinventing the wheel. "Build bigger with React."' },
      { k: 'React vs Next.js', v: 'React: UI library · Builds UI components · Client-side SPA · Needs extra tools for routing, data, etc. | Next.js: React framework · Full-stack capabilities · Built-in routing, rendering, API, etc. · Ready for production. Next.js builds on React — everything React can do, Next.js can do, plus much more.' },
      { k: 'Why Frameworks?', v: 'Building modern web apps is complex! You have to solve: Routing · Data fetching · SEO · Backend APIs · Optimisation · Deployment. Frameworks solve these for you! Focus on building your app, not reinventing the wheel.' },
      { k: 'Full-stack React', v: 'Next.js sits in the middle: Frontend (UI with React) ↔ Next.js ↔ Backend (API, database, etc.). It handles both the browser-rendered UI and server-side logic in a single framework.' },
      { k: 'Next.js Architecture (High Level)', v: 'Browser → Next.js (Routing ✓ · Rendering ✓ · API Routes ✓ · Optimisation ✓) → Database / External Services. Next.js acts as the full bridge between the browser and your data sources.' },
      { k: 'Major Features', v: 'Server-side Rendering (SSR) · Static Site Generation (SSG) · Built-in API routes · Image & Font Optimisation · File-based Routing · Great Developer Experience. Six pillars that make Next.js production-ready out of the box.' },
      { k: 'When to Use Next.js?', v: 'You\'re building a modern web application · You need SEO / fast performance · You want full-stack capabilities with React · You want a production-ready setup · You\'re building anything from a blog to a SaaS. If you\'re using React seriously, Next.js is almost always the right choice.' },
    ],
    snippets: [
      {
        label: 'Create a Next.js app',
        code: `# Create a new Next.js project
npx create-next-app@latest my-app
cd my-app
npm run dev
# → http://localhost:3000`,
      },
      {
        label: 'File-based routing — App Router structure',
        code: `app/
  page.jsx          → /
  about/
    page.jsx        → /about
  blog/
    [slug]/
      page.jsx      → /blog/:slug
  api/
    hello/
      route.js      → GET /api/hello`,
      },
      {
        label: 'Server-side Rendering vs Static Generation',
        code: `// SSR — runs on every request (App Router: default for Server Components)
export default async function Page() {
  const data = await fetch('https://api.example.com/data', {
    cache: 'no-store',   // always fresh
  });
  const json = await data.json();
  return <div>{json.title}</div>;
}

// SSG — runs at build time
export default async function Page() {
  const data = await fetch('https://api.example.com/data', {
    cache: 'force-cache',  // cached at build
  });
  const json = await data.json();
  return <div>{json.title}</div>;
}`,
      },
    ],
  },
];

export function getNextjsNotesEpisode(ep) {
  const n = Number(ep);
  return NEXTJS_NOTES_EPISODES.find((e) => e.ep === n);
}
