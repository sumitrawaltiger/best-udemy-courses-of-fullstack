import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture02';
const NOTION = 'https://www.notion.so/Lecture-02-Write-our-first-code-2c0a9af81c9880fe854debfe340a9b79';

const LEARNT_TODAY = [
  { title: 'First API call', text: 'ai.models.generateContent sends one message and returns response.text — my first Gemini program' },
  { title: 'LLMs have no memory', text: 'every API call is completely independent — the model forgets everything after it responds' },
  { title: 'Send the history', text: 'to get memory, resend the entire conversation array (user + model turns) with each new message' },
  { title: 'Chat sessions', text: 'ai.chats.create() manages history automatically — call chat.sendMessage and skip the manual array' },
  { title: 'Interactive loop', text: 'readline-sync reads terminal input in a while loop for a real back-and-forth chatbot' },
  { title: 'System instructions', text: 'systemInstruction sets the AI persona and rules for the whole conversation — tutor, reviewer, pirate' },
  { title: 'Thinking is more tokens', text: 'thinkingBudget 0 = direct answer; higher lets it generate reasoning first — use only for hard problems' },
  { title: 'Tokens and cost', text: 'systemInstruction + full history + message are billed every request, so keep the instruction short' },
];

const FIRST = [
  {
    icon: '⚡', title: 'Your First Call', titleClass: 'card-title-cyan', subtitle: 'generateContent',
    description:
      'Load the key from .env, create the client, and send one message. response.text is the model’s answer. This single request is the seed of everything that follows.',
    code: "import 'dotenv/config';\nimport { GoogleGenAI } from \"@google/genai\";\n\nconst ai = new GoogleGenAI({});\n\nconst res = await ai.models.generateContent({\n  model: \"gemini-2.5-flash\",\n  contents: \"Explain what a variable is\",\n});\nconsole.log(res.text);",
  },
  {
    icon: '🧠', title: 'No Memory', titleClass: 'card-title-purple', subtitle: 'Each Call Is Independent',
    description:
      'Tell it "My name is Rohit", then ask "What is my name?" in a new call — it will not know. Every request starts from a blank slate. That is the problem the next section solves.',
    code: '// call 1: "My name is Rohit"   → "Nice to meet you!"\n// call 2: "What is my name?"    → "I don’t know" ❌',
  },
];

const MEMORY = [
  {
    icon: '📜', title: 'Send The History', titleClass: 'card-title-cyan', subtitle: 'Manual Memory',
    description:
      'Keep an array of every turn and resend the whole thing each time. The model re-reads the conversation on every call, so it appears to remember.',
    code: 'const history = [];\nhistory.push({ role: "user", parts: [{ text: "My name is Rohit" }] });\nlet res = await ai.models.generateContent({\n  model: "gemini-2.5-flash",\n  contents: history,\n});\nhistory.push({ role: "model", parts: [{ text: res.text }] });\n// ask again — history now carries the context',
  },
  {
    icon: '💬', title: 'Chat Sessions', titleClass: 'card-title-purple', subtitle: 'The Easy Way',
    description:
      'ai.chats.create() tracks the history for you. Just call chat.sendMessage — no manual array. Cleaner code for the same result.',
    code: 'const chat = ai.chats.create({ model: "gemini-2.5-flash" });\n\nconst res = await chat.sendMessage({ message: userInput });\nconsole.log(res.text); // history is managed automatically',
  },
  {
    icon: '⌨️', title: 'Interactive Chatbot', titleClass: 'card-title-amber', subtitle: 'readline-sync',
    description:
      'Wrap the chat session in a loop that reads terminal input until you type "exit". That is a working command-line assistant in a dozen lines.',
    code: 'import readlineSync from "readline-sync";\nconst chat = ai.chats.create({ model: "gemini-2.5-flash" });\nwhile (true) {\n  const q = readlineSync.question("You: ");\n  if (q === "exit") break;\n  const res = await chat.sendMessage({ message: q });\n  console.log("AI:", res.text);\n}',
  },
];

