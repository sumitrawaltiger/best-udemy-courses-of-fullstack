// DSA Handwritten Notes — transcribed from the user's 9-page handwritten PDF
// (public/dsa-notes/dsa-handwritten-notes.pdf). Each topic mirrors one page and
// is rendered by src/pages/DsaNotes.jsx alongside the original scanned page.

export const DSA_PDF = '/dsa-notes/dsa-handwritten-notes.pdf';

// Complete DSA Notes — a 77-page illustrated handwritten reference covering
// every major topic (public/dsa-notes/complete-dsa-notes.pdf), credit: @curious_programmer.
export const COMPLETE_DSA_PDF = '/dsa-notes/complete-dsa-notes.pdf';
export const COMPLETE_DSA_COVER = '/dsa-notes/complete-dsa-notes-cover.jpg';
export const COMPLETE_DSA_GROUPS = [
  ['🔢', 'Arrays'],
  ['🔗', 'Linked Lists'],
  ['📚', 'Stacks & Queues'],
  ['📊', 'Sorting Algorithms'],
  ['🌳', 'Trees'],
  ['🔑', 'Hash Tables'],
  ['🕸️', 'Graphs'],
  ['🧮', 'Recursion & DP'],
];

// LeetCode Solutions in Python — a 227-page problem book grouped by data
// structure (public/dsa-notes/leetcode-solutions-python.pdf), credit: LeetCode.
export const LEETCODE_PDF = '/dsa-notes/leetcode-solutions-python.pdf';
export const LEETCODE_COVER = '/dsa-notes/leetcode-solutions-python-cover.jpg';
export const LEETCODE_GROUPS = [
  ['🔗', 'Linked List'],
  ['🌳', 'Trees'],
  ['🕸️', 'Graphs'],
  ['⛰️', 'Heaps'],
  ['🔢', 'Arrays'],
  ['🔤', 'Strings'],
  ['🔧', 'Bit Manipulation'],
  ['➗', 'Maths'],
  ['🟦', 'Matrix'],
  ['🏗️', 'Design'],
];

