import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const OPENAI_VISION = 'https://platform.openai.com/docs/guides/vision';

const LEARNT_TODAY = [
  { title: 'What multi-modal means', text: 'a model that accepts — and sometimes generates — images, audio, or video, not just text' },
  { title: 'Vision-language models', text: 'describe, answer questions about, or extract structured data straight from an image' },
  { title: 'Document understanding', text: 'parse scanned PDFs, forms, and screenshots directly, no separate OCR pipeline needed' },
  { title: 'Audio in the loop', text: 'transcribe with Whisper, then run that transcript through the same agent pipeline as any text input' },
  { title: 'Tool use with images', text: 'an agent can pass an image straight into a tool call\'s arguments, not just describe it in words first' },
  { title: 'Multi-modal RAG', text: 'embed images alongside text so retrieval can surface a diagram or chart, not only a paragraph' },
  { title: 'Cost & latency', text: 'multi-modal calls are usually slower and pricier — reserve them for where they add real value' },
  { title: 'Where it shines', text: 'receipts, screenshots, charts, handwritten notes — anything faster to show than to describe' },
];

const CORE = [
  {
    icon: '👁️', title: 'Vision-Language Models', titleClass: 'card-title-cyan', subtitle: 'See & Answer',
    description:
      'Send an image alongside a text prompt and get back a description, an answer, or extracted structured data.',
    code: 'response = model.call(\n  image=receipt_img, prompt="Extract total and date as JSON"\n)',
  },
  {
    icon: '📄', title: 'Document Understanding', titleClass: 'card-title-purple', subtitle: 'Skip Separate OCR',
    description:
      'Feed a scanned form or screenshot directly to a vision-capable model instead of running OCR as a separate pipeline step first.',
  },
  {
    icon: '🗂️', title: 'Multi-Modal RAG', titleClass: 'card-title-amber', subtitle: 'Retrieve Images Too',
    description:
      'Embed diagrams and charts alongside text chunks so a query can retrieve the picture that actually answers it.',
    code: 'index.add(image_embedding, image_id)\nindex.query(query_embedding, top_k=5)',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Describe an Image', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Send a photo to a vision model and ask a specific question about it — not just "what is this?"',
  },
  {
    icon: '🧾', title: 'Parse a Receipt', titleClass: 'card-title-purple', subtitle: 'Practice',
    description: 'Extract merchant, date, and total from a receipt photo as structured JSON, no OCR library involved.',
    code: '{"merchant": "...", "date": "...", "total": 0.00}',
  },
  {
    icon: '🔜', title: 'Next: Phase 12 Milestone', titleClass: 'card-title-amber', subtitle: 'Day 90 Preview',
    description: 'Tomorrow — pulling this whole advanced Gen AI engineering arc together.',
    link: { href: '/agentic-day-90', label: 'Go to Day 90 →' },
  },
];

const RESOURCES = [
  {
    icon: '🔑', title: 'Complete Guide to OpenAI', titleClass: 'card-title-cyan', subtitle: 'Day 28',
    description: 'Whisper and DALL-E already introduced audio and image generation through this same API.',
    link: { href: '/agentic-day-28', label: 'Open Day 28 →' },
  },
  {
    icon: '📖', title: 'Vision Guide', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Official documentation for sending images to a vision-capable model.',
    link: { href: OPENAI_VISION, label: 'Open Vision guide →', external: true },
  },
  {
    icon: '📚', title: 'Vector Databases', titleClass: 'card-title-amber', subtitle: 'Day 27',
    description: 'The same retrieval index from Day 27 — multi-modal RAG just adds image embeddings alongside text.',
    link: { href: '/agentic-day-27', label: 'Open Day 27 →' },
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

export default function AgenticDay89() {
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
          <Link to="/agentic-day-88" className="day001-nav-btn day001-nav-prev">← Day 88</Link>
          <p className="day001-datetime">Agentic AI Day 89 · 4 Nov 2026</p>
          <Link to="/agentic-day-90" className="day001-nav-btn day001-nav-next">Day 90 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Gen AI</span><span>Multi-Modal</span><span>Phase 12</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 89 <span aria-hidden="true">🖼️</span></h1>
              <p className="day001-day-theme">MULTI-MODAL AGENTIC AI</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '59%' }} /></div>

        <p className="day001-summary">
          Day 89 goes beyond text. <strong>Vision-language models</strong> read images directly,{' '}
          <strong>document understanding</strong> skips a separate OCR step, and <strong>multi-modal RAG</strong>{' '}
          lets retrieval surface a diagram instead of just a paragraph.
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

        <CardSection icon="🖼️" title="BEYOND TEXT" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#GenAI</span><span>#MultiModal</span><span>#Day89</span><span>#VisionAI</span><span>#AgenticAI</span>
        </footer>
      </div>
    </div>
  );
}
