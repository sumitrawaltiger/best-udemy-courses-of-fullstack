import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LOCATION_DOCS = 'https://docs.expo.dev/versions/latest/sdk/location/';
const HAPTICS_DOCS = 'https://docs.expo.dev/versions/latest/sdk/haptics/';
const NETINFO_DOCS = 'https://docs.expo.dev/versions/latest/sdk/netinfo/';

const LEARNT_TODAY = [
  { title: 'expo-location', text: 'read the device’s GPS position once or watch it live, after a location permission' },
  { title: 'Foreground vs background', text: 'foreground location is enough for most apps; background needs extra config & consent' },
  { title: 'Geocoding', text: 'turn coordinates into an address (reverse geocode) and back' },
  { title: 'Network state', text: 'NetInfo reports online/offline and connection type to drive offline-first UI' },
  { title: 'Battery API', text: 'expo-battery reads charge level and low-power mode for power-aware behaviour' },
  { title: 'Haptics', text: 'expo-haptics triggers taptic feedback for taps, successes and errors' },
  { title: 'Document picker', text: 'expo-document-picker lets users choose files from the device' },
  { title: 'Permissions pattern', text: 'every device API follows request → check granted → use, with a graceful fallback' },
  { title: 'Foundations complete', text: 'Days 101–110 cover the core React Native cohort — build, style, navigate, connect & sense' },
];

const LOCATION = [
  {
    icon: '📍', title: 'Location', titleClass: 'card-title-cyan', subtitle: 'Where Is The Device',
    description: 'Request foreground permission, then read the current position or watch it live. Coordinates power maps, "near me" features, and check-ins.',
    code: 'import * as Location from "expo-location";\n\nconst { status } = await Location.requestForegroundPermissionsAsync();\nif (status !== "granted") return;\nconst pos = await Location.getCurrentPositionAsync();\n// pos.coords.latitude, pos.coords.longitude',
  },
  {
    icon: '🗺️', title: 'Geocoding', titleClass: 'card-title-purple', subtitle: 'Coords ↔ Address',
    description: 'Reverse-geocode coordinates into a human address, or geocode an address into coordinates — useful for showing where a user is in words.',
    code: 'const [place] = await Location.reverseGeocodeAsync(pos.coords);\n// place.city, place.country',
  },
  {
    icon: '📶', title: 'Network State', titleClass: 'card-title-amber', subtitle: 'Online / Offline',
    description: 'NetInfo tells you whether the device is connected and on what (wifi/cellular). Drive the offline-first UI from Day 107 and pause uploads when there’s no signal.',
    code: 'import NetInfo from "@react-native-community/netinfo";\n\nconst unsub = NetInfo.addEventListener((state) => {\n  setOnline(state.isConnected);\n});',
  },
];

const SYSTEM = [
  {
    icon: '🔋', title: 'Battery', titleClass: 'card-title-cyan', subtitle: 'Power-Aware Apps',
    description: 'expo-battery reads the charge level and whether low-power mode is on — throttle background work or animations when the battery is low.',
    code: 'import * as Battery from "expo-battery";\n\nconst level = await Battery.getBatteryLevelAsync(); // 0..1\nconst low = await Battery.isLowPowerModeEnabledAsync();',
  },
  {
    icon: '📳', title: 'Haptics', titleClass: 'card-title-purple', subtitle: 'Feel The Feedback',
    description: 'expo-haptics fires taptic feedback — a light tap on selection, a success buzz on save, a warning on error. Small touches that make an app feel native.',
    code: 'import * as Haptics from "expo-haptics";\n\nHaptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);\nHaptics.notificationAsync(Haptics.NotificationFeedbackType.Success);',
  },
  {
    icon: '📄', title: 'Document Picker', titleClass: 'card-title-amber', subtitle: 'Choose A File',
    description: 'expo-document-picker opens the system file browser so users can pick a PDF, image or any document, returning a uri you can upload or display.',
    code: 'import * as DocumentPicker from "expo-document-picker";\n\nconst res = await DocumentPicker.getDocumentAsync({ type: "application/pdf" });\nif (!res.canceled) upload(res.assets[0].uri);',
  },
  {
    icon: '🧩', title: 'The Permissions Pattern', titleClass: 'card-title-lime', subtitle: 'One Shape For All',
    description: 'Every device API follows the same rhythm: request permission, check it was granted, then use the API — always with a graceful fallback if the user says no.',
    code: '// 1. request…Async()\n// 2. if (status !== "granted") fallback\n// 3. use the API\n// 4. handle errors & denial',
  },
];