export const DSA_TOPICS = [
  {
    n: '01',
    id: 'introduction',
    icon: '📘',
    title: 'Introduction to DSA',
    image: '/dsa-notes/dsa-page-1.jpg',
    summary:
      'DSA = Data Structures + Algorithms. Data structures organise data in memory efficiently; algorithms are step-by-step procedures to solve problems. It is the foundation of efficient code and every technical interview.',
    blocks: [
      {
        type: 'group',
        title: 'Why is DSA important?',
        items: [
          'Helps solve complex problems in an efficient way.',
          'Improves time and space efficiency of programs.',
          'Required in almost every technical interview.',
          'Foundation for OS, DBMS, AI, ML, Networking and more.',
        ],
      },
      {
        type: 'group',
        title: 'Why do companies ask DSA?',
        items: [
          'To test problem-solving and logical thinking.',
          'To check how you approach a problem.',
          'To evaluate your knowledge of fundamentals.',
          'To see whether you can write optimised, clean code.',
        ],
      },
      {
        type: 'group',
        title: 'Time vs Space Complexity',
        items: [
          'Time complexity — amount of time an algorithm takes as a function of input size n.',
          'Space complexity — amount of extra memory used as a function of input size n.',
        ],
      },
      {
        type: 'group',
        title: 'Asymptotic Notations',
        items: [
          'Big-O (O) — upper bound, the worst case. 0 ≤ f(n) ≤ c·g(n) for all n ≥ n₀.',
          'Omega (Ω) — lower bound, the best case. 0 ≤ c·g(n) ≤ f(n) for all n ≥ n₀.',
          'Theta (θ) — tight bound, the average case. c₁·g(n) ≤ f(n) ≤ c₂·g(n) for all n ≥ n₀.',
        ],
      },
      {
        type: 'table',
        title: 'Common Time Complexities',
        headers: ['Complexity', 'Name', 'Example', 'When it occurs'],
        rows: [
          ['O(1)', 'Constant', 'Accessing arr[i]', 'Same time for any input size'],
          ['O(log n)', 'Logarithmic', 'Binary Search', 'Input halved each step'],
          ['O(n)', 'Linear', 'Linear Search', 'Single loop over n elements'],
          ['O(n log n)', 'Linearithmic', 'Merge / Heap Sort', 'Divide and conquer'],
          ['O(n²)', 'Quadratic', 'Nested loops', 'Two nested loops'],
        ],
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Rule of thumb',
        text: 'Lower time complexity is always better: O(1) < O(log n) < O(n) < O(n log n) < O(n²). Analyse and think of a simple solution first, then optimise.',
      },
    ],
  },
  {
    n: '02',
    id: 'arrays-strings',
    icon: '🔢',
    title: 'Arrays & Strings',
    image: '/dsa-notes/dsa-page-2.jpg',
    summary:
      'An array stores elements of the same type in contiguous memory, accessed by index (0-based). A string is a sequence of characters — essentially an array of chars.',
    blocks: [
      {
        type: 'group',
        title: 'Array operations & trade-offs',
        items: [
          'Access O(1) · Search O(n) · Insertion O(n) (O(1) at end) · Deletion O(n).',
          'Advantages: random access, cache friendly, easy to implement.',
          'Disadvantages: fixed size, costly middle insert/delete, needs contiguous memory.',
        ],
      },
      {
        type: 'group',
        title: 'String operations',
        items: [
          'Length O(1) · Access O(1) · Search O(n) · Concatenation O(n) · Substring O(n).',
          'Edge cases to test: empty string, single character, all-lowercase, etc.',
        ],
      },
      {
        type: 'group',
        title: 'Two Pointer Technique',
        items: [
          'Opposite direction (start & end) — e.g. pair with a given sum in a sorted array.',
          'Same direction (slow & fast) — e.g. remove duplicates from a sorted array.',
        ],
      },
      {
        type: 'group',
        title: 'Sliding Window',
        items: [
          'A fixed or variable window moves over the data to solve subarray/substring problems.',
          'Fixed size — maximum sum of a subarray of size k.',
          'Variable size — smallest subarray with sum ≥ target.',
        ],
      },
      {
        type: 'code',
        title: 'Prefix Sum — O(1) range queries after preprocessing',
        code: 'arr    = [1, 2, 3, 4]\nprefix = [1, 3, 6, 10]   // prefix[i] = sum of 0..i\n\n// sum of range i..j\nsum(i, j) = prefix[j] - prefix[i-1]',
      },
      {
        type: 'code',
        title: "Kadane's Algorithm — Maximum Subarray Sum · O(n) time, O(1) space",
        code: 'max_sum = -infinity, current_sum = 0\nfor x in arr:\n  current_sum += x\n  max_sum = max(max_sum, current_sum)\n  if current_sum < 0: current_sum = 0\n\n// [-2,1,-3,4,-1,2,1,-5,4] -> 6  (subarray [4,-1,2,1])',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Key takeaways',
        text: 'Arrays give O(1) random access; strings are arrays of chars. Two pointers and sliding window cut brute-force cost, prefix sums power range queries, and Kadane solves max-subarray.',
      },
    ],
  },
  {
    n: '03',
    id: 'linked-lists-stack-queue',
    icon: '🔗',
    title: 'Linked Lists, Stack & Queue',
    image: '/dsa-notes/dsa-page-3.jpg',
    summary:
      'A linked list stores nodes (data + reference) at non-contiguous memory. Stacks are LIFO, queues are FIFO — pick the structure that matches your most frequent operation.',
    blocks: [
      {
        type: 'group',
        title: 'Linked Lists',
        items: [
          'Singly linked list — head → 10 → 20 → 30 → NULL; forward traversal only.',
          'Doubly linked list — each node has prev and next; supports bidirectional traversal.',
          'Common patterns: find middle node, detect loop, merge two lists, remove Nth from end.',
        ],
      },
      {
        type: 'code',
        title: 'Reverse a linked list (iterative)',
        code: 'prev = NULL, curr = head\nwhile curr != NULL:\n  next = curr.next\n  curr.next = prev\n  prev = curr\n  curr = next\nhead = prev',
      },
      {
        type: 'group',
        title: 'Stack (LIFO)',
        items: [
          'Push(x), Pop(), Peek(), isEmpty() — all from the top.',
          'Uses: recursion/function calls, undo in editors, expression & parenthesis checking, backtracking, DFS.',
          'Valid parentheses: scan left→right, push openers, pop & match on closers; valid if the stack ends empty.',
        ],
      },
      {
        type: 'group',
        title: 'Queue (FIFO)',
        items: [
          'Enqueue(x) at rear, Dequeue() from front, Front(), isEmpty().',
          'Uses: CPU scheduling, printer queue, BFS, real-world waiting lines.',
        ],
      },
      {
        type: 'group',
        title: 'Circular Queue',
        items: [
          'Last position connects back to the first for efficient space use: index = (index + 1) % size.',
          'Full when front == (rear + 1) % n; empty when front == -1.',
        ],
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Remember',
        text: 'Choose the right structure for the operation you need most often: Think → Analyze → Code → Optimize.',
      },
    ],
  },
  {
    n: '04',
    id: 'hashing-trees',
    icon: '🌳',
    title: 'Hashing & Trees',
    image: '/dsa-notes/dsa-page-4.jpg',
    summary:
      'Hashing stores/retrieves data in constant average time via a hash function — the backbone of HashMap/HashSet. Trees are hierarchical structures with a root and disjoint subtrees.',
    blocks: [
      {
        type: 'group',
        title: 'Hashing',
        items: [
          'Hash function maps a key to a table index, e.g. h(k) = k % m (m = table size).',
          'Collision handling — separate chaining (linked lists per bucket) or open addressing (linear probing: try the next index).',
          'Uses: fast lookup, frequency counting, caching, removing duplicates.',
          'A good hash function distributes keys uniformly to minimise collisions.',
        ],
      },
      {
        type: 'group',
        title: 'Tree terminology',
        items: [
          'Root — topmost node · Parent — immediate upper node · Child — immediate lower node.',
          'Leaf — node with no children · Height — longest path from root to a leaf.',
          'Binary tree — at most two children; BST — left subtree < node < right subtree.',
        ],
      },
      {
        type: 'group',
        title: 'Tree traversals',
        items: [
          'Preorder (Root, Left, Right) · Inorder (Left, Root, Right) · Postorder (Left, Right, Root) · Level order (BFS).',
          'Inorder of a BST returns keys in sorted order.',
        ],
      },
      {
        type: 'group',
        title: 'Heaps & Tries',
        items: [
          'Binary heap — complete tree with heap property. Max-heap: parent ≥ children; min-heap: parent ≤ children. Used in priority queues, heap sort, Dijkstra.',
          'Trie (prefix tree) — stores strings for efficient insert/search. Used in auto-complete, spell check, IP routing.',
        ],
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'BST operations',
        text: 'Search / Insert / Delete are O(log n) in a balanced BST, but degrade to O(n) in the worst (skewed) case.',
      },
    ],
  },
  {
    n: '05',
    id: 'graphs',
    icon: '🕸️',
    title: 'Graphs',
    image: '/dsa-notes/dsa-page-5.jpg',
    summary:
      'A graph is a non-linear structure of vertices connected by edges — used to model networks, maps, social connections and dependencies.',
    blocks: [
      {
        type: 'group',
        title: 'Terminology & types',
        items: [
          'Vertex (node), Edge (connection), Degree (edges at a vertex).',
          'Undirected vs directed; weighted (edge has cost); cyclic vs acyclic; connected vs disconnected.',
          'Max edges — undirected V(V-1)/2, directed V(V-1).',
        ],
      },
      {
        type: 'group',
        title: 'Representations',
        items: [
          'Adjacency list — store each vertex’s neighbours; space-efficient for sparse graphs.',
          'Adjacency matrix — V×V grid with 1/0 for edges; efficient for dense graphs.',
        ],
      },
      {
        type: 'group',
        title: 'Traversals',
        items: [
          'BFS — visits level by level using a Queue (e.g. A, B, C, D, E).',
          'DFS — goes as deep as possible before backtracking, using Stack/recursion (e.g. A, B, D, C, E).',
        ],
      },
      {
        type: 'group',
        title: 'Key algorithms',
        items: [
          "Dijkstra — shortest path from a source in a non-negative weighted graph; O((V+E) log V).",
          'Topological sort — linear order of a DAG (u before v for edge u→v) via DFS or Kahn’s algorithm.',
          'Union-Find (DSU) — detect cycles & manage connected components; optimise with path compression + union by rank.',
        ],
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Applications',
        text: 'Google Maps (shortest path), social networks (friend recommendation), web crawling, network routing, task scheduling, minimum spanning trees.',
      },
    ],
  },
  {
    n: '06',
    id: 'recursion-dp',
    icon: '🔁',
    title: 'Recursion & Dynamic Programming',
    image: '/dsa-notes/dsa-page-6.jpg',
    summary:
      'Recursion solves a problem by calling itself on smaller instances (needs a base case). DP optimises recursion when there are overlapping subproblems + optimal substructure.',
    blocks: [
      {
        type: 'code',
        title: 'Recursion — factorial',
        code: 'fact(n):\n  if n == 0 or n == 1: return 1   // base case\n  return n * fact(n - 1)          // recursive call',
      },
      {
        type: 'group',
        title: 'Recursion & backtracking',
        items: [
          'Naive Fibonacci recursion is O(2ⁿ) due to repeated work.',
          'Backtracking builds a solution step by step and undoes choices that break constraints.',
          'Classic backtracking: N-Queens, Sudoku solver, Rat in a Maze, Subset Sum.',
        ],
      },
      {
        type: 'code',
        title: 'DP — Memoization (Top-Down)',
        code: 'f(n):\n  if n < 2: return n\n  if dp[n] != -1: return dp[n]   // already computed\n  dp[n] = f(n-1) + f(n-2)\n  return dp[n]\n// initialise dp[] to -1 (uncomputed)',
      },
      {
        type: 'code',
        title: 'DP — Tabulation (Bottom-Up) · O(n) time & space',
        code: 'dp[0] = 0, dp[1] = 1\nfor i from 2 to n:\n  dp[i] = dp[i-1] + dp[i-2]\n// [0, 1, 1, 2, 3, 5, ...]',
      },
      {
        type: 'table',
        title: 'Classic DP problems',
        headers: ['Problem', 'Dimensions'],
        rows: [
          ['Fibonacci Number', '1D DP'],
          ['0/1 Knapsack', '2D DP'],
          ['Longest Common Subsequence (LCS)', '2D DP'],
          ['Longest Increasing Subsequence (LIS)', '1D DP'],
          ['Edit Distance', '2D DP'],
        ],
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Recursion vs DP',
        text: 'Recursion solves the problem; DP optimises the recursive solution. Reach for DP when you spot overlapping subproblems + optimal substructure.',
      },
    ],
  },
  {
    n: '07',
    id: 'sorting-searching',
    icon: '📊',
    title: 'Sorting & Searching',
    image: '/dsa-notes/dsa-page-7.jpg',
    summary:
      'Sorting arranges data; searching finds an element. Always state time, space, stability, in-place and when to use each algorithm.',
    blocks: [
      {
        type: 'group',
        title: 'Sorting algorithms',
        items: [
          'Bubble sort — swap adjacent out-of-order pairs. O(n²), best O(n), stable, in-place.',
          'Selection sort — pick the min and place it first. O(n²), in-place, not stable.',
          'Insertion sort — insert each item into the sorted part. O(n²), best O(n), in-place.',
          'Merge sort — divide, sort halves, merge. O(n log n), O(n) space, stable.',
          'Quick sort — partition around a pivot, recurse. Avg O(n log n), worst O(n²), in-place.',
        ],
      },
      {
        type: 'group',
        title: 'Searching algorithms',
        items: [
          'Linear search — check each element; O(n). Good for unsorted / small data.',
          'Binary search — halve the interval each step on sorted data; O(log n). mid = low + (high - low) / 2.',
        ],
      },
      {
        type: 'table',
        title: 'Time complexity comparison',
        headers: ['Algorithm', 'Best', 'Average', 'Worst', 'Space', 'Stable', 'In-place'],
        rows: [
          ['Bubble', 'O(n)', 'O(n²)', 'O(n²)', 'O(1)', 'Yes', 'Yes'],
          ['Selection', 'O(n²)', 'O(n²)', 'O(n²)', 'O(1)', 'No', 'Yes'],
          ['Insertion', 'O(n)', 'O(n²)', 'O(n²)', 'O(1)', 'Yes', 'Yes'],
          ['Merge', 'O(n log n)', 'O(n log n)', 'O(n log n)', 'O(n)', 'Yes', 'No'],
          ['Quick', 'O(n log n)', 'O(n log n)', 'O(n²)', 'O(log n)', 'No', 'Yes'],
          ['Binary Search', 'O(1)', 'O(log n)', 'O(log n)', 'O(1)', '—', '—'],
        ],
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'When to use what',
        text: 'Insertion sort for almost-sorted small data, merge sort when stability + large data, quick sort for fast in-place sorting, binary search only on sorted data.',
      },
    ],
  },
  {
    n: '08',
    id: 'interview-patterns',
    icon: '🧩',
    title: 'Interview Patterns',
    image: '/dsa-notes/dsa-page-8.jpg',
    summary:
      'Recognising patterns lets you pick the right approach fast. These are the templates most frequently asked in coding interviews.',
    blocks: [
      {
        type: 'group',
        title: 'Pointer & window patterns',
        items: [
          'Sliding Window — maintain a window and move its ends. e.g. max sum subarray of size K, longest substring w/o repeats.',
          'Two Pointers — traverse from both sides or at different speeds. e.g. pair sum in sorted array, 3Sum.',
          'Fast & Slow Pointer — detect cycles / find the middle. e.g. linked-list cycle, middle of a list.',
        ],
      },
      {
        type: 'group',
        title: 'Search & decision patterns',
        items: [
          'Binary Search — halve the search space (data or answer). e.g. search in rotated array, find minimum.',
          'Greedy — locally optimal choice hoping for global optimum. e.g. activity selection, fractional knapsack.',
          'Backtracking — build step by step, undo on failure. e.g. N-Queens, Sudoku solver.',
        ],
      },
      {
        type: 'group',
        title: 'Structure-based patterns',
        items: [
          'Monotonic Stack — keep increasing/decreasing order for next greater/smaller. e.g. next greater element, largest rectangle in histogram.',
          'Prefix Sum — precompute for O(1) range queries: sum[l..r] = prefix[r] - prefix[l-1]. e.g. subarray sum equals K.',
          'Difference Array — mark changes at range start/end for range updates. e.g. range addition, car pooling.',
          'Union-Find (DSU) — union/find over disjoint sets. e.g. number of islands II, redundant connection.',
        ],
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Pattern selection tips',
        text: 'Understand the ask, identify constraints, match characteristics to a pattern, and practise many problems per pattern. Break the problem → choose the pattern → implement → optimise.',
      },
    ],
  },
  {
    n: '09',
    id: 'advanced-trees',
    icon: '🌲',
    title: 'Advanced Tree Concepts',
    image: '/dsa-notes/dsa-page-9.jpg',
    summary:
      'Self-balancing and specialised trees keep operations at O(log n) and power databases, file systems and competitive programming.',
    blocks: [
      {
        type: 'group',
        title: 'AVL Trees (balanced BST)',
        items: [
          'Self-balancing BST where every node’s balance factor = height(left) − height(right) ∈ {-1, 0, 1}.',
          'Rebalanced via LL, RR, LR, RL rotations. Search/Insert/Delete and height are O(log n).',
        ],
      },
      {
        type: 'group',
        title: 'B-Trees (balanced multi-way)',
        items: [
          'A B-tree of order m keeps sorted data with more than two children per node.',
          'Every node ≤ m children; non-root ≥ ⌈m/2⌉; all keys at the same level; keys sorted within a node.',
          'O(log n) operations. Used in database indexing, file systems (NTFS), disk storage.',
        ],
      },
      {
        type: 'group',
        title: 'Red-Black Trees',
        items: [
          'Self-balancing BST with coloured nodes; root is black, no two consecutive reds.',
          'Every root-to-NULL path has the same black height. O(log n) ops — more flexible than AVL, harder to implement.',
        ],
      },
      {
        type: 'group',
        title: 'Tries, Segment Trees & HLD',
        items: [
          'Trie — insert/search/startsWith in O(L) (L = string length). Auto-complete, spell check, IP routing.',
          'Segment Tree — range query & point update in O(log n). Range sum/min/max, competitive programming.',
          'Heavy-Light Decomposition — split a tree into paths so path queries use segment trees; O(log²n) per query.',
        ],
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Takeaway',
        text: 'Trees are powerful — choosing the right structure makes a big difference.',
      },
    ],
  },
];
