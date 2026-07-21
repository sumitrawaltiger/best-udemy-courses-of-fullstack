import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const STYLE_DOCS = 'https://reactnative.dev/docs/style';
const FLEX_DOCS = 'https://reactnative.dev/docs/flexbox';

const LEARNT_TODAY = [
  { title: 'StyleSheet.create', text: 'define styles as objects with camelCased props — no CSS, no units (numbers = dp)' },
  { title: 'Flexbox everywhere', text: 'layout is Flexbox; flexDirection defaults to column, flex: 1 fills space' },
  { title: 'No cascade', text: 'styles don’t inherit (except some text props) — apply them explicitly per component' },
  { title: 'Style arrays', text: 'pass an array to merge base + conditional styles, later wins' },
  { title: 'Text must nest', text: 'all text lives inside <Text>; nested <Text> inherits font styles' },
  { title: 'SafeAreaView', text: 'keep content clear of the notch and home indicator' },
  { title: 'Platform styles', text: 'Platform.select / Platform.OS branch iOS vs Android styling' },
  { title: 'Responsive', text: 'useWindowDimensions and percentages adapt to any screen size' },
];

const STYLING = [
  {
    icon: '🎨', title: 'StyleSheet', titleClass: 'card-title-cyan', subtitle: 'Objects, Not CSS',
    description:
      'Styles are plain objects created with StyleSheet.create — camelCased keys, numbers as density-independent pixels, no units or selectors. Merge with an array; the later entry wins.',
    code: 'const s = StyleSheet.create({\n  card: { padding: 16, borderRadius: 12, backgroundColor: "#111" },\n  active: { borderColor: "#22d3ee", borderWidth: 1 },\n});\n<View style={[s.card, isActive && s.active]} />',
  },
  {
    icon: '📐', title: 'Flexbox Layout', titleClass: 'card-title-purple', subtitle: 'Column By Default',
    description:
      'Every View is a flex container. flexDirection is column (vertical) by default; flip to row for horizontal. flex: 1 grows to fill, and justify/align work as on web.',
    code: '<View style={{ flex: 1, flexDirection: "row",\n  justifyContent: "space-between", alignItems: "center" }}>\n  <Text>Left</Text><Text>Right</Text>\n</View>',
  },
];

const ADAPT = [
  {
    icon: '📲', title: 'Safe Areas', titleClass: 'card-title-cyan', subtitle: 'Notch & Home Bar',
    description:
      'Phones have notches and home indicators. Wrap screens in SafeAreaView (or useSafeAreaInsets) so content isn’t hidden behind system UI.',
    code: 'import { SafeAreaView } from "react-native-safe-area-context";\n<SafeAreaView style={{ flex: 1 }}> … </SafeAreaView>',
  },
  {
    icon: '🤖', title: 'Platform Differences', titleClass: 'card-title-purple', subtitle: 'iOS vs Android',
    description:
      'Sometimes a style or value should differ per platform. Platform.select and Platform.OS let you branch cleanly — shadows on iOS, elevation on Android, for example.',
    code: 'const shadow = Platform.select({\n  ios: { shadowOpacity: 0.2, shadowRadius: 6 },\n  android: { elevation: 4 },\n});',
  },
  {
    icon: '📏', title: 'Responsive', titleClass: 'card-title-amber', subtitle: 'Any Screen Size',
    description:
      'Screens vary. useWindowDimensions gives live width/height, and percentage widths adapt automatically — the mobile version of a responsive layout.',
    code: 'const { width } = useWindowDimensions();\nconst cols = width > 600 ? 2 : 1;\n<View style={{ width: "50%" }} />',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Styling', titleClass: 'card-title-cyan', subtitle: 'React Native Docs',
    description:
      'The full styling reference — StyleSheet, supported properties, style arrays, and how text styling inherits.',
    link: { href: STYLE_DOCS, label: 'Open the styling docs →', external: true },
  },
  {
    icon: '📐', title: 'Flexbox', titleClass: 'card-title-purple', subtitle: 'Layout',
    description:
      'How Flexbox works in React Native, the column default, and every justify/align option with visual examples.',
    link: { href: FLEX_DOCS, label: 'Open the Flexbox docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Navigation', titleClass: 'card-title-amber', subtitle: 'Day 29 Preview',
    description:
      'Tomorrow — moving between screens with Expo Router (file-based) and React Navigation: stacks, tabs, params and typed routes.',
    link: { href: '/day-029', label: 'Go to Day 29 →' },
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

export default function Day028() {
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
          <Link to="/day-027" className="day001-nav-btn day001-nav-prev">← Day 27</Link>
          <p className="day001-datetime">TypeScript Day 28</p>
          <Link to="/day-029" className="day001-nav-btn day001-nav-next">Day 29 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>React Native</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 28 <span aria-hidden="true">🎨</span></h1>
              <p className="day001-day-theme">REACT NATIVE — COMPONENTS &amp; STYLING</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '28%' }} /></div>

        <p className="day001-summary">
          Styling the native way. Styles are plain objects via <strong>StyleSheet.create</strong> — camelCased,
          unitless numbers (density-independent pixels), no cascade, and merged with an <strong>array</strong> (later
          wins). Layout is <strong>Flexbox</strong> with <code>flexDirection: "column"</code> by default and{' '}
          <code>flex: 1</code> to fill. All text lives in <code>&lt;Text&gt;</code> (nested text inherits font). Keep
          content clear of the notch with <strong>SafeAreaView</strong>, branch iOS/Android with{' '}
          <strong>Platform.select</strong>, and adapt to any screen with <strong>useWindowDimensions</strong> and
          percentage widths. <em>Next: navigation between screens.</em>
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

        <CardSection icon="🎨" title="STYLE & LAYOUT" cards={STYLING} columns={2} />
        <CardSection icon="📲" title="ADAPT TO DEVICES" cards={ADAPT} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#ReactNative</span><span>#Styling</span>
        </footer>
      </div>
    </div>
  );
}
