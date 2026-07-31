// JavaScript prerequisite notes — 47 illustrated episodes, one per day.
// HTML5, CSS3 and JavaScript are prerequisites for the plan, which starts on
// Day 1 (20 Jul 2026) with Agentic AI in JavaScript. These notes are the JS refresher
// that sits underneath it. Each day pairs a hand-drawn episode with written notes.

export const PREREQ_META = {
  title: 'JavaScript Prerequisites',
  subtitle: '48 Days · The Complete JavaScript Series',
  blurb:
    'HTML5, CSS3 and JavaScript are assumed knowledge before Day 1 of the four-year plan. This is the JavaScript half of that foundation — 48 illustrated episodes, from why Brendan Eich wrote the language in ten days to how the V8 engine runs your code.',
  totalDays: 48,
  pdf: '/cheatsheets/javascript-series-47-episodes.pdf',
};

export const PREREQ_GROUPS = [
  { id: 'history', label: 'The Story', icon: '📜', desc: 'Where JavaScript came from and why it looks the way it does.' },
  { id: 'core', label: 'The Language', icon: '🧱', desc: 'Syntax and the everyday building blocks you reach for constantly.' },
  { id: 'engine', label: 'Under The Hood', icon: '⚙️', desc: 'How JavaScript actually executes — the part interviews dig into.' },
  { id: 'async', label: 'Async JavaScript', icon: '⏳', desc: 'Doing many things at once on a single thread.' },
  { id: 'browser', label: 'The Browser', icon: '🌐', desc: 'The DOM, events, and the places a browser stores your data.' },
  { id: 'oop', label: 'Objects & OOP', icon: '🏛️', desc: 'Constructors, classes, and the principles behind them.' },
  { id: 'advanced', label: 'Advanced', icon: '🚀', desc: 'The powerful corners of the language most people skip.' },
];

export const PREREQ_DAYS = [
  {
    day: 1,
    group: 'history',
    title: 'The Origins of JavaScript',
    tagline: 'The 10-day language that changed the web forever.',
    image: '/javascript-notes/ep01-origins-of-javascript.jpeg',
    tags: ['History', 'Brendan Eich', '1995'],
    notes: [
      { k: 'Why it existed', v: 'The mid-1990s web was growing fast but pages were static. Netscape wanted a lightweight scripting language that ran in the browser and made pages interactive.' },
      { k: 'The creator', v: 'Brendan Eich, a programmer at Netscape, was handed a nearly impossible task with an impossible deadline.' },
      { k: 'Ten days', v: 'He started around 6 May 1995 and finished about ten days later. The goal was simply to make the web alive — easy to learn, lightweight, and usable by non-programmers.' },
      { k: 'Three names', v: 'It was born as Mocha, renamed LiveScript by Netscape, and finally became JavaScript — the name that stuck.' },
      { k: 'First shipped', v: 'Netscape Navigator 2.0, September 1995. It could manipulate HTML, validate forms, and respond to user actions.' },
      { k: 'The impact', v: 'A ten-day experiment became the most popular language in the world and gave the web its interactivity.' },
    ],
    theory: [
      {
        h: "The Origins of JavaScript — the 10-day language that changed the web forever",
        p: "Episode 01 opens with Brendan Eich's own advice: **\"First, solve the problem. Then, write the code.\"** The episode tells the story of how JavaScript — a language built in ten days in May 1995 — went on to become the language of the web. The subtitle says it plainly: this is *the 10-day language that changed the web forever*. The JS logo on the page carries the stamp **EST. MAY 1995**.",
      },
      {
        h: "Why was JavaScript created?",
        p: "In the **mid-1990s** the web was growing fast, but it was a fundamentally lifeless medium: web pages were **static and boring** — text, images, links, and nothing that responded to you. Netscape, the company that dominated the browser market at the time, wanted to make the web **more interactive**, so that pages could react to what a user did rather than just sit there.\n\nTo do that they needed a **lightweight scripting language that could run inside the browser** itself. Not a heavy compiled language, not something only trained engineers could touch — something small enough to embed in a page and simple enough that ordinary people writing web pages could pick it up.",
      },
      {
        h: "The creator — Brendan Eich",
        p: "The person handed this job was **Brendan Eich**, a programmer at Netscape. The page describes him in three words: **brilliant, focused, independent**. What makes the story remarkable is the framing on the page — he was given a **nearly impossible task with an impossible deadline**. One engineer, one language, and almost no time.",
      },
      {
        h: "The 10-day challenge",
        p: "In **May 1995**, Brendan Eich was given just **10 days** to create a scripting language. He **started on May 6 and finished around May 16**. That's all it took — ten days to produce the first working version of what would become the most widely used programming language in the world.\n\nThe goal was simple and was stated as one line: **make the web alive**. Four constraints shaped the design:\n\n- **Easy to learn**\n- **Lightweight**\n- **Integrated with the browser**\n- **Accessible to non-programmers**",
      },
      {
        h: "From Mocha to JavaScript",
        p: "The language changed names twice before it settled. It was first called **Mocha** — the original name Eich gave it. Netscape then renamed it **LiveScript**. Finally it became **JavaScript**, and that is *the name that stayed forever*.\n\nThe naming matters historically: JavaScript is not Java and was never derived from it. The name was a marketing decision by Netscape, not a technical lineage — but it stuck, and the confusion has followed the language ever since.",
      },
      {
        h: "The first version",
        p: "JavaScript was **first shipped in Netscape Navigator 2.0 in September 1995** — roughly four months after the ten-day sprint. In that first release it could already **manipulate HTML, validate forms, and respond to user actions**. Form validation in particular was the killer use case: instead of sending a form to the server and waiting for a round trip to be told a field was empty, the browser could check it instantly.\n\nEich's own description of his intent is quoted on the page: **\"I wanted a language that non-programmers could use to extend their environment. Something boring, safe, and predictable.\"**",
      },
      {
        h: "Impact",
        p: "The consequences were enormous:\n\n- **It gave the web interactivity** — pages could finally respond, change, and react.\n- **It empowered a generation of developers** — people who were not classically trained programmers could build for the web.\n- **It became the language of the web.**\n\nThe page's summary line: *from a 10-day experiment to the most popular language in the world.*",
      },
      {
        h: "A timeline of the beginning",
        p: "The page closes the history with a five-point timeline:\n\n- **1994** — Netscape is building the future of the web.\n- **May 1995** — Brendan Eich is given the challenge.\n- **May 6 – May 16** — JavaScript is born in just **10 days**.\n- **Sep 1995** — JavaScript is shipped in Netscape Navigator 2.0.\n- **Today** — powering billions of websites and applications.\n\nThe closing quote: **\"Every great story on the web begins with JavaScript.\"**",
      },
    ],
  },
  {
    day: 2,
    group: 'history',
    title: 'The Browser Wars',
    tagline: 'The battle that made JavaScript famous (1995–1999).',
    image: '/javascript-notes/ep02-the-browser-wars.jpeg',
    tags: ['History', 'Netscape', 'JScript'],
    notes: [
      { k: 'The stakes', v: 'Millions of new users were coming online and every company wanted to own the web.' },
      { k: 'Netscape', v: 'The king of browsers with roughly 90% market share via Netscape Navigator.' },
      { k: 'Microsoft enters', v: 'Internet Explorer launched, and rather than license JavaScript, Microsoft built its own clone: JScript.' },
      { k: 'The problem', v: 'Code that worked in Netscape often failed in Internet Explorer. Developers wrote `if (browser === "IE")` everywhere.' },
      { k: 'Browser hell', v: 'Different APIs, different features, different bugs, different behaviours. One website, two browsers, two headaches.' },
      { k: 'The lesson', v: 'Competition accelerated adoption. Without the browser wars JavaScript might never have become the language of the web.' },
    ],
    theory: [
      {
        h: "The Browser Wars (1995–1999) — the battle that made JavaScript famous",
        p: "Episode 02 covers the period **1995 to 1999**, when two companies fought for control of the browser and, in the process, accidentally made JavaScript essential. The episode's thesis is that the war was destructive *and* generative: the fight is what forced JavaScript into every browser on earth.",
      },
      {
        h: "1. The internet was exploding",
        p: "In the mid-to-late 1990s, **millions of new users were coming online** for the first time. The web went from a niche academic curiosity to a mass medium in a handful of years. That created an obvious commercial prize: **every company wanted to own the web** — to be the door that everyone walked through to reach it. Whoever controlled the browser controlled the user's experience of the entire internet.",
      },
      {
        h: "2. Netscape",
        p: "Netscape was **the king of browsers**. Its **market share was roughly 90%** — a near-total monopoly on how people experienced the web. Its browser was **Netscape Navigator**, the same product that had shipped JavaScript in version 2.0. Being that dominant meant that whatever Netscape put in Navigator effectively became the web's de facto standard.",
      },
      {
        h: "3. Microsoft enters",
        p: "Microsoft launched **Internet Explorer**, and **the war begins**. Microsoft had the operating system that nearly every one of those new users was already running, which gave it a distribution advantage Netscape could not match. This is the moment the browser stops being one company's product and becomes contested territory.",
      },
      {
        h: "4. The competition",
        p: "The standoff was direct. **Netscape:** *\"We have JavaScript.\"* **Microsoft:** *\"We'll make our own.\"*\n\nMicrosoft created **JScript** — a **JavaScript clone**. Rather than license or adopt Netscape's language, Microsoft reverse-engineered its own compatible-ish version for Internet Explorer. Two vendors, two implementations of what was nominally the same language, each free to add and change whatever it liked.",
      },
      {
        h: "5. The problem",
        p: "The predictable result: **code working in Netscape often failed in Internet Explorer**. A script a developer tested and shipped could simply break for half their audience.\n\nDevelopers coped by writing browser detection **everywhere** — checks like `if (browser === \"IE\")` scattered throughout their code, forking the logic for each vendor. Every feature effectively had to be written twice.",
      },
      {
        h: "6. Browser hell",
        p: "The divergence ran deep. Across the two browsers there were:\n\n- **Different APIs**\n- **Different features**\n- **Different bugs**\n- **Different behaviors**\n\nThe page sums it up: **one website, two browsers, two headaches.** Building for the web meant maintaining two mental models of how the same language behaved.",
      },
      {
        h: "7. The result",
        p: "For all the pain, the outcome was a win for JavaScript:\n\n- **JavaScript adoption exploded.**\n- **Every major browser needed scripting support** — you could not compete without it.\n- **The web became interactive.**\n\nThe war forced scripting from a Netscape feature into a baseline requirement for any browser that wanted to be taken seriously.",
      },
      {
        h: "Lesson",
        p: "**Competition accelerated JavaScript's growth. Without the Browser Wars, JavaScript might never have become the language of the web.** Had Netscape kept its 90% share unchallenged, JavaScript would have remained one vendor's proprietary add-on. Microsoft's decision to clone it rather than ignore it is precisely what turned it into a universal capability — and what created the pressure that led to standardization.",
      },
      {
        h: "Timeline and closing",
        p: "The episode's timeline runs **1995 → 1999**:\n\n- **Netscape dominates**\n- **Microsoft enters**\n- **The war begins**\n- **JScript is born**\n- **1999 — the web wins**\n\nClosing quote: **\"Great wars don't just destroy. They build the future.\"**",
      },
    ],
    snippets: [
      {
        label: "BROWSER DETECTION (THE ERA'S WORKAROUND)",
        code: "if (browser === \"IE\")",
        note: "Developers had to write checks like this **everywhere** to fork behaviour between Netscape and Internet Explorer.",
      },
    ],
  },
  {
    day: 3,
    group: 'history',
    title: 'Standardization — The Birth of ECMAScript',
    tagline: 'Standards turn chaos into compatibility (1997).',
    image: '/javascript-notes/ep03-standardization-ecmascript.jpeg',
    tags: ['History', 'ECMAScript', 'ECMA-262'],
    notes: [
      { k: 'The problem', v: 'Every browser had its own version of JavaScript. No standard meant writing different code for different browsers.' },
      { k: 'The solution', v: 'Netscape submitted JavaScript to ECMA (European Computer Manufacturers Association), which standardized it as ECMAScript.' },
      { k: 'What ECMAScript is', v: 'The ECMA-262 standard defines how the language should work — its features and behaviour. It does not define the browser or the DOM.' },
      { k: 'ECMAScript 1', v: 'Published June 1997: basic syntax, data types, operators, functions, objects. ECMAScript 2 followed in 1998 with clarifications and stability.' },
      { k: 'Why it mattered', v: 'Consistency across browsers, less chaos, a reliable language, and an open door for future growth.' },
    ],
    theory: [
      {
        h: "Standardization (1997) — the birth of ECMAScript",
        p: "Episode 03 lands in **1997**. JavaScript was growing fast, but there was a problem: growth without a standard was producing fragmentation, not progress. This episode is the story of how the language got an official specification and why that mattered more than any single feature ever did.",
      },
      {
        h: "The problem",
        p: "The situation after the Browser Wars was untenable:\n\n- **Every browser had its own version of JavaScript.**\n- **There was no standard** — no authoritative document saying what the language actually was.\n- **Developers had to write different code for different browsers.**\n- **Browser compatibility was a nightmare.**\n\nWithout a specification, \"JavaScript\" was not one language — it was a family of similar dialects, each defined by whatever its vendor happened to implement. The realization on the page: **the web needed one common language standard.**",
      },
      {
        h: "The solution",
        p: "Netscape submitted JavaScript to a standards organization: **ECMA — the European Computer Manufacturers Association**. ECMA decided to **standardize the language**, and the resulting standard was named **ECMAScript**: *the official standard of JavaScript*.\n\nThe name is a historical artifact rather than a branding choice — the trademark on \"JavaScript\" complicated naming the standard after it, so the standard carries ECMA's name while the language everyone writes is still called JavaScript.",
      },
      {
        h: "What is ECMAScript?",
        p: "ECMAScript is **a standard that defines how JavaScript should work**. Crucially, **it doesn't define how the browser looks** — it says nothing about the DOM, about windows, about rendering, about how a page is drawn. **It defines the language features and behavior**: syntax, types, operators, functions, objects.\n\nThe standard's formal identifier is **ECMA-262**. When people say \"ES5\" or \"ES6,\" they are naming editions of ECMA-262.",
      },
      {
        h: "Why it mattered",
        p: "A standard changed the economics of writing for the web:\n\n- **Brings consistency across browsers** — the same code means the same thing everywhere.\n- **Reduces the chaos** — one document to argue against instead of two vendors' whims.\n- **Makes JavaScript reliable** — you can trust behavior instead of testing for it.\n- **Opens the door for future growth** — a shared baseline is what lets a language evolve deliberately.\n\nThe episode's punchline: **\"Standards turn chaos into compatibility.\"**",
      },
      {
        h: "The first standard",
        p: "**ECMAScript 1 was published in June 1997.** It codified the fundamentals of the language:\n\n- **Basic syntax**\n- **Data types**\n- **Operators**\n- **Functions**\n- **Objects**\n\nA year later, in **1998**, **ECMAScript 2** arrived. It was a modest release — **small improvements, clarifications, more stability**. Not new power, but a tightening of the text so implementers had less room to disagree.",
      },
      {
        h: "Timeline",
        p: "The episode's timeline:\n\n- **1995** — JavaScript is born.\n- **1996** — the Browser Wars begin.\n- **1997** — the ECMAScript standard is created.\n- **1998** — ECMAScript 2 is released.\n- **Today** — continuous evolution.\n\nClosing quote: **\"A standard today, a powerful future tomorrow.\"**",
      },
    ],
  },
  {
    day: 4,
    group: 'history',
    title: "JavaScript's Dark Ages",
    tagline: 'The browser compatibility hell (1999–2008).',
    image: '/javascript-notes/ep04-javascript-dark-ages.jpeg',
    tags: ['History', 'Compatibility', 'Pre-jQuery'],
    notes: [
      { k: 'The chaos', v: 'Every browser implemented JavaScript differently. The same code produced different output — `[1,2,3].join("-")` could give "1-2-3" in one browser and "1,2,3" in another.' },
      { k: 'Why developers suffered', v: 'Different JS engines, different DOM models, different event handling, and different (often strange) bugs.' },
      { k: 'Real code from the era', v: 'Branching on `navigator.appName` to detect Netscape vs Internet Explorer — and an else branch that amounted to "pray".' },
      { k: 'Workarounds everywhere', v: 'jQuery did not exist yet. Developers wrote custom fixes: huge scripts, messy code, poor performance. Fix one bug, break another.' },
      { k: 'The impact', v: 'Despite the pain JavaScript kept growing. Web apps got more complex and the need for a real standard became impossible to ignore.' },
    ],
    theory: [
      {
        h: "JavaScript's Dark Ages (1999–2008) — the browser compatibility hell",
        p: "Episode 04 covers **1999 to 2008**. The framing line: after the Browser Wars, JavaScript became **powerful… but also messy**. A standard existed on paper since 1997, but browsers had not caught up to it, and the day-to-day experience of writing JavaScript was miserable for nearly a decade.",
      },
      {
        h: "1. The chaos",
        p: "**Every browser implemented JavaScript differently.** The same code produced different output depending on where it ran, and **features supported in one browser were simply missing in another**.\n\nThe page's example is `Array.prototype.join`. Given `var a = [1, 2, 3];` and `a.join(\"-\");`, **Netscape produced `1-2-3`** — the correct result — while **Internet Explorer produced `1,2,3`**, ignoring the separator argument entirely. A one-line call to a built-in method could not be trusted.\n\nThe consequence, quoted on the page: **\"Developers spent more time fixing bugs than building features.\"**",
        code: "// Netscape\nvar a = [1, 2, 3];\na.join(\"-\");\n// Result: 1-2-3\n\n// Internet Explorer\nvar a = [1, 2, 3];\na.join(\"-\");\n// Result: 1,2,3",
      },
      {
        h: "2. Why developers suffered",
        p: "The divergence was not cosmetic — it ran through every layer:\n\n- **Different JS engines**\n- **Different DOM models**\n- **Different event handling**\n- **Different bugs** (and strange ones!)\n\nEvent handling alone meant learning two completely separate models. Real code from that era branched on `navigator.appName` — checking whether you were in Netscape or Microsoft Internet Explorer and running different logic for each — with a final `else` branch whose only honest comment was `// pray`, because nobody knew what a third browser would do.",
        code: "if (navigator.appName == \"Netscape\") {\n  // do this\n} else if (navigator.appName == \"Microsoft Internet Explorer\") {\n  // do that\n} else {\n  // pray\n}",
      },
      {
        h: "3. Workarounds everywhere",
        p: "There was no rescue library to reach for: **libraries like jQuery didn't exist yet**. **Developers wrote custom fixes** by hand, per project, for every incompatibility they hit. The result was **huge scripts, messy code, and poor performance** — every page shipped its own private compatibility layer.\n\nThe page's summary of the experience: **fix one bug, break another.** Patching for one browser routinely broke the other, and there was no shared body of tested workarounds to inherit.",
      },
      {
        h: "4. Developers' mood",
        p: "The prevailing sentiment of the era, quoted: **\"JavaScript is amazing… but also pain.\"** Developers genuinely loved what the language let them do and genuinely hated what it cost them to do it.\n\nThe page's wry line: **memes weren't enough. We needed standards.** Complaining was cathartic but not a solution — the only real fix was a specification browsers would actually implement.",
      },
      {
        h: "5. The impact",
        p: "Despite everything, the trajectory kept going up:\n\n- **Despite the pain, JavaScript kept growing.**\n- **Web apps became more complex** — the ambitions outgrew the tooling.\n- **Developers demanded a solution.**\n- **The need for a standard became impossible to ignore.**\n\nThis is the key dynamic of the Dark Ages: the pain scaled with adoption. The bigger the applications got, the more expensive the incompatibilities became, until fixing the foundation was cheaper than working around it.",
      },
      {
        h: "6. The turning point (next episode)",
        p: "**A new hope was coming.** **ECMAScript** — a standard that would bring **consistency, stability and trust** back to JavaScript. The next episode covers the birth of ECMAScript as a force browsers actually honoured, ending the compatibility hell.",
      },
      {
        h: "Where we are",
        p: "The running journey map at this point:\n\n- **1995** — JavaScript is born.\n- **1995–1999** — Browser Wars.\n- **1997** — Standardization begins (ECMAScript).\n- **1999–2008** — JavaScript's Dark Ages.\n- **Next…** — The Revival (coming soon).\n\nClosing quote: **\"Every dark age prepares the world for a brighter future.\"**",
      },
    ],
    snippets: [
      {
        label: "SAME CODE, DIFFERENT OUTPUT (NETSCAPE)",
        code: "var a = [1, 2, 3];\na.join(\"-\");\n// Result: 1-2-3",
        note: "Netscape honoured the separator argument to `join()` — the correct behaviour.",
      },
      {
        label: "SAME CODE, DIFFERENT OUTPUT (INTERNET EXPLORER)",
        code: "var a = [1, 2, 3];\na.join(\"-\");\n// Result: 1,2,3",
        note: "Internet Explorer ignored the separator and fell back to commas — a built-in method you could not trust.",
      },
      {
        label: "REAL CODE FROM THAT ERA",
        code: "if (navigator.appName == \"Netscape\") {\n  // do this\n} else if (navigator.appName == \"Microsoft Internet Explorer\") {\n  // do that\n} else {\n  // pray\n}",
        note: "Browser sniffing via `navigator.appName`, with an `else` branch nobody could reason about.",
      },
    ],
  },
  {
    day: 5,
    group: 'history',
    title: 'ES5 & The Modern JavaScript Foundation',
    tagline: 'ES5 did not add flashy features — it made JavaScript solid (2009).',
    image: '/javascript-notes/ep05-es5-modern-foundation.jpeg',
    tags: ['History', 'ES5', 'strict mode'],
    notes: [
      { k: 'What ES5 was', v: 'ECMAScript 5, released 2009 — the 5th edition of ECMA-262. Its focus was reliability, security and performance.' },
      { k: 'Strict mode', v: '`"use strict"` catches common mistakes and prevents silent errors, making JavaScript a safer language.' },
      { k: 'Key improvements', v: 'Better error handling, native JSON support (JSON.parse / JSON.stringify), more array methods (forEach, map, filter, reduce, every, some), string improvements (trim, split, charAt), and object enhancements (Object.create, Object.defineProperty).' },
      { k: 'Better performance', v: 'Engine optimizations made JS faster, with better memory management.' },
      { k: 'The bridge', v: 'ES5 connected the chaos of old JavaScript to the power of the modern language: consistent, predictable, easier to debug.' },
    ],
    theory: [
      {
        h: "ES5 & the modern JavaScript foundation (2009)",
        p: "Episode 05 is about **2009** and the release that ended the Dark Ages. The tagline: *making JavaScript more powerful, stable and developer-friendly*. ES5 is not the release people remember for flashy syntax — it is the release that made the language trustworthy enough to build on.",
      },
      {
        h: "1. What is ES5?",
        p: "**ES5 (ECMAScript 5) was released in 2009** as the **5th edition of ECMA-262**. It **brought much-needed improvements to the language** after a decade in which the specification and reality had drifted apart.\n\nIts focus was deliberately unglamorous: **reliability, security and performance**. Not new paradigms, not new syntax sugar — just making the existing language behave consistently, fail loudly instead of silently, and run fast.",
      },
      {
        h: "2. Strict mode",
        p: "ES5 **introduced `\"use strict\"`**, an opt-in mode that tightens the language's rules. It **helps catch common mistakes**, **prevents silent errors**, and **makes JS a safer language**.\n\nThe canonical example: in sloppy mode, assigning to an undeclared variable silently creates a global. Under strict mode, `x = 10;` throws — **`x` is not defined**. That single change turns a class of typo-driven bugs from invisible action-at-a-distance into an immediate, obvious error.",
        code: "\"use strict\";\nx = 10; // Error! x is not defined",
      },
      {
        h: "3. Key improvements",
        p: "ES5's additions, grouped as they appear on the page:\n\n- **Better error handling** — catch errors early.\n- **JSON support** — built-in `JSON.parse()` and `JSON.stringify()`. Before this, parsing JSON meant `eval()` or a third-party library.\n- **More array methods** — `forEach`, `map`, `filter`, `reduce`, `every`, `some`. These are the functional building blocks that changed how JavaScript is written day to day.\n- **String improvements** — `trim()`, `split()`, `charAt()`, and others.\n- **Object enhancements** — `Object.create()` and `Object.defineProperty()`, giving real control over prototypes and property descriptors.\n\nThe page's three-word summary of the result: **smarter, cleaner, stronger.**",
      },
      {
        h: "4. Better performance",
        p: "**Engine optimizations made JS faster**, and ES5 brought **better memory management**. This is the era in which JavaScript engines stopped being simple interpreters and started being seriously engineered runtimes — which is what made ambitious client-side applications viable at all.\n\nThe episode's own verdict on the release: **\"ES5 didn't add flashy features. It made JavaScript solid.\"**",
      },
      {
        h: "5. Real-world impact",
        p: "- **More reliable applications** — consistent behaviour meant code you could reason about.\n- **Better tools & libraries** — a stable base is what tooling is built on.\n- **Paved the way for modern JavaScript** — everything ES6 later did assumed the foundation ES5 laid.\n\nWithout ES5's consistency guarantees, the ecosystem of build tools, frameworks, and libraries that defines modern JavaScript would have had nothing solid to stand on.",
      },
      {
        h: "Before vs After ES5",
        p: "**Before ES5:**\n\n- Inconsistent behavior\n- Hard to debug\n- Limited native features\n- Browser compatibility issues\n\n**After ES5:**\n\n- Consistent & predictable\n- Easier debugging\n- Powerful native features\n- Better performance\n\nThe page's framing: **ES5 was the bridge between the chaos of old JS and the power of modern JS.**",
      },
      {
        h: "Journey so far",
        p: "The series map at the end of Episode 05:\n\n- **EP 01** — Origins\n- **EP 02** — Browser Wars\n- **EP 03** — Standardization (ECMAScript)\n- **EP 04** — Dark Ages (Browser Hell)\n- **EP 05** — ES5 & Modern Foundation\n- **Next up: ES6 — changes everything!**\n\nClosing quote: **\"Great foundations don't make noise, but they make everything possible.\"**",
      },
    ],
    snippets: [
      {
        label: "STRICT MODE",
        code: "\"use strict\";\nx = 10; // Error! x is not defined",
        note: "Without `\"use strict\"` this would silently create a global; with it, the mistake throws immediately.",
      },
    ],
  },
  {
    day: 6,
    group: 'history',
    title: 'ES6+ — The Game Changer',
    tagline: 'A new era for JavaScript (2015 onwards).',
    image: '/javascript-notes/ep06-es6-the-game-changer.jpeg',
    tags: ['History', 'ES6', 'ES2015'],
    notes: [
      { k: 'Why ES6', v: 'Applications were getting large and complex. Developers needed better ways to write code — modern syntax, powerful features, real structure.' },
      { k: 'Top features', v: 'let & const (block scope, no more hoisting surprises), arrow functions (shorter syntax, lexical `this`), template literals, destructuring, spread & rest, and classes.' },
      { k: 'Native modules', v: 'import / export finally arrived in the language itself, so code could be split across files without hacks.' },
      { k: 'Default parameters', v: '`function greet(name = "Dev")` — no more undefined surprises.' },
      { k: 'Promises', v: 'Better async handling and the beginning of the end for callback hell.' },
      { k: 'The impact', v: 'Cleaner code, better performance, easier maintenance. ES6 made JavaScript the language of the web.' },
    ],
    theory: [
      {
        h: "ES6+ — the game changer: a new era for JavaScript",
        p: "Episode 06 covers **ES6 (2015+)**, the release that redefined what writing JavaScript feels like. Where ES5 made the language *solid*, ES6 made it *pleasant* — and the page's framing is exactly that progression.",
      },
      {
        h: "1. The evolution",
        p: "**ES5 was good. ES6 made it GREAT.** The page draws it as a podium: **ES5 (2009)** on the lower step, **ES6 (2015+)** wearing the crown.\n\nThe six-year gap between them matters. ES5 spent that time proving the language could be trusted; ES6 spent the credibility that bought, adding real syntax and structure rather than just fixing behaviour.",
      },
      {
        h: "2. Why ES6?",
        p: "Three pressures drove it:\n\n- **Developers needed better ways to write code** — the ES5 vocabulary was reliable but verbose and full of workarounds.\n- **Large applications were becoming complex** — JavaScript was no longer scripts on a page; it was entire applications, and the language had no answer for organising them.\n- **ES6 brings modern syntax, powerful features & better structure.**\n\nThe key word is *structure*. ES6 is less about doing new things and more about being able to express what you were already doing without fighting the language.",
      },
      {
        h: "3. Top ES6+ features",
        p: "The page lists six headline features:\n\n- **`let` & `const`** — e.g. `let x = 10;` and `const PI = 3.14;`. They give **block scope** and mean **no more hoisting issues** — the `var` surprises that plagued earlier code.\n- **Arrow functions** — `() => {}`. **Shorter syntax** and **lexical `this`**, which removes an entire category of `this`-binding bugs.\n- **Template literals** — `` `Hello, ${name}!` ``. **String interpolation made easy** — no more concatenating with `+`.\n- **Destructuring** — `[a, b] = arr;` and `({x, y} = obj);`. **Extract values easily** straight out of arrays and objects.\n- **Spread & rest** — `...arr` and `...args`. **Work with arrays & functions like a pro.**\n- **Classes** — `class User { constructor() {} }`. **Cleaner syntax for OOP** over JavaScript's prototypes.",
        code: "let x = 10;\nconst PI = 3.14;\n\n() => {}\n\n`Hello, ${name}!`\n\n[a, b] = arr;\n({x, y} = obj);\n\n...arr\n...args\n\nclass User {\n  constructor() {}\n}",
      },
      {
        h: "4. Modules (import/export)",
        p: "ES6 gave JavaScript **native modules** at last. A file exports what it wants to share, and another file imports exactly what it needs — no globals, no script-tag ordering, no bolted-on module systems.\n\nThe page's example splits across two files: `math.js` exports an `add` function, and `app.js` imports it by name from `'./math.js'`. The exclamation on the page: **finally, native modules in JavaScript!** This is what made structuring large applications a language feature rather than a tooling problem.",
        code: "// math.js\nexport const add = (a, b) => a + b;\n\n// app.js\nimport { add } from './math.js';",
      },
      {
        h: "5. Default parameters",
        p: "Functions can declare fallback values for arguments directly in the signature. `function greet(name = 'Dev')` returns `` `Hello, ${name}` `` — call it with nothing and you get `Hello, Dev` rather than `Hello, undefined`.\n\nThe page's note: **no more undefined surprises!** Before this, every function that wanted a default opened with a manual `name = name || 'Dev'` guard, which had its own falsy-value bugs.",
        code: "function greet(name = 'Dev') {\n  return `Hello, ${name}`;\n}",
      },
      {
        h: "6. Promises",
        p: "Promises gave asynchronous code a real structure. The example fetches `/data`, then chains `.then(res => res.json())` and `.then(data => console.log(data))` — a flat, readable sequence instead of nested callbacks.\n\nThe page's verdict: **better async handling. Goodbye callback hell!** Nesting callbacks inside callbacks was the defining pain of pre-ES6 async JavaScript; promises replaced the pyramid with a chain.",
        code: "fetch('/data')\n  .then(res => res.json())\n  .then(data => console.log(data));",
      },
      {
        h: "7. The impact",
        p: "- **Cleaner code**\n- **Better performance**\n- **Easier maintenance**\n- **Modern development**\n\nThe headline claim: **ES6 made JavaScript the language of the web.** Not merely a language that ran in the web — the default choice for building on it.",
      },
      {
        h: "Journey so far",
        p: "The series map through Episode 06:\n\n- **EP 01** — Origins\n- **EP 02** — Browser Wars\n- **EP 03** — Standardization (ECMAScript)\n- **EP 04** — Dark Ages (Browser Hell)\n- **EP 05** — ES5 & Modern Foundation\n- **EP 06** — ES6+ Game Changer\n\nClosing quote: **\"Good code isn't just working code. It's code that's easy to read, maintain, and scale.\"**",
      },
    ],
    snippets: [
      {
        label: "LET & CONST",
        code: "let x = 10;\nconst PI = 3.14;",
        note: "Block scope and no more hoisting issues.",
      },
      {
        label: "ARROW FUNCTIONS",
        code: "() => {}",
        note: "Shorter syntax and lexical `this`.",
      },
      {
        label: "TEMPLATE LITERALS",
        code: "`Hello, ${name}!`",
        note: "String interpolation made easy.",
      },
      {
        label: "DESTRUCTURING",
        code: "[a, b] = arr;\n({x, y} = obj);",
        note: "Extract values out of arrays and objects easily.",
      },
      {
        label: "SPREAD & REST",
        code: "...arr\n...args",
        note: "Work with arrays and functions like a pro.",
      },
      {
        label: "CLASSES",
        code: "class User {\n  constructor() {}\n}",
        note: "Cleaner syntax for OOP.",
      },
      {
        label: "MODULES — EXPORT",
        code: "// math.js\nexport const add = (a, b) => a + b;",
        note: "A file declares what it shares.",
      },
      {
        label: "MODULES — IMPORT",
        code: "// app.js\nimport { add } from './math.js';",
        note: "Finally, **native modules** in JavaScript.",
      },
      {
        label: "DEFAULT PARAMETERS",
        code: "function greet(name = 'Dev') {\n  return `Hello, ${name}`;\n}",
        note: "No more `undefined` surprises.",
      },
      {
        label: "PROMISES",
        code: "fetch('/data')\n  .then(res => res.json())\n  .then(data => console.log(data));",
        note: "Better async handling — goodbye callback hell.",
      },
    ],
  },
  {
    day: 7,
    group: 'async',
    title: 'Async / Await',
    tagline: 'Cleaner code. Better readability. Goodbye callback hell.',
    image: '/javascript-notes/ep07-async-await.jpeg',
    tags: ['Async', 'await', 'try/catch'],
    notes: [
      { k: 'The problem', v: 'Nested callbacks — fetch, then process, then save, then email — drift right across the screen. Hard to read, hard to maintain, error-prone.' },
      { k: 'The solution', v: 'async/await lets you write the same flow top-to-bottom as if it were synchronous.' },
      { k: 'How it works', v: '`async` marks a function; `await` pauses execution until the promise resolves, then hands you the resolved value. Promises do the heavy lifting behind the scenes.' },
      { k: 'try…catch', v: 'Wrap awaits in try/catch to handle rejections, and use `finally` for cleanup that must always run.' },
      { k: 'Works with', v: 'fetch(), promises, other async functions — any promise-based API.' },
      { k: 'Important notes', v: 'await only works inside async functions (top-level await works in modules), and it does not block the whole app — only that function.' },
    ],
    theory: [
      {
        h: "Async / Await Makes Async Simple",
        p: "The headline claim of this episode is that `async`/`await` gives you **cleaner code, better readability** and lets you say **goodbye to callback hell**. Asynchronous JavaScript has always been necessary — network calls, file reads and timers cannot block the main thread — but the old ways of expressing it forced you to write your logic inside-out, nested in callbacks. `async`/`await` lets you write asynchronous code that *reads* like ordinary top-to-bottom synchronous code, while still being non-blocking underneath.\n\nAs the closing line of the page puts it: **async/await isn't just syntax. It's a superpower for modern JavaScript.**",
      },
      {
        h: "01 — The Problem: Callback Hell",
        p: "Before `async`/`await`, chaining dependent asynchronous steps meant nesting a callback inside a callback inside a callback. Each step's result was only available inside its own callback function, so the next step had to be written one level deeper. The result is the infamous **pyramid of doom** — code that drifts further and further to the right and ends in a stack of closing braces and parentheses.\n\nThe page marks this pattern with three red warnings:\n\n- **Hard to read** — the logical order of operations is buried in indentation.\n- **Hard to maintain** — inserting or reordering a step means re-nesting everything below it.\n- **Error-prone** — every level needs its own error handling, and it's easy to miss one.",
        code: "fetchData((data) => {\n  processData(data, (result) => {\n    saveData(result, (res) => {\n      sendEmail(res, () => {\n        console.log(\"Done\");\n      });\n    });\n  });\n});",
      },
      {
        h: "02 — The Solution: Async / Await",
        p: "The exact same sequence of four dependent steps, rewritten with `async`/`await`, collapses into a flat list of statements. Each `await` pauses the function until that step's promise resolves and hands you the value directly as a normal return value, so the next line can simply use it. There is no nesting, no indentation drift, and the order you read is the order things happen.\n\nThe page's verdict on this version: **clean, readable, maintainable.** Same behaviour, dramatically better ergonomics.",
        code: "async function process() {\n  const data = await fetchData();\n  const result = await processData(data);\n  const res = await saveData(result);\n  await sendEmail(res);\n  console.log(\"Done!\");\n}",
      },
      {
        h: "03 — How It Works",
        p: "There are only three moving pieces to understand:\n\n- **`async`** — marks a function as asynchronous. An async function always returns a promise, whatever you actually return from it.\n- **`await`** — pauses execution of that function until the promise it is given resolves. It does not block the rest of the program; only this function is suspended.\n- **Get the resolved value and continue** — once the promise settles, `await` evaluates to the resolved value and the function picks up on the next line.\n\nThe important mental model, and the side-note the page highlights: **behind the scenes, promises handle the heavy lifting.** `async`/`await` is a syntax layer over promises, not a replacement for them.",
      },
      {
        h: "04 — Example",
        p: "A realistic fetch written with `async`/`await` and wrapped in `try`/`catch`. The function is marked `async`, awaits the network response, awaits `res.json()` to parse the body, and returns the parsed user. Because the function is `async`, the value it returns is automatically wrapped in a promise — which is why the **usage** panel below calls `getUser().then(...)` to read the result from outside.\n\nThat pairing is worth noticing: inside an async function you use `await`; from ordinary code outside, you consume the returned promise with `.then()` as usual.",
        code: "async function getUser() {\n  try {\n    const res = await fetch('https://api.dev/users/1');\n    const user = await res.json();\n    return user;\n  } catch (error) {\n    console.error('Something went wrong!');\n  }\n}\n\n// USAGE\ngetUser().then(user => {\n  console.log(user.name);\n});",
      },
      {
        h: "05 — Try... Catch",
        p: "Because `await` makes asynchronous results behave like ordinary return values, rejections behave like ordinary thrown errors — which means the plain `try`/`catch`/`finally` you already know works on them. `try` holds the happy path, `catch (err)` receives the rejection reason (`err.message`), and `finally` runs either way, making it the right place for cleanup or logging that must always happen.\n\nThe page's reminder here: **always handle errors gracefully.** An unhandled rejection in an async function silently becomes a rejected promise nobody is listening to.",
        code: "async function loadData() {\n  try {\n    const data = await fetchData();\n    return data;\n  } catch (err) {\n    console.error(err.message);\n  } finally {\n    console.log('Done!');\n  }\n}",
      },
      {
        h: "06 — Top Benefits",
        p: "Why the whole ecosystem moved to this style:\n\n- **Makes async code look synchronous** — the shape of the code matches the shape of the logic.\n- **Easier to read and write** — no callback plumbing to hold in your head.\n- **Better error handling** — one familiar `try`/`catch` instead of an error branch per callback.\n- **Improved debugging** — stack traces and breakpoints behave far more like they do in synchronous code.\n- **Goodbye callback hell!** — the pyramid of doom simply stops happening.",
      },
      {
        h: "07 — Await Can Be Used With",
        p: "`await` is not special-cased for any one API. It works with anything promise-based:\n\n- **`fetch()`** — the standard browser networking API.\n- **Promises** — any promise object at all.\n- **Async functions** — since they return promises by definition.\n- **Any promise-based API** — library or platform, if it returns a promise you can await it.\n\nThe underlying rule is simple: if the thing you're awaiting is a promise, `await` waits for it to settle. (Awaiting a non-promise value just resolves immediately.)",
      },
      {
        h: "08 — Important Notes",
        p: "Three constraints and clarifications that trip people up:\n\n- **`await` only works inside `async` functions.** You cannot sprinkle it into an ordinary function — that's a syntax error.\n- **Top-level `await` works in modules.** The exception to the rule above: at the top level of an ES module, `await` is allowed without wrapping it in a function.\n- **It doesn't block the whole app, just the async function.** This is the most important misconception to kill. `await` suspends *only* the function it appears in; the event loop keeps running, the UI keeps responding, and other code continues executing.",
      },
    ],
    snippets: [
      {
        label: "Callback hell (the pyramid of doom)",
        code: "fetchData((data) => {\n  processData(data, (result) => {\n    saveData(result, (res) => {\n      sendEmail(res, () => {\n        console.log(\"Done\");\n      });\n    });\n  });\n});",
        note: "Hard to read, hard to maintain, error-prone.",
      },
      {
        label: "Async/await version",
        code: "async function process() {\n  const data = await fetchData();\n  const result = await processData(data);\n  const res = await saveData(result);\n  await sendEmail(res);\n  console.log(\"Done!\");\n}",
        note: "Same logic, flat and readable — **clean, readable, maintainable**.",
      },
      {
        label: "Fetching a user with async/await",
        code: "async function getUser() {\n  try {\n    const res = await fetch('https://api.dev/users/1');\n    const user = await res.json();\n    return user;\n  } catch (error) {\n    console.error('Something went wrong!');\n  }\n}",
      },
      {
        label: "Usage — consuming the returned promise",
        code: "getUser().then(user => {\n  console.log(user.name);\n});",
        note: "An `async` function always returns a promise, so `.then()` works from outside.",
      },
      {
        label: "try / catch / finally with await",
        code: "async function loadData() {\n  try {\n    const data = await fetchData();\n    return data;\n  } catch (err) {\n    console.error(err.message);\n  } finally {\n    console.log('Done!');\n  }\n}",
        note: "`finally` runs whether the await succeeded or rejected.",
      },
    ],
  },
  {
    day: 8,
    group: 'async',
    title: 'Promises',
    tagline: 'Handle async operations like a pro.',
    image: '/javascript-notes/ep08-promises.jpeg',
    tags: ['Async', 'Promise', 'then/catch'],
    notes: [
      { k: 'What it is', v: 'A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.' },
      { k: 'Three states', v: 'Pending (initial, neither fulfilled nor rejected), Fulfilled (completed successfully), Rejected (failed, with a reason).' },
      { k: 'Creating one', v: '`new Promise((resolve, reject) => …)` — call resolve() on success, reject() on failure.' },
      { k: 'Consuming one', v: '.then() handles success, .catch() handles failure. Each .then() returns a new promise, which is what allows chaining.' },
      { k: 'Static methods', v: 'Promise.all() (waits for all, fails fast), Promise.race() (first to settle), Promise.allSettled() (waits for all, returns statuses), Promise.any() (first to fulfil).' },
      { k: 'Best practices', v: 'Always handle rejections, prefer async/await for readability, keep chains flat, and use Promise.all for parallel requests.' },
    ],
    theory: [
      {
        h: "Promises — Handle Async Operations Like a Pro",
        p: "**Promises are the foundation of modern async JavaScript.** Everything you learned about `async`/`await` in the last episode is built on top of them — this episode goes one layer down to the machinery itself.\n\nA promise is the language's answer to a simple question: how do you hold a value that doesn't exist *yet*? Instead of handing a function a callback and hoping it gets called, the function hands *you* an object that will eventually contain either a result or a reason it failed. That inversion is what makes promises composable, chainable, and predictable.\n\nThe page's closing line: **Promises make async code predictable. Better code, better you.**",
      },
      {
        h: "01 — What Is a Promise?",
        p: "A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation. It is not the value itself — it is a placeholder for a value that will arrive later, together with a standard way to react when it does.\n\nEvery promise starts in the **pending** state, its initial state, and then transitions exactly once to one of two outcomes:\n\n- **Fulfilled** — the operation succeeded, and the promise carries the resulting value.\n- **Rejected** — the operation failed, and the promise carries a reason.\n\nOnce it moves out of pending it can never change again. That one-way, one-time settlement is what makes promises safe to pass around and attach handlers to at any time.",
      },
      {
        h: "02 — Creating a Promise",
        p: "You construct a promise with `new Promise(...)`, passing an **executor** function that receives two callbacks: `resolve` and `reject`. Your asynchronous work goes inside the executor, and when it finishes you call one of the two:\n\n- **`resolve()`** — call when the operation succeeds; the argument becomes the fulfilled value.\n- **`reject()`** — call when the operation fails; the argument becomes the rejection reason.\n\nIn practice you rarely write `new Promise` yourself — most modern APIs already return promises. You reach for the constructor mainly when wrapping an older callback-based API.",
        code: "const myPromise = new Promise((resolve, reject) => {\n  const success = true;\n\n  if (success) {\n    resolve(\"Success!\");\n  } else {\n    reject(\"Failed!\");\n  }\n});",
      },
      {
        h: "03 — Consuming a Promise",
        p: "Once you hold a promise, you attach handlers to it rather than calling it:\n\n- **`.then()`** handles success — it receives the resolved value.\n- **`.catch()`** handles failure — it receives the rejection reason.\n\nBecause the handlers are attached to the object rather than passed into the function, you can attach them later, attach several, and — crucially — chain them. That is what the next section builds on.",
        code: "myPromise\n  .then((result) => {\n    console.log(result);\n  })\n  .catch((error) => {\n    console.error(error);\n  });",
      },
      {
        h: "04 — Promise States",
        p: "The three states a promise can be in, stated precisely:\n\n- **Pending** — the initial state. Neither fulfilled nor rejected; the operation is still in flight.\n- **Fulfilled** — the operation completed successfully, and a value is available.\n- **Rejected** — the operation failed, and a reason is provided.\n\nA promise is said to be **settled** once it is either fulfilled or rejected. Settling is final: a settled promise never returns to pending and never flips to the other outcome.",
      },
      {
        h: "05 — Chaining Promises",
        p: "The real power of promises is chaining. Each `.then()` **returns a new promise**, and *this is what allows chaining* — if the callback inside a `.then()` returns another promise, the next `.then()` in the chain waits for it and receives its resolved value.\n\nSo a sequence of dependent async steps becomes a flat vertical chain instead of a nested pyramid. A single `.catch()` at the end catches a rejection from *any* step in the chain, which is why promise chains need far less error-handling boilerplate than callbacks did.",
        code: "fetchUser()\n  .then(user => fetchPosts(user.id))\n  .then(posts => fetchComments(posts))\n  .then(comments => {\n    console.log(comments);\n  })\n  .catch(err => console.error(err));",
      },
      {
        h: "06 — Promise Methods",
        p: "The static combinators on `Promise` — the tools for working with promises in bulk:\n\n- **`Promise.resolve(value)`** — returns a resolved promise.\n- **`Promise.reject(reason)`** — returns a rejected promise.\n- **`Promise.all([])`** — resolves when *all* promises resolve. Fails fast: one rejection rejects the whole thing.\n- **`Promise.race([])`** — resolves or rejects as soon as *one* promise settles, whichever gets there first.\n- **`Promise.allSettled([])`** — waits for all of them. Returns all results with their status, regardless of success or failure.\n- **`Promise.any([])`** — resolves as soon as the first promise *resolves*. Fails only if all of them reject.\n\nThe distinction worth internalising: `all` is all-or-nothing, `allSettled` never rejects on your behalf, `race` cares about the first to *settle*, `any` cares about the first to *succeed*.",
      },
      {
        h: "07 — Real Life Example",
        p: "A simulated API call built with the promise constructor. `getData()` wraps a `setTimeout` to fake network latency; after one second it flips a coin with `Math.random()` and either resolves with a data payload or rejects with a `\"Server Error!\"`. The caller then consumes it with `.then()` and `.catch()`.\n\nThis is the canonical shape for wrapping any callback- or timer-based API in a promise: do the async work in the executor, call `resolve` on the success path and `reject` on the failure path.",
        code: "function getData() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      const ok = Math.random() > 0.5;\n      ok ? resolve({ data: \"Here is your data\" })\n         : reject(\"Server Error!\");\n    }, 1000);\n  });\n}\n\ngetData()\n  .then(res => console.log(res.data))\n  .catch(err => console.error(err));",
      },
      {
        h: "08 — Async / Await (With Promises)",
        p: "The bridge back to Episode 7. This is the same `getData()` promise consumed with `async`/`await` instead of `.then()`/`.catch()` — `await getData()` gives you the resolved value directly, and a rejection lands in the `catch` block.\n\nThe key insight the page underlines: **`async`/`await` is built on promises. It is just syntactic sugar.** There is no second async system in JavaScript. Understanding promises *is* understanding `async`/`await`.",
        code: "async function loadData() {\n  try {\n    const res = await getData();\n    console.log(res.data);\n  } catch (err) {\n    console.error(err);\n  }\n}\n\nloadData();",
      },
      {
        h: "09 — Best Practices",
        p: "The habits that keep promise-based code sane:\n\n- **Always handle rejections.** An unhandled rejection is a silent failure.\n- **Use `async`/`await` for better readability** — reach for it as the default style.\n- **Don't forget `try`/`catch` with `await`** — `await` turns rejections into thrown errors, so something has to catch them.\n- **Keep promise chains flat and clean** — return promises from `.then()` instead of nesting new chains inside it; nesting reintroduces the very pyramid promises were invented to remove.\n- **Use `Promise.all` for parallel requests** — if several operations don't depend on each other, don't `await` them one after another; run them together and wait once.",
      },
    ],
    snippets: [
      {
        label: "Creating a promise",
        code: "const myPromise = new Promise((resolve, reject) => {\n  const success = true;\n\n  if (success) {\n    resolve(\"Success!\");\n  } else {\n    reject(\"Failed!\");\n  }\n});",
        note: "`resolve()` on success, `reject()` on failure.",
      },
      {
        label: "Consuming with .then() / .catch()",
        code: "myPromise\n  .then((result) => {\n    console.log(result);\n  })\n  .catch((error) => {\n    console.error(error);\n  });",
      },
      {
        label: "Chaining promises",
        code: "fetchUser()\n  .then(user => fetchPosts(user.id))\n  .then(posts => fetchComments(posts))\n  .then(comments => {\n    console.log(comments);\n  })\n  .catch(err => console.error(err));",
        note: "Each `.then()` returns a new promise — that is what allows chaining.",
      },
      {
        label: "Real life example — simulated API call",
        code: "function getData() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      const ok = Math.random() > 0.5;\n      ok ? resolve({ data: \"Here is your data\" })\n         : reject(\"Server Error!\");\n    }, 1000);\n  });\n}\n\ngetData()\n  .then(res => console.log(res.data))\n  .catch(err => console.error(err));",
      },
      {
        label: "Same promise, consumed with async/await",
        code: "async function loadData() {\n  try {\n    const res = await getData();\n    console.log(res.data);\n  } catch (err) {\n    console.error(err);\n  }\n}\n\nloadData();",
        note: "`async`/`await` is built on promises — it is just syntactic sugar.",
      },
    ],
  },
  {
    day: 9,
    group: 'core',
    title: 'Scope in JavaScript',
    tagline: 'Where variables live. Where they die.',
    image: '/javascript-notes/ep09-scope.jpeg',
    tags: ['Scope', 'let/const', 'var'],
    notes: [
      { k: 'What scope is', v: 'Scope determines where a variable is accessible. If a variable is out of scope, you cannot use it — scope is about visibility.' },
      { k: 'Three kinds', v: 'Global scope (accessible everywhere), function scope (only inside the function), block scope (only inside the `{}` — let and const).' },
      { k: 'var vs let/const', v: 'var is function-scoped, so it leaks out of blocks. let and const are block-scoped and stay where you declared them.' },
      { k: 'Nested scope', v: 'An inner scope can read outer variables; an outer scope cannot see inner ones.' },
      { k: 'The scope chain', v: 'Looking up a variable, JavaScript checks the current scope, then the outer scope, then global — stopping at the first match.' },
      { k: 'In loops', v: '`for (var i …)` leaves i accessible after the loop; `for (let i …)` does not. Prefer let/const, keep variables in the smallest scope, avoid polluting global.' },
    ],
    theory: [
      {
        h: "Scope — Where Variables Live, Where They Die",
        p: "**Understand scope. Write better, bug-free code.** Scope is the invisible set of rules that decides which parts of your program can see which variables. Almost every confusing \"why is this `undefined`?\" or \"why did that variable change?\" bug traces back to a misunderstanding of scope.\n\nThe page's punchline sums up the payoff: **good scope = clean code. Clean code = happy you.**",
      },
      {
        h: "01 — What Is Scope?",
        p: "Scope determines the **accessibility of variables** in different parts of your code. It answers one question for every variable: from where in the program is this name visible?\n\nThe rule that follows is blunt and absolute: **if a variable is out of scope, you can't use it.** Not \"it's empty\" — you cannot reach it at all, and trying will throw.\n\nThe mental shortcut the page offers: **scope is all about visibility.** Don't think of variables as living everywhere and sometimes being hidden; think of them as living in a specific region and being invisible outside it.",
      },
      {
        h: "02 — Types of Scope",
        p: "JavaScript has three kinds of scope, from widest to narrowest:\n\n- **Global scope** — accessible everywhere in the code.\n- **Function scope** — accessible only inside the function it was declared in.\n- **Block scope (`let`, `const`)** — accessible only inside the block `{}` it was declared in.\n\nThe parenthetical on the third one is the whole story of modern JavaScript: block scope is what `let` and `const` gave us, and it is why they replaced `var`.",
      },
      {
        h: "03 — Global Scope",
        p: "A variable declared outside any function or block lives in global scope and is **accessible everywhere** — inside functions, inside blocks, anywhere in the code. In the example, `name` is declared at the top level, and both `show()` and the top-level `console.log` can read it.\n\nGlobal variables are convenient, which is exactly the danger: anything in the program can read *and* rewrite them, so they become a shared mutable surface where unrelated pieces of code collide.",
        code: "let name = 'JavaScript'; // global\n\nfunction show() {\n  console.log(name); // accessible\n}\n\nshow(); // JavaScript\n\nconsole.log(name); // JavaScript",
      },
      {
        h: "04 — Function Scope (var)",
        p: "`var` is **function-scoped**: it is accessible only inside the function that declares it. In the example, `x` is declared with `var` inside `demo()`. Inside the function `console.log(x)` prints `10` fine, but the moment you try to read `x` after the function has been called — from outside — you get a **ReferenceError**.\n\nThis is `var`'s one saving grace and also its trap: it respects function boundaries but ignores block boundaries entirely, which is the source of the loop bug shown in section 08.",
        code: "function demo() {\n  var x = 10;\n  console.log(x); // 10\n}\n\ndemo();\nconsole.log(x); // ReferenceError",
      },
      {
        h: "05 — Block Scope (let, const)",
        p: "`let` and `const` are **block-scoped**: they are accessible only inside the block `{}` they were declared in. A block is anything between curly braces — a bare block, an `if`, a `for` body, a `while` body.\n\nIn the example, `y` (a `let`) and `z` (a `const`) are declared inside a standalone block. Inside it, both log fine. Outside the closing brace, reading either one throws a **ReferenceError** — they genuinely do not exist there. This tighter containment is what makes `let`/`const` safer than `var`.",
        code: "{\n  let y = 20;\n  const z = 30;\n  console.log(y, z); // 20 30\n}\n\nconsole.log(y); // ReferenceError\nconsole.log(z); // ReferenceError",
      },
      {
        h: "06 — Nested Scope",
        p: "Scopes nest inside one another, and the visibility rule runs in exactly one direction: **inner scope can access outer scope variables. Outer scope can't access inner.**\n\nIn the example, `a` is global, `b` lives in `outer()`, and `c` lives in `inner()`. From inside `inner()`, all three are visible — `console.log(a, b, c)` prints `global outer inner`. But `outer()` has no way to see `c`, and the global scope has no way to see `b`. Nesting gives you one-way transparency: you can always look outward, never inward.",
        code: "let a = 'global';\n\nfunction outer() {\n  let b = 'outer';\n\n  function inner() {\n    let c = 'inner';\n    console.log(a, b, c); // global outer inner\n  }\n\n  inner();\n}\n\nouter();",
      },
      {
        h: "07 — Scope Chain",
        p: "When looking for a variable, JavaScript searches outward through the nested scopes in a fixed order:\n\n- **1. Current scope** — the innermost scope where the code is running.\n- **2. Outer scope** — the enclosing scope, then its enclosing scope, and so on.\n- **3. Global scope** — the last stop.\n\nThis chain of lookups is the **scope chain**. The engine stops at the first match it finds and never searches inward. In the example, `second()` logs `a`, `b` and `c` and gets `global`, `first` and `second` respectively — each name resolved at a different link in the chain. If the search reaches the global scope and still finds nothing, you get a ReferenceError.",
        code: "let a = 'global';\n\nfunction first() {\n  let b = 'first';\n\n  function second() {\n    let c = 'second';\n    console.log(a); // global\n    console.log(b); // first\n    console.log(c); // second\n  }\n\n  second();\n}\n\nfirst();",
      },
      {
        h: "08 — var vs let/const in Loops",
        p: "The classic demonstration of why block scope matters, shown as a side-by-side.\n\nWith **`var` (function scoped)**, the loop variable is not confined to the loop body. After `for (var i = 0; i < 3; i++) {}` finishes, `console.log(i)` prints **3** — `var i` is accessible outside the loop, because the loop's braces never contained it. The page marks this with a red ✗.\n\nWith **`let` (block scoped)**, `for (let i = 0; i < 3; i++) {}` keeps `i` inside the loop. Afterwards `console.log(i)` throws a **ReferenceError** — `i` is not accessible outside the loop. The page marks this with a green ✓, because that is the behaviour you actually want.\n\nThe rule that follows: **always use `let`/`const`. Avoid unexpected behavior.**",
        code: "// var (function scoped)\nfor (var i = 0; i < 3; i++) {}\nconsole.log(i); // 3\n\n// let (block scoped)\nfor (let i = 0; i < 3; i++) {}\nconsole.log(i); // ReferenceError",
      },
      {
        h: "Best Practices",
        p: "The four rules the page closes on:\n\n- **Use `let` and `const` over `var`** — block scoping is the safer default, and `var`'s function scoping causes surprises.\n- **Keep variables in the smallest scope possible** — the narrower a variable's reach, the fewer places can break it.\n- **Avoid polluting the global scope** — globals are shared mutable state that any code can clobber.\n- **Understand scope, avoid bugs** — most mysterious variable bugs are scope bugs wearing a disguise.",
      },
    ],
    snippets: [
      {
        label: "Global scope",
        code: "let name = 'JavaScript'; // global\n\nfunction show() {\n  console.log(name); // accessible\n}\n\nshow(); // JavaScript\n\nconsole.log(name); // JavaScript",
        note: "Declared outside any function or block — accessible everywhere.",
      },
      {
        label: "Function scope with var",
        code: "function demo() {\n  var x = 10;\n  console.log(x); // 10\n}\n\ndemo();\nconsole.log(x); // ReferenceError",
        note: "`var` is function-scoped — accessible only inside the function.",
      },
      {
        label: "Block scope with let / const",
        code: "{\n  let y = 20;\n  const z = 30;\n  console.log(y, z); // 20 30\n}\n\nconsole.log(y); // ReferenceError\nconsole.log(z); // ReferenceError",
        note: "`let` and `const` are accessible only inside the block `{}`.",
      },
      {
        label: "Nested scope",
        code: "let a = 'global';\n\nfunction outer() {\n  let b = 'outer';\n\n  function inner() {\n    let c = 'inner';\n    console.log(a, b, c); // global outer inner\n  }\n\n  inner();\n}\n\nouter();",
        note: "Inner scope can access outer variables; outer can't access inner.",
      },
      {
        label: "Scope chain lookup",
        code: "let a = 'global';\n\nfunction first() {\n  let b = 'first';\n\n  function second() {\n    let c = 'second';\n    console.log(a); // global\n    console.log(b); // first\n    console.log(c); // second\n  }\n\n  second();\n}\n\nfirst();",
        note: "Search order: current scope → outer scope → global scope.",
      },
      {
        label: "var vs let in loops",
        code: "// var (function scoped)\nfor (var i = 0; i < 3; i++) {}\nconsole.log(i); // 3\n\n// let (block scoped)\nfor (let i = 0; i < 3; i++) {}\nconsole.log(i); // ReferenceError",
        note: "`var i` leaks out of the loop; `let i` stays inside it.",
      },
    ],
  },
  {
    day: 10,
    group: 'core',
    title: 'Closures',
    tagline: 'When functions remember, even after they are gone.',
    image: '/javascript-notes/ep10-closures.jpeg',
    tags: ['Closures', 'Lexical scope', 'State'],
    notes: [
      { k: 'What it is', v: 'A closure is a function that "closes over" variables from its outer (enclosing) function — it can still access them after the outer function has returned.' },
      { k: 'The formula', v: 'Closure = function + preserved lexical scope.' },
      { k: 'How it works', v: 'The outer function runs and creates variables, returns the inner function, and even though the outer function has finished, the inner one still holds a reference to those variables.' },
      { k: 'Counter example', v: 'A returned inner function increments a `count` that is preserved across calls — private state without a global.' },
      { k: 'The classic bug', v: 'Creating functions in a `var` loop makes them all share the same `i`. Using `let` gives each iteration its own binding.' },
      { k: 'Practical uses', v: 'Data privacy, function factories, maintaining state between calls, and preserving context in callbacks and event handlers.' },
      { k: 'Watch out for', v: 'Closures keep references alive, which can cause memory leaks if you hold onto more than you need.' },
    ],
    theory: [
      {
        h: "Closures — When Functions Remember, Even After They're Gone",
        p: "**Closures let functions access variables from their outer scope, even after the outer function has finished.** That sentence is the whole episode in one line, and it is also the part that feels impossible at first: the outer function returned, its call is over, and yet its variables are still alive and readable.\n\nClosures are the direct consequence of the scope rules from Episode 9. Once you accept that an inner function can always look outward, closures are simply what happens when that inner function outlives the function it was defined in.\n\nThe closing line: **closures turn functional code into powerful, reliable and elegant solutions.**",
      },
      {
        h: "01 — What Is a Closure?",
        p: "A closure is a function that **\"closes over\"** variables from its outer (enclosing) function. It allows the inner function to access those variables even after the outer function has returned.\n\nThe crucial detail is that a closure does not copy the values — it keeps a live reference to the variables themselves. The inner function carries its birthplace with it wherever it goes.\n\nThe formula the page gives: **Closure = Function + Preserved Lexical Scope.** The function is only half of it; the other half is the environment it was defined in, kept alive alongside it.",
      },
      {
        h: "02 — How Closure Works",
        p: "The mechanism, in four steps:\n\n- **1.** The outer function is executed.\n- **2.** It creates variables.\n- **3.** The inner function is returned.\n- **4.** Even after the outer function finishes, the inner function remembers those variables.\n\nStep 4 is the one that breaks intuition. Normally when a function returns, its local variables are discarded. But if a returned inner function still references them, JavaScript cannot throw them away — so the variables survive, reachable only through that inner function.",
      },
      {
        h: "03 — Basic Example",
        p: "The minimal closure. `outer()` declares `message` and defines `inner()`, which logs `message` — accessing a variable from the enclosing scope. `outer()` then returns `inner` itself rather than calling it.\n\nBy the time `greet()` runs, `outer()` has already finished — and yet `\"Hello, Closure!\"` still prints. As the note says: **`inner()` remembers `message` even after `outer()` is done.** The variable outlived the function call that created it, because `inner` still holds a reference to it.",
        code: "function outer() {\n  let message = \"Hello, Closure!\";\n\n  function inner() {\n    console.log(message); // Accessing\n  }\n\n  return inner;\n}\n\nconst greet = outer(); // outer finished\ngreet(); // \"Hello, Closure!\"",
      },
      {
        h: "04 — Counter Example",
        p: "The most practical closure pattern. `counter()` declares `let count = 0` and returns a function that increments and returns it. Assigning it to `c` and calling `c()` three times gives **1, 2, 3** — the count keeps climbing.\n\nAs the note puts it: **`count` is preserved between multiple calls.** This is state without a global variable and without an object. `count` is genuinely private — nothing outside the returned function can read it, reset it, or even know it exists. The only way to touch it is through the interface the closure exposes.",
        code: "function counter() {\n  let count = 0;\n  return function () {\n    count++;\n    return count;\n  };\n}\n\nconst c = counter();\nconsole.log(c()); // 1\nconsole.log(c()); // 2\nconsole.log(c()); // 3",
      },
      {
        h: "05 — Multiple Closures",
        p: "The classic bug. `makeFunctions()` loops with **`var i`** and pushes a function that logs `i` into an array. You'd expect the three functions to log `0`, `1`, `2` — instead all three log **3**.\n\nThe reason follows directly from Episode 9: `var i` is function-scoped, so there is only *one* `i` for the whole loop. All three closures close over that same single variable, and by the time any of them runs, the loop has finished and `i` is `3`.\n\nThe warning on the page: **all functions share the same `i`. Use `let` to fix it.**",
        code: "function makeFunctions() {\n  let arr = [];\n  for (var i = 0; i < 3; i++) {\n    arr.push(function () {\n      console.log(i);\n    });\n  }\n  return arr;\n}\n\nconst funcs = makeFunctions();\nfuncs[0](); // 3\nfuncs[1](); // 3\nfuncs[2](); // 3",
      },
      {
        h: "06 — Fix With let (Block Scope)",
        p: "The identical code with **`let i`** instead of `var i` prints **0, 1, 2** — the result you originally expected.\n\nThe fix works because `let` is block-scoped, and a `for` loop with `let` creates a **fresh binding of `i` for every iteration**. So each pushed function closes over its *own* `i`, frozen at the value that iteration had.\n\nThe note captures it exactly: **each function gets its own `i` using `let`.** One keyword change, and the bug disappears — which is a good illustration of why the scope episode comes before this one.",
        code: "function makeFunctions() {\n  let arr = [];\n  for (let i = 0; i < 3; i++) {\n    arr.push(function () {\n      console.log(i);\n    });\n  }\n  return arr;\n}\n\nconst funcs = makeFunctions();\nfuncs[0](); // 0\nfuncs[1](); // 1\nfuncs[2](); // 2",
      },
      {
        h: "07 — Practical Uses",
        p: "Closures are not a party trick — they underpin a lot of everyday JavaScript:\n\n- **Data privacy** — keep variables private. The counter's `count` is unreachable from outside; the closure is the only door.\n- **Function factories** — generate functions with preset data, like a `multiplyBy(3)` that returns a ready-made tripler.\n- **Maintaining state** — remember values between calls without reaching for globals.\n- **Callbacks and event handlers** — preserve context and data. When a handler fires much later, the closure is what still knows which item it was attached to.",
      },
      {
        h: "08 — Closure Diagram",
        p: "The page draws the relationship. On the left, `outer()` holds a variable `message` with the value `\"Hello\"`. On the right, `inner()` carries a hidden internal property labelled **`[[Scope]]`**, which points back at that `message`. An arrow marked **return** runs from `outer()` to `inner()`, and the link from `inner()` back to `message` is labelled **still accessible**.\n\nThe takeaway: **`inner()` has a reference to the outer() scope.** The closure is that arrow. `outer()`'s call frame is finished, but because `inner()`'s `[[Scope]]` still points at `message`, the variable cannot be collected and stays readable.",
      },
      {
        h: "09 — Common Mistakes",
        p: "The four ways closures bite people:\n\n- **Using `var` in loops** — the shared-binding bug from section 05.\n- **Forgetting closures keep references, which can cause memory leaks** — a closure keeps its captured variables alive. Hold a closure over a large object and that object can never be garbage-collected.\n- **Modifying outer variables unintentionally** — closures capture references, not copies, so writing to a captured variable changes it for every closure sharing it.\n- **Not understanding lexical scope** — closures are decided by *where the function was written*, not where it was called. Get that backwards and closures will never make sense.",
      },
      {
        h: "Key Takeaways",
        p: "- **Closures capture the lexical environment** — the function plus the scope it was born in.\n- **Inner functions can access outer variables** — even long after the outer function has returned.\n- **Powerful for encapsulation and state management** — private data and persistent state, without globals.\n- **Understand scope, write better code** — closures are just scope taken seriously; the two ideas are one idea.",
      },
    ],
    snippets: [
      {
        label: "Basic closure",
        code: "function outer() {\n  let message = \"Hello, Closure!\";\n\n  function inner() {\n    console.log(message); // Accessing\n  }\n\n  return inner;\n}\n\nconst greet = outer(); // outer finished\ngreet(); // \"Hello, Closure!\"",
        note: "`inner()` remembers `message` even after `outer()` is done.",
      },
      {
        label: "Counter — preserved private state",
        code: "function counter() {\n  let count = 0;\n  return function () {\n    count++;\n    return count;\n  };\n}\n\nconst c = counter();\nconsole.log(c()); // 1\nconsole.log(c()); // 2\nconsole.log(c()); // 3",
        note: "`count` is preserved between multiple calls and is private.",
      },
      {
        label: "Multiple closures with var (the bug)",
        code: "function makeFunctions() {\n  let arr = [];\n  for (var i = 0; i < 3; i++) {\n    arr.push(function () {\n      console.log(i);\n    });\n  }\n  return arr;\n}\n\nconst funcs = makeFunctions();\nfuncs[0](); // 3\nfuncs[1](); // 3\nfuncs[2](); // 3",
        note: "All functions share the same `i` — it is `3` by the time they run.",
      },
      {
        label: "Fixed with let (block scope)",
        code: "function makeFunctions() {\n  let arr = [];\n  for (let i = 0; i < 3; i++) {\n    arr.push(function () {\n      console.log(i);\n    });\n  }\n  return arr;\n}\n\nconst funcs = makeFunctions();\nfuncs[0](); // 0\nfuncs[1](); // 1\nfuncs[2](); // 2",
        note: "`let` creates a fresh binding per iteration — each function gets its own `i`.",
      },
    ],
  },
  {
    day: 11,
    group: 'core',
    title: 'Arrays',
    tagline: 'Store many values. Work with ease.',
    image: '/javascript-notes/ep11-arrays.jpeg',
    tags: ['Arrays', 'Methods', 'Spread'],
    notes: [
      { k: 'What it is', v: 'An array is a special object that stores an ordered collection of values in a single variable, with zero-based indexing.' },
      { k: 'Access & modify', v: 'Use the index to read (`fruits[0]`) and to overwrite (`fruits[1] = "Blueberry"`). `.length` is always one more than the last index.' },
      { k: 'Add & remove', v: 'push() adds to the end, pop() removes from the end, unshift() adds to the front, shift() removes from the front.' },
      { k: 'Search & extract', v: 'indexOf() returns an index, includes() returns a boolean, slice() returns a portion without mutating, join() turns the array into a string.' },
      { k: 'Looping', v: 'A classic for loop when you need the index; for…of when you just need the values — cleaner and easier for simple iteration.' },
      { k: 'Multi-dimensional', v: 'Arrays can hold arrays — `matrix[row][col]` accesses the row first, then the column.' },
      { k: 'Spread', v: '`[...a, ...b]` copies or merges arrays easily.' },
    ],
    theory: [
      {
        h: "Arrays — Store Many Values, Work With Ease",
        p: "**Arrays help you store, access, and manipulate lists of data efficiently.** Almost every program eventually needs to hold more than one of something — users, posts, prices, fruits — and the array is JavaScript's fundamental tool for that job.\n\nThe closing line: **arrays make your code stronger. Structure today, scale tomorrow.**",
      },
      {
        h: "01 — What Is an Array?",
        p: "An array is a **special object** used to store multiple values in a single variable. You write one with square brackets and comma-separated values.\n\nTwo defining properties:\n\n- **Ordered collection of values** — position matters and is preserved. The array remembers not just what's in it but the sequence.\n- **Zero-based indexing** — counting starts at 0, not 1.\n\nThe \"special object\" phrasing is worth noting: arrays really are objects underneath, which is why they can carry methods and a `length` property.",
        code: "let fruits = [\"Apple\", \"Banana\", \"Mango\", \"Orange\"];",
      },
      {
        h: "02 — Accessing Elements",
        p: "You reach an element by its **index** in square brackets. Because indexing is zero-based, `fruits[0]` gives `\"Apple\"`, `fruits[1]` gives `\"Banana\"`, and `fruits[3]` gives `\"Orange\"`.\n\nThe note to burn in: **index starts at 0 — `fruits[0]` is the first item.** The last item is therefore always at `length - 1`, never at `length`. Off-by-one errors in loops almost always come from forgetting this.",
        code: "let fruits = [\"Apple\", \"Banana\", \"Mango\", \"Orange\"];\n\nconsole.log(fruits[0]); // Apple\nconsole.log(fruits[1]); // Banana\nconsole.log(fruits[3]); // Orange",
      },
      {
        h: "03 — Modifying Elements",
        p: "You change an element the same way you read one — by index. **Just assign a new value to the index** and the array updates in place. Assigning `fruits[1] = \"Blueberry\"` turns `[\"Apple\", \"Banana\", \"Mango\"]` into `[\"Apple\", \"Blueberry\", \"Mango\"]`.\n\nArrays are mutable: the variable still points at the same array object, but the contents have changed. That matters when the array is shared — anyone else holding a reference sees the change too.",
        code: "let fruits = [\"Apple\", \"Banana\", \"Mango\"];\n\nfruits[1] = \"Blueberry\";\n\nconsole.log(fruits);\n// [\"Apple\", \"Blueberry\", \"Mango\"]",
      },
      {
        h: "04 — Array Length",
        p: "Use **`.length`** to get the number of elements. For `[\"Apple\", \"Banana\", \"Mango\"]`, `fruits.length` is `3`.\n\nThe relationship to remember: **length is always one more than the last index.** Three items means indexes 0, 1, 2 and a length of 3. This is why loops are written `i < arr.length` rather than `i <= arr.length` — the latter would run one step past the end.",
        code: "let fruits = [\"Apple\", \"Banana\", \"Mango\"];\n\nconsole.log(fruits.length);\n// 3",
      },
      {
        h: "05 — Common Array Methods",
        p: "The everyday toolkit, with the page's examples on `fruits = [\"Apple\", \"Banana\", \"Mango\"]`:\n\n- **`push()`** — adds an element to the end. `fruits.push(\"Grapes\")` → `[\"Apple\", \"Banana\", \"Mango\", \"Grapes\"]`\n- **`pop()`** — removes and returns the last element. `fruits.pop()` removes `\"Grapes\"`.\n- **`unshift()`** — adds an element to the beginning. `fruits.unshift(\"Papaya\")` → `[\"Papaya\", \"Apple\", \"Banana\", \"Mango\"]`\n- **`shift()`** — removes and returns the first element. `fruits.shift()` removes `\"Papaya\"`.\n- **`indexOf()`** — returns the index of an element. `fruits.indexOf(\"Mango\")` → `2`\n- **`includes()`** — checks if an element exists. `fruits.includes(\"Banana\")` → `true`\n- **`slice()`** — returns a portion of the array. `fruits.slice(1, 3)` → `[\"Banana\", \"Mango\"]`\n- **`join()`** — joins all elements into a string. `fruits.join(\" - \")` → `\"Apple - Banana - Mango\"`\n\nNotice the symmetry: `push`/`pop` work the end, `unshift`/`shift` work the front. `indexOf` and `includes` answer \"where\" and \"whether\". `slice` and `join` both leave the original array untouched.",
      },
      {
        h: "06 — Looping Through Arrays",
        p: "Use loops to iterate over arrays. The page shows two forms.\n\nThe classic **for loop** manages the index yourself: `for (let i = 0; i < fruits.length; i++)` and read `fruits[i]`. You get the index, which you sometimes need.\n\nThe **`for...of` loop (ES6)** hands you each value directly: `for (let fruit of fruits)`. No index bookkeeping, no `length`, no chance of an off-by-one.\n\nThe verdict on the page: **`for...of` is cleaner and easier for simple iteration.** Reach for the classic `for` only when you actually need the index.",
        code: "let fruits = [\"Apple\", \"Banana\", \"Mango\"];\n\n// For Loop\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(fruits[i]);\n}\n\n// For...of Loop (ES6)\nfor (let fruit of fruits) {\n  console.log(fruit);\n}",
      },
      {
        h: "07 — Multi-Dimensional Arrays",
        p: "**Arrays can store other arrays.** Nesting arrays inside an array gives you a grid — a matrix of rows, where each row is itself an array of values.\n\nAccess uses two sets of brackets, and the order is fixed: **access row first, then column** — `matrix[row][col]`. So `matrix[1][2]` first picks row index 1 (`[4, 5, 6]`), then column index 2 within it, giving **6**.\n\nBoth levels are still zero-based, so the second row and third column land on `[1][2]`.",
        code: "let matrix = [\n  [1, 2, 3],\n  [4, 5, 6],\n  [7, 8, 9]\n];\n\nconsole.log(matrix[1][2]); // 6",
      },
      {
        h: "08 — Spread Operator (...)",
        p: "The spread operator lets you **copy or merge arrays easily**. Writing `[...a, ...b]` unpacks both arrays' elements into a brand-new array — `[1, 2, 3]` and `[4, 5, 6]` become `[1, 2, 3, 4, 5, 6]`.\n\nThe page illustrates this as two separate boxes flowing together into one combined box, and sums up its uses: **great for copying, merging and passing arrays.**\n\nThe copying case matters most in practice. `[...arr]` creates a new array rather than another reference to the old one, so you can modify the copy without mutating the original — the standard way to avoid accidental shared-state bugs.",
        code: "let a = [1, 2, 3];\nlet b = [4, 5, 6];\nlet c = [...a, ...b];\n\nconsole.log(c); // [1, 2, 3, 4, 5, 6]",
      },
      {
        h: "Best Practices",
        p: "- **Use meaningful names for arrays** — plural nouns like `fruits` or `users` signal \"this holds many\" at a glance.\n- **Avoid using arrays as fixed-size lists** — arrays in JavaScript grow and shrink; if you need a rigid structure, an array is the wrong shape for the idea.\n- **Prefer built-in methods over manual loops** — `includes`, `slice`, `join` and friends express intent more clearly and are harder to get wrong than hand-rolled loops.\n- **Keep your arrays clean and simple** — a homogeneous, predictable array is far easier to reason about than a grab-bag of mixed types.",
      },
    ],
    snippets: [
      {
        label: "Declaring an array",
        code: "let fruits = [\"Apple\", \"Banana\", \"Mango\", \"Orange\"];",
        note: "An ordered, zero-indexed collection of values.",
      },
      {
        label: "Accessing elements by index",
        code: "let fruits = [\"Apple\", \"Banana\", \"Mango\", \"Orange\"];\n\nconsole.log(fruits[0]); // Apple\nconsole.log(fruits[1]); // Banana\nconsole.log(fruits[3]); // Orange",
      },
      {
        label: "Modifying an element",
        code: "let fruits = [\"Apple\", \"Banana\", \"Mango\"];\n\nfruits[1] = \"Blueberry\";\n\nconsole.log(fruits);\n// [\"Apple\", \"Blueberry\", \"Mango\"]",
      },
      {
        label: "Array length",
        code: "let fruits = [\"Apple\", \"Banana\", \"Mango\"];\n\nconsole.log(fruits.length);\n// 3",
        note: "Always one more than the last index.",
      },
      {
        label: "Adding and removing — push / pop / unshift / shift",
        code: "fruits.push(\"Grapes\");\n// [\"Apple\", \"Banana\", \"Mango\", \"Grapes\"]\n\nfruits.pop();\n// removes \"Grapes\"\n\nfruits.unshift(\"Papaya\");\n// [\"Papaya\", \"Apple\", \"Banana\", \"Mango\"]\n\nfruits.shift();\n// removes \"Papaya\"",
        note: "`push`/`pop` work the end; `unshift`/`shift` work the front.",
      },
      {
        label: "Searching and transforming — indexOf / includes / slice / join",
        code: "fruits.indexOf(\"Mango\");\n// 2\n\nfruits.includes(\"Banana\");\n// true\n\nfruits.slice(1, 3);\n// [\"Banana\", \"Mango\"]\n\nfruits.join(\" - \");\n// \"Apple - Banana - Mango\"",
      },
      {
        label: "Looping — for vs for...of",
        code: "let fruits = [\"Apple\", \"Banana\", \"Mango\"];\n\n// For Loop\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(fruits[i]);\n}\n\n// For...of Loop (ES6)\nfor (let fruit of fruits) {\n  console.log(fruit);\n}",
        note: "`for...of` is cleaner and easier for simple iteration.",
      },
      {
        label: "Multi-dimensional array",
        code: "let matrix = [\n  [1, 2, 3],\n  [4, 5, 6],\n  [7, 8, 9]\n];\n\nconsole.log(matrix[1][2]); // 6",
        note: "Access row first, then column: `matrix[row][col]`.",
      },
      {
        label: "Spread operator — copy or merge",
        code: "let a = [1, 2, 3];\nlet b = [4, 5, 6];\nlet c = [...a, ...b];\n\nconsole.log(c); // [1, 2, 3, 4, 5, 6]",
        note: "Great for copying, merging and passing arrays.",
      },
    ],
  },
  {
    day: 12,
    group: 'core',
    title: 'Objects',
    tagline: 'Real-world data. Organized.',
    image: '/javascript-notes/ep12-objects.jpeg',
    tags: ['Objects', 'this', 'Destructuring'],
    notes: [
      { k: 'What it is', v: 'An object is a collection of key-value pairs. Keys are strings (or Symbols); values can be any data type.' },
      { k: 'Access', v: 'Dot notation for known keys (`person.name`), bracket notation for dynamic ones (`person[key]`).' },
      { k: 'Add, modify, delete', v: 'Assign to add or change a property, Object.assign() to merge several, and the `delete` keyword to remove one.' },
      { k: 'Nested objects', v: 'Objects can contain objects — `user.address.city`.' },
      { k: 'Methods & this', v: 'A function stored on an object is a method, and inside it `this` refers to the object that owns the method.' },
      { k: 'Keys, values, entries', v: 'Object.keys(), Object.values() and Object.entries() are the workhorses for looping and data manipulation.' },
      { k: 'Destructuring & shorthand', v: '`const { name, age } = person` extracts values; `{ name, age }` is shorthand when the variable name matches the key.' },
      { k: 'Safe checks', v: '`"name" in user` and `user.hasOwnProperty("name")` check existence before you read.' },
    ],
    theory: [
      {
        h: "Objects — Real-World Data, Organized",
        p: "**Objects let you store related data in key-value pairs.** Where an array is a list of things in order, an object is a description of *one* thing with named parts. A user has a name, an age, a role — those belong together, and an object is what holds them together.\n\nThe closing line: **objects turn data into structure. Structure powers solutions.**",
      },
      {
        h: "01 — What Is an Object?",
        p: "An object is a collection of **key-value pairs**. Keys are **strings (or Symbols)**; values can be **any data type** — numbers, strings, booleans, arrays, functions, even other objects.\n\nThe framing on the page: **objects represent real-world entities.** A person, a product, a request — anything with several named attributes maps naturally onto an object. This is what makes objects the backbone of nearly all JavaScript data, from API responses to configuration.",
        code: "const person = {\n  name: \"Alice\",\n  age: 25,\n  isDeveloper: true\n};",
      },
      {
        h: "02 — Accessing Properties",
        p: "Three ways in, each with its own use case.\n\n**Dot notation** — `person.name` → `\"Alice\"`. The everyday form: short, readable, and what you'll use most.\n\n**Bracket notation** — `person[\"age\"]` → `25`. Necessary when the key isn't a valid identifier (has spaces or hyphens).\n\n**Using a variable** — store the key in a variable and pass it in brackets: `const key = \"isDeveloper\"; person[key]` → `true`. Dot notation can't do this — `person.key` would look for a literal property named `\"key\"`.\n\nThe rule: **use dot for known keys, bracket for dynamic keys.**",
        code: "// Dot notation\nconsole.log(person.name); // Alice\n\n// Bracket notation\nconsole.log(person[\"age\"]); // 25\n\n// Using a variable\nconst key = \"isDeveloper\";\nconsole.log(person[key]); // true",
      },
      {
        h: "03 — Adding & Modifying",
        p: "**Objects are mutable. You can change them.** Three operations, all straightforward:\n\n**Add a new property** — just assign to a key that doesn't exist yet: `person.city = \"New York\"`. The property springs into existence.\n\n**Modify an existing property** — assign to a key that does exist: `person.age = 26`. Same syntax; whether it adds or updates depends only on whether the key was already there.\n\n**Add multiple properties** — `Object.assign(person, { country: \"USA\", role: \"Engineer\" })` merges a whole batch in one call.\n\nNote that `const person` doesn't prevent any of this. `const` locks the binding, not the contents.",
        code: "// Add new property\nperson.city = \"New York\";\n\n// Modify existing property\nperson.age = 26;\n\n// Add multiple properties\nObject.assign(person, {\n  country: \"USA\",\n  role: \"Engineer\"\n});",
      },
      {
        h: "04 — Deleting Properties",
        p: "Use the **`delete`** keyword to remove a property from an object entirely: `delete person.isDeveloper`. Logging `person` afterwards shows the key is gone — not set to `undefined`, but genuinely absent from the object.\n\nThe distinction matters: a deleted key won't show up in `Object.keys()`, won't appear in a `for...in` loop, and `hasOwnProperty` will report `false` for it. Setting a value to `undefined` would leave the key in place; `delete` removes it.",
        code: "delete person.isDeveloper;\nconsole.log(person);\n// { name: 'Alice', age: 26,\n//   city: 'New York',\n//   country: 'USA',\n//   role: 'Engineer' }",
      },
      {
        h: "05 — Nested Objects",
        p: "**Objects can contain other objects.** A `user` can have an `address` property whose value is itself an object with `street`, `city` and `zip`. This is how real data is shaped — API responses are almost always nested.\n\nYou reach into a nested object by chaining dots: `user.address.city` → `\"Boston\"`. Each dot steps one level deeper.\n\nThe caution to carry forward: each level you add is another level that could be missing at runtime. If `address` doesn't exist, `user.address.city` throws rather than returning `undefined`.",
        code: "const user = {\n  id: 1,\n  name: \"Bob\",\n  address: {\n    street: \"123 Main St\",\n    city: \"Boston\",\n    zip: \"02101\"\n  }\n};\n\nconsole.log(user.address.city);\n// Boston",
      },
      {
        h: "06 — Methods in Objects",
        p: "**Functions inside objects are called methods.** A value can be any data type — and functions are values, so an object can hold behaviour alongside its data.\n\nIn the example, `user` has a `greet` property whose value is a function returning a greeting. You call it like any function, but through the object: `user.greet()` → `\"Hello, Charlie\"`.\n\nThis is the beginning of object-oriented thinking in JavaScript: an object isn't just a bag of data, it's a thing that can *do* something with its own data.",
        code: "const user = {\n  name: \"Charlie\",\n  greet: function () {\n    return \"Hello, \" + this.name + \"!\";\n  }\n};\n\nconsole.log(user.greet());\n// Hello, Charlie!",
      },
      {
        h: "07 — This Keyword",
        p: "**`this` refers to the object that owns the method.** Inside `sayHi`, writing `this.name` reads the `name` property of the very object the method lives on — so `user.sayHi()` returns `\"Hi, I'm Dana\"`.\n\nThis is what makes methods reusable rather than hard-coded: the method doesn't need to know the variable name of the object it's attached to. It just asks `this` for its own data.\n\nThe practical reading: when you call `obj.method()`, whatever is to the left of the dot becomes `this` inside the method.",
        code: "const user = {\n  name: \"Dana\",\n  sayHi: function () {\n    console.log(\"Hi, I'm \" + this.name);\n  }\n};\n\nuser.sayHi(); // Hi, I'm Dana",
      },
      {
        h: "08 — Object Keys, Values, Entries",
        p: "Three static methods that turn an object into an array so you can work with it using array tools:\n\n- **`Object.keys(user)`** — an array of the keys. → `['id', 'name', 'address']`\n- **`Object.values(user)`** — an array of the values. → `[1, 'Bob', {...}]`\n- **`Object.entries(user)`** — an array of `[key, value]` pairs. → `[['id', 1], ['name', 'Bob'], ...]`\n\nAs the note says, these are **useful for looping and data manipulation.** Objects aren't iterable on their own, so converting to an array is how you bring `map`, `filter`, `forEach` and `for...of` to bear on object data. `entries` is the most powerful of the three because it gives you the key and the value together.",
      },
      {
        h: "09 — Looping Through Objects",
        p: "Two ways to walk an object's properties.\n\n**Using `for...in`** — iterates directly over the keys: `for (let key in user) { console.log(key + \": \" + user[key]); }`. Note the bracket notation — the key is in a variable, so dot notation won't work here.\n\n**Using `Object.keys()`** — converts the keys to an array first, then uses `forEach`: `Object.keys(user).forEach(key => { ... })`. This gives you the whole array toolkit rather than just iteration.\n\nEither way, the goal is the same: **loop to access all keys and values.**",
        code: "// Using for...in loop\nfor (let key in user) {\n  console.log(key + \": \" + user[key]);\n}\n\n// Using Object.keys()\nObject.keys(user).forEach(key => {\n  console.log(key + \": \" + user[key]);\n});",
      },
      {
        h: "10 — Object Destructuring",
        p: "Destructuring lets you **extract values from objects into variables easily**. Instead of `const name = person.name` on line after line, you write `const { name, age } = person` and both variables exist, matched by key name.\n\nYou can also **rename while destructuring** with a colon: `const { city: location } = person` pulls out `person.city` but binds it to a variable called `location`. That's the escape hatch for when the object's key name collides with something already in scope, or is simply a bad name.",
        code: "const { name, age } = person;\nconsole.log(name); // Alice\nconsole.log(age);  // 26\n\n// Rename while destructuring\nconst { city: location } = person;\nconsole.log(location); // New York",
      },
      {
        h: "11 — Shorthand Property",
        p: "When a variable's name is already the same as the key you want, you can skip the repetition. Given `const name = \"Eve\"` and `const age = 32`, writing `const user = { name, age }` produces `{ name: 'Eve', age: 32 }`.\n\nThe rule in one line: **property name = variable name → shorthand.** `{ name: name }` and `{ name }` are identical; the second is just the same thing without the stutter. It's the natural counterpart to destructuring — one pulls values out by name, the other packs them back in by name.",
      },
      {
        h: "12 — Checking Properties",
        p: "Two ways to ask whether a property exists, and they are not the same question.\n\n**The `in` operator** — `console.log(\"name\" in user)` → `true`. Checks whether the key exists at all.\n\n**`hasOwnProperty`** — `console.log(user.hasOwnProperty(\"name\"))` → `true`. Checks whether the object has the property *itself*, as opposed to inheriting it.\n\nBoth are **useful for safe access and validation.** Checking before you read is what stops you from tripping over a key that isn't there — especially with the nested data from section 05, where one missing level throws.",
        code: "// Check if property exists\nconsole.log(\"name\" in user);\n// true\n\n// Own property check\nconsole.log(user.hasOwnProperty(\"name\"));\n// true",
      },
      {
        h: "Best Practices",
        p: "- **Use meaningful key names** — the key is the documentation; `n` tells the next reader nothing that `name` doesn't tell them instantly.\n- **Keep objects small and focused** — an object should describe one thing. When it starts describing three, split it.\n- **Avoid deep nesting when possible** — every level is another lookup that can fail and another line of mental bookkeeping.\n- **Use `const` for objects you don't reassign** — `const` locks the binding, not the contents, so you can still add and modify properties freely.\n- **Remove unused properties** — dead keys mislead readers into thinking they matter.",
      },
    ],
    snippets: [
      {
        label: "Creating an object",
        code: "const person = {\n  name: \"Alice\",\n  age: 25,\n  isDeveloper: true\n};",
        note: "Keys are strings (or Symbols); values can be any data type.",
      },
      {
        label: "Accessing properties — dot, bracket, variable",
        code: "// Dot notation\nconsole.log(person.name); // Alice\n\n// Bracket notation\nconsole.log(person[\"age\"]); // 25\n\n// Using a variable\nconst key = \"isDeveloper\";\nconsole.log(person[key]); // true",
        note: "Dot for known keys, bracket for dynamic keys.",
      },
      {
        label: "Adding and modifying properties",
        code: "// Add new property\nperson.city = \"New York\";\n\n// Modify existing property\nperson.age = 26;\n\n// Add multiple properties\nObject.assign(person, {\n  country: \"USA\",\n  role: \"Engineer\"\n});",
      },
      {
        label: "Deleting a property",
        code: "delete person.isDeveloper;\nconsole.log(person);\n// { name: 'Alice', age: 26,\n//   city: 'New York',\n//   country: 'USA',\n//   role: 'Engineer' }",
        note: "`delete` removes the key entirely — not just its value.",
      },
      {
        label: "Nested objects",
        code: "const user = {\n  id: 1,\n  name: \"Bob\",\n  address: {\n    street: \"123 Main St\",\n    city: \"Boston\",\n    zip: \"02101\"\n  }\n};\n\nconsole.log(user.address.city);\n// Boston",
      },
      {
        label: "Methods in objects",
        code: "const user = {\n  name: \"Charlie\",\n  greet: function () {\n    return \"Hello, \" + this.name + \"!\";\n  }\n};\n\nconsole.log(user.greet());\n// Hello, Charlie!",
        note: "Functions inside objects are called methods.",
      },
      {
        label: "The this keyword",
        code: "const user = {\n  name: \"Dana\",\n  sayHi: function () {\n    console.log(\"Hi, I'm \" + this.name);\n  }\n};\n\nuser.sayHi(); // Hi, I'm Dana",
        note: "`this` refers to the object that owns the method.",
      },
      {
        label: "Object.keys / values / entries",
        code: "console.log(Object.keys(user));\n// ['id', 'name', 'address']\n\nconsole.log(Object.values(user));\n// [1, 'Bob', {...}]\n\nconsole.log(Object.entries(user));\n// [['id', 1], ['name', 'Bob'], ...]",
        note: "Useful for looping and data manipulation.",
      },
      {
        label: "Looping through objects",
        code: "// Using for...in loop\nfor (let key in user) {\n  console.log(key + \": \" + user[key]);\n}\n\n// Using Object.keys()\nObject.keys(user).forEach(key => {\n  console.log(key + \": \" + user[key]);\n});",
      },
      {
        label: "Object destructuring",
        code: "const { name, age } = person;\nconsole.log(name); // Alice\nconsole.log(age);  // 26\n\n// Rename while destructuring\nconst { city: location } = person;\nconsole.log(location); // New York",
      },
      {
        label: "Shorthand property",
        code: "const name = \"Eve\";\nconst age = 32;\n\nconst user = { name, age };\nconsole.log(user);\n// { name: 'Eve', age: 32 }",
        note: "Property name = variable name → shorthand.",
      },
      {
        label: "Checking properties",
        code: "// Check if property exists\nconsole.log(\"name\" in user);\n// true\n\n// Own property check\nconsole.log(user.hasOwnProperty(\"name\"));\n// true",
        note: "Useful for safe access and validation.",
      },
    ],
  },
  {
    day: 13,
    group: 'browser',
    title: 'DOM Manipulation',
    tagline: 'Bring your web pages to life.',
    image: '/javascript-notes/ep13-dom-manipulation.jpeg',
    tags: ['DOM', 'Browser', 'Events'],
    notes: [
      { k: 'What the DOM is', v: 'The Document Object Model represents an HTML document as a tree. JavaScript can read and modify that tree — HTML becomes something code can work with.' },
      { k: 'Selecting', v: 'getElementById, getElementsByClassName, getElementsByTagName, and the modern querySelector / querySelectorAll. Choose the right method for the job.' },
      { k: 'Changing content', v: 'textContent sets text, innerHTML sets markup, and `.value` reads or writes form inputs.' },
      { k: 'Changing styles', v: 'Set `element.style.color` directly for one-offs — but prefer toggling classes for anything reusable.' },
      { k: 'Add & remove', v: 'createElement() then appendChild() to add; `.remove()` to delete an element from the page.' },
      { k: 'Classes', v: 'classList.add(), .remove() and .toggle() switch styles cleanly.' },
      { k: 'Events', v: 'addEventListener("click", handler) reacts to user interactions.' },
      { k: 'Data attributes', v: '`data-*` attributes store extra info on elements and are read through `element.dataset`.' },
      { k: 'Best practices', v: 'Select elements once and reuse them, avoid inline styles, use classes for styling, keep JS and HTML clean.' },
    ],
    theory: [
      {
        h: "DOM Manipulation — Bring Your Web Pages to Life",
        p: "The banner idea of this episode: **the DOM (Document Object Model) allows you to access and change HTML with JS**. HTML on its own is static markup — it describes a page but cannot react to anything. The DOM is the bridge that turns that static document into a live object graph that JavaScript can read, edit, add to and delete from. Once you can reach into the page from script, you stop merely *building* websites and start giving them behaviour: content that updates, styles that respond, elements that appear and vanish, and controls that answer the user. The episode's closing punchline sums it up: **\"You don't just build websites. You bring them to life.\"**",
      },
      {
        h: "1. What is DOM?",
        p: "The DOM represents the structure of an HTML document **as a tree**, and JS can access and modify it. The page draws that tree explicitly: at the very top sits `document`, the root handle the browser gives your script. Below `document` hangs `html`. `html` branches into two children, `head` and `body`. `body` in turn branches into its own children — the diagram shows two element nodes, an `h1` and a `p`, sitting side by side as siblings at the bottom of the tree.\n\nEvery tag in your markup becomes a node in this tree, and parent/child/sibling relationships in the tree mirror nesting in the HTML. The side-note for this box is the whole point in one line: **HTML becomes a tree that JS can work with**.",
      },
      {
        h: "2. Selecting Elements",
        p: "Before you can change anything you have to *find* it. The page lists the standard selection methods, each with a different targeting style:\n\n- `document.getElementById(\"title\")` — grabs one element by its unique `id`.\n- `document.getElementsByClassName(\"box\")` — returns all elements carrying a class.\n- `document.getElementsByTagName(\"p\")` — returns all elements of a tag type.\n- `document.querySelector(\".box\")` — returns the **first** match for any CSS selector.\n- `document.querySelectorAll(\"p\")` — returns **all** matches for a CSS selector.\n\nThe `getElementBy*` family is older and narrow; the `querySelector` family accepts the full CSS selector language and so covers everything. The side-note advises: **choose the right method for the right job**.",
        code: "document.getElementById(\"title\");\ndocument.getElementsByClassName(\"box\");\ndocument.getElementsByTagName(\"p\");\ndocument.querySelector(\".box\");\ndocument.querySelectorAll(\"p\");",
      },
      {
        h: "3. Changing Content",
        p: "Once selected, you can change the text, HTML or value of an element. The page shows three distinct doors into an element's content:\n\n- `heading.textContent = \"Hello!\"` — sets plain text; any markup you pass is treated as literal characters.\n- `heading.innerHTML = \"<b>Hello</b>\"` — sets content **as HTML**, so tags are parsed and rendered.\n- `input.value = \"Faisal\"` — form fields don't hold their text as content; their live text lives in the `value` property.\n\nSide-note: **update what users see on the page**.",
        code: "const heading = document.getElementById(\"title\");\nheading.textContent = \"Hello!\";\nheading.innerHTML = \"<b>Hello</b>\";\n\nconst input = document.getElementById(\"name\");\ninput.value = \"Faisal\";",
      },
      {
        h: "4. Changing Styles",
        p: "You can modify CSS styles using JavaScript. Select the element, then write to properties on its `.style` object. The page's example selects `.box` and then sets its colour, background colour and padding one property at a time. Two conventions matter here: CSS property names become **camelCase** in JS (`background-color` becomes `backgroundColor`), and length values must be given as complete strings including their unit (`\"20px\"`, not `20`). Side-note: **style elements dynamically** — the same element can look different depending on state, data or user action.",
        code: "const box = document.querySelector(\".box\");\nbox.style.color = \"red\";\nbox.style.backgroundColor = \"#ffdc0b\";\nbox.style.padding = \"20px\";",
      },
      {
        h: "5. Add Elements",
        p: "You create new elements and add them to the page in three moves, which the side-note compresses to **create it, add it, show it**. First `document.createElement(\"p\")` builds a detached node that exists in memory but is nowhere on screen yet. Second, you fill it in — here `newP.textContent = \"I am new!\"`. Third, `document.body.appendChild(newP)` attaches it to a parent already in the tree, and only at that moment does it actually render. This create → configure → append rhythm is how every dynamic list, card and notification gets onto a page.",
        code: "const newP = document.createElement(\"p\");\nnewP.textContent = \"I am new!\";\ndocument.body.appendChild(newP);",
      },
      {
        h: "6. Remove Elements",
        p: "Removing elements from the DOM has a modern way and an older way, and the page shows both. The modern one is `p.remove()` — you ask the element to remove itself, which needs no reference to its parent. The legacy one is `p.parentNode.removeChild(p)` — you climb up to the parent and ask the parent to remove the child. Both work; `remove()` is simply less ceremony. Side-note: **remove what you don't need** — leaving dead nodes in the tree costs memory and can leave stale listeners behind.",
        code: "const p = document.querySelector(\"p\");\np.remove();\n// or\np.parentNode.removeChild(p);",
      },
      {
        h: "7. Toggle Classes",
        p: "Rather than setting inline styles one property at a time, you can add, remove or toggle **classes** to change styles. `classList` gives you three verbs on the element: `add(\"active\")` puts the class on, `remove(\"active\")` takes it off, and `toggle(\"active\")` flips it — adding it if absent, removing it if present. `toggle` alone replaces an entire if/else branch, which is why it powers most menus, tabs, modals and dark-mode switches. Side-note: **classes help you switch styles easily**, because the styling itself stays in your CSS file where it belongs.",
        code: "const box = document.querySelector(\".box\");\nbox.classList.add(\"active\");\nbox.classList.remove(\"active\");\nbox.classList.toggle(\"active\");",
      },
      {
        h: "8. Event Listeners",
        p: "Event listeners let you listen to user actions like **clicks, typing, etc.** You select the element and call `addEventListener`, passing the event name and a callback that runs each time the event fires. In the page's example a button gets a `\"click\"` listener whose callback alerts `\"Button clicked!\"`. This is the piece that closes the loop: selection, content, styles and classes describe *what* you can change; the event listener decides *when*. Side-note: **react to user interactions**.",
        code: "const btn = document.querySelector(\"button\");\nbtn.addEventListener(\"click\", () => {\n  alert(\"Button clicked!\");\n});",
      },
      {
        h: "9. Practical Example — a simple todo app",
        p: "The page pulls everything together into a simple todo app idea, and every technique from the previous boxes shows up exactly once. It selects the text input and the list with `getElementById`, selects the add button with `querySelector`, and attaches a click listener. Inside the callback it creates an `li` with `createElement`, sets its `textContent` from the input's `value`, appends it to the list with `appendChild`, and finally clears the input by setting `input.value = \"\"` so the field is ready for the next entry. Side-note: **DOM + JS = powerful web experiences**.",
        code: "const input = document.getElementById(\"task\");\nconst list = document.getElementById(\"list\");\nconst btn = document.querySelector(\"#add\");\n\nbtn.addEventListener(\"click\", () => {\n  const li = document.createElement(\"li\");\n  li.textContent = input.value;\n  list.appendChild(li);\n  input.value = \"\";\n});",
      },
      {
        h: "10. Parent, Child, Siblings",
        p: "Because the DOM is a tree, every node knows its neighbours, and you can navigate between them instead of writing another selector. The page shows the four relationship properties:\n\n- `child.parentElement` — step up one level to the containing element.\n- `parent.firstElementChild` — step down to the first element inside.\n- `child.nextElementSibling` — step sideways to the next element at the same level.\n\nThese are handy inside event callbacks, where you already have one node and want the one next to it. Side-note: **move around the DOM like a pro**.",
        code: "const child = document.querySelector(\"li\");\nconst parent = child.parentElement;\nconst firstChild = parent.firstElementChild;\nconst nextSibling = child.nextElementSibling;",
      },
      {
        h: "11. Data Attributes",
        p: "Data attributes store **extra information in HTML elements**. You write any attribute prefixed with `data-` in your markup — the page's example is `<div id=\"user\" data-id=\"101\" data-name=\"Faisal\"></div>` — and JavaScript reads it back through the element's `dataset` object: `user.dataset.id` gives `101` and `user.dataset.name` gives `Faisal`. Note the naming rule: the `data-` prefix is dropped and the rest becomes a `dataset` key. This lets you attach per-element state (a record id, a status flag) directly to the node that represents it. Side-note: **data-* attributes keep info close to elements**.",
        code: "<div id=\"user\" data-id=\"101\" data-name=\"Faisal\"></div>\n\nconst user = document.getElementById(\"user\");\nconsole.log(user.dataset.id);    // 101\nconsole.log(user.dataset.name);  // Faisal",
      },
      {
        h: "12. Best Practices",
        p: "The page closes with five green-ticked rules:\n\n- **Select elements once and reuse.** DOM queries cost work; store the result in a variable instead of re-querying inside loops or handlers.\n- **Avoid inline styles.** Writing dozens of `.style.x =` lines scatters your design across your JS.\n- **Use classes for styling.** Keep the look in CSS and let JS only flip class names.\n- **Keep JS and HTML clean.** Structure belongs in markup, behaviour in script.\n- **Test in your browser.** The DevTools console is where you confirm what you actually built.\n\nSide-note: **clean code, better performance, happy users**.",
      },
      {
        h: "Key Takeaways",
        p: "The takeaway strip at the foot of the page states four things:\n\n- The **DOM connects HTML and JS** — it is the shared representation both sides work on.\n- You can **change, create and remove elements** — the document is fully editable at runtime.\n- You can **make your pages interactive and dynamic** — via events and state-driven updates.\n- **Small changes in the DOM have a big impact on the user experience.**\n\nAnd the closing quote: **\"You don't just build websites. You bring them to life.\"**",
      },
    ],
    snippets: [
      {
        label: "THE DOM TREE",
        code: "document\n   |\n  html\n   |\n  +-------+\n  |       |\n head    body\n          |\n       +--+--+\n       |     |\n      h1     p",
        note: "The page's diagram: **HTML becomes a tree that JS can work with**.",
      },
      {
        label: "SELECTING ELEMENTS",
        code: "document.getElementById(\"title\");\ndocument.getElementsByClassName(\"box\");\ndocument.getElementsByTagName(\"p\");\ndocument.querySelector(\".box\");\ndocument.querySelectorAll(\"p\");",
        note: "Choose the right method for the right job — `querySelector*` accepts any CSS selector.",
      },
      {
        label: "CHANGING CONTENT",
        code: "const heading = document.getElementById(\"title\");\nheading.textContent = \"Hello!\";\nheading.innerHTML = \"<b>Hello</b>\";\n\nconst input = document.getElementById(\"name\");\ninput.value = \"Faisal\";",
        note: "`textContent` for plain text, `innerHTML` to parse markup, `value` for form inputs.",
      },
      {
        label: "CHANGING STYLES",
        code: "const box = document.querySelector(\".box\");\nbox.style.color = \"red\";\nbox.style.backgroundColor = \"#ffdc0b\";\nbox.style.padding = \"20px\";",
        note: "CSS names become camelCase; lengths need their unit as a string.",
      },
      {
        label: "ADD ELEMENTS",
        code: "const newP = document.createElement(\"p\");\nnewP.textContent = \"I am new!\";\ndocument.body.appendChild(newP);",
        note: "Create it, add it, show it.",
      },
      {
        label: "REMOVE ELEMENTS",
        code: "const p = document.querySelector(\"p\");\np.remove();\n// or\np.parentNode.removeChild(p);",
        note: "Modern `remove()` vs the older parent-based `removeChild()`.",
      },
      {
        label: "TOGGLE CLASSES",
        code: "const box = document.querySelector(\".box\");\nbox.classList.add(\"active\");\nbox.classList.remove(\"active\");\nbox.classList.toggle(\"active\");",
        note: "`toggle` flips a class on and off — classes help you switch styles easily.",
      },
      {
        label: "EVENT LISTENERS",
        code: "const btn = document.querySelector(\"button\");\nbtn.addEventListener(\"click\", () => {\n  alert(\"Button clicked!\");\n});",
        note: "React to user interactions like clicks and typing.",
      },
      {
        label: "PRACTICAL EXAMPLE — TODO APP",
        code: "const input = document.getElementById(\"task\");\nconst list = document.getElementById(\"list\");\nconst btn = document.querySelector(\"#add\");\n\nbtn.addEventListener(\"click\", () => {\n  const li = document.createElement(\"li\");\n  li.textContent = input.value;\n  list.appendChild(li);\n  input.value = \"\";\n});",
        note: "Select, listen, create, append, then clear the input — DOM + JS = powerful web experiences.",
      },
      {
        label: "PARENT, CHILD, SIBLINGS",
        code: "const child = document.querySelector(\"li\");\nconst parent = child.parentElement;\nconst firstChild = parent.firstElementChild;\nconst nextSibling = child.nextElementSibling;",
        note: "Navigate between nodes instead of writing another selector.",
      },
      {
        label: "DATA ATTRIBUTES",
        code: "<div id=\"user\" data-id=\"101\" data-name=\"Faisal\"></div>\n\nconst user = document.getElementById(\"user\");\nconsole.log(user.dataset.id);    // 101\nconsole.log(user.dataset.name);  // Faisal",
        note: "`data-*` attributes keep extra info close to the elements they describe.",
      },
    ],
  },
  {
    day: 14,
    group: 'engine',
    title: 'The Event Loop',
    tagline: 'Why JavaScript does many things at once while single-threaded.',
    image: '/javascript-notes/ep14-the-event-loop.jpeg',
    tags: ['Engine', 'Concurrency', 'Call stack'],
    notes: [
      { k: 'The key idea', v: 'Do one thing at a time, but never get blocked. The event loop is what allows non-blocking operations on a single thread.' },
      { k: 'The pieces', v: 'Call Stack (where code executes) → Web APIs (browser-handled: setTimeout, fetch, DOM events) → Task Queue (callbacks wait here) → Event Loop (moves work back to the stack).' },
      { k: 'How it works', v: 'Code runs on the call stack. Async work is handed to Web APIs. When it finishes, its callback goes to the task queue. The event loop checks the stack, and only when the stack is empty does it push the first queued task on.' },
      { k: 'The classic example', v: 'log("Start"), setTimeout(log("Timeout"), 0), log("End") prints Start, End, Timeout — even with a 0ms delay, because the callback must wait for an empty stack.' },
      { k: 'Priority', v: 'Microtasks (promise callbacks) have higher priority than the task queue.' },
    ],
    theory: [
      {
        h: "The Event Loop — why JS can do many things at once while single-threaded",
        p: "The page's subtitle frames the whole puzzle: **why JavaScript can do multiple things at once while being single-threaded**. Single-threaded means there is exactly one call stack and exactly one thing executing at any instant — there is no second worker inside the language to run your timer while your loop runs. Yet in practice a page fetches data, waits on timers, handles clicks and keeps rendering, all apparently together. The Event Loop is the mechanism that resolves that contradiction: JavaScript hands slow work to the environment, keeps running, and picks the results back up later.",
      },
      {
        h: "1. What is the Event Loop?",
        p: "The Event Loop is what allows JavaScript to perform **non-blocking operations even though it is single-threaded**. The page pairs this with a boxed **Key Idea** that is worth memorising: **\"Do one thing at a time, but never get blocked.\"** Those two clauses are not in conflict. One-thing-at-a-time is about the call stack — only one frame runs. Never-blocked is about waiting — JavaScript never sits idle holding the stack while a timer counts down or a network request travels; it delegates the waiting elsewhere and moves on to the next line.",
      },
      {
        h: "The four parts (the flow diagram)",
        p: "The centre of the page is a vertical chain of four boxes with an arrow looping from the bottom back to the top, annotated **\"Repeat forever\"**. Read it top to bottom:\n\n- **Call Stack** — where JS code is executed. Every function call pushes a frame; every return pops it.\n- **Web APIs** — handled by the browser, not by the JS engine: `setTimeout`, `fetch`, DOM events, and the like. This is where the actual waiting happens, off-thread.\n- **Task Queue** (also drawn as the **Callback Queue**) — callbacks wait here until the call stack is empty. Being finished is not the same as being run; a finished async operation's callback only gets a place in line.\n- **Event Loop** — checks the call stack; **if it is empty, it moves tasks from the queue to the stack.**\n\nThe arrow from Event Loop back up to Call Stack, labelled *repeat forever*, is the loop in \"event loop\": this check-and-move cycle never stops while the program lives.",
      },
      {
        h: "2. How It Works — the six steps",
        p: "The page numbers the cycle explicitly:\n\n- **1.** JS code runs in the Call Stack.\n- **2.** When it encounters an async operation, it sends it to the Web APIs.\n- **3.** Once the operation is done, the callback is pushed to the Task Queue.\n- **4.** The Event Loop checks the Call Stack.\n- **5.** If the Call Stack is empty, it takes the **first** task from the queue and pushes it to the stack.\n- **6.** Steps repeat.\n\nStep 5 carries the two rules that explain nearly every surprising output you will ever see. The stack must be **empty** — not merely quiet, but fully unwound, meaning all your synchronous top-level code has finished. And the queue is taken **first-in-first-out**, so callbacks run in the order they were queued, not in the order they were requested.",
      },
      {
        h: "3. Example — Start, End, Timeout",
        p: "The classic three-line demo. `console.log('Start')` runs and prints. `setTimeout(() => console.log('Timeout'), 0)` is met next — it is async, so it is handed to the Web APIs and the stack moves on immediately. `console.log('End')` runs and prints. The output box on the page reads **Start, End, Timeout** — in that order.\n\nThe page's own bullet walkthrough:\n\n- `setTimeout` goes to Web APIs.\n- `'End'` runs immediately.\n- After 0ms, the callback goes to the Task Queue.\n- The Event Loop moves it to the Call Stack.\n- `'Timeout'` is printed.\n\nThe lesson hiding in the `0`: a zero-millisecond delay does **not** mean \"now\". It means \"queue this as soon as possible\" — and as-soon-as-possible still means after the stack empties, i.e. after `'End'`.",
        code: "console.log('Start');\nsetTimeout(() => {\n  console.log('Timeout');\n}, 0);\nconsole.log('End');\n\n// Output:\n// Start\n// End\n// Timeout",
      },
      {
        h: "4. Visual Flow",
        p: "The bottom diagram redraws the same cycle horizontally so you can watch one callback travel. On the left is the **Call Stack**, a column of stacked frames with `console.log('End')` shown sitting in it — the synchronous work still running. An arrow labelled **\"Async operation\"** leaves the stack and points right to **Web APIs**, drawn as a box containing a clock face: the timer is counting down out there, in the browser, while the stack carries on.\n\nWhen the clock finishes, an arrow labelled **\"Task done\"** carries the callback right again into the **Task Queue**, drawn as a stack of waiting slots. From the Task Queue an arrow drops down and left into the **Event Loop** box, labelled **\"when stack is empty\"** — the condition that gates the whole handoff. Finally an arrow labelled **\"Push to stack\"** runs from the Event Loop back up-left into the Call Stack, where the callback finally executes.\n\nSo the callback's full journey is: Call Stack → Web APIs (wait) → Task Queue (queue) → Event Loop (gate) → Call Stack (run).",
      },
      {
        h: "5. Remember",
        p: "The closing checklist, five ticked points:\n\n- **JS is single-threaded** — one stack, one thing at a time.\n- **The Event Loop enables concurrency** — many things in flight, still one thing executing.\n- **It never blocks the Call Stack** — waiting is delegated, never sat through.\n- **Microtasks (Promise callbacks) have higher priority than the Task Queue.** This is the one addition beyond the four-box model: promise callbacks live in a separate microtask queue that is drained *before* the ordinary task queue, so a resolved `.then` beats a `setTimeout(…, 0)` queued at the same moment.\n- **Understand the flow, write better code.**\n\nA starred side-note signs the page off: **Practice. Observe. Master JS.**",
      },
    ],
    snippets: [
      {
        label: "THE EVENT LOOP CYCLE",
        code: "   +-------------------+\n   |    CALL STACK     |  <- where JS code is executed\n   +-------------------+\n            |\n            v\n   +-------------------+\n   |     WEB APIs      |  <- handled by the browser\n   |                   |     (setTimeout, fetch, DOM events...)\n   +-------------------+\n            |\n            v\n   +-------------------+\n   |    TASK QUEUE     |  <- callbacks wait here until\n   |  (Callback Queue) |     the call stack is empty\n   +-------------------+\n            |\n            v\n   +-------------------+\n   |    EVENT LOOP     |  <- checks the call stack;\n   +-------------------+     if empty, moves tasks\n            |                from queue to stack\n            |\n            +--> repeat forever (back to CALL STACK)",
        note: "Key idea: **do one thing at a time, but never get blocked**.",
      },
      {
        label: "START / END / TIMEOUT",
        code: "console.log('Start');\nsetTimeout(() => {\n  console.log('Timeout');\n}, 0);\nconsole.log('End');\n\n// Output:\n// Start\n// End\n// Timeout",
        note: "`0`ms means *queue it as soon as possible*, not *run it now* — the stack must empty first.",
      },
      {
        label: "VISUAL FLOW — ONE CALLBACK'S JOURNEY",
        code: "  CALL STACK            WEB APIs           TASK QUEUE\n +------------+  async  +----------+ task  +----------+\n |            | ------> |          | done  |          |\n |            |         |  (clock) | ----> |          |\n | console.log|         |          |       |          |\n |   ('End')  |         +----------+       +----------+\n +------------+                                  |\n       ^                                         |\n       |          +--------------+               |\n       +--------- |  EVENT LOOP  | <-------------+\n   push to stack  +--------------+  when stack is empty",
        note: "Call Stack -> Web APIs (wait) -> Task Queue (queue) -> Event Loop (gate) -> Call Stack (run).",
      },
    ],
  },
  {
    day: 15,
    group: 'engine',
    title: 'Execution Context',
    tagline: 'The environment in which JavaScript code is executed.',
    image: '/javascript-notes/ep15-execution-context.jpeg',
    tags: ['Engine', 'Call stack', 'Scope chain'],
    notes: [
      { k: 'What it is', v: 'Every time JavaScript runs code it creates an Execution Context containing everything needed to run that code.' },
      { k: 'Three types', v: 'Global EC (created when JS starts), Function EC (created on every function call), and Eval EC (code inside eval()).' },
      { k: 'Anatomy', v: 'Each context has a Variable Environment (let/const/var, function declarations, arguments object), a Scope Chain (a reference to the outer environment), and a `this` binding.' },
      { k: 'Lifecycle', v: 'JS starts → Global EC created. greet() called → its Function EC created. greet() finishes → its context is destroyed. Global EC remains until the program ends.' },
      { k: 'Key points', v: 'Only one execution context runs at a time (single-threaded), contexts are pushed onto the call stack, and the scope chain is what makes variable lookup work.' },
    ],
    theory: [
      {
        h: "Execution Context — the environment in which JS code is executed",
        p: "The page's subtitle is the definition: an Execution Context is **the environment in which JavaScript code is executed**. Code does not run in a vacuum — before a single line executes, the engine has to decide which variables exist, what the outer scope is, and what `this` means. That bundle of decisions *is* the execution context. Understanding it is what turns hoisting, scope and `this` from three separate mysteries into three views of one machine.",
      },
      {
        h: "1. What Is It?",
        p: "Every time JavaScript runs some code, it **creates an Execution Context**. It contains **everything needed to run the code**. So a context is not a metaphor for scope — it is a concrete internal record the engine builds and then executes against. Contexts are created on demand, they nest, and they are destroyed when their code is finished. Every question of the form \"where does this variable come from?\" or \"what is `this` here?\" is answered by looking at the execution context that is currently on top.",
      },
      {
        h: "2. Types of Execution Context",
        p: "The page lists three kinds, each with its trigger:\n\n- **Global Execution Context** — created when JS starts running. There is exactly one, and it is the base of everything.\n- **Function Execution Context** — created when a function is **called**. Note *called*, not defined: defining a function creates no context, and calling the same function three times creates three separate contexts.\n- **Eval Execution Context** — created when code runs inside `eval()`.\n\nThe practical takeaway is that function contexts are the ones you deal with constantly, and their per-call nature is what gives each invocation its own fresh set of local variables.",
      },
      {
        h: "3. Anatomy of an Execution Context",
        p: "The page draws one big box labelled EXECUTION CONTEXT containing three numbered compartments — these are the three things every context carries.\n\n**1. Variable Environment.** Holds `let`, `const`, `var`, plus function declarations and the `arguments` object. A small table inside shows what this looks like at creation time: `a` → `undefined`, `b` → `undefined`, `add` → `(function)`. This is hoisting made visible — variables are registered *before* execution with no value yet, while function declarations are registered already complete, which is exactly why you can call a declared function above its own definition but reading a variable early gives you `undefined`.\n\n**2. Scope Chain.** A **reference to the outer environment**. The diagram draws it as a downward chain of links: `current EC` → `outer EC` → `...` → `global EC`. When a name isn't found in the current context, the engine follows this chain outward, level by level, until it hits the global context — and if the name isn't there either, that's your ReferenceError.\n\n**3. This Binding.** The **value of `this` in the current context**. The boxed note gives the base case: **`this = window` (in global)**.",
      },
      {
        h: "4. How It Works (Example)",
        p: "The page walks a tiny program through its whole context lifecycle. The code declares `let x = 10`, defines `function greet(name)` which builds `let msg = \"Hi \" + name` and logs it, then calls `greet(\"Faisal\")`.\n\nThe four numbered steps:\n\n- **1.** JS starts → the Global Execution Context is created.\n- **2.** `greet()` is called → a Function Execution Context for `greet` is created.\n- **3.** `greet()` finishes → its Execution Context is removed (destroyed).\n- **4.** The Global Execution Context remains until the program ends.\n\nAlongside runs a vertical strip of four labelled states showing exactly this sequence: **Global EC (created)** → **greet() EC (created)** → **greet() EC (destroyed)** → **Global EC (remains)**. The asymmetry is the point: function contexts are transient and disposable, the global context outlives them all.",
        code: "let x = 10;\nfunction greet(name) {\n  let msg = \"Hi \" + name;\n  console.log(msg);\n}\ngreet(\"Faisal\");",
      },
      {
        h: "5. Visual Flow",
        p: "A left-to-right chain shows contexts spawning one another. It begins with the **Global Execution Context**, annotated **`this` = window** and **Outer = null** — null because the global context has nothing outside it; it is the end of the scope chain.\n\nAn arrow leads to a **Function Execution Context**, annotated **`this` = depends** and **Outer = Global EC**. Another arrow leads to a further **Function Execution Context**, annotated **`this` = depends** and **Outer = previous EC**. The chain trails off with **...** and finally an arrow to **Destroyed**.\n\nA dashed arc runs back along the bottom of the whole chain labelled **Scope Chain** — a reminder that while execution flows forward creating contexts, name lookup flows *backward* along the same links. Note also that `this` is fixed and known in the global context but merely \"depends\" in function contexts, which is precisely the subject of the next episode.",
      },
      {
        h: "6. Key Points",
        p: "Four ticked points close the page:\n\n- **Only one Execution Context runs at a time** (single-threaded).\n- **Contexts are pushed to the Call Stack.**\n- **When a function finishes, its context is popped from the stack.**\n- **The Scope Chain helps in variable lookup.**\n\nAnd the highlighted sign-off: **\"Execution Context is the foundation of how JavaScript works. Understand it well, and the magic of JS becomes clear!\"**",
      },
      {
        h: "Call Stack (Behind the Scenes)",
        p: "A yellow sticky-note on the page draws the Call Stack that holds all these contexts. It is a vertical stack: at the very bottom sits **Global EC**, above it a **Function EC**, above that another **Function EC**, and `...` continuing upward.\n\nThe two annotations are the whole model:\n\n- **Top = currently executing context.** Whatever sits on top is what is running right now.\n- **Bottom = global context.** It was pushed first and it pops last.\n\nCalling a function pushes its context on top; returning pops it off, and whatever was beneath resumes. This is the same call stack from the Event Loop episode, now seen from the inside: the frames it holds are execution contexts.",
      },
    ],
    snippets: [
      {
        label: "ANATOMY OF AN EXECUTION CONTEXT",
        code: "+---------------------------------------------------+\n|              EXECUTION CONTEXT                    |\n|                                                   |\n|  1. VARIABLE ENVIRONMENT   2. SCOPE CHAIN         |\n|     - let, const, var         - reference to the  |\n|     - function declarations     outer environment |\n|     - arguments object                            |\n|                               [ current EC ]      |\n|     a   undefined                    |            |\n|     b   undefined             [  outer EC  ]      |\n|     add (function)                   |            |\n|                                     ...           |\n|                               [ global EC  ]      |\n|                                                   |\n|  3. THIS BINDING                                  |\n|     - value of 'this' in the current context      |\n|       this = window (in global)                   |\n+---------------------------------------------------+",
        note: "Every context carries three things: a variable environment, a scope chain, and a `this` binding.",
      },
      {
        label: "CONTEXT LIFECYCLE EXAMPLE",
        code: "let x = 10;\nfunction greet(name) {\n  let msg = \"Hi \" + name;\n  console.log(msg);\n}\ngreet(\"Faisal\");\n\n// 1. JS starts        -> Global EC created\n// 2. greet() called   -> greet() EC created\n// 3. greet() finishes -> greet() EC destroyed\n// 4. Global EC remains until the program ends",
        note: "Function contexts are transient; the global context outlives them all.",
      },
      {
        label: "VISUAL FLOW",
        code: "  Global EC          Function EC           Function EC\n  this = window  ->  this = depends   ->   this = depends  -> ... -> Destroyed\n  Outer = null       Outer = Global EC     Outer = previous EC\n     ^                                                |\n     +------------------- Scope Chain ---------------+",
        note: "Execution flows forward creating contexts; name lookup flows backward along the scope chain.",
      },
      {
        label: "CALL STACK (BEHIND THE SCENES)",
        code: "        +---------------+\n        |      ...      |\n        +---------------+  <- Top = currently executing context\n        |  Function EC  |\n        +---------------+\n        |  Function EC  |\n        +---------------+\n        |   Global EC   |  <- Bottom = global context\n        +---------------+",
        note: "Calling a function pushes its context; returning pops it. Bottom is pushed first and popped last.",
      },
    ],
  },
  {
    day: 16,
    group: 'core',
    title: 'Functions',
    tagline: 'The building blocks of reusable code.',
    image: '/javascript-notes/ep16-functions.jpeg',
    tags: ['Functions', 'Arrow', 'Parameters'],
    notes: [
      { k: 'What it is', v: 'A block of code designed to perform a particular task, reusable whenever you need it. Functions buy you reusability, readability and maintainability.' },
      { k: 'Declaration', v: '`function greet(name) {…}` — hoisted, so it can be called before it appears in the file.' },
      { k: 'Expression', v: '`const greet = function (name) {…}` — not hoisted; the variable exists but the function does not until that line runs.' },
      { k: 'Arrow functions', v: 'Shorter syntax, and crucially they do not have their own `this`.' },
      { k: 'Parameters vs arguments', v: 'Parameters are the placeholders in the definition; arguments are the actual values passed at the call.' },
      { k: 'Default parameters', v: '`function greet(name = "Guest")` uses the default only when no argument is passed.' },
      { k: 'return', v: 'Sends a value back to where the function was called. Without it, the function returns undefined.' },
    ],
    theory: [
      {
        h: "Functions — the building blocks of reusable code",
        p: "The page's subtitle calls functions **the building blocks of reusable code**, and the illustration is a jigsaw piece — a self-contained shape that slots into a bigger picture. That is the mental model for the whole episode: a function is a named, reusable unit you assemble programs out of, rather than a stretch of code you retype.",
      },
      {
        h: "1. What Is a Function?",
        p: "A function is **a block of code designed to perform a particular task**, and you can **reuse it whenever you need**. Two halves matter equally. *One particular task* is about focus — a function that does one clear thing is one you can name well, test and trust. *Reuse whenever you need* is about leverage — define the logic once, then call it from as many places as you like, and when it needs to change you change it in exactly one place.\n\nA lightbulb box on the page answers **Why Functions?** with three ticks:\n\n- **Reusability** — write once, call many times.\n- **Readability** — a well-named call tells a reader what happens without showing them how.\n- **Maintainability** — one definition means one place to fix.",
      },
      {
        h: "2. Function Declaration",
        p: "The classic form: the `function` keyword, a name, a parameter list, a body. The page's example declares `greet(name)` which logs `\"Hello, \" + name + \"!\"`, then calls `greet(\"Faisal\")` producing `// Hello, Faisal!`.\n\nThe annotation beside it is the important half: a Function Declaration is **hoisted**. The whole function — name and body together — is registered in the execution context before any code runs, so you can legally call it on a line *above* where it is written. This is the same hoisting seen in the Execution Context episode, where function declarations appeared in the variable environment already complete rather than as `undefined`.",
        code: "function greet(name) {\n  console.log(\"Hello, \" + name + \"!\");\n}\ngreet(\"Faisal\");   // Hello, Faisal!",
      },
      {
        h: "3. Function Expression",
        p: "Here the function is assigned to a variable instead of being declared: `const greet = function(name) { ... }`, called the same way with `greet(\"Faisal\")` for `// Hello, Faisal!`. The body is identical to the declaration above — deliberately, so the only difference on show is the form.\n\nAnd that difference is the annotation: a Function Expression is **not hoisted**. What gets hoisted is the *variable* `greet`, not the function value assigned to it, so calling it before the assignment line fails. The rule of thumb: declarations are available throughout their scope; expressions are available only from their assignment onward.",
        code: "const greet = function(name) {\n  console.log(\"Hello, \" + name + \"!\");\n}\ngreet(\"Faisal\");   // Hello, Faisal!",
      },
      {
        h: "4. Arrow Functions",
        p: "The modern compact form: `const add = (a, b) => { return a + b; }`, with `console.log(add(3, 4))` giving `// 7`. The page notes two traits:\n\n- **Shorter syntax** — the `function` keyword disappears and the `=>` carries the meaning.\n- **Doesn't have its own `this`** — and this is the consequential one, not a footnote. An arrow function inherits `this` from the surrounding scope instead of getting its own binding, which the `this` episode explores in full. It is what makes arrows ideal for callbacks and a trap for object methods.",
        code: "const add = (a, b) => {\n  return a + b;\n}\nconsole.log(add(3, 4));   // 7",
      },
      {
        h: "5. Parameters & Arguments",
        p: "The page separates two words people use interchangeably, and circles them in the code to make the pairing unmissable. In `function multiply(x, y) { return x * y; }` the circled `x` and `y` are **parameters** — **variables in the function definition**, placeholders with no value until a call happens. In `multiply(4, 5)` the circled `4` and `5` are **arguments** — **values passed when calling the function**. The result is `// 20`.\n\nSo: parameters are the slots, arguments are what you drop into them. A parameter is part of the definition and exists once; arguments are supplied per call and differ every time.",
        code: "function multiply(x, y) {\n  return x * y;\n}\nmultiply(4, 5);   // 20",
      },
      {
        h: "6. Default Parameters",
        p: "You can give a parameter a fallback right in the signature: `function greet(name = \"Guest\") { console.log(\"Hi, \" + name); }`. The page shows both branches back to back — `greet()` prints `// Hi, Guest` and `greet(\"Ali\")` prints `// Hi, Ali`. The rule in the thought-bubble: **if no argument is passed, the default value is used.**\n\nThis replaces the defensive `if (!name) name = \"Guest\"` line that used to open so many functions, moving the fallback into the signature where a reader can see it while reading the call.",
        code: "function greet(name = \"Guest\") {\n  console.log(\"Hi, \" + name);\n}\ngreet();        // Hi, Guest\ngreet(\"Ali\");   // Hi, Ali",
      },
      {
        h: "7. Return Statement",
        p: "`function square(n) { return n * n; }` with `let result = square(5); console.log(result); // 25`. The side-note defines it precisely: **return sends a value back to where the function was called**.\n\nThat phrase carries two facts at once. The function produces a value the caller can capture into a variable, pass onward, or use in an expression — which is what makes functions composable rather than merely side-effecting. And `return` also *ends* the function: control leaves at that point and goes back to the call site. Compare with the `console.log` examples earlier in the page, which only print and hand nothing back.",
        code: "function square(n) {\n  return n * n;\n}\nlet result = square(5);\nconsole.log(result);   // 25",
      },
      {
        h: "8. Key Takeaways",
        p: "The closing checklist, five ticked lines:\n\n- **Functions help in writing DRY (Don't Repeat Yourself) code.**\n- **You can declare, express, or use arrow functions** — three forms, differing mainly in hoisting and `this`.\n- **Parameters are placeholders, arguments are actual values.**\n- **Use `return` to send a value back.**\n- **Functions make code modular and easy to manage.**\n\nAnd the page's closing quote: **\"Functions are not just code. They are solutions you can reuse.\"**",
      },
    ],
    snippets: [
      {
        label: "FUNCTION DECLARATION (HOISTED)",
        code: "function greet(name) {\n  console.log(\"Hello, \" + name + \"!\");\n}\ngreet(\"Faisal\");   // Hello, Faisal!",
        note: "**Hoisted** — name and body are registered before execution, so it can be called from above.",
      },
      {
        label: "FUNCTION EXPRESSION (NOT HOISTED)",
        code: "const greet = function(name) {\n  console.log(\"Hello, \" + name + \"!\");\n}\ngreet(\"Faisal\");   // Hello, Faisal!",
        note: "**Not hoisted** — only the variable is hoisted, so it works from the assignment line onward.",
      },
      {
        label: "ARROW FUNCTION",
        code: "const add = (a, b) => {\n  return a + b;\n}\nconsole.log(add(3, 4));   // 7",
        note: "Shorter syntax, and it doesn't have its own `this`.",
      },
      {
        label: "PARAMETERS & ARGUMENTS",
        code: "function multiply(x, y) {   // x, y = parameters\n  return x * y;\n}\nmultiply(4, 5);   // 20    // 4, 5 = arguments",
        note: "Parameters are variables in the definition; arguments are values passed at call time.",
      },
      {
        label: "DEFAULT PARAMETERS",
        code: "function greet(name = \"Guest\") {\n  console.log(\"Hi, \" + name);\n}\ngreet();        // Hi, Guest\ngreet(\"Ali\");   // Hi, Ali",
        note: "If no argument is passed, the default value is used.",
      },
      {
        label: "RETURN STATEMENT",
        code: "function square(n) {\n  return n * n;\n}\nlet result = square(5);\nconsole.log(result);   // 25",
        note: "`return` sends a value back to where the function was called.",
      },
    ],
  },
  {
    day: 17,
    group: 'engine',
    title: 'The `this` Keyword',
    tagline: '`this` refers to the context in which a function is called.',
    image: '/javascript-notes/ep17-the-this-keyword.jpeg',
    tags: ['this', 'Binding', 'Arrow'],
    notes: [
      { k: 'The core rule', v: '`this` has no fixed value. It is determined by HOW a function is invoked, not where it is written.' },
      { k: 'Default binding', v: 'In non-strict mode a plain function call gives `this` = the global object (window). In strict mode it is undefined.' },
      { k: 'Implicit binding', v: 'Called as a method, `this` is the object before the dot — `user.greet()` makes `this` = user.' },
      { k: 'Explicit binding', v: 'call(), apply() and bind() set `this` yourself. bind() returns a new function with `this` permanently bound.' },
      { k: 'New binding', v: 'With the `new` keyword, `this` refers to the newly created object.' },
      { k: 'Arrow functions', v: 'Arrows have no `this` of their own — they inherit it from the surrounding lexical scope. That is exactly why they are great for callbacks, and why they fail as object methods.' },
    ],
    theory: [
      {
        h: "The `this` Keyword — context, not location",
        p: "The page's subtitle states the rule the entire episode elaborates: **`this` refers to the context in which a function is called**. A cloud in the corner reinforces it: **`this` doesn't have a fixed value. It depends on how a function is invoked.**\n\nThis is the single idea people get wrong. `this` is not decided by where the function sits in your source file, and it is not a property of the function. It is decided at the call site, at the moment of the call — which means the very same function body can see a different `this` on every call.",
      },
      {
        h: "1. What is `this`?",
        p: "`this` is **a special keyword that refers to the object that is currently *calling* the function** — the word *calling* is underlined on the page, because it is the whole distinction. A dashed lightbulb box gives the memory hook: **think of `this` as a placeholder that gets its value at runtime.**\n\nThat runtime framing is useful. At authoring time `this` is an unfilled blank; the engine fills it in when a call happens, using the rules below.",
      },
      {
        h: "2. How `this` Works — the four bindings",
        p: "The value of `this` depends on **how a function is called**. The page names **4 ways `this` can be bound**, and the rest of the sheet is one box per way:\n\n- **Default Binding** — a plain function call with nothing in front of it.\n- **Implicit Binding** — called as a method of an object.\n- **Explicit Binding** — you set it yourself with `call`, `apply`, `bind`.\n- **New Binding** — with the `new` keyword.\n\nWhen you meet a confusing `this`, work down this list and ask which of the four applies to the call in front of you.",
      },
      {
        h: "3. Default Binding",
        p: "**In non-strict mode, `this` refers to the global object (`window` in browsers).** A bare `function show() { console.log(this); }` called as `show()` logs `// Window (in browser)` — there is no object in front of the call, so `this` falls back to the global object.\n\n**In strict mode, `this` is undefined.** The page shows the same function under `'use strict'` and `show()` now logs `// undefined`. That is a deliberate improvement, not a bug: silently defaulting to the global object made accidental global writes easy, so strict mode leaves `this` empty rather than pointing it at something dangerous.",
        code: "function show() {\n  console.log(this);\n}\nshow();   // Window (in browser)\n\n'use strict';\nfunction show() {\n  console.log(this);\n}\nshow();   // undefined",
      },
      {
        h: "4. Implicit Binding",
        p: "**When a function is called as a method of an object, `this` refers to that object.** The page's `user` object holds `name: 'Faisal'` and a `greet()` method logging `\"Hi, \" + this.name`; `user.greet()` prints `// Hi, Faisal`.\n\nThe green callout gives the rule you can apply by eye: **the object before the dot becomes the context.** Read the call left of the dot and you have your `this`. It also warns you where implicit binding *breaks* — if there is no dot at call time, there is no implicit binding, no matter where the function was defined.",
        code: "const user = {\n  name: 'Faisal',\n  greet() {\n    console.log(\"Hi, \" + this.name);\n  }\n};\nuser.greet();   // Hi, Faisal",
      },
      {
        h: "5. Explicit Binding",
        p: "**We can explicitly set `this` using `call()`, `apply()` or `bind()`.** The page defines a standalone `function greet() { console.log(\"Hi, \" + this.name); }` and two objects, `user = { name: \"Faisal\" }` and `admin = { name: \"Admin\" }`. Then `greet.call(user)` prints `// Hi, Faisal` and `greet.apply(admin)` prints `// Hi, Admin`. The same function, two different contexts, chosen by you at the call.\n\nA highlighted sub-box separates `bind` from the other two: **`bind()` returns a new function with `this` bound.** It does not call anything — `const greetUser = greet.bind(user);` produces a new function, and only `greetUser();` runs it, printing `// Hi, Faisal`. So `call` and `apply` invoke immediately; `bind` hands you a permanently-bound function to invoke later, which is why it is the tool for callbacks.",
        code: "function greet() {\n  console.log(\"Hi, \" + this.name);\n}\nconst user = { name: \"Faisal\" };\nconst admin = { name: \"Admin\" };\n\ngreet.call(user);    // Hi, Faisal\ngreet.apply(admin);  // Hi, Admin\n\nconst greetUser = greet.bind(user);\ngreetUser();   // Hi, Faisal",
      },
      {
        h: "6. New Binding",
        p: "**When a function is used with `new`, `this` refers to the new object being created.** The page's constructor `function Person(name) { this.name = name; }` is called as `const p1 = new Person(\"Faisal\")`. Then `console.log(p1.name)` gives `// Faisal` and `console.log(p1 instanceof Person)` gives `// true`.\n\nThe cloud note explains the mechanism: **`this` in constructor functions refers to the new empty object that is created.** `new` manufactures a fresh empty object, points `this` at it for the duration of the call, and hands it back — which is why simply assigning to `this.name` inside is enough to produce a populated instance without any explicit return.",
        code: "function Person(name) {\n  this.name = name;\n}\n\nconst p1 = new Person(\"Faisal\");\nconsole.log(p1.name);              // Faisal\nconsole.log(p1 instanceof Person); // true",
      },
      {
        h: "7. Arrow Functions & `this`",
        p: "Two pink rules head this box:\n\n- **Arrow functions do not have their own `this`.**\n- **They inherit `this` from their surrounding (lexical) scope.**\n\nThe example makes the consequence concrete. A `user` object holds `name: 'Faisal'` plus two methods. `regular()` is a normal method logging `this.name` — `user.regular()` prints `// Faisal`, because implicit binding applies. `arrow: () => console.log(this.name)` is an arrow — `user.arrow()` prints `// undefined`, because the arrow never received a `this` of its own and instead inherited the one from the scope *surrounding the object literal*, which is not the object. Note carefully: an object literal does **not** create a new scope for `this`.\n\nThe closing note flips this from trap to tool: **arrow functions are great for callbacks where you don't want `this` to change.** In a callback, inheriting the enclosing `this` is exactly what you want; as an object method it is exactly what you don't.",
        code: "const user = {\n  name: 'Faisal',\n  regular() {\n    console.log(this.name);   // Faisal\n  },\n  arrow: () => {\n    console.log(this.name);   // undefined\n  }\n};\nuser.regular();   // Faisal\nuser.arrow();     // undefined",
      },
      {
        h: "8. Key Takeaways",
        p: "The six ticked lines that close the page:\n\n- **`this` is determined by how a function is called, not where it is written.**\n- **Default binding → global object (or `undefined` in strict mode).**\n- **Implicit binding → the object before the dot.**\n- **Explicit binding → `call()`, `apply()`, `bind()`.**\n- **New binding → new object created.**\n- **Arrow functions inherit `this` from their parent scope.**\n\nRead as a set, these are a decision procedure: identify the call form, and `this` follows.",
      },
    ],
    snippets: [
      {
        label: "DEFAULT BINDING (NON-STRICT vs STRICT)",
        code: "function show() {\n  console.log(this);\n}\nshow();   // Window (in browser)\n\n// ---\n'use strict';\nfunction show() {\n  console.log(this);\n}\nshow();   // undefined",
        note: "No object in front of the call — `this` falls back to global, or to `undefined` in strict mode.",
      },
      {
        label: "IMPLICIT BINDING",
        code: "const user = {\n  name: 'Faisal',\n  greet() {\n    console.log(\"Hi, \" + this.name);\n  }\n};\nuser.greet();   // Hi, Faisal",
        note: "**The object before the dot becomes the context.**",
      },
      {
        label: "EXPLICIT BINDING — call / apply",
        code: "function greet() {\n  console.log(\"Hi, \" + this.name);\n}\nconst user = { name: \"Faisal\" };\nconst admin = { name: \"Admin\" };\n\ngreet.call(user);    // Hi, Faisal\ngreet.apply(admin);  // Hi, Admin",
        note: "Same function, two contexts, chosen at the call site.",
      },
      {
        label: "EXPLICIT BINDING — bind",
        code: "const greetUser = greet.bind(user);\ngreetUser();   // Hi, Faisal",
        note: "`bind()` returns a **new function** with `this` bound — it doesn't call it.",
      },
      {
        label: "NEW BINDING",
        code: "function Person(name) {\n  this.name = name;\n}\n\nconst p1 = new Person(\"Faisal\");\nconsole.log(p1.name);              // Faisal\nconsole.log(p1 instanceof Person); // true",
        note: "`this` in constructor functions refers to the new empty object that is created.",
      },
      {
        label: "ARROW FUNCTIONS & `this`",
        code: "const user = {\n  name: 'Faisal',\n  regular() {\n    console.log(this.name);   // Faisal\n  },\n  arrow: () => {\n    console.log(this.name);   // undefined\n  }\n};\nuser.regular();   // Faisal\nuser.arrow();     // undefined",
        note: "Arrows have no own `this` — they inherit it from the surrounding lexical scope.",
      },
      {
        label: "THE 4 WAYS `this` CAN BE BOUND",
        code: "1. Default Binding   -> plain call       -> global object / undefined (strict)\n2. Implicit Binding  -> obj.method()     -> the object before the dot\n3. Explicit Binding  -> call/apply/bind  -> whatever you pass\n4. New Binding       -> new Fn()         -> the newly created object\n\n   (Arrow functions: no own `this` -> inherited from parent scope)",
        note: "Identify the call form and `this` follows.",
      },
    ],
  },
  {
    day: 18,
    group: 'engine',
    title: 'Memory Management',
    tagline: 'JavaScript manages memory so you can focus on building.',
    image: '/javascript-notes/ep18-memory-management.jpeg',
    tags: ['Memory', 'Garbage collection', 'Leaks'],
    notes: [
      { k: 'What it is', v: 'The process of allocating, using and releasing memory during execution. In JavaScript it is automatic, via garbage collection.' },
      { k: 'Stack vs heap', v: 'The stack holds primitives and function calls; the heap holds objects, arrays and functions (reference types). Variables on the stack point into the heap.' },
      { k: 'Garbage collection', v: 'Mark & sweep: start from the root (global), mark everything reachable, then sweep away everything unmarked. Unreachable objects are freed.' },
      { k: 'Reachability', v: 'Setting `user = null` does not free the object if `data` still references it. Only when every reference is gone can it be collected.' },
      { k: 'Common leaks', v: 'Accidental globals, unremoved event listeners, closures holding unused data, uncleared timers/intervals, and detached DOM elements.' },
      { k: 'Best practices', v: 'Declare with let/const, remove listeners when done, clear timers, avoid unnecessary globals, and keep closures small and intentional.' },
    ],
    theory: [
      {
        h: "Memory Management — build, don't clean",
        p: "The page's subtitle sets the tone: **how JavaScript manages memory automatically so you can focus on building, not cleaning**, and the illustration is a recycling bin. In languages without automatic memory management you allocate and free by hand. JavaScript takes that job away — but *automatic* is not the same as *foolproof*, and the second half of this episode is about the ways you can accidentally keep the collector from doing its work.",
      },
      {
        h: "1. What is Memory Management?",
        p: "Memory management is **the process of allocating, using and releasing memory during program execution**. Those three verbs are the full lifecycle: memory is reserved when a value is created, used while the program needs it, and released when it doesn't.\n\nThe lightbulb box adds the part specific to this language: **in JavaScript, this is done automatically by a mechanism called Garbage Collection.** You never call a `free()`. Your influence over memory is indirect — it comes entirely from whether you still hold references to things.",
      },
      {
        h: "2. How Memory Works in JS — Stack and Heap",
        p: "The page draws two boxes with an arrow between them.\n\n**STACK** — **used for primitive values and function calls**. Its example lines are `let x = 10;` and `let name = 'Ali';`, and beneath them a small column of stacked slots. Primitives are fixed-size and are stored directly in these slots; function calls stack and unstack here too.\n\n**HEAP** — **used for objects, arrays, functions (reference types)**. Its examples are `let obj = {a: 1};`, `let arr = [1,2,3];` and `let fn = function(){};`, and beneath them a loose scatter of small squares joined by lines — an unordered graph of objects pointing at other objects, as opposed to the stack's neat column.\n\nThe arrow from Stack to Heap is labelled **Reference**, and that single word is the key to everything after it. When you write `let obj = {a: 1}`, the object lives in the heap; the variable on the stack holds only a reference — an arrow pointing to it. Assigning that variable to another variable copies the arrow, not the object. Whether the object survives depends on whether any arrows still point at it.",
      },
      {
        h: "3. Garbage Collection (GC)",
        p: "GC is **the process of finding and removing memory that is no longer used**. The page then opens the box labelled **How It Works (Mark & Sweep)** and draws the algorithm in three panels:\n\n- **1. Mark** — **start from the root (global)**. The diagram shows a root node with a small graph of nodes hanging off it. The collector begins at what is definitely alive.\n- **2. Mark Reachable** — **mark all reachable objects**. Following every reference outward from the root, it colours in each object it can arrive at. Some nodes in the drawing get filled in; others are left plain because no chain of references leads to them.\n- **3. Sweep** — **remove all unmarked objects**. Anything the walk never reached is by definition unreachable by your code, so its memory is reclaimed.\n\nThe starred takeaway: **unreachable objects are cleaned up and memory is freed!** Note what the algorithm does *not* ask — it never asks whether you are finished with an object, only whether it can still be reached. Reachability is the entire criterion, which is why leaks are always about stray references.",
      },
      {
        h: "4. Example — watching an object become unreachable",
        p: "The page walks one object to its death, with a diagram tracking the arrows at each stage.\n\n`let user = { name: 'Ali' };` then `let data = user;` — the diagram now shows **two** variables, `user` and `data`, both with arrows pointing to the same **obj** in the heap. One object, two references.\n\n`user = null; // original reference gone` — the `user` arrow is cut, drawn as a crossed-out link. But the comment says it plainly: **the object is still reachable via `data`**, whose arrow remains. Nothing is collected. This is the whole lesson: one surviving reference is enough to keep an object alive.\n\n`data = null; // now object is unreachable` — the last arrow is gone. The final panel shows `user` → null and `data` → null with the object drawn in a dashed box marked with an ✕. **GC will remove it from memory.**",
        code: "let user = { name: 'Ali' };\nlet data = user;\n\nuser = null;   // original reference gone\n// but object is still reachable via 'data'\n\ndata = null;   // now object is unreachable\n// GC will remove it from memory",
      },
      {
        h: "5. Common Memory Leaks",
        p: "Five ways to accidentally keep things reachable — each is a reference you forgot you were holding:\n\n- **Global variables** (accidentally creating globals). Globals are the GC root, so anything hanging off one is permanently reachable and can never be collected.\n- **Unremoved event listeners.** A listener keeps its callback alive, and the callback's closure keeps its captured variables alive.\n- **Closures holding onto unused data.** A closure retains its whole enclosing scope; one small function can pin a large object.\n- **Timers / intervals not cleared.** An `setInterval` runs forever and holds its callback forever unless cleared.\n- **Detached DOM elements.** You removed the node from the page, but a JS variable still points at it — off-screen and unreachable to the user, still perfectly reachable to the collector.\n\nA little ghost cartoon delivers the definition: **leaks keep memory alive that you no longer need!**",
      },
      {
        h: "6. Best Practices",
        p: "Six ticked rules, and each one is the direct antidote to a leak above:\n\n- **Declare variables with `let` and `const`** — block-scoped declarations die at the end of their block and prevent accidental globals.\n- **Remove event listeners when not needed.**\n- **Clear timers / intervals.**\n- **Avoid unnecessary globals** — a global is a permanent root.\n- **Nullify references when done (if needed)** — the deliberate `= null` from the example, for the cases where a reference would otherwise outlive its use.\n- **Keep closures small and intentional** — capture what you need, not everything in reach.",
      },
      {
        h: "Key Takeaway",
        p: "The page's target-marked closing panel: **JavaScript automatically manages memory using Garbage Collection. Write clean code, avoid leaks, and let the engine handle the rest!**\n\nWhich is the honest division of labour. The engine owns the *when* and the *how* of freeing memory — you cannot and need not schedule it. You own the *whether*, because only your references decide what remains reachable. Write code that lets go of things and the collector does the rest.",
      },
    ],
    snippets: [
      {
        label: "STACK vs HEAP",
        code: "        STACK                          HEAP\n +-------------------+         +----------------------+\n | primitives &      | Reference| objects, arrays,     |\n | function calls    | -------->| functions (ref types)|\n |                   |         |                      |\n | let x = 10;       |         | let obj = {a: 1};    |\n | let name = 'Ali'; |         | let arr = [1,2,3];   |\n |                   |         | let fn = function(){};|\n | [ ][ ][ ]         |         |  []--[]--[]  (graph) |\n +-------------------+         +----------------------+",
        note: "The stack holds the **reference**; the object itself lives in the heap.",
      },
      {
        label: "MARK & SWEEP",
        code: "1. Mark              2. Mark Reachable        3. Sweep\n   Start from the       Mark all reachable       Remove all\n   root (global)        objects                  unmarked objects\n\n      (root)               (root)                   (root)\n       / \\                  / \\                      / \\\n      o   o                *   *                    *   *\n     /                    /         o  <- unmarked  /\n    o                    *                         *",
        note: "Reachability is the only criterion — unreachable objects are cleaned up and memory is freed.",
      },
      {
        label: "OBJECT BECOMING UNREACHABLE",
        code: "let user = { name: 'Ali' };\nlet data = user;\n\nuser = null;   // original reference gone\n// but object is still reachable via 'data'\n\ndata = null;   // now object is unreachable\n// GC will remove it from memory",
        note: "One surviving reference is enough to keep an object alive.",
      },
      {
        label: "REFERENCE DIAGRAM",
        code: "let data = user;      user ---+\n                              +--> [ obj ]\n                      data ---+\n\nuser = null;          user --X\n                              +--> [ obj ]\n                      data ---+\n\ndata = null;          user --> null\n                      data --> null      [ obj ]  <- X (collected)",
        note: "The heap object dies only when the **last** arrow pointing at it is cut.",
      },
    ],
  },
  {
    day: 19,
    group: 'engine',
    title: 'Prototype & Prototype Chain',
    tagline: 'The mechanism behind inheritance in JavaScript.',
    image: '/javascript-notes/ep19-prototype-chain.jpeg',
    tags: ['Prototype', 'Inheritance', 'Object.create'],
    notes: [
      { k: 'What it is', v: 'Every JavaScript object has a hidden property `[[Prototype]]` (accessible as `__proto__`) referencing another object — its prototype.' },
      { k: 'How lookup works', v: 'If a property or method is not found on the object, JavaScript looks for it on its prototype, then that object’s prototype, and so on.' },
      { k: 'The chain', v: 'user → person → Object.prototype → null. The chain ends at Object.prototype, whose prototype is null.' },
      { k: 'Object.create()', v: 'Links an object to a prototype explicitly — `Object.create(person)` makes person the new object’s prototype.' },
      { k: 'Why it matters', v: 'Instead of copying properties onto every object, objects access them through the chain. That makes JavaScript inheritance memory-friendly and efficient.' },
    ],
    theory: [
      {
        h: "Prototype & Prototype Chain — the mechanism behind inheritance",
        p: "This episode is about the machinery that makes inheritance work in JavaScript. JavaScript does not have classical inheritance the way languages like Java do; instead every object is linked to another object, and that link is what lets one object use properties and methods it never defined itself. The chain of those links is called the **prototype chain**, and it is the single mechanism behind all inheritance in the language.",
      },
      {
        h: "1. What is a prototype?",
        p: "Every JavaScript object has a hidden internal property called `[[Prototype]]` (exposed in older code and in devtools as `__proto__`). This hidden property is not a copy of anything — it is a **reference to another object**. That referenced object is called the object's **prototype**.\n\nThe reason prototypes exist is inheritance: prototypes allow objects to inherit properties and methods from other objects. Instead of every object carrying its own copy of every method, an object can simply point at a prototype that already has them and borrow them through the link.",
      },
      {
        h: "2. How it works",
        p: "The page shows this as two boxes connected by an arrow. On the left is an **object (child)** with `name: \"Ali\"`. An arrow labelled `[[Prototype]]` points from it to the right-hand box, the **prototype (parent)**, which holds a method:\n\n- child object: `{ name: \"Ali\" }` — has a `[[Prototype]]` link\n- parent/prototype object: `{ greet() { console.log(\"Hi\"); } }`\n\nThe rule that makes this useful: if a property or method is **not found in the object itself**, JavaScript does not give up and return `undefined` immediately — it follows the `[[Prototype]]` link and looks for it **in its prototype**. So the child can call `greet()` even though `greet` lives on the parent.",
      },
      {
        h: "3. Example",
        p: "The example builds a `person` object with a `name`, attaches a `greet` function to it, and then creates `user` with `Object.create(person)`. `Object.create(person)` makes a brand-new empty object whose `[[Prototype]]` points at `person`. Only `age: 20` is set directly on `user`.\n\nThe diagram beside the code shows three linked boxes:\n\n- **user** — has `age: 20` and a `[[Prototype]]` arrow pointing down to `person`\n- **person** — has `name: \"Ali\"`, `greet: function()` and a `[[Prototype]]` arrow pointing to `Object.prototype`\n- **Object.prototype** — has `toString()`, `valueOf()`, `...` and a `[[Prototype]]` that points to `null`\n\nThe note in the cloud sums it up: *user doesn't have `name` or `greet`. JS finds them in `person` (its prototype).* That is why `user.name` prints `Ali` and `user.greet()` prints `Hi, I'm Ali`.",
        code: "const person = {\n  name: \"Ali\"\n};\n\nperson.greet = function() {\n  console.log(\"Hi, I'm Ali\");\n};\n\nconst user = Object.create(person);\nuser.age = 20;\n\nconsole.log(user.name);  // Ali\nuser.greet();            // Hi, I'm Ali",
      },
      {
        h: "4. The prototype chain",
        p: "JavaScript looks up properties in a **chain of prototypes until it finds them**. The lookup is not a single hop — it keeps walking the `[[Prototype]]` links one level at a time.\n\nThe chain drawn on the page for the example is:\n\n- `user` → `person` → `Object.prototype` → `null` *(end of chain)*\n\nWhen you ask for `user.name`, JS checks `user` (not there), then `person` (found — stop). If it had asked for something like `toString`, it would have checked `user`, then `person`, then found it on `Object.prototype`. If nothing anywhere in the chain has it, the walk reaches `null`, the chain ends, and the result is `undefined`.",
      },
      {
        h: "5. Key takeaways",
        p: "- Every object has a prototype (**except `null`**).\n- Prototypes enable inheritance.\n- JS uses the prototype chain to look up properties and methods.\n- `Object.create()` links an object to a prototype.\n- The chain ends at `Object.prototype`, whose prototype is `null`.",
      },
      {
        h: "Closing thought",
        p: "Prototypes are the backbone of JavaScript's inheritance model. **Instead of copying properties, objects can access them from their prototypes through the prototype chain.** This makes JS powerful, efficient and memory-friendly — a thousand objects sharing one prototype means one copy of each method in memory, not a thousand.",
      },
    ],
    snippets: [
      {
        label: "PROTOTYPE VIA Object.create()",
        code: "const person = {\n  name: \"Ali\"\n};\n\nperson.greet = function() {\n  console.log(\"Hi, I'm Ali\");\n};\n\nconst user = Object.create(person);\nuser.age = 20;\n\nconsole.log(user.name);  // Ali\nuser.greet();            // Hi, I'm Ali",
        note: "`user` owns only `age`; `name` and `greet` are found on its prototype `person`.",
      },
      {
        label: "OBJECT → PROTOTYPE LINK",
        code: "object (child)            prototype (parent)\n+---------------+         +----------------------+\n| name: \"Ali\"   |--[[Prototype]]-->| greet() {    |\n|               |         |   console.log(\"Hi\"); |\n+---------------+         | }                    |\n                          +----------------------+",
        note: "If a property isn't found on the object, JS looks for it in its prototype.",
      },
      {
        label: "THE PROTOTYPE CHAIN (ASCII)",
        code: "user  -->  person  -->  Object.prototype  -->  null\n(age)      (name,        (toString,           (end of\n            greet)         valueOf, ...)        chain)",
        note: "JS walks each link in order until the property is found, or until it hits `null`.",
      },
    ],
  },
  {
    day: 20,
    group: 'engine',
    title: 'Hoisting',
    tagline: 'Moving declarations to the top before code execution.',
    image: '/javascript-notes/ep20-hoisting.jpeg',
    tags: ['Hoisting', 'TDZ', 'var'],
    notes: [
      { k: 'What it is', v: 'During the creation phase of the execution context, JavaScript moves all declarations to the top of their scope. Only declarations are hoisted — not initializations.' },
      { k: 'var hoisting', v: 'var declarations are hoisted AND initialized as undefined, so reading one before its assignment gives undefined rather than an error.' },
      { k: 'let & const', v: 'Also hoisted, but not initialized. They sit in the Temporal Dead Zone until their declaration line, and accessing them there throws a ReferenceError.' },
      { k: 'Function declarations', v: 'Hoisted with their entire body — you can call `sayHi()` before you write it.' },
      { k: 'Function expressions', v: 'Only the variable is hoisted, not the function. Calling it early gives "TypeError: sayHi is not a function".' },
      { k: 'The takeaway', v: 'Hoisting is not magic. It is JavaScript preparing the stage before the show begins.' },
    ],
    theory: [
      {
        h: "Hoisting — moving declarations to the top before code execution",
        p: "The sticky-note definition on the page: **Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution.** It is not something you switch on; it is simply how the engine prepares your code before running a single line of it.",
      },
      {
        h: "1. What is hoisting?",
        p: "During the **creation phase of the Execution Context**, JavaScript scans your code and moves all **declarations** to the top of their scope. This happens before any statement actually executes, which is why you can reference some names before the line that declares them.\n\nThe crucial caveat, highlighted in the tip box: **only declarations are hoisted, not initializations or assignments.** The name is registered early; the value you assign to it is not. That single distinction explains almost every surprising hoisting result.",
      },
      {
        h: "2. Types of hoisting",
        p: "The page splits hoisting into two boxes.\n\n**Variable hoisting** — `var` variables are hoisted **and initialized as `undefined`**. So reading one before its line gives you `undefined` rather than an error:\n\n- `console.log(a);` → `undefined`\n- `var a = 10;`\n\n**Function hoisting** — function declarations are hoisted **with their entire function body**. The whole function is available before its definition line, so calling it early works perfectly:\n\n- `sayHi();` → `Hi!`\n- `function sayHi() { console.log(\"Hi!\"); }`",
      },
      {
        h: "3. var hoisting",
        p: "The example shows the classic pattern: logging `a` before the `var a = 10;` line prints `undefined`, and logging it after prints `10`. The side note explains why: the **declaration is hoisted to the top and initialized as `undefined`** — the assignment stays where you wrote it.\n\nThe \"How JS sees it\" box rewrites the code the way the engine effectively treats it, with `var a;` lifted to the top and `a = 10;` left in place. Once you mentally apply this rewrite, `var` hoisting stops being mysterious.",
        code: "console.log(a);  // undefined\nvar a = 10;\nconsole.log(a);  // 10\n\n// How JS sees it:\nvar a;           // hoisted\nconsole.log(a);  // undefined\na = 10;\nconsole.log(a);  // 10",
      },
      {
        h: "4. let & const hoisting (TDZ)",
        p: "`let` and `const` **are hoisted but not initialized**. The binding exists from the start of the scope, but it holds no value and cannot be touched. It stays in the **Temporal Dead Zone (TDZ)** until the actual declaration line runs.\n\nSo this throws instead of printing `undefined`:\n\n- `console.log(b);` → **ReferenceError**\n- `let b = 20;`\n\nThe warning box defines the TDZ precisely: **the time between hoisting and initialization, where the variable exists but cannot be used.** This is a deliberate design choice — it turns a silent `undefined` bug into a loud error.",
      },
      {
        h: "5. Function expressions",
        p: "Function expressions are the trap. Writing `var sayHi = function() {...}` and calling `sayHi()` above it gives **TypeError: sayHi is not a function** — not a ReferenceError.\n\nThe \"How JS sees it\" box explains why: `var sayHi;` is hoisted and initialized as `undefined`, then `sayHi();` runs while the value is still `undefined`, and you cannot call `undefined`. The assignment `sayHi = function() {...}` only happens later. The note nails it: **only the variable declaration is hoisted, not the function expression.**",
      },
      {
        h: "6. Hoisting in action",
        p: "One combined example shows all three behaviors side by side:\n\n- `console.log(x);` → `undefined` — **`var x` is hoisted and initialized as `undefined`**\n- `console.log(y);` → **ReferenceError** — **`let y` is hoisted but not initialized (TDZ)**\n- `console.log(add);` → `[Function: add]` — **the function declaration is hoisted with its entire body**\n\n...and only afterwards come `var x = 5;`, `let y = 10;` and `function add(a, b) { return a + b; }`. Same file, same hoisting pass, three completely different outcomes depending on the declaration keyword.",
      },
      {
        h: "7. Key takeaways",
        p: "- Hoisting happens in the **creation phase** of the Execution Context.\n- `var` declarations are hoisted and initialized as `undefined`.\n- `let` and `const` are hoisted but stay in the **TDZ**.\n- Function declarations are **fully** hoisted.\n- Function expressions are **not** hoisted — only the variable is.\n\nThe closing line: **Hoisting is not magic. It's just JavaScript preparing the stage before the show begins.**",
      },
    ],
    snippets: [
      {
        label: "VAR HOISTING",
        code: "console.log(a);  // undefined\nvar a = 10;\nconsole.log(a);  // 10",
        note: "Declaration is hoisted to the top and initialized as `undefined`.",
      },
      {
        label: "HOW JS SEES VAR",
        code: "var a;           // hoisted\nconsole.log(a);  // undefined\na = 10;\nconsole.log(a);  // 10",
      },
      {
        label: "FUNCTION DECLARATION HOISTING",
        code: "sayHi();  // Hi!\nfunction sayHi() {\n  console.log(\"Hi!\");\n}",
        note: "Function declarations are hoisted **with their entire body**.",
      },
      {
        label: "LET / CONST — TDZ",
        code: "console.log(b);  // ReferenceError\nlet b = 20;",
        note: "Hoisted but **not initialized** — it lives in the Temporal Dead Zone.",
      },
      {
        label: "FUNCTION EXPRESSION TRAP",
        code: "sayHi();  // TypeError: sayHi is not a function\nvar sayHi = function() {\n  console.log(\"Hi!\");\n};",
        note: "Only the variable is hoisted, so `sayHi` is `undefined` when called.",
      },
      {
        label: "HOW JS SEES A FUNCTION EXPRESSION",
        code: "var sayHi;       // hoisted (undefined)\nsayHi();         // TypeError\nsayHi = function() {\n  console.log(\"Hi!\");\n};",
      },
      {
        label: "HOISTING IN ACTION — ALL THREE",
        code: "console.log(x);    // undefined\nconsole.log(y);    // ReferenceError\nconsole.log(add);  // [Function: add]\n\nvar x = 5;\nlet y = 10;\n\nfunction add(a, b) {\n  return a + b;\n}",
        note: "`var` → `undefined`, `let` → TDZ error, function declaration → fully available.",
      },
    ],
  },
  {
    day: 21,
    group: 'engine',
    title: 'Call Stack',
    tagline: 'The structure that tracks function calls (LIFO).',
    image: '/javascript-notes/ep21-call-stack.jpeg',
    tags: ['Call stack', 'LIFO', 'Stack overflow'],
    notes: [
      { k: 'What it is', v: 'A data structure following Last In, First Out. It keeps track of where you are in the program.' },
      { k: 'Push & pop', v: 'The global context is pushed first. Each function call is pushed on top; when it finishes it is popped off.' },
      { k: 'Walkthrough', v: 'first() calls second() calls third(). The stack grows to [global, first, second, third], then unwinds in reverse as each returns.' },
      { k: 'Single-threaded', v: 'JavaScript has one call stack, so only one function runs at a time.' },
      { k: 'Stack traces', v: 'When an error occurs, the stack trace shows the order of the function calls that led there — which is why it is so useful for debugging.' },
      { k: 'Stack overflow', v: 'Infinite recursion keeps pushing frames until the stack size limit is reached: "RangeError: Maximum call stack size exceeded".' },
    ],
    theory: [
      {
        h: "Call Stack — the structure that keeps track of function calls",
        p: "The Call Stack is the structure that keeps track of function calls in JavaScript. The illustration on the page is a stack of books labelled **Last In / Last In / First Out — (LIFO)**: the last book you put on the pile is the first one you take off.",
      },
      {
        h: "1. What is the call stack?",
        p: "The Call Stack is a **data structure that follows LIFO (Last In, First Out)**. It keeps track of **where we are in the program** — which function is currently running, and which function it must return to when it finishes.\n\nThe rule in one sentence, from the tip box: **whenever a function is called, it is pushed onto the stack; when it finishes, it is popped off.** Everything else about the call stack follows from those two operations.",
      },
      {
        h: "2. How it works",
        p: "The page walks through four frames, with an arrow underneath reading **Push →** on the left and **← Pop** on the right:\n\n- **1. Global Execution** — the Global context is pushed onto the stack. The stack is just `Global` and TOP points at it.\n- **2. Function Call** — when a function is called, it is pushed on top. Stack (top first): `foo()`, `Global`. TOP now points at `foo()`.\n- **3. Another Call** — another function call is pushed on top. Stack: `bar()`, `foo()`, `Global`. TOP points at `bar()`.\n- **4. Function Returns** — when a function finishes, it is popped off. `bar()` is gone; stack is back to `foo()`, `Global` with TOP at `foo()`.\n\nSo the stack grows upward on every call and shrinks from the top on every return.",
      },
      {
        h: "3. Example — step by step execution",
        p: "The code defines `first()` which calls `second()`, `second()` which calls `third()`, and `third()` which logs `\"Hello!\"`. Then `first();` starts execution.\n\nThe six drawn steps:\n\n- **1. `first()` is called** — stack: `first()`, `Global`. TOP → `first()`.\n- **2. `second()` is called** — stack: `second()`, `first()`, `Global`. TOP → `second()`.\n- **3. `third()` is called** — stack: `third()`, `second()`, `first()`, `Global`. TOP → `third()`. This is where `\"Hello!\"` gets logged.\n- **4. `third()` finishes (popped)** — stack: `second()`, `first()`, `Global`. TOP → `second()`.\n- **5. `second()` finishes (popped)** — stack: `first()`, `Global`. TOP → `first()`.\n- **6. `first()` finishes (popped)** — stack: `Global` only. TOP → `Global`. **Now only the Global context remains.**\n\nThe side note adds: **the Call Stack is empty when the Global context is popped.**",
      },
      {
        h: "4. Key points",
        p: "- JavaScript is **single-threaded**, which means it has **one Call Stack**.\n- **Only one function runs at a time.**\n- If an error occurs, the **stack trace** shows the order of function calls — this is exactly why stack traces read from the innermost call outward.\n- **Infinite recursion can overflow the stack** and cause an error.",
      },
      {
        h: "5. Stack overflow (example)",
        p: "A function `loop()` that calls itself with no base case demonstrates the failure mode. Calling `loop();` **will keep pushing `loop()` onto the stack until the stack size limit is reached.**\n\nThe result is `RangeError: Maximum call stack size exceeded` — a **Stack Overflow!** The stack has finite space, and recursion without a return condition consumes it frame by frame until nothing is left.",
        code: "function loop() {\n  loop();  // calling itself\n}\n\nloop();\n// RangeError: Maximum call stack size exceeded",
      },
      {
        h: "6. Key takeaways",
        p: "- The Call Stack tracks function calls.\n- It follows **LIFO (Last In, First Out)**.\n- Functions are **pushed** when called and **popped** when they return.\n- Only one function executes at a time.\n- Stack trace helps in debugging.\n- Too many calls without returning can cause a stack overflow.\n\nThe closing line: **The Call Stack keeps JavaScript organized, one call at a time.**",
      },
    ],
    snippets: [
      {
        label: "NESTED CALLS EXAMPLE",
        code: "function first() {\n  second();\n}\n\nfunction second() {\n  third();\n}\n\nfunction third() {\n  console.log(\"Hello!\");\n}\n\nfirst();  // Execution starts here",
      },
      {
        label: "CALL STACK — PUSH & POP (ASCII)",
        code: "1. first()      2. second()     3. third()      4. pop third()  5. pop second() 6. pop first()\n                                +----------+\n                +----------+    | third()  |<-TOP\n +---------+    | second() |    | second() |    +----------+\n | first() |<-  | first()  |    | first()  |    | second() |<-  +---------+\n | Global  |TOP | Global   |    | Global   |    | first()  |    | first() |<-TOP  +--------+\n +---------+    +----------+    +----------+    | Global   |    | Global  |       | Global |<-TOP\n                                                +----------+    +---------+       +--------+\n\n        Push  ------------------->        <-------------------  Pop",
        note: "The stack grows on every call and unwinds from the top on every return.",
      },
      {
        label: "STACK OVERFLOW",
        code: "function loop() {\n  loop();  // calling itself\n}\n\nloop();",
        note: "Keeps pushing until the limit → `RangeError: Maximum call stack size exceeded`.",
      },
    ],
  },
  {
    day: 22,
    group: 'engine',
    title: 'Lexical Environment & Scope Chain',
    tagline: 'How JavaScript finds variables.',
    image: '/javascript-notes/ep22-lexical-environment-scope-chain.jpeg',
    tags: ['Lexical scope', 'Scope chain', 'Closures'],
    notes: [
      { k: 'What it is', v: 'A Lexical Environment is a data structure holding identifier-variable mappings plus a reference to its outer (parent) environment. It is created when a function is called and destroyed when it finishes.' },
      { k: 'Two components', v: 'The Environment Record (where the variables actually live) and the Outer Reference (a pointer to the parent environment).' },
      { k: 'The scope chain', v: 'Looking up a variable, JS searches the current environment, then the outer one, and keeps going until it finds it or reaches global. That path is the scope chain.' },
      { k: 'Not found', v: 'If it is in no environment along the chain, JavaScript throws a ReferenceError.' },
      { k: 'Lexical vs dynamic', v: 'JavaScript uses lexical scope — determined by WHERE you write the code, not where it is called from. That is more predictable and easier to optimize.' },
      { k: 'Why it matters', v: 'This is the mechanism closures are built on — functions "remember" their lexical environment.' },
    ],
    theory: [
      {
        h: "Lexical Environment & Scope Chain — how JavaScript finds variables",
        p: "The sticky note frames the whole episode: **JavaScript uses Lexical Scoping — which means scope is determined by where something is *written*, not where it is *executed*.** This episode explains the data structures behind that rule and how variable lookup actually travels through them.",
      },
      {
        h: "1. What is a lexical environment?",
        p: "A **Lexical Environment** is a data structure that holds **identifier-variable mappings** and a **reference to its outer (parent) lexical environment**. In other words: a place to store the names declared right here, plus a pointer to where to look next if a name isn't here.\n\nThe tip box adds the lifetime rule: **it is created whenever a function is called and is destroyed when the function finishes execution.** Every invocation gets a fresh environment — which is why two calls to the same function never share local variables.",
      },
      {
        h: "2. Components of a lexical environment",
        p: "A Lexical Environment has exactly two parts.\n\n- **Environment Record** — holds variable and function declarations and their values. This is **where variables live**. Example: `name = \"Ali\"`, `let age = 20`.\n- **Outer Lexical Environment Reference** — a reference to the parent lexical environment. It **points to the outer environment (parent)**. Example: `<ref to outer>`.\n\nThat's it. One box of names-and-values, one arrow to the enclosing box. Every scope in JavaScript is built from this pair.",
      },
      {
        h: "3. How the scope chain works",
        p: "When JavaScript looks for a variable, it searches the **current** lexical environment first. If it is not found, it moves to the **outer** environment. This continues until the variable is found or the **global scope** is reached.\n\nThe diagram stacks the environments:\n\n- **Global Lexical Environment** (outer most)\n- **Function Lexical Environment** (outer)\n- **Block / Function Lexical Environment** (inner)\n- → and the outer reference of the global environment points to **`null`**\n\nThis chain of environments is called the **SCOPE CHAIN**. Lookup only ever walks outward — never inward, never sideways.",
      },
      {
        h: "4. Example",
        p: "The code nests three levels: a global `const a = \"Global\"`, a function `outer()` with `const b = \"Outer\"`, and inside it `inner()` with `const c = \"Inner\"`. `inner()` logs all three and gets `Global`, `Outer`, `Inner`.\n\nThe note explains `inner()` tries to find variables in this order:\n\n- 1. its own env (`c`)\n- 2. outer env (`b`)\n- 3. global env (`a`)\n- 4. `null`\n\nThe **scope chain visualization (when `inner()` runs)** shows three boxes left to right, each with an Env Record and an Outer Reference:\n\n- **Inner Lexical Env** — Env Record: `c = \"Inner\"`; Outer Reference → points to outer\n- **Outer Lexical Env** — Env Record: `b = \"Outer\"`; Outer Reference → points to global\n- **Global Lexical Env** — Env Record: `a = \"Global\"`; Outer Reference → `null`\n\nAnd the warning: **if not found in any environment, JavaScript returns a ReferenceError.**",
        code: "const a = \"Global\";\n\nfunction outer() {\n  const b = \"Outer\";\n\n  function inner() {\n    const c = \"Inner\";\n    console.log(a);  // Global\n    console.log(b);  // Outer\n    console.log(c);  // Inner\n  }\n  inner();\n}\nouter();",
      },
      {
        h: "5. Lexical scope vs dynamic scope",
        p: "**Lexical Scope (JavaScript):**\n\n- Determined at the time of **writing** code.\n- Based on **where a function is defined**.\n- More predictable and easier to optimize.\n\n**Dynamic Scope (other languages):**\n\n- Determined at the time of **function call**.\n- Based on **the call stack**.\n- Harder to predict and reason about.\n\nThe starred note: **JavaScript uses Lexical Scope. That's why `inner()` can access outer variables even if it is called from somewhere else!** The environment chain is fixed by the source code layout, not by who calls whom at runtime.",
      },
      {
        h: "6. Key takeaways",
        p: "- A Lexical Environment stores variables and a reference to its outer environment.\n- The **Scope Chain** is the path JS follows to find variables.\n- JS uses **Lexical Scope** (where defined).\n- Environment is created at function call and destroyed when the function finishes.\n- **Closures work because functions \"remember\" their lexical environment.**\n\nThe closing line: **Understanding Lexical Environment is the key to understanding closures, scope, and hoisting deeply.**",
      },
    ],
    snippets: [
      {
        label: "NESTED SCOPE EXAMPLE",
        code: "const a = \"Global\";\n\nfunction outer() {\n  const b = \"Outer\";\n\n  function inner() {\n    const c = \"Inner\";\n    console.log(a);  // Global\n    console.log(b);  // Outer\n    console.log(c);  // Inner\n  }\n  inner();\n}\nouter();",
        note: "`inner()` searches its own env (`c`), then outer (`b`), then global (`a`), then `null`.",
      },
      {
        label: "COMPONENTS OF A LEXICAL ENVIRONMENT",
        code: "Lexical Environment\n+------------------------------------+\n| Environment Record                 |  <- where variables live\n|   name = \"Ali\", let age = 20       |     (declarations + values)\n+------------------------------------+\n| Outer Lexical Environment Ref      |  <- points to the parent\n|   <ref to outer>                   |\n+------------------------------------+",
      },
      {
        label: "SCOPE CHAIN WHEN inner() RUNS",
        code: "Inner Lexical Env      Outer Lexical Env      Global Lexical Env\n+---------------+      +---------------+      +----------------+\n| Env Record    |      | Env Record    |      | Env Record     |\n|  c = \"Inner\"  |      |  b = \"Outer\"  |      |  a = \"Global\"  |\n+---------------+      +---------------+      +----------------+\n| Outer Ref     |----->| Outer Ref     |----->| Outer Ref      |----> null\n+---------------+      +---------------+      +----------------+",
        note: "If not found in any environment, JavaScript throws a **ReferenceError**.",
      },
    ],
  },
  {
    day: 23,
    group: 'engine',
    title: 'Temporal Dead Zone (TDZ)',
    tagline: 'The hidden time between entering scope and initializing a variable.',
    image: '/javascript-notes/ep23-temporal-dead-zone.jpeg',
    tags: ['TDZ', 'let/const', 'ReferenceError'],
    notes: [
      { k: 'What it is', v: 'The period from the start of a scope until a let/const variable is initialized. During it the variable exists but cannot be accessed.' },
      { k: 'let and const only', v: 'The TDZ does not apply to var, which is initialized as undefined when hoisted.' },
      { k: 'Where it happens', v: 'In every block scope `{}` and function scope, for every let and const.' },
      { k: 'What you get', v: 'Accessing a variable in its TDZ throws "ReferenceError: Cannot access \'a\' before initialization" — a real error, not undefined.' },
      { k: 'The comparison', v: 'let/const: hoisted, not initialized, TDZ, ReferenceError before declaration. var: hoisted, initialized undefined, no TDZ, undefined before declaration.' },
      { k: 'Why it is good', v: 'TDZ catches bugs early and makes JavaScript more predictable — it is the language saying "you cannot use it until it is ready".' },
    ],
    theory: [
      {
        h: "Temporal Dead Zone (TDZ)",
        p: "The subtitle: **the hidden time between entering scope and initializing a variable.** The page even draws a gravestone reading *RIP — Access Before Initialization*. That is the whole episode in one image: there is a window in which a `let`/`const` variable exists but touching it is fatal.",
      },
      {
        h: "1. What is TDZ?",
        p: "The **Temporal Dead Zone (TDZ)** is the period from the **start of a scope** until a variable is **initialized** (declared with `let` or `const`). During this time, the variable **exists but cannot be accessed**.\n\nThat wording matters: the variable is not missing, and it is not `undefined` — it is present in the environment record but marked uninitialized, so the engine refuses to read it. The tip box narrows the scope of the rule: **it only applies to `let` and `const`, not `var`.**",
      },
      {
        h: "2. When does TDZ happen?",
        p: "TDZ happens in **every block scope `{}` and function scope** for `let` and `const`. It's not a special case — every such declaration creates one.\n\nThe timeline drawn on the page runs left to right:\n\n- **Scope Start** — the TDZ begins here\n- **TDZ** — the shaded middle stretch, marked *(cannot access here)*\n- **Initialization (Declaration)** — the moment the `let x = ...` line runs; the TDZ ends\n- **Safe to use** — everything after that point\n\nThe warning box: **accessing a variable in the TDZ throws a ReferenceError** — specifically `ReferenceError: Cannot access 'a' before initialization`.",
      },
      {
        h: "3. Example",
        p: "Two blocks show the same behavior at two scope levels. At the top level, `console.log(a)` before `let a = 10` throws a **ReferenceError**, while the log after the initialization prints `10`. Inside a `{ }` block, `console.log(b)` before `const b = 20` throws too, and after initialization it prints `20`.\n\n**What's happening?**\n\n- At the start of the scope, `a` and `b` **exist in memory but are uninitialized**.\n- Any access **before** initialization is in the TDZ.\n- **After** initialization, they can be used safely.\n\nThe **Memory Timeline (for `a`)** on the right shows four stages stacked vertically:\n\n- **Scope Start**\n- **In TDZ (uninitialized)** — *cannot access `a`*\n- **Initialization** — `let a = 10`\n- **Safe to use** — `a = 10` ✓",
      },
      {
        h: "4. TDZ vs var hoisting",
        p: "**`let` / `const`:**\n\n- Hoisted but **not** initialized.\n- In TDZ until the declaration line.\n- Access before init → **ReferenceError**.\n\n**`var`:**\n\n- Hoisted **and** initialized as `undefined`.\n- Can be accessed before declaration.\n- **No TDZ.**\n\nThe comparison table on the page reads:\n\n- **Hoisted?** — `let`/`const`: ✓ · `var`: ✓\n- **Initialized?** — `let`/`const`: No · `var`: Yes (`undefined`)\n- **TDZ?** — `let`/`const`: Yes · `var`: No\n- **Access before declaration?** — `let`/`const`: `ReferenceError` · `var`: `undefined`\n\nSo both are hoisted — the difference is purely whether hoisting also initializes.",
        code: "let x = 5;\nconsole.log(x);  // ReferenceError\nlet x = 5;\n\nvar y = 5;\nconsole.log(y);  // undefined\nvar y = 5;",
      },
      {
        h: "5. Real world example",
        p: "Inside `demo()`, `console.log(msg)` throws a **ReferenceError** even though `let msg = \"Hello!\"` appears further down — inside an `if (true) { }` block, where it is *TDZ until here*.\n\nThe starred note explains: **even though the block runs, trying to access `msg` before it is initialized causes an error because it's in the TDZ.** The block executing is not the same thing as the declaration line having run.",
        code: "function demo() {\n  console.log(msg);        // ReferenceError\n  if (true) {\n    let msg = \"Hello!\";    // TDZ until here\n  }\n}\ndemo();",
      },
      {
        h: "6. Key takeaways",
        p: "- TDZ exists **for `let` and `const`** (not for `var`).\n- A variable cannot be accessed before initialization.\n- TDZ starts at the beginning of the scope and ends at the declaration.\n- Accessing during TDZ throws **ReferenceError**.\n- TDZ helps catch bugs early and makes JS more predictable.\n\nThe closing line: **TDZ is JavaScript's way of saying: \"You can't use it... until it's ready!\"**",
      },
    ],
    snippets: [
      {
        label: "TDZ AT TOP LEVEL AND IN A BLOCK",
        code: "console.log(a);      // ReferenceError\nlet a = 10;          // Initialization\nconsole.log(a);      // 10\n\n{\n  console.log(b);    // ReferenceError\n  const b = 20;      // Initialization\n  console.log(b);    // 20\n}",
      },
      {
        label: "TDZ TIMELINE (ASCII)",
        code: "Scope Start            Initialization (Declaration)\n    |========== TDZ ==========|-------- Safe to use -------->\n    |   (cannot access here)  |\n\nReferenceError: Cannot access 'a' before initialization",
        note: "The TDZ runs from the start of the scope to the declaration line.",
      },
      {
        label: "let/const VS var",
        code: "let x = 5;\nconsole.log(x);  // ReferenceError\nlet x = 5;\n\nvar y = 5;\nconsole.log(y);  // undefined\nvar y = 5;",
        note: "Both are hoisted; only `var` is also **initialized** (as `undefined`).",
      },
      {
        label: "REAL WORLD TDZ",
        code: "function demo() {\n  console.log(msg);        // ReferenceError\n  if (true) {\n    let msg = \"Hello!\";    // TDZ until here\n  }\n}\ndemo();",
        note: "The block running doesn't help — `msg` is in the TDZ until its own line executes.",
      },
    ],
  },
  {
    day: 24,
    group: 'browser',
    title: 'Event Delegation',
    tagline: 'Handle events efficiently using bubbling to your advantage.',
    image: '/javascript-notes/ep24-event-delegation.jpeg',
    tags: ['Events', 'Bubbling', 'Performance'],
    notes: [
      { k: 'What it is', v: 'Attach a single listener to a parent element and handle events fired on its children, using event bubbling.' },
      { k: 'How bubbling works', v: 'An event starts on the target `<li>`, bubbles to `<ul>`, then `<div>`, then document. Delegation relies on this behaviour.' },
      { k: 'Without delegation', v: 'You loop over every `<li>` and attach a listener to each — one listener per element, and it does not scale.' },
      { k: 'With delegation', v: 'One listener on the parent, then check `e.target.tagName === "LI"` to find the element that was actually clicked.' },
      { k: 'The killer feature', v: 'It works for elements added later. A new `<li>` inserted after the listener was attached is still handled — no re-attaching needed.' },
      { k: 'Benefits', v: 'Fewer listeners, better performance, less memory, cleaner code. Delegate once, handle many.' },
    ],
    theory: [
      {
        h: "Event Delegation — handle events efficiently using bubbling to our advantage",
        p: "The sticky note states the core idea: **instead of attaching an event listener to every child node, attach it to their common parent!** The rest of the page explains why this works (bubbling), how to write it (`e.target`), and what you gain (performance, dynamic elements, cleaner code).",
      },
      {
        h: "1. What is event delegation?",
        p: "**Event Delegation is a technique where we attach a single event listener to a parent element, and handle events triggered on its child elements using event bubbling.**\n\nThe tip box gives the mechanism: **events bubble up from the target element to its ancestors. Delegation uses this behavior to manage events efficiently.** You are not intercepting anything clever — you are simply letting the event travel to a place where one listener can see all of them.",
      },
      {
        h: "2. How event bubbling works",
        p: "The diagram shows the event's journey upward through the DOM. **The event starts here** at the top box and travels down the page:\n\n- `<li>` **(Target)** — where the click actually happened\n- `<ul>` **(Parent)**\n- `<div>` **(Grandparent)**\n- `document`\n\nIn prose: **the event triggered on `<li>` bubbles up to `<ul>`, then `<div>`, and finally to `document`.** Any listener on any of those ancestors will fire. **Delegation relies on this bubbling behavior** — without bubbling, a parent listener would never hear about a child's click.",
      },
      {
        h: "3. Example — without vs with delegation",
        p: "The HTML is a `<ul id=\"menu\">` containing five `<li>` items: Home, About, Services, Contact.\n\n**Without Event Delegation ✗** — you `querySelectorAll(\"#menu li\")`, loop over them with `forEach`, and call `addEventListener` on each one. The note underneath: **listener added to every `<li>` (not efficient!)**.\n\n**With Event Delegation ✓** — you add one listener to `#menu`, and inside the handler check `if (e.target.tagName === \"LI\")` before acting. The note: **only one listener on parent `<ul>`!**\n\nSame behavior, one listener instead of N.",
      },
      {
        h: "4. How it works (with delegation)",
        p: "Breaking down the delegated handler:\n\n- `e` → the **event object**\n- `e.target` → **the element that was actually clicked**\n\nSo the pattern is: **we check if the clicked element is `<li>`, then handle it.** The listener sits on the parent and fires for every click inside it, so the `e.target.tagName === \"LI\"` guard is what filters the flood down to the clicks you actually care about. Then `e.target.textContent` gives you the specific item's text.",
        code: "document.getElementById(\"menu\")\n  .addEventListener(\"click\", function (e) {\n    if (e.target.tagName === \"LI\") {\n      console.log(\"Clicked:\", e.target.textContent);\n    }\n  });",
      },
      {
        h: "5. Real world benefits",
        p: "- **Works for existing and future elements** (even dynamically added).\n- **Better performance** (fewer listeners).\n- **Cleaner code.**\n- **Less memory usage.**\n\nThe arrow-and-graph doodle sums it up: **more efficient & scalable!** The first benefit is the one that usually decides it — a parent listener doesn't care when its children were created.",
      },
      {
        h: "6. Delegation in action (dynamic elements)",
        p: "The scenario: an **Add Item** button appends a new `<li>` to the menu, so the list becomes Home, About, Services, Contact, **Blog (new)**.\n\n**Even though \"Blog\" was added *after* the listener was attached, clicking it still works! That's the power of Event Delegation.** The listener lives on the `<ul>`, and the new `<li>` bubbles its clicks up to exactly that `<ul>` like every other item.\n\nThe payoff, in the page's words: **no need to re-attach listener for new items!** With the per-child approach you'd have to remember to wire up every element you ever create.",
      },
      {
        h: "7. Key takeaways",
        p: "- Event Delegation uses **event bubbling**.\n- Attach the listener to a **parent**, not to every child.\n- Use **`e.target`** to find the actual element that triggered the event.\n- It's **efficient, scalable and works great for dynamic content**.\n\nThe sticker reads: **Delegate once, handle many!** And the closing line: **Event Delegation is not just a technique, it's a smart way to write better JavaScript.**",
      },
    ],
    snippets: [
      {
        label: "HTML MENU",
        code: "<ul id=\"menu\">\n  <li>Home</li>\n  <li>About</li>\n  <li>Services</li>\n  <li>Contact</li>\n</ul>",
      },
      {
        label: "WITHOUT EVENT DELEGATION",
        code: "const items = document.querySelectorAll(\"#menu li\");\nitems.forEach(item => {\n  item.addEventListener(\"click\", function () {\n    console.log(\"Clicked:\", this.textContent);\n  });\n});",
        note: "A listener added to **every** `<li>` — not efficient.",
      },
      {
        label: "WITH EVENT DELEGATION",
        code: "document.getElementById(\"menu\")\n  .addEventListener(\"click\", function (e) {\n    if (e.target.tagName === \"LI\") {\n      console.log(\"Clicked:\", e.target.textContent);\n    }\n  });",
        note: "**Only one listener** on the parent `<ul>` — and it covers items added later too.",
      },
      {
        label: "EVENT BUBBLING PATH (ASCII)",
        code: "Event starts here\n   +---------------------+\n   |  <li>  (Target)     |\n   +---------------------+\n            | bubbles up\n   +---------------------+\n   |  <ul>  (Parent)     |\n   +---------------------+\n            |\n   +---------------------+\n   | <div> (Grandparent) |\n   +---------------------+\n            |\n   +---------------------+\n   |     document        |\n   +---------------------+",
        note: "Delegation works because the event reaches every ancestor of the target.",
      },
    ],
  },
  {
    day: 25,
    group: 'async',
    title: 'Fetch API',
    tagline: 'The modern way to make network requests.',
    image: '/javascript-notes/ep25-fetch-api.jpeg',
    tags: ['Fetch', 'HTTP', 'Promises'],
    notes: [
      { k: 'What it is', v: 'A modern, promise-based browser interface for HTTP requests — the replacement for XMLHttpRequest. Built in, no library needed.' },
      { k: 'Methods', v: 'GET retrieves, POST creates, PUT replaces completely, PATCH updates partially, DELETE removes.' },
      { k: 'The gotcha', v: 'fetch() only rejects on network errors. A 404 or 500 still RESOLVES — you must check `response.ok` or `response.status` yourself.' },
      { k: 'Request options', v: 'The second argument takes method, headers (Content-Type, Authorization) and body (JSON.stringify your data).' },
      { k: 'Response object', v: '.ok (true for 200–299), .status, .statusText, .json(), .text(), .headers.' },
      { k: 'With async/await', v: 'Wrap in try/catch, check res.ok, throw on a bad status, and await res.json() — cleaner and easier to read.' },
    ],
    theory: [
      {
        h: "Fetch API — the modern way to make network requests",
        p: "The Fetch API is the modern way to make network requests in JavaScript. It provides an interface for fetching resources (data) over the network. Crucially, it returns **Promises** and is built on top of the `Request` and `Response` objects, which means it plugs directly into the promise ecosystem (`.then()`, `.catch()`, and `async`/`await`) rather than the old callback-and-event style.",
      },
      {
        h: "1. What is Fetch API?",
        p: "Fetch API is a modern, **promise-based** interface provided by browsers to make HTTP requests to servers. It is an alternative to older methods like `XMLHttpRequest`, which required wiring up event handlers and readyState checks and produced verbose, hard-to-read code.\n\nA key practical benefit: Fetch is **built into modern browsers**, so no extra library is needed. You do not have to install or bundle anything (unlike, say, reaching for a third-party HTTP client) — it is simply there in the global scope.",
      },
      {
        h: "2. Basic syntax",
        p: "The basic shape is `fetch(url, options)`, where `url` is the endpoint and `options` is an optional configuration object. The call returns a Promise, so you chain `.then()` to first parse the body (commonly `response.json()`), then a second `.then()` to use the parsed data, and a `.catch()` to handle failures.\n\nThree facts you must internalise about this behaviour:\n\n- `fetch()` returns a **Promise**.\n- The response is **resolved even if the HTTP status is 404 or 500** — only *network* errors cause the promise to reject. A \"Not Found\" from the server is still a successful network round trip as far as fetch is concerned.\n- Because of that, you **must check `response.ok` or `response.status` yourself** if you want failed HTTP statuses to be treated as errors.",
        code: "fetch(url, options)\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(error));",
      },
      {
        h: "3. Fetch request methods",
        p: "The `method` option selects the HTTP verb, and each verb carries a conventional meaning:\n\n- **GET** — Retrieve data from server. Example use: get a user profile.\n- **POST** — Send data to server to create something. Example use: create a new user.\n- **PUT** — Update existing data **completely** (replace the whole resource). Example use: update user info.\n- **PATCH** — Update existing data **partially** (change only some fields). Example use: update a user's email.\n- **DELETE** — Delete data from server. Example use: delete a user account.\n\nGET is the default when you pass no `method`; the others must be stated explicitly in the options object.",
      },
      {
        h: "4. Examples — GET, POST, PUT, DELETE",
        p: "A **GET request** is the simplest: just pass the URL, parse with `res.json()`, log the data, and catch errors.\n\nA **POST request** needs three things in its options: `method: 'POST'`, a `headers` object declaring `'Content-Type': 'application/json'` so the server knows how to read the payload, and a `body` created with `JSON.stringify({...})` because the body must be a string, not an object.\n\nA **PUT request** looks structurally identical to POST but uses `method: 'PUT'` and sends the full replacement object (here `{ id: 1, title: 'Updated Title' }`).\n\nA **DELETE request** needs only `method: 'DELETE'` — no headers or body — and its response is typically checked with `if (res.ok)` to confirm deletion succeeded.",
      },
      {
        h: "5. Request & response objects",
        p: "The **request options** (the 2nd parameter to `fetch`) is a plain object. Its common keys are `method` (`\"GET\"`, or POST, PUT, etc.), `headers` (an object of HTTP headers such as `\"Content-Type\": \"application/json\"` and `\"Authorization\": \"Bearer token\"`), and `body` (`JSON.stringify(data)` — used for POST and PUT).\n\nThe **Response object** returned by fetch has these useful properties and methods:\n\n- `ok` — `true` if the status is in the 200–299 range.\n- `status` — the numeric HTTP status code.\n- `statusText` — the textual status, e.g. `'Not Found'`.\n- `json()` — parses the JSON body.\n- `text()` — parses the body as text.\n- `headers` — the response headers.",
      },
      {
        h: "6. Checking response status",
        p: "Because fetch does not reject on bad HTTP statuses, the standard pattern is to inspect `response.ok` inside the first `.then()` and manually `throw new Error(...)` when it is false. Throwing inside a `.then()` sends control down to the `.catch()`, which is exactly the behaviour most people expect fetch to have by default.\n\nThe rule on the page: **always handle errors properly with `.catch()` or `try...catch` (with async/await)**.",
        code: "fetch('https://api.example.com/data')\n  .then(response => {\n    if (!response.ok) {\n      throw new Error(`HTTP error! Status: ${response.status}`);\n    }\n    return response.json();\n  })\n  .then(data => console.log(data))\n  .catch(error => console.error('Fetch error:', error));",
      },
      {
        h: "7. Fetch with async / await",
        p: "You can `await` the fetch call and `await` the parse step inside an `async function`, wrapping everything in `try...catch`. The status check stays the same — you still throw when `!res.ok`.\n\nWhy async/await?\n\n- **Cleaner code** — no `.then()` chains to follow.\n- **Easier error handling** — one `try...catch` covers both the request and the parsing.\n- **Looks synchronous** while still being asynchronous under the hood.",
        code: "async function getData() {\n  try {\n    const res = await fetch('https://jsonplaceholder.typicode.com/users');\n    if (!res.ok) throw new Error(`Status: ${res.status}`);\n    const data = await res.json();\n    console.log(data);\n  } catch (err) {\n    console.error('Error:', err);\n  }\n}\ngetData();",
      },
      {
        h: "8. Key takeaways",
        p: "- Fetch API is promise-based and modern.\n- Use `fetch()` to make network requests.\n- It supports all major HTTP methods.\n- Always handle errors and check response status.\n- Async/await makes code cleaner and easier to read.\n\nThe closing line: **Fetch API is the foundation for modern web apps to communicate with servers. Master it, and you can build anything that talks to the internet!**",
      },
    ],
    snippets: [
      {
        label: "Basic syntax",
        code: "fetch(url, options)\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(error));",
        note: "Returns a Promise; parse the body first, then use the data.",
      },
      {
        label: "GET request",
        code: "fetch('https://jsonplaceholder.typicode.com/posts/1')\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Error:', error));",
      },
      {
        label: "POST request",
        code: "fetch('https://jsonplaceholder.typicode.com/posts', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({\n    title: 'Hello World',\n    body: 'This is a post',\n    userId: 1\n  })\n})\n  .then(res => res.json())\n  .then(data => console.log(data));",
        note: "`body` must be a string — hence `JSON.stringify()`.",
      },
      {
        label: "PUT request",
        code: "fetch('https://jsonplaceholder.typicode.com/posts/1', {\n  method: 'PUT',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ id: 1, title: 'Updated Title' })\n})\n  .then(res => res.json())\n  .then(data => console.log(data));",
        note: "PUT replaces the resource completely.",
      },
      {
        label: "DELETE request",
        code: "fetch('https://jsonplaceholder.typicode.com/posts/1', {\n  method: 'DELETE'\n})\n  .then(res => {\n    if (res.ok) console.log('Deleted successfully');\n  })\n  .catch(err => console.error('Error:', err));",
      },
      {
        label: "Request options (2nd parameter)",
        code: "{\n  method: \"GET\",              // or POST, PUT, etc.\n  headers: {                   // set headers\n    \"Content-Type\": \"application/json\",\n    \"Authorization\": \"Bearer token\"\n  },\n  body: JSON.stringify(data)   // for POST, PUT\n}",
      },
      {
        label: "Checking response status",
        code: "fetch('https://api.example.com/data')\n  .then(response => {\n    if (!response.ok) {\n      throw new Error(`HTTP error! Status: ${response.status}`);\n    }\n    return response.json();\n  })\n  .then(data => console.log(data))\n  .catch(error => console.error('Fetch error:', error));",
        note: "Fetch resolves on 404/500 — you must check `response.ok` yourself.",
      },
      {
        label: "Fetch with async / await",
        code: "async function getData() {\n  try {\n    const res = await fetch('https://jsonplaceholder.typicode.com/users');\n    if (!res.ok) throw new Error(`Status: ${res.status}`);\n    const data = await res.json();\n    console.log(data);\n  } catch (err) {\n    console.error('Error:', err);\n  }\n}\ngetData();",
      },
    ],
  },
  {
    day: 26,
    group: 'browser',
    title: 'LocalStorage',
    tagline: 'Store data in the browser with no expiration time.',
    image: '/javascript-notes/ep26-localstorage.jpeg',
    tags: ['Storage', 'Browser', 'Persistence'],
    notes: [
      { k: 'What it is', v: 'A Web Storage API for key-value pairs in the browser with no expiration. Data survives the browser being closed.' },
      { k: 'Strings only', v: 'It stores strings. Objects and arrays must be converted with JSON.stringify() going in and JSON.parse() coming out.' },
      { k: 'Scope & limits', v: 'Domain-specific — not shared across different domains. Storage limit is roughly 5–10 MB.' },
      { k: 'The methods', v: 'setItem(key, value), getItem(key), removeItem(key), clear(), key(index), and .length.' },
      { k: 'Checking existence', v: '`if (localStorage.getItem("token"))` — useful for maintaining login sessions and preferences.' },
      { k: 'Classic use case', v: 'Theme preferences: save "dark" on toggle, read it on load, and apply it via a data attribute so the choice survives a restart.' },
    ],
    theory: [
      {
        h: "LocalStorage — store data in the browser with no expiration time",
        p: "LocalStorage lets you store data in the browser with **no expiration time**. The data has no expiration date and is **not sent to the server** — this is the headline difference from cookies. It is a client-side-only place to keep small pieces of information across visits.",
      },
      {
        h: "1. What is LocalStorage?",
        p: "LocalStorage is a **Web Storage API** that allows us to store **key-value pairs** in the browser with no expiration time.\n\nThe defining characteristics:\n\n- Data **persists even after the browser is closed** — reopen the browser tomorrow and it is still there.\n- It stores **only strings**; objects need to be converted to JSON before storing.\n- It is **domain specific** — data is not shared across different domains.\n- The storage limit is around **5–10 MB**, which is far more generous than cookies but still not a database.",
      },
      {
        h: "2. How LocalStorage works",
        p: "The mental model is simple: the browser holds a LocalStorage store, and your page **stores data** into it and **retrieves data** from it. Internally it is just a table of keys and values — for example `theme` → `dark`, `username` → `john`, `token` → `abc123`.\n\nThe critical point: **data is stored in the browser, not on the server. It is specific to the domain** (e.g. `example.com`). Another site cannot read your LocalStorage, and your server never sees it unless you explicitly send it.",
      },
      {
        h: "3. LocalStorage methods",
        p: "The full API surface is small — six things to remember:\n\n- `setItem(key, value)` — Stores a key-value pair. Example: `localStorage.setItem('name', 'John');`\n- `getItem(key)` — Gets the value by key. Example: `localStorage.getItem('key');`\n- `removeItem(key)` — Removes a key-value pair. Example: `localStorage.removeItem('key');`\n- `clear()` — Removes all data. Example: `localStorage.clear();`\n- `key(index)` — Gets the key at the specified index. Example: `localStorage.key(0);`\n- `length` — Returns the number of stored items. Example: `localStorage.length;`",
      },
      {
        h: "4. Examples",
        p: "Storing is a sequence of `setItem` calls; note that even `'25'` and `'true'` are written as strings. Getting uses `getItem` and returns strings back. Removing a single entry uses `removeItem`, and `clear()` wipes everything for that domain.\n\nThe recurring note: **only strings can be stored. To store objects or arrays, use `JSON.stringify()` and `JSON.parse()`.**",
        code: "// Store data\nlocalStorage.setItem('name', 'John');\nlocalStorage.setItem('age', '25');\nlocalStorage.setItem('isLoggedIn', 'true');\n\n// Get data\nlet name = localStorage.getItem('name');\nlet age = localStorage.getItem('age');\nconsole.log(name); // John\n\n// Remove data\nlocalStorage.removeItem('age');\n\n// Clear all data\n// localStorage.clear();",
      },
      {
        h: "5. Store & retrieve objects",
        p: "Because LocalStorage holds only strings, objects need a round trip through JSON. To **store an object**, you build it normally and then **convert it to a JSON string** with `JSON.stringify(user)` before passing it to `setItem`.\n\nTo **retrieve an object**, you read the string back with `getItem`, then **parse it back to an object** with `JSON.parse(userStr)`. Only after parsing can you access properties like `user.name`, `user.email`, and `user.age` — skip the parse and you would be doing string operations on JSON text.",
      },
      {
        h: "6. Checking if data exists",
        p: "`getItem` returns `null` when the key is absent, and `null` is falsy — so a plain `if (localStorage.getItem('token'))` is enough to branch on presence. If the token is there you can log \"Token exists\"; otherwise \"Token not found\".\n\nThis is **useful for maintaining login sessions, user preferences, theme, etc.** — you check on page load whether the stored value exists and act accordingly.",
        code: "if (localStorage.getItem('token')) {\n  console.log('Token exists');\n} else {\n  console.log('Token not found');\n}",
      },
      {
        h: "7. Practical example — theme preferences",
        p: "The classic use case is a dark/light theme toggle, built from three pieces.\n\n**Save Theme**: a `saveTheme(theme)` function calls `localStorage.setItem('theme', theme)`. Calling `saveTheme('dark')` records the choice.\n\n**Load Theme**: a `loadTheme()` function reads `localStorage.getItem('theme') || 'light'` — the `||` supplies a default theme when nothing was ever saved — then applies it with `document.body.setAttribute('data-theme', theme)`. It is invoked on startup with `loadTheme();`.\n\n**HTML + CSS**: styling keys off that attribute — `body[data-theme='dark']` sets `background: #1a1a1a; color: #ffffff;` while `body[data-theme='light']` sets `background: #ffffff; color: #000000;`.\n\n**Result**: the user's theme preference is saved and applied even after closing the browser.",
      },
      {
        h: "Key takeaways",
        p: "- LocalStorage stores data with no expiration.\n- Data is stored in key-value pairs as strings.\n- Use JSON methods to store objects or arrays.\n- Great for saving user preferences and persistent data.",
      },
    ],
    snippets: [
      {
        label: "Store, get, remove, clear",
        code: "// Store data\nlocalStorage.setItem('name', 'John');\nlocalStorage.setItem('age', '25');\nlocalStorage.setItem('isLoggedIn', 'true');\n\n// Get data\nlet name = localStorage.getItem('name');\nlet age = localStorage.getItem('age');\nconsole.log(name); // John\n\n// Remove data\nlocalStorage.removeItem('age');\n\n// Clear all data\n// localStorage.clear();",
      },
      {
        label: "Storing an object",
        code: "const user = {\n  name: 'Alice',\n  email: 'alice@mail.com',\n  age: 22\n};\n\nlocalStorage.setItem('user', JSON.stringify(user));",
        note: "Convert to a JSON string first — LocalStorage holds only strings.",
      },
      {
        label: "Retrieving an object",
        code: "const userStr = localStorage.getItem('user');\nconst user = JSON.parse(userStr);\n\nconsole.log(user.name);  // Alice\nconsole.log(user.email); // alice@mail.com\nconsole.log(user.age);   // 22",
        note: "Parse back to an object before accessing properties.",
      },
      {
        label: "Checking if data exists",
        code: "if (localStorage.getItem('token')) {\n  console.log('Token exists');\n} else {\n  console.log('Token not found');\n}",
      },
      {
        label: "Save theme",
        code: "function saveTheme(theme) {\n  localStorage.setItem('theme', theme);\n}\n\n// Save 'dark' theme\nsaveTheme('dark');",
      },
      {
        label: "Load theme",
        code: "function loadTheme() {\n  const theme = localStorage.getItem('theme')\n    || 'light'; // default theme\n  document.body.setAttribute('data-theme', theme);\n}\n\nloadTheme();",
        note: "`|| 'light'` supplies a default when nothing was saved.",
      },
      {
        label: "Theme HTML + CSS",
        code: "body[data-theme='dark'] {\n  background: #1a1a1a;\n  color: #ffffff;\n}\n\nbody[data-theme='light'] {\n  background: #ffffff;\n  color: #000000;\n}",
      },
    ],
  },
  {
    day: 27,
    group: 'browser',
    title: 'SessionStorage',
    tagline: 'Store data for a single session (tab/window).',
    image: '/javascript-notes/ep27-sessionstorage.jpeg',
    tags: ['Storage', 'Session', 'Browser'],
    notes: [
      { k: 'What it is', v: 'The same Web Storage API as localStorage, but the data is cleared when the tab or window closes.' },
      { k: 'Per tab', v: 'Every tab/window has its own sessionStorage. Data is not shared between tabs — even for the same site.' },
      { k: 'Survives refresh', v: 'A page refresh (F5) keeps the data; closing the tab ends the session and clears it.' },
      { k: 'Same methods', v: 'setItem, getItem, removeItem, clear, key, length — identical to localStorage, including the strings-only rule.' },
      { k: 'vs localStorage', v: 'Lifetime: until tab closes vs no expiry. Scope: per tab vs per origin. Sharing: none vs shared across tabs. Both ~5–10 MB.' },
      { k: 'When to use', v: 'Temporary data — form state, a session token, a multi-step wizard. If it must outlive the session, use localStorage.' },
    ],
    theory: [
      {
        h: "SessionStorage — store data for a single session (tab/window)",
        p: "SessionStorage stores data for a **single session**, meaning one tab or window. It is **similar to LocalStorage but the data is cleared when the page session ends**. Same API, same domain rules, same size ballpark — the only real difference is lifetime and scope.",
      },
      {
        h: "1. What is SessionStorage?",
        p: "SessionStorage is a **Web Storage API** that stores data for a **single page session**. The data is cleared when the tab or window is closed.\n\nIts defining traits:\n\n- Data exists only for the **duration of the page session**.\n- Data is **not shared between tabs or windows** — each one gets its own isolated store.\n- It **survives a page refresh (F5)** — refreshing does not end the session, only closing the tab does.\n- The storage limit is around **5–10 MB**.",
      },
      {
        h: "2. How SessionStorage works",
        p: "Picture a tab/window as owning its own sessionStorage table — for instance `username` → `john` and `token` → `abc123`. While the tab lives, you can store data into it and retrieve data from it freely. The moment the **tab is closed, all sessionStorage data is cleared** — it goes straight in the bin.\n\nThe rule to remember: **every tab/window has its own sessionStorage. Closing the tab ends the session and clears the data.** Open the same site in a second tab and it starts empty.",
      },
      {
        h: "3. SessionStorage methods",
        p: "The API mirrors LocalStorage exactly — if you know one, you know the other:\n\n- `setItem(key, value)` — Stores a key-value pair. Example: `sessionStorage.setItem('key', 'value');`\n- `getItem(key)` — Gets the value by key. Example: `sessionStorage.getItem('key');`\n- `removeItem(key)` — Removes a key-value pair. Example: `sessionStorage.removeItem('key');`\n- `clear()` — Removes all data. Example: `sessionStorage.clear();`\n- `key(index)` — Gets the key at the specified index. Example: `sessionStorage.key(0);`\n- `length` — Returns the number of stored items. Example: `sessionStorage.length;`",
      },
      {
        h: "4. Examples",
        p: "Usage is identical to LocalStorage: `setItem` to store, `getItem` to read, `removeItem` to delete one key, `clear()` to wipe the session.\n\nThe same string-only constraint applies: **only strings can be stored. To store objects or arrays, use `JSON.stringify()` and `JSON.parse()`.**",
        code: "// Store data\nsessionStorage.setItem('name', 'Alice');\nsessionStorage.setItem('role', 'Admin');\n\n// Get data\nlet name = sessionStorage.getItem('name');\nconsole.log(name); // Alice\n\n// Remove data\nsessionStorage.removeItem('role');\n\n// Clear all data\nsessionStorage.clear();",
      },
      {
        h: "5. SessionStorage vs LocalStorage",
        p: "The two APIs differ only in lifetime and reach:\n\n- **Lifetime** — SessionStorage: until the tab/window is closed. LocalStorage: no expiration (until cleared).\n- **Scope** — SessionStorage: per tab/window. LocalStorage: per origin (domain).\n- **Data sharing** — SessionStorage: not shared between tabs. LocalStorage: shared across all tabs of the same origin.\n- **Survives refresh** — SessionStorage: yes. LocalStorage: yes.\n- **Storage limit** — SessionStorage: ~5–10 MB. LocalStorage: ~5–10 MB.\n\nThe guidance that follows: **use SessionStorage for temporary data** (e.g. form data, session info) and **use LocalStorage for persistent data** (e.g. theme, preferences).",
      },
      {
        h: "6. Practical example — login session",
        p: "A login flow shows the lifetime property in action. On login you build a user object and save it with `sessionStorage.setItem('user', JSON.stringify(user))`. To read it back you `getItem('user')` and `JSON.parse` the string into an object before using `user.name`. Logging out is a single `sessionStorage.clear()`.\n\nThe payoff: **when the user closes the tab, the session ends and all data is removed automatically** — you get logout-on-close for free, without writing any cleanup code.",
      },
      {
        h: "7. Key takeaways",
        p: "- SessionStorage stores data for a single session (tab/window).\n- Data is cleared when the tab or window is closed.\n- It is not shared between different tabs.\n- Survives page refresh.\n- Stores only strings (use JSON for objects/arrays).\n- Useful for temporary session-based data.\n\n**Remember: if you need data to live beyond the session, use LocalStorage. If it's temporary, use SessionStorage!**",
      },
    ],
    snippets: [
      {
        label: "Store, get, remove, clear",
        code: "// Store data\nsessionStorage.setItem('name', 'Alice');\nsessionStorage.setItem('role', 'Admin');\n\n// Get data\nlet name = sessionStorage.getItem('name');\nconsole.log(name); // Alice\n\n// Remove data\nsessionStorage.removeItem('role');\n\n// Clear all data\nsessionStorage.clear();",
      },
      {
        label: "Login session",
        code: "// Save login info\nconst user = { id: 1, name: 'John' };\nsessionStorage.setItem('user', JSON.stringify(user));\n\n// Get login info\nconst userStr = sessionStorage.getItem('user');\nconst user = JSON.parse(userStr);\nconsole.log(user.name); // John\n\n// Logout (clear session)\nsessionStorage.clear();",
        note: "Closing the tab ends the session and removes the data automatically.",
      },
    ],
  },
  {
    day: 28,
    group: 'browser',
    title: 'Cookies',
    tagline: 'Small data stored on the client and sent to the server every request.',
    image: '/javascript-notes/ep28-cookies.jpeg',
    tags: ['Cookies', 'Auth', 'HTTP'],
    notes: [
      { k: 'What it is', v: 'A small piece of data stored in the browser by a website, with a name, a value, and optional attributes.' },
      { k: 'The key difference', v: 'Cookies are attached automatically to every HTTP request to the same domain. Local/session storage never leave the browser.' },
      { k: 'Attributes', v: 'Expires/Max-Age (when it dies), Domain, Path, Secure (HTTPS only), HttpOnly (invisible to JavaScript), SameSite (cross-site behaviour).' },
      { k: 'In JavaScript', v: '`document.cookie` sets and reads cookies — but it can only see non-HttpOnly ones. HttpOnly cookies are server-only by design.' },
      { k: 'vs Web Storage', v: 'Cookies: ~4 KB, sent to server, used for sessions/auth/tracking. LocalStorage: ~5–10 MB, never sent, for preferences and persistent data.' },
      { k: 'Rule of thumb', v: 'Use cookies for data the server must see; use Web Storage for client-side-only data. Protect them with Secure, HttpOnly and SameSite.' },
    ],
    theory: [
      {
        h: "Cookies — small pieces of data stored on the client",
        p: "Cookies are small pieces of data stored on the **client** and sent to the **server** with every request. Unlike Web Storage, cookies are **sent to the server automatically with every HTTP request to the same domain** — you do not have to attach them yourself. That automatic transmission is both their superpower and the reason they must be kept small.",
      },
      {
        h: "1. What is a cookie?",
        p: "A cookie is a small piece of data stored in the user's browser by a website. It has a **name**, a **value**, and optional attributes like **expiration**, **domain**, **path**, **secure**, and **httpOnly**.\n\nCookies are mainly used for:\n\n- **Session management** — keeping a user logged in across requests.\n- **User preferences** — remembering settings.\n- **Tracking & analytics** — recognising returning visitors.",
      },
      {
        h: "2. How cookies work",
        p: "The flow is a two-way loop between browser and server. The browser keeps a **Cookie Store** — a table of names and values such as `token` → `abc123` and `theme` → `dark`.\n\n1. **HTTP Request** — the browser sends the request and the cookies are **sent automatically** along with it.\n2. **HTTP Response** — the server replies and can set new cookies using the **`Set-Cookie` header**.\n\nThe key idea: **cookies are stored by the browser and attached to every request to the same domain.** You never write \"send the cookie\" code — the browser does it for you.",
      },
      {
        h: "3. Cookie structure",
        p: "A cookie is defined by its name, value, and a set of attributes that control its lifetime, reach, and safety:\n\n- **Name** — The name of the cookie.\n- **Value** — The value of the cookie.\n- **Expires / Max-Age** — When the cookie expires.\n- **Domain** — The domain the cookie belongs to.\n- **Path** — The path on the server where the cookie is valid.\n- **Secure** — Cookie is sent only over HTTPS.\n- **HttpOnly** — Cookie is not accessible via JavaScript.\n- **SameSite** — Controls when cookies are sent with cross-origin requests.",
      },
      {
        h: "4. Setting & getting cookies in JavaScript",
        p: "**Setting a cookie** is done by assigning a specially formatted string to `document.cookie`, e.g. `document.cookie = \"username=John; Max-Age=3600; Path=/; Secure; SameSite=Strict\";`. Each piece means something:\n\n- `Max-Age=3600` → expires in 1 hour.\n- `Path=/` → available across the site.\n- `Secure` → sent over HTTPS only.\n- `SameSite=Strict` → sent only on same-site requests.\n\n**Getting cookies**: `console.log(document.cookie);` returns them all as one semicolon-separated string, e.g. `username=John; theme=dark; token=abc123` — there is no built-in \"get one cookie\" method.\n\nThe security caveat: **`document.cookie` can only read non-HttpOnly cookies. HttpOnly cookies are accessible only by the server** — which is precisely the point of the flag.",
      },
      {
        h: "5. Example: set, get & delete",
        p: "Setting, reading, and deleting all go through the same `document.cookie` property. To **set**, assign the name=value string with its attributes. To **get**, read `document.cookie` — logging it shows `user=Alice`.\n\nDeleting is the counter-intuitive one: there is no delete method. You **re-set the same cookie with `Max-Age=0`**, keeping the other attributes identical, and the browser drops it. As the page puts it: setting `Max-Age=0` removes the cookie.",
      },
      {
        h: "6. Cookies vs LocalStorage vs SessionStorage",
        p: "The three client-side stores compared across every dimension:\n\n- **Sent to server** — Cookies: yes (automatically). LocalStorage: no. SessionStorage: no.\n- **Storage limit** — Cookies: ~4 KB. LocalStorage: ~5–10 MB. SessionStorage: ~5–10 MB.\n- **Lifetime** — Cookies: configurable. LocalStorage: until manually cleared. SessionStorage: until the tab/window is closed.\n- **Access** — Cookies: automatic. LocalStorage: via JavaScript. SessionStorage: via JavaScript.\n- **Use case** — Cookies: sessions, auth, tracking. LocalStorage: user preferences, persistent data. SessionStorage: temporary data, form state.\n\nThe decision rule: **use Cookies for data that must be sent to the server; use Web Storage (Local/Session) for client-side data.**",
      },
      {
        h: "7. Real world example — Remember Me",
        p: "The \"Remember Me\" checkbox on a login form is a cookie-lifetime decision. After a successful login you branch on `rememberMeChecked`: if it is ticked, you set the token cookie with `Max-Age=60*60*24*7` — **7 days** — so the user stays signed in across browser restarts. If it is not ticked, you set the same cookie with `Max-Age=3600` — **1 hour** — so it expires quickly.\n\nEither way the cookie carries `Path=/; Secure; SameSite=Lax`. Then, on **every request**, the **server reads the \"token\" cookie to authenticate the user** — browser sends Request + Cookie, server sends back the Response. The client never has to manage the handshake.",
      },
      {
        h: "Key takeaways",
        p: "- Cookies store small pieces of data on the client.\n- Cookies are sent automatically with every request.\n- Use attributes like **Secure**, **HttpOnly**, **SameSite** for safety.\n- Use Cookies for sessions, auth, and tracking.\n- For larger client-side data, use LocalStorage or SessionStorage.\n\nThe closing line: **Cookies may be small, but they power a big part of the web!**",
      },
    ],
    snippets: [
      {
        label: "Setting a cookie",
        code: "document.cookie =\n  \"username=John; Max-Age=3600; Path=/; Secure; SameSite=Strict\";",
        note: "`Max-Age=3600` expires in 1 hour; `Path=/` makes it site-wide.",
      },
      {
        label: "Getting cookies",
        code: "// Get all cookies\nconsole.log(document.cookie);\n\n// Example output\n// username=John; theme=dark; token=abc123",
        note: "`document.cookie` can only read non-HttpOnly cookies.",
      },
      {
        label: "Set, get & delete",
        code: "// 1. Set a cookie\ndocument.cookie = \"user=Alice; Max-Age=3600; Path=/; SameSite=Lax\";\n\n// 2. Get cookies\nconsole.log(document.cookie); // user=Alice\n\n// 3. Delete a cookie\ndocument.cookie = \"user=; Max-Age=0; Path=/; SameSite=Lax\";\n// Setting Max-Age=0 removes the cookie",
      },
      {
        label: "Remember Me",
        code: "// After successful login\nif (rememberMeChecked) {\n  document.cookie = \"token=abc123; Max-Age=60*60*24*7;\n    Path=/; Secure; SameSite=Lax\"; // 7 days\n} else {\n  document.cookie = \"token=abc123; Max-Age=3600;\n    Path=/; Secure; SameSite=Lax\"; // 1 hour\n}",
        note: "The only difference is the cookie's lifetime.",
      },
    ],
  },
  {
    day: 29,
    group: 'advanced',
    title: 'Error Handling',
    tagline: 'Handle errors gracefully and make your code robust.',
    image: '/javascript-notes/ep29-error-handling.jpeg',
    tags: ['Errors', 'try/catch', 'Custom errors'],
    notes: [
      { k: 'What it is', v: 'Responding to runtime errors in a controlled way so the application does not crash — from invalid input, network failures, unexpected conditions or plain mistakes.' },
      { k: 'Error types', v: 'SyntaxError (invalid syntax), ReferenceError (undefined variable), TypeError (wrong type — `null.length`), RangeError (out of range — `new Array(-1)`), URIError, and custom errors.' },
      { k: 'try…catch…finally', v: 'try holds the risky code, catch handles the error if one occurs, finally always runs whether or not it did.' },
      { k: 'The error object', v: '.name (the type), .message (human-readable), .stack (where it happened). Show the message to users; use the stack to debug.' },
      { k: 'Custom errors', v: '`class ValidationError extends Error` with `super(message)` and a set `this.name` gives you meaningful, catchable error types.' },
      { k: 'Common mistakes', v: 'Swallowing errors in an empty catch, not handling promise rejections, throwing non-Error values, and not validating input.' },
    ],
    theory: [
      {
        h: "Error Handling — handle errors gracefully and make your code more robust",
        p: "Error handling is about responding to failures gracefully so your code is **robust**. The framing on the page says it best: **errors happen. Good developers handle them. Great developers expect them.** The goal is not to prevent every error — it is to make sure an error never takes the whole application down with it.",
      },
      {
        h: "1. What is error handling?",
        p: "Error handling is the process of responding to **runtime errors** in a controlled way to prevent the application from crashing.\n\nErrors can occur due to:\n\n- **Invalid input** — a user types something you did not expect.\n- **Network failures** — a request times out or the server is unreachable.\n- **Unexpected conditions** — data arrives in a shape you did not plan for.\n- **Programmer mistakes** — plain bugs.\n\nNotice that most of these are outside your control, which is why handling matters more than avoiding.",
      },
      {
        h: "2. Types of errors in JavaScript",
        p: "JavaScript has a family of built-in error types, each signalling a different category of failure:\n\n- **SyntaxError** — occurs when code violates JavaScript syntax rules. Example: `let a = ;`\n- **ReferenceError** — occurs when accessing a variable that is not defined. Example: `console.log(x); // x is not defined`\n- **TypeError** — occurs when a value is not of the expected type. Example: `null.length`\n- **RangeError** — occurs when a value is not within the allowed range. Example: `new Array(-1)`\n- **URIError** — occurs when URI-related functions are used incorrectly. Example: `decodeURIComponent('%')`\n- **CustomError** — errors created by developers. Example: `new Error('Something went wrong')`\n\nKnowing the type tells you where to look: a TypeError points at your data, a ReferenceError at your names.",
      },
      {
        h: "3. The try...catch...finally statement",
        p: "The construct has three blocks, each with a distinct job:\n\n- **`try`** — place risky code here (code that might throw an error).\n- **`catch (error)`** — handle the error if it occurs; the `error` parameter carries the details.\n- **`finally`** — code that always runs, whether the error occurs or not (typical for cleanup).\n\nThe control-flow rule: **if an error occurs in `try`, the control jumps to `catch`. The `finally` block always executes** — even if `try` succeeded, even if `catch` ran.",
        code: "try {\n  // Code that might throw an error\n} catch (error) {\n  // Handle the error\n} finally {\n  // Code that always runs\n}",
      },
      {
        h: "4. Example",
        p: "A divide-by-zero example ties it together. `10 / 0` does not throw in JavaScript — it produces `Infinity` — so the code checks `if (!isFinite(result))` and **manually throws** `new Error('Cannot divide by zero')`. Control jumps straight from the `throw` to the `catch`, which logs `error.message`, and then `finally` runs regardless.\n\nThe output is:\n\n- `Error: Cannot divide by zero`\n- `Execution completed.`\n\nNote that `console.log('Result:', result)` never runs — throwing skips the rest of the `try` block.",
      },
      {
        h: "5. Accessing error information",
        p: "The error object caught in `catch` contains useful properties:\n\n- **name** — The type of error (e.g. `TypeError`).\n- **message** — Human-readable description of the error.\n- **stack** — Stack trace showing where the error occurred.\n- **lineNumber** — Line number where the error occurred (non-standard).\n- **fileName** — File name where the error occurred (non-standard).\n\nThe practical split: **use `error.message` to show user-friendly messages, and use `error.stack` for debugging.** Users get the readable sentence; you get the trace.",
      },
      {
        h: "6. Throwing custom errors",
        p: "You can define your own error types by extending the built-in `Error` class. A `ValidationError` class calls `super(message)` to pass the message up, then sets `this.name = 'ValidationError'` so the type is identifiable when caught. In use, a `validateAge(age)` function checks `if (age < 18)` and throws `new ValidationError('Age must be 18 or above')`.\n\nWhy bother? **Custom errors help you create meaningful error types for your application** — you can catch and branch on them specifically instead of parsing message strings.\n\nOn built-in constructors: **`Error` is the base class constructor** that custom errors extend.",
      },
      {
        h: "7. Best practices",
        p: "- Always wrap risky code in `try...catch`.\n- Provide meaningful error messages.\n- Log errors for debugging.\n- Don't expose sensitive information in errors.\n- Use specific error types (custom errors) when needed.",
      },
      {
        h: "8. Common mistakes",
        p: "- **Swallowing errors silently** (an empty `catch` block) — the error vanishes and you debug blind.\n- **Not handling promise rejections** (use `.catch()`).\n- **Throwing non-Error values** — throw an `Error`, not a string or number, or you lose `name`, `message`, and `stack`.\n- **Not validating inputs.**",
      },
      {
        h: "Key takeaways",
        p: "- Errors are inevitable.\n- Handle them gracefully.\n- Use `try...catch...finally` to control errors.\n- Good error handling builds reliable apps.\n\nThe closing line: **A good application doesn't just work when everything goes right, it handles things right when something goes wrong!**",
      },
    ],
    snippets: [
      {
        label: "try...catch...finally structure",
        code: "try {\n  // Code that might throw an error\n} catch (error) {\n  // Handle the error\n} finally {\n  // Code that always runs\n}",
      },
      {
        label: "Divide by zero example",
        code: "try {\n  let result = 10 / 0;\n  if (!isFinite(result)) {\n    throw new Error('Cannot divide by zero');\n  }\n  console.log('Result:', result);\n} catch (error) {\n  console.log('Error:', error.message);\n} finally {\n  console.log('Execution completed.');\n}",
        note: "Output: `Error: Cannot divide by zero` then `Execution completed.`",
      },
      {
        label: "Custom error class",
        code: "class ValidationError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = 'ValidationError';\n  }\n}\n\n// Usage\nfunction validateAge(age) {\n  if (age < 18) {\n    throw new ValidationError('Age must be 18 or above');\n  }\n}",
        note: "`Error` is the base class constructor for custom errors.",
      },
    ],
  },
  {
    day: 30,
    group: 'core',
    title: 'Destructuring',
    tagline: 'A clean way to extract values from arrays and objects.',
    image: '/javascript-notes/ep30-destructuring.jpeg',
    tags: ['ES6', 'Destructuring', 'Syntax'],
    notes: [
      { k: 'What it is', v: 'An expression that unpacks values from arrays, or properties from objects, into distinct variables. Less code, more readable.' },
      { k: 'Arrays', v: 'Order matters — values are assigned by position. `const [a, b, c] = numbers`. Skip with a hole: `const [x, , z] = numbers`.' },
      { k: 'Objects', v: 'Order does not matter — you pick properties by name. `const { name, age } = user`.' },
      { k: 'Rename', v: '`const { name: fullName, city: location } = user` gives the variables new names.' },
      { k: 'Defaults', v: '`const { country = "USA" } = user` fills in the gap when the property is missing.' },
      { k: 'Nested', v: 'You can destructure multiple levels deep — `const { info: { name, address: { city } } } = person`.' },
      { k: 'In parameters', v: '`function printUser({ name, age })` is why it feels so natural with API responses.' },
      { k: 'With rest', v: '`const [first, ...rest] = arr` collects the remaining values.' },
    ],
    theory: [
      {
        h: "Destructuring — a clean and concise way to extract values",
        p: "Destructuring is a clean and concise way to extract values from **arrays** and **objects**. It makes your code shorter, cleaner, and easier to read — instead of writing a line per property to pull values out one by one, you describe the shape you want and JavaScript fills in the variables.",
      },
      {
        h: "1. What is destructuring?",
        p: "Destructuring is a JavaScript **expression** that makes it possible to unpack values from **arrays**, or properties from **objects**, into distinct variables.\n\nWhy use it?\n\n- **Less code** — one line replaces several.\n- **More readable** — the destructuring pattern visually mirrors the data's shape.\n- **Easy to extract what you need** — pick out only the pieces you care about and ignore the rest.",
      },
      {
        h: "2. Array destructuring",
        p: "**Basic example**: given `const numbers = [10, 20, 30];`, writing `const [a, b, c] = numbers;` assigns `a = 10, b = 20, c = 30`. Logging them gives `10 20 30`.\n\n**Skip / ignore values**: leave a hole in the pattern — `const [x, , z] = numbers;` skips the middle element, so `x = 10` and `z = 30`, logging `10 30`.\n\n**Default values**: `const [p, q, r = 0] = [1, 2];` — since the array has no third element, `r` falls back to `0` (the default value is used), logging `1 2 0`.\n\nThe rule for arrays: **the order matters! Values are assigned based on position.**",
      },
      {
        h: "3. Object destructuring",
        p: "**Basic example**: from `const user = { name: 'Alice', age: 25, city: 'New York' };`, the line `const { name, age, city } = user;` creates all three variables at once — `Alice`, `25`, `New York`.\n\n**Rename variables**: use a colon to bind a property to a different variable name — `const { name: fullName, city: location } = user;` gives you `fullName` (`Alice`) and `location` (`New York`).\n\n**Default values**: `const { country = 'USA' } = user;` — the `user` object has no `country`, so the default fills in and logs `USA`.\n\n**Extract only what you need**: `const { name } = user;` grabs just the name; **age and city are ignored**.\n\nThe rule for objects: **order does not matter in objects. You can pick any property by name.**",
      },
      {
        h: "4. Nested destructuring",
        p: "Destructuring follows the data's structure however deep it goes.\n\n**Nested objects**: given `const person = { id: 1, info: { name: 'John', address: { city: 'London' } } };`, the pattern `const { info: { name, address: { city } } } = person;` reaches all the way down — `name` is `John` and `city` is `London`.\n\n**Nested arrays**: given `const arr = [1, [2, 3], 4];`, the pattern `const [a, [b, c], d] = arr;` mirrors the nesting and yields `1 2 3 4`.\n\nThe note: **you can destructure multiple levels deep!**",
      },
      {
        h: "5. Function parameters destructuring",
        p: "You can destructure directly in a function's parameter list, which is where the feature really pays off.\n\n**Object in function**: `function printUser({ name, age }) { ... }` — call it as `printUser({ name: 'Bob', age: 30 });` and it prints `Name: Bob, Age: 30`. The function declares exactly which properties it needs, right in its signature.\n\n**Array in function**: `function sum([a, b]) { return a + b; }` — `console.log(sum([5, 7]));` gives `12`.\n\nThis is **great for working with API responses and functions!**",
      },
      {
        h: "6. Swap variables (easy way)",
        p: "Destructuring gives you a one-line variable swap with no temporary variable. Starting from `let a = 5, b = 10;`, the line `[a, b] = [b, a];` swaps them — logging gives `10 5`. The right-hand side array is built first from the current values, then destructured back into the two variables, which is why no temp is needed.",
        code: "let a = 5, b = 10;\n[a, b] = [b, a];\nconsole.log(a, b); // 10 5",
      },
      {
        h: "7. Rest operator with destructuring",
        p: "The rest operator (`...`) collects everything the pattern did not name. From `const [first, ...rest] = [1, 2, 3, 4, 5];`, `first` is `1` and `rest` is `[2, 3, 4, 5]`.\n\nThe note: **Rest (`...`) collects the remaining values!** It must come last in the pattern, since by definition it mops up whatever is left over.",
      },
      {
        h: "8. Practical example",
        p: "A realistic product object shows several features combining. Given a product with `id`, `name`, `price`, and a nested `specs` object holding `ram` and `storage`, one line pulls out exactly what is needed — including a nested property and a rename:\n\n`const { name, price, specs: { ram } } = product;` then `console.log(name, price, ram);` outputs `Laptop 999 16GB`. Everything else (`id`, `storage`) is simply left behind.",
        code: "const product = {\n  id: 101,\n  name: 'Laptop',\n  price: 999,\n  specs: {\n    ram: '16GB',\n    storage: '512GB SSD'\n  }\n};\n\nconst { name, price, specs: { ram } } = product;\nconsole.log(name, price, ram);\n// Laptop 999 16GB",
      },
      {
        h: "Key takeaways",
        p: "- Destructuring extracts values from arrays or objects.\n- It makes code cleaner and easier to read.\n- Use default values to handle missing data.\n- Order matters in arrays, not in objects.\n- Works great in functions and real-world apps.\n- Combine with the rest operator for more power.\n\nThe closing line: **Destructuring is a small feature that makes a BIG difference in your code!**",
      },
    ],
    snippets: [
      {
        label: "Array destructuring — basic",
        code: "const numbers = [10, 20, 30];\nconst [a, b, c] = numbers;\n// a = 10, b = 20, c = 30\nconsole.log(a, b, c); // 10 20 30",
      },
      {
        label: "Skip / ignore values",
        code: "const [x, , z] = numbers;\n\n// x = 10, z = 30\nconsole.log(x, z); // 10 30",
        note: "The empty slot skips that position.",
      },
      {
        label: "Array default values",
        code: "const [p, q, r = 0] = [1, 2];\n\n// r = 0 (default value used)\nconsole.log(p, q, r); // 1 2 0",
      },
      {
        label: "Object destructuring — basic",
        code: "const user = {\n  name: 'Alice',\n  age: 25,\n  city: 'New York'\n};\n\nconst { name, age, city } = user;\nconsole.log(name); // Alice\nconsole.log(age);  // 25\nconsole.log(city); // New York",
      },
      {
        label: "Rename variables",
        code: "const { name: fullName, city: location } = user;\n\nconsole.log(fullName); // Alice\nconsole.log(location); // New York",
      },
      {
        label: "Object default values",
        code: "const { country = 'USA' } = user;\n\nconsole.log(country); // USA",
      },
      {
        label: "Extract only what you need",
        code: "const { name } = user;\n\nconsole.log(name); // Alice\n// age and city are ignored",
      },
      {
        label: "Nested objects",
        code: "const person = {\n  id: 1,\n  info: {\n    name: 'John',\n    address: {\n      city: 'London'\n    }\n  }\n};\n\nconst { info: { name, address: { city } } } = person;\nconsole.log(name); // John\nconsole.log(city); // London",
      },
      {
        label: "Nested arrays",
        code: "const arr = [1, [2, 3], 4];\nconst [a, [b, c], d] = arr;\n\nconsole.log(a, b, c, d); // 1 2 3 4",
      },
      {
        label: "Object in function",
        code: "function printUser({ name, age }) {\n  console.log(`Name: ${name}, Age: ${age}`);\n}\n\nprintUser({ name: 'Bob', age: 30 });\n// Name: Bob, Age: 30",
      },
      {
        label: "Array in function",
        code: "function sum([a, b]) {\n  return a + b;\n}\n\nconsole.log(sum([5, 7])); // 12",
      },
      {
        label: "Swap variables",
        code: "let a = 5, b = 10;\n[a, b] = [b, a];\nconsole.log(a, b); // 10 5",
        note: "No temporary variable needed.",
      },
      {
        label: "Rest operator with destructuring",
        code: "const [first, ...rest] = [1, 2, 3, 4, 5];\n\nconsole.log(first); // 1\nconsole.log(rest);  // [2, 3, 4, 5]",
        note: "Rest (`...`) collects the remaining values.",
      },
      {
        label: "Practical example",
        code: "const product = {\n  id: 101,\n  name: 'Laptop',\n  price: 999,\n  specs: {\n    ram: '16GB',\n    storage: '512GB SSD'\n  }\n};\n\nconst { name, price, specs: { ram } } = product;\nconsole.log(name, price, ram);\n// Laptop 999 16GB",
      },
    ],
  },
  {
    day: 31,
    group: 'core',
    title: 'Spread & Rest Operators',
    tagline: 'Spread expands. Rest collects. Same syntax, opposite jobs.',
    image: '/javascript-notes/ep31-spread-and-rest.jpeg',
    tags: ['ES6', 'Spread', 'Rest'],
    notes: [
      { k: 'Same three dots', v: 'Both are `...`. Spread expands an iterable into individual elements; rest collects multiple items into a single entity.' },
      { k: 'Telling them apart', v: 'Position decides. Spread appears anywhere a list of values is expected; rest appears in parameters or on the left of a destructuring.' },
      { k: 'Spread', v: 'Works on arrays (`[...arr1, ...arr2]`), objects (`{...obj1, ...obj2}`) and strings (`[..."Hello"]`). Mostly used to copy, merge or expand.' },
      { k: 'Rest in functions', v: '`function sum(...numbers)` collects every argument into a real array you can reduce over.' },
      { k: 'Rest in objects', v: '`const { name, ...details } = user` puts the remaining properties into a new object.' },
      { k: 'The catch', v: 'Rest must be the LAST parameter or element. And spread creates a SHALLOW copy — nested objects and arrays are still shared.' },
    ],
    theory: [
      {
        h: "Spread & Rest Operators — Overview",
        p: "Spread and rest are two uses of the same three-dot syntax (`...`), and the episode's tagline captures the whole idea: **Spread expands, Rest collects. Small syntax, BIG impact!** They are powerful syntax for expanding and collecting values in **arrays**, **objects**, and **functions**. Although they look identical, the position in which you write `...` decides which one you get: if you write it where values are being *consumed* (inside an array literal, an object literal, or a function call) it spreads; if you write it where values are being *declared* (a function parameter list or the left side of a destructuring assignment) it collects.",
      },
      {
        h: "1. What Are They?",
        p: "The page opens with a two-row comparison table:\n\n- **`...` (Spread)** — Used for arrays, objects, strings and other iterables. It **expands elements into individual items**.\n- **`...` (Rest)** — Used for function parameters, arrays and objects. It **collects multiple items into a single entity**.\n\nThe highlighted memory hook underneath boils it down to a single line worth memorising: **Spread = Expand**, **Rest = Collect**. Everything else in the episode is an application of that one sentence.",
      },
      {
        h: "2. Spread Operator (...)",
        p: "Spread **expands an iterable (array, string, object) into individual elements**. The page shows three contexts side by side.\n\n- **In arrays** — `[...arr1, ...arr2]` unpacks both arrays' items into one new flat array, giving `[1, 2, 3, 4, 5, 6]`.\n- **In objects** — `{ ...obj1, ...obj2 }` copies every own property of each object into a fresh object, giving `{ a: 1, b: 2, c: 3, d: 4 }`.\n- **In strings** — `[...str]` treats the string as an iterable of characters, so `\"Hello\"` becomes `[\"H\", \"e\", \"l\", \"l\", \"o\"]`.\n\nThe closing note sums up the intent: **spread is mostly used to copy, merge, or expand values.**",
        code: "const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst merged = [...arr1, ...arr2];\nconsole.log(merged);\n// [1, 2, 3, 4, 5, 6]",
      },
      {
        h: "3. Rest Operator (...)",
        p: "Rest does the opposite: it **collects multiple elements into a single array or object**.\n\n- **In function parameters** — `function sum(...numbers)` gathers however many arguments the caller passes into a real array called `numbers`, which you can then `reduce()` over. `sum(1, 2, 3, 4)` gives `10` and `sum(5, 10)` gives `15`, with no change to the function.\n- **In arrays (destructuring)** — `const [first, ...rest] = [1, 2, 3, 4, 5]` pulls the head out into `first` (`1`) and sweeps everything left over into `rest` (`[2, 3, 4, 5]`).\n\nThe locked warning box on the page is a hard rule: **rest must be the last parameter in functions and the last element in array destructuring.** It makes sense — \"everything else\" can only be computed once there is nothing after it to claim a slot.",
        code: "function sum(...numbers) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum(1, 2, 3, 4)); // 10\nconsole.log(sum(5, 10));      // 15",
      },
      {
        h: "4. Rest in Objects (ES2018+)",
        p: "Rest inside object destructuring arrived later than the array/function version — it is an **ES2018+** feature. You name the properties you care about and let `...` sweep up whatever remains. In the example, `name` is pulled out as `'Alice'` while `details` becomes a brand-new object holding the leftovers: `{ age: 25, city: 'New York', role: 'Developer' }`. The side note states it precisely: **rest in objects collects the remaining properties into a new object.** This is the idiomatic way to strip a field off an object (say, removing a password before logging a user) without mutating the original.",
        code: "const { name, ...details } = {\n  name: 'Alice',\n  age: 25,\n  city: 'New York',\n  role: 'Developer'\n};\n\nconsole.log(name);    // Alice\nconsole.log(details); // { age: 25, city: 'New York', role: 'Developer' }",
      },
      {
        h: "5. Copying & Cloning",
        p: "Spread's most common everyday job is making a copy that does not share identity with the original.\n\n- **Array copy** — `const copy = [...original];` then `copy.push(4)` leaves `original` as `[1, 2, 3]` while `copy` becomes `[1, 2, 3, 4]`. The two arrays are genuinely separate.\n- **Object copy** — `const copyUser = { ...user };` then `copyUser.age = 35` leaves `user.age` at `30`.\n\nBut the page ends the section with an important caveat you must not skip: **spread creates shallow copies — nested objects/arrays are still shared.** Only the top level is duplicated; if a property holds another object, both the copy and the original point at that same inner object, so mutating it through one is visible through the other.",
      },
      {
        h: "6. Practical Use Cases",
        p: "Four bite-sized real-world patterns are shown:\n\n- **Add items to an array** — `const newItems = [...items, 4, 5];` produces `[1, 2, 3, 4, 5]` without touching `items`.\n- **Merge objects** — `const userSettings = { ...settings, fontSize: 14 };` gives `{ theme: 'dark', fontSize: 14 }`. Later keys win, which is exactly how you layer user overrides on top of defaults.\n- **Pass multiple args** — `Math.max(...nums)` spreads `[10, 20, 30]` into three separate arguments, so it prints `30`. `Math.max` does not accept an array, so spread is the bridge.\n- **Function with variable args** — `function greet(greeting, ...names)` fixes the first parameter and collects the rest, so `greet('Hi', 'John', 'Jane')` greets each name in turn.\n\nThe takeaway note: this **makes your code clean, flexible, and easier to work with.**",
      },
      {
        h: "7. Spread vs Rest",
        p: "The side-by-side comparison table, row by row:\n\n- **Purpose** — Spread: expands elements. Rest: collects elements.\n- **Used in** — Spread: arrays, objects, strings, function calls. Rest: function parameters, arrays, objects.\n- **Syntax position** — Spread: anywhere. Rest: last in parameters / destructuring.\n- **Example** — Spread: `const arr = [...items];` and `const obj = {...user};`. Rest: `function f(...args) {}` and `const [a, ...rest] = arr;`.\n\nThe single most useful discriminator is the syntax position: rest is pinned to the last slot, spread can appear anywhere.",
      },
      {
        h: "8. Quick Example — Combine All",
        p: "The final worked example stitches all three usages into one snippet: **rest in an object** (`const { name, ...otherDetails } = user;`), **spread in an array** (`const newArr = [0, ...arr, 4, 5];`), and **rest in a function** (`function printInfo(greet, ...details)`). The call then uses spread again at the call site — `...Object.values(otherDetails)` and `...newArr` — to flatten both collections into the argument list, which `printInfo`'s rest parameter promptly re-collects into `details`. The sticky note beside it is the mnemonic: **Rest helps you collect, Spread helps you expand.**",
        code: "const user = { name: 'John', age: 28, city: 'Delhi' };\nconst { name, ...otherDetails } = user;   // Rest in object\nconst arr = [1, 2, 3];\nconst newArr = [0, ...arr, 4, 5];         // Spread in array\n\nfunction printInfo(greet, ...details) {   // Rest in function\n  console.log(greet, details);\n}\n\nprintInfo('User Info:', name, ...Object.values(otherDetails), ...newArr);",
      },
      {
        h: "Key Takeaways",
        p: "- Spread **expands** elements.\n- Rest **collects** elements.\n- Used in arrays, objects, and function parameters.\n- Makes code shorter, cleaner and more powerful.\n\nThe episode signs off with: **Master Spread & Rest — Write less code, do more!**",
      },
    ],
    snippets: [
      {
        label: "Spread in arrays",
        code: "const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst merged = [...arr1, ...arr2];\nconsole.log(merged);\n// [1, 2, 3, 4, 5, 6]",
        note: "Unpacks both arrays into one new flat array.",
      },
      {
        label: "Spread in objects",
        code: "const obj1 = { a: 1, b: 2 };\nconst obj2 = { c: 3, d: 4 };\nconst merged = { ...obj1, ...obj2 };\nconsole.log(merged);\n// { a: 1, b: 2, c: 3, d: 4 }",
        note: "Copies own properties of both objects into a fresh object.",
      },
      {
        label: "Spread in strings",
        code: "const str = \"Hello\";\nconst chars = [...str];\nconsole.log(chars);\n// [\"H\", \"e\", \"l\", \"l\", \"o\"]",
        note: "Strings are iterable, so spread splits them into characters.",
      },
      {
        label: "Rest in function parameters",
        code: "function sum(...numbers) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum(1, 2, 3, 4)); // 10\nconsole.log(sum(5, 10));      // 15",
        note: "`numbers` is a real array, so array methods work on it.",
      },
      {
        label: "Rest in array destructuring",
        code: "const [first, ...rest] = [1, 2, 3, 4, 5];\nconsole.log(first); // 1\nconsole.log(rest);  // [2, 3, 4, 5]",
      },
      {
        label: "Rest in objects (ES2018+)",
        code: "const { name, ...details } = {\n  name: 'Alice',\n  age: 25,\n  city: 'New York',\n  role: 'Developer'\n};\n\nconsole.log(name);    // Alice\nconsole.log(details); // { age: 25, city: 'New York', role: 'Developer' }",
        note: "Remaining properties are collected into a **new object**.",
      },
      {
        label: "Array copy with spread",
        code: "const original = [1, 2, 3];\nconst copy = [...original];\ncopy.push(4);\nconsole.log(original); // [1, 2, 3]\nconsole.log(copy);     // [1, 2, 3, 4]",
      },
      {
        label: "Object copy with spread",
        code: "const user = { name: 'John', age: 30 };\nconst copyUser = { ...user };\ncopyUser.age = 35;\nconsole.log(user.age);     // 30\nconsole.log(copyUser.age); // 35",
        note: "Shallow copy — nested objects would still be shared.",
      },
      {
        label: "Add items to array",
        code: "const items = [1, 2, 3];\nconst newItems = [...items, 4, 5];\n// [1, 2, 3, 4, 5]",
      },
      {
        label: "Merge objects",
        code: "const settings = { theme: 'dark' };\nconst userSettings = { ...settings, fontSize: 14 };\n// { theme: 'dark', fontSize: 14 }",
      },
      {
        label: "Pass multiple args with spread",
        code: "const nums = [10, 20, 30];\nconsole.log(Math.max(...nums));\n// 30",
        note: "`Math.max` takes separate arguments, not an array.",
      },
      {
        label: "Function with variable args",
        code: "function greet(greeting, ...names) {\n  names.forEach(n =>\n    console.log(`${greeting}, ${n}!`));\n}\ngreet('Hi', 'John', 'Jane');",
      },
      {
        label: "Combine all — rest + spread together",
        code: "const user = { name: 'John', age: 28, city: 'Delhi' };\nconst { name, ...otherDetails } = user;   // Rest in object\nconst arr = [1, 2, 3];\nconst newArr = [0, ...arr, 4, 5];         // Spread in array\n\nfunction printInfo(greet, ...details) {   // Rest in function\n  console.log(greet, details);\n}\n\nprintInfo('User Info:', name, ...Object.values(otherDetails), ...newArr);",
      },
    ],
  },
  {
    day: 32,
    group: 'core',
    title: 'Modules (Import / Export)',
    tagline: 'Split your code into reusable, organized files.',
    image: '/javascript-notes/ep32-modules-import-export.jpeg',
    tags: ['ES6', 'Modules', 'import/export'],
    notes: [
      { k: 'Why', v: 'Modules give code reusability, better organization, no global scope pollution, and easier maintenance. ES6 modules work in all modern browsers.' },
      { k: 'Named exports', v: '`export const PI = 3.14` — many per file, imported by exact name with `import { PI, add } from "./math.js"`.' },
      { k: 'Default export', v: '`export default function greet(name) {…}` — one per file, imported under any name you like.' },
      { k: 'Export list', v: '`export { PI, square, cube }` at the bottom exports several things at once.' },
      { k: 'Renaming', v: '`import { add as sum, PI as PiValue }` avoids name conflicts.' },
      { k: 'Namespace import', v: '`import * as constants from "./constants.js"` — use only when you really need everything.' },
      { k: 'In HTML', v: '`<script type="module" src="./app.js"></script>`. Modules run in strict mode automatically, have their own scope, are fetched asynchronously, and do not add to window.' },
    ],
    theory: [
      {
        h: "Modules (Import / Export) — Overview",
        p: "**Modules are the building blocks of modern JavaScript apps.** Modules let you split your code into reusable files, and they help keep your code **organized** and **maintainable**. Instead of one enormous script where every function fights for the same global namespace, you write small focused files that each declare exactly what they offer (`export`) and exactly what they need (`import`). This episode covers what modules are, every flavour of export and import, and how to switch them on in the browser.",
      },
      {
        h: "1. What Are Modules?",
        p: "Modules are **external JavaScript files that export values and import them in other files**. The page lists four concrete benefits:\n\n- **Code reusability** — write a helper once, use it in ten files.\n- **Better organization** — related code lives together in a named file.\n- **Avoiding global scope pollution** — module-level names stay inside the module instead of leaking onto `window`.\n- **Easier maintenance** — small files with clear boundaries are far easier to change safely.\n\nThe starred note reassures you about support: **ES6 Modules are supported in all modern browsers**, so you do not need a bundler just to try them.",
      },
      {
        h: "2. Types of Exports",
        p: "The page tabulates three export forms — type, syntax, description, example:\n\n- **Named Export** — syntax `export const name = value;`. Exports **multiple values by name**. Example: `export const PI = 3.14;` and `export function add() {}`.\n- **Default Export** — syntax `export default value;`. Exports **a single main value**. Example: `export default function() {}`.\n- **Export List** — syntax `export { name1, name2 };`. Exports **multiple things together** in one statement at the bottom of the file. Example: `const x = 1; export { x };`.\n\nA file may have many named exports but **at most one** default export, and it may mix both.",
      },
      {
        h: "3. Named Exports",
        p: "With named exports you tag each value at its declaration by writing `export` in front of it. `math.js` exports a constant, an arrow function and a function declaration; `app.js` then pulls them in by name inside curly braces: `import { PI, add, multiply } from './math.js';`. The names on both sides must match exactly (unless you rename — section 6). Logging gives `3.14`, `5` and `8`. The bulb note explains the real advantage: **you can import only what you need using named imports** — if a file exports twenty helpers and you want one, you import one.",
        code: "// math.js\nexport const PI = 3.14;\nexport const add = (a, b) => a + b;\nexport function multiply(a, b) {\n  return a * b;\n}\n\n// app.js\nimport { PI, add, multiply } from './math.js';\nconsole.log(PI);            // 3.14\nconsole.log(add(2, 3));     // 5\nconsole.log(multiply(2, 4)); // 8",
      },
      {
        h: "4. Default Export",
        p: "A default export marks the one \"main\" thing a file is about. `greet.js` writes `export default function greet(name) { ... }`, and `app.js` imports it **without curly braces**: `import greet from './greet.js';`. Because it is the default, the importing file chooses the local name freely — the identifier is not required to match the original. Calling `greet('John')` logs `Hello, John!`. The starred rule to remember: **each module can have only one default export.**",
        code: "// greet.js\nexport default function greet(name) {\n  return `Hello, ${name}!`;\n}\n\n// app.js\nimport greet from './greet.js';\nconsole.log(greet('John'));\n// Hello, John!",
      },
      {
        h: "5. Export List (Multiple Exports Together)",
        p: "Instead of prefixing every declaration with `export`, you can declare everything normally and then publish a list in one statement at the end of the file: `export { PI, square, cube };`. `utils.js` does exactly that, and `app.js` imports the trio in the usual named form, printing `16`, `27` and `3.14`. The note explains when to reach for it: **great when you want to export multiple things at once.** It also gives you a single place to look to see a module's public surface, which is a readability win in larger files.",
      },
      {
        h: "6. Rename Imports",
        p: "Named imports can be aliased with the `as` keyword: `import { add as sum, PI as PIValue } from './math.js';`. From that point on the local file refers to `sum` and `PIValue`, so `sum(2, 3)` logs `5` and `PIValue` logs `3.14`. The bulb note gives the motivation: **use renaming to avoid name conflicts** — for instance when two different modules both export something called `format`, or when an imported name would shadow a local variable you already have.",
        code: "// math.js\nexport const add = (a, b) => a + b;\nexport const PI = 3.14;\n\n// app.js\nimport { add as sum, PI as PIValue } from './math.js';\nconsole.log(sum(2, 3)); // 5\nconsole.log(PIValue);   // 3.14",
      },
      {
        h: "7. Import Everything (*)",
        p: "`import * as constants from './constants.js';` grabs every named export of a module and bundles it into a single namespace object, so you reach the values as `constants.API_URL`, `constants.TIMEOUT` and `constants.VERSION`. It is handy for grouped constants where the namespace prefix actually reads well. But the locked warning is deliberate: **use `*` only when you really need everything.** Star-importing indiscriminately hides which values you actually depend on and defeats the tree-shaking that lets bundlers drop unused code.",
        code: "// constants.js\nexport const API_URL = \"https://api.com\";\nexport const TIMEOUT = 5000;\nexport const VERSION = \"1.0.0\";\n\n// app.js\nimport * as constants from './constants.js';\nconsole.log(constants.API_URL);\nconsole.log(constants.TIMEOUT);\nconsole.log(constants.VERSION);",
      },
      {
        h: "8. Default + Named Export Together",
        p: "A module can offer both at once. `user.js` default-exports the `User` constructor function and additionally named-exports `ROLE` and `isActive`. The importing file combines the two syntaxes in a single statement: `import User, { ROLE, isActive } from './user.js';`. Constructing `new User('Alice')` then logging gives `Alice`, `Admin` and `true`. The locked rule about ordering: **default import first, then named imports inside `{ }`.** You cannot flip that order.",
        code: "// user.js\nexport default function User(name) {\n  this.name = name;\n}\nexport const ROLE = 'Admin';\nexport const isActive = true;\n\n// app.js\nimport User, { ROLE, isActive } from './user.js';\nconst u = new User('Alice');\nconsole.log(u.name);    // Alice\nconsole.log(ROLE);      // Admin\nconsole.log(isActive);  // true",
      },
      {
        h: "9. Important Notes",
        p: "The clipboard panel collects the behavioural rules that trip people up:\n\n- Use `<script type=\"module\">` in HTML — without it the browser treats the file as a classic script and `import`/`export` are syntax errors.\n- **Modules run in strict mode automatically** — you never write `'use strict'` in a module.\n- **Each module has its own scope** — top-level `this`, variables and functions belong to the module, not the page.\n- Variables, functions, and classes declared in a module are **not added to the global object (`window`)**.\n- **Modules are fetched asynchronously** — they behave like deferred scripts, so they do not block HTML parsing and run after the document is parsed.",
      },
      {
        h: "10. How to Use Modules in HTML",
        p: "The final section shows the minimal page that boots a module: a normal HTML5 skeleton whose only script tag carries the `type=\"module\"` attribute and points at `./app.js`. The note next to it explains the single thing that matters here: **`type=\"module\"` tells the browser this script uses ES6 Modules.** That one attribute switches on module resolution, strict mode, module scope and deferred async loading all at once.",
        code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <title>Modules Example</title>\n</head>\n<body>\n  <script type=\"module\" src=\"./app.js\"></script>\n</body>\n</html>",
      },
      {
        h: "Key Takeaways",
        p: "- Modules keep your code clean and well-organized.\n- **Export to share. Import to use.**\n- Reuse code. Save time.\n- Build better apps.\n\nThe episode closes with: **Write modular code today, build scalable apps tomorrow!**",
      },
    ],
    snippets: [
      {
        label: "Named exports — math.js",
        code: "export const PI = 3.14;\nexport const add = (a, b) => a + b;\nexport function multiply(a, b) {\n  return a * b;\n}",
      },
      {
        label: "Named imports — app.js",
        code: "import { PI, add, multiply } from './math.js';\nconsole.log(PI);             // 3.14\nconsole.log(add(2, 3));      // 5\nconsole.log(multiply(2, 4)); // 8",
        note: "Import only what you need.",
      },
      {
        label: "Default export — greet.js",
        code: "export default function greet(name) {\n  return `Hello, ${name}!`;\n}",
        note: "Only **one** default export per module.",
      },
      {
        label: "Default import — app.js",
        code: "import greet from './greet.js';\nconsole.log(greet('John'));\n// Hello, John!",
        note: "No curly braces, and you choose the local name.",
      },
      {
        label: "Export list — utils.js",
        code: "const PI = 3.14;\nconst square = (n) => n * n;\nconst cube = (n) => n * n * n;\nexport { PI, square, cube };",
      },
      {
        label: "Import from an export list — app.js",
        code: "import { PI, square, cube } from './utils.js';\nconsole.log(square(4)); // 16\nconsole.log(cube(3));   // 27\nconsole.log(PI);        // 3.14",
      },
      {
        label: "Rename imports with `as`",
        code: "import { add as sum, PI as PIValue } from './math.js';\nconsole.log(sum(2, 3)); // 5\nconsole.log(PIValue);   // 3.14",
        note: "Avoids name conflicts.",
      },
      {
        label: "Import everything (*)",
        code: "import * as constants from './constants.js';\nconsole.log(constants.API_URL);\nconsole.log(constants.TIMEOUT);\nconsole.log(constants.VERSION);",
      },
      {
        label: "Default + named export — user.js",
        code: "export default function User(name) {\n  this.name = name;\n}\nexport const ROLE = 'Admin';\nexport const isActive = true;",
      },
      {
        label: "Default + named import — app.js",
        code: "import User, { ROLE, isActive } from './user.js';\nconst u = new User('Alice');\nconsole.log(u.name);   // Alice\nconsole.log(ROLE);     // Admin\nconsole.log(isActive); // true",
        note: "Default first, then named imports in `{ }`.",
      },
      {
        label: "Loading a module in HTML",
        code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <title>Modules Example</title>\n</head>\n<body>\n  <script type=\"module\" src=\"./app.js\"></script>\n</body>\n</html>",
        note: "`type=\"module\"` tells the browser this script uses ES6 Modules.",
      },
    ],
  },
  {
    day: 33,
    group: 'core',
    title: 'Higher Order Functions',
    tagline: 'Functions that work with other functions.',
    image: '/javascript-notes/ep33-higher-order-functions.jpeg',
    tags: ['Functional', 'Callbacks', 'HOF'],
    notes: [
      { k: 'The definition', v: 'A function is higher order if it takes one or more functions as arguments, returns a function, or both.' },
      { k: 'Taking a function', v: '`processUserInput(greet)` receives greet as a callback and decides when to call it.' },
      { k: 'Returning a function', v: '`multiplier(2)` returns a new function that doubles — a function factory, which is a closure in action.' },
      { k: 'The built-ins', v: 'forEach (act on each, returns nothing), map (transform), filter (select), reduce (collapse to one value), sort (MUTATES the original), every (all pass?), some (any pass?).' },
      { k: 'Why they matter', v: 'Less code, reusability, abstraction, better readability, and the door into functional programming.' },
      { k: 'Chaining', v: 'Because most of them return a new array, you can chain filter → map → reduce into one expressive pipeline.' },
    ],
    theory: [
      {
        h: "Higher Order Functions — Overview",
        p: "**HOFs are the superpower of JavaScript.** A higher order function is simply a function that works with other functions: it can take functions as **arguments** or **return** functions. This is possible because JavaScript treats functions as first-class values — they can be stored in variables, passed around, and returned just like numbers or strings. Once that clicks, huge parts of the language (array methods, event handlers, timers) stop looking like special syntax and start looking like ordinary functions that happen to accept a function.",
      },
      {
        h: "1. What Are Higher Order Functions?",
        p: "A function is called **Higher Order** if it does **at least one** of the following:\n\n- Takes one or more functions as arguments.\n- Returns a function as its result.\n\nEither condition alone is enough — it does not need both. The bulb note lists familiar ones you have already been using without naming them: `map()`, `filter()`, `reduce()`, `forEach()`, `sort()`, `setTimeout()`, and more.",
      },
      {
        h: "2. Examples",
        p: "Two minimal examples show each of the two qualifying behaviours.\n\n- **Takes a function as argument** — `processUserInput(callback)` accepts any function, defines `const name = 'Alice'`, and logs `callback(name)`. Passing `greet` in gives `Hello, Alice`. The function passed in is called a **callback**.\n- **Returns a function** — `multiplier(factor)` returns an inner function that closes over `factor`. `const double = multiplier(2);` builds a specialised function, and `double(5)` gives `10`. This is a function *factory*: one generic function manufacturing many concrete ones.",
        code: "// Takes a Function as Argument\nfunction greet(name) {\n  return `Hello, ${name}`;\n}\n\nfunction processUserInput(callback) {\n  const name = 'Alice';\n  console.log(callback(name));\n}\n\nprocessUserInput(greet); // Hello, Alice\n\n// Returns a Function\nfunction multiplier(factor) {\n  return function (num) {\n    return num * factor;\n  };\n}\n\nconst double = multiplier(2);\nconsole.log(double(5)); // 10",
      },
      {
        h: "3. Why Use Higher Order Functions?",
        p: "The checklist beside the HOF superhero gives five reasons:\n\n- **Write less code** — one line of `map` replaces a four-line `for` loop with an index, a length check and a push.\n- **Reusability** — the generic part (the looping/iteration machinery) is written once; you only supply the varying part.\n- **Abstraction** — you say *what* you want done, not *how* to walk the array.\n- **Better readability** — `filter(isAdult)` reads like English.\n- **Functional programming** — HOFs are the gateway to composing small pure functions instead of mutating shared state.",
      },
      {
        h: "4. Common Higher Order Functions in JavaScript",
        p: "The reference table lists method, purpose and whether it mutates the original array:\n\n- **`forEach()`** — performs an action for each element. Mutates original? **No**.\n- **`map()`** — creates a new array with results. Mutates original? **No**.\n- **`filter()`** — creates a new array with elements that pass a test. Mutates original? **No**.\n- **`reduce()`** — reduces array to a single value. Mutates original? **No**.\n- **`sort()`** — sorts the array elements. Mutates original? **Yes**.\n- **`every()`** — checks if all elements pass a test. Mutates original? **No**.\n- **`some()`** — checks if at least one element passes a test. Mutates original? **No**.\n\n`sort()` is the odd one out and the single row worth memorising: it is the only method here that changes the array in place.",
      },
      {
        h: "5. Practical Examples",
        p: "Seven short demonstrations, one per method:\n\n- **`forEach()`** — do something for each element. `nums.forEach(num => console.log(num * 2))` prints `2 4 6`, and the annotation stresses there is **no return value** — you use it for side effects only.\n- **`map()`** — transform each element. `nums.map(num => num * 2)` returns a **new array** `[2, 4, 6]`.\n- **`filter()`** — keep elements passing a test. `nums.filter(num => num % 2 === 0)` on `[1,2,3,4,5]` returns a **new array** `[2, 4]`.\n- **`reduce()`** — collapse to a single value. `nums.reduce((acc, curr) => acc + curr, 0)` on `[1,2,3,4]` gives `10`; the `0` is the **initial value**.\n- **`every()`** — `[2,4,6].every(num => num % 2 === 0)` gives `true` because *all* pass.\n- **`some()`** — `[1,3,4,5].some(num => num % 2 === 0)` gives `true` because *at least one* passes.\n- **`sort()`** — `['Charlie','Alice','Bob'].sort()` gives `['Alice','Bob','Charlie']`, with the red warning: **`sort()` changes the original array!**\n\nThe starred note ties the section together: **these methods take functions (callbacks) as arguments. That's what makes them Higher Order Functions!**",
      },
      {
        h: "6. Custom Higher Order Function",
        p: "You are not limited to the built-ins — you can write your own. `operate(arr, operation)` takes an array and a **function**, loops with a plain `for`, pushes `operation(arr[i])` into a result array, and returns it. Calling `operate(nums, n => n * n)` on `[1, 2, 3]` gives `[1, 4, 9]` — you have essentially rebuilt `map()` from scratch, which is the best way to see that there is no magic in it. The trophy note: **HOFs help you create powerful, flexible, and reusable code!**",
        code: "function operate(arr, operation) {\n  const result = [];\n  for (let i = 0; i < arr.length; i++) {\n    result.push(operation(arr[i]));\n  }\n  return result;\n}\n\nconst nums = [1, 2, 3];\nconst squared = operate(nums, n => n * n);\nconsole.log(squared); // [1, 4, 9]",
      },
      {
        h: "7. Nested Higher Order Functions",
        p: "Because `filter()` and `map()` each return a new array, you can chain them into a pipeline and finish with `reduce()`. The example walks `[1, 2, 3, 4]` through three stages, which the side panel draws as a flow:\n\n- **Filter even** → `[2, 4]`\n- **Map × 10** → `[20, 40]`\n- **Reduce sum** → `60`\n\nEach step is a tiny, independently readable transformation, and the data flows downward through them. This is the everyday shape of real-world JavaScript data handling.",
        code: "const nums = [1, 2, 3, 4];\nconst result = nums\n  .filter(n => n % 2 === 0)         // [2, 4]\n  .map(n => n * 10)                 // [20, 40]\n  .reduce((acc, n) => acc + n, 0);  // 60\n\nconsole.log(result); // 60",
      },
      {
        h: "Key Takeaways",
        p: "- HOFs take functions as arguments or return functions.\n- They make code reusable and easier to maintain.\n- They enable functional and declarative programming.\n- Master HOFs — write better JavaScript!\n\nThe closing line: **Higher Order Functions = Higher Level of JavaScript Mastery!**",
      },
    ],
    snippets: [
      {
        label: "Takes a function as argument",
        code: "function greet(name) {\n  return `Hello, ${name}`;\n}\n\nfunction processUserInput(callback) {\n  const name = 'Alice';\n  console.log(callback(name));\n}\n\nprocessUserInput(greet); // Hello, Alice",
        note: "The function passed in is called a **callback**.",
      },
      {
        label: "Returns a function",
        code: "function multiplier(factor) {\n  return function (num) {\n    return num * factor;\n  };\n}\n\nconst double = multiplier(2);\nconsole.log(double(5)); // 10",
        note: "A function factory — the inner function closes over `factor`.",
      },
      {
        label: "forEach() — do something for each element",
        code: "const nums = [1, 2, 3];\nnums.forEach(num => {\n  console.log(num * 2);\n});\n// Output: 2 4 6",
        note: "No return value — used for side effects.",
      },
      {
        label: "map() — transform each element",
        code: "const nums = [1, 2, 3];\nconst doubled = nums.map(num => num * 2);\nconsole.log(doubled); // [2, 4, 6]",
        note: "Returns a new array.",
      },
      {
        label: "filter() — filter elements",
        code: "const nums = [1, 2, 3, 4, 5];\nconst even = nums.filter(num => num % 2 === 0);\nconsole.log(even); // [2, 4]",
        note: "Returns a new array.",
      },
      {
        label: "reduce() — reduce to a single value",
        code: "const nums = [1, 2, 3, 4];\nconst sum = nums.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum); // 10",
        note: "`0` is the initial value.",
      },
      {
        label: "every() — check if all pass the test",
        code: "const nums = [2, 4, 6];\nconst allEven = nums.every(num => num % 2 === 0);\nconsole.log(allEven); // true",
      },
      {
        label: "some() — check if any pass the test",
        code: "const nums = [1, 3, 4, 5];\nconst hasEven = nums.some(num => num % 2 === 0);\nconsole.log(hasEven); // true",
      },
      {
        label: "sort() — sort elements (mutates original)",
        code: "const names = ['Charlie', 'Alice', 'Bob'];\nnames.sort();\nconsole.log(names); // ['Alice', 'Bob', 'Charlie']",
        note: "Warning: `sort()` changes the original array!",
      },
      {
        label: "Custom higher order function",
        code: "function operate(arr, operation) {\n  const result = [];\n  for (let i = 0; i < arr.length; i++) {\n    result.push(operation(arr[i]));\n  }\n  return result;\n}\n\nconst nums = [1, 2, 3];\nconst squared = operate(nums, n => n * n);\nconsole.log(squared); // [1, 4, 9]",
        note: "Essentially a hand-rolled `map()`.",
      },
      {
        label: "Nested HOFs — filter → map → reduce",
        code: "const nums = [1, 2, 3, 4];\nconst result = nums\n  .filter(n => n % 2 === 0)         // [2, 4]\n  .map(n => n * 10)                 // [20, 40]\n  .reduce((acc, n) => acc + n, 0);  // 60\n\nconsole.log(result); // 60",
      },
    ],
  },
  {
    day: 34,
    group: 'core',
    title: 'Array Methods — map, filter, reduce',
    tagline: 'Master these three and you solve 90% of array problems.',
    image: '/javascript-notes/ep34-array-methods-map-filter-reduce.jpeg',
    tags: ['Arrays', 'map', 'reduce'],
    notes: [
      { k: 'The shared trait', v: 'None of them change the original array. They return something new — which is what makes them safe to chain.' },
      { k: 'map()', v: 'Applies a function to each element and returns a NEW array of the same length. Use it to transform.' },
      { k: 'filter()', v: 'Returns a new array containing only the elements whose callback returns true. Use it to select.' },
      { k: 'reduce()', v: 'Runs a reducer over each element, carrying an accumulator, and returns a SINGLE value — a sum, a max, a joined string, a count-by-key object.' },
      { k: 'Choosing', v: 'Transform each element → map. Select elements matching a condition → filter. Combine all elements into one value → reduce.' },
      { k: 'Chaining', v: '`nums.filter(n => n % 2 === 0).map(n => n * 10).reduce((a, c) => a + c, 0)` reads as one clear pipeline.' },
    ],
    theory: [
      {
        h: "Array Methods: map() · filter() · reduce() — Overview",
        p: "The sticky note sets the stakes: **master these 3 and you can solve 90% of array problems!** These are powerful methods to **transform**, **filter**, and **reduce** arrays. They are the three verbs of everyday array work: `map()` changes each item, `filter()` decides which items survive, and `reduce()` folds the whole array down to one value. Together they replace almost every hand-written `for` loop you would otherwise write.",
      },
      {
        h: "1. Why Array Methods?",
        p: "Four reasons are listed:\n\n- **Make code shorter and cleaner.**\n- **Avoid complex loops** — no manual index, no `length` check, no off-by-one bugs.\n- **More readable and expressive** — the method name announces the intent.\n- **Built for functional programming.**\n\nThe starred note adds the property that makes them safe to use freely: **they don't change the original array** (except `reduce`, which returns a single value rather than an array). Because nothing is mutated, you can chain them without worrying about earlier steps being corrupted.",
      },
      {
        h: "2. Overview",
        p: "The summary table — method, purpose, returns, changes original array?\n\n- **`map()`** — transforms each element and returns a new array. Returns: **new array**. Changes original: **No**.\n- **`filter()`** — filters elements based on a condition and returns a new array. Returns: **new array**. Changes original: **No**.\n- **`reduce()`** — reduces the array to a single value. Returns: **single value**. Changes original: **No**.\n\nNote that all three answer \"No\" to mutation — the difference between them is purely what comes *out*.",
      },
      {
        h: "3. map() — Transform Each Element",
        p: "`map()` **creates a new array by applying a function to each element**. The diagram on the page shows `nums` as boxes `1 2 3 4`, with a `×2` arrow dropping from each into `doubled` = `2 4 6 8` — one input produces exactly one output, so the new array always has the **same length** as the original.\n\nThe *More Examples* panel shows three more transforms:\n\n- **Square each number** — `nums.map(n => n * n)` → `[1, 4, 9, 16]`.\n- **Convert to strings** — `nums.map(String)` → `[\"1\", \"2\", \"3\", \"4\"]` (you can pass an existing function directly, not just an arrow).\n- **Get lengths of words** — `words.map(w => w.length)` on `[\"hi\", \"hello\", \"hey\"]` → `[2, 5, 3]` (the output type need not match the input type).",
        code: "const nums = [1, 2, 3, 4];\nconst doubled = nums.map(num => num * 2);\nconsole.log(doubled); // [2, 4, 6, 8]",
      },
      {
        h: "4. filter() — Filter Elements",
        p: "`filter()` **creates a new array with elements that pass a test (return true)**. The callback is a predicate: return `true` to keep the element, `false` to drop it. The diagram shows `1 2 3 4 5 6` with red crosses on the odd numbers and green ticks on the evens, leaving `even` = `2 4 6`. Unlike `map()`, the result is **shorter than or equal to** the original — it never transforms the values it keeps.\n\nThe *More Examples* panel:\n\n- **Get numbers greater than 3** — `nums.filter(n => n > 3)` → `[4, 5, 6]`.\n- **Filter by length** — from `[\"apple\", \"bat\", \"cat\", \"elephant\"]`, `filter(w => w.length > 3)` → `[\"apple\", \"elephant\"]`.\n- **Filter objects** — from an array of user objects, `users.filter(u => u.age >= 18)` → `[{name: \"Alice\", age: 22}, {name: \"Charlie\", age: 25}]`, dropping 17-year-old Bob. This is the pattern you will use constantly against API data.",
        code: "const nums = [1, 2, 3, 4, 5, 6];\nconst even = nums.filter(n => n % 2 === 0);\nconsole.log(even); // [2, 4, 6]",
      },
      {
        h: "5. reduce() — Reduce to a Single Value",
        p: "`reduce()` **executes a reducer function on each element, resulting in a single output**. Its callback takes two key parameters — the **accumulator (`acc`)**, which carries the running result, and the **current value (`curr`)** — and the second argument to `reduce()` is the accumulator's **initial value**. The page's diagram traces it precisely: `acc` starts at `0` then becomes `1 → 3 → 6 → 10` as `curr` walks `1, 2, 3, 4`, so `sum` is `10` (`0 + 1 + 2 + 3 + 4`).\n\nThe *More Examples* panel shows that \"a single value\" can be any type at all:\n\n- **Multiply all numbers** — `nums.reduce((acc, curr) => acc * curr, 1)` → `24` (note the initial value is `1`, not `0`, for a product).\n- **Find maximum number** — `nums.reduce((acc, curr) => Math.max(acc, curr), nums[0])` → `4`.\n- **Concatenate strings** — `[\"Hello\", \" \", \"World\", \"!\"].reduce((acc, curr) => acc + curr, \"\")` → `\"Hello World!\"`.\n- **Count occurrences** — reducing `[\"A\",\"B\",\"A\",\"C\",\"A\",\"B\"]` into an **object** `{}` with `acc[vote] = (acc[vote] || 0) + 1; return acc;` gives `{A: 3, B: 2, C: 1}`. The accumulator here is an object, which is why `reduce` is far more general than \"sum an array\".",
        code: "const nums = [1, 2, 3, 4];\nconst sum = nums.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum); // 10  (0 + 1 + 2 + 3 + 4)",
      },
      {
        h: "6. Quick Comparison",
        p: "The decision table — method, use when, returns, example:\n\n- **`map()`** — use when **you want to transform each element**. Returns a **new array**. Example: `nums.map(n => n * 2)`.\n- **`filter()`** — use when **you want to select elements that match a condition**. Returns a **new array**. Example: `nums.filter(n => n > 3)`.\n- **`reduce()`** — use when **you want to combine all elements into one value**. Returns a **single value**. Example: `nums.reduce((a, b) => a + b, 0)`.\n\nA quick way to choose: same number of items out? `map`. Fewer items out? `filter`. One thing out? `reduce`.",
      },
      {
        h: "7. Chaining (Combine Methods)",
        p: "Because `filter()` and `map()` hand back new arrays, they can be strung together into a readable pipeline that ends in `reduce()`. The example takes `[1, 2, 3, 4, 5, 6]`, filters to the evens `[2, 4, 6]`, maps them ×3 to `[6, 12, 18]`, and reduces with `+` from `0` to `36`. The starred note explains why this works at all: **methods return new arrays, so you can chain them together beautifully!** Read a chain top to bottom and it narrates the transformation step by step.",
        code: "const nums = [1, 2, 3, 4, 5, 6];\nconst result = nums\n  .filter(n => n % 2 === 0)              // [2, 4, 6]\n  .map(n => n * 3)                       // [6, 12, 18]\n  .reduce((acc, curr) => acc + curr, 0); // 36\n\nconsole.log(result); // 36",
      },
      {
        h: "Key Takeaways",
        p: "- `map()` **transforms** each element.\n- `filter()` **selects** elements.\n- `reduce()` **combines** to a single value.\n- These methods make your code clean and powerful.\n- Practice them on real problems to get better!\n\nThe closing line: **Learn these deeply, and you'll write JavaScript like a PRO!**",
      },
    ],
    snippets: [
      {
        label: "map() — transform each element",
        code: "const nums = [1, 2, 3, 4];\nconst doubled = nums.map(num => num * 2);\nconsole.log(doubled); // [2, 4, 6, 8]",
        note: "Output array always has the same length as the input.",
      },
      {
        label: "map() — more examples",
        code: "// Square each number\nconst squares = nums.map(n => n * n); // [1, 4, 9, 16]\n\n// Convert to strings\nconst strings = nums.map(String); // [\"1\", \"2\", \"3\", \"4\"]\n\n// Get lengths of words\nconst words = [\"hi\", \"hello\", \"hey\"];\nconst lengths = words.map(w => w.length); // [2, 5, 3]",
      },
      {
        label: "filter() — filter elements",
        code: "const nums = [1, 2, 3, 4, 5, 6];\nconst even = nums.filter(n => n % 2 === 0);\nconsole.log(even); // [2, 4, 6]",
        note: "Callback is a predicate — return `true` to keep the element.",
      },
      {
        label: "filter() — more examples",
        code: "// Get numbers greater than 3\nconst greaterThan3 = nums.filter(n => n > 3); // [4, 5, 6]\n\n// Filter by length\nconst words = [\"apple\", \"bat\", \"cat\", \"elephant\"];\nconst longWords = words.filter(w => w.length > 3); // [\"apple\", \"elephant\"]\n\n// Filter objects\nconst users = [\n  { name: \"Alice\", age: 22 },\n  { name: \"Bob\", age: 17 },\n  { name: \"Charlie\", age: 25 }\n];\nconst adults = users.filter(u => u.age >= 18);\n// [{name: \"Alice\", age: 22}, {name: \"Charlie\", age: 25}]",
      },
      {
        label: "reduce() — reduce to a single value",
        code: "const nums = [1, 2, 3, 4];\nconst sum = nums.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum); // 10  (0 + 1 + 2 + 3 + 4)",
        note: "`acc` walks 0 → 1 → 3 → 6 → 10 as `curr` walks 1, 2, 3, 4.",
      },
      {
        label: "reduce() — more examples",
        code: "// Multiply all numbers\nconst product = nums.reduce((acc, curr) => acc * curr, 1); // 24\n\n// Find maximum number\nconst max = nums.reduce((acc, curr) => Math.max(acc, curr), nums[0]); // 4\n\n// Concatenate strings\nconst words = [\"Hello\", \" \", \"World\", \"!\"];\nconst sentence = words.reduce((acc, curr) => acc + curr, \"\"); // \"Hello World!\"\n\n// Count occurrences\nconst votes = [\"A\", \"B\", \"A\", \"C\", \"A\", \"B\"];\nconst count = votes.reduce((acc, vote) => {\n  acc[vote] = (acc[vote] || 0) + 1;\n  return acc;\n}, {});\n// {A: 3, B: 2, C: 1}",
        note: "The accumulator can be a number, a string, or an object.",
      },
      {
        label: "Chaining filter → map → reduce",
        code: "const nums = [1, 2, 3, 4, 5, 6];\nconst result = nums\n  .filter(n => n % 2 === 0)              // [2, 4, 6]\n  .map(n => n * 3)                       // [6, 12, 18]\n  .reduce((acc, curr) => acc + curr, 0); // 36\n\nconsole.log(result); // 36",
        note: "Each method returns a new array, so chaining just works.",
      },
    ],
  },
  {
    day: 35,
    group: 'core',
    title: 'JavaScript Strings',
    tagline: 'Strings are immutable — every method returns a new one.',
    image: '/javascript-notes/ep35-strings.jpeg',
    tags: ['Strings', 'Template literals', 'Methods'],
    notes: [
      { k: 'What it is', v: 'A sequence of characters in single quotes, double quotes or backticks. Strings are immutable — methods never change the original.' },
      { k: 'Properties', v: '.length, charAt(index), at(index) (supports negatives — `at(-1)` is the last character), and `[index]` access. Zero-indexed.' },
      { k: 'Common methods', v: 'toUpperCase(), toLowerCase(), trim(), includes(), startsWith(), endsWith().' },
      { k: 'More methods', v: 'indexOf(), lastIndexOf(), slice(start, end), substring(), replace() (first match), replaceAll() (all matches), split(separator) → array.' },
      { k: 'Template literals', v: 'Backticks give multiline strings and embedded expressions with `${}` — more readable than concatenation.' },
      { k: 'Escaping', v: "\\' \\\" \\\\ \\n \\t — use a backslash to escape special characters inside strings." },
    ],
    theory: [
      {
        h: "JavaScript Strings — Overview",
        p: "**Strings are used to store and manipulate text**, and JavaScript ships powerful methods to work with words. The sticky note states the single most important property up front: **strings are immutable in JavaScript.** Nothing you do to a string ever changes it — every method that appears to modify a string actually hands back a brand-new string and leaves the original untouched. Keep that in mind and the whole API makes sense: you must capture the return value, or the work is thrown away.",
      },
      {
        h: "1. What Is a String?",
        p: "A string is **a sequence of characters enclosed in single, double, or backtick quotes**. All three of `'Hello'`, `\"Hello\"` and `` `Hello` `` produce the same value — the quote style is about convenience, not meaning. The starred note flags the exception that matters: **backticks (`` ` ``) allow template literals and multiline strings**, capabilities the other two quote styles simply do not have.",
      },
      {
        h: "2. Creating Strings",
        p: "The table shows the three creation styles side by side, and all three log `Hello`:\n\n- **Single quotes (')** — `const single = 'Hello';`\n- **Double quotes (\")** — `const double = \"Hello\";`\n- **Backticks (`)** — `` const backtick = `Hello`; ``\n\nThe bulb note underneath introduces the killer feature: **backticks allow embedded expressions using `${ }`**. So `` console.log(`Hello, ${name}!`) `` with `name = 'Alice'` prints `Hello, Alice!` — no `+` concatenation needed.",
        code: "const name = 'Alice';\nconsole.log(`Hello, ${name}!`); // Hello, Alice!",
      },
      {
        h: "3. Common String Properties",
        p: "Property, description, example:\n\n- **`length`** — returns length. `'hello'.length` // `5`\n- **`charAt(index)`** — character at index. `'hello'.charAt(1)` // `'e'`\n- **`at(index)`** — character at index, and it **supports negative indices**. `'hello'.at(-1)` // `'o'` — the neat way to grab the last character.\n- **`[index]`** — access using bracket index. `'hello'[0]` // `'h'`\n\nThe starred reminder: **strings are zero-indexed**, so the first character sits at index `0` and the last at `length - 1`.",
      },
      {
        h: "4. Common String Methods (Part 1)",
        p: "Method, description, example:\n\n- **`toUpperCase()`** — convert to UPPERCASE. `'hello'.toUpperCase()` // `'HELLO'`\n- **`toLowerCase()`** — convert to lowercase. `'HELLO'.toLowerCase()` // `'hello'`\n- **`trim()`** — remove whitespace from both ends. `' hello '.trim()` // `'hello'`\n- **`includes(search)`** — check if string contains value. `'hello world'.includes('world')` // `true`\n- **`startsWith(search)`** — check if starts with. `'hello'.startsWith('he')` // `true`\n- **`endsWith(search)`** — check if ends with. `'hello'.endsWith('lo')` // `true`\n\nThe last three return booleans, which makes them ideal inside `if` conditions and `filter()` predicates.",
      },
      {
        h: "5. Common String Methods (Part 2)",
        p: "Method, description, example:\n\n- **`indexOf(search)`** — index of first occurrence. `'hello'.indexOf('l')` // `2`\n- **`lastIndexOf(search)`** — index of last occurrence. `'hello'.lastIndexOf('l')` // `3`\n- **`slice(start, end)`** — extract part of string, **end not included**. `'hello'.slice(1, 4)` // `'ell'`\n- **`substring(start, end)`** — similar to slice. `'hello'.substring(1, 4)` // `'ell'`\n- **`replace(search, new)`** — replace **first** match only. `'hello'.replace('l', 'w')` // `'hewlo'`\n- **`replaceAll(search, new)`** — replace **all** matches. `'hello'.replaceAll('l', 'w')` // `'hewwo'`\n- **`split(separator)`** — split into an array. `'a,b,c'.split(',')` // `['a', 'b', 'c']`\n\nThe closing bulb note repeats the golden rule: **strings are immutable — methods return new strings.** Note the `replace` vs `replaceAll` distinction; forgetting that `replace` stops after one match is a classic bug.",
      },
      {
        h: "6. Template Literals",
        p: "Use backticks (`` ` ``) to create template literals. The checklist gives three benefits:\n\n- **Multiline strings** — press Enter inside the backticks and the newline is preserved; no `\\n` gluing required.\n- **Embedded expressions** — `${ }` interpolates any JavaScript expression, not just variables.\n- **More readable** — the sentence stays intact instead of being chopped up by `+` operators.\n\nThe example builds a three-line greeting from `user = 'Bob'` and `age = 25`, and the illustration shows the mascot saying `` `Hello, ${user}!` `` — the mental model being that the placeholder is filled in at evaluation time.",
        code: "const user = 'Bob';\nconst age = 25;\nconst message = `\n  Hello, ${user}!\n  You are ${age} years old.\n  Welcome to JavaScript!\n`;\nconsole.log(message);",
      },
      {
        h: "7. Escaping Characters",
        p: "When a character would otherwise end the string or has no keyboard form, escape it with a backslash. Escape sequence, meaning:\n\n- **`\\'`** — single quote\n- **`\\\"`** — double quote\n- **`\\\\`** — backslash\n- **`\\n`** — new line\n- **`\\t`** — tab\n\nThe example `const text = 'It\\'s a \\\"great\\\" day!\\nLet\\'s code.';` prints across two lines: `It's a \"great\" day!` then `Let's code.`. The starred note: **use `\\` to escape special characters inside strings.**",
        code: "const text = 'It\\'s a \\\"great\\\" day!\\nLet\\'s code.';\nconsole.log(text);\n// It's a \"great\" day!\n// Let's code.",
      },
      {
        h: "8. Examples",
        p: "Two classic interview-style exercises that combine several methods:\n\n- **Check palindrome** — `str.split('').reverse().join('')` turns `'madam'` into an array of characters, reverses it, and glues it back into a string; comparing with `===` gives `true`. The split/reverse/join trio is the standard idiom because strings themselves have no `reverse()`.\n- **Count vowels** — spread the string into characters with `[...s]`, `filter` those the `vowels` string `includes()`, and take `.length`. For `'JavaScript is awesome'` the answer is `10`.\n\nThe sticky note beside them: **strings are powerful, flexible, and FUN!**",
        code: "// Check palindrome\nconst str = 'madam';\nconst reversed = str.split('').reverse().join('');\nconsole.log(str === reversed); // true\n\n// Count vowels\nconst s = 'JavaScript is awesome';\nconst vowels = 'aeiouAEIOU';\nconst count = [...s].filter(ch => vowels.includes(ch)).length;\nconsole.log(count); // 10",
      },
      {
        h: "Key Takeaways",
        p: "- Strings store text in JS.\n- Use methods to manipulate strings.\n- Template literals are modern and useful.\n- Strings are **immutable**.\n- Practice makes perfect!\n\nThe closing line: **Strings help you express, communicate, and create amazing things in code!**",
      },
    ],
    snippets: [
      {
        label: "Creating strings — three quote styles",
        code: "const single = 'Hello';\nconsole.log(single);   // Hello\n\nconst double = \"Hello\";\nconsole.log(double);   // Hello\n\nconst backtick = `Hello`;\nconsole.log(backtick); // Hello",
      },
      {
        label: "Embedded expressions with backticks",
        code: "const name = 'Alice';\nconsole.log(`Hello, ${name}!`); // Hello, Alice!",
        note: "Only backticks support `${ }` interpolation.",
      },
      {
        label: "String properties",
        code: "'hello'.length     // 5\n'hello'.charAt(1)  // 'e'\n'hello'.at(-1)     // 'o'\n'hello'[0]         // 'h'",
        note: "`at()` supports negative indices; strings are zero-indexed.",
      },
      {
        label: "String methods (part 1)",
        code: "'hello'.toUpperCase()             // 'HELLO'\n'HELLO'.toLowerCase()             // 'hello'\n' hello '.trim()                  // 'hello'\n'hello world'.includes('world')   // true\n'hello'.startsWith('he')          // true\n'hello'.endsWith('lo')            // true",
      },
      {
        label: "String methods (part 2)",
        code: "'hello'.indexOf('l')          // 2\n'hello'.lastIndexOf('l')      // 3\n'hello'.slice(1, 4)           // 'ell'\n'hello'.substring(1, 4)       // 'ell'\n'hello'.replace('l', 'w')     // 'hewlo'\n'hello'.replaceAll('l', 'w')  // 'hewwo'\n'a,b,c'.split(',')            // ['a', 'b', 'c']",
        note: "`replace` hits the first match only; `replaceAll` hits every match.",
      },
      {
        label: "Template literal — multiline string",
        code: "const user = 'Bob';\nconst age = 25;\nconst message = `\n  Hello, ${user}!\n  You are ${age} years old.\n  Welcome to JavaScript!\n`;\nconsole.log(message);",
      },
      {
        label: "Escaping characters",
        code: "const text = 'It\\'s a \\\"great\\\" day!\\nLet\\'s code.';\nconsole.log(text);\n// It's a \"great\" day!\n// Let's code.",
      },
      {
        label: "Check palindrome",
        code: "const str = 'madam';\nconst reversed = str.split('').reverse().join('');\nconsole.log(str === reversed); // true",
        note: "split → reverse → join, because strings have no `reverse()`.",
      },
      {
        label: "Count vowels",
        code: "const s = 'JavaScript is awesome';\nconst vowels = 'aeiouAEIOU';\nconst count = [...s].filter(ch => vowels.includes(ch)).length;\nconsole.log(count); // 10",
      },
    ],
  },
  {
    day: 36,
    group: 'core',
    title: 'Modern JavaScript Essentials',
    tagline: 'Three small features that make code cleaner, safer and smarter.',
    image: '/javascript-notes/ep36-modern-javascript-essentials.jpeg',
    tags: ['Optional chaining', 'Nullish', 'Template literals'],
    notes: [
      { k: 'Optional chaining (?.)', v: 'Access nested properties without worrying about undefined or null. `user?.profile?.address?.city` returns undefined instead of throwing "Cannot read property of undefined".' },
      { k: 'It short-circuits', v: 'It stops at the first nullish value in the chain, so nothing further is evaluated.' },
      { k: 'Nullish coalescing (??)', v: 'Provides a default ONLY when the left side is null or undefined.' },
      { k: 'Why ?? beats ||', v: '`||` treats 0, "", false and NaN as falsy and replaces them. `count ?? 10` keeps a legitimate 0; `count || 10` wrongly gives 10.' },
      { k: 'Template literals', v: 'Backticks with `${}` for embedded expressions and easy multi-line strings — cleaner than string concatenation.' },
      { k: 'Together', v: 'Use all three and you write modern, robust code: `user?.name ?? "Guest"`.' },
    ],
    theory: [
      {
        h: "Modern JavaScript Essentials — Overview",
        p: "**Small syntax, BIG impact! Master these and level up.** This episode covers **three small features that make your code cleaner, safer, and smarter**: optional chaining (`?.`), nullish coalescing (`??`), and template literals (`` ` ` ``). None of them adds new capability you could not hand-roll — but each removes a whole category of boilerplate and a whole category of bug, and they are designed to be used together.",
      },
      {
        h: "1. Optional Chaining (?.)",
        p: "Optional chaining lets you **access nested object properties without worrying about \"undefined\" or \"null\"**.\n\n**Without optional chaining (the problem)** — `console.log(user.profile.address.city);` throws `TypeError: Cannot read property of undefined (reading 'address')`. The page explains why: **if any link in the chain is null or undefined, it throws an error.** One missing level and the whole expression blows up.\n\n**With optional chaining (good)** — `console.log(user?.profile?.address?.city);` simply outputs `undefined`. It **returns `undefined` instead of throwing an error**, so a missing property becomes a value you can handle rather than a crash you must catch.",
        code: "// Without Optional Chaining — Problem\nconsole.log(user.profile.address.city);\n// TypeError: Cannot read property of undefined (reading 'address')\n\n// With Optional Chaining — Good\nconsole.log(user?.profile?.address?.city);\n// Output: undefined",
      },
      {
        h: "1b. Optional Chaining — Real Example",
        p: "The worked example builds a `user` object that has `name: 'Neon'` and a `profile` containing `address: { city: 'Tokyo' }`, but **no** `contact` key. Reading `user?.profile?.address?.city` gives `'Tokyo'` — when everything exists, `?.` behaves exactly like `.` and costs you nothing. Reading `user?.profile?.contact?.email` gives `undefined` **with no error**, because the chain short-circuits the moment it hits the missing `contact`. That is the whole value proposition: the happy path is unchanged, the sad path degrades gracefully.",
        code: "const user = {\n  name: 'Neon',\n  profile: {\n    address: { city: 'Tokyo' }\n  }\n};\n\nconsole.log(user?.profile?.address?.city);   // Tokyo\nconsole.log(user?.profile?.contact?.email);  // undefined (no error)",
      },
      {
        h: "2. Nullish Coalescing (??)",
        p: "Nullish coalescing **provides a default value only when the left side is `null` or `undefined` — not for `0`, `''`, or `false`**.\n\n**Using `||` (OR) — can be misleading.** With `const count = 0;`, `count || 10` gives `10` — **wrong!**, because `0` is a perfectly valid count. With `const name = '';`, `name || 'Guest'` gives `'Guest'` — **wrong!** again. The stated problem: **`||` treats `0`, `''`, `false` and `NaN` as falsy and replaces them.**\n\n**Using `??` (good).** `count ?? 10` gives `0` — **correct!** And `name ?? 'Guest'` gives `''` — **correct!** The explanation: **`??` only replaces `null` or `undefined`. Everything else is returned as-is.** So `??` is the operator you want for defaults on any value where zero, empty string or `false` is meaningful data.",
        code: "// Using || (OR) — can be misleading\nconst count = 0;\nconst result = count || 10;\nconsole.log(result); // 10 (wrong!)\n\nconst name = '';\nconst displayName = name || 'Guest';\nconsole.log(displayName); // 'Guest' (wrong!)\n\n// Using ?? (Nullish Coalescing)\nconst count2 = 0;\nconst result2 = count2 ?? 10;\nconsole.log(result2); // 0 (correct!)\n\nconst name2 = '';\nconst displayName2 = name2 ?? 'Guest';\nconsole.log(displayName2); // '' (correct!)",
      },
      {
        h: "2b. Nullish Coalescing — Real Example",
        p: "Given `const user = { age: null, isAdmin: false };`:\n\n- `user.name ?? 'Anonymous'` → `'Anonymous'`, because `name` is missing and therefore `undefined` — a genuine nullish case, so the default kicks in.\n- `user.age ?? 18` → `18`, because `age` is explicitly `null` — also nullish.\n- `user.isAdmin ?? true` → `false`, and this is the row that proves the point. `false` is not nullish, so it is preserved. Had you written `user.isAdmin || true` you would have silently promoted every non-admin to admin.",
        code: "const user = { age: null, isAdmin: false };\nconsole.log(user.name ?? 'Anonymous'); // 'Anonymous'\nconsole.log(user.age ?? 18);           // 18\nconsole.log(user.isAdmin ?? true);     // false",
      },
      {
        h: "3. Template Literals",
        p: "Template literals **create strings with embedded expressions, multi-line support, and cleaner syntax**.\n\n**Old way (concatenation) — not great.** `const msg = 'Hello, ' + name + '! You are ' + age + ' years old.';` The verdict on the page: **hard to read, ugly with variables, and messy for multi-line.** You have to track quotes, spaces and `+` signs by eye.\n\n**Template literals (backticks) — awesome!** `` const msg = `Hello, ${name}! You are ${age} years old.`; `` produces the same string but the sentence stays readable end to end. The verdict: **readable, powerful, and supports expressions!**",
        code: "// Old Way (Concatenation) — Not great\nconst name = 'Neon';\nconst age = 21;\nconst msg = 'Hello, ' + name + '! You are ' + age + ' years old.';\nconsole.log(msg);\n\n// Template Literals (Backticks) — Awesome!\nconst msg2 = `Hello, ${name}! You are ${age} years old.`;\nconsole.log(msg2);",
      },
      {
        h: "3b. More Power with Template Literals",
        p: "Two extra capabilities are shown side by side:\n\n- **Multi-line strings** — a backtick string spanning `I'm Neon.` / `I love JavaScript.` / `Building awesome things!` prints with its line breaks intact. The annotation: **keeps formatting!** No `\\n` concatenation needed.\n- **Expressions** — `${ }` accepts any expression, not just a bare variable. With `const a = 5, b = 10;`, `` console.log(`Sum: ${a + b}`) `` prints `Sum: 15`. Arithmetic, method calls and ternaries all work inside the braces.",
        code: "// Multi-line Strings\nconst about = `\nI'm Neon.\nI love JavaScript.\nBuilding awesome things!\n`;\nconsole.log(about);\n// Keeps formatting!\n\n// Expressions\nconst a = 5, b = 10;\nconsole.log(`Sum: ${a + b}`);\n// Sum: 15",
      },
      {
        h: "Key Takeaways",
        p: "The trophy panel gives one column per feature:\n\n- **Optional Chaining (`?.`)** — prevents \"Cannot read property of undefined\". Returns `undefined` instead of crashing.\n- **Nullish Coalescing (`??`)** — only checks for `null` or `undefined`. Better defaults without breaking valid values.\n- **Template Literals (`` ` ` ``)** — cleaner strings with `${expressions}`. Supports multi-line strings easily. More readable and maintainable.\n\nThe sticky note beside it: **use these together and write clean, modern, robust JavaScript!** — for instance `` `Hello, ${user?.profile?.name ?? 'Guest'}` `` uses all three in one line.",
      },
      {
        h: "Quick Reference",
        p: "Feature, syntax, when to use, example:\n\n- **Optional Chaining** — syntax `obj?.prop?.subProp`. Use when **any property in the chain might be null or undefined**. Example: `user?.profile?.name`.\n- **Nullish Coalescing** — syntax `value ?? defaultValue`. Use when **you want a default only for null or undefined**. Example: `user.name ?? 'Guest'`.\n- **Template Literals** — syntax `` `Hello, ${name}` ``. Use when **you need dynamic strings or multi-line text**. Example: `` `Sum: ${a + b}` ``.",
      },
      {
        h: "Things to Remember",
        p: "The brain panel closes the episode with four reminders:\n\n- **`?.` is short-circuiting** — it stops at the first nullish value and does not evaluate the rest of the chain.\n- **`??` is not the same as `||`. It's smarter!** — `||` fires on any falsy value; `??` fires only on `null`/`undefined`.\n- **Template literals are wrapped in backticks (`` ` ``)** — not single or double quotes.\n- **These features work together beautifully** to write modern, clean code.\n\nThe episode's sign-off: **Better Syntax. Better Code. Better Developer.**",
      },
    ],
    snippets: [
      {
        label: "Optional chaining — the problem it solves",
        code: "// Without Optional Chaining\nconsole.log(user.profile.address.city);\n// TypeError: Cannot read property of undefined (reading 'address')\n\n// With Optional Chaining\nconsole.log(user?.profile?.address?.city);\n// Output: undefined",
        note: "Returns `undefined` instead of throwing.",
      },
      {
        label: "Optional chaining — real example",
        code: "const user = {\n  name: 'Neon',\n  profile: {\n    address: { city: 'Tokyo' }\n  }\n};\n\nconsole.log(user?.profile?.address?.city);   // Tokyo\nconsole.log(user?.profile?.contact?.email);  // undefined (no error)",
      },
      {
        label: "|| gives misleading defaults",
        code: "const count = 0;\nconst result = count || 10;\nconsole.log(result); // 10 (wrong!)\n\nconst name = '';\nconst displayName = name || 'Guest';\nconsole.log(displayName); // 'Guest' (wrong!)",
        note: "`||` treats `0`, `''`, `false`, `NaN` as falsy and replaces them.",
      },
      {
        label: "?? gives correct defaults",
        code: "const count = 0;\nconst result = count ?? 10;\nconsole.log(result); // 0 (correct!)\n\nconst name = '';\nconst displayName = name ?? 'Guest';\nconsole.log(displayName); // '' (correct!)",
        note: "`??` only replaces `null` or `undefined`.",
      },
      {
        label: "?? — real example",
        code: "const user = { age: null, isAdmin: false };\nconsole.log(user.name ?? 'Anonymous'); // 'Anonymous'\nconsole.log(user.age ?? 18);           // 18\nconsole.log(user.isAdmin ?? true);     // false",
        note: "`false` survives, because it is not nullish.",
      },
      {
        label: "Old way — concatenation",
        code: "const name = 'Neon';\nconst age = 21;\nconst msg = 'Hello, ' + name + '! You are ' + age + ' years old.';\nconsole.log(msg);",
        note: "Hard to read, ugly with variables, messy for multi-line.",
      },
      {
        label: "Template literals (backticks)",
        code: "const name = 'Neon';\nconst age = 21;\nconst msg = `Hello, ${name}! You are ${age} years old.`;\nconsole.log(msg);",
        note: "Readable, powerful, and supports expressions.",
      },
      {
        label: "Multi-line strings",
        code: "const about = `\nI'm Neon.\nI love JavaScript.\nBuilding awesome things!\n`;\nconsole.log(about);\n// Keeps formatting!",
      },
      {
        label: "Expressions inside ${ }",
        code: "const a = 5, b = 10;\nconsole.log(`Sum: ${a + b}`);\n// Sum: 15",
      },
    ],
  },
  {
    day: 37,
    group: 'oop',
    title: 'Constructor Functions',
    tagline: 'The foundation of OOP in JavaScript, before ES6 classes.',
    image: '/javascript-notes/ep37-constructor-functions.jpeg',
    tags: ['OOP', 'new', 'Constructors'],
    notes: [
      { k: 'Why they exist', v: 'They provide a blueprint to create many objects with the same properties and methods. Before ES6 classes, this is how JavaScript did OOP.' },
      { k: 'What `new` does', v: 'Four steps: creates a new empty object, sets `this` to point to it, executes the function body (adding properties/methods), and returns the object implicitly.' },
      { k: 'The convention', v: 'Constructor functions are PascalCase and always called with `new`. Regular functions are camelCase.' },
      { k: 'Forget `new`?', v: '`this` will not refer to a new object — it may point to window, or be undefined in strict mode. A silent, nasty bug.' },
      { k: 'Each instance', v: 'Every object created gets its own copy of the properties.' },
    ],
    theory: [
      {
        h: "Constructor Functions — the foundation of OOP in JavaScript",
        p: "Before ES6 classes existed, JavaScript used **constructor functions** to create objects and manage data. They are the original mechanism for object-oriented programming in the language, and even today's `class` syntax is built on top of them. Understanding constructor functions is therefore not historical trivia — it is what lets you reason about what a class actually does under the hood.\n\nThe punchline of the page: **every object starts from a constructor. Build smart. Think OOP.**",
      },
      {
        h: "1. Why constructor functions?",
        p: "A constructor function acts as a **blueprint** for creating many objects that all share the same properties and methods. The page draws this as a single scroll labelled \"Blueprint (Constructor)\" with arrows fanning out to object 1, object 2, ... object n — one template, many products.\n\nThe key points:\n\n- They provide a blueprint to create multiple objects with the same properties and methods.\n- Each object created from the blueprint gets **its own copy** of the properties.\n- They are called using the `new` keyword.\n\nThis matters because without a blueprint you would hand-write the same object literal over and over. The constructor centralises the shape of the object in one place.",
      },
      {
        h: "2. How it works (with `new`)",
        p: "When you use `new`, JavaScript quietly performs **four steps** for you:\n\n- **1.** Creates a new empty object `{}`.\n- **2.** Sets `this` to point to that object.\n- **3.** Executes the function body, which adds properties and methods onto `this`.\n- **4.** Returns the object implicitly — you never write `return` yourself.\n\nIn the page's example, `Person(name, age)` assigns `this.name`, `this.age` and a `this.greet` function. Creating `const p1 = new Person('Neon', 21)` and `const p2 = new Person('Tina', 22)` gives two independent objects: `p1.greet()` logs \"Hi, I am Neon\" and `p2.greet()` logs \"Hi, I am Tina\". As the side note says: **every object gets its own copy of properties!**",
        code: "function Person(name, age) {\n  this.name = name;\n  this.age = age;\n  this.greet = function () {\n    console.log('Hi, I am ' + this.name);\n  }\n}\n\nconst p1 = new Person('Neon', 21);\nconst p2 = new Person('Tina', 22);\n\np1.greet(); // Hi, I am Neon\np2.greet(); // Hi, I am Tina",
      },
      {
        h: "3. The `new` keyword",
        p: "`new` is **the magic behind creating instances from a constructor**. Written out against the line `const person = new Person('Fabulous', 19);` the sequence is:\n\n- 1. `{}` is created\n- 2. `this` → `{}`\n- 3. The `Person` function runs\n- 4. `{}` is returned automatically\n\n**Note / warning:** if you forget `new`, `this` won't refer to the new object. It may point to `window` (in a browser) or be `undefined` in strict mode — and instead of an instance you silently get `undefined` back. This is the classic constructor-function bug, and it is exactly the mistake ES6 classes were designed to make impossible.",
      },
      {
        h: "4. Constructor vs normal function",
        p: "The two are the same kind of thing syntactically; what differs is how you call them and what that implies.\n\n**Constructor function**\n\n- Called with `new`\n- Creates a new object\n- `this` refers to the new object\n- Naming convention: **PascalCase**\n- Returns the object implicitly\n\n**Normal function**\n\n- Called without `new`\n- Does not create a new object\n- `this` depends on how it's called\n- Naming convention: **camelCase**\n- Returns `undefined` by default\n\nThe PascalCase convention is not enforced by the language — it is a signal to other developers that this function *must* be called with `new`.\n\n**Remember:** constructor functions were the backbone of JavaScript OOP before classes arrived in ES6.",
      },
      {
        h: "5. One more example",
        p: "The `Car` constructor shows the same pattern applied to a different domain: take `brand` and `speed`, attach them to `this`, and attach a `drive` method that reads back from `this`. Two instances, `car1 = new Car('Tesla', 120)` and `car2 = new Car('BMW', 100)`, each keep their own data, so `car1.drive()` logs \"Tesla is driving at 120 km/h\" and `car2.drive()` logs \"BMW is driving at 100 km/h\". Same blueprint, different instances, no interference between them.",
        code: "function Car(brand, speed) {\n  this.brand = brand;\n  this.speed = speed;\n  this.drive = function () {\n    console.log(this.brand + ' is driving at ' + this.speed + ' km/h');\n  };\n}\n\nconst car1 = new Car('Tesla', 120);\nconst car2 = new Car('BMW', 100);\n\ncar1.drive(); // Tesla is driving at 120 km/h\ncar2.drive(); // BMW is driving at 100 km/h",
      },
      {
        h: "Key takeaways",
        p: "- Constructor functions create a **blueprint** for objects.\n- Use `new` to create instances.\n- Each instance has **its own properties**.\n- They form the base for OOP in JavaScript.\n\nClosing line: *Every object starts from a constructor. Build smart. Think OOP.*",
      },
    ],
    snippets: [
      {
        label: "Constructor function — Person",
        code: "function Person(name, age) {\n  this.name = name;\n  this.age = age;\n  this.greet = function () {\n    console.log('Hi, I am ' + this.name);\n  }\n}\n\nconst p1 = new Person('Neon', 21);\nconst p2 = new Person('Tina', 22);\n\np1.greet(); // Hi, I am Neon\np2.greet(); // Hi, I am Tina",
        note: "Each instance gets its own copy of `name`, `age` and `greet`.",
      },
      {
        label: "What `new` does, step by step",
        code: "const person = new Person('Fabulous', 19);\n// 1. {} is created\n// 2. this -> {}\n// 3. Person function runs\n// 4. {} returned automatically",
        note: "Forget `new` and `this` leaks to `window` or is `undefined` in strict mode.",
      },
      {
        label: "Constructor function — Car",
        code: "function Car(brand, speed) {\n  this.brand = brand;\n  this.speed = speed;\n  this.drive = function () {\n    console.log(this.brand + ' is driving at ' + this.speed + ' km/h');\n  };\n}\n\nconst car1 = new Car('Tesla', 120);\nconst car2 = new Car('BMW', 100);\n\ncar1.drive(); // Tesla is driving at 120 km/h\ncar2.drive(); // BMW is driving at 100 km/h",
      },
    ],
  },
  {
    day: 38,
    group: 'oop',
    title: 'Classes & Inheritance',
    tagline: 'ES6 classes — syntactic sugar over constructor functions.',
    image: '/javascript-notes/ep38-classes-and-inheritance.jpeg',
    tags: ['OOP', 'class', 'extends'],
    notes: [
      { k: 'What it is', v: 'A blueprint for creating objects using the `class` keyword. Cleaner and easier OOP — but behind the scenes it is still prototypes.' },
      { k: 'Key features', v: 'Classes are NOT hoisted. Methods are added to the prototype automatically. No `function` keyword needed. Always use `new` — calling a class without it throws a TypeError.' },
      { k: 'constructor()', v: 'Called automatically when you use `new`, and where you set up instance properties.' },
      { k: 'Method types', v: 'Instance methods (called on instances), static methods (called on the class itself, not instances), and getters/setters (look like properties, work like methods).' },
      { k: 'extends', v: 'One class inherits properties and methods from another — `class Dog extends Animal` — and can override them.' },
      { k: 'super()', v: 'Calls the parent constructor (required before using `this` in a subclass), and `super.method()` reuses parent logic.' },
    ],
    theory: [
      {
        h: "Classes & Inheritance",
        p: "ES6 **classes are syntactic sugar over constructor functions**. They do not add a new object model to JavaScript — under the hood the same prototypes and the same `new` machinery are still doing the work. What they add is clarity: they make OOP in JavaScript **cleaner and easier to use**.\n\nAs the header note puts it: classes in JS make creating objects and sharing behavior much better. The closing line of the page: *Classes give structure. Inheritance gives power. Build better, not harder.*",
      },
      {
        h: "1. The class syntax",
        p: "A class is a **blueprint to create objects**, declared with the `class` keyword. Inside it, the special `constructor()` method holds the initialisation logic — assigning the incoming arguments onto `this`. Other methods (like `greet()`) are written directly in the class body with no `function` keyword and no commas between them.\n\nThe crucial mechanic: **`constructor()` is called automatically when we use `new`.** You never invoke it yourself. Creating `const p = new Person('Neon', 21)` runs the constructor with those arguments, and `p.greet()` then logs \"Hi, I am Neon\" using template-literal interpolation of `this.name`.",
        code: "class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  greet() {\n    console.log(`Hi, I am ${this.name}`);\n  }\n}\n\nconst p = new Person('Neon', 21);\np.greet(); // Hi, I am Neon",
      },
      {
        h: "2. Key features",
        p: "- Classes are **not hoisted** — unlike function declarations, you cannot use a class before the line that declares it.\n- Methods are added to the **prototype** automatically, so all instances share one copy of each method rather than each carrying its own (a real improvement over attaching functions inside a constructor function).\n- No need to write the `function` keyword for methods.\n- Always use `new` to create instances.\n- Inside methods, `this` refers to the current object.\n\n**Without `new`?** Calling `const x = Person('Neo', 20);` throws `TypeError: Class constructor cannot be invoked without 'new'`. This is the big safety win over constructor functions: where a constructor function would silently misbehave, a class fails loudly and immediately.",
        code: "const x = Person('Neo', 20);\n// TypeError: Class constructor\n// cannot be invoked without 'new'",
      },
      {
        h: "3. Class method types — instance methods",
        p: "**Instance methods** work on instances. They are the ordinary methods you write in the class body, and they are **called on object instances** — you need an object created with `new` before you can call them. Inside them, `this` refers to that particular object, which is what lets the same method produce different behaviour per instance.",
        code: "class User {\n  sayHi() {\n    console.log('Hello!');\n  }\n}",
      },
      {
        h: "3b. Static methods",
        p: "**Static methods** are declared with the `static` keyword and are **called on the class itself, not on instances**. `MathUtil.add(2, 3)` works; `new MathUtil().add(2, 3)` does not. They are the right tool for utility/helper logic that belongs conceptually to the class but does not depend on any individual object's data — there is no meaningful `this` instance state involved.",
        code: "class MathUtil {\n  static add(a, b) {\n    return a + b;\n  }\n}",
      },
      {
        h: "3c. Getters / setters — controlled access to properties",
        p: "A getter (`get price()`) and setter (`set price(val)`) let you **control access to properties**. From the outside they **look like a property** — you write `product.price` and `product.price = 500`, with no parentheses — but they **work like methods**, running real code on every read and write.\n\nThat is what makes validation possible: the setter here only assigns when `val > 0`, silently rejecting nonsense values. The internal storage uses a differently-named field (`this._price`) so the setter doesn't recursively call itself.",
        code: "class Product {\n  constructor(price) {\n    this._price = price;\n  }\n\n  get price() {\n    return this._price;\n  }\n\n  set price(val) {\n    if (val > 0) this._price = val;\n  }\n}",
      },
      {
        h: "4. Inheritance with `extends`",
        p: "**One class can inherit properties and methods from another class** using `extends`. In the example, `Animal` has a constructor that stores `name` and a `speak()` method that logs \"Some sound...\". `class Dog extends Animal` then defines its own `speak()` that logs \"Woof!\".\n\nThe result, as the side note explains: **Dog inherits `name` from Animal and overrides `speak()`.** So `const d = new Dog('Buddy')` still gets the `name` behaviour for free from the parent constructor, while `d.speak()` prints \"Woof!\" instead of \"Some sound...\" — the child's method wins over the inherited one. Inheritance gives you reuse; overriding gives you specialisation.",
        code: "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    console.log('Some sound...');\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    console.log('Woof!');\n  }\n}\n\nconst d = new Dog('Buddy');\nd.speak(); // Woof!",
      },
      {
        h: "5. Using `super()`",
        p: "Use **`super()` to call the constructor or methods of the parent class**. Two distinct uses appear here:\n\n- In the child's `constructor`, `super(name)` **calls the Animal constructor**, letting the parent do its own initialisation before the child adds `this.breed = breed`.\n- Inside a method, `super.speak()` **calls the parent method**, so the child can run the inherited behaviour *and then* add its own logging on top.\n\nAs the side note says: **`super()` helps us reuse parent logic.** Rather than copy-pasting the parent's setup into every subclass, you delegate to it.",
        code: "class Dog extends Animal {\n  constructor(name, breed) {\n    super(name); // calls Animal constructor\n    this.breed = breed;\n  }\n\n  speak() {\n    super.speak(); // calls parent method\n    console.log(`I am a ${this.breed}`);\n  }\n}",
      },
      {
        h: "Note & closing",
        p: "- Classes are just **cleaner syntax**.\n- Behind the scenes, they still use **prototypes**.\n- Use classes when building **real-world applications**.\n\nClosing line: *Classes give structure. Inheritance gives power. Build better, not harder.*",
      },
    ],
    snippets: [
      {
        label: "The class syntax",
        code: "class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  greet() {\n    console.log(`Hi, I am ${this.name}`);\n  }\n}\n\nconst p = new Person('Neon', 21);\np.greet(); // Hi, I am Neon",
        note: "`constructor()` is called automatically when you use `new`.",
      },
      {
        label: "Calling a class without `new`",
        code: "const x = Person('Neo', 20);\n// TypeError: Class constructor\n// cannot be invoked without 'new'",
        note: "Classes fail loudly where constructor functions failed silently.",
      },
      {
        label: "Instance method",
        code: "class User {\n  sayHi() {\n    console.log('Hello!');\n  }\n}",
        note: "Called on object instances.",
      },
      {
        label: "Static method",
        code: "class MathUtil {\n  static add(a, b) {\n    return a + b;\n  }\n}",
        note: "Called on the class, not on instances.",
      },
      {
        label: "Getter / setter",
        code: "class Product {\n  constructor(price) {\n    this._price = price;\n  }\n\n  get price() {\n    return this._price;\n  }\n\n  set price(val) {\n    if (val > 0) this._price = val;\n  }\n}",
        note: "Looks like a property, works like a method.",
      },
      {
        label: "Inheritance with `extends`",
        code: "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    console.log('Some sound...');\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    console.log('Woof!');\n  }\n}\n\nconst d = new Dog('Buddy');\nd.speak(); // Woof!",
        note: "Dog inherits `name` from Animal and overrides `speak()`.",
      },
      {
        label: "Using `super()`",
        code: "class Dog extends Animal {\n  constructor(name, breed) {\n    super(name); // calls Animal constructor\n    this.breed = breed;\n  }\n\n  speak() {\n    super.speak(); // calls parent method\n    console.log(`I am a ${this.breed}`);\n  }\n}",
        note: "`super()` helps us reuse parent logic.",
      },
    ],
  },
  {
    day: 39,
    group: 'oop',
    title: 'OOP Principles in JavaScript',
    tagline: 'Encapsulation, polymorphism, abstraction.',
    image: '/javascript-notes/ep39-oop-principles.jpeg',
    tags: ['OOP', 'Encapsulation', 'Polymorphism'],
    notes: [
      { k: 'Encapsulation', v: 'Wrap data and the methods that use it into a single unit, and restrict direct access to some of it. `#balance` is a private field; getBalance() gives controlled access.' },
      { k: 'Why encapsulate', v: 'It protects data from unwanted changes and exposes only what is necessary.' },
      { k: 'Polymorphism', v: 'Different objects respond to the SAME method call in different ways. Dog and Cat both implement speak(), and a loop over them calls each correctly.' },
      { k: 'Why polymorphism', v: 'Same interface, different behaviour — it makes code flexible and extensible.' },
      { k: 'Abstraction', v: 'Hide complex implementation and show only essential features. Car.start() runs #initEngine() and #checkSystems() internally; the user just sees "Car started".' },
      { k: 'Real world', v: 'Encapsulation is your banking app hiding how transactions are stored. Polymorphism is UPI, card and wallet all answering `pay()`. Abstraction is driving without knowing how the engine works.' },
    ],
    theory: [
      {
        h: "OOP Principles in JavaScript",
        p: "Three core principles of OOP make code **scalable, maintainable and powerful**: encapsulation, polymorphism and abstraction. The header note frames the whole page: **good code isn't just about running, it's about structure that lasts.**\n\nThe closing line: *Follow the principles. Write better code. Build better products.*",
      },
      {
        h: "1. Encapsulation",
        p: "Encapsulation means **wrapping data (properties) and the methods that use that data into a single unit (a class), and restricting direct access to some of an object's components**.\n\nThe `BankAccount` example makes this concrete. `#balance = 0` is a **private field** — the `#` prefix means nothing outside the class can touch it. `this.owner = owner` is **public**. Access to the balance happens only through methods you control: `deposit(amount)` guards with `if (amount > 0)` before mutating, and `getBalance()` offers **controlled access** to read it. There is no way to set the balance to a nonsense value from outside because there is no path to the field.\n\n**Why?**\n\n- Protects data from unwanted changes.\n- Exposes only what's necessary.",
        code: "class BankAccount {\n  #balance = 0; // private field\n  constructor(owner) {\n    this.owner = owner; // public\n  }\n  deposit(amount) {\n    if (amount > 0) this.#balance += amount;\n  }\n  getBalance() {\n    return this.#balance; // controlled access\n  }\n}",
      },
      {
        h: "2. Polymorphism",
        p: "Polymorphism is **the ability of different objects to respond to the same method or function call in different ways**. \"Poly\" = many, \"morph\" = forms: one interface, many forms.\n\nIn the example, `Animal` defines `speak()` logging \"Some sound...\", while `Dog extends Animal` overrides it with \"Woof!\" and `Cat extends Animal` overrides it with \"Meow!\". Then `const animals = [new Dog(), new Cat()]` followed by `animals.forEach(a => a.speak())` calls the *same* method name on every element — and each object answers in its own voice. The calling code never needs to know or ask which subclass it holds.\n\n**Why?**\n\n- Same interface, different behavior.\n- Makes code flexible and extensible — adding a new animal requires no change to the loop.",
        code: "class Animal {\n  speak() {\n    console.log('Some sound...');\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    console.log('Woof!');\n  }\n}\n\nclass Cat extends Animal {\n  speak() {\n    console.log('Meow!');\n  }\n}\n\nconst animals = [new Dog(), new Cat()];\nanimals.forEach(a => a.speak());",
      },
      {
        h: "3. Abstraction",
        p: "Abstraction means **hiding complex implementation details and showing only the essential features of an object**.\n\nThe `Car` example: the public `start()` method calls `this.#initEngine()` and `this.#checkSystems()` and then logs \"Car started\". Those two `#`-prefixed methods are **internal details (hidden)** — they log \"Igniting engine...\" and \"Checking systems...\" but the user of the class never calls them and never needs to know they exist. As the comment says: `car.start(); // User sees only \"Car started\"`.\n\n**Why?**\n\n- Reduces complexity.\n- Users interact with high-level features without worrying about how it works.\n\nNote the distinction from encapsulation: encapsulation is about *protecting* data; abstraction is about *simplifying* the surface you expose.",
        code: "class Car {\n  start() {\n    this.#initEngine();\n    this.#checkSystems();\n    console.log('Car started');\n  }\n\n  // Internal details (hidden)\n  #initEngine() {\n    console.log('Igniting engine...');\n  }\n\n  #checkSystems() {\n    console.log('Checking systems...');\n  }\n}\n\nconst car = new Car();\ncar.start(); // User sees only \"Car started\"",
      },
      {
        h: "How they work together",
        p: "The page draws a Venn diagram of three overlapping circles: **Encapsulation (protects)**, **Polymorphism (flexible)** and **Abstraction (simplifies)**. They are not competing ideas — they overlap, and their intersection is where good design lives.\n\nTogether, these principles help us build software that is:\n\n- Easy to maintain\n- Easy to extend\n- Less error-prone\n- Scalable",
      },
      {
        h: "Real world examples",
        p: "- **Encapsulation** → Your bank app hides how transactions are stored, you just use it.\n- **Polymorphism** → Different payment methods (UPI, Card, Wallet) work with the same interface `pay()`.\n- **Abstraction** → You drive a car without knowing how the engine or brakes work.\n\nThese three analogies are worth memorising, because they map one-to-one onto the three code examples above and make the distinction between the principles intuitive rather than academic.",
      },
      {
        h: "Mini example — abstract-style base class",
        p: "A `Shape` base class defines `area()` but immediately throws: `throw new Error('Must implement area()')`. That turns it into a contract — any subclass that forgets to implement `area()` fails loudly. `Circle extends Shape` stores a radius via `super()` and returns `Math.PI * this.r * this.r`; `Rectangle extends Shape` stores width and height and returns `this.w * this.h`.\n\nThe caption: **different shapes, same method `area()`, different behavior** — polymorphism and abstraction working together in six lines.",
        code: "class Shape {\n  area() {\n    throw new Error('Must implement area()');\n  }\n}\n\nclass Circle extends Shape {\n  constructor(r) { super(); this.r = r; }\n  area() { return Math.PI * this.r * this.r; }\n}\n\nclass Rectangle extends Shape {\n  constructor(w, h) { super(); this.w = w; this.h = h; }\n  area() { return this.w * this.h; }\n}",
      },
      {
        h: "Key takeaways",
        p: "- **Encapsulation** protects data and controls access.\n- **Polymorphism** allows one interface, many forms.\n- **Abstraction** hides complexity, shows what matters.\n\nUse these principles to write clean, strong and future-proof JavaScript code.\n\nClosing line: *Follow the principles. Write better code. Build better products.*",
      },
    ],
    snippets: [
      {
        label: "Encapsulation — BankAccount",
        code: "class BankAccount {\n  #balance = 0; // private field\n  constructor(owner) {\n    this.owner = owner; // public\n  }\n  deposit(amount) {\n    if (amount > 0) this.#balance += amount;\n  }\n  getBalance() {\n    return this.#balance; // controlled access\n  }\n}",
        note: "`#balance` is unreachable from outside — the only way in is `deposit()`.",
      },
      {
        label: "Polymorphism — same call, different behavior",
        code: "class Animal {\n  speak() {\n    console.log('Some sound...');\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    console.log('Woof!');\n  }\n}\n\nclass Cat extends Animal {\n  speak() {\n    console.log('Meow!');\n  }\n}\n\nconst animals = [new Dog(), new Cat()];\nanimals.forEach(a => a.speak());",
        note: "The loop never asks which subclass it is holding.",
      },
      {
        label: "Abstraction — Car with hidden internals",
        code: "class Car {\n  start() {\n    this.#initEngine();\n    this.#checkSystems();\n    console.log('Car started');\n  }\n\n  // Internal details (hidden)\n  #initEngine() {\n    console.log('Igniting engine...');\n  }\n\n  #checkSystems() {\n    console.log('Checking systems...');\n  }\n}\n\nconst car = new Car();\ncar.start(); // User sees only \"Car started\"",
      },
      {
        label: "Mini example — Shape / Circle / Rectangle",
        code: "class Shape {\n  area() {\n    throw new Error('Must implement area()');\n  }\n}\n\nclass Circle extends Shape {\n  constructor(r) { super(); this.r = r; }\n  area() { return Math.PI * this.r * this.r; }\n}\n\nclass Rectangle extends Shape {\n  constructor(w, h) { super(); this.w = w; this.h = h; }\n  area() { return this.w * this.h; }\n}",
        note: "Different shapes, same method `area()`, different behavior.",
      },
    ],
  },
  {
    day: 40,
    group: 'advanced',
    title: 'Advanced Functional JavaScript',
    tagline: 'Currying and memoization.',
    image: '/javascript-notes/ep40-advanced-functional-javascript.jpeg',
    tags: ['Functional', 'Currying', 'Memoization'],
    notes: [
      { k: 'Currying', v: 'Transform a function of N arguments into N functions each taking one argument. Instead of `add(2, 3, 4)`, you call `add(2)(3)(4)` — step by step.' },
      { k: 'With arrows', v: '`const add = (a) => (b) => (c) => a + b + c` makes currying almost invisible.' },
      { k: 'Currying uses', v: 'Partial application, event handlers, configurable functions.' },
      { k: 'Currying vs partial application', v: 'Currying is strict — one argument at a time, N functions. Partial application just fixes some arguments up front (via bind) and is more flexible.' },
      { k: 'Memoization', v: 'Cache the result of expensive calls and return the cached value when the same inputs come back. The classic implementation uses a cache object keyed by JSON.stringify(args).' },
      { k: 'When to use', v: 'Currying when you want flexible, reusable functions. Memoization when a function is expensive AND called repeatedly with the same inputs.' },
    ],
    theory: [
      {
        h: "Advanced Functional JavaScript",
        p: "Functional programming in JS helps us write **cleaner, more reusable, and efficient** code. The header note states the foundation the whole episode rests on: **functions are first-class citizens in JavaScript. Use them. Compose them. Love them.** Because functions can be passed around, returned and stored like any other value, techniques like currying and memoization are possible at all.\n\nThe closing line: *Think in functions. Compose with care. Optimize with memoization. This is how you level up in JavaScript.*",
      },
      {
        h: "1. Currying",
        p: "Currying is **the process of taking a function with multiple arguments and turning it into a series of functions, each taking one argument at a time**.\n\nThe example nests returns: `add(a)` returns a function taking `b`, which returns a function taking `c`, which finally returns `a + b + c`. You call it as `add(2)(3)(4)` and get `9`. As the side note puts it: **instead of `add(2,3,4)` we call it step by step!**\n\nWhy bother? Each call captures its argument in a closure and hands back a function that remembers it. That lets you fix some arguments now and supply the rest later — which is what makes the real-world uses below possible.",
        code: "function add(a) {\n  return function (b) {\n    return function (c) {\n      return a + b + c;\n    }\n  }\n}\n\nadd(2)(3)(4); // 9",
      },
      {
        h: "Real world use & currying with arrow functions",
        p: "Currying shows up in:\n\n- **Partial application**\n- **Event handlers**\n- **Configurable functions**\n\nWith arrow functions the whole nested structure collapses to one readable line: `const add = a => b => c => a + b + c;` and `add(1)(2)(3)` gives `6`. Each `=>` is one argument and one returned function. This is the form you will actually see in modern codebases — the verbose nested version above is the same thing spelled out.",
        code: "const add = a => b => c => a + b + c;\nadd(1)(2)(3); // 6",
      },
      {
        h: "2. Memoization",
        p: "Memoization is **an optimization technique where we store the result of expensive function calls and return the cached result when the same inputs occur again**.\n\nThe `memoize(fn)` helper builds a `cache = {}` and returns a wrapper that accepts `...args`. It computes `const key = JSON.stringify(args)` — turning the argument list into a usable object key. If that key is already `in cache`, it logs \"Fetching from cache\" and returns the stored value immediately. Otherwise it logs \"Calculating result...\", calls `fn(...args)`, stores the result under the key, and returns it.\n\nThe side note: **saves time & resources by avoiding repeated computations!**",
        code: "function memoize(fn) {\n  const cache = {};\n  return function (...args) {\n    const key = JSON.stringify(args);\n    if (key in cache) {\n      console.log('Fetching from cache');\n      return cache[key];\n    }\n    console.log('Calculating result...');\n    const result = fn(...args);\n    cache[key] = result;\n    return result;\n  }\n}",
      },
      {
        h: "Example usage — memoize in action",
        p: "`expensiveFn` deliberately burns time: it loops `for (let i = 0; i < 1e8; i++) {}` doing nothing, then returns `n * n`. Wrapping it — `const fastFn = memoize(expensiveFn)` — changes the behaviour on repeat calls:\n\n- `fastFn(10);` → logs \"Calculating result...\" (the slow path runs once)\n- `fastFn(10);` → logs \"Fetching from cache\" (instant)\n\nSame input, same answer, no repeated work. As the stopwatch note says: **big win for performance!**",
        code: "const expensiveFn = n => {\n  for (let i = 0; i < 1e8; i++) {}\n  return n * n;\n}\n\nconst fastFn = memoize(expensiveFn);\nfastFn(10); // Calculating result...\nfastFn(10); // Fetching from cache",
      },
      {
        h: "Currying vs partial application",
        p: "These two are frequently confused; the page sets them side by side.\n\n**Currying**\n\n- Transforms a function with N args into N functions.\n- Takes **one argument at a time**.\n- More strict.\n\n**Partial application**\n\n- Fixes **one or more** arguments at a time.\n- More flexible.\n- Doesn't have to be one-by-one.\n\nThe difference in one sentence: currying is a rigid chain of single-argument functions; partial application just means \"pre-fill some arguments now, supply the rest later\", with no rule about how many at a time.",
      },
      {
        h: "Partial application snippet",
        p: "`const multiply = (a, b, c) => a + b + c;` then `const double = multiply.bind(null, 2);` and `double(3, 4); // 24`.\n\nAs the note explains: **here, 2 is fixed. Remaining args are provided later.** `bind` is the built-in tool for partial application — the first argument sets `this` (here `null`, since it isn't used) and every argument after it gets locked in ahead of time.",
        code: "const multiply = (a, b, c) => a + b + c;\nconst double = multiply.bind(null, 2);\ndouble(3, 4); // 24",
      },
      {
        h: "Best practices",
        p: "- Use **pure functions** — same input, same output, no surprises.\n- **Avoid side effects.**\n- **Compose small functions** rather than writing one large one.\n- **Memoize expensive operations.**\n\nThese fit together: memoization is only safe *because* the function is pure. If a function's result depended on outside state, caching by arguments alone would return stale, wrong answers.",
      },
      {
        h: "When to use?",
        p: "- **Currying** → when you want flexible & reusable functions.\n- **Memoization** → when your function is expensive & called repeatedly. (Both halves matter: cheap functions gain nothing, and a function called once pays the cache cost for no benefit.)\n- **Functional style** → cleaner, testable & scalable code!\n\nClosing line: *Think in functions. Compose with care. Optimize with memoization. This is how you level up in JavaScript.*",
      },
    ],
    snippets: [
      {
        label: "Currying — nested functions",
        code: "function add(a) {\n  return function (b) {\n    return function (c) {\n      return a + b + c;\n    }\n  }\n}\n\nadd(2)(3)(4); // 9",
        note: "Instead of `add(2,3,4)` we call it step by step.",
      },
      {
        label: "Currying with arrow functions",
        code: "const add = a => b => c => a + b + c;\nadd(1)(2)(3); // 6",
        note: "The same chain, one `=>` per argument.",
      },
      {
        label: "The memoize helper",
        code: "function memoize(fn) {\n  const cache = {};\n  return function (...args) {\n    const key = JSON.stringify(args);\n    if (key in cache) {\n      console.log('Fetching from cache');\n      return cache[key];\n    }\n    console.log('Calculating result...');\n    const result = fn(...args);\n    cache[key] = result;\n    return result;\n  }\n}",
        note: "`JSON.stringify(args)` turns the argument list into a cache key.",
      },
      {
        label: "Memoize — example usage",
        code: "const expensiveFn = n => {\n  for (let i = 0; i < 1e8; i++) {}\n  return n * n;\n}\n\nconst fastFn = memoize(expensiveFn);\nfastFn(10); // Calculating result...\nfastFn(10); // Fetching from cache",
        note: "Second call is instant — big win for performance.",
      },
      {
        label: "Partial application with `bind`",
        code: "const multiply = (a, b, c) => a + b + c;\nconst double = multiply.bind(null, 2);\ndouble(3, 4); // 24",
        note: "Here, 2 is fixed. Remaining args are provided later.",
      },
    ],
  },
  {
    day: 41,
    group: 'async',
    title: 'Asynchronous JavaScript',
    tagline: 'Single-threaded, but never blocked.',
    image: '/javascript-notes/ep41-asynchronous-javascript.jpeg',
    tags: ['Async', 'Callbacks', 'Promises'],
    notes: [
      { k: 'Why async', v: 'Some operations take time — API calls, reading files, timers. If JavaScript waited, the whole program would freeze. Async lets other code run while waiting.' },
      { k: 'Callbacks', v: 'The oldest approach: pass a function to be executed later. It works, but nesting leads to callback hell — hard to maintain, not scalable.' },
      { k: 'Promises', v: 'An object representing eventual completion or failure, with states Pending → Fulfilled or Rejected. Better error handling, chainable, cleaner than callbacks.' },
      { k: 'Promise chaining', v: 'Sequential async steps with .then() returning the next promise, and one .catch() at the end for the whole chain.' },
      { k: 'async/await', v: 'Built on top of promises. `async` makes a function return a promise; `await` pauses until it resolves. Async code that looks synchronous.' },
      { k: 'Common async APIs', v: 'setTimeout/setInterval, fetch, addEventListener, Node’s fs, and any promise-based library.' },
    ],
    theory: [
      {
        h: "Asynchronous JavaScript",
        p: "**JavaScript is single-threaded, but it can do multiple things at once using asynchronous programming.** That sentence is the whole episode in miniature — one thread, yet no waiting around. As the header note says: async JS helps us perform time-consuming tasks without blocking the code.\n\nThe closing line: *Write async code like a pro. Keep it clean, handle errors, and never block the flow!*",
      },
      {
        h: "1. Why asynchronous?",
        p: "- Some operations **take time** (e.g. API calls, reading files, timers).\n- If JS waits, **the whole program freezes** — with a single thread, a blocking operation stops everything, including the UI.\n- Async JS allows **other code to run while waiting**.\n\nThe diagram traces it: **Start Task → Time Consuming Task** (API call, DB query, `setTimeout`, etc.) **→ Task Complete**. The point is that the middle box does not hold the thread hostage; JS hands it off and carries on.",
      },
      {
        h: "2. Callbacks",
        p: "Callbacks are **the oldest way to handle async operations**. We pass a function (the callback) to be executed later — when the slow work finishes, it calls our function with the result.\n\nIn the example, `fetchData(callback)` uses `setTimeout` to wait 2000ms, builds `const data = { user: 'Fabulous' }`, then invokes `callback(data)`. The caller passes an arrow function that logs \"Data received:\" with the data.\n\n**Problem?**\n\n- **Callback Hell** — nesting callbacks inside callbacks until the code drifts sideways off the screen.\n- **Hard to maintain.**\n- **Not scalable.**",
        code: "function fetchData(callback) {\n  setTimeout(() => {\n    const data = { user: 'Fabulous' };\n    callback(data);\n  }, 2000);\n}\n\nfetchData((data) => {\n  console.log('Data received:', data);\n});",
      },
      {
        h: "3. Promises",
        p: "**A Promise represents the eventual completion (or failure) of an async operation.**\n\nThe **states** diagram: a promise starts **Pending**, then settles into either **Fulfilled (Resolved)** or **Rejected**. It settles exactly once and cannot go back.\n\nThe example returns `new Promise((resolve, reject) => {...})`. After a 2s timer it checks `success`: if true it calls `resolve('Data received')`, else `reject('Failed to fetch data')`. Consumers attach `.then(result => console.log(result))` for the happy path and `.catch(error => console.log(error))` for the failure path.\n\n**Benefits**\n\n- Better error handling\n- Chainable\n- Cleaner than callbacks",
        code: "const fetchData = () => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      const success = true; // or false\n      if (success) resolve('Data received');\n      else reject('Failed to fetch data');\n    }, 2000);\n  });\n};\n\nfetchData()\n  .then(result => console.log(result))\n  .catch(error => console.log(error));",
      },
      {
        h: "4. Promise chaining",
        p: "**We can chain multiple `.then()` to handle sequential async operations.** This is the direct answer to callback hell: instead of nesting deeper and deeper, each step returns a value, and the next `.then()` receives it — the code grows *downward* in a flat chain rather than sideways.\n\nIn the example `fetchData()` resolves with `data`, the first `.then()` logs it and returns `'Process step 2'`, the next `.then()` receives that as `msg`, logs it and returns `'Process step 3'`, and a final `.then(final => console.log(final))` logs the last value. A single `.catch(err => console.log('Error:', err))` at the end catches a failure from **anywhere** in the chain — one error handler for the whole sequence.",
        code: "fetchData()\n  .then(data => {\n    console.log(data);\n    return 'Process step 2';\n  })\n  .then(msg => {\n    console.log(msg);\n    return 'Process step 3';\n  })\n  .then(final => console.log(final))\n  .catch(err => console.log('Error:', err));",
      },
      {
        h: "5. async / await (the modern way)",
        p: "**Built on top of Promises. Makes async code look and behave like synchronous code.**\n\nTwo mechanics to hold onto, from the side note:\n\n- **`async` makes a function return a Promise.**\n- **`await` pauses execution until the Promise resolves.**\n\nSo `async function getData()` can write `const data = await fetchData();` and then use `data` on the very next line as if nothing asynchronous happened — no `.then()`, no callback, no indentation. Errors are handled with an ordinary `try...catch` block: `catch (error) { console.log('Error:', error); }`. That is the real payoff — async errors are caught with the same construct as synchronous ones.",
        code: "const fetchData = () => {\n  return new Promise(resolve =>\n    setTimeout(() => resolve('Data'), 2000)\n  );\n};\n\nasync function getData() {\n  try {\n    const data = await fetchData();\n    console.log(data);\n  } catch (error) {\n    console.log('Error:', error);\n  }\n}\n\ngetData();",
      },
      {
        h: "6. Common async APIs",
        p: "- `setTimeout()` / `setInterval()` → timers\n- `fetch()` → API calls\n- `addEventListener()` → events\n- **FS (Node.js)** → file operations\n- **Promises** → custom async tasks\n\nThese are the places async shows up in day-to-day work — the pattern is always the same even when the API differs.",
      },
      {
        h: "Event loop (in short)",
        p: "The mechanism that makes single-threaded async possible:\n\n- **1.** JS code runs in the **Call Stack**.\n- **2.** Async tasks go to **Web APIs**.\n- **3.** When ready, they go to the **Callback Queue**.\n- **4.** The **Event Loop** pushes them back to the Call Stack.\n\nThe diagram shows the cycle: Call Stack → Web APIs → Callback Queue → Event Loop → back to Call Stack. Crucially, step 4 only happens when the call stack is empty — which is why a long synchronous loop still freezes everything, and why \"never block the flow\" is the episode's parting advice.",
      },
      {
        h: "Key takeaways",
        p: "- Async JS **prevents blocking**.\n- **Callbacks** → first approach but messy.\n- **Promises** → better way to handle async code.\n- **Async/await** → clean & readable.\n- **Event Loop** → makes async possible.\n\nClosing line: *Write async code like a pro. Keep it clean, handle errors, and never block the flow!*",
      },
    ],
    snippets: [
      {
        label: "Callback-based async",
        code: "function fetchData(callback) {\n  setTimeout(() => {\n    const data = { user: 'Fabulous' };\n    callback(data);\n  }, 2000);\n}\n\nfetchData((data) => {\n  console.log('Data received:', data);\n});",
        note: "Oldest approach — leads to callback hell when nested.",
      },
      {
        label: "Creating and consuming a Promise",
        code: "const fetchData = () => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      const success = true; // or false\n      if (success) resolve('Data received');\n      else reject('Failed to fetch data');\n    }, 2000);\n  });\n};\n\nfetchData()\n  .then(result => console.log(result))\n  .catch(error => console.log(error));",
        note: "Pending → Fulfilled (Resolved) **or** Rejected.",
      },
      {
        label: "Promise chaining",
        code: "fetchData()\n  .then(data => {\n    console.log(data);\n    return 'Process step 2';\n  })\n  .then(msg => {\n    console.log(msg);\n    return 'Process step 3';\n  })\n  .then(final => console.log(final))\n  .catch(err => console.log('Error:', err));",
        note: "One `.catch()` at the end handles failure anywhere in the chain.",
      },
      {
        label: "async / await with try...catch",
        code: "const fetchData = () => {\n  return new Promise(resolve =>\n    setTimeout(() => resolve('Data'), 2000)\n  );\n};\n\nasync function getData() {\n  try {\n    const data = await fetchData();\n    console.log(data);\n  } catch (error) {\n    console.log('Error:', error);\n  }\n}\n\ngetData();",
        note: "`async` returns a Promise; `await` pauses until it resolves.",
      },
    ],
  },
  {
    day: 42,
    group: 'advanced',
    title: 'Generators & Iterators',
    tagline: 'Power tools for working with sequences.',
    image: '/javascript-notes/ep42-generators-and-iterators.jpeg',
    tags: ['Generators', 'Iterators', 'yield'],
    notes: [
      { k: 'Iterators', v: 'An object defining a sequence, with a next() method returning `{ value, done }`. When done is true, the sequence is over.' },
      { k: 'Generators', v: 'Functions that can PAUSE (yield) and resume later. Declared with `function*`. They remember their state between yields — that is the magic.' },
      { k: 'yield vs return', v: 'yield pauses and produces a value, and can be used many times. return ends the function completely, and only once.' },
      { k: 'Iterating', v: 'Generators are iterable, so `for…of` works directly on them without touching next().' },
      { k: 'Generator methods', v: 'next(value) resumes and gets the next value, return(value) stops the generator early, throw(error) throws inside it.' },
      { k: 'Real uses', v: 'Pagination (load one page at a time), reading large files line by line, infinite sequences, game loops, lazy data streams.' },
    ],
    theory: [
      {
        h: "Generators & Iterators",
        p: "**Power tools to work with sequences in a smarter way.** The header note splits the two ideas cleanly: **iterators let us go one step at a time. Generators let us pause & resume execution.**\n\nThe closing line: *Iterate smart. Generate power. Write elegant JavaScript.*",
      },
      {
        h: "1. Iterators",
        p: "**An iterator is an object that defines a sequence and has a `next()` method that returns `{ value, done }`.**\n\nThe diagram shows the loop: call `next()` on the iterator, get back `{ value, done }`; while `done = false` you loop back and call `next()` again; when `done = true` the sequence is over. That two-field envelope is the entire iterator protocol — value carries the payload, `done` signals termination.\n\nThe manual example builds a `rangeIterator` object with `current: 1` and `last: 3`. Its `next()` checks `if (this.current <= this.last)` and returns `{ value: this.current++, done: false }`, otherwise `{ done: true }`. Four calls produce `{value: 1, done: false}`, `{value: 2, done: false}`, `{value: 3, done: false}`, then `{done: true}`.",
        code: "const rangeIterator = {\n  current: 1,\n  last: 3,\n  next() {\n    if (this.current <= this.last) {\n      return { value: this.current++, done: false };\n    }\n    return { done: true };\n  }\n};\n\nconsole.log(rangeIterator.next()); // { value: 1, done: false }\nconsole.log(rangeIterator.next()); // { value: 2, done: false }\nconsole.log(rangeIterator.next()); // { value: 3, done: false }\nconsole.log(rangeIterator.next()); // { done: true }",
      },
      {
        h: "2. Generators",
        p: "**Generators are functions that can pause (`yield`) and resume later. They are created using `function*`.**\n\nThe example `function* countUpTo(n)` loops `for (let i = 1; i <= n; i++)` and does `yield i;` — the comment reads: *pause & yield the value*. Calling `countUpTo(3)` does not run the body; it returns a generator object. Each `counter.next()` runs until the next `yield` and hands back `{ value, done }`:\n\n- `{ value: 1, done: false }`\n- `{ value: 2, done: false }`\n- `{ value: 3, done: false }`\n- `{ value: undefined, done: true }`\n\nThe insight, boxed on the page: **generators remember their state between yields. That's the magic!** The loop variable `i` survives across pauses — you get all the bookkeeping of the manual iterator above for free.",
        code: "function* countUpTo(n) {\n  for (let i = 1; i <= n; i++) {\n    yield i; // pause & yield the value\n  }\n}\n\nconst counter = countUpTo(3);\nconsole.log(counter.next()); // { value: 1, done: false }\nconsole.log(counter.next()); // { value: 2, done: false }\nconsole.log(counter.next()); // { value: 3, done: false }\nconsole.log(counter.next()); // { value: undefined, done: true }",
      },
      {
        h: "3. yield vs return",
        p: "**`yield`**\n\n- Pauses the function and returns a value.\n- Can be used **multiple times**.\n- Used in generators.\n\n**`return`**\n\n- Ends the function **completely**.\n- Can be used **only once**.\n- Used in regular functions.\n\nThe distinction is the heart of generators: `return` is a door out, `yield` is a bookmark. A `yield` hands a value to the caller while keeping the function's local state alive, ready to pick up exactly where it left off.",
      },
      {
        h: "4. Iterating over a generator",
        p: "**Generators are iterable, so we can use a `for...of` loop** — no manual `next()` calls, no checking `done` yourself.\n\n`function* letters()` yields `'A'`, `'B'`, `'C'`, and then `for (let ch of letters()) { console.log(ch); }` prints A B C. The loop drives the generator automatically and stops when `done` becomes true. This is why generators are worth learning even if you never call `next()` by hand: they let you plug custom sequences into the language's ordinary iteration syntax.",
        code: "function* letters() {\n  yield 'A';\n  yield 'B';\n  yield 'C';\n}\n\nfor (let ch of letters()) {\n  console.log(ch); // A B C\n}",
      },
      {
        h: "Real world uses",
        p: "- **Pagination** (load one page at a time)\n- **Reading large files** line by line\n- **Infinite sequences**\n- **Game loops**\n- **Lazy data streams**\n\nThe common thread is laziness: in every one of these cases you don't want the whole sequence in memory at once — you want the next item only when you ask for it. An infinite sequence is only expressible at all because a generator computes on demand.",
      },
      {
        h: "5. Generator methods",
        p: "Generator objects have three methods:\n\n- **`next(value)`** → resume & get next value\n- **`return(value)`** → stop the generator and return a value\n- **`throw(error)`** → throw an error **inside** the generator\n\nThat last one is the surprising one: `throw()` doesn't just raise an error at your call site — it injects the error at the paused `yield` point inside the generator body, where the generator's own `try...catch` can handle it.",
      },
      {
        h: "Example — return() & throw()",
        p: "`function* demo()` wraps `yield 1; yield 2; yield 3;` in a `try` block, with `catch (err) { console.log('Caught:', err.message); }` and `finally { console.log('Generator closed.'); }`.\n\nRunning it: `gen.next()` gives `{ value: 1, done: false }`, `gen.next()` gives `{ value: 2, done: false }`, and then `gen.throw(new Error('Oops!'))` gives `{ value: undefined, done: true }`.\n\n**Output:**\n\n- Caught: Oops!\n- Generator closed.\n\nThe error was thrown at the paused `yield 2`, caught by the generator's own `catch`, and the `finally` block ran as the generator shut down — proving the generator body is a live, suspended scope, not just a value factory.",
        code: "function* demo() {\n  try {\n    yield 1;\n    yield 2;\n    yield 3;\n  } catch (err) {\n    console.log('Caught:', err.message);\n  } finally {\n    console.log('Generator closed.');\n  }\n}\n\nconst gen = demo();\nconsole.log(gen.next()); // { value: 1, done: false }\nconsole.log(gen.next()); // { value: 2, done: false }\nconsole.log(gen.throw(new Error('Oops!')));\n// { value: undefined, done: true }",
      },
      {
        h: "Remember",
        p: "- Iterators follow the **protocol**.\n- Generators make it **easier**.\n- Use the **right tool for the job**!\n\nClosing line: *Iterate smart. Generate power. Write elegant JavaScript.*",
      },
    ],
    snippets: [
      {
        label: "Manual iterator",
        code: "const rangeIterator = {\n  current: 1,\n  last: 3,\n  next() {\n    if (this.current <= this.last) {\n      return { value: this.current++, done: false };\n    }\n    return { done: true };\n  }\n};\n\nconsole.log(rangeIterator.next()); // { value: 1, done: false }\nconsole.log(rangeIterator.next()); // { value: 2, done: false }\nconsole.log(rangeIterator.next()); // { value: 3, done: false }\nconsole.log(rangeIterator.next()); // { done: true }",
        note: "The iterator protocol in full: a `next()` returning `{ value, done }`.",
      },
      {
        label: "Generator function",
        code: "function* countUpTo(n) {\n  for (let i = 1; i <= n; i++) {\n    yield i; // pause & yield the value\n  }\n}\n\nconst counter = countUpTo(3);\nconsole.log(counter.next()); // { value: 1, done: false }\nconsole.log(counter.next()); // { value: 2, done: false }\nconsole.log(counter.next()); // { value: 3, done: false }\nconsole.log(counter.next()); // { value: undefined, done: true }",
        note: "Generators remember their state between yields. That's the magic.",
      },
      {
        label: "Iterating a generator with for...of",
        code: "function* letters() {\n  yield 'A';\n  yield 'B';\n  yield 'C';\n}\n\nfor (let ch of letters()) {\n  console.log(ch); // A B C\n}",
        note: "Generators are iterable — no manual `next()` needed.",
      },
      {
        label: "Generator return() & throw()",
        code: "function* demo() {\n  try {\n    yield 1;\n    yield 2;\n    yield 3;\n  } catch (err) {\n    console.log('Caught:', err.message);\n  } finally {\n    console.log('Generator closed.');\n  }\n}\n\nconst gen = demo();\nconsole.log(gen.next()); // { value: 1, done: false }\nconsole.log(gen.next()); // { value: 2, done: false }\nconsole.log(gen.throw(new Error('Oops!')));\n// { value: undefined, done: true }",
        note: "Output: **Caught: Oops!** then **Generator closed.**",
      },
    ],
  },
  {
    day: 43,
    group: 'advanced',
    title: 'Proxy & Reflect',
    tagline: 'Intercept and customize operations on objects.',
    image: '/javascript-notes/ep43-proxy-and-reflect.jpeg',
    tags: ['Proxy', 'Reflect', 'Meta'],
    notes: [
      { k: 'What Proxy is', v: 'An object that wraps another object and intercepts operations on it — reading, writing, deleting, checking. It sits between you and the target as a middleman.' },
      { k: 'Common traps', v: 'get (read), set (write/update), has (`in` checks), deleteProperty, apply (function calls), construct (`new`), ownKeys (Object.keys), getOwnPropertyDescriptor.' },
      { k: 'What Reflect is', v: 'A built-in object providing methods for the same operations — Reflect.get, Reflect.set, Reflect.has, Reflect.deleteProperty. No magic, just tools.' },
      { k: 'Proxy vs Reflect', v: 'Proxy intercepts and customizes behaviour; Reflect performs the default behaviour. You decide what happens with Proxy; Reflect follows the normal rules.' },
      { k: 'Why together', v: 'Calling Reflect inside a Proxy trap forwards the operation correctly rather than reimplementing it by hand.' },
      { k: 'Real uses', v: 'Form validation, reactive state (this is how Vue 3 reactivity works), logging and debugging, access control.' },
      { k: 'The caution', v: 'Do not overuse Proxy. It makes code harder to read and debug if misused.' },
    ],
    theory: [
      {
        h: "Proxy & Reflect — Intercepting Object Operations",
        p: "Proxy and Reflect are powerful built-in features that let you **intercept** and **customize** operations on objects. The mental model on the page is a middleman: a **Normal Object** (say `const user = { name: 'John' }`) sends a *request*, that request hits the **PROXY** shield sitting in the middle, and the Proxy *forwards* it on to the **Target Object** (`{ name: 'John' }`). Because the Proxy sits in between you and the object, it can control what happens at every step — reading, writing, deleting, checking.\n\nThe page's summary line: **Proxy adds superpowers. Reflect gives you the tools.** Proxy is the interception layer; Reflect is the clean, official way to perform the default operation once you have intercepted it.",
      },
      {
        h: "1. What is Proxy?",
        p: "A Proxy is an object that **wraps another object** and **intercepts operations** on it — like reading, writing, deleting, or checking (`in`) a property. You create one with `new Proxy(target, handler)`, where `target` is the real object and `handler` is an object of trap functions.\n\nIn the example, the handler defines a `get(target, prop)` trap that logs `Accessing ${prop}` and then returns `target[prop]`. So `console.log(proxy.name)` first prints `Accessing name` and then prints `John`. The side note on the page makes the key point: **any operation on the proxy can be intercepted and customised** — you decide what really happens.",
        code: "const user = { name: 'John' };\n\nconst proxy = new Proxy(user, {\n  get(target, prop) {\n    console.log(`Accessing ${prop}`);\n    return target[prop];\n  }\n});\n\nconsole.log(proxy.name); // Accessing name\n                         // John",
      },
      {
        h: "2. Common Proxy Traps",
        p: "Traps are the special handler methods that define how a Proxy handles a specific operation. Each trap corresponds to one fundamental thing you can do to an object:\n\n- `get` — Read a property.\n- `set` — Write/Update a property.\n- `has` — Check if a property exists (the `in` operator).\n- `deleteProperty` — Delete a property (`delete`).\n- `apply` — Call a function (used for function proxies).\n- `construct` — Create an instance with `new`.\n- `ownKeys` — Get all keys (`Object.keys`, etc.).\n- `getOwnPropertyDescriptor` — Get property details.\n\nYou only implement the traps you care about; every operation you do not trap falls through to the target's default behaviour.",
      },
      {
        h: "3. What is Reflect?",
        p: "Reflect is a **built-in object that provides methods for common operations** on objects. Its whole purpose is to make code **cleaner, safer and easier to maintain**. Every fundamental object operation has a matching Reflect method: `Reflect.get(obj, 'name')` returns `'Alice'`, `Reflect.set(obj, 'age', 25)` returns `true`, `Reflect.has(obj, 'name')` returns `true`, and `Reflect.deleteProperty(obj, 'age')` returns `true`.\n\nThe side note is important: **Reflect does the operation. No magic. Just tools.** Reflect is not clever — it simply performs the *default* behaviour of an operation, in function form, returning a useful boolean instead of throwing or silently failing.",
        code: "const obj = { name: 'Alice' };\n\nReflect.get(obj, 'name');            // 'Alice'\nReflect.set(obj, 'age', 25);         // true\nReflect.has(obj, 'name');            // true\nReflect.deleteProperty(obj, 'age');  // true",
      },
      {
        h: "4. Proxy vs Reflect",
        p: "The two are complementary, not competing. Row by row:\n\n- **Role** — Proxy: intercepts operations. Reflect: performs operations.\n- **Purpose** — Proxy: customise behaviour. Reflect: default behaviour.\n- **Syntax** — Proxy: `new Proxy(target, handler)`. Reflect: `Reflect.method(target, ...)`.\n- **Control** — Proxy: *you* decide what happens. Reflect: follows the default rules.\n- **Used for** — Proxy: powerful abstractions, validation, logging, etc. Reflect: utility, and forwarding inside handlers.\n\nSo the natural pattern is: trap with Proxy, then forward with Reflect.",
      },
      {
        h: "5. Proxy in Action — a Logger",
        p: "The page builds a simple logger using Proxy. The handler traps three operations. `get(target, prop)` logs `Getting ${prop}: ${target[prop]}` and returns `Reflect.get(target, prop)`. `set(target, prop, value)` logs `Setting ${prop} to ${value}` and returns `Reflect.set(target, prop, value)`. `deleteProperty(target, prop)` logs `Deleting ${prop}` and returns `Reflect.deleteProperty(target, prop)`.\n\nRunning it: `logger.name` prints `Getting name: John`; `logger.age = 21` prints `Setting age to 21`; `delete logger.name` prints `Deleting name`. The starred note: **using Reflect inside Proxy keeps behaviour correct** — you get your logging *and* the object still behaves exactly as a normal object would.",
        code: "const user = { name: 'John', age: 20 };\n\nconst logger = new Proxy(user, {\n  get(target, prop) {\n    console.log(`Getting ${prop}: ${target[prop]}`);\n    return Reflect.get(target, prop);\n  },\n  set(target, prop, value) {\n    console.log(`Setting ${prop} to ${value}`);\n    return Reflect.set(target, prop, value);\n  },\n  deleteProperty(target, prop) {\n    console.log(`Deleting ${prop}`);\n    return Reflect.deleteProperty(target, prop);\n  }\n});\n\nlogger.name;        // Getting name: John\nlogger.age = 21;    // Setting age to 21\ndelete logger.name; // Deleting name",
      },
      {
        h: "6. Real World Uses",
        p: "Where Proxy actually earns its keep:\n\n- **Form Validation** — validate and sanitise data on the fly, as it is written.\n- **State Management** — used in libraries like **Vue 3** (its reactivity system is built on Proxy).\n- **Logging & Debugging** — track access, changes and errors easily.\n- **Access Control** — restrict or allow access to properties.\n- **Reactive Systems** — auto-update the UI when data changes.",
      },
      {
        h: "How They Work Together",
        p: "The closing diagram traces one operation end to end: **You** perform an *operation* → it hits the **PROXY** → the Proxy *uses* **REFLECT** → Reflect *acts on* the **TARGET OBJECT**. That is the whole architecture in one line: Proxy intercepts, Reflect executes, the target is what actually changes.",
      },
      {
        h: "7. Key Takeaways",
        p: "- Proxy lets you intercept and control operations.\n- Reflect provides clean, default operations.\n- Use Proxy for custom logic, Reflect for safety.\n- Together, they make code powerful and elegant.\n\n**NOTE (warning):** don't overuse Proxy. It can make code harder to read and debug if misused.\n\nThe page's closing line: **Proxy gives you control. Reflect gives you power to act. Use both wisely and build next-level JavaScript!**",
      },
    ],
    snippets: [
      {
        label: "A basic intercepting Proxy",
        code: "const user = { name: 'John' };\n\nconst proxy = new Proxy(user, {\n  get(target, prop) {\n    console.log(`Accessing ${prop}`);\n    return target[prop];\n  }\n});\n\nconsole.log(proxy.name); // Accessing name\n                         // John",
        note: "The `get` trap runs before the real read; **any operation on the proxy can be intercepted**.",
      },
      {
        label: "Reflect's core methods",
        code: "const obj = { name: 'Alice' };\n\nReflect.get(obj, 'name');            // 'Alice'\nReflect.set(obj, 'age', 25);         // true\nReflect.has(obj, 'name');            // true\nReflect.deleteProperty(obj, 'age');  // true",
        note: "Reflect just does the operation — **no magic, just tools**.",
      },
      {
        label: "A logging Proxy built with Reflect",
        code: "const user = { name: 'John', age: 20 };\n\nconst logger = new Proxy(user, {\n  get(target, prop) {\n    console.log(`Getting ${prop}: ${target[prop]}`);\n    return Reflect.get(target, prop);\n  },\n  set(target, prop, value) {\n    console.log(`Setting ${prop} to ${value}`);\n    return Reflect.set(target, prop, value);\n  },\n  deleteProperty(target, prop) {\n    console.log(`Deleting ${prop}`);\n    return Reflect.deleteProperty(target, prop);\n  }\n});\n\nlogger.name;        // Getting name: John\nlogger.age = 21;    // Setting age to 21\ndelete logger.name; // Deleting name",
        note: "Using Reflect inside the Proxy keeps the default behaviour **correct**.",
      },
      {
        label: "DIAGRAM — Proxy as middleman",
        code: "Normal Object            intercepts             Target Object\nconst user =   request  +-----------+  forwards  { name: 'John' }\n{ name: 'John' } ------> |   PROXY   | ---------> (the real object)\n                         +-----------+\n                         (middleman)\n\nProxy sits in between you and the object\nand can control what happens.",
      },
      {
        label: "DIAGRAM — How Proxy and Reflect work together",
        code: "  You  --operation-->  PROXY  --uses-->  REFLECT  --acts on-->  TARGET OBJECT",
      },
    ],
  },
  {
    day: 44,
    group: 'advanced',
    title: 'WeakMap & WeakSet',
    tagline: 'Weak collections that let the garbage collector do its job.',
    image: '/javascript-notes/ep44-weakmap-and-weakset.jpeg',
    tags: ['WeakMap', 'WeakSet', 'Memory'],
    notes: [
      { k: 'The problem', v: 'In Map and Set, keys are strongly referenced — the object stays in memory even if nothing else uses it.' },
      { k: 'The fix', v: 'WeakMap and WeakSet hold WEAK references. When the object is no longer used elsewhere, it can be garbage collected and the entry disappears with it.' },
      { k: 'WeakMap', v: 'Key-value pairs where keys MUST be objects (not primitives). Values can be anything. Methods: set, get, has, delete.' },
      { k: 'WeakSet', v: 'A collection of unique objects only — no primitive values. Methods: add, has, delete.' },
      { k: 'The trade-off', v: 'Weak collections are not iterable and have no size property. That is by design — you cannot enumerate what might vanish mid-loop.' },
      { k: 'Real uses', v: 'DOM metadata without leaks, private data attached to objects, caches that auto-clean, and long-lived apps with dynamic objects.' },
      { k: 'Rule of thumb', v: 'Use Map/Set when you need to iterate or count. Use WeakMap/WeakSet when you want the GC to clean up for you.' },
    ],
    theory: [
      {
        h: "WeakMap & WeakSet — Weak Collections",
        p: "WeakMap and WeakSet are **weak collections** that hold **weak references** to objects. They exist for one reason: **memory efficiency**. The header note sums it up — weak collections **don't prevent Garbage Collection**, which means **less memory leaks, more performance**.\n\nA weak reference is one the garbage collector is allowed to ignore. If the only thing still pointing at an object is a WeakMap or WeakSet, that object is considered unreachable and can be collected.",
      },
      {
        h: "1. Why Weak Collections?",
        p: "- In **Map/Set**, keys are **strongly referenced**.\n- The object **stays in memory even if nothing else uses it** — the collection alone is enough to keep it alive.\n- **WeakMap & WeakSet hold weak references.**\n- If the object is no longer used, it can be **garbage collected**.\n\nThis is the whole motivation. A normal Map used as a cache is a memory leak waiting to happen: every object you ever put in it is pinned in memory forever unless you manually delete it. Weak collections remove that obligation.",
      },
      {
        h: "Garbage Collection (GC)",
        p: "The side diagram shows the lifecycle: an **object is no longer referenced** → it goes into the **GC** (garbage collector) bin → **memory is free again!**\n\nThe key line: **weak collections let GC clean up objects automatically.** You do not have to remember to remove entries; when the rest of your program stops caring about an object, the object and its weak entry simply disappear.",
      },
      {
        h: "2. WeakMap",
        p: "A WeakMap is a collection of **key/value pairs where keys must be objects** (not primitives). The values, however, can be anything.\n\nIn the example, `wm.set(obj, 'data')` sets an entry keyed by the object; `wm.get(obj)` returns `'data'`; `wm.has(obj)` returns `true`; `wm.delete(obj)` returns `true`; and a following `wm.has(obj)` returns `false` because it was deleted.\n\nThe side note repeats the two rules: **keys must be objects, values can be anything**.",
        code: "const wm = new WeakMap();\nconst obj = { id: 1 };\n\nwm.set(obj, 'data');  // set\nwm.get(obj);          // 'data'\nwm.has(obj);          // true\nwm.delete(obj);       // true\nwm.has(obj);          // false (deleted)",
      },
      {
        h: "3. Map vs WeakMap",
        p: "- **Key types** — Map: keys can be any type. WeakMap: keys must be objects.\n- **References** — Map: strong references. WeakMap: weak references.\n- **GC behaviour** — Map: prevents keys from being GC'ed. WeakMap: keys can be garbage collected.\n- **Iterable** — Map: iterable. WeakMap: not iterable.\n- **Size** — Map: has a `size` property. WeakMap: no `size` property.\n- **Use when** — Map: you need to iterate or count. WeakMap: you want GC to clean up for you.\n\nThe reason WeakMap is not iterable and has no `size` is not laziness — entries can vanish at any moment, so an iteration order or a count would be non-deterministic.",
      },
      {
        h: "4. WeakSet",
        p: "A WeakSet is a collection of **unique objects — only objects, no primitive values**. The thought bubble on the page: **WeakSet is like Set, but for objects only!**\n\nIn the example, `ws.add(obj1)` adds it; `ws.has(obj1)` returns `true`; `ws.delete(obj1)` returns `true`; and the following `ws.has(obj1)` returns `false`. Same API shape as Set, minus everything that requires enumeration.",
        code: "const ws = new WeakSet();\nconst obj1 = { name: 'A' };\nconst obj2 = { name: 'B' };\n\nws.add(obj1);      // add\nws.has(obj1);      // true\nws.delete(obj1);   // true\nws.has(obj1);      // false",
      },
      {
        h: "5. Set vs WeakSet",
        p: "- **Value types** — Set: values can be any type. WeakSet: values must be objects.\n- **References** — Set: strong references. WeakSet: weak references.\n- **GC behaviour** — Set: prevents values from being GC'ed. WeakSet: values can be garbage collected.\n- **Iterable** — Set: iterable. WeakSet: not iterable.\n- **Size** — Set: has `size`. WeakSet: no `size` property.\n- **Use when** — Set: you need to iterate or count. WeakSet: you want GC to clean up for you.\n\nNotice the table is the exact mirror of Map vs WeakMap — the trade-off is identical, just applied to values instead of keys.",
      },
      {
        h: "6. Real World Uses",
        p: "- **DOM Metadata** — store extra info about DOM elements without memory leaks. When the element is removed from the page, its metadata goes with it.\n- **Private Data** — attach private data to objects without modifying them.\n- **Cache** — cache results based on object keys, with auto-cleanup when unused.\n- **Avoid Memory Leaks** — perfect for long-lived apps with dynamic objects.",
      },
      {
        h: "7. Examples",
        p: "**WeakMap example:** create `const wm = new WeakMap()` and `const user = { name: 'Faisal' }`, then `wm.set(user, { age: 21 })`. `wm.get(user)` returns `{ age: 21 }`. The comment makes the point: if `user` is no longer referenced, it can be GC'ed — and the `{ age: 21 }` entry disappears with it.\n\n**WeakSet example:** create `const ws = new WeakSet()` and `let obj = { id: 1 }`, then `ws.add(obj)` and `ws.has(obj)` returns `true`. Now set `obj = null` — there are **no other references** to the object, so **GC can collect it and remove it from the WeakSet**. You never had to call `delete`.",
        code: "// WeakMap Example\nconst wm = new WeakMap();\nconst user = { name: 'Faisal' };\nwm.set(user, { age: 21 });\n\nwm.get(user);  // { age: 21 }\n// if 'user' is no longer referenced, it can be GC'ed\n\n// WeakSet Example\nconst ws = new WeakSet();\nlet obj = { id: 1 };\nws.add(obj);\nws.has(obj);   // true\n\nobj = null;    // no other references to the object\n// GC can collect the object\n// and remove it from the WeakSet",
      },
      {
        h: "8. Key Takeaways",
        p: "- WeakMap & WeakSet hold **weak references** to objects.\n- They allow **garbage collection of unused objects**.\n- Perfect for **memory-sensitive** and **long-running** applications.\n- **Not iterable, no size property** — use them when you don't need them.\n- Use **Proxy, Reflect, WeakMap, WeakSet together** for powerful patterns.\n\n**NOTE:** weak collections are **not enumerable by design**. That's the trade-off!\n\nThe punchline box: **Strong when you need it. Weak when you don't. Smart JavaScript always chooses the right tool!** And the closing line: **Write efficient code. Manage memory smartly. Build better applications!**",
      },
    ],
    snippets: [
      {
        label: "WeakMap basics",
        code: "const wm = new WeakMap();\nconst obj = { id: 1 };\n\nwm.set(obj, 'data');  // set\nwm.get(obj);          // 'data'\nwm.has(obj);          // true\nwm.delete(obj);       // true\nwm.has(obj);          // false (deleted)",
        note: "**Keys must be objects**; values can be anything.",
      },
      {
        label: "WeakSet basics",
        code: "const ws = new WeakSet();\nconst obj1 = { name: 'A' };\nconst obj2 = { name: 'B' };\n\nws.add(obj1);      // add\nws.has(obj1);      // true\nws.delete(obj1);   // true\nws.has(obj1);      // false",
        note: "**WeakSet is like Set, but for objects only.**",
      },
      {
        label: "WeakMap example — data that dies with its object",
        code: "const wm = new WeakMap();\nconst user = { name: 'Faisal' };\nwm.set(user, { age: 21 });\n\nwm.get(user);  // { age: 21 }\n// if 'user' is no longer referenced, it can be GC'ed",
      },
      {
        label: "WeakSet example — automatic cleanup",
        code: "const ws = new WeakSet();\nlet obj = { id: 1 };\nws.add(obj);\nws.has(obj);   // true\n\nobj = null;    // no other references to the object\n// GC can collect the object\n// and remove it from the WeakSet",
        note: "Dropping the last strong reference is enough — no `delete` call needed.",
      },
      {
        label: "DIAGRAM — Garbage Collection lifecycle",
        code: "  Object no longer          +------+          Memory is\n  referenced       ------>  |  GC  |  ------>  free again!\n  [ obj ]                   +------+\n\n  Weak collections let GC clean up objects automatically.",
      },
    ],
  },
  {
    day: 45,
    group: 'advanced',
    title: 'Symbols',
    tagline: 'Unique. Hidden. Powerful.',
    image: '/javascript-notes/ep45-symbols.jpeg',
    tags: ['Symbol', 'ES6', 'Meta'],
    notes: [
      { k: 'What it is', v: 'A primitive introduced in ES6. Every Symbol is unique — `Symbol("id") !== Symbol("id")` — even with the same description.' },
      { k: 'The description', v: 'Just a label for debugging. It does not affect uniqueness.' },
      { k: 'As object keys', v: 'Used with computed syntax: `{ [Symbol("id")]: 101 }`. To read it back you must hold the SAME symbol reference — so store it in a variable.' },
      { k: 'Not enumerated', v: 'Symbol keys are skipped by Object.keys() and JSON.stringify(). Only Object.getOwnPropertySymbols() reveals them.' },
      { k: 'Global registry', v: '`Symbol.for("token")` looks the symbol up in a global registry and creates it only if missing — so it IS shared across files. `Symbol("token")` never is.' },
      { k: 'Well-known symbols', v: 'Symbol.iterator (makes an object iterable with for…of), Symbol.toStringTag, Symbol.toPrimitive, Symbol.hasInstance.' },
      { k: 'Uses', v: 'Private-ish properties without name clashes, library development, meta-programming, guaranteed unique keys.' },
    ],
    theory: [
      {
        h: "Symbols in JavaScript",
        p: "Symbols are **primitive values used to create unique identifiers for object properties**. The header note explains the point of them: symbols help us **avoid naming conflicts** and **add hidden properties to objects**. If two different libraries both want to attach a `id` field to the same object, string keys collide — symbol keys never do.",
      },
      {
        h: "1. What is a Symbol?",
        p: "- Introduced in **ES6**.\n- **Each Symbol is unique.**\n- Often used as **object property keys**.\n- **Not enumerable by default.**\n- Useful for creating **\"private\" or hidden** properties.\n\nThe thought bubble: **think of Symbols as secret keys that don't clash with any other keys.**\n\nThe proof is in the example: `const id1 = Symbol()` and `const id2 = Symbol('id')` produce values where `id1 === id2` is `false` — **always unique**. And `id2.description` gives back `'id'`, the label you passed in.",
        code: "const id1 = Symbol();\nconst id2 = Symbol('id');\n\nconsole.log(id1 === id2);      // false (always unique)\nconsole.log(id2.description);  // 'id'",
      },
      {
        h: "2. Creating Symbols",
        p: "You create a symbol by calling `Symbol()` — never with `new`. `const sym1 = Symbol()` has **no description**; `const sym2 = Symbol('name')` has a description. Reading it back, `console.log(sym2.description)` prints `'name'`.\n\n**TIP:** the description **is just a label. It doesn't affect uniqueness.** The clinching example: `Symbol('a') !== Symbol('a')` is **true**. Two symbols with identical descriptions are still two completely different values. The description exists purely for debugging and readability.",
        code: "const sym1 = Symbol();          // no description\nconst sym2 = Symbol('name');    // with description\n\nconsole.log(sym2.description);  // 'name'\n\nSymbol('a') !== Symbol('a');    // true",
      },
      {
        h: "3. Using Symbols as Object Keys",
        p: "To use a symbol as a key, wrap it in computed-property brackets: `[Symbol('id')]: 101`. But there is a trap here, and the page demonstrates it deliberately.\n\nIn the first example the object is written with `[Symbol('id')]: 101` inline, then read with `const id = Symbol('id'); console.log(user[id])` — and the result is **undefined (different symbol!)**. Because every `Symbol('id')` call makes a brand-new symbol, the key you wrote and the key you read are not the same value.\n\n**To access the symbol property, you must use the same symbol reference.** The correct way is to store the symbol in a variable first: `const ID = Symbol('id')`, then `const user = { name: 'Faisal', [ID]: 101 }`, and `console.log(user[ID])` correctly prints `101`.\n\nThe side note: **always store your symbols in variables so you can reuse them!**",
        code: "// Wrong\nconst user = {\n  name: 'Faisal',\n  [Symbol('id')]: 101,\n};\n\nconst id = Symbol('id');\nconsole.log(user[id]);  // undefined (different symbol!)\n\n// Correct Way\nconst ID = Symbol('id');\nconst user2 = { name: 'Faisal', [ID]: 101 };\nconsole.log(user2[ID]);  // 101",
      },
      {
        h: "4. Symbols Are Not Enumerated",
        p: "Symbol keys are invisible to every ordinary enumeration mechanism. With `const id = Symbol('id')` and `const user = { name: 'Faisal', [id]: 101, age: 21 }`:\n\n- `Object.keys(user)` gives `['name', 'age']` — the symbol is absent.\n- `Object.getOwnPropertySymbols(user)` gives `[ id ]` — this is the *only* way to enumerate them.\n- `JSON.stringify(user)` gives `{\"name\":\"Faisal\",\"age\":21}` — symbols are dropped entirely.\n\nThe diagram makes it visual: `Object.keys(user)` returns the boxes **name** and **age**, while the **Symbol property is hidden**; only `Object.getOwnPropertySymbols(user)` surfaces the **id** box. This is exactly what makes symbols useful for \"private\" metadata — code that iterates your object simply never sees them.",
        code: "const id = Symbol('id');\nconst user = { name: 'Faisal', [id]: 101, age: 21 };\n\nconsole.log(Object.keys(user));                   // ['name', 'age']\nconsole.log(Object.getOwnPropertySymbols(user));  // [ id ]\nconsole.log(JSON.stringify(user));                // {\"name\":\"Faisal\",\"age\":21}",
      },
      {
        h: "5. Global Symbol Registry",
        p: "Symbols can be **shared across files/realms using the global registry**, accessed via `Symbol.for()`.\n\n`const s1 = Symbol.for('token')` and `const s2 = Symbol.for('token')` give `s1 === s2` → **true (shared)**. Contrast that with plain `Symbol('token')`: `const s3 = Symbol('token')` and `const s4 = Symbol('token')` give `s3 === s4` → **false (unique)**.\n\nThe side note explains the mechanism: **`Symbol.for(key)` looks for a symbol with the given key in the global registry. If not found, it creates one.** So `Symbol.for` is get-or-create, while `Symbol()` is always-create.",
        code: "const s1 = Symbol.for('token');\nconst s2 = Symbol.for('token');\nconsole.log(s1 === s2);  // true (shared)\n\nconst s3 = Symbol('token');\nconst s4 = Symbol('token');\nconsole.log(s3 === s4);  // false (unique)",
      },
      {
        h: "6. Well-Known Symbols",
        p: "JavaScript has **built-in (well-known) symbols** that let your objects hook into language-level behaviour:\n\n- `Symbol.iterator` — for iteration.\n- `Symbol.toStringTag` — for `Object.prototype.toString()`.\n- `Symbol.toPrimitive` — for type conversion.\n- `Symbol.hasInstance` — for `instanceof`.\n\nThe example makes a plain object **iterable using `Symbol.iterator`**. `const range = { from: 1, to: 3, [Symbol.iterator]() { ... } }` returns an iterator object whose `next()` yields `{ value: current++, done: false }` while `current <= last`, and `{ done: true }` afterwards. Then `for (let n of range) console.log(n)` prints **1 2 3**. This is how `for...of` works on *anything* — it just looks up `Symbol.iterator`.",
        code: "// Example: iterable using Symbol.iterator\nconst range = {\n  from: 1, to: 3,\n  [Symbol.iterator]() {\n    let current = this.from;\n    let last = this.to;\n    return {\n      next() {\n        if (current <= last) return { value: current++, done: false };\n        return { done: true };\n      }\n    };\n  }\n};\n\nfor (let n of range) console.log(n);  // 1 2 3",
      },
      {
        h: "7. Real World Use Cases",
        p: "- **Private Properties** — add hidden data to objects without name clashes.\n- **Library Development** — avoid overwriting user-defined properties.\n- **Meta Programming** — attach metadata safely to objects.\n- **Unique Identifiers** — generate guaranteed unique keys.",
      },
      {
        h: "8. Symbol vs String",
        p: "- **Type** — Symbol: primitive. String: primitive. (Both are primitives.)\n- **Unique** — Symbol: always unique. String: may not be unique.\n- **Visible in loops** — Symbol: no (by default). String: yes.\n- **JSON.stringify** — Symbol: ignored. String: included.\n- **Use case** — Symbol: hidden keys, meta. String: normal keys.\n\nThe side note: **use Symbols when you need uniqueness and privacy** — otherwise a plain string key is simpler and perfectly fine.",
      },
      {
        h: "9. Key Takeaways",
        p: "- Symbols are **unique primitive values**.\n- Used as **object property keys**.\n- **Not enumerated in loops.**\n- Can be **shared using `Symbol.for()`**.\n- Great for **hidden properties** and **advanced patterns**.\n\nThe closing line of the page: **Symbols = Unique. Hidden. Powerful. Use them wisely!**",
      },
    ],
    snippets: [
      {
        label: "Symbols are always unique",
        code: "const id1 = Symbol();\nconst id2 = Symbol('id');\n\nconsole.log(id1 === id2);      // false (always unique)\nconsole.log(id2.description);  // 'id'",
      },
      {
        label: "Creating symbols, with and without a description",
        code: "const sym1 = Symbol();          // no description\nconst sym2 = Symbol('name');    // with description\n\nconsole.log(sym2.description);  // 'name'\n\nSymbol('a') !== Symbol('a');    // true",
        note: "The description **is just a label — it doesn't affect uniqueness**.",
      },
      {
        label: "Symbol as an object key — the wrong way",
        code: "const user = {\n  name: 'Faisal',\n  [Symbol('id')]: 101,\n};\n\nconst id = Symbol('id');\nconsole.log(user[id]);  // undefined (different symbol!)",
        note: "Each `Symbol('id')` call creates a **new** symbol, so the lookup misses.",
      },
      {
        label: "Symbol as an object key — the correct way",
        code: "const ID = Symbol('id');\nconst user = { name: 'Faisal', [ID]: 101 };\nconsole.log(user[ID]);  // 101",
        note: "**Always store your symbols in variables so you can reuse them.**",
      },
      {
        label: "Symbol keys are hidden from enumeration",
        code: "const id = Symbol('id');\nconst user = { name: 'Faisal', [id]: 101, age: 21 };\n\nconsole.log(Object.keys(user));                   // ['name', 'age']\nconsole.log(Object.getOwnPropertySymbols(user));  // [ id ]\nconsole.log(JSON.stringify(user));                // {\"name\":\"Faisal\",\"age\":21}",
      },
      {
        label: "Global symbol registry — Symbol.for()",
        code: "const s1 = Symbol.for('token');\nconst s2 = Symbol.for('token');\nconsole.log(s1 === s2);  // true (shared)\n\nconst s3 = Symbol('token');\nconst s4 = Symbol('token');\nconsole.log(s3 === s4);  // false (unique)",
        note: "`Symbol.for` is get-or-create in a global registry; `Symbol()` always creates new.",
      },
      {
        label: "Making an object iterable with Symbol.iterator",
        code: "// Example: iterable using Symbol.iterator\nconst range = {\n  from: 1, to: 3,\n  [Symbol.iterator]() {\n    let current = this.from;\n    let last = this.to;\n    return {\n      next() {\n        if (current <= last) return { value: current++, done: false };\n        return { done: true };\n      }\n    };\n  }\n};\n\nfor (let n of range) console.log(n);  // 1 2 3",
      },
      {
        label: "DIAGRAM — what each enumeration method sees",
        code: "Object.keys(user)                 Object.getOwnPropertySymbols(user)\n +--------+  +-------+                      +--------+\n |  name  |  |  age  |                      |   id   |\n +--------+  +-------+                      +--------+\n (Symbol property is hidden)  -------->  (only visible here)",
      },
    ],
  },
  {
    day: 46,
    group: 'advanced',
    title: 'Set, Map & Their Methods',
    tagline: 'Set stores unique values. Map stores key-value pairs with any key type.',
    image: '/javascript-notes/ep46-set-map-and-methods.jpeg',
    tags: ['Set', 'Map', 'ES6'],
    notes: [
      { k: 'What they are', v: 'Built-in ES2015 data structures that perform better than arrays/objects for specific use cases and maintain insertion order.' },
      { k: 'Set', v: 'A collection of unique values of any type. Duplicates are silently ignored on add().' },
      { k: 'Set methods', v: 'add(value), has(value), delete(value), .size, clear(), values(), forEach().' },
      { k: 'Set vs Array', v: 'Set stores unique values, Array allows duplicates. has() is faster than includes() — O(1) vs O(n). Use Set when uniqueness is required.' },
      { k: 'Map', v: 'Key-value pairs where the key can be ANY type — including an object or a function.' },
      { k: 'Map methods', v: 'set(key, value), get(key), has(key), delete(key), .size, clear(), keys(), values(), entries(), forEach().' },
      { k: 'Map vs Object', v: 'Map keys: any type. Object keys: strings/Symbols only. Map preserves insertion order and has .size; Object needs Object.keys().length. Map is better for frequent add/remove.' },
      { k: 'Both iterable', v: 'for…of works on a Set directly, and on a Map giving `[key, value]` pairs.' },
    ],
    theory: [
      {
        h: "Set, Map & Their Methods in JavaScript",
        p: "Set and Map are **built-in data structures** that store **unique values** and **key-value pairs**. The header note gives the one-line distinction: **Set stores unique values of any type. Map stores key-value pairs with any type of keys.** They are the two collections ES6 added to fill the gaps that Array and Object leave open.",
      },
      {
        h: "1. What Are Set and Map?",
        p: "- Introduced in **ES6 (2015)**.\n- Provide **better performance than arrays/objects** for specific use cases.\n- **Maintain insertion order.**\n\nThe diagram shows a **SET** as a loose bag of distinct shapes labelled *unique values*, and a **MAP** as arrows: `key1 → value1`, `key2 → value2`, `key3 → value3`, labelled *key-value pairs*.",
      },
      {
        h: "2. Set",
        p: "A Set holds unique values. `const set = new Set()`, then `set.add(1)`, `set.add('hello')`, `set.add({ a: 1 })`, and finally `set.add(1)` again — that last one is a **duplicate, ignored**. Logging it gives `Set(3) { 1, 'hello', {…} }`. Note that the object counts as distinct because uniqueness is by reference, not by contents.\n\n**Set methods:**\n\n- `add(value)` — Adds a value.\n- `has(value)` — Checks existence.\n- `delete(value)` — Removes a value.\n- `size` — Number of values.\n- `clear()` — Removes all.\n- `values()` — Returns an iterator.\n- `forEach()` — Iterates values.",
        code: "const set = new Set();\n\nset.add(1);\nset.add('hello');\nset.add({ a: 1 });\nset.add(1);   // duplicate - ignored\n\nconsole.log(set);  // Set(3) { 1, 'hello', {…} }",
      },
      {
        h: "3. Map",
        p: "A Map holds key-value pairs where the key can be **anything** — including an object. `const map = new Map()`, then `map.set('name', 'Faisal')`, `map.set(1, 'one')`, and `map.set({ id: 1 }, 'object key')`.\n\nReading back: `map.get('name')` returns `'Faisal'`, `map.has(1)` returns `true`, and `map.size` returns `3`.\n\n**Map methods:**\n\n- `set(key, value)` — Adds/updates an entry.\n- `get(key)` — Gets a value.\n- `has(key)` — Checks existence.\n- `delete(key)` — Removes a key.\n- `size` — Number of entries.\n- `clear()` — Removes all.\n- `keys()` — Returns a key iterator.\n- `values()` — Returns a value iterator.\n- `entries()` — Returns a `[key, value]` iterator.\n- `forEach()` — Iterates entries.",
        code: "const map = new Map();\nmap.set('name', 'Faisal');\nmap.set(1, 'one');\nmap.set({ id: 1 }, 'object key');\n\nconsole.log(map.get('name'));  // 'Faisal'\nconsole.log(map.has(1));       // true\nconsole.log(map.size);         // 3",
      },
      {
        h: "4. Set vs Array",
        p: "- **Stores** — Set: unique values. Array: allows duplicates.\n- **Has method** — Set: `.has(value)`. Array: `.includes(value)`.\n- **Add method** — Set: `.add(value)`. Array: `.push(value)`.\n- **Remove** — Set: `.delete(value)`. Array: `.splice(index)`.\n- **Performance (lookup)** — Set: faster. Array: slower (**O(n)**).\n- **Use case** — Set: when uniqueness is required. Array: when order + duplicates matter.\n\nThe lookup row is the real reason to reach for a Set: checking membership in an array means scanning it, while a Set answers in roughly constant time.",
      },
      {
        h: "5. Map vs Object",
        p: "- **Keys** — Map: any type. Object: string or Symbol only.\n- **Order** — Map: preserves insertion order. Object: mostly, but integer keys are sorted first.\n- **Size** — Map: has a `.size` property. Object: needs `Object.keys(obj).length`.\n- **Iterable** — Map: yes. Object: no (needs `Object` methods).\n- **Performance** — Map: better for frequent add/remove. Object: good for simple key-value storage.\n- **Use case** — Map: dynamic keys, frequent operations. Object: fixed structure, config/data.\n\nThe side note: **Map is like an Object on steroids!**",
      },
      {
        h: "6. Examples",
        p: "**Set example:** `const unique = new Set()`, then `unique.add(10)`, `unique.add(20)`, `unique.add(10)` — **ignored** as a duplicate — and `unique.add('10')`, which *is* added because the string `'10'` is a different value from the number `10`. So `unique.size` is **3**. Iterate with `for (let val of unique) { console.log(val); }`.\n\n**Map example:** `const userMap = new Map()`, then `userMap.set('id', 1)`, `userMap.set('name', 'Faisal')`, `userMap.set('role', 'dev')`. Destructure while iterating: `for (let [key, value] of userMap) console.log(\\`${key}: ${value}\\`)`.",
        code: "// SET EXAMPLE\nconst unique = new Set();\nunique.add(10);\nunique.add(20);\nunique.add(10);   // ignored\nunique.add('10');\n\nconsole.log(unique.size);  // 3\n\nfor (let val of unique) {\n  console.log(val);\n}\n\n// MAP EXAMPLE\nconst userMap = new Map();\nuserMap.set('id', 1);\nuserMap.set('name', 'Faisal');\nuserMap.set('role', 'dev');\n\nfor (let [key, value] of userMap) {\n  console.log(`${key}: ${value}`);\n}",
      },
      {
        h: "7. Real World Use Cases",
        p: "- **Tracking Unique Items** — use Set to store unique user IDs, tags, selected items, etc.\n- **Caching** — use Map to cache responses, DOM nodes, API results.\n- **Counting / Grouping** — use Map to count occurrences or group by keys.\n- **Configuration** — use Map for dynamic configs with non-string keys.",
      },
      {
        h: "Looping Reminder",
        p: "**NOTE: they are iterable!** All three loop forms use `for...of`:\n\n- **for...of with Set** — `for (let value of mySet) { console.log(value); }`\n- **for...of with Map (keys)** — `for (let key of myMap.keys()) { console.log(key); }`\n- **for...of with Map (values)** — `for (let value of myMap.values()) { console.log(value); }`\n\nThe closing sticker: **master these and your JS skills level up!**",
        code: "// for...of with Set\nfor (let value of mySet) {\n  console.log(value);\n}\n\n// for...of with Map (keys)\nfor (let key of myMap.keys()) {\n  console.log(key);\n}\n\n// for...of with Map (values)\nfor (let value of myMap.values()) {\n  console.log(value);\n}",
      },
      {
        h: "8. Key Takeaways",
        p: "- Set stores **unique values of any type**.\n- Map stores **key-value pairs with any type of keys**.\n- **Both maintain insertion order.**\n- Use **Set** when you need **uniqueness**.\n- Use **Map** when you need **fast key-value storage**.\n- Powerful methods make your code clean and fast!\n\nThe *Remember* bubble: **Set = Unique Values. Map = Key → Value. Both = Ordered, Fast & Powerful!**",
      },
    ],
    snippets: [
      {
        label: "Set basics — duplicates are ignored",
        code: "const set = new Set();\n\nset.add(1);\nset.add('hello');\nset.add({ a: 1 });\nset.add(1);   // duplicate - ignored\n\nconsole.log(set);  // Set(3) { 1, 'hello', {…} }",
      },
      {
        label: "Map basics — any type can be a key",
        code: "const map = new Map();\nmap.set('name', 'Faisal');\nmap.set(1, 'one');\nmap.set({ id: 1 }, 'object key');\n\nconsole.log(map.get('name'));  // 'Faisal'\nconsole.log(map.has(1));       // true\nconsole.log(map.size);         // 3",
      },
      {
        label: "Set example — size and iteration",
        code: "const unique = new Set();\nunique.add(10);\nunique.add(20);\nunique.add(10);   // ignored\nunique.add('10');\n\nconsole.log(unique.size);  // 3\n\nfor (let val of unique) {\n  console.log(val);\n}",
        note: "`10` and `'10'` are different values — uniqueness is strict, no type coercion.",
      },
      {
        label: "Map example — destructuring while looping",
        code: "const userMap = new Map();\nuserMap.set('id', 1);\nuserMap.set('name', 'Faisal');\nuserMap.set('role', 'dev');\n\nfor (let [key, value] of userMap) {\n  console.log(`${key}: ${value}`);\n}",
      },
      {
        label: "Looping reminder — for...of over Set and Map",
        code: "// for...of with Set\nfor (let value of mySet) {\n  console.log(value);\n}\n\n// for...of with Map (keys)\nfor (let key of myMap.keys()) {\n  console.log(key);\n}\n\n// for...of with Map (values)\nfor (let value of myMap.values()) {\n  console.log(value);\n}",
        note: "**They are iterable!**",
      },
      {
        label: "DIAGRAM — Set vs Map shape",
        code: "SET                          MAP\n  o  []  /\\                    key1 --> value1\n  []  <>                       key2 --> value2\n                               key3 --> value3\nunique values                key-value pairs",
      },
    ],
  },
  {
    day: 47,
    group: 'engine',
    title: 'JavaScript Engine & Series Finale',
    tagline: 'From the first line of code to how JavaScript runs under the hood.',
    image: '/javascript-notes/ep47-javascript-engine-finale.jpeg',
    tags: ['Engine', 'V8', 'Finale'],
    notes: [
      { k: 'What it is', v: 'A JS engine is a program that executes JavaScript — it reads your code, compiles it, and runs it. Examples: V8 (Chrome, Node.js, Deno), SpiderMonkey (Firefox), JavaScriptCore (Safari).' },
      { k: 'The pipeline', v: 'Parser (scans code into tokens) → Parser (builds the AST) → Interpreter (converts AST to bytecode) → Compiler (optimizes to machine code) → Execution.' },
      { k: 'The short version', v: 'You write JS → the engine reads it, understands it, optimizes it, and runs it fast.' },
      { k: 'Memory', v: 'The engine manages the heap (objects and references) and the call stack (function calls and execution contexts), and cleans up unused memory via garbage collection.' },
      { k: 'Engine features', v: 'High performance optimization, garbage collection, a security sandbox, cross-platform consistency, and JIT compilation — compiling on the fly for better performance.' },
      { k: 'The series', v: '47 episodes: variables & data types, operators, control flow, functions, arrays & objects, strings & template literals, DOM & events, scope & closures, `this`, prototypes & inheritance, ES6+ features, error handling, async JS, promises, async/await, modules, Map/Set/WeakMap/WeakSet, symbols, iterators & generators, advanced patterns, and the engine itself.' },
    ],
    theory: [
      {
        h: "JavaScript Engine & Series Finale",
        p: "From the first line of code to the last episode — what a journey! This final page wraps things up with how JavaScript actually **runs under the hood**.\n\nThe header note speaks directly to the reader: **You started with basics and reached the engine. That's massive. Proud of you!**",
      },
      {
        h: "1. What is a JS Engine?",
        p: "- A JS Engine is a **program that executes JavaScript code**.\n- It **reads your code, compiles it, and runs it line by line**.\n- Examples: **V8** (Chrome, Node.js), **SpiderMonkey** (Firefox), **JavaScriptCore** (Safari).\n\nJavaScript does not run itself — the engine is the piece of software that turns your text file into actual machine instructions the CPU can execute.",
      },
      {
        h: "2. The Big Picture — the Pipeline",
        p: "Five stages, left to right:\n\n- **1. Parser (Scans)** — reads code and breaks it into **tokens**.\n- **2. Parser (AST)** — converts tokens into an **AST (Abstract Syntax Tree)**.\n- **3. Interpreter (Bytecode)** — converts the AST into **bytecode**.\n- **4. Compiler (Optimizes)** — optimizes hot code into **machine code**.\n- **5. Execution (Runs)** — executes the code on the machine.\n\nThe lightbulb note is an honest caveat: **not all engines follow the exact same steps, but this is the general flow.**\n\nThe friendly summary: **Think of it like this: You write JS → Engine reads it → Understands it → Optimises it → Runs it super fast!**",
      },
      {
        h: "3. Memory in JS Engine",
        p: "The engine splits memory into two regions:\n\n- **Heap** — for **objects and references**. Unordered, large, dynamically allocated.\n- **Call Stack** — for **function calls and execution contexts**. Ordered frames, pushed and popped as functions run.\n\nThe bottom line: the **engine manages memory, allocates space, and cleans unused memory (Garbage Collection)** — which is exactly the machinery that made WeakMap and WeakSet meaningful back in Episode 44.",
      },
      {
        h: "4. JS Engine Features",
        p: "- **High Performance** — optimizes code for speed.\n- **Garbage Collection** — cleans up unused memory automatically.\n- **Security** — runs code in a safe environment.\n- **Cross Platform** — the same JS code runs everywhere.\n- **JIT Compilation** — compiles on the fly for better performance.\n\nJIT (Just-In-Time) compilation is the trick that lets JavaScript be both dynamic *and* fast: the engine starts interpreting immediately, then compiles the parts that run repeatedly into optimised machine code while the program is still running.",
      },
      {
        h: "5. Example Engines",
        p: "- **V8** — used in Chrome, Edge, Node.js, Deno.\n- **SpiderMonkey** — used in Firefox.\n- **JavaScriptCore** — used in Safari.\n\nEach implements the same language spec but makes different engineering choices, which is why the pipeline above is described as *the general flow* rather than a rule.",
      },
      {
        h: "6. JS Engine in Action",
        p: "Take the simplest possible program:\n\n`function add(a, b) { return a + b; }` then `console.log(add(2, 3));` with `// Output: 5`.\n\nThat trivial snippet still travels the full pipeline. The engine's checklist for it:\n\n- Scanned\n- Parsed\n- Converted to bytecode\n- Optimized\n- Executed\n- Result shown",
        code: "function add(a, b) {\n  return a + b;\n}\nconsole.log(add(2, 3));\n// Output: 5",
      },
      {
        h: "7. What We Learned in This Series",
        p: "The full recap list — everything covered across all 47 episodes:\n\n- Variables & Data Types\n- Operators\n- Control Flow\n- Functions\n- Arrays & Objects\n- Strings & Template Literals\n- DOM & Events\n- Scope & Closures\n- This Keyword\n- Prototypes & Inheritance\n- ES6+ Features\n- Error Handling\n- Asynchronous JS\n- Promises\n- Async/Await\n- Modules\n- Map, Set, WeakMap, WeakSet\n- Symbols\n- Iterators & Generators\n- Advanced Patterns\n- And the JS Engine!",
      },
      {
        h: "8. Series Finale",
        p: "- **You made it to the end of an incredible journey!**\n- From **\"Hello, World!\" to understanding how JavaScript runs under the hood**.\n- **Keep building, keep experimenting.**\n- **The best way to master JS is to build real things.**\n- **This is not the end, it's just the beginning of your coding story!**\n\nThe trophy on the page reads: **YOU DID IT!**",
      },
      {
        h: "Closing Message",
        p: "**Thank you for being part of this series! Keep coding. Keep growing. The world is yours!**\n\n**Stay curious, keep creating!**\n\nAnd the very last note on the page: **One more — `console.log(\"Legend\");` because you are one!**",
        code: "console.log(\"Legend\"); // because you are one!",
      },
    ],
    snippets: [
      {
        label: "DIAGRAM — The JS engine pipeline",
        code: "1. Parser        2. Parser       3. Interpreter   4. Compiler      5. Execution\n   (Scans)          (AST)           (Bytecode)       (Optimizes)      (Runs)\n     |                |                  |                |               |\n  Reads code    Converts tokens    Converts AST     Optimizes hot    Executes the\n  and breaks    into AST           into bytecode    code into        code on the\n  it into       (Abstract Syntax                    machine code     machine\n  tokens        Tree)\n\n  [ code ] --> [ tokens ] --> [ AST ] --> [ bytecode ] --> [ machine code ] --> [ run ]\n\nNot all engines follow the exact same steps, but this is the general flow.",
        note: "**You write JS → Engine reads it → Understands it → Optimises it → Runs it super fast!**",
      },
      {
        label: "DIAGRAM — Memory in the JS engine",
        code: "     Heap                  Memory                Call Stack\n  +---------+            +---------+            +-----------+\n  | [] [] []|  <-------  |  ENGINE |  ------->  |  frame 3  |\n  | []   [] |            +---------+            |  frame 2  |\n  +---------+                                   |  frame 1  |\n                                                +-----------+\n For objects &                                  For function calls\n references                                     and execution contexts\n\n Engine manages memory, allocates space,\n and cleans unused memory (Garbage Collection).",
      },
      {
        label: "JS engine in action — the full pipeline on one function",
        code: "function add(a, b) {\n  return a + b;\n}\nconsole.log(add(2, 3));\n// Output: 5",
        note: "Scanned → Parsed → Converted to bytecode → Optimized → Executed → Result shown.",
      },
      {
        label: "The last line of the series",
        code: "console.log(\"Legend\"); // because you are one!",
      },
    ],
  },
  {
    day: 48,
    group: 'core',
    title: 'JavaScript Numbers',
    tagline: 'From decimals to Math helpers — numbers, completely.',
    image: '/javascript-notes/ep48-javascript-numbers.jpeg',
    tags: ['Numbers', 'Math', 'BigInt', 'parseInt', 'Intl.NumberFormat'],
    notes: [
      { k: 'Number creation', v: 'Decimal (123, -5, 3.14), binary (0b prefix), octal (0o prefix), hex (0x prefix — common for colors and bitmasks).' },
      { k: 'Numeric separator', v: 'Use underscore `_` between digits for readability: `1_000_000`. Cannot appear at ends or next to the decimal point.' },
      { k: 'BigInt', v: 'Large integers with `n` suffix or `BigInt()`. Cannot mix BigInt with Number in arithmetic — you get a TypeError.' },
      { k: 'Converting', v: '`Number(value)` converts any value — `null` → 0, `undefined` → NaN, empty string → 0, trimmed "42" → 42.' },
      { k: 'Parsing', v: '`parseInt(str, radix)` parses to integer and supports any base. `parseFloat(str)` handles decimals. `num.toString(radix)` does the reverse.' },
      { k: 'Important constants', v: '`Number.MAX_SAFE_INTEGER` (9007199254740991), `Number.EPSILON`, `NaN` (only value not equal to itself), `Infinity`, `-Infinity`.' },
      { k: 'Checking values', v: '`Number.isNaN()` — reliable NaN check (no coercion). `Number.isFinite()`, `Number.isInteger()`, `Number.isSafeInteger()`.' },
      { k: 'Rounding', v: '`Math.round()` ties → +Infinity. `Math.floor()` → always down. `Math.ceil()` → always up. `Math.trunc()` → just drop the decimal.' },
      { k: 'Formatting', v: '`num.toFixed(n)` string with exact decimal places. `toExponential()` scientific notation. `Intl.NumberFormat` for locale-aware currencies.' },
      { k: 'Math helpers', v: '`Math.abs`, `Math.max`, `Math.min`, `Math.pow`, `Math.sqrt`, `Math.cbrt`, `Math.random`, `Math.hypot`, `Math.sign`, `Math.imul`, `Math.fround`.' },
    ],
    theory: [
      {
        h: 'JavaScript Numbers — The Complete Guide',
        p: 'JavaScript has a single **Number type** — a 64-bit IEEE 754 double-precision floating-point. That single type covers integers, decimals, and special values like `NaN` and `Infinity`. Beyond that, **BigInt** handles arbitrarily large integers. This episode covers creation, conversion, parsing, checking, rounding, formatting, and the full Math helper API.',
      },
      {
        h: '1. Number Creation',
        p: 'JavaScript supports four literal forms:\n\n- **Decimal** — simple base-10 numbers. JavaScript supports integers and floating-point values.\n- **Binary** — binary literals use the `0b` prefix.\n- **Octal** — octal literals use the `0o` prefix.\n- **Hex** — hexadecimal literals use the `0x` prefix. Common for colors, bitmasks, and low-level values.',
        code: '123;   // integer\n-5;    // negative number\n3.14;  // float\n\n0b1010; // binary → decimal 10\n0o755;  // octal  → decimal 493\n0xff;   // hex    → decimal 255',
      },
      {
        h: '2. Numeric Separator & BigInt',
        p: '**Numeric Separator** — use underscore (`_`) to group digits for readability. Separators must appear between digits — not at ends or next to the decimal point.\n\n**BigInt** — large integers with arbitrary precision, created with an `n` suffix or `BigInt()`. Cannot mix BigInt with Number in arithmetic operations — you get a `TypeError`.',
        code: 'const oneM   = 1_000_000;\nconst amount = 1_234_567.89;\n\n123n;\n9007199254740993n; // beyond Number.MAX_SAFE_INTEGER\n\n1n + 2; // TypeError: cannot mix BigInt and Number',
      },
      {
        h: '3. Parsing & Converting',
        p: '**`Number(value)`** converts to number. `null` converts to 0; `undefined` will be converted to `NaN`. Trimmed whitespace is handled: `Number("  42  ")` gives `42`.\n\n**`parseInt(str, radix)`** parses the string (`str`) to integer. Supports octal, hex, and binary numbers as well by specifying `radix`.\n\n**`parseFloat(str)`** parses string to floating number.\n\n**`num.toString(radix)`** converts `num` to string. Supports octal, hex, and binary numbers as well by specifying `radix`.',
        code: 'Number("12.3");    // 12.3\nNumber(true);      // 1\nNumber(false);     // 0\nNumber(null);      // 0\nNumber(undefined); // NaN\nNumber("");        // 0\nNumber("  42 ");   // 42\n\nparseInt("08");       // decimal 8\nparseInt("1010", 2);  // binary 10\nparseInt("755", 8);   // octal 493\nparseInt("ff", 16);   // hex 255\n\nparseFloat("3.14px"); // 3.14\n\n(100).toString();    // "100"\n(10).toString(2);    // "1010"\n(493).toString(8);   // "755"\n(255).toString(16);  // "ff"',
      },
      {
        h: '4. Important Constants',
        p: 'The Number namespace exposes several key constants:\n\n- **`Number.MAX_VALUE`** — largest positive number.\n- **`Number.MIN_VALUE`** — smallest positive value (closest to zero, not most negative).\n- **`Number.MAX_SAFE_INTEGER`** — largest integer safely represented without losing precision.\n- **`Number.MIN_SAFE_INTEGER`** — smallest safe integer.\n- **`Number.EPSILON`** — difference between 1 and the next representable float; useful for float-comparison tolerances.\n- **`NaN`** — Not-A-Number; result of an invalid numeric operation and **the only value not equal to itself** (`NaN !== NaN`).\n- **`Infinity`** — positive infinity.\n- **`-Infinity`** — negative infinity.',
        code: 'Number.MAX_VALUE;         // 1.7976931348623157e+308\nNumber.MIN_VALUE;         // 5e-324\nNumber.MAX_SAFE_INTEGER;  // 9007199254740991\nNumber.MIN_SAFE_INTEGER;  // -9007199254740991\nNumber.EPSILON;           // 2.220446049250313e-16\n\nNaN;       // NaN\nInfinity;  // Infinity\n-Infinity; // -Infinity',
      },
      {
        h: '5. Checking Values',
        p: 'Four static methods on `Number` for checking what you have:\n\n- **`Number.isNaN(value)`** — reliable NaN check. Unlike the global `isNaN()`, this one does **not** coerce its argument: `Number.isNaN("NaN")` is `false`.\n- **`Number.isFinite(value)`** — checks that value is a finite number (not `Infinity`, `-Infinity`, or `NaN`).\n- **`Number.isInteger(value)`** — returns `true` for integer numbers. Note: `3.0` is an integer.\n- **`Number.isSafeInteger(value)`** — checks if the number is within the safe integer range.',
        code: 'Number.isNaN(NaN);                    // true\nNumber.isNaN("NaN");                  // false (no coercion)\nNumber.isFinite(1 / 0);               // false\nNumber.isInteger(3.0);                // true\nNumber.isSafeInteger(9007199254740992); // false',
      },
      {
        h: '6. Rounding & Formatting',
        p: '**`Math.round(x)`** rounds x to the nearest integer; ties go toward +Infinity.\n**`Math.floor(x)`** rounds down towards the largest integer less than or equal to x.\n**`Math.ceil(x)`** rounds up towards the smallest integer greater than or equal to x.\n**`Math.trunc(x)`** removes the fractional part (toward zero).\n**`num.toFixed(n)`** returns a string with exactly `n` digits after the decimal. Result is rounded and zero-padded.',
        code: 'Math.round(1.5);   // 2\nMath.round(-1.5);  // -1\n\nMath.floor(1.9);   // 1\nMath.floor(-1.1);  // -2\n\nMath.ceil(1.1);    // 2\nMath.ceil(-1.9);   // -1\n\nMath.trunc(1.9);   // 1\nMath.trunc(-1.9);  // -1\n\n(1.2345).toFixed(2); // "1.23"\n(1).toFixed(3);      // "1.000"',
      },
      {
        h: '7. Exponential, Precision & Intl.NumberFormat',
        p: '**`num.toExponential(fractionDigits)`** returns a string in scientific notation with the given digits after the decimal. Argument is optional.\n\n**`num.toPrecision(precision)`** returns a string with the specified number of significant digits; output may be fixed or exponential depending on the number.\n\n**`Intl.NumberFormat`** — locale-aware formatting for numbers, currencies, and percentages; configure with options.',
        code: '(12345).toExponential(2);   // "1.23e+4"\n\n(1.2345).toPrecision(3);    // "1.23"\n(12345).toPrecision(3);     // "1.23e+4"\n\nnew Intl.NumberFormat("en-US").format(12345.678);\n// "12,345.678"\n\nnew Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(1234.5);\n// "1.234,50 €"',
      },
      {
        h: '8. Math Helpers',
        p: 'The `Math` object provides a wide range of helper functions:\n\n- **`Math.abs(x)`** — absolute value; returns non-negative magnitude.\n- **`Math.max(...vals)`** — largest value among arguments; returns `-Infinity` if no args.\n- **`Math.min(...vals)`** — smallest value among arguments; returns `Infinity` if no args.\n- **`Math.pow(x, y)`** — x raised to the power y (same as `x ** y`).\n- **`Math.sqrt(x)`** — square root; returns `NaN` for negative inputs.\n- **`Math.cbrt(x)`** — cube root (handles negatives, unlike `sqrt`).\n- **`Math.random()`** — pseudo-random number in [0, 1); not cryptographically secure.\n- **`Math.hypot(...vals)`** — Euclidean norm (sqrt of sum of squares); useful for vector lengths and avoids overflow/underflow.\n- **`Math.sign(x)`** — sign of x: `1` (positive), `-1` (negative), `0`, `-0`, or `NaN` for non-numbers.\n- **`Math.imul(a, b)`** — 32-bit integer multiplication with C-like wraparound; faster and accurate for 32-bit maths.\n- **`Math.fround(x)`** — converts to 32-bit single-precision float (rounds to nearest float32).',
        code: 'Math.abs(-3);        // 3\nMath.max(1, 5, 3);   // 5\nMath.min(1, 5, 3);   // 1\nMath.pow(2, 10);     // 1024\nMath.sqrt(9);        // 3\nMath.cbrt(-8);       // -2\nMath.random();       // 0.0 <= x < 1.0\nMath.hypot(3, 4);    // 5\nMath.sign(100);      // 1\nMath.sign(-100);     // -1\nMath.sign(-0);       // -0\nMath.imul(0xffffffff, 2); // -2\nMath.fround(1.337);  // 1.3370000123977661',
      },
      {
        h: 'Quick Reference Table',
        p: 'The full Numbers API at a glance:\n\n- **Creation**: `123`, `0b1010`, `0o755`, `0xFF`, `1_000_000`\n- **Types**: `Number`, `BigInt` (`123n`)\n- **Convert**: `Number(x)`, `+x`, `String(x)`, `x.toString(radix)`\n- **Parse**: `parseInt(str, radix)`, `parseFloat(str)`\n- **Check**: `Number.isNaN`, `Number.isFinite`, `Number.isInteger`, `Number.isSafeInteger`\n- **Rounding**: `Math.round`, `Math.floor`, `Math.ceil`, `Math.trunc`, `toFixed`\n- **Math**: `Math.max`, `Math.min`, `Math.pow`, `Math.sqrt`, `Math.hypot`, `Math.random`\n- **BigInt**: `123n`, `BigInt(str)` — no mixing with Number\n- **Formatting**: `toFixed`, `toExponential`, `toPrecision`, `Intl.NumberFormat`',
      },
    ],
    snippets: [
      {
        label: 'Number creation — all literal forms',
        code: '123;    // decimal integer\n3.14;   // decimal float\n0b1010; // binary → 10\n0o755;  // octal  → 493\n0xff;   // hex    → 255',
        note: '`0x` hex is common for colors and bitmasks; all four forms produce a JS Number.',
      },
      {
        label: 'Numeric separator & BigInt',
        code: 'const budget = 1_000_000;\nconst amount = 1_234_567.89;\n\n// BigInt — n suffix or BigInt()\nconst big = 9007199254740993n;\nconst same = BigInt("9007199254740993");\n\n// 1n + 2; // TypeError — cannot mix BigInt and Number',
        note: '`_` improves readability; BigInt and Number cannot mix in arithmetic.',
      },
      {
        label: 'Converting values to numbers',
        code: 'Number("12.3");    // 12.3\nNumber(true);      // 1\nNumber(null);      // 0\nNumber(undefined); // NaN\nNumber("");        // 0\nNumber("  42 ");   // 42  (whitespace trimmed)',
      },
      {
        label: 'Parsing — parseInt and parseFloat',
        code: 'parseInt("08");       // 8\nparseInt("1010", 2);  // 10  (binary)\nparseInt("755", 8);   // 493 (octal)\nparseInt("ff", 16);   // 255 (hex)\n\nparseFloat("3.14px"); // 3.14',
        note: 'Always pass a radix to `parseInt` to avoid surprises.',
      },
      {
        label: 'toString — number to string in any base',
        code: '(100).toString();    // "100"\n(10).toString(2);    // "1010"\n(493).toString(8);   // "755"\n(255).toString(16);  // "ff"',
      },
      {
        label: 'Number constants',
        code: 'Number.MAX_VALUE;         // 1.7976931348623157e+308\nNumber.MIN_VALUE;         // 5e-324\nNumber.MAX_SAFE_INTEGER;  // 9007199254740991\nNumber.MIN_SAFE_INTEGER;  // -9007199254740991\nNumber.EPSILON;           // 2.220446049250313e-16\nNaN; Infinity; -Infinity;',
      },
      {
        label: 'Checking values — isNaN, isFinite, isInteger, isSafeInteger',
        code: 'Number.isNaN(NaN);                     // true\nNumber.isNaN("NaN");                   // false — no coercion\nNumber.isFinite(1 / 0);                // false\nNumber.isInteger(3.0);                 // true\nNumber.isSafeInteger(9007199254740992);// false',
        note: '`Number.isNaN` is safer than the global `isNaN()` because it does not coerce.',
      },
      {
        label: 'Rounding — round, floor, ceil, trunc',
        code: 'Math.round(1.5);  // 2\nMath.round(-1.5); // -1\nMath.floor(1.9);  // 1\nMath.floor(-1.1); // -2\nMath.ceil(1.1);   // 2\nMath.ceil(-1.9);  // -1\nMath.trunc(1.9);  // 1\nMath.trunc(-1.9); // -1',
      },
      {
        label: 'toFixed, toExponential, toPrecision',
        code: '(1.2345).toFixed(2);        // "1.23"\n(1).toFixed(3);             // "1.000"\n(12345).toExponential(2);   // "1.23e+4"\n(1.2345).toPrecision(3);    // "1.23"\n(12345).toPrecision(3);     // "1.23e+4"',
        note: '`toFixed` is handy for currency; `toPrecision` controls significant digits.',
      },
      {
        label: 'Intl.NumberFormat — locale-aware formatting',
        code: 'new Intl.NumberFormat("en-US").format(12345.678);\n// "12,345.678"\n\nnew Intl.NumberFormat("de-DE", {\n  style: "currency",\n  currency: "EUR"\n}).format(1234.5);\n// "1.234,50 €"',
      },
      {
        label: 'Math helpers — the full toolkit',
        code: 'Math.abs(-3);       // 3\nMath.max(1, 5, 3);  // 5\nMath.min(1, 5, 3);  // 1\nMath.pow(2, 10);    // 1024\nMath.sqrt(9);       // 3\nMath.cbrt(-8);      // -2\nMath.random();      // [0, 1)\nMath.hypot(3, 4);   // 5\nMath.sign(-100);    // -1\nMath.imul(0xffffffff, 2); // -2\nMath.fround(1.337); // 1.3370000123977661',
      },
    ],
  },
];

export function getPrereqDay(day) {
  return PREREQ_DAYS.find((d) => d.day === Number(day));
}
