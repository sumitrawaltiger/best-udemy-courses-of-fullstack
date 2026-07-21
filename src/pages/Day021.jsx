import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture05';
const GH_REPO = 'https://github.com/Rohitnegi9/STRIKEGenAI';
const GEMINI_FC = 'https://ai.google.dev/gemini-api/docs/function-calling';

const LEARNT_TODAY = [
  { title: 'Function calling', text: 'describe your tools to the model and it decides which to call and with what arguments — no manual routing' },
  { title: 'Tool declaration', text: 'each tool is a name + description + parameters schema the model reads to understand what it does' },
  { title: 'Typed parameters', text: 'the SDK’s Type.OBJECT and Type.STRING describe each argument, and required lists the mandatory ones' },
  { title: 'Description is the prompt', text: 'the model picks a tool from its description, so clear names and descriptions matter a lot' },
  { title: 'The model returns a call', text: 'instead of text you get a functionCall — a name plus args, e.g. cryptoCurrency({ coin: "bitcoin" })' },
  { title: 'You execute it', text: 'run the real function with those args, get the live data back from the API' },
  { title: 'Feed the result back', text: 'send the tool result to the model so it writes a natural-language answer for the user' },
  { title: 'The agent loop', text: 'think → call a tool → observe the result → respond: this loop is the heart of every AI agent' },
];

const DECLARE = [
  {
    icon: '📋', title: 'Declare A Tool', titleClass: 'card-title-cyan', subtitle: 'Name · Description · Params',
    description:
      'A tool declaration tells the model what a function does and what inputs it needs. The description is how the model decides to use it, so write it clearly.',
    code: 'import { Type } from "@google/genai";\n\nconst cryptoInfo = {\n  name: "cryptoCurrency",\n  description: "Get the live price/info of a coin like bitcoin or ethereum",\n  parameters: {\n    type: Type.OBJECT,\n    properties: {\n      coin: { type: Type.STRING, description: "e.g. bitcoin, ethereum" },\n    },\n    required: ["coin"],\n  },\n};',
  },
  {
    icon: '🧩', title: 'Typed Parameters', titleClass: 'card-title-purple', subtitle: 'Type.OBJECT',
    description:
      'The parameters schema mirrors JSON Schema: an object with typed properties and a list of required fields. This is how the model knows exactly what to pass.',
    code: '// Type.OBJECT  → the arguments object\n// Type.STRING  → a text field\n// required: [] → which fields must be present',
  },
  {
    icon: '🔗', title: 'Attach The Tools', titleClass: 'card-title-amber', subtitle: 'config.tools',
    description:
      'Pass your declarations in the request config. Now the model can answer normally or, when useful, ask to call one of your tools.',
    code: 'const res = await ai.models.generateContent({\n  model: "gemini-2.5-flash",\n  contents: "What is the price of bitcoin?",\n  config: { tools: [{ functionDeclarations: [cryptoInfo, weatherInfo] }] },\n});',
  },
];

const LOOP = [
  {
    icon: '📞', title: 'The Model Calls Back', titleClass: 'card-title-cyan', subtitle: 'functionCall',
    description:
      'When the model decides a tool is needed, it does not return text — it returns a functionCall with the tool name and the arguments it chose from your question.',
    code: 'const call = res.functionCalls?.[0];\n// call.name === "cryptoCurrency"\n// call.args === { coin: "bitcoin" }',
  },
  {
    icon: '⚙️', title: 'Execute & Return', titleClass: 'card-title-purple', subtitle: 'Run The Function',
    description:
      'You run the real function with the model’s arguments, get the live data, and send that result back to the model so it can turn raw JSON into a friendly answer.',
    code: 'const data = await cryptoCurrency(call.args);\n// send `data` back to the model as the tool result →\n// it replies: "Bitcoin is trading at ₹… right now."',
  },
  {
    icon: '♻️', title: 'The Agent Loop', titleClass: 'card-title-amber', subtitle: 'Think · Act · Observe',
    description:
      'Put it together and you have the core agent loop: the model thinks, calls a tool, observes the result, and responds. Chain it and the AI can solve multi-step tasks on its own.',
    code: '// 1. think   → decide a tool is needed\n// 2. act     → return a functionCall\n// 3. observe → you run it, feed data back\n// 4. respond → natural-language answer',
  },
];

