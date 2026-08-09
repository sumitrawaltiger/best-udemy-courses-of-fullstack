import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ASYNC_DOCS = 'https://react-native-async-storage.github.io/async-storage/docs/usage';
const SECURE_DOCS = 'https://docs.expo.dev/versions/latest/sdk/securestore/';
const SQLITE_DOCS = 'https://docs.expo.dev/versions/latest/sdk/sqlite/';

const LEARNT_TODAY = [
  { title: 'On-device storage', text: 'apps keep data locally so they work offline and load instantly on relaunch' },
  { title: 'AsyncStorage', text: 'a simple async key–value store for small, non-secret data like settings and flags' },
  { title: 'Values are strings', text: 'AsyncStorage stores strings — JSON.stringify to save objects, JSON.parse to read' },
  { title: 'SecureStore', text: 'encrypted storage for secrets — tokens, keys — backed by Keychain / Keystore' },
  { title: 'SQLite', text: 'a real on-device SQL database for structured, queryable, relational data' },
  { title: 'FileSystem', text: 'expo-file-system reads and writes files and caches downloads on the device' },
  { title: 'Offline-first', text: 'read from local storage first, then sync with the server when a connection returns' },
  { title: 'Pick the right store', text: 'settings → AsyncStorage, secrets → SecureStore, records → SQLite, blobs → FileSystem' },
];

const KEYVALUE = [
  {
    icon: '🗝️', title: 'AsyncStorage', titleClass: 'card-title-cyan', subtitle: 'Simple Key–Value',
    description: 'AsyncStorage is an async, unencrypted key–value store — ideal for preferences, the last screen, or a "seen onboarding" flag. Every method returns a promise.',
    code: 'import AsyncStorage from "@react-native-async-storage/async-storage";\n\nawait AsyncStorage.setItem("theme", "dark");\nconst theme = await AsyncStorage.getItem("theme"); // "dark"',
  },
  {
    icon: '📦', title: 'Storing Objects', titleClass: 'card-title-purple', subtitle: 'Stringify / Parse',
    description: 'It only stores strings, so serialize objects with JSON.stringify on write and JSON.parse on read. A tiny helper keeps this clean across the app.',
    code: 'await AsyncStorage.setItem("user", JSON.stringify(user));\nconst raw = await AsyncStorage.getItem("user");\nconst user = raw ? JSON.parse(raw) : null;',
  },
  {
    icon: '🔐', title: 'SecureStore', titleClass: 'card-title-amber', subtitle: 'Encrypted Secrets',
    description: 'Never keep tokens in AsyncStorage. SecureStore encrypts values in the iOS Keychain / Android Keystore — the right home for auth tokens and API keys.',
    code: 'import * as SecureStore from "expo-secure-store";\n\nawait SecureStore.setItemAsync("token", jwt);\nconst jwt = await SecureStore.getItemAsync("token");',
  },
];

const STRUCTURED = [
  {
    icon: '🗄️', title: 'SQLite Basics', titleClass: 'card-title-cyan', subtitle: 'A Real Database On Device',
    description: 'expo-sqlite gives a full SQL database on the phone. Open a database, create tables, and run queries — perfect for structured, relational, offline data.',
    code: 'import * as SQLite from "expo-sqlite";\n\nconst db = await SQLite.openDatabaseAsync("app.db");\nawait db.execAsync(\n  "CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY, text TEXT)"\n);',
  },
  {
    icon: '🔎', title: 'Querying SQLite', titleClass: 'card-title-purple', subtitle: 'Insert & Select',
    description: 'Use parameterized queries to insert and read rows safely. getAllAsync returns an array you can drop straight into a FlatList.',
    code: 'await db.runAsync("INSERT INTO notes (text) VALUES (?)", ["Learn RN"]);\nconst rows = await db.getAllAsync("SELECT * FROM notes");\n// [{ id: 1, text: "Learn RN" }]',
  },
  {
    icon: '📁', title: 'FileSystem', titleClass: 'card-title-amber', subtitle: 'Files & Caches',
    description: 'expo-file-system reads and writes files in the app’s sandbox and caches downloads — use it for exported data, generated files, or offline media.',
    code: 'import * as FileSystem from "expo-file-system";\n\nconst uri = FileSystem.documentDirectory + "log.txt";\nawait FileSystem.writeAsStringAsync(uri, "hello");\nconst text = await FileSystem.readAsStringAsync(uri);',
  },
  {
    icon: '📶', title: 'Offline-First Pattern', titleClass: 'card-title-lime', subtitle: 'Local, Then Sync',
    description: 'Read and write locally so the app is instant and works with no signal, then reconcile with the server when connectivity returns. Local is the source of truth for the UI.',
    code: '// 1. render from local store immediately\n// 2. fetch server data in background\n// 3. merge + write back locally\n// 4. queue writes made while offline',
  },
];

