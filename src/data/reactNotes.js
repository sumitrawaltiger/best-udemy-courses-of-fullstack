// React series notes — illustrated episodes, one per episode, by Neon Dev (@neon_time).
// Each episode pairs a hand-drawn one-page image (public/react-notes/) with
// written notes + code snippets.

export const REACT_META = {
  title: 'The React Series',
  subtitle: 'Illustrated Episodes · React from Zero to Production',
  blurb:
    'React from the ground up — illustrated, one episode at a time. Component-based thinking, the Virtual DOM, JSX, hooks (useState, useEffect, useRef, useContext), state management, routing, performance optimisation, and real-world patterns — each episode paired with the full written notes and every code snippet.',
  totalDays: 8,
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
  // ── Episode 2 ─────────────────────────────────────────────────────────────
  {
    day: 2,
    date: '8 Mar 2028',
    group: 'foundations',
    title: 'Installing React & Project Structure',
    tagline: 'Set up your first React project with Create React App and understand every file it creates.',
    image: '/react-notes/ep02-installing-react.jpeg',
    tags: ['Create React App', 'CRA', 'Project Structure', 'npm start', 'Setup'],
    notes: [
      { k: 'Create React App (CRA)', v: 'The easiest way to start a new React project is using **Create React App (CRA)**. Run `npx create-react-app my-react-app` to scaffold a complete project instantly.' },
      { k: 'Setup Steps', v: '1. Open your terminal. 2. Run `npx create-react-app my-react-app`. 3. Wait for installation to complete. 4. Run `cd my-react-app` then `npm start`.' },
      { k: 'public/ folder', v: 'Contains **static files** like `index.html`, favicon, and other assets that are served directly — React mounts your app inside the `<div id="root">` in `index.html`.' },
      { k: 'src/ folder', v: 'Contains **all source code** of the application — your components, styles, and logic live here. Changes here reflect instantly in the browser.' },
      { k: 'index.js', v: 'The **entry point** of your React application. It renders `<App />` inside the root div using `ReactDOM.createRoot()`.' },
      { k: 'App.js', v: 'The **main App component**. This is where you start building your UI. Edit this file to see changes in the browser.' },
      { k: 'package.json', v: 'Contains project info, **dependencies and scripts** (`start`, `build`, `test`, `eject`). The `start` script runs your app in development mode.' },
      { k: 'npm start', v: 'Starts the dev server → compiles React code (Babel + Webpack) → watches for file changes and rebuilds automatically → opens your app at **localhost:3000**.' },
      { k: 'Do not rename root div', v: 'Never change `id="root"` in `public/index.html`. React uses this exact id to mount your entire application.' },
      { k: 'Production build', v: 'Run `npm run build` to create an optimised production bundle. Use `Ctrl + C` to stop the development server.' },
    ],
    theory: [
      {
        h: 'Installing React with Create React App',
        p: 'The simplest way to start a new React project is **Create React App (CRA)** — an officially supported tool that sets up everything you need with zero configuration.\n\nRun this in your terminal:\n\n`npx create-react-app my-react-app`\n`cd my-react-app`\n`npm start`\n\nYour app will automatically open in the browser at **http://localhost:3000**.',
      },
      {
        h: 'Project Structure Explained',
        p: '**my-react-app/**\n- **public/** — Static files (index.html, favicon, etc.). React mounts your app inside the `<div id="root">` in `index.html`.\n- **src/** — All source code of the application. This is where you spend most of your time.\n  - **index.js** — Entry point of the app. Renders `<App />` into the root div.\n  - **App.js** — Main App component. Start editing here.\n  - **index.css** — Global styles.\n  - **reportWebVitals.js** — Performance tracking.\n  - **setupTests.js** — Testing setup.\n- **.gitignore** — Git ignore rules.\n- **package.json** — Project info & dependencies.\n- **README.md** — Project documentation.',
      },
      {
        h: 'Key Files — Quick Overview',
        p: '**package.json** — Contains project info, dependencies and scripts. The `"start": "react-scripts start"` script runs your app in development mode.\n\n**public/index.html** — The main HTML file. React mounts your app inside the `<div id="root">`. Do not change the `id="root"`.\n\n**src/index.js** — Entry point of your React application. Renders `<App />` inside the root div.\n\n**src/App.js** — Main component. Edit this file to see changes in the browser.',
      },
      {
        h: 'What Happens When You Run npm start?',
        p: '1. **Starts the development server** — a local server is launched.\n2. **Compiles your React code** — Babel transpiles JSX to JavaScript; Webpack bundles all files.\n3. **Watches for file changes** — any save in `src/` triggers an automatic rebuild.\n4. **Opens your app in the browser** — usually at http://localhost:3000.',
      },
      {
        h: 'Important Notes',
        p: '- **Keep your terminal running** while developing — closing it stops the dev server.\n- **Changes in src/ folder reflect instantly** — thanks to Hot Module Replacement.\n- Use **Ctrl + C** to stop the server.\n- For production build, use `npm run build`.',
      },
      {
        h: 'Quick Summary',
        p: '- Use **Create React App** to quickly set up a new React project.\n- Understand the basic project structure and key files.\n- Run **npm start** to start the development server.\n- Make changes in **src/App.js** and see them live in the browser.',
      },
    ],
    snippets: [
      {
        label: 'Create and start a React project',
        code: '# Create a new React project\nnpx create-react-app my-react-app\n\n# Go into the project directory\ncd my-react-app\n\n# Start the development server\nnpm start\n\n# Your app opens at http://localhost:3000',
        note: 'Run these 3 commands in order. `npx` downloads and runs `create-react-app` without installing it globally.',
      },
      {
        label: 'src/index.js — entry point',
        code: "import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(\n  document.getElementById('root')\n);\nroot.render(<App />);\n\n// Renders <App /> inside the root div.",
        note: '`createRoot` is the React 18 API. It replaces the older `ReactDOM.render()`. The root div is in `public/index.html`.',
      },
      {
        label: 'src/App.js — your first component',
        code: "function App() {\n  return (\n    <div className=\"App\">\n      <h1>Hello React! 👋</h1>\n    </div>\n  );\n}\n\nexport default App;",
        note: 'This is the main App component. Everything you build lives inside here — or in components you import into it.',
      },
      {
        label: 'package.json scripts',
        code: '{\n  "scripts": {\n    "start": "react-scripts start",\n    "build": "react-scripts build",\n    "test":  "react-scripts test",\n    "eject": "react-scripts eject"\n  }\n}\n\n// "start" runs your app in development mode.',
        note: '`npm start` → development. `npm run build` → optimised production bundle. Never run `eject` unless you know what you\'re doing.',
      },
    ],
  },
  // ── Episode 3 ─────────────────────────────────────────────────────────────
  {
    day: 3,
    date: '9 Mar 2028',
    group: 'components',
    title: 'JSX Explained & JSX Rules',
    tagline: 'JSX is a syntax extension that lets you write HTML-like code inside JavaScript — the foundation of every React component.',
    image: '/react-notes/ep03-jsx-explained.jpeg',
    tags: ['JSX', 'JavaScript XML', 'Babel', 'className', 'JSX Rules', 'React.createElement'],
    notes: [
      { k: 'What is JSX?', v: '**JSX (JavaScript XML)** is a syntax extension for JavaScript. It lets us write **HTML-like code inside JavaScript**. Babel converts JSX into regular JavaScript that the browser can run.' },
      { k: 'Why JSX?', v: 'JSX looks similar to HTML → easy to understand. It lets you write UI structure and logic in one place. Code is more **readable and maintainable**. JSX is not HTML inside JS — it is a **syntax extension**.' },
      { k: 'className, not class', v: 'In HTML we use `class="..."`. In JSX we must use `className="..."`. This is because `class` is a reserved JavaScript keyword — using it in JSX would cause a conflict.' },
      { k: 'How JSX Works', v: 'JSX Code → **Babel** (transpiler) → JavaScript → Browser. Babel transforms JSX into `React.createElement()` calls that the browser understands. You write readable JSX; Babel produces the machine-level calls.' },
      { k: 'JSX Syntax — parentheses', v: 'Multi-line JSX is wrapped in parentheses so JavaScript does not treat it as multiple statements. Single-line JSX does not need them, but parentheses are always safe to use.' },
      { k: 'JSX Syntax — expressions', v: 'Use curly braces `{}` to embed any valid JavaScript expression inside JSX. Example: `<h1>Hello, {name}!</h1>`. Full statements (if, for) cannot go inside `{}` — use ternaries or logical operators instead.' },
      { k: 'JSX Syntax — camelCase events', v: 'Event names in JSX follow camelCase: `onClick`, `onChange`, `onSubmit`, `onKeyDown`. The equivalent HTML attributes (`onclick`, `onchange`) are lowercase — JSX uses camelCase throughout.' },
      { k: 'Single Parent Rule', v: 'A JSX expression must return **one single parent element**. Wrap siblings in a `<div>`, `<section>`, or an empty fragment `<>...</>` — fragments add no extra DOM nodes.' },
      { k: 'Always Close Tags', v: 'Every tag in JSX must be closed — either with a closing tag (`</p>`) or self-closed (`<img />`). HTML5 allows unclosed tags; JSX does not. Forgetting a slash causes a syntax error.' },
      { k: 'JSX is NOT a String', v: 'JSX looks like a string but it is not. It is a description of UI that Babel compiles into `React.createElement()` calls. Do not wrap JSX in quotes — `"<h1>Hello</h1>"` is just a string, not a React element.' },
      { k: 'Common Mistakes', v: '1. Using `class` instead of `className`. 2. Returning multiple elements without a wrapper. 3. Forgetting to close tags. 4. Using inline styles without double braces `{{ }}` — styles must be a JS object: `style={{ color: "red" }}`.' },
    ],
    theory: [
      {
        h: 'What is JSX?',
        p: '**JSX (JavaScript XML)** is a syntax extension for JavaScript created by the React team. It lets you write HTML-like markup directly inside your JavaScript files.\n\nThis looks unusual at first — mixing HTML and JavaScript in one file — but it is one of React\'s most powerful ideas. Instead of keeping structure (HTML), style (CSS), and behaviour (JavaScript) in separate files, React groups UI logic and markup together into **components**.\n\nBabel, a JavaScript transpiler, converts your JSX into plain `React.createElement()` calls that every browser understands. You write readable, HTML-flavoured code; the browser receives standard JavaScript.',
      },
      {
        h: 'Why JSX?',
        p: '**1. Looks similar to HTML** — If you already know HTML, JSX feels immediately familiar. The syntax map is almost 1:1.\n\n**2. UI structure and logic in one place** — Your component describes what to render and how it behaves without switching between separate files.\n\n**3. More readable and maintainable** — `<Button label="Submit" />` is much clearer than `React.createElement(Button, { label: "Submit" })`.\n\n**4. It is a syntax extension, not HTML inside JS** — JSX compiles away entirely. The browser never sees it — only the plain JavaScript it becomes.',
      },
      {
        h: 'How JSX Works — The Pipeline',
        p: 'There are four steps from your JSX to the browser:\n\n**Step 1 — You write JSX** — e.g. `<div className="card"><h1>Hello</h1></div>`.\n\n**Step 2 — Babel transpiles it** — Babel converts each JSX element into a `React.createElement(type, props, ...children)` call.\n\n**Step 3 — React builds the Virtual DOM** — The nested createElement calls produce a JavaScript object tree (the Virtual DOM).\n\n**Step 4 — React commits to the real DOM** — React calculates the minimal set of real DOM changes needed and applies them.\n\nExample transformation by Babel:\n`<h1 className="title">Hello</h1>`\n→ `React.createElement("h1", { className: "title" }, "Hello")`',
      },
      {
        h: 'JSX Syntax Rules',
        p: '**1. Parentheses for multi-line JSX** — Wrap multi-line returns in `()` so JavaScript does not insert an automatic semicolon and break the expression.\n\n**2. className instead of class** — `class` is a reserved JS keyword. JSX uses `className` for the HTML class attribute.\n\n**3. JavaScript expressions in `{}`** — Any valid JS expression (variables, ternaries, function calls, template literals) can go inside curly braces. Full statements (`if`, `for`) cannot — use array `.map()` for lists and ternary (`? :`) for conditions.\n\n**4. camelCase event names** — `onClick`, `onChange`, `onSubmit`, `onMouseEnter`. HTML uses lowercase; JSX uses camelCase.',
      },
      {
        h: 'Important Points',
        p: '- **JSX is NOT a string** — do not wrap it in quotes. `"<h1>Hello</h1>"` is a plain string; `<h1>Hello</h1>` is a React element.\n- **One single parent element** — JSX must return one root. Wrap siblings with a `<div>` or an empty fragment `<>...</>` (fragments are preferred — they add no extra DOM nodes).\n- **Always close all tags** — `<img />`, `<br />`, `<input />`. Self-closing required.\n- **Inline styles are objects** — `style={{ color: "red", fontSize: 16 }}`. Double braces: outer for JSX expression, inner for the JS object literal.',
      },
      {
        h: 'Common Mistakes',
        p: '**1. `class` instead of `className`** — `<div class="box">` → error. Use `<div className="box">`.\n\n**2. Returning multiple elements without a wrapper** — `return <h1>Hi</h1><p>There</p>` → error. Use `return <><h1>Hi</h1><p>There</p></>`.\n\n**3. Forgetting to close tags** — `<img src="..." >` → error. Use `<img src="..." />`.\n\n**4. Inline styles without double braces** — `style="color:red"` is string syntax (HTML). In JSX: `style={{ color: "red" }}`.',
      },
      {
        h: 'Quick Summary',
        p: 'JSX lets you write **HTML-like code inside JavaScript**. It is a syntax extension — not HTML, not a string — that Babel compiles into `React.createElement()` calls.\n\nKey rules to remember: use **className** (not `class`), return **one parent element**, always **close all tags**, put JS expressions inside **`{}`**, and write events in **camelCase**.\n\nMastering JSX is the first step to mastering React. Once it feels natural, the rest of React\'s component model clicks into place.',
      },
    ],
    snippets: [
      {
        label: 'HTML vs JSX — side by side',
        code: '// ── HTML ──────────────────────────────────────────\n<div class="card">\n  <h1>Hello React</h1>\n  <p>Welcome to JSX!</p>\n  <button>Click Me</button>\n</div>\n\n// ── JSX ────────────────────────────────────────────\n<div className="card">   {/* class → className */}\n  <h1>Hello React</h1>\n  <p>Welcome to JSX!</p>\n  <button>Click Me</button>\n</div>',
        note: 'The only difference here is `class` → `className`. In JSX, `class` is a reserved JS keyword so React uses `className` instead.',
      },
      {
        label: 'JSX syntax — expressions, events, multi-line',
        code: "const element = (\n  <div className=\"container\">\n    <h1>Hello React</h1>\n    <p>This is JSX in action!</p>\n    <button onClick={() => alert('Clicked!')}>\n      Click Me\n    </button>\n  </div>\n);\n\nexport default element;\n\n// Rules demonstrated:\n// 1. Wrapped in parentheses (multi-line)\n// 2. className instead of class\n// 3. onClick in camelCase\n// 4. Arrow function inside {} for the handler",
        note: 'All four JSX syntax rules in one snippet: parentheses, className, curly-brace expressions, camelCase events.',
      },
      {
        label: 'Fragment — return multiple elements without a wrapper div',
        code: "// ❌ Error — two root elements\nfunction Bad() {\n  return (\n    <h1>Title</h1>\n    <p>Paragraph</p>\n  );\n}\n\n// ✅ Correct — fragment adds no extra DOM node\nfunction Good() {\n  return (\n    <>\n      <h1>Title</h1>\n      <p>Paragraph</p>\n    </>\n  );\n}",
        note: 'Empty fragment `<>...</>` is shorthand for `<React.Fragment>`. Use it whenever you need multiple root elements but do not want an extra `<div>` in the DOM.',
      },
      {
        label: 'Mini Challenge — JSX element with heading, paragraph, button',
        code: "function Welcome() {\n  return (\n    <div className=\"welcome-card\">\n      <h1>Welcome to React</h1>\n      <p>JSX makes UI easier!</p>\n      <button onClick={() => alert('Learning JSX!')}>\n        Learn JSX\n      </button>\n    </div>\n  );\n}\n\nexport default Welcome;",
        note: 'The mini challenge from Episode 3: a heading, a paragraph, and a button, all wrapped in one parent element.',
      },
    ],
  },
  // ── Episode 4 ─────────────────────────────────────────────────────────────
  {
    day: 4,
    date: '10 Mar 2028',
    group: 'components',
    title: 'Components & Functional Components',
    tagline: 'Components are the building blocks of React — reusable pieces of UI that return JSX.',
    image: '/react-notes/ep04-components.jpeg',
    tags: ['Components', 'Functional Components', 'JSX', 'Reusability', 'Props'],
    notes: [
      { k: 'What is a Component?', v: 'A component is a **reusable** piece of UI that returns some **JSX**. Think of components like Lego blocks — you can build complex UIs by combining small components.' },
      { k: 'Why Use Components?', v: '**Reusability** — write once, use everywhere. **Maintainability** — easy to update and manage. **Modularity** — break UI into small, independent parts. **Scalability** — helps in building large applications.' },
      { k: 'Functional Component', v: 'A **JavaScript function** that returns JSX. This is the modern way to write React components.' },
      { k: 'Component Name Rule', v: 'Component names **must start with a capital letter**. `Hello` is valid; `hello` is not — React treats lowercase names as plain HTML tags.' },
      { k: 'Using a Component', v: 'Import the component and use it like an HTML tag: `<Hello />`. React will replace `<Hello />` with the JSX returned by the Hello component.' },
      { k: 'Multiple Components', v: 'Create separate files for each component (e.g. `Header.js`, `Footer.js`), then import and combine them in `App.js`.' },
      { k: 'Single Parent Rule', v: 'Always return a **single parent element** from a component. Use `<div>` or **`<>`** (React Fragment) to wrap multiple elements.' },
      { k: 'Nesting Components', v: 'You can **nest** components inside other components — just like HTML elements nest inside each other.' },
    ],
    theory: [
      { h: 'Functional Component Syntax', p: 'A functional component is simply a JavaScript function that returns JSX. Export it with `export default` so other files can import it.' },
      { h: 'How React Uses Components', p: 'When you write `<Hello />` in JSX, React calls the `Hello` function and renders whatever JSX it returns — replacing the tag with real DOM elements.' },
      { h: 'Why Functional Components?', p: 'Functional components are simpler, easier to read, and are the standard in modern React. Class components still exist but are rarely used in new projects.' },
      { h: 'Component Composition', p: 'The real power of React is **composition** — building complex UIs by combining small, focused components. Each component owns its own piece of the UI.' },
    ],
    snippets: [
      {
        label: 'Hello.js — A basic functional component',
        code: `import React from 'react';

function Hello() {
  return (
    <div>
      <h1>Hello React! 👋</h1>
      <p>This is a functional component.</p>
    </div>
  );
}

export default Hello;`,
      },
      {
        label: 'App.js — Importing and using a component',
        code: `import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

export default App;`,
      },
      {
        label: 'Multiple components — Header, Footer, App',
        code: `// Header.js
export default function Header() {
  return <header><h1>My React App</h1></header>;
}

// Footer.js
export default function Footer() {
  return <footer><p>© 2025 Neon Dev</p></footer>;
}

// App.js
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <main>Welcome to my app 🚀</main>
      <Footer />
    </div>
  );
}

export default App;`,
      },
    ],
  },
  // ── Episode 5 ─────────────────────────────────────────────────────────────
  {
    day: 5,
    date: '11 Mar 2028',
    group: 'components',
    title: 'Props & Passing Data',
    tagline: 'Props are read-only inputs passed from parent to child — the mechanism for sharing data across React components.',
    image: '/react-notes/ep05-props.jpeg',
    tags: ['Props', 'Data Flow', 'Destructuring', 'One-way Flow', 'Reusability'],
    notes: [
      { k: 'What are Props?', v: 'Props (short for **properties**) are **read-only** inputs passed from a **parent** component to a **child** component. Think of them like function arguments — they allow components to be **dynamic** and **reusable**.' },
      { k: 'One-way Data Flow', v: 'Data flows only from **parent → child**. The parent holds the data and passes it down via props. The child receives and displays it. React enforces this one-way flow to keep your app predictable.' },
      { k: 'Passing Props', v: 'Pass props like HTML attributes: `<UserCard name={name} age={age} />`. Inside the child, access them via `props.name`, `props.age`, etc. Props are **immutable** — the child cannot change them.' },
      { k: 'Destructuring Props', v: 'Instead of `props.name`, destructure in the function signature: `function UserCard({ name, age })`. Cleaner, more readable — especially with many props. Preferred in modern React.' },
      { k: 'Types of Props', v: 'Props can be any JS type: **String** `name="Neon"`, **Number** `age={20}`, **Boolean** `isActive={true}`, **Array** `skills={["JS","React"]}`, **Object** `info={{name:"N",age:20}}`.' },
      { k: 'Default Props', v: 'Use `ComponentName.defaultProps = { name: "Guest" }` to provide fallback values when a prop is not passed. If the prop is provided, the default is ignored.' },
      { k: 'Props are Immutable', v: 'A child component **cannot** modify props. Trying to do so (e.g., `props.name = "X"`) is an error. If data needs to change, lift state up to the parent.' },
      { k: 'Key Takeaway', v: 'Props make components **reusable** and **dynamic**. Master one-way data flow + destructuring and you have the foundation for every React app ever written.' },
    ],
    theory: [
      {
        h: 'What are Props?',
        p: 'Props — short for **properties** — are the mechanism React uses to pass data from one component to another.\n\nThink of a React component as a JavaScript function. Just as a function accepts arguments, a component accepts props. They make components **dynamic** (different data, same component) and **reusable** (one component, many uses).\n\nProps flow in **one direction only**: from parent to child. This is called the **one-way data flow** model. The parent holds the data and passes it down; the child receives and renders it — but can never change it.',
      },
      {
        h: 'Passing and Accessing Props',
        p: 'You pass props like HTML attributes in JSX:\n\n`<UserCard name="Neon Dev" age={20} />`\n\nInside the child component, props arrive as an object:\n\n```jsx\nfunction UserCard(props) {\n  return <h2>{props.name} — {props.age}</h2>;\n}\n```\n\n`props.name` and `props.age` access the values. The `{}` in JSX tells React to evaluate an expression rather than treat it as a string.',
      },
      {
        h: 'Destructuring Props',
        p: 'Destructuring extracts prop values directly in the function signature, making the code cleaner and easier to read:\n\n```jsx\nfunction UserCard({ name, age }) {\n  return <h2>{name} — {age}</h2>;\n}\n```\n\nThis is equivalent to the `props.name` approach but preferred in modern React. Especially useful when a component has many props — you can see exactly what it expects at a glance.',
      },
      {
        h: 'Types of Props',
        p: 'Props can carry any JavaScript value:\n\n- **String** — `<User name="Neon" />` (no curly braces needed for strings)\n- **Number** — `<User age={20} />` (curly braces for non-string values)\n- **Boolean** — `<User isActive={true} />` (or just `<User isActive />` — presence implies `true`)\n- **Array** — `<User skills={["JS", "React"]} />`\n- **Object** — `<User info={{ name: "N", age: 20 }} />` (double curly braces: outer = JSX expression, inner = JS object)\n- **Function** — `<Button onClick={() => console.log("clicked")} />`',
      },
      {
        h: 'Props are Immutable',
        p: 'This is a core React rule: **props are read-only inside the child component**. A child must never modify its props.\n\nIf data needs to change in response to user interaction, that data belongs in **state** (using `useState`), not props. State lives in the parent, and the parent passes updated values down as new props.\n\nViolating immutability (e.g., `props.name = "X"`) breaks React\'s predictable rendering model and will either fail silently or cause bugs.',
      },
      {
        h: 'Common Mistakes',
        p: '**1. Trying to modify props in child** — Props are read-only. Use state in the parent instead.\n\n**2. Not passing required props** — If a child expects `name` but the parent forgets to pass it, `name` is `undefined`. Add PropTypes validation or default props to guard against this.\n\n**3. Forgetting `props.key` syntax** — Without destructuring, accessing `name` directly (instead of `props.name`) returns `undefined`.\n\n**4. Overcomplicating without destructuring** — Using `props.a`, `props.b`, `props.c`… is verbose. Destructure instead.',
      },
    ],
    snippets: [
      {
        label: 'Basic Props — Parent passing, Child receiving',
        code: `// App.js (Parent)
import UserCard from './UserCard';

function App() {
  const name = "Neon Dev";
  const age = 20;
  return (
    <div>
      <h1>My Profile</h1>
      <UserCard name={name} age={age} />
    </div>
  );
}
export default App;

// UserCard.js (Child)
function UserCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}
export default UserCard;`,
        note: 'Props are passed like HTML attributes and accessed via props.key inside the child.',
      },
      {
        label: 'Destructuring Props',
        code: `// UserCard.js — cleaner with destructuring
function UserCard({ name, age }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
export default UserCard;`,
        note: 'Destructure in the function signature — no need for props.name, just name. Much cleaner with many props.',
      },
      {
        label: 'All Prop Types',
        code: `// Passing different types
<User name="Neon" />           // String
<User age={20} />              // Number
<User isActive={true} />       // Boolean (or just <User isActive />)
<User skills={['JS','React']} /> // Array
<User info={{ name: 'N', age: 20 }} /> // Object`,
        note: 'Strings can be passed without curly braces. Everything else needs {}.',
      },
      {
        label: 'Default Props',
        code: `function UserCard({ name }) {
  return <h2>{name}</h2>;
}

// Fallback when prop is not passed
UserCard.defaultProps = {
  name: "Guest User"
};

// Modern alternative: default parameter value
function UserCard({ name = "Guest User" }) {
  return <h2>{name}</h2>;
}`,
        note: 'Prefer the default parameter syntax — it is more readable and does not need a separate .defaultProps assignment.',
      },
      {
        label: 'Mini Challenge — Pass title, score, isWinner',
        code: `// Parent
function App() {
  return <ScoreCard title="React Quiz" score={95} isWinner={true} />;
}

// Child
function ScoreCard({ title, score, isWinner }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Score: {score}</p>
      <p>{isWinner ? '🏆 You Won!' : 'Try again'}</p>
    </div>
  );
}`,
        note: 'The mini challenge from the infographic — three prop types (string, number, boolean) in one component.',
      },
    ],
  },
  // ── Episode 6 ─────────────────────────────────────────────────────────────
  {
    day: 6,
    date: '12 Mar 2028',
    group: 'hooks',
    title: 'State in React',
    tagline: 'State is a built-in React object that holds data which can change over time and affects what is displayed on the screen.',
    image: '/react-notes/ep06-state-in-react.jpeg',
    tags: ['useState', 'Hooks', 'State', 'Functional Components', 'Re-render'],
    notes: [
      { k: 'What is State?', v: '**State** is a built-in React object that holds data which can **change over time** and affects what is displayed on the screen. State allows components to "remember" information between renders. Each component can have its own state.' },
      { k: 'useState Hook', v: '`useState` is a React Hook that lets you add state to **functional components**. Syntax: `const [state, setState] = useState(initialValue)` — `state` is the current value, `setState` is the updater function, `initialValue` is the default.' },
      { k: 'How It Works (step-by-step)', v: '① Initial render: `count = 0` → ② User clicks +1 button → ③ `setCount(count + 1)` is called → ④ State updates: `count = 1` → ⑤ Component re-renders with new value. React compares new state with old state — if different, it re-renders.' },
      { k: 'When to Use State?', v: 'Use state when data changes over time: **user input** (forms, text fields), **toggle** (show/hide elements), **counters and timers**, **data from API**, or **any data that drives the UI**. If data never changes, use a constant — no need for state.' },
      { k: 'Multiple State Variables', v: 'Each piece of data gets its own `useState` call. Example: `const [name, setName] = useState("Neon Dev")` and `const [age, setAge] = useState(20)`. Do not bundle unrelated values into one object.' },
      { k: 'Rules of useState', v: 'Only call useState at the **top level** of your component. Never inside loops, conditions, or nested functions. Only call from **React function components** or custom hooks.' },
      { k: 'State updates are async', v: 'State updates are **asynchronous**. React batches multiple updates for better performance — do not read state immediately after calling setState.' },
      { k: 'Previous state pattern', v: 'When new state depends on previous state, pass a **function** to the setter: `setCount(prev => prev + 1)`. This avoids stale value bugs, especially in batched updates.' },
      { k: 'Common Mistakes', v: '❌ **Mutating state directly** — `count = count + 1` bypasses React and the component will not re-render. ❌ **Using state when not needed** — constants suffice for fixed data. ❌ **Forgetting state updates are asynchronous** — do not read state immediately after setting it.' },
      { k: 'Key Points', v: '✅ State makes components **dynamic**. ✅ `useState` is a Hook used in functional components. ✅ Updating state causes a **re-render**. ✅ Never update state directly — always use the setter function.' },
      { k: 'Mini Challenge', v: 'Create a **toggle button** that shows or hides a message. Hint: use a **boolean state** — `const [isVisible, setIsVisible] = useState(false)` — toggle with `setIsVisible(prev => !prev)`.' },
      { k: 'Quick Summary', v: 'State holds data that changes over time. `useState` lets you add state to functional components. Changing state updates the UI (re-render). Use state for dynamic and interactive apps.' },
    ],
    theory: [
      {
        h: 'What is useState?',
        p: '`useState` is the most fundamental React Hook. It lets you add **reactive state** to any functional component.\n\nBefore hooks, only class components could hold state. With useState, any function can become stateful — keeping your code simpler and more readable.\n\nThe Hook returns an array with exactly two elements: the **current state value** and a **setter function** to update it. When the setter is called, React schedules a re-render of the component with the new value.',
      },
      {
        h: 'Syntax Breakdown',
        p: '`const [state, setState] = useState(initialValue)`\n\n- **`state`** — the current value of the state variable. React preserves this between renders.\n- **`setState`** — the function you call to update state. Calling it triggers a re-render.\n- **`initialValue`** — the value state starts with. Only used on the very first render.\n\nBy convention, the setter is named `set` + the state name — e.g., `count` / `setCount`, `user` / `setUser`.',
      },
      {
        h: 'Rules of useState (Rules of Hooks)',
        p: 'These rules are enforced by the React team and the eslint-plugin-react-hooks linter:\n\n**1. Only call at the top level** — Never inside loops, conditions, or nested functions. React relies on the order of Hook calls being the same every render.\n\n**2. Only call from React functions** — Call from React function components or your own custom hooks only. Never from plain JavaScript functions.',
      },
      {
        h: 'State Updates Are Asynchronous',
        p: 'Calling `setState` does **not** update the variable immediately. React batches state updates for performance — the new value is only available on the next render.\n\nThis is why the **previous state pattern** exists. If your new state depends on the old state, always use the function form:\n\n`setCount(prevCount => prevCount + 1)`\n\nThis guarantees you always work with the latest state, even when React batches multiple updates together.',
      },
      {
        h: 'Objects and Arrays in State',
        p: 'State can hold any JavaScript value: numbers, strings, booleans, objects, and arrays.\n\n**Objects** — never mutate the object directly. Always create a new object using spread:\n`setUser({ ...user, age: 20 })`\n\n**Arrays** — never push or splice the array. Create a new array:\n- Add: `setItems([...items, newItem])`\n- Remove: `setItems(items.filter(item => item.id !== id))`\n\nReact uses **reference equality** to detect changes. Mutating in place means React sees the same reference and skips the re-render.',
      },
      {
        h: 'Common Mistakes',
        p: '**1. Mutating state directly** — `count = count + 1` — This bypasses React and the component will not re-render.\n\n**2. Not using previous state** — `setCount(count + 1)` inside async callbacks or batched updates can read stale values. Use `setCount(prev => prev + 1)` instead.\n\n**3. Calling useState inside conditionals** — React tracks hooks by call order. A conditional hook call breaks that order and causes bugs.\n\n**4. Forgetting state updates are async** — Reading state immediately after setting it returns the old value.',
      },
      {
        h: 'Interview Tips',
        p: '- **Understand how state works internally** — React keeps a list of state cells per component, matched by the order of Hook calls.\n- **Know the rules of Hooks** — Examiners love this question. Top level only, React functions only.\n- **Be ready to explain re-rendering** — Calling setState schedules a re-render; React then runs the component function again with the new state.\n- **Know batching and async nature** — Since React 18, all state updates are automatically batched, even inside event handlers, timeouts, and Promises.\n- **Practice examples** — Counter app, todo list, and form inputs are the three most common interview exercises.',
      },
    ],
    snippets: [
      {
        label: 'Basic useState — Counter',
        code: "import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div style={{ textAlign: 'center', marginTop: '20px' }}>\n      <h2>Count: {count}</h2>\n      <button onClick={() => setCount(count - 1)}>−</button>\n      <button onClick={() => setCount(count + 1)}\n        style={{ marginLeft: '10px' }}>+</button>\n      <button onClick={() => setCount(0)}\n        style={{ marginLeft: '10px' }}>Reset</button>\n    </div>\n  );\n}\n\nexport default Counter;",
        note: 'The classic first useState example. Each button calls setCount with a new value, triggering a re-render.',
      },
      {
        label: 'Previous state pattern — safe increment',
        code: "const [count, setCount] = useState(0);\n\n// ❌ Unsafe — may read stale state in batched updates\nsetCount(count + 1);\n\n// ✅ Safe — always uses the latest state\nsetCount(prevCount => prevCount + 1);",
        note: 'Always use the function form when the new state depends on the previous state.',
      },
      {
        label: 'Object state — update one field',
        code: "const [user, setUser] = useState({ name: 'Ansh', age: 19 });\n\n// ❌ Wrong — mutates state directly\nuser.age = 20;\n\n// ✅ Correct — spread old values, override only what changed\nsetUser({ ...user, age: 20 });",
        note: 'Always spread the previous object. Never mutate state in place.',
      },
      {
        label: 'Array state — add and remove items',
        code: "const [items, setItems] = useState([]);\n\n// Add a new item\nsetItems([...items, newItem]);\n\n// Remove an item by id\nsetItems(items.filter(item => item.id !== id));",
        note: 'Create a new array every time. React compares by reference — a mutated array looks unchanged.',
      },
      {
        label: 'Multiple state variables — Profile',
        code: "function Profile() {\n  const [name, setName] = useState('Neon Dev');\n  const [age, setAge] = useState(20);\n\n  return (\n    <div>\n      <h2>{name}</h2>\n      <p>Age: {age}</p>\n      <button onClick={() => setAge(age + 1)}>Have Birthday 🎂</button>\n    </div>\n  );\n}",
        note: 'Each piece of data has its own useState call. Each state is independent and triggers its own re-render.',
      },
      {
        label: 'Mini Challenge — Toggle visibility',
        code: "function ToggleMessage() {\n  const [isVisible, setIsVisible] = useState(false);\n\n  return (\n    <div>\n      <button onClick={() => setIsVisible(prev => !prev)}>\n        {isVisible ? 'Hide' : 'Show'} Message\n      </button>\n      {isVisible && <p>Hello! I am visible now 👋</p>}\n    </div>\n  );\n}\n\nexport default ToggleMessage;",
        note: 'Mini challenge from the infographic — use a boolean state (true/false) to toggle show/hide.',
      },
    ],
  },
  // ── Episode 7 ─────────────────────────────────────────────────────────────
  {
    day: 7,
    date: '13 Mar 2028',
    group: 'hooks',
    title: 'Event Handling in React',
    tagline: 'Event handling lets your components respond to user actions like clicks, typing, hovering and more.',
    image: '/react-notes/react7.jpeg',
    tags: ['Event Handling', 'onClick', 'onChange', 'onSubmit', 'Event Object', 'preventDefault', 'camelCase Events'],
    notes: [
      { k: 'What is Event Handling?', v: 'Just like HTML events, React can respond to user actions. In React, we use **camelCase** names (e.g., `onClick` not `onclick`) and pass **functions** — not function calls — as event handlers.' },
      { k: 'Common Events', v: '`onClick` — element clicked; `onChange` — input value changes; `onSubmit` — form submitted; `onMouseEnter` — mouse enters element; `onMouseLeave` — mouse leaves element; `onKeyDown` — key pressed.' },
      { k: 'Pass a Function, Not a Call', v: 'Write `onClick={handleClick}` (pass the function). NOT `onClick={handleClick()}` (call immediately). The second form runs the function on every render, not on click.' },
      { k: 'Arrow Functions for Arguments', v: 'To pass arguments to a handler, wrap in an arrow function: `onClick={() => greet("Neon Dev")}`. Writing `onClick={greet("Neon Dev")}` runs immediately — the arrow function delays execution until the click.' },
      { k: 'e.preventDefault()', v: 'Use `e.preventDefault()` in `onSubmit` handlers to stop the browser from reloading the page when a form is submitted. Without it, the page refreshes and state is lost.' },
      { k: 'Event Object', v: 'React passes a **SyntheticEvent** object as the first argument to every handler. Use `e.target` to get the element that triggered the event, `e.target.value` for input values, and `e.target.textContent` for text.' },
      { k: 'Common Mistakes', v: '❌ Using `onclick` (lowercase) instead of `onClick`. ❌ Calling the function: `onClick={myFunc()}`. ❌ Forgetting `e.preventDefault()` in forms. ❌ Not wrapping with an arrow function when passing arguments.' },
      { k: 'Tips', v: '✅ Use camelCase for event names. ✅ Pass the function, never call it. ✅ Use arrow functions for arguments. ✅ Use `e.preventDefault()` in forms. ✅ Keep handlers small and clear.' },
      { k: 'Mini Challenge', v: 'Create a **Counter App** with a button to increase count, a button to decrease count, and the count displayed in between.' },
      { k: 'Quick Summary', v: 'Event handling lets components respond to user actions. Use camelCase (`onClick`, `onChange`, `onSubmit`). Pass functions not calls. Use the event object `e` to access details. Makes React apps interactive and dynamic.' },
    ],
    theory: [
      {
        h: 'What is Event Handling?',
        p: 'Event handling is how React components respond to **user actions** — a click, a keystroke, a form submission, a mouse movement.\n\nReact\'s event system closely mirrors browser DOM events, but with two key differences:\n\n**1. camelCase names** — HTML uses lowercase (`onclick`, `onchange`); React uses camelCase (`onClick`, `onChange`).\n\n**2. Functions, not strings** — HTML allows `onclick="myFunc()"` (a string). React requires a function reference or an inline arrow function.\n\nUnder the hood, React uses a **SyntheticEvent** system — a cross-browser wrapper around native browser events — so your event handlers behave consistently across every browser.',
      },
      {
        h: 'Common Events in React',
        p: '| Event | JSX Attribute | When it Fires |\n|---|---|---|\n| Click | `onClick` | When an element is clicked |\n| Change | `onChange` | When an input value changes |\n| Submit | `onSubmit` | When a form is submitted |\n| Mouse Enter | `onMouseEnter` | When the mouse enters an element |\n| Mouse Leave | `onMouseLeave` | When the mouse leaves an element |\n| Key Down | `onKeyDown` | When a keyboard key is pressed down |\n\nThere are many more: `onFocus`, `onBlur`, `onScroll`, `onDragStart`, `onDrop`, etc. — the full list mirrors the DOM event model.',
      },
      {
        h: 'Pass a Function, Not a Call',
        p: 'This is the single most common mistake beginners make with event handling.\n\n```jsx\n// ✅ Correct — pass a reference to the function\n<button onClick={handleClick}>Click</button>\n\n// ❌ Wrong — calls the function immediately on every render\n<button onClick={handleClick()}>Click</button>\n```\n\nWhen you write `handleClick()` (with parentheses), JavaScript evaluates it right away — before any click happens — and passes the **return value** (usually `undefined`) to `onClick`. Without parentheses, you pass the function itself, and React calls it only when the click event fires.',
      },
      {
        h: 'Passing Arguments to Handlers',
        p: 'If your handler needs an argument, wrap it in an arrow function:\n\n```jsx\nfunction greet(name) {\n  alert(`Hello, ${name}! 👋`);\n}\n\n// ✅ Correct — arrow function delays execution\n<button onClick={() => greet("Neon Dev")}>Greet Me</button>\n\n// ❌ Wrong — runs immediately on render, not on click\n<button onClick={greet("Neon Dev")}>Greet Me</button>\n```\n\nThe arrow function `() => greet("Neon Dev")` creates a new function that React calls on click. Inside that function, `greet("Neon Dev")` runs — at click time, not render time.',
      },
      {
        h: 'Handling Form Submit',
        p: '`onSubmit` fires when the user submits a form. By default, form submission reloads the page — which wipes all React state. Use `e.preventDefault()` to stop this:\n\n```jsx\nfunction handleSubmit(e) {\n  e.preventDefault(); // stops the page refresh\n  alert("Form Submitted! ✅");\n}\n\nreturn (\n  <form onSubmit={handleSubmit}>\n    <input type="text" placeholder="Type something" />\n    <button type="submit">Submit</button>\n  </form>\n);\n```\n\n`e` is the event object. Calling `e.preventDefault()` tells the browser: "do not handle this event in the default way." For forms, the default is a full-page HTTP request — something you never want in a React SPA.',
      },
      {
        h: 'The Event Object (e)',
        p: 'React automatically passes a **SyntheticEvent** object as the first argument to every event handler. The most useful properties:\n\n- `e.target` — the DOM element that triggered the event\n- `e.target.value` — current value of an input field (essential for controlled inputs)\n- `e.target.textContent` — text content of the element\n- `e.target.name` — the `name` attribute (useful in multi-field forms)\n- `e.preventDefault()` — prevent default browser behaviour\n- `e.stopPropagation()` — stop the event from bubbling up to parent elements\n\nSyntheticEvent wraps the native browser event and normalises it across browsers, so you never need to write browser-specific workarounds.',
      },
      {
        h: 'Common Mistakes',
        p: '**1. Lowercase event names** — `onclick` instead of `onClick`. React will silently ignore the lowercase attribute.\n\n**2. Calling the function immediately** — `onClick={myFunc()}` runs on render, not on click. Use `onClick={myFunc}` or `onClick={() => myFunc()}`.\n\n**3. Forgetting `e.preventDefault()` in forms** — The page reloads and React state is lost.\n\n**4. Not using an arrow function for arguments** — `onClick={greet("name")}` fires immediately. Always wrap: `onClick={() => greet("name")}`.',
      },
      {
        h: 'Quick Summary',
        p: 'Event handling is what makes React apps **interactive**.\n\nThe rules to remember:\n- Use **camelCase** event names (`onClick`, `onChange`, `onSubmit`).\n- **Pass functions**, never calls — `onClick={handler}` not `onClick={handler()}`.\n- Use **arrow functions** to pass arguments: `onClick={() => handler(arg)}`.\n- Use **`e.preventDefault()`** in form submit handlers.\n- Use the **event object** (`e`) to inspect the target element and its value.\n\nMaster these five rules and you can handle any user interaction React throws at you.',
      },
    ],
    snippets: [
      {
        label: 'Basic onClick — Click Counter',
        code: "import { useState } from 'react';\n\nfunction ClickCounter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div className=\"box\">\n      <h2>You clicked {count} times</h2>\n      <button onClick={() => setCount(count + 1)}>\n        Click Me\n      </button>\n    </div>\n  );\n}\n\nexport default ClickCounter;",
        note: 'Arrow function inside onClick so the function runs only when clicked — not immediately on render.',
      },
      {
        label: 'Passing arguments to a handler',
        code: "function greet(name) {\n  alert(`Hello, ${name}! 👋`);\n}\n\nfunction App() {\n  return (\n    <button onClick={() => greet('Neon Dev')}>\n      Greet Me\n    </button>\n  );\n}\n\n// ❌ Wrong — runs immediately on every render:\n// <button onClick={greet('Neon Dev')}>Greet Me</button>",
        note: "Wrap in an arrow function to delay execution. onClick={greet('Neon Dev')} fires on render, not on click.",
      },
      {
        label: 'Form submit with e.preventDefault()',
        code: "function FormExample() {\n  function handleSubmit(e) {\n    e.preventDefault(); // stops page reload\n    alert('Form Submitted! ✅');\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input type=\"text\" placeholder=\"Type something\" />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}",
        note: 'e.preventDefault() is essential in form handlers — without it, the page reloads and React state is lost.',
      },
      {
        label: 'Event object — e.target',
        code: "function handleClick(e) {\n  console.log(e);                    // SyntheticEvent\n  console.log(e.target);             // the button element\n  console.log(e.target.textContent); // 'Check Console'\n}\n\nfunction App() {\n  return (\n    <button onClick={handleClick}>Check Console</button>\n  );\n}\n\n// e.target.value is used for inputs:\nfunction handleChange(e) {\n  console.log(e.target.value); // current input text\n}",
        note: 'e.target is the element that fired the event. e.target.value is essential for reading input field values.',
      },
      {
        label: 'Mini Challenge — Counter with + and − buttons',
        code: "import { useState } from 'react';\n\nfunction CounterApp() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div style={{ textAlign: 'center', marginTop: '2rem' }}>\n      <button onClick={() => setCount(count - 1)}>−</button>\n      <span style={{ margin: '0 1rem', fontSize: '1.5rem' }}>\n        {count}\n      </span>\n      <button onClick={() => setCount(count + 1)}>+</button>\n    </div>\n  );\n}\n\nexport default CounterApp;",
        note: 'Mini challenge from the infographic: increase button, count display, decrease button — all using onClick.',
      },
    ],
  },
  // ── Episode 8 ─────────────────────────────────────────────────────────────
  {
    day: 8,
    date: '14 Mar 2028',
    group: 'hooks',
    title: 'Forms Basics in React',
    tagline: 'Forms are used to collect data from users — in React, form elements are controlled using State.',
    image: '/react-notes/forms-basics-in-react.jpeg',
    tags: ['Forms', 'Controlled Components', 'onChange', 'onSubmit', 'e.preventDefault', 'useState', 'Input Types'],
    notes: [
      { k: 'What is a Form?', v: 'A form is a collection of **input elements** like text boxes, checkboxes, radio buttons, dropdowns, etc., that allow users to enter and submit data. In React, we handle form data using **State** and **event handlers**.' },
      { k: 'Controlled Components', v: 'In React, form inputs are usually **controlled by State**. The value shown in the input always comes from State. User types → updates State (useState) → State sets the Input Value.' },
      { k: 'onChange Handler', v: '`onChange` runs every time the user types and updates the state. The input `value` prop is always tied to state — so the input always reflects state.' },
      { k: 'e.preventDefault()', v: 'Always use `e.preventDefault()` in `onSubmit` handlers to prevent the page from reloading when a form is submitted. Without it, the browser reloads the page and all React state is lost.' },
      { k: 'Checkbox', v: '`<input type="checkbox" checked={checked} onChange={...} />` — use the `checked` prop (not `value`) for checkboxes, bound to a boolean state.' },
      { k: 'Radio Button', v: '`<input type="radio" name="gender" value="Male" checked={...} onChange={...} />` — group radios with the same `name`; control which is selected with state.' },
      { k: 'Dropdown (select)', v: '`<select value={city} onChange={...}>` — bind the `value` prop to state; each `<option>` has its own value. `onChange` fires when the selection changes.' },
      { k: 'Textarea', v: '`<textarea value={message} onChange={...} rows="3" />` — in React, `<textarea>` is self-closing and uses a `value` prop (unlike plain HTML which uses inner text).' },
      { k: 'Common Mistakes', v: '❌ Forgetting `e.preventDefault()` in submit. ❌ Not updating state in `onChange`. ❌ Using `defaultValue` instead of `value` (makes the input uncontrolled). ❌ Mixing controlled and uncontrolled inputs in the same form.' },
      { k: 'Quick Summary', v: '**Forms in React = State + Events.** User Input → `onChange` → State → `onSubmit` → Handle Data. Keep inputs controlled by binding `value` to state and `onChange` to the setter.' },
    ],
    theory: [
      {
        h: 'What is a Form in React?',
        p: 'Forms are the primary way to **collect data from users** — names, emails, passwords, search queries, settings.\n\nIn plain HTML, form data is managed by the browser (DOM). In React, we take control: we bind every input\'s value to a **React state variable** and update that state on every keystroke via `onChange`. This pattern is called a **Controlled Component** — React is the single source of truth for the input\'s value at all times.',
      },
      {
        h: 'Controlled Components',
        p: 'A **Controlled Component** is an input whose value is driven entirely by React state.\n\nThe cycle:\n1. User types in the input.\n2. `onChange` fires → calls the setter function (e.g. `setName(e.target.value)`).\n3. React updates state.\n4. Component re-renders with the new state value.\n5. The input displays the new value (from state).\n\nThis means React always knows exactly what is in every field — making validation, conditional logic, and form submission straightforward.\n\n```jsx\nconst [name, setName] = useState(\'\');\n<input value={name} onChange={(e) => setName(e.target.value)} />\n```',
      },
      {
        h: 'Handling Form Submission',
        p: 'Attach `onSubmit` to the `<form>` element (not the button). Inside the handler, always call `e.preventDefault()` first:\n\n```jsx\nfunction handleSubmit(e) {\n  e.preventDefault(); // stops the browser reload\n  // now safely read state values\n  console.log(name, email);\n}\n\n<form onSubmit={handleSubmit}>\n  ...\n  <button type="submit">Submit</button>\n</form>\n```\n\nWithout `e.preventDefault()`, the browser performs a full HTTP request, the page reloads, and all React state is wiped. The `type="submit"` button inside a form fires `onSubmit` automatically.',
      },
      {
        h: 'Other Common Input Types',
        p: '**Checkbox** — Uses `checked` (boolean) instead of `value`:\n```jsx\nconst [checked, setChecked] = useState(false);\n<input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />\n```\n\n**Radio Button** — Group radios with the same `name`; compare `value` to state:\n```jsx\nconst [gender, setGender] = useState(\'\');\n<input type="radio" name="gender" value="Male" checked={gender === \'Male\'} onChange={(e) => setGender(e.target.value)} />\n```\n\n**Dropdown (select)** — Bind `value` prop to state:\n```jsx\nconst [city, setCity] = useState(\'Delhi\');\n<select value={city} onChange={(e) => setCity(e.target.value)}>\n  <option>Delhi</option><option>Mumbai</option><option>Pune</option>\n</select>\n```\n\n**Textarea** — In React, textarea is self-closing with a `value` prop:\n```jsx\nconst [message, setMessage] = useState(\'\');\n<textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="3" />\n```',
      },
      {
        h: 'Common Mistakes',
        p: '**1. Forgetting e.preventDefault()** — The page reloads, losing all state.\n\n**2. Not updating state in onChange** — The input appears frozen because state never changes.\n\n**3. Using defaultValue instead of value** — `defaultValue` only sets the initial value and leaves the input uncontrolled. Use `value` to keep React in charge.\n\n**4. Mixing controlled and uncontrolled inputs** — Once an input is controlled (has a `value` prop), keep it controlled throughout its lifetime. Switching causes a React warning and unpredictable behaviour.',
      },
      {
        h: 'Mini Challenge',
        p: 'Build a contact form with three fields and a submit handler:\n\n- **Name** — text input\n- **Email** — email input\n- **Message** — textarea\n- **Submit button** — logs all three values and clears the form\n\nUse three separate `useState` calls, bind each field with `value` + `onChange`, and reset all three to `\'\'` inside `handleSubmit`.',
      },
      {
        h: 'Quick Summary',
        p: '**Forms in React = State + Events.**\n\n- Bind every input\'s `value` to a state variable.\n- Use `onChange` to update state on every keystroke.\n- Use `onSubmit` on the `<form>` (not the button).\n- Always call `e.preventDefault()` to stop the page reload.\n- `checked` prop for checkboxes and radio buttons; `value` for text, select, and textarea.\n\nMaster this pattern and you can build any form in React — login, signup, search, settings, checkout — all from the same foundation.',
      },
    ],
    snippets: [
      {
        label: 'Controlled text input — NameForm',
        code: "import { useState } from 'react';\n\nfunction NameForm() {\n  const [name, setName] = useState('');\n\n  return (\n    <div className=\"form-box\">\n      <h2>Enter Your Name</h2>\n      <input\n        type=\"text\"\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n        placeholder=\"Type your name\"\n      />\n      <p>Hello, {name || 'Guest'}! 👋</p>\n    </div>\n  );\n}\n\nexport default NameForm;",
        note: 'value is always read from state; onChange keeps state in sync with every keystroke.',
      },
      {
        label: 'Form submit with e.preventDefault()',
        code: "import { useState } from 'react';\n\nfunction NameForm() {\n  const [name, setName] = useState('');\n\n  function handleSubmit(e) {\n    e.preventDefault(); // stops page refresh\n    alert(`Submitted: ${name}`);\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type=\"text\"\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n        placeholder=\"Your name\"\n      />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}",
        note: 'Attach onSubmit to the <form>, not the button. e.preventDefault() is essential.',
      },
      {
        label: 'All common input types — controlled',
        code: "const [checked, setChecked] = useState(false);\nconst [gender, setGender] = useState('');\nconst [city, setCity] = useState('Delhi');\nconst [message, setMessage] = useState('');\n\n// Checkbox\n<input type=\"checkbox\" checked={checked}\n  onChange={(e) => setChecked(e.target.checked)} />\n\n// Radio\n<input type=\"radio\" name=\"gender\" value=\"Male\"\n  checked={gender === 'Male'}\n  onChange={(e) => setGender(e.target.value)} />\n\n// Dropdown\n<select value={city} onChange={(e) => setCity(e.target.value)}>\n  <option>Delhi</option>\n  <option>Mumbai</option>\n  <option>Pune</option>\n</select>\n\n// Textarea\n<textarea value={message} rows=\"3\"\n  onChange={(e) => setMessage(e.target.value)} />",
        note: 'Checkboxes use e.target.checked (boolean). All others use e.target.value (string).',
      },
      {
        label: 'Mini Challenge — Contact form (Name, Email, Message)',
        code: "import { useState } from 'react';\n\nfunction ContactForm() {\n  const [name, setName] = useState('');\n  const [email, setEmail] = useState('');\n  const [message, setMessage] = useState('');\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    console.log({ name, email, message });\n    // reset\n    setName(''); setEmail(''); setMessage('');\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input value={name} onChange={(e) => setName(e.target.value)}\n             placeholder=\"Name\" type=\"text\" />\n      <input value={email} onChange={(e) => setEmail(e.target.value)}\n             placeholder=\"Email\" type=\"email\" />\n      <textarea value={message} onChange={(e) => setMessage(e.target.value)}\n                placeholder=\"Message\" rows=\"4\" />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n\nexport default ContactForm;",
        note: 'Mini challenge from Episode 8 — three controlled fields, one submit handler, form clears after submit.',
      },
    ],
  },
  {
    day: 9,
    date: '15 Mar 2028',
    group: 'hooks',
    title: 'Rendering Lists & Keys in React',
    tagline: 'When you have an array of data, use JavaScript\'s map() to render a list of elements — and always give each element a unique key.',
    image: '/react-notes/react-9.jpeg',
    tags: ['Lists', 'map()', 'Keys', 'Rendering', 'Unique Keys', 'Dynamic Lists', 'JSX'],
    notes: [
      { k: 'Why Do We Need Lists?', v: 'We often work with collections of data (users, products, messages, etc.). Instead of writing repetitive code, we use `map()` to render them dynamically. React makes it easy to turn an array into UI elements.' },
      { k: 'How map() Works', v: '`map()` loops through each item in an array and returns a JSX element for each one. It does **not** change the original array — it returns a new array of JSX elements.' },
      { k: 'Basic Syntax', v: '`{fruits.map((fruit) => (<li>{fruit}</li>))}` — wrap the map call in `{}` inside JSX, return a JSX element per item.' },
      { k: 'Key Prop', v: 'Every element in a list needs a unique `key` prop: `<li key={user.id}>{user.name}</li>`. Keys help React identify which items changed, added, or removed — making updates fast and correct.' },
      { k: 'Rules for Keys', v: '✅ Keys must be **unique among siblings**. ✅ Keys must be **stable** (should not change between renders). ✅ Keys help React identify items and update the DOM efficiently. ❌ Avoid using array index as key if the list can change (items added, removed, or reordered).' },
      { k: 'Index as Key (Not Recommended)', v: 'Using the array index as key (`key={index}`) can cause subtle bugs when items are added, removed, or reordered — React may reuse the wrong component state. Only use index when the list is static and will never change.' },
      { k: 'Common Mistakes', v: '❌ Not adding key at all. ❌ Using index as key for dynamic lists. ❌ Using non-unique keys (duplicates). ❌ Generating random keys on every render (e.g. `key={Math.random()}`).' },
      { k: 'Quick Summary', v: '**Use `map()` to render lists. Always provide a unique key. Keys help React optimise rendering. Good keys = Fast & Bug-free UI!**' },
    ],
    theory: [
      {
        h: 'Why Do We Need Lists in React?',
        p: 'Real applications constantly work with **collections of data** — a list of users, a product catalogue, a message feed, a task list. Writing one JSX element per item by hand is repetitive and breaks the moment the data changes.\n\nJavaScript\'s `map()` solves this: you describe what **one item** looks like as JSX, and `map()` produces that element for **every item in the array**. The result is a dynamic list that automatically stays in sync with your data.',
      },
      {
        h: 'How map() Works in JSX',
        p: '`map()` transforms each element of an array into something new — in React\'s case, a JSX element. It does **not mutate the original array**; it always returns a brand-new array.\n\n```jsx\nconst fruits = ["Apple", "Banana", "Mango"];\n\nfunction FruitList() {\n  return (\n    <ul>\n      {fruits.map((fruit) => (\n        <li>{fruit}</li>\n      ))}\n    </ul>\n  );\n}\n```\n\nFlow: Array `[Apple, Banana, Mango]` → `map()` → Each item → Return JSX `<li>` → UI output renders the list.',
      },
      {
        h: 'The Key Prop — Why It Matters',
        p: 'When React re-renders a list, it needs to know **which items changed, which were added, and which were removed** — without re-rendering the entire list from scratch.\n\nThe `key` prop is how React tracks each element across renders. Without keys, React falls back to comparing by position, which can produce incorrect updates, stale state, and visual bugs.\n\n```jsx\nconst users = [\n  { id: 1, name: "Neon" },\n  { id: 2, name: "Dev" },\n  { id: 3, name: "Rock" },\n];\n\nfunction UserList() {\n  return (\n    <ul>\n      {users.map((user) => (\n        <li key={user.id}>{user.name}</li>\n      ))}\n    </ul>\n  );\n}\n```\n\nAlways use a **unique and stable** value as the key — like a database `id`. This lets React update the DOM efficiently.',
      },
      {
        h: 'Why Index as Key is Dangerous',
        p: 'Using the array index (`key={index}`) looks harmless but causes bugs whenever the list is dynamic:\n\n```jsx\n// ❌ Not recommended for dynamic lists\n{numbers.map((num, index) => (\n  <li key={index}>{num}</li>\n))}\n```\n\n**What goes wrong:** if you add an item at the start, every index shifts by 1. React sees every key as "changed" and re-renders all items — potentially matching the wrong component state to the wrong item. Inputs lose their typed values, animations fire on the wrong element, and checkboxes tick the wrong row.\n\n**When index is acceptable:** only when the list is completely static — no additions, deletions, or reordering will ever occur.',
      },
      {
        h: 'Rules for Keys',
        p: '**1. Unique among siblings** — Two list items in the same list cannot share a key. Keys only need to be unique within that list, not globally across the app.\n\n**2. Stable** — The key for a given item should not change between renders. Never use `Math.random()` or `Date.now()` as a key — a new random key every render tells React every item is new, destroying all component state and causing flickers.\n\n**3. Not passed as a prop** — `key` is a special React attribute, not a regular prop. If the child component needs the id value, pass it separately: `<Item key={item.id} id={item.id} />`.',
      },
      {
        h: 'Common Mistakes',
        p: '**1. Missing key entirely** — React logs a warning and falls back to index-based matching. Lists may update incorrectly.\n\n**2. Using index for dynamic lists** — Works until the list changes. Then subtle, hard-to-debug UI bugs appear.\n\n**3. Duplicate keys** — If two siblings share a key, React behaves unpredictably — one item may not render at all.\n\n**4. Random key on every render** — `key={Math.random()}` tells React every item is brand-new every render. All component state resets and performance collapses.',
      },
      {
        h: 'Mini Challenge',
        p: 'Given an array of tasks, render a list of task items. Each task has `id` and `title`:\n\n```jsx\nconst tasks = [\n  { id: 1, title: "Learn React" },\n  { id: 2, title: "Build a project" },\n  { id: 3, title: "Deploy to Netlify" },\n];\n```\n\nRequirements:\n- Use `map()` to render each task\n- Use `id` as the `key`\n- Display each task\'s `title` inside a `<li>`',
      },
      {
        h: 'Quick Summary',
        p: '**Rendering lists in React:**\n\n- Use `map()` to transform an array into JSX elements.\n- Always provide a `key` prop on the outermost element returned by `map()`.\n- Use a unique, stable value (like a database id) as the key.\n- Never use `Math.random()` or `Date.now()` as keys.\n- Avoid index as key for dynamic lists.\n\n**Good keys = Fast & Bug-free UI!** Keys are the secret behind React\'s efficient list updates — they let React surgically update only the items that changed.',
      },
    ],
    snippets: [
      {
        label: 'Basic list with map() — FruitList',
        code: "const fruits = [\"Apple\", \"Banana\", \"Mango\"];\n\nfunction FruitList() {\n  return (\n    <ul className=\"list\">\n      {fruits.map((fruit) => (\n        <li key={fruit}>{fruit}</li>\n      ))}\n    </ul>\n  );\n}\n\nexport default FruitList;",
        note: 'map() loops through each item and returns a JSX element. Key uses the fruit name here — safe because names are unique and static.',
      },
      {
        label: 'Recommended — unique id as key (UserList)',
        code: "const users = [\n  { id: 1, name: \"Neon\" },\n  { id: 2, name: \"Dev\" },\n  { id: 3, name: \"Rock\" },\n];\n\nfunction UserList() {\n  return (\n    <ul className=\"user-list\">\n      {users.map((user) => (\n        <li key={user.id}>{user.name}</li>\n      ))}\n    </ul>\n  );\n}\n\nexport default UserList;",
        note: 'Always use a unique and stable value as key — like a database id. Never use index for dynamic lists.',
      },
      {
        label: 'Not recommended — index as key',
        code: "const numbers = [10, 20, 30];\n\nfunction NumberList() {\n  return (\n    <ul>\n      {numbers.map((num, index) => (\n        <li key={index}>{num}</li> // ❌ using index as key\n      ))}\n    </ul>\n  );\n}",
        note: 'Using index as key can cause bugs when the list changes — items added, removed, or reordered will shift all indices.',
      },
      {
        label: 'Mini Challenge — Task list with id as key',
        code: "import React from 'react';\n\nconst tasks = [\n  { id: 1, title: \"Learn React\" },\n  { id: 2, title: \"Build a project\" },\n  { id: 3, title: \"Deploy to Netlify\" },\n];\n\nfunction TaskList() {\n  return (\n    <ul>\n      {tasks.map((task) => (\n        <li key={task.id}>{task.title}</li>\n      ))}\n    </ul>\n  );\n}\n\nexport default TaskList;",
        note: 'Mini challenge from Episode 9 — use map(), use id as key, display each task title.',
      },
    ],
  },
  {
    day: 10,
    date: '16 Mar 2028',
    group: 'components',
    title: 'Conditional Rendering & Fragments in React',
    tagline: 'Sometimes we want to render something only in certain conditions — React gives us multiple ways to do that, and Fragments let us group elements without adding extra DOM nodes.',
    image: '/react-notes/react10.jpeg',
    tags: ['Conditional Rendering', 'if-else', 'Ternary', '&&', '||', 'Fragments', 'JSX'],
    notes: [
      { k: 'What is Conditional Rendering?', v: 'Conditional rendering means showing different UI based on a condition. Example: if the user is logged in, show the dashboard — otherwise show the login button. React renders UI based on JavaScript expressions, so any JS condition works inside your components.' },
      { k: 'Using if-else (Outside JSX)', v: 'Assign JSX to a variable outside the `return` statement using a regular `if-else` block, then use that variable inside JSX. Best for **complex conditions** that need multiple lines. Clean and easy to read.' },
      { k: 'Using Ternary Operator (Inside JSX)', v: '`{isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please log in.</h2>}` — the ternary operator works **inside JSX** because it is a single expression. Shorter than if-else, great for simple two-way conditions.' },
      { k: 'Using Logical && Operator', v: '`{isAdmin && <p>Welcome, Admin!</p>}` — renders the element **only if** the condition is `true`. If `isAdmin` is false, nothing renders. Use when you need to show something only under one condition (no else branch).' },
      { k: 'Using Logical || Operator (Fallback UI)', v: '`{user.name || "Guest"}` — shows the fallback value when the left side is falsy. Use `||` to display a default or placeholder when the real value is missing, null, or undefined.' },
      { k: 'Fragments', v: 'Fragments let you return **multiple elements** without adding an extra `<div>` to the DOM. Short syntax: `<> ... </>`. Long syntax: `<React.Fragment> ... </React.Fragment>`. Use Fragments to group sibling elements without polluting the DOM structure.' },
      { k: 'Common Mistakes', v: '❌ Using `=` instead of `===` in conditions. ❌ Forgetting to return in if-else blocks. ❌ Overusing nested ternary operators (hard to read). ❌ Rendering `0` accidentally (`{count && <p>Items</p>}` renders `0` when count is 0 — use `{count > 0 && <p>Items</p>}` instead). ❌ Using unnecessary `<div>` wrappers instead of Fragments.' },
      { k: 'Quick Summary', v: '**Conditional rendering** = showing different UI based on conditions. Use **if-else** for complex logic, **ternary** for simple two-way conditions, **&&** when you only have a "show or hide" case, **||** for fallback values. Use **Fragments** (`<>`) to group elements without extra DOM nodes.' },
    ],
    theory: [
      {
        h: 'What is Conditional Rendering?',
        p: 'Conditional rendering means your component decides **what to show based on a condition** — just like an `if` statement in regular JavaScript.\n\nReact does not have a special template syntax for conditions. Because JSX is JavaScript, you can use any JS expression or statement directly:\n\n```jsx\n// If user is logged in → show dashboard\n// Else → show login button\n```\n\nThis flexibility is one of React\'s core strengths — your component logic and your UI live in the same language.',
      },
      {
        h: 'Using if-else Outside JSX',
        p: 'Assign JSX to a variable before the `return`, then render that variable. Best for **complex, multi-line conditions**:\n\n```jsx\nfunction Message({ isLoggedIn }) {\n  let content;\n  if (isLoggedIn) {\n    content = <h2>Welcome back! 👋</h2>;\n  } else {\n    content = <h2>Please log in.</h2>;\n  }\n  return <div className="msg">{content}</div>;\n}\n```\n\nOutput: `Welcome back! 👋` or `Please log in.` depending on the prop.\n\nThis is the most readable approach for complex conditions — keep it when the branches have multiple lines of logic.',
      },
      {
        h: 'Using Ternary Operator Inside JSX',
        p: 'The ternary operator is a single expression, so it works **directly inside JSX curly braces**:\n\n```jsx\nfunction Message({ isLoggedIn }) {\n  return (\n    <div className="msg">\n      {isLoggedIn ? (\n        <h2>Welcome back! 👋</h2>\n      ) : (\n        <h2>Please log in.</h2>\n      )}\n    </div>\n  );\n}\n```\n\nShorter than if-else and keeps everything inside the return. Best for **simple two-way conditions** where each branch is a single element.',
      },
      {
        h: 'Using Logical && Operator',
        p: 'Use `&&` when you want to **show something only if a condition is true** — with no else branch:\n\n```jsx\nfunction AdminPanel({ isAdmin }) {\n  return (\n    <div>\n      <h2>Dashboard</h2>\n      {isAdmin && <p>Welcome, Admin! 🔒</p>}\n    </div>\n  );\n}\n```\n\nOutput: shows `Welcome, Admin! 🔒` only when `isAdmin` is `true`. If `isAdmin` is `false`, that `<p>` does not render at all.\n\n**Watch out:** if the left side is `0` (a number), React renders `0` as text. Always use a boolean expression: `{count > 0 && <p>{count} items</p>}`.',
      },
      {
        h: 'Using Logical || Operator (Fallback UI)',
        p: 'Use `||` to display a **fallback value** when the primary value is falsy (null, undefined, empty string, 0):\n\n```jsx\nfunction User({ user }) {\n  return <p>{user.name || "Guest"}</p>;\n}\n```\n\nOutput: shows the real name if it exists, or `"Guest"` if the name is missing.\n\n- `user.name` exists → show it\n- `user.name` is falsy → show `"Guest"`\n\nThis is a concise way to handle optional or missing data without an extra `if` block.',
      },
      {
        h: 'Fragments — Group Without Extra DOM Nodes',
        p: 'A React component must return **one root element**. Wrapping siblings in a `<div>` works but adds unnecessary nodes to the DOM — which can break CSS (Flexbox/Grid parents), add unwanted spacing, or pollute accessibility trees.\n\n**Fragments** solve this by grouping elements without any real DOM output:\n\n**Short syntax (preferred):**\n```jsx\nfunction List() {\n  return (\n    <>\n      <h2>Hello</h2>\n      <p>Welcome to React</p>\n    </>\n  );\n}\n```\n\n**Long syntax (needed when you pass a key prop):**\n```jsx\nfunction List() {\n  return (\n    <React.Fragment>\n      <h2>Hello</h2>\n      <p>Welcome to React</p>\n    </React.Fragment>\n  );\n}\n```\n\nUse `<React.Fragment key={item.id}>` inside `map()` when you need to key a fragment — the short `<>` syntax does not accept props.',
      },
      {
        h: 'Key Points',
        p: '- **Conditional rendering** helps show the right UI at the right time.\n- Use **if-else** for complex conditions with multiple lines of logic.\n- Use **ternary** (`? :`) for simple two-way conditions inside JSX.\n- Use **&&** to render something only when a condition is true (no else branch).\n- Use **||** to show a fallback when a value is missing or falsy.\n- **Fragments** (`<>`) return multiple elements without adding extra DOM nodes.',
      },
      {
        h: 'Common Mistakes',
        p: '**1. Using `=` instead of `===`** — assignment inside a condition is a bug, not a comparison. Always use strict equality `===`.\n\n**2. Forgetting to return in if-else blocks** — if your if-else is inside the function body (not inside JSX), every branch must explicitly return JSX.\n\n**3. Overusing nested ternaries** — `a ? b : c ? d : e` is hard to read. If your condition has more than two branches, use if-else.\n\n**4. Rendering `0` accidentally** — `{count && <p>Items</p>}` renders the number `0` when count is zero, because `0` is falsy but React still renders numbers. Fix: `{count > 0 && <p>Items</p>}`.\n\n**5. Unnecessary `<div>` wrappers** — wrapping siblings in `<div>` when Fragments would work just as well. Extra divs break CSS layouts and add noise to the DOM.',
      },
      {
        h: 'Mini Challenge',
        p: 'Create a `LoginStatus` component that receives a `loggedIn` boolean prop and shows:\n- `"You are logged in"` when `loggedIn` is `true`\n- `"Please log in"` when `loggedIn` is `false`\n\nTry all three approaches:\n1. **if-else** outside JSX\n2. **Ternary operator** inside JSX\n3. **&& operator** for just the logged-in message (show nothing otherwise)\n\nBonus: wrap the output in a Fragment instead of a `<div>`.',
      },
      {
        h: 'Quick Summary',
        p: '**Conditional rendering in React — 4 techniques:**\n\n| Technique | Best for |\n|---|---|\n| `if-else` | Complex, multi-line conditions |\n| Ternary `? :` | Simple two-way conditions inside JSX |\n| `&&` | Show only if true, no else needed |\n| `\\|\\|` | Fallback when value is missing |\n\n**Fragments:** `<> </>` groups sibling elements without adding DOM nodes.\n\nSmall conditions, Big Impact — these techniques make your React UIs dynamic, clean, and user-friendly.',
      },
    ],
    snippets: [
      {
        label: 'if-else outside JSX — Message component',
        code: "function Message({ isLoggedIn }) {\n  let content;\n  if (isLoggedIn) {\n    content = <h2>Welcome back! 👋</h2>;\n  } else {\n    content = <h2>Please log in.</h2>;\n  }\n  return <div className=\"msg\">{content}</div>;\n}\n\nexport default Message;",
        note: 'Assign JSX to a variable before return. Best for complex, multi-line conditions — clean and easy to read.',
      },
      {
        label: 'Ternary operator inside JSX — shorter conditional',
        code: "function Message({ isLoggedIn }) {\n  return (\n    <div className=\"msg\">\n      {isLoggedIn ? (\n        <h2>Welcome back! 👋</h2>\n      ) : (\n        <h2>Please log in.</h2>\n      )}\n    </div>\n  );\n}\n\nexport default Message;",
        note: 'Ternary works inside JSX curly braces. Shorter than if-else — use for simple two-way conditions.',
      },
      {
        label: 'Logical && and || — AdminPanel + User fallback',
        code: "// && — render only if condition is true\nfunction AdminPanel({ isAdmin }) {\n  return (\n    <div>\n      <h2>Dashboard</h2>\n      {isAdmin && <p>Welcome, Admin! 🔒</p>}\n    </div>\n  );\n}\n\n// || — show fallback when value is missing\nfunction User({ user }) {\n  return <p>{user.name || 'Guest'}</p>;\n}",
        note: '&& renders the element only when the condition is true. || renders the fallback when the left side is falsy.',
      },
      {
        label: 'Mini Challenge — LoginStatus with all 3 techniques + Fragment',
        code: "import React from 'react';\n\n// 1. if-else\nfunction LoginStatus1({ loggedIn }) {\n  let msg;\n  if (loggedIn) {\n    msg = <p>You are logged in</p>;\n  } else {\n    msg = <p>Please log in</p>;\n  }\n  return <>{msg}</>;\n}\n\n// 2. Ternary\nfunction LoginStatus2({ loggedIn }) {\n  return (\n    <>\n      {loggedIn ? <p>You are logged in</p> : <p>Please log in</p>}\n    </>\n  );\n}\n\n// 3. && (show only logged-in message)\nfunction LoginStatus3({ loggedIn }) {\n  return (\n    <>\n      {loggedIn && <p>You are logged in</p>}\n      {!loggedIn && <p>Please log in</p>}\n    </>\n  );\n}",
        note: 'All three approaches produce the same output. Fragments (<>) wrap the return without adding extra DOM nodes.',
      },
    ],
  },
  {
    day: 11,
    date: '17 Mar 2028',
    group: 'hooks',
    title: 'useState Hook in React',
    tagline: 'State lets your component remember and update data that can change over time.',
    image: '/react-notes/react11.jpeg',
    tags: ['useState', 'State', 'Hooks', 'Re-render', 'Callback Form', 'Counter', 'Dynamic UI'],
    notes: [
      { k: 'What is State?', v: 'State is a built-in React object that stores data which can change. When state updates, React re-renders the component to reflect the new data in the UI. We use the `useState` Hook to add state to functional components.' },
      { k: 'Props vs State', v: 'Props are read-only (passed in from the parent). State is read-write — the component owns it and can update it.' },
      { k: 'Importing useState', v: '`import { useState } from \'react\';` — useState is a Hook, so it must be called at the top level of the component, never inside loops, conditions, or nested functions.' },
      { k: 'Basic Syntax', v: '`const [state, setState] = useState(initialValue);` — destructures two things: the current value of state, and the setter function to update it.' },
      { k: 'Calling the setter', v: 'Call `setState(newValue)` to update the state. React schedules a re-render and the component re-runs with the new value.' },
      { k: 'Callback form', v: 'When the new state depends on the previous state, use the callback form: `setState(prev => prev + 1)`. This is safe even in async scenarios where the state might have changed between renders.' },
      { k: 'Never mutate state directly', v: '`count = count + 1` is WRONG — React won\'t know the state changed and won\'t re-render. Always call the setter function.' },
      { k: 'Multiple state variables', v: 'Call useState multiple times — one hook per value. Each piece of state is completely independent.' },
      { k: 'State with different types', v: 'useState can hold any JS type: string, number, boolean, array, or object. The type is set by the initial value you pass.' },
      { k: 'Common mistakes', v: 'Mutating state directly, forgetting to call the setter, using setState inside loops/conditions, expecting state to update synchronously (setState is async).' },
      { k: 'Quick summary', v: 'State = data that changes over time. useState = the Hook that adds state to function components. Calling the setter updates the value and triggers re-render. State makes your React components alive!' },
    ],
    theory: [
      { h: '1. What is State?', p: 'State is a built-in React object that stores data which can change over time. When a component\'s state changes, React automatically re-renders that component so the UI reflects the latest data. We use the `useState` Hook to manage state inside functional components.' },
      { h: '2. Importing useState', p: '`import { useState } from \'react\';`\n\nuseState is a React Hook. Hooks must always be called at the **top level** of the component — never inside if/else blocks, loops, or nested functions.' },
      { h: '3. Basic Syntax', p: '`const [state, setState] = useState(initialValue);`\n\n- **state** — the current value\n- **setState** — the function that updates the value (and triggers a re-render)\n- **initialValue** — what state starts as (any JS value)' },
      { h: '4. Basic Example', p: 'A counter component that increments on every button click:\n\n```jsx\nimport { useState } from \'react\';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div className="box">\n      <h2>Count: {count}</h2>\n      <button onClick={() => setCount(count + 1)}>Increase</button>\n    </div>\n  );\n}\nexport default Counter;\n```\n\nEvery click calls `setCount`, React re-renders with the new `count` value.' },
      { h: '5. Updating State', p: 'Two ways to update state:\n\n```jsx\n// Direct update (fine when new state doesn\'t depend on old)\nsetName(\'Neon\');\n\n// Callback form (safe when new state depends on previous)\nsetName(prev => prev + \' Rocks!\');\n```\n\nAlways use the callback form when the next value is calculated from the current value.' },
      { h: '6. Multiple State Variables', p: 'Call useState once per piece of data:\n\n```jsx\nconst [name, setName] = useState(\'Neon\');\nconst [age, setAge] = useState(21);\nconst [isLoggedIn, setIsLoggedIn] = useState(false);\n```\n\nEach state is independent. Updating one doesn\'t affect the others.' },
      { h: '7. State with Different Types', p: 'useState works with any JavaScript type:\n\n- **String:** `const [title, setTitle] = useState(\'Hello\');`\n- **Number:** `const [count, setCount] = useState(0);`\n- **Boolean:** `const [isOpen, setIsOpen] = useState(true);`\n- **Array / Object:** `const [items, setItems] = useState([]);`\n\nState can store any JavaScript data type.' },
      { h: '8. Key Points', p: '- State makes components dynamic and interactive.\n- useState returns `[state, setState]` as a pair.\n- Calling setState schedules a re-render.\n- Never mutate state directly.\n- Use the callback form when new state depends on old state.' },
      { h: '9. Common Mistakes', p: '- **Mutating directly:** `count = count + 1` ✗ — React never sees the change.\n- **Forgetting the setter:** updating a local variable instead of calling setState.\n- **useState inside conditions/loops:** breaks the Rules of Hooks.\n- **Expecting synchronous update:** `setState` is asynchronous — the new value is only available on the next render.' },
      { h: '10. Mini Challenge', p: 'Create a Counter App with:\n- A button to **increase** count\n- A button to **decrease** count\n- A button to **reset** count to 0\n- The count displayed between the buttons\n\nHint: one `useState(0)` and three separate `onClick` handlers.' },
      { h: '11. Quick Summary', p: '- State = data that changes over time.\n- `useState` = the Hook that adds state to functional components.\n- `setState` updates the value and triggers re-render.\n- Use the callback form when new state depends on old state.\n- State makes your React components alive!' },
    ],
    snippets: [
      {
        label: 'Basic Counter',
        code: "import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div className=\"box\">\n      <h2>Count: {count}</h2>\n      <button onClick={() => setCount(count + 1)}>Increase</button>\n    </div>\n  );\n}\n\nexport default Counter;",
        note: 'Every click calls setCount → React re-renders with the new count value.',
      },
      {
        label: 'Callback Form (Previous State)',
        code: "const [name, setName] = useState('Neon Dev');\n\n// Direct update\nsetName('Neon');\n\n// Callback form — safe when new value depends on previous value\nsetName(prev => prev + ' Rocks!');",
        note: 'Use the callback form whenever the next state is calculated from the current state.',
      },
      {
        label: 'Multiple State Variables',
        code: "const [name, setName] = useState('Neon');\nconst [age, setAge] = useState(21);\nconst [isLoggedIn, setIsLoggedIn] = useState(false);\n\n// Output\n// Name: Neon  Age: 21  Logged In: No",
        note: 'Each useState call manages one independent piece of data.',
      },
      {
        label: 'Mini Challenge — Counter App',
        code: "import { useState } from 'react';\n\nfunction CounterApp() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <button onClick={() => setCount(count - 1)}>Decrease</button>\n      <h2>{count}</h2>\n      <button onClick={() => setCount(count + 1)}>Increase</button>\n      <br />\n      <button onClick={() => setCount(0)}>Reset</button>\n    </div>\n  );\n}\n\nexport default CounterApp;",
        note: 'One useState, three event handlers — increase, decrease, reset.',
      },
    ],
  },
  // ── Episode 12 ────────────────────────────────────────────────────────────
  {
    day: 12,
    date: '18 Mar 2028',
    group: 'hooks',
    title: 'useEffect Hook in React',
    tagline: 'Run side effects after render — data fetching, subscriptions, timers, and DOM changes.',
    image: '/react-notes/react12.jpeg',
    tags: ['useEffect', 'Side Effects', 'Hooks', 'Cleanup', 'Dependencies', 'Fetch', 'Lifecycle'],
    notes: [
      { k: 'What is useEffect?', v: 'useEffect is a Hook that lets you perform **side effects** in function components. Think of it as "doing something" *after* the component renders — like fetching data, setting up subscriptions, or manually changing the DOM.' },
      { k: 'Common Use Cases', v: 'Fetching data from an API, setting up subscriptions, manually changing the DOM, and cleaning up resources (e.g., timers, event listeners).' },
      { k: 'Default Behaviour', v: 'By default, useEffect runs **after every render**. The dependencies array lets you control when it runs.' },
      { k: 'Basic Syntax', v: '`useEffect(() => { /* effect */ return () => { /* cleanup */ }; }, [dependencies]);` — the callback runs after render; the optional return function is the cleanup.' },
      { k: 'Dependencies Array', v: 'Controls when the effect fires. `[]` = only once on mount. `[value]` = on mount and when value changes. No array = after every render. `[a, b]` = when either a or b changes.' },
      { k: 'Cleanup Function', v: 'The function returned from useEffect is called before the next effect runs or when the component unmounts. Use it to clear timers, cancel subscriptions, or remove event listeners — prevents memory leaks.' },
      { k: 'Fetch Example', v: 'Pass `[]` as dependencies to fetch data once on mount. Chain `.then(res => res.json()).then(data => setState(data))` and always add a `.catch` for errors.' },
      { k: 'Common Mistakes', v: 'Forgetting dependencies, using no array when `[]` is needed, creating infinite loops by updating state inside the effect without proper dependencies, not cleaning up subscriptions/timers.' },
      { k: 'Always include dependencies', v: 'Always include all values used inside the effect in the dependencies array — omitting them can cause stale closures and subtle bugs.' },
      { k: 'Real-Life Analogy', v: 'useEffect is like watering a plant at the right time and cleaning up when you move it. Component mounts → effect runs → component updates → cleanup → re-run → component unmounts → final cleanup.' },
    ],
    theory: [
      {
        h: '1. What is useEffect?',
        p: 'useEffect is a built-in React Hook that lets you **synchronise a component with an external system** after it renders.\n\nThe name "side effect" covers anything that happens *outside* of calculating and returning JSX — fetching data, setting up a WebSocket, reading from localStorage, measuring a DOM node, or setting a timer.\n\nuseEffect replaces the class lifecycle methods `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` — unified into one API.',
      },
      {
        h: '2. Basic Syntax',
        p: '```jsx\nuseEffect(() => {\n  // side effect code here — runs after render\n\n  return () => {\n    // cleanup code (optional)\n    // runs before the next effect or on unmount\n  };\n}, [dependencies]);\n```\n\n- **Effect callback** — runs after the component renders.\n- **Cleanup return** — optional; runs before the next effect fires or when the component unmounts.\n- **Dependencies array** — optional array that controls when the effect re-runs.',
      },
      {
        h: '3. Dependencies Array',
        p: 'The array is the key to controlling when your effect fires:\n\n| Dependencies | When it runs |\n|---|---|\n| `[]` (empty array) | Only once, on mount |\n| `[value]` | On mount and whenever `value` changes |\n| `[a, b]` | On mount and when either `a` or `b` changes |\n| No array | After **every** render |\n\n**Rule:** always include every variable from the component scope that the effect uses inside the dependencies array. Omitting a dependency causes stale-closure bugs.',
      },
      {
        h: '4. Fetch Data from API',
        p: '```jsx\nimport { useState, useEffect } from \'react\';\n\nfunction Users() {\n  const [users, setUsers] = useState([]);\n\n  useEffect(() => {\n    fetch(\'https://jsonplaceholder.typicode.com/users\')\n      .then(res => res.json())\n      .then(data => setUsers(data))\n      .catch(err => console.log(err));\n  }, []); // empty array — runs once on mount\n\n  return (\n    <div className="card">\n      <h2>Users</h2>\n      <ul>\n        {users.map(user => (\n          <li key={user.id}>{user.name}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nexport default Users;\n```\n\nThe `[]` dependency array means the fetch runs only when the component mounts — not on every re-render.',
      },
      {
        h: '5. Cleanup Function',
        p: 'The function returned from useEffect is the **cleanup**. React calls it:\n1. Before the next effect runs (so the old effect is cleared).\n2. When the component unmounts.\n\n```jsx\nuseEffect(() => {\n  const timer = setInterval(() => {\n    console.log("Tick");\n  }, 1000);\n\n  return () => {\n    clearInterval(timer); // cleanup — stops the interval\n    console.log("Timer cleared");\n  };\n}, []);\n```\n\nWithout the cleanup, the interval would keep firing even after the component is removed — a classic memory leak.',
      },
      {
        h: '6. Real-Life Analogy',
        p: 'Think of useEffect like **watering a plant at the right time and cleaning up when you move it**.\n\n- **Component Mounts** → the plant arrives. useEffect runs — you water it.\n- **Component Updates** → the plant grows. useEffect re-runs if relevant state changed — you water again.\n- **Component Unmounts** → you move the plant out. The cleanup function runs — you stop watering and tidy up.\n\nWithout cleanup, you\'d still be watering a pot that no longer has a plant — wasted resources, eventual memory leak.',
      },
      {
        h: '7. Key Points',
        p: '- useEffect runs **after render** (not during).\n- The dependencies array controls **when** it re-runs.\n- `[]` → runs once on mount.\n- No array → runs after every render.\n- The cleanup return function **prevents memory leaks**.\n- Never put async functions directly as the effect — wrap them inside.',
      },
      {
        h: '8. Common Mistakes',
        p: '- **Forgetting dependencies** — effect uses a variable but it\'s not in the array; stale data bug.\n- **Using no array when `[]` is needed** — effect runs after every render, causing extra network calls.\n- **Infinite loops** — effect updates state that triggers a re-render, which triggers the effect again. Fix: add the right dependencies or restructure.\n- **Not cleaning up** — timers, subscriptions, and event listeners left behind cause memory leaks and ghost listeners after unmount.',
      },
      {
        h: '9. Mini Challenge',
        p: 'Create a component that:\n1. Fetches posts from `https://jsonplaceholder.typicode.com/posts`\n2. Shows a **"Loading…"** message while fetching\n3. Handles and displays an **error** if the API call fails\n4. Uses `useEffect` with the correct dependencies\n\nHint: three state variables — `posts`, `loading`, and `error`. Flip `loading` to false after the fetch resolves (in both `.then` and `.catch`).',
      },
      {
        h: '10. Quick Summary',
        p: 'useEffect is the Hook for **side effects** — anything that happens outside of rendering JSX.\n\nMaster three things:\n1. **When it fires** — the dependencies array.\n2. **What it does** — the effect callback.\n3. **How it cleans up** — the return function.\n\nGet these three right and your components will be efficient, correct, and memory-leak-free.',
      },
    ],
    snippets: [
      {
        label: 'Basic useEffect — run once on mount',
        code: "import { useEffect } from 'react';\n\nfunction App() {\n  useEffect(() => {\n    console.log('Component mounted!');\n    // runs once — [] means no dependencies to watch\n  }, []);\n\n  return <h1>Hello</h1>;\n}",
        note: 'Empty dependencies array → effect fires only when the component mounts, not on subsequent re-renders.',
      },
      {
        label: 'Fetch data from an API',
        code: "import { useState, useEffect } from 'react';\n\nfunction Users() {\n  const [users, setUsers] = useState([]);\n\n  useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/users')\n      .then(res => res.json())\n      .then(data => setUsers(data))\n      .catch(err => console.log(err));\n  }, []); // runs once on mount\n\n  return (\n    <ul>\n      {users.map(user => (\n        <li key={user.id}>{user.name}</li>\n      ))}\n    </ul>\n  );\n}\n\nexport default Users;",
        note: 'The API is called exactly once when the component mounts, because the dependencies array is [].',
      },
      {
        label: 'Cleanup — clear a timer on unmount',
        code: "import { useEffect } from 'react';\n\nfunction Timer() {\n  useEffect(() => {\n    const timer = setInterval(() => {\n      console.log('Tick');\n    }, 1000);\n\n    // cleanup: runs before next effect or on unmount\n    return () => {\n      clearInterval(timer);\n      console.log('Timer cleared');\n    };\n  }, []);\n\n  return <p>Timer running — check the console.</p>;\n}",
        note: 'Without the clearInterval cleanup, the timer keeps firing even after the component is removed — memory leak.',
      },
      {
        label: 'Dependencies — re-run when a value changes',
        code: "import { useState, useEffect } from 'react';\n\nfunction Search({ query }) {\n  const [results, setResults] = useState([]);\n\n  useEffect(() => {\n    // Re-runs every time `query` changes\n    fetch(`https://api.example.com/search?q=${query}`)\n      .then(res => res.json())\n      .then(data => setResults(data));\n  }, [query]); // <-- query in the array\n\n  return <ul>{results.map(r => <li key={r.id}>{r.title}</li>)}</ul>;\n}",
        note: '[query] means the fetch re-runs whenever the query prop changes — perfect for live search.',
      },
    ],
  },
  {
    day: 13,
    date: '21 Mar 2028',
    group: 'hooks',
    title: 'useReducer & useContext in React',
    tagline: 'Two powerful hooks — manage complex state with useReducer and share data across components without prop drilling using useContext.',
    image: '/react-notes/react13.jpeg',
    tags: ['useReducer', 'useContext', 'Context API', 'Hooks', 'State Management', 'Prop Drilling', 'Provider', 'Consumer', 'Dispatch', 'Reducer'],
    notes: [
      { k: 'What is useReducer?', v: '`useReducer` is an alternative to `useState` for managing **complex state logic**. It is recommended when state updates depend on the previous state or when logic becomes complex with multiple sub-values.' },
      { k: 'useReducer Syntax', v: '`const [state, dispatch] = useReducer(reducer, initialState)` — `state` is current state, `dispatch` sends actions to the reducer, `reducer` processes actions and returns new state, `initialState` is the starting value.' },
      { k: 'Reducer → Action → State Flow', v: '**Action** (something happened / dispatch) → **Reducer** (checks action type and returns new state) → **State** (React re-renders with the new state).' },
      { k: 'When to use useReducer?', v: 'When state has multiple sub-values; when next state depends on previous state; when state update logic is complex; when you want predictable state transitions (like Redux style).' },
      { k: 'What is useContext?', v: '`useContext` lets us access data (context) without passing props through every level of the component tree — solving the **prop drilling** problem.' },
      { k: 'Creating Context — 3 Steps', v: '1. **Create Context** — `createContext()`. 2. **Provide Context** — wrap children with `<Context.Provider value={data}>`. 3. **Consume Context** — call `useContext(MyContext)` in any child component.' },
      { k: 'Provider → Consumer Flow', v: '**Provider** (in App, `value={theme}`) → **React Tree** (Navbar, MainContent, Footer…) → **Consumer** (`useContext`) gets the value anywhere in the tree without prop drilling.' },
      { k: 'useReducer vs useContext', v: '**useReducer** = manages complex state logic *inside* a component (local/isolated state, returns `state + dispatch`). **useContext** = *shares* data across components without prop drilling (global-ish data: theme, user, settings, lang).' },
      { k: 'Common Mistakes', v: 'Using useReducer for simple state (just use useState); creating context inside a component (recreates on every render); forgetting to wrap with Provider; mutating state inside reducer (always return new state object); overusing context (can cause unnecessary re-renders).' },
      { k: 'Quick Summary', v: 'useReducer helps manage complex state with actions and a reducer. useContext helps share data across the component tree easily. **Both hooks together make React apps scalable and maintainable.**' },
    ],
    theory: [
      {
        h: 'What is useReducer?',
        p: '`useReducer` is an alternative to `useState` for managing **complex state logic**. It is recommended when:\n\n- State updates depend on the previous state\n- State logic becomes complex with multiple sub-values\n- You want predictable, action-based state transitions (like Redux)\n\n**Syntax:**\n```jsx\nconst [state, dispatch] = useReducer(reducer, initialState);\n```\n- `state` — the current state value\n- `dispatch` — a function that sends an action to the reducer\n- `reducer` — a pure function `(state, action) => newState`\n- `initialState` — the starting value of the state',
      },
      {
        h: 'Reducer → Action → State Flow',
        p: 'The flow of data in useReducer is:\n\n**Action** (something happened — you call `dispatch({type: "increment"})`) → **Reducer** (checks `action.type` and returns new state) → **State** (React re-renders with the new state value)\n\nThe reducer is a pure function — it never mutates state directly. It always returns a **new state object**.',
      },
      {
        h: 'useReducer Example — Counter',
        p: 'A counter with increment, decrement and reset actions — the classic way to learn useReducer. The `dispatch` function sends an action object `{type: "..."}` to the reducer. The reducer checks the type, computes new state, and returns it. React re-renders with the updated value.\n\n`dispatch` sends the action to the reducer → Reducer returns the new state.',
      },
      {
        h: 'When to Use useReducer Instead of useState',
        p: '**Use useReducer when:**\n\n- State has multiple sub-values (e.g. `{loading, data, error}`)\n- The next state depends on the previous state\n- State update logic is complex or shared\n- You want predictable state transitions (Redux-style)\n\n**Stick with useState when:**\n\n- The state is a single simple value\n- There are only 1–2 updates and they are independent',
      },
      {
        h: 'What is useContext?',
        p: '`useContext` lets you access **context data** from any component in the tree — without manually passing props down every level (**prop drilling**).\n\n**Problem prop drilling solves:**\n```\nApp → Parent → Child → Grandchild (needs the data)\n```\nWithout context, you pass props through every layer even if intermediate components don\'t use them. With `useContext`, Grandchild reads directly from the Provider.',
      },
      {
        h: 'Creating & Using useContext — 3 Steps',
        p: '**Step 1 — Create the context:**\n```jsx\nimport { createContext } from \'react\';\nexport const ThemeContext = createContext(); // default value is optional\n```\n\n**Step 2 — Provide the context:**\nWrap your component tree in `<ThemeContext.Provider value={theme}>`. Every child can now read `theme` — Provider makes the value available to all children components.\n\n**Step 3 — Consume the context:**\nIn any child component call `useContext(ThemeContext)` to get the value the Provider passed down — no props needed.',
      },
      {
        h: 'Provider → Consumer Flow',
        p: '```\nProvider (in App, value={theme})\n        ↓\nReact Tree (Navbar, MainContent, Footer, etc.)\n        ↓\nConsumer — useContext(ThemeContext) — gets theme anywhere\n```\n\nData flows **down** the tree through the context. Any component inside the Provider can read the context value — whether it is a direct child or deeply nested.',
      },
      {
        h: 'useReducer vs useContext — Two Different Tools',
        p: '**useReducer** and **useContext** solve different problems and are often used together:\n\n| | useReducer | useContext |\n|---|---|---|\n| Purpose | Complex state logic | Share data across components |\n| Scope | Local / isolated | Global-ish (theme, user, lang) |\n| Returns | state + dispatch | the context value |\n| Replaces | Complex useState | Prop drilling |\n\n**Used together:** useReducer manages the state; useContext distributes it — a lightweight alternative to Redux.',
      },
      {
        h: 'Common Mistakes',
        p: '**Avoid these patterns:**\n\n- Using `useReducer` for simple state — just use `useState`\n- Creating context inside a component — it recreates on every render; always create it outside\n- Forgetting to wrap components with `<Provider>` — consuming components will get `undefined`\n- Mutating state inside the reducer — always return a **new** state object\n- Overusing context — every context update re-renders all consumers; keep context granular',
      },
      {
        h: 'Mini Challenge — Theme Toggle App',
        p: 'Build a **Theme Toggle app** that combines both hooks:\n\n- Use `useContext` to share the current theme (light / dark) across all components\n- Use `useReducer` to manage the theme state and toggle action\n- A single Toggle button changes the theme globally\n- Multiple components (Navbar, Body, Footer) display the current theme\n\nThis is the exact pattern used in production React apps for theming, authentication state, and language switching.',
      },
      {
        h: 'Quick Summary',
        p: '**useReducer** — manages complex state with a reducer function and dispatched actions. Best for multi-value state and predictable transitions.\n\n**useContext** — shares data across the component tree without prop drilling. Best for global-ish data: theme, user, language, settings.\n\n**Together:** useReducer manages the state logic; useContext distributes the state to any component that needs it. Two hooks, infinite possibilities.',
      },
    ],
    snippets: [
      {
        label: 'useReducer — Counter (increment, decrement, reset)',
        code: "import { useReducer } from 'react';\n\n// 1. Reducer function\nfunction counterReducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    case 'decrement':\n      return { count: state.count - 1 };\n    case 'reset':\n      return { count: 0 };\n    default:\n      return state;\n  }\n}\n\n// 2. Component\nexport default function Counter() {\n  const [state, dispatch] = useReducer(counterReducer, { count: 0 });\n\n  return (\n    <div className=\"box\">\n      <h2>Count: {state.count}</h2>\n      <button onClick={() => dispatch({ type: 'increment' })}>+</button>\n      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>\n      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>\n    </div>\n  );\n}",
        note: '`dispatch` sends an action object to the reducer. The reducer checks `action.type` and returns a new state object — React re-renders with the updated count.',
      },
      {
        label: 'useContext — Step 1: Create the Context',
        code: "// ThemeContext.js\nimport { createContext } from 'react';\n\nexport const ThemeContext = createContext(); // default value is optional",
        note: 'Always create context outside of any component so it is stable across renders.',
      },
      {
        label: 'useContext — Step 2: Provide the Context',
        code: "import { ThemeContext } from './ThemeContext';\n\nfunction App() {\n  const theme = {\n    mode: 'dark',\n    toggle: () => {}\n  };\n\n  return (\n    <ThemeContext.Provider value={theme}>\n      <Navbar />\n      <MainContent />\n    </ThemeContext.Provider>\n  );\n}",
        note: 'The Provider wraps children with `value={theme}`. Every child — at any depth — can now read `theme` via useContext without receiving it as a prop.',
      },
      {
        label: 'useContext — Step 3: Consume the Context',
        code: "import { useContext } from 'react';\nimport { ThemeContext } from './ThemeContext';\n\nfunction Navbar() {\n  const theme = useContext(ThemeContext); // access context\n\n  return (\n    <nav className={theme.mode}>\n      <span>Neon Dev</span>\n      <button onClick={theme.toggle}>Toggle Theme</button>\n    </nav>\n  );\n}",
        note: '`useContext(ThemeContext)` gives us the exact value the Provider passed — no props, no drilling.',
      },
      {
        label: 'useReducer + useContext — Theme Toggle (combined pattern)',
        code: "import { createContext, useContext, useReducer } from 'react';\n\nconst ThemeContext = createContext();\n\nfunction themeReducer(state, action) {\n  switch (action.type) {\n    case 'TOGGLE':\n      return { mode: state.mode === 'light' ? 'dark' : 'light' };\n    default:\n      return state;\n  }\n}\n\nexport function ThemeProvider({ children }) {\n  const [state, dispatch] = useReducer(themeReducer, { mode: 'light' });\n\n  return (\n    <ThemeContext.Provider value={{ state, dispatch }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\nexport function useTheme() {\n  return useContext(ThemeContext);\n}\n\n// Usage in any component:\n// const { state, dispatch } = useTheme();\n// dispatch({ type: 'TOGGLE' });",
        note: 'The Mini Challenge pattern — useReducer manages the state logic, useContext distributes both `state` and `dispatch` to the entire tree. This is the foundation of lightweight state management (no Redux needed).',
      },
    ],
  },
  {
    day: 14,
    date: '24 Mar 2028',
    group: 'components',
    title: 'Derived State & Lifting State Up',
    tagline: 'Don\'t store what you can calculate — and when sibling components share state, lift it to their closest common parent.',
    image: '/react-notes/react14.jpeg',
    tags: ['Derived State', 'Lifting State Up', 'State Management', 'Props', 'Parent Component', 'Shared State', 'Minimal State', 'Component Design'],
    notes: [
      { k: 'What is Derived State?', v: 'State that can be **calculated** from other state or props. Don\'t store it — compute it during render. Example: `fullName = firstName + " " + lastName` — no need to store `fullName` separately.' },
      { k: 'Syntax / Idea', v: '**Don\'t store what you can calculate.** Compute it directly in the component body during render. Storing derived values causes bugs and inconsistency when the source changes.' },
      { k: 'Pro Tips — Derived State', v: 'Prefer deriving over storing; keeps state minimal; prevents bugs and inconsistency when source values change.' },
      { k: 'Common Mistakes — Derived State', v: 'Storing derived values in state (unnecessary duplication); forgetting to update the derived value when source changes (stale data).' },
      { k: 'What is Lifting State Up?', v: 'When multiple components need the **same state**, move that state to their **closest common parent**. The parent owns the state and passes it down via props.' },
      { k: 'Visual — Lifting State Up', v: '`Parent (State)` → passes `count` and `setCount` as props → `Child A` and `Child B`. Both children can read and update the same count through the parent.' },
      { k: 'Pro Tips — Lifting State Up', v: 'Lift state only when needed; keep the parent simple and pass only what is required to each child.' },
      { k: 'Common Mistakes — Lifting State Up', v: 'Lifting too much state unnecessarily; passing the entire state object when only one value is needed.' },
      { k: 'Mini Challenge — Derived State', v: 'Create a component that takes `length` and `width` as props, and shows the area (`length * width`). **Don\'t store area in state** — derive it during render.' },
      { k: 'Quick Summary', v: '**Derived State** → Calculate from other state/props. Don\'t store. **Lifting State Up** → Move state to the closest common parent and share via props. Derive, don\'t duplicate. Share, don\'t copy. Keep state minimal and meaningful.' },
    ],
    theory: [
      {
        h: 'Derived State — State You Calculate, Not Store',
        p: '**Derived state** is any value that can be computed from existing state or props. The rule is simple: **don\'t store what you can calculate**.\n\nIf you store `fullName` separately in state alongside `firstName` and `lastName`, you now have to keep three values in sync — and they can go out of sync. Instead, compute `fullName` directly in the render:\n\n```jsx\nconst fullName = firstName + " " + lastName;\n```\n\nThis is always fresh, always in sync, and requires zero extra state.\n\n**Pro tips:**\n- Prefer deriving over storing\n- Keeps state minimal\n- Prevents bugs and inconsistency',
      },
      {
        h: 'Derived State — Example',
        p: 'The `Profile` component receives `firstName` and `lastName` as props. It computes `fullName` directly — no `useState` needed for it:\n\n```jsx\nfunction Profile({ firstName, lastName }) {\n  const fullName = firstName + " " + lastName; // derived, not stored\n  return (\n    <div className="card">\n      <h3>{fullName}</h3>\n      <p>{firstName}</p>\n      <p>{lastName}</p>\n    </div>\n  );\n}\n```\n\n**Common mistakes to avoid:**\n- Storing `fullName` in state → stale when `firstName` or `lastName` changes\n- Forgetting to update the derived value when its sources change',
      },
      {
        h: 'Lifting State Up — Share State via the Closest Common Parent',
        p: 'When multiple sibling components need to read or update the **same piece of state**, the solution is to **lift the state up** to their closest common parent.\n\nThe parent owns the state. Each child receives the value and the setter as props.\n\n**Visual flow:**\n```\nParent (owns state)\n  ├── Child A  (reads + updates via props)\n  └── Child B  (reads + updates via props)\n```\n\nParent owns the state and passes it down via props — single source of truth.',
      },
      {
        h: 'Lifting State Up — Example',
        p: 'Two children (`ChildA` and `ChildB`) both need to update the same counter. The solution: move `count` to the Parent and pass both `count` and `setCount` as props:\n\n```jsx\nfunction Parent() {\n  const [count, setCount] = useState(0);\n  return (\n    <div className="parent">\n      <ChildA count={count} setCount={setCount} />\n      <ChildB count={count} setCount={setCount} />\n    </div>\n  );\n}\n\nfunction ChildA({ count, setCount }) {\n  return <button onClick={() => setCount(count + 1)}>+1</button>;\n}\n```\n\nBoth children update the same `count` — no duplication, no sync issues.\n\n**Pro tips:**\n- Lift state only when needed\n- Keep the parent simple — pass only what each child actually needs\n\n**Common mistakes:**\n- Lifting too much state unnecessarily (adds coupling)\n- Passing the entire state object when only one value is needed',
      },
      {
        h: 'Mini Challenges',
        p: '**Challenge 1 — Derived State:**\nCreate a component that takes `length` and `width` as props and displays the area. Do **not** store `area` in state — derive it.\n\n**Challenge 2 — Lifting State Up:**\nCreate two separate button components — one for `+` and one for `-`. Lift the `count` state up to a parent so both buttons update the same count. Display the count in the parent.\n\nThese two challenges together reinforce the core principle: **keep state minimal, keep it in one place, compute everything else**.',
      },
      {
        h: 'Quick Summary',
        p: '**Derived State** → Calculate from other state or props. Don\'t store it — compute it during render. Keeps state minimal and prevents sync bugs.\n\n**Lifting State Up** → When siblings need shared state, move it to their closest common parent and pass down via props. One source of truth.\n\n**The three rules to remember:**\n- Derive, don\'t duplicate\n- Share, don\'t copy\n- Keep state minimal and meaningful',
      },
    ],
    snippets: [
      {
        label: 'Derived State — fullName computed from props (no extra state)',
        code: "function Profile({ firstName, lastName }) {\n  // Derived — computed during render, not stored in state\n  const fullName = firstName + ' ' + lastName;\n\n  return (\n    <div className=\"card\">\n      <h3>{fullName}</h3>\n      <p>{firstName}</p>\n      <p>{lastName}</p>\n    </div>\n  );\n}",
        note: 'Never store `fullName` in useState — it would go stale whenever `firstName` or `lastName` changes. Compute it directly.',
      },
      {
        label: 'Derived State — area computed from length and width (mini challenge)',
        code: "function Rectangle({ length, width }) {\n  const area = length * width; // derived — no state needed\n\n  return (\n    <div>\n      <p>Length: {length}</p>\n      <p>Width: {width}</p>\n      <p>Area: {area}</p>\n    </div>\n  );\n}\n\n// Usage\n<Rectangle length={5} width={3} />  // Area: 15",
        note: 'Area is always in sync with length and width because it is computed fresh on every render.',
      },
      {
        label: 'Lifting State Up — shared counter between two child components',
        code: "import { useState } from 'react';\n\nfunction Parent() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div className=\"parent\">\n      <h2>Count: {count}</h2>\n      <ChildA count={count} setCount={setCount} />\n      <ChildB count={count} setCount={setCount} />\n    </div>\n  );\n}\n\nfunction ChildA({ count, setCount }) {\n  return <button onClick={() => setCount(count + 1)}>+ Increment</button>;\n}\n\nfunction ChildB({ count, setCount }) {\n  return <button onClick={() => setCount(count - 1)}>- Decrement</button>;\n}\n\nexport default Parent;",
        note: 'Parent owns the single source of truth. Both children read and update the same `count` — no duplication, no sync issues.',
      },
    ],
  },
  {
    day: 15,
    date: '27 Mar 2028',
    group: 'components',
    title: 'Component Communication — Parent ↔ Child',
    tagline: 'Data flows down through props; actions flow up through callbacks. Master the two-way communication pattern between parent and child components.',
    image: '/react-notes/react15.jpeg',
    tags: ['Props', 'Callbacks', 'Parent to Child', 'Child to Parent', 'Component Communication', 'Data Flow', 'Event Handling', 'Read-only Props'],
    notes: [
      { k: 'Core Idea', v: 'Components talk to each other. **Data flows from Parent → Child** (via props) and **actions flow from Child → Parent** (via callbacks). This is the one-directional data flow model in React.' },
      { k: 'Parent → Child (Props)', v: 'Parent sends data to Child using **props**. The child receives the data and renders it. Props are **read-only** in the child — the child cannot modify them.' },
      { k: 'Common Mistakes — Props', v: 'Trying to change props inside the child component (they\'re immutable); not passing required data to the child (causes `undefined` errors).' },
      { k: 'Best Practices — Props', v: 'Keep components focused on one job; use props for data and callbacks for actions — don\'t mix concerns.' },
      { k: 'Child → Parent (Callbacks)', v: 'Child sends data or triggers actions in the Parent by calling a **callback function** passed down as a prop. The parent defines the function; the child calls it.' },
      { k: 'Pro Tip — Callbacks', v: 'Use meaningful callback names like `onSubmit`, `onDelete`, `onChange`, `onSelect`. Names starting with `on` signal to the reader that it\'s an event handler.' },
      { k: 'Common Mistakes — Callbacks', v: 'Not passing the callback function to the child (nothing happens on event); calling the callback **immediately** (`onClick={sendMessage("Hi")}`) instead of inside an arrow function (`onClick={() => sendMessage("Hi")}`).' },
      { k: 'Best Practices — Callbacks', v: 'Name callbacks clearly; pass functions, not results — always wrap calls in an arrow function when the call has arguments.' },
      { k: 'Mini Challenge', v: 'Build a Parent component with an input field. Pass the input value down to a Child (displays it). The Child should also have a button that sends a message **back up** to the Parent using a callback.' },
      { k: 'Quick Summary', v: '**Parent → Child**: send data using props, data flows down. **Child → Parent**: send data/actions using callbacks, actions flow up. **Remember**: data down, actions up. Props are read-only. Communication makes your app dynamic!' },
    ],
    theory: [
      {
        h: 'Component Communication — The Two Directions',
        p: 'In React, components are isolated by default. To make them work together, you use a clear communication contract:\n\n- **Parent → Child**: pass data downward via **props**\n- **Child → Parent**: pass actions upward via **callbacks** (functions passed as props)\n\nThis is why React\'s data flow is called **unidirectional** — data always flows **down** the tree, and actions always flow **up**. Understanding this pattern is the foundation of every React app.',
      },
      {
        h: 'Parent → Child with Props',
        p: 'The parent component defines data and passes it to the child through JSX attributes (props). The child reads the data from `props` (or destructures it):\n\n```jsx\nfunction Parent() {\n  const name = "Faisal";\n  return <Child userName={name} />;\n}\n\nfunction Child(props) {\n  return <p>Hello, {props.userName}!</p>;\n}\n```\n\n**Key rule: props are read-only in the child.** If you try to set `props.userName = "..."` inside `Child`, React will not throw an error in development for plain props, but this is a pattern violation — the child should never mutate its props. If data needs to change, the parent must own the state and pass down the new value.\n\n**Common mistakes:**\n- Trying to change props in the child (violates one-directional flow)\n- Not passing required data (child receives `undefined`)',
      },
      {
        h: 'Child → Parent with Callbacks',
        p: 'The parent defines a function and passes it down as a prop. The child calls that function (with optional data) to communicate back up:\n\n```jsx\nfunction Parent() {\n  const handleClick = (msg) => {\n    alert("Message from child: " + msg);\n  };\n  return <Child sendMessage={handleClick} />;\n}\n\nfunction Child({ sendMessage }) {\n  return (\n    <button onClick={() => sendMessage("Hi Parent!")}>\n      Send Message\n    </button>\n  );\n}\n```\n\n**Critical syntax note:** write `onClick={() => sendMessage("Hi")}`, not `onClick={sendMessage("Hi")}`. The second form calls the function **immediately at render time**, not on click — a very common bug.\n\n**Pro tips:**\n- Name callback props with `on` prefix: `onSubmit`, `onDelete`, `onChange`\n- Pass functions, not results — always wrap calls with arguments in an arrow function',
      },
      {
        h: 'Mini Challenge — Two-way Communication',
        p: 'Combine both patterns in a single exercise:\n\n1. Build a `Parent` with a text input (controlled by state)\n2. Pass the current input value **down** to `Child` via props — Child displays it\n3. Add a button in `Child` that sends a message **back up** to Parent via a callback — Parent shows an alert or updates some state\n\nThis challenge exercises both directions at once: props flow down, callback fires up.',
      },
      {
        h: 'Quick Summary — Data Down, Actions Up',
        p: '| Direction | Mechanism | Example |\n|---|---|---|\n| Parent → Child | Props | `<Child name={name} />` |\n| Child → Parent | Callback prop | `<Child onSend={handleSend} />` |\n\n**Remember three things:**\n- **Data down, actions up** — the mantra of React\'s data flow\n- **Props are read-only** — the child never modifies what it receives\n- **Communication makes your app dynamic** — without it, every component is an island',
      },
    ],
    snippets: [
      {
        label: 'Parent → Child with props (userName example)',
        code: "function Parent() {\n  const name = 'Faisal';\n  return <Child userName={name} />;\n}\n\nfunction Child(props) {\n  return <p>Hello, {props.userName}!</p>;\n}\n\n// Or with destructuring:\nfunction Child({ userName }) {\n  return <p>Hello, {userName}!</p>;\n}",
        note: 'Props are read-only in the child — never assign to them. If the value needs to change, the parent must own and update the state.',
      },
      {
        label: 'Child → Parent with a callback function',
        code: "function Parent() {\n  const handleClick = (msg) => {\n    alert('Message from child: ' + msg);\n  };\n\n  return <Child sendMessage={handleClick} />;\n}\n\nfunction Child({ sendMessage }) {\n  return (\n    <button onClick={() => sendMessage('Hi Parent!')}>\n      Send Message\n    </button>\n  );\n}",
        note: "Always wrap callback calls with arguments inside an arrow function: `() => sendMessage('Hi')`. Writing `onClick={sendMessage('Hi')}` calls the function immediately at render time — a very common bug.",
      },
      {
        label: 'Mini challenge — two-way communication (input + callback)',
        code: "import { useState } from 'react';\n\nfunction Parent() {\n  const [inputValue, setInputValue] = useState('');\n  const [message, setMessage] = useState('');\n\n  const handleMessage = (msg) => setMessage(msg);\n\n  return (\n    <div>\n      <input\n        value={inputValue}\n        onChange={(e) => setInputValue(e.target.value)}\n        placeholder=\"Type something...\"\n      />\n      <Child value={inputValue} onSend={handleMessage} />\n      {message && <p>Child says: {message}</p>}\n    </div>\n  );\n}\n\nfunction Child({ value, onSend }) {\n  return (\n    <div>\n      <p>Parent input: {value}</p>\n      <button onClick={() => onSend('Hi from Child!')}>Send to Parent</button>\n    </div>\n  );\n}",
        note: "Data (`value`) flows down from Parent to Child via props. The action (`onSend`) fires upward from Child to Parent via the callback.",
      },
    ],
  },
  {
    day: 16,
    date: '30 Mar 2028',
    group: 'projects',
    title: 'Mini Project — Counter + Todo List',
    tagline: 'Bring everything together: build a Counter with increment/decrement/reset and a fully functional Todo List with add, toggle, and delete — in one mini project.',
    image: '/react-notes/react16.jpeg',
    tags: ['Mini Project', 'Counter', 'Todo List', 'useState', 'Arrays in State', 'Lists & Keys', 'Conditional Rendering', 'Event Handling', 'State Management'],
    notes: [
      { k: 'Project Goal', v: 'Build a small app combining a **Counter** and a **Todo List**. This brings together everything learned so far in Module 2: State Management — useState, event handling, conditional rendering, lists & keys, and updating arrays in state.' },
      { k: '1. Counter — Core Idea', v: 'Increase, decrease, and reset the count. Uses **one piece of state** (`count`) and **three event handlers** (`inc`, `dec`, `reset`) — each calling `setCount` with the appropriate operation.' },
      { k: '2. Todo List — Core Idea', v: 'Add, complete, and delete tasks. Uses **two pieces of state**: `input` (the text field) and `todos` (the array of task objects). Each todo has `id`, `text`, and `done` properties.' },
      { k: 'Key Concepts Used', v: '`useState` for managing state; Event handling (`onClick`, `onChange`); Conditional rendering (strikethrough on done tasks); Lists & Keys (`id` on each todo); Updating arrays in state (spread operator, `.map()`, `.filter()`).' },
      { k: 'Folder Structure', v: '`src/` → `components/Counter.jsx`, `components/TodoList.jsx`, `App.jsx`, `index.jsx`. Keep each feature in its own component — Counter and TodoList are independent and composed together in App.' },
      { k: 'Pro Tips', v: 'Keep components small and focused. Use meaningful state names (`count`, `todos`, `input` — not `data` or `val`). Each component should have a single responsibility.' },
      { k: 'Common Mistakes', v: '**Mutating state directly** — never do `todos.push(newTodo)`, always use the spread operator or array methods. **Forgetting keys in lists** — every `<li>` or list item needs a unique `key` prop for React to track it efficiently.' },
      { k: 'addTodo logic', v: 'Guard with `if(input.trim() === "") return` to prevent empty tasks. Spread the existing array and append the new todo: `[...todos, { id: Date.now(), text: input, done: false }]`. Reset input after adding.' },
      { k: 'toggleTodo logic', v: 'Use `.map()` to create a new array — find the matching todo by `id` and flip its `done` field with `{ ...todo, done: !todo.done }`. All others stay unchanged.' },
      { k: 'Quick Summary', v: '**Counter** → Increase / Decrease count; Reset to 0. **Todo List** → Add new tasks; Mark tasks as complete; Delete tasks. **Remember**: Plan your state. Update state safely. Keep UI simple and clean.' },
    ],
    theory: [
      {
        h: 'Part 1 — Counter: One State, Three Handlers',
        p: 'The Counter is the simplest stateful component: one `useState(0)` call and three arrow functions that call `setCount`.\n\n```jsx\nconst [count, setCount] = useState(0);\nconst inc   = () => setCount(count + 1);\nconst dec   = () => setCount(count - 1);\nconst reset = () => setCount(0);\n```\n\nThe UI renders three buttons wired to these handlers and a `<span>` that displays `{count}`.\n\n**Key point:** `setCount` replaces the state value — React re-renders the component and the display updates automatically. You never mutate `count` directly.',
      },
      {
        h: 'Part 2 — Todo List: Two State Values + Three Operations',
        p: 'The Todo List is more complex — it manages an array in state:\n\n```jsx\nconst [input, setInput]   = useState("");\nconst [todos, setTodos]   = useState([]);\n```\n\n**Three operations:**\n1. **addTodo** — guard empty input, spread existing array, append new todo object `{ id, text, done: false }`, reset input.\n2. **toggleTodo(id)** — use `.map()` to find the matching todo and flip `done`, returning a new array.\n3. **deleteTodo(id)** — use `.filter()` to return all todos except the one with the matching `id`.\n\n**Why spread and map/filter instead of push/splice?** React compares the previous and new state reference. Mutating the existing array (push, splice) gives React the same reference, so it may not detect a change. Always create a **new array**.',
      },
      {
        h: 'Key Concepts Reinforced',
        p: '**useState for managing state** — both a primitive (`count`) and an array (`todos`) use the same `useState` hook.\n\n**Event handling** — `onClick` for buttons, `onChange` for the input field. Arrow functions keep the handlers concise and co-located with the component.\n\n**Conditional rendering** — the Todo UI applies a strikethrough style when `todo.done` is true, visually distinguishing completed tasks from pending ones.\n\n**Lists & Keys** — every todo in the list needs a unique `key` prop. Using `Date.now()` as the `id` makes each key unique at the moment of creation.\n\n**Updating arrays in state** — the three array patterns:\n- Add: `[...todos, newItem]`\n- Toggle: `todos.map(t => t.id === id ? { ...t, done: !t.done } : t)`\n- Delete: `todos.filter(t => t.id !== id)`',
      },
      {
        h: 'Folder Structure & Component Design',
        p: 'Splitting the app into focused components keeps code readable and reusable:\n\n```\nsrc/\n├── components/\n│   ├── Counter.jsx    ← manages count state\n│   └── TodoList.jsx   ← manages todos state\n├── App.jsx            ← composes both components\n└── index.jsx          ← entry point\n```\n\nEach component owns its own state — Counter has no knowledge of todos and vice versa. `App.jsx` simply renders both side by side. This is the **single responsibility principle** applied to React components.',
      },
      {
        h: 'Mini Challenge & Quick Summary',
        p: '**Mini Challenge:** Add an "Edit" feature to your Todo. Allow the user to edit a task\'s text before marking it done. Hint: add an `editing` flag to each todo object and toggle an input field in place of the `<p>` when editing.\n\n**Quick Summary:**\n| Feature | Counter | Todo List |\n|---|---|---|\n| State | `count` (number) | `todos` (array) |\n| Add | `setCount(count + 1)` | spread + append |\n| Update | `setCount(count - 1)` | `.map()` to toggle |\n| Reset/Delete | `setCount(0)` | `.filter()` to remove |\n\n**Remember:** Plan your state. Update state safely (never mutate). Keep UI simple and clean.',
      },
    ],
    snippets: [
      {
        label: 'Counter — increment, decrement, reset',
        code: "import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  const inc   = () => setCount(count + 1);\n  const dec   = () => setCount(count - 1);\n  const reset = () => setCount(0);\n\n  return (\n    <div>\n      <h2>Counter</h2>\n      <p>{count}</p>\n      <button onClick={dec}>-</button>\n      <button onClick={reset}>Reset</button>\n      <button onClick={inc}>+</button>\n    </div>\n  );\n}\n\nexport default Counter;",
        note: 'Always call setCount with a new value — never modify count directly. React re-renders automatically on state change.',
      },
      {
        label: 'Todo List — add, toggle done, delete (core logic)',
        code: "import { useState } from 'react';\n\nfunction TodoList() {\n  const [input, setInput] = useState('');\n  const [todos, setTodos] = useState([]);\n\n  const addTodo = () => {\n    if (input.trim() === '') return;\n    setTodos([...todos, { id: Date.now(), text: input, done: false }]);\n    setInput('');\n  };\n\n  const toggleTodo = (id) => {\n    setTodos(todos.map(todo =>\n      todo.id === id ? { ...todo, done: !todo.done } : todo\n    ));\n  };\n\n  const deleteTodo = (id) => {\n    setTodos(todos.filter(todo => todo.id !== id));\n  };\n\n  return (\n    <div>\n      <h2>Todo List</h2>\n      <input\n        value={input}\n        onChange={(e) => setInput(e.target.value)}\n        placeholder=\"Add a task...\"\n      />\n      <button onClick={addTodo}>Add</button>\n      <ul>\n        {todos.map(todo => (\n          <li key={todo.id}>\n            <span\n              style={{ textDecoration: todo.done ? 'line-through' : 'none' }}\n              onClick={() => toggleTodo(todo.id)}\n            >\n              {todo.text}\n            </span>\n            <button onClick={() => deleteTodo(todo.id)}>Delete</button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nexport default TodoList;",
        note: "Three array patterns: add with [...todos, newItem], toggle with .map(), delete with .filter(). Never use .push() or .splice() on the state array directly — always return a new array.",
      },
      {
        label: 'App.jsx — composing Counter and TodoList together',
        code: "import Counter  from './components/Counter';\nimport TodoList from './components/TodoList';\n\nfunction App() {\n  return (\n    <div>\n      <Counter />\n      <TodoList />\n    </div>\n  );\n}\n\nexport default App;",
        note: 'Each component owns its own state independently. App.jsx just composes them — no props needed between Counter and TodoList.',
      },
    ],
  },
  {
    day: 17,
    date: '2 Apr 2028',
    group: 'hooks',
    title: 'useEffect Basics + Dependency Array',
    tagline: 'Run side effects after render — and control exactly when they fire using the dependency array: once, on change, or every render.',
    image: '/react-notes/react17.jpeg',
    tags: ['useEffect', 'Side Effects', 'Dependency Array', 'Module 3 Effects', 'Lifecycle', 'Hooks', 'Cleanup', 'Component Mount'],
    notes: [
      { k: 'What is useEffect?', v: '`useEffect` lets us run **side effects** in function components. It runs code **after** the component renders — not during. Flow: Component Renders → useEffect Runs.' },
      { k: 'Basic Syntax', v: '`useEffect(() => { // code here }, []);` — the second argument is the **dependency array** that controls when the effect runs.' },
      { k: '[] — Empty Array', v: 'Runs **once** after the initial render only. Use for one-time setup like fetching initial data, setting up subscriptions, or logging "component mounted".' },
      { k: '[value] — With Dependency', v: 'Runs **when that value changes**. React compares the previous and current value — if different, the effect re-runs. Example: `[count]` re-runs whenever `count` changes.' },
      { k: 'No Array', v: 'Runs **after every render** — both initial and every re-render. Usually what you do NOT want. Omitting the dependency array is rarely correct and often causes performance issues.' },
      { k: 'Pro Tips', v: 'Use `[]` for effects that need to run once (on mount). Add only the values your effect actually uses to the array. Keep effects pure and clean — one responsibility per `useEffect`.' },
      { k: 'Common Mistakes', v: '**Forgetting the dependency array** — effect runs on every render unexpectedly. **Adding unnecessary values** — causes extra re-runs. **Causing infinite re-renders** — happens when you update a state variable that is also in the dependency array without a guard condition.' },
      { k: 'Mini Challenge', v: 'Create a component that logs "Hello Neo" in the console **only when a button is clicked**. Use `useEffect` with a dependency array — trigger it by tracking a click count in state.' },
      { k: 'Quick Summary', v: '`useEffect` handles side effects. Dependency array decides when the effect runs. `[]` = once (on mount), `[value]` = on change, no array = on every render. Keep effects clean and predictable.' },
      { k: 'Module 3 — Effects', v: 'This episode opens **Module 3: Effects**. Side effects are things outside the render itself: API calls, `console.log`, timers, DOM manipulation, subscriptions. React keeps rendering pure — `useEffect` is where all that external work goes.' },
    ],
    theory: [
      {
        h: 'What is a Side Effect?',
        p: 'A React component\'s **render function** should be a pure calculation — same inputs, same output, no surprises. But real apps need to do things like fetch data, set up timers, or log to the console. These are **side effects** — work that reaches outside the render.\n\n`useEffect` is the hook React provides to run that work **after** the component renders, keeping the render function itself pure.\n\n```\nComponent Renders  →  useEffect Runs\n```\n\nThis ordering is important: the component paints first, then effects fire. That means effects never block the first render.',
      },
      {
        h: 'The Three Dependency Array Patterns',
        p: 'The second argument to `useEffect` controls when it re-runs:\n\n| Pattern | Behaviour | When to use |\n|---|---|---|\n| `[]` | Runs once after initial render | Data fetch on mount, event listener setup |\n| `[value]` | Runs when `value` changes | React to a specific state/prop change |\n| *(no array)* | Runs after every render | Almost never — usually a bug |\n\n```jsx\n// Runs once — "component mounted"\nuseEffect(() => {\n  console.log("Component mounted");\n}, []);\n\n// Runs when count changes\nuseEffect(() => {\n  console.log("count is now", count);\n}, [count]);\n\n// Runs after every render — rarely what you want\nuseEffect(() => {\n  console.log("rendered");\n});\n```',
      },
      {
        h: 'Common Mistakes & How to Avoid Them',
        p: '**1. Forgetting the dependency array:**\n```jsx\nuseEffect(() => {\n  fetchData(); // runs after EVERY render — unintentional\n});\n// Fix: add []\n```\n\n**2. Adding unnecessary values:**\n```jsx\nuseEffect(() => {\n  console.log("hello");\n}, [count, name, theme]); // none of these are used in the effect\n// Fix: only include what the effect actually reads\n```\n\n**3. Causing infinite re-renders:**\n```jsx\nuseEffect(() => {\n  setCount(count + 1); // updates count → triggers effect → updates count → ∞\n}, [count]);\n// Fix: add a guard condition, or rethink the design\n```\n\n**Rule of thumb:** only add variables to the dependency array that your effect actually uses inside it.',
      },
      {
        h: 'Mini Challenge — "Hello Neo" on Button Click',
        p: 'The challenge: log "Hello Neo" in the console only when a button is clicked — using `useEffect` with a dependency array, not directly in the click handler.\n\n**Approach:** track a `clicked` counter in state. Increment it on button press. Put the counter in the dependency array — the effect runs whenever it changes.\n\n```jsx\nfunction NeoLogger() {\n  const [clicked, setClicked] = useState(0);\n\n  useEffect(() => {\n    if (clicked === 0) return; // skip the initial render\n    console.log("Hello Neo");\n  }, [clicked]);\n\n  return <button onClick={() => setClicked(c => c + 1)}>Click me</button>;\n}\n```\n\nThis pattern — using a counter in the dependency array — is a clean way to trigger an effect on demand without running it on mount.',
      },
      {
        h: 'Quick Summary — Module 3: Effects',
        p: '`useEffect` is the bridge between React\'s pure render world and the side-effect world.\n\n**Three rules to remember:**\n- `[]` → runs once (on mount)\n- `[value]` → runs when `value` changes\n- no array → runs on every render\n\n**Three principles:**\n- Keep effects clean and predictable\n- Add only necessary values to the dependency array\n- One `useEffect` per responsibility — split effects that do different things\n\nMastering `useEffect` and its dependency array is one of the most important React skills — it underpins data fetching, subscriptions, timers, and all async work in function components.',
      },
    ],
    snippets: [
      {
        label: 'useEffect — three dependency array patterns side by side',
        code: "import { useState, useEffect } from 'react';\n\nfunction EffectDemo() {\n  const [count, setCount] = useState(0);\n\n  // 1. Runs ONCE after initial render\n  useEffect(() => {\n    console.log('Component mounted');\n  }, []);\n\n  // 2. Runs when count changes\n  useEffect(() => {\n    console.log('count changed to', count);\n  }, [count]);\n\n  // 3. Runs after EVERY render (rarely correct)\n  useEffect(() => {\n    console.log('rendered');\n  });\n\n  return (\n    <div>\n      <p>{count}</p>\n      <button onClick={() => setCount(count + 1)}>+1</button>\n    </div>\n  );\n}",
        note: 'The dependency array is the key: [] = mount only, [value] = on change, omitted = every render. Always add the dependency array unless you explicitly want every-render behaviour.',
      },
      {
        label: 'Mini challenge — log "Hello Neo" only on button click',
        code: "import { useState, useEffect } from 'react';\n\nfunction NeoLogger() {\n  const [clicked, setClicked] = useState(0);\n\n  useEffect(() => {\n    if (clicked === 0) return; // skip initial render\n    console.log('Hello Neo');\n  }, [clicked]);\n\n  return (\n    <button onClick={() => setClicked(c => c + 1)}>\n      Click me\n    </button>\n  );\n}\n\nexport default NeoLogger;",
        note: 'Guard with `if (clicked === 0) return` so the effect does not fire on the initial mount. Incrementing `clicked` on each button press triggers the effect exactly when needed.',
      },
      {
        label: 'Common mistake — infinite re-render (and the fix)',
        code: "// BAD — infinite loop: effect updates count, count triggers effect, repeat\nuseEffect(() => {\n  setCount(count + 1);\n}, [count]);\n\n// GOOD — guard condition breaks the loop\nuseEffect(() => {\n  if (count >= 5) return;\n  setCount(count + 1);\n}, [count]);\n\n// GOOD — use functional updater, remove count from deps\nuseEffect(() => {\n  setCount(prev => prev + 1);\n}, []); // runs once, uses functional form to read latest count",
        note: 'Infinite re-renders are the most common useEffect bug. The root cause is always: state update inside the effect → dependency includes that state → effect re-runs → repeat.',
      },
    ],
  },
];

export function getReactDay(day) {
  const n = Number(day);
  return REACT_DAYS.find((d) => d.day === n);
}