const CONTROL = [
  {
    icon: '🎭', title: 'System Instructions', titleClass: 'card-title-cyan', subtitle: 'Give It A Persona',
    description:
      'A systemInstruction tells the AI how to behave for the entire chat — its rules and personality. A coding tutor, a strict reviewer, or a pirate that only talks like a pirate.',
    code: 'const chat = ai.chats.create({\n  model: "gemini-2.5-flash",\n  systemInstruction:\n    "You are a coding tutor. Answer only coding questions, use first principles, keep it concise.",\n});',
  },
  {
    icon: '🤔', title: 'Thinking Config', titleClass: 'card-title-purple', subtitle: 'thinkingBudget',
    description:
      '"Thinking" is just extra tokens generated before the answer. thinkingBudget 0 gives a direct reply; a higher budget helps hard, multi-step problems — but costs more, so use it deliberately.',
    code: 'const res = await ai.models.generateContent({\n  model: "gemini-2.5-flash",\n  contents: "What is 547 + 832?",\n  config: { thinkingConfig: { thinkingBudget: 0 } }, // 0 = direct\n});',
  },
  {
    icon: '💰', title: 'Tokens & Cost', titleClass: 'card-title-amber', subtitle: 'Keep It Short',
    description:
      'Every request is billed for the systemInstruction, the full history (which grows each turn), the new message, and the reply. Keep instructions short and trim old history to control cost.',
    code: '// charged EVERY call:\n//   systemInstruction  (sent again each time!)\n// + full history      (grows each turn)\n// + new message\n// + model response',
  },
];

const RESOURCES = [
  {
    icon: '📝', title: 'Lecture 02 Notes', titleClass: 'card-title-cyan', subtitle: 'Notion',
    description:
      'Rohit’s full write-up for "Write our first code" — token prediction, the SDK, chat, history, system instructions, thinking and cost, with every code sample.',
    link: { href: NOTION, label: 'Open Lecture 02 notes →', external: true },
  },
  {
    icon: '💻', title: 'Lecture 02 Code', titleClass: 'card-title-purple', subtitle: 'GitHub',
    description:
      'The runnable index.js and package.json for this lecture in the STRIKE GenAI repo. Clone, add your key, and run it.',
    link: { href: GH_LECTURE, label: 'Open Lecture 02 code →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Chat & Persona', titleClass: 'card-title-amber', subtitle: 'Day 3 Preview',
    description:
      'Tomorrow is Lecture 03 — a chat with memory and a tutor persona via systemInstruction, then the same assistant wired into a browser chat UI.',
    link: { href: '/day-003', label: 'Go to Day 3 →' },
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

export default function Day002() {
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
          <Link to="/day-001" className="day001-nav-btn day001-nav-prev">← Day 1</Link>
          <p className="day001-datetime">Agentic AI Day 2</p>
          <Link to="/day-003" className="day001-nav-btn day001-nav-next">Day 3 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 02</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 2 <span aria-hidden="true">⚡</span></h1>
              <p className="day001-day-theme">WRITE OUR FIRST CODE — THE GEMINI SDK</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN · AGENTIC AI</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '2%' }} /></div>

        <p className="day001-summary">
          Lecture 02 — my <strong>first Gemini code</strong>. A single <code>generateContent</code> call returns{' '}
          <code>response.text</code>, but every call is <strong>independent</strong> — the model has{' '}
          <strong>no memory</strong>. To fix that I <strong>send the history</strong> each turn, or let{' '}
          <code>ai.chats.create()</code> manage it and wrap it in a <strong>readline-sync</strong> loop for an
          interactive chatbot. A <strong>systemInstruction</strong> gives it a persona, <code>thinkingBudget</code>{' '}
          trades tokens for reasoning, and the instruction + growing history is{' '}
          <strong>billed on every request</strong>. <em>Keep it short.</em>
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

        <CardSection icon="⚡" title="FIRST CALLS" cards={FIRST} columns={2} />
        <CardSection icon="🧠" title="GIVING IT MEMORY" cards={MEMORY} columns={3} />
        <CardSection icon="🎛️" title="CONTROL & COST" cards={CONTROL} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#Gemini</span><span>#CoderArmy</span><span>#JavaScript</span>
        </footer>
      </div>
    </div>
  );
}
