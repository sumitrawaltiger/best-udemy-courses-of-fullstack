// TypeScript series notes — illustrated episodes, one per day, mirroring the
// JavaScript prerequisite series (jsPrereqNotes.js). Each day pairs a hand-drawn
// one-page episode (public/typescript-notes/) with written notes + code.

export const TS_META = {
  title: 'The TypeScript Series',
  subtitle: '365 Lectures · The Full TypeScript Stack',
  blurb:
    'JavaScript with a type system bolted on — catching bugs before they run. Three hundred and sixty-five illustrated episodes covering the entire TypeScript stack: the language itself (installing the compiler, enums, interfaces, classes, inheritance, access modifiers, abstract classes, generics, utility types like Partial, Required, Readonly, Record, Pick, Omit, Exclude and Extract), then React, Next.js, React Native, and Express JS — each paired with the full written notes and every code snippet.',
  totalDays: 365,
  startDate: '1 Jan 2027',
  endDate: '31 Dec 2027',
};

export const TS_GROUPS = [
  { id: 'foundations', label: 'Getting Started', icon: '🚀', desc: 'What TypeScript is and how to set it up.' },
  { id: 'types', label: 'The Type System', icon: '🧩', desc: 'The types you reach for every single day.' },
  { id: 'structures', label: 'Structuring Types', icon: '🏗️', desc: 'Interfaces, enums, and asserting what you know.' },
  { id: 'oop', label: 'Object-Oriented', icon: '🏛️', desc: 'Classes, inheritance, access modifiers and abstract classes.' },
  { id: 'generics', label: 'Generics', icon: '📦', desc: 'Flexible, reusable, type-safe components.' },
  { id: 'utility-types', label: 'Utility Types', icon: '🧰', desc: 'Built-in generics that transform existing types.' },
  { id: 'react', label: 'React', icon: '⚛️', desc: 'Typed components, props, hooks, and state.' },
  { id: 'nextjs', label: 'Next.js', icon: '▲', desc: 'The App Router, server components, and data fetching — in TypeScript.' },
  { id: 'react-native', label: 'React Native', icon: '📱', desc: 'Typed mobile apps with React Native and Expo.' },
  { id: 'express', label: 'Express JS', icon: '🛰️', desc: 'Typed REST APIs, middleware, and Node.js on the backend.' },
  { id: 'project', label: 'Project & Modules', icon: '📁', desc: 'tsconfig.json, import/export patterns, declaration files, and path aliases.' },
];


