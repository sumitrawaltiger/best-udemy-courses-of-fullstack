import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const RN_COMPONENTS = 'https://reactnative.dev/docs/components-and-apis';
const RN_FLATLIST = 'https://reactnative.dev/docs/flatlist';
const RN_STYLE = 'https://reactnative.dev/docs/style';

const LEARNT_TODAY = [
  { title: 'View', text: 'the core container — like a <div>, it holds and lays out other components with Flexbox' },
  { title: 'Text', text: 'every string must live inside <Text>; unlike web you cannot put raw text in a View' },
  { title: 'Image', text: 'renders local (require) or remote ({ uri }) images; remote images need explicit width/height' },
  { title: 'Pressable', text: 'the modern touchable — detects press, long-press and press states for buttons' },
  { title: 'ScrollView', text: 'scrolls a small, fixed set of children; renders them all at once' },
  { title: 'FlatList', text: 'the performant list — renders only visible rows via data + renderItem + keyExtractor' },
  { title: 'StyleSheet', text: 'StyleSheet.create() defines styles as objects; there is no CSS file, styles are JS' },
  { title: 'Flexbox', text: 'RN lays out with Flexbox by default and flexDirection is column, not row' },
  { title: 'Dimensions & dark mode', text: 'Dimensions/useWindowDimensions read screen size; useColorScheme reads light/dark' },
];

const CORE = [
  {
    icon: '📦', title: 'View & Text', titleClass: 'card-title-cyan', subtitle: 'The Two You Always Use',
    description: 'View is the container — it groups and lays out children. Text renders strings. In RN, text must be inside a <Text>; a bare string in a View is an error.',
    code: 'import { View, Text } from "react-native";\n\n<View>\n  <Text>Hello Mobile 👋</Text>\n</View>',
  },
  {
    icon: '🖼️', title: 'Image', titleClass: 'card-title-purple', subtitle: 'Local & Remote',
    description: 'Local images use require and are auto-sized. Remote images take a { uri } source and need an explicit width and height or they render at zero size.',
    code: '// local\n<Image source={require("./logo.png")} />\n\n// remote — needs a size\n<Image\n  source={{ uri: "https://…/pic.png" }}\n  style={{ width: 80, height: 80 }}\n/>',
  },
  {
    icon: '👆', title: 'Pressable', titleClass: 'card-title-amber', subtitle: 'Touch Handling',
    description: 'Pressable is the flexible touch primitive — handle onPress, onLongPress, and style differently while pressed. It replaces the older TouchableOpacity for most cases.',
    code: '<Pressable\n  onPress={() => console.log("tapped")}\n  style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}\n>\n  <Text>Tap me</Text>\n</Pressable>',
  },
];

const LISTS = [
  {
    icon: '📜', title: 'ScrollView', titleClass: 'card-title-cyan', subtitle: 'Small, Fixed Content',
    description: 'ScrollView makes its children scrollable and renders them all immediately. Perfect for a form or a short page — but it loads everything, so avoid it for long data.',
    code: '<ScrollView>\n  <Text>Section 1</Text>\n  <Text>Section 2</Text>\n  {/* renders all children at once */}\n</ScrollView>',
  },
  {
    icon: '⚡', title: 'FlatList', titleClass: 'card-title-purple', subtitle: 'Long Lists, Fast',
    description: 'FlatList virtualizes — it renders only the rows on screen. Feed it data, a renderItem function, and a keyExtractor. This is how you show hundreds of items smoothly.',
    code: '<FlatList\n  data={users}\n  keyExtractor={(u) => u.id}\n  renderItem={({ item }) => (\n    <Text>{item.name}</Text>\n  )}\n/>',
  },
  {
    icon: '🧠', title: 'ScrollView vs FlatList', titleClass: 'card-title-amber', subtitle: 'Pick The Right One',
    description: 'Few known children → ScrollView. A data array of unknown/large length → FlatList. Using ScrollView for big lists eats memory and jank; FlatList stays smooth.',
    code: '// short & static → ScrollView\n// long & data-driven → FlatList',
  },
];

