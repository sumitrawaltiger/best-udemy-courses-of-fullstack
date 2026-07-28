import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const FLATLIST_DOCS = 'https://reactnative.dev/docs/flatlist';
const EXPO_SDK = 'https://docs.expo.dev/versions/latest/';

const LEARNT_TODAY = [
  { title: 'FlatList, not map', text: 'render long lists with FlatList — it virtualises rows so only visible ones mount' },
  { title: 'keyExtractor', text: 'give each row a stable key; renderItem draws one item' },
  { title: 'Pull to refresh', text: 'onRefresh + refreshing add the native pull-to-refresh gesture' },
  { title: 'Infinite scroll', text: 'onEndReached loads the next page as the user nears the bottom' },
  { title: 'Data fetching', text: 'fetch works the same; TanStack Query (Day 18) works in RN too' },
  { title: 'AsyncStorage', text: 'persist small key-value data locally on the device' },
  { title: 'Native APIs via Expo', text: 'camera, location, notifications, haptics — installed and typed' },
  { title: 'Permissions', text: 'request device permissions at runtime before using a sensor' },
];

const LISTS = [
  {
    icon: '📜', title: 'FlatList', titleClass: 'card-title-cyan', subtitle: 'Virtualised Lists',
    description:
      'Never .map() a big array of Views — it mounts everything. FlatList renders only the rows on screen and recycles them, so a 10,000-item list scrolls smoothly.',
    code: '<FlatList\n  data={users}\n  keyExtractor={(u) => u.id}\n  renderItem={({ item }) => <UserRow user={item} />}\n/>',
  },
  {
    icon: '🔄', title: 'Refresh & Paginate', titleClass: 'card-title-purple', subtitle: 'Native Gestures',
    description:
      'Add pull-to-refresh with onRefresh + refreshing, and infinite scroll with onEndReached to load the next page. These are built into FlatList — no extra library.',
    code: '<FlatList data={items}\n  refreshing={isRefetching} onRefresh={refetch}\n  onEndReached={loadMore} onEndReachedThreshold={0.5}\n/>',
  },
];

const NATIVE = [
  {
    icon: '💾', title: 'Local Storage', titleClass: 'card-title-cyan', subtitle: 'AsyncStorage',
    description:
      'For small persisted data (a token, settings), AsyncStorage is an async key-value store. For server data, TanStack Query’s cache works in React Native just like on web.',
    code: "import AsyncStorage from '@react-native-async-storage/async-storage';\nawait AsyncStorage.setItem('token', jwt);\nconst t = await AsyncStorage.getItem('token');",
  },
  {
    icon: '📷', title: 'Device APIs', titleClass: 'card-title-purple', subtitle: 'Expo Modules',
    description:
      'Expo ships typed modules for the camera, location, notifications, haptics, image picker and more. Install one and import it — no native code to write.',
    code: "import * as Location from 'expo-location';\nconst pos = await Location.getCurrentPositionAsync();\n// { coords: { latitude, longitude } }",
  },
  {
    icon: '🔐', title: 'Permissions', titleClass: 'card-title-amber', subtitle: 'Ask At Runtime',
    description:
      'Sensors need consent. Request permission at runtime and handle the denied case gracefully — the same pattern for camera, location and notifications.',
    code: 'const { status } = await Location.requestForegroundPermissionsAsync();\nif (status !== "granted") return; // handle denial',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'FlatList', titleClass: 'card-title-cyan', subtitle: 'React Native Docs',
    description:
      'The performant list component — props, virtualisation, headers/footers, separators, and SectionList for grouped data.',
    link: { href: FLATLIST_DOCS, label: 'Open the FlatList docs →', external: true },
  },
  {
    icon: '📦', title: 'Expo SDK', titleClass: 'card-title-purple', subtitle: 'Native Modules',
    description:
      'The catalogue of Expo APIs — camera, location, notifications, sensors, secure store and more, each installable and typed.',
    link: { href: EXPO_SDK, label: 'Browse the Expo SDK →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Build & Publish', titleClass: 'card-title-amber', subtitle: 'Day 31 Preview',
    description:
      'Tomorrow — from dev to the stores: EAS Build, app icons & splash, over-the-air updates, and submitting to the App Store and Google Play.',
    link: { href: '/day-031', label: 'Go to Day 31 →' },
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

export default function Day030() {
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
          <Link to="/day-029" className="day001-nav-btn day001-nav-prev">← Day 29</Link>
          <p className="day001-datetime">TypeScript Day 30 · 30 Jan 2027</p>
          <Link to="/day-031" className="day001-nav-btn day001-nav-next">Day 31 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>React Native</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 30 <span aria-hidden="true">📜</span></h1>
              <p className="day001-day-theme">REACT NATIVE — LISTS, DATA &amp; NATIVE APIs</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '30%' }} /></div>

        <p className="day001-summary">
          Real app data on mobile. Render long lists with <strong>FlatList</strong>, not <code>.map()</code> — it{' '}
          <strong>virtualises</strong> rows so only visible ones mount, and gives <strong>pull-to-refresh</strong>{' '}
          (<code>onRefresh</code>) and <strong>infinite scroll</strong> (<code>onEndReached</code>) for free. Fetching
          works the same as web, and <strong>TanStack Query</strong> (Day 18) runs in RN too. Persist small data with{' '}
          <strong>AsyncStorage</strong>, and reach device features — camera, location, notifications — through typed{' '}
          <strong>Expo modules</strong>, always <strong>requesting permission at runtime</strong> first.{' '}
          <em>Next: build &amp; publish to the stores.</em>
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

        <CardSection icon="📜" title="LISTS & DATA" cards={LISTS} columns={2} />
        <CardSection icon="📷" title="STORAGE & DEVICE APIs" cards={NATIVE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#ReactNative</span><span>#Expo</span>
        </footer>
      </div>
    </div>
  );
}
