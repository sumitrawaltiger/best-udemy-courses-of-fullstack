import { useState } from 'react';
import { Link } from 'react-router-dom';
import './GenAIStudyNotes.css';

const MODULES = [
  {
    num: 1,
    title: 'What is Generative AI?',
    tag: 'Foundations',
    tagColor: 'blue',
    intro: 'Generative AI creates new content from instructions, learned patterns and supplied context.',
    blocks: [
      {
        type: 'callout',
        variant: 'info',
        label: 'Definition',
        text: 'Generative AI is a class of AI systems that can generate new content such as text, code, images, audio, video and structured outputs.',
      },
      {
        type: 'list',
        title: 'Common outputs',
        items: [
          'Text — explanations, emails, documentation and summaries.',
          'Code — functions, SQL, tests and application scaffolding.',
          'Images — illustrations, concepts and marketing assets.',
          'Audio and video — speech, music and synthetic media.',
          'Documents — extraction, classification, summarization and question answering.',
        ],
      },
      {
        type: 'code',
        label: 'Example flow',
        code: 'User Prompt → Gen AI Model → Generated Response',
      },
      {
        type: 'table',
        title: 'Traditional AI vs Generative AI',
        headers: ['Traditional / Predictive AI', 'Generative AI'],
        rows: [
          ['Usually predicts a label, score or value from input data.', 'Generates new content from instructions and context.'],
          ['Example: Student data → ML model → Pass / Fail.', 'Example: User prompt → LLM → Explanation / Code / Summary.'],
          ['Often optimized for prediction accuracy.', 'Often optimized for useful, coherent and context-aware generation.'],
        ],
      },
    ],
  },
  {
    num: 2,
    title: 'What is Agentic AI?',
    tag: 'Core Concept',
    tagColor: 'green',
    intro: 'Agentic AI extends Gen AI with goals, decisions, tools, state and multi-step execution.',
    blocks: [
      {
        type: 'list',
        title: 'Five pillars',
        items: [
          'Goal — define the desired outcome.',
          'Decision-making — determine what action should happen next.',
          'Tools — APIs, databases, search, code execution or enterprise services.',
          'State — retain relevant information across workflow steps.',
          'Execution — act → observe → decide → continue or stop.',
        ],
      },
      {
        type: 'callout',
        variant: 'highlight',
        label: 'Simple distinction',
        text: 'Gen AI mainly generates content. Agentic AI uses a model inside a controlled workflow that decides which actions to perform to reach a goal.',
      },
      {
        type: 'table',
        title: 'Gen AI vs Agentic AI',
        headers: ['Gen AI', 'Agentic AI'],
        rows: [
          ['Prompt → Model → Response', 'Goal → Decide → Tool/Action → Observe → Next Action → Result'],
          ['Primarily generation', 'Goal-oriented task execution'],
          ['Often one main generation step', 'Often multi-step and iterative'],
        ],
      },
    ],
  },
  {
    num: 3,
    title: 'Gen AI Application Architecture',
    tag: 'Architecture',
    tagColor: 'purple',
    intro: 'An enterprise Gen AI application is more than an LLM.',
    blocks: [
      {
        type: 'callout',
        variant: 'info',
        label: 'How it works',
        text: 'The application receives a user request, prepares the prompt, invokes a pre-trained LLM and returns the generated result. The orchestration layer can also connect the model to retrieval, databases, APIs, MCP tools, prompt templates and application state.',
      },
      {
        type: 'list',
        title: 'Architecture layers',
        items: [
          'User Interface — the frontend the user interacts with.',
          'AI Application / Orchestrator — handles input/output routing (IGR / OGR).',
          'LangChain / LangGraph — orchestration framework layer.',
          'LLM — the pre-trained language model (e.g. GPT, Claude, Gemini).',
          'RAG — retrieval-augmented generation from documents.',
          'DB — relational or NoSQL database.',
          'API — external service integrations.',
          'MCP — Model Context Protocol tools.',
          'Prompt Templates — reusable structured prompts.',
          'Vector DB — stores document embeddings (fed from DOCS).',
        ],
      },
      {
        type: 'code',
        label: 'Layers summary',
        code: 'User Interface → AI Application / Orchestrator → LLM, RAG, Databases, APIs and Tools',
      },
    ],
  },
  {
    num: 4,
    title: 'What is an LLM?',
    tag: 'Foundations',
    tagColor: 'blue',
    intro: 'LLM = Large Language Model — a machine-learning model trained on very large collections of text and code so that it can model language patterns and generate sequences of tokens.',
    blocks: [
      {
        type: 'list',
        title: 'Key concepts',
        items: [
          'Token — a unit of text processed by the model.',
          'Prompt — instructions and context supplied to the model.',
          'Inference — generating output from a trained model.',
          'Context window — the amount of context the model can process for a request.',
          'Temperature — controls generation variability; lower values generally produce more deterministic output.',
        ],
      },
      {
        type: 'list',
        title: 'Examples',
        items: ['OpenAI GPT', 'Google Gemini', 'Meta Llama', 'Anthropic Claude'],
      },
      {
        type: 'callout',
        variant: 'highlight',
        label: 'Important',
        text: 'An LLM is not simply a fixed-answer database. It generates output from learned patterns and the context supplied at inference time. This is why grounding, validation and guardrails are important.',
      },
    ],
  },
  {
    num: 5,
    title: 'Hosted / Paid LLM vs Local LLM',
    tag: 'Infrastructure',
    tagColor: 'amber',
    intro: 'Choose the deployment model based on quality, cost, privacy, latency and operational requirements.',
    blocks: [
      {
        type: 'callout',
        variant: 'info',
        label: 'Teaching note',
        text: 'Distinguish commercial hosted APIs from locally running open-weight models. A local model may have no per-request provider fee, but hardware, electricity, GPU memory and maintenance still have costs.',
      },
      {
        type: 'table',
        title: 'Comparison',
        headers: ['Aspect', 'Hosted / Paid API', 'Local / Self-hosted'],
        rows: [
          ['Execution', 'Provider infrastructure', 'Developer or organization infrastructure'],
          ['Access', 'API key + SDK / HTTP', 'Local runtime / API endpoint'],
          ['Cost', 'Usually usage-based', 'No provider API fee; infrastructure costs remain'],
          ['Setup', 'Fast to start', 'Requires runtime and model setup'],
          ['Privacy', 'Depends on provider and service configuration', 'Can keep inference inside controlled infrastructure'],
          ['Examples', 'OpenAI GPT, Gemini, Claude APIs', 'Llama-family and other supported local models'],
        ],
      },
      {
        type: 'code',
        label: 'Flows',
        code: `Hosted GPT flow: User → UI → Backend → Prompt Template → LLM API → Response\nOllama flow:     User → UI → Backend → Prompt → Ollama Runtime → Local LLM → Response`,
      },
    ],
  },
  {
    num: 6,
    title: 'Prompt Engineering',
    tag: 'Techniques',
    tagColor: 'cyan',
    intro: 'Design prompts to make model output more useful, consistent and controllable.',
    blocks: [
      {
        type: 'callout',
        variant: 'info',
        label: 'Strong prompt',
        text: 'A strong prompt usually specifies the role, task, context, constraints and expected output format.',
      },
      {
        type: 'code',
        label: 'Prompt Template',
        code: `You are a Java trainer.\nExplain {topic} for a beginner.\nUse simple language, one real-world example and five interview questions.\nReturn the answer using headings and bullet points.`,
      },
      {
        type: 'list',
        title: 'Prompting techniques',
        items: [
          'Zero-Shot — ask the model to perform a task without providing examples.',
          'Few-Shot — provide a small number of examples so the model infers the expected pattern.',
          'Chain-of-Thought — complex tasks may benefit from structured intermediate work.',
        ],
      },
      {
        type: 'code',
        label: 'Zero-Shot example',
        code: `Classify this review as Positive, Negative or Neutral: "The course content is useful."`,
      },
      {
        type: 'code',
        label: 'Few-Shot example',
        code: `Input: Great product → Sentiment: Positive\nInput: Very poor support → Sentiment: Negative\nInput: The product is okay → Sentiment: ?`,
      },
      {
        type: 'callout',
        variant: 'highlight',
        label: 'Chain-of-Thought',
        text: 'In production, prefer concise plans, verifiable intermediate outputs and explicit checks rather than exposing private internal reasoning.',
      },
    ],
  },
  {
    num: 7,
    title: 'RAG Architecture',
    tag: 'RAG',
    tagColor: 'green',
    intro: 'RAG = Retrieval-Augmented Generation. Combines retrieval from an external knowledge source with LLM generation.',
    blocks: [
      {
        type: 'callout',
        variant: 'info',
        label: 'When to use',
        text: 'Useful when answers need private, domain-specific or frequently changing information.',
      },
      {
        type: 'code',
        label: 'Core RAG flow',
        code: `Documents → Chunking → Embeddings → Vector DB → Query → Similarity Search → Context → Prompt → LLM → Answer`,
      },
      {
        type: 'list',
        title: 'RAG components',
        items: [
          'Documents — PDFs, Word files, web pages, manuals, policies and knowledge bases.',
          'Chunking — split documents into smaller, meaningful pieces.',
          'Embedding — convert each chunk into a numerical vector.',
          'Vector database — store vectors together with metadata.',
          'Retriever — find relevant chunks for the query.',
          'Prompt assembly — combine user question and retrieved context.',
          'LLM — generate a grounded answer.',
        ],
      },
    ],
  },
  {
    num: 8,
    title: 'Vector Databases',
    tag: 'RAG',
    tagColor: 'green',
    intro: 'Semantic retrieval can find relevant content even when the wording of the query differs from the wording in the source document.',
    blocks: [
      {
        type: 'table',
        title: 'Key terms',
        headers: ['Term', 'Meaning'],
        rows: [
          ['Embedding', 'Numerical representation of content for semantic comparison.'],
          ['Vector Database', 'System optimized for storing and searching vectors, often with metadata filters.'],
          ['Similarity Search', 'Find vectors mathematically close to the query vector.'],
          ['Metadata', 'Source, page, category, timestamp and other attributes.'],
        ],
      },
    ],
  },
  {
    num: 9,
    title: 'Gen AI Application with RAG',
    tag: 'RAG',
    tagColor: 'green',
    intro: 'Think of a RAG application as two related pipelines.',
    blocks: [
      {
        type: 'table',
        title: 'Two pipelines',
        headers: ['Ingestion Pipeline', 'Query Pipeline'],
        rows: [
          ['Load documents', 'Receive user question'],
          ['Parse / clean content', 'Create query embedding'],
          ['Split into chunks', 'Search vector database'],
          ['Create embeddings', 'Retrieve top relevant chunks'],
          ['Store vectors + metadata', 'Build grounded prompt'],
          ['Repeat when knowledge changes', 'Call LLM and return answer'],
        ],
      },
      {
        type: 'callout',
        variant: 'highlight',
        label: 'Quality controls',
        text: 'Choose appropriate chunk sizes, preserve metadata, tune top-k retrieval, filter irrelevant content, ground answers in retrieved evidence and evaluate retrieval separately from generation.',
      },
    ],
  },
  {
    num: 10,
    title: 'LangChain Introduction',
    tag: 'Frameworks',
    tagColor: 'purple',
    intro: 'LangChain provides an ecosystem for composing LLM application components.',
    blocks: [
      {
        type: 'list',
        title: 'What LangChain provides',
        items: [
          'Prompt templates for reusable instructions.',
          'Chat model integrations for different providers and runtimes.',
          'Document loaders and text splitters for RAG pipelines.',
          'Retrievers for semantic knowledge access.',
          'Tools for APIs, databases and external actions.',
          'Runnable pipelines / chains for composing multiple steps.',
          'Agent abstractions for tool selection and iterative execution.',
        ],
      },
      {
        type: 'callout',
        variant: 'highlight',
        label: 'Mental model',
        text: 'LangChain acts as an orchestration layer connecting application logic with models, prompts, retrieval and tools.',
      },
    ],
  },
  {
    num: 11,
    title: 'Agentic AI with LangChain',
    tag: 'Frameworks',
    tagColor: 'purple',
    intro: 'An agent can select an appropriate tool based on the user\'s goal.',
    blocks: [
      {
        type: 'code',
        label: 'Example',
        code: `"Check my order and tell me the delivery date."\n→ agent selects order-status API\n→ receives result\n→ produces final response`,
      },
      {
        type: 'list',
        title: 'Agent loop steps',
        items: [
          'Define the model and system instructions.',
          'Register tools with clear names, descriptions and input schemas.',
          'Allow tool selection when necessary.',
          'Execute the selected tool and return its observation.',
          'Continue until the task is complete or a safe stopping condition is reached.',
        ],
      },
      {
        type: 'callout',
        variant: 'warning',
        label: 'Production caution',
        text: 'Tool permissions, input validation, timeouts, retries, logging and human approval may be required for high-impact actions.',
      },
    ],
  },
  {
    num: 12,
    title: 'LangGraph Introduction',
    tag: 'Frameworks',
    tagColor: 'purple',
    intro: 'Graph-based orchestration is useful for stateful, branching and iterative agent workflows.',
    blocks: [
      {
        type: 'callout',
        variant: 'info',
        label: 'What it is',
        text: 'LangGraph is designed for building stateful agent workflows as graphs. Developers can model nodes, edges, conditional transitions and shared state explicitly.',
      },
      {
        type: 'list',
        title: 'Core concepts',
        items: [
          'State — information carried across workflow steps.',
          'Node — a unit of work such as an LLM, retriever or tool call.',
          'Edge — determines the next step.',
          'Conditional edge — routes execution based on state or a result.',
          'Checkpointing — can support resumable workflows when configured and designed for that purpose.',
        ],
      },
      {
        type: 'code',
        label: 'Example graph flow',
        code: `START → Understand → Retrieve → Decide → Tool → Validate → Retry / Retrieve More → Final Response → END`,
      },
    ],
  },
  {
    num: 13,
    title: 'Multi-Agent Systems with CrewAI',
    tag: 'Multi-Agent',
    tagColor: 'amber',
    intro: 'Divide a larger task among specialized agents when specialization adds value.',
    blocks: [
      {
        type: 'callout',
        variant: 'info',
        label: 'What it is',
        text: 'A multi-agent system gives different agents separate roles, goals, tools and expected outputs.',
      },
      {
        type: 'table',
        title: 'Example agent roles',
        headers: ['Agent', 'Responsibility'],
        rows: [
          ['Researcher', 'Find important topics, skills and project ideas.'],
          ['Writer', 'Convert research into structured, student-friendly content.'],
          ['Reviewer (optional)', 'Check completeness, correctness, tone and formatting.'],
        ],
      },
      {
        type: 'code',
        label: 'Example flow',
        code: `Course Content Generator → Researcher → Writer → Reviewer → Final Content`,
      },
      {
        type: 'callout',
        variant: 'warning',
        label: 'Caution',
        text: 'Use multiple agents when specialization provides a real benefit. Do not add agents merely to make an architecture more complex.',
      },
    ],
  },
  {
    num: 14,
    title: 'MCP — Model Context Protocol',
    tag: 'Protocol',
    tagColor: 'cyan',
    intro: 'MCP provides a standardized way for AI applications to connect with external tools and resources through a defined protocol.',
    blocks: [
      {
        type: 'list',
        title: 'MCP components',
        items: [
          'MCP Server — exposes tools and resources.',
          'MCP Client — the AI application or agent connecting to the server.',
          'Tool — an action the client can invoke.',
          'Resource — data or context exposed to the client.',
        ],
      },
      {
        type: 'code',
        label: 'MCP flow',
        code: `User → AI App / Agent → MCP Client → MCP Server → Tool / Resource → Result → Agent → User`,
      },
      {
        type: 'callout',
        variant: 'highlight',
        label: 'Key benefit',
        text: 'Standardized connectivity can reduce one-off integrations and make agent capabilities easier to reuse.',
      },
    ],
  },
  {
    num: 15,
    title: 'Cloud Deployment',
    tag: 'Deployment',
    tagColor: 'red',
    intro: 'Apply standard software-engineering practices plus Gen AI-specific cost, security and observability controls.',
    blocks: [
      {
        type: 'list',
        title: 'Deployment stack',
        items: [
          'UI — Streamlit, React, Angular or another frontend.',
          'Backend — FastAPI, Flask, Spring Boot or another API framework.',
          'Model — hosted LLM API or self-hosted inference.',
          'Knowledge — object storage + document processing + vector database.',
          'Data — SQL / NoSQL database as required.',
          'Security — secret manager, authentication, authorization and validation.',
          'Observability — logs, traces, latency, token usage, retrieval quality and error metrics.',
        ],
      },
      {
        type: 'code',
        label: 'Typical deployment',
        code: `User → Web UI → Backend API → Orchestration → LLM / RAG / Tools → Databases & External Services`,
      },
    ],
  },
  {
    num: 16,
    title: 'Interview Guidance',
    tag: 'Interview',
    tagColor: 'red',
    intro: 'Focus on architecture, trade-offs and your actual implementation decisions.',
    blocks: [
      {
        type: 'list',
        title: 'Common interview questions',
        items: [
          'What is Generative AI? How is it different from traditional ML?',
          'What is an LLM and what are tokens?',
          'Explain zero-shot and few-shot prompting.',
          'What is RAG and why is it required?',
          'Explain chunking, embeddings, vector databases and similarity search.',
          'How would you reduce hallucinations in a RAG application?',
          'LangChain vs LangGraph — when would you use each?',
          'What is an AI agent and what makes an application agentic?',
          'How do tools and APIs fit into an agent workflow?',
          'What is a multi-agent system and when is it useful?',
          'What is MCP? Explain MCP client and MCP server.',
          'How would you secure and monitor a production Gen AI application?',
        ],
      },
      {
        type: 'table',
        title: 'Project Explanation Template',
        headers: ['Area', 'What to explain'],
        rows: [
          ['Problem', 'What user or business problem did the project solve?'],
          ['Architecture', 'UI → Backend → Orchestrator → LLM / RAG / Tools.'],
          ['Data', 'What documents, databases or APIs were used?'],
          ['Model', 'Why was the selected model/runtime appropriate?'],
          ['Prompt', 'How were instructions and output format designed?'],
          ['Retrieval', 'How were documents chunked, embedded and retrieved?'],
          ['Evaluation', 'How was answer quality measured?'],
          ['Security', 'How were keys, permissions and sensitive data protected?'],
          ['Deployment', 'Where and how was the application deployed?'],
        ],
      },
      {
        type: 'callout',
        variant: 'highlight',
        label: 'Strong interview answer pattern',
        text: 'Problem → Architecture → Technology Choice → Implementation → Challenges → Trade-offs → Result.',
      },
    ],
  },
];

