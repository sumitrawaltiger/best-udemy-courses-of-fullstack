import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LOCATION_DOCS = 'https://docs.expo.dev/versions/latest/sdk/location/';
const REANIMATED_DOCS = 'https://docs.swmansion.com/react-native-reanimated/';
const ASYNC_STORAGE = 'https://react-native-async-storage.github.io/async-storage/docs/usage';

const LEARNT_TODAY = [
  { title: 'Location → weather', text: 'read GPS (or a city search), then call a forecast API with lat/lon' },
  { title: 'Current conditions', text: 'temperature, feels-like, humidity, wind, and a condition icon' },
  { title: '7-day forecast', text: 'map daily highs/lows into a scrollable list or week strip' },
  { title: 'Weather alerts', text: 'surface severe-weather messages from the API when present' },
  { title: 'Offline caching', text: 'save the last successful response in AsyncStorage and show it when offline' },
  { title: 'Pull to refresh', text: 'RefreshControl re-fetches and updates the cache' },
  { title: 'Smooth animations', text: 'Reanimated / LayoutAnimation for icon transitions and list entrances' },
  { title: 'Loading & error UI', text: 'skeletons while fetching; a clear retry state when the network fails' },
  { title: 'Projects phase starts', text: 'Days 115+ apply the whole RN stack — location, networking, storage, motion' },
];

const FEATURES = [
  {
    icon: '📍', title: 'Location Weather', titleClass: 'card-title-cyan', subtitle: 'Where Am I?',
    description: 'Request foreground location, read coordinates, and hit a weather API (Open-Meteo, OpenWeather, etc.). Fall back to a city search when permission is denied.',
    code: 'const pos = await Location.getCurrentPositionAsync();\nconst { latitude, longitude } = pos.coords;\nconst data = await fetchWeather(latitude, longitude);',
  },
  {
    icon: '📅', title: '7-Day Forecast', titleClass: 'card-title-purple', subtitle: 'The Week Ahead',
    description: 'Render daily highs, lows, and icons in a FlatList or horizontal strip. Keep one component for “today” and a smaller row for the rest of the week.',
    code: '{forecast.daily.map((d) => (\n  <DayRow key={d.date} high={d.max} low={d.min} icon={d.icon} />\n))}',
  },
  {
    icon: '⚠️', title: 'Weather Alerts', titleClass: 'card-title-amber', subtitle: 'Stay Safe',
    description: 'If the API returns alerts, show a banner or modal with severity and summary. Don’t bury critical warnings behind an extra tap.',
    code: 'if (data.alerts?.length) {\n  setAlert(data.alerts[0]);\n}',
  },
];

const POLISH = [
  {
    icon: '💾', title: 'Offline Cache', titleClass: 'card-title-cyan', subtitle: 'Last Known Good',
    description: 'After every successful fetch, write JSON to AsyncStorage. On launch or when NetInfo says offline, hydrate the UI from cache and label it “Updated earlier”.',
    code: 'await AsyncStorage.setItem("weather", JSON.stringify(data));\nconst cached = JSON.parse(await AsyncStorage.getItem("weather"));',
  },
  {
    icon: '✨', title: 'Smooth Animations', titleClass: 'card-title-purple', subtitle: 'Feel Native',
    description: 'Animate condition icon changes, fade in the forecast list, and spring the temperature number. Reanimated keeps gestures and transitions on the UI thread.',
    code: '// FadeIn / Layout animations on forecast rows\n// shared value for temperature crossfade',
  },
  {
    icon: '🔄', title: 'Refresh & Errors', titleClass: 'card-title-amber', subtitle: 'Resilient UI',
    description: 'Pull-to-refresh, a loading skeleton, and a retry button on failure. Never leave a blank white screen when the API is down.',
    code: '<ScrollView refreshControl={\n  <RefreshControl refreshing={loading} onRefresh={load} />\n}>',
  },
  {
    icon: '🚀', title: 'What Comes Next', titleClass: 'card-title-lime', subtitle: 'Day 116 Preview',
    description: 'Tomorrow: a wallpaper app — image grid, categories & search, infinite scroll, download & save, caching, and favorites.',
    link: { href: '/day-116', label: 'Go to Day 116 →' },
  },
];

const RESOURCES = [
  {
    icon: '📍', title: 'Expo Location', titleClass: 'card-title-cyan', subtitle: 'GPS',
    description: 'Permissions, current position, and watching location — the input for “weather near me”.',
    link: { href: LOCATION_DOCS, label: 'Read location docs →', external: true },
  },
  {
    icon: '💾', title: 'AsyncStorage', titleClass: 'card-title-purple', subtitle: 'Cache',
    description: 'Persist the last forecast so the app still shows something with no signal.',
    link: { href: ASYNC_STORAGE, label: 'Read AsyncStorage docs →', external: true },
  },
  {
    icon: '✨', title: 'Reanimated', titleClass: 'card-title-amber', subtitle: 'Motion',
    description: 'UI-thread animations for polished icon and list transitions in the weather UI.',
    link: { href: REANIMATED_DOCS, label: 'Read Reanimated docs →', external: true },
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

export default function Day115() {
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
          <Link to="/day-114" className="day001-nav-btn day001-nav-prev">← Day 114</Link>
          <p className="day001-datetime">React Native Day 115 · 29 Sep 2027</p>
          <Link to="/day-116" className="day001-nav-btn day001-nav-next">Day 116 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>Project</span><span>RN Day 15</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 115 <span aria-hidden="true">🌤️</span></h1>
              <p className="day001-day-theme">PROJECT: WEATHER APP</p>
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
          Day 115 opens the Projects phase with a <strong>weather app</strong>. Wire{' '}
          <strong>location</strong> to a forecast API, show <strong>current conditions</strong> and a{' '}
          <strong>7-day outlook</strong>, surface <strong>alerts</strong>, <strong>cache offline</strong>,
          and polish with <strong>animations</strong> and pull-to-refresh. One app that pulls together
          Days 101–114.
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

        <CardSection icon="🌤️" title="1 · CORE FEATURES" cards={FEATURES} columns={3} />
        <CardSection icon="✨" title="2 · CACHE, MOTION & RESILIENCE" cards={POLISH} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#WeatherApp</span><span>#Expo</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