const CHOOSING = [
  {
    icon: '🧭', title: 'Which Store When', titleClass: 'card-title-cyan', subtitle: 'A Decision Guide',
    description: 'Match the data to the tool: small settings → AsyncStorage; secrets → SecureStore; structured/relational records → SQLite; files and blobs → FileSystem.',
    code: '// settings/flags → AsyncStorage\n// tokens/keys    → SecureStore\n// records/tables  → SQLite\n// files/media     → FileSystem',
  },
  {
    icon: '⚡', title: 'Load Fast On Launch', titleClass: 'card-title-purple', subtitle: 'Hydrate From Cache',
    description: 'Read cached data at startup and render it immediately, so the app never shows a blank screen while the network wakes up. Fetch fresh data behind the scenes.',
    code: 'useEffect(() => {\n  (async () => {\n    const cached = await AsyncStorage.getItem("feed");\n    if (cached) setFeed(JSON.parse(cached)); // instant\n    refreshFromServer();                      // then update\n  })();\n}, []);',
  },
  {
    icon: '🔜', title: 'Next: Sensors & Motion', titleClass: 'card-title-amber', subtitle: 'Day 108 Preview',
    description: 'Tomorrow the phone comes alive: the accelerometer, gyroscope and pedometer through Expo Sensors — reading motion and detecting a shake.',
    link: { href: '/day-108', label: 'Go to Day 108 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'AsyncStorage', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'The AsyncStorage usage guide — get, set, merge, multiGet, and clearing keys for simple persistent state.',
    link: { href: ASYNC_DOCS, label: 'Read AsyncStorage docs →', external: true },
  },
  {
    icon: '🔐', title: 'SecureStore', titleClass: 'card-title-purple', subtitle: 'Expo',
    description: 'Store sensitive values encrypted on device — the API and platform notes for Keychain and Keystore.',
    link: { href: SECURE_DOCS, label: 'Read SecureStore docs →', external: true },
  },
  {
    icon: '🗄️', title: 'expo-sqlite', titleClass: 'card-title-amber', subtitle: 'Expo',
    description: 'The full SQLite reference — opening databases, running queries, transactions, and migrations on device.',
    link: { href: SQLITE_DOCS, label: 'Read SQLite docs →', external: true },
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

export default function Day107() {
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
          <Link to="/day-106" className="day001-nav-btn day001-nav-prev">← Day 106</Link>
          <p className="day001-datetime">React Native Day 107 · 21 Sep 2027</p>
          <Link to="/day-108" className="day001-nav-btn day001-nav-next">Day 108 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>Storage</span><span>RN Day 7</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 107 <span aria-hidden="true">💾</span></h1>
              <p className="day001-day-theme">DATA STORAGE &amp; OFFLINE SUPPORT</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '29%' }} /></div>

        <p className="day001-summary">
          Day 107 makes the app work without a network. <strong>AsyncStorage</strong> keeps simple key–value settings
          (strings, so JSON.stringify objects), <strong>SecureStore</strong> encrypts secrets like tokens, and{' '}
          <strong>SQLite</strong> gives a real queryable database on the device. <strong>FileSystem</strong> handles
          files and caches. I combined them into an <strong>offline-first</strong> flow: render from local storage
          instantly, then sync with the server when the connection returns.
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

        <CardSection icon="🗝️" title="1 · KEY–VALUE & SECRETS" cards={KEYVALUE} columns={3} />
        <CardSection icon="🗄️" title="2 · SQLITE, FILES & OFFLINE" cards={STRUCTURED} columns={4} />
        <CardSection icon="🧭" title="3 · CHOOSING & LOADING FAST" cards={CHOOSING} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#Storage</span><span>#SQLite</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