const QUICK_REVISION = [
  { concept: 'Gen AI', remember: 'Generates new content from prompts and context.' },
  { concept: 'Agentic AI', remember: 'Uses goals, decisions, tools and state for multi-step tasks.' },
  { concept: 'LLM', remember: 'Large model trained to process and generate language/token sequences.' },
  { concept: 'Prompt', remember: 'Instruction + context + constraints + expected output.' },
  { concept: 'RAG', remember: 'Retrieve external knowledge and provide it to the LLM as context.' },
  { concept: 'Embedding', remember: 'Numerical representation used for semantic comparison/search.' },
  { concept: 'Vector DB', remember: 'Stores and searches embeddings, often with metadata filters.' },
  { concept: 'LangChain', remember: 'Orchestration for models, prompts, retrieval and tools.' },
  { concept: 'LangGraph', remember: 'Graph-based, stateful orchestration for complex workflows.' },
  { concept: 'CrewAI', remember: 'Role/task-oriented multi-agent orchestration.' },
  { concept: 'MCP', remember: 'Protocol for connecting AI clients with tools/resources.' },
  { concept: 'Ollama', remember: 'Local runtime for running supported LLMs on your infrastructure.' },
];

const TAG_COLORS = {
  blue: '#3b82f6', green: '#22c55e', purple: '#a855f7',
  amber: '#f59e0b', cyan: '#06b6d4', red: '#ef4444',
};

