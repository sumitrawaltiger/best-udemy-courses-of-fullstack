import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture03';
const GH_LECTURE_UI = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture03.1';

const LEARNT_TODAY = [
  { title: 'Chat session recap', text: 'ai.chats.create keeps the conversation history automatically across chat.sendMessage calls' },
  { title: 'A tutor persona', text: 'a strict systemInstruction turns the model into a coding tutor that answers from first principles' },
  { title: 'Guardrails', text: 'the instruction can force the AI to refuse anything off-topic — answer only coding questions' },
  { title: 'Terminal chatbot', text: 'a readline-sync while-loop drives a back-and-forth chat until you type exit' },
  { title: 'Into the browser', text: 'import @google/genai from a CDN (ESM) and the exact same chat runs in the browser' },
  { title: 'A real chat UI', text: 'render user and AI messages into the DOM, format code blocks, and show a typing indicator' },
  { title: 'Key exposure warning', text: 'putting the API key in front-end JavaScript is fine for learning but leaks it — never ship it that way' },
  { title: 'One brain, two frontends', text: 'terminal and web share the identical chat session and systemInstruction — only the UI differs' },
];

const TUTOR = [
  {
    icon: '👨‍🏫', title: 'The Tutor Persona', titleClass: 'card-title-cyan', subtitle: 'systemInstruction',
    description:
      'A strict systemInstruction shapes the whole conversation: answer only coding questions, explain from first principles, and stay to the point. The persona is set once at chat creation.',
    code: 'const chat = ai.chats.create({\n  model: "gemini-2.5-flash",\n  systemInstruction: `You are a programming tutor.\n  - Only answer coding questions\n  - Refuse anything unrelated to coding\n  - Explain using first principles, to the point`,\n});',
  },
  {
    icon: '🔁', title: 'The Chat Loop', titleClass: 'card-title-purple', subtitle: 'Memory + readline',
    description:
      'The chat session remembers every turn, so follow-up questions keep context. A readline-sync loop reads input until "exit" — a complete terminal tutor.',
    code: 'while (true) {\n  const q = readlineSync.question("Ask me a question: ");\n  if (q === "exit") break;\n  const res = await chat.sendMessage({ message: q });\n  console.log("Response:", res.text);\n}',
  },
  {
    icon: '🛡️', title: 'Guardrails', titleClass: 'card-title-amber', subtitle: 'Stay On Topic',
    description:
      'Because the rules live in the systemInstruction, the model politely refuses off-topic questions on its own — no extra code. That is prompt-level control over behaviour.',
    code: '// User: "What is the weather?"\n// AI:   "I only answer coding questions." ✅',
  },
];

const BROWSER = [
  {
    icon: '🌐', title: 'SDK In The Browser', titleClass: 'card-title-cyan', subtitle: 'CDN ESM Import',
    description:
      'No bundler needed — import the SDK straight from a CDN as an ES module in a plain HTML page, and create the same chat session client-side.',
    code: 'import { GoogleGenAI } from\n  "https://cdn.jsdelivr.net/npm/@google/genai@1.32.0/+esm";\n\nconst ai = new GoogleGenAI({ apiKey: "YOUR_KEY" });\nconst chat = ai.chats.create({ model: "gemini-2.5-flash" });',
  },
  {
    icon: '🎨', title: 'A Real Chat UI', titleClass: 'card-title-purple', subtitle: 'DOM + Formatting',
    description:
      'Append each message as a styled bubble, convert markdown code fences to <pre><code>, and add a typing indicator while waiting — it starts to feel like a real product.',
    code: 'function formatMessage(text) {\n  return text\n    .replace(/```([\\s\\S]*?)```/g, "<pre><code>$1</code></pre>")\n    .replace(/`([^`]+)`/g, "<code>$1</code>")\n    .replace(/\\n/g, "<br>");\n}',
  },
  {
    icon: '⚠️', title: 'The Key Problem', titleClass: 'card-title-amber', subtitle: 'Learning Only',
    description:
      'The browser version hardcodes the API key, which anyone can read in the source. Great for a demo, dangerous in production — the fix is a backend that holds the key, coming later.',
    code: '// apiKey: "AIza..."  ← visible to everyone in dev tools\n// production → call your own server, keep the key there',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 03 Code', titleClass: 'card-title-cyan', subtitle: 'Terminal Tutor',
    description:
      'The Node version — a chat session with the tutor systemInstruction driven by a readline-sync loop.',
    link: { href: GH_LECTURE, label: 'Open Lecture 03 →', external: true },
  },
  {
    icon: '🖥️', title: 'Lecture 03.1 Code', titleClass: 'card-title-purple', subtitle: 'Browser Chat UI',
    description:
      'The web version — index.html, style.css and script.js that run the same tutor in the browser with a chat interface.',
    link: { href: GH_LECTURE_UI, label: 'Open Lecture 03.1 →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Real-World Data', titleClass: 'card-title-amber', subtitle: 'Prereq 4 Preview',
    description:
      'Tomorrow is Lecture 04 — the model has no live data, so we call real APIs (crypto, weather, news) and start routing a question to the right function.',
    link: { href: '/day-020', label: 'Go to Prereq 4 →' },
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

export default function Day019() {
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
          <Link to="/day-018" className="day001-nav-btn day001-nav-prev">← Prereq 2</Link>
          <p className="day001-datetime">Prerequisite · Gen AI 3</p>
          <Link to="/day-020" className="day001-nav-btn day001-nav-next">Prereq 4 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Prerequisite</span><span>Gen AI</span><span>Lecture 03</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">PREREQ 3 <span aria-hidden="true">💬</span></h1>
              <p className="day001-day-theme">CHAT WITH MEMORY, A PERSONA &amp; A WEB UI</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">PREREQUISITE · GEN AI</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '3%' }} /></div>

        <p className="day001-summary">
          Lecture 03 — a real chatbot with a personality. A strict <strong>systemInstruction</strong> turns Gemini
          into a <strong>coding tutor</strong> that answers only coding questions from first principles, and a{' '}
          <strong>chat session</strong> keeps the memory across a <strong>readline</strong> loop. Then I took the
          exact same brain into the <strong>browser</strong> — importing the SDK from a CDN, rendering a chat UI
          with formatted code and a typing indicator. Lesson learned: a{' '}
          <strong>front-end API key is exposed to everyone</strong>, so a backend comes later.{' '}
          <em>One brain, two frontends.</em>
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> — {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="👨‍🏫" title="THE TUTOR CHATBOT" cards={TUTOR} columns={3} />
        <CardSection icon="🌐" title="TAKING IT TO THE BROWSER" cards={BROWSER} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#Gemini</span><span>#CoderArmy</span><span>#JavaScript</span>
        </footer>
      </div>
    </div>
  );
}
