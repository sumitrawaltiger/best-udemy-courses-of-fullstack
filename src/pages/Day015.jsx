import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture15-JSON-vs-JS-Object-38843ac5cab9801e9c30f80559f919a0?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture15';

const LEARNT_TODAY = [
  {
    title: 'JSON is a string',
    text: 'a text format for exchanging data — not a JS object, just looks like one',
  },
  {
    title: 'Quoted keys only',
    text: 'JSON keys must be double-quoted strings: { "name": "Rohit" }',
  },
  {
    title: 'Allowed JSON types',
    text: 'string, number, boolean, null, object, array — no undefined, no functions',
  },
  {
    title: 'JSON.stringify',
    text: 'JS object → JSON string, ready to send over the network or store',
  },
  {
    title: 'JSON.parse',
    text: 'JSON string → JS object, so you can read it with dot notation',
  },
  {
    title: 'Why it matters',
    text: 'APIs speak JSON — response.json() parses the body string into an object',
  },
  {
    title: 'fetch returns a Promise',
    text: 'the response is Promise<pending> until it resolves — that is why we await',
  },
  {
    title: 'async / await flow',
    text: '"Start" and "End" log first; the awaited data arrives after — async is non-blocking',
  },
  {
    title: 'GitHub users API',
    text: 'fetch api.github.com/users?per_page=N, render avatar + login cards',
  },
  {
    title: 'Live-driven UI',
    text: 'typing a number re-fetches and re-renders; weather app parses nested JSON',
  },
];

const JSON_CONCEPTS = [
  {
    icon: '📄',
    title: 'JSON vs Object',
    titleClass: 'card-title-cyan',
    subtitle: 'first.js',
    description: 'JSON is a quoted string; a JS object is live memory with any value type.',
    code: 'const jsObject = { name: "Rohit", age: 20 };\nconst jSon = `{ "name": "Rohit", "age": 20 }`;',
  },
  {
    icon: '🚫',
    title: 'What JSON Allows',
    titleClass: 'card-title-amber',
    subtitle: 'Data types only',
    description: 'string, number, boolean, null, object, array — undefined & functions drop out.',
    code: 'const obj = {\n  a: undefined,   // omitted\n  b: function () {} // omitted\n};\nJSON.stringify(obj); // "{}"',
  },
  {
    icon: '🔄',
    title: 'stringify & parse',
    titleClass: 'card-title-green',
    subtitle: 'Two-way street',
    description: 'stringify turns object → string; parse turns string → object.',
    code: 'const a = JSON.stringify(jsObject); // → JSON\nconst b = JSON.parse(a);            // → object\nconsole.log(b);',
  },
];

const ASYNC_FETCH = [
  {
    icon: '⏳',
    title: 'fetch is Async',
    titleClass: 'card-title-cyan',
    subtitle: 'Promise<pending>',
    description: '"Start" and "End" log immediately; the data arrives later.',
    code: 'console.log("Start");\ngithub();       // runs in background\nconsole.log("End");',
  },
  {
    icon: '🌐',
    title: 'await response.json()',
    titleClass: 'card-title-green',
    subtitle: 'Parse the body',
    description: 'The body is a JSON string; .json() awaits and parses it to an object.',
    code: 'const response = await fetch(url);\nconst data = await response.json();\nconsole.log(data);',
  },
  {
    icon: '🧩',
    title: 'Reading Nested JSON',
    titleClass: 'card-title-amber',
    subtitle: 'Dot into the object',
    description: 'Once parsed, drill in — data.current.condition.text and friends.',
    code: 'const temp = data.current.temp_c;\nconst text = data.current.condition.text;',
  },
];

const PROJECTS = [
  {
    icon: '🐙',
    title: 'GitHub Users',
    titleClass: 'card-title-cyan',
    subtitle: 'Project01',
    description: 'Fetch N users, build an avatar + login card for each, append to root.',
    code: 'async function github(number = 20) {\n  const res = await fetch(`https://api.github.com/users?per_page=${number}`);\n  const data = await res.json();\n  for (const user of data) { /* build card */ }\n}',
  },
  {
    icon: '🔢',
    title: 'Live Count Control',
    titleClass: 'card-title-green',
    subtitle: 'input → re-fetch',
    description: 'Typing a number re-runs github(number) and re-renders the grid.',
    code: 'input.addEventListener("input", () => {\n  github(Number(input.value));\n});',
  },
  {
    icon: '🖼️',
    title: 'Build the Card',
    titleClass: 'card-title-amber',
    subtitle: 'createElement',
    description: 'Each user object gives avatar_url and login — image + name.',
    code: 'const img = document.createElement("img");\nimg.src = user.avatar_url;\nname.textContent = user.login;\ncontainer.append(img, name);',
  },
  {
    icon: '🌦️',
    title: 'Weather App',
    titleClass: 'card-title-pink',
    subtitle: 'Project02 · WeatherAPI',
    description: 'Fetch a city, parse the JSON, show temperature and condition.',
    code: 'const res = await fetch(`${API}?key=${KEY}&q=${city}`);\nconst data = await res.json();\np.textContent = `Temp: ${data.current.temp_c}`;',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 15 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description: 'JSON vs JS Object — stringify/parse, fetch, and two real API projects.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture15 Code',
    description: 'first.js JSON demo + Project01 GitHub users + Project02 weather app.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'Fetch API Intro',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Fetch API Introduction by Traversy Media — supplement for Lecture 15.',
    link: {
      href: 'https://www.youtube.com/watch?v=Oive66jrwBs',
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

export default function Day015() {
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
          <Link to="/day-014" className="day001-nav-btn day001-nav-home">
            ← Day 14
          </Link>
          <p className="day001-datetime">Thunder Day 15 · 31 Jul 2026</p>
          <Link to="/day-016" className="day001-nav-btn day001-nav-next">
            Day 16 →
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
                DAY 15 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">JSON vs JS OBJECT</p>
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
          <div className="day001-progress-bar" style={{ width: '15%' }} />
        </div>

        <p className="day001-summary">
          Day fifteen — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 15
          </a>
          . The difference that unlocks APIs: JSON is a string, a JS object is live memory. I learned
          JSON.stringify and JSON.parse, why fetch returns a pending Promise, and how response.json()
          parses the body — then built a GitHub users browser and a weather app in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Lecture15 on GitHub
          </a>
          . Real data, real APIs.
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

        <CardSection icon="📄" title="JSON vs JS OBJECT" cards={JSON_CONCEPTS} columns={3} />
        <CardSection icon="⏳" title="ASYNC & FETCH" cards={ASYNC_FETCH} columns={3} />
        <CardSection icon="🚀" title="API PROJECTS" cards={PROJECTS} columns={4} />
        <CardSection icon="📚" title="THUNDER LECTURE 15" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#JavaScript</span>
          <span>#JSON</span>
          <span>#FetchAPI</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
