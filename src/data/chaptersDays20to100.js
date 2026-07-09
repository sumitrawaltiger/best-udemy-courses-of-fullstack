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
    "createdOn": "24 Jul 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=611_04Ml25c&list=PLQEaRBV9gAFuf-27K64l7-hV7o0fr9zx7",
    "youtubeTitle": "Complete JavaScript Course (Playlist) — Coder Army",
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
    "createdOn": "24 Jul 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=611_04Ml25c&list=PLQEaRBV9gAFuf-27K64l7-hV7o0fr9zx7",
    "youtubeTitle": "Complete JavaScript Course (Playlist) — Coder Army",
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
    "title": "Timers, Debounce & Throttle",
    "subtitle": "setTimeout, setInterval, and performance patterns",
    "duration": "2 hrs",
    "createdOn": "25 Jul 2026",
    "status": "published",
    "topics": [
      "setTimeout & setInterval",
      "Debounce pattern",
      "Throttle pattern",
      "Search input example",
      "Scroll handlers"
    ],
    "sections": [
      {
        "id": "settimeout-and-setinterval",
        "title": "setTimeout & setInterval",
        "content": "Learn **setTimeout & setInterval** in Day 22 of Thunder: 100 Days of Code. setTimeout, setInterval, and performance patterns",
        "code": "function debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}",
        "tryIt": "console.log(\"Day 22: Timers, Debounce & Throttle\");"
      },
      {
        "id": "debounce-pattern",
        "title": "Debounce pattern",
        "content": "Learn **Debounce pattern** in Day 22 of Thunder: 100 Days of Code. setTimeout, setInterval, and performance patterns",
        "code": "function debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}",
        "tryIt": "console.log(\"Day 22: Timers, Debounce & Throttle\");"
      },
      {
        "id": "throttle-pattern",
        "title": "Throttle pattern",
        "content": "Learn **Throttle pattern** in Day 22 of Thunder: 100 Days of Code. setTimeout, setInterval, and performance patterns",
        "code": "function debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}",
        "tryIt": "console.log(\"Day 22: Timers, Debounce & Throttle\");"
      },
      {
        "id": "search-input-example",
        "title": "Search input example",
        "content": "Learn **Search input example** in Day 22 of Thunder: 100 Days of Code. setTimeout, setInterval, and performance patterns",
        "code": "function debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}",
        "tryIt": "console.log(\"Day 22: Timers, Debounce & Throttle\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 22?",
        "options": [
          "Timers, Debounce & Throttle",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 22 focuses on Timers, Debounce & Throttle."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 1: JavaScript Mastery",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 1: JavaScript Mastery."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=611_04Ml25c&list=PLQEaRBV9gAFuf-27K64l7-hV7o0fr9zx7",
    "youtubeTitle": "Complete JavaScript Course (Playlist) — Coder Army",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course",
    "githubPath": "03Backend/Day03",
    "codeRepo": "https://github.com/Rohitnegi9/Thunder/tree/main"
  },
  {
    "id": 23,
    "slug": "javascript-classes-and-oop",
    "track": "thunder",
    "day": 23,
    "title": "JavaScript Classes & OOP",
    "subtitle": "Classes, constructors, inheritance, and static methods",
    "duration": "2 hrs",
    "createdOn": "26 Jul 2026",
    "status": "published",
    "topics": [
      "class syntax",
      "constructor",
      "extends & super",
      "Static methods",
      "OOP vs prototypes"
    ],
    "sections": [
      {
        "id": "class-syntax",
        "title": "class syntax",
        "content": "Learn **class syntax** in Day 23 of Thunder: 100 Days of Code. Classes, constructors, inheritance, and static methods",
        "code": "class Animal {\n  constructor(name) { this.name = name; }\n  speak() { console.log(this.name); }\n}\nclass Dog extends Animal {\n  speak() { console.log(this.name + \" barks\"); }\n}",
        "tryIt": "console.log(\"Day 23: JavaScript Classes & OOP\");"
      },
      {
        "id": "constructor",
        "title": "constructor",
        "content": "Learn **constructor** in Day 23 of Thunder: 100 Days of Code. Classes, constructors, inheritance, and static methods",
        "code": "class Animal {\n  constructor(name) { this.name = name; }\n  speak() { console.log(this.name); }\n}\nclass Dog extends Animal {\n  speak() { console.log(this.name + \" barks\"); }\n}",
        "tryIt": "console.log(\"Day 23: JavaScript Classes & OOP\");"
      },
      {
        "id": "extends-and-super",
        "title": "extends & super",
        "content": "Learn **extends & super** in Day 23 of Thunder: 100 Days of Code. Classes, constructors, inheritance, and static methods",
        "code": "class Animal {\n  constructor(name) { this.name = name; }\n  speak() { console.log(this.name); }\n}\nclass Dog extends Animal {\n  speak() { console.log(this.name + \" barks\"); }\n}",
        "tryIt": "console.log(\"Day 23: JavaScript Classes & OOP\");"
      },
      {
        "id": "static-methods",
        "title": "Static methods",
        "content": "Learn **Static methods** in Day 23 of Thunder: 100 Days of Code. Classes, constructors, inheritance, and static methods",
        "code": "class Animal {\n  constructor(name) { this.name = name; }\n  speak() { console.log(this.name); }\n}\nclass Dog extends Animal {\n  speak() { console.log(this.name + \" barks\"); }\n}",
        "tryIt": "console.log(\"Day 23: JavaScript Classes & OOP\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 23?",
        "options": [
          "JavaScript Classes & OOP",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 23 focuses on JavaScript Classes & OOP."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 1: JavaScript Mastery",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 1: JavaScript Mastery."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=KLvG0sLr8VY",
    "youtubeTitle": "JavaScript Classes — Programming with Mosh",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course",
    "githubPath": "03Backend/Day04",
    "codeRepo": "https://github.com/Rohitnegi9/Thunder/tree/main"
  },
  {
    "id": 24,
    "slug": "web-security-basics",
    "track": "thunder",
    "day": 24,
    "title": "Web Security Basics",
    "subtitle": "XSS, CSRF, CORS, and safe API usage",
    "duration": "2 hrs",
    "createdOn": "27 Jul 2026",
    "status": "published",
    "topics": [
      "XSS attacks",
      "CSRF overview",
      "CORS explained",
      "HTTPS & cookies",
      "Security headers"
    ],
    "sections": [
      {
        "id": "xss-attacks",
        "title": "XSS attacks",
        "content": "Learn **XSS attacks** in Day 24 of Thunder: 100 Days of Code. XSS, CSRF, CORS, and safe API usage",
        "tryIt": "console.log(\"Day 24: Web Security Basics\");"
      },
      {
        "id": "csrf-overview",
        "title": "CSRF overview",
        "content": "Learn **CSRF overview** in Day 24 of Thunder: 100 Days of Code. XSS, CSRF, CORS, and safe API usage",
        "tryIt": "console.log(\"Day 24: Web Security Basics\");"
      },
      {
        "id": "cors-explained",
        "title": "CORS explained",
        "content": "Learn **CORS explained** in Day 24 of Thunder: 100 Days of Code. XSS, CSRF, CORS, and safe API usage",
        "tryIt": "console.log(\"Day 24: Web Security Basics\");"
      },
      {
        "id": "https-and-cookies",
        "title": "HTTPS & cookies",
        "content": "Learn **HTTPS & cookies** in Day 24 of Thunder: 100 Days of Code. XSS, CSRF, CORS, and safe API usage",
        "tryIt": "console.log(\"Day 24: Web Security Basics\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 24?",
        "options": [
          "Web Security Basics",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 24 focuses on Web Security Basics."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 1: JavaScript Mastery",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 1: JavaScript Mastery."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=4YjpPmdDeog",
    "youtubeTitle": "Web App Security — Fireship",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 25,
    "slug": "javascript-mastery-review",
    "track": "thunder",
    "day": 25,
    "title": "JavaScript Mastery Review",
    "subtitle": "Revision, patterns, and interview-ready JS concepts",
    "duration": "2 hrs",
    "createdOn": "28 Jul 2026",
    "status": "published",
    "topics": [
      "Core concepts review",
      "Common interview questions",
      "Coding patterns",
      "Best practices",
      "Phase 1 recap"
    ],
    "sections": [
      {
        "id": "core-concepts-review",
        "title": "Core concepts review",
        "content": "Learn **Core concepts review** in Day 25 of Thunder: 100 Days of Code. Revision, patterns, and interview-ready JS concepts",
        "tryIt": "console.log(\"Day 25: JavaScript Mastery Review\");"
      },
      {
        "id": "common-interview-questions",
        "title": "Common interview questions",
        "content": "Learn **Common interview questions** in Day 25 of Thunder: 100 Days of Code. Revision, patterns, and interview-ready JS concepts",
        "tryIt": "console.log(\"Day 25: JavaScript Mastery Review\");"
      },
      {
        "id": "coding-patterns",
        "title": "Coding patterns",
        "content": "Learn **Coding patterns** in Day 25 of Thunder: 100 Days of Code. Revision, patterns, and interview-ready JS concepts",
        "tryIt": "console.log(\"Day 25: JavaScript Mastery Review\");"
      },
      {
        "id": "best-practices",
        "title": "Best practices",
        "content": "Learn **Best practices** in Day 25 of Thunder: 100 Days of Code. Revision, patterns, and interview-ready JS concepts",
        "tryIt": "console.log(\"Day 25: JavaScript Mastery Review\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 25?",
        "options": [
          "JavaScript Mastery Review",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 25 focuses on JavaScript Mastery Review."
      },
      {
        "question": "Which phase includes this module?",
        "options": [
          "Phase 1: JavaScript Mastery",
          "Only DevOps",
          "Only CSS",
          "Not part of the course"
        ],
        "answer": 0,
        "explanation": "This module belongs to Phase 1: JavaScript Mastery."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=PkZNo7MFNFg",
    "youtubeTitle": "JavaScript Interview Questions — freeCodeCamp",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 26,
    "slug": "node-js-and-runtime-fundamentals",
    "track": "thunder",
    "day": 26,
    "title": "Node.js & Runtime Fundamentals",
    "subtitle": "V8, npm, modules, and the Node event loop",
    "duration": "2 hrs",
    "createdOn": "29 Jul 2026",
    "status": "published",
    "topics": [
      "What is Node.js",
      "npm & package.json",
      "CommonJS vs ESM",
      "Node REPL",
      "Event loop in Node"
    ],
    "sections": [
      {
        "id": "what-is-node-js",
        "title": "What is Node.js",
        "content": "Learn **What is Node.js** in Day 26 of Thunder: 100 Days of Code. V8, npm, modules, and the Node event loop",
        "tryIt": "console.log(\"Day 26: Node.js & Runtime Fundamentals\");"
      },
      {
        "id": "npm-and-package-json",
        "title": "npm & package.json",
        "content": "Learn **npm & package.json** in Day 26 of Thunder: 100 Days of Code. V8, npm, modules, and the Node event loop",
        "tryIt": "console.log(\"Day 26: Node.js & Runtime Fundamentals\");"
      },
      {
        "id": "commonjs-vs-esm",
        "title": "CommonJS vs ESM",
        "content": "Learn **CommonJS vs ESM** in Day 26 of Thunder: 100 Days of Code. V8, npm, modules, and the Node event loop",
        "tryIt": "console.log(\"Day 26: Node.js & Runtime Fundamentals\");"
      },
      {
        "id": "node-repl",
        "title": "Node REPL",
        "content": "Learn **Node REPL** in Day 26 of Thunder: 100 Days of Code. V8, npm, modules, and the Node event loop",
        "tryIt": "console.log(\"Day 26: Node.js & Runtime Fundamentals\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 26?",
        "options": [
          "Node.js & Runtime Fundamentals",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 26 focuses on Node.js & Runtime Fundamentals."
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
    "youtubeUrl": "https://www.youtube.com/watch?v=TlB_eWDSMt4",
    "youtubeTitle": "Node.js Crash Course — Programming with Mosh",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course",
    "githubPath": "Lecture26"
  },
  {
    "id": 27,
    "slug": "http-rest-and-express-js",
    "track": "thunder",
    "day": 27,
    "title": "HTTP, REST & Express.js",
    "subtitle": "Build your first REST API with Express",
    "duration": "2 hrs",
    "createdOn": "30 Jul 2026",
    "status": "published",
    "topics": [
      "HTTP methods & status codes",
      "REST principles",
      "Express setup",
      "Routes & controllers",
      "Postman testing"
    ],
    "sections": [
      {
        "id": "http-methods-and-status-codes",
        "title": "HTTP methods & status codes",
        "content": "Learn **HTTP methods & status codes** in Day 27 of Thunder: 100 Days of Code. Build your first REST API with Express",
        "tryIt": "console.log(\"Day 27: HTTP, REST & Express.js\");"
      },
      {
        "id": "rest-principles",
        "title": "REST principles",
        "content": "Learn **REST principles** in Day 27 of Thunder: 100 Days of Code. Build your first REST API with Express",
        "tryIt": "console.log(\"Day 27: HTTP, REST & Express.js\");"
      },
      {
        "id": "express-setup",
        "title": "Express setup",
        "content": "Learn **Express setup** in Day 27 of Thunder: 100 Days of Code. Build your first REST API with Express",
        "tryIt": "console.log(\"Day 27: HTTP, REST & Express.js\");"
      },
      {
        "id": "routes-and-controllers",
        "title": "Routes & controllers",
        "content": "Learn **Routes & controllers** in Day 27 of Thunder: 100 Days of Code. Build your first REST API with Express",
        "tryIt": "console.log(\"Day 27: HTTP, REST & Express.js\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 27?",
        "options": [
          "HTTP, REST & Express.js",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 27 focuses on HTTP, REST & Express.js."
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
    "youtubeUrl": "https://www.youtube.com/watch?v=L72fhGm1tfE",
    "youtubeTitle": "Node.js Express Crash Course — Traversy Media",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 28,
    "slug": "middleware-and-request-lifecycle",
    "track": "thunder",
    "day": 28,
    "title": "Middleware & Request Lifecycle",
    "subtitle": "How requests flow through Express middleware",
    "duration": "2 hrs",
    "createdOn": "31 Jul 2026",
    "status": "published",
    "topics": [
      "What is middleware",
      "app.use vs route middleware",
      "req, res, next",
      "Logging middleware",
      "Error middleware"
    ],
    "sections": [
      {
        "id": "what-is-middleware",
        "title": "What is middleware",
        "content": "Learn **What is middleware** in Day 28 of Thunder: 100 Days of Code. How requests flow through Express middleware",
        "tryIt": "console.log(\"Day 28: Middleware & Request Lifecycle\");"
      },
      {
        "id": "app-use-vs-route-middleware",
        "title": "app.use vs route middleware",
        "content": "Learn **app.use vs route middleware** in Day 28 of Thunder: 100 Days of Code. How requests flow through Express middleware",
        "tryIt": "console.log(\"Day 28: Middleware & Request Lifecycle\");"
      },
      {
        "id": "req-res-next",
        "title": "req, res, next",
        "content": "Learn **req, res, next** in Day 28 of Thunder: 100 Days of Code. How requests flow through Express middleware",
        "tryIt": "console.log(\"Day 28: Middleware & Request Lifecycle\");"
      },
      {
        "id": "logging-middleware",
        "title": "Logging middleware",
        "content": "Learn **Logging middleware** in Day 28 of Thunder: 100 Days of Code. How requests flow through Express middleware",
        "tryIt": "console.log(\"Day 28: Middleware & Request Lifecycle\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 28?",
        "options": [
          "Middleware & Request Lifecycle",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 28 focuses on Middleware & Request Lifecycle."
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
    "youtubeUrl": "https://www.youtube.com/watch?v=lY5icMHlVl0",
    "youtubeTitle": "Express Middleware Explained — Academind",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 29,
    "slug": "mongodb-and-database-design",
    "track": "thunder",
    "day": 29,
    "title": "MongoDB & Database Design",
    "subtitle": "NoSQL documents, collections, and CRUD operations",
    "duration": "2 hrs",
    "createdOn": "1 Aug 2026",
    "status": "published",
    "topics": [
      "MongoDB basics",
      "Collections & documents",
      "CRUD operations",
      "Schema design",
      "MongoDB Atlas"
    ],
    "sections": [
      {
        "id": "mongodb-basics",
        "title": "MongoDB basics",
        "content": "Learn **MongoDB basics** in Day 29 of Thunder: 100 Days of Code. NoSQL documents, collections, and CRUD operations",
        "tryIt": "console.log(\"Day 29: MongoDB & Database Design\");"
      },
      {
        "id": "collections-and-documents",
        "title": "Collections & documents",
        "content": "Learn **Collections & documents** in Day 29 of Thunder: 100 Days of Code. NoSQL documents, collections, and CRUD operations",
        "tryIt": "console.log(\"Day 29: MongoDB & Database Design\");"
      },
      {
        "id": "crud-operations",
        "title": "CRUD operations",
        "content": "Learn **CRUD operations** in Day 29 of Thunder: 100 Days of Code. NoSQL documents, collections, and CRUD operations",
        "tryIt": "console.log(\"Day 29: MongoDB & Database Design\");"
      },
      {
        "id": "schema-design",
        "title": "Schema design",
        "content": "Learn **Schema design** in Day 29 of Thunder: 100 Days of Code. NoSQL documents, collections, and CRUD operations",
        "tryIt": "console.log(\"Day 29: MongoDB & Database Design\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 29?",
        "options": [
          "MongoDB & Database Design",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 29 focuses on MongoDB & Database Design."
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
    "title": "Mongoose ODM",
    "subtitle": "Schemas, models, validation, and relationships",
    "duration": "2 hrs",
    "createdOn": "2 Aug 2026",
    "status": "published",
    "topics": [
      "Mongoose schemas",
      "Models & queries",
      "Validation",
      "References vs embedding",
      "Population"
    ],
    "sections": [
      {
        "id": "mongoose-schemas",
        "title": "Mongoose schemas",
        "content": "Learn **Mongoose schemas** in Day 30 of Thunder: 100 Days of Code. Schemas, models, validation, and relationships",
        "tryIt": "console.log(\"Day 30: Mongoose ODM\");"
      },
      {
        "id": "models-and-queries",
        "title": "Models & queries",
        "content": "Learn **Models & queries** in Day 30 of Thunder: 100 Days of Code. Schemas, models, validation, and relationships",
        "tryIt": "console.log(\"Day 30: Mongoose ODM\");"
      },
      {
        "id": "validation",
        "title": "Validation",
        "content": "Learn **Validation** in Day 30 of Thunder: 100 Days of Code. Schemas, models, validation, and relationships",
        "tryIt": "console.log(\"Day 30: Mongoose ODM\");"
      },
      {
        "id": "references-vs-embedding",
        "title": "References vs embedding",
        "content": "Learn **References vs embedding** in Day 30 of Thunder: 100 Days of Code. Schemas, models, validation, and relationships",
        "tryIt": "console.log(\"Day 30: Mongoose ODM\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 30?",
        "options": [
          "Mongoose ODM",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 30 focuses on Mongoose ODM."
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
    "youtubeUrl": "https://www.youtube.com/watch?v=ExcKwvgN5oY",
    "youtubeTitle": "Mongoose JS Crash Course — Net Ninja",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 31,
    "slug": "authentication-with-jwt",
    "track": "thunder",
    "day": 31,
    "title": "Authentication with JWT",
    "subtitle": "Register, login, tokens, and protected routes",
    "duration": "2 hrs",
    "createdOn": "3 Aug 2026",
    "status": "published",
    "topics": [
      "Auth vs authorization",
      "Password hashing",
      "JWT structure",
      "Login & register flow",
      "Protecting routes"
    ],
    "sections": [
      {
        "id": "auth-vs-authorization",
        "title": "Auth vs authorization",
        "content": "Learn **Auth vs authorization** in Day 31 of Thunder: 100 Days of Code. Register, login, tokens, and protected routes",
        "tryIt": "console.log(\"Day 31: Authentication with JWT\");"
      },
      {
        "id": "password-hashing",
        "title": "Password hashing",
        "content": "Learn **Password hashing** in Day 31 of Thunder: 100 Days of Code. Register, login, tokens, and protected routes",
        "tryIt": "console.log(\"Day 31: Authentication with JWT\");"
      },
      {
        "id": "jwt-structure",
        "title": "JWT structure",
        "content": "Learn **JWT structure** in Day 31 of Thunder: 100 Days of Code. Register, login, tokens, and protected routes",
        "tryIt": "console.log(\"Day 31: Authentication with JWT\");"
      },
      {
        "id": "login-and-register-flow",
        "title": "Login & register flow",
        "content": "Learn **Login & register flow** in Day 31 of Thunder: 100 Days of Code. Register, login, tokens, and protected routes",
        "tryIt": "console.log(\"Day 31: Authentication with JWT\");"
      }
    ],
    "quiz": [
      {
        "question": "What is the main topic of Day 31?",
        "options": [
          "Authentication with JWT",
          "HTML tables only",
          "Linux kernel modules",
          "Photoshop layers"
        ],
        "answer": 0,
        "explanation": "Module 31 focuses on Authentication with JWT."
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
    "createdOn": "4 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=DZF2bA0RESc",
    "youtubeTitle": "Role Based Access Control — Web Dev Simplified",
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
    "createdOn": "5 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=b7PUm7l5mEw",
    "youtubeTitle": "File Upload with Node & Multer — Traversy Media",
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
    "createdOn": "6 Aug 2026",
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
    "createdOn": "7 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=2Crh44XwS-Q",
    "youtubeTitle": "Express Error Handling — Web Dev Simplified",
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
    "createdOn": "8 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=4YjpPmdDeog",
    "youtubeTitle": "Web App Security in 100 Seconds — Fireship",
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
    "createdOn": "9 Aug 2026",
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
    "createdOn": "10 Aug 2026",
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
    "createdOn": "11 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=VywxIQ2jq7c",
    "youtubeTitle": "Postman Beginner Tutorial — Valentin Despa",
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
    "createdOn": "12 Aug 2026",
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
    "createdOn": "13 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=IRQi0Zt2N00",
    "youtubeTitle": "Monolith vs Microservices — Fireship",
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
    "createdOn": "14 Aug 2026",
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
        "content": "Learn **Redis basics** in Day 42 of Thunder: 100 Days of Code. In-memory caching, TTL, and cache strategies",
        "tryIt": "console.log(\"Day 42: Caching with Redis\");"
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
    "createdOn": "15 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=ymrTs66e-gc",
    "youtubeTitle": "Message Queues Explained — Hussein Nasser",
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
    "createdOn": "16 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=9a5TeSrrMcU",
    "youtubeTitle": "Load Balancing Explained — Hussein Nasser",
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
    "createdOn": "17 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=5faMjKuB9BA",
    "youtubeTitle": "Database Sharding Explained — Gaurav Sen",
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
    "createdOn": "18 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=9DCEO6L5W2s",
    "youtubeTitle": "System Design Rate Limiter — NeetCodeIO",
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
    "createdOn": "19 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=xpDnVWn5TOs",
    "youtubeTitle": "System Design for Beginners — Fireship",
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
    "createdOn": "20 Aug 2026",
    "status": "published",
    "topics": [
      "Functional requirements",
      "Non-functional requirements",
      "Back-of-envelope math",
      "HLD diagrams",
      "API design"
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
    "createdOn": "21 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=fMZMm_5WiNs",
    "youtubeTitle": "Design a URL Shortener — Gaurav Sen",
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
    "createdOn": "22 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=9DCEO6L5W2s",
    "youtubeTitle": "Design a Rate Limiter — NeetCodeIO",
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
    "createdOn": "23 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=oiJDue2QJhQ",
    "youtubeTitle": "Design a Notification System — Gaurav Sen",
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
    "createdOn": "24 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=QVzoQQ0Y3X4",
    "youtubeTitle": "Design a News Feed — Gaurav Sen",
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
    "createdOn": "25 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=4BTmKfFv500",
    "youtubeTitle": "Design a Chat Application — Gaurav Sen",
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
    "createdOn": "26 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=EpAS1axxqyI",
    "youtubeTitle": "Design an E-commerce System — Gaurav Sen",
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
    "createdOn": "27 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=M6_vlW71Xbg",
    "youtubeTitle": "Distributed Systems Overview — Hussein Nasser",
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
    "createdOn": "28 Aug 2026",
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
    "createdOn": "29 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=4EymT0ZMzOI",
    "youtubeTitle": "Consistency Patterns — Hussein Nasser",
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
    "createdOn": "30 Aug 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=UMW67RrjRyY",
    "youtubeTitle": "System Design Interview Tips — Exponent",
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
    "createdOn": "31 Aug 2026",
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
    "createdOn": "1 Sept 2026",
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
    "createdOn": "2 Sept 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=Rh3RA6v1ddE",
    "youtubeTitle": "React State & Props — Net Ninja",
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
    "createdOn": "3 Sept 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=0ZJgIjIuY7Y",
    "youtubeTitle": "useEffect Explained — Web Dev Simplified",
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
    "createdOn": "4 Sept 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=Law7wfdg_ls",
    "youtubeTitle": "React Router v6 Crash Course — Traversy Media",
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
    "createdOn": "5 Sept 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=8b0d_b8FZBw",
    "youtubeTitle": "React Forms Tutorial — Lama Dev",
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
    "createdOn": "6 Sept 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=BCg4U1FzODY",
    "youtubeTitle": "TypeScript Crash Course — Traversy Media",
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
    "createdOn": "7 Sept 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=jrKc_JxF0lQ",
    "youtubeTitle": "React TypeScript Tutorial — Programming with Mosh",
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
    "createdOn": "8 Sept 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=pfaSUYaSgUA",
    "youtubeTitle": "Tailwind CSS Crash Course — Traversy Media",
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
    "createdOn": "9 Sept 2026",
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
    "createdOn": "10 Sept 2026",
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
    "createdOn": "11 Sept 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=5fLW5W9j3X0",
    "youtubeTitle": "React Performance — Web Dev Simplified",
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
    "createdOn": "12 Sept 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=jcOKU9fkgq4",
    "youtubeTitle": "React Projects for Portfolio — JavaScript Mastery",
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
    "createdOn": "13 Sept 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=dlvxZqK9Alc",
    "youtubeTitle": "Deploy React App to Production — Traversy Media",
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
    "createdOn": "14 Sept 2026",
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
    "createdOn": "15 Sept 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=mRQGF5yAHsQ",
    "youtubeTitle": "MERN Stack Full Course — freeCodeCamp",
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
    "createdOn": "16 Sept 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=mRQGF5yAHsQ",
    "youtubeTitle": "MERN Stack Full Course — freeCodeCamp",
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
    "createdOn": "17 Sept 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=SWYqp7i5TkI",
    "youtubeTitle": "Deploy MERN App — Traversy Media",
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
    "createdOn": "18 Sept 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=eWEgUcOXleM",
    "youtubeTitle": "Developer Portfolio Guide — ForrestKnight",
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
    "createdOn": "19 Sept 2026",
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
    "createdOn": "20 Sept 2026",
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
    "createdOn": "21 Sept 2026",
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
    "createdOn": "22 Sept 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=HG6yIjZhxqU",
    "youtubeTitle": "Docker Compose Tutorial — TechWorld with Nana",
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
    "createdOn": "23 Sept 2026",
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
    "createdOn": "24 Sept 2026",
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
    "createdOn": "25 Sept 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=ulprqHHWROI",
    "youtubeTitle": "AWS Certified Cloud Practitioner — freeCodeCamp",
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
    "createdOn": "26 Sept 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=lsMQRioFRuU",
    "youtubeTitle": "Deployment Strategies Explained — Hussein Nasser",
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
    "createdOn": "27 Sept 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=X48Gyu0nlig",
    "youtubeTitle": "Kubernetes Course — freeCodeCamp",
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
    "createdOn": "28 Sept 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=17gF_euW9Pw",
    "youtubeTitle": "Prometheus & Grafana — TechWorld with Nana",
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
    "createdOn": "29 Sept 2026",
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
    "createdOn": "30 Sept 2026",
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
    "createdOn": "1 Oct 2026",
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
    "createdOn": "2 Oct 2026",
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
    "createdOn": "3 Oct 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=3oqMKAeYIyo",
    "youtubeTitle": "OAuth 2.0 Explained — Hussein Nasser",
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
    "createdOn": "4 Oct 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=zr1MbRzsBMI",
    "youtubeTitle": "Microservices Explained — Hussein Nasser",
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
    "createdOn": "5 Oct 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=K2RYJSBNzcA",
    "youtubeTitle": "Frontend System Design — Exponent",
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
    "createdOn": "6 Oct 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=1qw5ITr3kEo",
    "youtubeTitle": "Behavioral Interview Tips — Dan Croitor",
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
    "createdOn": "7 Oct 2026",
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
    "createdOn": "8 Oct 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=Tt08Km_XIYQ",
    "youtubeTitle": "Tech Resume Guide — ForrestKnight",
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
    "createdOn": "9 Oct 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=yzyi-2YrhbE",
    "youtubeTitle": "Open Source for Beginners — freeCodeCamp",
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
    "createdOn": "10 Oct 2026",
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
    "createdOn": "11 Oct 2026",
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
    "youtubeUrl": "https://www.youtube.com/watch?v=mRQGF5yAHsQ",
    "youtubeTitle": "Full Stack Project Showcase — freeCodeCamp",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  }
];
