import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GENAI_YT = 'https://www.youtube.com/watch?v=2IK3DFHRFfw';

const LEARNT_TODAY = [
  { title: 'What Gen AI is', text: 'models that create new content — text, images, code, audio — not just classify or regress' },
  { title: 'AI → ML → DL → Gen AI', text: 'each layer builds on the last; Gen AI sits on deep learning (usually transformers)' },
  { title: 'Discriminative vs generative', text: 'discriminative predicts labels; generative models the data distribution to sample new examples' },
  { title: 'How ChatGPT-style models train', text: 'pretrain on next-token prediction at huge scale, then align with SFT + RLHF/preference tuning' },
  { title: 'LLM evolution', text: 'from GPT-2 era demos to instruction-tuned chat models and multimodal systems' },
  { title: 'Model families', text: 'closed APIs (GPT, Claude, Gemini) vs open weights (Llama, Mistral, Qwen) — trade cost, control, quality' },
  { title: 'Limits', text: 'hallucinations, cutoff dates, context windows, cost — Gen AI still needs grounding and eval' },
  { title: 'Why this course', text: 'architecture (Day 23) + Gen AI framing today → embeddings/RAG/agents next' },
];

const CORE = [
  {
    icon: '🎨', title: 'Generate, Not Just Predict', titleClass: 'card-title-cyan', subtitle: 'Shift',
    description:
      'Classic ML answers “spam or not?” Gen AI answers “write the email,” “draw the logo,” “explain this bug.”',
    code: '// discriminative: P(y|x)\n'// generative: sample x\' ~ model',
  },
  {
    icon: '📚', title: 'Pretrain → Align', titleClass: 'card-title-purple', subtitle: 'Training Arc',
    description:
      'Unsupervised next-token pretraining builds competence. Supervised fine-tuning + preference optimization make it helpful and safer.',
    code: 'pretrain (next token)\n→ SFT (instructions)\n→ RLHF / DPO (prefs)',
  },
  {
    icon: '🕰️', title: 'LLM Timeline', titleClass: 'card-title-amber', subtitle: 'Evolution',
    description:
      'Attention paper (2017) → BERT/GPT → scaling laws → ChatGPT moment → open models and agents everywhere.',
    code: '2017 transformers\n2022– chat LLMs\n2024+ agents / multimodal',
  },
];

const PRACTICE = [
  {
    icon: '⚖️', title: 'Pick A Model Family', titleClass: 'card-title-cyan', subtitle: 'Trade-offs',
    description:
      'API = speed to ship. Open weights = privacy and fine-control. Match the choice to data sensitivity and budget.',
    code: 'API: GPT / Claude / Gemini\nOSS: Llama / Mistral / Qwen',
  },
  {
    icon: '🛡️', title: 'Trust But Verify', titleClass: 'card-title-purple', subtitle: 'Reality Check',
    description:
      'Always plan for hallucinations: citations, RAG, tools, and human review for high-stakes answers.',
    code: '// never ship raw LLM\n'// as sole source of truth',
  },
  {
    icon: '🔜', title: 'Next: Embeddings', titleClass: 'card-title-amber', subtitle: 'Day 25 Preview',
    description: 'Tomorrow — data cleaning, text embeddings, and the end-to-end Gen AI pipeline.',
    link: { href: '/agentic-day-25', label: 'Go to Day 25 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Introduction to Generative AI', titleClass: 'card-title-cyan', subtitle: 'PY Module 24',
    description: 'Full lesson — Gen AI definition, comparisons, ChatGPT training, LLM evolution.',
    link: { href: '/python/learn/introduction-to-generative-ai', label: 'Open PY Module 24 →' },
  },
  {
    icon: '🎬', title: 'Generative AI Explained', titleClass: 'card-title-purple', subtitle: 'IBM',
    description: 'Accessible overview of generative AI concepts.',
    link: { href: GENAI_YT, label: 'Watch Gen AI intro →', external: true },
  },
  {
    icon: '🗺️', title: 'Course Map', titleClass: 'card-title-amber', subtitle: 'What\'s Next',
    description: 'Embeddings → LLMs → vector DBs → OpenAI/LangChain → RAG → Agentic AI.',
    footer: 'Gen AI phase: Days 23–27+',
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

export default function AgenticDay24() {
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
          <Link to="/agentic-day-23" className="day001-nav-btn day001-nav-prev">← Day 23</Link>
          <p className="day001-datetime">Agentic AI Day 24 · 24 Sep 2026</p>
          <Link to="/agentic-day-25" className="day001-nav-btn day001-nav-next">Day 25 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Gen AI</span><span>LLMs</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 24 <span aria-hidden="true">🎨</span></h1>
              <p className="day001-day-theme">INTRODUCTION TO GENERATIVE AI</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '16%' }} /></div>

        <p className="day001-summary">
          Day 24 frames the field. Know what <strong>Generative AI</strong> is, how chat LLMs are{' '}
          <strong>pretrained and aligned</strong>, and how the model landscape evolved.
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

        <CardSection icon="🎨" title="GEN AI BIG PICTURE" cards={CORE} columns={3} />
        <CardSection icon="⚖️" title="CHOICES &amp; CAUTION" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day24</span><span>#LLM</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
