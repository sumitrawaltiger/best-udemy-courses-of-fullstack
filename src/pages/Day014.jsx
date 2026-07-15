import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture14-Project-in-Javascript-38443ac5cab9809ba1e9fbcf3c776723?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture14';

const LEARNT_TODAY = [
  {
    title: 'Answer-key grading',
    text: 'store correct answers in an object, compare each radio value on submit',
  },
  {
    title: 'Reading radio inputs',
    text: 'form.q1.value or querySelector("input[name=q1]:checked") gives the picked option',
  },
  {
    title: 'Scoring & feedback',
    text: 'count correct, then colour cells correct / wrong / missed',
  },
  {
    title: 'Game state in an array',
    text: 'gridBox[9] holds the board — the single source of truth, not the DOM',
  },
  {
    title: 'Win detection',
    text: 'checkWinner tests all 8 lines — 3 rows, 3 cols, 2 diagonals',
  },
  {
    title: 'Turn toggling',
    text: "turn flips 'X' ↔ 'O' each valid move; status text follows it",
  },
  {
    title: 'Guard clauses',
    text: 'ignore the click if the game is won, drawn, or the cell is already filled',
  },
  {
    title: 'Draw detection',
    text: 'totalInsert === 9 with no winner means the game is a draw',
  },
  {
    title: 'Reset',
    text: 'clear the array, blank the cells, and reset flags and status',
  },
  {
    title: 'Weather via fetch',
    text: 'type a city, fetch a weather API, render temp/condition or an error state',
  },
];

const QUIZ_PROJECT = [
  {
    icon: '🏏',
    title: 'Cricket Quiz',
    titleClass: 'card-title-cyan',
    subtitle: 'Project01',
    description: '10 radio questions; an answers object holds the key for grading.',
    code: 'const answers = {\n  q1: "Sachin Tendulkar",\n  q2: "11",\n  q3: "West Indies",\n  // ...q10\n};',
  },
  {
    icon: '✅',
    title: 'Grade on Submit',
    titleClass: 'card-title-green',
    subtitle: 'Compare & score',
    description: 'preventDefault, loop the key, compare the checked radio, tally the score.',
    code: 'let score = 0;\nfor (const q in answers) {\n  const picked = form[q].value;\n  if (picked === answers[q]) score++;\n}',
  },
  {
    icon: '🎨',
    title: 'Visual Feedback',
    titleClass: 'card-title-amber',
    subtitle: 'correct / wrong / missed',
    description: 'CSS classes turn each option green, red, or amber after submitting.',
    code: 'label.classList.add(\n  picked === correct ? "correct" : "wrong"\n);',
  },
];

const TICTACTOE = [
  {
    icon: '🎮',
    title: 'Board as State',
    titleClass: 'card-title-cyan',
    subtitle: 'Project02',
    description: 'A 9-slot array is the source of truth; the DOM just mirrors it.',
    code: 'const gridBox = ["","","","","","","","",""];\nlet totalInsert = 0;\nlet turn = "X";',
  },
  {
    icon: '🏆',
    title: 'checkWinner',
    titleClass: 'card-title-green',
    subtitle: '8 winning lines',
    description: 'Rows 012/345/678, cols 036/147/258, diagonals 048/246.',
    code: 'if (gridBox[0] == player &&\n    gridBox[1] == player &&\n    gridBox[2] == player) return true;\n// ...7 more lines',
  },
  {
    icon: '🖱️',
    title: 'Click + Guards',
    titleClass: 'card-title-amber',
    subtitle: 'Delegation on board',
    description: 'Ignore clicks if won, drawn, or the cell is already filled.',
    code: 'board.addEventListener("click", (e) => {\n  if (winnerDecided || totalInsert == 9 ||\n      gridBox[e.target.id] != "") return;\n  // place mark, check win/draw, flip turn\n});',
  },
  {
    icon: '🔄',
    title: 'Draw & Reset',
    titleClass: 'card-title-pink',
    subtitle: 'Full game loop',
    description: '9 filled with no winner = draw; reset clears array, cells, and flags.',
    code: 'for (let i = 0; i < 9; i++) {\n  document.getElementById(i).textContent = "";\n  gridBox[i] = "";\n}\ntotalInsert = 0;\nwinnerDecided = false;',
  },
];

const WEATHER_PROJECT = [
  {
    icon: '🌦️',
    title: 'Weather App',
    titleClass: 'card-title-cyan',
    subtitle: 'Project03',
    description: 'A city input + button; fetch a weather API and render the result.',
    code: 'button.addEventListener("click", async () => {\n  const city = cityInput.value.trim();\n  if (!city) return;\n  weatherBox.innerHTML = \'<p class="loading">Loading...</p>\';\n});',
  },
  {
    icon: '📡',
    title: 'Fetch & Render',
    titleClass: 'card-title-green',
    subtitle: 'async + JSON',
    description: 'Await the response, read .json(), then paint temp and condition.',
    code: 'const res = await fetch(apiUrl + city);\nconst data = await res.json();\nweatherBox.innerHTML =\n  `<p class="temperature">${data.temp}°</p>`;',
  },
  {
    icon: '🧭',
    title: 'The Capstone Pattern',
    titleClass: 'card-title-amber',
    subtitle: 'Everything together',
    description: 'HTML structure → CSS layout → JS state, events, and async data.',
    code: '// plan → build markup → style\n// → wire events → manage state\n// → fetch data → render',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 14 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description: 'Capstone Projects — quiz grading, game logic, and a weather app.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture14 Code',
    description: 'Project01 quiz, Project02 tic-tac-toe, Project03 weather app.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: '5 Mini Projects',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: '5 Mini JavaScript Projects by Ania Kubów — supplement for Lecture 14.',
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

export default function Day014() {
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
          <Link to="/day-013" className="day001-nav-btn day001-nav-home">
            ← Day 13
          </Link>
          <p className="day001-datetime">Thunder Day 14 · 30 Jul 2026</p>
          <Link to="/day-015" className="day001-nav-btn day001-nav-next">
            Day 15 →
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
                DAY 14 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">CAPSTONE PROJECTS</p>
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
          <div className="day001-progress-bar" style={{ width: '14%' }} />
        </div>

        <p className="day001-summary">
          Day fourteen — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 14
          </a>
          . Capstone day: a 10-question Cricket Quiz graded against an answer key, a full Tic Tac Toe
          with array-backed game state and win/draw detection, and a fetch-powered Weather App in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Lecture14 on GitHub
          </a>
          . Everything from the last two weeks — DOM, events, state, and async — in real apps.
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

        <CardSection icon="🏏" title="PROJECT 1 — CRICKET QUIZ" cards={QUIZ_PROJECT} columns={3} />
        <CardSection icon="🎮" title="PROJECT 2 — TIC TAC TOE" cards={TICTACTOE} columns={4} />
        <CardSection icon="🌦️" title="PROJECT 3 — WEATHER APP" cards={WEATHER_PROJECT} columns={3} />
        <CardSection icon="📚" title="THUNDER LECTURE 14" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#JavaScript</span>
          <span>#Projects</span>
          <span>#TicTacToe</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
