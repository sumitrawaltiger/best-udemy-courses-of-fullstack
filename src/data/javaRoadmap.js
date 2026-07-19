// Java engineering competency roadmap — transcribed from the user's plan image.
// 16 stages across 3 phases, with per-stage modules/topics and the milestone,
// ECA/TGA, THA and role bands. Rendered as a grid on the Java Roadmap page.

export const JAVA_ROADMAP_META = {
  title: 'Java Engineering Roadmap',
  subtitle: '16 stages · 3 phases · from FLC Engineer to Engineering Manager',
  image: '/java-notes/java-plan-roadmap.jpg',
  imageAlt:
    'Java engineering competency roadmap — 16 stages across three phases (FLC / Full-Life Cycle, Advance MS, Solution & Productionize) with modules ELA, Java Fundamentals, Cloud Enablement, DevOps, Testing, Database, Microservices, SRE, Messaging & EDA, Advance Lang & Libraries, DDD & Security, Data Integration, Solution Architecture, Operational Excellence and Supervised Outcome & Mentoring, plus milestones M0–M4, ECA/TGA and THA expectations, incremental roles (FLC Engineer → Specialist → Engineering Manager), and a legend',
};

// Phases group the 16 stages. span = [firstStage, lastStage].
export const ROADMAP_PHASES = [
  { id: 'flc', label: 'FLC · Full-Life Cycle', span: [1, 8], color: '#2f7ed8' },
  { id: 'ms', label: 'Advance MS', span: [9, 12], color: '#0f9d8f' },
  { id: 'sol', label: 'Solution & Productionize', span: [13, 16], color: '#7c5cd6' },
];

// Module name bands. Solution Architecture spans stages 13–14.
export const ROADMAP_MODULES = [
  { span: [1, 1], name: 'ELA', phase: 'flc' },
  { span: [2, 2], name: 'Java Fundamentals', phase: 'flc' },
  { span: [3, 3], name: 'Cloud Enablement', phase: 'flc' },
  { span: [4, 4], name: 'DevOps', phase: 'flc' },
  { span: [5, 5], name: 'Testing', phase: 'flc' },
  { span: [6, 6], name: 'Database', phase: 'flc' },
  { span: [7, 7], name: 'Microservices', phase: 'flc' },
  { span: [8, 8], name: 'SRE / Application Support', phase: 'flc' },
  { span: [9, 9], name: 'Messaging & EDA', phase: 'ms' },
  { span: [10, 10], name: 'Advance Lang & Libraries', phase: 'ms' },
  { span: [11, 11], name: 'DDD & Security', phase: 'ms' },
  { span: [12, 12], name: 'Data Integration', phase: 'ms' },
  { span: [13, 14], name: 'Solution Architecture', phase: 'sol' },
  { span: [15, 15], name: 'Operational Excellence', phase: 'sol' },
  { span: [16, 16], name: 'Supervised Outcome & Mentoring', phase: 'sol' },
];

