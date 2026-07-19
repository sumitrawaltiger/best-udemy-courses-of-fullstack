import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ZOD = 'https://zod.dev/';

const LEARNT_TODAY = [
  { title: 'First real project', text: 'a strict Q&A pipeline in TypeScript that always returns guaranteed, typed JSON' },
  { title: 'Centralized env', text: 'one config module loads and validates keys, so the whole pipeline shares a single source of truth' },
  { title: 'Reusable LLM wrapper', text: 'a thin ask() around the provider factory + Zod schema — call it once, reuse everywhere' },
  { title: 'Schema-bound answers', text: 'the wrapper returns { answer, confidence } validated by Zod — no manual JSON parsing' },
  { title: 'CLI entrypoint', text: 'run it from the terminal: pass a question, get back clean JSON on stdout' },
  { title: 'Frontend-ready', text: 'because the output is guaranteed JSON, any UI (Next.js, mobile) can consume it directly' },
  { title: 'Repair on failure', text: 'if the model’s reply misses the schema, re-ask to fix it before giving up' },
  { title: 'Composable', text: 'this wrapper becomes the building block the search and RAG projects call next' },
];

const BUILD = [
  {
    icon: '🔐', title: 'Centralized Env', titleClass: 'card-title-cyan', subtitle: 'One Source Of Truth',
    description:
      'A single config module loads .env and validates every required key at startup. The rest of the pipeline imports typed values — no scattered process.env reads.',
    code: '// config/env.ts\nimport "dotenv/config";\nexport const env = {\n  OPENAI_API_KEY: must("OPENAI_API_KEY"),\n};',
  },
  {
    icon: '🧰', title: 'Reusable LLM Wrapper', titleClass: 'card-title-purple', subtitle: 'ask() Once',
    description:
      'A thin wrapper binds the provider factory to a Zod schema and returns validated data. Every future project calls this same ask() instead of touching the model directly.',
    code: 'const QA = z.object({ answer: z.string(),\n  confidence: z.number().min(0).max(1) });\nexport async function ask(q: string) {\n  const m = getModel("smart").withStructuredOutput(QA);\n  return m.invoke(q);   // → typed { answer, confidence }\n}',
  },
];

const PIPELINE = [
  {
    icon: '⌨️', title: 'CLI Entrypoint', titleClass: 'card-title-cyan', subtitle: 'Question In, JSON Out',
    description:
      'A tiny CLI reads a question from the args, calls ask(), and prints guaranteed JSON to stdout. It runs like any backend command — scriptable, testable, and pipe-friendly.',
    code: '// src/index.ts\nconst q = process.argv.slice(2).join(" ");\nconst out = await ask(q);\nconsole.log(JSON.stringify(out, null, 2));',
  },
  {
    icon: '📤', title: 'Guaranteed JSON', titleClass: 'card-title-purple', subtitle: 'Ready For Any UI',
    description:
      'Because the schema is enforced, the output is always the same shape. A Next.js page, a mobile app or another service can consume it with zero defensive parsing.',
    code: '// stdout:\n{ "answer": "TypeScript is a typed superset of JS.",\n  "confidence": 0.94 }\n// any frontend can trust this shape',
  },
  {
    icon: '🔁', title: 'Validate & Repair', titleClass: 'card-title-amber', subtitle: 'Never Crash',
    description:
      'If the model returns something off-schema, re-ask it to fix the output before falling back. The pipeline stays stable even when a model misbehaves.',
    code: '// safeParse → if fail, re-ask "return valid JSON"\n// still failing → safe fallback object\n// caller always gets a valid QA result',
  },
];

const RESOURCES = [
  {
    icon: '📗', title: 'Zod', titleClass: 'card-title-cyan', subtitle: 'The Contract',
    description:
      'The schema library enforcing the Q&A shape end to end. One definition gives you validation plus the TypeScript type.',
    link: { href: ZOD, label: 'Open Zod docs →', external: true },
  },
  {
    icon: '🧱', title: 'A Real Building Block', titleClass: 'card-title-purple', subtitle: 'Reused Next',
    description:
      'This env + wrapper + CLI pattern is the template for every project ahead. Search, Light RAG and LangGraph all build on exactly this.',
    footer: 'env → ask() → CLI → guaranteed JSON',
  },
  {
    icon: '🔜', title: 'Next: LangChain.js', titleClass: 'card-title-amber', subtitle: 'Day 48 Preview',
    description:
      'Coming up — LangChain.js fundamentals: prompt templates, output parsers, and Runnables & LCEL as the mental model for composing everything.',
    link: { href: '/day-048', label: 'Go to Day 48 →' },
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

export default function Day047() {
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
          <Link to="/day-046" className="day001-nav-btn day001-nav-prev">← Day 46</Link>
          <p className="day001-datetime">Agentic AI Day 47</p>
          <Link to="/day-048" className="day001-nav-btn day001-nav-next">Day 48 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>TypeScript</span><span>Mini Project</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 47 <span aria-hidden="true">📤</span></h1>
              <p className="day001-day-theme">JSON-FIRST MINI PROJECT — STRICT Q&amp;A</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '47%' }} /></div>

        <p className="day001-summary">
          The first real build: a <strong>strict Q&amp;A pipeline</strong> in TypeScript that always returns{' '}
          <strong>guaranteed JSON</strong>. It has three clean parts — <strong>centralized env</strong> (one config
          module, keys validated at boot), a <strong>reusable LLM wrapper</strong> (<code>ask()</code> around the
          provider factory + a Zod schema), and a <strong>CLI entrypoint</strong> that takes a question and prints{' '}
          <code>{'{ answer, confidence }'}</code> to stdout. Because the output shape is enforced, any frontend —
          Next.js, mobile, another service — can consume it with <strong>zero defensive parsing</strong>. Off-schema
          replies are <strong>repaired</strong> before any fallback. <em>This is the template every later project reuses.</em>
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

        <CardSection icon="🧰" title="ENV & WRAPPER" cards={BUILD} columns={2} />
        <CardSection icon="📤" title="THE PIPELINE" cards={PIPELINE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#AgenticAI</span><span>#JSONFirst</span><span>#TypeScript</span><span>#Zod</span>
        </footer>
      </div>
    </div>
  );
}
