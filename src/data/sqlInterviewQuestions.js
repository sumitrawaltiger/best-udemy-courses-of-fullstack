// 100 SQL interview questions — Basic, Intermediate, Advanced, Real-Time
// Scenarios, and Optimization Techniques.
// Source: "SQL Interview Questions" by Vinay Kumar Panika.
// Each question: { id, category, question, answer }

export const SQL_QUESTION_CATEGORIES = [
  { id: 'fundamentals', label: 'Basic Level', icon: '📘' },
  { id: 'intermediate', label: 'Intermediate Level', icon: '🧩' },
  { id: 'advanced', label: 'Advanced Level', icon: '🚀' },
  { id: 'scenarios', label: 'Real-Time Scenarios', icon: '🛠️' },
  { id: 'optimization', label: 'Optimization Techniques', icon: '⚡' },
];

export const SQL_INTERVIEW_QUESTIONS = [
  // ---------------- Basic Level (1-25) ----------------
  {
    id: 'sql-1-what-is-sql',
    category: 'fundamentals',
    question: 'What is SQL?',
    answer:
      'SQL (Structured Query Language) is a standard programming language used to interact with relational databases — to store, retrieve, update, and delete data, and to create and modify database structures such as tables, views, and indexes. Example: `SELECT * FROM Employees;` retrieves all records from the Employees table.',
  },
  {
    id: 'sql-2-what-is-database',
    category: 'fundamentals',
    question: 'What is a Database?',
    answer:
      'A database is an organized collection of data that is stored and managed electronically, allowing users to efficiently store, retrieve, update, and manage data — used to handle large amounts of information in websites, business systems, and applications. Example: a customer database in an e-commerce site stores name, email, contact number, and purchase history.',
  },
  {
    id: 'sql-3-types-of-sql-commands',
    category: 'fundamentals',
    question: 'What are the types of SQL commands?',
    answer:
      'SQL commands fall into five categories: **DDL** (Data Definition Language) — defines the database structure (`CREATE`, `ALTER`, `DROP`, `TRUNCATE`); **DML** (Data Manipulation Language) — manages the data itself (`SELECT`, `INSERT`, `UPDATE`, `DELETE`); **DCL** (Data Control Language) — controls access (`GRANT`, `REVOKE`); **TCL** (Transaction Control Language) — manages transactions (`COMMIT`, `ROLLBACK`, `SAVEPOINT`); and **DQL** (Data Query Language) — retrieves data (`SELECT`).',
  },
  {
    id: 'sql-4-primary-key',
    category: 'fundamentals',
    question: 'What is Primary Key?',
    answer:
      'A **Primary Key** is a column, or combination of columns, that uniquely identifies each row in a table — it cannot have NULL values or duplicates, and only one primary key is allowed per table. Example: `EmployeeID INT PRIMARY KEY` uniquely identifies each employee.',
  },
  {
    id: 'sql-5-foreign-key',
    category: 'fundamentals',
    question: 'What is Foreign Key?',
    answer:
      'A **Foreign Key** is a column or combination of columns in one table that refers to the Primary Key in another table, creating a relationship between the two tables and enforcing referential integrity. It can contain duplicates and NULL values. Example: `DepartmentID` in an Employees table referencing `DepartmentID` in a Departments table via `FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)`.',
  },
  {
    id: 'sql-6-unique-key',
    category: 'fundamentals',
    question: 'What is UNIQUE Key?',
    answer:
      'A **UNIQUE Key** is a constraint ensuring all values in a column (or combination of columns) are distinct across every row — it prevents duplicates but allows one NULL value (in most databases), and multiple UNIQUE keys can exist on one table. Example: `Email VARCHAR(100) UNIQUE` ensures no two employees share the same email.',
  },
  {
    id: 'sql-7-primary-vs-unique',
    category: 'fundamentals',
    question: 'What is the difference between Primary Key and UNIQUE Key?',
    answer:
      'A **Primary Key** does not allow NULL values, only one is permitted per table, and it automatically creates a unique clustered index. A **UNIQUE Key** allows one NULL value (in most databases), multiple UNIQUE keys can be defined per table, and it creates a unique non-clustered index. Both enforce uniqueness, but Primary Key is meant to uniquely identify a record while UNIQUE Key just enforces uniqueness on a column.',
  },
  {
    id: 'sql-8-not-null',
    category: 'fundamentals',
    question: 'What is NOT NULL constraint?',
    answer:
      'The **NOT NULL** constraint ensures a column cannot have NULL values, forcing every row to have a value in that column — used to guarantee mandatory fields have data. Example: `Name VARCHAR(50) NOT NULL` means every employee row must have a name, while a plain `Email VARCHAR(100)` column can still accept NULL.',
  },
  {
    id: 'sql-9-default-constraint',
    category: 'fundamentals',
    question: 'What is Default Constraint?',
    answer:
      'The **Default Constraint** automatically assigns a specified value to a column when no value is provided during an INSERT, helping avoid NULLs in specific columns. Example: `Salary DECIMAL(10,2) DEFAULT 5000` means any new row inserted without a salary automatically gets 5000.',
  },
  {
    id: 'sql-10-delete-truncate-drop',
    category: 'fundamentals',
    question: 'What is the difference between DELETE, TRUNCATE, and DROP?',
    answer:
      '**DELETE** removes specific rows based on a `WHERE` condition, can be rolled back (with COMMIT/ROLLBACK), does not affect table structure, and is slow (row-by-row). **TRUNCATE** removes all rows without a condition, cannot be rolled back, does not affect structure, and is faster than DELETE. **DROP** deletes the entire table including its structure, cannot be rolled back, and is the fastest of the three.',
  },
  {
    id: 'sql-11-where-vs-having',
    category: 'fundamentals',
    question: 'What is the difference between WHERE and HAVING?',
    answer:
      '**WHERE** filters individual rows before grouping — it works with `SELECT`, `UPDATE`, and `DELETE`, and is applied before `GROUP BY`. **HAVING** filters groups after grouping — it\'s used with `SELECT ... GROUP BY` and is applied after `GROUP BY`, typically to filter on an aggregate like `HAVING AVG(Salary) > 5000`.',
  },
  {
    id: 'sql-12-joins-in-sql',
    category: 'fundamentals',
    question: 'What are Joins in SQL?',
    answer:
      'Joins combine data from two or more tables based on a related column between them. The six types are: **INNER JOIN** (only matching rows from both tables), **LEFT JOIN** (all rows from the left table plus matches from the right), **RIGHT JOIN** (all rows from the right table plus matches from the left), **FULL JOIN** (all rows from both tables), **SELF JOIN** (a table joined with itself), and **CROSS JOIN** (the Cartesian product of both tables).',
  },
  {
    id: 'sql-13-inner-join',
    category: 'fundamentals',
    question: 'What is INNER JOIN?',
    answer:
      '**INNER JOIN** combines rows from two or more tables based on a matching condition, returning only the records where the condition is true in both tables — it\'s the most commonly used join type and ignores unmatched rows. Example: `SELECT Employees.Name, Departments.DepartmentName FROM Employees INNER JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;` returns only employees that have a matching department.',
  },
  {
    id: 'sql-14-left-join',
    category: 'fundamentals',
    question: 'What is LEFT JOIN?',
    answer:
      '**LEFT JOIN** returns all records from the left table and the matching records from the right table — if there\'s no match, the result contains NULL for the right table\'s columns. Example: a LEFT JOIN from Employees to Departments returns every employee, showing NULL for DepartmentName when an employee has no assigned department.',
  },
  {
    id: 'sql-15-right-join',
    category: 'fundamentals',
    question: 'What is RIGHT JOIN?',
    answer:
      '**RIGHT JOIN** returns all records from the right table and the matching records from the left table — if there\'s no match, the result contains NULL for the left table\'s columns. Example: a RIGHT JOIN from Employees to Departments returns every department, showing NULL for Employee Name when no employee is assigned to that department.',
  },
  {
    id: 'sql-16-full-join',
    category: 'fundamentals',
    question: 'What is FULL JOIN?',
    answer:
      '**FULL JOIN** combines the results of both LEFT JOIN and RIGHT JOIN, returning all records from both tables with matching rows joined where available, and NULLs on whichever side has no match — useful for finding unmatched records in either table.',
  },
  {
    id: 'sql-17-self-join',
    category: 'fundamentals',
    question: 'What is Self Join?',
    answer:
      '**Self Join** is a join where a table is joined with itself, typically used to compare rows within the same table or to model a hierarchical relationship. It requires table aliases (e.g. `E1`, `E2`) to differentiate the two instances. Example: `SELECT E1.EmployeeName AS Employee, E2.EmployeeName AS Manager FROM Employees E1 JOIN Employees E2 ON E1.ManagerID = E2.EmployeeID;` shows each employee alongside their manager\'s name.',
  },
  {
    id: 'sql-18-cross-join',
    category: 'fundamentals',
    question: 'What is Cross Join?',
    answer:
      '**CROSS JOIN** returns the Cartesian product of two tables — every row from the first table combined with every row from the second table — with no join condition required. The result set size equals (rows in Table 1) × (rows in Table 2), so it can produce very large results on big tables.',
  },
  {
    id: 'sql-19-union-and-union-all',
    category: 'fundamentals',
    question: 'What is Union and Union All?',
    answer:
      '`UNION` and `UNION ALL` combine the result sets of two or more `SELECT` statements. `UNION` removes duplicate rows and automatically sorts the result, making it slower; `UNION ALL` includes all duplicate rows and does not sort, making it faster. Both require the combined `SELECT` statements to have the same number of columns and compatible data types.',
  },
  {
    id: 'sql-20-union-vs-union-all',
    category: 'fundamentals',
    question: 'What is the difference between UNION and UNION ALL?',
    answer:
      '`UNION` removes duplicate rows, is slower due to duplicate removal, and automatically sorts the result set — used when duplicate data is not wanted. `UNION ALL` includes all duplicate rows, is faster since no duplicate removal happens, and does not sort the result — used when duplicate data needs to be preserved.',
  },
  {
    id: 'sql-21-normalization',
    category: 'fundamentals',
    question: 'What is Normalization?',
    answer:
      '**Normalization** is the process of organizing data to reduce redundancy and improve data integrity, by dividing large tables into smaller related tables and defining relationships between them. The main forms are **1NF** (eliminates duplicate columns, atomic values), **2NF** (no partial dependency on the primary key), **3NF** (removes transitive dependencies), and **BCNF** (every determinant is a candidate key) — it reduces redundancy, improves consistency, and simplifies maintenance.',
  },
  {
    id: 'sql-22-denormalization',
    category: 'fundamentals',
    question: 'What is Denormalization?',
    answer:
      '**Denormalization** is the process of combining tables or adding redundant data into a database to improve read performance, at the cost of data redundancy — the opposite of normalization, used when fast data retrieval matters more than strict data integrity. It\'s commonly used in data warehouses and reporting systems, since it reduces the number of joins required.',
  },
  {
    id: 'sql-23-char-vs-varchar',
    category: 'fundamentals',
    question: 'What is the difference between CHAR and VARCHAR?',
    answer:
      '`CHAR` is a **fixed-length** type that always uses the specified length of storage (padding with extra spaces) regardless of the actual data — faster for consistent-length data like PIN codes. `VARCHAR` (Variable Character) is **variable-length**, using only the space required for the actual data plus one or two bytes for length — better for data that varies in length, like names or addresses, though slightly slower.',
  },
  {
    id: 'sql-24-sql-vs-mysql',
    category: 'fundamentals',
    question: 'What is the difference between SQL and MySQL?',
    answer:
      '**SQL** (Structured Query Language) is a standard language used to write queries and communicate with databases, developed by ANSI and universal across many databases (MySQL, Oracle, SQL Server). **MySQL** is a Relational Database Management System (RDBMS) developed by Oracle Corporation that uses SQL to store, manage, and retrieve data — SQL is the language, MySQL is the software that implements it.',
  },
  {
    id: 'sql-25-auto-increment',
    category: 'fundamentals',
    question: 'What is Auto Increment in SQL?',
    answer:
      '**Auto Increment** automatically generates a unique, sequential number whenever a new row is inserted, typically used for primary key columns — it starts from a defined value (default 1) and increments by 1 for each new row, without needing manual input. Example: `EmployeeID INT AUTO_INCREMENT PRIMARY KEY` assigns 1, 2, 3... automatically as rows are inserted.',
  },

  // ---------------- Intermediate Level (26-50) ----------------
  {
    id: 'sql-26-subquery',
    category: 'intermediate',
    question: 'What is Subquery?',
    answer:
      'A **Subquery** is a query nested inside another query, used to fetch data that the main (outer) query uses as a condition to filter or manipulate results — also called an Inner Query or Nested Query, it always executes before the main query. The three types are **Single Row** (returns one value, e.g. finding the max salary), **Multiple Row** (returns several rows, e.g. `department_id IN (...)`), and **Correlated** (references the outer query\'s row on every execution, e.g. comparing a salary to its own department\'s average).',
  },
  {
    id: 'sql-27-nested-query',
    category: 'intermediate',
    question: 'What is Nested Query?',
    answer:
      'A **Nested Query** is a query written inside another query to retrieve data based on the result of the inner query — also known as an Inner Query or Subquery, it helps break down complex queries into smaller, manageable parts. The inner query executes first and its result is passed to the outer query; it can be used with `WHERE`, `HAVING`, and `FROM` clauses.',
  },
  {
    id: 'sql-28-correlated-subquery',
    category: 'intermediate',
    question: 'What is Correlated Subquery?',
    answer:
      'A **Correlated Subquery** is a subquery that depends on values from the outer query to execute — it runs repeatedly, once for each row processed by the outer query, making it slower than a regular subquery since it cannot execute independently. Example: `SELECT e.name, e.salary FROM employees e WHERE e.salary > (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id);` finds employees earning above their own department\'s average.',
  },
  {
    id: 'sql-29-group-by',
    category: 'intermediate',
    question: 'What is GROUP BY in SQL?',
    answer:
      'The **GROUP BY** clause groups rows that share the same values into summary rows, typically used with aggregate functions like `COUNT()`, `SUM()`, `AVG()`, `MAX()`, and `MIN()` to calculate a result per group. It\'s applied after `WHERE` and before `ORDER BY`. Example: `SELECT category, SUM(sales_amount) AS Total_Sales FROM sales GROUP BY category;` returns total sales per product category.',
  },
  {
    id: 'sql-30-group-by-vs-order-by',
    category: 'intermediate',
    question: 'What is the difference between GROUP BY and ORDER BY?',
    answer:
      '**GROUP BY** groups rows based on matching values in one or more columns and always works with aggregate functions like `COUNT()`/`SUM()`/`AVG()`, and it comes before `ORDER BY` in the query. **ORDER BY** sorts the entire result set in ascending or descending order, doesn\'t require aggregate functions, and always comes after `GROUP BY`. In short: GROUP BY summarizes data into groups; ORDER BY sorts the final result.',
  },
  {
    id: 'sql-31-limit',
    category: 'intermediate',
    question: 'What is the use of LIMIT in SQL?',
    answer:
      '`LIMIT` restricts the number of rows a query returns — commonly used to fetch Top-N records or implement pagination. Example: `SELECT name, salary FROM employees ORDER BY salary DESC LIMIT 3;` fetches the 3 highest-paid employees.',
  },
  {
    id: 'sql-32-second-highest-salary',
    category: 'intermediate',
    question: 'How to find the Second Highest Salary in SQL?',
    answer:
      'Using a subquery: `SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);` — the inner query gets the highest salary, and the outer query finds the highest salary that\'s still below that top value, giving the second-highest.',
  },
  {
    id: 'sql-33-duplicate-records',
    category: 'intermediate',
    question: 'How to find Duplicate Records in a table?',
    answer:
      'Use `GROUP BY` with `HAVING`: `SELECT column_name, COUNT(*) FROM table_name GROUP BY column_name HAVING COUNT(*) > 1;` — `GROUP BY` groups identical values together, and `HAVING COUNT(*) > 1` filters to only those groups that appear more than once (the duplicates).',
  },
  {
    id: 'sql-34-cte',
    category: 'intermediate',
    question: 'What is CTE (Common Table Expression)?',
    answer:
      'A **CTE (Common Table Expression)** is a temporary named result set defined within the execution of a single SQL statement using `WITH cte_name AS (...)`, then referenced like a table in the query that follows. Example: `WITH IT_Employees AS (SELECT name, department, salary FROM employees WHERE department = \'IT\') SELECT name, salary FROM IT_Employees WHERE salary > 50000;` first filters IT employees, then filters by salary.',
  },
  {
    id: 'sql-35-temporary-table',
    category: 'intermediate',
    question: 'What is Temporary Table in SQL?',
    answer:
      'A **Temporary Table** stores intermediate data during a session and is automatically deleted once that session ends — created with `CREATE TEMPORARY TABLE` in MySQL, or prefixed with `#` in SQL Server. Unlike a CTE, it can be reused multiple times within the same session and supports indexing and DDL operations, though it\'s slower for small datasets.',
  },
  {
    id: 'sql-36-window-function',
    category: 'intermediate',
    question: 'What is Window Function in SQL?',
    answer:
      'A **Window Function** performs a calculation across a set of rows related to the current row, using the `OVER()` clause — unlike aggregate functions, it does not collapse the result into a single row, making it ideal for ranking, running totals, and moving averages. Common window functions include `ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `NTILE(n)`, `SUM()`, `AVG()`, `MAX()`/`MIN()`, `LEAD()`, and `LAG()`, all used with `OVER (PARTITION BY column ORDER BY column)`.',
  },
  {
    id: 'sql-37-row-number-rank-dense-rank',
    category: 'intermediate',
    question: 'What is the difference between ROW_NUMBER(), RANK(), and DENSE_RANK()?',
    answer:
      '`ROW_NUMBER()` assigns a unique sequential number to every row (1, 2, 3, 4 — no duplicates, no skips). `RANK()` assigns the same rank to duplicate values but **skips** the next rank(s) (1, 2, 2, 4). `DENSE_RANK()` also assigns the same rank to duplicates but does **not** skip ranks afterward (1, 2, 2, 3).',
  },
  {
    id: 'sql-38-case-statement',
    category: 'intermediate',
    question: 'What is CASE Statement in SQL?',
    answer:
      'The **CASE** statement applies conditional logic in a query, similar to IF-ELSE, evaluating conditions in order and returning the result of the first match (or the `ELSE` value if none match). Example: `SELECT name, salary, CASE WHEN salary > 6000 THEN \'High Salary\' WHEN salary BETWEEN 4000 AND 6000 THEN \'Medium Salary\' ELSE \'Low Salary\' END AS Salary_Category FROM employees;` labels each employee\'s salary tier.',
  },
  {
    id: 'sql-39-coalesce',
    category: 'intermediate',
    question: 'What is COALESCE in SQL?',
    answer:
      '`COALESCE(expr1, expr2, ..., exprN)` returns the **first non-null value** from a list of expressions — commonly used to handle NULLs by providing a fallback. Example: `SELECT name, COALESCE(email, phone, \'No Contact\') AS Contact_Info FROM students;` shows email if present, otherwise phone, otherwise "No Contact".',
  },
  {
    id: 'sql-40-nvl-function',
    category: 'intermediate',
    question: 'What is NVL Function in SQL?',
    answer:
      '`NVL(expr1, expr2)` replaces a NULL value with a specified fallback value — functionally similar to `COALESCE` but limited to exactly two arguments (mainly used in Oracle). Example: `SELECT name, NVL(email, \'No Email\') AS Email FROM students;` shows "No Email" whenever the email column is NULL.',
  },
  {
    id: 'sql-41-indexing',
    category: 'intermediate',
    question: 'What is Indexing in SQL?',
    answer:
      '**Indexing** improves the speed of data retrieval by creating a lookup structure on one or more columns, similar to a book\'s index — it speeds up `SELECT` queries and is automatically maintained by the database, but it slows down `INSERT`/`UPDATE`/`DELETE` operations since the index must be updated too. Example: `CREATE INDEX idx_name ON students(name);`',
  },
  {
    id: 'sql-42-clustered-index',
    category: 'intermediate',
    question: 'What is Clustered Index?',
    answer:
      'A **Clustered Index** physically sorts and stores the data in a table based on the indexed column\'s values — only one clustered index is allowed per table (since data can only be physically ordered one way), and it\'s automatically created on the Primary Key by default, giving faster data retrieval.',
  },
  {
    id: 'sql-43-non-clustered-index',
    category: 'intermediate',
    question: 'What is Non-Clustered Index?',
    answer:
      'A **Non-Clustered Index** creates a separate structure from the table data, storing pointers to the actual rows rather than physically reordering them — multiple non-clustered indexes can exist on a single table, and it improves search performance without affecting the physical order of data.',
  },
  {
    id: 'sql-44-clustered-vs-non-clustered',
    category: 'intermediate',
    question: 'What is the difference between Clustered and Non-Clustered Index?',
    answer:
      'A **Clustered Index** stores data physically sorted, allows only one per table, is faster for retrieval, is automatically created on the Primary Key, and rearranges the table\'s physical row order. A **Non-Clustered Index** stores pointers to the data (not the data itself), allows multiple per table, is slower than a clustered index, is manually created on any column, and does not affect physical row order.',
  },
  {
    id: 'sql-45-view',
    category: 'intermediate',
    question: 'What is View in SQL?',
    answer:
      'A **View** is a virtual table based on the result of a SQL query — it does not store data physically, simplifies complex queries, provides data security by restricting access to certain columns, and can be queried like a regular table. Example: `CREATE VIEW high_salary AS SELECT name, salary FROM employees WHERE salary > 50000;`',
  },
  {
    id: 'sql-46-view-vs-table',
    category: 'intermediate',
    question: 'What is the difference between View and Table?',
    answer:
      'A **View** is a virtual table that does not store data physically, is based on a SQL query, provides data security by restricting access to specific columns, and automatically reflects changes when the underlying base table\'s data changes. A **Table** is a physical table that stores raw data directly, has no restriction unless explicitly applied, and needs manual updates.',
  },
  {
    id: 'sql-47-stored-procedure',
    category: 'intermediate',
    question: 'What is Stored Procedure?',
    answer:
      'A **Stored Procedure** is a group of predefined SQL statements stored in the database that can be executed multiple times — it improves code reusability, increases performance, supports input/output parameters, and provides security by hiding the underlying SQL code from callers. Example: `CREATE PROCEDURE GetEmployees AS BEGIN SELECT * FROM employees; END;`',
  },
  {
    id: 'sql-48-function-vs-stored-procedure',
    category: 'intermediate',
    question: 'What is the difference between Function and Stored Procedure?',
    answer:
      'A **Function** returns a single value or table, can be used directly inside `SELECT` statements, only allows input parameters, and cannot modify database state. A **Stored Procedure** may or may not return a value, cannot be used inside `SELECT` statements, allows both input and output parameters, and can modify database state (`INSERT`/`UPDATE`/`DELETE`).',
  },
  {
    id: 'sql-49-trigger',
    category: 'intermediate',
    question: 'What is Trigger in SQL?',
    answer:
      'A **Trigger** is an automatic action executed when a specified event (`INSERT`, `UPDATE`, or `DELETE`) occurs on a table — commonly used for data validation and logging, and it cannot be called manually. Example: `CREATE TRIGGER after_insert AFTER INSERT ON employees FOR EACH ROW BEGIN INSERT INTO logs(message) VALUES(\'New employee added\'); END;`',
  },
  {
    id: 'sql-50-cursor',
    category: 'intermediate',
    question: 'What is Cursor in SQL?',
    answer:
      'A **Cursor** is a database object used to retrieve, manipulate, and navigate row-by-row through a result set — declared with `DECLARE cursor_name CURSOR FOR SELECT ...`, then opened, fetched in a loop, and closed/deallocated. It\'s slower than set-based operations and not recommended for large datasets, but useful for complex row-by-row data manipulation.',
  },

  // ---------------- Advanced Level (51-75) ----------------
  {
    id: 'sql-51-acid-property',
    category: 'advanced',
    question: 'What is the ACID Property in SQL?',
    answer:
      '**ACID** defines the key principles ensuring database transactions process reliably: **Atomicity** — the transaction is all-or-nothing (if one part fails, the whole transaction fails and the database stays unchanged); **Consistency** — the database remains valid before and after the transaction; **Isolation** — transactions execute independently without interfering with each other; **Durability** — once committed, changes are permanent even if the system crashes.',
  },
  {
    id: 'sql-52-transaction',
    category: 'advanced',
    question: 'What is a Transaction in SQL?',
    answer:
      'A **Transaction** is a group of SQL operations executed as a single unit to perform a specific task, following ACID properties to maintain data integrity. The key commands are `BEGIN TRANSACTION` (starts a new transaction), `COMMIT` (saves changes permanently), `ROLLBACK` (undoes changes if an error occurs), and `SAVEPOINT` (sets a point to roll back to partially).',
  },
  {
    id: 'sql-53-commit-vs-rollback',
    category: 'advanced',
    question: 'What is the difference between COMMIT and ROLLBACK?',
    answer:
      '`COMMIT` permanently saves the changes made by a transaction into the database — once executed, the changes cannot be undone, and it\'s used when all operations succeed. `ROLLBACK` undoes all changes made by the transaction, restoring the database to its previous state — used when any error occurs during the transaction.',
  },
  {
    id: 'sql-54-savepoint',
    category: 'advanced',
    question: 'What is Savepoint in SQL?',
    answer:
      'A **Savepoint** temporarily saves a transaction at a specific point, allowing you to roll back only part of the transaction without affecting the rest — it allows setting multiple points in one transaction, helps with partial rollback, and improves error handling. Example: `SAVEPOINT SP1;` followed later by `ROLLBACK TO SP1;` undoes only the changes made after that savepoint, while earlier changes and a final `COMMIT` still apply.',
  },
  {
    id: 'sql-55-in-vs-exists',
    category: 'advanced',
    question: 'What is the difference between IN and EXISTS?',
    answer:
      '`IN` compares a value from the main query against a list of static values or a subquery\'s results, and works with either — but it\'s slower with large datasets and returns all matching rows. `EXISTS` only checks whether a subquery returns any rows at all (true/false), works only with subqueries, and is faster for large datasets since it stops checking as soon as it finds the first match.',
  },
  {
    id: 'sql-56-delete-vs-truncate-2',
    category: 'advanced',
    question: 'What is the difference between DELETE and TRUNCATE?',
    answer:
      '`DELETE` removes specific rows based on a `WHERE` condition, can be rolled back if inside a transaction, is slower since it logs each row deletion, and keeps the table structure and identity column values intact. `TRUNCATE` removes all rows without any condition, cannot be rolled back once executed, is faster since it doesn\'t log individual row deletions, and resets identity column values to their initial seed.',
  },
  {
    id: 'sql-57-index-fragmentation',
    category: 'advanced',
    question: 'What is Index Fragmentation?',
    answer:
      '**Index Fragmentation** occurs when the logical order of index pages doesn\'t match the physical order of data on disk, slowing down data retrieval. It comes in two forms — **Internal Fragmentation** (unused space inside index pages from deletions/updates) and **External Fragmentation** (index pages stored non-sequentially, causing slower access). Check it in MySQL with `SHOW INDEX FROM table;` and fix it with `OPTIMIZE TABLE table;`.',
  },
  {
    id: 'sql-58-rank-vs-dense-rank',
    category: 'advanced',
    question: 'What is the difference between RANK() and DENSE_RANK()?',
    answer:
      '`RANK()` assigns a unique rank to each row but **skips** the next rank number whenever there are duplicate values (creating gaps in the sequence), making it slower in performance. `DENSE_RANK()` assigns a rank without skipping numbers for duplicates (no gaps in the sequence), and is faster since it doesn\'t need to account for skipped values.',
  },
  {
    id: 'sql-59-fetch-common-records',
    category: 'advanced',
    question: 'How to fetch common records from two tables?',
    answer:
      'Use an `INNER JOIN`: `SELECT table1.column, table2.column FROM table1 INNER JOIN table2 ON table1.common_column = table2.common_column;` — this returns only the rows where the join condition matches in both tables, i.e. the records common to both.',
  },
  {
    id: 'sql-60-union-vs-join',
    category: 'advanced',
    question: 'What is the difference between UNION and JOIN?',
    answer:
      '`UNION` combines result sets **vertically** (stacking rows) from two or more tables/queries, requires the same number of columns and compatible data types across them, removes duplicates by default (or keeps them with `UNION ALL`), and is used when tables have similar data. `JOIN` combines result sets **horizontally** (columns) based on a common column, allows tables to have different numbers of columns, does not remove duplicates, and is used when tables are related through a common column.',
  },
  {
    id: 'sql-61-pivot-table',
    category: 'advanced',
    question: 'What is Pivot Table in SQL?',
    answer:
      'A **Pivot Table** transforms row data into column data to produce a summary report, commonly using aggregate functions like `SUM()`, `AVG()`, `COUNT()` combined with `CASE` statements. Example: `SELECT Product, SUM(CASE WHEN Month = \'Jan\' THEN Sales ELSE 0 END) AS Jan_Sales, SUM(CASE WHEN Month = \'Feb\' THEN Sales ELSE 0 END) AS Feb_Sales FROM Sales GROUP BY Product;` summarizes sales per product per month as columns.',
  },
  {
    id: 'sql-62-case-sensitivity',
    category: 'advanced',
    question: 'What is Case Sensitivity in SQL?',
    answer:
      'Case Sensitivity refers to whether the database treats uppercase and lowercase letters as different or the same during queries. Column and table names are usually not case-sensitive (depends on the database/OS), and by default MySQL is **case-insensitive** for string value comparisons — so `WHERE Name = \'vinay\'` matches both "Vinay" and "VINAY". To force case-sensitive matching, use `WHERE BINARY Name = \'vinay\'`.',
  },
  {
    id: 'sql-63-nth-highest-salary',
    category: 'advanced',
    question: 'How to find the Nth Highest Salary?',
    answer:
      'Using `LIMIT` with `OFFSET` (MySQL): `SELECT DISTINCT Salary FROM Employees ORDER BY Salary DESC LIMIT 1 OFFSET N-1;` — for example, the 3rd highest salary is `LIMIT 1 OFFSET 2` (`ORDER BY Salary DESC` sorts descending, `OFFSET 2` skips the top 2, `LIMIT 1` takes the next one). Alternatively, use a subquery: `SELECT Name, Salary FROM Employees WHERE Salary = (SELECT DISTINCT Salary FROM Employees ORDER BY Salary DESC LIMIT 1 OFFSET 2);` — always use `DISTINCT` to avoid counting duplicate salaries twice.',
  },
  {
    id: 'sql-64-first-3-max-salaries',
    category: 'advanced',
    question: 'How to get First 3 Maximum Salaries?',
    answer:
      'Use `DISTINCT`, `ORDER BY`, and `LIMIT` together: `SELECT DISTINCT Salary FROM Employees ORDER BY Salary DESC LIMIT 3;` — `DISTINCT` removes duplicate salaries, `ORDER BY Salary DESC` sorts highest first, and `LIMIT 3` fetches only the top 3.',
  },
  {
    id: 'sql-65-drop-delete-truncate',
    category: 'advanced',
    question: 'What is the difference between Drop, Delete, and Truncate?',
    answer:
      '`DROP` deletes the entire table including its structure, cannot be rolled back, and is the fastest. `DELETE` removes specific rows based on a condition, can be rolled back if inside a transaction, and is slow since it\'s row-based. `TRUNCATE` removes all rows from the table (keeping the structure), cannot be rolled back, and is fast since it doesn\'t use a condition or log individual rows.',
  },
  {
    id: 'sql-66-calculate-age',
    category: 'advanced',
    question: 'How to calculate Age from Date of Birth in SQL?',
    answer:
      'Using `DATEDIFF()` (MySQL): `SELECT Name, FLOOR(DATEDIFF(CURDATE(), DOB) / 365) AS Age FROM Employees;` — `CURDATE()` returns today\'s date, `DATEDIFF()` calculates the difference in days, and `FLOOR()` converts it to whole years. Alternatively, using `YEAR()`: `SELECT Name, YEAR(CURDATE()) - YEAR(DOB) AS Age FROM Employees;` calculates the difference between the current year and birth year (simpler, but less precise around birthdays).',
  },
  {
    id: 'sql-67-recursive-query',
    category: 'advanced',
    question: 'What is Recursive Query in SQL?',
    answer:
      'A **Recursive Query** refers to itself to perform repetitive operations until a condition is met — commonly used to process hierarchical data like employee-manager relationships or organizational structures, and implemented using a recursive CTE. Example: `WITH EmployeeCTE AS (SELECT EmpID, Name, ManagerID FROM Employees WHERE ManagerID IS NULL UNION ALL SELECT E.EmpID, E.Name, E.ManagerID FROM Employees E JOIN EmployeeCTE C ON E.ManagerID = C.EmpID) SELECT * FROM EmployeeCTE;` walks the manager hierarchy starting from the top-level employee.',
  },
  {
    id: 'sql-68-temp-table-vs-cte',
    category: 'advanced',
    question: 'What is the difference between Temporary Table and CTE?',
    answer:
      'A **Temporary Table** stores data physically in temporary memory, needs to be explicitly created and dropped, can be reused multiple times within a session, and supports indexing and DDL operations (slower for small datasets). A **CTE** stores data logically without physical storage, automatically disappears after the query executes, can only be used once in the same query, and does not support indexing or DDL operations (faster for small datasets).',
  },
  {
    id: 'sql-69-odd-even-records',
    category: 'advanced',
    question: 'How to find Odd and Even records in SQL?',
    answer:
      'Using `MOD()` (MySQL): `SELECT * FROM Employees WHERE MOD(EmpID, 2) = 0;` for even records, and `MOD(EmpID, 2) = 1` for odd — `MOD(EmpID, 2)` returns the remainder when EmpID is divided by 2 (0 = even, 1 = odd). Alternatively, use `ROW_NUMBER()` (SQL Server/PostgreSQL) inside a CTE and filter `WHERE RowNum % 2 = 0` or `= 1`.',
  },
  {
    id: 'sql-70-json-in-sql',
    category: 'advanced',
    question: 'What is JSON in SQL?',
    answer:
      '**JSON** (JavaScript Object Notation) in SQL is used to store, retrieve, and manipulate semi-structured, key-value data within relational databases — lightweight, easy to read, and supported in MySQL, SQL Server, and PostgreSQL. Example: a `Details JSON` column can store `{"City": "Bangalore", "Age": 25}`, and be queried with `SELECT Name, Details->>\'$.City\' AS City FROM Employees;` (MySQL), avoiding the need for a separate NoSQL database.',
  },
  {
    id: 'sql-71-xml-in-sql',
    category: 'advanced',
    question: 'What is XML in SQL?',
    answer:
      '**XML** (Extensible Markup Language) in SQL is used to store, retrieve, and manipulate structured, hierarchical data in a text-based, tag-based format within relational databases — commonly used to exchange data between applications, and supported in SQL Server, MySQL, and Oracle. Example: a `TEXT` column can store `<Employee><City>Bangalore</City><Age>25</Age></Employee>`.',
  },
  {
    id: 'sql-72-handle-null-values',
    category: 'advanced',
    question: 'How to handle NULL values in SQL?',
    answer:
      'NULL represents missing or unknown data. Handle it with: `IS NULL` (checks if a column contains NULL), `IS NOT NULL` (checks if it doesn\'t), `COALESCE()` (returns the first non-null value from a list), `IFNULL()` (MySQL-specific, replaces NULL with a given value), and `NULLIF(expr1, expr2)` (returns NULL if the two expressions are equal). `COALESCE()`/`IFNULL()` are the most common way to substitute a default value and keep query results consistent.',
  },
  {
    id: 'sql-73-dynamic-sql',
    category: 'advanced',
    question: 'What is Dynamic SQL?',
    answer:
      '**Dynamic SQL** constructs and executes SQL statements at runtime instead of writing static, fixed queries — it allows flexible query creation based on user input or conditions, and is used for complex queries with varying conditions, parameterized queries, and stored procedures. Example (MySQL): `SET @query = \'SELECT * FROM Employees WHERE Department = "IT"\'; PREPARE stmt FROM @query; EXECUTE stmt; DEALLOCATE PREPARE stmt;` — it must always be built with parameterized queries to prevent SQL injection.',
  },
  {
    id: 'sql-74-calculate-percentage',
    category: 'advanced',
    question: 'How to calculate Percentage in SQL?',
    answer:
      'Use arithmetic expressions with aggregate functions: `SELECT (PartValue * 100.0) / TotalValue AS Percentage FROM TableName;` — for example, `SELECT Department, (Employees * 100.0) / (SELECT SUM(Employees) FROM Employee) AS Percentage FROM Employee;` calculates what percentage of the total workforce each department represents (multiplying by `100.0`, not `100`, keeps the division from truncating to an integer).',
  },
  {
    id: 'sql-75-employees-earn-more-than-manager',
    category: 'advanced',
    question: 'How to find the Employees who earn more than their Manager?',
    answer:
      'Use a **Self Join** comparing each employee\'s salary to their manager\'s salary: `SELECT E1.Name AS Employee, E1.Salary AS EmployeeSalary, E2.Name AS Manager, E2.Salary AS ManagerSalary FROM Employees E1 JOIN Employees E2 ON E1.ManagerID = E2.EmpID WHERE E1.Salary > E2.Salary;` — joining the Employees table to itself via `ManagerID = EmpID`, then filtering where the employee\'s salary exceeds their manager\'s.',
  },

  // ---------------- Real-Time Scenarios (76-90) ----------------
  {
    id: 'sql-76-duplicate-emails',
    category: 'scenarios',
    question: 'How to find Duplicate Emails in the Employee Table?',
    answer:
      'Use `GROUP BY` with `HAVING`: `SELECT Email, COUNT(Email) AS DuplicateCount FROM Employees GROUP BY Email HAVING COUNT(Email) > 1;` — `GROUP BY Email` groups records by email, `COUNT(Email)` counts occurrences per email, and `HAVING COUNT(Email) > 1` filters to only the emails appearing more than once.',
  },
  {
    id: 'sql-77-highest-salary-per-department',
    category: 'scenarios',
    question: 'How to get the Highest Salary in each Department?',
    answer:
      'Use `GROUP BY` with `MAX()`: `SELECT Department, MAX(Salary) AS HighestSalary FROM Employees GROUP BY Department;` — this groups employees by department and returns the maximum salary within each group.',
  },
  {
    id: 'sql-78-employees-joined-last-3-months',
    category: 'scenarios',
    question: 'How to find Employees joined in the last 3 months?',
    answer:
      'Using `DATEDIFF()` (MySQL): `SELECT Name, JoiningDate FROM Employees WHERE DATEDIFF(CURDATE(), JoiningDate) <= 90;`. Alternatively, using `DATE_ADD()`: `SELECT Name, JoiningDate FROM Employees WHERE JoiningDate >= DATE_ADD(CURDATE(), INTERVAL -3 MONTH);` — both compare each employee\'s joining date against a 3-month-ago cutoff from today.',
  },
  {
    id: 'sql-79-first-5-records',
    category: 'scenarios',
    question: 'How to Display the First 5 Records in SQL?',
    answer:
      'Using `LIMIT` (MySQL): `SELECT * FROM Employees LIMIT 5;`. Using `TOP` (SQL Server): `SELECT TOP 5 * FROM Employees;` — both restrict the result set to just the first 5 rows returned by the query.',
  },
  {
    id: 'sql-80-employee-count-per-department',
    category: 'scenarios',
    question: 'How to find the Number of Employees in each Department?',
    answer:
      'Use `COUNT()` with `GROUP BY`: `SELECT Department, COUNT(EmpID) AS EmployeeCount FROM Employees GROUP BY Department;` — this groups rows by department and counts how many employee IDs fall into each group.',
  },
  {
    id: 'sql-81-last-3-records',
    category: 'scenarios',
    question: 'How to find the Last 3 Records in SQL?',
    answer:
      'Using `ORDER BY` with `LIMIT` (MySQL): `SELECT * FROM Employees ORDER BY EmpID DESC LIMIT 3;`. Using `ROW_NUMBER()` (SQL Server/PostgreSQL): wrap the table in a CTE with `ROW_NUMBER() OVER (ORDER BY EmpID DESC) AS RowNum`, then `SELECT * FROM CTE WHERE RowNum <= 3;` — both sort by ID descending first, then take the top 3 (which are the most recently added rows).',
  },
  {
    id: 'sql-82-employees-without-managers',
    category: 'scenarios',
    question: 'How to find Employees without Managers?',
    answer:
      'Using `IS NULL`: `SELECT Name, EmpID FROM Employees WHERE ManagerID IS NULL;`. Using `LEFT JOIN`: `SELECT E1.Name AS Employee FROM Employees E1 LEFT JOIN Employees E2 ON E1.ManagerID = E2.EmpID WHERE E1.ManagerID IS NULL OR E2.EmpID IS NULL;` — both find rows where the ManagerID column has no value or no matching manager record.',
  },
  {
    id: 'sql-83-names-starting-with-a',
    category: 'scenarios',
    question: 'How to find the First Name starting with \'A\'?',
    answer:
      'Use the `LIKE` operator: `SELECT Name FROM Employees WHERE Name LIKE \'A%\';` — `\'A%\'` matches any name starting with "A", where `%` represents any number of characters after it.',
  },
  {
    id: 'sql-84-alternate-rows',
    category: 'scenarios',
    question: 'How to fetch Alternate Rows from a table?',
    answer:
      'Using `MOD()` (MySQL): `WHERE MOD(EmpID, 2) = 0` for even rows, `= 1` for odd rows, based on row position. Using `ROW_NUMBER()` (SQL Server/PostgreSQL): wrap in a CTE with `ROW_NUMBER() OVER (ORDER BY EmpID) AS RowNum`, then filter `WHERE RowNum % 2 = 0` (even) or `= 1` (odd) — both approaches select every other row.',
  },
  {
    id: 'sql-85-swap-two-columns',
    category: 'scenarios',
    question: 'How to swap two columns in SQL?',
    answer:
      'Use a temporary variable inside the `UPDATE`, since swapping directly (`SET Column1 = Column2, Column2 = Column1`) can misbehave depending on the database: `UPDATE Employees SET FirstName = @temp := FirstName, FirstName = LastName, LastName = @temp;` — the temp variable holds the original FirstName before it gets overwritten, so LastName can still reference the correct original value.',
  },
  {
    id: 'sql-86-duplicate-records-with-count',
    category: 'scenarios',
    question: 'How to display the Duplicate Records with their Count?',
    answer:
      'Use `GROUP BY` with `HAVING`: `SELECT ColumnName, COUNT(ColumnName) AS Count FROM TableName GROUP BY ColumnName HAVING COUNT(ColumnName) > 1;` — this groups rows by the target column and returns only the groups whose count exceeds 1, along with how many times each duplicate occurs.',
  },
  {
    id: 'sql-87-highest-salary-without-max',
    category: 'scenarios',
    question: 'How to find the Highest Salary without using MAX()?',
    answer:
      'Using `ORDER BY` with `LIMIT`: `SELECT Salary FROM Employees ORDER BY Salary DESC LIMIT 1;`. Using a subquery with `ALL`: `SELECT Salary FROM Employees E1 WHERE Salary >= ALL (SELECT Salary FROM Employees E2);`. Using `NOT IN`: `SELECT Salary FROM Employees WHERE Salary NOT IN (SELECT Salary FROM Employees WHERE Salary < (SELECT Salary FROM Employees));` — all three work across most RDBMS, with `ORDER BY ... LIMIT` being the simplest.',
  },
  {
    id: 'sql-88-common-records-without-join',
    category: 'scenarios',
    question: 'How to fetch common records from two tables without JOIN?',
    answer:
      'Using `IN`: `SELECT Name FROM Employees WHERE Name IN (SELECT Name FROM Managers);`. Using `INTERSECT` (SQL Server/PostgreSQL): `SELECT Name FROM Employees INTERSECT SELECT Name FROM Managers;` — both return only the names that appear in both tables, without an explicit JOIN.',
  },
  {
    id: 'sql-89-delete-duplicate-records',
    category: 'scenarios',
    question: 'How to delete Duplicate Records from a table?',
    answer:
      'Using `ROW_NUMBER()` (SQL Server/PostgreSQL): number rows within each duplicate group via `ROW_NUMBER() OVER (PARTITION BY Name ORDER BY EmpID) AS RowNum` in a CTE, then `DELETE FROM Employees WHERE EmpID IN (SELECT EmpID FROM CTE WHERE RowNum > 1);`. Using `GROUP BY` with `MIN()` (MySQL): self-join on matching names where one EmpID is greater than the other, then delete the higher (duplicate) one. Always back up data before deleting duplicates.',
  },
  {
    id: 'sql-90-department-highest-employee-count',
    category: 'scenarios',
    question: 'How to find the Department with the highest Employee Count?',
    answer:
      'Using `GROUP BY` with `ORDER BY` and `LIMIT`: `SELECT Department, COUNT(EmpID) AS EmployeeCount FROM Employees GROUP BY Department ORDER BY EmployeeCount DESC LIMIT 1;` — groups employees by department, counts each group, sorts descending by count, and takes just the top one. A subquery wrapping the same grouped result works too, and scales better for very large datasets.',
  },

  // ---------------- Optimization Techniques (91-100) ----------------
  {
    id: 'sql-91-optimize-sql-queries',
    category: 'optimization',
    question: 'How to Optimize SQL Queries?',
    answer:
      'Key practices: **use indexes** on columns used in `WHERE`/`JOIN`/`ORDER BY`; **avoid `SELECT *`**, select only needed columns; **use joins efficiently** (prefer `INNER JOIN` over outer joins when possible); **use `EXISTS` instead of `IN`** for large datasets; **use `LIMIT`/`TOP`** to fetch only required rows; **avoid functions in the `WHERE` clause** (e.g. `WHERE Name = \'Vinay\'` instead of `WHERE UPPER(Name) = \'VINAY\'`, since wrapping a column in a function prevents index usage); prefer **JOINs over subqueries**; **partition large tables**; use **CTEs/temp tables** for reusable intermediate results; and **analyze the execution plan** with `EXPLAIN`.',
  },
  {
    id: 'sql-92-query-execution-plan',
    category: 'optimization',
    question: 'What is Query Execution Plan?',
    answer:
      'A **Query Execution Plan** is a detailed roadmap the database engine uses to execute a query efficiently — it shows how data will be retrieved, the order of operations (joins, scans, sorting), and details about indexes and filtering methods used. View it with `EXPLAIN SELECT ...` (MySQL) or `SET SHOWPLAN_ALL ON` (SQL Server). It\'s used to identify performance bottlenecks, check whether a query is using indexes or full table scans, and understand how joins and filters are applied.',
  },
  {
    id: 'sql-93-improve-query-performance',
    category: 'optimization',
    question: 'How to Improve Query Performance?',
    answer:
      'Best practices: create **indexes** on columns used in `WHERE`/`JOIN`/`ORDER BY`; **avoid `SELECT *`**; prefer **`INNER JOIN`** over outer joins; **filter early with `WHERE`** instead of `HAVING`; **limit results** to only what\'s needed; use **`EXISTS`** instead of `IN` for subqueries; **avoid wrapping columns in functions** inside `WHERE`; **partition large tables**; use **temporary tables or CTEs** for intermediate results; and **analyze execution plans** with `EXPLAIN`/`SHOWPLAN`.',
  },
  {
    id: 'sql-94-what-is-indexing',
    category: 'optimization',
    question: 'What is Indexing?',
    answer:
      '**Indexing** is a technique that improves data-retrieval speed by creating a lookup structure — similar to a book\'s index — reducing time needed for `SELECT` queries, and it\'s automatically updated when data changes. The types are: **Primary Index** (auto-created on the Primary Key), **Unique Index** (ensures column values are unique), **Clustered Index** (physically sorts data rows, only one per table), and **Non-Clustered Index** (stores pointers to data, multiple allowed). It speeds up reads but may slow down `INSERT`/`UPDATE`/`DELETE`.',
  },
  {
    id: 'sql-95-table-partitioning',
    category: 'optimization',
    question: 'What is Table Partitioning?',
    answer:
      '**Table Partitioning** divides large tables into smaller, more manageable pieces without changing the overall table structure — it improves query performance on large datasets, simplifies data management, and each partition is stored separately. The types are **Range Partitioning** (by value ranges, e.g. by year), **List Partitioning** (by specific values), **Hash Partitioning** (evenly distributed via a hash function), and **Composite Partitioning** (a combination of Range and Hash). Example: `PARTITION BY RANGE (YEAR(JoiningDate)) (PARTITION p1 VALUES LESS THAN (2022), PARTITION p2 VALUES LESS THAN (2023));`',
  },
  {
    id: 'sql-96-avoid-deadlocks',
    category: 'optimization',
    question: 'How to Avoid Deadlocks in SQL?',
    answer:
      'A **Deadlock** happens when two or more transactions block each other by holding locks the others need. Prevent it by: **accessing tables in the same consistent order** across every transaction; **minimizing lock time** (keep transactions short and fast); **using lower isolation levels** (e.g. `READ COMMITTED` instead of `SERIALIZABLE`); **avoiding user interaction inside transactions**; using **`NOLOCK`**/read-uncommitted for non-blocking reads on read-only operations; **proper indexing** to minimize the number of rows locked; and **breaking large transactions** into smaller batches.',
  },
  {
    id: 'sql-97-exists-usage',
    category: 'optimization',
    question: 'What is the use of EXISTS in SQL?',
    answer:
      '`EXISTS` checks whether a subquery returns any rows, returning `TRUE` if the subquery returns at least one row and `FALSE` if it returns none. Example: `SELECT column_name FROM table1 WHERE EXISTS (SELECT 1 FROM table2 WHERE table1.id = table2.id);` — it\'s faster than `IN` for large datasets since it stops scanning as soon as one matching row is found, and is commonly used in subqueries to check data existence.',
  },
  {
    id: 'sql-98-query-optimization',
    category: 'optimization',
    question: 'What is Query Optimization?',
    answer:
      '**Query Optimization** is the process of improving the efficiency and performance of SQL queries to retrieve data faster while using minimal system resources — it reduces execution time, improves database performance, and minimizes CPU/memory/I/O usage, largely handled automatically by the RDBMS\'s Query Optimizer. Techniques include: using indexes, avoiding `SELECT *`, preferring `JOIN`s over subqueries, using `EXISTS` instead of `IN` for large datasets, avoiding functions in `WHERE`, using `LIMIT`/`TOP`, and analyzing the execution plan with `EXPLAIN`.',
  },
  {
    id: 'sql-99-stored-procedure-vs-function',
    category: 'optimization',
    question: 'What is the Difference Between Stored Procedure and Function in SQL?',
    answer:
      'A **Stored Procedure** can return multiple values (or none), can perform DML operations like `INSERT`/`UPDATE`/`DELETE`, supports both input and output parameters, can call functions inside it, and is used for business logic and complex operations. A **Function** returns only one value (scalar or table), cannot perform DML operations, only supports input parameters, cannot call stored procedures inside it, and is used for calculations and returning values (often directly inside a `SELECT`).',
  },
  {
    id: 'sql-100-oltp-vs-olap',
    category: 'optimization',
    question: 'What is the difference between OLTP and OLAP in SQL?',
    answer:
      '**OLTP** (Online Transaction Processing) is used for day-to-day transactional operations, focuses on data consistency and speed, stores detailed transactional data, supports `INSERT`/`UPDATE`/`DELETE` on small amounts of data per transaction — examples: banking systems, e-commerce websites. **OLAP** (Online Analytical Processing) is used for data analysis and reporting, focuses on data aggregation and analysis, stores historical/summarized data, supports complex `SELECT` queries over large amounts of data at once — examples: data warehouses, business intelligence tools.',
  },
];

export function searchSqlQuestions(query) {
  const q = query.trim().toLowerCase();
  if (!q) return SQL_INTERVIEW_QUESTIONS;
  return SQL_INTERVIEW_QUESTIONS.filter(
    (item) =>
      item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q),
  );
}
