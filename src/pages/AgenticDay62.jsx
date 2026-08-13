import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCKER = 'https://docs.docker.com/get-started/';
const MULTI = 'https://docs.docker.com/build/building/multi-stage/';

const LEARNT_TODAY = [
  { title: 'Why containers', text: 'same image on laptop, CI, and prod — fewer “works on my machine” bugs for agent APIs' },
  { title: 'Image vs container', text: 'image is the blueprint; container is a running instance' },
  { title: 'Multi-stage builds', text: 'build deps in one stage; copy only runtime files into a slim final image' },
  { title: '.dockerignore', text: 'exclude .env, .git, datasets, and node_modules/venv from the build context' },
  { title: 'Non-root user', text: 'run the API process as a non-root user inside the container' },
  { title: 'Healthchecks', text: 'HEALTHCHECK or orchestrator probes hit /health before sending traffic' },
  { title: 'Secrets', text: 'inject API keys at runtime — never bake keys into layers' },
  { title: 'Compose preview', text: 'docker compose can run API + Redis + vector DB locally as one stack' },
];

const CORE = [
  {
    icon: '🐳', title: 'Slim Dockerfile', titleClass: 'card-title-cyan', subtitle: 'Build',
    description:
      'Use a slim Python base, install deps, copy app, expose the port, and start uvicorn. Keep layers cache-friendly.',
    code: 'FROM python:3.12-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\nCOPY . .\nUSER app\nCMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]',
  },
  {
    icon: '🏗️', title: 'Multi-Stage', titleClass: 'card-title-purple', subtitle: 'Size',
    description:
      'Compile/build in builder stage; final stage only gets the venv or dist. Smaller images = faster pulls and fewer CVEs.',
    code: '# stage: builder → install\n# stage: runtime → copy site-packages\n# drop compilers & caches',
  },
  {
    icon: '🔐', title: 'Runtime Secrets', titleClass: 'card-title-amber', subtitle: 'Safety',
    description:
      'Pass OPENAI_API_KEY via env/secret store. Add a /health that does not call the LLM.',
    code: 'ENV only at runtime\nGET /health → {"ok": true}',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Containerize /ask', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Dockerize a FastAPI ask endpoint. Build, run, curl /health and /ask from the host.',
    code: 'docker build -t ask-api .\ndocker run -p 8000:8000 -e KEY=... ask-api',
  },
  {
    icon: '🧹', title: 'Context Diet', titleClass: 'card-title-purple', subtitle: 'Hygiene',
    description:
      'Add .dockerignore for .venv, .git, *.pdf corpora, and .env. Confirm image size drops.',
    code: '.venv\n.git\n.env\ndata/',
  },
  {
    icon: '🔜', title: 'Next: Deploy', titleClass: 'card-title-amber', subtitle: 'Day 63 Preview',
    description: 'Tomorrow — ship the image to cloud/K8s-style runtimes with rollouts.',
    link: { href: '/agentic-day-63', label: 'Go to Day 63 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'FastAPI Fundamentals', titleClass: 'card-title-cyan', subtitle: 'PY Module 41',
    description: 'The API shape you usually put inside the container.',
    link: { href: '/python/learn/fastapi-fundamentals', label: 'Open PY Module 41 →' },
  },
  {
    icon: '📖', title: 'Docker Get Started', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Official intro to images, containers, and the build loop.',
    link: { href: DOCKER, label: 'Open Docker docs →', external: true },
  },
  {
    icon: '🏗️', title: 'Multi-Stage Builds', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Keep runtime images small and production-ready.',
    link: { href: MULTI, label: 'Open multi-stage guide →', external: true },
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

export default function AgenticDay62() {
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
          <Link to="/agentic-day-61" className="day001-nav-btn day001-nav-prev">← Day 61</Link>
          <p className="day001-datetime">Agentic AI Day 62 · 13 Oct 2026</p>
          <Link to="/agentic-day-63" className="day001-nav-btn day001-nav-next">Day 63 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>LLMOps</span><span>Docker</span><span>Phase 10</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 62 <span aria-hidden="true">🐳</span></h1>
              <p className="day001-day-theme">CONTAINERIZE AGENT & RAG APIS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · DOCKER</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '41%' }} /></div>

        <p className="day001-summary">
          Day 62 packages services. <strong>Dockerize</strong> FastAPI agent/RAG APIs with slim multi-stage images,
          healthchecks, and runtime secrets.
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

        <CardSection icon="🐳" title="CONTAINER BASICS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#Docker</span><span>#LLMOps</span><span>#Day62</span><span>#FastAPI</span><span>#AgenticAI</span>
        </footer>
      </div>
    </div>
  );
}
