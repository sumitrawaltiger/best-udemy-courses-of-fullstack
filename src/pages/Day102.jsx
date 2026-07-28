import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EXPO_DOCS = 'https://docs.expo.dev/get-started/create-a-project/';
const RN_INTRO = 'https://reactnative.dev/docs/intro-react-native-components';
const EXPO_GO = 'https://expo.dev/go';

const LEARNT_TODAY = [
  { title: 'What React Native is', text: 'a framework that renders React components to real native iOS & Android UI — one codebase, two platforms' },
  { title: 'Not a webview', text: 'RN maps <View>/<Text> to real UIView / android.widget, so apps feel native, not like a wrapped website' },
  { title: 'Expo', text: 'a toolchain & SDK on top of React Native — no Xcode/Android Studio needed to start' },
  { title: 'Expo vs bare workflow', text: 'managed Expo handles native config for you; bare gives full native control when you need it' },
  { title: 'create-expo-app', text: '`npx create-expo-app@latest` scaffolds a ready-to-run project with Expo Router' },
  { title: 'Expo Go', text: 'a phone app that runs your project instantly by scanning a QR — no build required' },
  { title: 'Metro bundler', text: 'the JavaScript bundler for RN; it serves your app to the simulator/device with fast refresh' },
  { title: 'Project structure', text: 'app/ holds routes, assets/ holds images, app.json is config, package.json holds deps' },
  { title: 'Fast Refresh', text: 'RN’s live-reload — save a file and the app updates on the device in place' },
];

const RN_ESSENTIALS = [
  {
    icon: '📱', title: 'What Is React Native', titleClass: 'card-title-cyan', subtitle: 'React For Phones',
    description: 'React Native lets you write apps in React that render to genuine native views. Your <View> becomes a real iOS/Android container — the same components, a native result.',
    code: '// Web (React DOM)      → <div>, <p>, <img>\n// Mobile (React Native) → <View>, <Text>, <Image>',
  },
  {
    icon: '🚀', title: 'Meet Expo', titleClass: 'card-title-purple', subtitle: 'Batteries Included',
    description: 'Expo is a framework and platform for RN. It bundles an SDK (camera, storage, notifications), a dev client, and cloud builds — so you ship without wrestling native toolchains on day one.',
    code: '// Expo gives you\n// • SDK (camera, sensors, storage)\n// • Expo Go for instant testing\n// • EAS for cloud builds',
  },
  {
    icon: '⚖️', title: 'Managed vs Bare', titleClass: 'card-title-amber', subtitle: 'Two Workflows',
    description: 'The managed (Expo) workflow handles native project files for you — fastest to start. The bare workflow exposes the ios/ and android/ folders for full native control. Start managed; eject only if a native need forces it.',
    code: '// managed → app.json config, no native folders\n// bare    → full ios/ & android/ projects',
  },
];

const FIRST_APP = [
  {
    icon: '🛠️', title: 'Create The App', titleClass: 'card-title-cyan', subtitle: 'One Command',
    description: 'Scaffold a new project with create-expo-app. It installs dependencies and sets up Expo Router so you have runnable screens immediately.',
    code: 'npx create-expo-app@latest MyApp\ncd MyApp\nnpx expo start',
  },
  {
    icon: '📲', title: 'Run On A Device', titleClass: 'card-title-purple', subtitle: 'Expo Go',
    description: 'Install Expo Go on your phone, scan the QR from the terminal, and the app loads over the network — no build, no cable. Simulators work too.',
    code: '# after `npx expo start`\n# scan QR with Expo Go (Android)\n# or the Camera app (iOS)\n# press i = iOS sim, a = Android sim',
  },
  {
    icon: '🔥', title: 'Fast Refresh', titleClass: 'card-title-amber', subtitle: 'Edit → See Live',
    description: 'Change a component and save — Metro pushes the update and the app refreshes in place, keeping most state. The tight loop that makes RN fun.',
    code: 'export default function App() {\n  return <Text>Hello Mobile 👋</Text>;\n}\n// save → phone updates instantly',
  },
];

