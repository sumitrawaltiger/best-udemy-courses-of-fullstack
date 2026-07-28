import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DSPY = 'https://dspy.ai/';
const PROMPTING_GUIDE = 'https://www.promptingguide.ai/';

const LEARNT_TODAY = [
  { title: 'Why manual tuning breaks down', text: 'hand-tweaking a prompt doesn\'t scale past a handful of test cases' },
  { title: 'Declarative signatures', text: 'describe input → output, let a compiler search for the best prompt/few-shot combo' },
  { title: 'Few-shot selection', text: 'pick examples similar to the current input, not one fixed static set for everything' },
  { title: 'Prompt compression', text: 'trim redundant instructions and context to cut tokens without losing accuracy' },
  { title: 'Score, don\'t guess', text: 'candidate prompts get ranked against a labeled dev set, not by how they "feel"' },
  { title: 'Bootstrapping', text: 'use a strong model to generate few-shot examples that a cheaper model can then reuse' },
  { title: 'Version prompts like code', text: 'every optimized prompt gets an id and a changelog, same discipline as Day 61' },
  { title: 'Diminishing returns', text: 'past a point, more optimization buys less than better retrieval or a bigger model would' },
];

const CORE = [
  {
    icon: '📝', title: 'Declarative Signatures', titleClass: 'card-title-cyan', subtitle: 'Describe, Don\'t Hand-Write',
    description:
      'State the input/output shape you need; a compiler searches prompt and few-shot combinations to hit it.',
    code: 'sig = "question -> answer"\nprogram = compile(sig, trainset)',
  },
  {
    icon: '🎯', title: 'Few-Shot Selection', titleClass: 'card-title-purple', subtitle: 'Similar, Not Static',
    description:
      'Retrieve the few-shot examples most similar to the current input instead of reusing the same three every time.',
    code: 'examples = retrieve_similar(input, k=3)',
  },
  {
    icon: '🗜️', title: 'Prompt Compression', titleClass: 'card-title-amber', subtitle: 'Fewer Tokens, Same Signal',
    description:
      'Cut redundant instructions and stale context — every token in the prompt costs money and attention.',
    code: 'prompt = compress(prompt, target_tokens=500)',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Optimize One Prompt', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Score a hand-written prompt against a small dev set, then let a compiler search for a better one — compare.',
    code: 'baseline_score vs optimized_score',
  },
  {
    icon: '⚖️', title: 'A/B a Compressed Prompt', titleClass: 'card-title-purple', subtitle: 'Test',
    description: 'Halve the prompt\'s token count and confirm accuracy holds before shipping the shorter version.',
  },
  {
    icon: '🔜', title: 'Next: Evaluating LLM Apps', titleClass: 'card-title-amber', subtitle: 'Day 87 Preview',
    description: 'Tomorrow — RAG metrics, LLM-as-judge, and golden test sets for measuring quality.',
    link: { href: '/agentic-day-87', label: 'Go to Day 87 →' },
  },
];

const RESOURCES = [
  {
    icon: '📐', title: 'Structured Outputs Day', titleClass: 'card-title-cyan', subtitle: 'Day 83',
    description: 'Typed schemas make it easy to score an optimized prompt\'s output automatically.',
    link: { href: '/agentic-day-83', label: 'Open Day 83 →' },
  },
  {
    icon: '📖', title: 'DSPy', titleClass: 'card-title-purple', subtitle: 'Framework',
    description: 'The framework behind declarative, compiled prompt optimization.',
    link: { href: DSPY, label: 'Open DSPy →', external: true },
  },
  {
    icon: '📖', title: 'Prompting Guide', titleClass: 'card-title-amber', subtitle: 'Reference',
    description: 'A practical reference for prompting techniques worth automating.',
    link: { href: PROMPTING_GUIDE, label: 'Open Prompting Guide →', external: true },
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

export default function AgenticDay86() {
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
          <Link to="/agentic-day-83" className="day001-nav-btn day001-nav-prev">← Day 83</Link>
          <p className="day001-datetime">Agentic AI Day 86 · 25 Oct 2026</p>
          <Link to="/agentic-day-87" className="day001-nav-btn day001-nav-next">Day 87 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Gen AI</span><span>Prompt Optimization</span><span>Phase 12</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 86 <span aria-hidden="true">🎛️</span></h1>
              <p className="day001-day-theme">PROMPT OPTIMIZATION AT SCALE</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · PROMPTING</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '57%' }} /></div>

        <p className="day001-summary">
          Day 86 stops hand-tuning prompts by feel. Declarative <strong>signatures</strong>,{' '}
          <strong>similarity-based few-shot</strong> selection, and <strong>prompt compression</strong> —
          scored against a dev set, not vibes.
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

        <CardSection icon="🎛️" title="OPTIMIZE, DON'T GUESS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#GenAI</span><span>#PromptEngineering</span><span>#Day86</span><span>#DSPy</span><span>#AgenticAI</span>
        </footer>
      </div>
    </div>
  );
}
