import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCUMENT_PICKER = 'https://docs.expo.dev/versions/latest/sdk/document-picker/';
const FILESYSTEM_DOCS = 'https://docs.expo.dev/versions/latest/sdk/filesystem/';
const ASYNC_DOCS = 'https://react-native-async-storage.github.io/async-storage/docs/usage';

const LEARNT_TODAY = [
  { title: 'Upload PDFs', text: 'document picker selects a PDF; FileSystem reads it for upload or local parse' },
  { title: 'AI summarization', text: 'send text (or chunks) to an LLM API and show a short study summary' },
  { title: 'Flashcard generation', text: 'ask the model for Q&A pairs, then render a swipeable card deck' },
  { title: 'Offline support', text: 'cache summaries and cards in AsyncStorage / SQLite when the network drops' },
  { title: 'Study workflows', text: 'open doc → summarize → review cards → mark known/unknown' },
  { title: 'Chunking long PDFs', text: 'split large text so prompts stay within token limits' },
  { title: 'Loading UX', text: 'show progress while uploading and while the model thinks' },
  { title: 'Error & retry', text: 'failed AI calls get a clear retry — never leave a blank screen' },
  { title: 'Privacy note', text: 'warn users before sending document text to a third-party AI API' },
];

const CORE = [
  {
    icon: '📄', title: 'Upload PDFs', titleClass: 'card-title-cyan', subtitle: 'Pick A Document',
    description: 'expo-document-picker opens the system file browser for PDFs. Keep the uri, name and size — then read or upload the file for summarization.',
    code: 'const res = await DocumentPicker.getDocumentAsync({\n  type: "application/pdf",\n});\nif (!res.canceled) setPdf(res.assets[0]);',
  },
  {
    icon: '🤖', title: 'AI Summarization', titleClass: 'card-title-purple', subtitle: 'Key Ideas Fast',
    description: 'Extract text (or send the file to your backend), then call an LLM with a “summarize for studying” prompt. Show the result in a readable card.',
    code: 'const summary = await api.post("/summarize", {\n  text: chunk,\n});\nsetSummary(summary.body);',
  },
  {
    icon: '🃏', title: 'Flashcard Generation', titleClass: 'card-title-amber', subtitle: 'Q & A Deck',
    description: 'Ask the model for JSON flashcards: front (question) and back (answer). Render a deck the user can flip and mark as known.',
    code: '// prompt → [{ q, a }, ...]\nconst cards = JSON.parse(modelReply);\nsetDeck(cards);',
  },
];

const WORKFLOW = [
  {
    icon: '📴', title: 'Offline Support', titleClass: 'card-title-cyan', subtitle: 'Study Anywhere',
    description: 'Persist the last summary and deck locally. If NetInfo is offline, open cached study sets instead of failing the upload flow.',
    code: 'await AsyncStorage.setItem(\n  `study:${id}`,\n  JSON.stringify({ summary, cards }),\n);',
  },
  {
    icon: '📚', title: 'Study Workflows', titleClass: 'card-title-purple', subtitle: 'Doc → Cards',
    description: 'One path: pick PDF → generate summary → generate cards → review. Tabs or steps keep the flow obvious on a small screen.',
    code: '// steps: Upload → Summary → Cards → Review',
  },
  {
    icon: '✂️', title: 'Chunk Long Docs', titleClass: 'card-title-amber', subtitle: 'Token Limits',
    description: 'Large PDFs blow past context windows. Split into overlapping chunks, summarize each, then merge into one study brief.',
    code: 'const chunks = splitText(text, 3000);\nconst parts = await Promise.all(chunks.map(summarize));',
  },
  {
    icon: '🔜', title: 'Next: Monetization', titleClass: 'card-title-lime', subtitle: 'Day 118 Preview',
    description: 'Tomorrow: in-app purchases and subscriptions with RevenueCat — paywalls, entitlements, and restore purchases.',
    link: { href: '/day-118', label: 'Go to Day 118 →' },
  },
];

const RESOURCES = [
  {
    icon: '📄', title: 'Document Picker', titleClass: 'card-title-cyan', subtitle: 'API',
    description: 'Pick PDFs and other files from the device for upload into your study flow.',
    link: { href: DOCUMENT_PICKER, label: 'Read document-picker docs →', external: true },
  },
  {
    icon: '📁', title: 'FileSystem', titleClass: 'card-title-purple', subtitle: 'Read Files',
    description: 'Read local file URIs after picking a document — before upload or text extraction.',
    link: { href: FILESYSTEM_DOCS, label: 'Read FileSystem docs →', external: true },
  },
  {
    icon: '💾', title: 'AsyncStorage', titleClass: 'card-title-amber', subtitle: 'Cache Sets',
    description: 'Store summaries and flashcard decks for offline review sessions.',
    link: { href: ASYNC_DOCS, label: 'Read AsyncStorage docs →', external: true },
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

export default function Day117() {
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
          <Link to="/day-116" className="day001-nav-btn day001-nav-prev">← Day 116</Link>
          <p className="day001-datetime">React Native Day 117 · 1 Oct 2027</p>
          <Link to="/day-118" className="day001-nav-btn day001-nav-next">Day 118 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>AI Project</span><span>RN Day 17</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 117 <span aria-hidden="true">📚</span></h1>
              <p className="day001-day-theme">PROJECT: AI STUDY ASSISTANT</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '32%' }} /></div>

        <p className="day001-summary">
          Day 117 turns notes into a tutor. <strong>Upload PDFs</strong>, run{' '}
          <strong>AI summarization</strong>, <strong>generate flashcards</strong>, keep sets{' '}
          <strong>offline</strong>, and follow a clear <strong>study workflow</strong>. Document picker,
          networking and storage — plus an LLM — in one study app.
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

        <CardSection icon="📄" title="1 · UPLOAD, SUMMARIZE & CARDS" cards={CORE} columns={3} />
        <CardSection icon="📖" title="2 · OFFLINE & STUDY FLOW" cards={WORKFLOW} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#AI</span><span>#StudyApp</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
