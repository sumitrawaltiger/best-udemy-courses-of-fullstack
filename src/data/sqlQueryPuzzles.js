// Tricky SQL query interview questions — the classic puzzles that trip people up,
// each with a worked query solution. { id, category, question, answer, code? }

export const SQL_QUERY_CATEGORIES = [
  { id: 'joins-sets', label: 'Joins & Set Ops', icon: '🔗' },
  { id: 'aggregation', label: 'Aggregation & Grouping', icon: '📊' },
  { id: 'window', label: 'Window Functions', icon: '🪟' },
  { id: 'subqueries-cte', label: 'Subqueries & CTEs', icon: '🎯' },
  { id: 'null-gotchas', label: 'NULL & Gotchas', icon: '🕳️' },
  { id: 'classic-puzzles', label: 'Classic Puzzles', icon: '🧩' },
];

export const SQL_QUERY_PUZZLES = [
  // ---------------- Joins & Set Ops ----------------
  {
    id: 'sql-earn-more-than-manager',
    category: 'joins-sets',
    question: 'Find employees who earn more than their managers.',
    answer:
      'This is the classic **self-join** puzzle. Join the `Employee` table to itself — one alias `e` for the employee, one alias `m` for the manager — matching `e.managerId = m.id`, then compare salaries. The trick is realising both roles live in the same table.',
    code: `SELECT e.name AS Employee
FROM   Employee e
JOIN   Employee m ON e.managerId = m.id
WHERE  e.salary > m.salary;`,
  },
  {
    id: 'sql-anti-join',
    category: 'joins-sets',
    question: 'Find all customers who never placed an order.',
    answer:
      'An **anti-join**. `LEFT JOIN` keeps every customer; unmatched customers get `NULL` in the orders columns, so filter `WHERE o.id IS NULL`. Equivalent with `NOT EXISTS` (usually the safest/most efficient) — but avoid `NOT IN` if the subquery column can be `NULL` (see the NULL gotcha).',
    code: `SELECT c.name
FROM   Customers c
LEFT JOIN Orders o ON c.id = o.customer_id
WHERE  o.id IS NULL;

-- Equivalent, NULL-safe:
SELECT c.name FROM Customers c
WHERE NOT EXISTS (SELECT 1 FROM Orders o WHERE o.customer_id = c.id);`,
  },
  {
    id: 'sql-union-vs-unionall',
    category: 'joins-sets',
    question: 'What is the difference between UNION and UNION ALL — and which is faster?',
    answer:
      '`UNION` concatenates both result sets **and removes duplicate rows**, which forces an expensive sort/hash de-duplication step. `UNION ALL` keeps **all** rows including duplicates and does no de-dup, so it is **faster**. Use `UNION ALL` whenever you know rows can\'t collide (or duplicates are fine) — a very common performance interview point.',
    code: `SELECT city FROM Suppliers
UNION ALL          -- keeps duplicates, no sort => faster
SELECT city FROM Customers;`,
  },
  {
    id: 'sql-bought-all-products',
    category: 'joins-sets',
    question: 'Find customers who have bought every product (relational division).',
    answer:
      'Group the purchases per customer and keep only those whose **distinct product count equals the total number of products**. `COUNT(DISTINCT product_id)` guards against a customer buying the same product twice inflating the count. This "bought them all" shape is *relational division*.',
    code: `SELECT customer_id
FROM   Purchases
GROUP  BY customer_id
HAVING COUNT(DISTINCT product_id) = (SELECT COUNT(*) FROM Products);`,
  },
  {
    id: 'sql-duplicate-pairs',
    category: 'joins-sets',
    question: 'Given a Points table, why does joining it to itself with = create mirror/duplicate pairs, and how do you fix it?',
    answer:
      'A plain self-join on equality returns each pair **twice** (A–B and B–A) plus self-pairs (A–A). Fix both by joining with `a.id < b.id` instead of `=`: the strict `<` removes self-pairs and picks only one ordering of each pair. This "greater-than join" trick appears in pairs/combinations questions.',
    code: `SELECT a.name, b.name
FROM   People a
JOIN   People b ON a.city = b.city
WHERE  a.id < b.id;   -- one row per unordered pair, no self-pairs`,
  },

  // ---------------- Aggregation & Grouping ----------------
  {
    id: 'sql-duplicate-emails',
    category: 'aggregation',
    question: 'Find all duplicate emails in a Person table.',
    answer:
      'Group by the column and keep groups with more than one row using **`HAVING COUNT(*) > 1`**. The key insight: duplicate-finding is a `GROUP BY` + `HAVING` job, not a `WHERE` job — `WHERE` can\'t reference an aggregate.',
    code: `SELECT email
FROM   Person
GROUP  BY email
HAVING COUNT(*) > 1;`,
  },
  {
    id: 'sql-where-vs-having',
    category: 'aggregation',
    question: 'What is the difference between WHERE and HAVING?',
    answer:
      '`WHERE` filters **individual rows before** grouping and can\'t use aggregate functions. `HAVING` filters **groups after** aggregation and can. Logical order: `FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY`. That order also explains why you can\'t reference a `SELECT` alias in `WHERE` but sometimes can in `ORDER BY`.',
    code: `SELECT dept, AVG(salary) AS avg_sal
FROM   Employee
WHERE  active = 1          -- row filter, before grouping
GROUP  BY dept
HAVING AVG(salary) > 50000; -- group filter, after aggregation`,
  },
  {
    id: 'sql-count-null',
    category: 'aggregation',
    question: 'What is the difference between COUNT(*), COUNT(column), and COUNT(DISTINCT column)?',
    answer:
      '`COUNT(*)` counts **all rows**. `COUNT(column)` counts rows where that column is **NOT NULL** — so it can be smaller. `COUNT(DISTINCT column)` counts distinct non-NULL values. Most aggregates (`SUM`, `AVG`, `MAX`) also **ignore NULLs**, which is why `AVG(col)` divides by the count of non-NULLs, not by the row count.',
    code: `SELECT COUNT(*)                AS all_rows,     -- includes NULL bonus
       COUNT(bonus)           AS with_bonus,   -- NULLs excluded
       COUNT(DISTINCT bonus)  AS distinct_bonus
FROM   Employee;`,
  },
  {
    id: 'sql-conditional-pivot',
    category: 'aggregation',
    question: 'Pivot rows into columns: turn a (student, subject, score) table into one row per student with Math and Science columns.',
    answer:
      'Use **conditional aggregation** — `SUM`/`MAX` over a `CASE` that returns the score only for the matching subject and `NULL` otherwise. Grouping by student collapses the rows; each `CASE` picks out one subject into its own column. This is the portable way to pivot without a dialect-specific `PIVOT` clause.',
    code: `SELECT student,
       SUM(CASE WHEN subject = 'Math'    THEN score END) AS math,
       SUM(CASE WHEN subject = 'Science' THEN score END) AS science
FROM   Scores
GROUP  BY student;`,
  },
  {
    id: 'sql-rollup',
    category: 'aggregation',
    question: 'How do you get per-department totals AND a grand total in a single query?',
    answer:
      'Use `GROUP BY ROLLUP(dept)` (or `GROUP BY dept WITH ROLLUP` in MySQL). ROLLUP adds **super-aggregate rows**: a subtotal per group plus a final grand-total row where the grouping column is `NULL`. `GROUPING()` / `COALESCE` can label that total row.',
    code: `SELECT COALESCE(dept, 'ALL') AS dept, SUM(salary) AS total
FROM   Employee
GROUP  BY ROLLUP(dept);`,
  },

  // ---------------- Window Functions ----------------
  {
    id: 'sql-top-per-group',
    category: 'window',
    question: 'Find the highest-paid employee in each department (top-N-per-group).',
    answer:
      'The canonical **window function** solution: `RANK()` (or `ROW_NUMBER()`) partitioned by department, ordered by salary descending, then keep `rnk = 1` in an outer query. Use `RANK()` if ties should all win, `ROW_NUMBER()` if you want exactly one. You can\'t filter a window function in `WHERE` directly — it must be wrapped in a subquery/CTE.',
    code: `SELECT department, name, salary
FROM (
  SELECT d.name AS department, e.name, e.salary,
         RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC) AS rnk
  FROM Employee e JOIN Department d ON e.departmentId = d.id
) t
WHERE rnk = 1;`,
  },
  {
    id: 'sql-running-total',
    category: 'window',
    question: 'Compute a running (cumulative) total of order amounts by date.',
    answer:
      'A windowed `SUM` with an explicit frame: `SUM(amount) OVER (ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)`. The gotcha: with `ORDER BY` and **no explicit frame**, SQL defaults to `RANGE ... CURRENT ROW`, which lumps together all rows with the same date — spelling out `ROWS` gives a true row-by-row running total.',
    code: `SELECT order_date, amount,
       SUM(amount) OVER (
         ORDER BY order_date
         ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
       ) AS running_total
FROM   Orders;`,
  },
  {
    id: 'sql-rank-vs-denserank-rownumber',
    category: 'window',
    question: 'What is the difference between ROW_NUMBER, RANK, and DENSE_RANK?',
    answer:
      'All assign an ordered number, but tie handling differs. For salaries 100, 90, 90, 80: **`ROW_NUMBER`** → 1,2,3,4 (always unique, arbitrary tie-break). **`RANK`** → 1,2,2,4 (ties share a rank, then it *skips*). **`DENSE_RANK`** → 1,2,2,3 (ties share, **no gap**). Choosing the wrong one is a frequent off-by-one bug in "Nth highest" queries.',
    code: `SELECT name, salary,
       ROW_NUMBER() OVER (ORDER BY salary DESC) AS rn,   -- 1,2,3,4
       RANK()       OVER (ORDER BY salary DESC) AS rnk,  -- 1,2,2,4
       DENSE_RANK() OVER (ORDER BY salary DESC) AS drnk  -- 1,2,2,3
FROM   Employee;`,
  },
  {
    id: 'sql-month-over-month',
    category: 'window',
    question: 'Calculate month-over-month revenue change.',
    answer:
      'Use **`LAG()`** to pull the previous row\'s value into the current row. `LAG(revenue) OVER (ORDER BY month)` gives last month\'s revenue; subtract to get the delta. The first month\'s `LAG` is `NULL` (no prior row) — wrap in `COALESCE` if you need 0. `LEAD()` is the mirror image for the *next* row.',
    code: `SELECT month, revenue,
       revenue - LAG(revenue) OVER (ORDER BY month) AS mom_change
FROM   MonthlyRevenue;`,
  },
  {
    id: 'sql-percent-of-total',
    category: 'window',
    question: 'Show each category’s sales as a percentage of the overall total.',
    answer:
      'The elegant trick is a **window aggregate over a grouped aggregate**: `SUM(SUM(amount)) OVER ()` computes the grand total *after* the `GROUP BY`, so you can divide the group total by it in one pass — no self-join or subquery. Multiply by `100.0` (not `100`) to force decimal division.',
    code: `SELECT category,
       SUM(amount) AS total,
       100.0 * SUM(amount) / SUM(SUM(amount)) OVER () AS pct_of_total
FROM   Sales
GROUP  BY category;`,
  },
  {
    id: 'sql-nth-highest',
    category: 'window',
    question: 'Write a query that returns the Nth highest salary (e.g. 3rd), handling ties.',
    answer:
      'Rank with **`DENSE_RANK()`** (so tied salaries count as one distinct level) and select the rank you want. `DENSE_RANK` generalises cleanly to any N, unlike the `MAX(... WHERE salary < ...)` trick which only easily gives the 2nd. If no such salary exists, this returns **no rows** (LeetCode often wants `NULL` — wrap in a subquery with `LIMIT 1` for that).',
    code: `SELECT DISTINCT salary AS nth_highest
FROM (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM Employee
) t
WHERE rnk = 3;   -- change 3 to any N`,
  },

  // ---------------- Subqueries & CTEs ----------------
  {
    id: 'sql-second-highest',
    category: 'subqueries-cte',
    question: 'Find the second highest salary — and why is this deceptively tricky?',
    answer:
      'The subtle part is the **empty case**. `SELECT MAX(salary) WHERE salary < (SELECT MAX(salary) ...)` returns `NULL` when there is no second salary — which is usually the desired answer. The `ORDER BY salary DESC LIMIT 1 OFFSET 1` approach instead returns **no row** (not NULL) in that case, so wrap it in an outer `SELECT (...)` to coerce a `NULL`.',
    code: `-- Returns NULL when there is no 2nd highest (often what's wanted)
SELECT MAX(salary) AS SecondHighestSalary
FROM   Employee
WHERE  salary < (SELECT MAX(salary) FROM Employee);`,
  },
  {
    id: 'sql-correlated-subquery',
    category: 'subqueries-cte',
    question: 'What is a correlated subquery, and how is it different from a regular subquery?',
    answer:
      'A **correlated** subquery references a column from the outer query, so it is **re-evaluated for each outer row** (like a per-row loop) — powerful but potentially slow. A regular (non-correlated) subquery runs **once**, independent of the outer query. Below, the inner query depends on `e.departmentId`, so it recomputes each department\'s max as it scans employees.',
    code: `SELECT e.name, e.salary
FROM   Employee e
WHERE  e.salary = (
         SELECT MAX(salary) FROM Employee
         WHERE departmentId = e.departmentId   -- correlation
       );`,
  },
  {
    id: 'sql-recursive-cte',
    category: 'subqueries-cte',
    question: 'How do you query a hierarchy (e.g. all reports under a manager) without knowing its depth?',
    answer:
      'Use a **recursive CTE**: an anchor member (the starting manager) `UNION ALL` a recursive member that joins the CTE back to the table to walk one level deeper each iteration, until no new rows are found. This is how you traverse org charts, category trees, or bill-of-materials of unknown depth.',
    code: `WITH RECURSIVE Reports AS (
  SELECT id, name, managerId FROM Employee WHERE id = 1   -- anchor
  UNION ALL
  SELECT e.id, e.name, e.managerId
  FROM   Employee e
  JOIN   Reports r ON e.managerId = r.id                  -- recurse
)
SELECT * FROM Reports;`,
  },
  {
    id: 'sql-cte-vs-subquery',
    category: 'subqueries-cte',
    question: 'When would you use a CTE instead of a subquery or derived table?',
    answer:
      'A **CTE** (`WITH`) names an intermediate result so it can be **referenced multiple times** and read top-to-bottom, improving readability over deeply nested subqueries. It also enables **recursion**. Note: a CTE is not automatically materialized/cached in every engine — referencing it twice may re-execute it — so it\'s primarily about clarity, not always performance.',
    code: `WITH dept_avg AS (
  SELECT departmentId, AVG(salary) AS avg_sal
  FROM Employee GROUP BY departmentId
)
SELECT e.name, e.salary, d.avg_sal
FROM   Employee e
JOIN   dept_avg d ON e.departmentId = d.departmentId
WHERE  e.salary > d.avg_sal;`,
  },

  // ---------------- NULL & Gotchas ----------------
  {
    id: 'sql-not-in-null',
    category: 'null-gotchas',
    question: 'Why does NOT IN sometimes return zero rows unexpectedly?',
    answer:
      'If the subquery inside `NOT IN` returns **even one `NULL`**, the whole predicate becomes `UNKNOWN` for every row and you get **no results**. That\'s because `x NOT IN (1, NULL)` expands to `x <> 1 AND x <> NULL`, and `x <> NULL` is never `TRUE`. Fix: use `NOT EXISTS`, or add `WHERE col IS NOT NULL` to the subquery.',
    code: `-- Dangerous if Orders.customer_id can be NULL:
SELECT * FROM Customers
WHERE id NOT IN (SELECT customer_id FROM Orders);

-- Safe:
SELECT * FROM Customers c
WHERE NOT EXISTS (SELECT 1 FROM Orders o WHERE o.customer_id = c.id);`,
  },
  {
    id: 'sql-three-valued-logic',
    category: 'null-gotchas',
    question: 'Why does WHERE salary = NULL return nothing, and how do you test for NULL?',
    answer:
      'SQL uses **three-valued logic** (TRUE / FALSE / UNKNOWN). Any comparison with `NULL` — including `NULL = NULL` — evaluates to **UNKNOWN**, and `WHERE` only keeps rows that are `TRUE`. You must use the special predicates **`IS NULL`** / **`IS NOT NULL`**. Same reason `NULL <> 5` doesn\'t include NULL rows.',
    code: `-- Wrong: returns 0 rows
SELECT * FROM Employee WHERE bonus = NULL;
-- Right:
SELECT * FROM Employee WHERE bonus IS NULL;`,
  },
  {
    id: 'sql-null-aggregate',
    category: 'null-gotchas',
    question: 'A column has values (10, 20, NULL). What does AVG return, and why might it surprise you?',
    answer:
      '`AVG` returns **15**, not 10. Aggregates **skip NULLs**, so `AVG` sums 10+20 = 30 and divides by **2** (the count of non-NULLs), not by 3. If you want NULLs treated as zero, `AVG(COALESCE(col, 0))` divides by 3 → 10. This "average ignores NULL" behaviour is a classic gotcha.',
    code: `SELECT AVG(v)                AS avg_ignoring_nulls, -- 15
       AVG(COALESCE(v, 0))  AS avg_nulls_as_zero    -- 10
FROM   (VALUES (10),(20),(NULL)) AS t(v);`,
  },
  {
    id: 'sql-null-group-by',
    category: 'null-gotchas',
    question: 'How does GROUP BY treat NULL values?',
    answer:
      'Unlike in a `WHERE` comparison, `GROUP BY` treats all `NULL`s as **one single group** (NULLs are considered "not distinct" for grouping). So a `GROUP BY status` over rows with `NULL` status produces one row for the NULL bucket — often needing `COALESCE(status, \'Unknown\')` to label it. `DISTINCT` and `UNION` behave the same way (NULLs collapse together).',
    code: `SELECT COALESCE(status, 'Unknown') AS status, COUNT(*)
FROM   Orders
GROUP  BY status;   -- all NULL statuses fall into one group`,
  },
  {
    id: 'sql-left-join-null-filter',
    category: 'null-gotchas',
    question: 'Why does adding a WHERE condition on the right table silently turn a LEFT JOIN into an INNER JOIN?',
    answer:
      'A `LEFT JOIN` fills unmatched right-side columns with `NULL`. If you then put a condition like `WHERE o.status = \'paid\'` in the `WHERE` clause, the `NULL` rows fail that test and get dropped — effectively an inner join. To keep unmatched rows, move the condition **into the `ON` clause** (`... ON c.id = o.customer_id AND o.status = \'paid\'`).',
    code: `-- Keeps customers with no paid order (NULLs survive):
SELECT c.name, o.amount
FROM   Customers c
LEFT JOIN Orders o
       ON c.id = o.customer_id AND o.status = 'paid';`,
  },

  // ---------------- Classic Puzzles ----------------
  {
    id: 'sql-consecutive-nums',
    category: 'classic-puzzles',
    question: 'Find all numbers that appear at least three times consecutively (by id) in a Logs table.',
    answer:
      'Self-join the table to its next two rows on `id` and require the same `num` across all three. Joining `l1.id = l2.id - 1` and `l2.id = l3.id - 1` lines up three consecutive rows; matching `num` on each finds runs of 3. `DISTINCT` removes repeats from longer runs. (A `LAG`-based version works too if ids aren\'t contiguous.)',
    code: `SELECT DISTINCT l1.num AS ConsecutiveNums
FROM   Logs l1
JOIN   Logs l2 ON l1.id = l2.id - 1 AND l1.num = l2.num
JOIN   Logs l3 ON l2.id = l3.id - 1 AND l2.num = l3.num;`,
  },
  {
    id: 'sql-delete-duplicates',
    category: 'classic-puzzles',
    question: 'Delete duplicate rows, keeping only the one with the smallest id per email.',
    answer:
      'Self-join on the duplicate key and delete rows whose id is **larger** than a matching row (`p1.id > p2.id`), keeping the minimum. Portable alternative: `DELETE FROM Person WHERE id NOT IN (SELECT MIN(id) FROM Person GROUP BY email)` — though some engines need that wrapped in another subquery to delete from the same table.',
    code: `DELETE p1
FROM   Person p1
JOIN   Person p2 ON p1.email = p2.email AND p1.id > p2.id;`,
  },
  {
    id: 'sql-median',
    category: 'classic-puzzles',
    question: 'Compute the median salary without a built-in MEDIAN function.',
    answer:
      'Number the rows with `ROW_NUMBER()` ordered by salary and also capture the total `COUNT(*) OVER ()`. The median is the **average of the middle row(s)**: for an odd count the two expressions land on the same middle row; for an even count they pick the two central rows, and `AVG` averages them. Integer division `(cnt+1)/2` and `(cnt+2)/2` selects the right positions.',
    code: `SELECT AVG(salary) AS median
FROM (
  SELECT salary,
         ROW_NUMBER() OVER (ORDER BY salary) AS rn,
         COUNT(*)     OVER ()                AS cnt
  FROM Employee
) t
WHERE rn IN ((cnt + 1) / 2, (cnt + 2) / 2);`,
  },
  {
    id: 'sql-seat-swap',
    category: 'classic-puzzles',
    question: 'Swap the names of adjacent seat pairs (1↔2, 3↔4, …), leaving a final odd seat unchanged.',
    answer:
      'A single-pass `CASE` with **`LEAD`/`LAG`**: odd-id seats take the *next* seat\'s name (`LEAD`), even-id seats take the *previous* one (`LAG`). The only special case is the **last odd seat**, which has no partner — detect it with `id = (SELECT MAX(id) ...)` and keep its own name. Classic LeetCode "Exchange Seats".',
    code: `SELECT id,
  CASE
    WHEN id % 2 = 1 AND id = (SELECT MAX(id) FROM Seat) THEN name
    WHEN id % 2 = 1 THEN LEAD(name) OVER (ORDER BY id)
    ELSE                LAG(name)  OVER (ORDER BY id)
  END AS name
FROM Seat
ORDER BY id;`,
  },
  {
    id: 'sql-gaps-islands',
    category: 'classic-puzzles',
    question: 'Find each user’s streak of consecutive login days (gaps-and-islands).',
    answer:
      'The **gaps-and-islands** trick: for consecutive dates, `date − ROW_NUMBER()` is **constant** within a streak, because both increase by 1 in step. Group by that constant "anchor" to collapse each run, then take `MIN`/`MAX` date as the streak bounds. A break in the dates shifts the difference and starts a new island.',
    code: `SELECT user_id, MIN(login_date) AS streak_start, MAX(login_date) AS streak_end,
       COUNT(*) AS days
FROM (
  SELECT user_id, login_date,
         login_date - (ROW_NUMBER() OVER (PARTITION BY user_id
                                          ORDER BY login_date)) AS grp
  FROM Logins
) t
GROUP BY user_id, grp;`,
  },
];

export function searchSqlQueryPuzzles(query) {
  const q = query.trim().toLowerCase();
  if (!q) return SQL_QUERY_PUZZLES;
  return SQL_QUERY_PUZZLES.filter(
    (item) =>
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q) ||
      (item.code && item.code.toLowerCase().includes(q)),
  );
}