function Block({ block }) {
  if (block.type === 'list') return (
    <div className="gn-block">
      {block.title && <h4 className="gn-block-title">{block.title}</h4>}
      <ul className="gn-list">
        {block.items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    </div>
  );
  if (block.type === 'table') return (
    <div className="gn-block">
      {block.title && <h4 className="gn-block-title">{block.title}</h4>}
      <div className="gn-table-wrap">
        <table className="gn-table">
          <thead><tr>{block.headers.map(h => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>{block.rows.map((row, i) => (
            <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
  if (block.type === 'code') return (
    <div className="gn-block">
      {block.label && <span className="gn-code-label">{block.label}</span>}
      <pre className="gn-code">{block.code}</pre>
    </div>
  );
  if (block.type === 'callout') return (
    <div className={`gn-callout gn-callout--${block.variant}`}>
      <span className="gn-callout-label">{block.label}</span>
      <p>{block.text}</p>
    </div>
  );
  return null;
}

export default function GenAIStudyNotes() {
  const [active, setActive] = useState(null);

  return (
    <div className="gn-page">
      {/* Header */}
      <header className="gn-header">
        <div className="gn-header-inner">
          <div className="gn-breadcrumb">
            <Link to="/agentic-day-1" className="gn-breadcrumb-link">← Agentic AI Day 1</Link>
          </div>
          <div className="gn-header-badge">Ashok IT · Student Study Notes</div>
          <h1 className="gn-header-title">Generative AI &amp; Agentic AI</h1>
          <p className="gn-header-sub">
            A practical and interview-oriented guide to LLMs, prompting, RAG, vector databases,
            LangChain, LangGraph, CrewAI, MCP and cloud deployment.
          </p>
          <div className="gn-header-stats">
            <span><strong>16</strong> modules</span>
            <span><strong>Ashok IT</strong> · Skill 3</span>
            <span><strong>Days 201–300</strong> of the journey</span>
          </div>
          <a
            href="/agentic-notes/gen-ai-and-agentic-ai.pdf"
            download
            className="gn-download-btn"
          >
            ⬇ Download PDF
          </a>
        </div>
      </header>

      {/* Module nav pills */}
      <nav className="gn-nav">
        {MODULES.map(m => (
          <button
            key={m.num}
            className={`gn-nav-pill${active === m.num ? ' gn-nav-pill--active' : ''}`}
            style={active === m.num ? { borderColor: TAG_COLORS[m.tagColor], color: TAG_COLORS[m.tagColor] } : {}}
            onClick={() => {
              setActive(active === m.num ? null : m.num);
              document.getElementById(`mod-${m.num}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            {m.num}. {m.title.split(' ').slice(0, 3).join(' ')}
          </button>
        ))}
      </nav>

      <main className="gn-main">
        {/* Modules */}
        {MODULES.map(m => (
          <section key={m.num} id={`mod-${m.num}`} className="gn-module">
            <div className="gn-module-head">
              <div className="gn-module-num" style={{ background: TAG_COLORS[m.tagColor] }}>{m.num}</div>
              <div>
                <span className="gn-module-tag" style={{ color: TAG_COLORS[m.tagColor] }}>{m.tag}</span>
                <h2 className="gn-module-title">{m.title}</h2>
              </div>
            </div>
            <p className="gn-module-intro">{m.intro}</p>
            <div className="gn-blocks">
              {m.blocks.map((block, i) => <Block key={i} block={block} />)}
            </div>
          </section>
        ))}

        {/* Quick Revision */}
        <section className="gn-module gn-revision">
          <div className="gn-module-head">
            <div className="gn-module-num" style={{ background: '#e11d48' }}>✓</div>
            <div>
              <span className="gn-module-tag" style={{ color: '#e11d48' }}>Revision</span>
              <h2 className="gn-module-title">Quick Revision</h2>
            </div>
          </div>
          <p className="gn-module-intro">A compact recap for last-minute revision.</p>
          <div className="gn-table-wrap">
            <table className="gn-table gn-table--revision">
              <thead><tr><th>Concept</th><th>Remember</th></tr></thead>
              <tbody>
                {QUICK_REVISION.map(r => (
                  <tr key={r.concept}><td><strong>{r.concept}</strong></td><td>{r.remember}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="gn-callout gn-callout--highlight" style={{ marginTop: '1.5rem' }}>
            <span className="gn-callout-label">Final architecture mindset</span>
            <p>Start with the simplest solution that works. Add RAG when external knowledge is needed, tools when actions are needed, state when workflow context must persist, graphs when orchestration becomes complex, and multiple agents only when specialization provides measurable value.</p>
          </div>
        </section>
      </main>

      <footer className="gn-footer">
        <p>Ashok IT — Generative AI &amp; Agentic AI Student Notes · <a href="https://ashokit.in" target="_blank" rel="noopener noreferrer">ashokit.in</a></p>
        <div className="gn-footer-links">
          <Link to="/agentic-day-1">← Agentic AI Day 1</Link>
          <Link to="/roadmap">Full Roadmap</Link>
        </div>
      </footer>
    </div>
  );
}
