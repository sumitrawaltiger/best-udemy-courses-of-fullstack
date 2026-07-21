import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture07';
const NOTION = 'https://www.notion.so/Lecture-07-Build-Code-Reviewer-2d3a9af81c988071b829e3163129b078';

const LEARNT_TODAY = [
  { title: 'A multi-tool agent', text: 'the code reviewer gets three tools — list_files, read_file and write_file — to work on a real project' },
  { title: 'list_files', text: 'recursively scan a directory for code (.js, .ts, .html, .css), skipping node_modules, dist and build' },
  { title: 'read_file & write_file', text: 'read a file’s content, then write the corrected version back to disk' },
  { title: 'The review loop', text: 'list all files, read each one, analyse it, and write fixes — driven entirely by the model' },
  { title: 'A detailed job spec', text: 'the systemInstruction lists exactly what to check: bugs, security, accessibility, code quality' },
  { title: 'Batch function calls', text: 'the model can return several functionCalls at once; execute them all, then feed results back' },
  { title: 'It edits real code', text: 'the agent actually fixes files and ends with a summary report — not just a list of problems' },
  { title: 'Safety with power', text: 'it writes to disk, so run it on a copy or under version control and review the diff' },
];

const TOOLS = [
  {
    icon: '🗂️', title: 'list_files', titleClass: 'card-title-cyan', subtitle: 'Discover The Code',
    description:
      'A recursive scan collects every code file in a directory and skips build artefacts and dependencies. The agent starts here to learn what it is reviewing.',
    code: 'function scan(dir) {\n  for (const item of fs.readdirSync(dir)) {\n    const full = path.join(dir, item);\n    if (/node_modules|dist|build/.test(full)) continue;\n    if (fs.statSync(full).isDirectory()) scan(full);\n    else if ([".js",".ts",".html",".css"].includes(path.extname(item)))\n      files.push(full);\n  }\n}',
  },
  {
    icon: '📖', title: 'read_file & write_file', titleClass: 'card-title-purple', subtitle: 'Read, Then Fix',
    description:
      'Two more tools let the agent read any file and write a corrected version back. Together with list_files, that is everything it needs to review and repair a codebase.',
    code: 'async function readFile({ file_path }) {\n  return { content: fs.readFileSync(file_path, "utf-8") };\n}\nasync function writeFile({ file_path, content }) {\n  fs.writeFileSync(file_path, content, "utf-8");\n  return { success: true };\n}',
  },
  {
    icon: '🧾', title: 'Typed Declarations', titleClass: 'card-title-amber', subtitle: 'The Model’s Menu',
    description:
      'Each tool is declared with typed parameters so the model knows how to call it — a path to read, a path plus content to write.',
    code: 'const writeFileTool = {\n  name: "write_file",\n  description: "Write fixed content back to a file",\n  parameters: {\n    type: Type.OBJECT,\n    properties: {\n      file_path: { type: Type.STRING },\n      content:   { type: Type.STRING, description: "The corrected content" },\n    },\n    required: ["file_path", "content"],\n  },\n};',
  },
];

const LOOP = [
  {
    icon: '📝', title: 'The Job Spec', titleClass: 'card-title-cyan', subtitle: 'A Precise Persona',
    description:
      'The systemInstruction is a full reviewer brief: check HTML (semantics, a11y), CSS (validity, duplicates), and JS (bugs, security, quality) — then actually fix the code, not just report it.',
    code: '// systemInstruction (excerpt):\n// 1. list_files → 2. read_file each\n// 3. analyse: bugs, security (secrets, eval, XSS), quality\n// 4. write_file the fixes\n// 5. end with a summary report',
  },
  {
    icon: '⚙️', title: 'Execute Every Call', titleClass: 'card-title-purple', subtitle: 'Batch Tools',
    description:
      'The model may request several tools in one turn. Loop over every functionCall, run the matching function from a registry, and send all the results back.',
    code: 'if (result.functionCalls?.length) {\n  for (const call of result.functionCalls) {\n    const { name, args } = call;\n    const output = await tools[name](args); // dispatch\n    // push functionResponse back into history\n  }\n}',
  },
  {
    icon: '📊', title: 'Fix + Report', titleClass: 'card-title-amber', subtitle: 'Real Output',
    description:
      'The agent writes corrected files and finishes with a categorised report — security fixes, bug fixes, quality improvements — with file and line references.',
    code: '// 📊 CODE REVIEW COMPLETE\n// 🔴 SECURITY: removed hardcoded API key\n// 🟠 BUGS: added null check for user\n// 🟡 QUALITY: removed console.logs',
  },
];

const RESOURCES = [
  {
    icon: '📝', title: 'Lecture 07 Notes', titleClass: 'card-title-cyan', subtitle: 'Notion',
    description:
      'Rohit’s write-up for the Build Code Reviewer lecture — the tools, the reviewer prompt, and the full agent flow.',
    link: { href: NOTION, label: 'Open Lecture 07 notes →', external: true },
  },
  {
    icon: '💻', title: 'Lecture 07 Code', titleClass: 'card-title-purple', subtitle: 'agent.js',
    description:
      'The runnable code reviewer agent — list/read/write tools, the reviewer systemInstruction, and the tool-dispatch loop.',
    link: { href: GH_LECTURE, label: 'Open Lecture 07 →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Embeddings', titleClass: 'card-title-amber', subtitle: 'Prereq 8 Preview',
    description:
      'Tomorrow the RAG foundation begins — Lecture 08 on embeddings: turning text into vectors so the model can compare meaning, not just words.',
    link: { href: '/day-024', label: 'Go to Prereq 8 →' },
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

export default function Day023() {
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
          <Link to="/day-022" className="day001-nav-btn day001-nav-prev">← Prereq 6</Link>
          <p className="day001-datetime">Prerequisite · Gen AI 7</p>
          <Link to="/day-024" className="day001-nav-btn day001-nav-next">Prereq 8 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Prerequisite</span><span>Gen AI</span><span>Lecture 07</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">PREREQ 7 <span aria-hidden="true">🔍</span></h1>
              <p className="day001-day-theme">BUILD A CODE REVIEWER AGENT</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '7%' }} /></div>

        <p className="day001-summary">
          Lecture 07 — a real <strong>Code Reviewer agent</strong>. I gave it three file-system tools —{' '}
          <code>list_files</code>, <code>read_file</code> and <code>write_file</code> — and a detailed reviewer{' '}
          <strong>systemInstruction</strong> covering bugs, security, accessibility and code quality. The agent{' '}
          <strong>lists</strong> a project, <strong>reads</strong> each file, and <strong>writes fixes</strong> back,
          handling several <code>functionCalls</code> per turn via a tool registry, and ends with a categorised{' '}
          <strong>summary report</strong>. It genuinely edits your code — so run it on a copy.{' '}
          <em>An agent that improves a whole codebase.</em>
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

        <CardSection icon="🧰" title="THE FILE-SYSTEM TOOLS" cards={TOOLS} columns={3} />
        <CardSection icon="♻️" title="THE REVIEW LOOP" cards={LOOP} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#Agents</span><span>#CoderArmy</span><span>#JavaScript</span>
        </footer>
      </div>
    </div>
  );
}
