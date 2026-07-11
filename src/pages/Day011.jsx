import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture11-CRUD-and-Event-in-DOM-38143ac5cab980d48176fda6b086cfef?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture11';

const LEARNT_TODAY = [
  {
    title: 'onclick handler',
    text: 'element.onclick = () => {...} — one handler slot, the classic way',
  },
  {
    title: 'addEventListener',
    text: 'element.addEventListener("click", callback) — stack many handlers per event',
  },
  {
    title: 'click vs dblclick',
    text: 'same element, different events — "click" and "dblclick" run different callbacks',
  },
  {
    title: 'createElement',
    text: 'document.createElement("h2") builds a node in memory before it hits the page',
  },
  {
    title: 'append vs prepend',
    text: 'append() adds to the end, prepend() to the start — both take many nodes',
  },
  {
    title: 'before & after',
    text: 'newEl.before(x), element.after(y) — insert as siblings around a node',
  },
  {
    title: 'id, className, classList',
    text: 'el.id = "third", classList.add("Rohit") — safer than overwriting className',
  },
  {
    title: 'Attributes',
    text: 'setAttribute("key", "val") & getAttribute("class") — read/write any attribute',
  },
  {
    title: 'children & indexing',
    text: 'ul.children[1].after(li5) — reach into the live child list',
  },
  {
    title: 'Batch with spread',
    text: 'build an array of nodes, then root.append(...arr) — one reflow, not ten',
  },
];

const EVENTS = [
  {
    icon: '👆',
    title: 'onclick',
    titleClass: 'card-title-cyan',
    subtitle: 'first.js',
    description: 'The element is an object — assign a function to its onclick slot.',
    code: 'const element = document.getElementById("first");\nelement.onclick = () => {\n  element.textContent = "Vijay bhai kaise ho";\n  element.style.backgroundColor = "pink";\n};',
  },
  {
    icon: '🎧',
    title: 'addEventListener',
    titleClass: 'card-title-green',
    subtitle: 'event + callback',
    description: 'On an event, run the callback — add as many listeners as you like.',
    code: 'element.addEventListener("click", () => {\n  element.textContent = "I am best";\n  element.style.backgroundColor = "pink";\n});',
  },
  {
    icon: '⚡',
    title: 'click vs dblclick',
    titleClass: 'card-title-blue',
    subtitle: 'Different events',
    description: 'One element reacts differently to a single vs a double click.',
    code: 'element.addEventListener("dblclick", () => {\n  element.textContent = "Double clicked!";\n});',
  },
];

const CREATE_INSERT = [
  {
    icon: '🧱',
    title: 'createElement',
    titleClass: 'card-title-cyan',
    subtitle: 'second/first.js',
    description: 'Build a node in memory, set its text, then place it on the page.',
    code: 'const newEl = document.createElement("h2");\nnewEl.textContent = "I am Sachin Kumar";',
  },
  {
    icon: '➕',
    title: 'append & prepend',
    titleClass: 'card-title-green',
    subtitle: 'Into a parent',
    description: 'append() adds children at the end, prepend() at the start.',
    code: 'const ul = document.getElementById("ul");\nul.append(li, li2, li3);\nul.prepend(li4);',
  },
  {
    icon: '↔️',
    title: 'before & after',
    titleClass: 'card-title-amber',
    subtitle: 'As siblings',
    description: 'Drop a node right before or after an existing one.',
    code: 'element.before(newEl);\nelement.after(newEl2);\nul.children[1].after(li5);',
  },
  {
    icon: '🏷️',
    title: 'id, class & attrs',
    titleClass: 'card-title-pink',
    subtitle: 'Set properties',
    description: 'classList.add avoids clobbering; setAttribute writes anything.',
    code: 'newEl.id = "third";\nnewEl.classList.add("Rohit");\nnewEl.setAttribute("piyush", "mohan");',
  },
];

const RENDER_PROJECT = [
  {
    icon: '📇',
    title: 'Render from Data',
    titleClass: 'card-title-cyan',
    subtitle: 'projects/first.js',
    description: 'Loop a users array — build an image, name, and age card each.',
    code: 'users.forEach((people) => {\n  const name = document.createElement("h2");\n  name.textContent = `Name: ${people.name}`;\n  // ...img + age + card\n});',
  },
  {
    icon: '🖼️',
    title: 'Build the Card',
    titleClass: 'card-title-green',
    subtitle: 'Nested nodes',
    description: 'A div holds the photo, name, and age — append them together.',
    code: 'const image = document.createElement("img");\nimage.src = people.photo;\nconst card = document.createElement("div");\ncard.append(image, name, age);',
  },
  {
    icon: '🚀',
    title: 'Batch Append',
    titleClass: 'card-title-amber',
    subtitle: 'One reflow',
    description: 'Collect cards in an array, then spread them into root once.',
    code: 'const arr = [];\n// arr.push(card) each loop\nroot.append(...arr);',
  },
  {
    icon: '📄',
    title: 'Fragment Pattern',
    titleClass: 'card-title-pink',
    subtitle: 'foods list',
    description: 'Same idea for a list — gather li nodes, append in one shot.',
    code: 'const arr = [];\nfor (const food of foods) {\n  const li = document.createElement("li");\n  li.textContent = food;\n  arr.push(li);\n}\nul.append(...arr);',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 11 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description: 'CRUD & Events in the DOM — createElement, append, listeners, rendering.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture11 Code',
    description: 'first.js events, second/ CRUD, projects/ user-card render, data.js.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'Event Listeners',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'JavaScript Event Listeners by Web Dev Simplified — supplement for Lecture 11.',
    link: {
      href: 'https://www.youtube.com/watch?v=XF1_MlZ5l6M',
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

export default function Day011() {
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
          <Link to="/day-010" className="day001-nav-btn day001-nav-home">
            ← Day 10
          </Link>
          <p className="day001-datetime">Thunder Day 11 · 15 Jul 2026</p>
          <Link to="/day-012" className="day001-nav-btn day001-nav-next">
            Day 12 →
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
                DAY 11 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">DOM CRUD & EVENTS</p>
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
          <div className="day001-progress-bar" style={{ width: '11%' }} />
        </div>

        <p className="day001-summary">
          Day eleven — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 11
          </a>
          . The page came alive: onclick and addEventListener wire up user events, then createElement,
          append/prepend/before/after and classList let me build and place nodes. I capped it off by
          rendering a grid of user cards straight from a data array in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Lecture11 on GitHub
          </a>
          . This is the heart of every interactive UI.
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

        <CardSection icon="🎧" title="EVENTS" cards={EVENTS} columns={3} />
        <CardSection icon="🧱" title="CREATE & INSERT NODES" cards={CREATE_INSERT} columns={4} />
        <CardSection icon="📇" title="RENDER FROM DATA" cards={RENDER_PROJECT} columns={4} />
        <CardSection icon="📚" title="THUNDER LECTURE 11" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#JavaScript</span>
          <span>#DOM</span>
          <span>#Events</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
