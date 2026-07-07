// Java 8 Stream API interview puzzles — predict-the-output & find-the-bug style,
// each with a worked solution. { id, category, question, answer, code? }

export const JAVA_STREAMS_CATEGORIES = [
  { id: 'creation-basics', label: 'Creation & Basics', icon: '🌱' },
  { id: 'intermediate', label: 'Intermediate Ops', icon: '🔧' },
  { id: 'terminal-reduce', label: 'Terminal & Reduce', icon: '🎯' },
  { id: 'collectors', label: 'Collectors & Grouping', icon: '🗂️' },
  { id: 'predict-output', label: 'Predict the Output', icon: '🔮' },
  { id: 'gotchas', label: 'Gotchas & Pitfalls', icon: '🧩' },
];

export const JAVA_STREAMS_PUZZLES = [
  // ---------------- Creation & Basics ----------------
  {
    id: 'js-range-sum',
    category: 'creation-basics',
    question: 'What do these two lines print — and why are they different?',
    answer:
      '`10` then `15`. `IntStream.range(1, 5)` is **exclusive** of the upper bound, so it streams 1,2,3,4 → sum 10. `IntStream.rangeClosed(1, 5)` is **inclusive**, streaming 1,2,3,4,5 → sum 15. Off-by-one between `range` and `rangeClosed` is a classic trap.',
    code: 'System.out.println(IntStream.range(1, 5).sum());        // 10\nSystem.out.println(IntStream.rangeClosed(1, 5).sum());  // 15',
  },
  {
    id: 'js-lazy-no-terminal',
    category: 'creation-basics',
    question: 'What is the output of this snippet?',
    answer:
      '**Nothing is printed.** Intermediate operations like `map` and `peek` are **lazy** — they only run when a terminal operation (e.g. `forEach`, `collect`, `count`) pulls elements through the pipeline. With no terminal operation, the pipeline is never executed.',
    code: 'Stream.of("a", "b", "c")\n      .peek(System.out::println)\n      .map(String::toUpperCase);\n// (no terminal operation)',
  },
  {
    id: 'js-generate-limit',
    category: 'creation-basics',
    question: 'How do you take just the first 5 numbers from an infinite stream?',
    answer:
      'Use `Stream.iterate` / `Stream.generate` (both infinite) with `limit()` as a **short-circuiting** intermediate op. Without `limit()` the terminal op would never finish. `Stream.iterate(1, n -> n + 1)` produces 1,2,3,4,5.',
    code: 'Stream.iterate(1, n -> n + 1)\n      .limit(5)\n      .forEach(System.out::print);  // 12345',
  },
  {
    id: 'js-reuse',
    category: 'creation-basics',
    question: 'Why does the second forEach throw an exception?',
    answer:
      'A stream can be **consumed only once**. After the first terminal operation the stream is closed, so the second `forEach` throws `IllegalStateException: stream has already been operated upon or closed`. To iterate twice, create the stream fresh from the source each time (e.g. `list.stream()` again) — or use the collection directly.',
    code: 'Stream<Integer> s = Stream.of(1, 2, 3);\ns.forEach(System.out::print);   // 123\ns.forEach(System.out::print);   // IllegalStateException',
  },

  // ---------------- Intermediate Ops ----------------
  {
    id: 'js-flatmap',
    category: 'intermediate',
    question: 'Flatten a list of lists into one stream — what prints?',
    answer:
      '`1234`. `flatMap` maps each element to a **stream** and then flattens all those streams into one. `map(List::stream)` would give you a `Stream<Stream<Integer>>`; `flatMap` unwraps that extra level.',
    code: 'List<List<Integer>> nested =\n    Arrays.asList(Arrays.asList(1, 2), Arrays.asList(3, 4));\nnested.stream()\n      .flatMap(List::stream)\n      .forEach(System.out::print);  // 1234',
  },
  {
    id: 'js-takewhile-dropwhile',
    category: 'intermediate',
    question: 'What do takeWhile and dropWhile print here (Java 9+)?',
    answer:
      '`takeWhile` → `123`, `dropWhile` → `412`. `takeWhile(p)` emits the **longest leading prefix** matching the predicate and then stops — so it stops at the first `4`. `dropWhile(p)` **discards** that leading prefix and keeps everything from the first failing element onward — including the later `1, 2`. They are prefix-based, not global filters.',
    code: 'Stream.of(1, 2, 3, 4, 1, 2).takeWhile(n -> n < 4).forEach(System.out::print); // 123\nStream.of(1, 2, 3, 4, 1, 2).dropWhile(n -> n < 4).forEach(System.out::print); // 412',
  },
  {
    id: 'js-order-matters',
    category: 'intermediate',
    question: 'Does the order of filter and map matter for performance?',
    answer:
      'Yes. Streams process **element-by-element** (vertically), not stage-by-stage. Putting `filter` **before** `map` means the expensive `map` only runs for elements that survive the filter. Filtering after mapping wastes work transforming elements you then throw away. Order also matters for correctness if `map` can throw on values the filter would have removed.',
    code: '// Efficient — filter first, map only the survivors\nlist.stream().filter(s -> s.length() > 3).map(String::toUpperCase)...\n\n// Wasteful — maps everything, then discards most\nlist.stream().map(String::toUpperCase).filter(s -> s.length() > 3)...',
  },
  {
    id: 'js-distinct-equals',
    category: 'intermediate',
    question: 'Why does distinct() keep "duplicate" objects that look identical?',
    answer:
      '`distinct()` uses `equals()` / `hashCode()` to decide uniqueness. For custom classes that don\'t override them, the default identity-based `equals` treats every `new` instance as distinct, so nothing is removed. Override both methods (or use a record) so value-equal objects collapse.',
    code: 'record Point(int x, int y) {}  // record auto-generates equals/hashCode\nStream.of(new Point(1,1), new Point(1,1))\n      .distinct().count();  // 1  (would be 2 for a plain class)',
  },
  {
    id: 'js-sorted-limit-topn',
    category: 'intermediate',
    question: 'How do you get the top 3 largest numbers?',
    answer:
      'Sort descending with a reverse comparator, then `limit(3)`. `sorted(Comparator.reverseOrder())` orders 9,7,5,3,1 and `limit(3)` short-circuits after the first three → `[9, 7, 5]`.',
    code: 'Stream.of(3, 1, 7, 5, 9)\n      .sorted(Comparator.reverseOrder())\n      .limit(3)\n      .collect(Collectors.toList());  // [9, 7, 5]',
  },

  // ---------------- Terminal & Reduce ----------------
  {
    id: 'js-reduce-product',
    category: 'terminal-reduce',
    question: 'What does this reduce return?',
    answer:
      '`Optional[24]`. The two-argument `reduce((a, b) -> a * b)` has **no identity**, so it returns an `Optional` (empty if the stream is empty). It multiplies 1×2×3×4 = 24. The three-arg form `reduce(1, (a,b)->a*b)` would return a plain `int`.',
    code: 'Optional<Integer> r = Stream.of(1, 2, 3, 4).reduce((a, b) -> a * b);\nSystem.out.println(r);  // Optional[24]',
  },
  {
    id: 'js-reduce-parallel-subtract',
    category: 'terminal-reduce',
    question: 'Why can this parallel reduce give a "wrong" answer?',
    answer:
      'Because subtraction is **not associative**. `reduce` requires an associative accumulator so results are independent of how the stream is split. Sequentially `((10-1)-2)-3 = 4`; in parallel the stream is split and combined in a different grouping, producing a different number. Only use associative operations (sum, max, string concat) with `reduce`, especially in parallel.',
    code: 'int seq = Stream.of(1, 2, 3).reduce(10, (a, b) -> a - b);            // 4\nint par = Stream.of(1, 2, 3).parallel().reduce(10, (a, b) -> a - b); // may differ!',
  },
  {
    id: 'js-mapToInt-sum',
    category: 'terminal-reduce',
    question: 'What is the sum of the even numbers here?',
    answer:
      '`6`. `filter(n -> n % 2 == 0)` keeps 2 and 4; `mapToInt(Integer::intValue)` converts the `Stream<Integer>` to an `IntStream` so you can call the primitive `sum()` (2 + 4 = 6). Object streams have no `sum()` — you must go through `mapToInt`/`mapToLong`.',
    code: 'int sum = Stream.of(1, 2, 3, 4, 5)\n                .filter(n -> n % 2 == 0)\n                .mapToInt(Integer::intValue)\n                .sum();  // 6',
  },
  {
    id: 'js-findfirst-empty',
    category: 'terminal-reduce',
    question: 'What does findFirst() return on an empty stream, and how do you handle it safely?',
    answer:
      '`findFirst()` returns an **empty `Optional`**, not null and not an exception. Calling `.get()` on it would throw `NoSuchElementException`, so use `orElse` / `orElseGet` / `orElseThrow`. Here it prints `none`.',
    code: 'String s = Stream.<String>of()\n                 .findFirst()\n                 .orElse("none");\nSystem.out.println(s);  // none',
  },
  {
    id: 'js-anymatch-shortcircuit',
    category: 'terminal-reduce',
    question: 'How many times does peek run before anyMatch returns?',
    answer:
      'Only until the predicate first succeeds. `anyMatch` is **short-circuiting**: with vertical processing, `peek` prints `1`, `2`, then `3` matches `n > 2`, so it stops. Output is `12` then `true` — 4, 5 are never touched.',
    code: 'boolean found = Stream.of(1, 2, 3, 4, 5)\n                      .peek(System.out::print)\n                      .anyMatch(n -> n > 2);\nSystem.out.println("\\n" + found);  // 12 \\n true',
  },

  // ---------------- Collectors & Grouping ----------------
  {
    id: 'js-tomap-duplicate',
    category: 'collectors',
    question: 'Why does this Collectors.toMap throw an exception?',
    answer:
      '`IllegalStateException: Duplicate key`. Both "apple" and "avocado" map to key `\'a\'`, and the two-arg `toMap` has no rule for collisions. Supply a **merge function** as the third argument to resolve duplicates — e.g. keep the first, or concatenate.',
    code: '// Throws: Duplicate key a\nStream.of("apple", "banana", "avocado")\n      .collect(Collectors.toMap(s -> s.charAt(0), s -> s));\n\n// Fix: merge function keeps the first value\nStream.of("apple", "banana", "avocado")\n      .collect(Collectors.toMap(s -> s.charAt(0), s -> s, (a, b) -> a));',
  },
  {
    id: 'js-grouping-counting',
    category: 'collectors',
    question: 'How do you build a frequency map (count of each word)?',
    answer:
      'Combine `groupingBy` with the downstream collector `Collectors.counting()`. Grouping by identity buckets equal words, and `counting()` reduces each bucket to its size → `{a=3, b=2, c=1}`. This is the canonical "count occurrences" idiom.',
    code: 'Map<String, Long> freq = Stream.of("a", "b", "a", "c", "b", "a")\n    .collect(Collectors.groupingBy(w -> w, Collectors.counting()));\n// {a=3, b=2, c=1}',
  },
  {
    id: 'js-partitioning',
    category: 'collectors',
    question: 'What does partitioningBy return that groupingBy does not?',
    answer:
      '`partitioningBy` always returns a `Map<Boolean, List<T>>` with **both** `true` and `false` keys present — even if one side is empty. `groupingBy` on a boolean would omit an absent key. Here: `{false=[1, 3, 5], true=[2, 4]}`.',
    code: 'Map<Boolean, List<Integer>> parts = Stream.of(1, 2, 3, 4, 5)\n    .collect(Collectors.partitioningBy(n -> n % 2 == 0));\n// {false=[1, 3, 5], true=[2, 4]}',
  },
  {
    id: 'js-joining',
    category: 'collectors',
    question: 'What string does this produce?',
    answer:
      '`[a, b, c]`. `Collectors.joining(delimiter, prefix, suffix)` concatenates the elements with `", "` between them and wraps the result in `[` … `]`. It works only on a `Stream<String>` (or `CharSequence`) — map to strings first otherwise.',
    code: 'String s = Stream.of("a", "b", "c")\n    .collect(Collectors.joining(", ", "[", "]"));  // [a, b, c]',
  },
  {
    id: 'js-tolist-immutable',
    category: 'collectors',
    question: 'What is the difference between Stream.toList() and collect(Collectors.toList())?',
    answer:
      '`Stream.toList()` (Java 16+) returns an **unmodifiable** list — calling `add`/`set` throws `UnsupportedOperationException`. `collect(Collectors.toList())` gives **no guarantee** about mutability but in practice returns a mutable `ArrayList`. If you need to modify the result, use `collect(Collectors.toCollection(ArrayList::new))`.',
    code: 'List<Integer> a = Stream.of(1, 2).toList();                    // unmodifiable\na.add(3);  // UnsupportedOperationException\n\nList<Integer> b = Stream.of(1, 2).collect(Collectors.toList()); // usually mutable',
  },

  // ---------------- Predict the Output ----------------
  {
    id: 'js-peek-count',
    category: 'predict-output',
    question: 'On Java 9+, what does peek print here?',
    answer:
      '**Nothing** — it prints only `3`. Since Java 9, `count()` can determine the size **without executing the pipeline** when no operation changes the count and the size is known. `Stream.of(...)` has a known size and `peek` doesn\'t alter it, so `peek` is skipped. Add a `filter` before `count` and peek *will* run, because then the size can\'t be known upfront. Great trap for "peek is guaranteed to run" assumptions.',
    code: 'long c = Stream.of("a", "b", "c")\n               .peek(System.out::print)   // does NOT run on Java 9+\n               .count();\nSystem.out.println(c);  // 3',
  },
  {
    id: 'js-map-index',
    category: 'predict-output',
    question: 'What is printed and in what order (sequential stream)?',
    answer:
      '`A1 B1 C1` — wait, it prints `map:a filter:A ...` interleaved. Because processing is **vertical (depth-first per element)**, each element flows fully through the pipeline before the next starts. Output: `map:a`, `filter:A`, `map:b`, `filter:B`, `map:c`, `filter:C`. A common misconception is that `map` runs for *all* elements before `filter` begins (horizontal) — it does not.',
    code: 'Stream.of("a", "b", "c")\n  .map(s -> { System.out.println("map:" + s); return s.toUpperCase(); })\n  .forEach(s -> System.out.println("filter:" + s));',
  },
  {
    id: 'js-boxed-collect',
    category: 'predict-output',
    question: 'Why won\'t IntStream.range(1,4).collect(Collectors.toList()) compile?',
    answer:
      '`IntStream` is a **primitive** stream — it has no `collect(Collector)` overload and can\'t hold `Integer` objects. You must `boxed()` (or `mapToObj(Integer::valueOf)`) to convert it to a `Stream<Integer>` first. Then `collect(Collectors.toList())` yields `[1, 2, 3]`.',
    code: '// Does NOT compile:\n// IntStream.range(1, 4).collect(Collectors.toList());\n\nList<Integer> list = IntStream.range(1, 4)\n                              .boxed()\n                              .collect(Collectors.toList());  // [1, 2, 3]',
  },
  {
    id: 'js-optional-map-chain',
    category: 'predict-output',
    question: 'What does average() return and how do you print it?',
    answer:
      '`average()` on an `IntStream` returns an `OptionalDouble` (empty for an empty stream). For 1,2,3,4 it is `OptionalDouble[2.5]`; `getAsDouble()` / `orElse(0)` unwraps it to `2.5`. Forgetting it\'s an `Optional*` and expecting a raw `double` is a common slip.',
    code: 'double avg = IntStream.of(1, 2, 3, 4).average().orElse(0);\nSystem.out.println(avg);  // 2.5',
  },

  // ---------------- Gotchas & Pitfalls ----------------
  {
    id: 'js-stateful-parallel',
    category: 'gotchas',
    question: 'Why is this parallel stream that mutates an external list broken?',
    answer:
      'The lambda has a **side effect on shared mutable state** (`ArrayList` isn\'t thread-safe). In parallel, multiple threads call `add` concurrently → lost updates, `ArrayIndexOutOfBoundsException`, or nulls. Never mutate shared state from a stream; use a `collect(Collectors.toList())` instead, which is designed to combine partial results safely.',
    code: '// BROKEN in parallel\nList<Integer> out = new ArrayList<>();\nlist.parallelStream().forEach(out::add);  // race condition\n\n// CORRECT\nList<Integer> out2 = list.parallelStream().collect(Collectors.toList());',
  },
  {
    id: 'js-foreach-ordered',
    category: 'gotchas',
    question: 'forEach vs forEachOrdered on a parallel stream — what changes?',
    answer:
      'On a **parallel** stream, `forEach` gives **no ordering guarantee** — elements are printed in whatever order threads finish, so output is non-deterministic. `forEachOrdered` respects the stream\'s **encounter order** at the cost of some parallelism. On a sequential stream they behave the same.',
    code: 'Stream.of(1, 2, 3, 4, 5).parallel().forEach(System.out::print);        // e.g. 31542\nStream.of(1, 2, 3, 4, 5).parallel().forEachOrdered(System.out::print); // 12345',
  },
  {
    id: 'js-findany-parallel',
    category: 'gotchas',
    question: 'Why might findFirst and findAny return different elements?',
    answer:
      '`findFirst()` always returns the **first element in encounter order**, even in parallel (which limits parallelism). `findAny()` may return **any** matching element — on a parallel stream it returns whichever a thread finds first, so results vary between runs. Use `findAny` only when you truly don\'t care which match you get.',
    code: 'Optional<Integer> a = list.parallelStream().filter(n -> n > 10).findFirst(); // deterministic\nOptional<Integer> b = list.parallelStream().filter(n -> n > 10).findAny();   // any match',
  },
  {
    id: 'js-null-npe',
    category: 'gotchas',
    question: 'Why can a stream throw NullPointerException in a seemingly safe pipeline?',
    answer:
      'Streams don\'t tolerate `null` well: `map` producing `null` then chained with an unboxing op, `Collectors.toMap` with a `null` value (throws NPE), or `sorted()` on natural order with `null` elements all blow up. Filter out nulls early (`filter(Objects::nonNull)`) or use `Optional`. Here `toMap` with a null value throws NPE, unlike `HashMap.put`.',
    code: 'Stream.of("a", "b")\n  .collect(Collectors.toMap(k -> k, k -> (String) null));  // NullPointerException',
  },
  {
    id: 'js-count-side-effect',
    category: 'gotchas',
    question: 'Should you rely on peek() for side effects in production?',
    answer:
      'No. The Javadoc says `peek` exists mainly to **support debugging**. Its execution isn\'t guaranteed (see the `count()` optimization) and it invites side effects that break in parallel. For real work, do the side effect in the terminal operation (`forEach`) or, better, transform data functionally and `collect` the result.',
    code: '// Fragile — peek may be skipped/reordered\nstream.peek(auditLog::record).count();\n\n// Prefer an explicit terminal side effect\nstream.forEach(auditLog::record);',
  },
];

export function searchJavaStreamsPuzzles(query) {
  const q = query.trim().toLowerCase();
  if (!q) return JAVA_STREAMS_PUZZLES;
  return JAVA_STREAMS_PUZZLES.filter(
    (item) =>
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q) ||
      (item.code && item.code.toLowerCase().includes(q)),
  );
}
