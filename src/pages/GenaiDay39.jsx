import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture41';

const LEARNT_TODAY = [
  { title: 'Static embeddings aren’t enough', text: '"bank" has one fixed vector, but "river bank" and "money bank" mean different things' },
  { title: 'Attention adds context', text: 'each token looks at the others and pulls in meaning, so its vector becomes context-aware' },
  { title: 'Query, Key, Value', text: 'from each token’s embedding we make three vectors — a Query, a Key and a Value' },
  { title: 'The library analogy', text: 'Query = what I’m looking for, Key = a book’s title/index, Value = the book’s actual content' },
  { title: 'Score = Query · Key', text: 'a token’s Query dot-products with every Key to score how relevant each other token is' },
  { title: 'Softmax the scores', text: 'turn the scores into attention weights that sum to 1 — how much to listen to each token' },
  { title: 'Blend the Values', text: 'the new vector is the weighted sum of Values — mostly the tokens that scored high' },
  { title: 'This is the Transformer', text: '“Attention Is All You Need” — self-attention is the core of every modern LLM' },
];

const PROBLEM = [
  {
    icon: '🏦', title: 'The "Bank" Problem', titleClass: 'card-title-cyan', subtitle: 'One Word, Many Meanings',
    description:
      'A plain embedding gives "bank" a single vector. But "withdraw money from the bank" and "sat on the river bank" need different meanings. Context has to reshape the vector.',
    code: '// "withdraw money from the bank" → finance\n// "sat on the river bank"        → nature\n// same token, different meaning',
  },
  {
    icon: '👀', title: 'Look At The Neighbours', titleClass: 'card-title-purple', subtitle: 'Context-Aware',
    description:
      'Self-attention lets each token scan the whole sentence and absorb the relevant words. "bank" pulls from "money" or "river" and its vector shifts toward the right sense.',
    code: '// "bank" attends to "money" → finance sense\n// "bank" attends to "river" → nature sense\n// vector updated in context',
  },
];

const QKV = [
  {
    icon: '📚', title: 'Query · Key · Value', titleClass: 'card-title-cyan', subtitle: 'The Library',
    description:
      'From each embedding we derive three vectors. Query = what this token is looking for; Key = what each token advertises; Value = the content it contributes. Like searching a library.',
    code: '// Query = "I need finance context"\n// Key   = "I am about money"   (title)\n// Value = the actual content to blend in',
  },
  {
    icon: '🎯', title: 'Score, Then Softmax', titleClass: 'card-title-purple', subtitle: 'Q · Kᵀ → weights',
    description:
      'Dot-product a token’s Query with every Key to score relevance, then softmax those scores into attention weights that sum to 1 — how much attention to pay to each token.',
    code: '// score_j = Query · Key_j\n// weights = softmax(scores)  (sum to 1)\n// high score = pay more attention',
  },
  {
    icon: '🧪', title: 'Blend The Values', titleClass: 'card-title-amber', subtitle: 'Weighted Sum',
    description:
      'The token’s new vector is the weighted sum of all Values, dominated by the tokens it scored highest. That’s a fresh, context-aware embedding — repeated across every token and layer.',
    code: '// new_vector = Σ weight_j · Value_j\n// mostly the high-attention tokens\n// → contextual embedding',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 41', titleClass: 'card-title-cyan', subtitle: 'Self-Attention',
    description:
      'The self-attention material in the STRIKE GenAI repo — Query/Key/Value, scoring, softmax and blending values into context-aware vectors.',
    link: { href: GH_LECTURE, label: 'Open Lecture 41 →', external: true },
  },
  {
    icon: '🧠', title: 'Attention Is All You Need', titleClass: 'card-title-purple', subtitle: 'The Transformer',
    description:
      'This mechanism, stacked many times, is the Transformer — the architecture behind GPT and every modern LLM. It’s how models understand context at all.',
    footer: 'Q·K → softmax → weighted Values → context',
  },
  {
    icon: '🏁', title: 'Gen AI Phase Complete', titleClass: 'card-title-amber', subtitle: '39 Days · Then TypeScript',
    description:
      'Day 39 closes the 39-day Generative & Agentic AI phase — from token prediction and LLMs to embeddings, RAG, LangChain/LangGraph agents, neural nets and the Transformer. Next, the 4-year coding journey begins with the TypeScript stack (Day 1).',
    link: { href: '/day-001', label: 'Start TypeScript → Day 1' },
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

export default function GenaiDay39() {
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
          <Link to="/genai-day-38" className="day001-nav-btn day001-nav-prev">← Day 38</Link>
          <p className="day001-datetime">Agentic AI Day 39</p>
          <Link to="/day-001" className="day001-nav-btn day001-nav-next">Day 1 · TypeScript →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 41</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 39 <span aria-hidden="true">👀</span></h1>
              <p className="day001-day-theme">SELF-ATTENTION — QUERY, KEY &amp; VALUE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '39%' }} /></div>

        <p className="day001-summary">
          Lecture 41 — a plain embedding gives <strong>"bank"</strong> one fixed vector, but{' '}
          <em>river bank</em> and <em>money bank</em> differ. <strong>Self-attention</strong> lets each token look at
          the others and become <strong>context-aware</strong>. From every embedding we build three vectors —{' '}
          <strong>Query, Key, Value</strong> (like a library: Query = what I want, Key = the title, Value = the
          content). A token’s <strong>Query · Key</strong> scores every other token; <strong>softmax</strong> turns
          those into attention weights that sum to 1; the new vector is the <strong>weighted sum of Values</strong>.
          Stack this many times and you have the <strong>Transformer</strong>.{' '}
          <em>“Attention Is All You Need.”</em>
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

        <CardSection icon="🏦" title="THE CONTEXT PROBLEM" cards={PROBLEM} columns={2} />
        <CardSection icon="📚" title="QUERY · KEY · VALUE" cards={QKV} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#Attention</span><span>#Transformer</span><span>#FirstPrinciples</span>
        </footer>
      </div>
    </div>
  );
}
