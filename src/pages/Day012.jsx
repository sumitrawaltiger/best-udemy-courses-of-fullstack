import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture12-Even-and-Project-in-Javascript-38343ac5cab980aab918f7f4dc5c2fff?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture12';

const LEARNT_TODAY = [
  {
    title: 'The event object',
    text: 'the callback gets e — e.target is the exact element that fired it',
  },
  {
    title: 'Event delegation',
    text: 'one listener on the parent handles all children via e.target',
  },
  {
    title: 'Bubbling vs capturing',
    text: 'events bubble child→parent; the true flag on addEventListener flips to capture',
  },
  {
    title: 'removeEventListener',
    text: 'a named handler can unhook itself — fire once, then stop listening',
  },
  {
    title: 'Random Quote Generator',
    text: 'Math.floor(Math.random()*50) picks a quote, click swaps the h2',
  },
  {
    title: 'Color switcher',
    text: 'button ids 0–4 index a color array — dblclick on the parent, read e.target.id',
  },
  {
    title: 'Counter with guard',
    text: 'increment/decrement, if (count == 0) return to block going negative',
  },
  {
    title: 'Form submit',
    text: 'e.preventDefault() stops the reload; Number(input.value) adds the numbers',
  },
  {
    title: 'Live text counter',
    text: 'the input event fires on every keystroke — trim().split(" ") for words',
  },
  {
    title: 'Homework: joke generator',
    text: 'data.js jokes array — same random-pick pattern as the quote app',
  },
];

const EVENT_CONCEPTS = [
  {
    icon: '🎯',
    title: 'Event Object & target',
    titleClass: 'card-title-cyan',
    subtitle: 'Eventsjs/first.js',
    description: 'The callback receives e — e.target is the element actually clicked.',
    code: 'parent.addEventListener("click", (e) => {\n  console.log(e);\n  e.target.textContent = "I am clicked";\n});',
  },
  {
    icon: '🫧',
    title: 'Bubbling & Capturing',
    titleClass: 'card-title-green',
    subtitle: 'Third argument',
    description: 'Events bubble child → parent; pass true to listen in the capture phase.',
    code: 'grandParent.addEventListener("click", fn, true);  // capture\nparent.addEventListener("click", fn, false);     // bubble',
  },
  {
    icon: '🔌',
    title: 'removeEventListener',
    titleClass: 'card-title-blue',
    subtitle: 'Named handler',
    description: 'A named function can unhook itself — react once, then stop listening.',
    code: 'function handle() {\n  button.textContent = "Clicked";\n  button.removeEventListener("click", handle);\n}\nbutton.addEventListener("click", handle);',
  },
];

const PROJECTS_A = [
  {
    icon: '💬',
    title: 'Random Quote Generator',
    titleClass: 'card-title-cyan',
    subtitle: 'Project1',
    description: '50 quotes — click the button, a random one lands in the h2.',
    code: 'button.addEventListener("click", () => {\n  const index = Math.floor(Math.random() * 50);\n  h2.textContent = quotes[index];\n});',
  },
  {
    icon: '🎨',
    title: 'Color Switcher',
    titleClass: 'card-title-green',
    subtitle: 'Project2 · delegation',
    description: 'Button ids 0–4 index a color array; dblclick the parent, read e.target.id.',
    code: 'const color = ["red", "blue", "orange", "green", "pink"];\nparent.addEventListener("dblclick", (e) => {\n  body.style.backgroundColor = color[e.target.id];\n});',
  },
  {
    icon: '🔢',
    title: 'Counter',
    titleClass: 'card-title-amber',
    subtitle: 'Project3 · guard',
    description: 'Increment and decrement, with a guard so the count never goes below 0.',
    code: 'Button2.addEventListener("click", () => {\n  if (count == 0) return;\n  count--;\n  h1.textContent = `Counter is: ${count}`;\n});',
  },
];

const PROJECTS_B = [
  {
    icon: '➕',
    title: 'Form Adder',
    titleClass: 'card-title-cyan',
    subtitle: 'Project4 · submit',
    description: 'preventDefault stops the reload; Number() converts inputs before adding.',
    code: 'form.addEventListener("submit", (e) => {\n  e.preventDefault();\n  const n1 = Number(first.value);\n  const n2 = Number(second.value);\n  p.textContent = `Result is: ${n1 + n2}`;\n});',
  },
  {
    icon: '📝',
    title: 'Live Text Counter',
    titleClass: 'card-title-green',
    subtitle: 'Project5 · input',
    description: 'The input event fires per keystroke — trim, split, count chars & words.',
    code: 'TextArea.addEventListener("input", () => {\n  const total = TextArea.value.trim();\n  const arr = total.split(" ");\n  TextCount.textContent = `TextCount: ${total.length}`;\n});',
  },
  {
    icon: '😂',
    title: 'Joke Generator',
    titleClass: 'card-title-amber',
    subtitle: 'data.js · homework',
    description: 'Ten jokes in an array — reuse the random-pick pattern from Project 1.',
    code: 'const index = Math.floor(Math.random() * jokes.length);\nel.textContent = jokes[index];',
  },
  {
    icon: '🧠',
    title: 'Why It Matters',
    titleClass: 'card-title-pink',
    subtitle: 'Events + DOM + data',
    description: 'Every project is the same loop: select, listen, update from state or data.',
    code: '// select → addEventListener → update DOM\n// this pattern powers every UI',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 12 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description: 'Events & Projects — delegation, bubbling, and 5 hands-on mini apps.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture12 Code',
    description: 'Eventsjs + Project1–5 + data.js — quote, color, counter, form, text counter.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'Event Listeners',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'JavaScript Event Listeners by Web Dev Simplified — supplement for Lecture 12.',
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

export default function Day012() {
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
          <Link to="/day-011" className="day001-nav-btn day001-nav-home">
            ← Day 11
          </Link>
          <p className="day001-datetime">Thunder Day 12 · 88 days left</p>
          <Link to="/day-013" className="day001-nav-btn day001-nav-next">
            Day 13 →
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
                DAY 12 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">EVENTS & PROJECTS</p>
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
          <div className="day001-progress-bar" style={{ width: '12%' }} />
        </div>

        <p className="day001-summary">
          Day twelve — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 12
          </a>
          . First the deeper event model — the event object, delegation via <code>e.target</code>,
          bubbling vs capturing, and removing listeners — then five mini projects: a quote generator,
          color switcher, counter, form adder, and live text counter in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Lecture12 on GitHub
          </a>
          . This is the day JavaScript stops being theory.
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

        <CardSection icon="🎧" title="EVENT MODEL" cards={EVENT_CONCEPTS} columns={3} />
        <CardSection icon="🛠️" title="MINI PROJECTS — PART 1" cards={PROJECTS_A} columns={3} />
        <CardSection icon="🚀" title="MINI PROJECTS — PART 2" cards={PROJECTS_B} columns={4} />
        <CardSection icon="📚" title="THUNDER LECTURE 12" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#JavaScript</span>
          <span>#Events</span>
          <span>#Projects</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
