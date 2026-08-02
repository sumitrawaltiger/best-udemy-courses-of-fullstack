// React series notes — illustrated episodes, one per episode, by Neon Dev (@neon_time).
// Each episode pairs a hand-drawn one-page image (public/react-notes/) with
// written notes + code snippets.

export const REACT_META = {
  title: 'The React Series',
  subtitle: 'Illustrated Episodes · React from Zero to Production',
  blurb:
    'React from the ground up — illustrated, one episode at a time. Component-based thinking, the Virtual DOM, JSX, hooks (useState, useEffect, useRef, useContext), state management, routing, performance optimisation, and real-world patterns — each episode paired with the full written notes and every code snippet.',
  totalDays: 1,
  startDate: '7 Mar 2028',
};

export const REACT_GROUPS = [
  { id: 'foundations', label: 'Getting Started', icon: '⚛️', desc: 'What React is, why it matters, and how to set it up.' },
  { id: 'components', label: 'Components & JSX', icon: '🧩', desc: 'JSX, props, children, and building reusable UI pieces.' },
  { id: 'hooks', label: 'Hooks', icon: '🪝', desc: 'useState, useEffect, useRef, useContext, and custom hooks.' },
  { id: 'state', label: 'State & Data Flow', icon: '📦', desc: 'State management, Context API, lifting state, and data flow.' },
  { id: 'routing', label: 'Routing', icon: '🗺️', desc: 'React Router, navigation, URL params, and protected routes.' },
  { id: 'performance', label: 'Performance', icon: '⚡', desc: 'useMemo, useCallback, React.memo, lazy loading, code splitting.' },
  { id: 'patterns', label: 'Patterns', icon: '🏗️', desc: 'Real-world patterns, forms, error boundaries, and custom hooks.' },
  { id: 'real-world', label: 'Real Projects', icon: '🌍', desc: 'Building complete apps with TypeScript, testing, and deployment.' },
];

