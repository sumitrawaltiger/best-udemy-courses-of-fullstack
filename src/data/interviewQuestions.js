// JavaScript interview questions — grouped by category.
// Each question: { id, question, answer, code? }

export const JS_QUESTION_CATEGORIES = [
  { id: 'fundamentals', label: 'Fundamentals', icon: '📘' },
  { id: 'scope-closures', label: 'Scope & Closures', icon: '🔒' },
  { id: 'this-objects', label: 'this & Objects', icon: '🎯' },
  { id: 'async', label: 'Async JS', icon: '⏳' },
  { id: 'arrays-functions', label: 'Arrays & Functions', icon: '🧰' },
  { id: 'tricky-output', label: 'Tricky Output', icon: '🧩' },
];

export const JS_INTERVIEW_QUESTIONS = [
  // ---------------- Fundamentals ----------------
  {
    id: 'js-var-let-const',
    category: 'fundamentals',
    question: 'What is the difference between var, let, and const?',
    answer:
      '`var` is function-scoped and hoisted as `undefined`, so it can be used (as undefined) before its declaration. `let` and `const` are block-scoped and hoisted into the Temporal Dead Zone — using them before declaration throws a ReferenceError. `const` cannot be reassigned, but a `const` object/array can still be mutated.',
    code: 'if (true) {\n  var a = 1;   // function-scoped\n  let b = 2;   // block-scoped\n  const c = 3; // block-scoped, no reassignment\n}\nconsole.log(a); // 1\n// console.log(b); // ReferenceError',
  },
  {
    id: 'js-double-vs-triple-equals',
    category: 'fundamentals',
    question: 'What is the difference between == and ===?',
    answer:
      '`==` (loose equality) compares values after type coercion, so `0 == "0"` is true. `===` (strict equality) compares value and type with no coercion, so `0 === "0"` is false. Prefer `===` to avoid surprising coercion bugs.',
    code: 'console.log(0 == "0");   // true  (coerced)\nconsole.log(0 === "0");  // false (different types)\nconsole.log(null == undefined);  // true\nconsole.log(null === undefined); // false',
  },
  {
    id: 'js-primitive-vs-reference',
    category: 'fundamentals',
    question: 'What is the difference between primitive and reference types?',
    answer:
      'Primitives (string, number, boolean, null, undefined, symbol, bigint) are copied by value — each variable holds its own copy. Objects and arrays are copied by reference — the variable holds a pointer, so copying it points to the same object in memory.',
    code: 'let a = 10;\nlet b = a;\nb = 20;\nconsole.log(a); // 10 (independent copy)\n\nconst o1 = { x: 1 };\nconst o2 = o1;\no2.x = 99;\nconsole.log(o1.x); // 99 (same reference)',
  },
  {
    id: 'js-null-vs-undefined',
    category: 'fundamentals',
    question: 'What is the difference between null and undefined?',
    answer:
      '`undefined` means a variable has been declared but not assigned a value (the default). `null` is an intentional "no value" you assign yourself. `typeof undefined` is `"undefined"`, but `typeof null` is `"object"` — a long-standing quirk.',
    code: 'let a;\nconsole.log(a);         // undefined\nconsole.log(typeof a);  // "undefined"\n\nconst b = null;\nconsole.log(typeof b);  // "object" (quirk)',
  },
  {
    id: 'js-type-coercion',
    category: 'fundamentals',
    question: 'What is type coercion in JavaScript?',
    answer:
      'Type coercion is JavaScript automatically converting a value from one type to another. The `+` operator coerces to string if either side is a string, while other math operators coerce to number. This is why `"5" + 1` is `"51"` but `"5" - 1` is `4`.',
    code: 'console.log("5" + 1); // "51" (number → string)\nconsole.log("5" - 1); // 4    (string → number)\nconsole.log(true + 1); // 2   (true → 1)\nconsole.log([] + {}); // "[object Object]"',
  },

  // ---------------- Scope & Closures ----------------
  {
    id: 'js-hoisting',
    category: 'scope-closures',
    question: 'What is hoisting?',
    answer:
      'Before running code, JavaScript sets up memory in a first pass: `var` declarations become `undefined`, function declarations are stored in full, and `let`/`const` are placed in the Temporal Dead Zone. That is why you can call a function declaration before it appears, but reading a `let` early throws.',
    code: 'console.log(x); // undefined (var hoisted)\nvar x = 5;\n\nhi(); // "hi" — function declaration hoisted\nfunction hi() { console.log("hi"); }',
  },
  {
    id: 'js-closure',
    category: 'scope-closures',
    question: 'What is a closure?',
    answer:
      'A closure is a function that remembers the variables from the scope where it was created, even after that outer function has finished executing. Closures power data privacy, the counter pattern, and function factories.',
    code: 'function counter() {\n  let count = 0;\n  return function () {\n    count++;\n    return count;\n  };\n}\nconst c = counter();\nc(); // 1\nc(); // 2 — count is remembered',
  },
  {
    id: 'js-closure-privacy',
    category: 'scope-closures',
    question: 'How do closures enable private variables?',
    answer:
      'By keeping a variable inside a function scope and only exposing methods that operate on it, the variable becomes unreachable from outside — true encapsulation without classes.',
    code: 'function bank() {\n  let balance = 0;\n  return {\n    deposit(n) { if (n > 0) balance += n; },\n    getBalance() { return balance; },\n  };\n}\nconst acc = bank();\nacc.deposit(100);\nconsole.log(acc.getBalance()); // 100\nconsole.log(acc.balance);      // undefined (private)',
  },
  {
    id: 'js-loop-var-closure',
    category: 'scope-closures',
    question: 'Why does a for loop with var print the same value in setTimeout?',
    answer:
      'With `var`, there is a single shared, function-scoped variable, so by the time the callbacks run the loop has finished and all of them read the final value. Using `let` creates a new block-scoped binding per iteration, fixing the output.',
    code: 'for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i)); // 3, 3, 3\n}\n\nfor (let j = 0; j < 3; j++) {\n  setTimeout(() => console.log(j)); // 0, 1, 2\n}',
  },

  // ---------------- this & Objects ----------------
  {
    id: 'js-this-keyword',
    category: 'this-objects',
    question: 'How is the value of `this` determined?',
    answer:
      '`this` depends on how a function is called, not where it is defined. Called as a method (`obj.fn()`) → the object; called as a plain function → the global object (non-strict) or `undefined` (strict); with `call`/`apply`/`bind` → whatever you pass; as an arrow function → inherited from the enclosing scope.',
    code: 'const user = {\n  name: "Rohit",\n  greet() { return this.name; },\n};\nconsole.log(user.greet()); // "Rohit"\n\nconst fn = user.greet;\n// console.log(fn()); // undefined / error — lost `this`',
  },
  {
    id: 'js-call-apply-bind',
    category: 'this-objects',
    question: 'What is the difference between call, apply, and bind?',
    answer:
      '`call` invokes the function immediately with `this` and arguments listed individually. `apply` is the same but takes arguments as an array. `bind` does not invoke — it returns a new function permanently bound to the given `this` (and any preset arguments).',
    code: 'function intro(city) { return `${this.name} from ${city}`; }\nconst p = { name: "Rohit" };\n\nintro.call(p, "Delhi");      // "Rohit from Delhi"\nintro.apply(p, ["Delhi"]);   // "Rohit from Delhi"\nconst bound = intro.bind(p);\nbound("Delhi");              // "Rohit from Delhi"',
  },
  {
    id: 'js-arrow-vs-regular',
    category: 'this-objects',
    question: 'How do arrow functions differ from regular functions?',
    answer:
      'Arrow functions have no own `this`, `arguments`, or `prototype` — they borrow `this` lexically from the enclosing scope. This makes them great for callbacks (e.g. inside `setInterval`) but a poor choice as object methods or constructors.',
    code: 'const obj = {\n  count: 0,\n  start() {\n    setInterval(() => { this.count++; }, 1000); // this = obj\n  },\n};',
  },
  {
    id: 'js-prototype',
    category: 'this-objects',
    question: 'What is the prototype chain?',
    answer:
      'Every object has a hidden link (`__proto__`) to another object, its prototype. When you access a property that is not on the object, JavaScript walks up this chain until it finds the property or reaches `null`. Methods like `Array.prototype.push` and `Object.prototype.toString` live on prototypes.',
    code: 'const animal = { eats: true };\nconst dog = Object.create(animal);\ndog.barks = true;\nconsole.log(dog.barks); // true (own)\nconsole.log(dog.eats);  // true (inherited via prototype)',
  },
  {
    id: 'js-shallow-deep-copy',
    category: 'this-objects',
    question: 'What is the difference between a shallow and a deep copy?',
    answer:
      'A shallow copy (spread `{...obj}` or `Object.assign`) copies top-level properties, but nested objects are still shared by reference. A deep copy duplicates everything, so nested changes are independent — use `structuredClone(obj)` (or `JSON.parse(JSON.stringify(obj))` for simple data).',
    code: 'const o = { a: 1, nested: { b: 2 } };\nconst shallow = { ...o };\nshallow.nested.b = 99;\nconsole.log(o.nested.b); // 99 (shared)\n\nconst deep = structuredClone(o);\ndeep.nested.b = 5;\nconsole.log(o.nested.b); // unchanged',
  },

  // ---------------- Async JS ----------------
  {
    id: 'js-event-loop',
    category: 'async',
    question: 'What is the event loop?',
    answer:
      'JavaScript is single-threaded with one call stack. Async callbacks (timers, promises, events) are handed off and their callbacks wait in queues. The event loop watches the call stack; when it is empty, it moves the next queued callback onto the stack. Microtasks (promises) run before macrotasks (setTimeout).',
    code: 'console.log("1");\nsetTimeout(() => console.log("2"), 0);\nPromise.resolve().then(() => console.log("3"));\nconsole.log("4");\n// Output: 1, 4, 3, 2',
  },
  {
    id: 'js-promise',
    category: 'async',
    question: 'What is a Promise and its states?',
    answer:
      'A Promise is an object representing a value that will be available later. It has three states: pending, fulfilled (resolved), or rejected. You consume it with `.then()` for success, `.catch()` for errors, and `.finally()` which always runs.',
    code: 'const p = new Promise((resolve, reject) => {\n  setTimeout(() => resolve("done"), 1000);\n});\np.then((val) => console.log(val))\n .catch((err) => console.log(err))\n .finally(() => console.log("settled"));',
  },
  {
    id: 'js-async-await',
    category: 'async',
    question: 'What is async/await and how does it relate to Promises?',
    answer:
      '`async/await` is syntactic sugar over Promises that lets asynchronous code read top-to-bottom like synchronous code. An `async` function always returns a Promise, and `await` pauses execution until a Promise settles. Wrap `await` in `try/catch` for error handling.',
    code: 'async function getUser() {\n  try {\n    const res = await fetch("/api/user");\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.log(err);\n  }\n}',
  },
  {
    id: 'js-callback-hell',
    category: 'async',
    question: 'What is callback hell and how do you avoid it?',
    answer:
      'Callback hell is deeply nested callbacks — each async step nested inside the previous one — forming a hard-to-read "pyramid of doom". Avoid it by returning Promises and chaining `.then()`, or by using `async/await` for flat, sequential-looking code.',
    code: '// Instead of nested callbacks:\nplaceOrder(order)\n  .then(prepareOrder)\n  .then(pickUpOrder)\n  .then(deliverOrder)\n  .catch(handleError);',
  },
  {
    id: 'js-promise-all',
    category: 'async',
    question: 'What is the difference between Promise.all and Promise.race?',
    answer:
      '`Promise.all([...])` waits for all promises to fulfill and resolves with an array of results — but rejects as soon as any one rejects. `Promise.race([...])` settles as soon as the first promise settles (fulfilled or rejected). `Promise.allSettled` waits for all and never short-circuits.',
    code: 'const a = Promise.resolve(1);\nconst b = Promise.resolve(2);\nPromise.all([a, b]).then(console.log); // [1, 2]\nPromise.race([a, b]).then(console.log); // 1',
  },

  // ---------------- Arrays & Functions ----------------
  {
    id: 'js-map-foreach',
    category: 'arrays-functions',
    question: 'What is the difference between map and forEach?',
    answer:
      '`map` returns a new array of the same length with each element transformed by the callback — ideal when you need a result. `forEach` just runs the callback for each element and returns `undefined` — use it for side effects. `map` is chainable; `forEach` is not.',
    code: 'const nums = [1, 2, 3];\nconst doubled = nums.map((n) => n * 2); // [2, 4, 6]\nnums.forEach((n) => console.log(n));    // logs, returns undefined',
  },
  {
    id: 'js-reduce',
    category: 'arrays-functions',
    question: 'How does reduce work?',
    answer:
      '`reduce` boils an array down to a single value. The callback receives an accumulator and the current element; whatever it returns becomes the next accumulator. The second argument to `reduce` is the initial accumulator value.',
    code: 'const nums = [1, 2, 3, 4];\nconst sum = nums.reduce((acc, n) => acc + n, 0); // 10\nconst max = nums.reduce((a, b) => (a > b ? a : b)); // 4',
  },
  {
    id: 'js-filter-find',
    category: 'arrays-functions',
    question: 'What is the difference between filter and find?',
    answer:
      '`filter` returns a new array with all elements that pass the test (could be empty). `find` returns the first single element that passes the test, or `undefined` if none match. Use `filter` for many matches, `find` for one.',
    code: 'const nums = [1, 2, 3, 4];\nnums.filter((n) => n % 2 === 0); // [2, 4]\nnums.find((n) => n % 2 === 0);   // 2',
  },
  {
    id: 'js-rest-spread',
    category: 'arrays-functions',
    question: 'What is the difference between rest and spread operators?',
    answer:
      'They share the `...` syntax but do opposite things. The rest operator collects multiple elements into a single array (in function parameters or destructuring). The spread operator expands an array/object into individual elements (in calls, arrays, or object literals).',
    code: 'function sum(...nums) {          // rest: collect\n  return nums.reduce((a, b) => a + b, 0);\n}\nconst arr = [1, 2, 3];\nconsole.log(sum(...arr));          // spread: expand → 6\nconst copy = [...arr, 4];          // [1, 2, 3, 4]',
  },
  {
    id: 'js-debounce-throttle',
    category: 'arrays-functions',
    question: 'What is the difference between debounce and throttle?',
    answer:
      'Both limit how often a function runs. Debounce waits until events stop for a set delay before firing once (great for search inputs). Throttle runs the function at most once per interval no matter how many events fire (great for scroll/resize handlers).',
    code: 'function debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}',
  },

  // ---------------- Tricky Output ----------------
  {
    id: 'js-nan',
    category: 'tricky-output',
    question: 'Why does NaN === NaN return false?',
    answer:
      '`NaN` (Not a Number) is the only JavaScript value not equal to itself, per the IEEE 754 spec. To check for it, use `Number.isNaN(x)` or `Object.is(x, NaN)` instead of `===`.',
    code: 'console.log(NaN === NaN);        // false\nconsole.log(Number.isNaN(NaN));  // true\nconsole.log(Object.is(NaN, NaN)); // true',
  },
  {
    id: 'js-0-1-2-sort',
    category: 'tricky-output',
    question: 'Why does [10, 1, 2].sort() give [1, 10, 2]?',
    answer:
      'By default, `sort()` converts elements to strings and sorts lexicographically, so "10" comes before "2". Pass a compare function to sort numerically: ascending is `(a, b) => a - b`.',
    code: '[10, 1, 2].sort();              // [1, 10, 2]\n[10, 1, 2].sort((a, b) => a - b); // [1, 2, 10]',
  },
  {
    id: 'js-typeof-array',
    category: 'tricky-output',
    question: 'How do you check if a value is an array?',
    answer:
      '`typeof []` returns `"object"`, which is not helpful. Use `Array.isArray(value)` — it reliably returns true only for arrays.',
    code: 'console.log(typeof []);          // "object"\nconsole.log(Array.isArray([]));  // true\nconsole.log(Array.isArray({}));  // false',
  },
  {
    id: 'js-falsy-values',
    category: 'tricky-output',
    question: 'What are the falsy values in JavaScript?',
    answer:
      'There are exactly eight falsy values: `false`, `0`, `-0`, `0n` (BigInt zero), `""` (empty string), `null`, `undefined`, and `NaN`. Everything else — including `"0"`, `"false"`, `[]`, and `{}` — is truthy.',
    code: 'if ([]) console.log("array is truthy");  // runs\nif ("0") console.log("\'0\' is truthy");   // runs\nif (0) console.log("never");              // skipped',
  },
  {
    id: 'js-object-key-order',
    category: 'tricky-output',
    question: 'What does `"b" + "a" + + "a" + "a"` evaluate to?',
    answer:
      'It evaluates to `"baNaNa"`. The unary `+` before the second `"a"` tries to convert `"a"` to a number, producing `NaN`, which is then concatenated as the string "NaN". A classic coercion gotcha.',
    code: 'console.log("b" + "a" + + "a" + "a");\n// "b" + "a" + (+"a") + "a"\n// "b" + "a" + NaN + "a"\n// "baNaNa"',
  },
];

export function searchJsQuestions(query) {
  const q = query.trim().toLowerCase();
  if (!q) return JS_INTERVIEW_QUESTIONS;
  return JS_INTERVIEW_QUESTIONS.filter(
    (item) =>
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q) ||
      (item.code && item.code.toLowerCase().includes(q)),
  );
}
