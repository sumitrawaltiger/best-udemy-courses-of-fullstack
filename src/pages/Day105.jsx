import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ROUTER_DOCS = 'https://docs.expo.dev/router/introduction/';
const ROUTER_LAYOUTS = 'https://docs.expo.dev/router/basics/layout/';
const ROUTER_AUTH = 'https://docs.expo.dev/router/reference/authentication/';

const LEARNT_TODAY = [
  { title: 'Expo Router', text: 'file-based routing for RN — the app/ folder structure IS your navigation, like Next.js' },
  { title: 'File = route', text: 'app/index.tsx is "/", app/profile.tsx is "/profile" — no manual screen registration' },
  { title: '_layout files', text: 'app/_layout defines the navigator (Stack/Tabs) that wraps a folder’s routes' },
  { title: 'Dynamic routes', text: 'app/user/[id].tsx matches /user/42; read it with useLocalSearchParams' },
  { title: 'Route groups', text: '(auth) and (tabs) folders group routes without adding a URL segment' },
  { title: 'Link & router', text: '<Link href> navigates declaratively; router.push/replace does it in code' },
  { title: 'Protected routes', text: 'redirect from a layout based on auth state to guard private screens' },
  { title: 'Tabs layout', text: 'a Tabs navigator in (tabs)/_layout renders the bottom tab bar' },
  { title: 'Splash screen', text: 'expo-splash-screen keeps the splash up until fonts/data are ready' },
];

const FILE_ROUTING = [
  {
    icon: '🗂️', title: 'File-Based Routing', titleClass: 'card-title-cyan', subtitle: 'Folder = Navigation',
    description: 'Expo Router brings Next.js-style routing to mobile. Every file in app/ becomes a screen automatically — no navigator registration, the folder tree is the route map.',
    code: 'app/\n├─ _layout.tsx   // root navigator\n├─ index.tsx     // "/"\n├─ profile.tsx   // "/profile"\n└─ settings.tsx  // "/settings"',
  },
  {
    icon: '🔗', title: 'Link & router', titleClass: 'card-title-purple', subtitle: 'Two Ways To Move',
    description: 'Navigate declaratively with the <Link> component, or imperatively with the router object after an action like a form submit or login.',
    code: 'import { Link, router } from "expo-router";\n\n<Link href="/profile">Profile</Link>\n\n// in code\nrouter.push("/profile");\nrouter.replace("/home");',
  },
  {
    icon: '🧩', title: '_layout Files', titleClass: 'card-title-amber', subtitle: 'Wrap A Folder',
    description: 'A _layout file declares the navigator for its folder — a Stack, Tabs, or Drawer. Layouts nest, so each section can have its own navigation shell.',
    code: '// app/_layout.tsx\nimport { Stack } from "expo-router";\n\nexport default function Layout() {\n  return <Stack />;\n}',
  },
];

const DYNAMIC = [
  {
    icon: '🆔', title: 'Dynamic [id] Routes', titleClass: 'card-title-cyan', subtitle: 'One File, Many URLs',
    description: 'Wrap a filename in brackets to make it dynamic. app/user/[id].tsx matches /user/1, /user/42 — read the value with useLocalSearchParams.',
    code: '// app/user/[id].tsx\nimport { useLocalSearchParams } from "expo-router";\n\nconst { id } = useLocalSearchParams(); // "42"',
  },
  {
    icon: '📁', title: 'Route Groups', titleClass: 'card-title-purple', subtitle: 'Organize Without URLs',
    description: 'A folder in parentheses like (tabs) or (auth) groups related routes but adds nothing to the URL. Use it to give a section its own layout without a path prefix.',
    code: 'app/\n├─ (auth)/\n│  ├─ login.tsx    // "/login"\n│  └─ _layout.tsx\n└─ (tabs)/\n   ├─ index.tsx    // "/"\n   └─ _layout.tsx',
  },
  {
    icon: '📊', title: 'Tabs Layout', titleClass: 'card-title-amber', subtitle: 'Bottom Bar, File-Based',
    description: 'Put a Tabs navigator in (tabs)/_layout and each file in the folder becomes a tab. Configure icons and titles per screen with Tabs.Screen options.',
    code: '// app/(tabs)/_layout.tsx\nimport { Tabs } from "expo-router";\n\nexport default function TabLayout() {\n  return <Tabs />;\n}',
  },
];