const WRAP = [
  {
    icon: '✅', title: 'RN Foundations: Days 101–110', titleClass: 'card-title-cyan', subtitle: 'What I Can Now Build',
    description: 'React refresher → Expo → components & styling → React Navigation → Expo Router → networking → storage → sensors → camera & media → device APIs. A complete, connected, device-aware mobile app.',
    footer: 'From "hello world" to using the GPS, camera, storage and sensors of a real phone.',
  },
  {
    icon: '🚀', title: 'What Comes Next', titleClass: 'card-title-purple', subtitle: 'Day 111 Preview',
    description: 'Tomorrow starts the Production phase: EAS cloud builds and custom dev clients, then background tasks, push notifications and authentication — turning these skills into a shippable app.',
    link: { href: '/day-111', label: 'Go to Day 111 →' },
  },
  {
    icon: '📱', title: 'Explore The RN Track', titleClass: 'card-title-amber', subtitle: 'All 25 Lessons',
    description: 'These journal days follow the ChaiCode Mobile Development cohort. Browse the full React Native syllabus — every phase, lesson and project — on the site.',
    link: { href: '/mobile', label: 'Open the RN track →' },
  },
];

const RESOURCES = [
  {
    icon: '📍', title: 'Expo Location', titleClass: 'card-title-cyan', subtitle: 'API',
    description: 'Foreground and background location, accuracy options, watching position, and geocoding — with the permission model spelled out.',
    link: { href: LOCATION_DOCS, label: 'Read location docs →', external: true },
  },
  {
    icon: '📳', title: 'Expo Haptics', titleClass: 'card-title-purple', subtitle: 'API',
    description: 'Impact, notification and selection feedback types, and where each fits in a native-feeling interaction.',
    link: { href: HAPTICS_DOCS, label: 'Read haptics docs →', external: true },
  },
  {
    icon: '📶', title: 'NetInfo', titleClass: 'card-title-amber', subtitle: 'Connectivity',
    description: 'Detect connection status and type, subscribe to changes, and build reliable offline-aware behaviour.',
    link: { href: NETINFO_DOCS, label: 'Read NetInfo docs →', external: true },
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

export default function Day110() {
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
          <Link to="/day-109" className="day001-nav-btn day001-nav-prev">← Day 109</Link>
          <p className="day001-datetime">React Native Day 110</p>
          <Link to="/day-111" className="day001-nav-btn day001-nav-next">Day 111 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>Device APIs</span><span>RN Day 10</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 110 <span aria-hidden="true">📲</span></h1>
              <p className="day001-day-theme">DEVICE &amp; SYSTEM APIs</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '30%' }} /></div>

        <p className="day001-summary">
          Day 110 wires up the rest of the phone. <strong>expo-location</strong> reads GPS (with geocoding),{' '}
          <strong>NetInfo</strong> reports online/offline, <strong>expo-battery</strong> exposes charge and low-power
          mode, <strong>expo-haptics</strong> adds taptic feedback, and the <strong>document picker</strong> lets
          users choose files. Every one follows the same <strong>permissions pattern</strong>. That closes the core
          React Native foundations — Days 101–110: build, style, navigate, connect, store and sense.
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

        <CardSection icon="📍" title="1 · LOCATION & NETWORK" cards={LOCATION} columns={3} />
        <CardSection icon="🔋" title="2 · BATTERY, HAPTICS & FILES" cards={SYSTEM} columns={4} />
        <CardSection icon="✅" title="3 · FOUNDATIONS WRAP-UP" cards={WRAP} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#DeviceAPIs</span><span>#Expo</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
