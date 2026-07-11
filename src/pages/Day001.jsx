import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture01-Introduction-to-Javascript-37243ac5cab9802293fff4573c26a6f4?source=copy_link';

const LEARNT_TODAY = [
  {
    title: 'What JavaScript is',
    text: 'the programming language that adds behavior to the web — clicks, forms, data fetching, and live updates',
  },
  {
    title: 'Where JavaScript runs',
    text: 'inside the browser on the V8 engine (Chrome & Node.js) — your code is compiled and executed, not just read',
  },
  {
    title: 'HTML, CSS & JS together',
    text: 'HTML is the skeleton, CSS is the clothes, JavaScript is the brain — all three layers build a real website',
  },
  {
    title: 'v1 → v2 → v3 progression',
    text: 'v1-html is dead structure, v2-css looks gorgeous but still cannot compute, v3-js finally makes every button work',
  },
  {
    title: 'Adding JS to HTML',
    text: 'use <script> tags or external .js files — load scripts at the end of <body> so the DOM exists first',
  },
  {
    title: 'console.log()',
    text: 'your first debugging tool in DevTools (F12) — print values and trace what your code is doing',
  },
  {
    title: 'let & const',
    text: 'declare variables that change (let) or stay fixed (const) — avoid var in modern JavaScript',
  },
  {
    title: 'Comments',
    text: 'single-line // and multi-line /* */ to explain your code to yourself and others',
  },
  {
    title: 'Event listeners',
    text: 'addEventListener("click", ...) — the pattern that makes buttons, calculators, and toggles respond',
  },
  {
    title: 'fetch & live data',
    text: 'JavaScript can reach the internet — Thunder v3-js loads 10 real GitHub profiles with fetch()',
  },
];

const JS_BASICS = [
  {
    icon: '🌐',
    title: 'What is JavaScript?',
    titleClass: 'card-title-cyan',
    subtitle: 'Language of the Web',
    description:
      'JavaScript (JS) is the programming language of the web. HTML gives structure, CSS gives style, and JavaScript gives behavior. Without JS, buttons do not count clicks, calculators cannot add, and pages cannot fetch live data.',
    footer: '+ Pretty does not mean functional until JavaScript enters',
  },
  {
    icon: '⚙️',
    title: 'V8 Engine',
    titleClass: 'card-title-purple',
    subtitle: 'How JS Actually Runs',
    description:
      'Your browser does not "read" JavaScript like HTML. The V8 engine (used in Chrome and Node.js) compiles and runs your code. Thunder includes a tiny C++ demo (v8.cpp) that parses console.log — a peek under the hood.',
    code: 'console.log("hello Ji");\n// V8 turns this into real output',
  },
  {
    icon: '🦴',
    title: 'HTML, CSS & JS',
    titleClass: 'card-title-amber',
    subtitle: 'Skeleton · Clothes · Brain',
    description:
      'Think of a website like a person: HTML is the skeleton, CSS is the clothes, JavaScript is the brain and actions. Lecture 01 walks the same Thunder page through three versions.',
    link: { href: '/learn/introduction-to-javascript', label: 'Open full Day 1 lesson →' },
  },
];

const THREE_VERSIONS = [
  {
    icon: '📄',
    title: 'v1-html',
    titleClass: 'card-title-green',
    subtitle: 'Pure HTML — Dead but Structured',
    description:
      'Every button, input, and box already exists. HTML built the skeleton. But nothing reacts — click a button and nothing happens. Pretty? No. Functional? No.',
    footer: '+ "Status: nothing has happened (and nothing will)."',
  },
  {
    icon: '🎨',
    title: 'v2-css',
    titleClass: 'card-title-blue',
    subtitle: 'HTML + CSS — The Trap Stage',
    description:
      'CSS makes the page gorgeous — hover effects, cards, spacing. Students often think the site is "done." But clicking still does nothing. Hover is CSS, not JavaScript.',
    footer: '+ "Hover works. Clicking still does nothing."',
  },
  {
    icon: '⚡',
    title: 'v3-js',
    titleClass: 'card-title-lime',
    subtitle: 'HTML + CSS + JavaScript — Alive',
    description:
      'Now everything works: click counter, mini calculator, live GitHub profiles from the internet, and a dark/light theme toggle. The buttons existed since v1 — JS gave them a brain.',
    link: {
      href: 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture01/v3-js',
      label: 'Explore v3-js on GitHub →',
      external: true,
    },
  },
];

const FIRST_CODE = [
  {
    icon: '📜',
    title: 'Adding JS to HTML',
    titleClass: 'card-title-cyan',
    subtitle: 'Script Tags',
    description:
      'Place inline JS inside <script> tags or link an external file. Thunder loads script.js at the end of <body> so every element exists before JS runs.',
    code: '<script src="script.js"></script>',
  },
  {
    icon: '🖥️',
    title: 'console.log',
    titleClass: 'card-title-green',
    subtitle: 'Your First Debugging Tool',
    description:
      'Open DevTools (F12) → Console. Print values, trace variables, and debug while learning. This is how every developer inspects their code.',
    code: 'console.log("Hello, Thunder!");\nconsole.log(42);\nlet name = "Sumit";\nconsole.log("Day 1:", name);',
  },
  {
    icon: '📦',
    title: 'let & const',
    titleClass: 'card-title-blue',
    subtitle: 'Variables',
    description:
      'Use let for values that change and const for values that stay fixed. Thunder v3 uses let clickCount = 0 to remember how many times you clicked.',
    code: 'let score = 0;\nscore = 10;\nconst course = "Thunder";\nconsole.log(course, score);',
  },
  {
    icon: '💬',
    title: 'Comments',
    titleClass: 'card-title-pink',
    subtitle: '// and /* */',
    description:
      'Comments are ignored by the engine but invaluable for learners. Thunder script.js is heavily commented — read top to bottom with the lecture.',
    code: '// Day 1 — Introduction to JS\n/* Thunder 100 Days */',
  },
];

