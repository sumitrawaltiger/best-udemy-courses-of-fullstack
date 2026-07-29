// MongoDB interview questions — schema design, indexing, and the
// aggregation pipeline, plus a quick shell/Mongoose reference.
// Source: "Top MongoDB Interview Questions — 2026 Ultimate Interview Guide" by AlgoTutor.
// Each question: { id, category, question, answer }

export const MONGODB_QUESTION_CATEGORIES = [
  { id: 'fundamentals', label: 'Fundamentals', icon: '📘' },
  { id: 'performance', label: 'Indexing & Performance', icon: '⚡' },
  { id: 'aggregation', label: 'Aggregation Pipeline', icon: '🧮' },
  { id: 'reference', label: 'Shell & Mongoose Reference', icon: '🛠️' },
];

export const MONGODB_INTERVIEW_QUESTIONS = [
  {
    id: 'mongo-1-sql-vs-mongodb',
    category: 'fundamentals',
    question: 'Why choose MongoDB over a Relational Database (SQL)?',
    answer:
      'Relational databases store data in rigid, predefined tables with strict schemas; MongoDB is a NoSQL **document database** that stores data in flexible, JSON-like documents (BSON). The decision comes down to three pillars: **Polymorphic Data** (documents in the same collection can have different structures — no sparse tables or complex JOINs needed for variable attributes, e.g. a laptop needing `ram`/`storage` vs a T-shirt needing `size`/`color`), **Rapid Iteration** (a dynamic schema means you\'re not migrating tables every time requirements change), and **Horizontal Scalability** (sharding is built in, vs SQL\'s expensive vertical scaling). SQL still wins on strict ACID compliance by default and complex transactional relationships across normalized tables. **Common mistake:** claiming "MongoDB is faster than SQL" — that\'s a false generalization; MongoDB is faster for reading hierarchical data that would otherwise need many SQL JOINs, while SQL is often faster for complex transactional relationships.',
  },
  {
    id: 'mongo-2-indexes',
    category: 'performance',
    question: 'How do Indexes work in MongoDB, and when do they become a bottleneck?',
    answer:
      'An index is a **B-Tree** data structure that stores a small, easily-traversable portion of a collection\'s data. Without one, MongoDB performs a **Collection Scan (COLLSCAN)** — reading every document to find matches; with one, it performs an **Index Scan (IXSCAN)**, which is dramatically faster. Create one with `db.users.createIndex({ "email": 1 }, { unique: true });` and check whether a query is actually using it with `db.users.find({ email: "..." }).explain("executionStats");`. Indexes become a bottleneck on the **write** side — every `INSERT`/`UPDATE` also has to update every index on that collection, so over-indexing slows down writes even as it speeds up reads. **Performance tip — the ESR Rule:** when building compound indexes, order fields as **E**quality first, **S**ort second, **R**ange third, e.g. `{ status: 1, date: -1, price: 1 }`.',
  },
  {
    id: 'mongo-3-aggregation-pipeline',
    category: 'aggregation',
    question: 'How does the Aggregation Pipeline differ from standard queries?',
    answer:
      'Standard CRUD queries are trivial; the **Aggregation Pipeline** proves you can handle complex data transformations, analytics, and reporting directly at the database layer instead of pulling massive datasets into application memory. It works as a true pipeline — data enters, passes through a sequence of stages like an assembly line, and emerges transformed. Example: `db.orders.aggregate([{ $match: { status: "completed" } }, { $group: { _id: "$region", totalRevenue: { $sum: "$price" } } }, { $sort: { totalRevenue: -1 } }]);` filters completed orders, sums revenue per region, then sorts highest-first — always filter early with `$match` to shrink the dataset before later, more expensive stages. Three operators to know cold: `$match` (SQL\'s `WHERE` — filters documents), `$group` (SQL\'s `GROUP BY` — aggregates data like sum/avg), and `$lookup` (SQL\'s `LEFT JOIN` — joins in data from another collection).',
  },
  {
    id: 'mongo-4-shell-commands',
    category: 'reference',
    question: 'What are the essential MongoDB shell commands?',
    answer:
      '`show dbs` lists every database on the server • `use <dbname>` switches to a specific database • `show collections` lists the collections in the current database • `db.stats()` shows database statistics like storage size and index sizes — the four commands you reach for constantly when exploring or debugging a MongoDB instance from the shell.',
  },
  {
    id: 'mongo-5-mongoose-methods',
    category: 'reference',
    question: 'What are the essential Mongoose methods?',
    answer:
      '`Model.findOne({ ... })` finds the first document matching the given conditions • `Model.findById(id)` is a convenience wrapper for `findOne({ _id: id })` • `Model.populate(\'field\')` replaces a referenced path in the document with the actual document(s) from another collection • `Model.lean()` returns plain JavaScript objects instead of full Mongoose Documents, giving a **massive performance boost** for read-heavy queries that don\'t need Mongoose\'s change-tracking or virtuals.',
  },
];

export function searchMongodbQuestions(query) {
  const q = query.trim().toLowerCase();
  if (!q) return MONGODB_INTERVIEW_QUESTIONS;
  return MONGODB_INTERVIEW_QUESTIONS.filter(
    (item) =>
      item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q),
  );
}
