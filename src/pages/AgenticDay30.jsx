import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LLAMA_YT = 'https://www.youtube.com/watch?v=dqM37myYAMs';
const OLLAMA_SITE = 'https://ollama.com/';

const LEARNT_TODAY = [
  { title: 'Why open source LLMs', text: 'full control, no per-token API cost, and the option to fine-tune or run fully offline and private' },
  { title: 'Llama family', text: 'Meta\'s open-weight models (Llama 2/3) — widely used as a base for fine-tuning and local deployment' },
  { title: 'Falcon', text: 'another strong open-weight model family from TII, with permissive licensing' },
  { title: 'Running locally', text: 'tools like Ollama or llama.cpp run these models on a laptop or single GPU with no API and no account' },
  { title: 'LangChain + open source', text: 'swap ChatOpenAI for a local-model wrapper — the exact same chain code, a completely different backend' },
  { title: 'The trade-off', text: 'open models usually trail frontier closed models on raw capability, but win hard on cost, control, and privacy' },
  { title: 'Quantization', text: 'shrinking model weights (e.g. to 4-bit) trades a little accuracy for a large drop in memory and GPU requirements' },
  { title: 'Today\'s project', text: 'a small custom chatbot backed by an open-source model through LangChain — no OpenAI bill required' },
];

const CORE = [
  {
    icon: '🦙', title: 'Llama & Falcon', titleClass: 'card-title-cyan', subtitle: 'Open-Weight Models',
    description:
      'Llama (Meta) and Falcon (TII) are the two most commonly used open-weight model families — downloadable, fine-tunable, and runnable without any API.',
  },
  {
    icon: '💻', title: 'Running Locally', titleClass: 'card-title-purple', subtitle: 'Ollama / llama.cpp',
    description:
      'Ollama wraps model download, quantization, and serving behind one command — pull a model and chat with it entirely offline.',
    code: 'ollama pull llama3\nollama run llama3',
  },
  {
    icon: '🗜️', title: 'Quantization', titleClass: 'card-title-amber', subtitle: 'Smaller, Faster, Slightly Fuzzier',
    description:
      'Storing weights in 4-bit or 8-bit instead of full precision shrinks memory use dramatically, at a small, usually acceptable, accuracy cost.',
    code: '# fp16 model → 4-bit quantized\n# ~4x smaller, runs on far less VRAM',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Ollama Quickstart', titleClass: 'card-title-cyan', subtitle: 'Hands-On',
    description: 'Install Ollama, pull a small open model, and chat with it from the terminal — no cloud account involved.',
    code: 'ollama pull mistral\nollama run mistral',
  },
  {
    icon: '🤖', title: 'Custom Chatbot Project', titleClass: 'card-title-purple', subtitle: 'Mini Project',
    description: 'Wire an Ollama-served model into a LangChain chain — the same prompt-template-and-parser pattern from Day 29, running fully local.',
  },
  {
    icon: '🎉', title: 'Foundations Complete', titleClass: 'card-title-amber', subtitle: 'Days 1–30 Done',
    description: 'Python, deep learning, NLP, LLMs, vector databases, OpenAI, and LangChain basics — the ground floor is finished. Next: LangChain in depth.',
    link: { href: '/agentic-day-31', label: 'Go to Day 31 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Open Source LLMs', titleClass: 'card-title-cyan', subtitle: 'PY Module 30',
    description: 'Full lesson — open source LLMs, Llama, Falcon, LangChain + OSS, and a custom chatbot project.',
    link: { href: '/python/learn/open-source-llms', label: 'Open PY Module 30 →' },
  },
  {
    icon: '🎬', title: 'Llama 3 Tutorial', titleClass: 'card-title-purple', subtitle: 'Sam Witteveen',
    description: 'A practical walkthrough of running and using Llama 3 for real projects.',
    link: { href: LLAMA_YT, label: 'Watch Llama 3 tutorial →', external: true },
  },
  {
    icon: '📖', title: 'Ollama', titleClass: 'card-title-amber', subtitle: 'Site',
    description: 'The easiest way to download and run open-source LLMs locally.',
    link: { href: OLLAMA_SITE, label: 'Open Ollama →', external: true },
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

export default function AgenticDay30() {
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
          <Link to="/agentic-day-29" className="day001-nav-btn day001-nav-prev">← Day 29</Link>
          <p className="day001-datetime">Agentic AI Day 30 · 30 Sep 2026</p>
          <Link to="/agentic-day-31" className="day001-nav-btn day001-nav-next">Day 31 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>LangChain</span><span>Open Source</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 30 <span aria-hidden="true">🦙</span></h1>
              <p className="day001-day-theme">OPEN SOURCE LLMs</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · LANGCHAIN</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '20%' }} /></div>

        <p className="day001-summary">
          Day 30 trades the API bill for full control. Running <strong>Llama</strong> and{' '}
          <strong>Falcon</strong> locally with <strong>Ollama</strong>, understanding{' '}
          <strong>quantization</strong>, and wiring an open-source model into the same LangChain pattern from
          yesterday — closing out the first 30 days of the curriculum.
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

        <CardSection icon="🦙" title="OPEN-WEIGHT MODELS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#OpenSourceLLM</span><span>#Day30</span><span>#Llama</span><span>#Ollama</span>
        </footer>
      </div>
    </div>
  );
}