export const REACT_DAYS = [
  {
    day: 1,
    date: '7 Mar 2028',
    group: 'foundations',
    title: 'What is React?',
    tagline: 'A JavaScript library for building user interfaces — fast, component-based, and declarative.',
    image: '/react-notes/ep01-what-is-react.jpeg',
    tags: ['What is React', 'Components', 'Virtual DOM', 'Declarative', 'JavaScript Library'],
    notes: [
      { k: 'What is React?', v: 'React is a **JavaScript library** for building user interfaces, especially single page applications. It lets you build UI using small, reusable pieces called **components**.' },
      { k: 'Component Based', v: 'Build reusable UI pieces — each component is an independent, self-contained block that manages its own look and logic.' },
      { k: 'Declarative', v: 'You describe **what the UI should look like** at any given moment; React handles updating the DOM to match. No manual DOM manipulation needed.' },
      { k: 'Learn Once, Write Anywhere', v: 'Use the same React knowledge for **Web** (React DOM), **Mobile** (React Native), and more — one mental model, many platforms.' },
      { k: 'Virtual DOM', v: 'React keeps a lightweight copy of the DOM in memory. When state changes, it **diffs the Virtual DOM** against the previous version and updates only what changed — making it fast.' },
      { k: 'Library, not a Framework', v: 'React handles only the **view layer**. You choose your own router (React Router), state manager (Redux / Zustand), and data-fetching tool (TanStack Query).' },
      { k: 'Meta (Facebook) → Linux Foundation', v: 'Created by Facebook (Meta), now part of the **Linux Foundation**. Powers Facebook, Instagram, WhatsApp Web, and thousands more apps.' },
      { k: 'Components & State', v: 'The two core ideas: **components** describe what the UI looks like, **state** is the data that makes the UI dynamic and interactive.' },
    ],
    theory: [
      {
        h: 'What is React?',
        p: 'React is an open-source **JavaScript library** for building user interfaces, especially **Single Page Applications (SPAs)**.\n\nIt was created by Facebook (now Meta) and is now maintained under the Linux Foundation. React powers the frontends of Facebook, Instagram, WhatsApp Web, Airbnb, Netflix, and thousands more.\n\nThe core idea: instead of writing HTML and then manipulating it with JavaScript, you describe your UI as **components** — small, independent, reusable pieces — and React keeps the screen in sync with your data automatically.',
      },
      {
        h: 'Why React?',
        p: '**1. Component Based** — Build reusable UI pieces. A Navbar, a Card, a Button — each is a component you write once and use anywhere.\n\n**2. Declarative** — You describe what the UI should look like. React figures out what changed and updates only that part of the DOM.\n\n**3. Learn Once, Write Anywhere** — The same component model works for Web (React DOM), Mobile (React Native), and desktop (Electron with React).\n\n**4. Large Community** — The biggest frontend library community. Thousands of libraries, tutorials, and jobs.\n\n**5. High Performance** — The Virtual DOM diffing algorithm makes UI updates fast, even in large, complex applications.',
      },
      {
        h: 'How React Works (At a High Level)',
        p: 'The React rendering cycle has four steps:\n\n**Step 1 — You write React code** — Components written in JSX (HTML-like syntax inside JavaScript).\n\n**Step 2 — React creates the Virtual DOM** — A lightweight JavaScript object tree that mirrors the real browser DOM.\n\n**Step 3 — React compares changes** — When state or props change, React builds a new Virtual DOM tree and diffs it against the previous one (Reconciliation).\n\n**Step 4 — Only what changed gets updated** — React applies the minimum number of real DOM operations needed. No full-page repaints.\n\nThis makes React apps **fast** and **efficient**.',
      },
      {
        h: 'Key Points',
        p: '- React is a **library**, not a full framework — it handles the view layer only.\n- It is maintained by **Meta (Facebook)** and is now part of the **Linux Foundation**.\n- React started as an open-source project in 2013 and is now the most widely used frontend library in the world.\n- React is fundamentally about two things: **components** (what the UI looks like) and **state** (the data that makes it dynamic).',
      },
      {
        h: 'Examples of What You Can Build',
        p: '- **Web Apps** — Gmail-style single page apps with complex state.\n- **E-commerce Sites** — Product listings, shopping carts, checkout flows.\n- **Social Media Apps** — Real-time feeds, notifications, messaging.\n- **Dashboards & Tools** — Data-heavy admin panels, analytics boards.\n- **Mobile Apps** — iOS and Android apps with React Native, using the same component knowledge.',
      },
      {
        h: 'Analogy',
        p: 'Think of React components like **puzzle pieces**. Each piece (component) is independent and reusable. You combine them to build a complete picture (the full UI).\n\nA Navbar piece goes at the top. A Sidebar piece on the left. A Card piece repeated for each product. Swap one piece out — only that piece changes, not the whole puzzle.',
      },
      {
        h: 'Quick Summary',
        p: 'React is a **JavaScript library** by **Meta (Facebook)**, now part of the **Linux Foundation**.\n\nIt helps you build **fast**, **scalable**, and **interactive** user interfaces using **components**.\n\nThe key ideas: components describe the UI, state makes it dynamic, the Virtual DOM makes updates fast, and the declarative model keeps your code simple.',
      },
    ],
    snippets: [
      {
        label: 'Your first React component',
        code: '// A functional component — the basic building block\nfunction Welcome({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\n\n// Using the component\nfunction App() {\n  return (\n    <div>\n      <Welcome name="Sumit" />\n      <Welcome name="React" />\n    </div>\n  );\n}',
        note: 'Components are just functions that return JSX. Props (like `name`) pass data from parent to child.',
      },
      {
        label: 'Component + State — the two core ideas',
        code: 'import { useState } from "react";\n\nfunction Counter() {\n  // State: count is the data, setCount updates it\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}',
        note: 'Every time setCount is called, React re-renders the component with the new count — only the changed DOM node updates.',
      },
      {
        label: 'Virtual DOM — what actually happens',
        code: '// Before click — Virtual DOM:\n// <p>Count: 0</p>  <button>Click me</button>\n\n// After setCount(1) — new Virtual DOM:\n// <p>Count: 1</p>  <button>Click me</button>\n\n// React diffs the two trees:\n// Only "Count: 0" → "Count: 1" changed.\n// React updates ONLY that text node in the Real DOM.\n// The <button> is untouched — no repaint needed.',
        note: 'The Virtual DOM diff is why React is fast. Only the exact minimum DOM mutations are applied on each render.',
      },
    ],
  },
];

export function getReactDay(day) {
  const n = Number(day);
  return REACT_DAYS.find((d) => d.day === n);
}
