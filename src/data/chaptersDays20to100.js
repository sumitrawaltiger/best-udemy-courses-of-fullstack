// Auto-generated — days 20–100 from Thunder syllabus
export const chaptersDays20to100 = [
  {
    "id": 20,
    "slug": "introduction-to-node-js",
    "track": "thunder",
    "day": 20,
    "title": "Introduction to Node.js",
    "subtitle": "Backend begins — the runtime, require, your first HTTP server & why backends exist",
    "duration": "2 hrs",
    "createdOn": "5 Aug 2026",
    "status": "published",
    "topics": [
      "What is Node.js",
      "V8 outside the browser",
      "Running .js with node",
      "require & modules",
      "The http module",
      "http.createServer",
      "request.url",
      "response.end & JSON",
      "server.listen (port 3000)",
      "Why backends exist"
    ],
    "sections": [
      {
        "id": "backend-begins",
        "title": "Backend Starts on Day 20",
        "content": "**Day 20** moves Thunder from JavaScript in the **browser** to **backend development with Node.js**. Same language, new environment — you run `.js` files straight from the terminal with `node filename.js`, no browser needed.\n\nWork inside **[03Backend/Day01](https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day01)** on GitHub."
      },
      {
        "id": "what-is-node",
        "title": "What is Node.js?",
        "content": "Node.js is a **JavaScript runtime** built on Chrome's **V8** engine, running outside the browser. That means there's **no `window` or DOM** here — instead you get server capabilities like the file system, networking, and HTTP. It's how you build servers, APIs, and CLI tools in JavaScript.",
        "code": "console.log(\"Hello from Node.js!\");\nconsole.log(process.version); // Node version",
        "tryIt": "console.log(\"Thunder Backend — Lecture 01\");"
      },
      {
        "id": "require-modules",
        "title": "require & Built-in Modules",
        "content": "Node splits functionality into **modules**. Pull one in with **`require`**. Thunder `second.js` starts by importing Node's built-in **`http`** module — an object with everything you need to build a server.",
        "code": "const http = require(\"http\");\n// http is just an object with server methods\nconsole.log(typeof http.createServer); // \"function\"",
        "tryIt": "const os = require(\"os\");\nconsole.log(os.platform());"
      },
      {
        "id": "first-server",
        "title": "Your First HTTP Server",
        "content": "Thunder `second.js` — **`http.createServer`** takes a callback that runs on **every request**, giving you a `request` and a `response`. Read what the client asked for with **`request.url`**, and send data back with **`response.end()`**.\n\nHere the URL like `/15` is parsed into the number 15, that many GitHub users are sliced from an array, and the result is sent as JSON.",
        "code": "const http = require(\"http\");\n\nconst server = http.createServer((request, response) => {\n  const str = request.url; // e.g. \"/15\"\n  let str1 = \"\";\n  for (let i = 1; i < str.length; i++) str1 += str[i];\n  const number = Number(str1); // 15\n\n  const arr = [];\n  for (let i = 0; i < number; i++) arr.push(gitHub[i]);\n\n  response.end(JSON.stringify(arr)); // send JSON back\n});",
        "tryIt": "const url = \"/15\";\nlet s = \"\";\nfor (let i = 1; i < url.length; i++) s += url[i];\nconsole.log(Number(s)); // 15"
      },
      {
        "id": "listen-port",
        "title": "server.listen — Going Live",
        "content": "A server does nothing until it **listens** on a **port**. `server.listen(3000, callback)` starts it; now visit **`http://localhost:3000/15`** in the browser and the server responds with 15 users as JSON.\n\n`response.end(JSON.stringify(arr))` matters — you can only send **strings** over HTTP, so the JS array is serialized to a **JSON string** first (Lecture 15 pays off).",
        "code": "server.listen(3000, () => {\n  console.log(\"I am Listening at port 3000\");\n});\n// Visit http://localhost:3000/30",
        "tryIt": "console.log(\"Run: node second.js, then open localhost:3000/10\");"
      },
      {
        "id": "why-backend",
        "title": "Why Backends Exist — TaskVault",
        "content": "Thunder's **Project01 → 03** tell the story in three steps with the same TaskVault app:\n\n1. **Project01** — frontend only: tasks live in a **variable**, so a refresh **wipes them**.\n2. **Project02** — **localStorage**: tasks persist, but only in **one browser** — not shared across devices or users.\n3. **Project03** — a **shared cloud database**: data lives on a server, reachable from **anywhere**.\n\nThat gap — persistent, shared data — is exactly the problem a **backend** solves. This is the *why* behind Node.js.",
        "code": "// Project01: let tasks = [];          // lost on refresh\n// Project02: localStorage.setItem(...); // one browser only\n// Project03: await fetch(cloudDbUrl);   // shared everywhere"
      },
      {
        "id": "lecture01-practice",
        "title": "Your Backend Day 01 Practice",
        "content": "Work through Thunder's [03Backend/Day01](https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day01):\n1. **first.js** — slice N profiles from an array with a loop\n2. **second.js** — build the `http` server; run `node second.js` and hit `localhost:3000/20`\n3. **Project01–03** — the TaskVault trilogy: variable → localStorage → cloud DB\n\nRun a file with **`node second.js`** in the terminal. Match everything with the **Notion notes** (Lecture 01 & 02). Next: **TCP/IP & package.json** in Day 21.",
        "code": "// Terminal:\n// node second.js\n// → I am Listening at port 3000\n// Browser: http://localhost:3000/5",
        "tryIt": "const gitHubProfile = [{}, {}, {}, {}, {}];\nconst n = 3;\nconsole.log(gitHubProfile.slice(0, n).length);"
      },
      {
        "id": "why-backend-exists",
        "title": "Why Does Backend Exist?",
        "content": "You know JavaScript — buttons, DOM, fetching data. A **calculator** runs entirely in the browser: no backend needed.\n\nNow build a **login**. Naively you write `if (password === \"password123\")` — but ask: where does this code live? In the browser. Anyone can open **DevTools → Sources** and read the password. The frontend is public — every line you ship is visible.\n\nYou need a place to run code the user **cannot see or touch** — not their browser, your machine. It receives the attempt, verifies it secretly, and returns only **yes or no**. That hidden place is the **backend**.",
        "code": "// Second breaking point — the database\n// If the browser connects directly:\nBrowser ─────────────→ Database   \"give me all users\"\n// DB credentials sit in frontend JS → user copies them → SELECT * FROM users;\n// (they can read, modify, and DELETE everything)\n\n// Backend sits in the middle:\nBrowser ──→ Backend (your machine) ──→ Database\n// credentials live on the server; backend verifies the user\n// and returns ONLY that user's data — nothing more"
      },
      {
        "id": "frontend-vs-backend",
        "title": "Frontend vs Backend & Core Concepts",
        "content": "**Backend** is just a program running on your machine, not the user's. The user can't see its code, touch it, or control it. It sits between the user and your data as a trusted middleman.\n\nEvery backend concept is one answer to a single question — how do we verify who you are and control what you can access?\n- **Authentication** — proving who you are\n- **Authorization** — what you're allowed to do\n- **APIs** — how frontend talks to backend\n- **Middleware** — checks that run before every request\n- **JWT tokens** — proving identity without passwords\n- **Database queries** — fetching only what you're allowed to see\n\nThe frontend belongs to the user; the backend belongs to you.",
        "code": "Frontend                    Backend\n────────────────────        ────────────────────\nRuns on user's machine      Runs on your machine\nUser can see all code       User sees nothing\nCannot trust it             You fully trust it\nCannot hide secrets         Secrets live here\nMakes UI                    Makes decisions"
      },
      {
        "id": "first-node-server",
        "title": "Your First Node.js Server",
        "content": "Node's built-in `http` module creates a server. `createServer` takes a callback `(req, res)` that runs on every request: `req.url` gives the path, `res.end(...)` sends the response, and `server.listen(3000)` starts it on port 3000.\n\nRun it with `node server.js` and open `http://localhost:3000` in the browser.",
        "code": "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  if (req.url === \"/\") {\n    res.end(\"Hello Coder Army\");\n  } else if (req.url === \"/user\") {\n    res.end(JSON.stringify({ name: \"Rohit\" }));\n  } else {\n    res.end(\"I am best\");\n  }\n});\n\nserver.listen(3000, () => {\n  console.log(\"Hi, I am listening\");\n});"
      },
      {
        "id": "commonjs-modules",
        "title": "CommonJS — require & module.exports",
        "content": "A **module** is a file with one responsibility (`user.js`, `payment.js`, `email.js`) whose code other files can use.\n\nNode creates a `module` object per file: `module = { exports: {} }`. Whatever you put in `module.exports` is exactly what `require()` returns — nothing else crosses the boundary (a local `let counter = 0` stays private).\n\n**How require() resolves:** built-in module → load from Node; starts with `./` → load that file; otherwise → look in `node_modules`. It runs the file, returns `module.exports`, and **caches** it (the second require is instant).\n\n**The trap:** never mix `exports.foo = ...` with `module.exports = {...}`. Node always returns `module.exports`, so anything set on `exports` after you reassign `module.exports` is silently lost. Pick one style and stick to it.",
        "code": "// 1 — export a single function\nmodule.exports = add;                 // require('./math') -> add\n\n// 2 — export multiple as an object\nmodule.exports = { add, subtract, multiply };\nconst math = require('./math');       // math.add(2, 3)\n\n// 3 — destructure only what you need\nconst { add } = require('./math');\n\n// 4 — inline via exports (shorthand for module.exports)\nexports.add = (a, b) => a + b;\nexports.subtract = (a, b) => a - b;\n\n// ❌ WRONG — mulNumber is lost\nexports.mulNumber = function () {};\nmodule.exports = { add, subtract };   // new object -> exports link broken"
      },
      {
        "id": "es-modules",
        "title": "ES Modules — import & export",
        "content": "**ESM** is JavaScript's official module system (TC39, 2015) — one standard for browser and Node. Enable it with `\"type\": \"module\"` in package.json (or a `.mjs` file).\n\n- **Named exports** are unlimited — you pick them by name: `export { add, subtract }` or `export function add() {}`. Import with `import { add } from './math.js'` (the **.js extension is required**). `import * as math` grabs everything; `import { add as addNumbers }` renames.\n- **Default export** is exactly one per file (its main purpose): `export default add` → `import add from './math.js'` (no braces). Two defaults would be ambiguous.\n- **Combined:** `import add, { subtract, PI } from './math.js'`.\n- **import must be at the top** — that single restriction lets Node scan all imports upfront and load them in **parallel**. Once in ESM, `require` no longer exists.",
        "code": "CommonJS                 ESM\n────────────────         ────────────────\nrequire()                import\nmodule.exports           export\nAnywhere in file         Must be at top\nLoads one by one         Loads in parallel\nNo extension needed      .js extension required\nDefault in Node.js       Needs \"type\": \"module\""
      }
    ],
    "quiz": [
      {
        "question": "What is Node.js?",
        "options": [
          "A JavaScript runtime (V8) that runs outside the browser",
          "A new programming language",
          "A CSS framework",
          "A browser"
        ],
        "answer": 0,
        "explanation": "Node runs JS on V8 outside the browser — no window/DOM, but server APIs."
      },
      {
        "question": "How do you load Node's HTTP module?",
        "options": [
          "import http from window",
          "const http = require('http')",
          "fetch('http')",
          "new HTTP()"
        ],
        "answer": 1,
        "explanation": "require pulls in built-in modules — second.js."
      },
      {
        "question": "In the server, request.url for http://localhost:3000/15 is?",
        "options": [
          "\"15\"",
          "\"/15\"",
          "15",
          "\"localhost\""
        ],
        "answer": 1,
        "explanation": "request.url is the path, \"/15\" — the code strips the slash to get 15."
      },
      {
        "question": "Why call JSON.stringify before response.end?",
        "options": [
          "To encrypt the data",
          "HTTP sends strings, so the array must be serialized to a JSON string",
          "To sort the array",
          "It's optional"
        ],
        "answer": 1,
        "explanation": "Responses are text; stringify turns the array into a JSON string — second.js."
      },
      {
        "question": "In the TaskVault trilogy, why isn't localStorage enough?",
        "options": [
          "It's too slow",
          "It's per-browser — data isn't shared across devices or users",
          "It can't store text",
          "It needs Node.js"
        ],
        "answer": 1,
        "explanation": "localStorage persists but only on one browser; a backend/DB shares data — Project02 vs Project03."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=w-7RQ46RgxU",
    "youtubeTitle": "Node JS Tutorial for Beginners #1 — Introduction — Net Ninja",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course",
    "githubPath": "03Backend/Day01",
    "notionUrl": "https://app.notion.com/p/Lecture01-and-02-Introduction-to-NodeJs-39243ac5cab98091a218e8e5b4a6a031?source=copy_link",
    "codeRepo": "https://github.com/Rohitnegi9/Thunder/tree/main"
  },
  {
    "id": 21,
    "slug": "tcp-ip-and-package-json",
    "track": "thunder",
    "day": 21,
    "title": "TCP/IP and package.json",
    "subtitle": "Lecture 02 — networking, HTTP servers, and npm project setup",
    "duration": "2 hrs 22 mins",
    "createdOn": "5 Aug 2026",
    "status": "published",
    "topics": [
      "TCP/IP & client–server",
      "http.createServer",
      "URL path vs query params",
      "package.json fields",
      "CommonJS require / module.exports",
      "ES modules & type: module"
    ],
    "sections": [
      {
        "id": "lecture-02",
        "title": "Lecture 02 — TCP/IP and package.json",
        "content": "**Day 21** follows **Lecture 02** from the [Thunder Notion notes](https://app.notion.com/p/Lecture01-and-02-Introduction-to-NodeJs-39243ac5cab98091a218e8e5b4a6a031). You move from running Node scripts to understanding **how computers talk over the network** and how **package.json** organizes a backend project.\n\nWork in **[03Backend/Day02](https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day02)** on GitHub alongside the Notion page."
      },
      {
        "id": "tcp-ip",
        "title": "TCP/IP — How the Web Talks",
        "content": "When a browser hits `http://localhost:3000/add/10/20`, several layers work together:\n\n- **IP** — finds the machine (e.g. `127.0.0.1` on your laptop)\n- **TCP** — opens a reliable connection between client and server\n- **HTTP** — sends the request (`GET /add/10/20`) and receives the response\n\nNode's `http` module lets you build the **server side** of this conversation. `server.listen(3000)` tells your program to accept connections on **port 3000**.",
        "code": "// Client  →  TCP connection  →  Node server on port 3000\n// HTTP request rides on top of TCP\nserver.listen(3000, () => {\n  console.log(\"Server is listening at 3000 port\");\n});",
        "tryIt": "console.log('TCP/IP → HTTP → Node server on port 3000');"
      },
      {
        "id": "http-path-routing",
        "title": "HTTP Server — Path Routing (second.js)",
        "content": "In **Day02/second.js**, Rohit builds a calculator API using **path segments**. The URL `/add/10/20` is split so `operation = \"add\"`, `number1 = 10`, `number2 = 20`. The server responds with JSON.",
        "code": "const http = require('http');\n\nconst server = http.createServer((request, response) => {\n  const path = request.url.split('/');\n  const operation = path[1];\n  const number1 = Number(path[2]);\n  const number2 = Number(path[3]);\n\n  if (operation === 'add') {\n    response.end(JSON.stringify(number1 + number2));\n  }\n});\n\nserver.listen(3000);",
        "tryIt": "const parts = '/add/10/20'.split('/');\nconsole.log('op:', parts[1], 'nums:', parts[2], parts[3]);"
      },
      {
        "id": "http-query-routing",
        "title": "URL Query Parameters (third.js)",
        "content": "**Day02/third.js** does the same job with **query strings**: `/add?num1=10&num2=20`. Use Node's `url` module to parse `request.url` cleanly instead of manual string splitting.",
        "code": "const http = require('http');\nconst url = require('url');\n\nconst server = http.createServer((request, response) => {\n  const parsed = url.parse(request.url, true);\n  const operation = parsed.pathname.slice(1);\n  const number1 = Number(parsed.query.num1);\n  const number2 = Number(parsed.query.num2);\n  if (operation === 'add') {\n    response.end(JSON.stringify(number1 + number2));\n  }\n});",
        "tryIt": "console.log('Try: http://localhost:3000/add?num1=10&num2=20');"
      },
      {
        "id": "package-json",
        "title": "package.json — Project Manifest",
        "content": "Every Node project needs a **package.json**. It is the single file npm reads to understand your app.\n\nKey fields:\n- **name** — project identifier\n- **version** — semver (`1.0.0`)\n- **main** — entry file\n- **scripts** — shortcuts like `\"start\": \"node second.js\"`\n- **dependencies** — packages your app needs at runtime\n- **devDependencies** — tooling (tests, linters)\n- **type** — set `\"module\"` to use `import`/`export` (see LearnModule02)\n\nRun `npm init` to scaffold one, or study **LearnModule02/package.json** in the Thunder repo.",
        "code": "{\n  \"name\": \"thunder-backend\",\n  \"version\": \"1.0.0\",\n  \"main\": \"second.js\",\n  \"scripts\": {\n    \"start\": \"node second.js\"\n  },\n  \"dependencies\": {},\n  \"type\": \"module\"\n}",
        "tryIt": "console.log(JSON.stringify({ name: \"thunder-day02\", scripts: { start: \"node second.js\" } }, null, 2));"
      },
      {
        "id": "commonjs-vs-esm",
        "title": "CommonJS vs ES Modules",
        "content": "Thunder **LearnModule01** uses **CommonJS** — the classic Node style:\n- `require(\"./second.js\")` to import\n- `module.exports = { payment, sub }` to export\n\n**LearnModule02** uses **ES Modules**:\n- `import hatim, { add, sub } from \"./second.js\"`\n- `export function add() { ... }`\n- Requires `\"type\": \"module\"` in package.json\n\nThe **amazon.js** comments explain *why* modules matter: split a huge codebase into files (auth, payment, orders) so teams do not conflict.",
        "code": "// CommonJS\nconst { payment } = require(\"./second.js\");\n\n// ES Modules (with \"type\": \"module\")\nimport { add, sub } from \"./second.js\";",
        "tryIt": "console.log('CommonJS: require() | ESM: import/export');"
      },
      {
        "id": "thunder-day02-practice",
        "title": "Practice — Thunder 03Backend / Day02",
        "content": "Open **[03Backend/Day02](https://github.com/Rohitnegi9/Thunder/tree/main/03Backend)** and work through:\n\n- **first.js** — HTTP server returning GitHub user JSON (try `http://localhost:9000/5`)\n- **second.js** — path-based calculator on port 3000\n- **third.js** — query-string calculator on port 3000\n- **LearnModule01** — CommonJS `require` & `module.exports`\n- **LearnModule02** — ES `import`/`export` with `package.json`\n\nKeep the [Notion notes](https://app.notion.com/p/Lecture01-and-02-Introduction-to-NodeJs-39243ac5cab98091a218e8e5b4a6a031) open while you code."
      },
      {
        "id": "tcp-handshake",
        "title": "TCP & the 3-Way Handshake",
        "content": "**TCP** answers: how do I reliably send data between two machines — nothing lost, nothing out of order?\n\nBefore sending real data you must confirm **both directions** work:\n- **SYN** — \"Are you there?\" (you → server)\n- **SYN-ACK** — \"Yes I'm here. Did you hear me?\" (server → you) — confirms your SYN and asks you to confirm.\n- **ACK** — \"Yes I heard you.\" (you → server)\n\n**Why 3, not 2?** Two steps prove only one direction (you can reach the server); the server still doesn't know its reply reached you. Three messages are the minimum to confirm both independent directions before trusting real data.\n\nThe internet is two independent directions — one working doesn't mean both work.",
        "code": "1)  You     →  SYN        \"Are you there?  (my seq = 1000)\"\n2)  Server  →  SYN-ACK    \"Got 1000, send 1001.  My seq = 5000\"\n3)  You     →  ACK        \"Got 5000, send 5001\"\n\n✅ You → Server works     ✅ Server → You works\n→ connection established, real data can flow"
      },
      {
        "id": "tcp-detail",
        "title": "TCP in Detail — Ports, Sockets & Sequence Numbers",
        "content": "The **IP address** picks the machine; the **port** picks the program on it (browser, Spotify, your Node server…), so the destination is `IP:Port` — e.g. `103.21.58.1:3000`. Your OS also assigns your machine a random port so replies can return; the pair `(yourIP:port, serverIP:port)` is a **socket**.\n\nEach side picks a **starting sequence number** in the handshake and numbers every packet from there. The server **ACKs every packet** (`ACK 1002` = \"got 1001, send 1002\"). Your machine keeps a **timer** per packet — no ACK before it expires means **resend**. Packets take different routes and can arrive **out of order**; the server **buffers** them, reorders by sequence number, and reassembles the original message. Finally **FIN → ACK → FIN → ACK** closes the connection and frees memory on both sides.",
        "code": "The complete picture:\n 1.  Find server IP + Port\n 2.  OS assigns you a random port\n 3.  SYN      → your seq number, \"ready?\"\n 4.  SYN-ACK  ← server confirms + its own seq number\n 5.  ACK      → you confirm, connection established\n 6.  Send 100 packets, numbered sequentially\n 7.  Server ACKs every packet received\n 8.  Lost packet → timer expires → resend\n 9.  Out of order → buffer → reorder → reassemble\n10.  FIN → ACK → FIN → ACK → connection closed"
      },
      {
        "id": "package-json-deps",
        "title": "package.json — Your Dependency List",
        "content": "Share a project and it breaks on another machine — they don't have your packages. **package.json** lists every package your project needs; `npm init -y` creates it.\n\nKey fields: `name`, `version`, `main` (entry file), `scripts` (command shortcuts like `start`), `dependencies` (needed to run), and `devDependencies` (needed only while developing).\n\n- **dependencies** — `npm install express` (your app needs it in production).\n- **devDependencies** — `npm install nodemon --save-dev` (nodemon auto-restarts the server during development; production doesn't need it).",
        "code": "{\n  \"name\": \"myproject\",\n  \"version\": \"1.0.0\",\n  \"main\": \"index.js\",\n  \"scripts\": { \"start\": \"node index.js\" },\n  \"dependencies\": { \"express\": \"^4.18.2\" },\n  \"devDependencies\": { \"nodemon\": \"^3.0.1\" }\n}"
      },
      {
        "id": "semantic-versioning",
        "title": "Semantic Versioning — Caret ^ vs Tilde ~",
        "content": "A version has three numbers — **MAJOR.MINOR.PATCH** (e.g. `4.18.2`):\n- **PATCH** — bug fix only (`4.18.2 → 4.18.3`)\n- **MINOR** — new features, nothing breaks (`4.18.2 → 4.19.0`)\n- **MAJOR** — breaking changes (`4.18.2 → 5.0.0`)\n\nRange symbols:\n- **Tilde `~4.18.2`** — allow **patch** updates only (only the last number changes).\n- **Caret `^4.18.2`** — allow **patch and minor** (the first number can't change).\n- **No symbol `4.18.2`** — exactly this version, forever.",
        "code": "Version 4.18.2:\n\n ~4.18.2 (tilde)      ^4.18.2 (caret)      4.18.2 (exact)\n  4.18.3  ✅ patch      4.18.3  ✅ patch      4.18.3  ❌\n  4.18.9  ✅ patch      4.19.0  ✅ minor      4.19.0  ❌\n  4.19.0  ❌ minor      4.20.5  ✅ minor      5.0.0   ❌\n  5.0.0   ❌ major      5.0.0   ❌ major"
      },
      {
        "id": "lockfile-node-modules",
        "title": "package-lock.json & node_modules",
        "content": "`^4.18.2` means a teammate cloning months later might get `4.19.5` — same code, different version, machine-specific bugs. **package-lock.json** records the exact version actually installed, so everyone gets identical packages.\n\n- **`npm install`** — flexible; follows the lock file but can update it when you add packages. Use in development.\n- **`npm ci`** — strict; follows the lock file exactly and fails on mismatch. Use in production/CI pipelines.\n\n**node_modules** holds the actual downloaded code of every package — often huge. Never commit it; add `node_modules/` to `.gitignore`. Anyone who clones just runs `npm install` to recreate it.\n\nCommit package.json + package-lock.json. Never commit node_modules.",
        "code": "myproject/\n  app.js\n  package.json          → what you need + version ranges   (commit)\n  package-lock.json     → exact versions installed          (commit)\n  node_modules/         → actual package code               (gitignore)\n    express/  lodash/  nodemon/  ..."
      },
      {
        "id": "esm-project",
        "title": "Create an ESM Project (validator)",
        "content": "Three things are required for ESM to work: **`\"type\": \"module\"`** in package.json, **`export`** in the sharing file, and **`import` with the `.js` extension** in the using file — miss any one and it breaks.\n\nSteps: `mkdir myproject && cd myproject`, `npm init -y`, add `\"type\": \"module\"`, write `validator.js` with `export { ... }`, import it in `app.js` (with `.js`), then run `node app.js`.",
        "code": "// validator.js\nfunction isValidEmail(email) {\n  return email.includes('@') && email.includes('.');\n}\nfunction isValidPhone(phone) {\n  return phone.length === 10 && !isNaN(phone);\n}\nfunction isStrongPassword(password) {\n  return password.length >= 8;\n}\nexport { isValidEmail, isValidPhone, isStrongPassword };\n\n// app.js\nimport { isValidEmail, isValidPhone, isStrongPassword } from './validator.js';\nconsole.log(isValidEmail('rohit@gmail.com')); // true\nconsole.log(isValidPhone('9876543210'));      // true\nconsole.log(isStrongPassword('12345678'));    // true\n// run:  node app.js"
      }
    ],
    "quiz": [
      {
        "question": "In Thunder Day02/second.js, how is the operation (add/sub/mul) read?",
        "options": [
          "From path segments after splitting request.url",
          "From package.json scripts",
          "From console.log output",
          "From CSS selectors"
        ],
        "answer": 0,
        "explanation": "second.js splits request.url by \"/\" to get operation and numbers."
      },
      {
        "question": "What does adding \"type\": \"module\" to package.json enable?",
        "options": [
          "ES import/export syntax in .js files",
          "Running code in the browser only",
          "Automatic database connection",
          "Removing all dependencies"
        ],
        "answer": 0,
        "explanation": "LearnModule02 uses import/export because package.json sets type to module."
      },
      {
        "question": "Which protocol provides reliable delivery before HTTP in the stack?",
        "options": [
          "TCP",
          "HTML",
          "JSON",
          "npm"
        ],
        "answer": 0,
        "explanation": "TCP ensures ordered, reliable transport; HTTP runs on top of it."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=04pqkGnAAkc",
    "youtubeTitle": "package.json & npm — All You Need to Know — Automation Step by Step",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course",
    "githubPath": "03Backend/Day02",
    "notionUrl": "https://app.notion.com/p/Lecture01-and-02-Introduction-to-NodeJs-39243ac5cab98091a218e8e5b4a6a031?source=copy_link",
    "codeRepo": "https://github.com/Rohitnegi9/Thunder/tree/main"
  },
  {
    "id": 22,
    "slug": "timers-debounce-and-throttle",
    "track": "thunder",
    "day": 22,
    "title": "HTTP — The Protocol of the Web",
    "subtitle": "Lecture 02 — request/response structure, methods, status codes & statelessness",
    "duration": "2 hrs",
    "createdOn": "6 Aug 2026",
    "status": "published",
    "topics": [
      "HTTP is a contract",
      "Request structure",
      "Response structure",
      "HTTP methods",
      "Status codes",
      "Stateless protocol",
      "HTTP versions"
    ],
    "sections": [
      {
        "id": "http-intro",
        "title": "HTTP — HyperText Transfer Protocol",
        "content": "**Day 22** continues **Lecture 02** from the [Thunder Notion notes](https://app.notion.com/p/Lecture01-and-02-Introduction-to-NodeJs-39243ac5cab98091a218e8e5b4a6a031). Once your server can accept connections (Day 20–21), the two sides need a shared language. That language is **HTTP**.\n\nHTTP is a **protocol** — a written **contract** that defines exactly how every **request** and **response** must be structured between two programs talking over the internet. Both sides agree on the format ahead of time, so any client can talk to any server."
      },
      {
        "id": "http-request",
        "title": "HTTP Request Structure",
        "content": "Every request has **four parts**, in order:\n\n1. **Request line** — the method, path, and version: `GET /users HTTP/1.1`\n2. **Headers** — key–value metadata (`Host`, `Content-Type`, `Authorization`…)\n3. **Blank line** — separates headers from the body\n4. **Body** — the actual payload\n\nThe **body only exists** in **POST, PUT, PATCH**. **GET** and **DELETE** carry no body.",
        "code": "GET /users/15 HTTP/1.1          ← request line\nHost: localhost:3000            ← headers\nContent-Type: application/json\nAuthorization: Bearer <token>\n                                ← blank line\n{ \"name\": \"Rohit\" }            ← body (POST/PUT/PATCH only)"
      },
      {
        "id": "http-response",
        "title": "HTTP Response Structure",
        "content": "The response mirrors the request — also **four parts**:\n\n1. **Status line** — version, status code, and reason: `HTTP/1.1 200 OK`\n2. **Headers** — `Content-Type`, `Content-Length`, and more\n3. **Blank line**\n4. **Body** — the data sent back (HTML, JSON, text…)\n\nThe **status code** in the status line tells the client, at a glance, what happened.",
        "code": "HTTP/1.1 200 OK                        ← status line\nContent-Type: application/json         ← headers\nContent-Length: 42\n                                       ← blank line\n{ \"id\": 15, \"name\": \"Rohit\" }         ← body"
      },
      {
        "id": "http-methods",
        "title": "HTTP Methods — the Verbs",
        "content": "The **method** states your intent on a resource:\n\n- **GET** — read/fetch data (no body)\n- **POST** — create a new resource (has body)\n- **PUT** — replace a resource entirely (has body)\n- **PATCH** — update part of a resource (has body)\n- **DELETE** — remove a resource (no body)\n\nSame path, different method = a **different action**. `GET /users` reads users; `POST /users` creates one.",
        "code": "GET    /products        → list all products\nGET    /products/10     → read product 10\nPOST   /products        → create a product      (body)\nPUT    /products/10     → replace product 10     (body)\nPATCH  /products/10     → update part of it       (body)\nDELETE /products/10     → delete product 10"
      },
      {
        "id": "http-status",
        "title": "HTTP Status Codes",
        "content": "Status codes are grouped by their **first digit**:\n\n- **1xx** — informational\n- **2xx** — success (`200 OK`, `201 Created`, `204 No Content`)\n- **3xx** — redirection (`301 Moved`, `304 Not Modified`)\n- **4xx** — client error (`400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`)\n- **5xx** — server error (`500 Internal Server Error`, `503 Service Unavailable`)\n\nRule of thumb: **4xx = you (the client) messed up**, **5xx = the server messed up**.",
        "code": "2xx  success        200 OK · 201 Created · 204 No Content\n3xx  redirect       301 Moved · 304 Not Modified\n4xx  client error   400 Bad Request · 401 Unauthorized\n                    403 Forbidden · 404 Not Found\n5xx  server error   500 Internal Error · 503 Unavailable"
      },
      {
        "id": "http-stateless",
        "title": "HTTP is Stateless",
        "content": "Every HTTP request is **completely independent**. The server **remembers nothing** between requests — request #2 has no idea request #1 ever happened.\n\nThat is why **tokens and cookies** exist: identity must be **carried on every single request** manually. You send your token with each call, and the server re-verifies who you are every time.\n\n**Stateless = the server keeps no memory of you between requests.**",
        "code": "Request 1:  GET /profile   (+ token)   → server verifies, responds\nRequest 2:  GET /orders    (+ token)   → server verifies AGAIN\n// The server does NOT remember request 1.\n// Every request re-proves identity via token/cookie."
      },
      {
        "id": "http-versions",
        "title": "HTTP Versions",
        "content": "HTTP has evolved for speed:\n\n- **HTTP/1.0** — one request per connection, then close.\n- **HTTP/1.1** — persistent connections (keep-alive), reuse one connection.\n- **HTTP/2** — multiplexing: many requests over one connection at once, header compression.\n- **HTTP/3** — runs over **QUIC (UDP)**, removing TCP head-of-line blocking for lower latency.\n\nThe contract (methods, status codes, headers) stays the same — only the transport gets faster.",
        "code": "HTTP/1.0  → 1 request per connection\nHTTP/1.1  → keep-alive, reuse connection\nHTTP/2    → multiplexing + header compression\nHTTP/3    → QUIC over UDP, lowest latency"
      }
    ],
    "quiz": [
      {
        "question": "Which HTTP methods carry a request body?",
        "options": [
          "POST, PUT, and PATCH",
          "GET and DELETE",
          "Only GET",
          "All methods"
        ],
        "answer": 0,
        "explanation": "Body exists only in POST/PUT/PATCH; GET and DELETE have no body."
      },
      {
        "question": "What does a 4xx status code indicate?",
        "options": [
          "A client error — the request was wrong",
          "A successful response",
          "A server crash",
          "A redirect"
        ],
        "answer": 0,
        "explanation": "4xx = client error (400/401/403/404); 5xx = server error."
      },
      {
        "question": "What does 'HTTP is stateless' mean?",
        "options": [
          "The server remembers nothing between requests",
          "HTTP cannot send data",
          "The server stores all sessions forever",
          "Requests must be sent in order"
        ],
        "answer": 0,
        "explanation": "Each request is independent; tokens/cookies carry identity every time."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=iYM2zFP3Zn0",
    "youtubeTitle": "HTTP Crash Course & Exploration — Traversy Media",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course",
    "githubPath": "03Backend/Day03",
    "notionUrl": "https://app.notion.com/p/Lecture01-and-02-Introduction-to-NodeJs-39243ac5cab98091a218e8e5b4a6a031?source=copy_link",
    "codeRepo": "https://github.com/Rohitnegi9/Thunder/tree/main"
  },
  {
    "id": 23,
    "slug": "javascript-classes-and-oop",
    "track": "thunder",
    "day": 23,
    "title": "Query Strings & Request Validation",
    "subtitle": "Lecture 02 — parse URLs with the url module and validate every request",
    "duration": "2 hrs",
    "createdOn": "7 Aug 2026",
    "status": "published",
    "topics": [
      "Reading req.url",
      "The url module",
      "Query strings",
      "Three checks on every request",
      "Clean code with slice"
    ],
    "sections": [
      {
        "id": "read-url",
        "title": "Reading the URL — req.url",
        "content": "**Day 23** continues **Lecture 02** ([Notion notes](https://app.notion.com/p/Lecture01-and-02-Introduction-to-NodeJs-39243ac5cab98091a218e8e5b4a6a031)). When a request comes in, **`req.url`** gives you the entire path the client asked for — e.g. `/30` or `/add?num1=10&num2=20`.\n\nOn Day 20 you parsed `/30` by hand with a loop. JavaScript already has a built-in way — **`slice(1)`** removes the leading `/` in one line. Less code, fewer bugs.",
        "code": "// Manual (Day 20) — a whole loop just to drop the '/'\nlet str1 = \"\";\nfor (let i = 1; i < req.url.length; i++) str1 += req.url[i];\nconst number = Number(str1);\n\n// Built-in — one line\nconst number = Number(req.url.slice(1)); // \"/30\" → 30",
        "tryIt": "console.log(Number(\"/30\".slice(1))); // 30"
      },
      {
        "id": "query-string",
        "title": "What is a Query String?",
        "content": "When a user hits `http://localhost:3000/add?num1=10&num2=20`, the URL has **two parts**:\n\n- **path** — `/add`\n- **query string** — `num1=10&num2=20`\n\nThe **`?`** marks where the path ends and the query begins; **`&`** separates multiple key–value pairs. Node's built-in **`url`** module parses this cleanly. Pass **`true`** as the second argument to turn the query into a **JavaScript object** automatically — without it, the query stays a raw string.",
        "code": "const url = require('url');\n\nconst parsed = url.parse(req.url, true);\n// parsed.pathname → \"/add\"\n// parsed.query    → { num1: \"10\", num2: \"20\" }\n\nconst num1 = Number(parsed.query.num1);\nconst num2 = Number(parsed.query.num2);\n// Try: http://localhost:3000/add?num1=10&num2=20",
        "tryIt": "const q = 'num1=10&num2=20';\nconst obj = Object.fromEntries(new URLSearchParams(q));\nconsole.log(obj); // { num1: '10', num2: '20' }"
      },
      {
        "id": "three-checks",
        "title": "Three Checks on Every Request",
        "content": "Users send messy input. Every time a request comes in, ask **three questions** — they save you from 90% of backend bugs:\n\n1. **Is the input valid?** `/abc` → `Number(\"abc\")` is **NaN**. Looping `NaN` times returns an empty `[]` and the user is confused. Guard it and return **400**.\n2. **Is it in range?** You have 100 profiles; the user asks for `/500`. Indexes past 100 return `undefined`, so you'd send back 400 `undefined`s. Clamp or reject.\n3. **Did they hit a real route?** Unknown path → return a clear **404**, not a silent hang.",
        "code": "const number = Number(req.url.slice(1));\n\n// 1 — invalid input (NaN)\nif (isNaN(number)) {\n  res.writeHead(400);\n  return res.end(\"Please enter a valid number\");\n}\n\n// 2 — out of range\nif (number > gitHub.length) {\n  res.writeHead(400);\n  return res.end(`Only ${gitHub.length} profiles available`);\n}\n\n// 3 — valid → respond\nres.end(JSON.stringify(gitHub.slice(0, number)));"
      },
      {
        "id": "clean-code",
        "title": "The Clean Version — slice, not loops",
        "content": "You originally built the result array with a `for` loop pushing one item at a time. **`slice`** does the same job in one line — no loop, no index bugs.\n\nPut it all together: parse with `slice(1)`, validate the three checks, then `slice(0, n)` the data. Short, readable, and correct.",
        "code": "// Loop version — verbose\nconst arr = [];\nfor (let i = 0; i < number; i++) arr.push(gitHub[i]);\n\n// slice version — one line, same result\nconst arr = gitHub.slice(0, number);\n\n// Clean handler\nconst n = Number(req.url.slice(1));\nif (isNaN(n)) { res.writeHead(400); return res.end(\"Invalid\"); }\nres.end(JSON.stringify(gitHub.slice(0, n)));",
        "tryIt": "const gitHub = [1,2,3,4,5,6,7,8,9,10];\nconsole.log(gitHub.slice(0, 3)); // [1, 2, 3]"
      }
    ],
    "quiz": [
      {
        "question": "In url.parse(req.url, true), what does the second argument 'true' do?",
        "options": [
          "Parses the query string into a JavaScript object",
          "Enables HTTPS",
          "Caches the response",
          "Validates the URL"
        ],
        "answer": 0,
        "explanation": "Passing true turns the query string into an object; without it, it stays a raw string."
      },
      {
        "question": "A user hits /abc where a number is expected. What is Number('abc')?",
        "options": [
          "NaN — you must guard against it and return 400",
          "0",
          "abc",
          "It throws an error"
        ],
        "answer": 0,
        "explanation": "Number('abc') is NaN; validate input and return a 400 instead of an empty result."
      },
      {
        "question": "Which replaces a push-in-a-loop to grab the first n items?",
        "options": [
          "arr.slice(0, n)",
          "arr.map(n)",
          "arr.filter(n)",
          "arr.reduce(n)"
        ],
        "answer": 0,
        "explanation": "slice(0, n) returns the first n items in one line — no loop needed."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=9tchsy20aBI",
    "youtubeTitle": "Parse URL & Query Params in Node HTTP Module — ProgrammingKnowledge",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course",
    "githubPath": "03Backend/Day04",
    "notionUrl": "https://app.notion.com/p/Lecture01-and-02-Introduction-to-NodeJs-39243ac5cab98091a218e8e5b4a6a031?source=copy_link",
    "codeRepo": "https://github.com/Rohitnegi9/Thunder/tree/main"
  },
  {
    "id": 24,
    "slug": "web-security-basics",
    "track": "thunder",
    "day": 24,
    "title": "Why Express Exists",
    "subtitle": "The pain of raw Node and how Express cures every part of it",
    "duration": "2 hrs",
    "createdOn": "8 Aug 2026",
    "status": "published",
    "topics": [
      "Raw Node limitations",
      "Manual routing pain",
      "Body is a stream",
      "No home for middleware",
      "Raw Node → Express map"
    ],
    "sections": [
      {
        "id": "raw-node-pain",
        "title": "The Pain of Raw Node",
        "content": "**Day 24** closes **Lecture 02** ([Notion notes](https://app.notion.com/p/Lecture01-and-02-Introduction-to-NodeJs-39243ac5cab98091a218e8e5b4a6a031)). After building servers with the raw `http` module, you feel eight limitations — in order of how badly they hurt:\n\n1. **No routing** — `req.url` + `req.method` are raw strings; routing is a giant hand-written if-else. 10 resources × 5 methods = 50 branches in one function.\n2. **No dynamic routes** — `/users/123` means `req.url.split('/')` surgery; a query or trailing slash breaks it.\n3. **The body is a stream** — `req.body` is `undefined`. You collect chunks with `req.on('data')` + `req.on('end')`, then `JSON.parse` in a try-catch — every POST, every time.\n4. **Every response is manual** — `writeHead(...)` + `end(JSON.stringify(...))` on every reply; forget the header and the browser guesses wrong.\n5. **Forget `res.end()` → the request hangs forever.** No automatic 404.\n6. **Nowhere for cross-cutting work** — logging, auth, CORS get copy-pasted into every branch.\n7. **No way to organize** — one 250-line `createServer` callback, routing and business logic fused.\n8. **No static file serving** — read with `fs`, guess the MIME type, set the header, stream it, manually.",
        "code": "// Raw Node — the body is a stream you assemble by hand\nconst server = http.createServer((req, res) => {\n  if (req.url === '/users' && req.method === 'POST') {\n    let body = '';\n    req.on('data', chunk => { body += chunk; });\n    req.on('end', () => {\n      try {\n        const data = JSON.parse(body);\n        res.writeHead(201, { 'Content-Type': 'application/json' });\n        res.end(JSON.stringify(data));\n      } catch {\n        res.writeHead(400); res.end('Bad JSON');\n      }\n    });\n  }\n  // ...repeat this whole block for every route + method\n});"
      },
      {
        "id": "express-cure",
        "title": "Raw Node → Express, Feature by Feature",
        "content": "**Express** is a backend framework for Node. Every one of its features is the exact helper you would have written yourself after feeling the pain above. The direct mapping:\n\n- if-else on `url` + `method` → **`app.get('/users')`, `app.post('/users')`**\n- `req.url.split('/')` → **`/users/:id` → `req.params.id`**\n- manual URL parsing → **`req.query.role`**\n- `req.on('data')` + `JSON.parse` → **`express.json()` → `req.body` just exists**\n- `writeHead` + `stringify` → **`res.status(201).json(...)`**\n- copy-pasted logging/auth → **`app.use()` middleware**\n- hanging requests → **catch-all + error handler**\n- 250-line monster → **`express.Router()`, routes in separate files**\n- manual `fs` + MIME types → **`express.static('public')`**",
        "code": "// The same Users API in Express — 25 lines, not 250\nimport express from 'express';\nconst app = express();\n\napp.use(express.json());            // req.body just exists\n\napp.get('/users', (req, res) => res.json(users));\napp.get('/users/:id', (req, res) => res.json(users[req.params.id]));\napp.post('/users', (req, res) => {\n  users.push(req.body);\n  res.status(201).json(req.body);   // status + JSON in one line\n});\n\napp.listen(3000);"
      },
      {
        "id": "the-reveal",
        "title": "Express Didn't Invent Anything",
        "content": "The lesson lands in one line:\n\n> \"Express didn't invent anything. Every feature is the helper you'd have written yourself after feeling that pain. The 250 lines you suffered through become 25 — and not one of them is magic.\"\n\nBecause you built the hard way first, Express now reads as **obvious**: routing, params, `req.body`, `res.json`, middleware — each is a named shortcut for a problem you already solved by hand. Next up (**Day 25 / Lecture 06**): Express routes and **middleware** in depth."
      }
    ],
    "quiz": [
      {
        "question": "In raw Node, why is handling req.body painful?",
        "options": [
          "The body arrives as a stream — you collect chunks and JSON.parse manually",
          "req.body is always empty by design",
          "Node forbids reading bodies",
          "You must use a database first"
        ],
        "answer": 0,
        "explanation": "req.body is undefined; you assemble chunks via req.on('data')/('end') then parse — express.json() replaces all of it."
      },
      {
        "question": "Which Express feature replaces req.url.split('/') for dynamic segments?",
        "options": [
          "Route params — /users/:id → req.params.id",
          "app.use()",
          "express.static()",
          "res.status()"
        ],
        "answer": 0,
        "explanation": "Route parameters make one URL segment dynamic and expose it via req.params."
      },
      {
        "question": "What is the core insight about Express?",
        "options": [
          "It's the set of helpers you'd have written yourself — no magic",
          "It replaces Node.js entirely",
          "It runs only in the browser",
          "It removes the need for HTTP"
        ],
        "answer": 0,
        "explanation": "Express packages the shortcuts for the exact pains of raw Node; 250 lines become 25."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=45dAt9Gz8rE",
    "youtubeTitle": "What is Express? And Why Use It — Academind",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course",
    "githubPath": "03Backend/Day05",
    "notionUrl": "https://app.notion.com/p/Lecture01-and-02-Introduction-to-NodeJs-39243ac5cab98091a218e8e5b4a6a031?source=copy_link",
    "codeRepo": "https://github.com/Rohitnegi9/Thunder/tree/main"
  },
  {
    "id": 25,
    "slug": "javascript-mastery-review",
    "track": "thunder",
    "day": 25,
    "title": "Express & Middleware",
    "subtitle": "Lecture 06 — routes, route/query params, middleware, app.use & app.get",
    "duration": "2 hrs 30 mins",
    "createdOn": "9 Aug 2026",
    "status": "published",
    "topics": [
      "Express basics",
      "req & res",
      "Routes = method + path",
      "Route parameters",
      "Query parameters",
      "Route vs query param",
      "Middleware & next()",
      "app.use vs app.get",
      "express.json()",
      "Protected routes & rate limiting"
    ],
    "sections": [
      {
        "id": "express-basics",
        "title": "Express — Your First Server",
        "content": "**Day 25** follows **Lecture 06** ([Express & middleware Notion notes](https://app.notion.com/p/Lecture-06-Express-and-middleware-39943ac5cab980d19823df367d602eeb)). **Express** is a backend framework for Node.js that helps you build APIs with almost no boilerplate.\n\nCreate an app, define a route with **`app.get`**, and start it with **`app.listen`**. That's a working server.",
        "code": "import express from 'express';\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello from Express');\n});\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});",
        "tryIt": "console.log('Express: app.get(path, handler) + app.listen(port)');"
      },
      {
        "id": "req-res",
        "title": "req and res",
        "content": "Every route handler receives **two objects**:\n\n- **`req`** (request) — data **coming from the client**: `req.params`, `req.query`, `req.body`, `req.headers`.\n- **`res`** (response) — used to **send data back**: `res.send(...)`, `res.json(...)`, `res.status(...)`.\n\nYou read from `req`, you write to `res`.",
        "code": "app.get('/user', (req, res) => {\n  console.log(req.query);   // data from client\n  res.json({ name: 'Rohit' }); // data back to client\n});"
      },
      {
        "id": "routes-method-path",
        "title": "A Route is Method + Path",
        "content": "A **route is not just a URL** — it is a **method + a path** together. `app.get()` handles **GET** requests (used to fetch/read data); `app.post()` handles POST, and so on.\n\nSame path with a different method = a **different route**. So `GET /user` and `POST /user` are two separate handlers. Also, `/user` and `/user/rohit` are **different paths** — the first route won't handle the second (that needs a route parameter).",
        "code": "app.get('/user', handlerA);   // GET  /user\napp.post('/user', handlerB);  // POST /user  → different route\n\n// /user does NOT match /user/rohit — different path"
      },
      {
        "id": "route-params",
        "title": "Route Parameters — Dynamic Segments",
        "content": "A **route parameter** makes one part of the URL dynamic, so one route handles many values. Mark it with a **colon**: `/user/:username`. Express stores the actual value on **`req.params`**.\n\n`:id` matches exactly **one path segment** — `/user/123` works, `/user/123/orders` does not (that needs another param).",
        "code": "app.get('/user/:username', (req, res) => {\n  res.send(`Hello ${req.params.username}`);\n});\n// /user/rohit  → req.params = { username: 'rohit' }\n// /user/aditya → req.params = { username: 'aditya' }\n\napp.get('/product/:id', (req, res) => {\n  res.json({ id: req.params.id });\n});",
        "tryIt": "const params = { id: '10' };\nconsole.log(`Product ${params.id}`);"
      },
      {
        "id": "route-order",
        "title": "Route Order Matters",
        "content": "Express checks routes **top to bottom** and runs the **first match**. Usually order doesn't matter, but a **specific** path can be swallowed by a **dynamic** one.\n\n`/users/:id` will match `/users/admin` (treating `admin` as the `id`), so if `/users/admin` is defined **after** it, it never runs. Put **specific routes before dynamic ones**.",
        "code": "// ❌ Wrong — /users/admin is swallowed\napp.get('/users/:id', handlerA);   // matches /users/admin first\napp.get('/users/admin', handlerB); // never runs\n\n// ✅ Correct — specific before dynamic\napp.get('/users/admin', handlerB);\napp.get('/users/:id', handlerA);"
      },
      {
        "id": "query-params",
        "title": "Query Parameters",
        "content": "A **query parameter** is extra data after **`?`** in the URL, read from **`req.query`** — no route change needed. Multiple values are separated by **`&`**.\n\nQuery params are perfect for **filter, search, sort, and pagination** — optional extras that don't change *which* resource you're hitting.",
        "code": "// GET /search?city=delhi&role=admin\napp.get('/search', (req, res) => {\n  const { city, role } = req.query;\n  res.json({ city, role });\n  // req.query = { city: 'delhi', role: 'admin' }\n});",
        "tryIt": "const q = new URLSearchParams('city=delhi&role=admin');\nconsole.log(q.get('city'), q.get('role'));"
      },
      {
        "id": "param-vs-query",
        "title": "Route Param vs Query Param",
        "content": "The most important distinction:\n\n- **Route param** — use it to identify **one exact resource**. It's part of the resource's identity. Remove it and the meaning changes: `/product/10` (one product) → `/product` (all products). So `10` is a **route param**.\n- **Query param** — use it for **filter / search / sort / pagination**. Remove it and the request is still valid, just broader: `/products?category=mobile` → `/products` (all products). So `category=mobile` is a **query param**.\n\n**Simple rule:** exact identity → route param; optional refinement → query param.",
        "code": "// Exact resource → route param\nGET /product/10            → req.params.id = '10'\n\n// Filter / search / sort → query param\nGET /products?category=mobile&sort=price\n                           → req.query = { category, sort }"
      },
      {
        "id": "middleware",
        "title": "What is Middleware?",
        "content": "**Middleware** is a function that runs **between** the request and the final route handler. The flow is: `Request → Middleware → Route Handler → Response`.\n\nMiddleware takes **three parameters** — `(req, res, next)`. Calling **`next()`** passes control to the next function in the pipeline. If you neither call `next()` nor send a response, the **request hangs forever**. Middleware can also **stop** a request by sending a response itself (then the route handler never runs).",
        "code": "function logger(req, res, next) {\n  console.log(`${req.method} ${req.url}`);\n  next(); // pass control onward\n}\n\n// ❌ hangs — no next(), no response\nfunction broken(req, res, next) { console.log('stuck'); }\n\n// ✅ stops the request early\nfunction blockAll(req, res, next) {\n  res.status(403).send('Blocked');\n}"
      },
      {
        "id": "app-use",
        "title": "app.use — Registering Middleware",
        "content": "**`app.use()`** registers middleware. Unlike `app.get()` (which handles **only GET** on an **exact** path), `app.use()` runs for **all HTTP methods** and for a path **and everything under it**.\n\n- `app.use(fn)` or `app.use('/', fn)` → runs for **every** path.\n- `app.use('/user', fn)` → runs for `/user` **and** `/user/...`, but **not** `/product`.\n\nMount it **before** your routes so it runs first.",
        "code": "app.use((req, res, next) => {   // runs for every request\n  console.log('incoming:', req.url);\n  next();\n});\n\napp.use('/admin', checkAuth);   // only the /admin branch\n\n// app.get() → one method, exact path\n// app.use() → all methods, path + everything under it"
      },
      {
        "id": "express-json",
        "title": "app.use(express.json())",
        "content": "By default Express can't read a JSON request body. **`app.use(express.json())`** is built-in middleware that parses an incoming JSON body and puts it on **`req.body`** — so `POST`/`PUT`/`PATCH` handlers can just read `req.body`.\n\nYou don't call `next()` yourself here — `express.json()` calls it **internally**. Add this line once, near the top.",
        "code": "app.use(express.json());\n\napp.post('/user', (req, res) => {\n  // client sent { \"name\": \"Rohit\" }\n  console.log(req.body.name); // 'Rohit'\n  res.status(201).json(req.body);\n});"
      },
      {
        "id": "protected-rate",
        "title": "Protected Routes & Rate Limiting",
        "content": "Because middleware runs before handlers, it's the perfect home for **cross-cutting** concerns:\n\n- **Protected routes** — an `auth` middleware checks a token and either calls `next()` or replies `401`. Apply it to one route or mount it on a group (`app.use('/admin', auth)`) to protect the whole branch.\n- **Rate limiting** — a `rateLimiter` middleware caps how many requests a user can make in a time window. Apply globally for every route, or to a single route/group.",
        "code": "function auth(req, res, next) {\n  if (!req.headers.authorization) {\n    return res.status(401).json({ error: 'Unauthorized' });\n  }\n  next();\n}\n\napp.get('/profile', auth, (req, res) => res.json(user)); // one route\napp.use('/admin', auth);   // protect the whole /admin group\napp.use(rateLimiter);      // global rate limit"
      },
      {
        "id": "sending-response",
        "title": "Sending a Response",
        "content": "Use **`res`** to reply — and reply **only once**:\n\n- **`res.send('text')`** — send text.\n- **`res.json({ ... })`** — send JSON.\n- **`res.status(201).json({ ... })`** — set a status code, then send JSON.\n\nSending two responses throws \"headers already sent\". Use **`return`** when replying early inside a middleware or guard so the rest of the handler doesn't also run.",
        "code": "res.send('Hello');\nres.json({ id: 1, name: 'Rohit' });\nres.status(201).json({ created: true });\n\n// return when stopping early\nif (!user) return res.status(404).json({ error: 'Not found' });\nres.json(user); // only runs if user exists"
      },
      {
        "id": "mental-model",
        "title": "Final Mental Model — Express is a Pipeline",
        "content": "Put it together: **Express is a pipeline**. A request flows through middleware, then into the matching route handler, then out as a response.\n\n- `app.get / post / patch / delete` — handle routes by method.\n- `app.use` — register middleware.\n- **Route params** — exact resource identity.\n- **Query params** — filter / search / sort / pagination.\n- **Middleware** — common work: logging, auth, body parsing, rate limiting.\n\nCore line: *the request walks the pipeline; each middleware either passes it along with `next()` or ends it with a response.*",
        "code": "Request\n  → express.json()      (parse body)\n  → logger              (log it)\n  → auth                (verify token, next() or 401)\n  → app.get('/users/:id') route handler\n  → res.json(...)       Response"
      }
    ],
    "quiz": [
      {
        "question": "When should you use a route parameter instead of a query parameter?",
        "options": [
          "To identify one exact resource (e.g. /product/10)",
          "For filtering, sorting, or pagination",
          "Only for POST requests",
          "Never — they are identical"
        ],
        "answer": 0,
        "explanation": "Route params = exact resource identity; query params = filter/search/sort/pagination."
      },
      {
        "question": "What happens if middleware neither calls next() nor sends a response?",
        "options": [
          "The request hangs forever",
          "Express skips to the next route automatically",
          "It returns 404",
          "The server crashes"
        ],
        "answer": 0,
        "explanation": "Without next() or a response, the request is stuck — middleware must pass control or end it."
      },
      {
        "question": "What does app.use(express.json()) do?",
        "options": [
          "Parses a JSON request body onto req.body",
          "Converts responses to JSON",
          "Enables HTTPS",
          "Creates the Express app"
        ],
        "answer": 0,
        "explanation": "express.json() is built-in middleware that populates req.body from a JSON payload; it calls next() internally."
      },
      {
        "question": "Why must /users/admin be declared before /users/:id?",
        "options": [
          "Otherwise /users/:id matches first and treats 'admin' as the id",
          "Express sorts routes alphabetically",
          "Dynamic routes are always ignored",
          "Order never matters in Express"
        ],
        "answer": 0,
        "explanation": "Express matches top-to-bottom; the dynamic /users/:id would swallow /users/admin if declared first."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=lY6icfhap2o",
    "youtubeTitle": "Learn Express Middleware in 14 Minutes — Web Dev Simplified",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course",
    "githubPath": "03Backend/Day06",
    "notionUrl": "https://app.notion.com/p/Lecture-06-Express-and-middleware-39943ac5cab980d19823df367d602eeb?source=copy_link",
    "codeRepo": "https://github.com/Rohitnegi9/Thunder/tree/main"
  },
    {
      "id": 26,
      "slug": "node-js-and-runtime-fundamentals",
      "track": "thunder",
      "day": 26,
      "title": "MongoDB Internal Architecture",
      "subtitle": "Lecture 07 — from array to B+ Tree: why databases index the way they do",
      "duration": "2 hrs 30 mins",
      "createdOn": "10 Aug 2026",
      "status": "published",
      "notionUrl": "https://app.notion.com/p/Lecture-07-MongoDB-internal-Architecture-39c43ac5cab98048bae2c02c1fa32830?source=copy_link",
      "topics": [
        "Unsorted array",
        "Sorted array & binary search",
        "Normal BST & skew",
        "Balanced BST (AVL / Red-Black)",
        "Secondary storage & disk pages",
        "B-Tree & fanout",
        "B+ Tree & linked leaves",
        "MongoDB indexes",
        "Range queries",
        "Complexity comparison"
      ],
      "sections": [
        {
          "id": "unsorted-array",
          "title": "1. Start with an unsorted array",
          "content": "**Day 26** follows **Lecture 07** ([MongoDB internal Architecture Notion notes](https://app.notion.com/p/Lecture-07-MongoDB-internal-Architecture-39c43ac5cab98048bae2c02c1fa32830?source=copy_link)).\n\nStart at the simplest possible store — an array of users.\n\n**A new user comes. Where do we insert?** At the end — `users.push(...)`. That is cheap.\n\nBut everything else is a scan. For **update**, the insight is: *updating the value is not hard — finding that user is hard.* First we search the array, then we update. **Delete** is the same, plus shifting if we want the array to stay compact.\n\n> **Array is good for adding data, but bad for finding, updating, and deleting data.**",
          "code": "const users = [\n  { id: 1, name: \"Aman\" },\n  { id: 2, name: \"Rohit\" },\n  { id: 3, name: \"Priya\" }\n];\n\nusers.push({ id: 4, name: \"Neha\" });\n\n// Operation           Complexity\n// -----------------   ----------------\n// Create              O(1) amortized\n// Read/search by id   O(n)\n// Update              O(n)\n// Delete              O(n)"
        },
        {
          "id": "sorted-array",
          "title": "2. Sorted array + binary search",
          "content": "**What if we keep the data sorted by `id`?** Now search is no longer a scan — **binary search** finds `id = 3` in `O(log n)`.\n\n**Important correction — update is NOT always `O(n)` in a sorted array.** It depends on *which field* you change:\n\n- Change a **non-sorted field** (`\"Rohit\"` → `\"Rohit Negi\"`, sorted by `id`): search is `O(log n)` and the update is simple.\n- Change the **sorted field** (`id: 5` → `id: 100`): the element may need to move, so shifting can become `O(n)`.\n\nAlso, if you are storing **variable-size records in a file**, a bigger update can create storage problems. That is a **storage-engine** problem, not just an array problem.\n\n> **Sorted array improves search, but makes insert and delete costly because shifting is expensive.**",
          "code": "[\n  { id: 1, name: \"Aman\" },\n  { id: 2, name: \"Rohit\" },\n  { id: 3, name: \"Priya\" },\n  { id: 4, name: \"Neha\" }\n]\n\n// Find id = 3  ->  binary search\n\n// Operation      Complexity\n// ------------   -------------------------------------------\n// Create         O(n)\n// Read/search    O(log n)\n// Update         usually O(log n), but O(n) if the sorted key changes\n// Delete         O(n)"
        },
        {
          "id": "normal-bst",
          "title": "3. Normal BST — avoiding the shift",
          "content": "**Can we avoid shifting?** Instead of keeping everything side by side like an array, let us **connect data using pointers**. Now an insert does not shift many elements.\n\nBut there is a problem: insert `10, 20, 30, 40` in order and the tree **becomes a linked list**.\n\nSo **do not say BST is always `O(n)`**. Say:\n\n> **Normal BST is good only if it remains balanced. If it becomes skewed, it behaves like a linked list.**",
          "code": "// Balanced shape\n        50\n      /    \\\n    30      70\n   /  \\    /  \\\n 20   40  60   80\n\n// Skewed shape — degenerates into a linked list\n10\n  \\\n   20\n     \\\n      30\n        \\\n         40\n\n// Operation      Average     Worst case\n// ------------   ---------   ----------\n// Create         O(log n)    O(n)\n// Read/search    O(log n)    O(n)\n// Update key     O(log n)    O(n)\n// Delete         O(log n)    O(n)"
        },
        {
          "id": "balanced-bst",
          "title": "4. Balanced BST — and the real problem",
          "content": "**What if the tree automatically balances itself?** That is an **AVL Tree** or **Red-Black Tree** — height stays around `log n`, so every operation is `O(log n)`.\n\n**Is a balanced BST bad for range queries?** **Algorithmically, no.** To find all users with `id` between 30 and 70: find 30 in `O(log n)`, then inorder-traverse until 70 in `O(k)` — so `O(log n + k)`, where `k` is the number of results.\n\n**But here is the real problem:** a balanced BST is good **in RAM**, but not great for database storage **on disk** — because each node may live in a different place. Node 50 at disk block A, node 30 at block X, node 40 at block M. A range query keeps **jumping to different disk locations**.\n\n> **Balanced BST is not bad mathematically. It is bad for database storage because it causes too many random disk reads.**",
          "code": "// Range query: find all users with id between 30 and 70\n//   Find 30:            O(log n)\n//   Inorder until 70:   O(k)\n//   Total:              O(log n + k)\n\n// But on disk, the nodes are scattered:\n//   Node 50 -> disk block A\n//   Node 30 -> disk block X\n//   Node 40 -> disk block M\n//   Node 60 -> disk block P\n//   => random reads, one node at a time\n\n// Operation      Complexity\n// ------------   ----------\n// Create         O(log n)\n// Read/search    O(log n)\n// Update key     O(log n)\n// Delete         O(log n)"
        },
        {
          "id": "secondary-storage",
          "title": "5. Now introduce secondary storage",
          "content": "**This is the most important transition in the lecture.**\n\nTill now we were thinking **like programmers**: one node, one object, one pointer. But a **database thinks differently**, because data is usually **bigger than RAM**. Data lives on **SSD/disk** — and disk **does not like tiny random reads**.\n\nDisk and SSD read data in **blocks/pages**. So the database asks:\n\n> **If I am reading from disk anyway, why should I bring only one key? Let me bring many nearby keys together.**\n\n**That is the birth of the B-Tree.**"
        },
        {
          "id": "b-tree",
          "title": "6. B-Tree — many keys in one box",
          "content": "A B-Tree node is **not** like a BST node with one value. Think of a node as a **box**:\n\n> **In BST, one box contains one item. In B-Tree, one box contains many sorted items.**\n\nWhen the database reads **one page** from disk, it gets **many keys together**. That is powerful — a balanced BST gives you **1 disk read = 1 key**, while a B-Tree gives you **1 disk read = many keys**.\n\nSo the tree height becomes very small: a BST height may be around **20–30** for millions of records, while a **B-Tree height may be 3–5**.\n\nWiredTiger's docs describe its tree as **page-based**: root/internal pages store keys and references, leaf pages store key/value data, and pages **split** when they reach their limit.\n\nSearch is `O(log base m of n)`, where `m` is the **fanout** — how many children one node can have. But **for databases, do not focus only on Big-O. Focus on disk reads.**\n\n> **B-Tree reduces the number of disk jumps.**\n\n**Is a B-Tree bad for range queries?** Not exactly — it is better than a BST for disk. But in a normal B-Tree, values can live in **both internal and leaf nodes**, so range traversal is less straightforward. B+ Tree makes range queries cleaner and faster.",
          "code": "// BST node — one value per box\n[50]\n\n// B-Tree node/page — many sorted keys per box\n[10 | 20 | 30 | 40 | 50 | 60]\n\n// A B-Tree\n              [30 | 60]\n             /    |     \\\n [1..29]   [31..59]   [61..100]\n\n// Balanced BST:  1 disk read = 1 key/node\n// B-Tree:        1 disk read = many keys"
        },
        {
          "id": "b-plus-tree",
          "title": "7. B+ Tree — the final upgrade",
          "content": "The **B+ Tree rule**:\n\n- **Internal nodes** = only keys, for navigation\n- **Leaf nodes** = the actual data / record pointer\n- **Leaf nodes** = sorted **and connected**\n\nNow a range query becomes beautiful. To find all `id` between 35 and 80: **use the tree to reach 35** in `O(log n)`, then **scan leaf nodes one by one** until 80. Because the leaves are sorted **and linked**, the database moves **sequentially** instead of jumping randomly.\n\nComplexity is `O(log n + k)` — but in **database terms** it is `O(tree height + number of pages scanned)`, which is the number that actually matters.\n\n> **B+ Tree is like a book index plus connected pages. First it helps you jump to the correct page, then you keep reading the next pages in order.**",
          "code": "              [30 | 60]\n             /    |     \\\n          /       |       \\\n\n// Leaf level — sorted AND linked:\n[1, 5, 9, 20] -> [31, 35, 40, 55] -> [61, 70, 80, 99]\n\n// Find all id between 35 and 80:\n//   1. Use the tree to reach 35   -> O(log n)\n//   2. Scan leaves in order until 80\n//   => O(log n + k)  =  O(tree height + pages scanned)"
        },
        {
          "id": "mongodb-indexes",
          "title": "8. Connect this directly to MongoDB",
          "content": "**MongoDB does not search every document every time.** If we create an **index**, MongoDB maintains a **tree-like ordered structure** for that field.\n\n**Without an index**, it is a **collection scan** — check document 1, check document 2, check document 3, and so on. **With an index**, it goes through the B-tree/B+tree-style structure, finds the email quickly, and fetches the matching document.\n\nMongoDB's docs state that indexes **store a small portion of collection data in an easy-to-traverse form, ordered by the indexed field's values** — and that this ordering is what supports **equality, range queries, and sorted results**.",
          "code": "db.users.createIndex({ email: 1 });\n\n// Simplified mental model of the email index:\n//   aman@gmail.com   -> document location\n//   neha@gmail.com   -> document location\n//   rohit@gmail.com  -> document location\n\ndb.users.find({ email: \"rohit@gmail.com\" });\n\n// Without index:  collection scan — check every document\n// With index:     traverse the tree, find the email, fetch the document"
        },
        {
          "id": "range-query-mongodb",
          "title": "9. Range query example in MongoDB",
          "content": "This is the B+ Tree leaf scan showing up directly in MongoDB.\n\nWith an index on `price`, MongoDB can **reach the first price ≥ 500**, **scan index entries in order until price > 1000**, then **fetch the matching documents** — exactly the \"jump to the page, then read forward\" behaviour from section 7.\n\nThis is why indexes are powerful for **equality search, range queries, sorting, and pagination**.",
          "code": "db.products.createIndex({ price: 1 });\n\ndb.products.find({\n  price: { $gte: 500, $lte: 1000 }\n});\n\n// 1. Reach first price >= 500\n// 2. Scan index entries until price > 1000\n// 3. Fetch matching documents"
        },
        {
          "id": "complexity-table",
          "title": "10. Final complexity comparison",
          "content": "The corrected table for the whole journey.\n\nFor B-Tree and B+ Tree, the key line is:\n\n> **Big-O looks similar to a balanced BST, but real database performance improves because one node contains many keys, and one disk read brings many related keys together.**",
          "code": "Structure        Create      Read        Update            Delete      Main problem\n--------------   ---------   ---------   ---------------   ---------   ---------------------------\nUnsorted array   O(1)        O(n)        O(n)              O(n)        Search is slow\nSorted array     O(n)        O(log n)    O(log n) or O(n)  O(n)        Insert/delete shifting\nNormal BST       O(log n)*   O(log n)*   O(log n)*         O(log n)*   Can become skewed\nBalanced BST     O(log n)    O(log n)    O(log n)          O(log n)    Too many random disk reads\nB-Tree           O(log n)    O(log n)    O(log n)          O(log n)    Good for disk, okay for range\nB+ Tree          O(log n)    O(log n)    O(log n)          O(log n)    Best for DB-style range scans\n\n* Normal BST: average case. Worst case is O(n) when skewed."
        },
        {
          "id": "punchline",
          "title": "The final teaching punchline",
          "content": "The whole lecture in one arc:\n\n- **Array** was good for **writing**.\n- **Sorted array** was good for **searching**.\n- **BST** avoided **shifting**.\n- **Balanced BST** controlled **height**.\n- But database data lives **on disk**, so we need **fewer disk reads**.\n- **B-Tree** puts **many sorted keys in one page**.\n- **B+ Tree** keeps all actual data at the **leaf level** and **connects the leaves**, so range queries become efficient.\n\n> **That is why databases like MongoDB use B-tree/B+tree-style index structures internally.**\n\n**Next:** [Day 27 — Create Your Own Database](/learn/http-rest-and-express-js), where we build a database by hand and feel exactly why all of this exists."
        }
      ],
      "quiz": [
        {
          "question": "Why is a balanced BST considered a poor fit for database storage, even though its Big-O is O(log n)?",
          "options": [
            "Because its nodes are scattered across different disk blocks, so traversal causes too many random disk reads",
            "Because its height grows linearly with the number of records",
            "Because it cannot perform range queries at all",
            "Because it only supports integer keys"
          ],
          "answer": 0,
          "explanation": "A balanced BST is not bad mathematically — it is bad for database storage. Each node may sit in a different disk block, so a range query keeps jumping to random disk locations."
        },
        {
          "question": "What is the core insight that leads from a balanced BST to a B-Tree?",
          "options": [
            "Disk reads in blocks/pages anyway, so one node should hold many sorted keys instead of one",
            "Pointers are slower than array indexes",
            "Trees should never be balanced",
            "RAM is always larger than the dataset"
          ],
          "answer": 0,
          "explanation": "If you are reading from disk anyway, why bring only one key? Bring many nearby keys together. That is the birth of the B-Tree — 1 disk read = many keys, so height drops from ~20-30 to 3-5."
        },
        {
          "question": "What makes a B+ Tree better than a B-Tree for range scans?",
          "options": [
            "Internal nodes hold only navigation keys while all data sits in sorted, linked leaf nodes, so scans move sequentially",
            "B+ Trees have no internal nodes",
            "B+ Trees store data only in internal nodes",
            "B+ Trees are always shorter than B-Trees"
          ],
          "answer": 0,
          "explanation": "In a normal B-Tree values can live in both internal and leaf nodes, making traversal less straightforward. A B+ Tree keeps data at the leaf level and links the leaves, so you jump to the start then read forward in order."
        },
        {
          "question": "In a sorted array, when does an update become O(n) rather than O(log n)?",
          "options": [
            "When you update the sorted field itself, so the element must move and shifting occurs",
            "Always — updates in a sorted array are always O(n)",
            "Only when the array holds fewer than 10 elements",
            "Never — updates are always O(log n)"
          ],
          "answer": 0,
          "explanation": "Updating a non-sorted field (name) is a O(log n) search plus a simple write. But updating the sorted key (id: 5 -> 100) may require moving the element, so shifting can become O(n)."
        }
      ],
      "youtubeUrl": "https://www.youtube.com/watch?v=aZjYr87r1b8",
      "youtubeTitle": "B Trees and B+ Trees — How they are useful in Databases — Abdul Bari",
      "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
      "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
    },
    {
      "id": 27,
      "slug": "http-rest-and-express-js",
      "track": "thunder",
      "day": 27,
      "title": "Create Your Own Database",
      "subtitle": "Lecture 08 — a file-based bank database with fs, JSON & Express",
      "duration": "2 hrs",
      "createdOn": "11 Aug 2026",
      "status": "published",
      "notionUrl": "https://app.notion.com/p/Lecture08-Create-Your-own-Database-39d43ac5cab98036b6e8c65bf50a731f?source=copy_link",
      "topics": [
        "A file as a database",
        "fs.readFileSync & JSON.parse",
        "fs.writeFileSync & JSON.stringify",
        "readDB & writeDB helpers",
        "Create account (POST)",
        "Read all / read one",
        "Read balance",
        "Deposit (PATCH)",
        "Delete account (DELETE)",
        "Why we outgrow a file"
      ],
      "sections": [
        {
          "id": "the-idea",
          "title": "The Idea — a file as your database",
          "content": "**Day 27** follows **Lecture 08** ([Create Your own Database Notion notes](https://app.notion.com/p/Lecture08-Create-Your-own-Database-39d43ac5cab98036b6e8c65bf50a731f?source=copy_link)).\n\nBefore reaching for MongoDB, we build a **database by hand** — using nothing but a **text file** and Node's built-in **`fs`** module.\n\nThe whole store is one file, `database.txt`, holding a **JSON array of accounts**. Every request reads that file, works on a plain JavaScript array, and writes it back.\n\nThis is the **first thought** behind every database: data must survive a server restart, so it has to leave memory and land on **disk**.\n\n**Before you run it:** `database.txt` must already exist and contain an empty array `[]` — otherwise `JSON.parse` has nothing valid to parse.",
          "code": "import express from \"express\";\nimport fs from \"fs\";\n\nconst app = express();\napp.use(express.json());\n\nconst DB_FILE = \"./database.txt\";"
        },
        {
          "id": "read-db",
          "title": "readDB() — file → JavaScript",
          "content": "Reading the database is two steps:\n\n1. **`fs.readFileSync(DB_FILE, \"utf-8\")`** — read the file's raw text. The `\"utf-8\"` argument matters: without it you get a **Buffer** instead of a string.\n2. **`JSON.parse(data)`** — turn that text into a real JavaScript array you can `.find()`, `.push()` and `.filter()`.\n\nThe file always holds **text**. `JSON.parse` is the bridge from text back into objects.",
          "code": "function readDB() {\n  const data = fs.readFileSync(DB_FILE, \"utf-8\");\n  return JSON.parse(data);\n}"
        },
        {
          "id": "write-db",
          "title": "writeDB() — JavaScript → file",
          "content": "Writing is the mirror image:\n\n1. **`JSON.stringify(data, null, 2)`** — turn the array back into text. The `2` is the **indentation**, which is why `database.txt` stays readable instead of collapsing onto one line.\n2. **`fs.writeFileSync(DB_FILE, ...)`** — overwrite the file with that text.\n\nNote that `writeFileSync` **replaces the whole file** every time. We never append — we always write the complete array back.",
          "code": "function writeDB(data) {\n  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));\n}"
        },
        {
          "id": "sync-and-json",
        "title": "Why Sync, and why these two helpers",
        "content": "`readFileSync` and `writeFileSync` are **synchronous** — they **block** the event loop until the disk finishes. That is fine for learning, and it keeps the code simple to read, but it is exactly what you would *not* do in production: one slow disk read holds up every other request.\n\nWrapping the file access in **`readDB()`** and **`writeDB()`** is the important move. Every route now speaks in **arrays and objects**, not files. That is the same idea a real database driver gives you — and when we swap in MongoDB on Day 28, only these two helpers disappear.\n\n**The pattern every route follows:**",
        "code": "read the file  →  work on the array  →  write the file back"
      },
        {
          "id": "setup-and-home",
          "title": "Setup & the home route",
          "content": "**`express.json()`** is what makes `req.body` work — without it, the POST and PATCH routes below would see `undefined` instead of the JSON you sent.\n\nThe home route is a simple health check: hit `/` and the server tells you it is alive.",
          "code": "app.get(\"/\", (req, res) => {\n  res.send(\"Bank File Database is running\");\n});\n\napp.listen(3000, () => {\n  console.log(\"Server running on port 3000\");\n});"
        },
        {
          "id": "create-account",
          "title": "1. Create account — POST /accounts",
          "content": "The full read → modify → write cycle:\n\n1. `readDB()` loads the current accounts.\n2. Build `newAccount` by picking the fields off `req.body`.\n3. `accounts.push(newAccount)` adds it **to the array in memory**.\n4. `writeDB(accounts)` persists the whole array back to disk.\n\nStep 4 is the one that matters — without it the account exists only until the next request.\n\nNotice there is **no validation**: whatever the client sends becomes the account. A real schema (Day 28's Mongoose) is what fixes that.",
          "code": "app.post(\"/accounts\", (req, res) => {\n  const accounts = readDB();\n\n  const newAccount = {\n    name: req.body.name,\n    accountNumber: req.body.accountNumber,\n    city: req.body.city,\n    age: req.body.age,\n    balance: req.body.balance\n  };\n\n  accounts.push(newAccount);\n\n  writeDB(accounts);\n\n  res.json({\n    message: \"Account created successfully\",\n    account: newAccount\n  });\n});"
        },
        {
          "id": "read-accounts",
          "title": "2 & 3. Read all accounts, read one account",
          "content": "**Read all** is the simplest route on the server — read the file, send the array.\n\n**Read one** uses **`.find()`** to search the array by account number. This is where our hand-made database shows its cost: to find a single account, we read **every** account into memory and scan the whole array. A real database uses an **index** instead.\n\n**Why `==` and not `===`?** `req.params.accountNumber` always arrives as a **string** (`\"101\"`), while the stored `accountNumber` is a **number** (`101`). `==` compares loosely and converts the types, so `\"101\" == 101` is `true`. With `===` this lookup would never match.",
          "code": "// Read all\napp.get(\"/accounts\", (req, res) => {\n  const accounts = readDB();\n  res.json(accounts);\n});\n\n// Read one\napp.get(\"/accounts/:accountNumber\", (req, res) => {\n  const accounts = readDB();\n\n  const account = accounts.find((acc) => {\n    return acc.accountNumber == req.params.accountNumber;\n  });\n\n  res.json(account);\n});"
        },
        {
          "id": "read-balance",
          "title": "4. Read balance — a narrower response",
          "content": "The same `.find()` lookup, but instead of returning the whole account we build a **smaller response object** with just the account number and balance.\n\nThis is a useful habit: the route decides **what the client sees**, not the storage format. You rarely want to hand back the raw record.",
          "code": "app.get(\"/accounts/:accountNumber/balance\", (req, res) => {\n  const accounts = readDB();\n\n  const account = accounts.find((acc) => {\n    return acc.accountNumber == req.params.accountNumber;\n  });\n\n  res.json({\n    accountNumber: account.accountNumber,\n    balance: account.balance\n  });\n});"
        },
        {
          "id": "deposit",
          "title": "5. Increase balance — PATCH /accounts/:accountNumber/deposit",
          "content": "**PATCH**, not PUT — we are changing **one field**, not replacing the account.\n\nThe subtle part is why this works at all: `.find()` returns a **reference** to the object inside the `accounts` array. Mutating `account.balance` therefore changes the array too — which is why `writeDB(accounts)` on the next line saves the new balance even though we never touched `accounts` directly.\n\nMiss that `writeDB()` call and the deposit vanishes the moment the request ends.",
          "code": "app.patch(\"/accounts/:accountNumber/deposit\", (req, res) => {\n  const accounts = readDB();\n\n  const account = accounts.find((acc) => {\n    return acc.accountNumber == req.params.accountNumber;\n  });\n\n  account.balance = account.balance + req.body.amount;\n\n  writeDB(accounts);\n\n  res.json({\n    message: \"Balance increased successfully\",\n    account: account\n  });\n});"
        },
        {
          "id": "delete-account",
          "title": "6. Delete account — filter, don't splice",
          "content": "Deleting is a **`.filter()`** that keeps every account **except** the one matching — note `!=` (not equal), the mirror of the `==` used to find.\n\n`.filter()` returns a **new array**, which is why `accounts` is declared with **`let`** here and not `const` — we reassign it to the filtered result, then write that back.\n\nIf the account number does not exist, nothing is removed and the route still reports success — another gap a real database layer would close.",
          "code": "app.delete(\"/accounts/:accountNumber\", (req, res) => {\n  let accounts = readDB();\n\n  accounts = accounts.filter((acc) => {\n    return acc.accountNumber != req.params.accountNumber;\n  });\n\n  writeDB(accounts);\n\n  res.json({\n    message: \"Account deleted successfully\"\n  });\n});"
        },
        {
          "id": "complete-server",
          "title": "Complete Server File",
          "content": "The whole file-based bank database in one file — `fs` + JSON + Express, no database engine anywhere.",
          "code": "import express from \"express\";\nimport fs from \"fs\";\n\nconst app = express();\napp.use(express.json());\n\nconst DB_FILE = \"./database.txt\";\n\nfunction readDB() {\n  const data = fs.readFileSync(DB_FILE, \"utf-8\");\n  return JSON.parse(data);\n}\n\nfunction writeDB(data) {\n  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));\n}\n\n// Home route\napp.get(\"/\", (req, res) => {\n  res.send(\"Bank File Database is running\");\n});\n\n// 1. Create account\napp.post(\"/accounts\", (req, res) => {\n  const accounts = readDB();\n\n  const newAccount = {\n    name: req.body.name,\n    accountNumber: req.body.accountNumber,\n    city: req.body.city,\n    age: req.body.age,\n    balance: req.body.balance\n  };\n\n  accounts.push(newAccount);\n\n  writeDB(accounts);\n\n  res.json({\n    message: \"Account created successfully\",\n    account: newAccount\n  });\n});\n\n// 2. Read all accounts\napp.get(\"/accounts\", (req, res) => {\n  const accounts = readDB();\n\n  res.json(accounts);\n});\n\n// 3. Read one account\napp.get(\"/accounts/:accountNumber\", (req, res) => {\n  const accounts = readDB();\n\n  const account = accounts.find((acc) => {\n    return acc.accountNumber == req.params.accountNumber;\n  });\n\n  res.json(account);\n});\n\n// 4. Read balance\napp.get(\"/accounts/:accountNumber/balance\", (req, res) => {\n  const accounts = readDB();\n\n  const account = accounts.find((acc) => {\n    return acc.accountNumber == req.params.accountNumber;\n  });\n\n  res.json({\n    accountNumber: account.accountNumber,\n    balance: account.balance\n  });\n});\n\n// 5. Increase balance\napp.patch(\"/accounts/:accountNumber/deposit\", (req, res) => {\n  const accounts = readDB();\n\n  const account = accounts.find((acc) => {\n    return acc.accountNumber == req.params.accountNumber;\n  });\n\n  account.balance = account.balance + req.body.amount;\n\n  writeDB(accounts);\n\n  res.json({\n    message: \"Balance increased successfully\",\n    account: account\n  });\n});\n\n// 6. Delete account\napp.delete(\"/accounts/:accountNumber\", (req, res) => {\n  let accounts = readDB();\n\n  accounts = accounts.filter((acc) => {\n    return acc.accountNumber != req.params.accountNumber;\n  });\n\n  writeDB(accounts);\n\n  res.json({\n    message: \"Account deleted successfully\"\n  });\n});\n\napp.listen(3000, () => {\n  console.log(\"Server running on port 3000\");\n});"
        },
        {
          "id": "why-we-outgrow-a-file",
          "title": "Why we outgrow this — the bridge to MongoDB",
          "content": "This file database genuinely works, and building it is the point: you now know exactly **what a database does for you**, because you did it by hand.\n\nBut the cracks are visible in our own code:\n\n- **It reads everything to find one thing.** `.find()` scans the whole array — no indexes.\n- **It rewrites everything to change one thing.** `writeDB()` replaces the entire file on every deposit.\n- **It blocks.** `readFileSync`/`writeFileSync` stall the event loop.\n- **Two requests at once can clobber each other.** Both read the same array, both write it back — the second overwrites the first. No transactions, no locking.\n- **Nothing is validated.** Any shape of data can land in the file.\n- **No unique constraint.** Two accounts can share an account number.\n\nEvery one of these is something a real database solves — and every one has a direct answer in **Day 28**: indexes and queries, `$inc` for atomic updates, a connection pool, schema validation, and `unique: true`.\n\n**Next:** [Day 28 — MongoDB & Mongoose](/learn/middleware-and-request-lifecycle)."
        }
      ],
      "quiz": [
        {
          "question": "Why does the lookup use == instead of === when comparing account numbers?",
          "options": [
            "Because req.params.accountNumber is a string while the stored accountNumber is a number, and == converts the types so \"101\" == 101 is true",
            "Because === does not work inside .find()",
            "Because == is faster than === in Node.js",
            "Because account numbers are stored as booleans"
          ],
          "answer": 0,
          "explanation": "Route params always arrive as strings. With === the comparison \"101\" === 101 would be false and the account would never be found."
        },
        {
          "question": "In the deposit route, why does writeDB(accounts) save the new balance even though we only modified `account`?",
          "options": [
            "Because .find() returns a reference to the object inside the accounts array, so mutating it also changes the array",
            "Because writeDB automatically re-reads the file first",
            "Because Express syncs req.body to disk",
            "Because JSON.stringify searches for changed objects"
          ],
          "answer": 0,
          "explanation": ".find() hands back a reference, not a copy. Mutating account.balance mutates the object that lives inside the accounts array, which is what gets written back."
        },
        {
          "question": "Why is `accounts` declared with `let` in the delete route but `const` everywhere else?",
          "options": [
            "Because .filter() returns a new array that is reassigned to accounts, and const cannot be reassigned",
            "Because delete routes cannot use const",
            "Because let is required whenever you call writeDB",
            "Because filter mutates the array in place"
          ],
          "answer": 0,
          "explanation": ".filter() does not mutate — it returns a new array. That new array is reassigned to `accounts`, which requires `let`."
        },
        {
          "question": "What is the main risk of two deposit requests arriving at the same time in this file database?",
          "options": [
            "Both read the same array and both write it back, so the second write overwrites the first — the lost update problem",
            "The file will be deleted",
            "Express will reject the second request automatically",
            "JSON.parse will throw a RangeError"
          ],
          "answer": 0,
          "explanation": "There are no transactions or locking. Each request reads the whole file, modifies its own copy, and overwrites the file — so concurrent writes clobber each other. Real databases solve this with atomic operations like $inc."
        }
      ],
      "youtubeUrl": "https://www.youtube.com/watch?v=L72fhGm1tfE",
      "youtubeTitle": "Express JS Crash Course — Traversy Media",
      "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
      "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
    },
    {
      "id": 28,
      "slug": "middleware-and-request-lifecycle",
      "track": "thunder",
      "day": 28,
      "title": "MongoDB & Mongoose",
      "subtitle": "Lecture 09 — documents, BSON, _id, schema, model, connection & queries",
      "duration": "2 hrs 30 mins",
      "createdOn": "12 Aug 2026",
      "status": "published",
      "notionUrl": "https://app.notion.com/p/Lecture09-MongoDB-and-Mongoose-39f43ac5cab9801da031d61c7de89719?source=copy_link",
      "topics": [
        "Why we need a database",
        "MongoDB documents",
        "Database, collection, document",
        "BSON vs JSON",
        "_id & ObjectId",
        "Mongoose ODM",
        "mongoose.connect & connection pool",
        "Schema & validation rules",
        "Model & timestamps",
        "CRUD routes",
        "Filters, $gt, $inc",
        "Query shapes: $in, $or, $and"
      ],
      "sections": [
        {
          "id": "why-database",
          "title": "First Thought — Why do we need a database?",
          "content": "**Day 28** follows **Lecture 09** ([MongoDB and Mongoose Notion notes](https://app.notion.com/p/Lecture09-MongoDB-and-Mongoose-39f43ac5cab9801da031d61c7de89719)).\n\nIn backend, our server needs to store data **permanently**. If we store data only inside an array, it **disappears when the server restarts**. So we need a database.\n\nA database helps us:\n\n- store data permanently\n- fetch data when needed\n- update existing data\n- delete data\n- search/filter data",
          "code": "{\n  name: \"Rohit\",\n  accountNumber: 101,\n  city: \"Dehradun\",\n  age: 25,\n  balance: 5000\n}"
        },
        {
          "id": "what-is-mongodb",
          "title": "What is MongoDB?",
          "content": "MongoDB is a database where we store data in the form of **documents**. A document looks like a **JavaScript object**.\n\nMongoDB stores records as **BSON documents** — a binary representation of JSON-like documents that supports more data types than JSON.",
          "code": "{\n  name: \"Rohit\",\n  age: 25,\n  city: \"Dehradun\"\n}"
        },
        {
          "id": "database-collection-document",
          "title": "Database, Collection, Document",
          "content": "Think like this:\n\n- **Database** = main container\n- **Collection** = group of similar documents\n- **Document** = actual data object",
          "code": "bankDB\n└── customers\n    ├── customer document 1\n    ├── customer document 2\n    └── customer document 3\n\n// Database: bankDB\n// Collection: customers\n// Document:\n{\n  name: \"Rohit\",\n  accountNumber: 101,\n  balance: 5000\n}"
        },
        {
          "id": "what-is-bson",
          "title": "What is BSON?",
          "content": "**BSON = Binary JSON.** We write data in JSON-like format, but MongoDB internally stores it as BSON.\n\n**Why?** Because MongoDB should understand the *types*: `name` is string, `age` is number, `isActive` is boolean, `createdAt` is Date, `_id` is ObjectId.\n\n- **JSON** is good for humans and APIs.\n- **BSON** is good for database storage and type understanding.\n\nBSON supports extra types like **ObjectId, Date, Int32, Int64, Decimal128, Binary data, and Timestamp**.",
          "code": "{\n  name: \"Aman\",\n  age: 22,\n  isActive: true\n}"
        },
        {
          "id": "object-id",
          "title": "What is _id?",
          "content": "Every MongoDB document needs a **unique identity**. If you do not provide `_id`, MongoDB **automatically creates it**.\n\nUse of `_id`:\n\n- uniquely identify one document\n- update the exact document\n- delete the exact document\n- fetch the exact document\n\nFor beginner projects, let MongoDB generate `_id` automatically.",
          "code": "{\n  _id: ObjectId(\"6a588620783c80fbbcf26db8\"),\n  name: \"Rohit\",\n  age: 25\n}\n\ndb.customers.findOne({\n  _id: ObjectId(\"6a588620783c80fbbcf26db8\")\n})"
        },
        {
          "id": "what-is-mongoose",
          "title": "What is Mongoose?",
          "content": "Mongoose is an **ODM = Object Data Modeling**.\n\nSimple meaning: **Mongoose helps us work with MongoDB using structured JavaScript code.**\n\nMongoose helps with: schema, model, validation, default values, timestamps, query methods, middleware/hooks, and clean code structure.\n\nMongoose says everything starts with a **Schema**, and a schema maps to a MongoDB collection and defines the shape of documents inside it.",
          "code": "// Without Mongoose\ndb.collection(\"customers\").findOne({ accountNumber: 101 })\n\n// With Mongoose\nCustomer.findOne({ accountNumber: 101 })"
        },
        {
          "id": "mongoose-connect",
          "title": "Why do we need mongoose.connect()?",
          "content": "Before our backend can query MongoDB, it must **connect** to MongoDB. This creates a **long-lived connection** between Node.js and the MongoDB database.\n\nIt is **not a WebSocket** connection — it is a **TCP-based database connection** handled by the MongoDB driver.\n\nWhen connection happens: the MongoDB URI is read → the MongoDB server is found → a TCP connection is created → a TLS/SSL secure channel is created → username/password authentication happens → the connection pool is prepared → queries can now run.\n\n**Meaning: first connect the database, then start accepting API requests.**",
          "code": "await mongoose.connect(process.env.MONGO_URI);\n\napp.listen(3000, () => {\n  console.log(\"Server started\");\n});"
        },
        {
          "id": "connection-pool",
          "title": "Why not connect on every request?",
          "content": "**Bad approach** — calling `mongoose.connect()` inside a route handler.\n\n**Problem:** every request opens a DB connection, every request authenticates again → more delay, more load, bad performance.\n\n**Good approach:** the server starts → the DB connection is created **once** → all requests reuse the existing connection.\n\nMongoose/the MongoDB driver maintains a **connection pool** — multiple ready-made database connections. If 10 requests come together, they can use different available connections from the pool.",
          "code": "// ❌ Bad — connects on every request\napp.get(\"/customers\", async (req, res) => {\n  await mongoose.connect(process.env.MONGO_URI);\n  const customers = await Customer.find();\n  res.json(customers);\n});"
        },
        {
          "id": "schema",
          "title": "What is Schema?",
          "content": "Schema is the **blueprint/rule** of a document. It tells Mongoose that `name` should be String, `accountNumber` should be Number, and so on.\n\n**Schema with rules:**\n\n- `required: true` → field must be present\n- `trim: true` → remove extra spaces\n- `unique: true` → duplicate value not allowed\n- `min: 1` → value should be at least 1\n- `enum` → only selected values allowed\n- `default` → use default value if not provided\n\nMongoose SchemaTypes handle defaults, validation, getters, setters, and field behavior.",
          "code": "const customerSchema = new mongoose.Schema({\n  name: { type: String, required: true, trim: true },\n  accountNumber: { type: Number, required: true, unique: true },\n  city: { type: String, required: true, trim: true },\n  age: { type: Number, required: true, min: 1 },\n  balance: { type: Number, required: true, min: 0 },\n  accountType: {\n    type: String,\n    enum: [\"saving\", \"current\"],\n    default: \"saving\"\n  }\n});"
        },
        {
          "id": "model",
          "title": "What is Model?",
          "content": "Schema only **defines structure**. Model is used to actually **perform database operations**.\n\nMongoose defines a Model as the main tool for interacting with MongoDB, created from Schema definitions.\n\n**Mental model:**\n\n- **Schema** = blueprint\n- **Model** = tool to talk to the database\n- **Document** = actual stored data",
          "code": "const Customer = mongoose.model(\"Customer\", customerSchema);\n\nCustomer.create()\nCustomer.find()\nCustomer.findOne()\nCustomer.findOneAndUpdate()\nCustomer.findOneAndDelete()"
        },
        {
          "id": "timestamps",
          "title": "What are timestamps?",
          "content": "If we pass `{ timestamps: true }` as the schema's second argument, Mongoose automatically adds **`createdAt`** and **`updatedAt`** Date properties.\n\n- `createdAt` → when the document was created\n- `updatedAt` → when the document was last changed",
          "code": "{\n  name: \"Rohit\",\n  balance: 5000,\n  createdAt: \"2026-07-16T10:00:00Z\",\n  updatedAt: \"2026-07-16T10:00:00Z\"\n}"
        },
        {
          "id": "complete-model-file",
          "title": "Complete Model File",
          "content": "The full `models/customer.model.js` — schema + rules + timestamps + model, exported as default.",
          "code": "import mongoose from \"mongoose\";\n\nconst customerSchema = new mongoose.Schema(\n  {\n    name: { type: String, required: true, trim: true },\n    accountNumber: { type: Number, required: true, unique: true },\n    city: { type: String, required: true, trim: true },\n    age: { type: Number, required: true, min: 1 },\n    balance: { type: Number, required: true, min: 0 },\n    accountType: {\n      type: String,\n      enum: [\"saving\", \"current\"],\n      default: \"saving\"\n    }\n  },\n  {\n    timestamps: true\n  }\n);\n\nconst Customer = mongoose.model(\"Customer\", customerSchema);\n\nexport default Customer;"
        },
        {
          "id": "express-mongo-setup",
          "title": "Basic Express + MongoDB Setup",
          "content": "Connect first, then listen. `express.json()` is needed so `req.body` is parsed for the POST/PATCH routes below.",
          "code": "import express from \"express\";\nimport mongoose from \"mongoose\";\nimport Customer from \"./models/customer.model.js\";\n\nconst app = express();\n\napp.use(express.json());\n\nawait mongoose.connect(process.env.MONGO_URI);\n\nconsole.log(\"MongoDB connected\");\n\napp.listen(3000, () => {\n  console.log(\"Server running on port 3000\");\n});"
        },
        {
          "id": "crud-routes",
          "title": "CRUD — Create, Read, Update, Delete",
          "content": "The core bank-account routes: **create** a customer, **fetch all**, **fetch one** by account number, **update** the balance, and **delete**.\n\n`new: true` means **return the updated document** (without it, `findOneAndUpdate` returns the document as it was *before* the update).",
          "code": "// Create\napp.post(\"/customers\", async (req, res) => {\n  const customer = await Customer.create(req.body);\n  res.json({ message: \"Customer created successfully\", customer });\n});\n\n// Fetch all\napp.get(\"/customers\", async (req, res) => {\n  const customers = await Customer.find();\n  res.json(customers);\n});\n\n// Fetch by account number\napp.get(\"/customers/:accountNumber\", async (req, res) => {\n  const customer = await Customer.findOne({\n    accountNumber: req.params.accountNumber\n  });\n  res.json(customer);\n});\n\n// Update balance\napp.patch(\"/customers/:accountNumber/balance\", async (req, res) => {\n  const customer = await Customer.findOneAndUpdate(\n    { accountNumber: req.params.accountNumber },\n    { balance: req.body.balance },\n    { new: true }\n  );\n  res.json({ message: \"Balance updated successfully\", customer });\n});\n\n// Delete\napp.delete(\"/customers/:accountNumber\", async (req, res) => {\n  const customer = await Customer.findOneAndDelete({\n    accountNumber: req.params.accountNumber\n  });\n  res.json({ message: \"Customer deleted successfully\", customer });\n});"
        },
        {
          "id": "deposit-withdraw",
          "title": "Deposit & Withdraw — $inc vs save()",
          "content": "**Deposit** uses **`$inc`** (increment) — current balance 5000 + amount 2000 = new balance 7000. It updates atomically in one query.\n\n**Withdraw** needs a **check first**, so we fetch the document, compare the balance, reject if insufficient, then mutate and `save()`.",
          "code": "// Deposit — $inc\napp.patch(\"/customers/:accountNumber/deposit\", async (req, res) => {\n  const customer = await Customer.findOneAndUpdate(\n    { accountNumber: req.params.accountNumber },\n    { $inc: { balance: req.body.amount } },\n    { new: true }\n  );\n  res.json({ message: \"Amount deposited successfully\", customer });\n});\n\n// Withdraw — check, then save\napp.patch(\"/customers/:accountNumber/withdraw\", async (req, res) => {\n  const { amount } = req.body;\n  const customer = await Customer.findOne({\n    accountNumber: req.params.accountNumber\n  });\n\n  if (customer.balance < amount) {\n    return res.json({ message: \"Insufficient balance\" });\n  }\n\n  customer.balance = customer.balance - amount;\n  await customer.save();\n\n  res.json({ message: \"Amount withdrawn successfully\", customer });\n});"
        },
        {
          "id": "filters-and-route-order",
          "title": "Filters & Important Route Order",
          "content": "Filter with query params: `/customers/filter/balance?minBalance=10000` uses **`$gt`** (greater than). MongoDB query filters use the form `{ field: { operator: value } }`.\n\n**Important — write specific routes BEFORE dynamic routes.** If `/customers/:accountNumber` is registered first, Express may treat `filter` as an `accountNumber`.",
          "code": "// ✅ Correct order\napp.get(\"/customers/filter/balance\", async (req, res) => {\n  const customers = await Customer.find({\n    balance: { $gt: req.query.minBalance }\n  });\n  res.json(customers);\n});\n\napp.get(\"/customers/filter/city\", async (req, res) => {\n  const customers = await Customer.find({ city: req.query.city });\n  res.json(customers);\n});\n\napp.get(\"/customers/:accountNumber\", ...) // dynamic route LAST"
        },
        {
          "id": "query-shapes",
          "title": "Query Shapes — the whole mental model",
          "content": "A MongoDB query is just an **object**: `Model.find({ fieldName: condition })`. There are only **3 shapes**:\n\n**Shape 1 — simple equality:** `{ city: \"Delhi\" }`. Multiple fields in the same object means **AND** by default.\n\n**Shape 2 — field with operator:** `{ balance: { $gt: 10000 } }`. Use for greater/less/not-equal/in-list.\n\n**Shape 3 — logical operator with array:** `{ $or: [ {...}, {...} ] }` — each condition is a separate object.\n\n**Why does `$or` use an array but AND does not?** Because an object already naturally supports AND. But OR can't be written as `{ city: \"Delhi\", city: \"Mumbai\" }` — the same key can't appear twice in a JS object. So MongoDB uses an array.\n\n**Final rule:**\n\n- **AND between fields** → put fields in the same object\n- **OR between conditions** → use `$or` with an array\n- **Multiple values for the same field** → use `$in` with an array\n- **Greater/less/not equal** → use field with an operator object\n\n> MongoDB query is just an object. If the condition is simple, write the value directly. If the condition needs logic, use `$operator`. If there are multiple choices or conditions, use an array.",
          "code": "// Exact match\nCustomer.find({ city: \"Delhi\" });\n\n// AND (same object, multiple fields)\nCustomer.find({ city: \"Delhi\", accountType: \"saving\" });\n\n// Comparison operators\nCustomer.find({ balance: { $gt: 10000 } });\nCustomer.find({ age: { $gte: 18 } });\nCustomer.find({ city: { $ne: \"Delhi\" } });\nCustomer.find({ balance: { $gte: 10000, $lte: 50000 } });\n\n// One field, many allowed values → $in\nCustomer.find({ city: { $in: [\"Delhi\", \"Mumbai\", \"Pune\"] } });\n\n// Any one condition can match → $or\nCustomer.find({\n  $or: [\n    { city: \"Delhi\" },\n    { balance: { $gt: 50000 } }\n  ]\n});"
        },
        {
          "id": "final-summary",
        "title": "Final First Thought Summary",
        "content": "MongoDB stores data as documents. Mongoose helps us create structure around those documents.\n\n**Core mental model:**\n\n- **Database** → stores data\n- **Collection** → group of documents\n- **Document** → actual data object\n- **BSON** → internal storage format\n- **_id** → unique document identity\n- **Schema** → rules/shape of document\n- **Model** → tool to perform database operations\n- **Connection** → reusable link between server and database",
        "code": "Client sends request\n        ↓\nExpress route receives request\n        ↓\nMongoose model runs query\n        ↓\nMongoDB stores/fetches data\n        ↓\nResponse goes back to client"
      }
      ],
      "quiz": [
        {
          "question": "Why does MongoDB store documents as BSON instead of JSON?",
          "options": [
            "Because BSON is binary and supports extra types like ObjectId, Date and Decimal128, so MongoDB understands each field's type",
            "Because BSON is easier for humans to read",
            "Because JSON cannot be sent over HTTP",
            "Because BSON files are always smaller than JSON"
          ],
          "answer": 0,
          "explanation": "JSON is good for humans and APIs; BSON is good for database storage and type understanding. BSON adds types such as ObjectId, Date, Int32, Int64, Decimal128, Binary data and Timestamp."
        },
        {
          "question": "Why should you call mongoose.connect() once at startup instead of inside every route?",
          "options": [
            "Because connecting per request re-authenticates every time and adds delay; connecting once lets all requests reuse the connection pool",
            "Because mongoose.connect() can only be called once ever",
            "Because routes cannot contain await",
            "Because it converts BSON to JSON"
          ],
          "answer": 0,
          "explanation": "Connecting on every request opens a DB connection and authenticates again each time — more delay, more load, bad performance. Connect once at startup and the driver's connection pool serves all requests."
        },
        {
          "question": "In Mongoose, what is the difference between a Schema and a Model?",
          "options": [
            "Schema is the blueprint that defines the shape/rules; Model is the tool used to perform database operations",
            "Schema runs queries; Model defines validation",
            "They are the same thing",
            "Schema is for MongoDB, Model is for Express"
          ],
          "answer": 0,
          "explanation": "Schema = blueprint, Model = tool to talk to the database, Document = actual stored data."
        },
        {
          "question": "Why must /customers/filter/balance be registered before /customers/:accountNumber?",
          "options": [
            "Because Express matches routes in order and would otherwise treat 'filter' as the :accountNumber value",
            "Because query params only work on the first route",
            "Because $gt requires a specific route",
            "Because dynamic routes are not allowed in Express"
          ],
          "answer": 0,
          "explanation": "Write specific routes before dynamic routes — otherwise Express may treat 'filter' as an accountNumber."
        }
      ],
      "youtubeUrl": "https://www.youtube.com/watch?v=ofme2o29ngU",
      "youtubeTitle": "MongoDB Crash Course — Web Dev Simplified",
      "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
      "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
    },
  {
    "id": 29,
    "slug": "mongodb-and-database-design",
    "track": "thunder",
    "day": 29,
    "title": "Mongoose CRUD Deep Dive",
    "subtitle": "Lecture 10 — full CRUD, filter/update operators, and operator syntax rules",
    "duration": "2 hrs",
    "createdOn": "13 Aug 2026",
    "status": "published",
    "notionUrl": "https://app.notion.com/p/Lecture-10-39f43ac5cab9808e8721ff357d027c9a?source=copy_link",
    "topics": [
      "create() & insertMany()",
      "find, findOne, findById",
      "select, sort, limit, pagination",
      "Filter operators — $gt/$in/$or/$regex",
      "Update operators — $set/$inc/$push/$pull",
      "Count & exists checks",
      "Operator syntax rules"
    ],
    "sections": [
      {
        "id": "base-model",
        "title": "Mongoose CRUD Notes — Base Model",
        "content": "**Day 29** follows **Lecture 10** ([Mongoose CRUD Notion notes](https://app.notion.com/p/Lecture-10-39f43ac5cab9808e8721ff357d027c9a?source=copy_link)) — a full pass over every Mongoose CRUD command, filter, and update operator, plus the [Lecture 10 assignment](https://app.notion.com/p/Assignment-Lecture-10-3a143ac5cab9804bb89feaa1b57a1bcc?source=copy_link).\n\nAssume we already have this model, with a customer document shaped like this:",
        "code": "import Customer from \"./models/customer.model.js\";\n\n// Customer document shape:\n{\n  name: \"Rohit\",\n  accountNumber: 101,\n  city: \"Dehradun\",\n  age: 25,\n  balance: 5000,\n  accountType: \"saving\"\n}"
      },
      {
        "id": "create-operations",
        "title": "1. CREATE Operations",
        "content": "**`create()`** inserts **one** document — a shortcut for creating and saving a document in one call, commonly used for a normal API flow (e.g. creating one customer from Postman).\n\n**`insertMany()`** inserts **multiple** documents at once — useful for dummy data, seed data, and bulk inserts (100 customers insert karna).",
        "code": "// 1.1 Create one document\nconst customer = await Customer.create({\n  name: \"Rohit\",\n  accountNumber: 101,\n  city: \"Dehradun\",\n  age: 25,\n  balance: 5000,\n  accountType: \"saving\"\n});\n\n// 1.2 Create many documents\nconst customers = await Customer.insertMany([\n  { name: \"Rohit\", accountNumber: 101, city: \"Dehradun\", age: 25, balance: 5000, accountType: \"saving\" },\n  { name: \"Aman\", accountNumber: 102, city: \"Delhi\", age: 22, balance: 10000, accountType: \"current\" }\n]);"
      },
      {
        "id": "read-operations",
        "title": "2. READ Operations",
        "content": "**`find()`** returns all documents; add a filter object for an exact match, or list multiple fields in the **same object** for an **AND** — `{ city: \"Delhi\", accountType: \"saving\" }` means city is Delhi **and** accountType is saving.\n\n**`findOne()`** returns the first match — use it when you expect only one result. **`findById()`** finds by MongoDB `_id` — use this when the frontend sends the `_id`.\n\n**`.select(\"name city balance\")`** returns only those fields (add `-_id` to also drop `_id`). **`.sort({ balance: 1 })`** is ascending, **`-1`** is descending. **`.limit(5)`** caps the result count — combine sort + limit for \"top 5 richest customers\".",
        "code": "// 2.1 Fetch all\nconst customers = await Customer.find();\n\n// 2.2 Exact match\nconst customers = await Customer.find({ city: \"Delhi\" });\n\n// 2.3 Multiple conditions (AND)\nconst customers = await Customer.find({ city: \"Delhi\", accountType: \"saving\" });\n\n// 2.4 Fetch one\nconst customer = await Customer.findOne({ accountNumber: 101 });\n\n// 2.5 Fetch by MongoDB _id\nconst customer = await Customer.findById(\"66a88f1b2c1234567890abcd\");\n\n// 2.6 Select fields only (drop _id too)\nconst customers = await Customer.find().select(\"name city balance -_id\");\n\n// 2.7 Sort — 1 ascending, -1 descending\nconst customers = await Customer.find().sort({ balance: -1 });\n\n// 2.8 + 2.9 Limit, and sort + limit together (top 5 richest)\nconst customers = await Customer.find().sort({ balance: -1 }).limit(5);"
      },
      {
        "id": "filter-operators",
        "title": "3. FILTER / QUERY Operators",
        "content": "Comparison operators — **`$gt`/`$gte`/`$lt`/`$lte`** — compare a field against a value (combine `$gte`+`$lte` on the same field for a range). **`$ne`** means not equal.\n\n**`$in`** matches **any** value from a list — use it when one field can have multiple possible values (e.g. city is Delhi OR Mumbai OR Dehradun). **`$or`** combines multiple **separate** conditions. **`$regex`** with `$options: \"i\"` does a case-insensitive search — `{ name: { $regex: \"ro\", $options: \"i\" } }` matches Rohit, rohan, and Aarohi.",
        "code": "// Comparisons\nawait Customer.find({ balance: { $gt: 10000 } });\nawait Customer.find({ balance: { $gte: 10000, $lte: 50000 } }); // between\nawait Customer.find({ city: { $ne: \"Delhi\" } });\n\n// $in — any value from a list\nawait Customer.find({ city: { $in: [\"Delhi\", \"Mumbai\", \"Dehradun\"] } });\n\n// $or — multiple separate conditions\nawait Customer.find({ $or: [{ city: \"Delhi\" }, { balance: { $gt: 50000 } }] });\n\n// $regex — case-insensitive search\nawait Customer.find({ name: { $regex: \"ro\", $options: \"i\" } });"
      },
      {
        "id": "update-operations",
        "title": "4. UPDATE Operations",
        "content": "**`updateOne()`** returns an **update result**, not the updated document. **`findOneAndUpdate()`** with **`{ new: true }`** returns the **updated** document — without `new: true`, Mongoose returns the **old** document by default.\n\n**`$inc`** increases (or, with a negative value, decreases) a number atomically — combine the filter's own balance check with `$inc` in one call (\"withdraw only if enough balance exists\") so the condition and the update happen together, rather than checking balance separately first. **`findByIdAndUpdate()`** is the same idea keyed by `_id`. **`updateMany()`** updates every matching document.",
        "code": "// 4.1 updateOne — returns a result, not the document\nawait Customer.updateOne({ accountNumber: 101 }, { $set: { city: \"Mumbai\" } });\n\n// 4.2 findOneAndUpdate — new: true returns the UPDATED document\nconst customer = await Customer.findOneAndUpdate(\n  { accountNumber: 101 }, { $set: { city: \"Mumbai\" } }, { new: true }\n);\n\n// 4.4 / 4.5 Increase / decrease balance with $inc\nawait Customer.findOneAndUpdate({ accountNumber: 101 }, { $inc: { balance: 2000 } }, { new: true });\nawait Customer.findOneAndUpdate({ accountNumber: 101 }, { $inc: { balance: -2000 } }, { new: true });\n\n// 4.6 Withdraw only if enough balance — condition + update together\nconst customer = await Customer.findOneAndUpdate(\n  { accountNumber: 101, balance: { $gte: 2000 } },\n  { $inc: { balance: -2000 } },\n  { new: true }\n);\n\n// 4.7 Update by _id, 4.8 Update many\nawait Customer.findByIdAndUpdate(\"66a88f1b2c1234567890abcd\", { $set: { city: \"Delhi\" } }, { new: true });\nawait Customer.updateMany({ city: \"Delhi\" }, { $set: { accountType: \"saving\" } });"
      },
      {
        "id": "delete-operations",
        "title": "5. DELETE Operations",
        "content": "**`deleteOne()`** removes one matching document and returns details like `acknowledged`/`deletedCount`. **`findOneAndDelete()`** returns the **deleted** document — use it when you want the deleted record in the response. **`findByIdAndDelete()`** deletes by `_id`.\n\n**`deleteMany()`** deletes every matching document — be careful: `Customer.deleteMany({})` with an **empty filter** deletes the **entire collection**.",
        "code": "await Customer.deleteOne({ accountNumber: 101 });\nconst customer = await Customer.findOneAndDelete({ accountNumber: 101 });\nawait Customer.findByIdAndDelete(\"66a88f1b2c1234567890abcd\");\nawait Customer.deleteMany({ city: \"Delhi\" });\n\n// ⚠️ Never do this accidentally — deletes ALL documents:\n// await Customer.deleteMany({});"
      },
      {
        "id": "count-and-exists",
        "title": "6 & 7. Count & Exists Checks",
        "content": "**`countDocuments()`** counts all documents, or matching documents when given a filter. **`exists()`** checks whether a matching document is present without fetching the whole document — handy for a quick `if (customerExists) { ... }` guard.",
        "code": "// Count\nconst count = await Customer.countDocuments();\nconst count = await Customer.countDocuments({ city: \"Delhi\" });\nconst count = await Customer.countDocuments({ balance: { $gt: 50000 } });\n\n// Exists\nconst customerExists = await Customer.exists({ accountNumber: 101 });\nif (customerExists) {\n  console.log(\"Customer already exists\");\n}"
      },
      {
        "id": "useful-query-patterns",
        "title": "8. Useful Query Patterns",
        "content": "**Dynamic filtering from query params** — build the filter object conditionally, only adding keys the client actually sent, so `/customers/search?city=Delhi&accountType=saving&minBalance=10000` becomes a precise `find()` call.\n\n**Pagination** — `.skip((page - 1) * limit).limit(limit)`: page 1 skips 0, page 2 skips `limit`, page 3 skips `2 × limit`, and so on.\n\n**`.lean()`** returns plain JavaScript objects instead of full Mongoose documents — use it for read-only responses, since full Mongoose documents carry extra weight (change tracking, validation, middleware, methods, getters/setters).",
        "code": "app.get(\"/customers/search\", async (req, res) => {\n  const { city, accountType, minBalance, maxBalance } = req.query;\n  const filter = {};\n\n  if (city) filter.city = city;\n  if (accountType) filter.accountType = accountType;\n  if (minBalance || maxBalance) {\n    filter.balance = {};\n    if (minBalance) filter.balance.$gte = Number(minBalance);\n    if (maxBalance) filter.balance.$lte = Number(maxBalance);\n  }\n\n  const customers = await Customer.find(filter);\n  res.json(customers);\n});\n\n// Pagination — page 1 -> skip 0, page 2 -> skip 10, page 3 -> skip 20 (limit 10)\nconst customers = await Customer.find().skip((page - 1) * limit).limit(limit);\n\n// Lean query — plain objects, no Mongoose document overhead\nconst customers = await Customer.find().lean();"
      },
      {
        "id": "beginner-rule",
        "title": "9 & 10. CRUD Summary & the Most Important Beginner Rule",
        "content": "Nearly every Mongoose CRUD command follows the same shape: **`Model.command(filter, update, options)`**.\n\n- The **first** object usually answers: **whom do you want to find?** (the filter/condition)\n- The **second** object usually answers: **what do you want to change?** (the update/modification)\n- The **third** object usually answers: **how should Mongoose behave?** (extra options, like `new: true`)\n\n**Best line to remember:** find = read, create = insert, update = change, delete = remove.",
        "code": "Customer.find({ city: \"Delhi\" })\nCustomer.findOne({ accountNumber: 101 })\nCustomer.findOneAndUpdate(\n  { accountNumber: 101 },\n  { $inc: { balance: 2000 } },\n  { new: true }\n)\nCustomer.findOneAndDelete({ accountNumber: 101 })"
      },
      {
        "id": "operator-syntax-rules",
        "title": "MongoDB / Mongoose Operator Syntax Rules",
        "content": "There are **3 types** of operators, and each has a different placement rule:\n\n1. **Field-level query operators** (`$gt`, `$gte`, `$lt`, `$lte`, `$ne`, `$in`, `$nin`) apply to **one field** — the operator goes **inside** that field: `{ balance: { $lte: 10000 } }`.\n2. **Logical query operators** (`$or`, `$and`) combine **multiple full conditions** — the operator goes **outside**, wrapping an array: `{ $or: [{ city: \"Delhi\" }, { balance: { $gt: 50000 } }] }`. (Note: plain multi-field objects already mean AND — `$and` is rarely needed since `{ city: \"Delhi\", accountType: \"saving\" }` already means city Delhi **and** accountType saving.)\n3. **Update operators** (`$set`, `$inc`, `$push`, `$pop`, `$pull`) perform an **action**, not a condition — the operator goes **outside**: `{ $set: { city: \"Mumbai\" } }`.\n\n**`$push`** adds a value to the end of an array; **`$pop`** removes the last element with `1` or the first with `-1`; **`$pull`** removes array entries matching a value or a sub-condition (e.g. remove all `transactions` where `type` is `\"withdraw\"`).\n\n**Final memory line:** filter me condition lagti hai, update me action hota hai. Agar operator ek field ko describe kar raha hai, to field ke andar aayega. Agar operator multiple conditions ko combine kar raha hai ya database me change kar raha hai, to bahar aayega.",
        "code": "// 1. Field-level — operator INSIDE the field\n{ balance: { $lte: 10000 } }\n{ age: { $gt: 18 } }\n\n// 2. Logical — operator OUTSIDE, wraps an array of conditions\n{ $or: [{ city: \"Delhi\" }, { accountType: \"current\" }] }\n{ $and: [{ city: \"Delhi\" }, { accountType: \"saving\" }] }\n\n// 3. Update — operator OUTSIDE, describes an action\n{ $set: { city: \"Mumbai\" } }\n{ $inc: { balance: -2000 } }\n{ $push: { transactions: { amount: 5000, type: \"deposit\" } } }\n{ $pop: { transactions: 1 } }   // remove last\n{ $pop: { transactions: -1 } }  // remove first\n{ $pull: { transactions: { type: \"withdraw\" } } }"
      }
    ],
    "quiz": [
      {
        "question": "Why does findOneAndUpdate need { new: true } to return the updated document?",
        "options": [
          "Without it, Mongoose returns the document as it was BEFORE the update by default",
          "new: true creates a brand new document instead of updating",
          "It has no effect on the return value",
          "It only affects deleteOne, not update"
        ],
        "answer": 0,
        "explanation": "By default findOneAndUpdate() returns the pre-update document. { new: true } tells Mongoose to return the document after the update is applied."
      },
      {
        "question": "In { balance: { $gte: 2000 } } combined with $inc inside the SAME findOneAndUpdate filter, why is this better than checking balance separately first?",
        "options": [
          "The balance condition and the balance update happen together in one atomic operation, avoiding a race condition between check and update",
          "It runs faster because it skips validation",
          "It is required syntax — Mongoose won't run $inc without a $gte filter",
          "It converts the update to a bulk operation"
        ],
        "answer": 0,
        "explanation": "Combining the filter condition (balance >= 2000) with the $inc update in one call means the check and the change happen atomically, rather than as two separate steps that could race with another request."
      },
      {
        "question": "Where does a field-level operator like $lte go, versus a logical operator like $or?",
        "options": [
          "$lte goes INSIDE the field it applies to; $or goes OUTSIDE, wrapping an array of full conditions",
          "Both always go outside the object",
          "Both always go inside the field",
          "$or goes inside a field; $lte wraps an array"
        ],
        "answer": 0,
        "explanation": "Field-level operators describe one field's condition, so they nest inside that field: { balance: { $lte: 10000 } }. Logical operators combine multiple full conditions, so they wrap an array from the outside: { $or: [...] }."
      },
      {
        "question": "What is the danger of calling Customer.deleteMany({}) with an empty filter object?",
        "options": [
          "It deletes every document in the entire collection",
          "It does nothing since the filter is empty",
          "It throws a validation error",
          "It only deletes the first document"
        ],
        "answer": 0,
        "explanation": "An empty filter object matches every document, so deleteMany({}) wipes the whole collection — a common accidental-deletion trap."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=ofme2o29ngU",
    "youtubeTitle": "MongoDB Crash Course — freeCodeCamp",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 30,
    "slug": "mongoose-odm",
    "track": "thunder",
    "day": 30,
    "title": "Cryptography & Security Concepts",
    "subtitle": "Lecture 11 — encoding, encryption, hashing, HMAC, signatures, HTTPS, session ID & JWT",
    "duration": "2 hrs 30 mins",
    "createdOn": "14 Aug 2026",
    "status": "published",
    "notionUrl": "https://app.notion.com/p/Lecture-11-Cryptography-and-Security-Concepts-3a3a9af81c98805ab24dfeb8690ee385?source=copy_link",
    "topics": [
      "4 security goals",
      "Encoding vs encryption vs hashing",
      "Symmetric vs asymmetric encryption",
      "Hashing, salt & pepper",
      "HMAC & digital signatures",
      "TLS certificates & HTTPS",
      "Session ID vs JWT"
    ],
    "sections": [
      {
        "id": "why-security-is-needed",
        "title": "1. Why Security Is Needed",
        "content": "**Day 30** follows **Lecture 11** ([Cryptography and Security Concepts Notion notes](https://app.notion.com/p/Lecture-11-Cryptography-and-Security-Concepts-3a3a9af81c98805ab24dfeb8690ee385?source=copy_link)).\n\nWhen data travels between systems, four questions matter — and they map to **4 security goals**:\n\n- **Confidentiality** — only the intended person can read the data (tool: encryption).\n- **Integrity** — data should not be changed silently (tool: hashing, HMAC, signature).\n- **Authentication** — prove the identity of user/server/sender (tool: password, certificate, JWT, signature).\n- **Non-repudiation** — the sender cannot deny the action later (tool: digital signature).\n\n**Simple mental model:** security is needed because data can be **read, changed, faked, or denied**.",
        "code": "Original message: \"Transfer ₹1000 to Rahul\"\n\n// Someone reads it        -> confidentiality broken\n// Someone changes the sum -> integrity broken\n// Someone pretends to be the sender -> authentication broken\n// Sender denies later     -> non-repudiation issue"
      },
      {
        "id": "encoding-vs-encryption-vs-hashing",
        "title": "2. Encoding vs Encryption vs Hashing",
        "content": "Beginners often confuse these three:\n\n- **Encoding** — changes format, is reversible, needs **no key** (Base64, URL encoding). **Base64 is not security — anyone can decode it.**\n- **Encryption** — hides data, is reversible, **needs a key** (AES, RSA).\n- **Hashing** — creates a fingerprint, is **not reversible**, needs no key (SHA-256, bcrypt).\n\n**Final mental model:** Encoding = format change. Encryption = secret locking. Hashing = fingerprint. Or: encoding is for systems, encryption is for secrecy, hashing is for verification.",
        "code": "// Encoding (Base64) — reversible, no key\nHello -> SGVsbG8=\n\n// Encryption — reversible, needs a key\nHello Rohit -> A9#xP02!kLm\n\n// Hashing — one-way, no key\nHello -> 185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969"
      },
      {
        "id": "encryption-and-decryption",
        "title": "3. Encryption and Decryption",
        "content": "**Plain text** is original readable data; **cipher text** is the encrypted, unreadable form. **Encryption** converts plain text → cipher text; **decryption** reverses it. A **key** controls both directions: `Plain Text + Algorithm + Key = Cipher Text`.\n\n**Important principle:** modern cryptography does not depend on hiding the algorithm — it depends on keeping the **key** secret. The attacker may know the algorithm (e.g. that AES is used), but should never know the key.",
        "code": "// Simple Caesar Cipher demo — shift each letter by key=3\nMessage: HELLO\nKey: 3\n\nH -> K,  E -> H,  L -> O,  L -> O,  O -> R\n\nEncrypted: HELLO -> KHOOR\nDecrypt by shifting back by 3: KHOOR -> HELLO\n\n// Not secure today, but shows the basic idea of key-controlled lock/unlock"
      },
      {
        "id": "symmetric-encryption",
        "title": "4. Symmetric Encryption",
        "content": "**Symmetric encryption** uses the **same key** for encryption and decryption — like a box locked and unlocked with one key. Common algorithms: **AES** (modern, widely used — focus here as a beginner), DES/3DES (old, avoid), ChaCha20 (modern, fast).\n\n**Why it's used:** it's fast and good for large data — files, videos, database records, disk encryption, and the actual HTTPS data transfer.\n\n**Main problem — key distribution:** both sides need the same secret key, but sharing that key safely is hard. If sent openly, an attacker can steal it. This problem is what leads to **asymmetric encryption**.",
        "code": "Plain Text + Secret Key -> Cipher Text\nCipher Text + Same Secret Key -> Plain Text\n\n// Example\nMessage: \"I love JavaScript\"\nSecret key: \"mySecret123\"\nEncrypted: \"xA91@pLz#78Qk\""
      },
      {
        "id": "asymmetric-encryption",
        "title": "5. Asymmetric Encryption",
        "content": "**Asymmetric encryption** uses **two mathematically-connected keys**: a **public key** (share with anyone) and a **private key** (keep secret) — the private key cannot practically be derived from the public key.\n\n**Direction matters:** encrypt with the **receiver's public key**, decrypt with the **receiver's private key**. Real-life analogy: the public key is a mailbox slot anyone can drop a letter into; the private key is the key that opens the mailbox.\n\nCommon algorithms: **RSA, ECC**, Diffie-Hellman, ECDH. Used for HTTPS key exchange, digital signatures, SSH, certificates, and JWT with RS256.\n\n**HTTPS uses both:** asymmetric cryptography handles trust setup / key exchange (slower), while symmetric encryption handles the actual fast data transfer.",
        "code": "Message + Receiver's Public Key  -> Cipher Text\nCipher Text + Receiver's Private Key -> Message\n\n// Symmetric vs Asymmetric\n// Keys:  one shared key        vs  public + private key pair\n// Speed: fast                  vs  slower\n// Best:  large data            vs  key exchange, identity, signatures\n// e.g.:  AES                   vs  RSA, ECC"
      },
      {
        "id": "hashing",
        "title": "6. Hashing",
        "content": "**Hashing** creates a fixed-size fingerprint of data — `Input → Hash Function → Hash Value` (also called a digest). A good hash function is:\n\n- **Deterministic** — same input always gives the same hash.\n- **Fixed-size output** — \"Hi\" and a 5 GB video both produce a hash of the same length (SHA-256 → 256 bits).\n- **One-way** — you cannot practically reverse a hash back to the input.\n- **Avalanche effect** — a tiny input change (`hello` → `Hello`) produces a completely different hash.\n- **Collision-resistant** — two different inputs producing the same hash should be practically impossible to find (even though, in theory, collisions can exist since infinite inputs map to fixed-size outputs).\n\n**Password verification with hashing:** the server stores the password's **hash**, never the original password. On login, it hashes the entered password and compares hashes — no decryption ever happens. **Do not use plain SHA-256 for passwords** — use bcrypt, Argon2, scrypt, or PBKDF2 instead (MD5 and SHA-1 are broken/weak, avoid for security).",
        "code": "Input -> Hash Function -> Hash\n\"Hello\" -> \"185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969\"\n\n// Password verification — no decryption, only re-hash + compare\nStored:  passwordHash = hash(\"myPassword123\")\nLogin:   hash(enteredPassword) === passwordHash ?"
      },
      {
        "id": "password-hashing-salt-pepper",
        "title": "7. Password Hashing, Salt & Pepper",
        "content": "Normal hashing is fast; **password hashing should be slow** — otherwise attackers can try millions/billions of guesses quickly. Plain hashing also has a problem: identical passwords produce identical hashes, which attackers exploit with precomputed **rainbow tables**.\n\n**Salt** — a random value added to the password before hashing, so identical passwords produce different hashes. Salt is stored **alongside** the hash and is **not secret**.\n\n**Pepper** — an additional **secret** value stored separately (e.g. environment variables), not in the database.\n\nUse intentionally slow algorithms: **bcrypt, Argon2, scrypt, PBKDF2**.",
        "code": "password + random salt -> password hash\n\n// User 1: password123 + saltA -> hash1\n// User 2: password123 + saltB -> hash2\n// Same password, different hashes because the salt differs\n\npassword + salt + pepper -> hash   // pepper is secret, kept outside the DB"
      },
      {
        "id": "data-integrity",
        "title": "8. Data Integrity",
        "content": "**Data integrity** means the receiver should be able to detect whether data was silently modified. **Confidentiality** asks **can someone read my data?** (tool: encryption); **integrity** asks **can someone change my data silently?** (tool: hash, HMAC, signature).\n\nSender hashes the data and sends both; receiver re-hashes the received data and compares. A mismatch means the data was changed.\n\n**Limitation of a plain hash:** an attacker can change **both** the data and its hash together, and the receiver's recomputed hash will match the (also-forged) hash it received. A plain hash catches **accidental** changes; it is **not enough** against a malicious attacker — that needs **HMAC or a digital signature**.",
        "code": "Sender:   Data: amount=1000, Hash: hash(1000) = ABC123\nReceiver: hash(received data) == ABC123 ?  -> matches, unchanged\n\n// Malicious tamper — attacker changes BOTH data and hash together\nAttacker sends: Data: amount=9000, Hash: hash(9000) = XYZ999\nReceiver:       hash(9000) == XYZ999 ?  -> matches! plain hash alone is fooled"
      },
      {
        "id": "hmac",
        "title": "9. HMAC",
        "content": "**HMAC = Hash-based Message Authentication Code** — instead of `hash(data)`, it's `HMAC(data, secretKey)`. A plain hash can be recalculated by anyone; HMAC **needs the secret key**, so an attacker without it cannot forge a valid HMAC.\n\n**What it provides:** integrity **+** authentication via a shared secret — it proves the data wasn't changed **and** that the sender likely knew the shared secret.\n\n**Real backend example — payment webhooks:** a payment gateway sends `payment_id`, `amount`, `status`, and a `signature`. Your backend recomputes the HMAC with the shared secret key; if it matches, the webhook is trusted — this protects against fake payment-success requests.",
        "code": "HMAC(amount=1000, secretKey=\"mySecret\") = PQR555\n\n// Sender sends: Data + HMAC\n// Receiver (same secret): HMAC(receivedData, \"mySecret\") == PQR555 ?\n\n// Plain Hash: uses only data, anyone can calculate, good for accidental changes\n// HMAC:       uses data + secret, only secret holder can calculate, good for tampering"
      },
      {
        "id": "digital-signature",
        "title": "10. Digital Signature",
        "content": "A **digital signature** proves three things at once: **authentication** (sender is genuine), **integrity** (data wasn't changed), and **non-repudiation** (sender cannot deny later). It uses public/private keys, but in the **opposite direction** from encryption: the **sender signs with their private key**, and the **receiver verifies with the sender's public key**.\n\nUsually you don't sign the whole message — you sign its **hash**: `Message → Hash → Hash + Sender's Private Key → Signature`. If an attacker changes the message, the hash changes, so the old signature no longer verifies. If an attacker tries to forge a new signature, they'd need the sender's private key, which they don't have.\n\n**Non-repudiation caveat:** this only holds if the sender's private key was never stolen. Used for HTTPS certificates, software/Git commit signing, legal documents, blockchain transactions, and JWT with RS256.",
        "code": "// Signing\nhash(\"Pay ₹1000 to user 25\") = H123\nSignature = sign(H123, Rohit's private key) = S987\n\n// Verifying\nhash(receivedMessage) == H123 ?\nverify(S987, Rohit's public key) == valid ?\n\n// Digital Signature vs HMAC\n// Key type:        private/public pair   vs  shared secret\n// Who can verify:   anyone with public key vs only same-secret holder\n// Non-repudiation:  yes                   vs  weak/no"
      },
      {
        "id": "ssl-tls-https",
        "title": "11. SSL, TLS, and HTTPS",
        "content": "**Correct terminology:** SSL is old/deprecated; **TLS** is the modern protocol; **HTTPS = HTTP + TLS**. People still say \"SSL certificate\" but usually mean a TLS certificate.\n\nHTTPS provides **confidentiality** (encrypted data), **integrity** (can't be silently modified), and **server authentication** (browser verifies the real domain). It uses **both** cryptography types: asymmetric for trust setup/key exchange, symmetric for the actual fast data transfer.\n\n**Important limitation:** HTTPS proves a **secure connection to a domain**, not that the site is trustworthy — `https://fake-gift-card-scam.com` can have perfectly valid HTTPS. It does not mean the website is honest, bug-free, or won't scam you.",
        "code": "// HTTP vs HTTPS\n// Encrypted:      No   vs  Yes\n// Integrity:       No strong protection  vs  Yes\n// Server auth:     No   vs  Yes\n// URL:             http://  vs  https://\n// Default port:    80   vs  443\n// Certificate:     No   vs  Yes"
      },
      {
        "id": "how-tls-certificate-is-issued",
        "title": "12. How a TLS Certificate Is Issued",
        "content": "**Correction:** TLS is the protocol, not something \"issued\" — a **certificate** is issued for a specific **domain/server**.\n\n**The flow:**\n1. The domain owner generates a **public/private key pair** — the private key **never leaves the server** / is never sent to the CA.\n2. The owner creates a **CSR (Certificate Signing Request)** containing the domain name and the server's public key (never the private key).\n3. The **Certificate Authority (CA)** — e.g. Let's Encrypt, DigiCert — verifies domain ownership, typically via a **DNS TXT record** or by hosting a file at a well-known path.\n4. The CA **issues the certificate**, containing the domain name, public key, issuer, validity dates — and signs it with the **CA's own private key**, vouching \"this public key belongs to this domain.\"\n5. The server **installs** the certificate + private key (in Nginx, Apache, a load balancer, Cloudflare, Vercel, Netlify, AWS ALB, etc.).\n\nBrowsers trust the certificate because they trust the CA that signed it.",
        "code": "You generate a public/private key pair.\nYou submit the public key to the CA inside a CSR.\nCA verifies you own the domain (DNS or HTTP challenge).\nCA signs the certificate: \"this public key belongs to this domain.\"\nYou install the certificate + private key on your server.\nBrowser trusts the certificate because it trusts the CA."
      },
      {
        "id": "certificate-fingerprint-and-browser-verification",
        "title": "13 & 14. Certificate Fingerprint & Browser Verification",
        "content": "A **certificate fingerprint** is not the certificate itself — it's a **SHA-256 hash of the full certificate**, used as a compact way to identify it. A **public key fingerprint** is likewise a hash of just the public key. The real certificate contains much more: domain name, actual public key, issuer, validity dates, signature algorithm, and the CA's digital signature.\n\n**When a browser connects over HTTPS, it checks:**\n1. **Domain name** — the certificate must match the domain being visited.\n2. **Validity date** — rejects/warns if expired.\n3. **Issuer & CA signature** — verifies the CA's digital signature using the CA's public key (root CAs are pre-trusted by the OS/browser).\n4. **Certificate chain** — website cert → intermediate CA → root CA, each link verified.\n5. **Private key ownership** — during the TLS handshake, the server proves it holds the matching private key **without ever sending it**.\n\n**One-line summary:** the browser verifies the full certificate using the CA's public key, checks domain and expiry, then confirms the server owns the matching private key — only then does HTTPS communication start.",
        "code": "Certificate = full ID card\nCertificate fingerprint = hash/id number of that ID card\nPublic key fingerprint = hash of just the public key\n\n// Chain of trust\nRoot CA -> Intermediate CA -> Website Certificate"
      },
      {
        "id": "session-id",
        "title": "15. Session ID",
        "content": "HTTP is **stateless** — every request is independent, so the server needs a way to remember \"this request is from an already-logged-in user.\"\n\n**Session-based auth flow:** user logs in → server verifies credentials → server generates a random **session ID** → server stores `sessionId → userId` (in memory/Redis/DB) → server sends the session ID to the browser via a cookie (`Set-Cookie: sid=...`) → future requests automatically include that cookie → server looks up the session store to identify the user.\n\n**Mental model:** like a hotel room card — the card number (204) doesn't contain your details, but the hotel's system knows who's in room 204. **Logout is simple:** delete the session server-side, and that session ID becomes instantly invalid.",
        "code": "sid = \"a8x91kLmPq22\"\nSession store: { \"a8x91kLmPq22\": { userId: 101 } }\n\nSet-Cookie: sid=a8x91kLmPq22        // server -> browser, on login\nCookie: sid=a8x91kLmPq22            // browser -> server, on every later request"
      },
      {
        "id": "jwt-token",
        "title": "16. JWT Token",
        "content": "**JWT = JSON Web Token.** Unlike a session ID, a JWT carries the user's information **inside the token itself**, as three dot-separated parts: **`header.payload.signature`**.\n\n- **Header** — token type and signing algorithm (e.g. `HS256`).\n- **Payload** — the claims/data (`userId`, `role`, `exp`).\n- **Signature** — `sign(header + payload, secretKey)`, proving the token wasn't tampered with.\n\n**Important:** the JWT payload is only **Base64URL-encoded, not encrypted** — anyone can decode and read it. What they **can't** do is modify it undetected, since that breaks the signature.\n\n**Never put sensitive data in the payload** (passwords, card numbers) — only non-secret claims like `userId`, `role`, `exp`.",
        "code": "// header.payload.signature\n{ \"alg\": \"HS256\", \"typ\": \"JWT\" }              // header\n{ \"userId\": 101, \"role\": \"user\", \"exp\": 1780000000 }  // payload (readable, not secret)\nsignature = sign(header + payload, secretKey)\n\n// Client sends the token on every request:\nAuthorization: Bearer <jwt>"
      },
      {
        "id": "session-id-vs-jwt",
        "title": "17 & 18. Session ID vs JWT, and Securing Both",
        "content": "**Session ID** — data lives on the **server**; client holds only a meaningless random ID; logout is a simple server-side delete; needs a server lookup on every request.\n\n**JWT** — data lives **inside the token**; the client holds a signed, readable payload; logout is **harder** (a valid JWT keeps working until it expires, unless you add short expiry, a blacklist, token versioning, or refresh-token rotation); no server lookup needed to trust the payload.\n\n**Simple line:** session ID is server-side login memory; JWT is signed, client-carried login proof. Session cookies are common for normal web apps; JWT is common for APIs/mobile/microservices, and should be **short-lived**.\n\n**Both are dangerous if stolen** — protect them with: HTTPS, **HttpOnly** cookies (JS can't read them — blocks XSS token theft), **Secure** cookies (HTTPS-only transport), **SameSite** cookies (CSRF protection), short expiry, and refresh-token rotation.",
        "code": "// Session ID              vs  JWT\n// Data stored: on server   vs  inside token\n// Server lookup: usually yes vs not always\n// Logout: easy              vs  harder (needs blacklist/short expiry)\n// Token size: small         vs  larger\n// Readability: meaningless  vs  payload readable"
      },
      {
        "id": "jwt-and-data-integrity",
        "title": "19. JWT and Data Integrity",
        "content": "JWT connects directly back to the hashing/signature concepts above: the payload is Base64URL-**encoded**, not encrypted. An attacker who decodes `{ \"userId\": 101, \"role\": \"user\" }` and changes it to `{ \"userId\": 101, \"role\": \"admin\" }` breaks the signature the moment they re-encode it — the server's signature check rejects the tampered token.\n\n**The key line:** JWT is **signed**, protecting integrity — it is **not encrypted** by default, so it protects **against modification**, not **against reading**.",
        "code": "// Attacker decodes and edits the payload:\n{ \"userId\": 101, \"role\": \"admin\" }   // tampered\n\n// Server recomputes the signature from the (tampered) header+payload\n// It won't match the original signature -> token rejected"
      },
      {
        "id": "final-summary",
        "title": "20. Complete Final Summary",
        "content": "- **Encoding** — format change, not security (Base64).\n- **Encryption** — hides data, reversible with a key, for confidentiality.\n- **Symmetric encryption** — one shared key, fast, used for large data; the problem is key sharing.\n- **Asymmetric encryption** — public key encrypts / private key decrypts; used for key exchange, identity, signatures.\n- **Hashing** — fixed-size, one-way fingerprint, used for verification, not recovery.\n- **Password hashing** — always salted, always slow (bcrypt/Argon2/scrypt/PBKDF2), never plain SHA-256.\n- **Data integrity** — detecting silent change; a plain hash catches accidents, HMAC/signature catch malicious tampering.\n- **HMAC** — hash + secret key, for webhooks/API verification.\n- **Digital signature** — private key signs, public key verifies; proves authentication + integrity + non-repudiation.\n- **TLS certificate** — binds a domain to a server's public key, signed by a CA.\n- **HTTPS** — HTTP + TLS: encryption + integrity + server authentication.\n- **Session ID** — random client-held ID, real session data lives server-side.\n- **JWT** — signed token carrying readable claims; the signature (not encryption) prevents tampering."
      }
    ],
    "quiz": [
      {
        "question": "What is the key difference between encoding and encryption?",
        "options": [
          "Encoding changes format and needs no key (e.g. Base64, reversible by anyone); encryption hides data and requires a key to reverse",
          "Encoding and encryption are the same thing",
          "Encryption is reversible without a key, encoding is not",
          "Encoding is only used for passwords"
        ],
        "answer": 0,
        "explanation": "Encoding (like Base64) is a reversible format change that anyone can undo — it is not security. Encryption hides data and requires a secret key to reverse it."
      },
      {
        "question": "Why is symmetric encryption's main weakness described as the 'key distribution problem'?",
        "options": [
          "Both sides need the exact same secret key, and safely sharing that key without it being intercepted is difficult",
          "Symmetric encryption cannot encrypt large files",
          "AES is too slow for real use",
          "Symmetric keys expire after one use"
        ],
        "answer": 0,
        "explanation": "Symmetric encryption requires both parties to hold the identical secret key. If that key is transmitted openly to share it, an attacker can steal it — this is the key distribution problem that asymmetric encryption solves."
      },
      {
        "question": "Why can't a plain hash alone protect against a malicious attacker who tampers with data in transit?",
        "options": [
          "The attacker can recompute a new hash for the changed data and send both together, so the receiver's hash check still matches",
          "Hashes are reversible so the attacker can just decrypt them",
          "Plain hashes only work for text, not for numbers",
          "A plain hash always produces the same output regardless of input"
        ],
        "answer": 0,
        "explanation": "A plain hash only detects if the hash the receiver computes differs from the one they were sent. If the attacker changes both the data AND recomputes a matching hash, verification passes. HMAC (secret key) or a digital signature (private key) closes this gap since the attacker doesn't have the secret/private key."
      },
      {
        "question": "Why is a JWT's payload readable by anyone who intercepts it, even though the token is considered secure against tampering?",
        "options": [
          "JWT payloads are only Base64URL-encoded (not encrypted); the signature detects tampering but does not hide the content",
          "JWT payloads are always encrypted with AES by default",
          "Only the server can decode a JWT payload",
          "JWT tokens expire immediately after being read once"
        ],
        "answer": 0,
        "explanation": "A JWT is signed, not encrypted, by default. Anyone can decode the payload and read it, but changing it invalidates the signature — so JWT protects integrity, not confidentiality. Sensitive data should never be placed in a JWT payload."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=kb_scuDUHls",
    "youtubeTitle": "Cryptography for Beginners — SHA-256, AES, RSA, Passwords — freeCodeCamp",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 31,
    "slug": "authentication-with-jwt",
    "track": "thunder",
    "day": 31,
    "title": "TLS and Authentication",
    "subtitle": "Lecture 12 — Diffie-Hellman key exchange, TLS handshake, JWT tokens, cookies, tracking & password storage",
    "duration": "2 hrs 30 mins",
    "createdOn": "15 Aug 2026",
    "status": "published",
    "notionUrl": "https://app.notion.com/p/Lecture12-TLS-and-Authentication-3a6a9af81c9880faa24cc643b20c3b8f?source=copy_link",
    "topics": [
      "Diffie-Hellman key exchange",
      "TLS handshake & certificates",
      "Forward secrecy",
      "Access & refresh tokens",
      "Cookies & tracking",
      "Password storage with bcrypt"
    ],
    "sections": [
      {
        "id": "why-we-need-tls",
        "title": "1. Why We Need TLS",
        "content": "**Day 31** follows **Lecture 12** ([TLS and Authentication Notion notes](https://app.notion.com/p/Lecture12-TLS-and-Authentication-3a6a9af81c9880faa24cc643b20c3b8f?source=copy_link)) — two linked note sets: [TLS, SSL & Diffie-Hellman](https://app.notion.com/p/TLS-SSL-and-Diffie-Hellman-Notes-3a6a9af81c98808e9dc2ca04f6cb2749) and [Web Authentication & Tracking](https://app.notion.com/p/Web-Authentication-and-Tracking-Notes-3a6a9af81c98804096b6e56264814dff).\n\nA request from a client to a bank server travels through Wi-Fi, an ISP, and multiple routers — the internet is **not automatically secure**. An attacker anywhere along that path could try to solve three problems in their favour:\n\n- **Confidentiality** — can the attacker read the message?\n- **Integrity** — can the attacker silently change it (e.g. \"Transfer ₹5,000 to Amit\" → \"...to Hacker\")?\n- **Authentication** — is the client really talking to `bank.com`, or a hacker pretending to be it?\n\n**TLS (Transport Layer Security)** protects communication between two systems and provides all three. **SSL (Secure Sockets Layer)** was the older protocol TLS replaced — people still say \"SSL certificate\" but usually mean TLS. **HTTPS = HTTP + TLS**: the HTTP message is encrypted by TLS before it travels, and decrypted by TLS at the other end — it is not a separate protocol."
      },
      {
        "id": "the-key-sharing-problem",
        "title": "2. The Key-Sharing Problem",
        "content": "**First idea:** client and server share one secret key (**symmetric encryption**, e.g. AES/ChaCha20) — fast, good for real traffic, but both sides need the **same** key. If the client just **sends** the key, a hacker reading the wire gets it too.\n\n**Old RSA-style fix:** the client generates a temporary shared secret, encrypts it with the **server's public key**, and sends it — only the server's **private key** can decrypt it.\n\n**The hidden problem:** if a hacker **records** the encrypted traffic today and the server's permanent private key **leaks years later**, every old recorded session becomes decryptable — because all those session keys were encrypted under the **same** long-term public key. We want every connection to get a **fresh** secret that doesn't depend on the server's permanent key — which is exactly what **Diffie-Hellman** (or its elliptic-curve form, **ECDHE**) provides.",
        "code": "// Old RSA key exchange — vulnerable to future key leaks\nclient creates sharedSecret\nencryptedSecret = Encrypt(sharedSecret, serverPublicKey)\nserver: sharedSecret = Decrypt(encryptedSecret, serverPrivateKey)\n\n// If serverPrivateKey leaks later -> every past encryptedSecret is now readable"
      },
      {
        "id": "diffie-hellman-example",
        "title": "3. Diffie-Hellman — Worked Example",
        "content": "Client and server want the **same secret** without ever sending it. Each keeps a **private number**; they only exchange **calculated public values**.\n\nBoth publicly agree on `P = 23` (modulus) and `G = 5` (generator) — not secret, a hacker can know these too.\n\n- **Client** picks private `6` (never sent), computes public value `5^6 mod 23 = 8`, sends `8`.\n- **Server** picks private `15` (never sent), computes public value `5^15 mod 23 = 19`, sends `19`.\n\nEach then combines the **other side's public value** with their **own private number** — and both land on the same shared secret, `2`, which was never transmitted.",
        "code": "P = 23, G = 5   (public, a hacker can see these)\n\nClient: private=6,  public = 5^6  mod 23 = 8   -> sends 8\nServer: private=15, public = 5^15 mod 23 = 19  -> sends 19\n\nClient computes: 19^6  mod 23 = 2\nServer computes: 8^15  mod 23 = 2\n\n// Both arrive at shared secret = 2, without ever sending \"2\""
      },
      {
        "id": "diffie-hellman-why-it-works",
        "title": "4. Why Both Sides Get the Same Answer",
        "content": "The trick is the exponent rule **`(a^b)^c = a^(b×c)`**. The client computes `19^6 mod 23`, but `19 = 5^15 mod 23`, so that's really `(5^15)^6 = 5^(15×6)`. The server computes `8^15 mod 23`, but `8 = 5^6 mod 23`, so that's `(5^6)^15 = 5^(6×15)`. Since `15×6 = 6×15`, both sides compute the exact same value.\n\n**Why can't a hacker do the same math?** They see `P`, `G`, and both public values (`8` and `19`), but to recover a private number they'd need to solve `5^x mod 23 = 8` — in this toy example small enough to brute-force, but with real Diffie-Hellman's enormous numbers this (the **discrete logarithm problem**) is practically impossible."
      },
      {
        "id": "diffie-hellman-mitm",
        "title": "5. Diffie-Hellman Isn't Enough — Man-in-the-Middle",
        "content": "Diffie-Hellman creates a shared secret, but it **doesn't prove who you exchanged it with**. If a hacker sits between client and server, intercepting and replacing each side's public value, they end up with **two separate shared secrets** — one with the client, one with the server — and can decrypt, read, modify, and re-encrypt everything passing through. This is a **man-in-the-middle attack**.\n\nDiffie-Hellman needs to be paired with **certificates and digital signatures** to prove server identity."
      },
      {
        "id": "certificates-and-trust",
        "title": "6. Server Certificates & the Trust Store",
        "content": "When connecting to `bank.com`, the server sends a **certificate** containing the domain name, its public key, expiry date, issuer, and a digital signature — asserting \"this public key belongs to `bank.com`.\"\n\nAnyone could type up a fake document claiming the same thing, so certificates are signed by a **Certificate Authority (CA)** that verifies the requester actually controls the domain. Browsers and operating systems ship with a **trust store** — a pre-loaded list of trusted CA public keys — so when a certificate arrives, the browser can verify the CA's signature on it without any prior interaction with that specific server."
      },
      {
        "id": "digital-signature-and-dh-protection",
        "title": "7. Digital Signatures & Protecting the DH Key",
        "content": "A **digital signature** proves who signed data and whether it changed — signed with a **private key**, verified with the matching **public key**. It's the opposite direction from encryption: encryption provides secrecy, signatures provide **authenticity and integrity**.\n\nTLS uses this to protect the Diffie-Hellman exchange itself: the server generates a **temporary** DH key pair, sends its temporary public value openly, but also **signs** that handshake data with its **permanent certificate private key**. The browser verifies the server's certificate, extracts the trusted public key from it, and uses that to verify the signature on the temporary DH value — proving it really came from the real server. A hacker can generate their own DH values, but cannot forge a valid signature without the server's private key.",
        "code": "signature = Sign(serverTemporaryPublicValue, serverPrivateKey)\n\n// Browser receives: temp public value + signature + certificate\n// Browser verifies certificate -> gets trusted public key -> verifies signature\n// If valid: this temporary DH value genuinely came from the real server"
      },
      {
        "id": "why-tls-needs-more-than-dh",
        "title": "8. Why TLS Needs More Than Just Diffie-Hellman",
        "content": "Diffie-Hellman only solves *\"create a shared secret without sending it.\"* TLS also needs to answer: **who** are we creating this secret with? Was the handshake or the encrypted data modified? Which algorithms and key-derivation should be used?\n\nTLS is the combination of several mechanisms working together: **certificate** (proves server identity) → **digital signature** (proves the temporary key came from that server) → **Diffie-Hellman** (creates the fresh shared secret) → **symmetric encryption** (encrypts the actual data) → **authentication tag** (detects tampering)."
      },
      {
        "id": "client-proof-and-key-types",
        "title": "9. Client Proof, Permanent vs Temporary Keys",
        "content": "The client's DH public value is sent **openly** too — a public value is designed to be public. TLS doesn't need to know the client is **specifically** Rohit — only that the client genuinely holds the private value matching its public value. Both sides prove this with a **proof** computed as `HMAC(sharedSecret, handshakeData)` — the client sends only the **proof**, never the shared secret itself, and the server independently computes its own expected proof to compare.\n\n**Three different key types**, easy to conflate: the **permanent certificate key pair** proves identity and signs handshake data; the **temporary Diffie-Hellman key pair** creates a fresh shared secret and is discarded after the connection; **session encryption keys**, derived from the DH shared secret via a key-derivation function, actually encrypt the HTTP traffic (with separate client→server and server→client keys — safer than one key for everything).",
        "code": "proof = HMAC(sharedSecret, handshakeData)\n// Client sends: proof (never the sharedSecret itself)\n// Server: expectedProof = HMAC(sharedSecret, handshakeData); compare"
      },
      {
        "id": "integrity-and-handshake",
        "title": "10. Integrity of Encrypted Data & the TLS Handshake",
        "content": "Encryption alone hides data, but an attacker could still flip bits in the ciphertext. Modern TLS uses **authenticated encryption** (e.g. AES-GCM) — every encrypted message carries an **authentication tag**; if even one bit changes, tag verification fails and the message is rejected. This is why TLS follows a **hybrid** approach: asymmetric crypto (certificate + signature + DH) for the handshake, fast symmetric crypto for the actual data.\n\n**Simplified handshake:** `ClientHello` (versions, algorithms, client temp public value) → `ServerHello` + certificate + signature + server proof → client verifies certificate/domain/signature/temp value, sends its own proof → both sides now share the same derived session keys → encrypted HTTP begins. The browser checks the certificate is CA-signed, valid for this domain, not expired, and chains up to a trusted root.",
        "code": "ClientHello  -> versions, algorithms, client temp public value\nServerHello  <- selected version/algorithm, server temp public value\nCertificate  <- domain, public key, issuer, validity, CA signature\nSignature    <- proves the temp public value came from the real server\nClient verifies cert + domain + signature\nBoth sides derive the same session keys\nEncrypted HTTP communication begins"
      },
      {
        "id": "mtls-selfsigned-forward-secrecy",
        "title": "11. Mutual TLS, Self-Signed Certificates & Forward Secrecy",
        "content": "**Mutual TLS (mTLS)** — both sides present certificates; the client verifies the server's and the server verifies the client's. Common for service-to-service calls, internal systems, and highly secure APIs.\n\nA **self-signed certificate** is signed by its own key rather than a CA — encryption still works, but browsers can't automatically trust the identity (fine for local dev/testing, not for production).\n\n**Forward secrecy:** because modern TLS uses **temporary** DH values that get discarded after the connection ends, a hacker who records today's traffic and steals the server's permanent private key **years later** still cannot recover the old (already-deleted) temporary values — so past sessions stay safe. This is the core advantage over the old RSA key-exchange design, where a single leaked permanent private key could unlock every past session it ever protected.\n\n**Final mental model:** certificate = who is the server; signature = did the real server send this temporary key; Diffie-Hellman = how both sides create a secret without sending it; symmetric encryption = how the actual data gets hidden efficiently; authentication tag = how tampering gets detected. **Diffie-Hellman creates a shared secret, but TLS proves who you're creating it with.**"
      },
      {
        "id": "auth-big-picture",
        "title": "12. Authentication Big Picture & Why We Need Tokens",
        "content": "In a web app, authentication means **\"the server needs to know which user is making this request.\"** HTTP is **stateless** — every request is independent, so after login the server hands the browser some **proof** (session ID, JWT, access/refresh token) that later requests present back.\n\nThe core pieces: **password** (proves identity at login), **access token** (accesses protected APIs), **refresh token** (gets a new access token), **cookie** (browser storage sent automatically with requests)."
      },
      {
        "id": "jwt-structure-warning",
        "title": "13. JWT Structure & the Encoding Warning",
        "content": "A **JWT** is `header.payload.signature`. The **header** names the algorithm (`HS256`); the **payload** carries claims (`userId`, `role`, `exp`); the **signature** proves the server created it and it wasn't modified — change the payload and the signature no longer matches, so the server rejects it.\n\n**Critical:** the payload is only **Base64URL-encoded, not encrypted** — anyone can decode and read it. Never put a password, OTP, or bank details in a JWT payload; only non-secret claims like `userId`, `role`, and `exp`."
      },
      {
        "id": "access-vs-refresh-token",
        "title": "14. Access Token vs Refresh Token",
        "content": "**Access token** — used on every protected-API call (`Authorization: Bearer <token>`), deliberately **short-lived** (15–60 minutes) so a stolen token does limited damage.\n\n**Refresh token** — used only to obtain a new access token, **long-lived** (7–60 days), so the user isn't forced to re-login every 15 minutes. Split into two tokens with two different secrets because they serve different jobs with different risk profiles and different expiry.",
        "code": "const accessToken = jwt.sign(\n  { userId: user._id },\n  process.env.ACCESS_TOKEN_SECRET,\n  { expiresIn: \"15m\" }\n);\nconst refreshToken = jwt.sign(\n  { userId: user._id },\n  process.env.REFRESH_TOKEN_SECRET,\n  { expiresIn: \"7d\" }\n);"
      },
      {
        "id": "token-storage-frontend",
        "title": "15. Where to Store Tokens on the Frontend",
        "content": "**Access token** → application memory / React or Redux state — the frontend attaches it manually to each request's `Authorization` header.\n\n**Refresh token** → an **httpOnly, secure, sameSite** cookie. JavaScript **cannot read** an httpOnly cookie (`document.cookie` won't expose it), which blocks theft via an XSS vulnerability.\n\n**Never** put the refresh token in `localStorage` — any JavaScript (including an attacker's, if XSS exists) can read `localStorage.getItem(...)` directly.",
        "code": "res.cookie(\"refreshToken\", refreshToken, {\n  httpOnly: true,\n  secure: true,\n  sameSite: \"strict\",\n  maxAge: 7 * 24 * 60 * 60 * 1000\n});\n\n// Frontend — access token lives only in memory\nlet accessToken = data.accessToken;\nfetch(\"/profile\", { headers: { Authorization: `Bearer ${accessToken}` } });"
      },
      {
        "id": "login-and-protected-api-flow",
        "title": "16. Login Flow & Protected API Flow",
        "content": "On login, the server sets the refresh token as an httpOnly `Set-Cookie` and returns the access token in the **JSON body**. The frontend calls with `credentials: \"include\"` so the cookie round-trips.\n\nFor a protected route, the frontend attaches the access token as a bearer header; the backend verifies it with `jwt.verify()` and attaches the decoded payload to `req.user` before letting the route handler run.",
        "code": "// Backend login response\nres.cookie(\"refreshToken\", refreshToken, { httpOnly: true, secure: true, sameSite: \"strict\" });\nres.json({ accessToken });\n\n// Frontend login call\nconst res = await fetch(\"/login\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify({ email, password }),\n  credentials: \"include\"\n});\n\n// Protected route — backend\nconst token = req.headers.authorization?.split(\" \")[1];\nconst decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);\nreq.user = decoded;"
      },
      {
        "id": "refresh-token-flow",
        "title": "17. Access Token Expiry & the Refresh Flow",
        "content": "When an access token expires, `jwt.verify()` throws `TokenExpiredError` and the backend replies `401 Unauthorized`. The frontend recognizes this and calls `/refresh-token` — since the refresh token lives in a cookie, the browser **automatically** attaches it. The backend verifies the refresh token and mints a **new** access token; the frontend stores it and **retries** the original request. An `apiFetch` wrapper can automate this whole retry dance transparently.",
        "code": "async function apiFetch(url, options = {}) {\n  let res = await fetch(url, { ...options, headers: { ...options.headers, Authorization: `Bearer ${accessToken}` } });\n\n  if (res.status === 401) {\n    const refreshRes = await fetch(\"/refresh-token\", { method: \"POST\", credentials: \"include\" });\n    if (!refreshRes.ok) throw new Error(\"Login again\");\n\n    const data = await refreshRes.json();\n    accessToken = data.accessToken;\n    res = await fetch(url, { ...options, headers: { ...options.headers, Authorization: `Bearer ${accessToken}` } });\n  }\n  return res;\n}"
      },
      {
        "id": "cookies-vs-localstorage",
        "title": "18. What Is a Cookie? Cookie vs localStorage",
        "content": "A **cookie** is a small piece of data the browser stores per-domain and **automatically resends** on every request to that domain — used for login sessions, refresh tokens, cart IDs, language/theme preference, and tracking IDs.\n\nThe key difference from `localStorage`: cookies are **sent automatically** with each request, while `localStorage` is not; an `httpOnly` cookie **cannot** be read by JavaScript, while `localStorage` always can. That's exactly why a refresh token belongs in an httpOnly cookie, not `localStorage`."
      },
      {
        "id": "necessary-vs-optional-cookies",
        "title": "19. Necessary vs Optional Cookies, and Analytics",
        "content": "When a site asks *\"Accept cookies?\"*, it's mostly asking about **optional** cookies (analytics, advertising, personalization) — not the login cookie. **Necessary cookies** (session, cart, CSRF token) are required for the site to function and are usually always on.\n\n**Analytics** answers *\"which same visitor followed which journey?\"* — not just *\"what requests happened\"* (that's what backend logs already show). A cookie carries an anonymous `visitorId`, letting analytics stitch together `/home → /course/java → /payment` as **one person's** path rather than a pile of disconnected hits."
      },
      {
        "id": "ad-tracking-and-retargeting",
        "title": "20. Ad Tracking & Retargeting",
        "content": "**Browser rule:** one site can never read another site's cookies — `news.com` cannot read a `nike.com` cookie. Cross-site ad tracking works anyway because many sites **load the same third-party ad network's script or pixel** (`<script src=\"https://ads-network.com/pixel.js\">`). That request lets `ads-network.com` set/read **its own** cookie (`adId=abc123`), which belongs to the ad network, not to Nike.\n\nNike's page sends the tracker an event (e.g. `{ event: \"ViewProduct\", website: \"nike.com\", product: \"Running Shoes\" }`) alongside that `adId` cookie. Later, when the same browser loads `news.com` (which loads the **same** ad network), that cookie identifies it as \"the browser that viewed Nike shoes,\" enabling a Nike ad there — **retargeting**. Tracking needs both pieces: the **cookie** (who) and the **event/pixel** (what happened) — neither alone is enough."
      },
      {
        "id": "password-storage-why-not-plaintext-or-encryption",
        "title": "21. Password Storage — Why Not Plain Text or Encryption",
        "content": "The server never actually needs to know your real password — only whether a future attempt **matches**. So it should store **proof of the password, not the password itself**.\n\n**Plain text storage is dangerous:** a DB leak exposes every user's real password, and people reuse passwords across Gmail/GitHub/banking. **Encryption is also the wrong tool:** it's reversible by design — if an attacker gets the encryption key, every password decrypts at once. Since the server only needs to **verify**, not **recover**, **hashing** (one-way) is the right tool, not encryption."
      },
      {
        "id": "hashing-with-bcrypt-and-salt",
        "title": "22. Correct Way — Hashing With bcrypt & Salt",
        "content": "Store only the hash (`$2b$10$Ydhdhd7283...`), never the password. On signup, hash before saving; on login, use `bcrypt.compare()` against the stored hash — never a direct equality check.\n\n**Salt** — random extra data mixed in before hashing, so identical passwords (`123456` for two different users) produce different hashes; with bcrypt the salt is generated automatically and stored inside the hash itself.\n\n**Why bcrypt, not SHA-256?** SHA-256 is **fast** — great for file checksums, bad for passwords, since a leaked DB lets an attacker brute-force millions of guesses quickly. **bcrypt is intentionally slow**, making brute force expensive. (A modern alternative: **Argon2id**.)",
        "code": "// Signup\nconst hashedPassword = await bcrypt.hash(password, 10);\nawait User.create({ email, password: hashedPassword });\n\n// Login\nconst user = await User.findOne({ email });\nconst isPasswordCorrect = await bcrypt.compare(password, user.password);\n// true -> login successful · false -> reject"
      },
      {
        "id": "complete-signup-login-and-mental-models",
        "title": "23. Complete Signup & Login Code, and Final Mental Models",
        "content": "A real login route: hash-compare the password, then sign **both** tokens, put the refresh token in an httpOnly cookie, and return only the access token in the JSON body.\n\n**Always return the same error message** (\"Invalid email or password\") whether the email doesn't exist or the password is wrong — a different message for each would let an attacker enumerate which emails are registered.\n\n**Final mental models:** don't store the password, store **proof** of it. Access token = short-term API pass. Refresh token = long-term login-renewal pass. Cookie = the browser's small stored note, automatically resent with requests. An httpOnly cookie sits with the browser, but JavaScript cannot read it. An analytics cookie connects one visitor's multiple actions together; an ads-tracking cookie recognizes the same browser across different sites via a shared third-party network.",
        "code": "export async function login(req, res) {\n  const { email, password } = req.body;\n  const user = await User.findOne({ email });\n  if (!user) return res.status(401).json({ message: \"Invalid email or password\" });\n\n  const isPasswordCorrect = await bcrypt.compare(password, user.password);\n  if (!isPasswordCorrect) return res.status(401).json({ message: \"Invalid email or password\" });\n\n  const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: \"15m\" });\n  const refreshToken = jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: \"7d\" });\n\n  res.cookie(\"refreshToken\", refreshToken, { httpOnly: true, secure: true, sameSite: \"strict\" });\n  res.json({ message: \"Login successful\", accessToken });\n}"
      }
    ],
    "quiz": [
      {
        "question": "Why is Diffie-Hellman safer against future key leaks than the old RSA key-exchange method?",
        "options": [
          "DH uses temporary keys discarded after the session, so a leaked permanent private key years later cannot unlock old recorded sessions (forward secrecy)",
          "DH does not use any mathematics, so it cannot be broken",
          "DH sends the shared secret directly, which is faster",
          "RSA and DH are identical in every way"
        ],
        "answer": 0,
        "explanation": "In old RSA key exchange, every session's shared secret was encrypted with the same long-term server public key — a later-leaked private key can decrypt all of them. DH's temporary, per-connection keys are discarded, so a future permanent-key leak cannot recover old shared secrets. This property is called forward secrecy."
      },
      {
        "question": "Why is Diffie-Hellman alone vulnerable to a man-in-the-middle attack?",
        "options": [
          "DH proves a shared secret was created, but not who it was created with — an attacker can intercept and replace both sides' public values",
          "DH cannot mathematically produce a shared secret",
          "DH requires both parties to already know each other's private keys",
          "DH only works over unencrypted HTTP"
        ],
        "answer": 0,
        "explanation": "Diffie-Hellman solves 'create a shared secret without sending it,' but doesn't authenticate either party. A hacker positioned between client and server can establish separate shared secrets with each side, decrypting and re-encrypting traffic — TLS closes this gap with certificates and digital signatures."
      },
      {
        "question": "Why should a refresh token be stored in an httpOnly cookie instead of localStorage?",
        "options": [
          "JavaScript cannot read an httpOnly cookie, but it CAN read localStorage — so an XSS vulnerability could let an attacker steal a token stored in localStorage",
          "localStorage cannot store strings",
          "httpOnly cookies expire faster than localStorage",
          "There is no difference in security between the two"
        ],
        "answer": 0,
        "explanation": "httpOnly is a flag that blocks JavaScript (including malicious injected JavaScript from an XSS attack) from reading the cookie's value. localStorage has no such protection — any script running on the page, including an attacker's, can read it directly."
      },
      {
        "question": "Why does the login route return the same 'Invalid email or password' message for both a missing email and a wrong password?",
        "options": [
          "A different message per case would let an attacker enumerate which emails are actually registered in the system",
          "It's required by the JWT specification",
          "bcrypt.compare() cannot distinguish between the two cases",
          "It reduces server load"
        ],
        "answer": 0,
        "explanation": "If 'email not found' and 'wrong password' returned different messages, an attacker could probe many emails and learn exactly which ones have accounts — a user-enumeration vulnerability. A single generic message hides that distinction."
      },
      {
        "question": "Why is hashing (not encryption) the correct way to store passwords?",
        "options": [
          "The server only ever needs to verify a password matches, never to recover the original — hashing is one-way, so even a full DB leak doesn't expose real passwords",
          "Hashing is faster than encryption so it should always be preferred",
          "Encryption cannot be applied to text data",
          "Passwords are always shorter than encryption block sizes"
        ],
        "answer": 0,
        "explanation": "Encryption is reversible by design — anyone with the key can recover the original password. Since the server only needs to check a match (hash the attempt, compare hashes), a one-way hash (with salt, via bcrypt/Argon2) is the correct tool; it never needs to be reversed."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=mbsmsi7l3r4",
    "youtubeTitle": "Node.js JWT Authentication — Traversy Media",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 32,
    "slug": "authorization-and-role-based-access",
    "track": "thunder",
    "day": 32,
    "title": "Authorization & Role-Based Access",
    "subtitle": "Roles, permissions, and access control patterns",
    "duration": "2 hrs",
    "createdOn": "16 Aug 2026",
    "status": "published",
    "topics": [
      "RBAC concepts",
      "User roles",
      "Permission middleware",
      "Admin vs user routes",
      "Least privilege"
    ],
    "sections": [
      {
        "id": "rbac-concepts",
        "title": "RBAC concepts",
        "content": "Learn **RBAC concepts** in Day 32 of Thunder: 100 Days of Code. Roles, permissions, and access control patterns",
        "tryIt": "console.log(\"Day 32: Authorization & Role-Based Access\");"
      },
      {
        "id": "user-roles",
        "title": "User roles",
        "content": "Learn **User roles** in Day 32 of Thunder: 100 Days of Code. Roles, permissions, and access control patterns",
        "tryIt": "console.log(\"Day 32: Authorization & Role-Based Access\");"
      },
      {
        "id": "permission-middleware",
        "title": "Permission middleware",
        "content": "Learn **Permission middleware** in Day 32 of Thunder: 100 Days of Code. Roles, permissions, and access control patterns",
        "tryIt": "console.log(\"Day 32: Authorization & Role-Based Access\");"
      },
      {
        "id": "admin-vs-user-routes",
        "title": "Admin vs user routes",
        "content": "Learn **Admin vs user routes** in Day 32 of Thunder: 100 Days of Code. Roles, permissions, and access control patterns",
        "tryIt": "console.log(\"Day 32: Authorization & Role-Based Access\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 32?",
        "options": [
          "Authorization & Role-Based Access",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 32 focuses on Authorization & Role-Based Access."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 2: Backend Mastery",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 2: Backend Mastery."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=HHuiV841g_w",
    "youtubeTitle": "Node & Express Role-Based Authorization — Dipesh Malvia",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 33,
    "slug": "file-uploads-and-cloud-storage",
    "track": "thunder",
    "day": 33,
    "title": "File Uploads & Cloud Storage",
    "subtitle": "Multer, file validation, and cloud buckets",
    "duration": "2 hrs",
    "createdOn": "17 Aug 2026",
    "status": "published",
    "topics": [
      "Multipart form data",
      "Multer setup",
      "File type validation",
      "Cloud storage overview",
      "Serving static files"
    ],
    "sections": [
      {
        "id": "multipart-form-data",
        "title": "Multipart form data",
        "content": "Learn **Multipart form data** in Day 33 of Thunder: 100 Days of Code. Multer, file validation, and cloud buckets",
        "tryIt": "console.log(\"Day 33: File Uploads & Cloud Storage\");"
      },
      {
        "id": "multer-setup",
        "title": "Multer setup",
        "content": "Learn **Multer setup** in Day 33 of Thunder: 100 Days of Code. Multer, file validation, and cloud buckets",
        "tryIt": "console.log(\"Day 33: File Uploads & Cloud Storage\");"
      },
      {
        "id": "file-type-validation",
        "title": "File type validation",
        "content": "Learn **File type validation** in Day 33 of Thunder: 100 Days of Code. Multer, file validation, and cloud buckets",
        "tryIt": "console.log(\"Day 33: File Uploads & Cloud Storage\");"
      },
      {
        "id": "cloud-storage-overview",
        "title": "Cloud storage overview",
        "content": "Learn **Cloud storage overview** in Day 33 of Thunder: 100 Days of Code. Multer, file validation, and cloud buckets",
        "tryIt": "console.log(\"Day 33: File Uploads & Cloud Storage\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 33?",
        "options": [
          "File Uploads & Cloud Storage",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 33 focuses on File Uploads & Cloud Storage."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 2: Backend Mastery",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 2: Backend Mastery."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=WqJ0P8JnftI",
    "youtubeTitle": "Uploading Files with Node.js and Multer — Piyush Garg",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 34,
    "slug": "websockets-and-real-time-apis",
    "track": "thunder",
    "day": 34,
    "title": "WebSockets & Real-Time APIs",
    "subtitle": "Socket.io, rooms, and live updates",
    "duration": "2 hrs",
    "createdOn": "18 Aug 2026",
    "status": "published",
    "topics": [
      "HTTP vs WebSockets",
      "Socket.io setup",
      "Emit & on events",
      "Rooms & namespaces",
      "Real-time chat demo"
    ],
    "sections": [
      {
        "id": "http-vs-websockets",
        "title": "HTTP vs WebSockets",
        "content": "Learn **HTTP vs WebSockets** in Day 34 of Thunder: 100 Days of Code. Socket.io, rooms, and live updates",
        "tryIt": "console.log(\"Day 34: WebSockets & Real-Time APIs\");"
      },
      {
        "id": "socket-io-setup",
        "title": "Socket.io setup",
        "content": "Learn **Socket.io setup** in Day 34 of Thunder: 100 Days of Code. Socket.io, rooms, and live updates",
        "tryIt": "console.log(\"Day 34: WebSockets & Real-Time APIs\");"
      },
      {
        "id": "emit-and-on-events",
        "title": "Emit & on events",
        "content": "Learn **Emit & on events** in Day 34 of Thunder: 100 Days of Code. Socket.io, rooms, and live updates",
        "tryIt": "console.log(\"Day 34: WebSockets & Real-Time APIs\");"
      },
      {
        "id": "rooms-and-namespaces",
        "title": "Rooms & namespaces",
        "content": "Learn **Rooms & namespaces** in Day 34 of Thunder: 100 Days of Code. Socket.io, rooms, and live updates",
        "tryIt": "console.log(\"Day 34: WebSockets & Real-Time APIs\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 34?",
        "options": [
          "WebSockets & Real-Time APIs",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 34 focuses on WebSockets & Real-Time APIs."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 2: Backend Mastery",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 2: Backend Mastery."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=ZKEqqIO7n-k",
    "youtubeTitle": "Socket.io Crash Course — Traversy Media",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 35,
    "slug": "error-handling-and-validation",
    "track": "thunder",
    "day": 35,
    "title": "Error Handling & Validation",
    "subtitle": "Express-validator, custom errors, and API responses",
    "duration": "2 hrs",
    "createdOn": "19 Aug 2026",
    "status": "published",
    "topics": [
      "Validation middleware",
      "express-validator",
      "Custom error classes",
      "Central error handler",
      "Consistent API errors"
    ],
    "sections": [
      {
        "id": "validation-middleware",
        "title": "Validation middleware",
        "content": "Learn **Validation middleware** in Day 35 of Thunder: 100 Days of Code. Express-validator, custom errors, and API responses",
        "tryIt": "console.log(\"Day 35: Error Handling & Validation\");"
      },
      {
        "id": "express-validator",
        "title": "express-validator",
        "content": "Learn **express-validator** in Day 35 of Thunder: 100 Days of Code. Express-validator, custom errors, and API responses",
        "tryIt": "console.log(\"Day 35: Error Handling & Validation\");"
      },
      {
        "id": "custom-error-classes",
        "title": "Custom error classes",
        "content": "Learn **Custom error classes** in Day 35 of Thunder: 100 Days of Code. Express-validator, custom errors, and API responses",
        "tryIt": "console.log(\"Day 35: Error Handling & Validation\");"
      },
      {
        "id": "central-error-handler",
        "title": "Central error handler",
        "content": "Learn **Central error handler** in Day 35 of Thunder: 100 Days of Code. Express-validator, custom errors, and API responses",
        "tryIt": "console.log(\"Day 35: Error Handling & Validation\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 35?",
        "options": [
          "Error Handling & Validation",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 35 focuses on Error Handling & Validation."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 2: Backend Mastery",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 2: Backend Mastery."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=-OjIF9Zympo",
    "youtubeTitle": "Error Handling in Express.js — The Ultimate Guide — CodeLucky",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 36,
    "slug": "api-security-best-practices",
    "track": "thunder",
    "day": 36,
    "title": "API Security Best Practices",
    "subtitle": "Helmet, rate limiting, sanitization, and secrets",
    "duration": "2 hrs",
    "createdOn": "20 Aug 2026",
    "status": "published",
    "topics": [
      "Helmet.js",
      "Rate limiting",
      "Input sanitization",
      "Environment variables",
      "OWASP API top 10"
    ],
    "sections": [
      {
        "id": "helmet-js",
        "title": "Helmet.js",
        "content": "Learn **Helmet.js** in Day 36 of Thunder: 100 Days of Code. Helmet, rate limiting, sanitization, and secrets",
        "tryIt": "console.log(\"Day 36: API Security Best Practices\");"
      },
      {
        "id": "rate-limiting",
        "title": "Rate limiting",
        "content": "Learn **Rate limiting** in Day 36 of Thunder: 100 Days of Code. Helmet, rate limiting, sanitization, and secrets",
        "tryIt": "console.log(\"Day 36: API Security Best Practices\");"
      },
      {
        "id": "input-sanitization",
        "title": "Input sanitization",
        "content": "Learn **Input sanitization** in Day 36 of Thunder: 100 Days of Code. Helmet, rate limiting, sanitization, and secrets",
        "tryIt": "console.log(\"Day 36: API Security Best Practices\");"
      },
      {
        "id": "environment-variables",
        "title": "Environment variables",
        "content": "Learn **Environment variables** in Day 36 of Thunder: 100 Days of Code. Helmet, rate limiting, sanitization, and secrets",
        "tryIt": "console.log(\"Day 36: API Security Best Practices\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 36?",
        "options": [
          "API Security Best Practices",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 36 focuses on API Security Best Practices."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 2: Backend Mastery",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 2: Backend Mastery."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=DYme1m4RiwI",
    "youtubeTitle": "Node.js Security Best Practices — Software Developer Diaries",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 37,
    "slug": "rest-api-project-part-1",
    "track": "thunder",
    "day": 37,
    "title": "REST API Project — Part 1",
    "subtitle": "Project setup, models, and core endpoints",
    "duration": "2 hrs",
    "createdOn": "21 Aug 2026",
    "status": "published",
    "topics": [
      "Project architecture",
      "Folder structure",
      "Database models",
      "CRUD endpoints",
      "Testing with Postman"
    ],
    "sections": [
      {
        "id": "project-architecture",
        "title": "Project architecture",
        "content": "Learn **Project architecture** in Day 37 of Thunder: 100 Days of Code. Project setup, models, and core endpoints",
        "tryIt": "console.log(\"Day 37: REST API Project — Part 1\");"
      },
      {
        "id": "folder-structure",
        "title": "Folder structure",
        "content": "Learn **Folder structure** in Day 37 of Thunder: 100 Days of Code. Project setup, models, and core endpoints",
        "tryIt": "console.log(\"Day 37: REST API Project — Part 1\");"
      },
      {
        "id": "database-models",
        "title": "Database models",
        "content": "Learn **Database models** in Day 37 of Thunder: 100 Days of Code. Project setup, models, and core endpoints",
        "tryIt": "console.log(\"Day 37: REST API Project — Part 1\");"
      },
      {
        "id": "crud-endpoints",
        "title": "CRUD endpoints",
        "content": "Learn **CRUD endpoints** in Day 37 of Thunder: 100 Days of Code. Project setup, models, and core endpoints",
        "tryIt": "console.log(\"Day 37: REST API Project — Part 1\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 37?",
        "options": [
          "REST API Project — Part 1",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 37 focuses on REST API Project — Part 1."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 2: Backend Mastery",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 2: Backend Mastery."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=_7UQPve99r4",
    "youtubeTitle": "Build a REST API with Node — Traversy Media",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 38,
    "slug": "rest-api-project-part-2",
    "track": "thunder",
    "day": 38,
    "title": "REST API Project — Part 2",
    "subtitle": "Auth integration, middleware, and deployment prep",
    "duration": "2 hrs",
    "createdOn": "22 Aug 2026",
    "status": "published",
    "topics": [
      "Adding authentication",
      "Protected resources",
      "Pagination & filtering",
      "API documentation",
      "Deploy prep"
    ],
    "sections": [
      {
        "id": "adding-authentication",
        "title": "Adding authentication",
        "content": "Learn **Adding authentication** in Day 38 of Thunder: 100 Days of Code. Auth integration, middleware, and deployment prep",
        "tryIt": "console.log(\"Day 38: REST API Project — Part 2\");"
      },
      {
        "id": "protected-resources",
        "title": "Protected resources",
        "content": "Learn **Protected resources** in Day 38 of Thunder: 100 Days of Code. Auth integration, middleware, and deployment prep",
        "tryIt": "console.log(\"Day 38: REST API Project — Part 2\");"
      },
      {
        "id": "pagination-and-filtering",
        "title": "Pagination & filtering",
        "content": "Learn **Pagination & filtering** in Day 38 of Thunder: 100 Days of Code. Auth integration, middleware, and deployment prep",
        "tryIt": "console.log(\"Day 38: REST API Project — Part 2\");"
      },
      {
        "id": "api-documentation",
        "title": "API documentation",
        "content": "Learn **API documentation** in Day 38 of Thunder: 100 Days of Code. Auth integration, middleware, and deployment prep",
        "tryIt": "console.log(\"Day 38: REST API Project — Part 2\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 38?",
        "options": [
          "REST API Project — Part 2",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 38 focuses on REST API Project — Part 2."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 2: Backend Mastery",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 2: Backend Mastery."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=fgTGADljAeg",
    "youtubeTitle": "Node.js API Full Course — freeCodeCamp",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 39,
    "slug": "api-testing-with-postman",
    "track": "thunder",
    "day": 39,
    "title": "API Testing with Postman",
    "subtitle": "Collections, environments, and automated tests",
    "duration": "2 hrs",
    "createdOn": "23 Aug 2026",
    "status": "published",
    "topics": [
      "Postman collections",
      "Environment variables",
      "Test scripts",
      "Mock servers",
      "CI integration intro"
    ],
    "sections": [
      {
        "id": "postman-collections",
        "title": "Postman collections",
        "content": "Learn **Postman collections** in Day 39 of Thunder: 100 Days of Code. Collections, environments, and automated tests",
        "tryIt": "console.log(\"Day 39: API Testing with Postman\");"
      },
      {
        "id": "environment-variables",
        "title": "Environment variables",
        "content": "Learn **Environment variables** in Day 39 of Thunder: 100 Days of Code. Collections, environments, and automated tests",
        "tryIt": "console.log(\"Day 39: API Testing with Postman\");"
      },
      {
        "id": "test-scripts",
        "title": "Test scripts",
        "content": "Learn **Test scripts** in Day 39 of Thunder: 100 Days of Code. Collections, environments, and automated tests",
        "tryIt": "console.log(\"Day 39: API Testing with Postman\");"
      },
      {
        "id": "mock-servers",
        "title": "Mock servers",
        "content": "Learn **Mock servers** in Day 39 of Thunder: 100 Days of Code. Collections, environments, and automated tests",
        "tryIt": "console.log(\"Day 39: API Testing with Postman\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 39?",
        "options": [
          "API Testing with Postman",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 39 focuses on API Testing with Postman."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 2: Backend Mastery",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 2: Backend Mastery."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=MFxk5BZulVU",
    "youtubeTitle": "Postman API Testing Tutorial for Beginners — Codemify",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 40,
    "slug": "backend-capstone-project",
    "track": "thunder",
    "day": 40,
    "title": "Backend Capstone Project",
    "subtitle": "Build and ship a production-ready API",
    "duration": "2 hrs",
    "createdOn": "24 Aug 2026",
    "status": "published",
    "topics": [
      "Capstone requirements",
      "Full API build",
      "Auth + database",
      "Error handling",
      "Backend phase recap"
    ],
    "sections": [
      {
        "id": "capstone-requirements",
        "title": "Capstone requirements",
        "content": "Learn **Capstone requirements** in Day 40 of Thunder: 100 Days of Code. Build and ship a production-ready API",
        "tryIt": "console.log(\"Day 40: Backend Capstone Project\");"
      },
      {
        "id": "full-api-build",
        "title": "Full API build",
        "content": "Learn **Full API build** in Day 40 of Thunder: 100 Days of Code. Build and ship a production-ready API",
        "tryIt": "console.log(\"Day 40: Backend Capstone Project\");"
      },
      {
        "id": "auth-database",
        "title": "Auth + database",
        "content": "Learn **Auth + database** in Day 40 of Thunder: 100 Days of Code. Build and ship a production-ready API",
        "tryIt": "console.log(\"Day 40: Backend Capstone Project\");"
      },
      {
        "id": "error-handling",
        "title": "Error handling",
        "content": "Learn **Error handling** in Day 40 of Thunder: 100 Days of Code. Build and ship a production-ready API",
        "tryIt": "console.log(\"Day 40: Backend Capstone Project\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 40?",
        "options": [
          "Backend Capstone Project",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 40 focuses on Backend Capstone Project."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 2: Backend Mastery",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 2: Backend Mastery."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=fgTGADljAeg",
    "youtubeTitle": "Node.js API Full Course — freeCodeCamp",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 41,
    "slug": "monolith-vs-microservices",
    "track": "thunder",
    "day": 41,
    "title": "Monolith vs Microservices",
    "subtitle": "Architecture trade-offs and when to split services",
    "duration": "2 hrs",
    "createdOn": "25 Aug 2026",
    "status": "published",
    "topics": [
      "Monolith benefits",
      "Microservices benefits",
      "When to split",
      "Service boundaries",
      "Trade-offs"
    ],
    "sections": [
      {
        "id": "monolith-benefits",
        "title": "Monolith benefits",
        "content": "Learn **Monolith benefits** in Day 41 of Thunder: 100 Days of Code. Architecture trade-offs and when to split services",
        "tryIt": "console.log(\"Day 41: Monolith vs Microservices\");"
      },
      {
        "id": "microservices-benefits",
        "title": "Microservices benefits",
        "content": "Learn **Microservices benefits** in Day 41 of Thunder: 100 Days of Code. Architecture trade-offs and when to split services",
        "tryIt": "console.log(\"Day 41: Monolith vs Microservices\");"
      },
      {
        "id": "when-to-split",
        "title": "When to split",
        "content": "Learn **When to split** in Day 41 of Thunder: 100 Days of Code. Architecture trade-offs and when to split services",
        "tryIt": "console.log(\"Day 41: Monolith vs Microservices\");"
      },
      {
        "id": "service-boundaries",
        "title": "Service boundaries",
        "content": "Learn **Service boundaries** in Day 41 of Thunder: 100 Days of Code. Architecture trade-offs and when to split services",
        "tryIt": "console.log(\"Day 41: Monolith vs Microservices\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 41?",
        "options": [
          "Monolith vs Microservices",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 41 focuses on Monolith vs Microservices."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 3: System Thinking & Scaling",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 3: System Thinking & Scaling."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=NdeTGlZ__Do",
    "youtubeTitle": "Monolithic vs Microservice Architecture — Alex Hyett",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 42,
    "slug": "caching-with-redis",
    "track": "thunder",
    "day": 42,
    "title": "Caching with Redis",
    "subtitle": "In-memory caching, TTL, and cache strategies",
    "duration": "2 hrs",
    "createdOn": "26 Aug 2026",
    "status": "published",
    "topics": [
      "Why caching",
      "Redis basics",
      "Cache-aside pattern",
      "TTL & eviction",
      "Node + Redis"
    ],
    "sections": [
      {
        "id": "why-caching",
        "title": "Why caching",
        "content": "Learn **Why caching** in Day 42 of Thunder: 100 Days of Code. In-memory caching, TTL, and cache strategies",
        "tryIt": "console.log(\"Day 42: Caching with Redis\");"
      },
      {
        "id": "redis-basics",
        "title": "Redis basics",
        "content": "**Redis** (REmote DIctionary Server) is an **in-memory data store** — it keeps data in RAM, which makes it extremely fast (**microsecond latency**).\n\n**Data structures** — Redis is more than key-value: **String, Hash, List, Set, Sorted Set, Stream, Bitmap,** and **HyperLogLog** — different structures for different use cases.\n\n**Common use cases:**\n- **Caching** — store frequently accessed data (product details, user profiles).\n- **Session storage** — share user sessions across multiple servers.\n- **Rate limiting** — track and limit requests per user or IP.\n- **Leaderboards** — Sorted Sets rank users efficiently.\n- **Pub/Sub messaging** — publish and subscribe to channels.\n- **API response cache** — cache API responses to reduce DB load.\n\n**Redis vs a database:** Redis is in-memory (microseconds), optionally persistent (RDB / AOF), and holds frequently accessed data; a database is on disk (milliseconds), persistent, and is the **source of truth**. **Redis does not replace your database** — it complements it: on a request, check the cache first; a **HIT** returns from Redis, a **MISS** fetches from the DB and updates Redis.\n\nUsed in production by Netflix, Discord, GitHub, Pinterest, Stack Overflow, and Shopify.\n\n*Infographic by Vishwanath Patil (@patilvishi).*",
        "tryIt": "console.log(\"Day 42: Caching with Redis\");",
        "image": "/redis-notes/redis-explained.jpg",
        "imageAlt": "Redis Explained — in-memory data store; data structures (String, Hash, List, Set, Sorted Set, Stream, Bitmap, HyperLogLog); use cases (caching, sessions, rate limiting, leaderboards, pub/sub, API cache); Redis vs database; cache hit/miss flow; and where Redis fits between the application and the database"
      },
      {
        "id": "cache-aside-pattern",
        "title": "Cache-aside pattern",
        "content": "Learn **Cache-aside pattern** in Day 42 of Thunder: 100 Days of Code. In-memory caching, TTL, and cache strategies",
        "tryIt": "console.log(\"Day 42: Caching with Redis\");"
      },
      {
        "id": "ttl-and-eviction",
        "title": "TTL & eviction",
        "content": "Learn **TTL & eviction** in Day 42 of Thunder: 100 Days of Code. In-memory caching, TTL, and cache strategies",
        "tryIt": "console.log(\"Day 42: Caching with Redis\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 42?",
        "options": [
          "Caching with Redis",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 42 focuses on Caching with Redis."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 3: System Thinking & Scaling",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 3: System Thinking & Scaling."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=Hbt56gFj998",
    "youtubeTitle": "Redis Crash Course — Traversy Media",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 43,
    "slug": "message-queues-and-pub-sub",
    "track": "thunder",
    "day": 43,
    "title": "Message Queues & Pub/Sub",
    "subtitle": "Async communication with queues and events",
    "duration": "2 hrs",
    "createdOn": "27 Aug 2026",
    "status": "published",
    "topics": [
      "Message queues",
      "Pub/Sub pattern",
      "RabbitMQ / Kafka intro",
      "Decoupling services",
      "Event-driven design"
    ],
    "sections": [
      {
        "id": "message-queues",
        "title": "Message queues",
        "content": "Learn **Message queues** in Day 43 of Thunder: 100 Days of Code. Async communication with queues and events",
        "tryIt": "console.log(\"Day 43: Message Queues & Pub/Sub\");"
      },
      {
        "id": "pub-sub-pattern",
        "title": "Pub/Sub pattern",
        "content": "Learn **Pub/Sub pattern** in Day 43 of Thunder: 100 Days of Code. Async communication with queues and events",
        "tryIt": "console.log(\"Day 43: Message Queues & Pub/Sub\");"
      },
      {
        "id": "rabbitmq-kafka-intro",
        "title": "RabbitMQ / Kafka intro",
        "content": "Learn **RabbitMQ / Kafka intro** in Day 43 of Thunder: 100 Days of Code. Async communication with queues and events",
        "tryIt": "console.log(\"Day 43: Message Queues & Pub/Sub\");"
      },
      {
        "id": "decoupling-services",
        "title": "Decoupling services",
        "content": "Learn **Decoupling services** in Day 43 of Thunder: 100 Days of Code. Async communication with queues and events",
        "tryIt": "console.log(\"Day 43: Message Queues & Pub/Sub\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 43?",
        "options": [
          "Message Queues & Pub/Sub",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 43 focuses on Message Queues & Pub/Sub."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 3: System Thinking & Scaling",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 3: System Thinking & Scaling."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=PQHf_IzmUXE",
    "youtubeTitle": "Kafka vs RabbitMQ — Message Queues Explained — The Coding Gopher",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 44,
    "slug": "load-balancing-and-reverse-proxies",
    "track": "thunder",
    "day": 44,
    "title": "Load Balancing & Reverse Proxies",
    "subtitle": "Nginx, horizontal scaling, and traffic distribution",
    "duration": "2 hrs",
    "createdOn": "28 Aug 2026",
    "status": "published",
    "topics": [
      "Load balancer types",
      "Round robin",
      "Reverse proxy",
      "Nginx basics",
      "Health checks"
    ],
    "sections": [
      {
        "id": "load-balancer-types",
        "title": "Load balancer types",
        "content": "Learn **Load balancer types** in Day 44 of Thunder: 100 Days of Code. Nginx, horizontal scaling, and traffic distribution",
        "tryIt": "console.log(\"Day 44: Load Balancing & Reverse Proxies\");"
      },
      {
        "id": "round-robin",
        "title": "Round robin",
        "content": "Learn **Round robin** in Day 44 of Thunder: 100 Days of Code. Nginx, horizontal scaling, and traffic distribution",
        "tryIt": "console.log(\"Day 44: Load Balancing & Reverse Proxies\");"
      },
      {
        "id": "reverse-proxy",
        "title": "Reverse proxy",
        "content": "Learn **Reverse proxy** in Day 44 of Thunder: 100 Days of Code. Nginx, horizontal scaling, and traffic distribution",
        "tryIt": "console.log(\"Day 44: Load Balancing & Reverse Proxies\");"
      },
      {
        "id": "nginx-basics",
        "title": "Nginx basics",
        "content": "Learn **Nginx basics** in Day 44 of Thunder: 100 Days of Code. Nginx, horizontal scaling, and traffic distribution",
        "tryIt": "console.log(\"Day 44: Load Balancing & Reverse Proxies\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 44?",
        "options": [
          "Load Balancing & Reverse Proxies",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 44 focuses on Load Balancing & Reverse Proxies."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 3: System Thinking & Scaling",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 3: System Thinking & Scaling."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=xo5V9g9joFs",
    "youtubeTitle": "Proxy vs Reverse Proxy vs Load Balancer — TechWorld with Nana",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 45,
    "slug": "database-scaling-and-sharding",
    "track": "thunder",
    "day": 45,
    "title": "Database Scaling & Sharding",
    "subtitle": "Replication, sharding, and read replicas",
    "duration": "2 hrs",
    "createdOn": "29 Aug 2026",
    "status": "published",
    "topics": [
      "Vertical vs horizontal scaling",
      "Read replicas",
      "Sharding strategies",
      "Consistent hashing",
      "CAP trade-offs intro"
    ],
    "sections": [
      {
        "id": "vertical-vs-horizontal-scaling",
        "title": "Vertical vs horizontal scaling",
        "content": "Learn **Vertical vs horizontal scaling** in Day 45 of Thunder: 100 Days of Code. Replication, sharding, and read replicas",
        "tryIt": "console.log(\"Day 45: Database Scaling & Sharding\");"
      },
      {
        "id": "read-replicas",
        "title": "Read replicas",
        "content": "Learn **Read replicas** in Day 45 of Thunder: 100 Days of Code. Replication, sharding, and read replicas",
        "tryIt": "console.log(\"Day 45: Database Scaling & Sharding\");"
      },
      {
        "id": "sharding-strategies",
        "title": "Sharding strategies",
        "content": "Learn **Sharding strategies** in Day 45 of Thunder: 100 Days of Code. Replication, sharding, and read replicas",
        "tryIt": "console.log(\"Day 45: Database Scaling & Sharding\");"
      },
      {
        "id": "consistent-hashing",
        "title": "Consistent hashing",
        "content": "Learn **Consistent hashing** in Day 45 of Thunder: 100 Days of Code. Replication, sharding, and read replicas",
        "tryIt": "console.log(\"Day 45: Database Scaling & Sharding\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 45?",
        "options": [
          "Database Scaling & Sharding",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 45 focuses on Database Scaling & Sharding."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 3: System Thinking & Scaling",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 3: System Thinking & Scaling."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=be6PLMKKSto",
    "youtubeTitle": "The Basics of Database Sharding & Partitioning — Exponent",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 46,
    "slug": "rate-limiting-and-throttling",
    "track": "thunder",
    "day": 46,
    "title": "Rate Limiting & Throttling",
    "subtitle": "Protect APIs from abuse and overload",
    "duration": "2 hrs",
    "createdOn": "30 Aug 2026",
    "status": "published",
    "topics": [
      "Why rate limit",
      "Token bucket",
      "Sliding window",
      "express-rate-limit",
      "Distributed rate limiting"
    ],
    "sections": [
      {
        "id": "why-rate-limit",
        "title": "Why rate limit",
        "content": "Learn **Why rate limit** in Day 46 of Thunder: 100 Days of Code. Protect APIs from abuse and overload",
        "tryIt": "console.log(\"Day 46: Rate Limiting & Throttling\");"
      },
      {
        "id": "token-bucket",
        "title": "Token bucket",
        "content": "Learn **Token bucket** in Day 46 of Thunder: 100 Days of Code. Protect APIs from abuse and overload",
        "tryIt": "console.log(\"Day 46: Rate Limiting & Throttling\");"
      },
      {
        "id": "sliding-window",
        "title": "Sliding window",
        "content": "Learn **Sliding window** in Day 46 of Thunder: 100 Days of Code. Protect APIs from abuse and overload",
        "tryIt": "console.log(\"Day 46: Rate Limiting & Throttling\");"
      },
      {
        "id": "express-rate-limit",
        "title": "express-rate-limit",
        "content": "Learn **express-rate-limit** in Day 46 of Thunder: 100 Days of Code. Protect APIs from abuse and overload",
        "tryIt": "console.log(\"Day 46: Rate Limiting & Throttling\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 46?",
        "options": [
          "Rate Limiting & Throttling",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 46 focuses on Rate Limiting & Throttling."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 3: System Thinking & Scaling",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 3: System Thinking & Scaling."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=mQCJJqUfn9Y",
    "youtubeTitle": "Five Rate Limiting Algorithms — System Design — Hello Byte",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 47,
    "slug": "backend-scaling-patterns",
    "track": "thunder",
    "day": 47,
    "title": "Backend Scaling Patterns",
    "subtitle": "Putting it together — scalable backend architecture",
    "duration": "2 hrs",
    "createdOn": "31 Aug 2026",
    "status": "published",
    "topics": [
      "Scaling checklist",
      "Caching layers",
      "CDN intro",
      "Database scaling",
      "Phase 3 recap"
    ],
    "sections": [
      {
        "id": "scaling-checklist",
        "title": "Scaling checklist",
        "content": "Learn **Scaling checklist** in Day 47 of Thunder: 100 Days of Code. Putting it together — scalable backend architecture",
        "tryIt": "console.log(\"Day 47: Backend Scaling Patterns\");"
      },
      {
        "id": "caching-layers",
        "title": "Caching layers",
        "content": "Learn **Caching layers** in Day 47 of Thunder: 100 Days of Code. Putting it together — scalable backend architecture",
        "tryIt": "console.log(\"Day 47: Backend Scaling Patterns\");"
      },
      {
        "id": "cdn-intro",
        "title": "CDN intro",
        "content": "Learn **CDN intro** in Day 47 of Thunder: 100 Days of Code. Putting it together — scalable backend architecture",
        "tryIt": "console.log(\"Day 47: Backend Scaling Patterns\");"
      },
      {
        "id": "database-scaling",
        "title": "Database scaling",
        "content": "Learn **Database scaling** in Day 47 of Thunder: 100 Days of Code. Putting it together — scalable backend architecture",
        "tryIt": "console.log(\"Day 47: Backend Scaling Patterns\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 47?",
        "options": [
          "Backend Scaling Patterns",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 47 focuses on Backend Scaling Patterns."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 3: System Thinking & Scaling",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 3: System Thinking & Scaling."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=EWS_CIxttVw",
    "youtubeTitle": "Scalability Simply Explained in 10 Minutes — ByteByteGo",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 48,
    "slug": "system-design-fundamentals",
    "track": "thunder",
    "day": 48,
    "title": "System Design Fundamentals",
    "subtitle": "Requirements, estimation, and high-level diagrams",
    "duration": "2 hrs",
    "createdOn": "1 Sept 2026",
    "status": "published",
    "topics": [
      "Functional requirements",
      "Non-functional requirements",
      "Back-of-envelope math",
      "HLD diagrams",
      "API design",
      "Rollback strategy",
      "Software testing strategies"
    ],
    "sections": [
      {
        "id": "functional-requirements",
        "title": "Functional requirements",
        "content": "Learn **Functional requirements** in Day 48 of Thunder: 100 Days of Code. Requirements, estimation, and high-level diagrams",
        "tryIt": "console.log(\"Day 48: System Design Fundamentals\");"
      },
      {
        "id": "non-functional-requirements",
        "title": "Non-functional requirements",
        "content": "Learn **Non-functional requirements** in Day 48 of Thunder: 100 Days of Code. Requirements, estimation, and high-level diagrams",
        "tryIt": "console.log(\"Day 48: System Design Fundamentals\");"
      },
      {
        "id": "back-of-envelope-math",
        "title": "Back-of-envelope math",
        "content": "Learn **Back-of-envelope math** in Day 48 of Thunder: 100 Days of Code. Requirements, estimation, and high-level diagrams",
        "tryIt": "console.log(\"Day 48: System Design Fundamentals\");"
      },
      {
        "id": "hld-diagrams",
        "title": "HLD diagrams",
        "content": "Learn **HLD diagrams** in Day 48 of Thunder: 100 Days of Code. Requirements, estimation, and high-level diagrams",
        "tryIt": "console.log(\"Day 48: System Design Fundamentals\");"
      },
      {
        "id": "rollback-strategy",
        "title": "Rollback Strategy",
        "content": "The fastest rollback strategy is to **decouple deployment from release** using **feature flags**. You deploy new code to 100% of servers but keep the feature dark behind a flag, then release gradually and roll back instantly if something breaks.\n\n**How it works:**\n- **Deploy ≠ release** — CI/CD ships the code to all app servers, but the new path stays behind a flag (e.g. `rollout = 5%`).\n- **Feature flag service** (LaunchDarkly, Unleash, Redis) is the central place to manage flags and rollout rules; every request checks it.\n- **Progressive rollout** — eligible users (5%) get the new checkout, everyone else (95%) gets the old one. Eligibility uses rules like user-ID hashing, country, device, or user segment.\n- **Monitor everything** — Prometheus, Grafana, and Sentry track health and business metrics continuously.\n- **Ramp or roll back** — if healthy, increase 5% → 25% → 50% → 100%; if an error spike is detected, **flip the flag OFF** and every user instantly falls back to the old path — no redeploy needed.\n\n**Key takeaways:** deploy to 100% of servers, release gradually with feature flags, monitor everything, and roll back instantly by flipping a flag. Other strategies — redeploying the previous version, blue-green switchover, or aborting a canary — are slower because they need a fresh deploy or traffic shift.",
        "image": "/system-design-notes/feature-flag-rollback.jpg",
        "imageAlt": "Feature-flag rollback strategy — deploy to 100% of servers behind a flag, read the flag per request via a feature flag service, roll out progressively (5% → 25% → 50% → 100%) with eligibility rules, monitor with Prometheus/Grafana/Sentry, and instantly roll back by flipping the flag OFF on an error spike"
      },
      {
        "id": "software-testing-strategies",
        "title": "Software Testing Strategies",
        "content": "A system is only as reliable as the tests protecting it. The main types of software testing every engineer should know:\n\n- **Unit Testing** — validates individual components in isolation.\n- **Integration Testing** — ensures components work correctly together.\n- **System Testing** — evaluates the complete system against requirements.\n- **Load Testing** — measures performance under expected & peak load.\n- **Error Testing** — verifies behavior with invalid or unexpected inputs.\n- **Test Automation** — automates test execution for speed & consistency.\n- **Regression Testing** — ensures changes do not break existing functionality.\n- **UAT (User Acceptance Testing)** — confirms the system meets user expectations.\n- **Black Box Testing** — validates behavior using inputs & outputs only.\n- **White Box Testing** — tests internal logic, paths, & code structure.\n- **Exploratory Testing** — finds issues through experience-driven testing.\n- **Boundary Testing** — tests values at the limits of input ranges.\n\n*Infographic by Neo Kim (newsletter.systemdesign.one).*",
        "image": "/system-design-notes/software-testing-types.jpg",
        "imageAlt": "12 Types of System Testing for Software Engineers — Unit, Integration, System, Load, Error, Test Automation, Regression, UAT, Black Box, White Box, Exploratory, and Boundary testing"
      },
      {
        "id": "api-design",
        "title": "API Design",
        "content": "A well-designed API is the contract your whole system depends on. A practical roadmap for mastering API design, from fundamentals to production:\n\n1. **API fundamentals** — what an API is, types (REST, GraphQL, gRPC, SOAP), the request-response lifecycle, and API-first development.\n2. **HTTP protocol** — methods (GET/POST/PUT/PATCH/DELETE), status codes, headers & cookies, content types (JSON/XML/form data), URL structure, and HTTPS/TLS.\n3. **RESTful APIs** — REST principles, resource-based URLs, naming conventions, CRUD, versioning, and idempotency.\n4. **Request & response design** — JSON bodies, response structures, pagination, filtering, sorting, searching, and standardized error responses.\n5. **Authentication & authorization** — API keys, JWT, OAuth 2.0, OpenID Connect, RBAC, and session vs token auth.\n6. **Validation & error handling** — input validation, sanitization, validation libraries, error codes/messages, and exception handling.\n7. **Database design for APIs** — SQL vs NoSQL, relationships, efficient querying, transactions, consistency, and ORM practices.\n8. **Performance & scalability** — caching, Redis, rate limiting, compression, async processing, and load balancing.\n9. **API documentation** — OpenAPI/Swagger, interactive docs, SDK generation, and developer experience (DX).\n10. **Testing APIs** — unit, integration, automated, and performance testing, mock servers, and Postman.\n11. **API security** — HTTPS everywhere, CORS, preventing SQL injection/XSS/CSRF, secrets management, and best practices.\n12. **Deployment & monitoring** — API gateways, reverse proxies, Docker, Kubernetes, logging/monitoring, and CI/CD.\n13. **Advanced architectures** — GraphQL, gRPC, WebSockets, event-driven APIs, webhooks, and microservices communication.\n14. **Real-world projects** — auth, e-commerce, blog, payment, chat, and microservices APIs.\n15. **Interview & production skills** — API design interview questions, system design fundamentals, debugging production APIs, and real-world architecture discussions.",
        "image": "/system-design-notes/api-design-mastery-plan.jpg",
        "imageAlt": "Mastering Plan for API Design — 15 steps: API fundamentals, HTTP protocol, RESTful APIs, request/response design, authentication & authorization, validation & error handling, database design, performance & scalability, documentation, testing, security, deployment & monitoring, advanced architectures, real-world projects, and interview & production skills"
      },
      {
        "id": "throughput-in-system-design",
        "title": "Throughput in System Design",
        "content": "**Throughput** is the amount of work a system can handle in a given time — usually measured in **requests per second (RPS)** or **transactions per second (TPS)**. Higher throughput means the system can serve more users and handle more load. `Throughput = Total Successful Requests / Total Time Interval`.\n\n**Throughput vs latency** — throughput is *how much* work is done; latency is *how long* one unit of work takes. A system can have high throughput with acceptable latency; they are different axes.\n\n**Sources of bottlenecks** — CPU (high usage limits request processing), memory (insufficient RAM causes swapping), disk I/O (slow reads/writes), network (limited bandwidth), and external services (slow third-party APIs/DBs create backpressure).\n\n**Throughput vs concurrency** — concurrency is the number of tasks *in progress* at the same time (helps with latency); throughput is the number of tasks *completed* in a given time (measures actual capacity). They are not the same.\n\n**Strategies to improve throughput** — vertical scaling (more CPU/RAM/SSD, simple but hardware-limited), horizontal scaling (more machines, near-unlimited but more complex), load balancing (distribute traffic evenly), caching (serve frequent data from Redis/CDN), database optimization (indexing, query tuning, partitioning, connection pooling), asynchronous processing (offload long tasks to queues/workers), and efficient code (reduce locks, reuse connections).\n\n**Measuring & monitoring** — track RPS/TPS, successful vs failed requests, utilization, queue length, error rate, and the saturation point, using tools like Prometheus + Grafana, Datadog, and load testers (k6, JMeter, Locust). Load testing finds the maximum throughput and system limits before production.\n\n**Common trade-offs** — high throughput vs high cost, low latency vs more complexity, strong consistency vs lower throughput, more replication vs higher write latency. Balance these against business requirements. Example: a single server with no caching and sync processing might do ~500 RPS; scaled-out servers with read caching, async processing, an optimized DB, and a message queue can reach 5000+ RPS.",
        "image": "/system-design-notes/throughput-in-system-design.jpg",
        "imageAlt": "Throughput in System Design — definition (RPS/TPS), why it matters, throughput vs latency, how it's measured, factors affecting it, sources of bottlenecks (CPU, memory, disk I/O, network, external services), throughput vs concurrency, strategies to improve (vertical/horizontal scaling, load balancing, caching, DB optimization, async processing), a before/after example (500 RPS to 5000+ RPS), measuring & monitoring, throughput vs other metrics, best practices, and common trade-offs"
      },
      {
        "id": "operating-system-basics",
        "title": "Operating System Basics",
        "content": "An **operating system (OS)** is system software that manages hardware and software resources and provides services for computer programs — the layer between the **user**, the **OS**, and the **hardware**.\n\n**Main functions** — process management, memory management, file system management, device management, and security management.\n\n**Types of OS** — single-user, multi-user, real-time, and distributed.\n\n**Examples** — Windows, macOS, Linux, Android, iOS, and Unix.\n\n**Key parts:**\n- **Kernel** — the core part that manages system resources.\n- **Shell** — the interface that accepts commands and executes programs.\n- **GUI** — a graphical user interface using icons, windows, and menus.\n- **CLI** — a command-line interface that uses text commands.\n\nOS fundamentals underpin system design: how processes and threads are scheduled, how memory and I/O are managed, and how concurrency and resource limits shape a system's performance and scalability.",
        "image": "/system-design-notes/operating-system-basics.jpg",
        "imageAlt": "Operating System Basics — what an OS is (user / OS / hardware layers), main functions (process, memory, file system, device, and security management), types of OS (single-user, multi-user, real-time, distributed), examples (Windows, macOS, Linux, Android, iOS, Unix), and key parts (kernel, shell, GUI, CLI)"
      },
      {
        "id": "sticky-vs-stateless-sessions",
        "title": "Sticky vs Stateless Sessions",
        "content": "How you handle **session state** behind a load balancer decides how well your app scales. In short: **sticky sessions = stick to one server; stateless sessions = any server, any time.**\n\n**Sticky sessions** — the load balancer routes every request from the same client to the **same server** using session affinity (cookie/IP based), and the session is stored **on that server** (in-memory/file). Simple to implement and fine for stateful web apps, but scaling is limited and if that server goes down the session is lost (unless replicated). Tools: `JSESSIONID` cookie, NGINX sticky sessions, AWS ALB `lb_cookie`, Tomcat sessions.\n\n**Stateless sessions** — **any server can handle any request** because there's no server-specific state; the session lives **on the client** (e.g. a JWT) or in a **shared store** (Redis, DB). Requests are distributed to any available server (no affinity), so it scales horizontally, and a server failure has no impact — another server takes over. It needs token management or a shared session store. Tools: JWT, OAuth2, Redis session store, Spring Session, API Gateway + JWT.\n\n**Key takeaways:**\n- Sticky sessions bind a client to a specific server — simpler but less scalable.\n- Stateless sessions keep servers interchangeable — scalable, resilient, and microservices-friendly.\n- For modern scalable architectures, **stateless is the preferred approach**; if you still need server-side sessions at scale, use a **shared session store like Redis**.",
        "image": "/system-design-notes/sticky-vs-stateless-sessions.jpg",
        "imageAlt": "Sticky Sessions vs Stateless Sessions cheat sheet — comparison across definition, session storage, load balancer behavior, scalability, high availability, performance, complexity, use cases, tools, pros and cons, with flow diagrams: sticky sessions route a client to one server via session affinity, stateless sessions let any server validate a token (e.g. JWT) and handle the request"
      },
      {
        "id": "client-server-http-basics",
        "title": "Client–Server Architecture & HTTP Basics",
        "content": "The **client–server model** is the foundation of the web: a **client** (browser, mobile app, or another service) sends a request, and a **server** processes it and sends back a response. **Why it matters:** HTTP is the universal language of the web — every backend speaks it.\n\n**HTTP request** — what the client sends:\n- **Method** — GET / POST / PUT / PATCH / DELETE\n- **URL** — the resource being addressed\n- **Headers** — metadata (auth, content type, etc.)\n- **Body** — the payload (for POST/PUT/PATCH)\n\n**HTTP response** — what the server sends back:\n- **Status code** — the outcome of the request\n- **Headers** — response metadata\n- **Body** — the returned data\n\n**HTTP methods:**\n- **GET** — retrieve a resource.\n- **POST** — create a resource.\n- **PUT** — replace an entire resource.\n- **PATCH** — partially update a resource.\n- **DELETE** — remove a resource.\n\n**Status code classes** (think of a traffic light):\n- **2xx — Success** (e.g. 200 OK, 201 Created)\n- **3xx — Redirect** (e.g. 301 Moved Permanently, 304 Not Modified)\n- **4xx — Client Error** (e.g. 400 Bad Request, 401 Unauthorized, 404 Not Found)\n- **5xx — Server Error** (e.g. 500 Internal Server Error, 503 Service Unavailable)\n\n**Key term — Idempotent:** calling the same request multiple times has the same effect. **GET, PUT, and DELETE** are idempotent; **POST** is not (it creates a new resource each time).\n\n**Real-world scenario:** you type a wrong URL — the server returns **404 Not Found** because no route matches the path.",
        "image": "/system-design-notes/client-server-http-basics.jpg",
        "imageAlt": "Client–Server Model & HTTP Basics — a client sends an HTTP request (method, URL, headers, body) to a server, which returns an HTTP response (status code, headers, body); HTTP methods GET/POST/PUT/PATCH/DELETE; status code classes 2xx success, 3xx redirect, 4xx client error, 5xx server error shown as a traffic light; the idempotent term; and a 404 Not Found real-world scenario"
      },
      {
        "id": "cache-invalidation",
        "title": "Redis Cache Invalidation",
        "content": "Caching makes systems **fast**, but cache invalidation keeps them **correct** — a cache that never expires eventually becomes incorrect.\n\n**The problem:** requests flow User → **Redis (cache)** → **Database (source of truth)**. If the DB changes but the cache doesn't, users get **stale data**. Example: a product price is cached in Redis as ₹999 while the database has been updated to ₹899 — users see the old price.\n\n**Why it happens:** the same data may be cached in multiple places — **browser cache** (user's device), **CDN cache** (edge servers), **Redis cache** (in-memory), and **application cache** (in-process memory). The challenge is keeping **all cached copies in sync** when data changes.\n\n**Invalidation strategies:**\n1. **Time-To-Live (TTL)** — set an expiry (e.g. 10 min) so entries expire automatically. Simple, but may return stale data until expiry.\n2. **Delete on update** — after updating the database, delete the cache entry; the next request rebuilds it from the DB.\n3. **Write-through cache** — update the database and the cache together, so they're always in sync.\n4. **Event-based invalidation** — when the DB is updated, publish an event and every service clears its own cache.\n\n**Typical flow:** Client → Redis → **Hit** (return data, fast) or **Miss** (go to the DB, cache it, return). **When data changes:** update the DB (new price) → **invalidate the cache** → the next read is a cache **miss** → read the new value from the DB → update the cache → return fresh data. The rule: **invalidate first, then rebuild on the next request.**\n\n**Best practices:** set an appropriate TTL (not too long, not too short), invalidate the cache after data updates, avoid caching highly dynamic data, monitor cache hit ratio and performance, keep cache keys simple and consistent, and test your invalidation logic thoroughly.",
        "image": "/system-design-notes/cache-invalidation.jpg",
        "imageAlt": "Cache Invalidation — the problem (User → Redis cache → Database source of truth; a product price stale in cache), why it happens (browser, CDN, Redis, and application caches must stay in sync), invalidation strategies (TTL, delete on update, write-through cache, event-based invalidation), best practices, the typical hit/miss flow, and what happens when data changes (invalidate first, then rebuild on the next request)"
      },
      {
        "id": "consistency-in-system-design",
        "title": "Consistency in System Design",
        "content": "**Consistency** is the guarantee that every user reads the most recent and correct version of the data after an update. The goal: ensure data accuracy, prevent stale or conflicting data, and maintain a reliable user experience. It matters in **databases**, **distributed systems**, **replicated services**, and **caches**.\n\n**Why it matters:** it prevents users from seeing outdated information, maintains data integrity across multiple nodes, and keeps business operations reliable — critical for financial, healthcare, and inventory systems. Think bank account balances, online payments, airline seat reservations, and inventory management.\n\n**Types of consistency:**\n- **Strong consistency** — every read returns the latest successful write and all users see the same data immediately. Higher latency, maximum correctness.\n- **Eventual consistency** — updates propagate over time, so different nodes may temporarily return different values, but eventually all replicas converge. Lower latency, better scalability.\n- **Read-after-write consistency** — a user immediately sees their own recent updates. Common in user-facing applications.\n- **Session consistency** — consistency is maintained during a user's session, preventing inconsistent reads within the same session.\n- **Causal consistency** — related operations are observed in the correct order, while independent operations may appear in different orders.\n\n**Factors affecting consistency:** data replication across multiple nodes, network latency and partitions, concurrent updates from multiple users, database synchronization delays, and distributed transactions.\n\n**Techniques to maintain it:**\n- **Distributed transactions** — coordinate updates across multiple services.\n- **Consensus algorithms** — Paxos and Raft agree on a single system state.\n- **Quorum reads and writes** — a majority of replicas confirm operations before completion.\n- **Database replication** — keep replicas synchronized with the primary database.\n- **Optimistic locking** — detect conflicting updates before committing changes.\n- **Pessimistic locking** — lock resources to prevent simultaneous modifications.\n\n**Consistency vs availability:** consistency means every read returns the latest data; availability means every request receives a response, even during failures. **Insight:** during a network partition, distributed systems often trade consistency for availability (**CAP theorem**).\n\n**Challenges:** replication lag, network partitions, high write latency, distributed transaction complexity, conflict resolution between replicas, and balancing scalability against correctness.\n\n**In system design interviews:** 1. Identify the consistency requirements for the application. 2. Discuss strong vs eventual consistency. 3. Explain replication and synchronization strategies. 4. Consider CAP theorem trade-offs. 5. Justify design decisions based on business requirements.\n\n**Real-world examples:** banking systems and payment processing use **strong consistency**; social media feeds, DNS systems, and product catalogs use **eventual consistency**.\n\n*Infographic by @e_opore on X.*",
        "image": "/system-design-notes/consistency-in-system-design.jpeg",
        "imageAlt": "Consistency in System Design — what consistency is (definition and goal; important in databases, distributed systems, replicated services, and caches), why it matters (bank balances, online payments, airline seat reservations, inventory management), types of consistency (strong, eventual, read-after-write, session, causal), factors affecting consistency, techniques to maintain it (distributed transactions, consensus algorithms like Paxos and Raft, quorum reads and writes, database replication, optimistic and pessimistic locking), consistency vs availability with the CAP theorem insight, challenges (replication lag, network partitions, high write latency), a 5-step approach for system design interviews, and real-world examples (banking and payments use strong consistency; social feeds, DNS, and product catalogs use eventual consistency)"
      },
      {
        "id": "distributed-caching-redis",
        "title": "Distributed Caching with Redis — Eviction Policies & Clustering",
        "content": "**1. What is Distributed Caching?** Distributed caching stores frequently accessed data in memory across multiple machines rather than on a single box. The goal is to **reduce latency** and cut load on the primary database, while **improving scalability and availability**. **Redis** is an in-memory, high-performance caching system, and a *distributed Redis cache* spreads that in-memory store across several nodes so the application can read hot data far faster than hitting disk-backed storage.\n\n**2. High-Level Architecture.** The flow runs **Client / Application** (web, mobile, services) → **Cache Layer (Redis Cluster)** → **Database (Source of Truth)**. The cache layer is a set of master nodes — `Node 1 (Master)`, `Node 2 (Master)` … `Node N (Master)` — that sit in front of the database. The application talks to the cluster first; the database remains the authoritative source of truth and is only consulted on a cache miss or for writes.\n\n**3. Redis Data Structures (Common Use).** Each structure maps to a natural use case:\n- **String** `{key: value}` — sessions, tokens, counters.\n- **Hash** — user profiles, objects, product details.\n- **List** — queues, feeds, recent items.\n- **Set** — tags, followers, unique items.\n- **Sorted Set** — leaderboards, rankings, scores.\n\n**4. Eviction Policies.** When `maxmemory` is reached, Redis removes keys according to the configured eviction policy:\n- **noeviction** — Don't evict any key; write operations will fail. Best for critical data and small datasets.\n- **allkeys-lru** — Evict least recently used keys among all keys. Best for general purpose caching.\n- **volatile-lru** — Evict least recently used keys with an expire set. Best when only some keys have TTL.\n- **allkeys-lfu** — Evict least frequently used keys among all keys. Best for data with skewed access patterns.\n- **volatile-lfu** — Evict least frequently used keys with an expire set. Best for TTL-based plus frequency-aware workloads.\n- **allkeys-random** — Evict random keys. Best for uniform access patterns.\n- **volatile-random** — Evict random keys with an expire set. Best when some keys have TTL.\n- **volatile-ttl** — Evict keys with the nearest expire time. Best for short-lived data caches.\n\nTip: use `maxmemory-policy` to set eviction behavior, e.g. `maxmemory-policy allkeys-lru`.\n\n**5. Redis Clustering.** Redis Cluster provides **horizontal scalability** and **high availability**. Data is **sharded** across multiple nodes, and each shard can have replicas for failover. In the cluster topology, `Master 1 (Shard 1)`, `Master 2 (Shard 2)` … `Master N (Shard N)` each own a slice of the keyspace and are backed by `Replica 1.1`, `Replica 2.1` … `Replica N.1`; clients/applications connect to the whole cluster. Key concepts: **Sharding** — keys are distributed using hash slots `0-16383`; **Replication** — each master can have replicas; **Failover** — automatic master promotion if a master fails; **Consistency** — eventual consistency.\n\n**6. How Requests are Handled.** The five steps: (1) client sends a request with a key; (2) the client or proxy computes the hash slot for that key; (3) the request is routed to the node responsible for that slot; (4) the node serves the request (or forwards if needed); (5) if a node fails, a replica is promoted and slots are rebalanced. The request flow is: **Client / Application** → **Hash Slot Calculation** using `CRC16 % 16384` → **Route to Responsible Node** → **Serve from Redis** → **Response to Client**. Slot ownership example in a sharded cluster: `Node 1 (Slots 0-5460)`, `Node 2 (Slots 5461-10922)`, … `Node N (Slots …)`.\n\n**7. Data Consistency Strategies.** Three patterns balance freshness against speed:\n- **Cache-Aside (Lazy Loading)** — read through the cache; on a miss, read from the DB and set the cache. On writes, write to the DB and invalidate the cache.\n- **Write-Through** — write to cache and DB at the same time.\n- **Write-Behind (Write-Back)** — write to cache, then asynchronously write to the DB.\n\n**8. Scalability & High Availability.** **Horizontal Scaling** — add more nodes to the cluster to increase capacity. **Replication** — replicas ensure high availability and read scaling. **Automatic Failover** — if a master fails, a replica is promoted automatically. **Slot Rebalancing** — Redis Cluster rebalances slots when nodes join or leave.\n\n**9. Best Practices.** Use appropriate data structures; set a proper TTL for cache entries; choose the right eviction policy for your workload; monitor memory usage and hit ratio; use connection pooling with Redis clients; enable persistence (`AOF`/`RDB`) if needed; test failover and backup strategies; and use Redis Cluster for production workloads.\n\n**10. Example Use Cases.**\n- **Session Store** — store user sessions in Redis with TTL.\n- **Product Catalog** — cache product details to reduce DB load.\n- **Leaderboards** — use a Sorted Set for rankings.\n- **Rate Limiting** — use counters with expiration.\n- **Real-time Analytics** — cache aggregations for dashboards.\n\n**Useful Redis Commands.**\n- `SET key value [EX seconds]`\n- `GET key`\n- `DEL key`\n- `EXPIRE key seconds`\n- `HSET key field value`\n- `HGETALL key`\n- `LPUSH key value`\n- `LRANGE key 0 -1`\n- `ZADD key score member`\n- `ZRANGE key 0 -1 WITHSCORES`\n\n*Infographic by @e_opore on X.*",
        "image": "/system-design-notes/distributed-caching-redis.jpg",
        "imageAlt": "Day 36 of 100 System Design infographic on Distributed Caching with Redis covering eviction policies and clustering. Panels: (1) What is distributed caching — in-memory data across machines to cut latency and DB load, with a distributed Redis cache diagram; (2) High-level architecture flowing Client/Application to Cache Layer/Redis Cluster of master nodes to Database as source of truth; (3) Redis data structures table mapping String, Hash, List, Set, and Sorted Set to use cases; (4) Eviction policies table listing noeviction, allkeys-lru, volatile-lru, allkeys-lfu, volatile-lfu, allkeys-random, volatile-random, and volatile-ttl with descriptions and best use cases plus a maxmemory-policy tip; (5) Redis clustering topology of masters and replicas with sharding across hash slots 0-16383, replication, failover, and eventual consistency; (6) How requests are handled — five steps and a request flow using CRC16 modulo 16384 hash slot calculation with slot ranges like 0-5460 and 5461-10922; (7) Data consistency strategies Cache-Aside lazy loading, Write-Through, and Write-Behind; (8) Scalability and high availability via horizontal scaling, replication, automatic failover, and slot rebalancing; (9) Best practices; and (10) Example use cases — session store, product catalog, leaderboards, rate limiting, real-time analytics — plus a list of useful Redis commands. By @e_opore on X."
      },
      {
        "id": "database-caching-patterns",
        "title": "Database Caching Patterns — Cache-Aside, Read-Through & Write-Behind",
        "content": "**1. Why Database Caching?** Databases are comparatively slow and expensive to hit for frequent reads, so serving hot data from an in-memory cache reduces load, improves response time, and boosts scalability. There is no single best approach — the right caching pattern depends on your workload shape (read-heavy vs write-heavy) and your consistency needs. The basic topology is simple: the **Application** talks to a fast **Cache** and falls back to a slow **Database**.\n\n**2. When to Use Which Pattern?** This table maps each pattern to what it is best for and its main trade-off:\n\n- **Cache-Aside (Lazy Loading)** — Best for: general purpose, read-heavy workloads. Trade-offs: more logic lives in the application.\n- **Read-Through** — Best for: simpler apps that want a consistent access layer. Trade-offs: the cache layer itself is more complex.\n- **Write-Behind** — Best for: write-heavy workloads with batch updates. Trade-offs: data can be stale and there is possible data loss.\n\n**3. Key Components.** Four pieces make up any caching setup. The **Application** sends requests and uses the cache. The **Cache** (e.g. `Redis` or `Memcached`) stores frequently accessed data in memory. The **Database** is the source of truth and durable, persistent storage. The **Cache Layer / Client** handles the caching logic and policies that tie it all together.\n\n**4. Cache-Aside (Lazy Loading).** Here the application manages the cache directly. On a **read**, the app first issues `Get(key)` to the cache; on a *Miss* it queries the database, receives the data, and writes it back with `Set(key, data)` before returning it — so data is loaded lazily, only when first requested. On a **write**, the app updates the database and then issues `Invalidate/Delete key` to drop the now-stale cache entry. Pros: it is simple and gives the application full control. Cons: more code lives in the application, and every cache miss adds latency (the extra DB round-trip plus the populate step). Use for: general purpose, balanced read/write workloads.\n\n**5. Read-Through.** The cache manages reads itself — the cache-aside logic is hidden inside a dedicated cache layer, so the application just asks the cache and never talks to the DB on reads. On a **read**, the app calls `Get(key)`; the cache layer checks itself, and on a *Miss* it queries the database, stores the result with a store-in-cache step, and returns the data to the app. On a **write**, the flow updates the database and then invalidates/deletes the key. Pros: it simplifies application code and centralizes caching logic in one place. Cons: the cache layer is more complex and less flexible. Use for: simple apps with consistent access patterns.\n\n**6. Write-Behind (Write-Back).** Writes are cached first and written to the database later, asynchronously. On a **write**, the application sends `Write(key, data)` which is stored in the cache and acknowledged (`Ack`) immediately — the app does not wait for the DB. A separate **background process** then flushes those buffered writes to the database in batches. Reads still use `Get(key)` and return data from the cache. Pros: very high write performance and reduced DB load, since writes are batched and the slow database is off the critical path. Cons: data can be stale and there is a real risk of data loss if the cache fails before a flush completes. Use for: write-heavy work such as logging, analytics, and IoT.\n\n**7. Pattern Comparison.** Comparing the three patterns across key aspects:\n\n- **Who manages cache?** — Cache-Aside: the Application. Read-Through: the Cache Layer. Write-Behind: the Cache Layer.\n- **Read Flow** — Cache-Aside: app checks cache first. Read-Through: cache checks and loads. Write-Behind: read from cache.\n- **Write Flow** — Cache-Aside: write DB then invalidate. Read-Through: write DB then invalidate. Write-Behind: write to cache, flush later.\n- **Complexity** — Cache-Aside: Medium. Read-Through: Medium-High. Write-Behind: High.\n- **Data Freshness** — Cache-Aside: High. Read-Through: High. Write-Behind: Lower (eventual).\n- **Best For** — Cache-Aside: general use. Read-Through: simple and consistent. Write-Behind: write-heavy systems.\n\n**8. Cache Invalidation Strategies.** Keeping cached data correct relies on a few tactics. `TTL` (Time To Live) auto-expires keys after some time. **Write Invalidation** deletes or expires keys on database updates. **Versioning** stores a version alongside the key to avoid serving stale data. **Event-driven** invalidation reacts to events (e.g. `Kafka`, `SNS`) to invalidate entries when the source changes.\n\n**9. Best Practices.** Choose the right pattern for the workload. Set an appropriate `TTL` to balance freshness against performance. Use consistent key naming and hashing. Monitor cache hit ratio, latency, and memory usage. Handle cache failures gracefully by falling back to the DB. Warm up the cache for hot data when possible.\n\n**10. Example Use Cases.** An **E-commerce Product Catalog** uses **Cache-Aside** because reads are heavy and updates are infrequent. A **User Session Store** uses **Read-Through** to simplify app logic and keep consistent access. **Analytics / Logs** use **Write-Behind** because of high write volume handled in batches. A **Notifications Count** uses **Cache-Aside** for fast reads with only occasional updates.\n\n**11. Monitoring Metrics.** Watch **Hit Ratio** (cache hits / total requests), **Latency** (avg / 95th / 99th percentile), **Memory Usage** (cache size and evictions), **Evictions** (key eviction rate), and **Error Rate** (cache and DB errors).\n\n**12. Summary.** Use Cache-Aside for flexibility and control, Read-Through for simpler apps with consistent access, and Write-Behind for maximum write performance. Understand the trade-offs and choose based on your system's consistency and performance needs.\n\n*Infographic by @e_opore on X.*",
        "image": "/system-design-notes/database-caching-patterns.jpg",
        "imageAlt": "Day 37/100 System Design infographic titled Database Caching Patterns — Cache-Aside, Read-Through, Write-Behind, with 12 numbered panels. Panel 1 Why Database Caching explains databases are slow and expensive for frequent reads and shows Application to fast Cache to slow Database. Panel 2 is a When to Use Which Pattern table mapping Cache-Aside to read-heavy general purpose, Read-Through to simpler consistent apps, and Write-Behind to write-heavy batch workloads with their trade-offs. Panel 3 Key Components lists Application, Cache (Redis/Memcached), Database source of truth, and Cache Layer/Client. Panel 4 Cache-Aside (Lazy Loading) shows a read sequence Get(key), Miss, Query DB, Data, Set(key,data), Return Data, and a write sequence Update DB then Invalidate/Delete key, with pros simple and full control, cons more app code and cache-miss latency, use for balanced read/write. Panel 5 Read-Through shows the cache layer handling Get(key), Check Cache, Miss, Query DB, Store in Cache, Return Data, with writes updating DB then invalidating; pros simpler app code and centralized logic, cons complex less flexible cache layer, use for simple consistent apps. Panel 6 Write-Behind (Write-Back) shows Write(key,data) stored in cache, Ack immediately, a background process flushing batches to DB, and reads via Get(key); pros high write performance and reduced DB load, cons stale data and risk of loss, use for logging analytics IoT. Panel 7 Pattern Comparison table covers who manages cache, read flow, write flow, complexity, data freshness, and best for across the three patterns. Panel 8 Cache Invalidation Strategies lists TTL, Write Invalidation, Versioning, and Event-driven via Kafka or SNS. Panel 9 Best Practices lists choosing the right pattern, setting TTL, consistent key naming, monitoring, graceful failure fallback, and cache warm-up. Panel 10 Example Use Cases pairs E-commerce Product Catalog with Cache-Aside, User Session Store with Read-Through, Analytics/Logs with Write-Behind, and Notifications Count with Cache-Aside. Panel 11 Monitoring Metrics lists Hit Ratio, Latency, Memory Usage, Evictions, and Error Rate. Panel 12 Summary recommends Cache-Aside for control, Read-Through for simplicity, and Write-Behind for write performance. Redis logo in the corner, by @e_opore on X."
      },
      {
        "id": "cdn-caching-invalidation-headers",
        "title": "CDN Caching — Invalidation & Cache-Control Headers",
        "content": "**1. What is a CDN?** A **CDN (Content Delivery Network)** is a distributed network of servers that caches content at **edge locations** physically closer to users. Instead of every request travelling all the way back to your central `origin` server, the CDN serves a copy from a nearby edge, which improves performance, reduces latency, and offloads traffic from origin servers. CDNs are most commonly used for static assets such as images, CSS, JS, videos, and cacheable APIs. The payoff is faster delivery, better availability, and the ability to scale globally.\n\n**2. CDN Architecture.** A CDN sits between users and the origin. Users' requests are directed into the **CDN Network**, which is made up of many **edge locations**, also called **POPs (Points of Presence)** — Edge Location 1, Edge Location 2, through Edge Location N. Behind them sits the **Origin Server** (an S3 bucket, web server, or application server) which holds the authoritative copy of the content. **DNS / Anycast Routing** is what steers each user to the geographically nearest POP, so the same hostname resolves to different edges depending on where the user is.\n\n**3. How CDN Caching Works** (the request flow): (1) A user makes a request for content. (2) DNS routes the request to the nearest CDN edge (POP). (3) If the content is already cached at the edge, it is served straight to the user — a **HIT**. (4) If it is not cached, the edge fetches it from the origin, caches it, and then serves it to the user — a **MISS**. (5) Subsequent requests are served directly from the edge until the cache expires or is invalidated. The panel's legend distinguishes three arrows: the solid **User Request**, the dashed **Miss (Fetch from Origin)**, and the **Cached Response (Hit)**. The key mechanic is that the first miss populates the edge, and every hit afterward avoids the origin round-trip entirely.\n\n**4. Cache-Control Headers.** These are HTTP headers set by the origin to control caching behavior. Each row is Header / Description / Example:\n- `Cache-Control` — Directives for caches (public, private, max-age, etc.). Example: `Cache-Control: public, max-age=3600`\n- `max-age` — Time in seconds the response is fresh. Example: `Cache-Control: max-age=600`\n- `s-maxage` — Overrides `max-age` for shared caches (CDNs). Example: `Cache-Control: s-maxage=86400`\n- `no-cache` — Must revalidate with origin before use. Example: `Cache-Control: no-cache`\n- `no-store` — Do not store anywhere (private or shared). Example: `Cache-Control: no-store`\n- `must-revalidate` — Cannot use stale content after expiration. Example: `Cache-Control: max-age=0, must-revalidate`\n- `immutable` — Content will never change during `max-age`. Example: `Cache-Control: max-age=31536000, immutable`\n- `private` — Cache only in browser, not in shared caches. Example: `Cache-Control: private`\n- `public` — Cacheable in browser and shared caches (CDNs). Example: `Cache-Control: public`\n\n**5. Cache Invalidation Methods.** Content changes, so caches need ways to expire or evict stale copies:\n- **Time-Based Expiration (TTL)** — Content is invalidated automatically after the TTL (`max-age`) expires.\n- **Purge / Invalidate by URL** — Explicitly remove specific URL(s) from the CDN cache.\n- **Purge by Tag / Group** — Invalidate multiple URLs at once using tags (e.g. `/products/*`).\n- **Versioned URLs** — Change the URL (e.g. `app.v2.js`) to bypass the old cache.\n- **Soft Purge (Stale-While-Revalidate)** — Serve stale content while fetching fresh content in the background.\n- **Surrogate-Control (Header)** — CDN-specific caching directives that affect shared caches only.\nChoose the right method based on content type and update frequency.\n\n**6. Cache-Control in Action.** For a **Static File (Long Cache)** — a JS asset — the origin sends `Cache-Control: public, max-age=31536000, immutable` with `Expires: Wed, 21 May 2025 12:00:00 GMT`. This means it is cached for one year, and both the CDN and browser can reuse it without revalidation. For a **Dynamic API Response (Short Cache)** — a JSON payload — the origin sends `Cache-Control: public, max-age=60, stale-while-revalidate=30` and `Surrogate-Control: max-age=60, stale-while-revalidate=30`. This keeps it fresh for 60 seconds, can serve stale content for 30 more seconds while revalidating, and improves performance under load. **Header Precedence (High → Low)** is `s-maxage` > `max-age` > `Expires`: `s-maxage` is used by shared caches (CDN), `max-age` is the fallback, and `Expires` is the legacy mechanism.\n\n**7. Invalidation Flow (Purge by URL).** (1) A Developer / Admin issues a Purge / Invalidate URL request to the **CDN Control Plane / API**. (2) The control plane propagates the invalidation out to the **CDN Edge Locations**. (3) The cached object is removed at the edges. (4) On subsequent requests, the edge fetches fresh content — (5) on the next miss it fetches from the Origin Server. The net effect is that a purge clears the stale object everywhere so the next request rebuilds the cache from a fresh origin copy.\n\n**8. Cache-Control + Invalidation Best Practices.** Set an appropriate TTL for each content type. Use a long cache for versioned/static assets. Use a short cache with `stale-while-revalidate` for APIs. Purge only what's necessary (precise URLs / tags). Automate invalidation in CI/CD pipelines. Monitor cache hit ratio and latency. Use `Surrogate-Control` for CDN-specific tuning. Avoid `no-cache` unless absolutely required.\n\n**9. Example Cache-Control Recipes** (Use Case / Header):\n- Static Assets (JS, CSS, Images) — `Cache-Control: public, max-age=31536000, immutable`\n- HTML (Frequent Updates) — `Cache-Control: public, max-age=300, must-revalidate`\n- API (Short-lived) — `Cache-Control: public, max-age=60, stale-while-revalidate=30`\n- User-Specific Data — `Cache-Control: private, max-age=0, must-revalidate`\n- Prevent Caching (Sensitive Data) — `Cache-Control: no-store`\n\n**10. CDN Providers & Features.** \n- **Cloudflare** — Global Edge Network, Cache Rules, Cache Purge API.\n- **AWS CloudFront** — Global Edge Locations, Invalidation API, Origin Shield.\n- **Fastly** — Fast Edge Network, Surrogate Keys, Soft Purge.\n- **Akamai** — Adaptive Acceleration, Edge Logic, Cache Invalidation.\n- **Azure CDN** — Microsoft Backbone, Rules Engine, Cache Invalidation.\n\n**11. Key Takeaways.** CDNs cache content at the edge to deliver it faster. Cache-Control headers instruct how content is cached. Use proper TTLs and invalidation strategies to keep content fresh. Combine headers plus invalidation plus monitoring for best results.\n\n**12. Summary.** CDNs + smart caching + effective invalidation = fast, scalable, and reliable applications for users worldwide. Cache smart. Deliver faster.\n\n*Infographic by @e_opore on X.*",
        "image": "/system-design-notes/cdn-caching.jpg",
        "imageAlt": "Day 38/100 System Design infographic titled 'CDN Caching — Invalidation and Cache-Control Headers' by @e_opore, with 12 panels. Panel 1 defines a CDN as an edge cache close to users that improves performance, reduces latency, and offloads origin, used for static assets, giving faster delivery, better availability, and global scale, showing a User to CDN Edge to Origin Server diagram. Panel 2 shows CDN architecture: users routed into a CDN Network of Edge Locations/POPs 1 through N in front of an Origin Server (S3/web/app), with DNS/Anycast Routing. Panel 3 lists the 5-step caching flow (request, DNS routes to nearest edge POP, HIT serves from edge, MISS fetches from origin then caches and serves, subsequent requests from edge until expiry/invalidation) plus a legend for User Request, Miss, and Cached Response arrows. Panel 4 is a Cache-Control Headers table (Cache-Control, max-age, s-maxage, no-cache, no-store, must-revalidate, immutable, private, public) with descriptions and examples. Panel 5 lists invalidation methods: TTL expiration, Purge by URL, Purge by Tag/Group, Versioned URLs, Soft Purge/stale-while-revalidate, Surrogate-Control header. Panel 6 shows Cache-Control in action: static file cached one year with immutable, dynamic API max-age=60 with stale-while-revalidate=30 and Surrogate-Control, and header precedence s-maxage > max-age > Expires. Panel 7 diagrams the Purge-by-URL invalidation flow from Developer to CDN Control Plane to edge locations, removing cached objects and refetching from origin. Panel 8 gives best practices for TTLs, versioned assets, stale-while-revalidate, precise purges, CI/CD automation, monitoring, Surrogate-Control, and avoiding no-cache. Panel 9 is a recipes table mapping static assets, HTML, API, user-specific, and sensitive data to Cache-Control headers. Panel 10 lists providers Cloudflare, AWS CloudFront, Fastly, Akamai, and Azure CDN with their features. Panel 11 gives key takeaways and Panel 12 summarizes that CDNs plus smart caching plus invalidation yield fast, scalable, reliable global apps."
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 48?",
        "options": [
          "System Design Fundamentals",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 48 focuses on System Design Fundamentals."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 4: Advanced System Design",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 4: Advanced System Design."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=m8Icp_Cid5o",
    "youtubeTitle": "System Design Interview Guide — Exponent",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 49,
    "slug": "url-shortener-hld",
    "track": "thunder",
    "day": 49,
    "title": "URL Shortener — HLD",
    "subtitle": "Design TinyURL / bit.ly at scale",
    "duration": "2 hrs",
    "createdOn": "2 Sept 2026",
    "status": "published",
    "topics": [
      "Use cases",
      "API design",
      "Hashing & encoding",
      "Database schema",
      "Scaling reads & writes"
    ],
    "sections": [
      {
        "id": "use-cases",
        "title": "Use cases",
        "content": "Learn **Use cases** in Day 49 of Thunder: 100 Days of Code. Design TinyURL / bit.ly at scale",
        "tryIt": "console.log(\"Day 49: URL Shortener — HLD\");"
      },
      {
        "id": "api-design",
        "title": "API design",
        "content": "Learn **API design** in Day 49 of Thunder: 100 Days of Code. Design TinyURL / bit.ly at scale",
        "tryIt": "console.log(\"Day 49: URL Shortener — HLD\");"
      },
      {
        "id": "hashing-and-encoding",
        "title": "Hashing & encoding",
        "content": "Learn **Hashing & encoding** in Day 49 of Thunder: 100 Days of Code. Design TinyURL / bit.ly at scale",
        "tryIt": "console.log(\"Day 49: URL Shortener — HLD\");"
      },
      {
        "id": "database-schema",
        "title": "Database schema",
        "content": "Learn **Database schema** in Day 49 of Thunder: 100 Days of Code. Design TinyURL / bit.ly at scale",
        "tryIt": "console.log(\"Day 49: URL Shortener — HLD\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 49?",
        "options": [
          "URL Shortener — HLD",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 49 focuses on URL Shortener — HLD."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 4: Advanced System Design",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 4: Advanced System Design."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=HHUi8F_qAXM",
    "youtubeTitle": "How Does a URL Shortener Work? — ByteByteGo",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 50,
    "slug": "rate-limiter-design",
    "track": "thunder",
    "day": 50,
    "title": "Rate Limiter Design",
    "subtitle": "Design a distributed rate limiting service",
    "duration": "2 hrs",
    "createdOn": "3 Sept 2026",
    "status": "published",
    "topics": [
      "Requirements",
      "Algorithms",
      "Redis implementation",
      "Distributed challenges",
      "Interview walkthrough"
    ],
    "sections": [
      {
        "id": "requirements",
        "title": "Requirements",
        "content": "Learn **Requirements** in Day 50 of Thunder: 100 Days of Code. Design a distributed rate limiting service",
        "tryIt": "console.log(\"Day 50: Rate Limiter Design\");"
      },
      {
        "id": "algorithms",
        "title": "Algorithms",
        "content": "Learn **Algorithms** in Day 50 of Thunder: 100 Days of Code. Design a distributed rate limiting service",
        "tryIt": "console.log(\"Day 50: Rate Limiter Design\");"
      },
      {
        "id": "redis-implementation",
        "title": "Redis implementation",
        "content": "Learn **Redis implementation** in Day 50 of Thunder: 100 Days of Code. Design a distributed rate limiting service",
        "tryIt": "console.log(\"Day 50: Rate Limiter Design\");"
      },
      {
        "id": "distributed-challenges",
        "title": "Distributed challenges",
        "content": "Learn **Distributed challenges** in Day 50 of Thunder: 100 Days of Code. Design a distributed rate limiting service",
        "tryIt": "console.log(\"Day 50: Rate Limiter Design\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 50?",
        "options": [
          "Rate Limiter Design",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 50 focuses on Rate Limiter Design."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 4: Advanced System Design",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 4: Advanced System Design."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=MIJFyUPG4Z4",
    "youtubeTitle": "Design a Distributed Rate Limiter — Hello Interview",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 51,
    "slug": "notification-system-design",
    "track": "thunder",
    "day": 51,
    "title": "Notification System Design",
    "subtitle": "Push, email, SMS at scale",
    "duration": "2 hrs",
    "createdOn": "4 Sept 2026",
    "status": "published",
    "topics": [
      "Notification types",
      "Queue-based delivery",
      "Fan-out patterns",
      "Priority & retries",
      "User preferences"
    ],
    "sections": [
      {
        "id": "notification-types",
        "title": "Notification types",
        "content": "Learn **Notification types** in Day 51 of Thunder: 100 Days of Code. Push, email, SMS at scale",
        "tryIt": "console.log(\"Day 51: Notification System Design\");"
      },
      {
        "id": "queue-based-delivery",
        "title": "Queue-based delivery",
        "content": "Learn **Queue-based delivery** in Day 51 of Thunder: 100 Days of Code. Push, email, SMS at scale",
        "tryIt": "console.log(\"Day 51: Notification System Design\");"
      },
      {
        "id": "fan-out-patterns",
        "title": "Fan-out patterns",
        "content": "Learn **Fan-out patterns** in Day 51 of Thunder: 100 Days of Code. Push, email, SMS at scale",
        "tryIt": "console.log(\"Day 51: Notification System Design\");"
      },
      {
        "id": "priority-and-retries",
        "title": "Priority & retries",
        "content": "Learn **Priority & retries** in Day 51 of Thunder: 100 Days of Code. Push, email, SMS at scale",
        "tryIt": "console.log(\"Day 51: Notification System Design\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 51?",
        "options": [
          "Notification System Design",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 51 focuses on Notification System Design."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 4: Advanced System Design",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 4: Advanced System Design."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=t-4r2AsJz_Q",
    "youtubeTitle": "Build Your Own Notification Engine | System Design — Coder Army",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 52,
    "slug": "news-feed-design",
    "track": "thunder",
    "day": 52,
    "title": "News Feed Design",
    "subtitle": "Fan-out on write vs fan-out on read",
    "duration": "2 hrs",
    "createdOn": "5 Sept 2026",
    "status": "published",
    "topics": [
      "Feed generation",
      "Fan-out strategies",
      "Ranking & ranking",
      "Caching feeds",
      "Celebrity problem"
    ],
    "sections": [
      {
        "id": "feed-generation",
        "title": "Feed generation",
        "content": "Learn **Feed generation** in Day 52 of Thunder: 100 Days of Code. Fan-out on write vs fan-out on read",
        "tryIt": "console.log(\"Day 52: News Feed Design\");"
      },
      {
        "id": "fan-out-strategies",
        "title": "Fan-out strategies",
        "content": "Learn **Fan-out strategies** in Day 52 of Thunder: 100 Days of Code. Fan-out on write vs fan-out on read",
        "tryIt": "console.log(\"Day 52: News Feed Design\");"
      },
      {
        "id": "ranking-and-ranking",
        "title": "Ranking & ranking",
        "content": "Learn **Ranking & ranking** in Day 52 of Thunder: 100 Days of Code. Fan-out on write vs fan-out on read",
        "tryIt": "console.log(\"Day 52: News Feed Design\");"
      },
      {
        "id": "caching-feeds",
        "title": "Caching feeds",
        "content": "Learn **Caching feeds** in Day 52 of Thunder: 100 Days of Code. Fan-out on write vs fan-out on read",
        "tryIt": "console.log(\"Day 52: News Feed Design\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 52?",
        "options": [
          "News Feed Design",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 52 focuses on News Feed Design."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 4: Advanced System Design",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 4: Advanced System Design."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=Qj4-GruzyDU",
    "youtubeTitle": "Design Facebook News Feed — System Design — Hello Interview",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 53,
    "slug": "chat-application-design",
    "track": "thunder",
    "day": 53,
    "title": "Chat Application Design",
    "subtitle": "Real-time messaging at scale",
    "duration": "2 hrs",
    "createdOn": "6 Sept 2026",
    "status": "published",
    "topics": [
      "WebSockets at scale",
      "Message storage",
      "Online presence",
      "Group chat",
      "Delivery guarantees"
    ],
    "sections": [
      {
        "id": "websockets-at-scale",
        "title": "WebSockets at scale",
        "content": "Learn **WebSockets at scale** in Day 53 of Thunder: 100 Days of Code. Real-time messaging at scale",
        "tryIt": "console.log(\"Day 53: Chat Application Design\");"
      },
      {
        "id": "message-storage",
        "title": "Message storage",
        "content": "Learn **Message storage** in Day 53 of Thunder: 100 Days of Code. Real-time messaging at scale",
        "tryIt": "console.log(\"Day 53: Chat Application Design\");"
      },
      {
        "id": "online-presence",
        "title": "Online presence",
        "content": "Learn **Online presence** in Day 53 of Thunder: 100 Days of Code. Real-time messaging at scale",
        "tryIt": "console.log(\"Day 53: Chat Application Design\");"
      },
      {
        "id": "group-chat",
        "title": "Group chat",
        "content": "Learn **Group chat** in Day 53 of Thunder: 100 Days of Code. Real-time messaging at scale",
        "tryIt": "console.log(\"Day 53: Chat Application Design\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 53?",
        "options": [
          "Chat Application Design",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 53 focuses on Chat Application Design."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 4: Advanced System Design",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 4: Advanced System Design."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=vvhC64hQZMk",
    "youtubeTitle": "WhatsApp System Design — Chat Messaging — Gaurav Sen",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 54,
    "slug": "e-commerce-platform-design",
    "track": "thunder",
    "day": 54,
    "title": "E-commerce Platform Design",
    "subtitle": "Catalog, cart, orders, and payments",
    "duration": "2 hrs",
    "createdOn": "7 Sept 2026",
    "status": "published",
    "topics": [
      "Product catalog",
      "Shopping cart",
      "Order service",
      "Payment flow",
      "Inventory management"
    ],
    "sections": [
      {
        "id": "product-catalog",
        "title": "Product catalog",
        "content": "Learn **Product catalog** in Day 54 of Thunder: 100 Days of Code. Catalog, cart, orders, and payments",
        "tryIt": "console.log(\"Day 54: E-commerce Platform Design\");"
      },
      {
        "id": "shopping-cart",
        "title": "Shopping cart",
        "content": "Learn **Shopping cart** in Day 54 of Thunder: 100 Days of Code. Catalog, cart, orders, and payments",
        "tryIt": "console.log(\"Day 54: E-commerce Platform Design\");"
      },
      {
        "id": "order-service",
        "title": "Order service",
        "content": "Learn **Order service** in Day 54 of Thunder: 100 Days of Code. Catalog, cart, orders, and payments",
        "tryIt": "console.log(\"Day 54: E-commerce Platform Design\");"
      },
      {
        "id": "payment-flow",
        "title": "Payment flow",
        "content": "Learn **Payment flow** in Day 54 of Thunder: 100 Days of Code. Catalog, cart, orders, and payments",
        "tryIt": "console.log(\"Day 54: E-commerce Platform Design\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 54?",
        "options": [
          "E-commerce Platform Design",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 54 focuses on E-commerce Platform Design."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 4: Advanced System Design",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 4: Advanced System Design."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=M-l7gVm69KI",
    "youtubeTitle": "eCommerce Architecture & Order Management Design — Architecture Bytes",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 55,
    "slug": "distributed-systems-basics",
    "track": "thunder",
    "day": 55,
    "title": "Distributed Systems Basics",
    "subtitle": "Nodes, partitions, clocks, and consensus intro",
    "duration": "2 hrs",
    "createdOn": "8 Sept 2026",
    "status": "published",
    "topics": [
      "Distributed nodes",
      "Network partitions",
      "Clock skew",
      "Leader election intro",
      "Failure modes"
    ],
    "sections": [
      {
        "id": "distributed-nodes",
        "title": "Distributed nodes",
        "content": "Learn **Distributed nodes** in Day 55 of Thunder: 100 Days of Code. Nodes, partitions, clocks, and consensus intro",
        "tryIt": "console.log(\"Day 55: Distributed Systems Basics\");"
      },
      {
        "id": "network-partitions",
        "title": "Network partitions",
        "content": "Learn **Network partitions** in Day 55 of Thunder: 100 Days of Code. Nodes, partitions, clocks, and consensus intro",
        "tryIt": "console.log(\"Day 55: Distributed Systems Basics\");"
      },
      {
        "id": "clock-skew",
        "title": "Clock skew",
        "content": "Learn **Clock skew** in Day 55 of Thunder: 100 Days of Code. Nodes, partitions, clocks, and consensus intro",
        "tryIt": "console.log(\"Day 55: Distributed Systems Basics\");"
      },
      {
        "id": "leader-election-intro",
        "title": "Leader election intro",
        "content": "Learn **Leader election intro** in Day 55 of Thunder: 100 Days of Code. Nodes, partitions, clocks, and consensus intro",
        "tryIt": "console.log(\"Day 55: Distributed Systems Basics\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 55?",
        "options": [
          "Distributed Systems Basics",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 55 focuses on Distributed Systems Basics."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 4: Advanced System Design",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 4: Advanced System Design."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=IJWwfMyPu1c",
    "youtubeTitle": "Distributed Systems Explained — System Design — ByteMonk",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 56,
    "slug": "cap-theorem-and-consistency",
    "track": "thunder",
    "day": 56,
    "title": "CAP Theorem & Consistency",
    "subtitle": "Consistency, availability, and partition tolerance",
    "duration": "2 hrs",
    "createdOn": "9 Sept 2026",
    "status": "published",
    "topics": [
      "CAP theorem",
      "CP vs AP systems",
      "Strong vs eventual consistency",
      "Real-world examples",
      "PACELC"
    ],
    "sections": [
      {
        "id": "cap-theorem",
        "title": "CAP theorem",
        "content": "Learn **CAP theorem** in Day 56 of Thunder: 100 Days of Code. Consistency, availability, and partition tolerance",
        "tryIt": "console.log(\"Day 56: CAP Theorem & Consistency\");"
      },
      {
        "id": "cp-vs-ap-systems",
        "title": "CP vs AP systems",
        "content": "Learn **CP vs AP systems** in Day 56 of Thunder: 100 Days of Code. Consistency, availability, and partition tolerance",
        "tryIt": "console.log(\"Day 56: CAP Theorem & Consistency\");"
      },
      {
        "id": "strong-vs-eventual-consistency",
        "title": "Strong vs eventual consistency",
        "content": "Learn **Strong vs eventual consistency** in Day 56 of Thunder: 100 Days of Code. Consistency, availability, and partition tolerance",
        "tryIt": "console.log(\"Day 56: CAP Theorem & Consistency\");"
      },
      {
        "id": "real-world-examples",
        "title": "Real-world examples",
        "content": "Learn **Real-world examples** in Day 56 of Thunder: 100 Days of Code. Consistency, availability, and partition tolerance",
        "tryIt": "console.log(\"Day 56: CAP Theorem & Consistency\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 56?",
        "options": [
          "CAP Theorem & Consistency",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 56 focuses on CAP Theorem & Consistency."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 4: Advanced System Design",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 4: Advanced System Design."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=BHqjEjzAicA",
    "youtubeTitle": "CAP Theorem Explained — Hussein Nasser",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 57,
    "slug": "consistency-and-availability-patterns",
    "track": "thunder",
    "day": 57,
    "title": "Consistency & Availability Patterns",
    "subtitle": "Replication, quorum, and conflict resolution",
    "duration": "2 hrs",
    "createdOn": "10 Sept 2026",
    "status": "published",
    "topics": [
      "Replication strategies",
      "Quorum reads/writes",
      "Conflict resolution",
      "CRDTs intro",
      "Saga pattern"
    ],
    "sections": [
      {
        "id": "replication-strategies",
        "title": "Replication strategies",
        "content": "Learn **Replication strategies** in Day 57 of Thunder: 100 Days of Code. Replication, quorum, and conflict resolution",
        "tryIt": "console.log(\"Day 57: Consistency & Availability Patterns\");"
      },
      {
        "id": "quorum-reads-writes",
        "title": "Quorum reads/writes",
        "content": "Learn **Quorum reads/writes** in Day 57 of Thunder: 100 Days of Code. Replication, quorum, and conflict resolution",
        "tryIt": "console.log(\"Day 57: Consistency & Availability Patterns\");"
      },
      {
        "id": "conflict-resolution",
        "title": "Conflict resolution",
        "content": "Learn **Conflict resolution** in Day 57 of Thunder: 100 Days of Code. Replication, quorum, and conflict resolution",
        "tryIt": "console.log(\"Day 57: Consistency & Availability Patterns\");"
      },
      {
        "id": "crdts-intro",
        "title": "CRDTs intro",
        "content": "Learn **CRDTs intro** in Day 57 of Thunder: 100 Days of Code. Replication, quorum, and conflict resolution",
        "tryIt": "console.log(\"Day 57: Consistency & Availability Patterns\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 57?",
        "options": [
          "Consistency & Availability Patterns",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 57 focuses on Consistency & Availability Patterns."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 4: Advanced System Design",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 4: Advanced System Design."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=gkg-FAEXIkY",
    "youtubeTitle": "A Friendly Intro to the CAP Theorem — Studying With Alex",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 58,
    "slug": "hld-interview-preparation",
    "track": "thunder",
    "day": 58,
    "title": "HLD Interview Preparation",
    "subtitle": "Framework, communication, and mock interviews",
    "duration": "2 hrs",
    "createdOn": "11 Sept 2026",
    "status": "published",
    "topics": [
      "Interview framework",
      "Clarifying requirements",
      "Drawing diagrams",
      "Trade-off discussion",
      "Mock walkthrough"
    ],
    "sections": [
      {
        "id": "interview-framework",
        "title": "Interview framework",
        "content": "Learn **Interview framework** in Day 58 of Thunder: 100 Days of Code. Framework, communication, and mock interviews",
        "tryIt": "console.log(\"Day 58: HLD Interview Preparation\");"
      },
      {
        "id": "clarifying-requirements",
        "title": "Clarifying requirements",
        "content": "Learn **Clarifying requirements** in Day 58 of Thunder: 100 Days of Code. Framework, communication, and mock interviews",
        "tryIt": "console.log(\"Day 58: HLD Interview Preparation\");"
      },
      {
        "id": "drawing-diagrams",
        "title": "Drawing diagrams",
        "content": "Learn **Drawing diagrams** in Day 58 of Thunder: 100 Days of Code. Framework, communication, and mock interviews",
        "tryIt": "console.log(\"Day 58: HLD Interview Preparation\");"
      },
      {
        "id": "trade-off-discussion",
        "title": "Trade-off discussion",
        "content": "Learn **Trade-off discussion** in Day 58 of Thunder: 100 Days of Code. Framework, communication, and mock interviews",
        "tryIt": "console.log(\"Day 58: HLD Interview Preparation\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 58?",
        "options": [
          "HLD Interview Preparation",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 58 focuses on HLD Interview Preparation."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 4: Advanced System Design",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 4: Advanced System Design."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=i7twT3x5yv8",
    "youtubeTitle": "System Design Interview — A Step-By-Step Guide — ByteByteGo",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 59,
    "slug": "system-design-playground",
    "track": "thunder",
    "day": 59,
    "title": "System Design Playground",
    "subtitle": "Practice problems and phase 4 recap",
    "duration": "2 hrs",
    "createdOn": "12 Sept 2026",
    "status": "published",
    "topics": [
      "Practice problems",
      "Parking lot design",
      "Paste bin design",
      "Review checklist",
      "Phase 4 recap"
    ],
    "sections": [
      {
        "id": "practice-problems",
        "title": "Practice problems",
        "content": "Learn **Practice problems** in Day 59 of Thunder: 100 Days of Code. Practice problems and phase 4 recap",
        "tryIt": "console.log(\"Day 59: System Design Playground\");"
      },
      {
        "id": "parking-lot-design",
        "title": "Parking lot design",
        "content": "Learn **Parking lot design** in Day 59 of Thunder: 100 Days of Code. Practice problems and phase 4 recap",
        "tryIt": "console.log(\"Day 59: System Design Playground\");"
      },
      {
        "id": "paste-bin-design",
        "title": "Paste bin design",
        "content": "Learn **Paste bin design** in Day 59 of Thunder: 100 Days of Code. Practice problems and phase 4 recap",
        "tryIt": "console.log(\"Day 59: System Design Playground\");"
      },
      {
        "id": "review-checklist",
        "title": "Review checklist",
        "content": "Learn **Review checklist** in Day 59 of Thunder: 100 Days of Code. Practice problems and phase 4 recap",
        "tryIt": "console.log(\"Day 59: System Design Playground\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 59?",
        "options": [
          "System Design Playground",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 59 focuses on System Design Playground."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 4: Advanced System Design",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 4: Advanced System Design."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=bUHFg8CZFws",
    "youtubeTitle": "System Design Mock Interview — Exponent",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 60,
    "slug": "react-fundamentals-and-jsx",
    "track": "thunder",
    "day": 60,
    "title": "React Fundamentals & JSX",
    "subtitle": "Components, JSX, and your first React app",
    "duration": "2 hrs",
    "createdOn": "13 Sept 2026",
    "status": "published",
    "topics": [
      "What is React",
      "JSX syntax",
      "Components",
      "Props basics",
      "Vite + React setup"
    ],
    "sections": [
      {
        "id": "what-is-react",
        "title": "What is React",
        "content": "Learn **What is React** in Day 60 of Thunder: 100 Days of Code. Components, JSX, and your first React app",
        "tryIt": "console.log(\"Day 60: React Fundamentals & JSX\");"
      },
      {
        "id": "jsx-syntax",
        "title": "JSX syntax",
        "content": "Learn **JSX syntax** in Day 60 of Thunder: 100 Days of Code. Components, JSX, and your first React app",
        "tryIt": "console.log(\"Day 60: React Fundamentals & JSX\");"
      },
      {
        "id": "components",
        "title": "Components",
        "content": "Learn **Components** in Day 60 of Thunder: 100 Days of Code. Components, JSX, and your first React app",
        "tryIt": "console.log(\"Day 60: React Fundamentals & JSX\");"
      },
      {
        "id": "props-basics",
        "title": "Props basics",
        "content": "Learn **Props basics** in Day 60 of Thunder: 100 Days of Code. Components, JSX, and your first React app",
        "tryIt": "console.log(\"Day 60: React Fundamentals & JSX\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 60?",
        "options": [
          "React Fundamentals & JSX",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 60 focuses on React Fundamentals & JSX."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 5: Frontend Development",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 5: Frontend Development."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
    "youtubeTitle": "React JS Crash Course — Traversy Media",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 61,
    "slug": "components-props-and-state",
    "track": "thunder",
    "day": 61,
    "title": "Components, Props & State",
    "subtitle": "useState, lifting state, and component composition",
    "duration": "2 hrs",
    "createdOn": "14 Sept 2026",
    "status": "published",
    "topics": [
      "Functional components",
      "useState hook",
      "Props drilling",
      "Lifting state up",
      "Component composition"
    ],
    "sections": [
      {
        "id": "functional-components",
        "title": "Functional components",
        "content": "Learn **Functional components** in Day 61 of Thunder: 100 Days of Code. useState, lifting state, and component composition",
        "tryIt": "console.log(\"Day 61: Components, Props & State\");"
      },
      {
        "id": "usestate-hook",
        "title": "useState hook",
        "content": "Learn **useState hook** in Day 61 of Thunder: 100 Days of Code. useState, lifting state, and component composition",
        "tryIt": "console.log(\"Day 61: Components, Props & State\");"
      },
      {
        "id": "props-drilling",
        "title": "Props drilling",
        "content": "Learn **Props drilling** in Day 61 of Thunder: 100 Days of Code. useState, lifting state, and component composition",
        "tryIt": "console.log(\"Day 61: Components, Props & State\");"
      },
      {
        "id": "lifting-state-up",
        "title": "Lifting state up",
        "content": "Learn **Lifting state up** in Day 61 of Thunder: 100 Days of Code. useState, lifting state, and component composition",
        "tryIt": "console.log(\"Day 61: Components, Props & State\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 61?",
        "options": [
          "Components, Props & State",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 61 focuses on Components, Props & State."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 5: Frontend Development",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 5: Frontend Development."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=uvEAvxWvwOs",
    "youtubeTitle": "Props in React Explained — Bro Code",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 62,
    "slug": "useeffect-and-lifecycle",
    "track": "thunder",
    "day": 62,
    "title": "useEffect & Lifecycle",
    "subtitle": "Side effects, dependencies, and cleanup",
    "duration": "2 hrs",
    "createdOn": "15 Sept 2026",
    "status": "published",
    "topics": [
      "useEffect basics",
      "Dependency array",
      "Cleanup functions",
      "Fetch on mount",
      "Common pitfalls"
    ],
    "sections": [
      {
        "id": "useeffect-basics",
        "title": "useEffect basics",
        "content": "Learn **useEffect basics** in Day 62 of Thunder: 100 Days of Code. Side effects, dependencies, and cleanup",
        "tryIt": "console.log(\"Day 62: useEffect & Lifecycle\");"
      },
      {
        "id": "dependency-array",
        "title": "Dependency array",
        "content": "Learn **Dependency array** in Day 62 of Thunder: 100 Days of Code. Side effects, dependencies, and cleanup",
        "tryIt": "console.log(\"Day 62: useEffect & Lifecycle\");"
      },
      {
        "id": "cleanup-functions",
        "title": "Cleanup functions",
        "content": "Learn **Cleanup functions** in Day 62 of Thunder: 100 Days of Code. Side effects, dependencies, and cleanup",
        "tryIt": "console.log(\"Day 62: useEffect & Lifecycle\");"
      },
      {
        "id": "fetch-on-mount",
        "title": "Fetch on mount",
        "content": "Learn **Fetch on mount** in Day 62 of Thunder: 100 Days of Code. Side effects, dependencies, and cleanup",
        "tryIt": "console.log(\"Day 62: useEffect & Lifecycle\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 62?",
        "options": [
          "useEffect & Lifecycle",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 62 focuses on useEffect & Lifecycle."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 5: Frontend Development",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 5: Frontend Development."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=YxkcMszKEYY",
    "youtubeTitle": "Master React Hooks — useEffect — Nova Designs",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 63,
    "slug": "react-router-and-navigation",
    "track": "thunder",
    "day": 63,
    "title": "React Router & Navigation",
    "subtitle": "SPA routing, nested routes, and URL params",
    "duration": "2 hrs",
    "createdOn": "16 Sept 2026",
    "status": "published",
    "topics": [
      "React Router setup",
      "Routes & Link",
      "URL parameters",
      "Nested routes",
      "Protected routes"
    ],
    "sections": [
      {
        "id": "react-router-setup",
        "title": "React Router setup",
        "content": "Learn **React Router setup** in Day 63 of Thunder: 100 Days of Code. SPA routing, nested routes, and URL params",
        "tryIt": "console.log(\"Day 63: React Router & Navigation\");"
      },
      {
        "id": "routes-and-link",
        "title": "Routes & Link",
        "content": "Learn **Routes & Link** in Day 63 of Thunder: 100 Days of Code. SPA routing, nested routes, and URL params",
        "tryIt": "console.log(\"Day 63: React Router & Navigation\");"
      },
      {
        "id": "url-parameters",
        "title": "URL parameters",
        "content": "Learn **URL parameters** in Day 63 of Thunder: 100 Days of Code. SPA routing, nested routes, and URL params",
        "tryIt": "console.log(\"Day 63: React Router & Navigation\");"
      },
      {
        "id": "nested-routes",
        "title": "Nested routes",
        "content": "Learn **Nested routes** in Day 63 of Thunder: 100 Days of Code. SPA routing, nested routes, and URL params",
        "tryIt": "console.log(\"Day 63: React Router & Navigation\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 63?",
        "options": [
          "React Router & Navigation",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 63 focuses on React Router & Navigation."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 5: Frontend Development",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 5: Frontend Development."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=Ul3y1LXxzdU",
    "youtubeTitle": "Learn React Router v6 in 45 Minutes — Web Dev Simplified",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 64,
    "slug": "forms-and-controlled-components",
    "track": "thunder",
    "day": 64,
    "title": "Forms & Controlled Components",
    "subtitle": "Form state, validation, and user input in React",
    "duration": "2 hrs",
    "createdOn": "17 Sept 2026",
    "status": "published",
    "topics": [
      "Controlled inputs",
      "Form state",
      "Validation patterns",
      "Submit handlers",
      "React Hook Form intro"
    ],
    "sections": [
      {
        "id": "controlled-inputs",
        "title": "Controlled inputs",
        "content": "Learn **Controlled inputs** in Day 64 of Thunder: 100 Days of Code. Form state, validation, and user input in React",
        "tryIt": "console.log(\"Day 64: Forms & Controlled Components\");"
      },
      {
        "id": "form-state",
        "title": "Form state",
        "content": "Learn **Form state** in Day 64 of Thunder: 100 Days of Code. Form state, validation, and user input in React",
        "tryIt": "console.log(\"Day 64: Forms & Controlled Components\");"
      },
      {
        "id": "validation-patterns",
        "title": "Validation patterns",
        "content": "Learn **Validation patterns** in Day 64 of Thunder: 100 Days of Code. Form state, validation, and user input in React",
        "tryIt": "console.log(\"Day 64: Forms & Controlled Components\");"
      },
      {
        "id": "submit-handlers",
        "title": "Submit handlers",
        "content": "Learn **Submit handlers** in Day 64 of Thunder: 100 Days of Code. Form state, validation, and user input in React",
        "tryIt": "console.log(\"Day 64: Forms & Controlled Components\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 64?",
        "options": [
          "Forms & Controlled Components",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 64 focuses on Forms & Controlled Components."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 5: Frontend Development",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 5: Frontend Development."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=yzqUCV3qPX0",
    "youtubeTitle": "React Controlled vs Uncontrolled Components — Thapa Technical",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 65,
    "slug": "typescript-essentials",
    "track": "thunder",
    "day": 65,
    "title": "TypeScript Essentials",
    "subtitle": "Types, interfaces, generics, and TS with JS",
    "duration": "2 hrs",
    "createdOn": "18 Sept 2026",
    "status": "published",
    "topics": [
      "Why TypeScript",
      "Basic types",
      "Interfaces & types",
      "Generics intro",
      "TS config"
    ],
    "sections": [
      {
        "id": "why-typescript",
        "title": "Why TypeScript",
        "content": "Learn **Why TypeScript** in Day 65 of Thunder: 100 Days of Code. Types, interfaces, generics, and TS with JS",
        "tryIt": "console.log(\"Day 65: TypeScript Essentials\");"
      },
      {
        "id": "basic-types",
        "title": "Basic types",
        "content": "Learn **Basic types** in Day 65 of Thunder: 100 Days of Code. Types, interfaces, generics, and TS with JS",
        "tryIt": "console.log(\"Day 65: TypeScript Essentials\");"
      },
      {
        "id": "interfaces-and-types",
        "title": "Interfaces & types",
        "content": "Learn **Interfaces & types** in Day 65 of Thunder: 100 Days of Code. Types, interfaces, generics, and TS with JS",
        "tryIt": "console.log(\"Day 65: TypeScript Essentials\");"
      },
      {
        "id": "generics-intro",
        "title": "Generics intro",
        "content": "Learn **Generics intro** in Day 65 of Thunder: 100 Days of Code. Types, interfaces, generics, and TS with JS",
        "tryIt": "console.log(\"Day 65: TypeScript Essentials\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 65?",
        "options": [
          "TypeScript Essentials",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 65 focuses on TypeScript Essentials."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 5: Frontend Development",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 5: Frontend Development."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=d56mG7DezGs",
    "youtubeTitle": "TypeScript Tutorial for Beginners — Programming with Mosh",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 66,
    "slug": "typescript-with-react",
    "track": "thunder",
    "day": 66,
    "title": "TypeScript with React",
    "subtitle": "Typing components, props, hooks, and events",
    "duration": "2 hrs",
    "createdOn": "19 Sept 2026",
    "status": "published",
    "topics": [
      "Typing props",
      "Typing useState",
      "Typing events",
      "Typing API responses",
      "TS + React patterns"
    ],
    "sections": [
      {
        "id": "typing-props",
        "title": "Typing props",
        "content": "Learn **Typing props** in Day 66 of Thunder: 100 Days of Code. Typing components, props, hooks, and events",
        "tryIt": "console.log(\"Day 66: TypeScript with React\");"
      },
      {
        "id": "typing-usestate",
        "title": "Typing useState",
        "content": "Learn **Typing useState** in Day 66 of Thunder: 100 Days of Code. Typing components, props, hooks, and events",
        "tryIt": "console.log(\"Day 66: TypeScript with React\");"
      },
      {
        "id": "typing-events",
        "title": "Typing events",
        "content": "Learn **Typing events** in Day 66 of Thunder: 100 Days of Code. Typing components, props, hooks, and events",
        "tryIt": "console.log(\"Day 66: TypeScript with React\");"
      },
      {
        "id": "typing-api-responses",
        "title": "Typing API responses",
        "content": "Learn **Typing API responses** in Day 66 of Thunder: 100 Days of Code. Typing components, props, hooks, and events",
        "tryIt": "console.log(\"Day 66: TypeScript with React\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 66?",
        "options": [
          "TypeScript with React",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 66 focuses on TypeScript with React."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 5: Frontend Development",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 5: Frontend Development."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=aJP1AbZSqz8",
    "youtubeTitle": "TypeScript in React — Full Tutorial — freeCodeCamp",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 67,
    "slug": "tailwind-css-fundamentals",
    "track": "thunder",
    "day": 67,
    "title": "Tailwind CSS Fundamentals",
    "subtitle": "Utility-first CSS and responsive design",
    "duration": "2 hrs",
    "createdOn": "20 Sept 2026",
    "status": "published",
    "topics": [
      "Utility classes",
      "Responsive modifiers",
      "Flexbox & grid",
      "Custom config",
      "Component patterns"
    ],
    "sections": [
      {
        "id": "utility-classes",
        "title": "Utility classes",
        "content": "Learn **Utility classes** in Day 67 of Thunder: 100 Days of Code. Utility-first CSS and responsive design",
        "tryIt": "console.log(\"Day 67: Tailwind CSS Fundamentals\");"
      },
      {
        "id": "responsive-modifiers",
        "title": "Responsive modifiers",
        "content": "Learn **Responsive modifiers** in Day 67 of Thunder: 100 Days of Code. Utility-first CSS and responsive design",
        "tryIt": "console.log(\"Day 67: Tailwind CSS Fundamentals\");"
      },
      {
        "id": "flexbox-and-grid",
        "title": "Flexbox & grid",
        "content": "Learn **Flexbox & grid** in Day 67 of Thunder: 100 Days of Code. Utility-first CSS and responsive design",
        "tryIt": "console.log(\"Day 67: Tailwind CSS Fundamentals\");"
      },
      {
        "id": "custom-config",
        "title": "Custom config",
        "content": "Learn **Custom config** in Day 67 of Thunder: 100 Days of Code. Utility-first CSS and responsive design",
        "tryIt": "console.log(\"Day 67: Tailwind CSS Fundamentals\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 67?",
        "options": [
          "Tailwind CSS Fundamentals",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 67 focuses on Tailwind CSS Fundamentals."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 5: Frontend Development",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 5: Frontend Development."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=6biMWgD6_JY",
    "youtubeTitle": "Tailwind CSS Full Course — JavaScript Mastery",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 68,
    "slug": "context-api-and-state-management",
    "track": "thunder",
    "day": 68,
    "title": "Context API & State Management",
    "subtitle": "Global state without prop drilling",
    "duration": "2 hrs",
    "createdOn": "21 Sept 2026",
    "status": "published",
    "topics": [
      "createContext",
      "Provider & Consumer",
      "useContext hook",
      "When to use Context",
      "Context vs Redux"
    ],
    "sections": [
      {
        "id": "createcontext",
        "title": "createContext",
        "content": "Learn **createContext** in Day 68 of Thunder: 100 Days of Code. Global state without prop drilling",
        "tryIt": "console.log(\"Day 68: Context API & State Management\");"
      },
      {
        "id": "provider-and-consumer",
        "title": "Provider & Consumer",
        "content": "Learn **Provider & Consumer** in Day 68 of Thunder: 100 Days of Code. Global state without prop drilling",
        "tryIt": "console.log(\"Day 68: Context API & State Management\");"
      },
      {
        "id": "usecontext-hook",
        "title": "useContext hook",
        "content": "Learn **useContext hook** in Day 68 of Thunder: 100 Days of Code. Global state without prop drilling",
        "tryIt": "console.log(\"Day 68: Context API & State Management\");"
      },
      {
        "id": "when-to-use-context",
        "title": "When to use Context",
        "content": "Learn **When to use Context** in Day 68 of Thunder: 100 Days of Code. Global state without prop drilling",
        "tryIt": "console.log(\"Day 68: Context API & State Management\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 68?",
        "options": [
          "Context API & State Management",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 68 focuses on Context API & State Management."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 5: Frontend Development",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 5: Frontend Development."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=6RhOzQciVwI",
    "youtubeTitle": "React Context API — Net Ninja",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 69,
    "slug": "redux-toolkit",
    "track": "thunder",
    "day": 69,
    "title": "Redux Toolkit",
    "subtitle": "Store, slices, and async thunks",
    "duration": "2 hrs",
    "createdOn": "22 Sept 2026",
    "status": "published",
    "topics": [
      "Redux concepts",
      "Redux Toolkit setup",
      "createSlice",
      "useSelector & useDispatch",
      "createAsyncThunk"
    ],
    "sections": [
      {
        "id": "redux-concepts",
        "title": "Redux concepts",
        "content": "Learn **Redux concepts** in Day 69 of Thunder: 100 Days of Code. Store, slices, and async thunks",
        "tryIt": "console.log(\"Day 69: Redux Toolkit\");"
      },
      {
        "id": "redux-toolkit-setup",
        "title": "Redux Toolkit setup",
        "content": "Learn **Redux Toolkit setup** in Day 69 of Thunder: 100 Days of Code. Store, slices, and async thunks",
        "tryIt": "console.log(\"Day 69: Redux Toolkit\");"
      },
      {
        "id": "createslice",
        "title": "createSlice",
        "content": "Learn **createSlice** in Day 69 of Thunder: 100 Days of Code. Store, slices, and async thunks",
        "tryIt": "console.log(\"Day 69: Redux Toolkit\");"
      },
      {
        "id": "useselector-and-usedispatch",
        "title": "useSelector & useDispatch",
        "content": "Learn **useSelector & useDispatch** in Day 69 of Thunder: 100 Days of Code. Store, slices, and async thunks",
        "tryIt": "console.log(\"Day 69: Redux Toolkit\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 69?",
        "options": [
          "Redux Toolkit",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 69 focuses on Redux Toolkit."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 5: Frontend Development",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 5: Frontend Development."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=_shA5Xwe8_4",
    "youtubeTitle": "Redux Toolkit Tutorial — Programming with Mosh",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 70,
    "slug": "react-performance-optimization",
    "track": "thunder",
    "day": 70,
    "title": "React Performance Optimization",
    "subtitle": "memo, useMemo, useCallback, and lazy loading",
    "duration": "2 hrs",
    "createdOn": "23 Sept 2026",
    "status": "published",
    "topics": [
      "React.memo",
      "useMemo & useCallback",
      "Code splitting",
      "Lazy loading",
      "Profiler intro"
    ],
    "sections": [
      {
        "id": "react-memo",
        "title": "React.memo",
        "content": "Learn **React.memo** in Day 70 of Thunder: 100 Days of Code. memo, useMemo, useCallback, and lazy loading",
        "tryIt": "console.log(\"Day 70: React Performance Optimization\");"
      },
      {
        "id": "usememo-and-usecallback",
        "title": "useMemo & useCallback",
        "content": "Learn **useMemo & useCallback** in Day 70 of Thunder: 100 Days of Code. memo, useMemo, useCallback, and lazy loading",
        "tryIt": "console.log(\"Day 70: React Performance Optimization\");"
      },
      {
        "id": "code-splitting",
        "title": "Code splitting",
        "content": "Learn **Code splitting** in Day 70 of Thunder: 100 Days of Code. memo, useMemo, useCallback, and lazy loading",
        "tryIt": "console.log(\"Day 70: React Performance Optimization\");"
      },
      {
        "id": "lazy-loading",
        "title": "Lazy loading",
        "content": "Learn **Lazy loading** in Day 70 of Thunder: 100 Days of Code. memo, useMemo, useCallback, and lazy loading",
        "tryIt": "console.log(\"Day 70: React Performance Optimization\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 70?",
        "options": [
          "React Performance Optimization",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 70 focuses on React Performance Optimization."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 5: Frontend Development",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 5: Frontend Development."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=CaShN6mCJB0",
    "youtubeTitle": "8 React Performance Optimization Techniques — xplodivity",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 71,
    "slug": "frontend-projects",
    "track": "thunder",
    "day": 71,
    "title": "Frontend Projects",
    "subtitle": "Build real UIs with React + Tailwind",
    "duration": "2 hrs",
    "createdOn": "24 Sept 2026",
    "status": "published",
    "topics": [
      "Project planning",
      "Component architecture",
      "API integration",
      "UI polish",
      "Frontend best practices"
    ],
    "sections": [
      {
        "id": "project-planning",
        "title": "Project planning",
        "content": "Learn **Project planning** in Day 71 of Thunder: 100 Days of Code. Build real UIs with React + Tailwind",
        "tryIt": "console.log(\"Day 71: Frontend Projects\");"
      },
      {
        "id": "component-architecture",
        "title": "Component architecture",
        "content": "Learn **Component architecture** in Day 71 of Thunder: 100 Days of Code. Build real UIs with React + Tailwind",
        "tryIt": "console.log(\"Day 71: Frontend Projects\");"
      },
      {
        "id": "api-integration",
        "title": "API integration",
        "content": "Learn **API integration** in Day 71 of Thunder: 100 Days of Code. Build real UIs with React + Tailwind",
        "tryIt": "console.log(\"Day 71: Frontend Projects\");"
      },
      {
        "id": "ui-polish",
        "title": "UI polish",
        "content": "Learn **UI polish** in Day 71 of Thunder: 100 Days of Code. Build real UIs with React + Tailwind",
        "tryIt": "console.log(\"Day 71: Frontend Projects\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 71?",
        "options": [
          "Frontend Projects",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 71 focuses on Frontend Projects."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 5: Frontend Development",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 5: Frontend Development."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=G6D9cBaLViA",
    "youtubeTitle": "Learn React With This ONE Project — Tech With Tim",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 72,
    "slug": "deploying-react-applications",
    "track": "thunder",
    "day": 72,
    "title": "Deploying React Applications",
    "subtitle": "Vercel, Netlify, and production builds",
    "duration": "2 hrs",
    "createdOn": "25 Sept 2026",
    "status": "published",
    "topics": [
      "Production build",
      "Environment variables",
      "Vercel deploy",
      "Netlify deploy",
      "CI/CD for frontend"
    ],
    "sections": [
      {
        "id": "production-build",
        "title": "Production build",
        "content": "Learn **Production build** in Day 72 of Thunder: 100 Days of Code. Vercel, Netlify, and production builds",
        "tryIt": "console.log(\"Day 72: Deploying React Applications\");"
      },
      {
        "id": "environment-variables",
        "title": "Environment variables",
        "content": "Learn **Environment variables** in Day 72 of Thunder: 100 Days of Code. Vercel, Netlify, and production builds",
        "tryIt": "console.log(\"Day 72: Deploying React Applications\");"
      },
      {
        "id": "vercel-deploy",
        "title": "Vercel deploy",
        "content": "Learn **Vercel deploy** in Day 72 of Thunder: 100 Days of Code. Vercel, Netlify, and production builds",
        "tryIt": "console.log(\"Day 72: Deploying React Applications\");"
      },
      {
        "id": "netlify-deploy",
        "title": "Netlify deploy",
        "content": "Learn **Netlify deploy** in Day 72 of Thunder: 100 Days of Code. Vercel, Netlify, and production builds",
        "tryIt": "console.log(\"Day 72: Deploying React Applications\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 72?",
        "options": [
          "Deploying React Applications",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 72 focuses on Deploying React Applications."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 5: Frontend Development",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 5: Frontend Development."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=AP0fKMrmyKA",
    "youtubeTitle": "How to Deploy a React App Free on Netlify — Code Bless You",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 73,
    "slug": "full-stack-capstone-planning",
    "track": "thunder",
    "day": 73,
    "title": "Full-Stack Capstone Planning",
    "subtitle": "Architecture, milestones, and tech stack decisions",
    "duration": "2 hrs",
    "createdOn": "26 Sept 2026",
    "status": "published",
    "topics": [
      "Capstone overview",
      "Choosing features",
      "Architecture diagram",
      "Milestones",
      "Team workflow"
    ],
    "sections": [
      {
        "id": "capstone-overview",
        "title": "Capstone overview",
        "content": "Learn **Capstone overview** in Day 73 of Thunder: 100 Days of Code. Architecture, milestones, and tech stack decisions",
        "tryIt": "console.log(\"Day 73: Full-Stack Capstone Planning\");"
      },
      {
        "id": "choosing-features",
        "title": "Choosing features",
        "content": "Learn **Choosing features** in Day 73 of Thunder: 100 Days of Code. Architecture, milestones, and tech stack decisions",
        "tryIt": "console.log(\"Day 73: Full-Stack Capstone Planning\");"
      },
      {
        "id": "architecture-diagram",
        "title": "Architecture diagram",
        "content": "Learn **Architecture diagram** in Day 73 of Thunder: 100 Days of Code. Architecture, milestones, and tech stack decisions",
        "tryIt": "console.log(\"Day 73: Full-Stack Capstone Planning\");"
      },
      {
        "id": "milestones",
        "title": "Milestones",
        "content": "Learn **Milestones** in Day 73 of Thunder: 100 Days of Code. Architecture, milestones, and tech stack decisions",
        "tryIt": "console.log(\"Day 73: Full-Stack Capstone Planning\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 73?",
        "options": [
          "Full-Stack Capstone Planning",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 73 focuses on Full-Stack Capstone Planning."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 6: Capstone Projects",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 6: Capstone Projects."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=nu_pCVPKzTk",
    "youtubeTitle": "Full Stack Web Development — freeCodeCamp",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 74,
    "slug": "full-stack-capstone-build-i",
    "track": "thunder",
    "day": 74,
    "title": "Full-Stack Capstone — Build I",
    "subtitle": "Backend API, database, and auth",
    "duration": "2 hrs",
    "createdOn": "27 Sept 2026",
    "status": "published",
    "topics": [
      "Project setup",
      "Database models",
      "REST API",
      "Authentication",
      "API testing"
    ],
    "sections": [
      {
        "id": "project-setup",
        "title": "Project setup",
        "content": "Learn **Project setup** in Day 74 of Thunder: 100 Days of Code. Backend API, database, and auth",
        "tryIt": "console.log(\"Day 74: Full-Stack Capstone — Build I\");"
      },
      {
        "id": "database-models",
        "title": "Database models",
        "content": "Learn **Database models** in Day 74 of Thunder: 100 Days of Code. Backend API, database, and auth",
        "tryIt": "console.log(\"Day 74: Full-Stack Capstone — Build I\");"
      },
      {
        "id": "rest-api",
        "title": "REST API",
        "content": "Learn **REST API** in Day 74 of Thunder: 100 Days of Code. Backend API, database, and auth",
        "tryIt": "console.log(\"Day 74: Full-Stack Capstone — Build I\");"
      },
      {
        "id": "authentication",
        "title": "Authentication",
        "content": "Learn **Authentication** in Day 74 of Thunder: 100 Days of Code. Backend API, database, and auth",
        "tryIt": "console.log(\"Day 74: Full-Stack Capstone — Build I\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 74?",
        "options": [
          "Full-Stack Capstone — Build I",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 74 focuses on Full-Stack Capstone — Build I."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 6: Capstone Projects",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 6: Capstone Projects."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=F9gB5b4jgOI",
    "youtubeTitle": "MERN Stack Tutorial for Beginners with Deployment — freeCodeCamp",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 75,
    "slug": "full-stack-capstone-build-ii",
    "track": "thunder",
    "day": 75,
    "title": "Full-Stack Capstone — Build II",
    "subtitle": "React frontend, state, and API integration",
    "duration": "2 hrs",
    "createdOn": "28 Sept 2026",
    "status": "published",
    "topics": [
      "React UI build",
      "Routing",
      "API integration",
      "State management",
      "Error handling"
    ],
    "sections": [
      {
        "id": "react-ui-build",
        "title": "React UI build",
        "content": "Learn **React UI build** in Day 75 of Thunder: 100 Days of Code. React frontend, state, and API integration",
        "tryIt": "console.log(\"Day 75: Full-Stack Capstone — Build II\");"
      },
      {
        "id": "routing",
        "title": "Routing",
        "content": "Learn **Routing** in Day 75 of Thunder: 100 Days of Code. React frontend, state, and API integration",
        "tryIt": "console.log(\"Day 75: Full-Stack Capstone — Build II\");"
      },
      {
        "id": "api-integration",
        "title": "API integration",
        "content": "Learn **API integration** in Day 75 of Thunder: 100 Days of Code. React frontend, state, and API integration",
        "tryIt": "console.log(\"Day 75: Full-Stack Capstone — Build II\");"
      },
      {
        "id": "state-management",
        "title": "State management",
        "content": "Learn **State management** in Day 75 of Thunder: 100 Days of Code. React frontend, state, and API integration",
        "tryIt": "console.log(\"Day 75: Full-Stack Capstone — Build II\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 75?",
        "options": [
          "Full-Stack Capstone — Build II",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 75 focuses on Full-Stack Capstone — Build II."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 6: Capstone Projects",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 6: Capstone Projects."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=8-2bGey_lgk",
    "youtubeTitle": "Full-Stack CRUD in One Video — MERN — ProjectWithMe",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 76,
    "slug": "full-stack-capstone-deploy",
    "track": "thunder",
    "day": 76,
    "title": "Full-Stack Capstone — Deploy",
    "subtitle": "Docker, cloud deploy, and go live",
    "duration": "2 hrs",
    "createdOn": "29 Sept 2026",
    "status": "published",
    "topics": [
      "Dockerize app",
      "Environment setup",
      "Cloud deployment",
      "Domain & HTTPS",
      "Monitoring basics"
    ],
    "sections": [
      {
        "id": "dockerize-app",
        "title": "Dockerize app",
        "content": "Learn **Dockerize app** in Day 76 of Thunder: 100 Days of Code. Docker, cloud deploy, and go live",
        "tryIt": "console.log(\"Day 76: Full-Stack Capstone — Deploy\");"
      },
      {
        "id": "environment-setup",
        "title": "Environment setup",
        "content": "Learn **Environment setup** in Day 76 of Thunder: 100 Days of Code. Docker, cloud deploy, and go live",
        "tryIt": "console.log(\"Day 76: Full-Stack Capstone — Deploy\");"
      },
      {
        "id": "cloud-deployment",
        "title": "Cloud deployment",
        "content": "Learn **Cloud deployment** in Day 76 of Thunder: 100 Days of Code. Docker, cloud deploy, and go live",
        "tryIt": "console.log(\"Day 76: Full-Stack Capstone — Deploy\");"
      },
      {
        "id": "domain-and-https",
        "title": "Domain & HTTPS",
        "content": "Learn **Domain & HTTPS** in Day 76 of Thunder: 100 Days of Code. Docker, cloud deploy, and go live",
        "tryIt": "console.log(\"Day 76: Full-Stack Capstone — Deploy\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 76?",
        "options": [
          "Full-Stack Capstone — Deploy",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 76 focuses on Full-Stack Capstone — Deploy."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 6: Capstone Projects",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 6: Capstone Projects."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=cVEOhgPziO8",
    "youtubeTitle": "How to Deploy a Full-Stack React App Free — GreatStack",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 77,
    "slug": "portfolio-and-code-review",
    "track": "thunder",
    "day": 77,
    "title": "Portfolio & Code Review",
    "subtitle": "Polish, document, and present your capstone",
    "duration": "2 hrs",
    "createdOn": "30 Sept 2026",
    "status": "published",
    "topics": [
      "README & docs",
      "Code review checklist",
      "Portfolio presentation",
      "GitHub showcase",
      "Phase 6 recap"
    ],
    "sections": [
      {
        "id": "readme-and-docs",
        "title": "README & docs",
        "content": "Learn **README & docs** in Day 77 of Thunder: 100 Days of Code. Polish, document, and present your capstone",
        "tryIt": "console.log(\"Day 77: Portfolio & Code Review\");"
      },
      {
        "id": "code-review-checklist",
        "title": "Code review checklist",
        "content": "Learn **Code review checklist** in Day 77 of Thunder: 100 Days of Code. Polish, document, and present your capstone",
        "tryIt": "console.log(\"Day 77: Portfolio & Code Review\");"
      },
      {
        "id": "portfolio-presentation",
        "title": "Portfolio presentation",
        "content": "Learn **Portfolio presentation** in Day 77 of Thunder: 100 Days of Code. Polish, document, and present your capstone",
        "tryIt": "console.log(\"Day 77: Portfolio & Code Review\");"
      },
      {
        "id": "github-showcase",
        "title": "GitHub showcase",
        "content": "Learn **GitHub showcase** in Day 77 of Thunder: 100 Days of Code. Polish, document, and present your capstone",
        "tryIt": "console.log(\"Day 77: Portfolio & Code Review\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 77?",
        "options": [
          "Portfolio & Code Review",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 77 focuses on Portfolio & Code Review."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 6: Capstone Projects",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 6: Capstone Projects."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=sR-3QKoKs2k",
    "youtubeTitle": "Responsive Portfolio Website — HTML, CSS & JS — MzCode",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 78,
    "slug": "git-and-github-advanced-workflows",
    "track": "thunder",
    "day": 78,
    "title": "Git & GitHub Advanced Workflows",
    "subtitle": "Branches, PRs, rebasing, and collaboration",
    "duration": "2 hrs",
    "createdOn": "1 Oct 2026",
    "status": "published",
    "topics": [
      "Branching strategies",
      "Pull requests",
      "Rebase vs merge",
      "Git hooks",
      "Conventional commits"
    ],
    "sections": [
      {
        "id": "branching-strategies",
        "title": "Branching strategies",
        "content": "Learn **Branching strategies** in Day 78 of Thunder: 100 Days of Code. Branches, PRs, rebasing, and collaboration",
        "tryIt": "console.log(\"Day 78: Git & GitHub Advanced Workflows\");"
      },
      {
        "id": "pull-requests",
        "title": "Pull requests",
        "content": "Learn **Pull requests** in Day 78 of Thunder: 100 Days of Code. Branches, PRs, rebasing, and collaboration",
        "tryIt": "console.log(\"Day 78: Git & GitHub Advanced Workflows\");"
      },
      {
        "id": "rebase-vs-merge",
        "title": "Rebase vs merge",
        "content": "Learn **Rebase vs merge** in Day 78 of Thunder: 100 Days of Code. Branches, PRs, rebasing, and collaboration",
        "tryIt": "console.log(\"Day 78: Git & GitHub Advanced Workflows\");"
      },
      {
        "id": "git-hooks",
        "title": "Git hooks",
        "content": "Learn **Git hooks** in Day 78 of Thunder: 100 Days of Code. Branches, PRs, rebasing, and collaboration",
        "tryIt": "console.log(\"Day 78: Git & GitHub Advanced Workflows\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 78?",
        "options": [
          "Git & GitHub Advanced Workflows",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 78 focuses on Git & GitHub Advanced Workflows."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 7: DevOps",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 7: DevOps."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=Uszj_k0DGsg",
    "youtubeTitle": "Git & GitHub Crash Course — Traversy Media",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 79,
    "slug": "linux-and-shell-essentials",
    "track": "thunder",
    "day": 79,
    "title": "Linux & Shell Essentials",
    "subtitle": "Commands, permissions, and scripting basics",
    "duration": "2 hrs",
    "createdOn": "2 Oct 2026",
    "status": "published",
    "topics": [
      "Linux file system",
      "Essential commands",
      "Permissions",
      "Bash scripting",
      "SSH basics"
    ],
    "sections": [
      {
        "id": "linux-file-system",
        "title": "Linux file system",
        "content": "Learn **Linux file system** in Day 79 of Thunder: 100 Days of Code. Commands, permissions, and scripting basics",
        "tryIt": "console.log(\"Day 79: Linux & Shell Essentials\");"
      },
      {
        "id": "essential-commands",
        "title": "Essential commands",
        "content": "Learn **Essential commands** in Day 79 of Thunder: 100 Days of Code. Commands, permissions, and scripting basics",
        "tryIt": "console.log(\"Day 79: Linux & Shell Essentials\");"
      },
      {
        "id": "permissions",
        "title": "Permissions",
        "content": "Learn **Permissions** in Day 79 of Thunder: 100 Days of Code. Commands, permissions, and scripting basics",
        "tryIt": "console.log(\"Day 79: Linux & Shell Essentials\");"
      },
      {
        "id": "bash-scripting",
        "title": "Bash scripting",
        "content": "Learn **Bash scripting** in Day 79 of Thunder: 100 Days of Code. Commands, permissions, and scripting basics",
        "tryIt": "console.log(\"Day 79: Linux & Shell Essentials\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 79?",
        "options": [
          "Linux & Shell Essentials",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 79 focuses on Linux & Shell Essentials."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 7: DevOps",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 7: DevOps."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=ZtqBQ68cfJc",
    "youtubeTitle": "Linux Crash Course — Traversy Media",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 80,
    "slug": "docker-fundamentals",
    "track": "thunder",
    "day": 80,
    "title": "Docker Fundamentals",
    "subtitle": "Images, containers, volumes, and Dockerfile",
    "duration": "2 hrs",
    "createdOn": "3 Oct 2026",
    "status": "published",
    "topics": [
      "What is Docker",
      "Images vs containers",
      "Dockerfile",
      "Volumes",
      "Docker Hub"
    ],
    "sections": [
      {
        "id": "what-is-docker",
        "title": "What is Docker",
        "content": "Learn **What is Docker** in Day 80 of Thunder: 100 Days of Code. Images, containers, volumes, and Dockerfile",
        "tryIt": "console.log(\"Day 80: Docker Fundamentals\");"
      },
      {
        "id": "images-vs-containers",
        "title": "Images vs containers",
        "content": "Learn **Images vs containers** in Day 80 of Thunder: 100 Days of Code. Images, containers, volumes, and Dockerfile",
        "tryIt": "console.log(\"Day 80: Docker Fundamentals\");"
      },
      {
        "id": "dockerfile",
        "title": "Dockerfile",
        "content": "Learn **Dockerfile** in Day 80 of Thunder: 100 Days of Code. Images, containers, volumes, and Dockerfile",
        "tryIt": "console.log(\"Day 80: Docker Fundamentals\");"
      },
      {
        "id": "volumes",
        "title": "Volumes",
        "content": "Learn **Volumes** in Day 80 of Thunder: 100 Days of Code. Images, containers, volumes, and Dockerfile",
        "tryIt": "console.log(\"Day 80: Docker Fundamentals\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 80?",
        "options": [
          "Docker Fundamentals",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 80 focuses on Docker Fundamentals."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 7: DevOps",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 7: DevOps."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=fqMOX6JJhGo",
    "youtubeTitle": "Docker Crash Course — Traversy Media",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 81,
    "slug": "docker-compose-and-multi-container-apps",
    "track": "thunder",
    "day": 81,
    "title": "Docker Compose & Multi-Container Apps",
    "subtitle": "Orchestrate app, DB, and cache with Compose",
    "duration": "2 hrs",
    "createdOn": "4 Oct 2026",
    "status": "published",
    "topics": [
      "docker-compose.yml",
      "Services & networks",
      "Multi-container apps",
      "Dev environments",
      "Compose commands"
    ],
    "sections": [
      {
        "id": "docker-compose-yml",
        "title": "docker-compose.yml",
        "content": "Learn **docker-compose.yml** in Day 81 of Thunder: 100 Days of Code. Orchestrate app, DB, and cache with Compose",
        "tryIt": "console.log(\"Day 81: Docker Compose & Multi-Container Apps\");"
      },
      {
        "id": "services-and-networks",
        "title": "Services & networks",
        "content": "Learn **Services & networks** in Day 81 of Thunder: 100 Days of Code. Orchestrate app, DB, and cache with Compose",
        "tryIt": "console.log(\"Day 81: Docker Compose & Multi-Container Apps\");"
      },
      {
        "id": "multi-container-apps",
        "title": "Multi-container apps",
        "content": "Learn **Multi-container apps** in Day 81 of Thunder: 100 Days of Code. Orchestrate app, DB, and cache with Compose",
        "tryIt": "console.log(\"Day 81: Docker Compose & Multi-Container Apps\");"
      },
      {
        "id": "dev-environments",
        "title": "Dev environments",
        "content": "Learn **Dev environments** in Day 81 of Thunder: 100 Days of Code. Orchestrate app, DB, and cache with Compose",
        "tryIt": "console.log(\"Day 81: Docker Compose & Multi-Container Apps\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 81?",
        "options": [
          "Docker Compose & Multi-Container Apps",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 81 focuses on Docker Compose & Multi-Container Apps."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 7: DevOps",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 7: DevOps."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=HG6yIjZapSA",
    "youtubeTitle": "Docker Compose Tutorial — Programming with Mosh",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 82,
    "slug": "ci-cd-pipelines",
    "track": "thunder",
    "day": 82,
    "title": "CI/CD Pipelines",
    "subtitle": "Automate build, test, and deploy",
    "duration": "2 hrs",
    "createdOn": "5 Oct 2026",
    "status": "published",
    "topics": [
      "CI vs CD",
      "Pipeline stages",
      "Automated testing",
      "Build artifacts",
      "Deploy automation"
    ],
    "sections": [
      {
        "id": "ci-vs-cd",
        "title": "CI vs CD",
        "content": "Learn **CI vs CD** in Day 82 of Thunder: 100 Days of Code. Automate build, test, and deploy",
        "tryIt": "console.log(\"Day 82: CI/CD Pipelines\");"
      },
      {
        "id": "pipeline-stages",
        "title": "Pipeline stages",
        "content": "Learn **Pipeline stages** in Day 82 of Thunder: 100 Days of Code. Automate build, test, and deploy",
        "tryIt": "console.log(\"Day 82: CI/CD Pipelines\");"
      },
      {
        "id": "automated-testing",
        "title": "Automated testing",
        "content": "Learn **Automated testing** in Day 82 of Thunder: 100 Days of Code. Automate build, test, and deploy",
        "tryIt": "console.log(\"Day 82: CI/CD Pipelines\");"
      },
      {
        "id": "build-artifacts",
        "title": "Build artifacts",
        "content": "Learn **Build artifacts** in Day 82 of Thunder: 100 Days of Code. Automate build, test, and deploy",
        "tryIt": "console.log(\"Day 82: CI/CD Pipelines\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 82?",
        "options": [
          "CI/CD Pipelines",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 82 focuses on CI/CD Pipelines."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 7: DevOps",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 7: DevOps."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=R8_veQiYBjI",
    "youtubeTitle": "GitHub Actions CI/CD — Traversy Media",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 83,
    "slug": "github-actions-deep-dive",
    "track": "thunder",
    "day": 83,
    "title": "GitHub Actions Deep Dive",
    "subtitle": "Workflows, secrets, and matrix builds",
    "duration": "2 hrs",
    "createdOn": "6 Oct 2026",
    "status": "published",
    "topics": [
      "Workflow syntax",
      "Triggers & jobs",
      "Secrets management",
      "Matrix builds",
      "Reusable workflows"
    ],
    "sections": [
      {
        "id": "workflow-syntax",
        "title": "Workflow syntax",
        "content": "Learn **Workflow syntax** in Day 83 of Thunder: 100 Days of Code. Workflows, secrets, and matrix builds",
        "tryIt": "console.log(\"Day 83: GitHub Actions Deep Dive\");"
      },
      {
        "id": "triggers-and-jobs",
        "title": "Triggers & jobs",
        "content": "Learn **Triggers & jobs** in Day 83 of Thunder: 100 Days of Code. Workflows, secrets, and matrix builds",
        "tryIt": "console.log(\"Day 83: GitHub Actions Deep Dive\");"
      },
      {
        "id": "secrets-management",
        "title": "Secrets management",
        "content": "Learn **Secrets management** in Day 83 of Thunder: 100 Days of Code. Workflows, secrets, and matrix builds",
        "tryIt": "console.log(\"Day 83: GitHub Actions Deep Dive\");"
      },
      {
        "id": "matrix-builds",
        "title": "Matrix builds",
        "content": "Learn **Matrix builds** in Day 83 of Thunder: 100 Days of Code. Workflows, secrets, and matrix builds",
        "tryIt": "console.log(\"Day 83: GitHub Actions Deep Dive\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 83?",
        "options": [
          "GitHub Actions Deep Dive",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 83 focuses on GitHub Actions Deep Dive."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 7: DevOps",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 7: DevOps."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=R8_veQiYBjI",
    "youtubeTitle": "GitHub Actions Tutorial — Traversy Media",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 84,
    "slug": "aws-cloud-basics",
    "track": "thunder",
    "day": 84,
    "title": "AWS Cloud Basics",
    "subtitle": "EC2, S3, RDS, and cloud fundamentals",
    "duration": "2 hrs",
    "createdOn": "7 Oct 2026",
    "status": "published",
    "topics": [
      "Cloud computing intro",
      "EC2 instances",
      "S3 storage",
      "RDS databases",
      "IAM basics"
    ],
    "sections": [
      {
        "id": "cloud-computing-intro",
        "title": "Cloud computing intro",
        "content": "Learn **Cloud computing intro** in Day 84 of Thunder: 100 Days of Code. EC2, S3, RDS, and cloud fundamentals",
        "tryIt": "console.log(\"Day 84: AWS Cloud Basics\");"
      },
      {
        "id": "ec2-instances",
        "title": "EC2 instances",
        "content": "Learn **EC2 instances** in Day 84 of Thunder: 100 Days of Code. EC2, S3, RDS, and cloud fundamentals",
        "tryIt": "console.log(\"Day 84: AWS Cloud Basics\");"
      },
      {
        "id": "s3-storage",
        "title": "S3 storage",
        "content": "Learn **S3 storage** in Day 84 of Thunder: 100 Days of Code. EC2, S3, RDS, and cloud fundamentals",
        "tryIt": "console.log(\"Day 84: AWS Cloud Basics\");"
      },
      {
        "id": "rds-databases",
        "title": "RDS databases",
        "content": "Learn **RDS databases** in Day 84 of Thunder: 100 Days of Code. EC2, S3, RDS, and cloud fundamentals",
        "tryIt": "console.log(\"Day 84: AWS Cloud Basics\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 84?",
        "options": [
          "AWS Cloud Basics",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 84 focuses on AWS Cloud Basics."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 7: DevOps",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 7: DevOps."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=Nzv-tzU-UAw",
    "youtubeTitle": "AWS Tutorial for Beginners — Step-by-Step Guide — Kevin Stratvert",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 85,
    "slug": "deployment-strategies",
    "track": "thunder",
    "day": 85,
    "title": "Deployment Strategies",
    "subtitle": "Blue-green, rolling, and canary deployments",
    "duration": "2 hrs",
    "createdOn": "8 Oct 2026",
    "status": "published",
    "topics": [
      "Deployment types",
      "Blue-green deploy",
      "Rolling updates",
      "Canary releases",
      "Rollback strategies"
    ],
    "sections": [
      {
        "id": "deployment-types",
        "title": "Deployment types",
        "content": "Learn **Deployment types** in Day 85 of Thunder: 100 Days of Code. Blue-green, rolling, and canary deployments",
        "tryIt": "console.log(\"Day 85: Deployment Strategies\");"
      },
      {
        "id": "blue-green-deploy",
        "title": "Blue-green deploy",
        "content": "Learn **Blue-green deploy** in Day 85 of Thunder: 100 Days of Code. Blue-green, rolling, and canary deployments",
        "tryIt": "console.log(\"Day 85: Deployment Strategies\");"
      },
      {
        "id": "rolling-updates",
        "title": "Rolling updates",
        "content": "Learn **Rolling updates** in Day 85 of Thunder: 100 Days of Code. Blue-green, rolling, and canary deployments",
        "tryIt": "console.log(\"Day 85: Deployment Strategies\");"
      },
      {
        "id": "canary-releases",
        "title": "Canary releases",
        "content": "Learn **Canary releases** in Day 85 of Thunder: 100 Days of Code. Blue-green, rolling, and canary deployments",
        "tryIt": "console.log(\"Day 85: Deployment Strategies\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 85?",
        "options": [
          "Deployment Strategies",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 85 focuses on Deployment Strategies."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 7: DevOps",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 7: DevOps."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=AWVTKBUnoIg",
    "youtubeTitle": "Top 5 Most-Used Deployment Strategies — ByteByteGo",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 86,
    "slug": "kubernetes-introduction",
    "track": "thunder",
    "day": 86,
    "title": "Kubernetes Introduction",
    "subtitle": "Pods, services, deployments, and kubectl",
    "duration": "2 hrs",
    "createdOn": "9 Oct 2026",
    "status": "published",
    "topics": [
      "Why Kubernetes",
      "Pods & nodes",
      "Deployments",
      "Services",
      "kubectl basics"
    ],
    "sections": [
      {
        "id": "why-kubernetes",
        "title": "Why Kubernetes",
        "content": "Learn **Why Kubernetes** in Day 86 of Thunder: 100 Days of Code. Pods, services, deployments, and kubectl",
        "tryIt": "console.log(\"Day 86: Kubernetes Introduction\");"
      },
      {
        "id": "pods-and-nodes",
        "title": "Pods & nodes",
        "content": "Learn **Pods & nodes** in Day 86 of Thunder: 100 Days of Code. Pods, services, deployments, and kubectl",
        "tryIt": "console.log(\"Day 86: Kubernetes Introduction\");"
      },
      {
        "id": "deployments",
        "title": "Deployments",
        "content": "Learn **Deployments** in Day 86 of Thunder: 100 Days of Code. Pods, services, deployments, and kubectl",
        "tryIt": "console.log(\"Day 86: Kubernetes Introduction\");"
      },
      {
        "id": "services",
        "title": "Services",
        "content": "Learn **Services** in Day 86 of Thunder: 100 Days of Code. Pods, services, deployments, and kubectl",
        "tryIt": "console.log(\"Day 86: Kubernetes Introduction\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 86?",
        "options": [
          "Kubernetes Introduction",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 86 focuses on Kubernetes Introduction."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 7: DevOps",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 7: DevOps."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=s_o8dwzRlu4",
    "youtubeTitle": "Kubernetes Crash Course for Absolute Beginners — TechWorld with Nana",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 87,
    "slug": "monitoring-and-logging",
    "track": "thunder",
    "day": 87,
    "title": "Monitoring & Logging",
    "subtitle": "Logs, metrics, alerts, and observability",
    "duration": "2 hrs",
    "createdOn": "10 Oct 2026",
    "status": "published",
    "topics": [
      "Logging best practices",
      "Metrics & dashboards",
      "Prometheus intro",
      "Alerting",
      "Observability pillars"
    ],
    "sections": [
      {
        "id": "logging-best-practices",
        "title": "Logging best practices",
        "content": "Learn **Logging best practices** in Day 87 of Thunder: 100 Days of Code. Logs, metrics, alerts, and observability",
        "tryIt": "console.log(\"Day 87: Monitoring & Logging\");"
      },
      {
        "id": "metrics-and-dashboards",
        "title": "Metrics & dashboards",
        "content": "Learn **Metrics & dashboards** in Day 87 of Thunder: 100 Days of Code. Logs, metrics, alerts, and observability",
        "tryIt": "console.log(\"Day 87: Monitoring & Logging\");"
      },
      {
        "id": "prometheus-intro",
        "title": "Prometheus intro",
        "content": "Learn **Prometheus intro** in Day 87 of Thunder: 100 Days of Code. Logs, metrics, alerts, and observability",
        "tryIt": "console.log(\"Day 87: Monitoring & Logging\");"
      },
      {
        "id": "alerting",
        "title": "Alerting",
        "content": "Learn **Alerting** in Day 87 of Thunder: 100 Days of Code. Logs, metrics, alerts, and observability",
        "tryIt": "console.log(\"Day 87: Monitoring & Logging\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 87?",
        "options": [
          "Monitoring & Logging",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 87 focuses on Monitoring & Logging."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 7: DevOps",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 7: DevOps."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=9TJx7QTrTyo",
    "youtubeTitle": "Server Monitoring — Prometheus & Grafana — Christian Lempa",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 88,
    "slug": "infrastructure-as-code-terraform",
    "track": "thunder",
    "day": 88,
    "title": "Infrastructure as Code — Terraform",
    "subtitle": "Provision cloud resources with code",
    "duration": "2 hrs",
    "createdOn": "11 Oct 2026",
    "status": "published",
    "topics": [
      "IaC concepts",
      "Terraform basics",
      "Providers & resources",
      "State management",
      "Modules"
    ],
    "sections": [
      {
        "id": "iac-concepts",
        "title": "IaC concepts",
        "content": "Learn **IaC concepts** in Day 88 of Thunder: 100 Days of Code. Provision cloud resources with code",
        "tryIt": "console.log(\"Day 88: Infrastructure as Code — Terraform\");"
      },
      {
        "id": "terraform-basics",
        "title": "Terraform basics",
        "content": "Learn **Terraform basics** in Day 88 of Thunder: 100 Days of Code. Provision cloud resources with code",
        "tryIt": "console.log(\"Day 88: Infrastructure as Code — Terraform\");"
      },
      {
        "id": "providers-and-resources",
        "title": "Providers & resources",
        "content": "Learn **Providers & resources** in Day 88 of Thunder: 100 Days of Code. Provision cloud resources with code",
        "tryIt": "console.log(\"Day 88: Infrastructure as Code — Terraform\");"
      },
      {
        "id": "state-management",
        "title": "State management",
        "content": "Learn **State management** in Day 88 of Thunder: 100 Days of Code. Provision cloud resources with code",
        "tryIt": "console.log(\"Day 88: Infrastructure as Code — Terraform\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 88?",
        "options": [
          "Infrastructure as Code — Terraform",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 88 focuses on Infrastructure as Code — Terraform."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 7: DevOps",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 7: DevOps."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=7xngnjfIlK4",
    "youtubeTitle": "Terraform Course — freeCodeCamp",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 89,
    "slug": "devops-capstone",
    "track": "thunder",
    "day": 89,
    "title": "DevOps Capstone",
    "subtitle": "End-to-end pipeline from code to production",
    "duration": "2 hrs",
    "createdOn": "12 Oct 2026",
    "status": "published",
    "topics": [
      "Capstone pipeline",
      "Docker + CI/CD",
      "Cloud deploy",
      "Monitoring setup",
      "Phase 7 recap"
    ],
    "sections": [
      {
        "id": "capstone-pipeline",
        "title": "Capstone pipeline",
        "content": "Learn **Capstone pipeline** in Day 89 of Thunder: 100 Days of Code. End-to-end pipeline from code to production",
        "tryIt": "console.log(\"Day 89: DevOps Capstone\");"
      },
      {
        "id": "docker-ci-cd",
        "title": "Docker + CI/CD",
        "content": "Learn **Docker + CI/CD** in Day 89 of Thunder: 100 Days of Code. End-to-end pipeline from code to production",
        "tryIt": "console.log(\"Day 89: DevOps Capstone\");"
      },
      {
        "id": "cloud-deploy",
        "title": "Cloud deploy",
        "content": "Learn **Cloud deploy** in Day 89 of Thunder: 100 Days of Code. End-to-end pipeline from code to production",
        "tryIt": "console.log(\"Day 89: DevOps Capstone\");"
      },
      {
        "id": "monitoring-setup",
        "title": "Monitoring setup",
        "content": "Learn **Monitoring setup** in Day 89 of Thunder: 100 Days of Code. End-to-end pipeline from code to production",
        "tryIt": "console.log(\"Day 89: DevOps Capstone\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 89?",
        "options": [
          "DevOps Capstone",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 89 focuses on DevOps Capstone."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 7: DevOps",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 7: DevOps."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=R8_veQiYBjI",
    "youtubeTitle": "DevOps CI/CD Pipeline — Traversy Media",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 90,
    "slug": "full-stack-architecture-review",
    "track": "thunder",
    "day": 90,
    "title": "Full-Stack Architecture Review",
    "subtitle": "Connect frontend, backend, DB, cache, and deploy",
    "duration": "2 hrs",
    "createdOn": "13 Oct 2026",
    "status": "published",
    "topics": [
      "Architecture layers",
      "Request lifecycle",
      "Data flow",
      "Scaling recap",
      "Production checklist"
    ],
    "sections": [
      {
        "id": "architecture-layers",
        "title": "Architecture layers",
        "content": "Learn **Architecture layers** in Day 90 of Thunder: 100 Days of Code. Connect frontend, backend, DB, cache, and deploy",
        "tryIt": "console.log(\"Day 90: Full-Stack Architecture Review\");"
      },
      {
        "id": "request-lifecycle",
        "title": "Request lifecycle",
        "content": "Learn **Request lifecycle** in Day 90 of Thunder: 100 Days of Code. Connect frontend, backend, DB, cache, and deploy",
        "tryIt": "console.log(\"Day 90: Full-Stack Architecture Review\");"
      },
      {
        "id": "data-flow",
        "title": "Data flow",
        "content": "Learn **Data flow** in Day 90 of Thunder: 100 Days of Code. Connect frontend, backend, DB, cache, and deploy",
        "tryIt": "console.log(\"Day 90: Full-Stack Architecture Review\");"
      },
      {
        "id": "scaling-recap",
        "title": "Scaling recap",
        "content": "Learn **Scaling recap** in Day 90 of Thunder: 100 Days of Code. Connect frontend, backend, DB, cache, and deploy",
        "tryIt": "console.log(\"Day 90: Full-Stack Architecture Review\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 90?",
        "options": [
          "Full-Stack Architecture Review",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 90 focuses on Full-Stack Architecture Review."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Graduation & Career Prep",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Graduation & Career Prep."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=nu_pCVPKzTk",
    "youtubeTitle": "Full Stack Development — freeCodeCamp",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 91,
    "slug": "database-indexing-and-query-optimization",
    "track": "thunder",
    "day": 91,
    "title": "Database Indexing & Query Optimization",
    "subtitle": "Indexes, explain plans, and performance tuning",
    "duration": "2 hrs",
    "createdOn": "14 Oct 2026",
    "status": "published",
    "topics": [
      "Why indexes",
      "B-tree indexes",
      "Compound indexes",
      "Explain plans",
      "Query optimization"
    ],
    "sections": [
      {
        "id": "why-indexes",
        "title": "Why indexes",
        "content": "Learn **Why indexes** in Day 91 of Thunder: 100 Days of Code. Indexes, explain plans, and performance tuning",
        "tryIt": "console.log(\"Day 91: Database Indexing & Query Optimization\");"
      },
      {
        "id": "b-tree-indexes",
        "title": "B-tree indexes",
        "content": "Learn **B-tree indexes** in Day 91 of Thunder: 100 Days of Code. Indexes, explain plans, and performance tuning",
        "tryIt": "console.log(\"Day 91: Database Indexing & Query Optimization\");"
      },
      {
        "id": "compound-indexes",
        "title": "Compound indexes",
        "content": "Learn **Compound indexes** in Day 91 of Thunder: 100 Days of Code. Indexes, explain plans, and performance tuning",
        "tryIt": "console.log(\"Day 91: Database Indexing & Query Optimization\");"
      },
      {
        "id": "explain-plans",
        "title": "Explain plans",
        "content": "Learn **Explain plans** in Day 91 of Thunder: 100 Days of Code. Indexes, explain plans, and performance tuning",
        "tryIt": "console.log(\"Day 91: Database Indexing & Query Optimization\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 91?",
        "options": [
          "Database Indexing & Query Optimization",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 91 focuses on Database Indexing & Query Optimization."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Graduation & Career Prep",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Graduation & Career Prep."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=HubezKbFL7E",
    "youtubeTitle": "Database Indexing Explained — Hussein Nasser",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 92,
    "slug": "authentication-in-production",
    "track": "thunder",
    "day": 92,
    "title": "Authentication in Production",
    "subtitle": "OAuth, sessions, refresh tokens, and SSO",
    "duration": "2 hrs",
    "createdOn": "15 Oct 2026",
    "status": "published",
    "topics": [
      "OAuth 2.0",
      "Refresh tokens",
      "Session vs JWT",
      "SSO overview",
      "Auth security"
    ],
    "sections": [
      {
        "id": "oauth-2-0",
        "title": "OAuth 2.0",
        "content": "Learn **OAuth 2.0** in Day 92 of Thunder: 100 Days of Code. OAuth, sessions, refresh tokens, and SSO",
        "tryIt": "console.log(\"Day 92: Authentication in Production\");"
      },
      {
        "id": "refresh-tokens",
        "title": "Refresh tokens",
        "content": "Learn **Refresh tokens** in Day 92 of Thunder: 100 Days of Code. OAuth, sessions, refresh tokens, and SSO",
        "tryIt": "console.log(\"Day 92: Authentication in Production\");"
      },
      {
        "id": "session-vs-jwt",
        "title": "Session vs JWT",
        "content": "Learn **Session vs JWT** in Day 92 of Thunder: 100 Days of Code. OAuth, sessions, refresh tokens, and SSO",
        "tryIt": "console.log(\"Day 92: Authentication in Production\");"
      },
      {
        "id": "sso-overview",
        "title": "SSO overview",
        "content": "Learn **SSO overview** in Day 92 of Thunder: 100 Days of Code. OAuth, sessions, refresh tokens, and SSO",
        "tryIt": "console.log(\"Day 92: Authentication in Production\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 92?",
        "options": [
          "Authentication in Production",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 92 focuses on Authentication in Production."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Graduation & Career Prep",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Graduation & Career Prep."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=Y2H3DXDeS3Q",
    "youtubeTitle": "JWT Explained in Under 10 Minutes — Ariel Weinberger",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 93,
    "slug": "microservices-communication",
    "track": "thunder",
    "day": 93,
    "title": "Microservices Communication",
    "subtitle": "REST, gRPC, and event-driven integration",
    "duration": "2 hrs",
    "createdOn": "16 Oct 2026",
    "status": "published",
    "topics": [
      "Sync vs async",
      "REST between services",
      "gRPC intro",
      "Event bus",
      "Service mesh intro"
    ],
    "sections": [
      {
        "id": "sync-vs-async",
        "title": "Sync vs async",
        "content": "Learn **Sync vs async** in Day 93 of Thunder: 100 Days of Code. REST, gRPC, and event-driven integration",
        "tryIt": "console.log(\"Day 93: Microservices Communication\");"
      },
      {
        "id": "rest-between-services",
        "title": "REST between services",
        "content": "Learn **REST between services** in Day 93 of Thunder: 100 Days of Code. REST, gRPC, and event-driven integration",
        "tryIt": "console.log(\"Day 93: Microservices Communication\");"
      },
      {
        "id": "grpc-intro",
        "title": "gRPC intro",
        "content": "Learn **gRPC intro** in Day 93 of Thunder: 100 Days of Code. REST, gRPC, and event-driven integration",
        "tryIt": "console.log(\"Day 93: Microservices Communication\");"
      },
      {
        "id": "event-bus",
        "title": "Event bus",
        "content": "Learn **Event bus** in Day 93 of Thunder: 100 Days of Code. REST, gRPC, and event-driven integration",
        "tryIt": "console.log(\"Day 93: Microservices Communication\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 93?",
        "options": [
          "Microservices Communication",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 93 focuses on Microservices Communication."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Graduation & Career Prep",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Graduation & Career Prep."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=IFkDbsgn8yg",
    "youtubeTitle": "All Microservices Communication Styles in 6 Minutes — Tech Vision",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 94,
    "slug": "frontend-system-design",
    "track": "thunder",
    "day": 94,
    "title": "Frontend System Design",
    "subtitle": "Performance, bundling, CDN, and UI architecture",
    "duration": "2 hrs",
    "createdOn": "17 Oct 2026",
    "status": "published",
    "topics": [
      "Frontend architecture",
      "Bundle optimization",
      "CDN & caching",
      "SSR vs CSR",
      "Design system intro"
    ],
    "sections": [
      {
        "id": "frontend-architecture",
        "title": "Frontend architecture",
        "content": "Learn **Frontend architecture** in Day 94 of Thunder: 100 Days of Code. Performance, bundling, CDN, and UI architecture",
        "tryIt": "console.log(\"Day 94: Frontend System Design\");"
      },
      {
        "id": "bundle-optimization",
        "title": "Bundle optimization",
        "content": "Learn **Bundle optimization** in Day 94 of Thunder: 100 Days of Code. Performance, bundling, CDN, and UI architecture",
        "tryIt": "console.log(\"Day 94: Frontend System Design\");"
      },
      {
        "id": "cdn-and-caching",
        "title": "CDN & caching",
        "content": "Learn **CDN & caching** in Day 94 of Thunder: 100 Days of Code. Performance, bundling, CDN, and UI architecture",
        "tryIt": "console.log(\"Day 94: Frontend System Design\");"
      },
      {
        "id": "ssr-vs-csr",
        "title": "SSR vs CSR",
        "content": "Learn **SSR vs CSR** in Day 94 of Thunder: 100 Days of Code. Performance, bundling, CDN, and UI architecture",
        "tryIt": "console.log(\"Day 94: Frontend System Design\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 94?",
        "options": [
          "Frontend System Design",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 94 focuses on Frontend System Design."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Graduation & Career Prep",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Graduation & Career Prep."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=_HjRSHeQ92k",
    "youtubeTitle": "Frontend System Design Interview — Build Instagram — theSeniorDev",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 95,
    "slug": "behavioral-interview-prep",
    "track": "thunder",
    "day": 95,
    "title": "Behavioral Interview Prep",
    "subtitle": "STAR method, stories, and communication",
    "duration": "2 hrs",
    "createdOn": "18 Oct 2026",
    "status": "published",
    "topics": [
      "STAR method",
      "Common questions",
      "Project stories",
      "Strengths & weaknesses",
      "Culture fit"
    ],
    "sections": [
      {
        "id": "star-method",
        "title": "STAR method",
        "content": "Learn **STAR method** in Day 95 of Thunder: 100 Days of Code. STAR method, stories, and communication",
        "tryIt": "console.log(\"Day 95: Behavioral Interview Prep\");"
      },
      {
        "id": "common-questions",
        "title": "Common questions",
        "content": "Learn **Common questions** in Day 95 of Thunder: 100 Days of Code. STAR method, stories, and communication",
        "tryIt": "console.log(\"Day 95: Behavioral Interview Prep\");"
      },
      {
        "id": "project-stories",
        "title": "Project stories",
        "content": "Learn **Project stories** in Day 95 of Thunder: 100 Days of Code. STAR method, stories, and communication",
        "tryIt": "console.log(\"Day 95: Behavioral Interview Prep\");"
      },
      {
        "id": "strengths-and-weaknesses",
        "title": "Strengths & weaknesses",
        "content": "Learn **Strengths & weaknesses** in Day 95 of Thunder: 100 Days of Code. STAR method, stories, and communication",
        "tryIt": "console.log(\"Day 95: Behavioral Interview Prep\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 95?",
        "options": [
          "Behavioral Interview Prep",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 95 focuses on Behavioral Interview Prep."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Graduation & Career Prep",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Graduation & Career Prep."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=ld0cvWnrVsU",
    "youtubeTitle": "Cracking the Behavioral Interview for Software Developers — Keep On Coding",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 96,
    "slug": "dsa-for-web-developers",
    "track": "thunder",
    "day": 96,
    "title": "DSA for Web Developers",
    "subtitle": "Essential data structures for coding interviews",
    "duration": "2 hrs",
    "createdOn": "19 Oct 2026",
    "status": "published",
    "topics": [
      "Arrays & strings",
      "Hash maps",
      "Trees & graphs intro",
      "Big O basics",
      "Practice strategy"
    ],
    "sections": [
      {
        "id": "arrays-and-strings",
        "title": "Arrays & strings",
        "content": "Learn **Arrays & strings** in Day 96 of Thunder: 100 Days of Code. Essential data structures for coding interviews",
        "tryIt": "console.log(\"Day 96: DSA for Web Developers\");"
      },
      {
        "id": "hash-maps",
        "title": "Hash maps",
        "content": "Learn **Hash maps** in Day 96 of Thunder: 100 Days of Code. Essential data structures for coding interviews",
        "tryIt": "console.log(\"Day 96: DSA for Web Developers\");"
      },
      {
        "id": "trees-and-graphs-intro",
        "title": "Trees & graphs intro",
        "content": "Learn **Trees & graphs intro** in Day 96 of Thunder: 100 Days of Code. Essential data structures for coding interviews",
        "tryIt": "console.log(\"Day 96: DSA for Web Developers\");"
      },
      {
        "id": "big-o-basics",
        "title": "Big O basics",
        "content": "Learn **Big O basics** in Day 96 of Thunder: 100 Days of Code. Essential data structures for coding interviews",
        "tryIt": "console.log(\"Day 96: DSA for Web Developers\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 96?",
        "options": [
          "DSA for Web Developers",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 96 focuses on DSA for Web Developers."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Graduation & Career Prep",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Graduation & Career Prep."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=8hly31xKli0",
    "youtubeTitle": "Data Structures Easy to Advanced — freeCodeCamp",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 97,
    "slug": "building-your-tech-resume",
    "track": "thunder",
    "day": 97,
    "title": "Building Your Tech Resume",
    "subtitle": "Resume, LinkedIn, and GitHub profile optimization",
    "duration": "2 hrs",
    "createdOn": "20 Oct 2026",
    "status": "published",
    "topics": [
      "Resume structure",
      "Project highlights",
      "LinkedIn optimization",
      "GitHub profile",
      "Portfolio links"
    ],
    "sections": [
      {
        "id": "resume-structure",
        "title": "Resume structure",
        "content": "Learn **Resume structure** in Day 97 of Thunder: 100 Days of Code. Resume, LinkedIn, and GitHub profile optimization",
        "tryIt": "console.log(\"Day 97: Building Your Tech Resume\");"
      },
      {
        "id": "project-highlights",
        "title": "Project highlights",
        "content": "Learn **Project highlights** in Day 97 of Thunder: 100 Days of Code. Resume, LinkedIn, and GitHub profile optimization",
        "tryIt": "console.log(\"Day 97: Building Your Tech Resume\");"
      },
      {
        "id": "linkedin-optimization",
        "title": "LinkedIn optimization",
        "content": "Learn **LinkedIn optimization** in Day 97 of Thunder: 100 Days of Code. Resume, LinkedIn, and GitHub profile optimization",
        "tryIt": "console.log(\"Day 97: Building Your Tech Resume\");"
      },
      {
        "id": "github-profile",
        "title": "GitHub profile",
        "content": "Learn **GitHub profile** in Day 97 of Thunder: 100 Days of Code. Resume, LinkedIn, and GitHub profile optimization",
        "tryIt": "console.log(\"Day 97: Building Your Tech Resume\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 97?",
        "options": [
          "Building Your Tech Resume",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 97 focuses on Building Your Tech Resume."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Graduation & Career Prep",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Graduation & Career Prep."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=5gLVxMKeSGM",
    "youtubeTitle": "How to Write a Winning Tech Resume — Anthony D. Mays",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 98,
    "slug": "open-source-contribution",
    "track": "thunder",
    "day": 98,
    "title": "Open Source Contribution",
    "subtitle": "Find projects, contribute PRs, and grow your network",
    "duration": "2 hrs",
    "createdOn": "21 Oct 2026",
    "status": "published",
    "topics": [
      "Why open source",
      "Finding projects",
      "Good first issues",
      "PR workflow",
      "Community etiquette"
    ],
    "sections": [
      {
        "id": "why-open-source",
        "title": "Why open source",
        "content": "Learn **Why open source** in Day 98 of Thunder: 100 Days of Code. Find projects, contribute PRs, and grow your network",
        "tryIt": "console.log(\"Day 98: Open Source Contribution\");"
      },
      {
        "id": "finding-projects",
        "title": "Finding projects",
        "content": "Learn **Finding projects** in Day 98 of Thunder: 100 Days of Code. Find projects, contribute PRs, and grow your network",
        "tryIt": "console.log(\"Day 98: Open Source Contribution\");"
      },
      {
        "id": "good-first-issues",
        "title": "Good first issues",
        "content": "Learn **Good first issues** in Day 98 of Thunder: 100 Days of Code. Find projects, contribute PRs, and grow your network",
        "tryIt": "console.log(\"Day 98: Open Source Contribution\");"
      },
      {
        "id": "pr-workflow",
        "title": "PR workflow",
        "content": "Learn **PR workflow** in Day 98 of Thunder: 100 Days of Code. Find projects, contribute PRs, and grow your network",
        "tryIt": "console.log(\"Day 98: Open Source Contribution\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 98?",
        "options": [
          "Open Source Contribution",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 98 focuses on Open Source Contribution."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Graduation & Career Prep",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Graduation & Career Prep."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=v2X51AVgl3o",
    "youtubeTitle": "Contributing to Open Source Will Change Your Life — Ali Solanki",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 99,
    "slug": "100-days-retrospective",
    "track": "thunder",
    "day": 99,
    "title": "100 Days Retrospective",
    "subtitle": "Review your journey and plan what is next",
    "duration": "2 hrs",
    "createdOn": "22 Oct 2026",
    "status": "published",
    "topics": [
      "Skills acquired",
      "Projects built",
      "Knowledge gaps",
      "Learning plan ahead",
      "Staying consistent"
    ],
    "sections": [
      {
        "id": "skills-acquired",
        "title": "Skills acquired",
        "content": "Learn **Skills acquired** in Day 99 of Thunder: 100 Days of Code. Review your journey and plan what is next",
        "tryIt": "console.log(\"Day 99: 100 Days Retrospective\");"
      },
      {
        "id": "projects-built",
        "title": "Projects built",
        "content": "Learn **Projects built** in Day 99 of Thunder: 100 Days of Code. Review your journey and plan what is next",
        "tryIt": "console.log(\"Day 99: 100 Days Retrospective\");"
      },
      {
        "id": "knowledge-gaps",
        "title": "Knowledge gaps",
        "content": "Learn **Knowledge gaps** in Day 99 of Thunder: 100 Days of Code. Review your journey and plan what is next",
        "tryIt": "console.log(\"Day 99: 100 Days Retrospective\");"
      },
      {
        "id": "learning-plan-ahead",
        "title": "Learning plan ahead",
        "content": "Learn **Learning plan ahead** in Day 99 of Thunder: 100 Days of Code. Review your journey and plan what is next",
        "tryIt": "console.log(\"Day 99: 100 Days Retrospective\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 99?",
        "options": [
          "100 Days Retrospective",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 99 focuses on 100 Days Retrospective."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Graduation & Career Prep",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Graduation & Career Prep."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=hdI2bqOjy3c",
    "youtubeTitle": "JavaScript Full Course — Traversy Media",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 100,
    "slug": "graduation-project-showcase",
    "track": "thunder",
    "day": 100,
    "title": "Graduation Project Showcase",
    "subtitle": "Present your work and celebrate 100 days!",
    "duration": "2 hrs",
    "createdOn": "23 Oct 2026",
    "status": "published",
    "topics": [
      "Final presentation",
      "Demo your capstone",
      "Share learnings",
      "Next career steps",
      "Congratulations!"
    ],
    "sections": [
      {
        "id": "final-presentation",
        "title": "Final presentation",
        "content": "Learn **Final presentation** in Day 100 of Thunder: 100 Days of Code. Present your work and celebrate 100 days!",
        "tryIt": "console.log(\"Day 100: Graduation Project Showcase\");"
      },
      {
        "id": "demo-your-capstone",
        "title": "Demo your capstone",
        "content": "Learn **Demo your capstone** in Day 100 of Thunder: 100 Days of Code. Present your work and celebrate 100 days!",
        "tryIt": "console.log(\"Day 100: Graduation Project Showcase\");"
      },
      {
        "id": "share-learnings",
        "title": "Share learnings",
        "content": "Learn **Share learnings** in Day 100 of Thunder: 100 Days of Code. Present your work and celebrate 100 days!",
        "tryIt": "console.log(\"Day 100: Graduation Project Showcase\");"
      },
      {
        "id": "next-career-steps",
        "title": "Next career steps",
        "content": "Learn **Next career steps** in Day 100 of Thunder: 100 Days of Code. Present your work and celebrate 100 days!",
        "tryIt": "console.log(\"Day 100: Graduation Project Showcase\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 100?",
        "options": [
          "Graduation Project Showcase",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 100 focuses on Graduation Project Showcase."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Graduation & Career Prep",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Graduation & Career Prep."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=Je_KYIM9QJc",
    "youtubeTitle": "How to Become a Full Stack Developer in 2025 — Tech With Tim",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  }
];