const STYLING = [
  {
    icon: '🎨', title: 'StyleSheet', titleClass: 'card-title-cyan', subtitle: 'Styles Are JavaScript',
    description: 'There is no CSS file. StyleSheet.create defines named style objects using camelCase properties. Apply them via the style prop; combine with an array.',
    code: 'const s = StyleSheet.create({\n  card: { padding: 16, borderRadius: 12 },\n  title: { fontSize: 18, fontWeight: "700" },\n});\n<View style={[s.card]}><Text style={s.title}>Hi</Text></View>',
  },
  {
    icon: '📐', title: 'Flexbox Layout', titleClass: 'card-title-purple', subtitle: 'Column By Default',
    description: 'RN lays out with Flexbox, but flexDirection defaults to "column" (not "row" like the web). Use justifyContent and alignItems to position — the same properties you know.',
    code: '<View style={{\n  flexDirection: "row",\n  justifyContent: "space-between",\n  alignItems: "center",\n}} />',
  },
  {
    icon: '🌙', title: 'Dark Mode & Dimensions', titleClass: 'card-title-amber', subtitle: 'Responsive UI',
    description: 'useColorScheme returns "light" or "dark" so you can theme conditionally. useWindowDimensions gives live width/height for responsive layouts across phones and tablets.',
    code: 'const scheme = useColorScheme();       // "dark"\nconst { width } = useWindowDimensions(); // 390\nconst bg = scheme === "dark" ? "#0d1117" : "#fff";',
  },
  {
    icon: '🔜', title: 'Next: Navigation', titleClass: 'card-title-lime', subtitle: 'Day 104 Preview',
    description: 'Tomorrow: moving between screens with React Navigation — the stack navigator, bottom tabs, drawers, and passing params from one screen to the next.',
    link: { href: '/day-104', label: 'Go to Day 104 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Core Components', titleClass: 'card-title-cyan', subtitle: 'RN Docs',
    description: 'The catalog of built-in components and APIs — View, Text, Image, Pressable, ScrollView and more, with props and examples.',
    link: { href: RN_COMPONENTS, label: 'Browse components →', external: true },
  },
  {
    icon: '⚡', title: 'FlatList', titleClass: 'card-title-purple', subtitle: 'Performance Lists',
    description: 'The FlatList reference — data, renderItem, keyExtractor, headers, footers, pull-to-refresh and separators for production lists.',
    link: { href: RN_FLATLIST, label: 'Read FlatList docs →', external: true },
  },
  {
    icon: '🎨', title: 'Styling', titleClass: 'card-title-amber', subtitle: 'StyleSheet & Layout',
    description: 'How styling works in React Native — StyleSheet, the style prop, and the Flexbox layout model that positions everything on screen.',
    link: { href: RN_STYLE, label: 'Read styling docs →', external: true },
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

export default function Day103() {
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
          <Link to="/day-102" className="day001-nav-btn day001-nav-prev">← Day 102</Link>
          <p className="day001-datetime">React Native Day 103 · 13 Apr 2027</p>
          <Link to="/day-104" className="day001-nav-btn day001-nav-next">Day 104 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>UI & Styling</span><span>RN Day 3</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 103 <span aria-hidden="true">🎨</span></h1>
              <p className="day001-day-theme">CORE COMPONENTS &amp; STYLING</p>
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
          Day 103 is the visual toolkit. <strong>View</strong> is the container, <strong>Text</strong> holds every
          string, and <strong>Image</strong> renders local or remote pictures. <strong>Pressable</strong> handles
          taps; <strong>ScrollView</strong> scrolls a few fixed children while <strong>FlatList</strong>{' '}
          virtualizes long, data-driven lists. Styling is pure JavaScript via <strong>StyleSheet</strong> and{' '}
          <strong>Flexbox</strong> (column by default), and I made screens responsive with{' '}
          <strong>Dimensions</strong> and <strong>dark mode</strong>.
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

        <CardSection icon="📦" title="1 · CORE COMPONENTS" cards={CORE} columns={3} />
        <CardSection icon="📜" title="2 · SCROLLING & LISTS" cards={LISTS} columns={3} />
        <CardSection icon="🎨" title="3 · STYLING & RESPONSIVE UI" cards={STYLING} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#UI</span><span>#FlatList</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