const WHY = [
  {
    icon: '🎯', title: 'No More Manual Routing', titleClass: 'card-title-cyan', subtitle: 'The Model Decides',
    description:
      'Yesterday’s brittle if/else routing is gone. The model reads the tool descriptions and picks the right one with the right arguments — even for messy, natural questions.',
  },
  {
    icon: '🤖', title: 'This Is An Agent', titleClass: 'card-title-purple', subtitle: 'First 5 Lectures Done',
    description:
      'From a single prompt (Day 2) to memory and personas (Day 3), real data (Day 4), and now tool-using function calls (Day 5) — the pieces of an autonomous agent are in place.',
    footer: 'prompt → chat → tools → function calling → agents',
  },
  {
    icon: '📚', title: 'The Full Course', titleClass: 'card-title-amber', subtitle: 'STRIKE GenAI',
    description:
      'Ahead in the course: RAG, multi-tool agents, LangGraph and full projects. Explore the site’s GenAI track for the same journey as structured modules.',
    link: { href: '/genai', label: 'Open the GenAI track →' },
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 05 Code', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The tool declarations for crypto and weather and the function-calling flow from this lecture in the STRIKE GenAI repo.',
    link: { href: GH_LECTURE, label: 'Open Lecture 05 →', external: true },
  },
  {
    icon: '📘', title: 'Function Calling Docs', titleClass: 'card-title-purple', subtitle: 'Gemini API',
    description:
      'Google’s official guide to function calling — declarations, the call/response cycle, and multi-tool patterns.',
    link: { href: GEMINI_FC, label: 'Read the Gemini docs →', external: true },
  },
  {
    icon: '💾', title: 'STRIKE GenAI Repo', titleClass: 'card-title-amber', subtitle: 'All Lectures',
    description:
      'The complete Coder Army course code — every lecture from here to LangGraph and the final projects.',
    link: { href: GH_REPO, label: 'Open the full repo →', external: true },
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

export default function Day021() {
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
          <Link to="/day-020" className="day001-nav-btn day001-nav-prev">← Prereq 4</Link>
          <p className="day001-datetime">Prerequisite · Gen AI 5</p>
          <Link to="/day-022" className="day001-nav-btn day001-nav-next">Prereq 6 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Prerequisite</span><span>Gen AI</span><span>Lecture 05</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">PREREQ 5 <span aria-hidden="true">🛠️</span></h1>
              <p className="day001-day-theme">FUNCTION CALLING — THE AGENT LOOP BEGINS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '5%' }} /></div>

        <p className="day001-summary">
          Lecture 05 — <strong>function calling</strong>. Instead of routing by hand, I <strong>declare tools</strong>{' '}
          to the model (a name, description, and a <code>Type.OBJECT</code> parameter schema), and the model{' '}
          <strong>decides</strong> which to call. It returns a <code>functionCall</code> like{' '}
          <code>cryptoCurrency({'{'} coin: "bitcoin" {'}'})</code>; I <strong>execute</strong> the real function,{' '}
          <strong>feed the result back</strong>, and it answers in plain language. That is the{' '}
          <strong>agent loop</strong> — think, act, observe, respond. With prompt, chat, tools and function calling
          done, the pieces of a real agent are in place. <em>Five lectures in.</em>
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

        <CardSection icon="📋" title="DECLARING TOOLS" cards={DECLARE} columns={3} />
        <CardSection icon="♻️" title="THE FUNCTION-CALL LOOP" cards={LOOP} columns={3} />
        <CardSection icon="🎯" title="WHY IT MATTERS" cards={WHY} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#FunctionCalling</span><span>#CoderArmy</span><span>#JavaScript</span>
        </footer>
      </div>
    </div>
  );
}
