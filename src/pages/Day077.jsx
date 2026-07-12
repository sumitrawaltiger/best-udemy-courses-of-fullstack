import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const README_URL = 'https://www.makeareadme.com/';
const REVIEW_URL = 'https://google.github.io/eng-practices/review/';

const LEARNT_TODAY = [
  {
    title: 'Portfolio',
    text: 'showcase your best 3–5 projects, not everything',
  },
  {
    title: 'Case studies',
    text: 'problem, stack, your role, and the outcome',
  },
  {
    title: 'Demo + repo',
    text: 'link a live demo and the source together',
  },
  {
    title: 'READMEs',
    text: 'clear setup steps and screenshots',
  },
  {
    title: 'Clean code',
    text: 'readable, consistent, and tested',
  },
  {
    title: 'Code review',
    text: 'give and receive feedback through PRs',
  },
  {
    title: 'Refactor',
    text: 'improve the code before you show it off',
  },
  {
    title: 'a11y & perf',
    text: 'pass a Lighthouse audit',
  },
  {
    title: 'About + contact',
    text: 'who you are and how to reach you',
  },
  {
    title: 'Deploy it',
    text: 'a fast, polished, live portfolio site',
  },
];

const PORTFOLIO = [
  {
    icon: '🎯',
    title: 'What to Show',
    titleClass: 'card-title-cyan',
    subtitle: 'quality > quantity',
    description: 'A few strong, finished projects beat many half-built ones.',
    code: '3–5 projects · at least one full-stack\ndemo + repo for each',
  },
  {
    icon: '📝',
    title: 'Case Studies',
    titleClass: 'card-title-green',
    subtitle: 'tell the story',
    description: 'Explain the problem, your role, decisions, and result.',
    code: 'Problem → Stack → What you built →\nChallenges → Outcome',
  },
  {
    icon: '📄',
    title: 'READMEs',
    titleClass: 'card-title-amber',
    subtitle: 'first impression',
    description: 'A great README with setup, features, and screenshots.',
    code: '## Setup\nnpm i && npm run dev\n## Screenshots ...',
  },
  {
    icon: '🚀',
    title: 'Deploy It',
    titleClass: 'card-title-pink',
    subtitle: 'live + fast',
    description: 'Host the portfolio itself — quick, responsive, polished.',
    code: 'Netlify/Vercel · custom domain\nLighthouse: green scores',
  },
];

const CODE_REVIEW = [
  {
    icon: '🔍',
    title: 'PR Reviews',
    titleClass: 'card-title-cyan',
    subtitle: 'give + get',
    description: 'Small PRs, clear descriptions, kind and specific feedback.',
    code: '// review for: correctness, clarity,\n// tests, edge cases — not style nitpicks',
  },
  {
    icon: '🧹',
    title: 'Refactor',
    titleClass: 'card-title-green',
    subtitle: 'improve first',
    description: 'Rename, extract, and simplify before showcasing.',
    code: 'extract components · name things well\ndelete dead code · add tests',
  },
  {
    icon: '♿',
    title: 'Polish (a11y/perf)',
    titleClass: 'card-title-amber',
    subtitle: 'production quality',
    description: 'Accessible, fast, and audited with Lighthouse.',
    code: 'alt text · labels · keyboard nav\nlazy images · good scores',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'Make a README',
    titleClass: 'card-title-green',
    subtitle: 'Reference',
    description: 'A guide and template for writing great project READMEs.',
    link: { href: README_URL, label: 'Open the guide →', external: true },
  },
  {
    icon: '📘',
    title: 'Code Review Guide',
    titleClass: 'card-title-purple',
    subtitle: 'Google eng practices',
    description: 'Google’s engineering practices for effective code review.',
    link: { href: REVIEW_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Portfolio Website',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Build a Responsive Portfolio Website (HTML, CSS, JS) by MzCode — for Day 77.',
    link: {
      href: 'https://www.youtube.com/watch?v=sR-3QKoKs2k',
      label: 'Watch on YouTube →',
      external: true,
    },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">
        {card.icon}
      </span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a
            href={card.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="day001-card-link"
          >
            {card.link.label}
          </a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">
            {card.link.label}
          </Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title">
        <span aria-hidden="true">{icon}</span> {title}
      </h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (
          <TopicCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

export default function Day077() {
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
      const scale = Math.min(
        (window.innerHeight - pad) / wrap.scrollHeight,
        (window.innerWidth - pad) / wrap.scrollWidth,
      );

      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };

    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);

    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) {
      avatar.addEventListener('load', fitToScreen);
    }

    return () => {
      window.removeEventListener('resize', fitToScreen);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/day-076" className="day001-nav-btn day001-nav-home">
            ← Day 76
          </Link>
          <p className="day001-datetime">Thunder Day 77 · 19 Sep 2026</p>
          <Link to="/day-078" className="day001-nav-btn day001-nav-next">
            Day 78 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Full-Stack</span>
              <span>Career</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 77 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">PORTFOLIO & CODE REVIEW</p>
            </div>
          </div>
          <div className="day001-profile">
            <img
              src="/sumit-profile.png"
              alt="Sumit Rawal"
              className="day001-avatar"
              width={48}
              height={48}
            />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">FULL-STACK</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '77%' }} />
        </div>

        <p className="day001-summary">
          Day seventy-seven — package the work for the world. A <strong>portfolio</strong> shows a
          few strong projects as <strong>case studies</strong> (problem → stack → outcome), each with
          a live demo, repo, and a great <strong>README</strong>. Level up the code through{' '}
          <strong>PR reviews</strong> — give and receive specific feedback — then{' '}
          <strong>refactor</strong> and <strong>polish</strong> for accessibility and performance
          before deploying a fast, professional site. Reference:{' '}
          <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            code review guide
          </a>
          .
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title">
            <span className="day001-learnt-line" aria-hidden="true" />
            WHAT I LEARNED TODAY
          </h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">
                  ✓
                </span>
                <span>
                  <strong>{item.title}</strong> — {item.text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="💼" title="PORTFOLIO" cards={PORTFOLIO} columns={4} />
        <CardSection icon="🔍" title="CODE REVIEW" cards={CODE_REVIEW} columns={3} />
        <CardSection icon="📚" title="PORTFOLIO RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#Portfolio</span>
          <span>#CodeReview</span>
          <span>#Career</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
