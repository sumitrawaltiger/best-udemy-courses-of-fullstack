import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "What fine-tuning is", text: "continue training on your examples so the model picks up task style or domain language" },
  { title: "When to fine-tune", text: "format adherence, tone, domain jargon — not for injecting daily-changing facts" },
  { title: "PEFT", text: "Parameter-Efficient Fine-Tuning updates small adapter weights, not the whole net" },
  { title: "LoRA", text: "low-rank adapters on attention layers — popular, cheap, mergeable" },
  { title: "QLoRA", text: "quantize the base model + LoRA so fine-tunes fit on smaller GPUs" },
  { title: "Data quality", text: "clean instruction pairs beat huge noisy dumps" },
  { title: "Eval after FT", text: "hold out prompts; compare base vs tuned on your rubric" },
  { title: "Combine with RAG", text: "fine-tune behavior + RAG knowledge is a strong Year-1 stack" },
];

const CORE = [
  {
    icon: "🎯", title: "When FT Wins", titleClass: 'card-title-cyan', subtitle: "Fit",
    description:
      "Stable task format, brand voice, or tool-calling style that prompting alone cannot lock.",
    code: "style / format / domain\n≠ live knowledge",
  },
  {
    icon: "🔌", title: "LoRA / QLoRA", titleClass: 'card-title-purple', subtitle: "PEFT",
    description:
      "Train adapters; keep base frozen. Merge adapters for serving if needed.",
    code: "base (frozen) + LoRA\n→ tuned behavior",
  },
  {
    icon: "📊", title: "Data Prep", titleClass: 'card-title-amber', subtitle: "Examples",
    description:
      "JSONL of {instruction, input, output}. Deduplicate and balance skills.",
    code: "{\"instruction\":...,\n \"output\":...}",
  },
];

const PRACTICE = [
  {
    icon: "🧪", title: "Tiny FT Run", titleClass: 'card-title-cyan', subtitle: "Lab",
    description: "Fine-tune a small open model on 100 Q&A pairs; compare before/after.",
    code: "train → eval holdout",
  },
  {
    icon: "⚠️", title: "Avoid FT for Facts", titleClass: 'card-title-purple', subtitle: "Trap",
    description: "Company policy that changes weekly belongs in RAG, not weights.",
    code: "facts → retrieve\nstyle → fine-tune",
  },
  {
    icon: "🔜", title: "Next: LlamaIndex", titleClass: 'card-title-amber', subtitle: "Day 35",
    description: "Tomorrow — LlamaIndex connectors, query engines, stock analysis project.",
    link: { href: '/agentic-day-35', label: 'Go to Day 35 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "Fine-Tuning LLMs", titleClass: 'card-title-cyan', subtitle: "PY Module 34",
    description: "Full lesson on the site for this module.",
    link: { href: "/python/learn/fine-tuning-llms", label: 'Open module →' },
  },
  {
    icon: "🎬", title: "LoRA Fine-Tuning", titleClass: 'card-title-purple', subtitle: "Video",
    description: "Video resource.",
    link: { href: "https://www.youtube.com/watch?v=Us5ZFp16PaU", label: 'Open →', external: true },
  },
  {
    icon: "📖", title: "PEFT Docs", titleClass: 'card-title-amber', subtitle: "Hugging Face",
    description: "Hugging Face resource.",
    link: { href: "https://huggingface.co/docs/peft", label: 'Open →', external: true },
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

export default function AgenticDay34() {
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
          <Link to="/agentic-day-33" className="day001-nav-btn day001-nav-prev">← Day 33</Link>
          <p className="day001-datetime">Agentic AI Day 34 · 7 Sep 2026</p>
          <Link to="/agentic-day-35" className="day001-nav-btn day001-nav-next">Day 35 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Fine-Tune</span><span>Day 34</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 34 <span aria-hidden="true">🎛️</span></h1>
              <p className="day001-day-theme">FINE-TUNING LLMS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · RAG</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '23%' }} /></div>

        <p className="day001-summary">
          Day 34 teaches adaptation. Use <strong>PEFT</strong>, <strong>LoRA</strong>, and <strong>QLoRA</strong> to specialize a model without full retraining.
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

        <CardSection icon="🎛️" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day34</span><span>#Fine-Tune</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
