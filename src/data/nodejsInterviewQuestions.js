// Node.js interview questions — adapted from AlgoTutor's "Top 20 Node.js
// Interview Questions & Answers" (Edition 2026), plus its rapid-fire,
// scenario-based and coding sections. Answers were verified/rewritten for
// technical accuracy. Each question: { id, category, question, answer, code? }

export const NODEJS_QUESTION_CATEGORIES = [
  { id: 'fundamentals', label: 'Fundamentals', icon: '🟢' },
  { id: 'eventloop', label: 'Event Loop & Async Model', icon: '🔄' },
  { id: 'modules', label: 'Modules & npm', icon: '📦' },
  { id: 'async', label: 'Async Patterns', icon: '⏳' },
  { id: 'web', label: 'Express & Web', icon: '🌐' },
  { id: 'streams', label: 'Buffers & Streams', icon: '🌊' },
  { id: 'scaling', label: 'Scaling & Performance', icon: '⚡' },
  { id: 'errors', label: 'Error Handling', icon: '🛡️' },
  { id: 'rapidfire', label: 'Rapid Fire', icon: '🔥' },
];

export const NODEJS_INTERVIEW_QUESTIONS = [
  {
    id: 'node-q1',
    category: 'fundamentals',
    question: 'What is Node.js?',
    answer:
      "**Node.js is an open-source, cross-platform, back-end JavaScript runtime built on Chrome's V8 engine.** It runs JavaScript outside the browser — for command-line tools and server-side code. **How it works:** an event-driven, non-blocking I/O model makes it lightweight and efficient; it runs on a single thread using non-blocking I/O calls. **Advantages:** fast execution, one language across front-end and back-end (MERN), highly scalable, and a massive npm ecosystem. **Trade-off:** not ideal for CPU-heavy tasks due to its single-threaded nature. **Best practice:** prefer async methods (`fs.readFile` over `fs.readFileSync`) to avoid blocking the event loop.",
    code: "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello Node!\\n');\n});\n\nserver.listen(3000, () => {\n  console.log('Server running at port 3000');\n});",
  },
  {
    id: 'node-q2',
    category: 'fundamentals',
    question: 'Why is Node.js single-threaded?',
    answer:
      'Node.js uses a **single main thread with an Event Loop** to handle all concurrent connections. Instead of spawning a new thread per request (like Java/Apache), I/O work (DB queries, file reads) is delegated to the underlying system (`libuv` worker threads), freeing the main thread to keep processing requests. **How it works:** the single thread runs your JS; async tasks are offloaded to the libuv thread pool; when they finish, a callback is queued and the Event Loop pushes it back onto the call stack. **Advantage:** minimal memory (no thread-context-switching overhead), very scalable for I/O-bound work. **Trade-off:** a single long-running CPU task blocks the whole server — offload heavy compute to **Worker Threads**.',
    code: "const fs = require('fs');\n\nconsole.log('Start');\n// Async operation delegated to libuv\nfs.readFile('file.txt', 'utf8', (err, data) => {\n  console.log('File read complete');\n});\nconsole.log('End');\n// Output: Start -> End -> File read complete",
  },
  {
    id: 'node-q3',
    category: 'eventloop',
    question: 'Explain the Event Loop',
    answer:
      'The **Event Loop** is the mechanism that lets Node.js perform non-blocking I/O by offloading operations to the system kernel whenever possible. It continuously watches the **Call Stack** and the callback queues: when the stack is empty it takes the next callback and runs it. **Phases:** Timers (`setTimeout`) → Pending Callbacks → Poll (I/O) → Check (`setImmediate`) → Close callbacks. **Order to remember:** synchronous code first, then **microtasks** (Promises, `process.nextTick`) after each operation, then the macro phases. **Common mistake:** assuming `setTimeout(fn, 0)` runs immediately — it runs after the current stack and all microtasks.',
    code: "console.log('1. Main thread');\nsetTimeout(() => console.log('4. Timer phase'), 0);\nsetImmediate(() => console.log('3. Check phase'));\nPromise.resolve().then(() => console.log('2. Microtask queue'));\n// 1 (sync) -> 2 (microtask) -> then timer/check phases",
  },
  {
    id: 'node-q4',
    category: 'eventloop',
    question: 'What is non-blocking I/O?',
    answer:
      "**Non-blocking I/O means the system does not wait for input/output operations** (reading files, network requests) to finish before moving to the next line of code. The request is initiated and the thread continues; when the I/O completes, a callback (or promise) is triggered. **How it works:** callbacks, promises, or async/await handle the result once the background operation completes. **Analogy:** ordering coffee — you get a number and step aside, the cashier serves the next person, and your number is called when the coffee is ready. **Advantage:** maximizes CPU use and handles high concurrent connections. **Common mistake:** using `*Sync` methods inside an HTTP request handler. **Best practice:** always use the async versions of core-module APIs.",
    code: "// Blocking (avoid)\n// const data = fs.readFileSync('file.txt');\n\n// Non-blocking (preferred)\nfs.readFile('file.txt', (err, data) => {\n  if (err) throw err;\n  console.log('File read asynchronously');\n});\nconsole.log('Doing other things...');",
  },
  {
    id: 'node-q5',
    category: 'modules',
    question: 'What is npm?',
    answer:
      "**npm (Node Package Manager) is the default package manager for Node.js** — a command-line client plus an online registry of public/private packages. It lets you share, reuse and manage JavaScript code and its dependencies. **How it works:** `npm install <pkg>` downloads the package from the registry into `node_modules` and records it in `package.json`. **Real-world:** instead of writing authentication from scratch, install `bcrypt` for password hashing and `jsonwebtoken` for auth. **Advantages:** the world's largest software registry and easy dependency management. **Common mistake:** committing the `node_modules` folder to Git. **Best practice:** run `npm audit` regularly to check for vulnerabilities.",
    code: '# Terminal commands\nnpm init -y\nnpm install express\nnpm install nodemon --save-dev',
  },
  {
    id: 'node-q6',
    category: 'modules',
    question: 'Explain package.json',
    answer:
      "**`package.json` is the manifest at the root of a Node project** — it describes the project and its dependencies. Key fields: `name`, `version`, `scripts` (e.g. `start`, `test`, `dev`), `dependencies` (needed in production), `devDependencies` (only for local dev/testing), `main` (entry file), and `engines`. **How it works:** `npm install` reads it to fetch the right packages; `npm run <script>` executes a named script. **Best practice:** choose semantic-version ranges (`^`, `~`) deliberately and keep scripts for common tasks.",
    code: '{\n  "name": "my-api",\n  "version": "1.0.0",\n  "main": "server.js",\n  "scripts": {\n    "start": "node server.js",\n    "dev": "nodemon server.js"\n  },\n  "dependencies": { "express": "^4.18.2" },\n  "devDependencies": { "nodemon": "^3.0.0" }\n}',
  },
  {
    id: 'node-q7',
    category: 'modules',
    question: 'Explain package-lock.json',
    answer:
      '**`package-lock.json` records the exact, fully-resolved dependency tree** — every package and sub-dependency with its precise version and an integrity hash — at install time. While `package.json` lists intended version *ranges*, the lockfile pins the *exact* versions so installs are **reproducible** across machines and CI. **Best practice:** always commit `package-lock.json`, and use `npm ci` in CI for clean, lockfile-exact installs.',
    code: '// package.json (a range)\n"express": "^4.18.2"\n\n// package-lock.json (the exact pinned version)\n"express": { "version": "4.18.2", "integrity": "sha512-..." }',
  },
  {
    id: 'node-q8',
    category: 'modules',
    question: 'Explain CommonJS vs ES Modules',
    answer:
      'Two module systems in Node. **CommonJS (CJS)** is the classic Node system: `require()` / `module.exports`, loaded **synchronously**, and the default for `.js` files. **ES Modules (ESM)** is the language standard: `import` / `export`, loaded **asynchronously**, enabled via `"type": "module"` in package.json (or an `.mjs` extension), and it supports top-level `await` and static analysis (tree-shaking). **Rule of thumb:** new code prefers ESM; CJS is still everywhere in the ecosystem.',
    code: "// CommonJS\nconst fs = require('fs');\nmodule.exports = { add };\n\n// ES Modules\nimport fs from 'fs';\nexport function add(a, b) { return a + b; }",
  },
  {
    id: 'node-q9',
    category: 'modules',
    question: 'Explain Modules in Node.js',
    answer:
      '**A module is a self-contained, reusable unit of code with its own scope.** Node has three kinds: **core modules** (built-in — `fs`, `http`, `path`, `events`), **local modules** (your own files, imported by relative path), and **third-party modules** (installed via npm into `node_modules`). Anything not explicitly exported stays private to the file. **Benefit:** modularity, reuse, and a clear separation of concerns.',
    code: "// math.js\nfunction add(a, b) { return a + b; }\nmodule.exports = { add };\n\n// app.js\nconst { add } = require('./math');\nconsole.log(add(2, 3)); // 5",
  },
  {
    id: 'node-q10',
    category: 'web',
    question: 'Explain Middleware',
    answer:
      '**Middleware is a function that runs during the request–response cycle** and has access to the request (`req`), the response (`res`), and the `next()` function. It can run code, modify `req`/`res`, end the response, or call `next()` to pass control to the next middleware. **Uses:** logging, body parsing (`express.json()`), authentication, CORS, and error handling. **Order matters** — middleware runs top-to-bottom in the order registered. **Error middleware** takes four arguments `(err, req, res, next)`.',
    code: "// Logger middleware\napp.use((req, res, next) => {\n  console.log(`${req.method} ${req.url}`);\n  next(); // pass control to the next handler\n});",
  },
  {
    id: 'node-q11',
    category: 'web',
    question: 'Explain Express.js',
    answer:
      "**Express.js is a minimal, unopinionated web framework built on top of Node's `http` module.** It simplifies building servers and REST APIs with routing (`app.get`/`app.post`/...), middleware, and easy request/response handling. **Why:** without Express you hand-parse URLs and HTTP methods; Express gives you clean routing plus a huge middleware ecosystem. **Alternatives:** Fastify, Koa, NestJS, and Hapi.",
    code: "const express = require('express');\nconst app = express();\n\napp.get('/api/users', (req, res) => {\n  res.json({ users: ['Ada', 'Grace'] });\n});\n\napp.listen(3000, () => console.log('Listening on 3000'));",
  },
  {
    id: 'node-q12',
    category: 'eventloop',
    question: 'Explain process.nextTick() vs setImmediate()',
    answer:
      'Both defer work, but at different times. **`process.nextTick(fn)`** runs the callback **immediately after the current operation finishes, before the event loop continues** (part of the microtask stage) — highest priority. **`setImmediate(fn)`** runs in the **Check phase**, after the current poll (I/O) phase of the event loop. **Rule:** `nextTick` fires before `setImmediate`. **Warning:** recursive `process.nextTick` can starve the event loop and block I/O — prefer `setImmediate` for "run right after I/O".',
    code: "console.log('start');\nsetImmediate(() => console.log('setImmediate'));\nprocess.nextTick(() => console.log('nextTick'));\nconsole.log('end');\n// start -> end -> nextTick -> setImmediate",
  },
  {
    id: 'node-q13',
    category: 'async',
    question: 'Explain Callback Hell',
    answer:
      "**Callback Hell (the \"pyramid of doom\") is deeply nested callbacks** where each async step depends on the previous one, producing code that drifts rightward and is hard to read, debug and error-handle. **Cause:** sequencing async operations with raw callbacks. **Fixes:** use **Promises** with `.then()` chaining, or **async/await** for flat, synchronous-looking code, and modularize into named functions.",
    code: "// Callback hell\ngetUser(id, (u) => {\n  getOrders(u, (o) => {\n    getItems(o, (i) => { /* deep nesting... */ });\n  });\n});\n\n// Flattened with async/await\nconst u = await getUser(id);\nconst o = await getOrders(u);\nconst i = await getItems(o);",
  },
  {
    id: 'node-q14',
    category: 'async',
    question: 'Explain Promises',
    answer:
      '**A Promise is an object representing the eventual result of an async operation.** It has three states: **pending**, **fulfilled** (resolved with a value), or **rejected** (with an error). You consume it with `.then()` / `.catch()` / `.finally()`, and chain steps to avoid callback nesting. **Utilities:** `Promise.all` (wait for all), `Promise.race`, and `Promise.allSettled`. **Benefit:** clean sequencing and centralized error handling.',
    code: "fetchUser()\n  .then((user) => fetchOrders(user))\n  .then((orders) => console.log(orders))\n  .catch((err) => console.error(err));\n\n// Run in parallel\nconst [a, b] = await Promise.all([fetchA(), fetchB()]);",
  },
  {
    id: 'node-q15',
    category: 'async',
    question: 'Explain Async/Await',
    answer:
      '**async/await is syntactic sugar over Promises** that lets you write asynchronous code that reads synchronously. An `async` function always returns a Promise; `await` pauses inside it until a Promise settles. **Error handling:** wrap awaits in `try/catch`. **Benefit:** flat, readable flow — the cleanest fix for callback hell. **Tip:** run independent awaits in parallel with `await Promise.all([...])` instead of sequentially.',
    code: "async function loadDashboard(id) {\n  try {\n    const user = await getUser(id);\n    const orders = await getOrders(user);\n    return { user, orders };\n  } catch (err) {\n    console.error('Failed:', err);\n  }\n}",
  },
  {
    id: 'node-q16',
    category: 'streams',
    question: 'Explain Buffers',
    answer:
      "**A Buffer is a fixed-length chunk of raw binary data stored outside the V8 heap.** Because JavaScript strings can't natively handle binary, Node uses Buffers to work with TCP streams, file-system operations, and image/binary data. Created with `Buffer.from()` or `Buffer.alloc()`. **Use:** reading files, network packets, and encoding/decoding (utf8, base64, hex).",
    code: "const buf = Buffer.from('Hello');\nconsole.log(buf);              // <Buffer 48 65 6c 6c 6f>\nconsole.log(buf.toString('base64')); // SGVsbG8=",
  },
  {
    id: 'node-q17',
    category: 'streams',
    question: 'Explain Streams',
    answer:
      '**Streams process data piece-by-piece (in chunks) instead of loading it all into memory at once** — ideal for large files or continuous data. **Four types:** Readable (`fs.createReadStream`), Writable (`fs.createWriteStream`), Duplex (both), and Transform (modify data, e.g. gzip). You connect them with `.pipe()`. **Benefit:** low memory footprint and high throughput. **Real-world:** streaming a video, or handling a large file upload.',
    code: "const fs = require('fs');\n\nfs.createReadStream('big-input.txt')\n  .pipe(fs.createWriteStream('output.txt'));\n// copies the file chunk-by-chunk, low memory",
  },
  {
    id: 'node-q18',
    category: 'scaling',
    question: 'Explain the Cluster Module',
    answer:
      '**The Cluster module lets you fork the single-threaded Node process into multiple worker processes** that share the same server port, so you can use all CPU cores. The master forks one worker per core, and connections are distributed (round-robin) across them. **Benefit:** utilizes multi-core CPUs for better throughput and resilience. **Modern alternatives:** a process manager like **PM2** (cluster mode), or **Worker Threads** for CPU-bound tasks.',
    code: "const cluster = require('cluster');\nconst os = require('os');\n\nif (cluster.isPrimary) {\n  os.cpus().forEach(() => cluster.fork()); // one worker per core\n} else {\n  require('./server'); // each worker runs the app\n}",
  },
  {
    id: 'node-q19',
    category: 'errors',
    question: 'Explain Error Handling in Node.js',
    answer:
      'Robust error handling combines several techniques. For **synchronous** code use `try/catch`; for **Promises** use `.catch()`; for **async/await** wrap in `try/catch`. In **callbacks**, follow the error-first convention `(err, data) => {}`. In **Express**, use a centralized error-handling middleware `(err, req, res, next)`. Listen for `uncaughtException` and `unhandledRejection` as last-resort safety nets (then exit/restart cleanly). **Best practice:** never swallow errors — fail fast and log.',
    code: "// Express centralized error handler (last middleware)\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).json({ error: 'Something broke!' });\n});",
  },
  {
    id: 'node-q20',
    category: 'fundamentals',
    question: 'Why use Node.js?',
    answer:
      '**Use Node.js when you need fast, scalable, I/O-heavy applications in a single language.** Strengths: one language (JavaScript) across the whole stack (MERN), non-blocking I/O for high concurrency, a huge npm ecosystem, and JSON-native data flow. **Great for:** REST/GraphQL APIs, real-time apps (WebSockets/chat), microservices, streaming, and SSR. **Avoid for:** CPU-intensive workloads (heavy computation, video encoding) — offload those to Worker Threads or a different runtime.',
  },

  // ── Rapid-fire comparisons ────────────────────────────────────────────────
  {
    id: 'node-rf1',
    category: 'rapidfire',
    question: 'require() vs import()',
    answer:
      '`require` is **CommonJS** — synchronous and dynamic. `import` is **ES Modules** — asynchronous, statically analyzed (hoisted), and tree-shakeable.',
  },
  {
    id: 'node-rf2',
    category: 'rapidfire',
    question: 'Buffer vs Stream',
    answer:
      'A **Buffer** holds a chunk of binary data in memory. A **Stream** processes data piece-by-piece continuously, so you never load the whole payload into memory.',
  },
  {
    id: 'node-rf3',
    category: 'rapidfire',
    question: 'Node.js vs Express.js',
    answer:
      '**Node.js** is the runtime environment. **Express** is a web framework built on top of Node that adds routing and middleware.',
  },
  {
    id: 'node-rf4',
    category: 'rapidfire',
    question: 'package.json vs package-lock.json',
    answer:
      '`package.json` lists dependencies as version *ranges*. `package-lock.json` locks the *exact* installed versions for reproducible installs.',
  },
  {
    id: 'node-rf5',
    category: 'rapidfire',
    question: 'dependencies vs devDependencies',
    answer:
      '`dependencies` are required in production. `devDependencies` are only for local development/testing (test runners, `nodemon`, bundlers).',
  },
  {
    id: 'node-rf6',
    category: 'rapidfire',
    question: 'What is the REPL?',
    answer:
      '**Read-Eval-Print-Loop** — the interactive Node.js shell (run `node` with no file) for quickly testing snippets.',
  },
  {
    id: 'node-rf7',
    category: 'rapidfire',
    question: 'Is Node.js entirely single-threaded?',
    answer:
      'No. The main V8 JavaScript execution is single-threaded, but **libuv** uses a background thread pool for I/O, and you can spawn **Worker Threads** for CPU-bound work.',
  },

  // ── Scenario-based ────────────────────────────────────────────────────────
  {
    id: 'node-sc1',
    category: 'scaling',
    question: 'Scenario: how would you handle one million concurrent users?',
    answer:
      'Scale **horizontally** behind a load balancer (Nginx); use the **Cluster module** (or PM2) to use all CPU cores; cache and store sessions in **Redis**; optimize database queries and add indexes; use **connection pooling**; and deploy as **microservices** on Docker/Kubernetes.',
  },
  {
    id: 'node-sc2',
    category: 'scaling',
    question: 'Scenario: how do you optimize API performance?',
    answer:
      'Cache with **Redis**; enable **gzip/brotli compression** middleware; avoid synchronous/blocking functions; add **database indexes** and **pagination** for large datasets; and use **connection pooling**.',
  },
  {
    id: 'node-sc3',
    category: 'streams',
    question: 'Scenario: how would you upload large files?',
    answer:
      "Don't load the entire file into memory (Buffer). Use **Streams** (e.g. `fs.createReadStream`) and `.pipe()` the data directly to the destination (S3, local disk), with a multipart library like **`multer`**.",
  },

  // ── Practical coding ──────────────────────────────────────────────────────
  {
    id: 'node-code1',
    category: 'web',
    question: 'Build a REST API with Express & middleware',
    answer:
      'A minimal Express REST API showing the essentials: JSON body parsing, a logging middleware that calls `next()`, a route that returns JSON, and a centralized **error-handling middleware** registered last.',
    code: "const express = require('express');\nconst app = express();\n\n// Middleware\napp.use(express.json());\napp.use((req, res, next) => {\n  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);\n  next();\n});\n\n// Route\napp.get('/api/users', (req, res) => {\n  res.status(200).json({ success: true, data: [{ id: 1, name: 'Priyanshu' }] });\n});\n\n// Error-handling middleware\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).send('Something broke!');\n});\n\napp.listen(8080, () => console.log('API server running on 8080'));",
  },
];

export function searchNodejsQuestions(query) {
  const q = query.trim().toLowerCase();
  if (!q) return NODEJS_INTERVIEW_QUESTIONS;
  return NODEJS_INTERVIEW_QUESTIONS.filter(
    (item) =>
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q),
  );
}
