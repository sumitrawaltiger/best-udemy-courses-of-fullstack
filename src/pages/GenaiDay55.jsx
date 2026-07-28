import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'The stack is clearer', text: 'models, prompts, retrieval, evaluation, and product UX now fit into one mental model' },
  { title: 'Prompting is not enough', text: 'serious apps need data pipelines, observability, and release discipline' },
  { title: 'RAG is practical leverage', text: 'grounded answers usually beat blind generation for business apps' },
  { title: 'Multimodal opens products', text: 'documents, screenshots, and audio create new workflows beyond chat' },
  { title: 'Capstones matter', text: 'one polished app proves more than a long list of concepts' },
  { title: 'Metrics keep you honest', text: 'accuracy, latency, cost, and trust must move together' },
  { title: 'Agentic builds come next', text: 'strong Gen AI fundamentals make tool-using agents much easier to design' },
  { title: 'Keep building', text: 'the real learning now comes from shipping and refining actual products' },
];

const CORE = [
  {
    icon: '🧠', title: 'Mental Model', titleClass: 'card-title-cyan', subtitle: 'Understand',
    description:
      'See the full flow clearly: input, context, model, guardrails, evaluation, and user-facing output.',
    code: 'input -> context -> answer',
  },
  {
    icon: '📦', title: 'Portfolio Asset', titleClass: 'card-title-purple', subtitle: 'Show',
    description:
      'Package your best app with README, screenshots, sample inputs, and a short demo walkthrough.',
    code: 'repo + demo + notes',
  },
  {
    icon: '🗺️', title: 'Next Move', titleClass: 'card-title-amber', subtitle: 'Build',
    description:
      'Double down on RAG, multimodal apps, or move into the agentic workflows that build on these foundations.',
    code: 'deepen or extend',
  },
];

const PRACTICE = [
  {
    icon: '📝', title: 'Write The Story', titleClass: 'card-title-cyan', subtitle: 'Reflect',
    description: 'Summarize what problem you solved, what stack you used, and what you would improve next.',
    code: 'problem · build · next',
  },
  {
    icon: '🔍', title: 'Retrospective', titleClass: 'card-title-purple', subtitle: 'Improve',
    description: 'List three wins, three weak spots, and one next project to build immediately.',
    code: 'wins · gaps · next app',
  },
  {
    icon: '🏠', title: 'Back To Track', titleClass: 'card-title-amber', subtitle: 'Continue',
    description: 'Return to the Gen AI home and keep extending the roadmap from here.',
    link: { href: '/genai', label: 'Open Gen AI Track ->' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Browse the full Gen AI lessons and curriculum on the site.',
    link: { href: '/genai', label: 'Open Gen AI Track ->' },
  },
  {
    icon: '📖', title: 'LangChain', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Application patterns spanning prompts, retrieval, and agents.',
    link: { href: 'https://js.langchain.com/docs/introduction/', label: 'Open ->', external: true },
  },
  {
    icon: '🏁', title: 'Milestone', titleClass: 'card-title-amber', subtitle: 'Remember',
    description: 'You now have enough Gen AI grounding to build reliable products instead of isolated demos.',
    footer: 'Ship, measure, and iterate.',
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

export default function GenaiDay55() {
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
          <Link to="/genai-day-54" className="day001-nav-btn day001-nav-prev">Day 54</Link>
          <p className="day001-datetime">Gen AI Day 55 · 55 Aug 2026</p>
          <Link to="/genai" className="day001-nav-btn day001-nav-next">Gen AI {'->'}</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Gen AI</span><span>Milestone</span><span>Day 55</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 55 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">GEN AI MILESTONE WRAP-UP</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · MILESTONE</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '37%' }} /></div>

        <p className="day001-summary">
          Day 55 closes this Gen AI stretch. You now have a stronger map across <strong>prompting, retrieval,
          multimodal workflows, evaluation, and shipping</strong> real applications with discipline.
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> - {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🏁" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#GenAI</span><span>#Milestone</span><span>#Day55</span><span>#BuildInPublic</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