const STRUCTURE = [
  {
    icon: '🗂️', title: 'Project Structure', titleClass: 'card-title-cyan', subtitle: 'What Goes Where',
    description: 'A fresh Expo app is small and predictable. app/ holds your screens (file-based routes), assets/ your images and fonts, and the root config files tie it together.',
    code: 'MyApp/\n├─ app/          // screens & routes\n├─ assets/       // images, fonts\n├─ app.json      // Expo config\n├─ package.json  // dependencies\n└─ node_modules/',
  },
  {
    icon: '⚙️', title: 'app.json', titleClass: 'card-title-purple', subtitle: 'App Config',
    description: 'app.json is the app’s identity: name, slug, icon, splash screen, orientation, and platform settings like the Android package. One file, both platforms.',
    code: '{\n  "expo": {\n    "name": "MyApp",\n    "slug": "my-app",\n    "orientation": "portrait",\n    "icon": "./assets/icon.png"\n  }\n}',
  },
  {
    icon: '📦', title: 'Entry & Dependencies', titleClass: 'card-title-amber', subtitle: 'How It Boots',
    description: 'Expo Router registers the entry automatically; app/_layout and app/index are your first screens. Add libraries with expo install so versions match the SDK.',
    code: '# add SDK-compatible packages\nnpx expo install expo-camera\nnpx expo install @react-navigation/native',
  },
  {
    icon: '🔜', title: 'Next: Core Components', titleClass: 'card-title-lime', subtitle: 'Day 103 Preview',
    description: 'Tomorrow: the building blocks of every screen — View, Text, Image, Pressable, ScrollView and FlatList — plus StyleSheet, Flexbox layout, dark mode and dimensions.',
    link: { href: '/day-103', label: 'Go to Day 103 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Create A Project', titleClass: 'card-title-cyan', subtitle: 'Expo Docs',
    description: 'The official quick start: install prerequisites, scaffold with create-expo-app, and run on a device or simulator step by step.',
    link: { href: EXPO_DOCS, label: 'Open Expo get started →', external: true },
  },
  {
    icon: '📱', title: 'RN Components Intro', titleClass: 'card-title-purple', subtitle: 'React Native Docs',
    description: 'How React Native maps components to native views — the mental bridge from web React to mobile.',
    link: { href: RN_INTRO, label: 'Read the RN intro →', external: true },
  },
  {
    icon: '📲', title: 'Expo Go', titleClass: 'card-title-amber', subtitle: 'Test On Your Phone',
    description: 'Grab the Expo Go app to run projects instantly by scanning a QR — the fastest way to see your code on a real device.',
    link: { href: EXPO_GO, label: 'Get Expo Go →', external: true },
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

export default function Day102() {
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
          <Link to="/day-101" className="day001-nav-btn day001-nav-prev">← Day 101</Link>
          <p className="day001-datetime">React Native Day 102 · 12 Apr 2027</p>
          <Link to="/day-103" className="day001-nav-btn day001-nav-next">Day 103 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>Expo</span><span>RN Day 2</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 102 <span aria-hidden="true">🚀</span></h1>
              <p className="day001-day-theme">GETTING STARTED WITH EXPO</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '28%' }} /></div>

        <p className="day001-summary">
          Day 102 leaves the browser. <strong>React Native</strong> renders React components to real native views —
          not a webview — and <strong>Expo</strong> is the toolchain that gets me there without Xcode or Android
          Studio on day one. I compared the <strong>managed vs bare</strong> workflows, scaffolded a project with{' '}
          <strong>create-expo-app</strong>, ran it on my phone through <strong>Expo Go</strong> with{' '}
          <strong>Fast Refresh</strong>, and learned the <strong>project structure</strong> — app/, assets/ and app.json.
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

        <CardSection icon="📱" title="1 · REACT NATIVE ESSENTIALS" cards={RN_ESSENTIALS} columns={3} />
        <CardSection icon="🛠️" title="2 · YOUR FIRST EXPO APP" cards={FIRST_APP} columns={3} />
        <CardSection icon="🗂️" title="3 · PROJECT STRUCTURE" cards={STRUCTURE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#Expo</span><span>#MobileDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
