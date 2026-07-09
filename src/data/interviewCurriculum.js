// Interview Preparation — ChaiCode + GeeksForGeeks
// https://courses.chaicode.com/learn/home/all-in-one-interview-preparation

import { CHAICODE_INTERVIEW_URL } from './trackConfig.js';

const yt = (url, title, channel = 'freeCodeCamp') => ({ url, title, channel });

// ChaiCode DSA Labs — interactive playground to practice DSA puzzles.
const CHAICODE_DSA_LABS = {
  label: 'Practice DSA puzzles — ChaiCode DSA Labs',
  href: 'https://dsa.chaicode.com/',
  icon: '🧩',
};

const PHASE_LESSONS = [
  {
    phase: 'DSA Foundations',
    paidUrl: CHAICODE_INTERVIEW_URL,
    items: [
      ['Introduction to Interview Prep', 'Your roadmap to cracking tech interviews', ['DSA + System Design', 'ChaiCode + GfG', 'Study schedule', 'Portfolio review']],
      ['Arrays & Strings', 'Two pointers, sliding window, and hashing', ['Array traversal', 'Two pointers', 'Sliding window', 'Hash maps']],
      ['Linked Lists', 'Singly, doubly, and cycle detection', ['Node operations', 'Reverse list', 'Floyd cycle', 'Merge lists']],
      ['Stacks & Queues', 'LIFO, FIFO, and monotonic stacks', ['Stack operations', 'Queue variants', 'Monotonic stack', 'Deque patterns']],
      ['Trees — BST & Traversals', 'DFS, BFS, and tree properties', ['Inorder/preorder/postorder', 'BST operations', 'Level order', 'Tree height']],
      ['Heaps & Priority Queues', 'Min-heap, max-heap, and top-K problems', ['Heapify', 'Priority queue', 'Top K elements', 'Merge K lists']],
      ['Graphs — BFS & DFS', 'Adjacency list, matrix, and traversal', ['Graph representation', 'BFS', 'DFS', 'Connected components']],
      ['Sorting & Searching', 'Binary search and sort algorithms', ['Binary search variants', 'Merge sort', 'Quick sort', 'Search in rotated array']],
      ['Recursion & Backtracking', 'Subsets, permutations, and combinations', ['Base cases', 'Subsets', 'Permutations', 'N-Queens intro']],
      ['DSA Foundations Lab', 'Solve 10 easy-medium GfG problems', ['Problem selection', 'Time complexity', 'Code on GfG', 'Review solutions']],
    ],
  },
  {
    phase: 'DSA Patterns & Practice',
    paidUrl: CHAICODE_INTERVIEW_URL,
    items: [
      ['Dynamic Programming — 1D', 'Memoization and tabulation basics', ['Overlapping subproblems', 'Fibonacci', 'Climbing stairs', 'House robber']],
      ['Dynamic Programming — 2D', 'Grid paths and string DP', ['Unique paths', 'Edit distance', 'LCS', 'Knapsack']],
      ['Greedy Algorithms', 'Activity selection and interval problems', ['Greedy choice', 'Interval scheduling', 'Jump game', 'Gas station']],
      ['Binary Trees Advanced', 'LCA, diameter, and path sums', ['Lowest common ancestor', 'Diameter', 'Path sum', 'Serialize tree']],
      ['Graph Algorithms', 'Dijkstra, topological sort, and Union-Find', ['Shortest path', 'Topo sort', 'Union-Find', 'Cycle detection']],
      ['Trie & Advanced Structures', 'Prefix trees and segment trees intro', ['Trie insert/search', 'Word search', 'Segment tree basics', 'Use cases']],
      ['Bit Manipulation', 'XOR tricks and bitmask DP', ['Bit operations', 'Single number', 'Subsets via bits', 'Counting bits']],
      ['GfG 160 — Arrays & Strings', 'Curated DSA problem set on GeeksForGeeks', ['GfG 160 track', 'Daily problems', 'Pattern tagging', 'Editorial review']],
      ['GfG 160 — Trees & Graphs', 'Medium-hard problem practice', ['Tree problems', 'Graph BFS/DFS', 'Timed practice', 'Complexity analysis']],
      ['DSA Mock Assessment', 'Timed coding test simulation', ['90-min mock', '2-3 problems', 'Self review', 'Weak area notes']],
    ],
  },
  {
    phase: 'System Design Fundamentals',
    paidUrl: CHAICODE_INTERVIEW_URL,
    items: [
      ['System Design Introduction', 'Scalability, reliability, and trade-offs', ['Requirements gathering', 'CAP theorem', 'SLA vs SLO', 'Estimation']],
      ['Load Balancing & Caching', 'Distribute traffic and reduce latency', ['LB algorithms', 'CDN', 'Cache strategies', 'Redis intro']],
      ['Databases — SQL vs NoSQL', 'When to use relational vs document stores', ['ACID', 'Sharding', 'Replication', 'MongoDB vs PostgreSQL']],
      ['API Design & REST', 'Designing scalable APIs', ['REST principles', 'Versioning', 'Rate limiting', 'Pagination']],
      ['Microservices Architecture', 'Service boundaries and communication', ['Monolith vs microservices', 'API gateway', 'Service discovery', 'Saga pattern']],
      ['Message Queues & Event Streaming', 'Kafka, RabbitMQ, and async patterns', ['Pub/sub', 'Kafka partitions', 'Ordering guarantees', 'Dead letter queues']],
      ['Storage & CDNs', 'Object storage and content delivery', ['S3 patterns', 'CDN caching', 'Blob vs file storage', 'Media delivery']],
      ['Consistency & Availability', 'Replication, quorum, and eventual consistency', ['Strong vs eventual', 'Leader election', 'Quorum reads', 'Conflict resolution']],
      ['GfG System Design — Basics', 'GeeksForGeeks live course modules', ['Course structure', 'Case study format', 'Diagram tools', 'Note-taking']],
      ['System Design Diagram Lab', 'Draw architecture for a URL shortener', ['Components', 'Data flow', 'Bottlenecks', 'Scale estimates']],
    ],
  },
  {
    phase: 'System Design Case Studies',
    paidUrl: CHAICODE_INTERVIEW_URL,
    items: [
      ['Design a URL Shortener', 'TinyURL / bit.ly architecture', ['Hash generation', 'Redirect flow', 'Analytics', 'Scale to billions']],
      ['Design Twitter / News Feed', 'Fan-out, timelines, and ranking', ['Fan-out on write vs read', 'Celebrities', 'Ranking feed', 'Caching']],
      ['Design WhatsApp / Chat', 'Real-time messaging at scale', ['WebSockets', 'Message ordering', 'Group chat', 'Offline delivery']],
      ['Design YouTube / Netflix', 'Video upload, transcode, and streaming', ['Upload pipeline', 'CDN delivery', 'Adaptive bitrate', 'Recommendations']],
      ['Design Uber / Ride Sharing', 'Matching, geolocation, and ETA', ['Geohashing', 'Driver matching', 'Surge pricing', 'Trip tracking']],
      ['Design Instagram', 'Photo storage, feed, and stories', ['Blob storage', 'Feed generation', 'Stories TTL', 'Explore tab']],
      ['Design Rate Limiter', 'Token bucket and sliding window', ['Distributed rate limit', 'Redis counters', 'Per-user limits', 'API gateway']],
      ['Design Notification System', 'Push, email, and SMS at scale', ['Multi-channel delivery', 'Priority queues', 'Template engine', 'Deduplication']],
      ['GfG System Design — Mock', 'GeeksForGeeks system design mock interview', ['45-min mock', 'Interviewer feedback', 'Diagram review', 'Improvement plan']],
      ['System Design Portfolio', 'Document 5 designs in your portfolio', ['URL shortener write-up', 'Feed design', 'Chat design', 'Share on GitHub']],
    ],
  },
  {
    phase: 'ChaiCode Interview Preparation',
    paidUrl: CHAICODE_INTERVIEW_URL,
    items: [
      ['ChaiCode All-in-One Overview', 'Full stack interview prep course kickoff', ['Course modules', 'DSA track', 'System design', 'Mock interviews']],
      ['JavaScript Interview Deep Dive', 'Closures, prototypes, and event loop', ['Closures', 'this keyword', 'Event loop', 'Promises & async']],
      ['React & Next.js Interviews', 'Hooks, rendering, and performance', ['useState/useEffect', 'Virtual DOM', 'SSR vs CSR', 'Optimization']],
      ['Node.js & Backend Interviews', 'Express, APIs, and middleware', ['REST design', 'Auth patterns', 'Error handling', 'Scaling Node']],
      ['Database Interview Questions', 'SQL queries, indexing, and ORMs', ['JOINs', 'Indexes', 'Transactions', 'Prisma/Drizzle']],
      ['Cloud & DevOps Interviews', 'AWS, Docker, K8s interview topics', ['IAM & EC2', 'Docker vs VM', 'K8s pods & services', 'CI/CD pipelines']],
      ['Behavioral & HR Round', 'STAR method and culture fit', ['STAR framework', 'Leadership stories', 'Conflict resolution', 'Why this company']],
      ['Resume & LinkedIn Optimization', 'Stand out to recruiters', ['Resume format', 'Project bullets', 'LinkedIn headline', 'Portfolio links']],
      ['Salary Negotiation', 'Offer evaluation and negotiation tactics', ['Market research', 'Counter offers', 'Benefits package', 'Timing']],
      ['ChaiCode Mock Interview 1', 'Full-stack technical mock on ChaiCode', ['Live coding', 'System design question', 'Feedback session', 'Action items']],
    ],
  },
  {
    phase: 'Mock Interviews & Capstone',
    paidUrl: CHAICODE_INTERVIEW_URL,
    items: [
      ['GfG Interview Preparation Course', 'Product company interview track', ['Course overview', 'Company-specific prep', 'OA strategies', 'Onsite format']],
      ['Frontend Interview Marathon', 'HTML, CSS, JS, and React rapid fire', ['CSS layouts', 'JS tricky questions', 'React patterns', 'Accessibility']],
      ['Backend Interview Marathon', 'APIs, databases, and system design lite', ['API design', 'DB normalization', 'Caching', 'Auth']],
      ['Full Stack Project Walkthrough', 'Present your Thunder++ journey', ['Thunder projects', 'AWS/DevOps work', 'K8s labs', 'GitHub portfolio']],
      ['Company-Specific Prep — FAANG', 'Amazon LP, Google, Meta patterns', ['Leadership principles', 'Googleyness', 'Meta loops', 'Study resources']],
      ['Company-Specific Prep — Startups', 'Startup interview culture', ['Generalist role', 'Ownership stories', 'Fast iteration', 'Equity basics']],
      ['Open Assessment Practice', 'GeeksForGeeks OA simulation', ['Timed OA', 'Platform familiarity', 'Edge cases', 'Post-mortem']],
      ['ChaiCode Mock Interview 2', 'Senior-level mock with feedback', ['System design deep dive', 'Coding hard problem', 'Behavioral round', 'Scorecard']],
      ['Final Revision Week', 'Review weak areas across all tracks', ['DSA weak topics', 'System design gaps', 'Flashcards', 'Cheat sheets']],
      ['Interview Ready — Capstone', 'You are ready to apply and interview', ['Apply checklist', 'Referral strategy', 'Daily practice plan', 'Celebrate the journey']],
    ],
  },
];

function buildLessons() {
  const lessons = [];
  let interviewDay = 1;
  const defaultYt = yt(
    'https://www.youtube.com/watch?v=MtL3wZXxNhk',
    'Data Structures Easy to Advanced Course',
    'freeCodeCamp',
  );

  for (const { phase, paidUrl, items } of PHASE_LESSONS) {
    for (const [title, subtitle, topics] of items) {
      const lesson = {
        interviewDay,
        phase,
        title,
        subtitle,
        topics,
        paidLectureUrl: paidUrl,
        youtube: defaultYt,
      };
      // Attach the ChaiCode DSA practice playground to the DSA phases.
      if (phase === 'DSA Foundations' || phase === 'DSA Patterns & Practice') {
        lesson.extraLinks = [CHAICODE_DSA_LABS];
      }
      lessons.push(lesson);
      interviewDay += 1;
    }
  }
  return lessons;
}

export const interviewLessons = buildLessons();
