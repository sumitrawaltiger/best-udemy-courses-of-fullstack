import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REALTIME_API = 'https://platform.openai.com/docs/guides/realtime';
const WEBRTC = 'https://webrtc.org/';

const LEARNT_TODAY = [
  { title: 'Voice is unforgiving', text: 'sub-second response feels normal on a call — text-agent latency there feels broken' },
  { title: 'Cascaded vs speech-to-speech', text: 'STT → LLM → TTS chained, or one model going audio-in to audio-out directly' },
  { title: 'Stream everything', text: 'partial transcript, partial tokens, partial audio — nothing waits for the full response' },
  { title: 'Turn-taking (VAD)', text: 'voice activity detection decides when the user has actually stopped talking' },
  { title: 'Interruptibility', text: 'a good voice agent stops instantly the moment the user starts talking, like a human would' },
  { title: 'WebRTC transport', text: 'the standard for low-latency, bidirectional audio between browser and server' },
  { title: 'Cost & latency', text: 'real-time voice models run pricier per minute than text — budget for that upfront' },
  { title: 'Where it fits', text: 'phone support, in-car assistants, accessibility — anywhere typing isn\'t an option' },
];

const CORE = [
  {
    icon: '🔀', title: 'Cascaded vs Speech-to-Speech', titleClass: 'card-title-cyan', subtitle: 'Two Architectures',
    description:
      'Cascaded chains three models (STT → LLM → TTS); speech-to-speech models skip straight from audio to audio.',
    code: 'cascaded: audio → text → LLM → text → audio\ns2s: audio → LLM → audio',
  },
  {
    icon: '🎙️', title: 'Streaming & Turn-Taking', titleClass: 'card-title-purple', subtitle: 'VAD',
    description:
      'Voice activity detection flags when the user stops speaking; every layer streams partial output instead of batching.',
    code: 'vad.on_silence(300ms) → agent responds',
  },
  {
    icon: '📡', title: 'WebRTC Transport', titleClass: 'card-title-amber', subtitle: 'Low-Latency Audio',
    description:
      'WebRTC handles the real-time, bidirectional audio stream between browser and server that voice agents need.',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Build a Cascaded Voice Loop', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Wire Whisper (STT) → your agent → a TTS model, and time the round trip end to end.',
    code: 'whisper → agent → tts\nmeasure latency',
  },
  {
    icon: '✋', title: 'Test Interruption Handling', titleClass: 'card-title-purple', subtitle: 'Practice',
    description: 'Talk over the agent mid-response and confirm it stops immediately instead of finishing its sentence.',
  },
  {
    icon: '🔜', title: 'Next: Browser & Computer-Use Agents', titleClass: 'card-title-amber', subtitle: 'Day 97 Preview',
    description: 'Tomorrow — agents that see a screenshot and control a mouse and keyboard.',
    link: { href: '/agentic-day-97', label: 'Go to Day 97 →' },
  },
];

const RESOURCES = [
  {
    icon: '🔑', title: 'Complete Guide to OpenAI', titleClass: 'card-title-cyan', subtitle: 'Day 28',
    description: 'Whisper transcription already covered here — voice agents build directly on it.',
    link: { href: '/agentic-day-28', label: 'Open Day 28 →' },
  },
  {
    icon: '📖', title: 'Realtime API', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Official docs for building low-latency speech-to-speech applications.',
    link: { href: REALTIME_API, label: 'Open Realtime API docs →', external: true },
  },
  {
    icon: '📡', title: 'WebRTC', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Reference for the real-time audio/video transport protocol behind voice agents.',
    link: { href: WEBRTC, label: 'Open WebRTC docs →', external: true },
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

export default function AgenticDay96() {
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
          <Link to="/agentic-day-95" className="day001-nav-btn day001-nav-prev">← Day 95</Link>
          <p className="day001-datetime">Agentic AI Day 96 · 16 Nov 2026</p>
          <Link to="/agentic-day-97" className="day001-nav-btn day001-nav-next">Day 97 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Voice Agents</span><span>Phase 14</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 96 <span aria-hidden="true">🎙️</span></h1>
              <p className="day001-day-theme">VOICE AGENTS &amp; REAL-TIME AI</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · VOICE</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '64%' }} /></div>

        <p className="day001-summary">
          Day 96 opens Phase 14 with real-time voice. <strong>Cascaded</strong> versus{' '}
          <strong>speech-to-speech</strong> architectures, <strong>streaming</strong> at every layer, and{' '}
          <strong>interruptibility</strong> so the agent behaves like a real conversation partner.
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

        <CardSection icon="🎙️" title="REAL-TIME VOICE" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#VoiceAI</span><span>#Day96</span><span>#RealTime</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