const V3_FEATURES = [
  {
    icon: '👆',
    title: 'Click Counter',
    titleClass: 'card-title-purple',
    subtitle: 'addEventListener',
    description:
      'Find the button with getElementById, then listen for "click". A let variable counts clicks and updates the status text on the page.',
    code: 'clickBtn.addEventListener("click", function () {\n  clickCount++;\n  clickStatus.textContent = `Clicked ${clickCount} time(s)!`;\n});',
  },
  {
    icon: '🧮',
    title: 'Mini Calculator',
    titleClass: 'card-title-amber',
    subtitle: 'Reading Input Values',
    description:
      'Read two number inputs, convert text to numbers with Number(), guard against empty boxes, then display the sum.',
    code: 'const a = Number(num1.value);\nconst b = Number(num2.value);\ncalcResult.textContent = `Result: ${a} + ${b} = ${a + b}`;',
  },
  {
    icon: '🐙',
    title: 'GitHub Profiles',
    titleClass: 'card-title-cyan',
    subtitle: 'fetch() & async/await',
    description:
      'HTML and CSS can never talk to the internet on their own. JavaScript uses fetch() to get real user data from GitHub API and builds profile cards on the fly.',
    code: 'const response = await fetch(\n  "https://api.github.com/users?per_page=10"\n);\nconst users = await response.json();',
  },
  {
    icon: '🌙',
    title: 'Theme Toggle',
    titleClass: 'card-title-lime',
    subtitle: 'classList.toggle',
    description:
      'Flip a "dark" class on document.body — CSS handles the rest. Swap the button icon between moon and sun. Small feature, big lesson in DOM manipulation.',
    code: 'document.body.classList.toggle("dark");\nthemeToggle.textContent = isDark ? "☀️" : "🌙";',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 01 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description:
      'Introduction to JavaScript — V8 engine, HTML/CSS/JS layers, v1/v2/v3 progression, console.log, variables, comments, event listeners, and fetch.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture01 Code',
    description:
      'v1-html, v2-css, v3-js, and v8.cpp — walk the folders in order and see how the same Thunder page evolves from dead HTML to a living app.',
    link: {
      href: 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture01',
      label: 'View on GitHub →',
      external: true,
    },
  },
  {
    icon: '▶️',
    title: 'Coder Army — Lecture 01',
    titleClass: 'card-title-amber',
    subtitle: 'Rohit Negi · YouTube',
    description:
      'Introduction to JavaScript | Javascript Full Course #01 — the free video that pairs with Thunder Lecture 01 and these Notion notes.',
    link: {
      href: 'https://www.youtube.com/watch?v=611_04Ml25c',
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

export default function Day001() {
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
        <Link to="/" className="day001-nav-btn day001-nav-home">
          Home
        </Link>
        <p className="day001-datetime">Thunder Day 1 · 5 Jul 2026</p>
        <Link to="/day-002" className="day001-nav-btn day001-nav-next">
          Day 2 →
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
              DAY 1 <span aria-hidden="true">⚡</span>
            </h1>
            <p className="day001-day-theme">OF BECOMING A SOFTWARE DEVELOPER</p>
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
        <div className="day001-progress-bar" style={{ width: '1%' }} />
      </div>

      <p className="day001-summary">
        Day one of my 100-day journey to become a software developer — following{' '}
        <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
          Thunder Lecture 01
        </a>
        . I learned what JavaScript is, how the V8 engine runs it, why HTML/CSS alone are not enough,
        and walked through v1-html → v2-css → v3-js. I wrote my first <code>console.log</code>, used{' '}
        <code>let</code> and <code>const</code>, added event listeners, and fetched live GitHub
        profiles. The web finally has a brain.
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

      <CardSection icon="📘" title="JAVASCRIPT BASICS" cards={JS_BASICS} columns={3} />
      <CardSection icon="🔄" title="v1 → v2 → v3 PROGRESSION" cards={THREE_VERSIONS} columns={3} />
      <CardSection
        icon="🛠️"
        title="FIRST STEPS IN CODE"
        cards={[...FIRST_CODE, ...V3_FEATURES]}
        columns={4}
      />
      <CardSection icon="📚" title="THUNDER LECTURE 01" cards={THUNDER_RESOURCES} columns={3} />

      <footer className="day001-hashtags">
        <span>#100DaysOfCode</span>
        <span>#JavaScript</span>
        <span>#Thunder</span>
        <span>#WebDev</span>
        <span>#JSLearnHub</span>
      </footer>
      </div>
    </div>
  );
}
