// Days 1–19 — Thunder JavaScript curriculum (hand-authored)
export const chaptersDays01to19 = [
  {
    "id": 1,
    "slug": "introduction-to-javascript",
    "day": 1,
    "title": "Introduction to JavaScript",
    "subtitle": "HTML, CSS, JS — how the web works",
    "duration": "2 hrs 25 mins",
    "createdOn": "1 Jul 2026",
    "status": "published",
    "topics": [
      "What is JavaScript?",
      "HTML vs CSS vs JS",
      "Adding JS to HTML",
      "console.log",
      "let and const",
      "Comments",
      "First program"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture01-Introduction-to-Javascript-37243ac5cab9802293fff4573c26a6f4",
    "githubPath": "Lecture01",
    "sections": [
      {
        "id": "what-is-js",
        "title": "What is JavaScript?",
        "content": "JavaScript is the **programming language of the web**. HTML gives structure, CSS gives style, and JavaScript gives **behavior** — clicks, forms, animations, and data fetching.\n\nIn the Thunder course, you learn JS through three versions of the same page: HTML only (v1), HTML+CSS (v2), and HTML+CSS+JS (v3). Pretty does not mean functional until JavaScript enters."
      },
      {
        "id": "html-css-js",
        "title": "HTML, CSS & JavaScript Together",
        "content": "Think of a website like a person:\n- **HTML** = skeleton (headings, paragraphs, images)\n- **CSS** = clothes and appearance\n- **JavaScript** = brain and actions\n\nThunder Lecture01 walks through v1-html, v2-css, and v3-js folders showing this progression."
      },
      {
        "id": "console-log",
        "title": "console.log — Your First Tool",
        "content": "Open DevTools (F12) and use `console.log()` to print values. This is how you debug and learn.",
        "code": "console.log(\"Hello, Thunder!\");\nconsole.log(42);\nlet name = \"Sumit\";\nconsole.log(\"Learning JS, Day 1:\", name);",
        "tryIt": "console.log(\"=== Day 1 ===\");\nconsole.log(\"Welcome to JS Learn Hub\");\nconsole.log(\"Following Thunder curriculum\");"
      },
      {
        "id": "variables",
        "title": "Variables: let and const",
        "content": "Use `let` for values that change, `const` for values that stay fixed. Avoid `var` in modern code.",
        "code": "let score = 0;\nscore = 10;\n\nconst course = \"Thunder\";\nconsole.log(course, score);",
        "tryIt": "let day = 1;\nconst author = \"Sumit Rawal\";\nday = 2;\nconsole.log(author, \"Day\", day);"
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
        "explanation": "JS adds interactivity."
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
        "explanation": "Use const for fixed values."
      }
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=hdI2bqOjy3c",
    "youtubeTitle": "JavaScript Crash Course For Beginners — Traversy Media",
    "paidLectureUrl": "https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content",
    "paidLectureLabel": "Full In-Depth Lecture — Thunder Course"
  },
  {
    "id": 2,
    "slug": "data-types-in-javascript",
    "day": 2,
    "title": "Data Types in JavaScript",
    "subtitle": "Primitives, typeof, strings, numbers, booleans",
    "duration": "2 hrs 10 mins",
    "createdOn": "2 Jul 2026",
    "status": "published",
    "topics": [
      "Primitive types",
      "typeof",
      "String",
      "Number",
      "Boolean",
      "undefined & null",
      "BigInt & Symbol"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture-02-Data-types-in-JS-37343ac5cab980f8b24ee3cf1ea0c8fa",
    "githubPath": "Lecture02",
    "sections": [
      {
        "id": "primitives",
        "title": "Primitive Data Types",
        "content": "JavaScript has 7 primitives: **string, number, boolean, undefined, null, bigint, symbol**. They are immutable — stored by value.",
        "code": "let name = \"Rohit\";\nlet age = 20;\nlet isStudent = true;\nlet notSet;\nlet empty = null;\nconsole.log(typeof name, typeof age);",
        "tryIt": "let lang = \"JavaScript\";\nconsole.log(typeof lang);\nconsole.log(typeof 2026);\nconsole.log(typeof true);"
      },
      {
        "id": "typeof",
        "title": "The typeof Operator",
        "content": "`typeof` tells you the type of any value. Essential for debugging.",
        "code": "console.log(typeof \"hello\");\nconsole.log(typeof 42);\nconsole.log(typeof true);\nconsole.log(typeof undefined);\nconsole.log(typeof null); // \"object\" (quirk!)",
        "tryIt": "let a = \"JS\", b = 100, c = null;\nconsole.log(\"a:\", typeof a);\nconsole.log(\"b:\", typeof b);\nconsole.log(\"c:\", typeof c);"
      },
      {
        "id": "strings-numbers",
        "title": "Strings & Numbers",
        "content": "Strings hold text (single, double, or backtick quotes). Numbers handle integers and decimals. Template literals use backticks: `` `Hello ${name}` ``",
        "code": "let first = \"Rohit\";\nlet age = 20;\nlet msg = `Name: ${first}, Age: ${age}`;\nconsole.log(msg);",
        "tryIt": "let price = 29.99;\nlet qty = 3;\nconsole.log(\"Total:\", price * qty);"
      },
      {
        "id": "non-primitive",
        "title": "Non-Primitive: Objects",
        "content": "Objects, arrays, and functions are **reference types**. `typeof` on an object returns `\"object\"`.",
        "code": "let person = { name: \"Rohit\", age: 20 };\nconsole.log(person);\nconsole.log(typeof person);",
        "tryIt": "let user = { name: \"Sumit\", day: 2 };\nconsole.log(user.name);\nconsole.log(typeof user);"
      }
    ],
    "quiz": [
      {
        "question": "typeof null returns?",
        "options": [
          "\"null\"",
          "\"undefined\"",
          "\"object\"",
          "\"number\""
        ],
        "answer": 2,
        "explanation": "Famous JS quirk."
      },
      {
        "question": "\"5\" + 3 equals?",
        "options": [
          "8",
          "\"53\"",
          "NaN",
          "Error"
        ],
        "answer": 1,
        "explanation": "String concatenation."
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
    "subtitle": "Arithmetic, assignment, primitive vs reference",
    "duration": "2 hrs 5 mins",
    "createdOn": "3 Jul 2026",
    "status": "published",
    "topics": [
      "Arithmetic operators",
      "Assignment operators",
      "Increment/decrement",
      "Comparison",
      "let vs const vs var",
      "Primitive vs reference",
      "Logical operators"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture03-Operator-and-Data-type-in-JS-37543ac5cab9805bb338dc7e6c3ab515",
    "githubPath": "Lecture03",
    "sections": [
      {
        "id": "arithmetic",
        "title": "Arithmetic Operators",
        "content": "+, -, *, /, %, ** perform math. Watch out: `\"5\" + 3` gives `\"53\"` (string concat), but `\"5\" - 3` gives `2`.",
        "code": "console.log(10 + 3);\nconsole.log(10 % 3);\nconsole.log(2 ** 10);\nconsole.log(\"5\" + 3);\nconsole.log(\"5\" - 3);",
        "tryIt": "let a = 10, b = 3;\nconsole.log(\"Sum:\", a + b);\nconsole.log(\"Remainder:\", a % b);"
      },
      {
        "id": "assignment",
        "title": "Assignment & Increment",
        "content": "Shorthand: `+=`, `-=`, `*=`. Increment: `++a` (pre) vs `a++` (post).",
        "code": "let a = 10;\na += 5;\nconsole.log(a);\nlet b = 5;\nconsole.log(b++);\nconsole.log(b);",
        "tryIt": "let score = 0;\nscore += 10;\nscore++;\nconsole.log(\"Score:\", score);"
      },
      {
        "id": "comparison",
        "title": "Comparison Operators",
        "content": "Always use `===` and `!==` (strict). `==` does type coercion and causes bugs.",
        "code": "console.log(5 === 5);\nconsole.log(5 === \"5\");\nconsole.log(5 == \"5\");\nconsole.log(10 > 5);",
        "tryIt": "let age = 18;\nconsole.log(\"Adult?\", age >= 18);\nconsole.log(age === \"18\");"
      },
      {
        "id": "primitive-vs-reference",
        "title": "Primitive vs Reference",
        "content": "Primitives copy by value. Objects copy by **reference** — two variables can point to the same object.",
        "code": "let a = 10;\nlet b = a;\nb = 20;\nconsole.log(a, b); // 10, 20\n\nlet obj1 = { name: \"Rohit\" };\nlet obj2 = obj1;\nobj2.name = \"Mohan\";\nconsole.log(obj1.name); // Mohan",
        "tryIt": "let x = { score: 10 };\nlet y = x;\ny.score = 99;\nconsole.log(x.score);"
      }
    ],
    "quiz": [
      {
        "question": "5 === \"5\" is?",
        "options": [
          "true",
          "false"
        ],
        "answer": 1,
        "explanation": "Strict equality checks type."
      },
      {
        "question": "Objects copy by?",
        "options": [
          "value",
          "reference"
        ],
        "answer": 1,
        "explanation": "Objects share references."
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
    "subtitle": "for loops, Math object, string methods",
    "duration": "2 hrs 5 mins",
    "createdOn": "4 Jul 2026",
    "status": "published",
    "topics": [
      "for loop",
      "while loop",
      "Math methods",
      "String methods",
      "Number precision",
      "Patterns with loops"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture04-Loop-Number-math-and-String-37643ac5cab9802ba80ffca6c7e961d6",
    "githubPath": "Lecture04",
    "sections": [
      {
        "id": "for-loop",
        "title": "The for Loop",
        "content": "Repeat code a fixed number of times. Structure: `for(init; condition; update)`.",
        "code": "for (let i = 1; i <= 5; i++) {\n  console.log(\"Hello World\");\n}\n\nfor (let i = 1; i <= 10; i++) {\n  console.log(i);\n}",
        "tryIt": "for (let i = 1; i <= 5; i++) {\n  console.log(\"Day\", i);\n}"
      },
      {
        "id": "math",
        "title": "Math Object",
        "content": "Built-in math utilities: `Math.round`, `Math.floor`, `Math.ceil`, `Math.random`, `Math.min`, `Math.max`.",
        "code": "console.log(Math.round(4.7));\nconsole.log(Math.floor(4.7));\nconsole.log(Math.random());\nconsole.log(Math.max(10, 20, 5));",
        "tryIt": "let rating = 4.37;\nconsole.log(\"Rounded:\", Math.round(rating));\nlet dice = Math.floor(Math.random() * 6) + 1;\nconsole.log(\"Dice:\", dice);"
      },
      {
        "id": "strings",
        "title": "String Methods",
        "content": "Strings have powerful methods: `length`, `slice`, `replace`, `trim`, `split`, `includes`.",
        "code": "let str = \"Rohit Negi\";\nconsole.log(str.length);\nconsole.log(str.slice(0, 5));\nconsole.log(str.includes(\"Negi\"));\nconsole.log(\"  hello  \".trim());",
        "tryIt": "let data = \"Amir Rohit Anuj\";\nconsole.log(data.split(\" \"));\nconsole.log(data.replace(\"Rohit\", \"Sumit\"));"
      },
      {
        "id": "number-precision",
        "title": "Number Precision",
        "content": "JS uses floating point. `0.1 + 0.2 !== 0.3` — financial apps store values in smallest units (paise, cents).",
        "code": "console.log(0.1 + 0.2);\nconsole.log((0.1 + 0.2).toFixed(2));\n\nlet paise1 = 12001;\nlet paise2 = 13002;\nconsole.log((paise1 + paise2) / 100);",
        "tryIt": "let a = 0.1, b = 0.2;\nconsole.log(\"Raw:\", a + b);\nconsole.log(\"Fixed:\", (a + b).toFixed(1));"
      }
    ],
    "quiz": [
      {
        "question": "Math.floor(4.9)?",
        "options": [
          "4",
          "5",
          "4.9",
          "0"
        ],
        "answer": 0,
        "explanation": "Floor rounds down."
      },
      {
        "question": "for loop has how many parts?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": 2,
        "explanation": "init; condition; update."
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
    "subtitle": "Advanced loops, sum formulas, star patterns",
    "duration": "2 hrs",
    "createdOn": "5 Jul 2026",
    "status": "published",
    "topics": [
      "Printing number series",
      "Even and odd numbers",
      "Sum of N numbers",
      "Star patterns",
      "Nested loops",
      "Loop optimization"
    ],
    "notionUrl": "https://app.notion.com/p/Lecture05-37743ac5cab980fc90afeec0d60a0fda",
    "githubPath": "Lecture05",
    "sections": [
      {
        "id": "number-series",
        "title": "Printing Number Series",
        "content": "Use loops to print 1 to N, N to 1, even numbers, odd numbers.",
        "code": "for (let i = 1; i <= 10; i++) console.log(i);\n\nfor (let i = 10; i >= 1; i--) console.log(i);\n\nfor (let i = 2; i <= 20; i += 2) console.log(i);",
        "tryIt": "for (let i = 1; i <= 5; i++) console.log(i * i);"
      },
      {
        "id": "sum-formula",
        "title": "Sum of N Numbers",
        "content": "Loop: add each number. Formula: `n * (n + 1) / 2` — much faster for large N.",
        "code": "let sum = 0;\nfor (let i = 1; i <= 50; i++) sum += i;\nconsole.log(\"Loop sum:\", sum);\nconsole.log(\"Formula:\", (50 * 51) / 2);",
        "tryIt": "let n = 100;\nconsole.log((n * (n + 1)) / 2);"
      },
      {
        "id": "patterns",
        "title": "Star Patterns with Nested Loops",
        "content": "Nested loops build patterns. Outer loop = rows, inner loop = columns.",
        "code": "for (let row = 1; row <= 5; row++) {\n  let str = \"\";\n  for (let col = 1; col <= row; col++) {\n    str += \"*\";\n  }\n  console.log(str);\n}",
        "tryIt": "for (let j = 1; j <= 4; j++) {\n  let line = \"\";\n  for (let i = 1; i <= j; i++) line += j + \" \";\n  console.log(line);\n}"
      }
    ],
    "quiz": [
      {
        "question": "Sum 1 to N formula?",
        "options": [
          "n*n",
          "n*(n+1)/2",
          "n+1",
          "n/2"
        ],
        "answer": 1,
        "explanation": "Gauss formula."
      },
      {
        "question": "Nested loops are used for?",
        "options": [
          "patterns",
          "strings only",
          "comments",
          "JSON"
        ],
        "answer": 0,
        "explanation": "Rows and columns."
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
