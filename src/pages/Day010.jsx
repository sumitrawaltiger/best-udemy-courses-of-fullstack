import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture10-Introduction-To-DOM-38043ac5cab980adbbdeffd5e8dc6ae8?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture10';

const LEARNT_TODAY = [
  {
    title: 'What is the DOM',
    text: 'browser turns HTML into a live tree of objects — the Document Object Model',
  },
  {
    title: 'document object',
    text: 'the entry point — document is the whole page, window wraps the browser',
  },
  {
    title: 'getElementById',
    text: 'document.getElementById("first") — one element by its unique id',
  },
  {
    title: 'By class & tag',
    text: 'getElementsByClassName("Rohit"), getElementsByTagName("li") — live HTMLCollections',
  },
  {
    title: 'querySelector',
    text: 'CSS selectors in JS — querySelector(".Rohit") returns the first match',
  },
  {
    title: 'querySelectorAll',
    text: 'querySelectorAll("li") — a static NodeList you can forEach over',
  },
  {
    title: 'textContent vs innerHTML',
    text: 'textContent = plain text (safe); innerHTML parses tags',
  },
  {
    title: 'Changing styles',
    text: 'el.style.backgroundColor = "pink" — camelCase CSS properties',
  },
  {
    title: 'Show & hide',
    text: 'display:none hides the span; el.style.display = "inline" reveals it',
  },
  {
    title: 'The DOM tree',
    text: 'parent, children, siblings — h1 wraps the hidden span, ul holds the li items',
  },
];

const DOM_INTRO = [
  {
    icon: '🌳',
    title: 'The DOM Tree',
    titleClass: 'card-title-cyan',
    subtitle: 'index.html',
    description: 'Browser parses HTML into nested objects — html → body → h1, ul, li.',
    code: '<h1 id="first">\n  Hello Thunder Students\n  <span style="display:none">Kaise ho</span>\n</h1>',
  },
  {
    icon: '📄',
    title: 'document object',
    titleClass: 'card-title-green',
    subtitle: 'Entry point',
    description: 'document is the whole page; window is the browser around it.',
    code: 'console.log(document);\nconsole.log(document.body);\nconsole.log(document.title);',
  },
  {
    icon: '🔎',
    title: 'Inspect First',
    titleClass: 'card-title-blue',
    subtitle: 'Console.dir',
    description: 'Log an element as an object to see every property you can change.',
    code: 'const h1 = document.getElementById("first");\nconsole.dir(h1);',
  },
];

const SELECTORS = [
  {
    icon: '🆔',
    title: 'getElementById',
    titleClass: 'card-title-cyan',
    subtitle: 'One by id',
    description: 'Ids are unique — returns a single element or null.',
    code: 'const first = document.getElementById("first");\nconst second = document.getElementById("second");',
  },
  {
    icon: '🏷️',
    title: 'By Class & Tag',
    titleClass: 'card-title-green',
    subtitle: 'HTMLCollection',
    description: 'Both h2 and ul share class "Rohit" — a live collection, not an array.',
    code: 'document.getElementsByClassName("Rohit");\ndocument.getElementsByTagName("li");',
  },
  {
    icon: '🎯',
    title: 'querySelector',
    titleClass: 'card-title-amber',
    subtitle: 'CSS selector',
    description: 'First match for any CSS selector — # for id, . for class.',
    code: 'document.querySelector("#first");\ndocument.querySelector(".Rohit");',
  },
  {
    icon: '📋',
    title: 'querySelectorAll',
    titleClass: 'card-title-pink',
    subtitle: 'NodeList',
    description: 'All matches as a static NodeList — loop it with forEach.',
    code: 'const items = document.querySelectorAll("li");\nitems.forEach((li) => console.log(li.textContent));',
  },
];

const MANIPULATION = [
  {
    icon: '✍️',
    title: 'textContent',
    titleClass: 'card-title-cyan',
    subtitle: 'Plain text',
    description: 'Read or replace the text — tags are treated as literal text.',
    code: 'first.textContent = "Hello from JS!";\nconsole.log(first.textContent);',
  },
  {
    icon: '🧱',
    title: 'innerHTML',
    titleClass: 'card-title-green',
    subtitle: 'Parses tags',
    description: 'Set HTML markup — powerful but risky with untrusted input.',
    code: 'second.innerHTML = "We cover <b>lots</b> of tech";',
  },
  {
    icon: '🎨',
    title: 'style',
    titleClass: 'card-title-amber',
    subtitle: 'camelCase CSS',
    description: 'Change any CSS property — background-color becomes backgroundColor.',
    code: 'first.style.backgroundColor = "pink";\nfirst.style.fontSize = "50px";',
  },
  {
    icon: '👁️',
    title: 'Show & Hide',
    titleClass: 'card-title-pink',
    subtitle: 'display toggle',
    description: 'The span starts display:none — flip it to reveal "Kaise ho".',
    code: 'const span = first.querySelector("span");\nspan.style.display = "inline";',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 10 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description: 'Introduction to the DOM — document, selectors, content & style.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture10 Code',
    description: 'index.html — the Thunder demo page to open and inspect in the browser.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'DOM Crash Course',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'JavaScript DOM Crash Course by Traversy Media — supplement for Lecture 10.',
    link: {
      href: 'https://www.youtube.com/watch?v=0ik6X4DJKCc',
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

export default function Day010() {
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
        1,
        (window.innerHeight - pad) / wrap.scrollHeight,
        (window.innerWidth - pad) / wrap.scrollWidth,
      );

      if (scale < 0.99) {
        wrap.style.transform = `scale(${scale})`;
        wrap.style.transformOrigin = 'top center';
        if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
      }
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
          <Link to="/day-009" className="day001-nav-btn day001-nav-home">
            ← Day 9
          </Link>
          <p className="day001-datetime">📅 14th July 2026 · Thunder Day 10 · 90 days left</p>
          <Link to="/day-011" className="day001-nav-btn day001-nav-next">
            Day 11 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>JavaScript</span>
              <span>Thunder</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 10 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">INTRODUCTION TO THE DOM</p>
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
              <p className="day001-profile-role">JS · THUNDER</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '10%' }} />
        </div>

        <p className="day001-summary">
          Day ten — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 10
          </a>
          . JavaScript finally meets the page: the browser turns HTML into the DOM tree, and{' '}
          <code>document</code> lets me grab elements with getElementById, querySelector, and
          querySelectorAll, then change their text, HTML, and styles — live on the Thunder demo in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Lecture10 on GitHub
          </a>
          . This is where static pages become interactive.
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

        <CardSection icon="🌳" title="MEET THE DOM" cards={DOM_INTRO} columns={3} />
        <CardSection icon="🔎" title="SELECTING ELEMENTS" cards={SELECTORS} columns={4} />
        <CardSection icon="🛠️" title="CHANGING CONTENT & STYLE" cards={MANIPULATION} columns={4} />
        <CardSection icon="📚" title="THUNDER LECTURE 10" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#JavaScript</span>
          <span>#DOM</span>
          <span>#Thunder</span>
          <span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