// Returns the display date for any TypeScript day (Day 1 = 1 Jan 2027)
export function getTsDate(dayNum) {
  const start = new Date(2027, 0, 1); // 1 Jan 2027
  const d = new Date(start);
  d.setDate(d.getDate() + dayNum - 1);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export const TS_DAYS = [
  {
    day: 1,
    date: '1 Jan 2027',
    group: 'foundations',
    title: 'Introduction to TypeScript',
    tagline: 'JavaScript that catches your bugs before they run.',
    image: '/typescript-notes/ep01-introduction-to-typescript.jpeg',
    tags: ['TypeScript', 'Superset', 'Compiler'],
    notes: [
      { k: 'What it is', v: 'TypeScript is a **typed superset of JavaScript** — every valid `.js` file is already valid TypeScript, plus optional static types on top.' },
      { k: 'Why it exists', v: 'JavaScript only finds type mistakes at runtime. TypeScript catches them **at compile time**, in your editor, before the code ever runs.' },
      { k: 'It compiles away', v: 'TypeScript is **transpiled** to plain JavaScript by `tsc`. The browser and Node never see types — they run the emitted JS.' },
      { k: 'Editor superpowers', v: 'Types drive **autocomplete, inline errors, safe refactors and go-to-definition** — the biggest day-to-day win.' },
      { k: 'Gradual adoption', v: 'You can add types file by file. `any` is an escape hatch while you migrate.' },
    ],
    theory: [
      {
        h: 'A typed superset of JavaScript',
        p: 'TypeScript adds a **static type system** to JavaScript. Because it is a *superset*, you don’t learn a new language — you write the JavaScript you already know and gradually add type annotations. Anything JavaScript can do, TypeScript can do; it just also understands the *shapes* of your data.',
      },
      {
        h: 'Errors at compile time, not 2am in production',
        p: 'In plain JavaScript, calling `user.nmae` (a typo) fails silently or throws at runtime. In TypeScript the compiler flags it **as you type**. The whole value proposition is moving a class of bugs from runtime to compile time, where they are cheap to fix.',
      },
      {
        h: 'It disappears at build time',
        p: 'The TypeScript compiler `tsc` **strips the types and emits plain JavaScript**. Types are a development-time tool — there is zero runtime cost and nothing new ships to the browser.',
      },
    ],
    snippets: [
      {
        label: 'Types catch the bug',
        code: '// JavaScript: silently NaN at runtime\nfunction double(n) { return n * 2; }\ndouble("5"); // "55"? NaN? who knows\n\n// TypeScript: error before it runs\nfunction doubleTs(n: number): number { return n * 2; }\ndoubleTs("5"); // ❌ Argument of type string is not assignable to number',
      },
    ],
  },
  {
    day: 2,
    date: '2 Jan 2027',
    group: 'foundations',
    title: 'Setting Up TypeScript',
    tagline: 'tsc, tsconfig, and a clean project in minutes.',
    image: '/typescript-notes/ep02-setting-up-typescript.jpeg',
    tags: ['tsc', 'tsconfig', 'Setup'],
    notes: [
      { k: 'Install the compiler', v: 'Add TypeScript to a project with `npm i -D typescript`, then compile with `npx tsc`.' },
      { k: 'tsconfig.json', v: 'The project’s brain — `npx tsc --init` generates it. It controls target, module, output dir and strictness.' },
      { k: 'strict mode', v: 'Turn on `"strict": true`. It enables `noImplicitAny`, `strictNullChecks` and more — the whole point of using TypeScript.' },
      { k: 'target & module', v: '`target` sets the JS version emitted (e.g. ES2020); `module` sets the module system (ESNext, CommonJS).' },
      { k: 'Fast dev loop', v: 'Use `tsc --watch` to recompile on save, or `tsx`/`ts-node` to run `.ts` files directly.' },
    ],
    theory: [
      {
        h: 'From zero to compiling',
        p: 'Setting up TypeScript is three steps: install it as a dev dependency, create a `tsconfig.json`, and run the compiler. `tsc` reads the config, type-checks every file, and writes plain JavaScript to your output directory.',
      },
      {
        h: 'tsconfig.json is the control panel',
        p: 'Almost every TypeScript behaviour is configured here. The keys you touch first:\n\n- **target** — which JavaScript version to emit\n- **module** — the module format (ESNext / CommonJS)\n- **outDir / rootDir** — where source lives and where output goes\n- **strict** — turn on all the safety checks',
      },
      {
        h: 'Always start strict',
        p: 'A non-strict TypeScript project quietly lets `any` leak everywhere and you lose most of the benefit. `"strict": true` is the recommended default — it forces you to handle `null`, annotate ambiguous values, and generally means the types are actually telling the truth.',
      },
    ],
    snippets: [
      {
        label: 'Install & init',
        code: 'npm i -D typescript\nnpx tsc --init        # creates tsconfig.json\nnpx tsc               # compile\nnpx tsc --watch       # recompile on save',
      },
      {
        label: 'A sensible tsconfig',
        code: '{\n  "compilerOptions": {\n    "target": "ES2020",\n    "module": "ESNext",\n    "moduleResolution": "bundler",\n    "outDir": "dist",\n    "strict": true,\n    "esModuleInterop": true\n  }\n}',
      },
    ],
  },
  {
    day: 3,
    date: '3 Jan 2027',
    group: 'types',
    title: 'Type System Basics',
    tagline: 'Annotations, inference, and the primitive types.',
    image: '/typescript-notes/ep03-type-system-basics.jpeg',
    tags: ['Types', 'Inference', 'Primitives'],
    notes: [
      { k: 'Annotations', v: 'Declare a type with a colon: `let age: number = 30`. The compiler enforces it from then on.' },
      { k: 'Inference', v: 'TypeScript **infers** types when it can — `let name = "Sam"` is already `string`, no annotation needed.' },
      { k: 'Primitives', v: 'The core types are `string`, `number`, `boolean`, `null`, `undefined`, `symbol` and `bigint`.' },
      { k: 'any vs unknown', v: '`any` turns checking off (avoid it). `unknown` is the safe unknown — you must narrow it before use.' },
      { k: 'void & never', v: '`void` = returns nothing; `never` = never returns (throws or infinite loop).' },
    ],
    theory: [
      {
        h: 'Annotate, or let it infer',
        p: 'You can always write the type explicitly (`let count: number = 0`), but TypeScript is smart enough to **infer** most types from the value. Good style: annotate function parameters and public APIs; let inference handle obvious locals.',
      },
      {
        h: 'The primitives',
        p: 'Everything builds on the primitive types — `string`, `number`, `boolean`, plus `null`, `undefined`, `symbol` and `bigint`. There is no separate `int`/`float`: JavaScript (and so TypeScript) has one `number` type.',
      },
      {
        h: 'any is a hole; unknown is a gate',
        p: '`any` silences the compiler entirely — one `any` can poison a whole call chain. `unknown` is its safe sibling: you can hold any value, but you must **narrow** it (with `typeof`, a check, or an assertion) before you can use it. Prefer `unknown`.',
      },
    ],
    snippets: [
      {
        label: 'Annotation vs inference',
        code: 'let age: number = 30;      // explicit\nlet name = "Sam";          // inferred as string\n// name = 42;              // ❌ number not assignable to string',
      },
      {
        label: 'any vs unknown',
        code: 'let a: any = "hi";\na.foo.bar();               // compiles, crashes at runtime 😬\n\nlet u: unknown = "hi";\n// u.toUpperCase();        // ❌ must narrow first\nif (typeof u === "string") u.toUpperCase(); // ✅',
      },
    ],
  },
  {
    day: 4,
    date: '4 Jan 2027',
    group: 'types',
    title: 'Functions in TypeScript',
    tagline: 'Typed params, return types, and safer calls.',
    image: '/typescript-notes/ep04-functions-in-typescript.jpeg',
    tags: ['Functions', 'Parameters', 'Return Types'],
    notes: [
      { k: 'Typed parameters', v: 'Each parameter gets a type: `function add(a: number, b: number)`. Wrong argument types are errors.' },
      { k: 'Return types', v: 'Annotate the return after the params: `(): number`. Usually inferred, but explicit is clearer for public APIs.' },
      { k: 'Optional & default', v: '`name?: string` makes a param optional; `= "guest"` gives it a default.' },
      { k: 'Rest params', v: '`...nums: number[]` collects the rest into a typed array.' },
      { k: 'Function types', v: 'A variable can be typed as a function: `let fn: (x: number) => number`.' },
    ],
    theory: [
      {
        h: 'Parameters and returns are contracts',
        p: 'A typed function is a **contract**: callers must pass the right argument types, and the body must return the declared type. Get either wrong and the compiler tells you at the call site or the `return`.',
      },
      {
        h: 'Optional, default, and rest',
        p: 'TypeScript mirrors JavaScript’s flexibility with types:\n\n- **Optional** — `arg?: T` may be omitted (its type becomes `T | undefined`)\n- **Default** — `arg: T = value` supplies a fallback\n- **Rest** — `...args: T[]` gathers any number of trailing arguments\n\nOptional params must come after required ones.',
      },
      {
        h: 'Functions are values, and they have types',
        p: 'Because functions are first-class, they have types too. A **function type** `(x: number) => string` describes something callable with a number that returns a string — used for callbacks, higher-order functions and variables that hold functions.',
      },
    ],
    snippets: [
      {
        label: 'Params, defaults, rest',
        code: 'function greet(name: string, greeting: string = "Hi"): string {\n  return `${greeting}, ${name}`;\n}\n\nfunction sum(...nums: number[]): number {\n  return nums.reduce((a, b) => a + b, 0);\n}',
      },
      {
        label: 'A function type',
        code: 'let transform: (x: number) => number;\ntransform = (x) => x * 2;   // ✅\n// transform = (x) => "no"; // ❌ string not assignable to number',
      },
    ],
  },
  {
    day: 5,
    date: '5 Jan 2027',
    group: 'types',
    title: 'Data Types',
    tagline: 'Arrays, tuples, objects, unions and literals.',
    image: '/typescript-notes/ep05-data-types.jpeg',
    tags: ['Arrays', 'Tuples', 'Unions'],
    notes: [
      { k: 'Arrays', v: '`number[]` or `Array<number>` — a list where every element shares one type.' },
      { k: 'Tuples', v: '`[string, number]` — a fixed-length array where each position has its own type.' },
      { k: 'Objects', v: 'Describe shape inline: `{ name: string; age: number }`. Missing or extra fields are errors.' },
      { k: 'Union types', v: '`string | number` — a value that may be one of several types; narrow before using.' },
      { k: 'Literal types', v: '`"asc" | "desc"` — only those exact values are allowed, great for options.' },
    ],
    theory: [
      {
        h: 'Collections: arrays and tuples',
        p: 'An **array** is a homogeneous list — `string[]` is any number of strings. A **tuple** is a fixed, ordered pair (or triple) where each slot has its own type — `[number, number]` for coordinates, `[string, number]` for a name/age pair.',
      },
      {
        h: 'Object shapes',
        p: 'You can type an object’s shape directly. TypeScript then enforces that every listed property exists with the right type, and (in most contexts) that no unexpected properties sneak in. This is the seed of interfaces, which name and reuse these shapes.',
      },
      {
        h: 'Unions and literals',
        p: 'A **union** (`A | B`) says “one of these”. Combined with **literal types** — exact values like `"admin"` or `200` — you get precise, self-documenting APIs. A `type Direction = "up" | "down"` accepts only those two strings, and the editor autocompletes them.',
      },
    ],
    snippets: [
      {
        label: 'Arrays, tuples, objects',
        code: 'const scores: number[] = [90, 82, 77];\nconst point: [number, number] = [10, 20];\nconst user: { name: string; age: number } = { name: "Sam", age: 30 };',
      },
      {
        label: 'Unions & literals',
        code: 'type Order = "asc" | "desc";\nfunction sortBy(dir: Order) {}\nsortBy("asc");   // ✅\n// sortBy("up"); // ❌ not "asc" | "desc"\n\nlet id: string | number = 7;\nid = "abc"; // both allowed',
      },
    ],
  },
  {
    day: 6,
    date: '6 Jan 2027',
    group: 'types',
    title: 'Advanced Types',
    tagline: 'Aliases, intersections, generics and narrowing.',
    image: '/typescript-notes/ep06-advanced-types.jpeg',
    tags: ['Generics', 'Intersections', 'Narrowing'],
    notes: [
      { k: 'Type aliases', v: '`type ID = string | number` names a type so you can reuse it everywhere.' },
      { k: 'Intersections', v: '`A & B` combines types — the result must satisfy **both**.' },
      { k: 'Generics', v: '`function first<T>(arr: T[]): T` — reusable code that keeps the exact type it was called with.' },
      { k: 'Narrowing', v: '`typeof`, `in`, and truthy checks let the compiler shrink a union to a specific type inside a branch.' },
      { k: 'Utility types', v: 'Built-ins like `Partial<T>`, `Pick<T, K>` and `Readonly<T>` transform existing types.' },
    ],
    theory: [
      {
        h: 'Name it, combine it',
        p: 'A **type alias** gives a name to any type — a union, an object shape, a function type — so it can be reused and documented. **Intersections** (`A & B`) merge shapes: the result has all properties of both, useful for composing small types into bigger ones.',
      },
      {
        h: 'Generics keep the type',
        p: 'Generics are reusable types with a placeholder. `function first<T>(arr: T[]): T` works for any array and **preserves the element type** — call it with `string[]` and you get a `string` back, not `any`. Generics are how you write flexible library code without losing type safety.',
      },
      {
        h: 'Narrowing',
        p: 'When a value is a union, TypeScript **narrows** it inside conditional branches. After `if (typeof x === "string")`, the compiler knows `x` is a string in that block. Combined with `in` checks and discriminated unions, narrowing lets you handle each case safely.',
      },
    ],
    snippets: [
      {
        label: 'Generic function',
        code: 'function first<T>(arr: T[]): T | undefined {\n  return arr[0];\n}\nconst n = first([1, 2, 3]); // n: number | undefined\nconst s = first(["a", "b"]); // s: string | undefined',
      },
      {
        label: 'Alias, intersection, narrowing',
        code: 'type WithId = { id: number };\ntype Named = { name: string };\ntype User = WithId & Named; // has id AND name\n\nfunction print(x: string | number) {\n  if (typeof x === "number") x.toFixed(2); // narrowed to number\n  else x.toUpperCase();                    // narrowed to string\n}',
      },
    ],
  },
  {
    day: 7,
    date: '7 Jan 2027',
    group: 'structures',
    title: 'Interfaces',
    tagline: 'Named, extendable contracts for object shapes.',
    image: '/typescript-notes/ep07-interfaces.jpeg',
    tags: ['Interface', 'extends', 'Contracts'],
    notes: [
      { k: 'What it is', v: 'An `interface` names the shape of an object — a reusable contract other code must satisfy.' },
      { k: 'Optional & readonly', v: '`age?: number` is optional; `readonly id: number` can’t be reassigned after creation.' },
      { k: 'Extending', v: '`interface Admin extends User` inherits all of `User`’s members and adds more.' },
      { k: 'Declaration merging', v: 'Two interfaces with the same name **merge** — a feature `type` aliases don’t have.' },
      { k: 'interface vs type', v: 'Both describe object shapes; use `interface` for objects/classes you extend, `type` for unions and aliases.' },
    ],
    theory: [
      {
        h: 'Contracts for objects',
        p: 'An **interface** describes what an object must look like — its properties and their types — without caring how the object was made. Functions and classes then accept “anything shaped like this”, which is the heart of TypeScript’s **structural typing**.',
      },
      {
        h: 'Optional, readonly, and extending',
        p: 'Interfaces model real data precisely:\n\n- **optional** members `?` may be missing\n- **readonly** members can be set once, never reassigned\n- **extends** builds a bigger interface from a smaller one, inheriting every member\n\nThis makes interfaces composable — small contracts assemble into larger ones.',
      },
      {
        h: 'interface vs type alias',
        p: 'They overlap a lot. Rules of thumb: reach for **interface** when describing object/class shapes you’ll `extend` or `implement` (and to use declaration merging); reach for **type** for unions, tuples, and mapped/conditional types. Either works for a plain object shape.',
      },
    ],
    snippets: [
      {
        label: 'An interface',
        code: 'interface User {\n  readonly id: number;\n  name: string;\n  age?: number;      // optional\n}\n\nconst u: User = { id: 1, name: "Sam" };\n// u.id = 2;         // ❌ readonly',
      },
      {
        label: 'Extending',
        code: 'interface Admin extends User {\n  role: "admin";\n}\nconst a: Admin = { id: 1, name: "Sam", role: "admin" };',
      },
    ],
  },
  {
    day: 8,
    date: '8 Jan 2027',
    group: 'structures',
    title: 'Enums & Type Assertions',
    tagline: 'Names for constants, and telling TS what you know.',
    image: '/typescript-notes/ep08-enums-and-type-assertions.jpeg',
    tags: ['Enums', 'const enum', 'Type Assertions'],
    notes: [
      { k: 'What & why', v: '**Enums give names to constant values.** **Type assertions** let you tell TypeScript what you know for sure.' },
      { k: 'Numeric enums', v: 'Enums with numbers, **auto-incrementing from 0** by default (`Up=0, Down=1, …`).' },
      { k: 'Bi-directional', v: 'Numeric enums map **both ways** — name→value (`Direction.Left` → 2) and value→name (`Direction[1]` → "Down").' },
      { k: 'String enums', v: 'Enums with string values (`Admin = "ADMIN"`). **Meaningful, but not bi-directional** — no reverse lookup.' },
      { k: 'Const enums', v: '`const enum` is **inlined at compile time** — no extra JS, better performance, smaller bundle.' },
      { k: 'const enum limit', v: 'Const enums are **removed during compilation**, so they can’t cross module boundaries without special config.' },
      { k: 'Type assertions', v: 'Use `value as string` (or `<string>value`) when you know a value’s type better than TS can infer.' },
      { k: 'Be careful', v: 'Assertions do **no runtime checks** — you are responsible for being 100% sure, or you get a runtime crash.' },
    ],
    theory: [
      {
        h: 'Numeric enums — names for numbers',
        p: 'A **numeric enum** gives readable names to a set of numbers. By default the first member is `0` and each subsequent one **auto-increments** — so in `enum Direction { Up, Down, Left, Right }`, `Up` is `0`, `Down` is `1`, `Left` is `2`, `Right` is `3`.\n\nNumeric enums are **bi-directional**: you can get the value from the name (`Direction.Left` → `2`) *and* the name from the value (`Direction[1]` → `"Down"`). TypeScript generates a reverse mapping for you.',
      },
      {
        h: 'String enums — meaningful values',
        p: 'A **string enum** assigns an explicit string to each member: `Admin = "ADMIN"`. The stored value is now self-describing, which is far nicer than a bare number when you log it or send it to an API.\n\nThe trade-off: string enums are **not bi-directional**. There is no reverse lookup — `Role["ADMIN"]` is an error. Use string enums **when the values are meaningful, when working with APIs, and when avoiding magic numbers**.',
      },
      {
        h: 'Const enums — inlined for performance',
        p: 'A `const enum` is **inlined at compile time**: instead of emitting an enum object, the compiler replaces each usage with its literal value. The wins are **no extra JavaScript generated, better performance, and a smaller bundle**.\n\nThe limitation: because a const enum is **removed during compilation**, it cannot be used across module boundaries without special configuration (`isolatedModules` and friends). For app-internal constants it’s great; for shared library types, prefer a regular enum or a union of literals.',
      },
      {
        h: 'Type assertions — “I know more than the compiler”',
        p: 'Sometimes **you know more about a value than TypeScript can infer** — for example a DOM lookup or a value typed as `unknown`. A **type assertion** tells the compiler to treat it as a specific type. There are two syntaxes: `value as string` (the `as` form, preferred) and `<string>value` (the angle-bracket form, which clashes with JSX).\n\nCommon use cases: working with the DOM, converting `unknown` types, and telling TS what you know. The crucial warning: **type assertions do no checks at runtime.** You are overriding the compiler, so if you’re wrong, the code compiles and then crashes. Only assert when you are genuinely 100% sure.',
      },
      {
        h: 'Quick recap',
        p: '- **Numeric enums** → auto-increment numbers, bi-directional.\n- **String enums** → meaningful values, not bi-directional.\n- **Const enums** → inlined at compile time, better performance.\n- **Type assertions** → tell TypeScript what you know (use carefully).',
      },
    ],
    snippets: [
      {
        label: 'Numeric enums (bi-directional)',
        code: 'enum Direction {\n  Up,     // 0\n  Down,   // 1\n  Left,   // 2\n  Right,  // 3\n}\n\nlet move: Direction = Direction.Up;\nconsole.log(move);            // 0\nconsole.log(Direction.Left);  // 2\nconsole.log(Direction[1]);    // "Down"  ← reverse lookup',
      },
      {
        label: 'String enums (not bi-directional)',
        code: 'enum Role {\n  Admin = "ADMIN",\n  Editor = "EDITOR",\n  Viewer = "VIEWER",\n}\n\nlet userRole: Role = Role.Admin;\nconsole.log(userRole); // "ADMIN"\n// console.log(Role["ADMIN"]); // ❌ Error — no reverse mapping',
        note: 'Use string enums when values are meaningful, with APIs, and to avoid magic numbers.',
      },
      {
        label: 'Const enums (inlined)',
        code: 'const enum Status {\n  Success = "SUCCESS",\n  Error = "ERROR",\n  Pending = "PENDING",\n}\n\nlet st: Status = Status.Success;\n// Compiles to: let st = "SUCCESS";  — no enum object emitted',
        note: 'No extra JS, better performance, smaller bundle — but removed at compile time, so it can’t cross module boundaries without special config.',
      },
      {
        label: 'Type assertions',
        code: 'let value: unknown = "Faisal";\n\n// 1) "as" syntax (preferred)\nlet name1 = value as string;\nconsole.log(name1.toUpperCase()); // "FAISAL"\n\n// 2) angle-bracket syntax (clashes with JSX)\nlet name2 = <string>value;\nconsole.log(name2.length); // 6',
        note: 'Assertions do NO runtime checks — you are responsible for being 100% sure.',
      },
    ],
  },
  {
    day: 9,
    date: '9 Jan 2027',
    group: 'oop',
    title: 'Classes',
    tagline: 'Blueprints for objects — properties, constructors & methods.',
    image: '/typescript-notes/ep09-classes.jpeg',
    tags: ['class', 'constructor', 'Methods', 'OOP'],
    notes: [
      { k: 'What & why', v: 'A **class is a blueprint** for creating objects (instances). It bundles **properties (data)** and **methods (functions)** — OOP structure and reusability.' },
      { k: 'class keyword', v: 'Declare a class with the `class` keyword; create an instance with `new` (`new Person("Faisal", 21)`).' },
      { k: 'Properties', v: 'Properties hold the object’s **data**, and are typed like variables (`name: string`, `age: number`).' },
      { k: 'Methods', v: 'Methods are **functions inside a class** — they define the object’s **behaviour** (`greet(): void`).' },
      { k: 'Constructor', v: 'The `constructor()` runs **automatically, once**, when an object is created — used to **initialize properties**.' },
      { k: 'this', v: 'Inside a class, `this` refers to the **current instance**, so `this.name = name` sets that object’s own property.' },
      { k: 'new & memory', v: '`new` allocates memory and returns a **real object** that follows the class structure (the class itself allocates none).' },
      { k: 'Independent objects', v: 'Every instance has its **own copy of properties** — `p1` and `p2` don’t share state.' },
    ],
    theory: [
      {
        h: 'What is a class?',
        p: 'A **class is a blueprint for creating objects (instances)**. It can contain **properties (data)** and **methods (functions)**, bringing structure and reusability to your code using **OOP principles**.\n\n**Class vs object:** a **class** is the blueprint — it *defines the structure* and has **no memory allocated**. An **object (instance)** is a **real entity** that *follows the class structure* and **has memory allocated**. Real-world analogy: the **class is “Car”** (the blueprint); an **object is “my car”** — an actual car with a plate number, colour, and so on.',
      },
      {
        h: 'The constructor',
        p: 'The `constructor()` method is called automatically when an object is created. Its job is to **initialize the object’s properties** from the arguments passed to `new`.\n\nThree things to remember: the method name is always `constructor`; it is called **only once**, at the time of object creation; and it is **used to initialize object properties**. Inside it, `this` points at the brand-new instance, so `this.title = title` stores that object’s own data.',
      },
      {
        h: 'Creating multiple objects',
        p: 'From a single class you can create **many independent objects**. `const p1 = new Person("Ali", 20)` and `const p2 = new Person("Sara", 22)` are separate instances — calling `p1.greet()` prints *“Hello, I’m Ali!”* and `p2.greet()` prints *“Hello, I’m Sara!”*, because **each object has its own copy of the properties**.',
      },
      {
        h: 'Methods — behaviour inside the class',
        p: '**Methods are functions defined inside a class.** They read and update the instance’s properties through `this`, and can declare a **return type** (`area(): number`) or return nothing (`describe(): void`).\n\nIn the `Rectangle` example, `area()` returns `width * height` (so `r.area()` is `50`) and `describe()` logs `"Rectangle 5x10"`. The object `r` exposes both as behaviours — one returns a number, the other logs a description.',
      },
      {
        h: 'Quick recap',
        p: '- **Class** = blueprint.\n- **Constructor()** = initializes the object.\n- **Properties** = data.\n- **Methods** = behavior.\n- **Objects** = real-world instances.\n\nClasses help us write **organized, reusable and scalable code** — think in objects, code with power.',
      },
    ],
    snippets: [
      {
        label: 'A class with properties, a constructor and a method',
        code: 'class Person {\n  name: string;   // property\n  age: number;    // property\n\n  constructor(name: string, age: number) {\n    this.name = name;   // initialize properties\n    this.age = age;\n  }\n\n  greet(): void {        // method\n    console.log(`Hello, I\'m ${this.name}!`);\n  }\n}\n\nconst p = new Person("Faisal", 21);\np.greet();   // Hello, I\'m Faisal!',
      },
      {
        label: 'The constructor initializes properties',
        code: 'class Book {\n  title: string;\n  author: string;\n\n  constructor(title: string, author: string) {\n    this.title = title;\n    this.author = author;\n  }\n}\n\nconst book1 = new Book("Atomic Habits", "James Clear");\nconsole.log(book1.title);   // Atomic Habits',
        note: 'The constructor runs automatically, only once, when the object is created.',
      },
      {
        label: 'Multiple independent objects',
        code: 'const p1 = new Person("Ali", 20);\nconst p2 = new Person("Sara", 22);\n\np1.greet();   // Hello, I\'m Ali!\np2.greet();   // Hello, I\'m Sara!',
        note: 'Each object has its own copy of the properties — they don’t share state.',
      },
      {
        label: 'Methods with return types',
        code: 'class Rectangle {\n  width: number;\n  height: number;\n\n  constructor(w: number, h: number) {\n    this.width = w;\n    this.height = h;\n  }\n\n  area(): number {\n    return this.width * this.height;\n  }\n\n  describe(): void {\n    console.log(`Rectangle ${this.width}x${this.height}`);\n  }\n}\n\nconst r = new Rectangle(5, 10);\nconsole.log(r.area());   // 50\nr.describe();            // Rectangle 5x10',
        note: '`area(): number` returns a value; `describe(): void` returns nothing.',
      },
    ],
  },
  {
    day: 10,
    date: '10 Jan 2027',
    group: 'oop',
    title: 'Inheritance & Access Modifiers',
    tagline: 'Re-use and extend code, and control who can see what.',
    image: '/typescript-notes/ep10-inheritance.jpeg',
    tags: ['Inheritance', 'extends', 'super', 'public/private/protected'],
    notes: [
      { k: 'Inheritance', v: 'Inheritance lets a class (**child**) acquire the properties and methods of another class (**parent**) with `extends` — so you **re-use and extend** code instead of repeating it.' },
      { k: 'extends', v: '`class Dog extends Animal` makes `Dog` inherit everything `Animal` has, then add its own members on top.' },
      { k: 'super()', v: '`super(...)` calls the **parent constructor**, and `super.method()` calls a parent method. It must run before you use `this` in the child constructor.' },
      { k: 'Method override', v: 'A child can **redefine** an inherited method (same name) to change behaviour — `Dog.speak()` overrides `Animal.speak()`.' },
      { k: 'public', v: 'The **default** modifier — visible **everywhere** (inside the class, outside it, and in subclasses). Like an *open hall*.' },
      { k: 'private', v: 'Visible **only inside the class** where it is declared — not even subclasses can touch it. Like a *locked room*; use it for sensitive data.' },
      { k: 'protected', v: 'Visible in the class **and its subclasses**, but not from outside. Like a *family room*.' },
      { k: 'Getters & setters', v: 'Methods that **control how private properties are read or updated** — expose `getBalance()` / `deposit()` instead of a public `balance`, so you can validate every change.' },
    ],
    theory: [
      {
        h: 'What is inheritance?',
        p: 'Inheritance allows a **class (child) to acquire properties and methods from another class (parent)**. You declare it with `extends`: `class Dog extends Animal`. The child gets everything the parent defines — an **inheritance chain** where `Animal (Parent)` holds `name` and `speak()`, and `Dog (Child)` adds `breed` and *overrides* `speak()`.\n\n**Why inheritance?** Code reusability, extensibility, better organization and easier maintenance. Real-world analogy: a **child inherits genes and traits from parents** but can also have their own unique characteristics.',
      },
      {
        h: 'The super keyword',
        p: '`super` connects the child to its parent. It **calls the constructor of the parent class** (`super(name)`), and it can **access parent-class methods** (`super.speak()`). One firm rule: in a child constructor, `super(...)` must be called before you use `this` — the parent has to initialise its part of the object first.',
      },
      {
        h: 'Access modifiers — controlling visibility',
        p: 'Access modifiers control the **visibility of class members**.\n\n- `public` — the default; visible **anywhere** (inside the class, outside it, and in subclasses). *e.g. `public name: string`.*\n- `private` — visible **only within the class** where it is declared. *e.g. `private age: number`.*\n- `protected` — visible in the **class and its subclasses**, but not outside. *e.g. `protected id: number`.*\n\nMental model: **private is a locked room**, **protected is a family room**, and **public is an open hall**. In the `Person`/`Employee` example, a subclass can read `this.id` (protected) but **not** `this.age` (private).',
      },
      {
        h: 'Getters & setters (bonus)',
        p: 'When data is `private`, you expose **controlled methods** to read or update it. A `BankAccount` keeps `balance` private, offers `getBalance()` to read it and `deposit(amount)` that only adds when `amount > 0`. Calling `acc.balance` directly is an **error** — every change goes through a method you can validate, protecting invariants.',
      },
      {
        h: 'Quick recap',
        p: '- **Inheritance** helps us **re-use and extend** code.\n- The `super` keyword accesses parent-class features.\n- **Access modifiers** — `public`, `private`, `protected` — control **visibility**.\n- **Getters & setters** help manage and **validate data safely**.\n\nGood practice: prefer `protected` over `public` for class internals, use `private` for sensitive data, and remember — **inheritance + modifiers = powerful OOP**. Great code is not just working, it’s well-structured and future-proof.',
      },
    ],
    snippets: [
      {
        label: 'Inheritance with extends, super and an override',
        code: 'class Animal {\n  name: string;\n  constructor(name: string) {\n    this.name = name;\n  }\n  speak(): void {\n    console.log(`${this.name} makes a sound.`);\n  }\n}\n\nclass Dog extends Animal {\n  breed: string;\n  constructor(name: string, breed: string) {\n    super(name);        // call parent constructor\n    this.breed = breed;\n  }\n  speak(): void {\n    console.log(`${this.name} barks.`);  // override\n  }\n}\n\nconst d = new Dog("Buddy", "Labrador");\nd.speak();   // Buddy barks.',
        note: 'super(name) must be called before using this in the child constructor.',
      },
      {
        label: 'public / private / protected',
        code: 'class Person {\n  public name: string;\n  private age: number;\n  protected id: number;\n\n  constructor(name: string, age: number, id: number) {\n    this.name = name;\n    this.age = age;   // only inside Person\n    this.id = id;     // accessible in subclasses\n  }\n}\n\nclass Employee extends Person {\n  showId() {\n    console.log(this.id);    // ✅ OK (protected)\n    // console.log(this.age); // ❌ Error (private)\n  }\n}',
        note: 'protected is readable by subclasses; private is not.',
      },
      {
        label: 'Getters & setters guard a private field',
        code: 'class BankAccount {\n  private balance: number = 0;\n\n  getBalance(): number {\n    return this.balance;\n  }\n\n  deposit(amount: number) {\n    if (amount > 0) this.balance += amount;\n  }\n}\n\nconst acc = new BankAccount();\nacc.deposit(1000);\nconsole.log(acc.getBalance()); // 1000\n// acc.balance;                // ❌ Error! private',
        note: 'Every change to balance goes through deposit(), so it can be validated.',
      },
    ],
  },
  {
    day: 11,
    date: '11 Jan 2027',
    group: 'oop',
    title: 'Abstract Classes',
    tagline: 'Blueprints with some implementation — children must finish the rest.',
    image: '/typescript-notes/ep11-abstract-classes.jpeg',
    tags: ['abstract', 'Abstract Methods', 'vs Interface', 'OOP'],
    notes: [
      { k: 'What it is', v: 'An **abstract class cannot be instantiated** directly — it is meant to be **inherited** by other classes.' },
      { k: 'Blueprint + logic', v: 'Abstract classes let us define a **blueprint with some implementation**, but **force child classes to complete the rest**.' },
      { k: 'Abstract methods', v: 'Declared **without a body** — child classes **must** provide the implementation, or TypeScript errors.' },
      { k: 'Concrete methods', v: 'Abstract classes can also have **normal methods with a body** (shared behaviour for every child).' },
      { k: 'When to use', v: 'Shared base with **some default behaviour**, plus a **contract** children must fill in — strong **is-a** relationships.' },
      { k: 'vs interface', v: 'Abstract class = **structure + shared logic**. Interface = **contract / capability** only (no implementation, no constructors).' },
      { k: 'No multiple inherit', v: 'A class can **extend only one** abstract class, but can **implement many** interfaces.' },
      { k: 'Interview angle', v: 'Know the difference from interfaces, and when you’d pick an abstract class over a pure contract.' },
    ],
    theory: [
      {
        h: 'What is an abstract class?',
        p: 'An abstract class **cannot be instantiated** directly and is meant to be **inherited** by other classes. Think of it as a **blueprint of a house**: it defines rooms, doors and windows (structure), but you must build the actual house (implement the details).\n\n- Cannot create objects of an abstract class.\n- Can have both **abstract** and **concrete** members.\n- Child classes must implement all abstract members.\n- Helps create a **common structure** for related classes.',
        code: 'abstract class Animal {\n  constructor(public name: string) {}\n\n  // concrete method (with implementation)\n  sleep(): void {\n    console.log(`${this.name} is sleeping`);\n  }\n\n  // abstract method (no implementation)\n  abstract makeSound(): void;\n}',
      },
      {
        h: 'Abstract methods',
        p: '**Abstract methods are declared without implementation.** Child classes must provide the implementation. If a child class doesn’t implement all abstract methods, **TypeScript will throw an error**.',
        code: 'abstract class Shape {\n  abstract area(): number;        // must be implemented\n  abstract perimeter(): number;   // must be implemented\n}\n\nclass Rectangle extends Shape {\n  constructor(private w: number, private h: number) {\n    super();\n  }\n  area(): number { return this.w * this.h; }\n  perimeter(): number { return 2 * (this.w + this.h); }\n}\n\nconst r = new Rectangle(5, 10);\nconsole.log(r.area()); // 50',
      },
      {
        h: 'When to use abstract classes?',
        p: 'Reach for an abstract class when:\n\n- Multiple classes share a **common set of properties and methods**.\n- You want to provide **default behaviour** for some methods but **enforce implementation** for others.\n- You want to define a **base contract** for future classes.\n\n**Good use cases:** Animals (Dog, Cat, Bird), Payment Gateways (Card, UPI, Wallet), UI Components (Button, Input, Modal).\n\n**Bad use case:** Don’t use abstract classes just to group similar things if they don’t have a strong **is-a** relationship. Use **interfaces** instead!',
      },
      {
        h: 'Abstract class vs interface',
        p: 'How they differ:\n\n- **Can have implementation** — abstract class ✅ · interface ❌\n- **Can have constructors** — abstract class ✅ · interface ❌\n- **Access modifiers** (`public` / `private` / `protected`) — abstract class ✅ · interface ❌\n- **Multiple inheritance** — abstract class ❌ (one `extends`) · interface ✅ (many `implements`)\n- **Best for** — abstract class: shared base with some implementation · interface: defining a contract (capability)\n\n**Pro tip:** use abstract classes when you want both **structure + shared logic**.',
        code: 'abstract class Payment {\n  constructor(public amount: number) {}\n  process(): void {\n    console.log(`Processing $${this.amount}...`);\n  }\n  abstract pay(): void; // must be implemented\n}\n\nclass CreditCardPayment extends Payment {\n  pay(): void {\n    console.log("Paid using Credit Card ✅");\n  }\n}\n\nconst payment = new CreditCardPayment(1200);\npayment.process(); // Processing $1200...\npayment.pay();     // Paid using Credit Card ✅',
      },
      {
        h: 'Quick recap',
        p: '- Abstract classes **can’t be instantiated**.\n- They can have both **abstract** (no body) and **concrete** (with body) members.\n- Child classes **must implement** all abstract methods.\n- Use abstract classes to provide a **base structure + common functionality**.\n\n**Interview Q:** What is the difference between abstract class and interface? When do you use abstract classes?\n\nBuild strong foundations. Write better code. Ship with confidence.',
      },
    ],
    snippets: [
      {
        label: 'Abstract class with concrete + abstract methods',
        code: 'abstract class Animal {\n  constructor(public name: string) {}\n\n  sleep(): void {\n    console.log(`${this.name} is sleeping`);\n  }\n\n  abstract makeSound(): void;\n}\n\n// const a = new Animal("Rex"); // ❌ Cannot create an instance of an abstract class',
        note: 'Concrete methods have a body; abstract methods do not — children must fill them in.',
      },
      {
        label: 'Implementing abstract methods (Shape → Rectangle)',
        code: 'abstract class Shape {\n  abstract area(): number;\n  abstract perimeter(): number;\n}\n\nclass Rectangle extends Shape {\n  constructor(private w: number, private h: number) {\n    super();\n  }\n  area(): number { return this.w * this.h; }\n  perimeter(): number { return 2 * (this.w + this.h); }\n}\n\nconst r = new Rectangle(5, 10);\nconsole.log(r.area()); // 50',
        note: 'If Rectangle skipped area() or perimeter(), TypeScript would error.',
      },
      {
        label: 'Shared logic + forced pay() (Payment)',
        code: 'abstract class Payment {\n  constructor(public amount: number) {}\n  process(): void {\n    console.log(`Processing $${this.amount}...`);\n  }\n  abstract pay(): void;\n}\n\nclass CreditCardPayment extends Payment {\n  pay(): void {\n    console.log("Paid using Credit Card ✅");\n  }\n}\n\nconst payment = new CreditCardPayment(1200);\npayment.process(); // Processing $1200...\npayment.pay();     // Paid using Credit Card ✅',
        note: 'process() is shared; pay() is unique per gateway — classic abstract-class pattern.',
      },
    ],
  },
  {
    day: 12,
    date: '12 Jan 2027',
    group: 'oop',
    title: 'Implementing Interfaces & Static Members',
    tagline: 'Contracts for classes, and members that belong to the class itself.',
    image: '/typescript-notes/ep12-interfaces-and-static-members.jpeg',
    tags: ['implements', 'Multiple Interfaces', 'Static Members', 'Interface vs Class'],
    notes: [
      { k: 'Implementing interfaces', v: 'A class **commits to an interface** using the `implements` keyword — it must provide every property and method the interface declares.' },
      { k: 'Missing members = error', v: 'If a class is **missing any property or method** from the interface it implements, **TypeScript throws an error** at compile time.' },
      { k: 'Consistent structure', v: 'Implementing an interface **ensures consistent structure** across every class that implements it.' },
      { k: 'Multiple interfaces', v: 'A class can implement **more than one interface** at once, separated by commas — `class User implements Person, Contact { ... }`.' },
      { k: 'Static members', v: '**Static members belong to the class itself, not to instances.** Access them via the **class name** (`Counter.count`), not an object.' },
      { k: 'Instance vs static', v: 'An **instance member** belongs to an object and is accessed via that object (`c1.value`); a **static member** belongs to the class and is accessed via the class name (`Counter.count`).' },
      { k: 'Static methods', v: 'A `static` method is called on the **class**, not an instance — `Demo.hello()` works, but `d.hello()` does not (only non-static methods are available on instances).' },
      { k: 'When to use static', v: 'Prefer static members for **utility functions, constants, and helper methods** that don’t need object-specific data.' },
    ],
    theory: [
      {
        h: 'Implementing an interface',
        p: 'A class can **commit to implementing an interface** using the `implements` keyword. The class **must implement all properties and methods** declared by the interface — if any are missing, **TypeScript will throw an error**. This ensures **consistent structure** across every implementation.\n\n**Real-world analogy:** an **interface is a contract**, and a **class is the employee** who signs it. The employee must follow every rule written in the contract — every property and method the interface promises, the class must actually provide.',
        code: 'interface User {\n  id: number;\n  name: string;\n  email: string;\n  login(): void;\n}\n\nclass Admin implements User {\n  id: number;\n  name: string;\n  email: string;\n\n  constructor(id: number, name: string, email: string) {\n    this.id = id;\n    this.name = name;\n    this.email = email;\n  }\n  login(): void {\n    console.log(`${this.name} logged in`);\n  }\n}\n\nconst admin = new Admin(1, "Faisal", "faisal@example.com");\nadmin.login(); // Faisal logged in',
      },
      {
        h: 'Multiple interfaces',
        p: 'A class can **implement multiple interfaces** at once — list them after `implements`, separated by commas. The class must satisfy the combined contract of every interface listed.\n\n**Note:** use interfaces to **enforce structure and consistency in large applications** — each interface describes one capability, and a class can combine as many capabilities as it needs.',
        code: 'interface Person {\n  name: string;\n}\ninterface Contact {\n  email: string;\n  phone: string;\n}\nclass User implements Person, Contact {\n  name: string;\n  email: string;\n  phone: string;\n\n  constructor(name: string, email: string, phone: string) {\n    this.name = name;\n    this.email = email;\n    this.phone = phone;\n  }\n}\n\nconst user = new User("Faisal", "faisal@example.com", "+91 9876543210");\nconsole.log(user.name); // Faisal',
      },
      {
        h: 'Interface vs class',
        p: 'Key differences: **contains implementation** — interface ❌ (structure only) · class ✅. **Keyword** — `interface` vs `class`. **Used for** — interface: define a contract · class: create objects. **Multiple inheritance** — interface ✅ (using commas) · class ❌ (single).',
      },
      {
        h: 'Static members',
        p: '**Static members belong to the class, not to instances.** An **instance member** belongs to an object and is accessed via that object (`c1.value`); a **static member** belongs to the class and is accessed via the **class name** (`Counter.count`).\n\nIn the example, every `new Counter()` increments the shared `static count` — so `Counter.getCount()` reports the total across *all* instances, and `c1.getCount()` is a compile error (static members aren’t available on instances).',
        code: 'class Counter {\n  static count: number = 0;\n  constructor() {\n    Counter.count++; // accessing static member\n  }\n  static getCount(): void {\n    console.log(`Total objects: ${Counter.count}`);\n  }\n}\n\nconst c1 = new Counter();\nconst c2 = new Counter();\nCounter.getCount(); // Total objects: 2\n// c1.getCount();   // ❌ Error (use class name)',
      },
      {
        h: 'Static methods vs instance methods',
        p: 'An **instance method** (`method(): void {}`) is declared without `static`, and is called on an **object** (`object.method()`) — `this` is available. A **static method** (`static method(): void {}`) is called on the **class** (`Class.method()`) — `this` (referring to an instance) is **not available**.\n\n**Pro tip:** prefer static members for **utility functions, constants, and helper methods** that don’t need object-specific data — like `MathUtil.area(r)` computing a value from its arguments alone, with no instance state involved.',
        code: 'class MathUtil {\n  static PI = 3.1415;\n  static area(r: number): number {\n    return MathUtil.PI * r * r;\n  }\n}\nconsole.log(MathUtil.area(5)); // 78.5375\n\nclass Demo {\n  static hello() {\n    console.log("Hello from static!");\n  }\n  welcome() {\n    console.log("Hello from instance!");\n  }\n}\nDemo.hello();       // ✅\nconst d = new Demo();\nd.welcome();         // ✅\n// d.hello();        // ❌ Not available on an instance',
      },
      {
        h: 'Quick recap',
        p: '- Implement interfaces using the `implements` keyword.\n- A class **must implement all members** of every interface it implements.\n- Use **multiple interfaces** for better modularity.\n- **Static members belong to the class**, not to instances.\n- Use static for **utility functions, constants, and helpers**.\n\n**Interview Q:** what’s the difference between an interface and a class? When would you use a static member over an instance member?\n\nStrong contracts, smart code.',
      },
    ],
    snippets: [
      {
        label: 'A class implementing an interface',
        code: 'interface User {\n  id: number;\n  name: string;\n  email: string;\n  login(): void;\n}\n\nclass Admin implements User {\n  id: number;\n  name: string;\n  email: string;\n\n  constructor(id: number, name: string, email: string) {\n    this.id = id;\n    this.name = name;\n    this.email = email;\n  }\n  login(): void {\n    console.log(`${this.name} logged in`);\n  }\n}',
        note: 'Admin must provide id, name, email, and login() — everything User declares.',
      },
      {
        label: 'Implementing multiple interfaces',
        code: 'interface Person { name: string; }\ninterface Contact { email: string; phone: string; }\n\nclass User implements Person, Contact {\n  name: string;\n  email: string;\n  phone: string;\n  constructor(name: string, email: string, phone: string) {\n    this.name = name;\n    this.email = email;\n    this.phone = phone;\n  }\n}',
        note: 'Separate multiple interfaces with commas after implements.',
      },
      {
        label: 'Static members — shared across all instances',
        code: 'class Counter {\n  static count: number = 0;\n  constructor() {\n    Counter.count++;\n  }\n  static getCount(): void {\n    console.log(`Total objects: ${Counter.count}`);\n  }\n}\n\nconst c1 = new Counter();\nconst c2 = new Counter();\nCounter.getCount(); // Total objects: 2',
        note: 'Static members belong to the class — accessed via the class name, not an instance.',
      },
    ],
  },
  {
    day: 13,
    date: '13 Jan 2027',
    group: 'generics',
    title: 'Generics (Part 1)',
    tagline: 'Write once, use everywhere — flexible, reusable, type-safe components.',
    image: '/typescript-notes/ep13-generics-part-1.jpeg',
    tags: ['Generics', 'Type Parameters', 'Reusability', 'Generic Classes'],
    notes: [
      { k: 'What are generics?', v: 'Generics let us write code that works with **any type**, without losing **type safety**.' },
      { k: 'Real-world analogy', v: 'Think of a **box** that can hold anything — books, toys, clothes. The box is the same, but what it holds can change.' },
      { k: 'Why use generics', v: 'Reusable for multiple types, type-safe, better developer experience, reduces code duplication, and works with functions, interfaces, classes & more.' },
      { k: 'Type parameter', v: 'A generic uses a placeholder like `T` — a **type parameter** — that stands in for a real type until the generic is actually used.' },
      { k: 'Naming', v: 'Name a type parameter anything — `T`, `U`, `V`, `K`, `Value`, `Data`. Convention: use **meaningful names** for readability, and start simple with one parameter (`T`) before moving to multiple.' },
      { k: 'Generics vs any', v: '`any` gives up type safety entirely (no compile-time checks, limited autocomplete, risky refactors, errors caught late). **Generics keep full type safety** — compile-time checked, full autocomplete, safe refactors, errors caught early. Avoid `any` when possible; prefer generics.' },
    ],
    theory: [
      {
        h: '1. What are Generics?',
        p: 'Generics let us write code that works with **any type**, without losing **type safety**. `T` is a **type parameter** — a placeholder for a type that gets filled in when the generic is actually called, so `identity<number>(42)` returns a `number` and `identity<string>("Hello")` returns a `string`, with the compiler checking each call.',
        code: 'function identity<T>(value: T): T {\n  return value;\n}\n\nlet num = identity<number>(42);        // number\nlet str = identity<string>("Hello");   // string\nlet bool = identity<boolean>(true);    // boolean\n\n// T is a type parameter (placeholder for a type)',
      },
      {
        h: '2. Generic Functions',
        p: 'We can make functions generic using type parameters: `function functionName<T>(param: T): ReturnType { ... }` — the type parameter `T` is declared right after the function name, then used as a type both for the parameter and the return type.',
        code: 'function firstElement<T>(arr: T[]): T {\n  return arr[0];\n}\n\nconst n = firstElement<number>([10, 20, 30]); // 10\nconst s = firstElement<string>(["a", "b", "c"]); // "a"',
      },
      {
        h: '3. Generic Interfaces',
        p: 'Interfaces can be generic too. A `Pair<T>` interface uses one type parameter for both of its fields; a `KeyValue<K, V>` interface uses **two** type parameters — one for the key, one for the value — so `key` and `value` can each be independently typed per usage.',
        code: 'interface Pair<T> {\n  first: T;\n  second: T;\n}\n\nconst pairNum: Pair<number> = { first: 1, second: 2 };\nconst pairStr: Pair<string> = { first: "A", second: "B" };\n\n// Key-Value pair with two type parameters\ninterface KeyValue<K, V> {\n  key: K;\n  value: V;\n}\n\nconst user: KeyValue<string, { id: number; name: string }> = {\n  key: "u1",\n  value: { id: 1, name: "Faisal" },\n};',
      },
      {
        h: '4. Generic Classes',
        p: 'Classes can be generic too — a `Box<T>` can hold any type, and the type is decided when an object is **created**, then stays type-safe throughout. `new Box<number>(100)` gives a box whose `getValue()` returns `number`; `new Box<string>("TypeScript")` gives one whose `getValue()` returns `string`.',
        code: 'class Box<T> {\n  private value: T;\n  constructor(value: T) {\n    this.value = value;\n  }\n  getValue(): T {\n    return this.value;\n  }\n}\n\nconst boxNum = new Box<number>(100);\nconst boxStr = new Box<string>("TypeScript");\nconsole.log(boxNum.getValue()); // 100\nconsole.log(boxStr.getValue()); // TypeScript',
      },
      {
        h: 'Generics vs any',
        p: 'A generic and `any` can both accept "anything," but they are opposites in what they check:\n\n- **Type safety** — Generics: compile-time safe. `any`: no safety.\n- **Auto-completion** — Generics: full support. `any`: limited.\n- **Refactoring** — Generics: easy & safe. `any`: risky.\n- **Error detection** — Generics: caught early. `any`: might fail later.\n\nAvoid `any` when possible — prefer generics for type-safe, reusable code.',
      },
      {
        h: 'Quick recap',
        p: '- Generics let us write **flexible & reusable** code.\n- Use `<T>` to create type parameters.\n- Work with **functions, interfaces & classes**.\n- Ensure **type safety** without sacrificing flexibility.\n- Great for building **libraries, utilities & frameworks**.\n\n**Interview Q:** what is a generic in TypeScript? How do generics help in writing reusable code? Can interfaces and classes be generic — give examples. What is the difference between `any` and generics?\n\nWrite once, use everywhere — that’s the power of generics.',
      },
    ],
    snippets: [
      {
        label: 'Generic identity function',
        code: 'function identity<T>(value: T): T {\n  return value;\n}\n\nidentity<number>(42);      // number\nidentity<string>("Hello"); // string',
        note: 'T is filled in per call — the compiler checks the return type matches.',
      },
      {
        label: 'Generic function over an array',
        code: 'function firstElement<T>(arr: T[]): T {\n  return arr[0];\n}\n\nfirstElement<number>([10, 20, 30]); // 10\nfirstElement<string>(["a", "b", "c"]); // "a"',
        note: 'Works for an array of any type, while keeping the return type accurate.',
      },
      {
        label: 'Generic interface — Key-Value pair',
        code: 'interface KeyValue<K, V> {\n  key: K;\n  value: V;\n}\n\nconst user: KeyValue<string, { id: number; name: string }> = {\n  key: "u1",\n  value: { id: 1, name: "Faisal" },\n};',
        note: 'Two type parameters — one for the key, one for the value.',
      },
      {
        label: 'Generic class — a type-safe Box',
        code: 'class Box<T> {\n  private value: T;\n  constructor(value: T) {\n    this.value = value;\n  }\n  getValue(): T {\n    return this.value;\n  }\n}\n\nconst boxNum = new Box<number>(100);\nconst boxStr = new Box<string>("TypeScript");',
        note: 'The type is decided when the object is created, then stays consistent.',
      },
    ],
  },
  {
    day: 14,
    date: '14 Jan 2027',
    group: 'generics',
    title: 'Generics (Part 2)',
    tagline: 'Advanced generics — constraints, multiple type parameters, and defaults.',
    image: '/typescript-notes/ep14-generics-part-2.jpeg',
    tags: ['Generics', 'Constraints', 'Default Types', 'API Wrapper'],
    notes: [
      { k: 'Generic constraints', v: 'Use `extends` to **restrict** which types a generic type parameter can be — e.g. requiring a `length` property.' },
      { k: 'Multiple type parameters', v: 'A generic can take **more than one** type parameter — e.g. `K, V` for a key-value pair, or `T, U` for a swap function.' },
      { k: 'Default generic types', v: 'Type parameters can have **default types**, so callers do not always have to specify them explicitly.' },
      { k: 'Real-world use', v: 'Constraints, multiple parameters and defaults combine naturally in things like an API response wrapper — `ApiResponse<T = any, E = string>`.' },
      { k: 'When to use which', v: 'Constraints when you need types with certain properties; multiple type parameters when a function/class works with several different types; defaults when callers should not always have to specify a type.' },
    ],
    theory: [
      {
        h: '1. Generic Constraints',
        p: 'We can **restrict** the types that can be used with a generic using `extends`. `function getLength<T extends { length: number }>(item: T): number` only accepts values that have a `length` property — strings and arrays both qualify, but a plain `number` does not, so `getLength(42)` is a compile error.\n\nReal-world analogy: think of a container that can hold only items with a label (a `length` property) — you can put in a box, a book, or a bottle, but not a ball.',
        code: 'function getLength<T extends { length: number }>(item: T): number {\n  return item.length;\n}\n\nconsole.log(getLength("TypeScript")); // 11 ✓\nconsole.log(getLength([1, 2, 3, 4]));  // 4  ✓\n// getLength(42);                      // ✗ Error: number has no length',
      },
      {
        h: '2. Multiple Type Parameters',
        p: 'A generic can use **more than one** type parameter — e.g. `pair<K, V>(key: K, value: V)` returns `{ key: K; value: V }`, with each call independently typing the key and the value. Type parameters can also be **inferred automatically** from the arguments, without writing them explicitly.\n\nPro tip: use meaningful names like `T`, `U`, `K`, `V` — keep the order logical and consistent.',
        code: 'function pair<K, V>(key: K, value: V): { key: K; value: V } {\n  return { key, value };\n}\n\nconst p1 = pair<number, string>(1, "Faisal");\nconst p2 = pair<string, boolean>("Active", true);\n\n// Type is inferred automatically\nconst p3 = pair(10, "Ten");\n\n// Swap function — two type parameters\nfunction swap<T, U>(a: T, b: U): [U, T] {\n  return [b, a];\n}\nconst r = swap(10, "Ten"); // r is ["Ten", 10]',
      },
      {
        h: '3. Default Generic Types',
        p: 'Generic parameters can have **default types**, so a caller does not always have to specify every type argument. `createUser<T = string, U = number>` defaults `T` to `string` and `U` to `number` — calling it with just the required arguments infers those defaults, while a caller can still **override** a default when needed.\n\nWhy use defaults: reduces repetition, makes APIs easier to use, provides sensible fallbacks, and improves developer experience.\n\nRules: defaults are optional, and all required type parameters must come **before** any defaults.',
        code: 'function createUser<T = string, U = number>(\n  name: T,\n  id: U\n): { name: T; id: U } {\n  return { name, id };\n}\n\nconst u1 = createUser("Faisal", 101);      // { name: string; id: number }\nconst u2 = createUser<boolean>(true, 202); // { name: boolean; id: number }\n// const u3 = createUser();                // Error: Expected 2 arguments',
      },
      {
        h: '4. Real-world Example: API Response Wrapper',
        p: 'Constraints, multiple type parameters and defaults come together naturally in an API response wrapper. `ApiResponse<T = any, E = string>` gives success/data/error fields whose `data` and `error` types can be customized per call, while defaulting to `any`/`string` when the caller does not need to be specific.',
        code: 'interface ApiResponse<T = any, E = string> {\n  success: boolean;\n  data?: T;\n  error?: E;\n}\n\ninterface User { id: number; name: string }\n\nconst res1: ApiResponse = { success: true };                          // any, string\nconst res2: ApiResponse<User> = { success: true, data: { id: 1, name: "Faisal" } };\nconst res3: ApiResponse<User, { code: number; message: string }> = {\n  success: false,\n  error: { code: 404, message: "Not Found" },\n};',
      },
      {
        h: 'When to Use Which',
        p: '- Constraints (`extends`) — use when you want to limit types to those with certain properties.\n- **Multiple type parameters** — use when your function/class works with multiple different types.\n- **Default types** — use when you want to provide a default so users do not always have to specify types.',
      },
      {
        h: 'Quick recap',
        p: '- Use **constraints** to work with types that have a specific shape.\n- Use **multiple type parameters** for functions/classes that handle many types.\n- Use **default types** to make code cleaner and easier to use.\n- Generics help build **reusable, type-safe and scalable** code.\n\n**Interview Q:** what is a generic constraint? Give an example. How do default generic types work? Can we have a default type before a non-default type — why or why not? Create a generic function that returns the first element of an array.\n\nGenerics are the bridge between flexibility and safety — use them wisely.',
      },
    ],
    snippets: [
      {
        label: 'Generic constraint — restrict to a shape',
        code: 'function getLength<T extends { length: number }>(item: T): number {\n  return item.length;\n}\n\ngetLength("TypeScript"); // 11\ngetLength([1, 2, 3, 4]); // 4',
        note: 'extends limits T to anything with a length property — strings and arrays both qualify.',
      },
      {
        label: 'Multiple type parameters — swap function',
        code: 'function swap<T, U>(a: T, b: U): [U, T] {\n  return [b, a];\n}\n\nswap(10, "Ten"); // ["Ten", 10]',
        note: 'Two independent type parameters, each tracked through to the return type.',
      },
      {
        label: 'Default generic types',
        code: 'function createUser<T = string, U = number>(name: T, id: U) {\n  return { name, id };\n}\n\ncreateUser("Faisal", 101);      // defaults inferred\ncreateUser<boolean>(true, 202); // override T only',
        note: 'Required type parameters must come before any defaults.',
      },
      {
        label: 'API response wrapper with defaults',
        code: 'interface ApiResponse<T = any, E = string> {\n  success: boolean;\n  data?: T;\n  error?: E;\n}\n\nconst res: ApiResponse<User> = { success: true, data: { id: 1, name: "Faisal" } };',
        note: 'Constraints, multiple parameters and defaults combine in real-world API types.',
      },
    ],
  },
  {
    day: 15,
    date: '15 Jan 2027',
    group: 'utility-types',
    title: 'Utility Types (Part 1)',
    tagline: 'Partial, Required, Readonly, Record — small tools with big power.',
    image: '/typescript-notes/ep15-utility-types-part-1.jpeg',
    tags: ['Utility Types', 'Partial', 'Required', 'Readonly', 'Record'],
    notes: [
      { k: 'What are utility types?', v: 'Utility Types are **built-in generic types** provided by TypeScript that help us manipulate or transform existing types without writing code repeatedly.' },
      { k: 'Why use utility types', v: 'Save time and reduce repetition, make code more consistent, handle complex type transformations easily, and improve maintainability and readability.' },
      { k: 'Real-world analogy', v: 'Think of utility types as **tools in a toolbox**. Instead of creating new tools for every small job, you use the right tool to modify or adapt what you already have.' },
      { k: 'Partial<T>', v: 'Makes every property in a type **optional**, using the `?` modifier.' },
      { k: 'Required<T>', v: 'Removes optional `?` from all properties and makes them **required**.' },
      { k: 'Readonly<T>', v: 'Makes all properties **readonly**, so they cannot be reassigned.' },
      { k: 'Record<K, T>', v: 'Creates an object type with **keys of type K** and **values of type T**.' },
    ],
    theory: [
      {
        h: '1. What are Utility Types?',
        p: 'Utility Types are **built-in generic types** provided by TypeScript that help us manipulate or transform existing types without writing code repeatedly.\n\n**Why use them:** save time and reduce repetition, make code more consistent, handle complex type transformations easily, and improve maintainability and readability.\n\n**Real-world analogy:** think of utility types as tools in a toolbox. Instead of creating new tools for every small job, you use the right tool to modify or adapt what you already have.',
      },
      {
        h: '2. Partial<T> — Make all properties optional',
        p: 'It makes every property in a type **optional** using the `?` modifier — `User` becomes `Partial<User>`, where every field can be omitted.\n\n**Pro tip:** very useful in APIs like PATCH requests, where we update only some fields.',
        code: 'interface User {\n  id: number;\n  name: string;\n  email: string;\n  age: number;\n}\n\n// All properties are now optional\nlet updateUser: Partial<User> = {\n  name: "Faisal",\n  // we can pass any subset of properties\n};',
      },
      {
        h: '3. Required<T> — Make all properties required',
        p: 'It removes optional `?` from all properties and makes them **required** — a `User` with optional fields becomes a `Required<User>` where every field must be present.\n\n**When to use:** when you want to ensure that all properties must be present (e.g., when creating new data).',
        code: 'interface User {\n  id?: number;\n  name?: string;\n  email?: string;\n}\n// All properties are now required\nlet newUser: Required<User> = {\n  id: 1,\n  name: "Faisal",\n  email: "faisal@example.com",\n};',
      },
      {
        h: '4. Readonly<T> — Make all properties readonly',
        p: 'It makes all properties **readonly**, so they cannot be reassigned after the object is created.\n\n**Note:** great for protecting objects from accidental changes.',
        code: 'interface User {\n  id: number;\n  name: string;\n}\n\nlet user: Readonly<User> = {\n  id: 1,\n  name: "Faisal",\n};\n\n// user.id = 2;        // Error! Cannot assign to \'id\'\n// user.name = "Ahmed"; // Error! Cannot assign to \'name\'',
      },
      {
        h: '5. Record<K, T> — Key-Value object type',
        p: 'It creates an object type with keys of type `K` and values of type `T`. Keys can be `string` (or a union of string literals) and values any type — great for maps, dictionaries, lookup tables, and feature flags.\n\n**Real-world use:** perfect for maps, dictionaries, lookup tables, feature flags, and more.',
        code: '// Keys are strings ("id", "name", "email")\n// Values are of type number\nlet scores: Record<string, number> = {\n  id: 101,\n  name: 95,\n  email: 88,\n};\n\n// Keys are a union of literals\ntype Status = "pending" | "active" | "blocked";\nlet userStatus: Record<Status, boolean> = {\n  pending: true,\n  active: true,\n  blocked: false,\n};',
      },
      {
        h: 'Quick recap',
        p: '- **Partial<T>** → makes all properties optional.\n- **Required<T>** → makes all properties required.\n- **Readonly<T>** → makes all properties readonly.\n- **Record<K, T>** → creates key-value object types.\n\n**Interview Q:** what is the difference between `Partial<T>` and `Required<T>`? How does `Readonly<T>` help in making our code safer? When would you use `Record<K, T>` in a real project?\n\nUtility types are small tools with BIG power! Use them and write cleaner, smarter code.',
      },
    ],
    snippets: [
      {
        label: 'Partial<T> — optional update payload',
        code: 'interface User {\n  id: number;\n  name: string;\n  email: string;\n  age: number;\n}\n\nlet updateUser: Partial<User> = {\n  name: "Faisal",\n};',
        note: 'Every field becomes optional — ideal for PATCH-style partial updates.',
      },
      {
        label: 'Required<T> — enforce every field',
        code: 'interface User {\n  id?: number;\n  name?: string;\n  email?: string;\n}\n\nlet newUser: Required<User> = {\n  id: 1,\n  name: "Faisal",\n  email: "faisal@example.com",\n};',
        note: 'Strips away optionality — every property must be provided.',
      },
      {
        label: 'Readonly<T> — immutable object',
        code: 'interface User {\n  id: number;\n  name: string;\n}\n\nlet user: Readonly<User> = { id: 1, name: "Faisal" };\n// user.id = 2; // Error! Cannot assign to \'id\'',
        note: 'Protects an object from accidental reassignment after creation.',
      },
      {
        label: 'Record<K, T> — union-literal keys',
        code: 'type Status = "pending" | "active" | "blocked";\n\nlet userStatus: Record<Status, boolean> = {\n  pending: true,\n  active: true,\n  blocked: false,\n};',
        note: 'K can be a union of string literals, giving you a fully-typed lookup table.',
      },
    ],
  },
  {
    day: 16,
    date: '16 Jan 2027',
    group: 'utility-types',
    title: 'Utility Types (Part 2)',
    tagline: 'Pick, Omit, Exclude, Extract — more ways to transform and filter types.',
    image: '/typescript-notes/ep16-utility-types-part-2.jpeg',
    tags: ['Utility Types', 'Pick', 'Omit', 'Exclude', 'Extract'],
    notes: [
      { k: 'Overview', v: 'These utility types help us **pick**, **remove**, or **extract** parts of existing types, making our code more precise and flexible.' },
      { k: 'Pick<T, K>', v: 'Creates a new type by picking only the specified keys from a type `T`.' },
      { k: 'Omit<T, K>', v: 'Creates a new type by omitting the specified keys from a type `T`.' },
      { k: 'Exclude<T, U>', v: 'Creates a type by excluding from `T` all types that are assignable to `U`.' },
      { k: 'Extract<T, U>', v: 'Creates a type by extracting from `T` all types that are assignable to `U`.' },
    ],
    theory: [
      {
        h: '1. Overview',
        p: 'These utility types help us pick, remove, or extract parts of existing types, making our code more precise and flexible.',
      },
      {
        h: '2. Pick<T, K> — pick only what you need',
        p: 'Creates a new type by picking only the specified keys from a type `T`.\n\n**Syntax:** `Pick<T, K>`',
        code: 'interface User {\n  id: number;\n  name: string;\n  email: string;\n  age: number;\n}\n\n// Pick only name & email\ntype UserInfo = Pick<User, "name" | "email">;\n\n// Result:\n// { name: string; email: string }',
      },
      {
        h: '3. Omit<T, K> — remove what you don’t need',
        p: 'Creates a new type by omitting the specified keys from a type `T`.\n\n**Syntax:** `Omit<T, K>`',
        code: 'interface User {\n  id: number;\n  name: string;\n  email: string;\n  age: number;\n}\n\n// Omit email & age\ntype UserBasic = Omit<User, "email" | "age">;\n\n// Result:\n// { id: number; name: string }',
      },
      {
        h: '4. Exclude<T, U> — remove from a union',
        p: 'Creates a type by excluding from `T` all types that are assignable to `U`.\n\n**Syntax:** `Exclude<T, U>`',
        code: 'type Status = "active" | "inactive" | "pending";\n\n// Exclude \'pending\'\ntype ActiveStatus = Exclude<Status, "pending">;\n\n// Result:\n// \'active\' | \'inactive\'',
      },
      {
        h: '5. Extract<T, U> — get from a union',
        p: 'Creates a type by extracting from `T` all types that are assignable to `U`.\n\n**Syntax:** `Extract<T, U>`',
        code: 'type Event = "click" | "scroll" | "keydown" | "load";\n\n// Extract only \'click\' | \'load\'\ntype UIEvent = Extract<Event, "click" | "load">;\n\n// Result:\n// \'click\' | \'load\'',
      },
      {
        h: 'Quick comparison',
        p: 'Given the type `{ a: 1; b: 2; c: 3 }`:\n\n- **Pick<K>** — pick specific keys. `Pick<T, "a" | "c">` → `{ a: 1; c: 3 }`.\n- **Omit<K>** — remove specific keys. `Omit<T, "b">` → `{ a: 1; c: 3 }`.\n- **Exclude<T, U>** — remove types from a union. `Exclude<"a" | "b" | "c", "b">` → `"a" | "c"`.\n- **Extract<T, U>** — extract types from a union. `Extract<"a" | "b" | "c", "a" | "c">` → `"a" | "c"`.',
      },
      {
        h: 'When to use?',
        p: '- **Pick** — when you need only certain properties.\n- **Omit** — when you want to remove unwanted properties.\n- **Exclude** — when working with union types and want to remove some values.\n- **Extract** — when working with union types and want to get only some values.\n\n**Pro tip:** combine these utility types to build powerful and precise types for real-world projects!',
      },
      {
        h: 'Quick recap',
        p: '- **Pick** → keep what you need.\n- **Omit** → remove what you don’t need.\n- **Exclude** → remove from unions.\n- **Extract** → get from unions.\n\n**Interview Q:** what is the difference between `Pick` and `Omit`? How do `Exclude` and `Extract` work? Give an example use case for each utility type.\n\nMaster utility types to write cleaner, shorter, and smarter TypeScript code!',
      },
    ],
    snippets: [
      {
        label: 'Pick<T, K> — a narrowed view',
        code: 'interface User {\n  id: number;\n  name: string;\n  email: string;\n  age: number;\n}\n\ntype UserInfo = Pick<User, "name" | "email">;\n// { name: string; email: string }',
        note: 'Keeps only the keys you list — everything else is dropped from the type.',
      },
      {
        label: 'Omit<T, K> — drop a few keys',
        code: 'interface User {\n  id: number;\n  name: string;\n  email: string;\n  age: number;\n}\n\ntype UserBasic = Omit<User, "email" | "age">;\n// { id: number; name: string }',
        note: 'The inverse of Pick — remove the keys you list, keep the rest.',
      },
      {
        label: 'Exclude<T, U> — narrow a union',
        code: 'type Status = "active" | "inactive" | "pending";\n\ntype ActiveStatus = Exclude<Status, "pending">;\n// \'active\' | \'inactive\'',
        note: 'Removes members of a union that match U, leaving the rest.',
      },
      {
        label: 'Extract<T, U> — keep only a subset of a union',
        code: 'type Event = "click" | "scroll" | "keydown" | "load";\n\ntype UIEvent = Extract<Event, "click" | "load">;\n// \'click\' | \'load\'',
        note: 'The inverse of Exclude — keep only union members that match U.',
      },
    ],
  },

  {
    day: 17,
    date: '17 Jan 2027',
    group: 'types',
    title: 'Advanced Type Operators',
    tagline: 'keyof, typeof, Indexed Access, and as const — extract and work with types in smarter ways.',
    image: '/typescript-notes/ep17-advanced-type-operators.jpeg',
    tags: ['keyof', 'typeof', 'Indexed Access', 'as const'],
    notes: [
      { k: 'keyof', v: 'Returns a **union of all keys** of an object type. Syntax: `keyof T`.' },
      { k: 'typeof', v: 'Gets the **type of a value or variable**. Syntax: `typeof value`.' },
      { k: 'Indexed Access', v: 'Access a specific **property type** using `T["key"]`. Syntax: `T["key"]`.' },
      { k: 'as const', v: 'Tells TypeScript **not to widen literals** and to make the object **readonly**. Syntax: `value as const`.' },
    ],
    theory: [
      {
        h: '1. Understanding the Operators',
        p: 'Type operators help us extract and work with types in smarter ways.\n\n- **keyof** — returns a union of all keys of an object type.\n- **typeof** — gets the type of a value or variable.\n- **Indexed Access (`T["key"]`)** — access a specific property type.\n- **as const** — tells TypeScript not to widen literals and to make the object readonly.',
      },
      {
        h: '2. keyof — get all keys of a type',
        p: '`keyof T` returns a **union of all keys** of an object type as string-literal types.',
        code: 'interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\ntype UserKeys = keyof User;\n\n// Result:\n// \'id\' | \'name\' | \'email\'',
      },
      {
        h: '3. typeof — get the type of a value',
        p: '`typeof value` gets the **type** of a value or variable — handy for reusing a type you already have without redeclaring an interface.',
        code: 'const user = {\n  id: 1,\n  name: "Faisal",\n  active: true,\n};\n\ntype UserType = typeof user;\n\n// Result:\n// { id: number; name: string; active: boolean; }',
      },
      {
        h: '4. Indexed Access — get the type of a specific property',
        p: 'Access a specific property type using `T["key"]` — great for pulling out just the type of one field from a larger interface.',
        code: 'interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\ntype NameType = User["name"];\ntype EmailType = User["email"];\n\n// Result:\n// NameType -> string\n// EmailType -> string',
      },
      {
        h: '5. as const — preserve literal types & make readonly',
        p: '`as const` tells TypeScript **not to widen literals** (so `"dark"` stays `"dark"`, not the wider `string`) and makes every property **readonly**.',
        code: 'const config = {\n  mode: "dark",\n  version: 1,\n} as const;\n\n// Result:\n// {\n//   readonly mode: "dark";\n//   readonly version: 1;\n// }',
      },
      {
        h: 'Quick comparison',
        p: '- **keyof** — gets all keys of a type as a union. Use case: create key-based types, validation, mapping.\n- **typeof** — gets the type of a value or variable. Use case: reuse types, infer types from values.\n- **Indexed Access** — gets the type of a specific property. Use case: extract property types, create lookup types.\n- **as const** — prevents widening and makes objects readonly. Use case: constants, configs, immutability.',
      },
      {
        h: 'When to use?',
        p: '- Use **keyof** when you need the keys of an object.\n- Use **typeof** to reuse types and avoid duplication.\n- Use **indexed access** to extract specific property types.\n- Use **as const** to preserve literal types and make objects immutable.\n\n**Pro tip:** combining these operators makes your types more powerful and expressive!',
      },
      {
        h: 'Common mistakes',
        p: '- Forgetting that `keyof` returns a **union** of keys, not an array.\n- Using `typeof` on **types** instead of **values** (it only works on values/variables).\n- Using the **wrong keys** in indexed access types (`T["typo"]` will error).\n- Not using `as const` when working with constant data — leaving literals widened to `string`/`number`.',
      },
      {
        h: 'Quick recap',
        p: '- **keyof** → Get keys.\n- **typeof** → Get value type.\n- **T["key"]** → Get property type.\n- **as const** → Keep literals & readonly.\n\n**Interview Q:** What does `keyof` return? What is the difference between `typeof` and `keyof`? How does indexed access work? What happens when you use `as const`?\n\nMaster these operators and level up your TypeScript skills!',
      },
    ],
    snippets: [
      {
        label: 'keyof — union of an interface\'s keys',
        code: 'interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\ntype UserKeys = keyof User;\n// \'id\' | \'name\' | \'email\'',
        note: 'A type-safe way to know exactly which property names exist on User.',
      },
      {
        label: 'typeof — infer a type from a value',
        code: 'const user = { id: 1, name: "Faisal", active: true };\n\ntype UserType = typeof user;\n// { id: number; name: string; active: boolean; }',
        note: 'Lets you derive a type from an existing object instead of writing it twice.',
      },
      {
        label: 'Indexed Access — pull out one property\'s type',
        code: 'interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\ntype NameType = User["name"]; // string\ntype EmailType = User["email"]; // string',
        note: 'Use T["key"] to reuse a single field\'s type without repeating it manually.',
      },
      {
        label: 'as const — literal, readonly config object',
        code: 'const config = {\n  mode: "dark",\n  version: 1,\n} as const;\n\n// {\n//   readonly mode: "dark";\n//   readonly version: 1;\n// }',
        note: 'Locks each value to its exact literal type and marks every property readonly.',
      },
    ],
  },

  {
    day: 18,
    date: '18 Jan 2027',
    group: 'types',
    title: 'Advanced Type System',
    tagline: 'Mapped Types, Conditional Types, infer, and Template Literal Types — transform, filter, and build types in smarter ways.',
    image: '/typescript-notes/ep18-advanced-type-system.jpeg',
    tags: ['Mapped Types', 'Conditional Types', 'infer', 'Template Literal Types'],
    notes: [
      { k: 'Mapped Types', v: 'Create a new type by **mapping over the keys** of another type. Syntax: `{ [K in Keys]: Type }`.' },
      { k: 'Conditional Types', v: 'Choose one type or another based on a **condition**. Syntax: `T extends U ? X : Y`.' },
      { k: 'infer Keyword', v: 'Extract a type from another type, typically used **inside** conditional types. Syntax: `infer R`.' },
      { k: 'Template Literal Types', v: 'Create string literal types by combining literal types using **template literals**. Syntax: `` `prefix-${Type}-${Type}` ``.' },
    ],
    theory: [
      {
        h: '1. Overview',
        p: 'Advanced type system features allow us to create new types from existing ones using powerful transformations and logic.\n\n- **Mapped Types** — create a new type by mapping over the keys of another type.\n- **Conditional Types** — choose one type or another based on a condition.\n- **infer Keyword** — extract a type from another type, typically used in conditional types.\n- **Template Literal Types** — create string literal types by combining literal types using template literals.',
      },
      {
        h: '2. Mapped Types — transform every property',
        p: 'A mapped type creates a **new type by mapping over the keys** of another type, using the `{ [K in Keys]: Type }` syntax. Below, every property of `User` becomes `readonly`.',
        code: 'type User = {\n  id: number;\n  name: string;\n  email: string;\n  age: number;\n};\n\n// Make all properties readonly\ntype ReadonlyUser = {\n  readonly [K in keyof User]: User[K];\n};\n\n// Result:\n// {\n//   readonly id: number;\n//   readonly name: string;\n//   readonly email: string;\n//   readonly age: number;\n// }',
      },
      {
        h: '3. Conditional Types — choose a type based on a condition',
        p: '`T extends U ? X : Y` picks between two types depending on whether `T` is assignable to `U` — exactly like a ternary, but at the type level. Combined with a **practical example** — extracting the `id` field\'s type out of any shape that has one.',
        code: 'type IsString<T> =\n  T extends string ? true : false;\n\n// Usage\ntype A = IsString<string>; // true\ntype B = IsString<number>; // false\n\n// Practical Example\ntype ExtractId<T> =\n  T extends { id: infer U } ? U : never;\n\ntype UserId = ExtractId<{ id: number; name: string }>;\n// number',
      },
      {
        h: '4. infer Keyword — extract a type from another type',
        p: '`infer R` grabs a type out of a larger type **inside** a conditional type — most commonly used to pull out a function\'s return type, or to unwrap a generic wrapper like `Promise<T>`.',
        code: 'type GetReturnType<T> =\n  T extends (...args: any[]) => infer R ? R : never;\n\nfunction add(a: number, b: number) {\n  return a + b;\n}\n\ntype AddReturnType = GetReturnType<typeof add>;\n// number\n\n// With Promise\ntype UnwrapPromise<T> =\n  T extends Promise<infer U> ? U : T;\n\ntype R = UnwrapPromise<Promise<string>>;\n// string',
      },
      {
        h: '5. Template Literal Types — build string literal types',
        p: 'Combine literal types using backtick template syntax to generate a whole **union of valid strings** — TypeScript checks every combination for you, and rejects any string outside that union.',
        code: 'type User = "Alice" | "Bob";\ntype Action = "Create" | "Delete";\n\ntype LogMessage =\n  `${User} has ${Action}d the item`;\n\nlet msg1: LogMessage =\n  "Alice has Created the item"; // ✓\nlet msg2: LogMessage =\n  "Bob has Deleted the item"; // ✓\nlet msg3: LogMessage =\n  "Eve has Created the item"; // ✗\n// Error: "Eve" not in User',
      },
      {
        h: 'Quick comparison',
        p: '- **Mapped Types** — transforms properties of an existing type. Use case: make all properties readonly, optional, or change their types.\n- **Conditional Types** — chooses a type based on a condition. Use case: return different types based on input type.\n- **infer Keyword** — extracts a type from another type. Use case: get return type, parameter types, element types, etc.\n- **Template Literal Types** — creates string literal types using template strings. Use case: build dynamic string types like URLs, events, or routes.',
      },
      {
        h: 'When to use?',
        p: '- Use **Mapped Types** to create variations of existing types.\n- Use **Conditional Types** when a type depends on another type.\n- Use **infer** to extract and reuse parts of existing types.\n- Use **Template Literal Types** for strongly typed strings like routes, events, or API endpoints.',
      },
      {
        h: 'Common mistakes',
        p: '- Not understanding **distribution** in conditional types (conditional types distribute over union types member-by-member).\n- Forgetting to handle `never` in conditional types — the `: never` branch matters, not just the truthy one.\n- **Overusing** complex types, leading to unreadable code.\n- Using template literal types with **non-literal** types (a plain `string` won\'t narrow the way a literal union does).',
      },
      {
        h: 'Quick recap',
        p: '- **Mapped Types** → Transform keys.\n- **Conditional Types** → Choose based on conditions.\n- **infer** → Extract types.\n- **Template Literals** → Create dynamic string types.\n\n**Interview Q:** What are mapped types? Give an example. How do conditional types work? What does the `infer` keyword do? Give an example of template literal types.\n\nMaster advanced types today, build safer and smarter code tomorrow!',
      },
    ],
    snippets: [
      {
        label: 'Mapped Types — make every property readonly',
        code: 'type User = {\n  id: number;\n  name: string;\n  email: string;\n  age: number;\n};\n\ntype ReadonlyUser = {\n  readonly [K in keyof User]: User[K];\n};',
        note: 'Maps over every key of User and re-applies it as readonly — no property is manually retyped.',
      },
      {
        label: 'Conditional Types — a type-level ternary',
        code: 'type IsString<T> = T extends string ? true : false;\n\ntype A = IsString<string>; // true\ntype B = IsString<number>; // false',
        note: 'T extends U ? X : Y resolves to X or Y depending on whether T is assignable to U.',
      },
      {
        label: 'infer — pull the return type out of a function',
        code: 'type GetReturnType<T> =\n  T extends (...args: any[]) => infer R ? R : never;\n\nfunction add(a: number, b: number) { return a + b; }\n\ntype AddReturnType = GetReturnType<typeof add>; // number',
        note: 'infer R captures whatever type sits in that position, so it can be reused on the other side of the conditional.',
      },
      {
        label: 'Template Literal Types — a checked message format',
        code: 'type User = "Alice" | "Bob";\ntype Action = "Create" | "Delete";\n\ntype LogMessage = `${User} has ${Action}d the item`;\n\nlet msg: LogMessage = "Alice has Created the item"; // ✓\n// let bad: LogMessage = "Eve has Created the item"; // ✗ Error',
        note: 'TypeScript expands every combination of User × Action into a union and rejects any string outside it.',
      },
    ],
  },
  {
    day: 19,
    date: '19 Jan 2027',
    group: 'project',
    title: 'Project Structure & Modules',
    tagline: 'Organize, configure, import, export, and scale — a clean setup today saves hours tomorrow.',
    image: '/typescript-notes/ep19-project-structure-modules.jpeg',
    tags: ['tsconfig.json', 'Named Export', 'Default Export', 'Type-Only Import', 'Declaration Files', 'Path Aliases'],
    notes: [
      { k: 'tsconfig.json', v: 'The TypeScript config file that tells the compiler **how to compile and type-check** your code. Lives at the project root.' },
      { k: 'compilerOptions', v: 'The main section inside tsconfig.json. Controls target JS version, module system, source/output directories, strict mode, and more.' },
      { k: 'strict: true', v: 'Enables **all strict type checks** at once. Start with it from day one — your future self will thank you.' },
      { k: 'Named Export', v: 'Export multiple things from a file with `export`. Import only what you need with `import { add, PI } from "./math"`.' },
      { k: 'Default Export', v: 'Only **one** default export per file. Import it with any name: `import logger from "./logger"`.' },
      { k: 'Export Everything', v: 'Import all exports as a single namespace object: `import * as utils from "./utils"`. Access via `utils.name`, `utils.greet()`.' },
      { k: 'import type', v: 'Imports only the type, **removed entirely from JS output** — no runtime cost. Use for interfaces, types, and enums.' },
      { k: 'Declaration Files (.d.ts)', v: 'Provide **types for JavaScript libraries** or global variables without any runtime code. Must be included in tsconfig.' },
      { k: 'Path Aliases', v: 'Configure short import paths in tsconfig (`@components/*`) so you never write `../../../utils/math` again.' },
    ],
    theory: [
      {
        h: '1. tsconfig.json — your powerhouse',
        p: 'TypeScript needs a config file (`tsconfig.json`) to know how to compile and check your code. It lives at the project root and controls everything from which JS version to target to how strict the type checker should be.\n\n**Key `compilerOptions` fields:**\n- `target` — which JS version to compile to (e.g. `"ES2020"`).\n- `module` — the module system to emit (`"CommonJS"` for Node, `"ESNext"` for modern bundlers).\n- `rootDir` — where your source code lives (e.g. `"src"`).\n- `outDir` — where compiled `.js` files go (e.g. `"dist"`).\n- `strict` — turns on **all** strict type-checking rules at once.\n- `esModuleInterop` — smoother default imports from CommonJS packages.\n- `forceConsistentCasingInFileNames` — prevents case-sensitivity bugs across OSes.\n- `skipLibCheck` — skip type-checking of `.d.ts` files in `node_modules` (faster builds).\n- `include` — which files/folders to include (e.g. `["src"]`).\n\n**Pro Tip:** Start with `"strict": true` from day one.',
        code: '// tsconfig.json\n{\n  "compilerOptions": {\n    "target": "ES2020",           // JS version\n    "module": "CommonJS",         // Module system\n    "rootDir": "src",             // Source folder\n    "outDir": "dist",             // Output folder\n    "strict": true,               // Enable all strict checks\n    "esModuleInterop": true,      // Smooth default imports\n    "forceConsistentCasingInFileNames": true,\n    "skipLibCheck": true\n  },\n  "include": ["src"]              // Files to include\n}',
      },
      {
        h: '2. Modules — Named, Default, and Export Everything',
        p: 'TypeScript uses the same ES module syntax as modern JavaScript. There are three main export patterns:\n\n**Named Export** — export multiple things from a single file. The importer picks exactly what they need with destructuring. Best for utility files and libraries.\n\n**Default Export** — only one default export per file. The importer can name it anything. Best for a single class or function per file (e.g. a React component).\n\n**Export Everything** — import all named exports as a single namespace object using `import * as`. Good when you want to keep all utilities grouped under one name.',
        code: '// --- Named Export (math.ts) ---\nexport function add(a: number, b: number) {\n  return a + b;\n}\nexport const PI = 3.14;\n\n// app.ts — import only what you need\nimport { add, PI } from "./math";\nconsole.log(add(2, 3), PI);\n\n// --- Default Export (logger.ts) ---\nconst logger = (msg: string) => {\n  console.log(msg);\n};\nexport default logger;\n\n// app.ts — import with any name\nimport logger from "./logger";\nlogger("Hello TypeScript!");\n\n// --- Export Everything (utils.ts) ---\nexport const name = "Neo";\nexport const version = "1.0";\nexport function greet() { return "Hi!"; }\n\n// app.ts — import all as one object\nimport * as utils from "./utils";\nconsole.log(utils.name, utils.greet());',
      },
      {
        h: '3. Type-Only Imports & Exports',
        p: 'When you import or export **only a type** (interface, type alias, or enum), use the `type` keyword. This tells TypeScript and the bundler that this import exists only for type-checking — it is **completely removed from the compiled JavaScript output**, resulting in a smaller and cleaner bundle.\n\nUsing `import type` is a best practice for any import that you only use as a type annotation — it prevents accidental runtime dependencies and makes your module boundaries explicit.',
        code: '// types.ts — export a type\nexport type User = {\n  id: number;\n  name: string;\n};\n\n// app.ts — import only the type (removed in JS output)\nimport type { User } from "./types";\n\nconst u: User = { id: 1, name: "Faisal" };\n// No trace of "User" in the compiled .js file',
      },
      {
        h: '4. Declaration Files (.d.ts)',
        p: 'Declaration files (`.d.ts`) provide **type information for JavaScript code** — they contain no runtime logic, only type declarations. Use them for:\n- Typing JavaScript libraries that do not ship their own types.\n- Declaring global variables available everywhere in your project (e.g. `API_URL`, utility functions injected by a build tool).\n- Providing types for a `.js` module without converting it to TypeScript.\n\nDeclaration files must be included in your `tsconfig.json` so TypeScript can find them.',
        code: '// global.d.ts — declare global variables\ndeclare const API_URL: string;\ndeclare function formatDate(date: Date): string;\n\n// tsconfig.json — include the declaration files\n{\n  "include": ["src", "types/**/*.d.ts"]\n}\n\n// Now you can use API_URL anywhere without importing it:\nconsole.log(API_URL); // ✓ TypeScript knows the type',
      },
      {
        h: '5. Path Aliases — clean imports',
        p: 'Deep relative imports like `../../../utils/math` are error-prone and hard to read. **Path aliases** let you define short, readable import paths in `tsconfig.json`.\n\nSet `baseUrl` to your source root, then define `paths` entries mapping alias patterns to real folder locations. Now `import Button from "@/components/Button"` works anywhere in the project, regardless of nesting depth.\n\nNote: if you also use a bundler (Vite, webpack, esbuild), you need to configure the same aliases there too, since bundlers resolve imports independently of `tsc`.',
        code: '// tsconfig.json\n{\n  "compilerOptions": {\n    "baseUrl": "src",\n    "paths": {\n      "@/*": ["*"],\n      "@components/*": ["components/*"]\n    }\n  }\n}\n\n// Before path aliases (ugly)\nimport Button from "../../../components/Button";\nimport { add } from "../../../utils/math";\n\n// After path aliases (clean!)\nimport Button from "@/components/Button";\nimport { add } from "@/utils/math";',
      },
      {
        h: 'Common mistakes',
        p: '- **Forgetting to set `rootDir` and `outDir`** — without these, compiled files end up scattered next to source files.\n- **Using default export in many files** — a project full of default exports is harder to refactor (the importer can silently rename them to anything).\n- **Incorrect file paths or extensions** — TypeScript import paths must not include `.ts`; use bare module specifiers.\n- **Not using type-only imports for types** — importing a type without `import type` can cause runtime module loading and bundler issues.\n- **Ignoring strict mode** — turning it on later in a project causes a flood of errors; enable it from day one.',
      },
      {
        h: 'Quick recap',
        p: '- **tsconfig.json** controls how TypeScript compiles your code.\n- **Modules** let you split and organize code across files.\n- **Export/import smartly**: named (multiple things), default (one thing per file), or `import *` (everything as a namespace).\n- **`import type`** keeps type annotations out of JS output — cleaner and faster.\n- **`.d.ts` files** provide types for JS libraries and global variables.\n- **Path aliases** replace `../../../` with readable `@/...` paths.\n\n**Interview Q:**\n1. What is the purpose of `tsconfig.json`?\n2. What is the difference between named and default export?\n3. What is a declaration file?\n4. What is the benefit of using path aliases?\n5. What does `import type` do?\n\nStructure your project like a pro — and scale with confidence!',
      },
    ],
    snippets: [
      {
        label: 'tsconfig.json — production-ready starter',
        code: '{\n  "compilerOptions": {\n    "target": "ES2020",\n    "module": "CommonJS",\n    "rootDir": "src",\n    "outDir": "dist",\n    "strict": true,\n    "esModuleInterop": true,\n    "forceConsistentCasingInFileNames": true,\n    "skipLibCheck": true\n  },\n  "include": ["src"]\n}',
        note: 'strict: true enables all strict checks at once — enable it from day one.',
      },
      {
        label: 'Named vs Default vs Export Everything',
        code: '// Named — export multiple, import what you need\nexport function add(a: number, b: number) { return a + b; }\nexport const PI = 3.14;\nimport { add, PI } from "./math";\n\n// Default — one per file, any import name\nexport default function logger(msg: string) { console.log(msg); }\nimport logger from "./logger";\n\n// Export Everything — namespace import\nimport * as utils from "./utils";\nconsole.log(utils.greet());',
        note: 'Prefer named exports for libraries — they are easier to tree-shake and refactor.',
      },
      {
        label: 'import type — zero runtime cost',
        code: '// types.ts\nexport type User = { id: number; name: string };\n\n// app.ts\nimport type { User } from "./types"; // removed in JS output\n\nconst user: User = { id: 1, name: "Faisal" };',
        note: '"import type" is erased completely from the compiled JS — use it for every type-only import.',
      },
      {
        label: 'Declaration file — global variable typing',
        code: '// global.d.ts\ndeclare const API_URL: string;\ndeclare function formatDate(date: Date): string;\n\n// tsconfig.json\n{ "include": ["src", "types/**/*.d.ts"] }\n\n// anywhere in your project\nconsole.log(API_URL); // ✓ typed, no import needed',
        note: '.d.ts files contain only types — no runtime code is emitted.',
      },
      {
        label: 'Path aliases — clean imports',
        code: '// tsconfig.json\n{\n  "compilerOptions": {\n    "baseUrl": "src",\n    "paths": { "@/*": ["*"], "@components/*": ["components/*"] }\n  }\n}\n\n// Before\nimport Button from "../../../components/Button";\n\n// After\nimport Button from "@/components/Button";',
        note: 'Also configure the same aliases in your bundler (Vite/webpack) — tsc and bundlers resolve imports independently.',
      },
    ],
  },
];

export function getTsDay(day) {
  const n = Number(day);
  return TS_DAYS.find((d) => d.day === n);
}
