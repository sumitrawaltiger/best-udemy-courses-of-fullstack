import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture12-Even-and-Project-in-Javascript-38343ac5cab980aab918f7f4dc5c2fff?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture13';

const LEARNT_TODAY = [
  {
    title: 'Reading input values',
    text: 'input.value is always a string — .length, Number(), and trim() come in handy',
  },
  {
    title: 'Password strength loop',
    text: 'walk each char, flag capital/small/number/special, then check length ≥ 8',
  },
  {
    title: 'setInterval',
    text: 'run a callback every N ms — a live clock is new Date().toLocaleString() each second',
  },
  {
    title: 'setTimeout vs setInterval',
    text: 'setTimeout fires once; setInterval repeats until cleared',
  },
  {
    title: 'Countdown maths',
    text: 'target timestamp − Date.now(), then divide down into days/hours/mins/secs',
  },
  {
    title: 'async / await + fetch',
    text: 'await fetch(url), await response.text() — talk to a real AI text API',
  },
  {
    title: 'Loading & disabled states',
    text: 'show "AI is thinking…", disable the button, remove the bubble when the reply lands',
  },
  {
    title: 'new Image() + onload',
    text: 'preload in memory, swap it in only once onload fires — no broken images',
  },
  {
    title: 'encodeURIComponent',
    text: 'make spaces and symbols URL-safe before building an API endpoint',
  },
  {
    title: 'Multi-field forms',
    text: 'astrology app reads 5 fields, indexes arrays by day/month/year for a result',
  },
];

const PROJECTS_A = [
  {
    icon: '💘',
    title: 'Love Calculator',
    titleClass: 'card-title-cyan',
    subtitle: 'project01',
    description: 'Two names in — value.length feeds a formula, result mod 101 as a percent.',
    code: 'const v1 = Boys.value.length;\nconst v2 = Girls.value.length;\nconst result = (v1 * v2 * v1 * v2) % 101;\nh2.textContent = `Result is: ${result}%`;',
  },
  {
    icon: '🔒',
    title: 'Password Strength',
    titleClass: 'card-title-green',
    subtitle: 'Project02 · input',
    description: 'Scan each char for capital/small/number/special, require length ≥ 8.',
    code: 'for (let i = 0; i < password.length; i++) {\n  const ch = password[i];\n  if (ch >= "A" && ch <= "Z") hasCapital = true;\n  // ...small, number, special\n}',
  },
  {
    icon: '🕐',
    title: 'Digital Clock',
    titleClass: 'card-title-amber',
    subtitle: 'Project03 · setInterval',
    description: 'Every second, paint the current time from a fresh Date object.',
    code: 'setInterval(() => {\n  const time = new Date();\n  h1.textContent = time.toLocaleString();\n}, 1000);',
  },
  {
    icon: '⏳',
    title: 'Olympic Countdown',
    titleClass: 'card-title-pink',
    subtitle: 'Project04 · timestamps',
    description: 'Subtract now from the 2028 timestamp, break it into d:h:m:s.',
    code: 'const remaining = olympicTs - Date.now();\nconst days = Math.floor(remaining / (1000 * 60 * 60 * 24));\n// then hours, minutes, seconds',
  },
];

const PROJECTS_B = [
  {
    icon: '🤖',
    title: 'AI Chatbot',
    titleClass: 'card-title-cyan',
    subtitle: 'Projectchat · async/fetch',
    description: 'Await a real text API, show a loading bubble, auto-scroll the chat.',
    code: 'const url = "https://text.pollinations.ai/" + encodeURIComponent(message);\nconst response = await fetch(url);\nconst aiReply = await response.text();',
  },
  {
    icon: '🎨',
    title: 'AI Image Generator',
    titleClass: 'card-title-green',
    subtitle: 'Projectimg · new Image()',
    description: 'An <img> src can be an AI URL — preload, then swap in onload.',
    code: 'const img = new Image();\nimg.onload = () => imageArea.appendChild(img);\nimg.src = "https://image.pollinations.ai/prompt/" + encodeURIComponent(prompt);',
  },
  {
    icon: '🔮',
    title: 'Astrology Insights',
    titleClass: 'card-title-amber',
    subtitle: 'projectastro · form',
    description: 'Read 5 fields on submit, index arrays by day/month/year for a reading.',
    code: 'const text = `Your Zodiac sign is ${zodiacSigns[month - 1]}.\n${compliments[day - 1]}. ${predictions[(name.length * surname.length) % 20]}`;',
  },
  {
    icon: '🧩',
    title: 'The Common Pattern',
    titleClass: 'card-title-pink',
    subtitle: 'Every project',
    description: 'Select → listen → compute or fetch → render. Timers and APIs just extend it.',
    code: '// select → addEventListener\n// → compute / await fetch\n// → update the DOM',
  },
];

const NEW_TOOLS = [
  {
    icon: '⏱️',
    title: 'Timers',
    titleClass: 'card-title-cyan',
    subtitle: 'setInterval / setTimeout',
    description: 'Repeat every N ms, or fire once after a delay — the heart of clocks & countdowns.',
    code: 'setInterval(fn, 1000); // every second\nsetTimeout(fn, 3000);  // once, after 3s',
  },
  {
    icon: '🌐',
    title: 'async / await + fetch',
    titleClass: 'card-title-green',
    subtitle: 'Real network calls',
    description: 'await pauses for the response — .text() or .json() reads the body.',
    code: 'const res = await fetch(url);\nconst data = await res.text();',
  },
  {
    icon: '🖼️',
    title: 'Image Preloading',
    titleClass: 'card-title-amber',
    subtitle: 'new Image() + onload',
    description: 'Build an img in memory, wait for onload, then attach — no flicker.',
    code: 'const img = new Image();\nimg.onload = () => root.appendChild(img);\nimg.src = url;',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 13 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description: 'Projects Part 2 — timers, async fetch, AI chat & image, form-driven apps.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture13 Code',
    description: 'project01–04 + Projectchat, Projectimg, projectastro — 7 mini apps.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: '5 Mini Projects',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: '5 Mini JavaScript Projects by Ania Kubów — supplement for Lecture 13.',
    link: {
      href: 'https://www.youtube.com/watch?v=2ml4x0rO1PQ',
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

export default function Day013() {
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
          <Link to="/day-012" className="day001-nav-btn day001-nav-home">
            ← Day 12
          </Link>
          <p className="day001-datetime">Thunder Day 13 · 87 days left</p>
          <Link to="/day-014" className="day001-nav-btn day001-nav-next">
            Day 14 →
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
                DAY 13 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">JS PROJECTS · PART 2</p>
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
          <div className="day001-progress-bar" style={{ width: '13%' }} />
        </div>

        <p className="day001-summary">
          Day thirteen — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 13
          </a>
          . Seven projects that pushed past static UIs: a love calculator, password-strength meter,
          live clock, Olympic countdown, and — the big ones — an AI chatbot and image generator using
          async/await and fetch, plus a form-driven astrology app in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Lecture13 on GitHub
          </a>
          . Timers and real APIs made JavaScript feel alive.
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

        <CardSection icon="🛠️" title="PROJECTS — INPUTS & TIMERS" cards={PROJECTS_A} columns={4} />
        <CardSection icon="🚀" title="PROJECTS — ASYNC & FORMS" cards={PROJECTS_B} columns={4} />
        <CardSection icon="🧰" title="NEW TOOLS UNLOCKED" cards={NEW_TOOLS} columns={3} />
        <CardSection icon="📚" title="THUNDER LECTURE 13" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#JavaScript</span>
          <span>#Projects</span>
          <span>#AsyncAwait</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
