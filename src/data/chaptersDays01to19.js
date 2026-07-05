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
    "subtitle": "Creating, accessing, and iterating arrays",
    "duration": "2 hrs",
    "createdOn": "6 Jul 2026",
    "status": "published",
    "topics": [
      "What is an array?",
      "Array indexing",
      "Array.length",
      "Looping arrays",
      "Object basics",
      "Array of objects"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture06-Array-and-Objects-in-Javascript-37943ac5cab9807f801cc8c83755decc",
    "githubPath": "Lecture06",
    "sections": [
      {
        "id": "arrays",
        "title": "What is an Array?",
        "content": "An array stores multiple values in one variable. Index starts at 0.",
        "code": "let marks = [30, 20, 11, 80, 70];\nconsole.log(marks);\nconsole.log(marks.length);\nconsole.log(marks[2]);",
        "tryIt": "let fruits = [\"apple\", \"banana\", \"mango\"];\nconsole.log(fruits[0]);\nconsole.log(fruits.length);"
      },
      {
        "id": "loop-arrays",
        "title": "Looping Through Arrays",
        "content": "Use a for loop with index, or for...of for values.",
        "code": "let marks = [30, 20, 11, 80, 70];\nfor (let i = 0; i < marks.length; i++) {\n  console.log(marks[i]);\n}",
        "tryIt": "let nums = [10, 20, 30];\nfor (const n of nums) console.log(n);"
      },
      {
        "id": "objects-intro",
        "title": "Objects — Key-Value Pairs",
        "content": "Objects store related data as properties. More natural than parallel arrays.",
        "code": "const user = {\n  name: \"Rohit\",\n  age: 20,\n  city: \"Kotdwar\"\n};\nconsole.log(user.name);\nconsole.log(user.age);",
        "tryIt": "const food = {\n  name: \"Chicken Bucket\",\n  price: 798,\n  rating: 4.1\n};\nconsole.log(food.name, \"₹\" + food.price);"
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
        "explanation": "Zero-based indexing."
      },
      {
        "question": "typeof [] is?",
        "options": [
          "\"array\"",
          "\"object\"",
          "\"list\"",
          "\"undefined\""
        ],
        "answer": 1,
        "explanation": "Arrays are objects."
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
    "subtitle": "Object properties, nested objects, real-world data",
    "duration": "2 hrs",
    "createdOn": "7 Jul 2026",
    "status": "published",
    "topics": [
      "Object literals",
      "Accessing properties",
      "Nested objects",
      "Array of objects",
      "for...of loop",
      "Object use cases"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture-07-Objects-and-Date-37b43ac5cab980cfa8d3db0bf87411b2",
    "githubPath": "Lecture07",
    "sections": [
      {
        "id": "objects-deep",
        "title": "Working with Objects",
        "content": "Access with dot notation or brackets. Objects can hold any data type.",
        "code": "const user = {\n  name: \"Rohit\",\n  age: 20,\n  email: \"negi@gmail.com\",\n  amount: 420\n};\nconsole.log(user[\"name\"]);\nuser.age = 21;",
        "tryIt": "const product = { name: \"Burger\", price: 199, rating: 4.5 };\nconsole.log(product.name, product.rating);"
      },
      {
        "id": "array-of-objects",
        "title": "Array of Objects",
        "content": "Real apps use arrays of objects — like a food menu or user list.",
        "code": "const menu = [\n  { name: \"Bucket\", price: 798, rating: 4.1 },\n  { name: \"Strips\", price: 449, rating: 5.1 }\n];\nfor (const item of menu) {\n  console.log(item.name, \"₹\" + item.price);\n}",
        "tryIt": "const students = [\n  { name: \"Alex\", marks: 85 },\n  { name: \"Sam\", marks: 92 }\n];\nstudents.forEach(s => console.log(s.name, s.marks));"
      },
      {
        "id": "nested",
        "title": "Nested Objects",
        "content": "Objects inside objects — like address inside a user.",
        "code": "const user = {\n  name: \"Rohit\",\n  address: { city: \"Dwarka\", pincode: 110075 }\n};\nconsole.log(user.address.city);",
        "tryIt": "const obj = {\n  name: \"Rohit\",\n  age: 20,\n  address: { city: \"dwarka\", pincode: 110075 }\n};\nconsole.log(obj.address.pincode);"
      }
    ],
    "quiz": [
      {
        "question": "Access obj.name is?",
        "options": [
          "bracket only",
          "dot notation",
          "JSON only",
          "invalid"
        ],
        "answer": 1,
        "explanation": "Dot or bracket notation."
      },
      {
        "question": "Array of objects is common for?",
        "options": [
          "menus/lists",
          "only numbers",
          "only strings",
          "comments"
        ],
        "answer": 0,
        "explanation": "Real-world data structures."
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
    "subtitle": "Date object, function declarations, arrow functions",
    "duration": "2 hrs",
    "createdOn": "8 Jul 2026",
    "status": "published",
    "topics": [
      "Date object",
      "Timestamps",
      "Function declarations",
      "Parameters & return",
      "Arrow functions",
      "Rest & spread"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture08-Date-and-Functions-in-JS-37c43ac5cab98043bcfafdc2a70c7a3a",
    "githubPath": "Lecture08",
    "sections": [
      {
        "id": "date",
        "title": "The Date Object",
        "content": "Create dates, get day/month/year, work with timestamps.",
        "code": "const now = new Date();\nconsole.log(now.toString());\nconsole.log(now.getFullYear());\nconsole.log(now.getMonth()); // 0 = Jan\nconsole.log(Date.now()); // timestamp in ms",
        "tryIt": "const d = new Date();\nconsole.log(\"Year:\", d.getFullYear());\nconsole.log(\"Timestamp:\", Date.now());"
      },
      {
        "id": "functions",
        "title": "Functions — Why & How",
        "content": "Functions bundle reusable logic. Declare with `function`, assign to const, or use arrows.",
        "code": "function add(a, b) {\n  return a + b;\n}\nconsole.log(add(2, 3));\n\nconst greet = function() {\n  console.log(\"Hello!\");\n};\ngreet();",
        "tryIt": "function multiply(a, b) { return a * b; }\nconsole.log(multiply(4, 5));"
      },
      {
        "id": "arrow-rest-spread",
        "title": "Arrow Functions, Rest & Spread",
        "content": "Arrow: `const add = (a, b) => a + b`. Rest collects args: `...arr`. Spread copies: `[...arr]`.",
        "code": "const square = n => n * n;\nconsole.log(square(8));\n\nfunction sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum(1, 2, 3, 4));",
        "tryIt": "const add = (a, b) => a + b;\nconsole.log(add(10, 20));\nconst arr = [1, 2, 3];\nconsole.log([...arr, 4]);"
      }
    ],
    "quiz": [
      {
        "question": "Arrow function syntax?",
        "options": [
          "function(){}",
          "()=>{}",
          "=>()",
          "func()"
        ],
        "answer": 1,
        "explanation": "() => {}"
      },
      {
        "question": "Date.now() returns?",
        "options": [
          "string",
          "timestamp ms",
          "Date object",
          "boolean"
        ],
        "answer": 1,
        "explanation": "Milliseconds since epoch."
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
    "subtitle": "Higher-order array methods every developer needs",
    "duration": "2 hrs",
    "createdOn": "9 Jul 2026",
    "status": "published",
    "topics": [
      "Callbacks",
      "forEach",
      "map",
      "filter",
      "reduce",
      "Sets",
      "Real-world examples"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture09-Callback-forEach-map-filter-reduce-37d43ac5cab980e0a44ef39a89b81143",
    "githubPath": "Lecture09",
    "sections": [
      {
        "id": "callbacks",
        "title": "Callbacks",
        "content": "A callback is a function passed as an argument. Arrays use callbacks heavily.",
        "code": "function print(num) {\n  console.log(num);\n}\n[10, 20, 30].forEach(print);\n\n// Or inline:\n[10, 20, 30].forEach(n => console.log(n));",
        "tryIt": "[1, 2, 3].forEach((n, i) => console.log(i, n));"
      },
      {
        "id": "map-filter",
        "title": "map & filter",
        "content": "`map` transforms each element. `filter` keeps elements that pass a test.",
        "code": "const arr = [10, 20, 40, 73, 18];\nconst doubled = arr.map(n => n * 2);\nconst big = arr.filter(n => n > 20);\nconsole.log(doubled);\nconsole.log(big);",
        "tryIt": "const nums = [1, 2, 3, 4, 5];\nconsole.log(nums.map(n => n * 5));\nconsole.log(nums.filter(n => n % 2 === 0));"
      },
      {
        "id": "reduce",
        "title": "reduce",
        "content": "`reduce` combines all elements into one value — sum, max, flatten, etc.",
        "code": "const arr = [10, 20, 30];\nconst sum = arr.reduce((acc, n) => acc + n, 0);\nconsole.log(sum);",
        "tryIt": "const prices = [100, 200, 50];\nconst total = prices.reduce((a, b) => a + b, 0);\nconsole.log(\"Total:\", total);"
      }
    ],
    "quiz": [
      {
        "question": "map() returns?",
        "options": [
          "new array",
          "boolean",
          "number",
          "undefined"
        ],
        "answer": 0,
        "explanation": "Transforms to new array."
      },
      {
        "question": "reduce needs?",
        "options": [
          "initial value optional",
          "only strings",
          "no callback",
          "two arrays"
        ],
        "answer": 0,
        "explanation": "Accumulator pattern."
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
    "subtitle": "Selecting and manipulating HTML with JavaScript",
    "duration": "2 hrs",
    "createdOn": "10 Jul 2026",
    "status": "published",
    "topics": [
      "What is the DOM?",
      "document object",
      "getElementById",
      "textContent & innerHTML",
      "Changing styles",
      "DOM tree"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture10-Introduction-To-DOM-38043ac5cab980adbbdeffd5e8dc6ae8",
    "githubPath": "Lecture10",
    "sections": [
      {
        "id": "what-is-dom",
        "title": "What is the DOM?",
        "content": "The DOM (Document Object Model) is the browser's tree representation of your HTML. JavaScript can read and change it.",
        "code": "const el = document.getElementById(\"demo\");\nel.textContent = \"Hello from JS!\";",
        "tryIt": "// DOM code runs in browser only\nconsole.log(\"Open a .html file to try DOM code\");"
      },
      {
        "id": "selecting",
        "title": "Selecting Elements",
        "content": "`getElementById`, `querySelector`, `querySelectorAll` find elements on the page.",
        "code": "// In browser:\n// const btn = document.getElementById(\"btn\");\n// const items = document.querySelectorAll(\".item\");",
        "tryIt": "console.log(\"DOM methods: getElementById, querySelector\");"
      },
      {
        "id": "manipulating",
        "title": "Changing Content & Style",
        "content": "Use `textContent`, `innerHTML`, and `style` to update the page.",
        "code": "// element.textContent = \"New text\";\n// element.style.backgroundColor = \"pink\";",
        "tryIt": "console.log(\"textContent vs innerHTML:\");\nconsole.log(\"Use textContent for plain text (safer)\");"
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
        "explanation": "Document Object Model."
      },
      {
        "question": "getElementById returns?",
        "options": [
          "array",
          "single element",
          "string",
          "number"
        ],
        "answer": 1,
        "explanation": "One element or null."
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
    "subtitle": "Create, read, update, delete — and handle user events",
    "duration": "2 hrs",
    "createdOn": "11 Jul 2026",
    "status": "published",
    "topics": [
      "Creating elements",
      "appendChild",
      "Event listeners",
      "click & dblclick",
      "Event object",
      "CRUD operations"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture11-CRUD-and-Event-in-DOM-38143ac5cab980d48176fda6b086cfef",
    "githubPath": "Lecture11",
    "sections": [
      {
        "id": "crud",
        "title": "DOM CRUD Operations",
        "content": "**C**reate, **R**ead, **U**pdate, **D**elete elements dynamically with `createElement`, `appendChild`, `remove`.",
        "code": "// const div = document.createElement(\"div\");\n// div.textContent = \"New element\";\n// parent.appendChild(div);",
        "tryIt": "console.log(\"CRUD = Create, Read, Update, Delete\");"
      },
      {
        "id": "events",
        "title": "Event Listeners",
        "content": "Respond to clicks, double-clicks, and more with `addEventListener`.",
        "code": "// element.addEventListener(\"click\", () => {\n//   element.textContent = \"Clicked!\";\n// });",
        "tryIt": "console.log(\"addEventListener(event, callback)\");"
      },
      {
        "id": "event-object",
        "title": "The Event Object",
        "content": "The callback receives an event object with info about what happened — target, type, coordinates.",
        "code": "// element.addEventListener(\"click\", (e) => {\n//   console.log(e.target);\n// });",
        "tryIt": "console.log(\"Events: click, dblclick, submit, keydown\");"
      }
    ],
    "quiz": [
      {
        "question": "addEventListener takes?",
        "options": [
          "event type and callback",
          "only callback",
          "only string",
          "CSS"
        ],
        "answer": 0,
        "explanation": "Event + handler function."
      },
      {
        "question": "CRUD D means?",
        "options": [
          "Delete",
          "Download",
          "Debug",
          "Deploy"
        ],
        "answer": 0,
        "explanation": "Create Read Update Delete."
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
    "subtitle": "Build interactive mini projects with events",
    "duration": "2 hrs",
    "createdOn": "12 Jul 2026",
    "status": "published",
    "topics": [
      "Event bubbling",
      "Event delegation",
      "Form events",
      "Keyboard events",
      "Project structure",
      "Mini projects"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture12-Even-and-Project-in-Javascript-38343ac5cab980aab918f7f4dc5c2fff",
    "githubPath": "Lecture12",
    "sections": [
      {
        "id": "events-deep",
        "title": "Events in Depth",
        "content": "Learn event bubbling, delegation, and building interactive UIs. Thunder Lecture12 includes 5 mini projects.",
        "code": "console.log(\"Projects: use events + DOM together\");",
        "tryIt": "console.log(\"Event bubbling: child events bubble to parent\");"
      },
      {
        "id": "projects",
        "title": "Building Mini Projects",
        "content": "Combine DOM selection, events, and data to build calculators, toggles, and counters.",
        "code": "console.log(\"Start small: todo list, color changer, counter\");",
        "tryIt": "let count = 0;\nconst inc = () => { count++; console.log(count); };\ninc(); inc();"
      }
    ],
    "quiz": [
      {
        "question": "Event bubbling goes?",
        "options": [
          "child to parent",
          "parent to child",
          "nowhere",
          "to server"
        ],
        "answer": 0,
        "explanation": "Events bubble up the DOM tree."
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
    "subtitle": "More hands-on projects to cement your skills",
    "duration": "2 hrs",
    "createdOn": "13 Jul 2026",
    "status": "published",
    "topics": [
      "Project planning",
      "DOM manipulation",
      "Data-driven UI",
      "Chat UI project",
      "Image gallery",
      "GitHub integration"
    ],
    "notionUrl": null,
    "githubPath": "Lecture13",
    "sections": [
      {
        "id": "more-projects",
        "title": "JavaScript Projects Part 2",
        "content": "Lecture13 extends projects: chat UI, image gallery, and GitHub profile loaders.",
        "code": "console.log(\"Build: chat app, image slider, API-driven cards\");",
        "tryIt": "console.log(\"Practice: fetch data, render to DOM\");"
      },
      {
        "id": "data-driven",
        "title": "Data-Driven UI",
        "content": "Store data in arrays/objects, render with loops. Separate data from display logic.",
        "code": "const users = [{ name: \"Rohit\" }, { name: \"Mohan\" }];\nusers.forEach(u => console.log(u.name));",
        "tryIt": "const items = [\"HTML\", \"CSS\", \"JS\"];\nitems.forEach((item, i) => console.log(i + 1, item));"
      }
    ],
    "quiz": [
      {
        "question": "Data-driven UI separates?",
        "options": [
          "data and display",
          "HTML and CSS only",
          "JS and JSON",
          "nothing"
        ],
        "answer": 0,
        "explanation": "Data layer vs view layer."
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
    "subtitle": "Capstone projects combining everything learned",
    "duration": "2 hrs",
    "createdOn": "14 Jul 2026",
    "status": "published",
    "topics": [
      "Full project workflow",
      "Multi-page apps",
      "State management",
      "API fetching",
      "Project 1-4 walkthrough",
      "Best practices"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture14-Project-in-Javascript-38443ac5cab9809ba1e9fbcf3c776723",
    "githubPath": "Lecture14",
    "sections": [
      {
        "id": "capstone",
        "title": "Capstone Projects",
        "content": "Lecture14 brings together DOM, events, data, and APIs in full projects.",
        "code": "console.log(\"Projects 1-4 in Thunder/Lecture14\");",
        "tryIt": "console.log(\"You now know enough to build real apps!\");"
      },
      {
        "id": "workflow",
        "title": "Project Workflow",
        "content": "Plan → HTML structure → CSS layout → JS behavior → test → deploy.",
        "code": "console.log(\"1. Plan  2. Build  3. Test  4. Deploy\");",
        "tryIt": "console.log(\"Deploy free on Netlify or Vercel\");"
      }
    ],
    "quiz": [
      {
        "question": "First step in project workflow?",
        "options": [
          "Deploy",
          "Plan",
          "Delete",
          "minify"
        ],
        "answer": 1,
        "explanation": "Always plan first."
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
    "subtitle": "Serialization, fetch API, and async basics",
    "duration": "2 hrs",
    "createdOn": "15 Jul 2026",
    "status": "published",
    "topics": [
      "JSON format",
      "JSON.stringify",
      "JSON.parse",
      "fetch API",
      "async/await intro",
      "GitHub API example"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture15-JSON-vs-JS-Object-38843ac5cab9801e9c30f80559f919a0",
    "githubPath": "Lecture15",
    "sections": [
      {
        "id": "json",
        "title": "JSON vs JS Object",
        "content": "JSON is a **string format** for data exchange. JS objects are in-memory. Keys in JSON must be double-quoted.",
        "code": "const obj = { name: \"Rohit\", age: 20 };\nconst json = JSON.stringify(obj);\nconsole.log(json);\nconsole.log(JSON.parse(json));",
        "tryIt": "const user = { name: \"Sumit\", day: 15 };\nconst str = JSON.stringify(user);\nconsole.log(str);\nconsole.log(JSON.parse(str).name);"
      },
      {
        "id": "fetch",
        "title": "fetch API & async/await",
        "content": "Fetch data from APIs. `async/await` makes async code read like sync code.",
        "code": "async function getData() {\n  const res = await fetch(\"https://api.github.com/users/octocat\");\n  const data = await res.json();\n  console.log(data.login);\n}\ngetData();",
        "tryIt": "console.log(\"fetch returns a Promise\");\nconsole.log(\"await waits for it to resolve\");"
      }
    ],
    "quiz": [
      {
        "question": "JSON.stringify converts?",
        "options": [
          "object to JSON string",
          "string to number",
          "array to object",
          "HTML to CSS"
        ],
        "answer": 0,
        "explanation": "JS object → JSON string."
      },
      {
        "question": "fetch returns a?",
        "options": [
          "Promise",
          "string",
          "array",
          "DOM node"
        ],
        "answer": 0,
        "explanation": "Async HTTP via Promise."
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
    "subtitle": "Execution context, hoisting, and the call stack",
    "duration": "2 hrs",
    "createdOn": "16 Jul 2026",
    "status": "published",
    "topics": [
      "Execution context",
      "Memory allocation phase",
      "Hoisting",
      "Temporal dead zone",
      "Call stack",
      "How JS runs your code"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture16-Memory-management-and-How-JS-code-works-38b43ac5cab980af918bf13d86ec5d6c",
    "githubPath": "Lecture16",
    "sections": [
      {
        "id": "execution-context",
        "title": "Execution Context",
        "content": "JS runs in two phases: **Memory allocation** (hoisting) then **execution** (line by line).",
        "code": "console.log(\"Phase 1: Memory allocation\");\nconsole.log(\"Phase 2: Execution\");",
        "tryIt": "let a = 10;\nconst b = 20;\nconsole.log(a + b);"
      },
      {
        "id": "hoisting",
        "title": "Hoisting & TDZ",
        "content": "`let` and `const` are hoisted but in Temporal Dead Zone until declared. `var` is hoisted and initialized as `undefined`.",
        "code": "// let x = 10; // TDZ ends here\n// const y = 20;",
        "tryIt": "console.log(\"var: function scoped\");\nconsole.log(\"let/const: block scoped\");"
      },
      {
        "id": "call-stack",
        "title": "Call Stack",
        "content": "Functions are pushed onto the call stack when called, popped when they return. Stack overflow = too much recursion.",
        "code": "function a() { b(); }\nfunction b() { console.log(\"in b\"); }\na();",
        "tryIt": "function greet() { return \"Hello\"; }\nconsole.log(greet());"
      }
    ],
    "quiz": [
      {
        "question": "Hoisting applies to?",
        "options": [
          "let/const/var declarations",
          "only CSS",
          "only HTML",
          "fetch"
        ],
        "answer": 0,
        "explanation": "Declarations are hoisted."
      },
      {
        "question": "TDZ is for?",
        "options": [
          "let and const",
          "only var",
          "only functions",
          "JSON"
        ],
        "answer": 0,
        "explanation": "Temporal Dead Zone."
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
    "subtitle": "OOP in JS and how async code executes",
    "duration": "2 hrs",
    "createdOn": "17 Jul 2026",
    "status": "published",
    "topics": [
      "Prototype chain",
      "Classes & constructor",
      "Methods with this",
      "new keyword",
      "Event loop",
      "Microtasks vs macrotasks"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture-17-Prototype-classes-and-Eventloop-in-JS-38c43ac5cab9805f9b60eaf160aa057e",
    "githubPath": "Lecture17",
    "sections": [
      {
        "id": "prototypes",
        "title": "Prototypes & Classes",
        "content": "Every object has a prototype chain. ES6 `class` is syntactic sugar over prototypes.",
        "code": "class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  greet() { return `Hi, ${this.name}`; }\n}\nconst u = new Person(\"Rohit\", 20);\nconsole.log(u.greet());",
        "tryIt": "class Student {\n  constructor(name) { this.name = name; }\n}\nconst s = new Student(\"Sumit\");\nconsole.log(s.name);"
      },
      {
        "id": "event-loop",
        "title": "Event Loop",
        "content": "JS is single-threaded. The event loop handles async callbacks after the call stack clears.",
        "code": "console.log(\"1\");\nsetTimeout(() => console.log(\"2\"), 0);\nconsole.log(\"3\");\n// Output: 1, 3, 2",
        "tryIt": "console.log(\"Start\");\nsetTimeout(() => console.log(\"Async\"), 100);\nconsole.log(\"End\");"
      }
    ],
    "quiz": [
      {
        "question": "class is sugar for?",
        "options": [
          "prototypes",
          "JSON",
          "DOM",
          "fetch"
        ],
        "answer": 0,
        "explanation": "Classes use prototypes underneath."
      },
      {
        "question": "setTimeout runs via?",
        "options": [
          "event loop",
          "call stack only",
          "JSON",
          "DOM"
        ],
        "answer": 0,
        "explanation": "Macrotask queue + event loop."
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
      "then/catch/finally",
      "Creating promises",
      "fetch with promises",
      "async/await"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture18-Callback-Hell-and-Promises-38e43ac5cab980358e38c75eae99dc6b",
    "githubPath": "Lecture18",
    "sections": [
      {
        "id": "promises",
        "title": "Promises",
        "content": "A Promise has 3 states: **pending**, **fulfilled**, **rejected**. Use `.then()`, `.catch()`, `.finally()`.",
        "code": "const p = new Promise((resolve) => {\n  setTimeout(() => resolve(\"Done!\"), 500);\n});\np.then(res => console.log(res));",
        "tryIt": "const p = Promise.resolve(42);\np.then(n => console.log(n));"
      },
      {
        "id": "fetch-promises",
        "title": "fetch with Promises",
        "content": "fetch returns a Promise. Chain `.then()` to parse JSON and handle errors.",
        "code": "fetch(\"https://api.github.com/users/octocat\")\n  .then(r => r.json())\n  .then(d => console.log(d.name))\n  .catch(e => console.log(e));",
        "tryIt": "console.log(\"Promise chain: then -> then -> catch\");"
      },
      {
        "id": "async-await",
        "title": "async/await",
        "content": "Cleaner syntax for promises. `async` function returns a promise. `await` pauses until resolved.",
        "code": "async function load() {\n  const res = await fetch(\"https://api.github.com/users/octocat\");\n  const data = await res.json();\n  console.log(data.login);\n}\nload();",
        "tryIt": "async function demo() {\n  return \"Hello async\";\n}\ndemo().then(console.log);"
      }
    ],
    "quiz": [
      {
        "question": "Promise states?",
        "options": [
          "pending/fulfilled/rejected",
          "open/closed",
          "true/false",
          "start/end"
        ],
        "answer": 0,
        "explanation": "Three states."
      },
      {
        "question": "async function returns?",
        "options": [
          "Promise",
          "string always",
          "undefined always",
          "object"
        ],
        "answer": 0,
        "explanation": "Always wraps in Promise."
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
    "subtitle": "Scope, closures, and understanding this",
    "duration": "2 hrs",
    "createdOn": "19 Jul 2026",
    "status": "published",
    "topics": [
      "Scope & lexical scope",
      "Closures",
      "Counter pattern",
      "this keyword",
      "this in objects",
      "Higher-order functions"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture-19-Closure-and-This-Keyword-38f43ac5cab9806e98f2f95649ffb759",
    "githubPath": "Lecture19",
    "sections": [
      {
        "id": "scope",
        "title": "Scope & Lexical Scope",
        "content": "Variables are visible in their block/function. Inner functions access outer variables — that is lexical scope.",
        "code": "let a = 10;\nfunction outer() {\n  let b = 20;\n  function inner() { console.log(a, b); }\n  inner();\n}\nouter();",
        "tryIt": "let x = 1;\nfunction f() {\n  let x = 2;\n  console.log(x);\n}\nf();"
      },
      {
        "id": "closures",
        "title": "Closures",
        "content": "A closure is when an inner function remembers variables from its outer scope — even after the outer function returns.",
        "code": "function counter() {\n  let count = 0;\n  return function() {\n    count++;\n    console.log(count);\n  };\n}\nconst c = counter();\nc(); c(); c();",
        "tryIt": "function makeAdder(x) {\n  return function(y) { return x + y; };\n}\nconst add5 = makeAdder(5);\nconsole.log(add5(3));"
      },
      {
        "id": "this-keyword",
        "title": "The this Keyword",
        "content": "`this` refers to the object that owns the function. In methods, `this` is the object before the dot.",
        "code": "const user = {\n  name: \"Rohit\",\n  greet() { console.log(this.name); }\n};\nuser.greet();",
        "tryIt": "const obj = {\n  val: 42,\n  show() { console.log(this.val); }\n};\nobj.show();"
      }
    ],
    "quiz": [
      {
        "question": "Closure remembers?",
        "options": [
          "outer scope variables",
          "only globals",
          "only CSS",
          "nothing"
        ],
        "answer": 0,
        "explanation": "Lexical environment."
      },
      {
        "question": "this in obj.method() is?",
        "options": [
          "the object",
          "window always",
          "undefined always",
          "null"
        ],
        "answer": 0,
        "explanation": "The object before the dot."
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
