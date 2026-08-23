import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const KARPATHY_YT = 'https://www.youtube.com/watch?v=7xTGNNLPyMI';
const ATTENTION_PAPER = 'https://arxiv.org/abs/1706.03762';

const LEARNT_TODAY = [
  { title: '"Attention Is All You Need"', text: 'the 2017 paper that introduced the Transformer, dropping recurrence entirely in favor of self-attention' },
  { title: 'LLM architecture', text: 'a tall stack of Transformer blocks — mostly decoder-only for today\'s chat models — trained on massive text corpora' },
  { title: 'Scaling laws', text: 'parameter count, training data size, and compute jointly drive capability, fairly predictably as all three scale up' },
  { title: 'How ChatGPT works', text: 'next-token prediction at pretraining, then instruction-tuned and RLHF\'d so it actually follows prompts helpfully' },
  { title: 'Context window', text: 'a token limit caps how much text a model can "see" at once — prompt, conversation history, and response all share it' },
  { title: 'Tokens ≠ words', text: 'a token is often a word-piece, not a whole word — roughly 1 token per 4 characters of English on average' },
  { title: 'Model families', text: 'GPT, Claude, Gemini, Llama, Mistral — different sizes, licenses, and strengths for different jobs' },
  { title: 'Why this matters for agents', text: 'context limits and per-token cost shape nearly every prompt and agent design decision from here on' },
];

const CORE = [
  {
    icon: '📄', title: 'The Attention Paper', titleClass: 'card-title-cyan', subtitle: 'Where It Started',
    description:
      '"Attention Is All You Need" replaced recurrent layers with self-attention, letting models process an entire sequence in parallel instead of step by step.',
    code: '# no more RNN loop —\n# every token attends to every other token at once',
  },
  {
    icon: '💬', title: 'How ChatGPT Works', titleClass: 'card-title-purple', subtitle: 'Pretrain → Instruct → RLHF',
    description:
      'Pretraining teaches raw language modeling; instruction-tuning teaches it to follow requests; RLHF nudges its answers toward what humans actually prefer.',
    code: 'pretrain (predict next token)\n→ instruction-tune (follow prompts)\n→ RLHF (align with preferences)',
  },
  {
    icon: '🪙', title: 'Tokens & Context Windows', titleClass: 'card-title-amber', subtitle: 'The Hard Limit',
    description:
      'Everything — system prompt, chat history, and the reply — shares one token budget. Run past it and the oldest context gets dropped or truncated.',
    code: '# ~4 characters ≈ 1 token (English)\n# context_window = prompt_tokens + response_tokens',
  },
];

const PRACTICE = [
  {
    icon: '🧮', title: 'Count Your Tokens', titleClass: 'card-title-cyan', subtitle: 'Hands-On',
    description: 'Run a sentence through a tokenizer library and see how it actually gets split into pieces — words, sub-words, even punctuation.',
    code: 'tokens = tokenizer.encode(text)\nprint(len(tokens))',
  },
  {
    icon: '⚖️', title: 'Compare Model Families', titleClass: 'card-title-purple', subtitle: 'Practice',
    description: 'Ask the same question to two different model families and compare context window, cost, and answer quality.',
  },
  {
    icon: '🔜', title: 'Next: Vector Databases', titleClass: 'card-title-amber', subtitle: 'Day 27 Preview',
    description: 'Tomorrow — how embeddings actually get stored and searched at scale for retrieval.',
    link: { href: '/agentic-day-27', label: 'Go to Day 27 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Large Language Models', titleClass: 'card-title-cyan', subtitle: 'PY Module 26',
    description: 'Full lesson — LLM architecture, the Attention paper, how ChatGPT works, token limits, and model families.',
    link: { href: '/python/learn/large-language-models', label: 'Open PY Module 26 →' },
  },
  {
    icon: '🎬', title: 'LLM Explained', titleClass: 'card-title-purple', subtitle: 'Andrej Karpathy',
    description: 'A clear, from-first-principles explanation of what an LLM is and how it\'s trained.',
    link: { href: KARPATHY_YT, label: 'Watch LLM explained →', external: true },
  },
  {
    icon: '📖', title: '"Attention Is All You Need"', titleClass: 'card-title-amber', subtitle: 'Original Paper',
    description: 'The landmark paper itself, on arXiv — worth reading once you know the vocabulary.',
    link: { href: ATTENTION_PAPER, label: 'Read the paper →', external: true },
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

export default function AgenticDay26() {
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
          <Link to="/agentic-day-25" className="day001-nav-btn day001-nav-prev">← Day 25</Link>
          <p className="day001-datetime">Agentic AI Day 26 · 18 Sep 2026</p>
          <Link to="/agentic-day-27" className="day001-nav-btn day001-nav-next">Day 27 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Gen AI</span><span>LLMs</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 26 <span aria-hidden="true">🧠</span></h1>
              <p className="day001-day-theme">LARGE LANGUAGE MODELS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · GEN AI</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '17%' }} /></div>

        <p className="day001-summary">
          Day 26 goes under the hood of the models themselves. The <strong>Transformer</strong> architecture
          from <strong>"Attention Is All You Need"</strong>, how <strong>ChatGPT</strong> actually gets trained
          in three stages, and why <strong>tokens</strong> and <strong>context windows</strong> quietly limit
          everything an LLM can do.
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

        <CardSection icon="🧠" title="HOW LLMs WORK" cards={CORE} columns={3} />
        <CardSection icon="🧮" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day26</span><span>#LLMs</span><span>#Transformers</span>
        </footer>
      </div>
    </div>
  );
}