// Topics per stage (stage number → list). "kind" tags a few cells for the
// legend colouring: 'core' (ECA/TGA/THA), 'tga' (TGA-Execute/ECA Conceptual),
// 'optional' (optional/mandatory-by-craft), 'milestone' (exercise cells).
export const ROADMAP_STAGES = [
  { n: 1, topics: [{ t: 'SAFe, Jira' }, { t: 'PS How, Know How' }, { t: 'Minimize Toil & Wastage, Gaining Inspiration' }, { t: 'Stakeholder Management' }] },
  { n: 2, topics: [{ t: 'Gen AI 101' }, { t: 'GOF & SOLID Principles' }, { t: 'Lambda & Functional Programming' }, { t: 'Data Structure & Algorithm' }] },
  { n: 3, topics: [{ t: 'Cloud-Application Services' }, { t: 'Logging, Monitoring & Auditing' }, { t: 'Cloud Burner' }] },
  { n: 4, topics: [{ t: 'Docker & Kubernetes' }, { t: 'CI & CD' }, { t: 'Leadership Foundations: Leadership Styles & Models' }, { t: 'Terraform', kind: 'tga' }] },
  { n: 5, topics: [{ t: 'BDD Testing' }, { t: 'JUnit Testing' }, { t: 'Soft Skill & Consulting' }, { t: 'Performance Testing' }] },
  { n: 6, topics: [{ t: 'Caching' }, { t: 'NoSQL' }, { t: 'SQL' }] },
  { n: 7, topics: [{ t: 'SpringBoot MS' }, { t: 'Spring Security' }, { t: 'Spring Data JPA' }, { t: 'Spring Reactive (optional)', kind: 'tga' }] },
  { n: 8, topics: [{ t: 'Troubleshooting' }, { t: 'JVM Profiling & Optimization', kind: 'tga' }, { t: 'Presentation Skills' }] },
  { n: 9, topics: [{ t: 'Kafka' }, { t: 'EDA' }, { t: 'AEM (optional)', kind: 'optional' }] },
  { n: 10, topics: [{ t: 'SpringBoot GraphQL' }, { t: 'Python / Scala (any one)' }] },
  { n: 11, topics: [{ t: 'DDD' }, { t: 'API Gateway' }, { t: 'IAM (IS-Mandatory / Java-Optional)', kind: 'optional' }] },
  { n: 12, topics: [{ t: 'Cloud Integration / Data Processing Services' }] },
  { n: 13, topics: [{ t: 'Business & Functional Requirement' }, { t: 'Information and Concurrency' }, { t: 'Deployment Architecture' }, { t: 'Client Solutions' }] },
  { n: 14, topics: [{ t: 'Regulations' }, { t: 'Performance Architecture' }, { t: 'Cloud Migration' }] },
  { n: 15, topics: [{ t: 'Operations' }, { t: 'Resource and Costing' }, { t: 'Availability and Resilience' }] },
  { n: 16, topics: [{ t: 'Integrated Domain Exercise M0+M1+M2+M3', kind: 'milestone' }, { t: 'Integrated Domain Exercise M0–M3', kind: 'milestone' }] },
];

// Horizontal bands under the module grid. Each entry spans a stage range.
export const ROADMAP_BANDS = [
  {
    id: 'milestones',
    label: 'Milestones',
    cells: [
      { span: [1, 1], text: 'M0' },
      { span: [2, 8], text: 'Integrated Domain Exercise — M1 (MVP)' },
      { span: [9, 12], text: 'Incremental Domain Exercise — M2 (Refactor)' },
      { span: [13, 15], text: 'Incremental Domain Exercise — M3 (Final)' },
      { span: [16, 16], text: 'Restricted by Craft — M4' },
    ],
  },
  {
    id: 'eca',
    label: 'ECA / TGA Expectation',
    cells: [
      { span: [1, 1], text: 'Self-learning and/or ILT · Outcome-Domain Exercise' },
      { span: [2, 8], text: 'Self-learning and/or ILT sessions · Outcome-Domain Exercise, MCQs & Supervisor Evaluation · Craft Milestone Approver' },
      { span: [9, 12], text: 'Self-learning and/or ILT sessions · Outcome-Domain Exercise, MCQs & Supervisor Evaluation · Craft Milestone Approver' },
      { span: [13, 15], text: 'Self-learning, Mandatory ILT sessions · Outcome: Domain Exercise & Supervisor Evaluation · Craft Milestone Approver' },
      { span: [16, 16], text: 'Eligibility — Time in Title, Performance & Business' },
    ],
  },
  {
    id: 'tha',
    label: 'THA Expectation',
    cells: [
      { span: [1, 1], text: 'M0 · Simulation & Certified Practitioners' },
      { span: [2, 8], text: 'Expert Sessions — M1 · Mentor ECA/TGA Community' },
      { span: [9, 12], text: 'Expert Sessions — M2 · Mentor ECA/TGA Community · Recent projects/simulation' },
      { span: [13, 15], text: 'Expert Sessions — M3 · Mentor ECA/TGA Community · Recent projects/simulation' },
      { span: [16, 16], text: 'M4 · Publish Articles & External Expert Sessions' },
    ],
  },
  {
    id: 'role',
    label: 'Incremental Role',
    cells: [
      { span: [1, 8], text: 'Primary Skill Upgrade & Role — FLC Engineer' },
      { span: [9, 12], text: 'Specialist' },
      { span: [13, 16], text: 'Engineering Manager' },
    ],
  },
];

export const ROADMAP_LEGEND = [
  { kind: 'mandatory', label: 'Mandatory Competency Assessments' },
  { kind: 'core', label: 'ECA / TGA / THA' },
  { kind: 'tga', label: 'TGA-Execute / ECA Conceptual' },
  { kind: 'tha', label: 'THA-Execute / TGA-Conceptual' },
];
