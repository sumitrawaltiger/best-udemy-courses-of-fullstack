import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const OPENAI_YT = 'https://www.youtube.com/watch?v=c-g6epk3fFE';
const OPENAI_DOCS = 'https://platform.openai.com/docs';

const LEARNT_TODAY = [
  { title: 'OpenAI API setup', text: 'get an API key, install the openai Python package, and you can make your first request in a few lines' },
  { title: 'Chat completions', text: 'the core endpoint — send a list of messages (system/user/assistant), get a generated reply back' },
  { title: 'System prompts', text: 'the system role sets persistent behavior or persona that shapes the whole conversation' },
  { title: 'Function calling', text: 'describe available functions in a JSON schema; the model decides when — and with what arguments — to call them' },
  { title: 'Whisper', text: 'OpenAI\'s speech-to-text model — transcribe or translate audio files through the same API' },
  { title: 'DALL-E', text: 'text-to-image generation, available through that same familiar API surface' },
  { title: 'temperature & max_tokens', text: 'the two parameters you\'ll tune constantly — randomness of output, and hard cap on response length' },
  { title: 'Cost awareness', text: 'pricing is per-token for both input and output — longer context and longer replies both cost more' },
];

const CORE = [
  {
    icon: '💬', title: 'Chat Completions', titleClass: 'card-title-cyan', subtitle: 'The Core Endpoint',
    description:
      'Everything starts here — a list of role-tagged messages goes in, one generated assistant message comes back.',
    code: 'response = client.chat.completions.create(\n  model="gpt-4o",\n  messages=[{"role": "user", "content": "Hi!"}]\n)',
  },
  {
    icon: '🛠️', title: 'Function Calling', titleClass: 'card-title-purple', subtitle: 'The Model Picks Tools',
    description:
      'Describe a function\'s name, purpose, and parameters as JSON. The model decides whether to call it and with what arguments — you execute it.',
    code: 'tools=[{"type": "function", "function": {\n  "name": "get_weather", "parameters": {...}\n}}]',
  },
  {
    icon: '🎙️', title: 'Whisper & DALL-E', titleClass: 'card-title-amber', subtitle: 'Beyond Text',
    description:
      'Whisper turns audio into text; DALL-E turns text into images — both reachable through the same client and API key.',
    code: 'client.audio.transcriptions.create(model="whisper-1", file=audio)\nclient.images.generate(prompt="a red panda coding")',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'First API Call', titleClass: 'card-title-cyan', subtitle: 'Hands-On',
    description: 'Set an API key as an environment variable, send one chat completion request, and print the reply.',
    code: 'export OPENAI_API_KEY=sk-...',
  },
  {
    icon: '🌦️', title: 'Tool-Calling Weather Bot', titleClass: 'card-title-purple', subtitle: 'Mini Project',
    description: 'Give the model a get_weather() function description and watch it decide when to call it versus just answering directly.',
  },
  {
    icon: '🔜', title: 'Next: LangChain', titleClass: 'card-title-amber', subtitle: 'Day 29 Preview',
    description: 'Tomorrow — LangChain\'s ecosystem, setup, and wiring it up to the OpenAI API.',
    link: { href: '/agentic-day-29', label: 'Go to Day 29 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Complete Guide to OpenAI', titleClass: 'card-title-cyan', subtitle: 'PY Module 28',
    description: 'Full lesson — API setup, chat completions, function calling, Whisper, and DALL-E.',
    link: { href: '/python/learn/complete-guide-to-openai', label: 'Open PY Module 28 →' },
  },
  {
    icon: '🎬', title: 'OpenAI API Tutorial', titleClass: 'card-title-purple', subtitle: 'freeCodeCamp',
    description: 'A full walkthrough of the OpenAI API from setup to real requests.',
    link: { href: OPENAI_YT, label: 'Watch OpenAI API tutorial →', external: true },
  },
  {
    icon: '📖', title: 'OpenAI Platform Docs', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Official reference for every endpoint — chat, function calling, audio, and images.',
    link: { href: OPENAI_DOCS, label: 'Open OpenAI docs →', external: true },
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

export default function AgenticDay28() {
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
          <Link to="/agentic-day-27" className="day001-nav-btn day001-nav-prev">← Day 27</Link>
          <p className="day001-datetime">Agentic AI Day 28 · 17 Sep 2026</p>
          <Link to="/agentic-day-29" className="day001-nav-btn day001-nav-next">Day 29 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>OpenAI</span><span>API</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 28 <span aria-hidden="true">🔑</span></h1>
              <p className="day001-day-theme">COMPLETE GUIDE TO OPENAI</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · OPENAI</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '19%' }} /></div>

        <p className="day001-summary">
          Day 28 is the OpenAI API end to end. <strong>Chat completions</strong> as the core building block,{' '}
          <strong>function calling</strong> so a model can reach for tools, and <strong>Whisper</strong> /{' '}
          <strong>DALL-E</strong> for voice and images — all through one client and one API key.
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

        <CardSection icon="🔑" title="THE OPENAI API" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#OpenAI</span><span>#Day28</span><span>#GenAI</span><span>#FunctionCalling</span>
        </footer>
      </div>
    </div>
  );
}
