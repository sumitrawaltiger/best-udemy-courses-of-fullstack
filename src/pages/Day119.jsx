import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const AUDIO_DOCS = 'https://docs.expo.dev/versions/latest/sdk/audio/';
const SPEECH_DOCS = 'https://docs.expo.dev/versions/latest/sdk/speech/';
const ELEVENLABS = 'https://elevenlabs.io/docs/api-reference/text-to-speech';

const LEARNT_TODAY = [
  { title: 'Voice interaction', text: 'record speech → transcribe → send to an LLM → speak the reply' },
  { title: 'ElevenLabs (TTS)', text: 'text-to-speech API returns audio you play back in the app' },
  { title: 'AI assistant', text: 'a chat loop with tool-style prompts for tasks (“remind me”, “summarize”)' },
  { title: 'Task automation', text: 'map intents to actions — open a screen, save a note, call an API' },
  { title: 'Real-time UI', text: 'streaming tokens or status chips (“listening…”, “thinking…”, “speaking…”)' },
  { title: 'Mic permissions', text: 'request audio permission before recording; fail gracefully if denied' },
  { title: 'Conversation history', text: 'keep a message list so the model has context across turns' },
  { title: 'Latency UX', text: 'optimistic bubbles and spinners so waits feel intentional' },
  { title: 'Privacy', text: 'tell users when audio/text leaves the device for cloud STT / LLM / TTS' },
];

const CORE = [
  {
    icon: '🎙️', title: 'Voice In', titleClass: 'card-title-cyan', subtitle: 'Record & Transcribe',
    description: 'Record with expo-audio (or a speech-to-text SDK), stop on release, then send the clip or transcript to your backend / STT provider.',
    code: 'await recorder.record();\n// on release\nawait recorder.stop();\nconst text = await transcribe(uri);',
  },
  {
    icon: '🔊', title: 'ElevenLabs TTS', titleClass: 'card-title-purple', subtitle: 'Voice Out',
    description: 'POST the assistant’s reply to ElevenLabs (or expo-speech for on-device). Play the returned audio with an audio player.',
    code: 'const audio = await elevenLabs.tts(replyText);\nplayer.replace(audioUri);\nplayer.play();',
  },
  {
    icon: '🤖', title: 'AI Assistant Loop', titleClass: 'card-title-amber', subtitle: 'Chat + Tools',
    description: 'User text/voice → LLM → optional tool call → final reply. Keep system prompts short and task-focused for a “Jarvis” feel.',
    code: 'messages.push({ role: "user", content: text });\nconst reply = await chat(messages);\nmessages.push({ role: "assistant", content: reply });',
  },
];

const POLISH = [
  {
    icon: '⚡', title: 'Task Automation', titleClass: 'card-title-cyan', subtitle: 'Intent → Action',
    description: 'Parse simple intents (“open weather”, “save note”) and run local actions. Fall back to plain chat when no tool matches.',
    code: 'if (intent === "open_weather") router.push("/weather");\nelse showAssistantReply(reply);',
  },
  {
    icon: '💬', title: 'Real-Time UI', titleClass: 'card-title-purple', subtitle: 'Status Chips',
    description: 'Show Listening / Thinking / Speaking states. Stream tokens into the bubble when your API supports it.',
    code: 'setStatus("listening");\n// …\nsetStatus("thinking");\nsetStatus("speaking");',
  },
  {
    icon: '📜', title: 'Conversation History', titleClass: 'card-title-amber', subtitle: 'Context Window',
    description: 'Keep the last N turns in state (and optionally AsyncStorage) so follow-ups make sense without re-explaining.',
    code: 'const history = messages.slice(-12);\nawait chat(history);',
  },
  {
    icon: '🔜', title: 'Next: Ship To Store', titleClass: 'card-title-lime', subtitle: 'Day 120 Preview',
    description: 'Tomorrow: EAS production builds (APK/AAB), Play Store listing assets, versioning, and a release checklist.',
    link: { href: '/day-120', label: 'Go to Day 120 →' },
  },
];

const RESOURCES = [
  {
    icon: '🎙️', title: 'Expo Audio', titleClass: 'card-title-cyan', subtitle: 'Record',
    description: 'Microphone recording and playback for the voice input half of the agent.',
    link: { href: AUDIO_DOCS, label: 'Read audio docs →', external: true },
  },
  {
    icon: '🗣️', title: 'Expo Speech', titleClass: 'card-title-purple', subtitle: 'On-Device TTS',
    description: 'Simple on-device text-to-speech when you do not need a cloud voice.',
    link: { href: SPEECH_DOCS, label: 'Read speech docs →', external: true },
  },
  {
    icon: '🔊', title: 'ElevenLabs TTS', titleClass: 'card-title-amber', subtitle: 'API',
    description: 'High-quality cloud voices for the assistant’s spoken replies.',
    link: { href: ELEVENLABS, label: 'Read ElevenLabs docs →', external: true },
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

export default function Day119() {
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
          <Link to="/day-118" className="day001-nav-btn day001-nav-prev">← Day 118</Link>
          <p className="day001-datetime">React Native Day 119</p>
          <Link to="/day-120" className="day001-nav-btn day001-nav-next">Day 120 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>AI Agent</span><span>RN Day 19</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 119 <span aria-hidden="true">🗣️</span></h1>
              <p className="day001-day-theme">PROJECT: JARVIS AI AGENT</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">RN · MOBILE DEV</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '33%' }} /></div>

        <p className="day001-summary">
          Day 119 builds a voice <strong>Jarvis-style agent</strong>. <strong>Voice in</strong>, an{' '}
          <strong>LLM assistant</strong>, <strong>ElevenLabs</strong> (or Speech) for voice out,{' '}
          <strong>task automation</strong>, and a <strong>real-time UI</strong> for listening /
          thinking / speaking. Conversation history keeps follow-ups coherent.
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

        <CardSection icon="🎙️" title="1 · VOICE & ASSISTANT" cards={CORE} columns={3} />
        <CardSection icon="⚡" title="2 · ACTIONS & LIVE UI" cards={POLISH} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#AIAgent</span><span>#ElevenLabs</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
