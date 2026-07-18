// The Complete Generative AI Engineering Bootcamp — Build & Deploy Autonomous AI Agents.
// Year 1 (JavaScript stack) · Agentic AI in JavaScript with LangChain.js, LangGraph & LangSmith.
// 13 modules across 3 parts. YouTube links are hand-picked, oEmbed-verified companion videos.

const LC = 'https://js.langchain.com/docs/introduction/';

const yt = (id, title, channel) => ({
  url: `https://www.youtube.com/watch?v=${id}`,
  title,
  channel,
});

export const genaiLessons = [
  // ── PART I: CORE CONCEPTS & THEORETICAL FOUNDATIONS ──
  {
    genaiDay: 1,
    phase: 'Part I · Core Concepts & Theoretical Foundations',
    title: 'The New Age of AI: Introduction to Generative AI',
    subtitle: 'The AI landscape, the shift to generative models, and the modern GenAI ecosystem',
    topics: [
      'The AI Landscape: AI vs Machine Learning vs Deep Learning vs Generative AI',
      'What is Generative AI? The shift from discriminative to generative models',
      'A High-Level Look at LLMs: what they do and their limitations',
      'The GenAI Ecosystem: OpenAI, Google, Meta, models (GPT, Llama) and open source',
    ],
    notionUrl: LC,
    youtube: yt('zjkBMFhNj_g', '[1hr Talk] Intro to Large Language Models', 'Andrej Karpathy'),
  },
  {
    genaiDay: 2,
    phase: 'Part I · Core Concepts & Theoretical Foundations',
    title: 'How Language Models "Think": Tokens, Prompts & Predictions',
    subtitle: 'Tokenization, the prompt/completion loop, and the autoregressive nature of LLMs',
    topics: [
      'From Text to Numbers: the concept of tokenization',
      'The Core Interaction: prompts, completions and the context window',
      'The Predictive Engine: the autoregressive nature of LLMs',
      'Parametric Knowledge vs Source Knowledge: why external data matters for agents',
    ],
    notionUrl: LC,
    youtube: yt('zduSFxRajkE', "Let's build the GPT Tokenizer", 'Andrej Karpathy'),
  },
  {
    genaiDay: 3,
    phase: 'Part I · Core Concepts & Theoretical Foundations',
    title: 'Unlocking the Black Box: An Intuition for Deep Learning',
    subtitle: 'Neurons, the learning process, and why depth unlocks complex patterns',
    topics: [
      'The Building Blocks: artificial neurons and neural networks',
      'The Learning Process: loss functions, gradient descent and backpropagation (no maths)',
      'Why "Deep" Learning? The power of multiple layers for complex patterns',
    ],
    notionUrl: LC,
    youtube: yt('aircAruvnKk', 'But what is a neural network? | Deep learning chapter 1', '3Blue1Brown'),
  },
  {
    genaiDay: 4,
    phase: 'Part I · Core Concepts & Theoretical Foundations',
    title: 'The Engine of Modern LLMs: The Transformer Architecture',
    subtitle: 'Self-attention, positional encodings, and deconstructing the Transformer',
    topics: [
      'The Core Innovation: the self-attention mechanism',
      'Positional Encodings: understanding word order while processing in parallel',
      'Deconstructing the Transformer: a walkthrough of its key components',
    ],
    notionUrl: LC,
    youtube: yt('wjZofJX0v4M', 'Transformers, the tech behind LLMs | Deep Learning Chapter 5', '3Blue1Brown'),
  },
  {
    genaiDay: 5,
    phase: 'Part I · Core Concepts & Theoretical Foundations',
    title: 'Representing Meaning: Embeddings & Vector Databases',
    subtitle: 'Vector embeddings, why vector DBs exist, and ANN search — hands-on',
    topics: [
      'What are Vector Embeddings? Representing data as points in high-dimensional space',
      'The Need for Vector Databases: why SQL and NoSQL are not enough for AI',
      'Inside the Search Engine: Approximate Nearest Neighbor (ANN) search',
      'Hands-On with Vector DBs: Qdrant, Pinecone or PGVector',
    ],
    notionUrl: LC,
    youtube: yt('dN0lsF2cvm4', 'Vector Databases simply explained! (Embeddings & Indexes)', 'AssemblyAI'),
  },

  // ── PART II: BUILDING APPLICATIONS & AUTONOMOUS AGENTS ──
  {
    genaiDay: 6,
    phase: 'Part II · Building Applications & Autonomous Agents',
    title: 'The Modern AI Stack: Introduction to LangChain',
    subtitle: 'Composing LLM calls into chains — models, prompts, and output parsers',
    topics: [
      'Why LangChain? Composing LLM calls into chains and applications',
      'Core LangChain Components: models, prompts and output parsers',
      'Building Your First LLM Chain: a "Hello, World!" for GenAI apps',
    ],
    notionUrl: LC,
    youtube: yt('yF9kGESAi3M', 'LangChain Master Class For Beginners 2024', 'aiwithbrandon'),
  },
  {
    genaiDay: 7,
    phase: 'Part II · Building Applications & Autonomous Agents',
    title: 'Building the Knowledge Base for Agents: RAG In-Depth',
    subtitle: 'The full RAG pipeline and a robust "Chat with Your Documents" build',
    topics: [
      'Architecting the Full RAG Pipeline: ingestion, chunking, embedding, indexing, retrieval, generation',
      'Practical Implementation: building a robust "Chat with Your Documents" app',
      'Laying the Foundation: how RAG becomes the knowledge-retrieval tool for agents',
    ],
    notionUrl: LC,
    youtube: yt('sVcwVQRHIc8', 'Learn RAG From Scratch – LangChain AI Tutorial', 'freeCodeCamp.org'),
  },
  {
    genaiDay: 8,
    phase: 'Part II · Building Applications & Autonomous Agents',
    title: 'Building Your First Autonomous AI Agent',
    subtitle: 'The agent reasoning loop, tools, memory — and a Research Assistant project',
    topics: [
      'The Anatomy of an AI Agent: deconstructing the core reasoning loop',
      'Giving Your Agent Superpowers: browsing the web, running code and using APIs as tools',
      'Creating an Agent with Memory: short-term and long-term memory',
      'Project: build a Research Assistant Agent that browses the web and summarizes findings',
    ],
    notionUrl: LC,
    youtube: yt('F8NKVhkZZWI', 'What are AI Agents?', 'IBM Technology'),
  },
  {
    genaiDay: 9,
    phase: 'Part II · Building Applications & Autonomous Agents',
    title: 'Building Multi-Agent Systems with LangGraph',
    subtitle: 'States, nodes and edges, human-in-the-loop, and a collaborative AI team',
    topics: [
      'The Limits of Single Agents and the Need for Graphs',
      'Introduction to LangGraph: states, nodes and edges for agentic workflows',
      'Designing for Control: human-in-the-loop interruptions for critical oversight',
      'Project: build a Collaborative AI Team where a planner delegates to worker agents',
    ],
    notionUrl: LC,
    youtube: yt('hvAPnpSfSGo', 'LangGraph: Multi-Agent Workflows', 'LangChain'),
  },
  {
    genaiDay: 10,
    phase: 'Part II · Building Applications & Autonomous Agents',
    title: 'Making Agents Smarter: Advanced Data Techniques',
    subtitle: 'Graph RAG with knowledge graphs and multi-modal agents',
    topics: [
      'Graph RAG: equipping agents with knowledge graphs to understand complex relationships',
      'Multi-Modal Agents: processing and integrating text, images and other data types',
    ],
    notionUrl: LC,
    youtube: yt('knDDGYHnnSI', 'GraphRAG: The Marriage of Knowledge Graphs and RAG', 'AI Engineer'),
  },

  // ── PART III: PRODUCTION, EVALUATION, AND MASTERY ──
  {
    genaiDay: 11,
    phase: 'Part III · Production, Evaluation & Mastery',
    title: 'Taking Your Agents to Production: Deployment & Scaling',
    subtitle: 'Architecting for scale, cloud deployment, the MCP server, and fine-tuning',
    topics: [
      'Architecting for Scale: designing your AI agent as a robust microservice',
      'Cloud Deployment Mastery: hosting and scaling your agent on a platform like AWS',
      'The MCP (Model Control Plane) Server for deploying and managing your AI microservice',
      'The Art of Fine-Tuning: customizing a base model to create a specialized agent',
    ],
    notionUrl: LC,
    youtube: yt('eur8dUO9mvE', 'What is MCP? Integrate AI Agents with Databases & APIs', 'IBM Technology'),
  },
  {
    genaiDay: 12,
    phase: 'Part III · Production, Evaluation & Mastery',
    title: 'Evaluating & Debugging Your Agents',
    subtitle: 'Observability with LangSmith, performance metrics, and LLM-as-a-Judge',
    topics: [
      'Observability for LLMs: using LangSmith to trace, monitor and debug reasoning',
      'Measuring Agent Performance: key metrics for success and reliability',
      'Automated Evaluation: implementing the "LLM as a Judge" technique to score outputs',
    ],
    notionUrl: LC,
    youtube: yt('qAF1NjEVHhY', 'LangChain vs LangGraph: A Tale of Two Frameworks', 'IBM Technology'),
  },
  {
    genaiDay: 13,
    phase: 'Part III · Production, Evaluation & Mastery',
    title: 'Capstone Project: Build a Full-Stack Autonomous AI Agent',
    subtitle: 'Ship a complete agent that applies every GenAI skill from the course',
    topics: [
      'Plan and architect the major project using all GenAI knowledge',
      'Combine RAG, tools, memory and multi-agent orchestration end to end',
      'Deploy, evaluate with LangSmith, and present a portfolio-ready agent',
    ],
    notionUrl: LC,
    youtube: yt('tcqEUSNCn8I', 'RAG + LangChain Project: AI Chat For Your Docs', 'pixegami'),
  },
];
