import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'Multimodal is normal now', text: 'modern Gen AI apps combine text, image, audio, and documents in one workflow' },
  { title: 'OCR is not enough', text: 'reasoning over screenshots, charts, and PDFs needs visual understanding too' },
  { title: 'Speech adds latency', text: 'audio pipelines need streaming, chunking, and interruption handling' },
  { title: 'Prompt per modality', text: 'instructions for images and audio must be explicit about what to extract' },
  { title: 'Store raw + derived assets', text: 'keep the original file plus transcripts, captions, and embeddings' },
  { title: 'Compression matters', text: 'large media files need preprocessing before they hit model limits' },
  { title: 'UX is half the product', text: 'preview images, waveform status, and citations make outputs usable' },
  { title: 'Fallbacks help', text: 'gracefully degrade to text-only paths when a richer modality fails' },
];

const CORE = [
  {
    icon: '🖼️', title: 'Vision Inputs', titleClass: 'card-title-cyan', subtitle: 'Image',
    description:
      'Use screenshots, receipts, dashboards, and slides as first-class inputs rather than forcing everything through OCR.',
    code: 'image -> model -> fields',
  },
  {
    icon: '🎙️', title: 'Audio Flow', titleClass: 'card-title-purple', subtitle: 'Speech',
    description:
      'Transcribe, summarize, and extract action items from meetings or voice notes with streaming where possible.',
    code: 'audio -> transcript -> summary',
  },
  {
    icon: '🧩', title: 'Unified UX', titleClass: 'card-title-amber', subtitle: 'Product',
    description:
      'Blend text, image, and audio outputs into one reviewable interface with clear source evidence.',
    code: 'one app, many inputs',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'PDF Extractor', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Upload a PDF and return summary, key entities, and cited pages.',
    code: 'doc -> JSON + summary',
  },
  {
    icon: '🎤', title: 'Meeting Notes', titleClass: 'card-title-purple', subtitle: 'Build',
    description: 'Convert a voice note into transcript, decisions, and action items.',
    code: 'audio -> actions',
  },
  {
    icon: '🔜', title: 'Next: Capstone', titleClass: 'card-title-amber', subtitle: 'Day 54',
    description: 'Tomorrow -> ship a polished Gen AI application end to end.',
    link: { href: '/genai-day-54', label: 'Go to Day 54 ->' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Browse the full Gen AI lessons and curriculum on the site.',
    link: { href: '/genai', label: 'Open Gen AI Track ->' },
  },
  {
    icon: '📖', title: 'Gemini API', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Multimodal prompting patterns and model capabilities.',
    link: { href: 'https://ai.google.dev/gemini-api/docs', label: 'Open ->', external: true },
  },
  {
    icon: '🧠', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember',
    description: 'A good multimodal app feels like one workflow, not three stitched demos.',
    footer: 'Design for the user, not the model API.',
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

export default function GenaiDay53() {
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
          <Link to="/genai-day-52" className="day001-nav-btn day001-nav-prev">Day 52</Link>
          <p className="day001-datetime">Gen AI Day 53 · 53 Aug 2026</p>
          <Link to="/genai-day-54" className="day001-nav-btn day001-nav-next">Day 54 {'->'}</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Gen AI</span><span>Multimodal</span><span>Day 53</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 53 <span aria-hidden="true">🎥</span></h1>
              <p className="day001-day-theme">MULTIMODAL GEN AI APPLICATIONS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · MULTIMODAL</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '35%' }} /></div>

        <p className="day001-summary">
          Day 53 expands Gen AI beyond text. Build <strong>multimodal workflows</strong> that reason over images,
          PDFs, and audio while keeping the product experience simple and reviewable.
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> - {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🎥" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#GenAI</span><span>#Multimodal</span><span>#Day53</span><span>#VisionAI</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
