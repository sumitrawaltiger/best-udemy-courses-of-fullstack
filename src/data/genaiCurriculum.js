// The Complete Generative AI Engineering Bootcamp — Build & Deploy Autonomous AI Agents.
// Year 1 (JavaScript stack) · Agentic AI in JavaScript with LangChain.js, LangGraph & LangSmith.
// 14 modules across 3 parts. YouTube links are hand-picked, oEmbed-verified companion videos.

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
    title: 'Write Your First Code: The Gemini API in JavaScript',
    subtitle:
      'From token prediction to a working multi-turn chatbot with @google/genai — chat, history, system instructions, thinking & cost',
    topics: [
      'Token prediction & how LLMs "think"',
      'Google AI Studio & @google/genai setup',
      'Single & multi-turn chat with history',
      'Chat sessions & system instructions',
      'thinkingConfig & thinkingBudget',
      'Tokens, cost & optimization',
    ],
    notionUrl:
      'https://app.notion.com/p/Lecture-02-Write-our-first-code-2c0a9af81c9880fe854debfe340a9b79',
    youtube: yt('zduSFxRajkE', "Let's build the GPT Tokenizer", 'Andrej Karpathy'),
    sections: [
      {
        id: 'token-prediction',
        title: 'What LLMs Actually Do: Token Prediction',
        content:
          "LLMs don't think, reason, or understand — they **predict the next token**. A **token** is a piece of text: a word, part of a word, or a character.\n\n• `\"Hello world\"` becomes `[\"Hello\", \" world\"]` (2 tokens)\n• `\"strawberry\"` might be `[\"straw\", \"berry\"]` or `[\"strawberry\"]`\n\nGiven `\"The capital of France is\"`, the model predicts `\"Paris\"` — the most likely next token from its training. That's it: **every single thing an LLM does is repeating this process over and over.**",
      },
      {
        id: 'thinking-is-tokens',
        title: '"Thinking" Is Just More Tokens',
        content:
          "**Marketing says:** the model thinks through the problem step by step. **Reality:** it generates more tokens that *look like* thinking before the final answer.\n\nFor `\"What is 547 + 832?\"` a direct prediction jumps to `\"1379\"`. A \"thinking\" model first predicts hidden intermediate tokens, then the answer. At each step it only ever asks: **what is the most likely next token?** It is **not** actually calculating, understanding numbers, or following an algorithm — it predicts tokens that look like someone solving the problem.",
        code: `// "Thinking" tokens for: What is 547 + 832?
"Let me add these step by step"
"547 + 832"
"7 + 2 = 9"
"40 + 30 = 70"
"500 + 800 = 1300"
"Total: 1300 + 70 + 9 = 1379"
// -> final output: "1379"`,
      },
      {
        id: 'why-thinking-helps',
        title: 'Why "Thinking" Sometimes Helps',
        content:
          "Each token you generate changes what can come next, so the intermediate steps make the correct answer far more probable.\n\n• Direct: `P(\"1379\")` given the question ~ **60%**\n• After showing the working: `P(\"1379\")` ~ **95%**\n\nThe extra tokens condition the model toward the right continuation — that is the whole trick behind chain-of-thought.",
      },
      {
        id: 'counting-letters',
        title: 'Real Example: Counting Letters (and Why It Fails)',
        content:
          "\"How many times does `'r'` appear in `'strawberry'`?\" — the answer is **3**. With thinking, the model spells it out and \"counts.\" But it is **not** splitting the string into characters, looping, or counting — it predicts what tokens *would appear if someone counted*.\n\nThat is why odd inputs like `'rrrrrr'` can trip it up: it matches patterns from training data, it does not execute code.",
        code: `// With "thinking"
"Let me spell it out"
"s-t-r-a-w-b-e-r-r-y"
"'r' at positions 3, 8, 9"
"Total: 3"`,
      },
      {
        id: 'when-to-use-thinking',
        title: 'When to Use "Thinking" Models',
        content:
          "**Use thinking for:** multi-step problems (two trains meeting), code debugging (trace execution step by step), complex explanations (structure them), and planning (break down constraints).\n\n**Do not use thinking for:** simple facts (\"capital of France?\"), creative writing (it does not add creativity), or simple definitions (\"what is a variable?\"). There it just wastes tokens and money for the same answer.",
      },
      {
        id: 'ai-studio-setup',
        title: 'Google AI Studio — Getting Started',
        content:
          "Set up the Google GenAI SDK: (1) install the package, (2) create an API key in **Google AI Studio**, (3) put it in a `.env` file, and (4) install `dotenv` to load it. Keep the key out of your source — load it from the environment.",
        code: `npm install @google/genai
npm install dotenv

# .env
GEMINI_API_KEY=your_api_key_here`,
      },
      {
        id: 'first-chat',
        title: 'Your First Chat Call',
        content:
          "Send one message and print the response. Important: this call has **no memory** — you send a message, the AI responds, and it forgets everything the moment the call returns.",
        code: `import 'dotenv/config';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain what a variable is in programming",
  });
  console.log(response.text);
}

await main();`,
      },
      {
        id: 'no-memory-history',
        title: 'Multi-Turn Chat: LLMs Have No Memory',
        content:
          "Every API call is completely independent — the model has **no memory**. Tell it \"My name is Rohit\" then ask \"What's my name?\" in a new call and it will not know.\n\n**The fix:** send the entire conversation **history** with each new message. Append every user and model turn, then resend the whole array each time.",
        code: `const history = [];

history.push({ role: "user", parts: [{ text: "My name is Rohit" }] });
let response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: history,
});
history.push({ role: "model", parts: [{ text: response.text }] });

// Next turn now includes the history
history.push({ role: "user", parts: [{ text: "What's my name?" }] });
response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: history,
});
console.log(response.text); // "Your name is Rohit!"`,
      },
      {
        id: 'interactive-readline',
        title: 'Interactive Chat with readline-sync',
        content:
          "Wrap it in a loop that reads user input, appends it to `history`, sends everything, prints the reply, and appends the reply. Type `exit` to quit. **The history keeps growing — you send everything, every time.**",
        code: `import 'dotenv/config';
import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({});

async function main() {
  const history = [];
  while (true) {
    const userMessage = readlineSync.question("You: ");
    if (userMessage.toLowerCase() === "exit") break;

    history.push({ role: "user", parts: [{ text: userMessage }] });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: history,
    });
    console.log("AI:", response.text);

    history.push({ role: "model", parts: [{ text: response.text }] });
  }
}

await main();`,
      },
      {
        id: 'chat-sessions',
        title: 'Chat Sessions: The Easier Method',
        content:
          "Google provides `ai.chats.create()` which manages history **automatically**. Call `chat.sendMessage()` and the session appends both sides for you — no manual `history` array, much cleaner code.",
        code: `import 'dotenv/config';
import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({});

async function main() {
  // Chat session manages history automatically
  const chat = ai.chats.create({ model: "gemini-2.5-flash" });

  while (true) {
    const userMessage = readlineSync.question("You: ");
    if (userMessage.toLowerCase() === "exit") break;

    const response = await chat.sendMessage({ message: userMessage });
    console.log("AI:", response.text);
  }
}

await main();`,
      },
      {
        id: 'system-instructions',
        title: 'System Instructions',
        content:
          "A **system instruction** tells the AI how to behave for the **entire conversation** — its personality and rules. Regular messages are the conversation; `systemInstruction` is the character it plays. A \"JavaScript tutor\" explains with analogies and checks understanding; a \"pirate\" answers everything in pirate speak. Set it once when you create the chat.",
        code: `// JavaScript tutor
const chat = ai.chats.create({
  model: "gemini-2.5-flash",
  systemInstruction:
    "You are a JavaScript tutor for beginners. Use simple analogies, always give code examples, and check understanding before continuing.",
});

// Senior code reviewer
const reviewer = ai.chats.create({
  model: "gemini-2.5-flash",
  systemInstruction:
    "You are a senior code reviewer. Point out bugs and security issues, suggest better approaches, and explain WHY something is wrong (not just what). Be constructive, not harsh.",
});

// Pirate bot (fun!)
const pirate = ai.chats.create({
  model: "gemini-2.5-flash",
  systemInstruction: "You are a pirate. Always talk like a pirate.",
});`,
      },
      {
        id: 'thinking-config',
        title: 'Thinking Configuration',
        content:
          "Control thinking with `thinkingConfig.thinkingBudget`. `0` gives a direct answer with no intermediate steps; `500` allows up to 500 intermediate tokens; `1000` allows more. Match it to difficulty: `0` for \"what does `const` mean?\", `500` to debug a closure, `1000` to explain the event loop from first principles.",
        code: `const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: "What is 547 + 832?",
  config: {
    thinkingConfig: {
      thinkingBudget: 0,     // 0 = direct answer, no intermediate steps
      // thinkingBudget: 500  // up to 500 "thinking" tokens
      // thinkingBudget: 1000 // up to 1000 "thinking" tokens
    },
  },
});`,
      },
      {
        id: 'tokens-cost',
        title: 'Understanding Tokens & Cost',
        content:
          "A **token** is a chunk of text the model processes (`\"Hello world\"` = 2 tokens). Every API call is billed for the `systemInstruction` (**sent every time**), the full conversation **history** (which grows each turn), your new message, and the model's response. **Keep `systemInstruction` short** — a 200-token instruction is charged on every single message. Concise instructions plus trimming old history keep costs down.",
        code: `const chat = ai.chats.create({
  model: "gemini-2.5-flash",
  systemInstruction: "You are a helpful tutor.", // ~100 tokens, sent EVERY call
});

// Each request re-sends: systemInstruction + full history + new message
// Msg 1: 100 (system) +  0 (history) + 2 (msg) = 102 input tokens
// Msg 2: 100 (system) + 22 (history) + 3 (msg) = 125 input tokens
// systemInstruction is charged on EVERY request -> keep it short!`,
      },
      {
        id: 'complete-example',
        title: 'Complete Example: Interactive Learning Assistant',
        content:
          "Putting it together: a chat session with a concise tutor `systemInstruction`, a read-loop for user input, an `exit` guard, error handling, and a smart `thinkingBudget` that only spends thinking tokens when the question looks complex (long, or mentions *why / explain / debug*).",
        code: `import 'dotenv/config';
import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({});

async function main() {
  console.log("Programming Learning Assistant — type 'exit' to quit");

  const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    systemInstruction:
      "You are a programming tutor. Use first-principles thinking, explain WHY not just WHAT, give practical examples, keep it concise.",
  });

  while (true) {
    const userMessage = readlineSync.question("You: ");
    if (userMessage.toLowerCase() === "exit") break;
    if (!userMessage.trim()) continue;

    try {
      // Spend thinking tokens only when the question looks complex
      const needsThinking =
        userMessage.length > 50 || /why|explain|debug/i.test(userMessage);

      const response = await chat.sendMessage({
        message: userMessage,
        config: {
          thinkingConfig: { thinkingBudget: needsThinking ? 500 : 0 },
        },
      });

      console.log("AI:", response.text);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
}

await main();`,
      },
      {
        id: 'key-takeaways',
        title: 'Key Takeaways & Mental Model',
        content:
          "**Remember:** (1) LLMs **predict tokens** — they do not think or understand. (2) \"Thinking\" is just **more token predictions**; it helps complex problems and wastes money on simple ones. (3) LLMs have **no memory** — *you* resend the history every call, and it grows. (4) `systemInstruction` is **sent every request**, so keep it short. (5) Use thinking **strategically**: budget > 0 for complex, 0 for simple.\n\n**Mental model:** user types → your code appends to history → send `systemInstruction` + full history + new message → the API predicts tokens one by one → append the response → repeat.",
      },
      {
        id: 'practice',
        title: 'Practice Exercises',
        content:
          "Build these to lock it in: (1) a **basic chatbot** that remembers previous messages and quits on `quit`; (2) a **math tutor** using `systemInstruction` + thinking for step-by-step solutions; (3) a **code reviewer** that flags issues and suggests fixes using thinking; (4) **token optimization** — measure usage, tighten the `systemInstruction`, add history trimming, and compare cost before and after. Docs: `https://ai.google.dev/`.",
      },
    ],
  },
  {
    genaiDay: 7,
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
    genaiDay: 8,
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
    genaiDay: 9,
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
    genaiDay: 10,
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
    genaiDay: 11,
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
    genaiDay: 12,
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
    genaiDay: 13,
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
    genaiDay: 14,
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
