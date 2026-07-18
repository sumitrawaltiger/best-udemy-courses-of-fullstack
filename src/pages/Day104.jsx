import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NAV_DOCS = 'https://reactnavigation.org/docs/getting-started';
const STACK_DOCS = 'https://reactnavigation.org/docs/stack-navigator';
const TABS_DOCS = 'https://reactnavigation.org/docs/bottom-tab-navigator';

const LEARNT_TODAY = [
  { title: 'React Navigation', text: 'the standard navigation library for RN — screens, history, gestures and headers' },
  { title: 'NavigationContainer', text: 'the root wrapper that holds navigation state; every navigator lives inside it' },
  { title: 'Stack navigator', text: 'pushes screens onto a stack with a back gesture and animated transitions' },
  { title: 'navigation.navigate', text: 'move to another screen by name; goBack() pops the current one' },
  { title: 'Bottom tabs', text: 'createBottomTabNavigator gives the familiar tab bar for top-level sections' },
  { title: 'Drawer', text: 'createDrawerNavigator slides a side menu in from the edge' },
  { title: 'Passing params', text: 'navigate("Details", { id }) sends data; read it via route.params' },
  { title: 'Nesting navigators', text: 'tabs can contain stacks — a common real-app pattern' },
  { title: 'Header options', text: 'set title, colors and buttons per screen with options or screenOptions' },
];

const SETUP = [
  {
    icon: '🧭', title: 'Install & Wrap', titleClass: 'card-title-cyan', subtitle: 'The Foundation',
    description: 'Install React Navigation plus its native dependencies, then wrap the whole app in a NavigationContainer. Every navigator you create lives inside this container.',
    code: 'npx expo install @react-navigation/native \\\n  react-native-screens react-native-safe-area-context\n\n<NavigationContainer>\n  <RootNavigator />\n</NavigationContainer>',
  },
  {
    icon: '🗂️', title: 'Screens As Routes', titleClass: 'card-title-purple', subtitle: 'Name Your Screens',
    description: 'Each navigator registers screens by name and component. Those names are how you navigate — a small, typed map of your whole app’s structure.',
    code: '<Stack.Navigator>\n  <Stack.Screen name="Home" component={Home} />\n  <Stack.Screen name="Details" component={Details} />\n</Stack.Navigator>',
  },
  {
    icon: '🎛️', title: 'Header Options', titleClass: 'card-title-amber', subtitle: 'Per-Screen Config',
    description: 'Customize the header with options on a screen or screenOptions on the navigator — title, background, tint, or hide it entirely for a full-bleed layout.',
    code: '<Stack.Screen\n  name="Home"\n  component={Home}\n  options={{ title: "My Feed", headerShown: true }}\n/>',
  },
];

const STACK = [
  {
    icon: '📚', title: 'Stack Navigator', titleClass: 'card-title-cyan', subtitle: 'Push & Pop',
    description: 'A stack navigator layers screens like cards. Navigating pushes a new screen with an animation and a back button; going back pops it — the core of drill-down flows.',
    code: 'const Stack = createNativeStackNavigator();\n\n// inside a screen\nnavigation.navigate("Details");\nnavigation.goBack();',
  },
  {
    icon: '📨', title: 'Passing Params', titleClass: 'card-title-purple', subtitle: 'Send Data Along',
    description: 'Pass an object as the second argument to navigate, then read it on the target screen through route.params. This is how a list row opens the right detail.',
    code: '// from the list\nnavigation.navigate("Details", { id: 42 });\n\n// in Details\nfunction Details({ route }) {\n  const { id } = route.params; // 42\n}',
  },
  {
    icon: '🔁', title: 'navigate vs push', titleClass: 'card-title-amber', subtitle: 'Subtle Difference',
    description: 'navigate goes to an existing screen if it is already in the stack; push always adds a new copy — useful when the same screen can stack on itself (like nested comments).',
    code: 'navigation.navigate("Profile"); // reuse if present\nnavigation.push("Profile");     // always add new',
  },
];

