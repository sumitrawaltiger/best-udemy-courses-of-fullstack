import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://tailwindcss.com/docs/utility-first';
const PLAY_URL = 'https://play.tailwindcss.com/';

const LEARNT_TODAY = [
  {
    title: 'Utility-first',
    text: 'compose UIs from tiny, single-purpose classes',
  },
  {
    title: 'Style in markup',
    text: 'no context-switching to a CSS file',
  },
  {
    title: 'Spacing scale',
    text: 'p-4, m-2, gap-6 — a consistent 4px scale',
  },
  {
    title: 'Flex & grid',
    text: 'flex, grid, justify-*, items-*',
  },
  {
    title: 'Colors',
    text: 'bg-*, text-* with numeric shades',
  },
  {
    title: 'Responsive',
    text: 'sm: md: lg: prefixes, mobile-first',
  },
  {
    title: 'States',
    text: 'hover:, focus:, active: variants',
  },
  {
    title: 'Dark mode',
    text: 'the dark: variant',
  },
  {
    title: 'Reuse',
    text: 'extract components or use @apply',
  },
  {
    title: 'Only used ships',
    text: 'the engine purges unused classes',
  },
];

const UTILITY = [
  {
    icon: '🧱',
    title: 'Utility-First',
    titleClass: 'card-title-cyan',
    subtitle: 'the idea',
    description: 'Build any design by stacking small utility classes.',
    code: '<button class="px-4 py-2 rounded bg-blue-600 text-white">\n  Save\n</button>',
  },
  {
    icon: '📏',
    title: 'Spacing & Sizing',
    titleClass: 'card-title-green',
    subtitle: 'the scale',
    description: 'Padding, margin, width, height on a consistent scale.',
    code: 'p-4  m-2  w-full  h-12  gap-6  max-w-md',
  },
  {
    icon: '🧭',
    title: 'Flex & Grid',
    titleClass: 'card-title-amber',
    subtitle: 'layout',
    description: 'Flexbox and grid with alignment utilities.',
    code: '<div class="flex items-center justify-between gap-4">\n<div class="grid grid-cols-3 gap-6">',
  },
  {
    icon: '🎨',
    title: 'Colors & Type',
    titleClass: 'card-title-pink',
    subtitle: 'theme',
    description: 'Background, text colors, and typography utilities.',
    code: 'bg-slate-900  text-white  text-lg  font-bold\ntext-gray-500  tracking-tight',
  },
];

const RESPONSIVE = [
  {
    icon: '📱',
    title: 'Breakpoints',
    titleClass: 'card-title-cyan',
    subtitle: 'mobile-first',
    description: 'Prefix a class to apply it from a breakpoint up.',
    code: '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">\n// base = mobile, md: from 768px',
  },
  {
    icon: '✨',
    title: 'States & Dark Mode',
    titleClass: 'card-title-green',
    subtitle: 'variants',
    description: 'Style hover/focus and adapt to dark mode.',
    code: 'hover:bg-blue-700  focus:ring-2\ndark:bg-slate-800  dark:text-white',
  },
  {
    icon: '♻️',
    title: 'Reuse & JIT',
    titleClass: 'card-title-amber',
    subtitle: 'stay DRY',
    description: 'Extract components, or @apply utilities in CSS.',
    code: '.btn { @apply px-4 py-2 rounded bg-blue-600; }\n// JIT ships only classes you use',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'Tailwind Docs',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'The Tailwind utility-first documentation — every class explained.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🧪',
    title: 'Tailwind Play',
    titleClass: 'card-title-purple',
    subtitle: 'Try it live',
    description: 'Prototype Tailwind in the browser with instant preview.',
    link: { href: PLAY_URL, label: 'Open the playground →', external: true },
  },
  {
    icon: '▶️',
    title: 'Tailwind Full Course',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Tailwind CSS Full Course by JavaScript Mastery — supplement for Day 67.',
    link: {
      href: 'https://www.youtube.com/watch?v=6biMWgD6_JY',
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

export default function Day067() {
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
          <Link to="/day-066" className="day001-nav-btn day001-nav-home">
            ← Day 66
          </Link>
          <p className="day001-datetime">Thunder Day 67</p>
          <Link to="/day-068" className="day001-nav-btn day001-nav-next">
            Day 68 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Tailwind</span>
              <span>CSS</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 67 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">TAILWIND CSS FUNDAMENTALS</p>
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
              <p className="day001-profile-role">TAILWIND · FRONTEND</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '67%' }} />
        </div>

        <p className="day001-summary">
          Day sixty-seven — <strong>Tailwind CSS</strong>, a <strong>utility-first</strong> framework
          where you style directly in the markup with tiny classes. A consistent{' '}
          <strong>spacing scale</strong>, <strong>flex/grid</strong> utilities, and{' '}
          <strong>color</strong> + typography classes cover most designs; then{' '}
          <strong>responsive</strong> prefixes (<code>md:</code>, <code>lg:</code>),{' '}
          <strong>state variants</strong> (<code>hover:</code>, <code>focus:</code>), and{' '}
          <code>dark:</code> mode adapt it — while the engine ships only the classes you use.
          Prototype at{' '}
          <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Tailwind Play
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

        <CardSection icon="🧱" title="UTILITY-FIRST" cards={UTILITY} columns={4} />
        <CardSection icon="📱" title="RESPONSIVE & MORE" cards={RESPONSIVE} columns={3} />
        <CardSection icon="📚" title="TAILWIND RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#TailwindCSS</span>
          <span>#CSS</span>
          <span>#Frontend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
