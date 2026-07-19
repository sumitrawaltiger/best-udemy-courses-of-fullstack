// TypeScript series notes — illustrated episodes, one per day, mirroring the
// JavaScript prerequisite series (jsPrereqNotes.js). Each day pairs a hand-drawn
// one-page episode (public/typescript-notes/) with written notes + code.

export const TS_META = {
  title: 'The TypeScript Series',
  subtitle: '8 Episodes · JavaScript, Now With Types',
  blurb:
    'JavaScript with a type system bolted on — catching bugs before they run. Eight illustrated episodes, from installing the compiler to enums, interfaces and type assertions, each paired with the full written notes and every code snippet.',
  totalDays: 8,
};

export const TS_GROUPS = [
  { id: 'foundations', label: 'Getting Started', icon: '🚀', desc: 'What TypeScript is and how to set it up.' },
  { id: 'types', label: 'The Type System', icon: '🧩', desc: 'The types you reach for every single day.' },
  { id: 'structures', label: 'Structuring Types', icon: '🏗️', desc: 'Interfaces, enums, and asserting what you know.' },
];

export const TS_DAYS = [
  {
    day: 1,
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
        p: 'Sometimes **you know more about a value than TypeScript can infer** — for example a DOM lookup or a value typed as `unknown`. A **type assertion** tells the compiler to treat it as a specific type. There are two syntaxes: `value as string` (the `as` form, preferred) and `<string>value` (the angle-bracket form, which clashes with JSX).\n\nCommon use cases: **working with the DOM, converting `unknown` types, and telling TS what you know.** The crucial warning: **type assertions do no checks at runtime.** You are overriding the compiler, so if you’re wrong, the code compiles and then crashes. Only assert when you are genuinely 100% sure.',
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
];

export function getTsDay(day) {
  const n = Number(day);
  return TS_DAYS.find((d) => d.day === n);
}
