import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ZOD = 'https://zod.dev/';
const LANGCHAIN_STRUCT = 'https://js.langchain.com/docs/concepts/structured_outputs/';

const LEARNT_TODAY = [
  { title: 'Tokens & context windows', text: 'models read/write tokens (~¾ of a word); the context window is the max tokens they can see at once' },
  { title: 'Cost-aware thinking', text: 'you pay per token in and out — trim prompts, cap outputs, and pick the cheapest model that’s good enough' },
  { title: 'Temperature', text: 'higher = more random/creative, lower = more focused/deterministic; agents usually want it low' },
  { title: 'top_p', text: 'nucleus sampling — keep only the most-likely tokens summing to p; another knob for randomness' },
  { title: 'max_tokens', text: 'a hard cap on the reply length — protects cost and latency, and forces concise output' },
  { title: 'Chat vs tools', text: 'plain chat returns prose; tool/structured calls return typed data — agents need the second kind' },
  { title: 'Zod as a contract', text: 'define the exact shape you expect; the model must fill it, and you validate before trusting it' },
  { title: 'Validate → repair → fallback', text: 'if output fails the schema, ask the model to fix it; if it still fails, fall back safely — never crash' },
];

const BASICS = [
  {
    icon: '🎟️', title: 'Tokens & Windows', titleClass: 'card-title-cyan', subtitle: 'The Unit Of Cost',
    description:
      'Everything is tokens — input and output. The context window bounds how much the model can see. Long histories cost money and can overflow, so budget tokens like a resource.',
    code: '// ~1 token ≈ 0.75 words\n// cost = (in_tokens + out_tokens) × price\n// trim history, cap output, summarise old turns',
  },
  {
    icon: '🎛️', title: 'Sampling Knobs', titleClass: 'card-title-purple', subtitle: 'temp · top_p · max',
    description:
      'Temperature and top_p control randomness; max_tokens caps length. For reliable agents, keep temperature low and cap output — you want predictable, parseable answers, not creative surprises.',
    code: 'getModel("smart").invoke(msg, {\n  temperature: 0,      // deterministic\n  topP: 1,\n  maxTokens: 512,      // bound cost + latency\n});',
  },
];

const JSONFIRST = [
  {
    icon: '🚫', title: 'Why Strings Lie', titleClass: 'card-title-cyan', subtitle: 'Prose ≠ Data',
    description:
      'Free-text replies look fine until you parse them: missing fields, extra prose, wrong format. Ad-hoc string parsing breaks in production. Structured outputs make the model return real data.',
    code: '// ❌ "Sure! The answer is 42 (probably)."\n// → regex hell, brittle, silent failures\n// ✅ { "answer": 42, "confidence": 0.9 }',
  },
  {
    icon: '📐', title: 'Zod Schemas', titleClass: 'card-title-purple', subtitle: 'Contracts For Output',
    description:
      'Define the exact shape you want with Zod. Bind it to the model so every reply is typed and validated. The schema is a contract the model must satisfy — and TypeScript infers the type for free.',
    code: 'const Answer = z.object({\n  answer: z.string(),\n  confidence: z.number().min(0).max(1),\n});\nconst model = getModel("smart").withStructuredOutput(Answer);',
  },
  {
    icon: '🛡️', title: 'Validate → Repair → Fallback', titleClass: 'card-title-amber', subtitle: 'Stay Stable',
    description:
      'Never trust output blindly. Validate against the schema; if it fails, ask the model to repair it; if it still fails, return a safe fallback. This three-step guard keeps agents from crashing.',
    code: '// 1. parse = Answer.safeParse(raw)\n// 2. if !parse.success → re-ask "fix to schema"\n// 3. still bad → fallback { answer:"", confidence:0 }',
  },
];

const RESOURCES = [
  {
    icon: '📗', title: 'Zod', titleClass: 'card-title-cyan', subtitle: 'Schema Validation',
    description:
      'TypeScript-first schema library — the backbone of the JSON-first approach. Define once, validate everywhere, infer types automatically.',
    link: { href: ZOD, label: 'Open Zod docs →', external: true },
  },
  {
    icon: '📘', title: 'Structured Outputs', titleClass: 'card-title-purple', subtitle: 'LangChain.js',
    description:
      'withStructuredOutput binds a Zod schema to a model so replies come back typed and validated — no manual JSON parsing.',
    link: { href: LANGCHAIN_STRUCT, label: 'Open the guide →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Mini Project', titleClass: 'card-title-amber', subtitle: 'Day 47 Preview',
    description:
      'Tomorrow — build a strict Q&A pipeline in TypeScript: centralized env, a reusable LLM wrapper, and a CLI that returns guaranteed JSON for any frontend.',
    link: { href: '/day-047', label: 'Go to Day 47 →' },
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

export default function Day046() {
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
          <Link to="/day-045" className="day001-nav-btn day001-nav-prev">← Day 45</Link>
          <p className="day001-datetime">Agentic AI Day 46</p>
          <Link to="/day-047" className="day001-nav-btn day001-nav-next">Day 47 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>TypeScript</span><span>JSON-First</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 46 <span aria-hidden="true">📐</span></h1>
              <p className="day001-day-theme">LLM FUNDAMENTALS — JSON-FIRST APPROACH</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '46%' }} /></div>

        <p className="day001-summary">
          The fundamentals that keep agents cheap and stable. Everything is <strong>tokens</strong>, bounded by the{' '}
          <strong>context window</strong>, and you pay per token — so trim prompts and cap output. The sampling knobs{' '}
          <strong>temperature</strong>, <strong>top_p</strong> and <strong>max_tokens</strong> trade creativity for
          control; agents keep temperature <strong>low</strong>. The big idea is <strong>JSON-first</strong>: plain
          strings lie (missing fields, stray prose), so bind a <strong>Zod schema</strong> as a contract and get typed,
          validated data back. And always guard with <strong>validate → repair → fallback</strong> so a bad reply is
          fixed or safely handled — <em>never a crash.</em>
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

        <CardSection icon="🎛️" title="LLM BASICS" cards={BASICS} columns={2} />
        <CardSection icon="📐" title="JSON-FIRST" cards={JSONFIRST} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#AgenticAI</span><span>#JSONFirst</span><span>#Zod</span><span>#TypeScript</span>
        </footer>
      </div>
    </div>
  );
}
