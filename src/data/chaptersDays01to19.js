// Days 1–19 — Thunder JavaScript curriculum (hand-authored)
export const chaptersDays01to19 = [
  {
    "id": 1,
    "slug": "introduction-to-javascript",
    "day": 1,
    "title": "Introduction to JavaScript",
    "subtitle": "HTML, CSS, JS — how the web works",
    "duration": "2 hrs 25 mins",
    "createdOn": "5 Jul 2026",
    "status": "published",
    "topics": [
      "What is JavaScript?",
      "V8 engine & where JS runs",
      "HTML vs CSS vs JS",
      "v1-html → v2-css → v3-js",
      "Adding JS to HTML",
      "console.log",
      "let and const",
      "Comments",
      "Event listeners",
      "fetch & live data",
      "First program"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture01-Introduction-to-Javascript-37243ac5cab9802293fff4573c26a6f4?source=copy_link",
    "githubPath": "Lecture01",
    "sections": [
      {
        "id": "what-is-js",
        "title": "What is JavaScript?",
        "content": "JavaScript (JS) is the **programming language of the web**. HTML gives structure, CSS gives style, and JavaScript gives **behavior** — clicks, forms, animations, calculators, and live data from the internet.\n\nIn Thunder Lecture 01, you learn JS through three versions of the same page: **v1-html** (structure only), **v2-css** (styled but dead), and **v3-js** (fully alive). Pretty does not mean functional until JavaScript enters."
      },
      {
        "id": "v8-engine",
        "title": "V8 Engine — Where JavaScript Runs",
        "content": "Your browser does not simply \"read\" JavaScript like HTML. The **V8 engine** (used in Chrome and Node.js) compiles and executes your code.\n\nThunder includes a tiny **v8.cpp** demo that parses `console.log(\"hello Ji\")` — a peek at how your JS statement becomes real output under the hood.",
        "code": "console.log(\"hello Ji\");\nconsole.log(\"Hello, Thunder!\");",
        "tryIt": "console.log(\"=== V8 runs this ===\");\nconsole.log(2 + 2);\nconsole.log(typeof console.log);"
      },
      {
        "id": "html-css-js",
        "title": "HTML, CSS & JavaScript Together",
        "content": "Think of a website like a person:\n- **HTML** = skeleton (headings, paragraphs, images, buttons that do nothing)\n- **CSS** = clothes and appearance (hover effects, colors, layout)\n- **JavaScript** = brain and actions (clicks, math, fetching data)\n\n**v1-html:** Every button and input exists, but clicking does nothing.\n**v2-css:** The page looks gorgeous — hover works — but clicking still does nothing. This is the trap stage.\n**v3-js:** Click counter, calculator, GitHub profiles, and theme toggle all work.\n\nWalk the folders in [Lecture01](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture01) on GitHub."
      },
      {
        "id": "adding-js",
        "title": "Adding JavaScript to HTML",
        "content": "Place JavaScript inside `<script>` tags or link an external `.js` file. Thunder loads `script.js` **at the end of `<body>`** so every HTML element exists before JS runs.",
        "code": "<!-- Inline -->\n<script>\n  console.log(\"Hello from inline JS\");\n</script>\n\n<!-- External (Thunder v3-js) -->\n<script src=\"script.js\"></script>"
      },
      {
        "id": "console-log",
        "title": "console.log — Your First Tool",
        "content": "Open DevTools (**F12**) → **Console**. Use `console.log()` to print values and debug while learning. This is how every developer inspects their code.",
        "code": "console.log(\"Hello, Thunder!\");\nconsole.log(42);\nlet name = \"Sumit\";\nconsole.log(\"Learning JS, Day 1:\", name);",
        "tryIt": "console.log(\"=== Day 1 ===\");\nconsole.log(\"Welcome to JS Learn Hub\");\nconsole.log(\"Following Thunder Lecture 01\");"
      },
      {
        "id": "variables",
        "title": "Variables: let and const",
        "content": "Use `let` for values that change, `const` for values that stay fixed. Avoid `var` in modern code.\n\nIn Thunder v3-js, `let clickCount = 0` remembers how many times you clicked the button.",
        "code": "let score = 0;\nscore = 10;\n\nconst course = \"Thunder\";\nconsole.log(course, score);",
        "tryIt": "let day = 1;\nconst author = \"Sumit Rawal\";\nday = 2;\nconsole.log(author, \"Day\", day);"
      },
      {
        "id": "comments",
        "title": "Comments",
        "content": "Comments are ignored by the engine but invaluable for learners.\n- **Single-line:** `// comment`\n- **Multi-line:** `/* comment */`\n\nThunder `script.js` is heavily commented — read it top to bottom with the lecture.",
        "code": "// Day 1 — Introduction to JavaScript\n/* Thunder 100 Days of Code */\nconsole.log(\"Comments do not run\");",
        "tryIt": "// This line is ignored\nconsole.log(\"Only this prints\");"
      },
      {
        "id": "event-listeners",
        "title": "Event Listeners — Making Buttons Work",
        "content": "In v1 and v2, buttons are just shapes. In v3, JavaScript **listens** for clicks and reacts.\n\n1. Find the element with `document.getElementById()`\n2. Call `addEventListener(\"click\", function () { ... })`\n3. Update the page with your logic",
        "code": "const clickBtn = document.getElementById(\"clickBtn\");\nlet clickCount = 0;\n\nclickBtn.addEventListener(\"click\", function () {\n  clickCount++;\n  console.log(`Clicked ${clickCount} time(s)!`);\n});"
      },
      {
        "id": "fetch-github",
        "title": "fetch() — Live Data from the Internet",
        "content": "HTML and CSS **cannot** talk to the internet on their own. JavaScript uses **`fetch()`** to get real data.\n\nThunder v3-js loads **10 GitHub profiles** from `https://api.github.com/users?per_page=10`, builds cards on the fly, and links to each user's real profile. This is the big lesson: JS reaches beyond the page.",
        "code": "const response = await fetch(\n  \"https://api.github.com/users?per_page=10\"\n);\nconst users = await response.json();\nconsole.log(users[0].login);"
      },
      {
        "id": "first-program",
        "title": "Your First Thunder Program",
        "content": "Combine everything from Lecture 01:\n1. Open **v3-js** from Thunder GitHub\n2. Run `console.log` in DevTools\n3. Click the button — watch the counter\n4. Use the calculator\n5. Load GitHub profiles\n6. Toggle dark/light theme\n\nKeep the [Notion notes](https://app.notion.com/p/Lecture01-Introduction-to-Javascript-37243ac5cab9802293fff4573c26a6f4?source=copy_link) open while you code.",
        "tryIt": "let name = \"Sumit\";\nconst course = \"Thunder\";\nconsole.log(`Day 1 of ${course}: ${name}`);\nconsole.log(\"Next: open v3-js and click everything!\");"
      }
    ],
    "quiz": [
      {
        "question": "What adds behavior to a web page?",
        "options": [
          "HTML",
          "CSS",
          "JavaScript",
          "JSON"
        ],
        "answer": 2,
        "explanation": "JavaScript adds interactivity — clicks, calculations, and data fetching."
      },
      {
        "question": "In Thunder Lecture 01, v2-css can make buttons hover but not click. Why?",
        "options": [
          "CSS handles appearance, not logic",
          "HTML blocks clicks",
          "V8 is not installed",
          "fetch() is required first"
        ],
        "answer": 0,
        "explanation": "CSS can style hover states but cannot run click logic — that needs JavaScript."
      },
      {
        "question": "Which keyword is for constants?",
        "options": [
          "var",
          "let",
          "const",
          "static"
        ],
        "answer": 2,
        "explanation": "Use const for values that should not be reassigned."
      },
      {
        "question": "What does fetch() let JavaScript do?",
        "options": [
          "Style the page",
          "Get live data from servers",
          "Create HTML tags",
          "Compile C++ code"
        ],
        "answer": 1,
        "explanation": "fetch() requests data from APIs — Thunder v3-js uses it for GitHub profiles."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=611_04Ml25c",
    "youtubeTitle": "Introduction to JavaScript | Javascript Full Course #01 — Coder Army",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 2,
    "slug": "data-types-in-javascript",
    "day": 2,
    "title": "Data Types in JavaScript",
    "subtitle": "Primitives, typeof, objects, arrays & functions",
    "duration": "2 hrs 10 mins",
    "createdOn": "6 Jul 2026",
    "status": "published",
    "topics": [
      "Primitive vs non-primitive",
      "Number & String",
      "Boolean, undefined & null",
      "BigInt & Symbol",
      "typeof operator",
      "Objects",
      "Arrays",
      "Functions",
      "let vs const reassignment"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture-02-Data-types-in-JS-37343ac5cab980f8b24ee3cf1ea0c8fa?source=copy_link",
    "githubPath": "Lecture02",
    "sections": [
      {
        "id": "primitive-vs-non-primitive",
        "title": "Primitive vs Non-Primitive",
        "content": "Thunder Lecture 02 splits JavaScript values into two families:\n\n**Primitive data types** — `number`, `string`, `boolean`, `undefined`, `null`, `symbol`, `bigint`. They are **immutable** and copied **by value**.\n\n**Non-primitive types** — `object`, `array`, `function`. They are stored **by reference**.\n\nOpen [Lecture02](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture02) on GitHub and walk through `first.js` — every type is commented and demonstrated line by line.",
        "code": "// Primitives: immutable, stored by value\nlet a = 30;\nlet b = a;\nb = 70;\nconsole.log(a, b); // 30 70 — a did not change\n\n// Non-primitive: reference type\nlet person = { name: \"Rohit\", age: 20 };\nconsole.log(typeof person); // \"object\""
      },
      {
        "id": "number-type",
        "title": "Number",
        "content": "JavaScript has one **number** type for both integers and decimals — no separate `int` or `float`.\n\nThunder uses `let firstNumber = 20` and `let secondNumber = 20.7` in `first.js`.",
        "code": "let firstNumber = 20;\nlet secondNumber = 20.7;\nconsole.log(firstNumber, secondNumber);\nconsole.log(typeof firstNumber); // \"number\"",
        "tryIt": "let price = 29.99;\nlet qty = 3;\nconsole.log(\"Total:\", price * qty);\nconsole.log(typeof price);"
      },
      {
        "id": "string-type",
        "title": "String & Template Literals",
        "content": "Strings hold text. You can use **double quotes**, **single quotes**, or **backticks** for template literals.\n\nTemplate literals let you embed variables: `` `Rohit ${age} is a Good Boy` ``",
        "code": "let firstString = \"Rohit Negi\";\nlet secondString = 'Mohan Bhaiya';\nlet age = 20;\nlet thirdString = `Rohit ${age} is a Good Boy`;\nconsole.log(firstString, secondString, thirdString);",
        "tryIt": "let name = \"Sumit\";\nlet day = 2;\nconsole.log(`Day ${day}: learning ${name}`);"
      },
      {
        "id": "boolean-null-undefined",
        "title": "Boolean, undefined & null",
        "content": "**Boolean** — `true` or `false` for logic.\n\n**undefined** — a variable declared but not assigned (`let a;`).\n\n**null** — an intentional empty value (`let b = null`).\n\nFamous quirk: `typeof null` returns `\"object\"` — a bug from 1995 that was never fixed.",
        "code": "let firstBoolean = true;\nlet secondBoolean = false;\n\nlet a;\nconsole.log(a); // undefined\n\nlet b = null;\nconsole.log(b); // null\nconsole.log(typeof null); // \"object\" (quirk!)",
        "tryIt": "let loggedIn = false;\nlet username;\nlet avatar = null;\nconsole.log(loggedIn, username, avatar);"
      },
      {
        "id": "bigint-symbol",
        "title": "BigInt & Symbol",
        "content": "**BigInt** — for integers larger than `Number.MAX_SAFE_INTEGER`. Append `n` to the literal.\n\n**Symbol** — creates a **unique** identifier. Two symbols with the same description are never equal (`b == a` is `false`).",
        "code": "let big = 27343285947319574913n;\nconsole.log(big);\n\nlet symA = Symbol(\"Rohit\");\nlet symB = Symbol(\"Rohit\");\nconsole.log(symB == symA); // false",
        "tryIt": "let huge = 9007199254740991n;\nconsole.log(typeof huge); // \"bigint\""
      },
      {
        "id": "typeof-operator",
        "title": "The typeof Operator",
        "content": "`typeof` tells you the type of any value. Thunder's homework in `first.js` asks you to run `typeof` on every type you learned.\n\nUse it constantly while debugging in DevTools.",
        "code": "let a = \"Rohit\";\nconsole.log(typeof a);       // \"string\"\nconsole.log(typeof 42);      // \"number\"\nconsole.log(typeof true);    // \"boolean\"\nconsole.log(typeof undefined); // \"undefined\"\nconsole.log(typeof null);    // \"object\" (quirk!)\n\nlet person = { name: \"Rohit\", age: 20 };\nconsole.log(typeof person);  // \"object\"",
        "tryIt": "let lang = \"JavaScript\";\nlet score = 100;\nlet active = true;\nconsole.log(typeof lang, typeof score, typeof active);"
      },
      {
        "id": "objects",
        "title": "Objects — Key-Value Pairs",
        "content": "Objects are the most important non-primitive type. They store **key-value pairs** — like a real-world entity with properties.\n\nThunder: `let person = { name: \"Rohit\", age: 30, city: \"dwarka\" }`",
        "code": "let person = {\n  name: \"Rohit\",\n  age: 30,\n  city: \"dwarka\"\n};\nconsole.log(person);\nconsole.log(person.name);\nconsole.log(typeof person); // \"object\"",
        "tryIt": "let user = { name: \"Sumit\", day: 2, course: \"Thunder\" };\nconsole.log(user.name, \"Day\", user.day);"
      },
      {
        "id": "arrays-functions",
        "title": "Arrays & Functions",
        "content": "**Arrays** — ordered lists that can mix types: `[10, 20, 30, \"Rohit\", 9.3, true]`.\n\n**Functions** — reusable blocks of code. A function can `return` a value or just run side effects.",
        "code": "let arr = [10, 20, 30, \"Rohit\", 9.3, true, 90];\nconsole.log(arr);\n\nlet greet = function () {\n  console.log(\"Hello Akshat\");\n  return 10;\n};\nconsole.log(greet());",
        "tryIt": "let topics = [\"number\", \"string\", \"boolean\"];\nlet shout = function (msg) { return msg.toUpperCase(); };\nconsole.log(shout(topics[0]));"
      },
      {
        "id": "let-const-recap",
        "title": "let & const — Reassignment Rules",
        "content": "From Lecture 02: `let` can be reassigned (`let a = 10; a = 20`). `const` **cannot** be reassigned — trying `const a = 10; a = 7` throws an error.\n\nPrimitives copy by value. Reassigning `b` does not change `a`.",
        "code": "let a = 10;\na = 20;\nconsole.log(a); // 20\n\n// const a = 10;\n// a = 7; // TypeError!\n\nlet x = 30;\nlet y = x;\ny = 70;\nconsole.log(x, y); // 30 70",
        "tryIt": "let day = 2;\nconst course = \"Thunder\";\nday = 3;\nconsole.log(course, \"Day\", day);"
      },
      {
        "id": "lecture02-practice",
        "title": "Your Lecture 02 Practice",
        "content": "Work through Thunder `first.js` on GitHub:\n1. Uncomment each block one section at a time\n2. Run `typeof` on every primitive and non-primitive\n3. Build your own `person` object and `topics` array\n4. Try the `rohit.cpp` demo — a tiny C++ program that reads code input (peek under the hood, like Lecture 01's v8.cpp)\n\nKeep the [Notion notes](https://app.notion.com/p/Lecture-02-Data-types-in-JS-37343ac5cab980f8b24ee3cf1ea0c8fa?source=copy_link) open while you code.",
        "tryIt": "let person = { name: \"Sumit\", day: 2 };\nlet topics = [\"number\", \"string\", \"object\"];\nconsole.log(typeof person.name);\nconsole.log(`Day ${person.day}:`, topics.join(\", \"));",
        "code": "// Homework from first.js\nlet a = \"Rohit\";\nconsole.log(typeof a);\n\nlet obj = { name: \"Rohit\", age: 20 };\nconsole.log(typeof obj);"
      }
    ],
    "quiz": [
      {
        "question": "Which types are primitive in JavaScript?",
        "options": [
          "object, array, function",
          "string, number, boolean, undefined, null, symbol, bigint",
          "only string and number",
          "HTML, CSS, JavaScript"
        ],
        "answer": 1,
        "explanation": "Thunder Lecture 02 lists 7 primitives: string, number, boolean, undefined, null, symbol, bigint."
      },
      {
        "question": "typeof null returns?",
        "options": [
          "\"null\"",
          "\"undefined\"",
          "\"object\"",
          "\"number\""
        ],
        "answer": 2,
        "explanation": "A famous JavaScript quirk — typeof null is \"object\"."
      },
      {
        "question": "let a = 30; let b = a; b = 70; What is a?",
        "options": [
          "70",
          "30",
          "undefined",
          "null"
        ],
        "answer": 1,
        "explanation": "Primitives copy by value — changing b does not affect a."
      },
      {
        "question": "Two Symbol(\"Rohit\") values compared with == are?",
        "options": [
          "always equal",
          "always false",
          "equal only if same variable",
          "both null"
        ],
        "answer": 1,
        "explanation": "Every Symbol() call creates a unique value — symB == symA is false in Thunder first.js."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=nCwQY8inRvU",
    "youtubeTitle": "Data Types in JavaScript — Code with Ania",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 3,
    "slug": "operators-and-data-types",
    "day": 3,
    "title": "Operators & Data Types",
    "subtitle": "Arithmetic, comparison, logical ops & primitive vs reference",
    "duration": "2 hrs 5 mins",
    "createdOn": "7 Jul 2026",
    "status": "published",
    "topics": [
      "Arithmetic operators",
      "Assignment & increment",
      "Comparison operators",
      "== vs ===",
      "Type coercion",
      "null & undefined quirks",
      "Logical && and ||",
      "Operator precedence",
      "Primitive vs reference",
      "var vs let vs const"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture03-Operator-and-Data-type-in-JS-37543ac5cab9805bb338dc7e6c3ab515?source=copy_link",
    "githubPath": "Lecture03",
    "sections": [
      {
        "id": "arithmetic",
        "title": "Arithmetic Operators",
        "content": "Thunder `second.js` covers the six math operators: `+`, `-`, `*`, `/`, `%` (remainder), and `**` (exponent).\n\nWatch the string trap from Lecture 02: `\"5\" + 3` concatenates to `\"53\"`, but `\"5\" - 3` coerces to numbers and gives `2`.\n\nOpen [Lecture03](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture03) on GitHub and uncomment each block in `second.js`.",
        "code": "console.log(3 + 4);\nconsole.log(3 - 4);\nconsole.log(3 * 4);\nconsole.log(10 / 4);\nconsole.log(10 % 4);\nconsole.log(10 ** 4);",
        "tryIt": "let a = 10, b = 20;\nconsole.log(\"Sum:\", a + b);\nconsole.log(\"Remainder:\", a % b);\nconsole.log(\"Power:\", 2 ** 10);"
      },
      {
        "id": "assignment-increment",
        "title": "Assignment & Increment",
        "content": "Compound assignment saves typing: `a += b` means `a = a + b`. Same for `-=`, `*=`, `/=`.\n\n**Post-increment** `a++` — use the original value first, then add 1.\n\n**Pre-increment** `++a` — add 1 first, then return the new value.\n\nThunder: `let k = ++a` gives `k` and `a` both updated; `console.log(a++)` prints old value then increments.",
        "code": "let a = 10;\nlet b = 20;\na += b;\nconsole.log(a); // 30\n\nlet x = 10;\nconsole.log(x++); // 10\nconsole.log(x);   // 11\n\nlet y = 10;\nlet k = ++y;\nconsole.log(k, y); // 11 11",
        "tryIt": "let score = 0;\nscore += 10;\nscore++;\nconsole.log(\"Score:\", score);"
      },
      {
        "id": "comparison",
        "title": "Comparison Operators",
        "content": "Compare numbers with `>`, `>=`, `<`, `<=`. They return **boolean** `true` or `false`.\n\nThese power every `if` statement you will write in later lectures.",
        "code": "console.log(10 > 5);   // true\nconsole.log(10 >= 5);  // true\nconsole.log(10 <= 5);  // false\nconsole.log(10 < 5);   // false",
        "tryIt": "let age = 18;\nconsole.log(\"Adult?\", age >= 18);\nconsole.log(\"Teen?\", age < 20);"
      },
      {
        "id": "equality-strict",
        "title": "== vs === (Loose vs Strict)",
        "content": "**`==`** compares with type coercion — `\"10\" == 10` is `true`. Thunder warns: avoid this in real code.\n\n**`===`** checks **type first**, then value — `\"10\" === 10` is `false`. Always prefer `===` and `!==`.\n\n`0 == false` is `true` (coercion). `0 === false` is `false` (strict).",
        "code": "console.log(10 == 10);    // true\nconsole.log(\"10\" == 10);  // true (coercion!)\nconsole.log(\"10\" === 10); // false (strict)\nconsole.log(0 == false);  // true\nconsole.log(0 === false); // false",
        "tryIt": "let input = \"18\";\nconsole.log(input == 18);\nconsole.log(input === 18);"
      },
      {
        "id": "type-coercion",
        "title": "Type Coercion — Number() & String()",
        "content": "Form inputs arrive as **strings**. A calculator needs `Number(\"10\") + Number(\"20\")` not `\"10\" + \"20\"`.\n\n`String(30) + '7'` gives `\"307\"` — string concatenation wins when either side is a string.",
        "code": "let age = Number(\"10\");\nconsole.log(age); // 10\n\nconsole.log(Number(\"10\") + Number(\"20\")); // 30\nconsole.log(String(30) + '7');            // \"307\"",
        "tryIt": "let first = \"10\", second = \"20\";\nconsole.log(\"Wrong:\", first + second);\nconsole.log(\"Right:\", Number(first) + Number(second));"
      },
      {
        "id": "null-undefined-equality",
        "title": "null & undefined Equality Quirks",
        "content": "Thunder Lecture 03: **`null == undefined`** is `true`, but `null` is not loosely equal to `0`, `1`, or `false`.\n\nComparison with numbers gets weird: `null >= 0` and `null <= 0` are both `true`, but `null > 0` and `null < 0` are `false`.\n\nAnother reason to use `===` — predictable behavior.",
        "code": "console.log(null == undefined); // true\nconsole.log(null == 0);         // false\nconsole.log(null == false);     // false\nconsole.log(null >= 0);         // true (quirk!)\nconsole.log(null > 0);          // false",
        "tryIt": "let value = null;\nconsole.log(value == undefined);\nconsole.log(value === undefined);"
      },
      {
        "id": "logical-operators",
        "title": "Logical Operators — && and ||",
        "content": "**`&&`** (AND) — both sides must be truthy. Returns the last truthy value or the first falsy one.\n\n**`||`** (OR) — returns the first truthy value. `true && \"Rohit\"` gives `\"Rohit\"`. `false && \"Rohit\"` gives `false`.\n\nShort-circuit evaluation — the second operand may never run.",
        "code": "console.log(true && true);    // true\nconsole.log(true && false);   // false\nconsole.log(true && \"Rohit\"); // \"Rohit\"\nconsole.log(false && \"Rohit\"); // false\n\nconsole.log(true || false);   // true\nconsole.log(false || false);  // false",
        "tryIt": "let name = \"\";\nlet display = name || \"Guest\";\nconsole.log(display);"
      },
      {
        "id": "operator-precedence",
        "title": "Operator Precedence",
        "content": "JavaScript follows math rules: multiplication and division before addition.\n\n`10 * 2 + 5 * 64 + 78 / 2` is evaluated as `((10*2)+5)*64 + (78/2)` when grouped — use **parentheses** when in doubt.",
        "code": "let ab = 10 * 2 + 5 * 64 + 78 / 2;\nconsole.log(ab);\n\nlet grouped = ((((10 * 2) + 5) * 64) + (78 / 2));\nconsole.log(grouped);",
        "tryIt": "console.log(2 + 3 * 4);\nconsole.log((2 + 3) * 4);"
      },
      {
        "id": "primitive-vs-reference",
        "title": "Primitive vs Reference — Deep Dive",
        "content": "Thunder `first.js` proves the difference:\n\n**Primitives** copy by value — change `secondNumber`, `firstNumber` stays the same.\n\n**Objects** copy by reference — `obj2 = obj1` means both point to the same object. Changing `obj2.name` changes `obj1.name`.\n\nTwo **separate** objects with identical content are **not** equal by reference — only string primitives compare by value (`a == b` when both are `\"Rohit\"`).",
        "code": "let firstNumber = 10;\nlet secondNumber = firstNumber;\nsecondNumber = 20;\nconsole.log(firstNumber, secondNumber); // 10 20\n\nlet obj1 = { name: \"Rohit\", age: 20 };\nlet obj2 = obj1;\nobj2.name = \"Mohan\";\nconsole.log(obj1.name); // Mohan",
        "tryIt": "let x = { score: 10 };\nlet y = x;\ny.score = 99;\nconsole.log(x.score);"
      },
      {
        "id": "var-let-const",
        "title": "var vs let vs const",
        "content": "**`var`** — old way, function-scoped, hoisted (can cause bugs).\n\n**`let`** — block-scoped, can be reassigned. `let` inside `if { }` is not visible outside.\n\n**`const`** — block-scoped, cannot reassign the **binding**. But object **properties** can still change: `const a = { age: 20 }; a.age = 10` works. Reassigning `a = { ... }` throws an error.",
        "code": "// var a = 10; // function-scoped, hoisted\n\nif (true) {\n  let a = 10;\n}\n// console.log(a); // ReferenceError\n\nconst person = { name: \"Rohit\", age: 20 };\nperson.age = 10; // OK — mutating property\n// person = {};  // TypeError — cannot reassign",
        "tryIt": "const course = \"Thunder\";\nlet day = 3;\nday = 4;\nconsole.log(course, \"Day\", day);"
      },
      {
        "id": "lecture03-practice",
        "title": "Your Lecture 03 Practice",
        "content": "Work through Thunder Lecture 03 on GitHub:\n1. Open **`first.js`** — primitive vs reference, const mutation rules\n2. Open **`second.js`** — uncomment arithmetic, comparison, logical blocks one at a time\n3. Build a mini calculator: read two string inputs, use `Number()`, add them\n4. Practice `===` on form-like values\n\nKeep the [Notion notes](https://app.notion.com/p/Lecture03-Operator-and-Data-type-in-JS-37543ac5cab9805bb338dc7e6c3ab515?source=copy_link) open while you code.",
        "tryIt": "let num1 = \"10\", num2 = \"20\";\nconsole.log(\"Loose:\", num1 == num2);\nconsole.log(\"Strict:\", num1 === num2);\nconsole.log(\"Sum:\", Number(num1) + Number(num2));",
        "code": "// Calculator pattern from second.js\nlet first = \"10\", second = \"20\";\nconsole.log(Number(first) + Number(second)); // 30"
      }
    ],
    "quiz": [
      {
        "question": "5 === \"5\" is?",
        "options": [
          "true",
          "false",
          "undefined",
          "null"
        ],
        "answer": 1,
        "explanation": "=== checks type and value — number 5 is not strictly equal to string \"5\"."
      },
      {
        "question": "let obj2 = obj1; obj2.name = \"Mohan\"; What is obj1.name?",
        "options": [
          "Rohit",
          "Mohan",
          "undefined",
          "Error"
        ],
        "answer": 1,
        "explanation": "Objects share references — both variables point to the same object in first.js."
      },
      {
        "question": "console.log(a++) when a = 10 prints?",
        "options": [
          "11",
          "10",
          "9",
          "undefined"
        ],
        "answer": 1,
        "explanation": "Post-increment returns the original value first, then increments a to 11."
      },
      {
        "question": "null == undefined is?",
        "options": [
          "true",
          "false",
          "null",
          "throws error"
        ],
        "answer": 0,
        "explanation": "Thunder Lecture 03: null is loosely equal to undefined with ==."
      },
      {
        "question": "Which should you use for comparisons in real code?",
        "options": [
          "== only",
          "=== and !==",
          "!= only",
          "no comparison needed"
        ],
        "answer": 1,
        "explanation": "Strict equality avoids type coercion bugs — Thunder recommends ===."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=ovWYhDVQiR8",
    "youtubeTitle": "JavaScript Logical Operators — Code with Ania",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 4,
    "slug": "loops-numbers-math-strings",
    "day": 4,
    "title": "Loops, Numbers, Math & Strings",
    "subtitle": "if/else, for/while loops, Math object & string methods",
    "duration": "2 hrs 5 mins",
    "createdOn": "8 Jul 2026",
    "status": "published",
    "topics": [
      "if / else if / else",
      "for loop",
      "while & do-while",
      "parseInt & parseFloat",
      "Number precision & NaN",
      "Math.floor, ceil, random",
      "OTP & random ranges",
      "String indexing & length",
      "slice, trim, split, replaceAll",
      "Looping through strings",
      "Financial precision (paise)"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture04-Loop-Number-math-and-String-37643ac5cab9802ba80ffca6c7e961d6?source=copy_link",
    "githubPath": "Lecture04",
    "sections": [
      {
        "id": "if-else",
        "title": "if / else if / else",
        "content": "Before loops, Thunder `second.js` teaches **conditionals** — code that runs only when a condition is true.\n\n- `if (age >= 25)` — one branch\n- `else if (age >= 18 && age < 60)` — multiple checks\n- `else` — fallback\n\nOpen [Lecture04](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture04) on GitHub: `second.js`, `strings.js`, `third.js`, and `first.js`.",
        "code": "let age = 70;\n\nif (age < 18) {\n  console.log(\"You are child\");\n} else if (age >= 18 && age < 60) {\n  console.log(\"You are adult\");\n} else {\n  console.log(\"You are old\");\n}",
        "tryIt": "let age = 18;\nif (age >= 18) {\n  console.log(\"Adult\");\n} else {\n  console.log(\"Minor\");\n}"
      },
      {
        "id": "for-loop",
        "title": "The for Loop",
        "content": "Repeat code a fixed number of times. Structure: `for (init; condition; update)`.\n\nThunder prints 1 to 10:\n`for (let i = 1; i <= 10; i++) { console.log(i); }`",
        "code": "for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}\n\nfor (let i = 1; i <= 5; i++) {\n  console.log(\"Hello World\");\n}",
        "tryIt": "for (let i = 1; i <= 5; i++) {\n  console.log(\"Thunder Day\", i);\n}"
      },
      {
        "id": "while-loops",
        "title": "while & do-while Loops",
        "content": "**while** — check condition first, then run body.\n\n**do-while** — run body at least once, then check condition.\n\nBoth can print 1 to 10 like the for loop — choose based on readability.",
        "code": "let i = 1;\nwhile (i <= 10) {\n  console.log(i);\n  i++;\n}\n\nlet j = 1;\ndo {\n  console.log(j);\n  j++;\n} while (j <= 10);",
        "tryIt": "let n = 1;\nwhile (n <= 3) {\n  console.log(\"Count:\", n);\n  n++;\n}"
      },
      {
        "id": "parse-number",
        "title": "parseInt, parseFloat & NaN",
        "content": "`parseInt(\"100px\")` → `100`. `parseFloat(\"100.01px\")` → `100.01`.\n\n**NaN** (Not a Number) appears when conversion fails: `Number(\"10av\")`.\n\n`0/0` is `NaN`. Division by zero gives `Infinity` or `-Infinity`.",
        "code": "console.log(parseInt(\"100px\"));\nconsole.log(parseFloat(\"100.01px\"));\n\nlet a = Number(\"10av\");\nconsole.log(a); // NaN\nconsole.log(0 / 0); // NaN",
        "tryIt": "console.log(parseInt(\"42abc\"));\nconsole.log(isNaN(Number(\"hello\")));"
      },
      {
        "id": "number-precision",
        "title": "Number Precision & toFixed",
        "content": "JavaScript uses floating point — `0.1 + 0.2` is not exactly `0.3`.\n\n**Financial apps** store money in smallest units: rupees as **paise**, dollars as **cents**, BTC as **sats**.\n\n`toFixed(2)` and `toPrecision(5)` format numbers for display.",
        "code": "console.log(0.1 + 0.2);\n\nlet paise1 = 12001;\nlet paise2 = 13002;\nconsole.log((paise1 + paise2) / 100);\n\nlet num = 10.39148342;\nconsole.log(num.toFixed(2));\nconsole.log(num.toPrecision(5));",
        "tryIt": "let a = 0.1, b = 0.2;\nconsole.log(\"Raw:\", a + b);\nconsole.log(\"Fixed:\", (a + b).toFixed(2));"
      },
      {
        "id": "math-object",
        "title": "Math Object",
        "content": "Built-in math utilities — no `new` needed (avoid `new Number(10)` — objects compare by reference).\n\n- `Math.abs(-23)` → `23`\n- `Math.floor(2.3)` → `2` (round down)\n- `Math.ceil(-5.3)` → `-5` (round up)\n- `Math.random()` → `[0, 1)`",
        "code": "console.log(Math.abs(-23));\nconsole.log(Math.floor(2.3));\nconsole.log(Math.ceil(-5.3));\nconsole.log(Math.random());",
        "tryIt": "let rating = 4.37;\nconsole.log(\"Rounded:\", Math.round(rating));\nconsole.log(\"Floor:\", Math.floor(rating));"
      },
      {
        "id": "random-otp",
        "title": "Random Ranges & OTP Pattern",
        "content": "Generate a random integer from `min` to `max` inclusive:\n\n`Math.floor(Math.random() * (max - min + 1) + min)`\n\nThunder examples:\n- Dice: `Math.floor(Math.random() * 6 + 2)`\n- 4-digit OTP: `Math.floor(Math.random() * (9999 - 1000) + 1000)`\n\nReal apps (Uber, Rapido) need unique OTPs per ride — homework: display a 4-digit code.",
        "code": "// Random between 37 and 48\nconsole.log(Math.floor(Math.random() * (48 - 37 + 1) + 37));\n\n// 4-digit OTP (1000–9999)\nconsole.log(Math.floor(Math.random() * (9999 - 1000) + 1000));",
        "tryIt": "let dice = Math.floor(Math.random() * 6) + 1;\nconsole.log(\"Dice roll:\", dice);"
      },
      {
        "id": "string-basics",
        "title": "Strings — Concat, Length & Indexing",
        "content": "Strings from Lecture 02 return with more power. Use `\"\"`, `''`, or backtick **template literals** (multiline OK).\n\n`str[i]` accesses a character. `str.length` counts characters. Loop with `for (let i = 0; i < str.length; i++)`.",
        "code": "let str = \"Hello Ji\";\nlet str2 = \"Rohit Negi\";\nconsole.log(str + \" \" + str2);\nconsole.log(str[1]); // \"e\"\nconsole.log(str.length);\n\nfor (let i = 0; i < str.length; i++) {\n  console.log(str[i]);\n}",
        "tryIt": "let name = \"Thunder\";\nconsole.log(name[0], name.length);"
      },
      {
        "id": "string-methods",
        "title": "String Methods",
        "content": "Essential methods from `strings.js`:\n\n- `slice(start, end)` — extract (supports negative index)\n- `trim()` — remove whitespace\n- `split(' ')` — string → array\n- `replaceAll(\"Negi\", \"maggi\")` — replace all matches\n- `includes('oht')` — search\n- `lastIndexOf(\"Negi\")` — last position",
        "code": "let str = \"Rohit Negi is a bad teacher Negi is\";\nconsole.log(str.replaceAll(\"Negi\", \"maggi\"));\nconsole.log(str.slice(2, 8));\nconsole.log(\" Rohit Negi \".trim());\n\nlet data = \"Amir Rohit Anuj Anjali\";\nconsole.log(data.split(\" \"));\nconsole.log(str.includes(\"oht\"));",
        "tryIt": "let data = \"Amir Rohit Anuj\";\nconsole.log(data.split(\" \"));\nconsole.log(data.replace(\"Rohit\", \"Sumit\"));"
      },
      {
        "id": "bitwise-preview",
        "title": "Bitwise & Financial Storage (Preview)",
        "content": "Thunder `first.js` briefly shows **bitwise** shift: `8 >> 2` → `2`.\n\nFor fintech (Zomato, Swiggy, payment gateways): never store money as floats in the database. Store **paise** as integers, divide by 100 only for display.\n\n`// 1 BTC = 10^8 sats` — same idea for crypto.",
        "code": "console.log(8 >> 2); // 2\n\nlet first = 12001;  // paise\nlet second = 13002; // paise\nconsole.log((first + second) / 100); // rupees",
        "tryIt": "let balancePaise = 50050;\nconsole.log(\"₹\" + balancePaise / 100);"
      },
      {
        "id": "lecture04-practice",
        "title": "Your Lecture 04 Practice",
        "content": "Work through all four files on GitHub:\n1. **`second.js`** — if/else, for, while, do-while\n2. **`strings.js`** — every string method\n3. **`third.js`** — Math, random, toFixed\n4. **`first.js`** — precision & bitwise preview\n\nHomework: generate a **4-digit OTP** with `Math.random()`.\n\nKeep the [Notion notes](https://app.notion.com/p/Lecture04-Loop-Number-math-and-String-37643ac5cab9802ba80ffca6c7e961d6?source=copy_link) open while you code.",
        "tryIt": "let otp = Math.floor(Math.random() * (9999 - 1000) + 1000);\nconsole.log(\"Your OTP:\", otp);\n\nfor (let i = 1; i <= 3; i++) {\n  console.log(\"Line\", i);\n}",
        "code": "// 4-digit OTP homework\nlet otp = Math.floor(Math.random() * (9999 - 1000) + 1000);\nconsole.log(otp);"
      }
    ],
    "quiz": [
      {
        "question": "Math.floor(4.9) returns?",
        "options": [
          "4",
          "5",
          "4.9",
          "NaN"
        ],
        "answer": 0,
        "explanation": "Math.floor rounds down — 4.9 becomes 4."
      },
      {
        "question": "A for loop has how many parts in the header?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": 2,
        "explanation": "init; condition; update — three parts separated by semicolons."
      },
      {
        "question": "parseInt(\"100px\") returns?",
        "options": [
          "NaN",
          "100",
          "\"100px\"",
          "100px"
        ],
        "answer": 1,
        "explanation": "parseInt reads the leading number from a string."
      },
      {
        "question": "Why do banks store money as paise (integers)?",
        "options": [
          "Strings are faster",
          "Floating point causes rounding errors like 0.1 + 0.2",
          "JSON requires integers",
          "Math.random needs integers"
        ],
        "answer": 1,
        "explanation": "Thunder first.js: store smallest currency units to avoid float precision bugs."
      },
      {
        "question": "do-while vs while — key difference?",
        "options": [
          "do-while runs body at least once",
          "while is faster",
          "do-while only works with numbers",
          "while cannot use i++"
        ],
        "answer": 0,
        "explanation": "do-while executes the body before checking the condition."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=s9wW2PpJsmQ",
    "youtubeTitle": "JavaScript Loops — Programming with Mosh",
    "youtubeSupplementUrl": "https://www.youtube.com/watch?v=wssvLtVSFeI",
    "youtubeSupplementTitle": "Useful JavaScript String Methods — Code with Ania",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 5,
    "slug": "control-flow-and-patterns",
    "day": 5,
    "title": "Control Flow & Patterns",
    "subtitle": "Number series, multiplication tables, sum formula & star patterns",
    "duration": "2 hrs",
    "createdOn": "9 Jul 2026",
    "status": "published",
    "topics": [
      "Loops for repetition",
      "Print 1 to N & N to 1",
      "Even & odd series",
      "Multiplication tables",
      "Sum of N numbers",
      "Gauss formula n*(n+1)/2",
      "Nested loops",
      "Star patterns",
      "Number patterns",
      "String.fromCharCode A–Z"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture05-37743ac5cab980fc90afeec0d60a0fda?source=copy_link",
    "githubPath": "Lecture05",
    "sections": [
      {
        "id": "loop-repetition",
        "title": "Why Loops? — Repeat Without Copy-Paste",
        "content": "Thunder `first.js` shows the problem: printing \"Hello World\" 10 times by copy-paste is painful. A **for loop** does it in 3 lines.\n\n`for (let i = 1; i <= 100; i++)` can repeat anything — even `i` from 200 to 299.\n\nOpen [Lecture05](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture05) on GitHub: `first.js`, `second.js`, `third.js`, `fourth.js`, `pattern.js`, `printabc.js`.",
        "code": "// Instead of 10 console.log lines...\nfor (let i = 1; i <= 10; i++) {\n  console.log(\"Hello World\");\n}\n\nfor (let i = 200; i < 300; i++) {\n  console.log(\"Hello World\");\n}",
        "tryIt": "for (let i = 1; i <= 5; i++) {\n  console.log(\"Thunder Day 5 —\", i);\n}"
      },
      {
        "id": "number-series",
        "title": "Printing Number Series",
        "content": "Thunder `second.js` replaces manual `console.log(\"1\")` … `console.log(\"10\")` with loops.\n\n- **1 to 10:** `for (let i = 1; i <= 10; i++)`\n- **10 to 1:** `for (let i = 10; i >= 1; i--)`\n- **Even:** `for (let i = 2; i <= 20; i += 2)`\n- **Odd:** `for (let i = 1; i <= 19; i += 2)`",
        "code": "for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}\n\nfor (let i = 10; i >= 1; i--) {\n  console.log(i);\n}\n\nfor (let i = 2; i <= 20; i += 2) {\n  console.log(i);\n}",
        "tryIt": "for (let i = 1; i <= 5; i++) {\n  console.log(i * i);\n}"
      },
      {
        "id": "multiplication-tables",
        "title": "Multiplication Tables",
        "content": "Print any table with a loop — Thunder prints **17's table** with `i += 17` and **13's table** with `13 * i`.\n\nHomework from second.js: print **27's table** and **13's table** yourself.",
        "code": "// 17's table: 17 34 51 ... 170\nfor (let i = 17; i <= 170; i += 17) {\n  console.log(i);\n}\n\n// 13's table: 13 26 39 ... 130\nfor (let i = 1; i <= 10; i++) {\n  console.log(13 * i);\n}",
        "tryIt": "for (let i = 1; i <= 10; i++) {\n  console.log(\"5 x\", i, \"=\", 5 * i);\n}"
      },
      {
        "id": "sum-formula",
        "title": "Sum of N Numbers — Loop vs Formula",
        "content": "Add 1 + 2 + … + N with a loop:\n`let sum = 0; for (let i = 1; i <= 50; i++) sum += i;`\n\nFor huge N (like 5 billion), loops are slow. Use **Gauss formula**: `n * (n + 1) / 2`.\n\nThunder `third.js` shows both — the formula wins for large numbers.",
        "code": "let sum = 0;\nfor (let i = 1; i <= 50; i++) {\n  sum += i;\n}\nconsole.log(\"Loop sum:\", sum);\n\nconsole.log(\"Formula:\", (50 * 51) / 2);\nconsole.log((5000000000 * (5000000000 + 1)) / 2);",
        "tryIt": "let n = 100;\nconsole.log((n * (n + 1)) / 2);"
      },
      {
        "id": "nested-loops-intro",
        "title": "Nested Loops — Rows & Columns",
        "content": "Thunder `fourth.js` builds a **rectangle of stars** — outer loop = rows, inner loop = columns.\n\nBuild a string with `str += '*'` inside the inner loop, then `console.log(str)` after each row.",
        "code": "for (let j = 1; j <= 6; j++) {\n  let str = \"\";\n  for (let i = 1; i <= 5; i++) {\n    str = str + '*';\n  }\n  console.log(str);\n}",
        "tryIt": "for (let row = 1; row <= 3; row++) {\n  let line = \"\";\n  for (let col = 1; col <= 4; col++) line += \"*\";\n  console.log(line);\n}"
      },
      {
        "id": "number-grid-pattern",
        "title": "Number Grid Pattern",
        "content": "Same nested loop idea with numbers instead of stars — print `1 2 3 4 5` on four rows.\n\nOuter loop `j` = row, inner loop `i` builds `str = str + i + ' '`.",
        "code": "for (let j = 1; j <= 4; j++) {\n  let str = \"\";\n  for (let i = 1; i <= 5; i++) {\n    str = str + i + ' ';\n  }\n  console.log(str);\n}",
        "tryIt": "for (let j = 1; j <= 3; j++) {\n  let line = \"\";\n  for (let i = 1; i <= j; i++) line += j + \" \";\n  console.log(line);\n}"
      },
      {
        "id": "star-patterns",
        "title": "Star Patterns — Right Triangle & Inverted",
        "content": "Thunder `pattern.js` — classic interview patterns:\n\n**Right triangle:** inner loop runs `i <= row` times, adding `*` each time.\n\n**Inverted triangle:** outer `j` counts down from 5; inner adds `*` up to `j`.\n\n**Number triangle:** `str + j + ' '` prints `1`, then `2 2`, then `3 3 3`, etc.",
        "code": "// Right triangle\nfor (let row = 1; row <= 5; row++) {\n  let str = \"\";\n  for (let col = 1; col <= row; col++) {\n    str += '*';\n  }\n  console.log(str);\n}\n\n// Inverted\nfor (let j = 5; j >= 1; j--) {\n  let str = \"\";\n  for (let i = 1; i <= j; i++) str += '*';\n  console.log(str);\n}",
        "tryIt": "for (let row = 1; row <= 4; row++) {\n  console.log(\"*\".repeat(row));\n}"
      },
      {
        "id": "print-abc",
        "title": "Print A to Z with fromCharCode",
        "content": "ASCII codes: **A = 65**, **Z = 90**, **a = 97**, **z = 122**.\n\n`String.fromCharCode(i)` converts a number to a character.\n\nThunder `printabc.js` loops and prints the alphabet.",
        "code": "for (let i = 65; i <= 90; i++) {\n  console.log(String.fromCharCode(i));\n}\n\nfor (let i = 97; i <= 122; i++) {\n  console.log(String.fromCharCode(i));\n}",
        "tryIt": "let word = \"\";\nfor (let i = 97; i <= 101; i++) {\n  word += String.fromCharCode(i);\n}\nconsole.log(word);"
      },
      {
        "id": "lecture05-practice",
        "title": "Your Lecture 05 Practice",
        "content": "Homework from Thunder GitHub:\n1. Print **27's multiplication table**\n2. Print **13's table** both ways (`i += 13` and `13 * i`)\n3. Build the **inverted star triangle** from `pattern.js`\n4. Sum 1 to 100 with loop AND formula — compare speed\n\nKeep the [Notion notes](https://app.notion.com/p/Lecture05-37743ac5cab980fc90afeec0d60a0fda?source=copy_link) open while you code.",
        "tryIt": "for (let i = 1; i <= 10; i++) {\n  console.log(27 * i);\n}\nconsole.log(\"Sum 1-100:\", (100 * 101) / 2);",
        "code": "// 27's table homework\nfor (let i = 1; i <= 10; i++) {\n  console.log(27 * i);\n}"
      }
    ],
    "quiz": [
      {
        "question": "Sum of 1 to N using Gauss formula?",
        "options": [
          "n * n",
          "n * (n + 1) / 2",
          "n + 1",
          "n / 2"
        ],
        "answer": 1,
        "explanation": "Thunder third.js: n*(n+1)/2 — instant even for billions."
      },
      {
        "question": "Nested loops are mainly used for?",
        "options": [
          "Star and number patterns",
          "String trim only",
          "parseInt",
          "typeof"
        ],
        "answer": 0,
        "explanation": "Outer loop = rows, inner loop = columns — pattern.js and fourth.js."
      },
      {
        "question": "String.fromCharCode(65) returns?",
        "options": [
          "a",
          "A",
          "65",
          "Z"
        ],
        "answer": 1,
        "explanation": "ASCII 65 is uppercase A — printabc.js starts at 65 for A–Z."
      },
      {
        "question": "for (let i = 10; i >= 1; i--) prints?",
        "options": [
          "1 to 10",
          "10 to 1",
          "Even numbers",
          "Nothing"
        ],
        "answer": 1,
        "explanation": "Decrementing loop from 10 down to 1 — second.js."
      },
      {
        "question": "Why use formula over loop for sum of 5 billion numbers?",
        "options": [
          "Loops cannot add",
          "Formula is O(1) — loop would be too slow",
          "Formula only works for 50",
          "JavaScript has no loops"
        ],
        "answer": 1,
        "explanation": "third.js compares loop to n*(n+1)/2 for huge N."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=VjGYVG9oyPY",
    "youtubeTitle": "Star Pattern Programs with Loops — Code Step By Step",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 6,
    "slug": "arrays-and-objects",
    "day": 6,
    "title": "Arrays & Objects",
    "subtitle": "Indexing, push/pop, slice/splice, 2D arrays & spread",
    "duration": "2 hrs",
    "createdOn": "10 Jul 2026",
    "status": "published",
    "topics": [
      "What is an array?",
      "Array indexing & length",
      "Heterogeneous arrays",
      "push, pop, unshift, shift",
      "for & for...of loops",
      "slice vs splice",
      "Array reference copy",
      "2D arrays",
      "Spread & concat",
      "Destructuring & rest",
      "join, includes, lastIndexOf",
      "Object basics"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture06-Array-and-Objects-in-Javascript-37943ac5cab9807f801cc8c83755decc?source=copy_link",
    "githubPath": "Lecture06",
    "sections": [
      {
        "id": "arrays-intro",
        "title": "What is an Array?",
        "content": "Instead of `marks1`, `marks2` … `marks100` variables, store all marks in **one array**.\n\n`let marks = [30, 20, 11, 80, 70]` — index starts at **0**. `marks[2]` is the third element.\n\nOpen [Lecture06](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture06) on GitHub: `first.js` through `fourth.js`.",
        "code": "let marks = [30, 20, 11, 80, 70];\nconsole.log(marks);\nconsole.log(marks.length);\nconsole.log(marks[2]); // 11",
        "tryIt": "let fruits = [\"apple\", \"banana\", \"mango\"];\nconsole.log(fruits[0]);\nconsole.log(fruits.length);"
      },
      {
        "id": "heterogeneous-arrays",
        "title": "Heterogeneous Arrays & Updating",
        "content": "Arrays can hold **any type** — numbers, strings, booleans mixed together.\n\nYou can **update** any index: `user[1] = \"Anjali\"`.\n\n`typeof []` returns `\"object\"` — arrays are special objects in JavaScript.",
        "code": "let user = [10, 60, \"Rohit\", true];\nconsole.log(user);\n\nuser[1] = \"Anjali\";\nconsole.log(user);\nconsole.log(typeof user); // \"object\"",
        "tryIt": "let mix = [1, \"Thunder\", false];\nmix[0] = 100;\nconsole.log(mix);"
      },
      {
        "id": "push-pop-shift",
        "title": "push, pop, unshift, shift",
        "content": "Thunder `second.js` — four essential array methods:\n\n- **push** — add to the **end**\n- **pop** — remove from the **end**\n- **unshift** — add to the **start**\n- **shift** — remove from the **start**",
        "code": "let num = [10, 20, 30, 40, 50];\nnum.push(101, 24);\nnum.pop();\n\nnum.unshift(11, 22);\nnum.shift();\nconsole.log(num);",
        "tryIt": "let stack = [1, 2, 3];\nstack.push(4);\nstack.pop();\nconsole.log(stack);"
      },
      {
        "id": "loop-arrays",
        "title": "Looping Through Arrays",
        "content": "Two ways Thunder uses:\n\n1. **Classic for** — `for (let i = 0; i < marks.length; i++)`\n2. **for...of** — `for (let x of num)` — cleaner when you only need values",
        "code": "let marks = [30, 20, 11, 80, 70];\nfor (let i = 0; i < marks.length; i++) {\n  console.log(marks[i]);\n}\n\nlet num = [10, 20, 30, 40, 50];\nfor (let x of num) {\n  console.log(x);\n}",
        "tryIt": "let nums = [10, 20, 30];\nfor (const n of nums) console.log(n);"
      },
      {
        "id": "slice-splice",
        "title": "slice vs splice",
        "content": "**slice(start, end)** — copies a portion **without changing** the original. End index is not included.\n\n**splice(start, deleteCount, ...items)** — **mutates** the array: delete and/or insert at an index.\n\nExample: `marks.splice(2, 4, 17, 19)` removes 4 elements from index 2 and inserts 17, 19.",
        "code": "let marks = [10, 20, 30, 40, 50, 60, 70];\n\nconst copied = marks.slice(2, 4);\nconsole.log(copied); // [30, 40]\nconsole.log(marks);  // unchanged\n\nconst removed = marks.splice(2, 4, 17, 19);\nconsole.log(removed);\nconsole.log(marks);",
        "tryIt": "let arr = [1, 2, 3, 4, 5];\nconsole.log(arr.slice(1, 3));\nconsole.log(arr);"
      },
      {
        "id": "array-reference",
        "title": "Arrays Copy by Reference",
        "content": "Like objects, assigning an array copies the **reference**, not the values.\n\n`const arr2 = arr1` — changing `arr2[2]` changes `arr1[2]` too.",
        "code": "const arr1 = [10, 20, 30, 40, 50];\nconst arr2 = arr1;\n\narr2[2] = 84;\nconsole.log(arr1); // [10, 20, 84, 40, 50]",
        "tryIt": "let a = [1, 2, 3];\nlet b = a;\nb[0] = 99;\nconsole.log(a);"
      },
      {
        "id": "2d-arrays",
        "title": "2D Arrays — Array of Arrays",
        "content": "A **2D array** is an array inside an array — like rows in a table.\n\n`arr[0][2]` accesses row 0, column 2. `arr.length` = number of rows.\n\nLoop with nested for or nested for...of.",
        "code": "const arr = [[10, 20, 30], [40, 50, 69], [20, 11, 18]];\nconsole.log(arr[0][2]); // 30\n\nfor (let row = 0; row < arr.length; row++) {\n  for (let col = 0; col < arr[row].length; col++) {\n    console.log(arr[row][col]);\n  }\n}",
        "tryIt": "const grid = [[1, 2], [3, 4]];\nconsole.log(grid[1][0]);"
      },
      {
        "id": "spread-concat",
        "title": "Spread Operator & concat",
        "content": "Merge arrays with **concat** or the **spread operator** `...`:\n\n`const num = [...num1, ...num2, ...num3]`\n\nSpread expands each array into individual elements — very important in modern JavaScript.",
        "code": "const num1 = [10, 20, 30];\nconst num2 = [42, 12, 54];\nconst num3 = [5, 1, 53];\n\nconst merged = [...num1, ...num2, ...num3];\nconsole.log(merged);\n\n// Or: num1.concat(num2, num3)",
        "tryIt": "const a = [1, 2], b = [3, 4];\nconsole.log([...a, ...b]);"
      },
      {
        "id": "destructuring-rest",
        "title": "Destructuring & Rest Operator",
        "content": "Pull values out of an array into variables:\n\n`const [first, second, bhains, ...remaining] = [10, 20, 30, 40, 90]`\n\n**Right side** `...` = **spread**. **Left side** `...remaining` = **rest** — collects leftover items into an array.",
        "code": "const [first, second, third, ...remaining] = [10, 20, 30, 40, 90, 3812, 2];\nconsole.log(first, second, third);\nconsole.log(remaining); // [40, 90, 3812, 2]",
        "tryIt": "const [head, ...tail] = [\"Thunder\", \"JS\", \"Day\", 6];\nconsole.log(head, tail);"
      },
      {
        "id": "array-search-join",
        "title": "join, includes & lastIndexOf",
        "content": "Thunder `fourth.js`:\n\n- **join('-')** — array → string: `[\"Rohit\",\"Mohit\"]` → `\"Rohit-Mohit\"`\n- **includes(\"Mahit\")** — search for a value\n- **lastIndexOf(\"Mohit\")** — find last position of duplicate",
        "code": "const names = [\"Rohit\", \"Mohit\", \"Sohan\", \"Rohan\", \"Mohit\"];\nconsole.log(names.join('-'));\nconsole.log(names.lastIndexOf(\"Mohit\"));\nconsole.log(names.includes(\"Mahit\"));",
        "tryIt": "let tags = [\"js\", \"thunder\", \"day6\"];\nconsole.log(tags.join(\", \"));"
      },
      {
        "id": "objects-intro",
        "title": "Objects — Key-Value Pairs",
        "content": "While arrays use **numeric indexes**, objects use **named keys**.\n\n`let obj = { age: 20, amount: 70 }` — access with `obj.age` or `obj[\"age\"]`.\n\nObjects model real-world entities: users, food items, products. Arrays of objects come next in your journey.",
        "code": "const user = {\n  name: \"Rohit\",\n  age: 20,\n  city: \"Kotdwar\"\n};\nconsole.log(user.name);\nconsole.log(user.age);\n\nconst food = {\n  name: \"Chicken Bucket\",\n  price: 798,\n  rating: 4.1\n};\nconsole.log(food.name, \"₹\" + food.price);",
        "tryIt": "const course = { name: \"Thunder\", day: 6 };\nconsole.log(course.name, \"Day\", course.day);"
      },
      {
        "id": "lecture06-practice",
        "title": "Your Lecture 06 Practice",
        "content": "Work through Thunder Lecture 06 on GitHub:\n1. **`first.js`** — create marks array, loop with index\n2. **`second.js`** — push/pop/unshift/shift, slice vs splice\n3. **`third.js`** — 2D array, spread, destructuring\n4. **`fourth.js`** — join, includes, lastIndexOf\n\nHomework: delete index 2 with splice, insert two new values, merge two arrays with spread.\n\nKeep the [Notion notes](https://app.notion.com/p/Lecture06-Array-and-Objects-in-Javascript-37943ac5cab9807f801cc8c83755decc?source=copy_link) open while you code.",
        "tryIt": "let marks = [10, 20, 30, 40, 50];\nmarks.splice(2, 1);\nconsole.log(marks);\nconsole.log([...marks, 60, 70]);",
        "code": "marks.splice(2, 0, 41, 91); // insert at index 2\nconst all = [...[1, 2], ...[3, 4]];\nconsole.log(all);"
      }
    ],
    "quiz": [
      {
        "question": "Array index starts at?",
        "options": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "answer": 0,
        "explanation": "marks[0] is the first element — first.js."
      },
      {
        "question": "typeof [] returns?",
        "options": [
          "\"array\"",
          "\"object\"",
          "\"list\"",
          "\"undefined\""
        ],
        "answer": 1,
        "explanation": "Arrays are objects in JavaScript — second.js."
      },
      {
        "question": "slice vs splice — which mutates the original array?",
        "options": [
          "slice",
          "splice",
          "both",
          "neither"
        ],
        "answer": 1,
        "explanation": "splice deletes/inserts in place; slice returns a copy."
      },
      {
        "question": "arr2 = arr1; arr2[2] = 84 — what happens to arr1?",
        "options": [
          "Unchanged",
          "Index 2 changes to 84",
          "Array empties",
          "Error"
        ],
        "answer": 1,
        "explanation": "Arrays copy by reference — third.js."
      },
      {
        "question": "const [a, b, ...rest] = [1, 2, 3, 4] — rest is?",
        "options": [
          "[3, 4]",
          "[1, 2]",
          "4",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Rest operator collects remaining elements — third.js."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=yQ1fz8LY354",
    "youtubeTitle": "JavaScript Arrays — Code with Ania",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 7,
    "slug": "objects-and-date",
    "day": 7,
    "title": "Objects & Date",
    "subtitle": "Deep objects, sort, keys/entries, cloning & real data",
    "duration": "2 hrs",
    "createdOn": "11 Jul 2026",
    "status": "published",
    "topics": [
      "Why objects?",
      "Object literals & access",
      "Array of objects",
      "sort & reverse",
      "Object.keys, values, entries",
      "Nested objects & methods",
      "Add, update, delete keys",
      "Object reference copy",
      "Object destructuring",
      "Shallow vs deep clone",
      "for...in (avoid)"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture-07-Objects-and-Date-37b43ac5cab980cfa8d3db0bf87411b2?source=copy_link",
    "githubPath": "Lecture07",
    "sections": [
      {
        "id": "why-objects",
        "title": "Why Objects?",
        "content": "Arrays use **numeric indexes** (0, 1, 2…) — hard to remember what each slot means.\n\nObjects store **named keys**: `{ name: \"Rohit\", age: 20, city: \"kotdwar\" }`.\n\nThunder `objects.js` — instead of `arr[0]` = name, `arr[1]` = age, use readable property names.\n\nOpen [Lecture07](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture07) on GitHub.",
        "code": "const user = {\n  name: \"Rohit\",\n  age: 20,\n  city: \"kotdwar\",\n  emailId: \"negi@gmail.com\",\n  amount: 420\n};\nconsole.log(user.name, user.age);",
        "tryIt": "const course = { name: \"Thunder\", day: 7, topic: \"Objects\" };\nconsole.log(course.name, \"Day\", course.day);"
      },
      {
        "id": "array-of-objects",
        "title": "Array of Objects — Real Apps",
        "content": "One object = one record. An **array of objects** = a list of records — users, menu items, products.\n\nThunder models a food menu: each item has `name`, `price`, `rating`, `description`, `imgageLink`.",
        "code": "const users = [\n  { name: \"Rohit\", age: 20, city: \"kotdwar\", amount: 420 },\n  { name: \"Mohit\", age: 10, city: \"kotdwar\", amount: 120 },\n  { name: \"Sohit\", age: 10, city: \"Dw\", amount: 20 }\n];\nconsole.log(users[1].name);",
        "tryIt": "const menu = [\n  { name: \"Bucket\", price: 798, rating: 4.1 },\n  { name: \"Strips\", price: 449, rating: 5.1 }\n];\nconsole.log(menu[0].name, \"₹\" + menu[0].price);"
      },
      {
        "id": "display-function",
        "title": "Display Function — Reusable Logic",
        "content": "Pass any food object to one function — `Display(food)` prints name, price, rating.\n\nLoop an array of objects with **for...of** and call `Display(food)` for each item.",
        "code": "function Display(food) {\n  console.log(food.name);\n  console.log(food.price);\n  console.log(food.rating);\n  console.log(food.description);\n}\n\nconst arr = [\n  { name: \"Chicken Bucket\", price: 798, rating: 4.1 },\n  { name: \"Strips Bucket\", price: 449, rating: 5.1 }\n];\nfor (let food of arr) {\n  Display(food);\n}",
        "tryIt": "function showUser(u) { console.log(u.name, u.age); }\nconst list = [{ name: \"A\", age: 20 }, { name: \"B\", age: 22 }];\nfor (const u of list) showUser(u);"
      },
      {
        "id": "array-sort",
        "title": "sort & reverse — array.js",
        "content": "**sort()** converts elements to strings by default — `[10, 20, 7, 101]` sorts as strings, not numbers!\n\n**ASCII**: uppercase A=65, lowercase a=97 — `\"R\"` sorts before `\"r\"`.\n\nFor **numbers**: `num.sort((a, b) => a - b)` ascending, `(a, b) => b - a` descending.\n\n**reverse()** flips the array in place.",
        "code": "const names = [\"Rohit\", \"Mohan\", \"Sohan\", \"Yash\", \"Rajat\", \"rohit\"];\nnames.sort();\nconsole.log(names);\n\nconst num = [10, 20, 7, 101, 23, 78, 4];\nnum.sort((a, b) => a - b); // ascending\nconsole.log(num);\n\n// num.sort((a, b) => b - a); // descending",
        "tryIt": "const scores = [85, 42, 99, 12];\nscores.sort((a, b) => b - a);\nconsole.log(scores);"
      },
      {
        "id": "object-access",
        "title": "Accessing Object Properties",
        "content": "Thunder `object1.js` — two ways to read a value:\n\n- **Dot notation**: `user.name`\n- **Bracket notation**: `user[\"name\"]` — required when key is dynamic or has spaces\n\nValues are stored as strings, numbers, booleans, arrays, or even functions.",
        "code": "const user = {\n  name: \"rohit\",\n  age: 20,\n  email: \"negi@gmail.com\",\n  amount: 90\n};\nconsole.log(user.amount);\nconsole.log(user[\"name\"]);\nconsole.log(user.name);",
        "tryIt": "const product = { name: \"Burger\", price: 199 };\nconsole.log(product[\"name\"], product.price);"
      },
      {
        "id": "object-crud",
        "title": "Add, Update & Delete Keys",
        "content": "Objects are **mutable**:\n\n- **Add**: `user.adhar = 21030`\n- **Update**: `user.age = 29`\n- **Delete**: `delete user.email`\n\nYou cannot reassign the whole `const user = ...` variable, but you can change its properties.",
        "code": "const user = { name: \"rohit\", age: 20, email: \"negi@gmail.com\", amount: 90 };\n\nuser.adhar = 21030;\nuser.age = 29;\ndelete user.email;\nconsole.log(user);",
        "tryIt": "const item = { title: \"Thunder\", level: 1 };\nitem.level = 2;\nitem.instructor = \"Rohit\";\ndelete item.title;\nconsole.log(item);"
      },
      {
        "id": "nested-objects-methods",
        "title": "Nested Objects & Methods",
        "content": "Objects can hold **arrays**, **other objects**, and **functions** (methods).\n\n`user.greet()` calls the function stored in `greet`. `user.address.city` drills into nested data.",
        "code": "const user = {\n  name: \"rohit\",\n  age: 20,\n  arr: [10, 20, 30, 40],\n  greet: function () {\n    console.log(\"Hello Ji\");\n  },\n  address: {\n    city: \"dwarka\",\n    pincode: 246149\n  }\n};\nuser.greet();\nconsole.log(user.address.city);",
        "tryIt": "const car = {\n  brand: \"Tesla\",\n  specs: { range: 500, unit: \"km\" },\n  honk() { console.log(\"Beep!\"); }\n};\ncar.honk();\nconsole.log(car.specs.range);"
      },
      {
        "id": "object-keys-entries",
        "title": "Object.keys, values & entries",
        "content": "Three static methods to inspect any object:\n\n- **Object.keys(obj)** → array of property names\n- **Object.values(obj)** → array of values\n- **Object.entries(obj)** → `[[key, value], ...]` pairs\n\nLoop with **for...of** on keys or use **destructuring** on entries: `for (const [key, value] of Object.entries(customer))`",
        "code": "const customer = {\n  name: \"Rohit\",\n  age: 20,\n  accountNumber: 124554,\n  balance: 40,\n  city: \"kotdwar\"\n};\nconsole.log(Object.keys(customer));\nconsole.log(Object.values(customer));\n\nfor (const [key, value] of Object.entries(customer)) {\n  console.log(key, value);\n}",
        "tryIt": "const obj = { a: 1, b: 2, c: 3 };\nfor (const k of Object.keys(obj)) console.log(k, obj[k]);"
      },
      {
        "id": "object-reference",
        "title": "Objects Copy by Reference",
        "content": "Same rule as arrays: `const obj2 = obj1` copies the **reference**, not a new object.\n\nChanging `obj2.name` changes `obj1.name` too.",
        "code": "const obj1 = { name: \"Rohit\" };\nconst obj2 = obj1;\nobj2.name = \"mohit\";\nconsole.log(obj1); // { name: \"mohit\" }",
        "tryIt": "let a = { x: 1 };\nlet b = a;\nb.x = 99;\nconsole.log(a.x);"
      },
      {
        "id": "object-destructuring",
        "title": "Object Destructuring",
        "content": "Thunder `object2.js` — pull properties into variables:\n\n`const { age, value } = customer`\n\n**Rename** while destructuring: `const { age: ageName, value: valueName } = customer`",
        "code": "const customer = { name: \"Rohit\", age: 10, value: 70, city: \"kotdwar\" };\nconst { age: ageName, value: valueName } = customer;\nconsole.log(ageName, valueName);",
        "tryIt": "const user = { name: \"Thunder\", day: 7 };\nconst { name, day } = user;\nconsole.log(name, day);"
      },
      {
        "id": "clone-shallow-deep",
        "title": "Shallow vs Deep Clone",
        "content": "**Spread** `{...customer}` — **shallow copy**. Top-level keys are new, but nested objects/arrays still share memory.\n\n`customer2.address.pincode = 2` or `customer2.arr.push(54)` **mutates the original** too.\n\n**structuredClone(customer)** — **deep copy** — nested data is fully independent.",
        "code": "const customer = {\n  name: \"Rohit\",\n  arr: [10, 20, 30],\n  address: { pincode: 246149 }\n};\n\nconst shallow = { ...customer };\nshallow.arr.push(54);\nconsole.log(customer.arr); // [10, 20, 30, 54] — changed!\n\nconst deep = structuredClone(customer);\ndeep.arr.push(3);\nconsole.log(customer.arr); // unchanged by deep clone push on copy",
        "tryIt": "const orig = { nested: { x: 1 } };\nconst copy = structuredClone(orig);\ncopy.nested.x = 99;\nconsole.log(orig.nested.x);"
      },
      {
        "id": "for-in-warning",
        "title": "for...in — Not Recommended",
        "content": "Thunder warns: `for (let key in customer)` loops over **enumerable** keys including inherited ones from the prototype chain.\n\nPrefer **Object.keys()** + **for...of** or **Object.entries()** for safe iteration.",
        "code": "// Don't use this pattern:\n// for (let key in customer) {\n//   console.log(key);\n// }\n\nfor (const key of Object.keys(customer)) {\n  console.log(key, customer[key]);\n}",
        "tryIt": "const o = { a: 1, b: 2 };\nfor (const [k, v] of Object.entries(o)) console.log(k, v);"
      },
      {
        "id": "lecture07-practice",
        "title": "Your Lecture 07 Practice",
        "content": "Work through Thunder Lecture 07 on GitHub:\n1. **`objects.js`** — build users array, Display function, loop menu items\n2. **`array.js`** — sort names, sort numbers with compare function\n3. **`object1.js`** — CRUD keys, nested objects, Object.keys/entries\n4. **`object2.js`** — destructuring, spread vs structuredClone\n\nHomework from `array.js`: understand why default sort treats numbers as strings.\n\nKeep the [Notion notes](https://app.notion.com/p/Lecture-07-Objects-and-Date-37b43ac5cab980cfa8d3db0bf87411b2?source=copy_link) open while you code. **Date object** is covered in depth in Lecture 08.",
        "tryIt": "const items = [{ price: 99 }, { price: 49 }, { price: 199 }];\nitems.sort((a, b) => a.price - b.price);\nconsole.log(items.map(i => i.price));",
        "code": "const menu = [{ name: \"A\", price: 50 }, { name: \"B\", price: 30 }];\nfor (const item of menu) console.log(item.name, item.price);"
      }
    ],
    "quiz": [
      {
        "question": "user.name vs user[\"name\"] — both work when?",
        "options": [
          "Key is a valid identifier",
          "Only for numbers",
          "Never",
          "Only in JSON"
        ],
        "answer": 0,
        "explanation": "Dot notation works for simple keys; brackets always work — object1.js."
      },
      {
        "question": "[10, 20, 7, 101].sort() without compare — order is wrong because?",
        "options": [
          "Arrays can't sort",
          "Elements sorted as strings",
          "sort is broken",
          "Numbers too big"
        ],
        "answer": 1,
        "explanation": "Default sort converts to strings — array.js."
      },
      {
        "question": "Ascending number sort uses?",
        "options": [
          "(a, b) => a - b",
          "(a, b) => b - a",
          "sort() alone",
          "reverse()"
        ],
        "answer": 0,
        "explanation": "Compare function for numeric ascending — array.js."
      },
      {
        "question": "obj2 = obj1; obj2.name = \"mohit\" — obj1.name becomes?",
        "options": [
          "Unchanged",
          "\"mohit\"",
          "undefined",
          "Error"
        ],
        "answer": 1,
        "explanation": "Objects copy by reference — object1.js."
      },
      {
        "question": "Spread {...obj} vs structuredClone — nested array push affects original with?",
        "options": [
          "Spread only",
          "structuredClone only",
          "Both",
          "Neither"
        ],
        "answer": 0,
        "explanation": "Spread is shallow — nested data still shared — object2.js."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=lo7o91qLzxc",
    "youtubeTitle": "JavaScript Objects — Code with Ania",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 8,
    "slug": "date-and-functions",
    "day": 8,
    "title": "Date & Functions",
    "subtitle": "Date object, timestamps, three ways to write functions, IIFE & callbacks",
    "duration": "2 hrs",
    "createdOn": "12 Jul 2026",
    "status": "published",
    "topics": [
      "Date object & getters",
      "Zero-based months",
      "Date.now() timestamps",
      "Custom dates",
      "Function declarations",
      "Default parameters",
      "Rest operator",
      "Spread & destructuring",
      "Function expressions",
      "Arrow functions",
      "IIFE",
      "Callback functions"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture08-Date-and-Functions-in-JS-37c43ac5cab98043bcfafdc2a70c7a3a?source=copy_link",
    "githubPath": "Lecture08",
    "sections": [
      {
        "id": "date-object",
        "title": "The Date Object",
        "content": "Thunder `Date.js` — `new Date()` gives the current date-time. Read its parts with getters:\n\n- `getDate()` / `getDay()` — day of month / day of week\n- `getFullYear()` / `getMonth()` — year / month\n- `getMinutes()` / `getSeconds()` — time parts\n\nOpen [Lecture08](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture08) on GitHub.",
        "code": "const now = new Date();\nconsole.log(now);\nconsole.log(now.toString());\n\nconsole.log(now.getDay());\nconsole.log(now.getDate());\nconsole.log(now.getFullYear());\nconsole.log(now.getMonth());\nconsole.log(now.getMinutes());\nconsole.log(now.getSeconds());",
        "tryIt": "const d = new Date();\nconsole.log(\"Year:\", d.getFullYear());\nconsole.log(\"Month:\", d.getMonth());\nconsole.log(\"Date:\", d.getDate());"
      },
      {
        "id": "date-index-quirks",
        "title": "Zero-Based Months — The Gotcha",
        "content": "Months are **zero-indexed**: `jan: 0, feb: 1 … dec: 11` — July is `6`, not `7`!\n\nDays of the week: `mon: 1, tue: 2 … sun: 7`.\n\nThunder's note: in real projects, teams use **date libraries** instead of raw `Date` because of quirks like these.",
        "code": "const now = new Date();\n// In July this prints 6, not 7!\nconsole.log(now.getMonth());\n\n// ISO string: 2026-06-11T15:37:36.950Z\n// Local time = UTC + 5:30 (IST)\nconsole.log(now.toString());",
        "tryIt": "const months = [\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\"];\nconst d = new Date();\nconsole.log(months[d.getMonth()]);"
      },
      {
        "id": "timestamps",
        "title": "Date.now() & Timestamps",
        "content": "**Date.now()** returns the **timestamp** — milliseconds since 1 Jan 1970 — as a plain number.\n\nNumbers are stored in **8 bytes** — one day the counter overflows, Thunder jokes modern systems will crash.\n\nBuild a date back from any timestamp: `new Date(500000090000)`.",
        "code": "const now = Date.now();\n// Timestamp in milliseconds: 1781193215767\nconsole.log(now);\n\nconst da = new Date(500000090000);\nconsole.log(da);",
        "tryIt": "console.log(\"Timestamp:\", Date.now());\nconst past = new Date(0);\nconsole.log(\"Epoch start:\", past.toString());"
      },
      {
        "id": "custom-dates",
        "title": "Building Custom Dates",
        "content": "Construct any moment with `new Date(year, month, day, hours, minutes, seconds, ms)`.\n\nRemember the month is zero-based — `8` means **September**.",
        "code": "// new Date(year, month, day, hours, minutes, seconds, ms)\nconst myDate = new Date(2026, 8, 4, 6, 20, 11, 125);\nconsole.log(myDate); // 4 Sept 2026, 06:20:11",
        "tryIt": "const bday = new Date(2026, 0, 15);\nconsole.log(bday.toString()); // 15 Jan 2026"
      },
      {
        "id": "function-declarations",
        "title": "Functions — What & Why",
        "content": "Thunder `functions.js` — a function bundles **reusable logic**: write once, call many times.\n\n- Declare with the `function` keyword\n- `return` sends a value back to the caller\n- Without `return`, the result is `undefined`",
        "code": "function greeting() {\n  console.log(\"Hello World\");\n}\ngreeting();\n\nfunction addNumber(num1, num2) {\n  return num1 + num2;\n}\nconst answer = addNumber(2, 3);\nconsole.log(answer);",
        "tryIt": "function multiply(a, b) { return a * b; }\nconsole.log(multiply(4, 5));"
      },
      {
        "id": "default-params",
        "title": "Default Parameters",
        "content": "Give parameters a fallback: `num3 = 0, num4 = 0`.\n\nNow the same `addNumber` works with 2, 3, or 4 arguments — missing ones use the default.",
        "code": "function addNumber(num1, num2, num3 = 0, num4 = 0) {\n  return num1 + num2 + num3 + num4;\n}\n\nconsole.log(addNumber(3, 11));\nconsole.log(addNumber(4, 7, 8));\nconsole.log(addNumber(4, 7, 8, 16));",
        "tryIt": "function greet(name = \"Thunder\") {\n  return \"Hello \" + name;\n}\nconsole.log(greet());\nconsole.log(greet(\"Rohit\"));"
      },
      {
        "id": "rest-operator",
        "title": "Rest Operator — Collect Arguments",
        "content": "What if callers pass **any number** of arguments? The **rest operator** `...arr` collects them all into a real array.\n\nLoop it with `for...of` and sum.",
        "code": "function addNumber(...arr) {\n  let sum = 0;\n  for (const num of arr) {\n    sum += num;\n  }\n  return sum;\n}\n\nconsole.log(addNumber(2, 1, 4, 21, 4, 15, 12, 1234, 123, 53));",
        "tryIt": "function count(...items) { return items.length; }\nconsole.log(count(1, 2, 3));\nconsole.log(count(\"a\", \"b\", \"c\", \"d\", \"e\"));"
      },
      {
        "id": "spread-destructuring",
        "title": "Spread & Array Destructuring",
        "content": "**Spread** `[...arr]` copies an array into a new one.\n\n**Rest in destructuring** grabs the leftovers: `const [first, second, ...third] = arr` — `third` is an array of the remaining items.",
        "code": "let arr = [10, 20, 30, 40, 50, 60];\n\n// spread operator — copy\nconst arr2 = [...arr];\nconsole.log(arr2);\n\n// rest operator — destructure\nconst [first, second, ...third] = arr;\nconsole.log(first, second, third); // 10 20 [30,40,50,60]",
        "tryIt": "const nums = [1, 2, 3];\nconst more = [...nums, 4, 5];\nconsole.log(more);\nconst [head, ...tail] = more;\nconsole.log(head, tail);"
      },
      {
        "id": "function-expressions",
        "title": "Function Expressions — Second Way",
        "content": "Store an **anonymous function** in a variable: `const greet = function () { ... }`.\n\nCall it through the variable name. It can return values like any function.",
        "code": "const greet = function () {\n  console.log(\"Hello Ji\");\n  return 10;\n};\n\nconst answer = greet();\nconsole.log(answer);\n\nconst addNumber = function (num1, num2) {\n  return num1 + num2;\n};\nconsole.log(addNumber(2, 3));",
        "tryIt": "const shout = function (msg) { return msg.toUpperCase(); };\nconsole.log(shout(\"thunder\"));"
      },
      {
        "id": "arrow-functions",
        "title": "Arrow Functions — Third Way",
        "content": "Thunder: \"ye aap sabse zyada use karoge\" — arrows are the most-used form.\n\n- Full body: `const add = (a, b) => { return a + b; }`\n- **Implicit return** one-liner: `const add = (a, b) => a + b`\n- **Single parameter** needs no parentheses: `const square = num => num * num`\n- Returning an **object literal** needs wrapping parens: `() => ({ name: \"Rohit\" })`",
        "code": "const addNumber = (num1, num2) => num1 + num2;\nconsole.log(addNumber(2, 3));\n\nconst square = num => num * num;\nconsole.log(square(8));\n\nconst user = () => ({ name: \"Rohit\", age: 20 });\nconsole.log(user());",
        "tryIt": "const double = n => n * 2;\nconsole.log(double(21));\nconst makeUser = name => ({ name });\nconsole.log(makeUser(\"Thunder\"));"
      },
      {
        "id": "iife",
        "title": "IIFE — Run Immediately",
        "content": "Thunder `ii.js` — **Immediately Invoked Function Expression**: wrap a function in `()` and call it with a trailing `()`.\n\nPattern: `( function )( call )` — define and execute in one statement.",
        "code": "(function hello() {\n  console.log(\"Hello Ji\");\n})();\n\n// pattern: ()()",
        "tryIt": "(() => {\n  console.log(\"IIFE with an arrow!\");\n})();"
      },
      {
        "id": "callbacks",
        "title": "Callback Functions",
        "content": "In JavaScript you can **pass a function into another function** — that's a **callback**.\n\n`meet(greet)` and `meet(morning)` — same `meet`, different behavior. Nothing is hardcoded; the caller decides what runs.",
        "code": "function greet() {\n  console.log(\"Hello Ji\");\n}\n\nfunction morning() {\n  console.log(\"Hello Good Morning\");\n}\n\nfunction meet(Callback) {\n  console.log(\"Hello Meet\");\n  Callback();\n  console.log(\"I am done\");\n}\n\nmeet(greet);\nmeet(morning);",
        "tryIt": "function run(cb) { console.log(\"before\"); cb(); console.log(\"after\"); }\nrun(() => console.log(\"middle\"));"
      },
      {
        "id": "real-callback",
        "title": "Real Callback — Zomato × Blinkit",
        "content": "Thunder `realCallback.js` — the Zomato-Blinkit merger: one `payment()` flow, different follow-ups.\n\n`payment(500, zomatoRestaurant)` prepares an order; `payment(1000, blinkitWarehouse)` packs one. The payment logic stays the same — the **callback** decides what happens after.",
        "code": "function zomatoRestaurant() {\n  console.log(\"Restaurant is preparing the order\");\n}\n\nfunction blinkitWarehouse() {\n  console.log(\"Packing the order for user\");\n}\n\nfunction payment(amount, Callback) {\n  console.log(amount, \"Payment is happenning\");\n  console.log(\"Payment is done\");\n  Callback();\n}\n\npayment(500, zomatoRestaurant);\npayment(1000, blinkitWarehouse);",
        "tryIt": "function checkout(amount, after) {\n  console.log(\"Paid ₹\" + amount);\n  after();\n}\ncheckout(299, () => console.log(\"Order confirmed!\"));"
      },
      {
        "id": "lecture08-practice",
        "title": "Your Lecture 08 Practice",
        "content": "Work through Thunder Lecture 08 on GitHub:\n1. **`Date.js`** — getters, zero-based months, Date.now(), custom dates\n2. **`functions.js`** — declarations, default params, rest/spread, expressions, arrows\n3. **`ii.js`** — IIFE and the meet/greet callback pattern\n4. **`realCallback.js`** — payment flow with zomatoRestaurant & blinkitWarehouse callbacks\n5. **`fourth.js`** — attach your own `sorter` method to an array\n\nKeep the [Notion notes](https://app.notion.com/p/Lecture08-Date-and-Functions-in-JS-37c43ac5cab98043bcfafdc2a70c7a3a?source=copy_link) open while you code. Callbacks return in Lecture 09 with **array methods** like map, filter, and forEach.",
        "code": "let arr = [10, 20, 30, 1, 5, 7, -4, 2, -5];\n\narr.sorter = function () {\n  console.log(\"Hello Ji\");\n};\narr.sorter();\n\narr.sort((a, b) => a - b);\nconsole.log(arr);",
        "tryIt": "const nums = [5, 3, 9, 1];\nconst sorted = [...nums].sort((a, b) => a - b);\nconsole.log(nums, sorted);"
      }
    ],
    "quiz": [
      {
        "question": "new Date().getMonth() in July returns?",
        "options": [
          "7",
          "6",
          "\"July\"",
          "07"
        ],
        "answer": 1,
        "explanation": "Months are zero-indexed: jan 0 … dec 11 — Date.js."
      },
      {
        "question": "Date.now() returns?",
        "options": [
          "A Date object",
          "Timestamp in milliseconds",
          "An ISO string",
          "Seconds since epoch"
        ],
        "answer": 1,
        "explanation": "Milliseconds since 1 Jan 1970, as a number."
      },
      {
        "question": "function addNumber(...arr) — what is ...arr?",
        "options": [
          "Spread operator",
          "Rest operator collecting args into an array",
          "A syntax error",
          "Destructuring"
        ],
        "answer": 1,
        "explanation": "In a parameter list, ... collects all arguments — functions.js."
      },
      {
        "question": "Arrow function returning an object literal needs?",
        "options": [
          "return keyword only",
          "Parentheses around the object: () => ({})",
          "Nothing special",
          "Square brackets"
        ],
        "answer": 1,
        "explanation": "Without (), the {} is read as a function body — functions.js."
      },
      {
        "question": "meet(greet) — passing greet into meet makes greet a?",
        "options": [
          "Callback function",
          "IIFE",
          "Arrow function",
          "Method"
        ],
        "answer": 0,
        "explanation": "A function passed as an argument is a callback — ii.js."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=FOD408a0EzU",
    "youtubeTitle": "How To Create & Use Functions — Chris Courses",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 9,
    "slug": "array-methods-callbacks",
    "day": 9,
    "title": "Callbacks, forEach, map, filter, reduce",
    "subtitle": "Build the methods yourself, then master the real ones — plus Sets",
    "duration": "2 hrs",
    "createdOn": "13 Jul 2026",
    "status": "published",
    "topics": [
      "Callback recap",
      "Anonymous & arrow callbacks",
      "Bubble sort by hand",
      "Custom sort with callback",
      "Array.prototype methods",
      "forEach — value, index, array",
      "map",
      "filter & this",
      "reduce accumulator",
      "filter + map chaining",
      "Sets & unique values"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture09-Callback-forEach-map-filter-reduce-37d43ac5cab980e0a44ef39a89b81143?source=copy_link",
    "githubPath": "Lecture09",
    "sections": [
      {
        "id": "callback-recap",
        "title": "Callbacks Recap — Calculator",
        "content": "Thunder `first.js` — a function can receive **another function as an argument**.\n\nOne `calculator(num1, num2, caller)` handles add, sub, mul — the **caller decides the operation**.\n\nOpen [Lecture09](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture09) on GitHub.",
        "code": "function add(num1, num2) { return num1 + num2; }\nfunction sub(num1, num2) { return num1 - num2; }\nfunction mul(num1, num2) { return num1 * num2; }\n\nfunction calculator(num1, num2, caller) {\n  console.log(\"I am doing Calculation\");\n  const result = caller(num1, num2);\n  console.log(`Your result ${result}`);\n}\n\ncalculator(10, 20, mul);\ncalculator(10, 20, add);",
        "tryIt": "function calc(a, b, op) { return op(a, b); }\nconsole.log(calc(6, 7, (x, y) => x * y));"
      },
      {
        "id": "anonymous-callbacks",
        "title": "Anonymous & Arrow Callbacks",
        "content": "No need to name the callback — pass it **inline**:\n\n- Anonymous function: `calculator(30, 5, function (a, b) { return a / b; })`\n- Arrow: `calculator(15, 3, (a, b) => a / b)`\n\nThis inline style is exactly what you'll use with forEach, map, and filter.",
        "code": "calculator(30, 5, function (a, b) {\n  return a / b;\n});\n\ncalculator(15, 3, (a, b) => {\n  return a / b;\n});",
        "tryIt": "function run(cb) { console.log(cb(10)); }\nrun(n => n + 1);\nrun(function (n) { return n * n; });"
      },
      {
        "id": "bubble-sort",
        "title": "Build Your Own Sort — Bubble Sort",
        "content": "Thunder `customize.js` — before trusting `sort()`, build sorting by hand.\n\n**Bubble sort**: nested loops, compare neighbours `arr[j] > arr[j+1]`, swap with a temp variable. Bigger values \"bubble\" to the end.",
        "code": "const arr = [10, 20, 30, 11, 8, 15];\n\nfor (let i = 0; i < arr.length; i++) {\n  for (let j = 0; j < arr.length - 1; j++) {\n    if (arr[j] > arr[j + 1]) {\n      let temp = arr[j];\n      arr[j] = arr[j + 1];\n      arr[j + 1] = temp;\n    }\n  }\n}\nconsole.log(arr);",
        "tryIt": "const a = [5, 2, 9, 1];\nfor (let i = 0; i < a.length; i++)\n  for (let j = 0; j < a.length - 1; j++)\n    if (a[j] > a[j + 1]) [a[j], a[j + 1]] = [a[j + 1], a[j]];\nconsole.log(a);"
      },
      {
        "id": "sort-callback",
        "title": "Custom Sort with a Callback",
        "content": "Thunder `callback.js` — attach `sorting` to **Array.prototype** and let a **callback decide the swap**:\n\n`Callback(arr[j], arr[j+1])` returns true → swap. Pass `(a, b) => a > b` for ascending.\n\nThis is exactly how the real `sort((a, b) => a - b)` works: **negative = don't swap, positive = swap**.",
        "code": "const arr = [10, 20, 1, 3, 98, 8, 11];\n\nArray.prototype.sorting = function (Callback) {\n  for (let i = 0; i < arr.length; i++) {\n    for (let j = 0; j < arr.length - 1; j++) {\n      if (Callback(arr[j], arr[j + 1])) {\n        let temp = arr[j];\n        arr[j] = arr[j + 1];\n        arr[j + 1] = temp;\n      }\n    }\n  }\n};\n\narr.sorting((a, b) => a > b);\nconsole.log(arr);",
        "tryIt": "const nums = [10, 20, 1, 3];\nnums.sort((a, b) => a - b);\nconsole.log(nums);\nnums.sort((a, b) => b - a);\nconsole.log(nums);"
      },
      {
        "id": "custom-foreach",
        "title": "forEach — Build It, Then Use It",
        "content": "Thunder `forEach.js` — rebuild it as `forLoop`: call the callback with **(value, index, array)** for every element.\n\nThe real **forEach** passes the same three arguments. JavaScript ignores extra arguments — `aditya(10, 20, \"Rohit\")` with one parameter just uses `10`.",
        "code": "Array.prototype.forLoop = function (Callback) {\n  for (let i = 0; i < arr.length; i++) {\n    Callback(arr[i], i, arr);\n  }\n};\n\nconst arr = [10, 20, 8, 19, 14, 23];\n\n// first: value, second: index, third: array\narr.forEach((i, j, k) => {\n  console.log(i, j, k);\n});",
        "tryIt": "[\"a\", \"b\", \"c\"].forEach((value, index) => {\n  console.log(index, value);\n});"
      },
      {
        "id": "map",
        "title": "map — Transform Every Element",
        "content": "Thunder `map.js` — **map** runs the callback on each element and returns a **new array of the same length**.\n\nThe original array is untouched.",
        "code": "const arr = [10, 20, 40, 73, 18];\n\nconst newArr = arr.map((num) => num * 5);\n\nconsole.log(newArr); // [50, 100, 200, 365, 90]",
        "tryIt": "const prices = [100, 250, 40];\nconst withTax = prices.map(p => p * 1.18);\nconsole.log(withTax);"
      },
      {
        "id": "custom-filter",
        "title": "Build Your Own filter — this",
        "content": "Thunder `filter.js` — `filtered` on **Array.prototype** uses **this**:\n\nInside the method, `this` is **the array it was called on** — so the same method works for any array, unlike the earlier version hardcoding `arr`.",
        "code": "Array.prototype.filtered = function (Callback) {\n  const answer = [];\n  for (let num of this) {\n    if (Callback(num)) answer.push(num);\n  }\n  return answer;\n};\n\nconst arr = [3, 54, 18, 11, 20, 19, 2];\nconsole.log(arr.filtered((num) => num > 10));\n\nconst a = [-10, 3, 5, 18, -9, 14];\nconsole.log(a.filtered((num) => num > 10));",
        "tryIt": "const arr = [3, 54, 18, 11, 20, 19, 2];\nconst answer = arr.filter((num) => num > 10);\nconsole.log(answer); // [54, 18, 11, 20, 19]"
      },
      {
        "id": "reduce",
        "title": "reduce — The Accumulator",
        "content": "Thunder `reducer.js` — **reduce** boils an array down to **one value**.\n\nThe callback gets `(accumulator, num)`; the second argument to reduce is the **initial value** — `0` for a sum, `1` for a product.",
        "code": "const arr = [10, 20, 30, 40, 50];\n\nconst sum = arr.reduce((accumulator, num) => {\n  return accumulator + num;\n}, 0);\nconsole.log(sum); // 150\n\nconst ans = arr.reduce((acc, num) => {\n  return acc * num;\n}, 1);\nconsole.log(ans); // 12000000",
        "tryIt": "const prices = [100, 200, 50];\nconst total = prices.reduce((acc, p) => acc + p, 0);\nconsole.log(\"Total:\", total);"
      },
      {
        "id": "realworld-chain",
        "title": "Real World — filter + map Chain",
        "content": "Thunder `realworld.js` — a 20-item product catalog:\n\n1. **filter** keeps only `inStock` goods (20 → 15)\n2. **map** reshapes each to `{ name, category, price }`\n\nChaining reads like a sentence — this is everyday backend/frontend code.",
        "code": "const products = [\n  { id: 1, name: \"Laptop\", category: \"Electronics\", price: 1200, inStock: true },\n  { id: 3, name: \"Smartphone\", category: \"Electronics\", price: 800, inStock: false },\n  // ...20 products\n];\n\nconst pro = products\n  .filter((goods) => goods.inStock)\n  .map((goods) => ({\n    name: goods.name,\n    category: goods.category,\n    price: goods.price\n  }));\n\nconsole.log(pro);",
        "tryIt": "const items = [\n  { name: \"A\", price: 50, inStock: true },\n  { name: \"B\", price: 30, inStock: false },\n  { name: \"C\", price: 80, inStock: true }\n];\nconsole.log(items.filter(i => i.inStock).map(i => i.name));"
      },
      {
        "id": "sets",
        "title": "Sets — Unique Values Only",
        "content": "Thunder `sets.js` — a **Set** keeps only unique values; duplicates vanish automatically.\n\n- `add()` ignores repeats, `has()` checks membership\n- Two identical-looking **objects** stay separate — uniqueness is by reference",
        "code": "const arr = [10, 20, 30, 20, 10, 12, 30, \"Rohit\", \"Mohit\", 70, \"Rohit\"];\nconst s1 = new Set(arr);\nconsole.log(s1);\n\nconst s2 = new Set();\ns2.add(10);\ns2.add(43);\ns2.add(43); // ignored\nconsole.log(s2.has(20)); // false",
        "tryIt": "const s = new Set([1, 1, 2, 3, 3]);\nconsole.log(s.size);\nconsole.log(s.has(2));"
      },
      {
        "id": "dedupe-emails",
        "title": "Dedupe with Set + Spread",
        "content": "The classic interview one-liner: duplicate emails → **Set** → **spread** back into a real array.\n\n`[...new Set(email)]` — unique list, array methods available again.",
        "code": "const email = ['rohit@gmail', 'mohit@gmail.com', 'sohit@gmail', 'rohit@gmail', 'mohit@gmail'];\n\nconst s1 = new Set(email);\nconst arr = [...s1];\nconsole.log(arr);",
        "tryIt": "const tags = [\"js\", \"css\", \"js\", \"html\", \"css\"];\nconsole.log([...new Set(tags)]);"
      },
      {
        "id": "lecture09-practice",
        "title": "Your Lecture 09 Practice",
        "content": "Work through Thunder Lecture 09 on GitHub:\n1. **`first.js`** — calculator with add/sub/mul callbacks, inline arrows\n2. **`customize.js` + `callback.js`** — bubble sort, then callback-driven sorting on Array.prototype\n3. **`forEach.js`** — custom forLoop, real forEach with (value, index, array)\n4. **`map.js` + `filter.js` + `reducer.js`** — transform, keep, accumulate\n5. **`realworld.js`** — chain filter + map on the 20-product catalog\n6. **`sets.js`** — dedupe arrays and emails\n\nKeep the [Notion notes](https://app.notion.com/p/Lecture09-Callback-forEach-map-filter-reduce-37d43ac5cab980e0a44ef39a89b81143?source=copy_link) open while you code. Next up: the **DOM** — JavaScript meets the page.",
        "code": "const nums = [3, 54, 18, 11, 20, 19, 2];\nconst result = nums\n  .filter(n => n > 10)\n  .map(n => n * 2)\n  .reduce((acc, n) => acc + n, 0);\nconsole.log(result);",
        "tryIt": "const marks = [45, 82, 67, 91, 38];\nconst passed = marks.filter(m => m >= 40);\nconst avg = passed.reduce((a, m) => a + m, 0) / passed.length;\nconsole.log(passed, avg);"
      }
    ],
    "quiz": [
      {
        "question": "calculator(10, 20, mul) — what is mul here?",
        "options": [
          "A callback function",
          "An IIFE",
          "A string",
          "A method of calculator"
        ],
        "answer": 0,
        "explanation": "A function passed as an argument is a callback — first.js."
      },
      {
        "question": "forEach callback arguments, in order?",
        "options": [
          "value, index, array",
          "index, value, array",
          "array, value, index",
          "value only — nothing else"
        ],
        "answer": 0,
        "explanation": "arr.forEach((value, index, array) => ...) — forEach.js."
      },
      {
        "question": "arr.map(num => num * 5) returns?",
        "options": [
          "A new array, same length",
          "The same array mutated",
          "A single number",
          "undefined"
        ],
        "answer": 0,
        "explanation": "map transforms into a new array — map.js."
      },
      {
        "question": "Inside Array.prototype.filtered, `this` refers to?",
        "options": [
          "The callback",
          "The array the method was called on",
          "The global object",
          "undefined"
        ],
        "answer": 1,
        "explanation": "this = the calling array, so filtered works on any array — filter.js."
      },
      {
        "question": "new Set([10, 20, 20, 10]).size equals?",
        "options": [
          "4",
          "2",
          "1",
          "0"
        ],
        "answer": 1,
        "explanation": "Sets keep unique values only — sets.js."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=PojpwEbOQJg",
    "youtubeTitle": "map(), filter() & reduce() — Code with Ania",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 10,
    "slug": "introduction-to-dom",
    "day": 10,
    "title": "Introduction to the DOM",
    "subtitle": "The document tree, selecting elements, and changing content & style",
    "duration": "2 hrs",
    "createdOn": "14 Jul 2026",
    "status": "published",
    "topics": [
      "What is the DOM?",
      "document & window",
      "The DOM tree",
      "getElementById",
      "getElementsByClassName / TagName",
      "querySelector",
      "querySelectorAll",
      "textContent vs innerHTML",
      "Changing styles",
      "Show & hide elements"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture10-Introduction-To-DOM-38043ac5cab980adbbdeffd5e8dc6ae8?source=copy_link",
    "githubPath": "Lecture10",
    "sections": [
      {
        "id": "what-is-dom",
        "title": "What is the DOM?",
        "content": "When the browser loads HTML, it builds the **DOM (Document Object Model)** — a **tree of objects**, one node per tag. JavaScript can read and change that tree live, so the page reacts without a reload.\n\nThunder's `index.html` demo: an `<h1 id=\"first\">`, an `<h2 class=\"Rohit\" id=\"second\">`, and a `<ul class=\"Rohit\">` with four `<li>` items (Web Development, Security, System Design, Devops).\n\nOpen [Lecture10](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture10) on GitHub and open `index.html` in the browser.",
        "code": "<h1 id=\"first\">\n  Hello Thunder Students\n  <span style=\"display:none\">Kaise ho</span>\n</h1>\n<h2 class=\"Rohit\" id=\"second\">We are covering lot of tech here</h2>\n<ul class=\"Rohit\">\n  <li>Web Developement</li>\n  <li>Security</li>\n  <li>System Design</li>\n  <li>Devops</li>\n</ul>",
        "tryIt": "// Runs in the browser console on index.html\nconsole.log(document.title);\nconsole.log(document.body);"
      },
      {
        "id": "document-window",
        "title": "document & window",
        "content": "**window** is the whole browser tab; **document** is the page inside it — your entry point to the DOM.\n\nEverything hangs off `document`: `document.body`, `document.head`, and every selector method.\n\nLog an element with `console.dir()` to see it as an **object** with all the properties you can change.",
        "code": "console.log(window);\nconsole.log(document);\nconsole.log(document.body);\n\nconst h1 = document.getElementById(\"first\");\nconsole.dir(h1); // element as an object",
        "tryIt": "console.log(document.URL);\nconsole.log(document.getElementsByTagName(\"li\").length);"
      },
      {
        "id": "get-by-id",
        "title": "getElementById",
        "content": "**Ids are unique** on a page, so `getElementById` returns **one element** (or `null` if not found).\n\nThunder grabs `#first` and `#second` this way.",
        "code": "const first = document.getElementById(\"first\");\nconst second = document.getElementById(\"second\");\nconsole.log(first);\nconsole.log(second);",
        "tryIt": "const el = document.getElementById(\"first\");\nconsole.log(el.textContent);"
      },
      {
        "id": "get-by-class-tag",
        "title": "By Class & Tag Name",
        "content": "**getElementsByClassName** and **getElementsByTagName** return a **live HTMLCollection** — it updates if the DOM changes, and it is *not* a real array (no `map`/`filter`).\n\nIn the demo both the `<h2>` and the `<ul>` share `class=\"Rohit\"`, so the collection holds both.",
        "code": "const rohit = document.getElementsByClassName(\"Rohit\");\nconsole.log(rohit.length); // 2 — h2 and ul\n\nconst items = document.getElementsByTagName(\"li\");\nconsole.log(items.length); // 4",
        "tryIt": "const lis = document.getElementsByTagName(\"li\");\nconsole.log(lis[0].textContent);\n// convert to array to loop:\nconsole.log([...lis].map(li => li.textContent));"
      },
      {
        "id": "query-selector",
        "title": "querySelector — CSS in JS",
        "content": "**querySelector** takes any **CSS selector** and returns the **first** match:\n\n- `#first` — by id\n- `.Rohit` — by class\n- `ul li` — nested\n\nWith `.Rohit`, it returns the `<h2>` (the first element with that class).",
        "code": "const byId = document.querySelector(\"#first\");\nconst byClass = document.querySelector(\".Rohit\"); // the h2\nconst firstLi = document.querySelector(\"ul li\");\nconsole.log(firstLi.textContent); // Web Developement",
        "tryIt": "console.log(document.querySelector(\"#second\").textContent);"
      },
      {
        "id": "query-selector-all",
        "title": "querySelectorAll — NodeList",
        "content": "**querySelectorAll** returns **all** matches as a **static NodeList** — a snapshot that does *not* update, but *does* support `forEach`.",
        "code": "const items = document.querySelectorAll(\"li\");\nitems.forEach((li) => {\n  console.log(li.textContent);\n});\n\nconst rohit = document.querySelectorAll(\".Rohit\");\nconsole.log(rohit.length); // 2",
        "tryIt": "document.querySelectorAll(\"li\").forEach((li, i) => {\n  console.log(i, li.textContent);\n});"
      },
      {
        "id": "text-vs-html",
        "title": "textContent vs innerHTML",
        "content": "**textContent** reads/writes **plain text** — any tags you set become literal text (safe).\n\n**innerHTML** reads/writes **markup** — the browser parses tags. Powerful, but dangerous with untrusted input (XSS).",
        "code": "const first = document.getElementById(\"first\");\nfirst.textContent = \"Hello from JS!\";\n\nconst second = document.getElementById(\"second\");\nsecond.innerHTML = \"We cover <b>lots</b> of tech\";",
        "tryIt": "const h = document.getElementById(\"second\");\nconsole.log(h.textContent);\nh.textContent = \"<b>not bold</b>\"; // shows the tags as text"
      },
      {
        "id": "changing-styles",
        "title": "Changing Styles",
        "content": "The `.style` property maps to inline CSS — property names become **camelCase**: `background-color` → `backgroundColor`, `font-size` → `fontSize`.",
        "code": "const first = document.getElementById(\"first\");\nfirst.style.backgroundColor = \"pink\";\nfirst.style.color = \"black\";\nfirst.style.fontSize = \"50px\";",
        "tryIt": "const el = document.getElementById(\"second\");\nel.style.backgroundColor = \"orange\";\nel.style.padding = \"10px\";"
      },
      {
        "id": "show-hide",
        "title": "Show & Hide Elements",
        "content": "The `<span>Kaise ho</span>` inside the `<h1>` starts with `display:none`, so it is hidden.\n\nFlip `style.display` to reveal it — the foundation of toggles, dropdowns, and modals.",
        "code": "const first = document.getElementById(\"first\");\nconst span = first.querySelector(\"span\");\n\nspan.style.display = \"inline\"; // now visible\n// span.style.display = \"none\"; // hide again",
        "tryIt": "const span = document.querySelector(\"#first span\");\nspan.style.display = span.style.display === \"none\" ? \"inline\" : \"none\";"
      },
      {
        "id": "lecture10-practice",
        "title": "Your Lecture 10 Practice",
        "content": "Open Thunder's `index.html` from [Lecture10](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture10) and, in the browser console:\n1. Grab `#first` and `#second` with **getElementById**\n2. Collect the `.Rohit` elements and the `<li>` items with **class/tag** and **querySelectorAll**\n3. Change text with **textContent**, markup with **innerHTML**\n4. Restyle `#first` — background, color, font size\n5. Reveal the hidden **span** by setting `display`\n\nKeep the [Notion notes](https://app.notion.com/p/Lecture10-Introduction-To-DOM-38043ac5cab980adbbdeffd5e8dc6ae8?source=copy_link) open. Next up: **DOM CRUD & events** — creating, deleting, and reacting to clicks.",
        "code": "const items = document.querySelectorAll(\"ul li\");\nitems.forEach((li) => {\n  li.style.color = \"cyan\";\n  console.log(li.textContent);\n});",
        "tryIt": "const title = document.getElementById(\"first\");\ntitle.textContent = \"DOM mastered!\";\ntitle.style.backgroundColor = \"lightgreen\";"
      }
    ],
    "quiz": [
      {
        "question": "DOM stands for?",
        "options": [
          "Data Object Model",
          "Document Object Model",
          "Digital Output Mode",
          "Direct Object Map"
        ],
        "answer": 1,
        "explanation": "Document Object Model — the browser's tree of your HTML."
      },
      {
        "question": "getElementById returns?",
        "options": [
          "An array",
          "A single element or null",
          "A NodeList",
          "A string"
        ],
        "answer": 1,
        "explanation": "Ids are unique, so it returns one element (or null)."
      },
      {
        "question": "querySelector('.Rohit') on the demo returns?",
        "options": [
          "Both .Rohit elements",
          "Only the first match (the h2)",
          "A live HTMLCollection",
          "null"
        ],
        "answer": 1,
        "explanation": "querySelector returns only the first matching element."
      },
      {
        "question": "Which safely inserts plain text without parsing tags?",
        "options": [
          "innerHTML",
          "textContent",
          "outerHTML",
          "insertAdjacentHTML"
        ],
        "answer": 1,
        "explanation": "textContent treats everything as literal text — no HTML parsing."
      },
      {
        "question": "In JS, the CSS property background-color is written as?",
        "options": [
          "background-color",
          "backgroundColor",
          "background_color",
          "BackgroundColor"
        ],
        "answer": 1,
        "explanation": "style properties use camelCase — el.style.backgroundColor."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=0ik6X4DJKCc",
    "youtubeTitle": "JavaScript DOM Crash Course — Traversy Media",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 11,
    "slug": "dom-crud-and-events",
    "day": 11,
    "title": "DOM CRUD & Events",
    "subtitle": "Handle events, create & insert nodes, and render UI from data",
    "duration": "2 hrs",
    "createdOn": "15 Jul 2026",
    "status": "published",
    "topics": [
      "Element as an object",
      "onclick handler",
      "addEventListener",
      "click vs dblclick",
      "createElement",
      "append & prepend",
      "before & after",
      "id, className & classList",
      "setAttribute / getAttribute",
      "children indexing",
      "Batch append with spread",
      "Render cards from data"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture11-CRUD-and-Event-in-DOM-38143ac5cab980d48176fda6b086cfef?source=copy_link",
    "githubPath": "Lecture11",
    "sections": [
      {
        "id": "element-is-object",
        "title": "An Element is an Object",
        "content": "Thunder `first.js` — once you select an element it is just a **JavaScript object** with properties (`textContent`, `style`) and function slots (`onclick`).\n\nSetting one of those slots to a function tells the browser what to run later.\n\nOpen [Lecture11](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture11) and its `index.html` in the browser.",
        "code": "const element = document.getElementById(\"first\");\nconsole.log(element.textContent);\nconsole.dir(element); // element as an object",
        "tryIt": "const el = document.getElementById(\"first\");\nconsole.log(typeof el);\nconsole.log(el.tagName);"
      },
      {
        "id": "onclick",
        "title": "onclick — The Classic Handler",
        "content": "Assign a function to `element.onclick`. When the user clicks, the browser runs it.\n\nLimitation: `onclick` is a **single slot** — a second assignment overwrites the first.",
        "code": "const element = document.getElementById(\"first\");\n\nelement.onclick = () => {\n  element.textContent = \"Vijay bhai kaise ho\";\n  element.style.backgroundColor = \"pink\";\n};",
        "tryIt": "const el = document.getElementById(\"first\");\nel.onclick = function handleClick() {\n  el.textContent = \"Clicked!\";\n};"
      },
      {
        "id": "add-event-listener",
        "title": "addEventListener",
        "content": "The modern way: `element.addEventListener(eventType, callback)`. When the event fires, the callback runs.\n\nUnlike `onclick`, you can **stack many listeners** on the same element and event.",
        "code": "const element = document.getElementById(\"first\");\n\nelement.addEventListener(\"click\", () => {\n  element.textContent = \"I am best\";\n  element.style.backgroundColor = \"pink\";\n});",
        "tryIt": "const el = document.getElementById(\"first\");\nel.addEventListener(\"click\", () => console.log(\"clicked!\"));\nel.addEventListener(\"click\", () => console.log(\"and again!\"));"
      },
      {
        "id": "click-dblclick",
        "title": "click vs dblclick",
        "content": "The **event type** string decides what triggers the callback — `\"click\"` for a single click, `\"dblclick\"` for a double click.\n\nSame element, different behavior for each event.",
        "code": "element.addEventListener(\"dblclick\", () => {\n  element.textContent = \"Double clicked!\";\n  element.style.backgroundColor = \"pink\";\n});",
        "tryIt": "const el = document.getElementById(\"first\");\nel.addEventListener(\"dblclick\", () => {\n  el.textContent = \"You double-clicked me\";\n});"
      },
      {
        "id": "create-element",
        "title": "Create — createElement",
        "content": "Thunder `second/first.js` — **createElement** builds a node **in memory** (not yet on the page). Set its `textContent`, then insert it later.",
        "code": "const newElement = document.createElement(\"h2\");\nnewElement.textContent = \"I am Sachin Kumar\";\nconsole.log(newElement); // exists in memory, not on page yet",
        "tryIt": "const h = document.createElement(\"h3\");\nh.textContent = \"Chamak gaya bhaiya\";\ndocument.body.append(h);"
      },
      {
        "id": "append-prepend",
        "title": "Insert — append & prepend",
        "content": "Put a node **inside** a parent:\n\n- **append(...nodes)** — add at the **end** (accepts multiple nodes)\n- **prepend(node)** — add at the **start**",
        "code": "const ul = document.getElementById(\"ul\");\nconst li = document.createElement(\"li\");\nli.textContent = \"Web Development\";\n\nul.append(li, li2, li3); // end\nul.prepend(li4);         // start",
        "tryIt": "const ul = document.getElementById(\"ul\");\nconst li = document.createElement(\"li\");\nli.textContent = \"DSA\";\nul.append(li);"
      },
      {
        "id": "before-after",
        "title": "Insert — before, after & children",
        "content": "Place a node as a **sibling** relative to another:\n\n- `element.before(newEl)` / `element.after(newEl)`\n- Reach into the live child list: `ul.children[1].after(li5)`",
        "code": "element.before(newElement);\nelement.after(newElement2);\n\nul.children[1].after(li5);\nli.after(li5);",
        "tryIt": "const ul = document.getElementById(\"ul\");\nconst li = document.createElement(\"li\");\nli.textContent = \"GenAI\";\nif (ul.children[0]) ul.children[0].after(li);"
      },
      {
        "id": "attributes-classes",
        "title": "Update — id, class & attributes",
        "content": "Give a node identity and styling hooks:\n\n- `newEl.id = \"third\"`\n- **classList.add()** adds a class without wiping others (safer than `className =`)\n- **setAttribute / getAttribute** read and write any attribute",
        "code": "newElement2.id = \"third\";\nnewElement2.classList.add(\"Rohit\");\nnewElement2.classList.add(\"Mohit\");\nnewElement2.setAttribute(\"piyush\", \"mohan\");\nconsole.log(newElement2.getAttribute(\"class\"));",
        "tryIt": "const h = document.createElement(\"h2\");\nh.classList.add(\"title\");\nh.setAttribute(\"data-role\", \"heading\");\nconsole.log(h.getAttribute(\"data-role\"));"
      },
      {
        "id": "batch-append",
        "title": "Batch Append with Spread",
        "content": "Creating nodes one at a time and appending each causes many reflows. Instead, **collect nodes in an array** and append them all at once with the spread operator.",
        "code": "const foods = [\"Milk\", \"Soya\", \"Chicken\", \"Egg\", \"Samosa\"];\nconst ul = document.getElementById(\"ul\");\nconst arr = [];\n\nfor (const food of foods) {\n  const li = document.createElement(\"li\");\n  li.textContent = food;\n  arr.push(li);\n}\n\nul.append(...arr); // one insert",
        "tryIt": "const arr = [];\nfor (const t of [\"A\", \"B\", \"C\"]) {\n  const li = document.createElement(\"li\");\n  li.textContent = t;\n  arr.push(li);\n}\nconsole.log(arr.length);"
      },
      {
        "id": "render-from-data",
        "title": "Project — Render Cards from Data",
        "content": "Thunder `projects/first.js` — the payoff: turn a **data array into UI**.\n\nLoop `users`, build an `<img>`, `<h2>` name, and `<p>` age, wrap them in a `<div>` card, collect all cards, then `root.append(...arr)` once. This is exactly how frameworks render lists under the hood.",
        "code": "const root = document.getElementById(\"root\");\nconst arr = [];\n\nusers.forEach((people) => {\n  const name = document.createElement(\"h2\");\n  name.textContent = `Name: ${people.name}`;\n\n  const age = document.createElement(\"p\");\n  age.textContent = `Age: ${people.age}`;\n\n  const image = document.createElement(\"img\");\n  image.src = people.photo;\n\n  const card = document.createElement(\"div\");\n  card.append(image, name, age);\n  arr.push(card);\n});\n\nroot.append(...arr);",
        "tryIt": "const users = [{ name: \"Aarav\", age: 24 }, { name: \"Priya\", age: 22 }];\nusers.forEach((u) => {\n  const div = document.createElement(\"div\");\n  div.textContent = `${u.name} (${u.age})`;\n  document.body.append(div);\n});"
      },
      {
        "id": "lecture11-practice",
        "title": "Your Lecture 11 Practice",
        "content": "Open Thunder's [Lecture11](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture11) folder:\n1. **`first.js`** — wire `onclick` and `addEventListener` (click + dblclick) on `#first`\n2. **`second/first.js`** — createElement, append/prepend/before/after, classList, setAttribute\n3. **`projects/first.js`** — render the 10 users as image + name + age cards into `#root`\n4. Try the `foods` list — build `<li>` nodes in a loop and batch-append\n\nData lives in **`data.js`** (users + a 20-item products array). Keep the [Notion notes](https://app.notion.com/p/Lecture11-CRUD-and-Event-in-DOM-38143ac5cab980d48176fda6b086cfef?source=copy_link) open. Next: **events & projects** — wiring real interactivity.",
        "code": "const root = document.getElementById(\"root\");\nconst cards = products\n  .filter((p) => p.inStock)\n  .map((p) => {\n    const div = document.createElement(\"div\");\n    div.textContent = `${p.title} — \\u20b9${p.price}`;\n    return div;\n  });\nroot.append(...cards);",
        "tryIt": "const btn = document.createElement(\"button\");\nbtn.textContent = \"Click me\";\nbtn.addEventListener(\"click\", () => btn.textContent = \"Clicked!\");\ndocument.body.append(btn);"
      }
    ],
    "quiz": [
      {
        "question": "addEventListener takes?",
        "options": [
          "An event type and a callback",
          "Only a callback",
          "Only a string",
          "A CSS selector"
        ],
        "answer": 0,
        "explanation": "element.addEventListener('click', callback) — first.js."
      },
      {
        "question": "onclick vs addEventListener — the key difference?",
        "options": [
          "onclick can stack many handlers",
          "addEventListener can stack many handlers; onclick has one slot",
          "They are identical",
          "onclick only works on buttons"
        ],
        "answer": 1,
        "explanation": "A second onclick assignment overwrites the first; addEventListener stacks."
      },
      {
        "question": "document.createElement('h2') gives you an element that is?",
        "options": [
          "Already on the page",
          "In memory, not yet on the page",
          "A string of HTML",
          "null until appended"
        ],
        "answer": 1,
        "explanation": "It exists in memory; you insert it with append/before/after — second/first.js."
      },
      {
        "question": "Which adds a class without removing existing ones?",
        "options": [
          "element.className = 'Rohit'",
          "element.classList.add('Rohit')",
          "element.setAttribute('Rohit')",
          "element.class = 'Rohit'"
        ],
        "answer": 1,
        "explanation": "classList.add appends; className = overwrites all classes."
      },
      {
        "question": "Best way to insert 10 built nodes into a parent?",
        "options": [
          "append each one inside the loop",
          "Collect them in an array, then parent.append(...arr)",
          "Use innerHTML += each time",
          "prepend each one"
        ],
        "answer": 1,
        "explanation": "Batching with spread does one insert instead of ten — projects/first.js."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=XF1_MlZ5l6M",
    "youtubeTitle": "JavaScript Event Listeners — Web Dev Simplified",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 12,
    "slug": "events-and-projects",
    "day": 12,
    "title": "Events & JavaScript Projects",
    "subtitle": "The event model in depth, then 5 hands-on mini projects",
    "duration": "2 hrs",
    "createdOn": "16 Jul 2026",
    "status": "published",
    "topics": [
      "The event object & e.target",
      "Event delegation",
      "Event bubbling",
      "Capture phase",
      "removeEventListener",
      "Random quote generator",
      "Color switcher",
      "Counter with guard",
      "Form submit & preventDefault",
      "Live text/word counter",
      "Homework: joke generator"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture12-Even-and-Project-in-Javascript-38343ac5cab980aab918f7f4dc5c2fff?source=copy_link",
    "githubPath": "Lecture12",
    "sections": [
      {
        "id": "event-object",
        "title": "The Event Object & e.target",
        "content": "Thunder `Eventsjs/first.js` — every event callback receives an **event object** `e`. Its most useful property is **`e.target`** — the exact element the user interacted with.\n\nThis is the key to writing one handler that serves many elements.\n\nOpen [Lecture12](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture12) on GitHub.",
        "code": "parent.addEventListener(\"click\", (e) => {\n  console.log(e);\n  e.target.textContent = \"I am clicked\";\n});",
        "tryIt": "document.body.addEventListener(\"click\", (e) => {\n  console.log(\"You clicked:\", e.target.tagName);\n});"
      },
      {
        "id": "event-delegation",
        "title": "Event Delegation",
        "content": "Instead of adding a listener to **each** child, add **one** listener to the parent and use `e.target` to tell which child fired.\n\nThunder replaces four separate child listeners with a single parent listener — less code, and it even works for children added later.",
        "code": "// Four listeners? No — one on the parent:\nconst parent = document.getElementById(\"parent\");\nparent.addEventListener(\"click\", (e) => {\n  e.target.textContent = \"I am clicked\";\n});",
        "tryIt": "const list = document.getElementById(\"ul\");\nlist?.addEventListener(\"click\", (e) => {\n  if (e.target.tagName === \"LI\") e.target.style.color = \"cyan\";\n});"
      },
      {
        "id": "bubbling-capturing",
        "title": "Bubbling vs Capturing",
        "content": "When you click a child, the event travels the DOM tree in two phases:\n\n- **Capture** — top → down (grandparent → child)\n- **Bubble** — bottom → up (child → grandparent) — the **default**\n\nThe optional **third argument** to `addEventListener` picks the phase: `true` = capture, `false`/omitted = bubble.",
        "code": "grandParent.addEventListener(\"click\", () => {\n  console.log(\"Grand parent is clicked\");\n}, true);  // capture phase\n\nparent.addEventListener(\"click\", () => {\n  console.log(\"parent is clicked\");\n}, false); // bubble phase",
        "tryIt": "const outer = document.getElementById(\"grandParent\");\nouter?.addEventListener(\"click\", () => console.log(\"outer\"), true);"
      },
      {
        "id": "remove-listener",
        "title": "removeEventListener",
        "content": "To remove a listener you need a **named function** (not an inline arrow) so both `addEventListener` and `removeEventListener` reference the same handler.\n\nThunder's demo: a button that reacts **once**, then unhooks itself.",
        "code": "const button = document.querySelector(\"button\");\n\nfunction handle() {\n  button.textContent = \"Clicked\";\n  button.removeEventListener(\"click\", handle);\n}\n\nbutton.addEventListener(\"click\", handle);",
        "tryIt": "const b = document.querySelector(\"button\");\nfunction once() {\n  console.log(\"fires once\");\n  b.removeEventListener(\"click\", once);\n}\nb?.addEventListener(\"click\", once);"
      },
      {
        "id": "project-quote",
        "title": "Project 1 — Random Quote Generator",
        "content": "Thunder `Project1` — an array of **50 quotes**. On button click, pick a random index with `Math.floor(Math.random() * 50)` and drop the quote into the `<h2>`.",
        "code": "const button = document.querySelector(\"button\");\nconst h2 = document.querySelector(\"h2\");\n\nbutton.addEventListener(\"click\", () => {\n  const index = Math.floor(Math.random() * 50);\n  h2.textContent = quotes[index];\n});",
        "tryIt": "const quotes = [\"Believe in yourself.\", \"Hard work beats talent.\", \"Make today count.\"];\nconst i = Math.floor(Math.random() * quotes.length);\nconsole.log(quotes[i]);"
      },
      {
        "id": "project-color",
        "title": "Project 2 — Color Switcher (Delegation)",
        "content": "Thunder `Project2` — five buttons whose **ids are 0–4**. One `dblclick` listener on the parent reads `e.target.id` and uses it to index a **color array**, then paints the body background.\n\nA clean, real use of delegation + `e.target`.",
        "code": "const parent = document.getElementById(\"root\");\nconst body = document.querySelector(\"body\");\nconst color = [\"red\", \"blue\", \"orange\", \"green\", \"pink\"];\n\nparent.addEventListener(\"dblclick\", (e) => {\n  const index = e.target.id;\n  body.style.backgroundColor = color[index];\n});",
        "tryIt": "const colors = [\"red\", \"blue\", \"green\"];\nconst id = \"1\"; // pretend e.target.id\ndocument.body.style.backgroundColor = colors[id];"
      },
      {
        "id": "project-counter",
        "title": "Project 3 — Counter with a Guard",
        "content": "Thunder `Project3` — increment and decrement buttons update a `count` variable and the heading.\n\nThe decrement handler **guards** against negatives: `if (count == 0) return;` before decrementing.",
        "code": "let count = 0;\n\nButton1.addEventListener(\"click\", () => {\n  count++;\n  h1.textContent = `Counter is: ${count}`;\n});\n\nButton2.addEventListener(\"click\", () => {\n  if (count == 0) return;\n  count--;\n  h1.textContent = `Counter is: ${count}`;\n});",
        "tryIt": "let count = 0;\ncount++;\ncount++;\nif (count > 0) count--;\nconsole.log(count);"
      },
      {
        "id": "project-form",
        "title": "Project 4 — Form Adder",
        "content": "Thunder `Project4` — two number inputs and a submit button.\n\n**`e.preventDefault()`** stops the form from reloading the page. Input values are **strings**, so wrap them in `Number()` before adding.",
        "code": "form.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const number1 = Number(first.value);\n  const number2 = Number(second.value);\n  p.textContent = `Result is: ${number1 + number2}`;\n});",
        "tryIt": "const a = \"5\", b = \"7\";\nconsole.log(a + b);            // \"57\" — string concat\nconsole.log(Number(a) + Number(b)); // 12"
      },
      {
        "id": "project-textcount",
        "title": "Project 5 — Live Text & Word Counter",
        "content": "Thunder `Project5` — the **`input`** event fires on **every keystroke** in a textarea.\n\n`trim()` drops edge whitespace, `split(\" \")` breaks into words. Show character count (`.length`) and word count (`arr.length`), handling the empty case so it doesn't count 1 word for an empty box.",
        "code": "TextArea.addEventListener(\"input\", () => {\n  const totalText = TextArea.value.trim();\n  const arr = totalText.split(\" \");\n\n  TextCount.textContent = `TextCount: ${totalText.length}`;\n  if (totalText === \"\")\n    WordCount.textContent = `WordCount: 0`;\n  else\n    WordCount.textContent = `WordCount: ${arr.length}`;\n});",
        "tryIt": "const text = \"Rohit negi is here\".trim();\nconsole.log(\"chars:\", text.length);\nconsole.log(\"words:\", text.split(\" \").length);"
      },
      {
        "id": "lecture12-practice",
        "title": "Your Lecture 12 Practice",
        "content": "Build all of Thunder's [Lecture12](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture12) projects:\n1. **Eventsjs** — event object, delegation, bubbling/capture, removeEventListener\n2. **Project1** — random quote generator\n3. **Project2** — color switcher via id-indexed array + delegation\n4. **Project3** — counter with a no-negative guard\n5. **Project4** — form adder with preventDefault + Number()\n6. **Project5** — live text/word counter on the input event\n\n**Homework** (`data.js`): a **random joke generator** — 10 jokes, same random-pick pattern as Project 1. Keep the [Notion notes](https://app.notion.com/p/Lecture12-Even-and-Project-in-Javascript-38343ac5cab980aab918f7f4dc5c2fff?source=copy_link) open. Next: **more JavaScript projects**.",
        "code": "const jokes = [\n  \"Why do programmers prefer dark mode? Because light attracts bugs.\",\n  \"Why did the function break up? It had too many arguments.\"\n];\nbutton.addEventListener(\"click\", () => {\n  const i = Math.floor(Math.random() * jokes.length);\n  h2.textContent = jokes[i];\n});",
        "tryIt": "const jokes = [\"Bug joke A\", \"Bug joke B\", \"Bug joke C\"];\nconsole.log(jokes[Math.floor(Math.random() * jokes.length)]);"
      }
    ],
    "quiz": [
      {
        "question": "Inside an event handler, e.target is?",
        "options": [
          "The element the listener is attached to",
          "The exact element that triggered the event",
          "Always the document",
          "The parent element"
        ],
        "answer": 1,
        "explanation": "e.target is the element that actually fired the event — Eventsjs/first.js."
      },
      {
        "question": "Event delegation means?",
        "options": [
          "One listener on the parent handles many children via e.target",
          "A listener on every child",
          "Removing all listeners",
          "Listening only in capture phase"
        ],
        "answer": 0,
        "explanation": "Put one listener on the parent and read e.target — Project2."
      },
      {
        "question": "addEventListener(fn, true) — what does true do?",
        "options": [
          "Runs the handler only once",
          "Listens in the capture phase instead of bubble",
          "Removes the listener",
          "Prevents default"
        ],
        "answer": 1,
        "explanation": "The third argument true selects the capture phase."
      },
      {
        "question": "In a form submit handler, e.preventDefault() does what?",
        "options": [
          "Submits the form faster",
          "Stops the page from reloading",
          "Clears the inputs",
          "Validates the fields"
        ],
        "answer": 1,
        "explanation": "It cancels the default submit/reload — Project4."
      },
      {
        "question": "To removeEventListener later, the handler must be?",
        "options": [
          "An inline arrow function",
          "A named function referenced in both calls",
          "Anonymous",
          "Attached with onclick"
        ],
        "answer": 1,
        "explanation": "Both add and remove need the same function reference — Eventsjs/first.js."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=XF1_MlZ5l6M",
    "youtubeTitle": "JavaScript Event Listeners — Web Dev Simplified",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 13,
    "slug": "javascript-projects-part-2",
    "day": 13,
    "title": "JavaScript Projects Part 2",
    "subtitle": "Seven mini apps — inputs, timers, async fetch, and forms",
    "duration": "2 hrs",
    "createdOn": "17 Jul 2026",
    "status": "published",
    "topics": [
      "Reading input.value",
      "Password strength checker",
      "setInterval & setTimeout",
      "Digital clock",
      "Countdown with timestamps",
      "async / await + fetch",
      "AI chatbot",
      "new Image() & onload",
      "AI image generator",
      "encodeURIComponent",
      "Multi-field forms"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture12-Even-and-Project-in-Javascript-38343ac5cab980aab918f7f4dc5c2fff?source=copy_link",
    "githubPath": "Lecture13",
    "sections": [
      {
        "id": "love-calculator",
        "title": "Project 1 — Love Calculator",
        "content": "Thunder `project01` — two text inputs. On button click, read each `input.value.length`, run a formula, and take `% 101` to land a 0–100 percentage.\n\nKey idea: `input.value` is a **string**, and `.length` gives its character count.\n\nOpen [Lecture13](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture13) on GitHub.",
        "code": "button.addEventListener(\"click\", () => {\n  const value1 = Boys.value.length;\n  const value2 = Girls.value.length;\n  const result = (value1 * value2 * value1 * value2) % 101;\n  h2.textContent = `Result is: ${result}%`;\n});",
        "tryIt": "const a = \"Rohit\".length;\nconst b = \"Priya\".length;\nconsole.log((a * b * a * b) % 101);"
      },
      {
        "id": "password-strength",
        "title": "Project 2 — Password Strength Checker",
        "content": "Thunder `Project02` — on every keystroke (`input` event), walk each character and flag whether it is a **capital**, **small**, **number**, or **special** char (comparing char codes with `>=`/`<=`).\n\nStrong = length ≥ 8 **and** all four flags true.",
        "code": "input.addEventListener(\"input\", () => {\n  const password = input.value;\n  let hasCapital = false, hasSmall = false, hasSpecial = false, hasNumber = false;\n\n  for (let i = 0; i < password.length; i++) {\n    const ch = password[i];\n    if (ch >= \"A\" && ch <= \"Z\") hasCapital = true;\n    else if (ch >= \"a\" && ch <= \"z\") hasSmall = true;\n    else if (ch >= \"0\" && ch <= \"9\") hasNumber = true;\n    else hasSpecial = true;\n  }\n\n  const strong = password.length >= 8 && hasCapital && hasSmall && hasNumber && hasSpecial;\n  h2.textContent = strong ? \"Strong\" : \"week\";\n  h2.style.color = strong ? \"green\" : \"red\";\n});",
        "tryIt": "const p = \"Rohit@456\";\nconsole.log(\"length ok:\", p.length >= 8);"
      },
      {
        "id": "digital-clock",
        "title": "Project 3 — Digital Clock (setInterval)",
        "content": "Thunder `Project03` — **setInterval(callback, ms)** runs the callback repeatedly. Every 1000 ms, read a fresh `new Date()` and print `toLocaleString()`.\n\nContrast: **setTimeout** runs the callback **once** after the delay.",
        "code": "const h1 = document.querySelector(\"h1\");\n\nsetInterval(() => {\n  const time = new Date();\n  h1.textContent = time.toLocaleString();\n}, 1000);",
        "tryIt": "setTimeout(() => console.log(\"fires once after 1s\"), 1000);\nconsole.log(new Date().toLocaleString());"
      },
      {
        "id": "countdown",
        "title": "Project 4 — Olympic 2028 Countdown",
        "content": "Thunder `Project04` — get the target date's **timestamp** with `new Date(2028, 6, 14).getTime()`, then every second subtract `Date.now()` and break the remaining milliseconds into **days, hours, minutes, seconds** with division and modulo.",
        "code": "const olympicTimestamp = new Date(2028, 6, 14).getTime();\n\nsetInterval(() => {\n  let remaining = olympicTimestamp - Date.now();\n\n  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));\n  remaining %= 1000 * 60 * 60 * 24;\n  const hours = Math.floor(remaining / (1000 * 60 * 60));\n  remaining %= 1000 * 60 * 60;\n  const minutes = Math.floor(remaining / (1000 * 60));\n  remaining %= 1000 * 60;\n  const seconds = Math.floor(remaining / 1000);\n\n  h2.textContent = `${days}:Days ${hours}:Hours ${minutes}:Minutes ${seconds}:Seconds`;\n}, 1000);",
        "tryIt": "const target = new Date(2028, 6, 14).getTime();\nconst days = Math.floor((target - Date.now()) / (1000 * 60 * 60 * 24));\nconsole.log(days, \"days to go\");"
      },
      {
        "id": "ai-chatbot",
        "title": "Project 5 — AI Chatbot (async/await + fetch)",
        "content": "Thunder `Projectchat` — the first **real network** project. An `async` function `await`s `fetch(url)`, then `await response.text()` for the reply.\n\nGood UX built in: show an **\"AI is thinking…\"** loading bubble, **disable** the send button while waiting, remove the bubble when the reply arrives, and auto-scroll with `scrollTop = scrollHeight`.",
        "code": "async function sendMessage() {\n  const message = userInput.value.trim();\n  if (message === \"\") return;\n\n  addMessage(message, \"user\");\n  sendButton.disabled = true;\n  const loading = addMessage(\"AI is thinking...\", \"ai loading\");\n\n  const url = \"https://text.pollinations.ai/\" + encodeURIComponent(message);\n  const response = await fetch(url);\n  const aiReply = await response.text();\n\n  loading.remove();\n  addMessage(aiReply, \"ai\");\n  sendButton.disabled = false;\n}",
        "tryIt": "async function ask(q) {\n  const res = await fetch(\"https://text.pollinations.ai/\" + encodeURIComponent(q));\n  console.log(await res.text());\n}\n// ask(\"hi how are you\");"
      },
      {
        "id": "ai-image",
        "title": "Project 6 — AI Image Generator",
        "content": "Thunder `Projectimg` — first-principles insight: an `<img>` `src` can point to an **AI endpoint** that generates the image on the fly.\n\nBuild the image **in memory** with `new Image()`, wait for **`onload`** before attaching it (so the user never sees a half-loaded image), and handle **`onerror`**. `encodeURIComponent` makes the prompt URL-safe.",
        "code": "const img = new Image();\n\nimg.onload = () => {\n  imageArea.innerHTML = \"\";\n  imageArea.appendChild(img);\n  generateBtn.disabled = false;\n};\nimg.onerror = () => {\n  imageArea.innerHTML = \"Something went wrong. Try again.\";\n};\n\nimg.src = \"https://image.pollinations.ai/prompt/\" + encodeURIComponent(prompt);",
        "tryIt": "const img = new Image();\nimg.onload = () => console.log(\"loaded!\", img.width);\nimg.src = \"https://image.pollinations.ai/prompt/\" + encodeURIComponent(\"a cat\");"
      },
      {
        "id": "astrology-form",
        "title": "Project 7 — Astrology Insights (Forms)",
        "content": "Thunder `projectastro` — a **multi-field form**. On submit (`e.preventDefault()`), read name, surname, day, month, year, then **index arrays** to build a personalized reading:\n\n- Zodiac by `month - 1`\n- Compliment by `day - 1`\n- Prediction by `(name.length * surname.length) % 20`\n\nSame form pattern as before, scaled to five inputs and several data arrays.",
        "code": "form.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const name = document.getElementById(\"name\").value;\n  const surname = document.getElementById(\"surname\").value;\n  const day = parseInt(document.getElementById(\"day\").value);\n  const month = parseInt(document.getElementById(\"month\").value);\n  const year = parseInt(document.getElementById(\"year\").value);\n\n  const text = `Hi ${name} ${surname}, Your Zodiac sign is ${zodiacSigns[month - 1]}.\n  ${compliments[day - 1]}. ${predictions[(name.length * surname.length) % 20]}`;\n  document.getElementById(\"result\").textContent = text;\n});",
        "tryIt": "const zodiac = [\"Capricorn\", \"Aquarius\", \"Pisces\", \"Aries\"];\nconst month = 3;\nconsole.log(zodiac[month - 1]);"
      },
      {
        "id": "lecture13-practice",
        "title": "Your Lecture 13 Practice",
        "content": "Build all seven from Thunder's [Lecture13](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture13):\n1. **project01** — love calculator from input lengths\n2. **Project02** — password strength on the input event\n3. **Project03** — digital clock with setInterval\n4. **Project04** — Olympic countdown from timestamps\n5. **Projectchat** — AI chatbot with async/await + fetch\n6. **Projectimg** — AI image generator with new Image() + onload\n7. **projectastro** — form-driven astrology reading\n\nThe async projects use the free **Pollinations** API (no key). Next: **capstone JavaScript projects** in Lecture 14.",
        "code": "// The universal project shape:\nelement.addEventListener(\"click\", async () => {\n  const res = await fetch(url);\n  const data = await res.text();\n  output.textContent = data;\n});",
        "tryIt": "let n = 5;\nconst id = setInterval(() => {\n  console.log(n);\n  if (--n < 0) clearInterval(id);\n}, 1000);"
      }
    ],
    "quiz": [
      {
        "question": "setInterval(fn, 1000) does what?",
        "options": [
          "Runs fn once after 1 second",
          "Runs fn every 1000 milliseconds",
          "Runs fn 1000 times instantly",
          "Delays the page by 1 second"
        ],
        "answer": 1,
        "explanation": "setInterval repeats every N ms; setTimeout runs once — Project03/04."
      },
      {
        "question": "In the AI chatbot, `await fetch(url)` is used because?",
        "options": [
          "fetch is synchronous",
          "the network response takes time, so we await the Promise",
          "await makes it faster",
          "fetch returns text directly"
        ],
        "answer": 1,
        "explanation": "fetch returns a Promise; await pauses until the response arrives — Projectchat."
      },
      {
        "question": "Why build the image with new Image() and wait for onload?",
        "options": [
          "It's required by the API",
          "To show it only once fully loaded, avoiding a broken half-image",
          "onload makes it download faster",
          "So it never errors"
        ],
        "answer": 1,
        "explanation": "Preload in memory, attach on onload for clean UX — Projectimg."
      },
      {
        "question": "encodeURIComponent is used to?",
        "options": [
          "Encrypt the message",
          "Make spaces and special characters safe in a URL",
          "Shorten the URL",
          "Convert to JSON"
        ],
        "answer": 1,
        "explanation": "It escapes unsafe characters when building the API URL — Projectchat/Projectimg."
      },
      {
        "question": "In the astrology form, e.preventDefault() is called to?",
        "options": [
          "Validate the inputs",
          "Stop the form from reloading the page on submit",
          "Clear the form",
          "Submit faster"
        ],
        "answer": 1,
        "explanation": "It cancels the default submit/reload so JS can handle it — projectastro."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=2ml4x0rO1PQ",
    "youtubeTitle": "5 Mini JavaScript Projects for Beginners — Ania Kubów",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 14,
    "slug": "javascript-projects",
    "day": 14,
    "title": "JavaScript Projects",
    "subtitle": "Capstone apps — a quiz, Tic Tac Toe, and a weather app",
    "duration": "2 hrs",
    "createdOn": "18 Jul 2026",
    "status": "published",
    "topics": [
      "Answer-key grading",
      "Reading radio inputs",
      "Score & visual feedback",
      "Game state in an array",
      "Win detection (8 lines)",
      "Turn toggling",
      "Guard clauses",
      "Draw detection & reset",
      "Weather via fetch",
      "Capstone workflow"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture14-Project-in-Javascript-38443ac5cab9809ba1e9fbcf3c776723?source=copy_link",
    "githubPath": "Lecture14",
    "sections": [
      {
        "id": "quiz-answer-key",
        "title": "Project 1 — Cricket Quiz (Answer Key)",
        "content": "Thunder `Project01` — a 10-question quiz built from **radio inputs** grouped by `name=\"q1\"`, `name=\"q2\"`, etc.\n\nThe grading logic starts with an **answers object** — the source of truth for what's correct.\n\nOpen [Lecture14](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture14) on GitHub.",
        "code": "const answers = {\n  q1:  \"Sachin Tendulkar\",\n  q2:  \"11\",\n  q3:  \"West Indies\",\n  q4:  \"50\",\n  q5:  \"Brian Lara\",\n  q6:  \"6\",\n  q7:  \"MS Dhoni\",\n  q8:  \"Leg Before Wicket\",\n  q9:  \"Muttiah Muralitharan\",\n  q10: \"6\"\n};",
        "tryIt": "const answers = { q1: \"11\", q2: \"6\" };\nconsole.log(Object.keys(answers).length, \"questions\");"
      },
      {
        "id": "quiz-grading",
        "title": "Project 1 — Grade & Give Feedback",
        "content": "On submit, `preventDefault()`, then loop the answer key. For each question read the **checked radio** (`input[name=q]:checked`) and compare it to the key.\n\nCount the score, and use CSS classes (`correct`, `wrong`, `missed`) to colour each option so the user sees exactly where they went wrong.",
        "code": "quizForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  let score = 0;\n\n  for (const q in answers) {\n    const chosen = document.querySelector(`input[name=${q}]:checked`);\n    if (chosen && chosen.value === answers[q]) {\n      score++;\n      chosen.parentElement.classList.add(\"correct\");\n    } else if (chosen) {\n      chosen.parentElement.classList.add(\"wrong\");\n    }\n  }\n\n  result.style.display = \"block\";\n  result.textContent = `You scored ${score} / 10`;\n});",
        "tryIt": "const answers = { q1: \"11\", q2: \"6\" };\nconst picked = { q1: \"11\", q2: \"4\" };\nlet score = 0;\nfor (const q in answers) if (picked[q] === answers[q]) score++;\nconsole.log(score);"
      },
      {
        "id": "ttt-state",
        "title": "Project 2 — Tic Tac Toe: State",
        "content": "Thunder `Project02` — the golden rule: **state lives in JavaScript, the DOM just reflects it**.\n\nA 9-slot `gridBox` array is the single source of truth. `totalInsert` counts moves, `winnerDecided` guards the game, and `turn` tracks whose move it is.",
        "code": "const gridBox = [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"];\nlet totalInsert = 0;\nlet winnerDecided = false;\nlet turn = \"X\";\n\n// row: 012, 345, 678\n// col: 036, 147, 258\n// diag: 048, 246",
        "tryIt": "const board = new Array(9).fill(\"\");\nboard[4] = \"X\";\nconsole.log(board);"
      },
      {
        "id": "ttt-winner",
        "title": "Project 2 — Detecting a Winner",
        "content": "`checkWinner(player)` tests all **8 winning lines** — 3 rows, 3 columns, 2 diagonals — returning true if the player fills any one of them.",
        "code": "function checkWinner(player) {\n  if (gridBox[0] == player && gridBox[1] == player && gridBox[2] == player) return true;\n  else if (gridBox[3] == player && gridBox[4] == player && gridBox[5] == player) return true;\n  else if (gridBox[6] == player && gridBox[7] == player && gridBox[8] == player) return true;\n  else if (gridBox[0] == player && gridBox[3] == player && gridBox[6] == player) return true;\n  else if (gridBox[1] == player && gridBox[4] == player && gridBox[7] == player) return true;\n  else if (gridBox[2] == player && gridBox[5] == player && gridBox[8] == player) return true;\n  else if (gridBox[0] == player && gridBox[4] == player && gridBox[8] == player) return true;\n  else if (gridBox[2] == player && gridBox[4] == player && gridBox[6] == player) return true;\n  return false;\n}",
        "tryIt": "const g = [\"X\",\"X\",\"X\",\"\",\"\",\"\",\"\",\"\",\"\"];\nconst topRow = g[0] === \"X\" && g[1] === \"X\" && g[2] === \"X\";\nconsole.log(topRow);"
      },
      {
        "id": "ttt-click",
        "title": "Project 2 — Move, Guard, Toggle",
        "content": "One **delegated** click listener on the board handles all 9 cells via `e.target.id`.\n\n**Guard clauses** ignore the click if the game is already won, drawn, or that cell is filled. Otherwise: place the mark, update state, check win, check draw (`totalInsert == 9`), then **toggle the turn**.",
        "code": "board.addEventListener(\"click\", (e) => {\n  if (winnerDecided || totalInsert == 9 || gridBox[e.target.id] != \"\") return;\n\n  const box = e.target;\n  box.textContent = turn;\n  gridBox[box.id] = turn;\n  totalInsert++;\n\n  if (checkWinner(turn)) {\n    stat.textContent = `Player ${turn} won the game`;\n    winnerDecided = true;\n    return;\n  }\n  if (totalInsert == 9) {\n    stat.textContent = `Game is Draw`;\n    return;\n  }\n\n  turn = turn == \"X\" ? \"O\" : \"X\";\n  stat.textContent = `Player ${turn}'s Turn`;\n});",
        "tryIt": "let turn = \"X\";\nturn = turn == \"X\" ? \"O\" : \"X\";\nconsole.log(turn);"
      },
      {
        "id": "ttt-reset",
        "title": "Project 2 — Reset the Game",
        "content": "Reset must clear **both** the state and the UI: blank every cell, empty the `gridBox`, and reset the counters, flag, and status text.",
        "code": "resetBtn.addEventListener(\"click\", () => {\n  for (let i = 0; i < 9; i++) {\n    document.getElementById(i).textContent = \"\";\n    gridBox[i] = \"\";\n  }\n  totalInsert = 0;\n  winnerDecided = false;\n  stat.textContent = \"Player X's turn\";\n});",
        "tryIt": "let gridBox = [\"X\",\"O\",\"X\"];\ngridBox = gridBox.map(() => \"\");\nconsole.log(gridBox);"
      },
      {
        "id": "weather-app",
        "title": "Project 3 — Weather App (fetch)",
        "content": "Thunder `Project03` — a city input and a button. On click, read the city, show a **loading** state, `fetch` a weather API, and render the temperature and condition — or an **error** state if the city isn't found.\n\nThis ties DOM + events + async data into one clean flow.",
        "code": "weatherButton.addEventListener(\"click\", async () => {\n  const city = cityInput.value.trim();\n  if (!city) return;\n\n  weatherBox.innerHTML = '<p class=\"loading\">Loading...</p>';\n  try {\n    const res = await fetch(API_URL + encodeURIComponent(city));\n    const data = await res.json();\n    weatherBox.innerHTML = `\n      <p class=\"city-name\">${data.name}</p>\n      <p class=\"temperature\">${data.temp}\\u00b0</p>\n      <p class=\"condition\">${data.condition}</p>`;\n  } catch {\n    weatherBox.innerHTML = '<p class=\"error\">City not found</p>';\n  }\n});",
        "tryIt": "async function getWeather(city) {\n  console.log(\"Fetching weather for\", city);\n  // const res = await fetch(url); const data = await res.json();\n}\ngetWeather(\"Delhi\");"
      },
      {
        "id": "lecture14-practice",
        "title": "Your Lecture 14 Practice",
        "content": "Build the capstones from Thunder's [Lecture14](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture14):\n1. **Project01** — Cricket Quiz: grade radio answers against the key, show the score\n2. **Project02** — Tic Tac Toe: array state, checkWinner, guards, draw, reset\n3. **Project03** — Weather App: fetch a city's weather and render it (add loading/error states)\n\nTic Tac Toe is the standout — it's the classic interview project because it forces clean **state management**. Next: **JSON vs JS objects** in Lecture 15.",
        "code": "// Tic Tac Toe in one idea: DOM mirrors the array\nfunction render(gridBox) {\n  gridBox.forEach((mark, i) => {\n    document.getElementById(i).textContent = mark;\n  });\n}",
        "tryIt": "const gridBox = [\"X\",\"\",\"O\",\"\",\"X\",\"\",\"\",\"\",\"O\"];\nconsole.log(\"moves so far:\", gridBox.filter(Boolean).length);"
      }
    ],
    "quiz": [
      {
        "question": "In the quiz, where is the correct answer for each question stored?",
        "options": [
          "In the HTML radio values",
          "In an answers object keyed by question name",
          "In localStorage",
          "In the CSS classes"
        ],
        "answer": 1,
        "explanation": "An answers object (q1..q10) is the grading source of truth — Project01."
      },
      {
        "question": "In Tic Tac Toe, the real source of truth for the board is?",
        "options": [
          "The DOM cells",
          "The gridBox array in JavaScript",
          "The status text",
          "localStorage"
        ],
        "answer": 1,
        "explanation": "State lives in the array; the DOM just mirrors it — Project02."
      },
      {
        "question": "How many winning lines does checkWinner test?",
        "options": [
          "3",
          "6",
          "8",
          "9"
        ],
        "answer": 2,
        "explanation": "3 rows + 3 columns + 2 diagonals = 8 — Project02."
      },
      {
        "question": "What ends the game in a draw?",
        "options": [
          "winnerDecided is true",
          "totalInsert == 9 with no winner",
          "The reset button",
          "A filled diagonal"
        ],
        "answer": 1,
        "explanation": "All 9 cells filled and nobody won = draw — Project02."
      },
      {
        "question": "The Weather App uses fetch inside an async function so that it can?",
        "options": [
          "Run faster than normal",
          "await the network response before rendering",
          "Avoid using the DOM",
          "Skip error handling"
        ],
        "answer": 1,
        "explanation": "await pauses for the API response, then renders the result — Project03."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=2ml4x0rO1PQ",
    "youtubeTitle": "5 Mini JavaScript Projects for Beginners — Ania Kubów",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 15,
    "slug": "json-vs-js-object",
    "day": 15,
    "title": "JSON vs JS Object",
    "subtitle": "Serialization, the fetch API, and rendering real API data",
    "duration": "2 hrs",
    "createdOn": "19 Jul 2026",
    "status": "published",
    "topics": [
      "JSON is a string",
      "Quoted keys only",
      "Allowed JSON types",
      "JSON.stringify",
      "JSON.parse",
      "fetch returns a Promise",
      "async / await flow",
      "response.json()",
      "GitHub users API",
      "Reading nested JSON",
      "Weather API project"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture15-JSON-vs-JS-Object-38843ac5cab9801e9c30f80559f919a0?source=copy_link",
    "githubPath": "Lecture15",
    "sections": [
      {
        "id": "json-vs-object",
        "title": "JSON vs JS Object",
        "content": "Thunder `first.js` — they **look alike**, but:\n\n- A **JS object** is live in memory: `{ name: \"Rohit\", age: 20 }` — keys unquoted, values can be anything.\n- **JSON** is a **string** (note the backticks): `` `{ \"name\": \"Rohit\", \"age\": 20 }` `` — a text format for **exchanging** data between systems.\n\nJSON **keys must be double-quoted strings**.\n\nOpen [Lecture15](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture15) on GitHub.",
        "code": "const jsObject = {\n  name: \"Rohit\",\n  age: 20,\n  login: true\n};\n\nconst jSon = `{\n  \"name\": \"Rohit\",\n  \"age\": 20,\n  \"login\": true,\n  \"arr\": [20, 11, 70]\n}`; // this is a STRING",
        "tryIt": "const obj = { day: 15 };\nconsole.log(typeof obj);              // object\nconsole.log(typeof JSON.stringify(obj)); // string"
      },
      {
        "id": "json-types",
        "title": "What JSON Can Hold",
        "content": "JSON supports only **six value types**: string, number, boolean, null, object, array.\n\nThings that are **not** valid JSON quietly disappear when you stringify: `undefined` values and **functions** are dropped.",
        "code": "const jsObject = {\n  name: \"Rohit\",\n  age: 20,\n  logIn: true,\n  a: undefined,      // dropped\n  b: function () {}  // dropped\n};\n\nconsole.log(JSON.stringify(jsObject));\n// {\"name\":\"Rohit\",\"age\":20,\"logIn\":true}",
        "tryIt": "console.log(JSON.stringify({ x: undefined, y: 5 }));\n// {\"y\":5}"
      },
      {
        "id": "stringify-parse",
        "title": "JSON.stringify & JSON.parse",
        "content": "Two functions convert between the worlds:\n\n- **JSON.stringify(obj)** — JS object → JSON string (to send or store)\n- **JSON.parse(str)** — JSON string → JS object (to read with dot notation)",
        "code": "const jsObject = { name: \"Rohit\", age: 20 };\n\n// jsObject --> JSON\nconst a = JSON.stringify(jsObject);\nconsole.log(a); // '{\"name\":\"Rohit\",\"age\":20}'\n\n// JSON --> jsObject\nconst b = JSON.parse(a);\nconsole.log(b.name); // \"Rohit\"",
        "tryIt": "const user = { name: \"Sumit\", day: 15 };\nconst str = JSON.stringify(user);\nconsole.log(str);\nconsole.log(JSON.parse(str).name);"
      },
      {
        "id": "async-flow",
        "title": "fetch, Promises & async Flow",
        "content": "**fetch** is asynchronous — it returns a **Promise** that is `Promise<pending>` until the server responds.\n\nBecause it doesn't block, the code **after** the call runs first. Here `\"Start\"` and `\"End\"` log immediately; the fetched data arrives later.",
        "code": "console.log(\"Start\");\n\nasync function github() {\n  const response = await fetch(\"https://api.github.com/users?per_page=20\");\n  const data = await response.json();\n  console.log(data);\n}\ngithub();\n\nconsole.log(\"End\");\n// Order: Start, End, [data]",
        "tryIt": "console.log(1);\nsetTimeout(() => console.log(2), 0);\nconsole.log(3);\n// Order: 1, 3, 2"
      },
      {
        "id": "response-json",
        "title": "response.json() — Parsing the Body",
        "content": "An API sends its body as a **JSON string**. `await response.json()` reads and **parses** it into a usable JS object in one step (it's async, so it needs `await` too).",
        "code": "async function getUser() {\n  const res = await fetch(\"https://api.github.com/users/octocat\");\n  const data = await res.json(); // JSON string -> object\n  console.log(data.login);       // \"octocat\"\n}\ngetUser();",
        "tryIt": "// .json() returns a Promise, so it must be awaited\nconsole.log(\"res.json() -> Promise -> object\");"
      },
      {
        "id": "project-github",
        "title": "Project 1 — GitHub Users Browser",
        "content": "Thunder `Project01` — fetch the **GitHub users API** and render a card grid.\n\nLoop the parsed array, and for each `user` build an `<img>` from `user.avatar_url` and a `<p>` from `user.login`, then append. A number input controls **how many** users via `per_page`, re-fetching live on input.",
        "code": "async function github(number = 20) {\n  const response = await fetch(`https://api.github.com/users?per_page=${number}`);\n  const data = await response.json();\n\n  const root = document.getElementById(\"root\");\n  root.textContent = \"\";\n\n  for (const user of data) {\n    const container = document.createElement(\"div\");\n    const img = document.createElement(\"img\");\n    img.src = user.avatar_url;\n    const name = document.createElement(\"p\");\n    name.textContent = user.login;\n    container.append(img, name);\n    root.append(container);\n  }\n}\n\ninput.addEventListener(\"input\", () => github(Number(input.value)));",
        "tryIt": "async function count() {\n  const res = await fetch(\"https://api.github.com/users?per_page=5\");\n  const data = await res.json();\n  console.log(data.length, \"users\");\n}\ncount();"
      },
      {
        "id": "project-weather",
        "title": "Project 2 — Weather App (Nested JSON)",
        "content": "Thunder `Project02` — fetch **WeatherAPI** for a city, then read **nested JSON**: `data.current.temp_c` and `data.current.condition.text`.\n\nThis shows why JSON matters — the response is a deep object you drill into with dot notation. (Use your own API key, and prefer `https`.)",
        "code": "search.addEventListener(\"click\", async () => {\n  const city = input.value;\n  if (city === \"\") return;\n\n  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;\n  const response = await fetch(url);\n  const data = await response.json();\n\n  p.textContent =\n    `Temperature of ${city} is ${data.current.temp_c} ` +\n    `and forecast is ${data.current.condition.text}`;\n});",
        "tryIt": "const data = { current: { temp_c: 28, condition: { text: \"Sunny\" } } };\nconsole.log(data.current.temp_c, data.current.condition.text);"
      },
      {
        "id": "lecture15-practice",
        "title": "Your Lecture 15 Practice",
        "content": "Work through Thunder's [Lecture15](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture15):\n1. **first.js** — stringify/parse a JS object; watch undefined & functions vanish\n2. **Project01** — GitHub users grid, with a live per_page count input\n3. **Project02** — weather app reading nested JSON from WeatherAPI\n\nRemember the mental model: **object in memory ↔ JSON string on the wire**, bridged by `JSON.stringify` / `JSON.parse` (and `response.json()` for you). Next: **memory management & how JS runs** in Lecture 16.",
        "code": "const apiData = '{\"name\":\"Rohit\",\"repos\":[\"a\",\"b\"]}'; // string from an API\nconst obj = JSON.parse(apiData);\nconsole.log(obj.name, obj.repos.length);",
        "tryIt": "const users = [{ login: \"a\" }, { login: \"b\" }];\nusers.forEach(u => console.log(u.login));"
      }
    ],
    "quiz": [
      {
        "question": "The core difference between JSON and a JS object?",
        "options": [
          "They are identical",
          "JSON is a string format; a JS object is live in memory",
          "JSON can hold functions",
          "JS objects need quoted keys"
        ],
        "answer": 1,
        "explanation": "JSON is text for data exchange; objects live in memory — first.js."
      },
      {
        "question": "Which is NOT valid in JSON?",
        "options": [
          "A string",
          "A number",
          "A function",
          "An array"
        ],
        "answer": 2,
        "explanation": "JSON allows string, number, boolean, null, object, array — no functions/undefined."
      },
      {
        "question": "JSON.parse does what?",
        "options": [
          "Object → JSON string",
          "JSON string → JS object",
          "Fetches an API",
          "Removes undefined keys"
        ],
        "answer": 1,
        "explanation": "parse: string → object; stringify: object → string — first.js."
      },
      {
        "question": "Why does 'End' log before the fetched data?",
        "options": [
          "fetch is synchronous",
          "fetch is async and non-blocking, so later code runs first",
          "console.log is slow",
          "The data failed to load"
        ],
        "answer": 1,
        "explanation": "fetch returns a pending Promise; the rest runs, data arrives later — first.js."
      },
      {
        "question": "In the weather app, data.current.condition.text works because?",
        "options": [
          "It's still a JSON string",
          "response.json() parsed it into a nested JS object",
          "WeatherAPI returns plain text",
          "condition is a function"
        ],
        "answer": 1,
        "explanation": "Once parsed, you drill into the nested object with dot notation — Project02."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=Oive66jrwBs",
    "youtubeTitle": "Fetch API Introduction — Traversy Media",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 16,
    "slug": "memory-management",
    "day": 16,
    "title": "Memory Management & How JS Works",
    "subtitle": "Execution context, the two phases, hoisting, TDZ, scope & the call stack",
    "duration": "2 hrs",
    "createdOn": "20 Jul 2026",
    "status": "published",
    "topics": [
      "Execution context",
      "Memory allocation phase",
      "Execution phase",
      "var hoisting (undefined)",
      "Function hoisting",
      "Temporal Dead Zone",
      "let/const in the TDZ",
      "Function expressions & TDZ",
      "Function scope",
      "Call stack",
      "Stack overflow"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture16-Memory-management-and-How-JS-code-works-38b43ac5cab980af918bf13d86ec5d6c?source=copy_link",
    "githubPath": "Lecture16",
    "sections": [
      {
        "id": "execution-context",
        "title": "The Execution Context",
        "content": "Every JS program runs inside an **execution context** — think of it as a box with two compartments:\n\n- **Memory** — where variables and functions are stored\n- **Code** — where statements run, one line at a time\n\nJS processes this context in **two phases**: first memory allocation, then execution.\n\nOpen [Lecture16](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture16) on GitHub.",
        "code": "// Global Execution Context\n// ┌─ Memory:  variables + functions\n// └─ Code:    runs line by line\n\nlet a = 10;\nconst b = 20;\nconsole.log(a + b);",
        "tryIt": "let a = 10;\nconst b = 20;\nconsole.log(a + b);"
      },
      {
        "id": "two-phases",
        "title": "Phase 1 — Memory Allocation",
        "content": "Thunder `first.js` — before any line runs, JS **scans** and sets up memory (this is **hoisting**):\n\n- `var` → **undefined**\n- **function declarations** → the whole function\n- `let` / `const` → **`<uninitialized>`** (the Temporal Dead Zone)\n\nSo `a`, `b`, and the `addNumber` expression start as `<uninitialized>` in the TDZ.",
        "code": "// Phase 1 (memory):\n// a         = <uninitialized>  (TDZ)\n// b         = <uninitialized>  (TDZ)\n// addNumber = <uninitialized>  (TDZ)\n// sum1      = <uninitialized>  (TDZ)",
        "tryIt": "// let/const are set up but unusable until their line\n// var would be `undefined` here instead\nconsole.log(\"phase 1 = hoisting\");"
      },
      {
        "id": "execution-phase",
        "title": "Phase 2 — Execution",
        "content": "Now JS runs top to bottom, filling in the real values and running functions. The TDZ placeholders are replaced as each declaration line executes.",
        "code": "let a = 10;\nconst b = 20;\n\nconst addNumber = function (num1, num2) {\n  return num1 + num2;\n};\n\nconst sum1 = addNumber(a, b);\nconsole.log(sum1); // 30\n\n// Phase 2 (memory now): a=10, b=20, sum1=30",
        "tryIt": "const add = (x, y) => x + y;\nconsole.log(add(10, 20));"
      },
      {
        "id": "var-hoisting",
        "title": "var & Function Hoisting",
        "content": "Thunder `index.js` — because `var` is hoisted as **undefined**, reading it **before** its line is *not* an error — it prints `undefined`.\n\nAnd because **function declarations are fully hoisted**, you can **call `addNumber` before** it is written.",
        "code": "console.log(a, b); // undefined undefined (not an error!)\n\nvar a = 10;\nvar b = 20;\n\nconst sum1 = addNumber(a, b); // works — fn hoisted\n\nfunction addNumber(num1, num2) {\n  return num1 + num2;\n}\n\nconsole.log(sum1); // 30",
        "tryIt": "console.log(x); // undefined\nvar x = 5;\nconsole.log(hi()); // \"hi\" — declaration hoisted\nfunction hi() { return \"hi\"; }"
      },
      {
        "id": "tdz",
        "title": "The Temporal Dead Zone",
        "content": "`let` and `const` are **hoisted too**, but stay `<uninitialized>` until their declaration line — the window between is the **Temporal Dead Zone**.\n\nTouching them in the TDZ throws a **ReferenceError** (unlike `var`). A **function expression** stored in a `const` is in the TDZ as well, so it can't be called early.",
        "code": "// console.log(x); // ReferenceError — TDZ\nlet x = 10;      // TDZ ends here\n\n// console.log(addNumber(1, 2)); // ReferenceError\nconst addNumber = function (a, b) {\n  return a + b;\n};",
        "tryIt": "try {\n  console.log(y);\n  let y = 1;\n} catch (e) {\n  console.log(e.name); // ReferenceError\n}"
      },
      {
        "id": "scope-stack",
        "title": "Function Scope & the Call Stack",
        "content": "Thunder `third.js` — a `var` declared **inside** a function is **function-scoped**: it doesn't exist outside, so accessing it throws.\n\nEach function call gets its **own execution context**, pushed onto the **call stack** when called and popped when it returns. Endless recursion with no base case overflows the stack.",
        "code": "function greet() {\n  var a = 20;\n}\ngreet();\n// console.log(a); // ReferenceError — a is not in global scope\n\nfunction a() { b(); }\nfunction b() { console.log(\"in b\"); }\na(); // stack: a pushed → b pushed → b pops → a pops",
        "tryIt": "function outer() {\n  var secret = 42;\n  return secret;\n}\nconsole.log(outer());\n// console.log(secret); // ReferenceError"
      },
      {
        "id": "lecture16-practice",
        "title": "Your Lecture 16 Practice",
        "content": "Trace Thunder's [Lecture16](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture16) files on paper first, then run them:\n1. **first.js** — write out phase 1 (TDZ) vs phase 2 for let/const + a function expression\n2. **index.js** — predict the two console.logs: why is the first `undefined undefined`, and why does calling `addNumber` early work?\n3. **third.js** — confirm a `var` inside a function is invisible outside it\n\nMental model: **memory phase (hoisting) → execution phase**. `var` = undefined, functions = full, `let`/`const` = TDZ. Next: **prototypes, classes & the event loop** in Lecture 17.",
        "code": "// Predict the output order:\nconsole.log(typeof foo); // \"function\"\nconsole.log(typeof bar); // \"undefined\"\nfunction foo() {}\nvar bar = function () {};",
        "tryIt": "console.log(a); // undefined\nvar a = 10;\nconsole.log(a); // 10"
      }
    ],
    "quiz": [
      {
        "question": "JS runs your code in which two phases?",
        "options": [
          "Compile then run",
          "Memory allocation (hoisting) then execution",
          "Parse then minify",
          "Fetch then render"
        ],
        "answer": 1,
        "explanation": "Phase 1 sets up memory (hoisting); phase 2 executes line by line — first.js."
      },
      {
        "question": "console.log(a) before `var a = 10` prints?",
        "options": [
          "ReferenceError",
          "undefined",
          "10",
          "null"
        ],
        "answer": 1,
        "explanation": "var is hoisted and initialized to undefined — index.js."
      },
      {
        "question": "Why can you call a function declaration before it appears?",
        "options": [
          "Functions are slow",
          "Function declarations are fully hoisted into memory",
          "It actually throws an error",
          "Only arrow functions can do this"
        ],
        "answer": 1,
        "explanation": "The whole function is stored in phase 1 — index.js."
      },
      {
        "question": "Accessing a let/const before its line throws because?",
        "options": [
          "It is undefined",
          "It sits in the Temporal Dead Zone until initialized",
          "let is not hoisted at all",
          "const cannot be logged"
        ],
        "answer": 1,
        "explanation": "let/const are hoisted but uninitialized — the TDZ — first.js."
      },
      {
        "question": "A `var` declared inside a function is?",
        "options": [
          "Global",
          "Function-scoped — invisible outside the function",
          "Block-scoped only",
          "Stored in the DOM"
        ],
        "answer": 1,
        "explanation": "var is function-scoped; it doesn't exist outside — third.js."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=EvfRXyKa_GI",
    "youtubeTitle": "Learn JavaScript Hoisting — Web Dev Simplified",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course",
    "youtubeSupplementUrl": "https://www.youtube.com/watch?v=8aGhZQkoFbQ",
    "youtubeSupplementTitle": "What the heck is the event loop anyway? — Philip Roberts · JSConf"
  },
  {
    "id": 17,
    "slug": "prototypes-classes-event-loop",
    "day": 17,
    "title": "Prototypes, Classes & Event Loop",
    "subtitle": "The prototype chain, ES6 classes, inheritance & how async runs",
    "duration": "2 hrs",
    "createdOn": "21 Jul 2026",
    "status": "published",
    "topics": [
      "Prototype chain",
      "__proto__",
      "Inherited built-ins",
      "Why classes",
      "class & constructor",
      "the new keyword",
      "Shared methods",
      "extends & super",
      "Single-threaded JS",
      "Event loop & queue",
      "setInterval"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture-17-Prototype-classes-and-Eventloop-in-JS-38c43ac5cab9805f9b60eaf160aa057e?source=copy_link",
    "githubPath": "Lecture17",
    "sections": [
      {
        "id": "prototype-chain",
        "title": "The Prototype Chain",
        "content": "Thunder `index.js` — every object has a hidden link, **`__proto__`**, to another object. When a key isn't found on an object, JS walks **up the prototype chain** to find it.\n\nSet `obj2.__proto__ = obj1` and suddenly `obj2` can call `obj1.greet()` — even though it never defined it.\n\nOpen [Lecture17](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture17) on GitHub.",
        "code": "const obj1 = {\n  name: \"Rohit\",\n  greet: function () {\n    console.log(`Hello ${this.name}`);\n  }\n};\n\nconst obj2 = { balance: 70 };\nobj2.__proto__ = obj1; // borrow from obj1\n\nobj2.greet(); // \"Hello Rohit\"",
        "tryIt": "const animal = { eats: true };\nconst dog = { barks: true };\ndog.__proto__ = animal;\nconsole.log(dog.eats); // true (inherited)"
      },
      {
        "id": "inherited-builtins",
        "title": "Built-ins Come From Prototypes",
        "content": "You've been using the prototype chain all along. Methods like **`hasOwnProperty`** and **`toString`** aren't on your object — they live on `Object.prototype`. Array's **`push`** lives on `Array.prototype`.\n\nThat's why every object and array \"just has\" these methods.",
        "code": "const obj1 = { name: \"Rohit\" };\nconsole.log(obj1.hasOwnProperty(\"name\")); // true\nconsole.log(obj1.toString());\n\nconst arr = [10, 20, 30];\narr.push(50); // Array.prototype.push",
        "tryIt": "const o = {};\nconsole.log(typeof o.toString); // \"function\" — inherited\nconsole.log([].push);          // from Array.prototype"
      },
      {
        "id": "why-classes",
        "title": "Why Classes?",
        "content": "Thunder `classes.js` — making many similar objects by hand means **repeating** the same shape and the same method in every one (`user1`, `user2`, `user3` each with their own `increase()`).\n\nA **class** is a single blueprint: write the structure and methods once, stamp out as many instances as you want.",
        "code": "// The problem — repetition:\nconst user1 = { name: \"Rohit\", age: 20, increase() { this.age++; } };\nconst user2 = { name: \"Mohan\", age: 11, increase() { this.age++; } };\nconst user3 = { name: \"Sohan\", age: 70, increase() { this.age++; } };\n// same increase() copied 3 times!",
        "tryIt": "// Imagine 100 users — 100 copies of the same method.\nconsole.log(\"classes solve this\");"
      },
      {
        "id": "class-constructor",
        "title": "class, constructor & new",
        "content": "Thunder `second.js` — a **class** has a **constructor** that runs when you call **`new`**. It sets up `this.name`, `this.age`, etc. for each new instance. Methods like `greet()` are defined once and **shared** by all instances via the prototype.",
        "code": "class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n    this.x = 10;\n  }\n  greet() {\n    console.log(`Hi ${this.name}`);\n  }\n}\n\nconst user1 = new Person(\"Rohit\", 20);\nconst user2 = new Person(\"Sohan\", 10);\nuser1.greet(); // Hi Rohit",
        "tryIt": "class Student {\n  constructor(name) { this.name = name; }\n  hi() { return `Hi ${this.name}`; }\n}\nconst s = new Student(\"Sumit\");\nconsole.log(s.hi());"
      },
      {
        "id": "shared-methods",
        "title": "Shared Methods on the Prototype",
        "content": "Thunder `classes.js` — a class method like `increase()` is stored **once** on `Person.prototype`, not copied into each instance. Every `user` shares the same function but acts on its own `this`.\n\nThat's the payoff: no repetition, one place to update the behavior.",
        "code": "class Person {\n  constructor(name, age, city) {\n    this.name = name;\n    this.age = age;\n    this.city = city;\n  }\n  increase() {\n    this.age++;\n  }\n}\n\nconst user1 = new Person(\"Rohit\", 20, \"Dwarka\");\nuser1.increase();\nconsole.log(user1.age); // 21",
        "tryIt": "class Counter {\n  constructor() { this.n = 0; }\n  inc() { this.n++; }\n}\nconst c = new Counter();\nc.inc(); c.inc();\nconsole.log(c.n); // 2"
      },
      {
        "id": "extends-super",
        "title": "Inheritance — extends & super",
        "content": "Thunder `third.js` — **`class Customer extends Person`** makes `Customer` inherit everything from `Person`.\n\nInside the child constructor, **`super(name, age)`** calls the **parent constructor** first, then the child adds its own fields (`balance`, `city`).",
        "code": "class Customer extends Person {\n  constructor(name, age, balance, city) {\n    super(name, age); // run Person's constructor\n    this.balance = balance;\n    this.city = city;\n  }\n}\n\nconst c1 = new Customer(\"Rohit\", 20, 720, \"Dwarka\");\nconsole.log(c1); // has name, age, balance, city + greet()",
        "tryIt": "class Animal {\n  constructor(name) { this.name = name; }\n}\nclass Dog extends Animal {\n  constructor(name, breed) { super(name); this.breed = breed; }\n}\nconsole.log(new Dog(\"Rex\", \"Lab\"));"
      },
      {
        "id": "event-loop",
        "title": "The Event Loop",
        "content": "Thunder `project01` — JS is **single-threaded**: one call stack, one thing at a time. Async callbacks (from timers, events, promises) **don't run immediately** — they wait in a **queue**.\n\nThe **event loop** watches the call stack; when it's empty, it takes the next queued callback and runs it. That's why `setInterval`'s callback fires later, and why `setTimeout(fn, 0)` still runs after your sync code.",
        "code": "console.log(\"1\");\nsetTimeout(() => console.log(\"2\"), 0);\nconsole.log(\"3\");\n// Output: 1, 3, 2\n\nsetInterval(() => {\n  console.log(\"Hello\");\n}, 2000); // queued every 2s",
        "tryIt": "console.log(\"Start\");\nsetTimeout(() => console.log(\"Async\"), 100);\nconsole.log(\"End\");\n// Start, End, Async"
      },
      {
        "id": "lecture17-practice",
        "title": "Your Lecture 17 Practice",
        "content": "Work through Thunder's [Lecture17](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture17):\n1. **index.js** — link objects with `__proto__` and inspect inherited methods (hasOwnProperty, toString)\n2. **second.js / classes.js** — build a `Person` class; make several instances; call a shared method\n3. **third.js** — extend `Person` into `Customer` with `super()`\n4. **project01** — run `setInterval` and reason about the event loop / queue\n\nRemember: **class is syntactic sugar over prototypes**. Next: **callback hell & Promises** in Lecture 18.",
        "code": "class Vehicle {\n  constructor(wheels) { this.wheels = wheels; }\n  describe() { return `${this.wheels} wheels`; }\n}\nclass Car extends Vehicle {\n  constructor() { super(4); }\n}\nconsole.log(new Car().describe());",
        "tryIt": "const parent = { hello() { return \"hi\"; } };\nconst child = {};\nchild.__proto__ = parent;\nconsole.log(child.hello());"
      }
    ],
    "quiz": [
      {
        "question": "obj2.__proto__ = obj1 lets obj2?",
        "options": [
          "Copy obj1's properties",
          "Inherit and call obj1's methods via the prototype chain",
          "Delete obj1",
          "Freeze obj1"
        ],
        "answer": 1,
        "explanation": "Missing keys are looked up along the prototype chain — index.js."
      },
      {
        "question": "Array's push and an object's toString come from?",
        "options": [
          "The global scope",
          "Their prototypes (Array.prototype / Object.prototype)",
          "JSON",
          "The DOM"
        ],
        "answer": 1,
        "explanation": "Built-in methods live on prototypes — index.js."
      },
      {
        "question": "A class method like increase() is stored?",
        "options": [
          "Copied into every instance",
          "Once on the class prototype, shared by all instances",
          "In the constructor only",
          "In localStorage"
        ],
        "answer": 1,
        "explanation": "Methods live on Person.prototype, shared — classes.js."
      },
      {
        "question": "In `class Customer extends Person`, super(name, age) does what?",
        "options": [
          "Creates a new Person object separately",
          "Calls the parent Person constructor",
          "Deletes the parent",
          "Nothing"
        ],
        "answer": 1,
        "explanation": "super() runs the parent constructor before the child adds fields — third.js."
      },
      {
        "question": "Why does setTimeout(fn, 0) run after your synchronous code?",
        "options": [
          "It doesn't — it runs first",
          "The callback waits in a queue; the event loop runs it once the stack is clear",
          "0 means never",
          "setTimeout is synchronous"
        ],
        "answer": 1,
        "explanation": "Async callbacks queue and run after the stack empties — project01."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=1UTqFAjYx1k",
    "youtubeTitle": "JavaScript Prototypal Inheritance — Traversy Media",
    "youtubeSupplementUrl": "https://www.youtube.com/watch?v=8aGhZQkoFbQ",
    "youtubeSupplementTitle": "What the heck is the event loop anyway? — Philip Roberts · JSConf",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 18,
    "slug": "promises-and-async",
    "day": 18,
    "title": "Callback Hell & Promises",
    "subtitle": "Async patterns from callbacks to promises",
    "duration": "2 hrs",
    "createdOn": "18 Jul 2026",
    "status": "published",
    "topics": [
      "Callback hell",
      "Promise states",
      "then / catch / finally",
      "Creating a Promise",
      "Promise chaining",
      "async / await",
      "async fetch with try/catch"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture18-Callback-Hell-and-Promises-38e43ac5cab980358e38c75eae99dc6b?source=copy_link",
    "githubPath": "Lecture18",
    "sections": [
      {
        "id": "callback-hell",
        "title": "Callback Hell",
        "content": "Thunder Lecture 18 models a **Zomato order** as four steps: `placeOrder` → `prepareOrder` → `pickUpOrder` → `deliverOrder`. With callbacks, each step is nested inside the previous one's callback, creating a deeply indented pyramid known as **callback hell** — hard to read and maintain. First principle: keep code **DRY and readable**.\n\nWalk [callback.js in Lecture18](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture18) on GitHub.",
        "code": "placeOrder(orderDetail, (orderDetail) => {\n  prepareOrder(orderDetail, (orderDetail) => {\n    pickUpOrder(orderDetail, (orderDetail) => {\n      deliverOrder(orderDetail);\n    });\n  });\n});",
        "tryIt": "function step(msg, cb) {\n  setTimeout(() => {\n    console.log(msg);\n    if (cb) cb();\n  }, 500);\n}\nstep(\"Order placed\", () => step(\"Order prepared\"));"
      },
      {
        "id": "promise-states",
        "title": "Promise States & then/catch/finally",
        "content": "A Promise represents a future value and has three states: **pending**, **fulfilled**, or **rejected**. Attach handlers with `.then()` (success), `.catch()` (error), and `.finally()` (always runs).\n\n`fetch()` returns a Promise, so you can chain these directly.",
        "code": "fetch(\"https://api.github.com/users?per_page=20\")\n  .then((response) => {\n    if (!response.ok) throw new Error(\"Unable to fetch data\");\n    return response.json();\n  })\n  .then((data) => console.log(data))\n  .catch((error) => console.log(error))\n  .finally(() => console.log(\"I am final step\"));",
        "tryIt": "Promise.resolve(42)\n  .then((n) => console.log(\"Value:\", n))\n  .finally(() => console.log(\"Done\"));"
      },
      {
        "id": "creating-promises",
        "title": "Creating a Promise",
        "content": "Create your own Promise with `new Promise((resolve, reject) => { ... })`. Call `resolve(value)` on success or `reject(error)` on failure, then consume it with `.then()` / `.catch()`.",
        "code": "const p1 = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve({ name: \"Rohit\", age: 20 });\n  }, 1000);\n});\n\np1.then((res) => console.log(res))\n  .catch((error) => console.log(error));",
        "tryIt": "const wait = new Promise((resolve) =>\n  setTimeout(() => resolve(\"Ready!\"), 500)\n);\nwait.then((msg) => console.log(msg));"
      },
      {
        "id": "promise-chaining",
        "title": "Promise Chaining",
        "content": "Rewriting the Zomato flow with Promises flattens the pyramid. Each step **returns a Promise** that resolves with the updated `orderDetail`, and `.then()` links them in a readable chain — no more callback hell.\n\nSee [promiseZomato.js in Lecture18](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture18).",
        "code": "function placeOrder(orderDetail) {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      orderDetail.payment_status = true;\n      resolve(orderDetail);\n    }, 1000);\n  });\n}\n\nplaceOrder(orderDetail)\n  .then((orderDetail) => prepareOrder(orderDetail))\n  .then((orderDetail) => pickUpOrder(orderDetail))\n  .then((orderDetail) => deliverOrder(orderDetail))\n  .then((orderDetail) => console.log(orderDetail));",
        "tryIt": "const p = (v) => new Promise((res) => setTimeout(() => res(v + 1), 300));\np(1).then(p).then(p).then((n) => console.log(n));"
      },
      {
        "id": "async-await",
        "title": "async / await",
        "content": "`async/await` is cleaner syntax over promises. An `async` function always returns a Promise, and `await` pauses until a Promise resolves. The Zomato flow becomes top-to-bottom sequential code.\n\nSee [asyncAwait.js in Lecture18](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture18).",
        "code": "async function order() {\n  const p1 = await placeOrder(orderDetail);\n  const p2 = await prepareOrder(p1);\n  const p3 = await pickUpOrder(p2);\n  const p4 = await deliverOrder(p3);\n  console.log(p4);\n}\n\norder();",
        "tryIt": "async function greet() {\n  return \"Hello async\";\n}\ngreet().then(console.log);"
      },
      {
        "id": "async-fetch",
        "title": "async/await with fetch & try/catch",
        "content": "Combine `async/await` with `fetch()` and wrap it in **try/catch** for error handling. `await` the response, check `response.ok`, then `await response.json()`.\n\nSee [asyns.js in Lecture18](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture18).",
        "code": "async function github() {\n  try {\n    const response = await fetch(\"https://api.github.com/users?per_page=20\");\n    if (!response.ok) throw new Error(\"Unable to fetch data\");\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.log(error);\n  }\n}\n\ngithub();",
        "tryIt": "async function load() {\n  const res = await fetch(\"https://api.github.com/users/octocat\");\n  const user = await res.json();\n  console.log(user.login);\n}\nload();"
      }
    ],
    "quiz": [
      {
        "question": "What problem does callback hell cause?",
        "options": [
          "Deeply nested, hard-to-read code",
          "Faster execution",
          "Smaller file size",
          "Better styling"
        ],
        "answer": 0,
        "explanation": "Nesting callbacks inside callbacks creates an unreadable, hard-to-maintain pyramid."
      },
      {
        "question": "What are the three states of a Promise?",
        "options": [
          "pending / fulfilled / rejected",
          "open / closed",
          "true / false",
          "start / end"
        ],
        "answer": 0,
        "explanation": "A Promise is pending, then settles as either fulfilled or rejected."
      },
      {
        "question": "What does an async function always return?",
        "options": [
          "A Promise",
          "A string",
          "undefined",
          "An array"
        ],
        "answer": 0,
        "explanation": "async functions wrap their return value in a Promise."
      },
      {
        "question": "Which keyword pauses until a Promise resolves?",
        "options": [
          "await",
          "then",
          "catch",
          "yield"
        ],
        "answer": 0,
        "explanation": "await can only be used inside an async function and pauses until the Promise settles."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=PoRJizFvM7s",
    "youtubeTitle": "Async JS — Callbacks, Promises, Async Await — Traversy Media",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 19,
    "slug": "closures-and-this",
    "day": 19,
    "title": "Closures & the this Keyword",
    "subtitle": "How this is bound, call/apply/bind, closures & data privacy",
    "duration": "2 hrs",
    "createdOn": "23 Jul 2026",
    "status": "published",
    "topics": [
      "globalThis, window & global",
      "this in functions (strict vs non-strict)",
      "this in methods",
      "call, apply & bind",
      "Arrow functions & this",
      "Lexical scope",
      "Closures",
      "Counter pattern",
      "Higher-order functions",
      "Closures for data privacy"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture-19-Closure-and-This-Keyword-38f43ac5cab9806e98f2f95649ffb759?source=copy_link",
    "githubPath": "Lecture19",
    "sections": [
      {
        "id": "global-this",
        "title": "globalThis, window & global",
        "content": "Thunder `first.js` — the global object has different names per environment:\n\n- **window** — the global object in the **browser**\n- **global** — the global object in **Node.js**\n- **globalThis** — points to whichever one you're in (portable)\n\nOpen [Lecture19](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture19) on GitHub.",
        "code": "console.log(globalThis);\n// window in Chrome, global in Node — same idea",
        "tryIt": "console.log(typeof globalThis); // \"object\""
      },
      {
        "id": "this-rules",
        "title": "How this Is Decided",
        "content": "`this` depends on **how a function is called**, not where it's written:\n\n- **In a method** (`user.greet()`) → the object that invoked it (before the dot)\n- **In a plain function** → the **global object** in non-strict mode, but **undefined** in **strict mode** (`\"use strict\"`)\n\nThis is true in both the browser and Node.",
        "code": "const user1 = {\n  name: \"Rohit\",\n  greet: function () {\n    console.log(this); // this === user1\n  }\n};\nuser1.greet();\n\nfunction greet() {\n  console.log(this); // global (non-strict) or undefined (strict)\n}\ngreet();",
        "tryIt": "const obj = { val: 42, show() { console.log(this.val); } };\nobj.show(); // 42"
      },
      {
        "id": "call-apply-bind",
        "title": "call, apply & bind",
        "content": "These let you **set `this` yourself** — borrow one function for many objects:\n\n- **call(obj, ...args)** — invoke now, args listed one by one\n- **apply(obj, [args])** — invoke now, args as an **array**\n- **bind(obj, ...args)** — returns a **new function** permanently bound to `obj`",
        "code": "function increment(umar, paisa) {\n  this.age = umar;\n  this.amount += paisa;\n  console.log(this);\n}\n\nincrement.call(user1, 30, 300);\nincrement.apply(user1, [30, 300]);\n\nconst ref = increment.bind(user1, 30, 300);\nref();",
        "tryIt": "function hi() { console.log(this.name); }\nconst a = { name: \"Rohit\" };\nhi.call(a);            // Rohit\nconst bound = hi.bind(a);\nbound();               // Rohit"
      },
      {
        "id": "arrow-this",
        "title": "Arrow Functions & this",
        "content": "Arrow functions have **no `this` of their own** — they **borrow** it from the nearest outer scope.\n\nThat's why an arrow as an object method **doesn't** get the object as `this` (a common bug), but an arrow **inside** a method's `setInterval` is perfect — it keeps the object's `this`.",
        "code": "const watch = {\n  timer: 0,\n  stopWatch: function () {\n    setInterval(() => {\n      this.timer++;      // this = watch (borrowed)\n      console.log(this.timer);\n    }, 1000);\n  }\n};\nwatch.stopWatch();\n\n// Pitfall: arrow AS the method loses the object\nconst user = { name: \"Rohit\", greet: () => console.log(this) };",
        "tryIt": "const obj = {\n  n: 5,\n  run() {\n    const inner = () => this.n;\n    return inner();\n  }\n};\nconsole.log(obj.run()); // 5"
      },
      {
        "id": "scope-closure",
        "title": "Lexical Scope & Closures",
        "content": "Thunder `closures.js` — inner functions can read **outer** variables, and lookups walk **up** the scope chain to the nearest match.\n\nA **closure** is when a returned inner function **remembers** those outer variables even **after** the outer function has finished.",
        "code": "function counter() {\n  let count = 0;\n  function increment() {\n    count++;\n    console.log(count);\n  }\n  return increment;\n}\n\nconst c = counter();\nc(); // 1\nc(); // 2  — count is remembered!",
        "tryIt": "function makeAdder(x) {\n  return function (y) { return x + y; };\n}\nconst add5 = makeAdder(5);\nconsole.log(add5(3)); // 8"
      },
      {
        "id": "hof",
        "title": "Higher-Order Functions",
        "content": "Thunder `hof.js` — a **higher-order function** returns another function. Thanks to closure, the inner function still knows the outer argument.\n\nCall it in two steps, or chain both calls at once: `increment(30)(10)`.",
        "code": "function increment(amount) {\n  function mul(num) {\n    console.log(num * amount);\n  }\n  return mul;\n}\n\nconst multiplier = increment(30);\nmultiplier(10); // 300\n\nincrement(30)(10); // 300 — same thing",
        "tryIt": "const power = (exp) => (base) => base ** exp;\nconst square = power(2);\nconsole.log(square(5)); // 25"
      },
      {
        "id": "closure-privacy",
        "title": "Closures for Data Privacy",
        "content": "Thunder `example.js` — a plain object exposes its data: `user1.balance = \"Rohit\"` silently corrupts it.\n\nWith a **closure**, keep `balance` **private** inside `bank()` and return only `credit`, `debit`, `checkBalance`. Now the balance can **only** be changed through validated methods — real encapsulation.",
        "code": "function bank() {\n  let balance = 200; // private!\n\n  return {\n    credit(amount) {\n      if (typeof amount === \"number\") balance += amount;\n    },\n    debit(amount) {\n      if (typeof amount === \"number\" && amount <= balance && amount > 0)\n        balance -= amount;\n    },\n    checkBalance() {\n      console.log(balance);\n    }\n  };\n}\n\nconst user = bank();\nuser.credit(200);\nuser.checkBalance(); // 400\n// user.balance is undefined — can't be touched directly",
        "tryIt": "function secretBox(value) {\n  return { get: () => value };\n}\nconst box = secretBox(42);\nconsole.log(box.get()); // 42, but value is hidden"
      },
      {
        "id": "lecture19-practice",
        "title": "Your Lecture 19 Practice",
        "content": "Work through Thunder's [Lecture19](https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture19):\n1. **first.js** — test `this` in a method vs a plain function, strict vs non-strict; try call/apply/bind and the arrow setInterval stopwatch\n2. **closures.js** — build the counter closure; watch count persist\n3. **hof.js** — a function returning a function; call it both ways\n4. **example.js** — refactor the leaky object into a private-balance bank with closures\n\nBig idea: **`this` is about the call-site; closures are about the definition-site.** This wraps the JavaScript phase — next up: **Node.js** in Lecture 20.",
        "code": "function once(fn) {\n  let done = false;\n  return function (...args) {\n    if (!done) { done = true; return fn(...args); }\n  };\n}\nconst init = once(() => console.log(\"runs once\"));\ninit(); init(); // logs once",
        "tryIt": "const person = { name: \"Sumit\" };\nfunction hi() { return `Hi ${this.name}`; }\nconsole.log(hi.call(person));"
      }
    ],
    "quiz": [
      {
        "question": "In a plain function in strict mode, this is?",
        "options": [
          "The global object",
          "undefined",
          "The window always",
          "The function itself"
        ],
        "answer": 1,
        "explanation": "Strict mode makes this undefined in a plain function call — first.js."
      },
      {
        "question": "The difference between call and apply?",
        "options": [
          "call is async",
          "apply takes arguments as an array; call lists them individually",
          "They are identical",
          "apply returns a bound function"
        ],
        "answer": 1,
        "explanation": "call(obj, a, b) vs apply(obj, [a, b]) — first.js."
      },
      {
        "question": "An arrow function's this comes from?",
        "options": [
          "The object it's a method of",
          "The nearest outer scope (it has no own this)",
          "Always the global object",
          "undefined"
        ],
        "answer": 1,
        "explanation": "Arrows borrow this lexically — great inside setInterval — first.js."
      },
      {
        "question": "A closure is?",
        "options": [
          "A function that remembers its outer scope variables after the outer returns",
          "A way to close the browser",
          "A CSS feature",
          "The same as a class"
        ],
        "answer": 0,
        "explanation": "The counter keeps count alive via closure — closures.js."
      },
      {
        "question": "In the bank example, why is balance safe from outside tampering?",
        "options": [
          "It's a const",
          "It lives in the closure; only the returned methods can access it",
          "It's frozen",
          "It's stored in localStorage"
        ],
        "answer": 1,
        "explanation": "Private closure variable — accessed only via validated methods — example.js."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=3a0I8ICR1Vg",
    "youtubeTitle": "Learn Closures In 7 Minutes — Web Dev Simplified",
    "youtubeSupplementUrl": "https://www.youtube.com/watch?v=gvicrj31JOM",
    "youtubeSupplementTitle": "JavaScript this Keyword — Programming with Mosh",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  }
];
