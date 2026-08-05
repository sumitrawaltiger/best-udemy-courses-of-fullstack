// React series notes — illustrated episodes, one per episode, by Neon Dev (@neon_time).
// Each episode pairs a hand-drawn one-page image (public/react-notes/) with
// written notes + code snippets.

export const REACT_META = {
  title: 'The React Series',
  subtitle: 'Illustrated Episodes · React from Zero to Production',
  blurb:
    'React from the ground up — illustrated, one episode at a time. Component-based thinking, the Virtual DOM, JSX, hooks (useState, useEffect, useRef, useContext), state management, routing, performance optimisation, and real-world patterns — each episode paired with the full written notes and every code snippet.',
  totalDays: 5,
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
      { heading: 'Functional Component Syntax', body: 'A functional component is simply a JavaScript function that returns JSX. Export it with `export default` so other files can import it.' },
      { heading: 'How React Uses Components', body: 'When you write `<Hello />` in JSX, React calls the `Hello` function and renders whatever JSX it returns — replacing the tag with real DOM elements.' },
      { heading: 'Why Functional Components?', body: 'Functional components are simpler, easier to read, and are the standard in modern React. Class components still exist but are rarely used in new projects.' },
      { heading: 'Component Composition', body: 'The real power of React is **composition** — building complex UIs by combining small, focused components. Each component owns its own piece of the UI.' },
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
    group: 'hooks',
    title: 'useState Hook in React',
    tagline: 'useState lets you add state to functional components — the most important hook in React.',
    image: '/react-notes/ep03-usestate-hook.jpeg',
    tags: ['useState', 'Hooks', 'State', 'Functional Components', 'Re-render'],
    notes: [
      { k: 'What is useState?', v: '`useState` is a React Hook that lets you add **state** to a functional component. It returns an array of two values: the current state and a function to update it.' },
      { k: 'Syntax', v: '`const [state, setState] = useState(initialValue)` — `state` is the current value, `setState` is the updater function, `initialValue` is the starting value.' },
      { k: 'Memory Trick', v: 'useState gives you a **"state"** and a way to **"set"** that state. Think of it as `[value, changer]`.' },
      { k: 'How it works', v: 'useState returns an array with 2 values. The first is the **current state**. The second is a **function to update it**. When state updates, React **re-renders** the component.' },
      { k: 'Rules of useState', v: 'Only call useState at the **top level** of your component. Never inside loops, conditions, or nested functions. Only call from **React function components** or custom hooks.' },
      { k: 'State updates are async', v: 'State updates are **asynchronous**. React batches multiple updates for better performance — do not read state immediately after calling setState.' },
      { k: 'Previous state pattern', v: 'When new state depends on previous state, pass a **function** to the setter: `setCount(prev => prev + 1)`. This avoids stale value bugs.' },
      { k: 'Object state', v: 'State can be any data type including objects. When updating an object, always spread the previous value: `setUser({ ...user, age: 20 })`. Never mutate directly.' },
      { k: 'Array state', v: 'For arrays, use `setItems([...items, newItem])` to add and `setItems(items.filter(item => item.id !== id))` to remove. Never mutate the array directly.' },
      { k: 'Key Takeaway', v: 'useState is **simple but powerful**. Master it and you can build amazing things. Practice. Build. Break. Fix. Repeat. That\'s how you master React.' },
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
    ],
  },
];

export function getReactDay(day) {
  const n = Number(day);
  return REACT_DAYS.find((d) => d.day === n);
}