const TABS_DRAWER = [
  {
    icon: '📊', title: 'Bottom Tabs', titleClass: 'card-title-cyan', subtitle: 'Top-Level Sections',
    description: 'createBottomTabNavigator renders the familiar tab bar. Use it for the main areas of an app — Home, Search, Profile — each often wrapping its own stack.',
    code: 'const Tab = createBottomTabNavigator();\n\n<Tab.Navigator>\n  <Tab.Screen name="Home" component={HomeStack} />\n  <Tab.Screen name="Profile" component={Profile} />\n</Tab.Navigator>',
  },
  {
    icon: '📂', title: 'Drawer Navigation', titleClass: 'card-title-purple', subtitle: 'Slide-In Menu',
    description: 'createDrawerNavigator gives a side menu that slides in from the edge — handy for settings, account switching, or secondary destinations that don’t need a tab.',
    code: 'const Drawer = createDrawerNavigator();\n\n<Drawer.Navigator>\n  <Drawer.Screen name="Feed" component={Feed} />\n  <Drawer.Screen name="Settings" component={Settings} />\n</Drawer.Navigator>',
  },
  {
    icon: '🪆', title: 'Nesting Navigators', titleClass: 'card-title-amber', subtitle: 'Real-App Shape',
    description: 'Production apps nest: a tab navigator whose Home tab is a stack. Tabs stay put while each tab drills into detail screens — the layout used by most apps you use daily.',
    code: '// Tabs → { Home: Stack, Profile: Stack }\n// tab bar persists, each tab has its own history',
  },
  {
    icon: '🔜', title: 'Next: Expo Router', titleClass: 'card-title-lime', subtitle: 'Day 105 Preview',
    description: 'Tomorrow: Expo Router — file-based routing where the app/ folder IS your navigation. Dynamic [id] routes, _layout files, groups, protected stacks, tabs and splash screens.',
    link: { href: '/day-105', label: 'Go to Day 105 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Getting Started', titleClass: 'card-title-cyan', subtitle: 'React Navigation',
    description: 'Install, wrap in NavigationContainer, and build your first navigator — the official walkthrough with copy-paste setup.',
    link: { href: NAV_DOCS, label: 'Open the docs →', external: true },
  },
  {
    icon: '📚', title: 'Stack Navigator', titleClass: 'card-title-purple', subtitle: 'Push/Pop Screens',
    description: 'The stack navigator reference — transitions, headers, params, and gesture behaviour for drill-down navigation.',
    link: { href: STACK_DOCS, label: 'Read stack docs →', external: true },
  },
  {
    icon: '📊', title: 'Bottom Tabs', titleClass: 'card-title-amber', subtitle: 'Tab Bar',
    description: 'How to configure the bottom tab navigator — icons, labels, badges, and per-tab options for the main sections of an app.',
    link: { href: TABS_DOCS, label: 'Read tabs docs →', external: true },
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

export default function Day104() {
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
          <Link to="/day-103" className="day001-nav-btn day001-nav-prev">← Day 103</Link>
          <p className="day001-datetime">React Native Day 104</p>
          <Link to="/day-105" className="day001-nav-btn day001-nav-next">Day 105 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>Navigation</span><span>RN Day 4</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 104 <span aria-hidden="true">🧭</span></h1>
              <p className="day001-day-theme">NAVIGATION WITH REACT NAVIGATION</p>
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
          Day 104 makes the app multi-screen. <strong>React Navigation</strong> wraps everything in a{' '}
          <strong>NavigationContainer</strong>, and the <strong>stack navigator</strong> pushes and pops screens with
          a back gesture. I moved around with <strong>navigation.navigate</strong> and{' '}
          <strong>goBack</strong>, passed data through <strong>route.params</strong>, and added{' '}
          <strong>bottom tabs</strong> and a <strong>drawer</strong> — then nested a stack inside a tab, the shape of
          almost every real app.
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

        <CardSection icon="🧭" title="1 · REACT NAVIGATION SETUP" cards={SETUP} columns={3} />
        <CardSection icon="📚" title="2 · STACK NAVIGATOR & PARAMS" cards={STACK} columns={3} />
        <CardSection icon="📊" title="3 · TABS, DRAWER & NESTING" cards={TABS_DRAWER} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#ReactNavigation</span><span>#MobileDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
