import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LANGCHAIN_JS = 'https://js.langchain.com/docs/introduction/';

const LEARNT_TODAY = [
  { title: 'Project setup', text: 'a clean TS/Node project — tsconfig, scripts, and a tidy folder layout for src, tools and config' },
  { title: 'Env patterns', text: 'centralize secrets in .env, load once, validate keys at startup so a missing key fails loudly, not silently' },
  { title: 'A single provider factory', text: 'one getModel() that returns OpenAI, Gemini or Groq behind the same interface' },
  { title: 'Swap providers freely', text: 'because agent code calls the factory, changing model or vendor is a config change, not a rewrite' },
  { title: 'Hello Agent', text: 'the first callable: input → model → typed output, wrapped as a real function' },
  { title: 'Backend primitive, not a script', text: 'no console spaghetti — a clean async function you could expose over HTTP tomorrow' },
  { title: 'Typed all the way', text: 'TypeScript types on the input and the return value so callers get autocomplete and safety' },
  { title: 'Foundation for everything', text: 'search, RAG and LangGraph will all import this same factory and pattern' },
];

const SETUP = [
  {
    icon: '🛠️', title: 'TS/Node Project', titleClass: 'card-title-cyan', subtitle: 'tsconfig · scripts',
    description:
      'Start with a strict TypeScript setup and clean scripts. A predictable layout (src, tools, config) keeps every future project consistent and importable.',
    code: '// package.json scripts\n"dev": "tsx watch src/index.ts",\n"start": "node dist/index.js"\n// tsconfig: strict true, moduleResolution "bundler"',
  },
  {
    icon: '🔐', title: 'Env Patterns', titleClass: 'card-title-purple', subtitle: 'Fail Loudly',
    description:
      'Keep keys in .env and load them once through a small config module. Validate required keys at boot so a missing OPENAI/GEMINI/GROQ key errors immediately instead of mid-request.',
    code: '// config/env.ts\nimport "dotenv/config";\nfunction need(k){ const v=process.env[k];\n  if(!v) throw new Error(`Missing ${k}`); return v; }\nexport const env = { OPENAI: need("OPENAI_API_KEY") };',
  },
];

const AGENT = [
  {
    icon: '🏭', title: 'Provider Factory', titleClass: 'card-title-cyan', subtitle: 'One Interface',
    description:
      'A single factory returns a model for a role ("fast" vs "smart") and hides the vendor. Agent code never imports OpenAI or Gemini directly — it just asks the factory.',
    code: '// llm/factory.ts\nexport function getModel(kind: "fast" | "smart") {\n  if (kind === "fast") return new ChatGroq({ model: "llama-3.1-8b-instant" });\n  return new ChatOpenAI({ model: "gpt-4o-mini" });\n}',
  },
  {
    icon: '👋', title: 'Hello Agent', titleClass: 'card-title-purple', subtitle: 'A Clean Primitive',
    description:
      'The first callable: a typed async function that takes a prompt, runs it through the factory model, and returns a typed result. It reads like a backend primitive, ready to expose over HTTP.',
    code: 'export async function helloAgent(input: string): Promise<string> {\n  const model = getModel("fast");\n  const res = await model.invoke(input);\n  return String(res.content);\n}',
  },
  {
    icon: '🧱', title: 'Why This Matters', titleClass: 'card-title-amber', subtitle: 'Not A Toy Script',
    description:
      'Because it’s a typed function behind a factory, every later project — search, RAG, LangGraph — reuses it. You’re laying platform foundations, not writing a throwaway demo.',
    footer: 'factory + typed function → reuse everywhere',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'LangChain.js Models', titleClass: 'card-title-cyan', subtitle: 'Chat Models',
    description:
      'ChatOpenAI, ChatGoogleGenerativeAI and ChatGroq all share the same invoke interface — exactly what makes a single factory possible.',
    link: { href: LANGCHAIN_JS, label: 'Open LangChain.js docs →', external: true },
  },
  {
    icon: '🤖', title: 'The Agent Platform', titleClass: 'card-title-purple', subtitle: 'Building Up',
    description:
      'Today’s factory + Hello Agent are brick one. Everything from here plugs into them, per the mindset set on Day 43.',
    footer: 'env → factory → helloAgent → the platform',
  },
  {
    icon: '🔜', title: 'Next: LLM Fundamentals', titleClass: 'card-title-amber', subtitle: 'Day 46 Preview',
    description:
      'Tomorrow — tokens, context windows and cost; temperature / top_p / max_tokens; and the JSON-first approach with Zod schemas as response contracts.',
    link: { href: '/day-046', label: 'Go to Day 46 →' },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">{card.icon}</span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a href={card.link.href} target="_blank" rel="noopener noreferrer" className="day001-card-link">{card.link.label}</a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">{card.link.label}</Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title"><span aria-hidden="true">{icon}</span> {title}</h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (<TopicCard key={card.title} card={card} />))}
      </div>
    </section>
  );
}

export default function Day045() {
  const scaleRef = useRef(null);

  useEffect(() => {
    const wrap = scaleRef.current;
    if (!wrap) return;
    const page = wrap.parentElement;
    const fitToScreen = () => {
      wrap.style.transform = 'none';
      wrap.style.width = '100%';
      if (page) page.style.height = '';
      const pad = 12;
      const scale = Math.min((window.innerHeight - pad) / wrap.scrollHeight, (window.innerWidth - pad) / wrap.scrollWidth);
      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };
    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);
    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) avatar.addEventListener('load', fitToScreen);
    return () => { window.removeEventListener('resize', fitToScreen); observer.disconnect(); };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/" className="day001-nav-btn day001-nav-home">Home</Link>
          <Link to="/day-044" className="day001-nav-btn day001-nav-prev">← Day 44</Link>
          <p className="day001-datetime">Agentic AI Day 45</p>
          <Link to="/day-046" className="day001-nav-btn day001-nav-next">Day 46 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>TypeScript</span><span>Project</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 45 <span aria-hidden="true">👋</span></h1>
              <p className="day001-day-theme">ORIENTATION &amp; “HELLO AGENT” PROJECT</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN · AGENTIC AI</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '45%' }} /></div>

        <p className="day001-summary">
          First code. Set up a strict <strong>TS/Node</strong> project — tsconfig, scripts, and clean{' '}
          <strong>env patterns</strong> that validate keys at startup so a missing key <strong>fails loudly</strong>.
          The centrepiece is a <strong>single provider factory</strong>: one <code>getModel()</code> that returns
          OpenAI, Gemini or Groq behind the same interface, so switching providers is a config change. Then the first{' '}
          <strong>“Hello Agent”</strong> — a typed async function, <code>input → model → typed output</code>, that
          reads like a <strong>backend primitive</strong> you could expose over HTTP, not a throwaway console script.{' '}
          <em>This factory + function is brick one of the platform.</em>
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> — {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🛠️" title="PROJECT & ENV" cards={SETUP} columns={2} />
        <CardSection icon="👋" title="THE HELLO AGENT" cards={AGENT} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#AgenticAI</span><span>#TypeScript</span><span>#NodeJS</span><span>#LangChain</span>
        </footer>
      </div>
    </div>
  );
}
