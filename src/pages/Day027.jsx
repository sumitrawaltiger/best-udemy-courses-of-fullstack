import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const RN_DOCS = 'https://reactnative.dev/';
const EXPO_DOCS = 'https://docs.expo.dev/';

const LEARNT_TODAY = [
  { title: 'Same React, native output', text: 'React Native renders real native UI — not a webview — from the React you already know' },
  { title: 'Expo', text: 'the batteries-included way to start: tooling, native APIs and builds without Xcode/Android Studio setup' },
  { title: 'create-expo-app', text: 'scaffold a typed RN app in one command; run it on a real phone via the Expo Go app' },
  { title: 'Fast Refresh', text: 'save a file and the app updates instantly on the device — same DX as web' },
  { title: 'Components, not HTML', text: '<View>, <Text>, <Image> replace <div>, <span>, <img>' },
  { title: 'Everything is Flexbox', text: 'layout is Flexbox by default, with flexDirection column instead of row' },
  { title: 'TypeScript first', text: 'the Expo template is TypeScript, so props and navigation are typed' },
  { title: 'Runs everywhere', text: 'one codebase targets iOS, Android and the web' },
];

const START = [
  {
    icon: '📱', title: 'What React Native Is', titleClass: 'card-title-cyan', subtitle: 'Real Native UI',
    description:
      'You write React; React Native maps it to actual native views (UIView on iOS, View on Android). It’s not a webview — the UI is genuinely native, driven by your components.',
    code: '// the React mental model is unchanged\nfunction App() {\n  return <Text>Hello, native!</Text>;\n}',
  },
  {
    icon: '⚡', title: 'Start With Expo', titleClass: 'card-title-purple', subtitle: 'create-expo-app',
    description:
      'Expo removes the native-setup pain. Scaffold, start the dev server, scan the QR code with Expo Go, and your app is running on your phone with Fast Refresh.',
    code: 'npx create-expo-app@latest my-app -t\ncd my-app && npx expo start\n# scan the QR code with the Expo Go app',
  },
];

const BASICS = [
  {
    icon: '🧱', title: 'Core Components', titleClass: 'card-title-cyan', subtitle: 'View · Text · Image',
    description:
      'There’s no HTML. Use <View> for containers, <Text> for all text (text must be inside <Text>), <Image> for images, and <ScrollView> / <Pressable> for scrolling and taps.',
    code: 'import { View, Text, Image } from "react-native";\n<View>\n  <Text>Sumit Rawal</Text>\n  <Image source={{ uri }} style={{ width: 48, height: 48 }} />\n</View>',
  },
  {
    icon: '📐', title: 'Layout Is Flexbox', titleClass: 'card-title-purple', subtitle: 'Column By Default',
    description:
      'Every View is a flex container. The default flexDirection is column (not row like web). Style with a StyleSheet object of camelCased properties — no CSS files.',
    code: 'const s = StyleSheet.create({\n  row: { flexDirection: "row", gap: 8, alignItems: "center" },\n});\n<View style={s.row}> … </View>',
  },
  {
    icon: '🖱️', title: 'Handle Touches', titleClass: 'card-title-amber', subtitle: 'Pressable',
    description:
      'There’s no onClick — use <Pressable> (or Touchable*) with onPress. It gives you pressed state for feedback, the mobile equivalent of a button.',
    code: '<Pressable onPress={() => setCount(c => c + 1)}>\n  <Text>Tapped {count} times</Text>\n</Pressable>',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'React Native Docs', titleClass: 'card-title-cyan', subtitle: 'Official',
    description:
      'The core components and APIs, the "for React devs" intro, and platform-specific guidance — the reference for the mobile stack.',
    link: { href: RN_DOCS, label: 'Open React Native →', external: true },
  },
  {
    icon: '⚡', title: 'Expo Docs', titleClass: 'card-title-purple', subtitle: 'Tooling & APIs',
    description:
      'Getting started, the SDK of native modules (camera, location, notifications), Expo Router and EAS builds — the fastest path to shipping.',
    link: { href: EXPO_DOCS, label: 'Open Expo docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Components & Style', titleClass: 'card-title-amber', subtitle: 'Day 28 Preview',
    description:
      'Tomorrow — go deeper on the core components and styling: StyleSheet, Flexbox layout, responsive units, safe areas and platform-specific styles.',
    link: { href: '/day-028', label: 'Go to Day 28 →' },
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

export default function Day027() {
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
          <Link to="/day-026" className="day001-nav-btn day001-nav-prev">← Day 26</Link>
          <p className="day001-datetime">TypeScript Day 27</p>
          <Link to="/day-028" className="day001-nav-btn day001-nav-next">Day 28 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>React Native</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 27 <span aria-hidden="true">📱</span></h1>
              <p className="day001-day-theme">REACT NATIVE — GETTING STARTED (EXPO)</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TYPESCRIPT · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '27%' }} /></div>

        <p className="day001-summary">
          The same React skills go mobile. <strong>React Native</strong> renders <strong>real native UI</strong> (not a
          webview) from the React you already know. <strong>Expo</strong> is the batteries-included way to start —{' '}
          <code>create-expo-app</code>, <code>expo start</code>, scan the QR with <strong>Expo Go</strong>, and it runs
          on your phone with <strong>Fast Refresh</strong>. There’s no HTML: <code>&lt;View&gt;</code>,{' '}
          <code>&lt;Text&gt;</code>, <code>&lt;Image&gt;</code> replace the DOM tags, layout is{' '}
          <strong>Flexbox</strong> (column by default) via a <strong>StyleSheet</strong>, and taps use{' '}
          <code>&lt;Pressable onPress&gt;</code>. One typed codebase targets iOS, Android and web.{' '}
          <em>Next: components &amp; styling.</em>
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

        <CardSection icon="📱" title="WHAT & HOW TO START" cards={START} columns={2} />
        <CardSection icon="🧱" title="THE BASICS" cards={BASICS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#ReactNative</span><span>#Expo</span>
        </footer>
      </div>
    </div>
  );
}
