// Next.js Handwritten Notes Series — illustrated episodes.
// Each episode pairs a hand-drawn one-page image (public/nextjs-notes/)
// with written notes + code snippets.

export const NEXTJS_NOTES_META = {
  title: 'Next.js Handwritten Notes Series',
  subtitle: 'The React Framework for the Web.',
  blurb:
    'Next.js from the ground up — illustrated, one episode at a time. What Next.js is, how it compares to React, why frameworks matter, its architecture, major features (SSR, SSG, API routes, image optimisation), file-based routing, and when to reach for it — each episode paired with full written notes and every code snippet.',
  totalEpisodes: 2,
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

  {
    ep: 2,
    group: 'foundations',
    title: 'Next.js vs React',
    tagline: 'Same React. More Power — understand exactly what Next.js adds on top of plain React.',
    image: '/nextjs-notes/next2.jpeg',
    tags: ['Next.js vs React', 'SSR', 'SSG', 'Client-side Rendering', 'File-based Routing', 'Full-stack Framework'],
    notes: [
      { k: 'React (Library)', v: 'UI library · Client-side SPA · Focus on components · Needs extra tools for routing, data, backend, etc. React gives you just the UI — everything else you have to wire up yourself.' },
      { k: 'Next.js (Framework)', v: 'Built on React · Server-side rendering (SSR) · Static generation (SSG) · Built-in routing, APIs and more · Production-ready out of the box · Full-stack framework (Frontend + Backend). "Next.js is React + Superpowers."' },
      { k: 'Rendering Comparison — CSR (React)', v: 'Client-side Rendering: Blank page → JS loads → Content. The browser downloads an empty HTML shell, then JavaScript runs and fills in the content. Slower initial load — bad for SEO because the page is empty until JS executes.' },
      { k: 'Rendering Comparison — SSR (Next.js)', v: 'Server-side Rendering: Server renders → Browser gets HTML → Content displayed. The server builds the full HTML on each request and sends it to the browser ready to read. Faster initial load — great for SEO and dynamic data.' },
      { k: 'Rendering Comparison — SSG (Next.js)', v: 'Static Generation: Pre-built at build time → Served to all users. HTML is generated once at build time and served from a CDN to every visitor. Super fast — ideal for pages whose content doesn\'t change often (blog, docs, marketing).' },
      { k: 'Routing — React vs Next.js', v: 'React: Needs React Router installed separately. You manually define every route: `/home → <Home />`, `/about → <About />`. | Next.js: File-based routing built in. Create `app/about/page.js` and `/about` just works. No config needed.' },
      { k: 'When to Use Next.js?', v: 'You want a full-stack React framework · You need better SEO / performance · You want built-in routing and API routes · You\'re building a production-ready app · You want to focus on building, not setup. "Same React, Bigger Possibilities!"' },
    ],
    snippets: [
      {
        label: 'React routing (needs react-router-dom)',
        code: `// React — must install react-router-dom separately
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"       element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}`,
      },
      {
        label: 'Next.js routing — file-based, zero config',
        code: `// Next.js App Router — just create files, routing is automatic
app/
  page.jsx          →  /
  about/
    page.jsx        →  /about
  contact/
    page.jsx        →  /contact
  blog/
    [slug]/
      page.jsx      →  /blog/:slug   (dynamic route)`,
      },
      {
        label: 'CSR vs SSR vs SSG data fetching',
        code: `// CSR (React) — fetch runs in the browser after JS loads
useEffect(() => {
  fetch('/api/data').then(r => r.json()).then(setData);
}, []);

// SSR (Next.js) — fetch runs on the server per request
export default async function Page() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'no-store',   // fresh on every request
  });
  const data = await res.json();
  return <div>{data.title}</div>;
}

// SSG (Next.js) — fetch runs once at build time
export default async function Page() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'force-cache',  // cached forever (rebuild to update)
  });
  const data = await res.json();
  return <div>{data.title}</div>;
}`,
      },
    ],
  },
];

export function getNextjsNotesEpisode(ep) {
  const n = Number(ep);
  return NEXTJS_NOTES_EPISODES.find((e) => e.ep === n);
}