const PROTECTED = [
  {
    icon: '🔒', title: 'Protected Routes', titleClass: 'card-title-cyan', subtitle: 'Guard Private Screens',
    description: 'Check auth state inside a layout and redirect unauthenticated users to login. Because layouts wrap their folder, one guard protects every screen beneath it.',
    code: 'import { Redirect } from "expo-router";\n\nif (!user) return <Redirect href="/login" />;\nreturn <Stack />; // only for signed-in users',
  },
  {
    icon: '🎬', title: 'Splash Screen', titleClass: 'card-title-purple', subtitle: 'Hold Until Ready',
    description: 'Keep the splash visible while fonts, auth, or initial data load, then hide it — no flash of an empty screen on launch.',
    code: 'import * as SplashScreen from "expo-splash-screen";\n\nSplashScreen.preventAutoHideAsync();\n// after fonts/data ready\nawait SplashScreen.hideAsync();',
  },
  {
    icon: '✅', title: 'RN Foundations Complete', titleClass: 'card-title-amber', subtitle: 'Days 101–105 Recap',
    description: 'React refresher → Expo → core components & styling → React Navigation → Expo Router. That’s the foundation: I can build, style, and navigate a real multi-screen mobile app.',
    footer: 'Next up in the cohort: networking, storage, device APIs and shipping with EAS.',
  },
  {
    icon: '🔜', title: 'Continue The Track', titleClass: 'card-title-lime', subtitle: 'Networking Next',
    description: 'The cohort continues with fetch & CRUD, AsyncStorage/SQLite, sensors and media, then EAS builds and store submission. Explore the full 25-lesson React Native syllabus.',
    link: { href: '/mobile', label: 'Open the RN track →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Expo Router Intro', titleClass: 'card-title-cyan', subtitle: 'Official Docs',
    description: 'The introduction to file-based routing in Expo — how the app/ directory maps to screens and why it simplifies navigation.',
    link: { href: ROUTER_DOCS, label: 'Read the intro →', external: true },
  },
  {
    icon: '🧩', title: 'Layouts', titleClass: 'card-title-purple', subtitle: 'Nesting & Navigators',
    description: 'How _layout files define Stack, Tabs and Drawer navigators, and how nested layouts compose your app’s structure.',
    link: { href: ROUTER_LAYOUTS, label: 'Read about layouts →', external: true },
  },
  {
    icon: '🔒', title: 'Authentication', titleClass: 'card-title-amber', subtitle: 'Protected Flows',
    description: 'The recommended pattern for auth in Expo Router — protecting routes, redirecting, and structuring signed-in vs signed-out stacks.',
    link: { href: ROUTER_AUTH, label: 'Read the auth guide →', external: true },
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

export default function Day105() {
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
          <Link to="/day-104" className="day001-nav-btn day001-nav-prev">← Day 104</Link>
          <p className="day001-datetime">React Native Day 105</p>
          <Link to="/day-106" className="day001-nav-btn day001-nav-next">Day 106 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>Expo Router</span><span>RN Day 5</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 105 <span aria-hidden="true">🧭</span></h1>
              <p className="day001-day-theme">EXPO ROUTER — MODERN FILE-BASED ROUTING</p>
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
          Day 105 modernizes navigation with <strong>Expo Router</strong>: the <strong>app/</strong> folder is the
          route map, just like Next.js. Files become screens, <strong>_layout</strong> files declare the navigator,{' '}
          <strong>[id]</strong> files match dynamic URLs read via <strong>useLocalSearchParams</strong>, and{' '}
          <strong>(groups)</strong> organize routes without touching the path. I guarded private screens with{' '}
          <strong>protected routes</strong>, built a <strong>tabs</strong> layout, and controlled the{' '}
          <strong>splash screen</strong> — wrapping up the React Native foundations.
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

        <CardSection icon="🗂️" title="1 · FILE-BASED ROUTING" cards={FILE_ROUTING} columns={3} />
        <CardSection icon="🆔" title="2 · DYNAMIC ROUTES, GROUPS & TABS" cards={DYNAMIC} columns={3} />
        <CardSection icon="🔒" title="3 · PROTECTED ROUTES & WRAP-UP" cards={PROTECTED} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#ExpoRouter</span><span>#MobileDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
