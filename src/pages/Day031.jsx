import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture15';
const GH_REPO = 'https://github.com/Rohitnegi9/STRIKEGenAI';

const LEARNT_TODAY = [
  { title: 'Garbage in, garbage out', text: 'a RAG answer is only as good as the chunks it retrieves — retrieval quality is everything' },
  { title: 'Chunking matters', text: 'chunk size and overlap change what the model sees; too big adds noise, too small loses context' },
  { title: 'Tune top-K', text: 'too few chunks miss the answer, too many add noise and cost — find the right K for your data' },
  { title: 'Metadata filtering', text: 'attach source, section or date to each chunk and filter retrieval to narrow the search' },
  { title: 'Re-ranking', text: 'over-fetch candidates, then re-score them for true relevance and keep only the best few' },
  { title: 'Evaluate retrieval', text: 'check whether the retrieved chunks actually contain the answer, not just whether the reply sounds good' },
  { title: 'RAG is iterative', text: 'better chunking, filtering and re-ranking compound into noticeably better, more trustworthy answers' },
];

const QUALITY = [
  {
    icon: '⚖️', title: 'Retrieval Is Everything', titleClass: 'card-title-cyan', subtitle: 'Context = Answer',
    description:
      'The model can only answer from what you retrieve. If the right chunk never comes back, no prompt can save the answer — so most RAG quality work is really retrieval work.',
    code: '// good chunks → grounded, correct answer\n// wrong chunks → confident, wrong answer\n// fix retrieval first',
  },
  {
    icon: '✂️', title: 'Chunking Strategy', titleClass: 'card-title-purple', subtitle: 'Size & Overlap',
    description:
      'Chunk size and overlap are the biggest levers. Large chunks add irrelevant text; tiny chunks fragment ideas. Tune them to your documents and re-index to compare.',
    code: '// too big  → noise dilutes the relevant part\n// too small → an idea gets split across chunks\n// tune chunkSize / chunkOverlap, then measure',
  },
  {
    icon: '🔢', title: 'Top-K & Filters', titleClass: 'card-title-amber', subtitle: 'How Much To Fetch',
    description:
      'Retrieve enough to cover the answer but not so much that noise creeps in. Use metadata filters (source, section, date) to restrict retrieval to the relevant subset.',
    code: '// query({ topK, vector, filter: { source: "docs" } })\n// smaller, cleaner candidate set = better answers',
  },
];

const IMPROVE = [
  {
    icon: '🏅', title: 'Re-Ranking', titleClass: 'card-title-cyan', subtitle: 'Fetch More, Keep Best',
    description:
      'Vector similarity is a fast first pass, not a perfect one. Over-fetch (say top-20), then re-score those with a re-ranker and keep the few most relevant for the prompt.',
    code: '// 1. vector search → top 20 candidates\n// 2. re-rank by relevance\n// 3. keep top 3–5 → augment the prompt',
  },
  {
    icon: '🧪', title: 'Evaluate It', titleClass: 'card-title-purple', subtitle: 'Measure, Don’t Guess',
    description:
      'Judge the retrieval, not just the vibe of the reply: for a set of questions, did the retrieved chunks actually contain the answer? That tells you what to fix.',
    code: '// for each test question:\n//   were the right chunks retrieved? (recall)\n//   was the answer grounded in them? (faithfulness)',
  },
  {
    icon: '🔁', title: 'Iterate', titleClass: 'card-title-amber', subtitle: 'Compounding Gains',
    description:
      'Better chunking, filtering, re-ranking and query rewriting each add a little. Together they turn a shaky demo into a RAG system you can trust in production.',
    footer: 'chunk → filter → re-rank → evaluate → repeat',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 15', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The lecture folder and diagram in the STRIKE GenAI repo — improving retrieval quality for production RAG.',
    link: { href: GH_LECTURE, label: 'Open Lecture 15 →', external: true },
  },
  {
    icon: '🧠', title: 'The GenAI Track', titleClass: 'card-title-purple', subtitle: 'Same Journey',
    description:
      'The site’s GenAI track covers RAG, agents and LangGraph as structured modules — a companion to these day-by-day notes.',
    link: { href: '/genai', label: 'Open the GenAI track →' },
  },
  {
    icon: '💾', title: 'STRIKE GenAI Repo', titleClass: 'card-title-amber', subtitle: 'All Lectures',
    description:
      'The full Coder Army course code — next up: agents, LangGraph (Lecture 20) and the AI Dev Team projects.',
    link: { href: GH_REPO, label: 'Open the full repo →', external: true },
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

export default function Day031() {
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
          <Link to="/day-030" className="day001-nav-btn day001-nav-prev">← Prereq 14</Link>
          <p className="day001-datetime">Prerequisite · Gen AI 15</p>
          <Link to="/day-032" className="day001-nav-btn day001-nav-next">Prereq 16 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Prerequisite</span><span>Gen AI</span><span>Lecture 15</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">PREREQ 15 <span aria-hidden="true">🏅</span></h1>
              <p className="day001-day-theme">BETTER RAG — RETRIEVAL QUALITY</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">PREREQUISITE · GEN AI</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '15%' }} /></div>

        <p className="day001-summary">
          Lecture 15 — making RAG actually good. The answer is only as strong as the <strong>chunks it retrieves</strong>,
          so retrieval quality is where the work is. I tuned <strong>chunking</strong> (size and overlap),{' '}
          <strong>top-K</strong>, and <strong>metadata filters</strong> to narrow the search; added{' '}
          <strong>re-ranking</strong> (over-fetch, re-score, keep the best); and learned to <strong>evaluate</strong>{' '}
          retrieval — did the right chunks come back? — instead of trusting the vibe of the reply. These gains{' '}
          <strong>compound</strong> into a RAG system you can trust.{' '}
          <em>(Diagram-based lecture; content reflects the standard practices.)</em>
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

        <CardSection icon="⚖️" title="RETRIEVAL IS EVERYTHING" cards={QUALITY} columns={3} />
        <CardSection icon="🏅" title="RE-RANK & EVALUATE" cards={IMPROVE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#RAG</span><span>#CoderArmy</span><span>#Retrieval</span>
        </footer>
      </div>
    </div>
  );
}
