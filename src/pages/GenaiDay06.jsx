import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture06';

const LEARNT_TODAY = [
  { title: 'From answering to acting', text: 'give the agent a tool that runs real terminal commands and it can change your machine, not just talk' },
  { title: 'The executeCommand tool', text: 'child_process exec runs any shell command and returns stdout or stderr back to the model' },
  { title: 'OS-aware prompting', text: 'pass os.platform() into the systemInstruction so the AI gives commands that fit your operating system' },
  { title: 'The build loop', text: 'the AI issues one command, the tool runs it, the result feeds back, and it repeats until done' },
  { title: 'functionCall + functionResponse', text: 'push both into the history so the model sees exactly what happened after each command' },
  { title: 'It builds real apps', text: 'file by file the agent scaffolds a calculator and a leetcode-style UI with mkdir, touch and writes' },
  { title: 'Power and danger', text: 'an AI running shell commands is powerful and risky — sandbox it and review what it runs' },
  { title: 'A true agent', text: 'perceive the goal, plan a command, act, observe the output, loop — this is real agentic behaviour' },
];

const ACTION = [
  {
    icon: '🖐️', title: 'Give The AI Hands', titleClass: 'card-title-cyan', subtitle: 'From Words To Actions',
    description:
      'So far the model only produced text. Now we hand it a tool that runs terminal commands — so it can create folders, write files, and actually build software on your machine.',
    code: '// yesterday: the model returned a functionCall\n// today: that call runs a real shell command\n//        → the AI can act on the world',
  },
  {
    icon: '⚡', title: 'The Command Tool', titleClass: 'card-title-purple', subtitle: 'child_process exec',
    description:
      'One function runs any shell command and returns the result. exec is promisified so the agent can await it and read stdout or stderr.',
    code: 'import { exec } from "child_process";\nimport util from "util";\nconst run = util.promisify(exec);\n\nasync function executeCommand({ command }) {\n  try {\n    const { stdout, stderr } = await run(command);\n    return stderr ? `Error: ${stderr}` : `Success: ${stdout}`;\n  } catch (err) { return `Error: ${err}`; }\n}',
  },
  {
    icon: '💻', title: 'OS-Aware Prompt', titleClass: 'card-title-amber', subtitle: 'os.platform()',
    description:
      'Commands differ across Windows, macOS and Linux. Inject os.platform() into the systemInstruction so the model issues commands that actually work on your system.',
    code: 'import os from "os";\nconst systemInstruction = `You build websites using shell commands,\none at a time. Current OS: ${os.platform()} — match it.`;',
  },
];

const TOOL = [
  {
    icon: '📋', title: 'Declare The Tool', titleClass: 'card-title-cyan', subtitle: 'Any Command',
    description:
      'The declaration tells the model it can run any terminal command to create, read, write, update or delete files and folders — one primitive, endless power.',
    code: 'const commandExecuter = {\n  name: "executeCommand",\n  description: "Run any shell command to create/read/write/delete files & folders",\n  parameters: {\n    type: Type.OBJECT,\n    properties: {\n      command: { type: Type.STRING, description: "e.g. mkdir calculator" },\n    },\n    required: ["command"],\n  },\n};',
  },
  {
    icon: '♻️', title: 'The Agent Loop', titleClass: 'card-title-purple', subtitle: 'Act → Observe → Repeat',
    description:
      'The model returns a command; you run it and push both the functionCall and its functionResponse into history. When there is no more call, the task is done.',
    code: 'while (true) {\n  const res = await ai.models.generateContent({ model, contents: History,\n    config: { systemInstruction, tools: [{ functionDeclarations: [commandExecuter] }] } });\n  const call = res.functionCalls?.[0];\n  if (!call) break;\n  const result = await executeCommand(call.args);\n  History.push({ role: "model", parts: [{ functionCall: call }] });\n  History.push({ role: "user", parts: [{ functionResponse: { name: call.name, response: { result } } }] });\n}',
  },
  {
    icon: '🏗️', title: 'It Builds The App', titleClass: 'card-title-amber', subtitle: 'One Command At A Time',
    description:
      'Given "build a calculator", the agent runs mkdir, touch, then writes HTML, CSS and JS, fixing errors as it goes — a working app scaffolded entirely by the model.',
    code: '// mkdir calculator\n// touch calculator/index.html\n// write HTML → write CSS → write JS\n// → a working calculator, built by the agent',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 06 Code', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The command-running agent plus the calculator and leetcode-platform apps it builds, in the STRIKE GenAI repo.',
    link: { href: GH_LECTURE, label: 'Open Lecture 06 →', external: true },
  },
  {
    icon: '⚠️', title: 'Run It Safely', titleClass: 'card-title-purple', subtitle: 'Sandbox First',
    description:
      'An agent that executes shell commands can delete files or worse. Try it in a throwaway folder, and print each command before running it.',
    footer: 'review commands · use a sandbox · version control',
  },
  {
    icon: '🔜', title: 'Next: Code Reviewer', titleClass: 'card-title-amber', subtitle: 'Day 7 Preview',
    description:
      'Tomorrow is Lecture 07 — build a Code Reviewer agent with list_files, read_file and write_file tools that scans a project and fixes real issues.',
    link: { href: '/genai-day-7', label: 'Go to Day 7 →' },
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

export default function GenaiDay06() {
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
          <Link to="/genai-day-5" className="day001-nav-btn day001-nav-prev">← Day 5</Link>
          <p className="day001-datetime">Agentic AI Day 6</p>
          <Link to="/genai-day-7" className="day001-nav-btn day001-nav-next">Day 7 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 06</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 6 <span aria-hidden="true">🏗️</span></h1>
              <p className="day001-day-theme">THE COMMAND AGENT — AI THAT BUILDS APPS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '6%' }} /></div>

        <p className="day001-summary">
          Lecture 06 — the agent gets <strong>hands</strong>. I gave it an <code>executeCommand</code> tool backed by{' '}
          <strong>child_process exec</strong>, so the model can run real <strong>shell commands</strong> — create
          folders, write files, build software. The <strong>systemInstruction</strong> is <strong>OS-aware</strong>{' '}
          via <code>os.platform()</code>, and the <strong>agent loop</strong> pushes each <code>functionCall</code>{' '}
          and <code>functionResponse</code> into history until the job is done. Given a goal, it scaffolds a{' '}
          <strong>calculator</strong> and a <strong>leetcode-style UI</strong> one command at a time. Powerful — and
          worth sandboxing. <em>Perceive, plan, act, observe.</em>
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

        <CardSection icon="🖐️" title="FROM CHAT TO ACTION" cards={ACTION} columns={3} />
        <CardSection icon="🏗️" title="THE AGENT BUILD LOOP" cards={TOOL} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#Agents</span><span>#CoderArmy</span><span>#JavaScript</span>
        </footer>
      </div>
    </div>
  );
}
