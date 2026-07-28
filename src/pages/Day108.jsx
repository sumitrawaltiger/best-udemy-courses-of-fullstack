import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const SENSORS_DOCS = 'https://docs.expo.dev/versions/latest/sdk/sensors/';
const ACCEL_DOCS = 'https://docs.expo.dev/versions/latest/sdk/accelerometer/';
const PEDOMETER_DOCS = 'https://docs.expo.dev/versions/latest/sdk/pedometer/';

const LEARNT_TODAY = [
  { title: 'Expo Sensors', text: 'expo-sensors exposes the phone’s motion hardware through a simple subscribe API' },
  { title: 'Accelerometer', text: 'reads linear acceleration on x, y, z — including gravity — many times per second' },
  { title: 'Gyroscope', text: 'measures rotation rate around each axis — orientation and tilt over time' },
  { title: 'Magnetometer', text: 'reads the magnetic field for compass-style heading' },
  { title: 'DeviceMotion', text: 'a combined stream — acceleration, rotation and orientation in one listener' },
  { title: 'Pedometer', text: 'counts steps from the motion coprocessor for fitness features' },
  { title: 'Subscriptions', text: 'addListener returns a subscription you must remove on unmount to avoid leaks' },
  { title: 'setUpdateInterval', text: 'control how often readings arrive to balance smoothness against battery' },
  { title: 'Shake detection', text: 'watch accelerometer magnitude past a threshold to detect a shake gesture' },
];

const MOTION = [
  {
    icon: '📳', title: 'Accelerometer', titleClass: 'card-title-cyan', subtitle: 'Linear Motion',
    description: 'The accelerometer streams x/y/z acceleration. Subscribe with addListener, read the values in the callback, and always remove the subscription when the screen unmounts.',
    code: 'import { Accelerometer } from "expo-sensors";\n\nconst sub = Accelerometer.addListener(({ x, y, z }) => {\n  setData({ x, y, z });\n});\n// cleanup\nreturn () => sub.remove();',
  },
  {
    icon: '🌀', title: 'Gyroscope', titleClass: 'card-title-purple', subtitle: 'Rotation Rate',
    description: 'The gyroscope reports how fast the device rotates around each axis. Pair it with the accelerometer for tilt controls, games, or orientation-aware UI.',
    code: 'import { Gyroscope } from "expo-sensors";\n\nGyroscope.addListener(({ x, y, z }) => {\n  // rotation rate around each axis\n});\nGyroscope.setUpdateInterval(100); // ms',
  },
  {
    icon: '🧭', title: 'DeviceMotion', titleClass: 'card-title-amber', subtitle: 'Everything At Once',
    description: 'DeviceMotion combines acceleration, rotation and orientation into a single stream — convenient when you need the full motion picture without juggling three listeners.',
    code: 'import { DeviceMotion } from "expo-sensors";\n\nDeviceMotion.addListener((motion) => {\n  const { acceleration, rotation } = motion;\n});',
  },
];

const FEATURES = [
  {
    icon: '👟', title: 'Pedometer', titleClass: 'card-title-cyan', subtitle: 'Step Counting',
    description: 'The pedometer taps the motion coprocessor to count steps efficiently. Check availability, request permission, then watch live steps or query a past range.',
    code: 'import { Pedometer } from "expo-sensors";\n\nconst ok = await Pedometer.isAvailableAsync();\nconst sub = Pedometer.watchStepCount((r) => {\n  setSteps(r.steps);\n});',
  },
  {
    icon: '📏', title: 'Update Interval', titleClass: 'card-title-purple', subtitle: 'Smoothness vs Battery',
    description: 'setUpdateInterval controls how many readings per second you get. Faster feels smoother but drains the battery — tune it to what the feature actually needs.',
    code: 'Accelerometer.setUpdateInterval(16);  // ~60fps, smooth\nAccelerometer.setUpdateInterval(500); // twice a second, light',
  },
  {
    icon: '🤳', title: 'Shake Detection', titleClass: 'card-title-amber', subtitle: 'A Gesture From Data',
    description: 'Compute the magnitude of acceleration; when it spikes past a threshold, treat it as a shake. A classic use of raw sensor data to build a gesture.',
    code: 'const mag = Math.sqrt(x*x + y*y + z*z);\nif (mag > 1.8) onShake(); // tune the threshold',
  },
  {
    icon: '🧹', title: 'Clean Up Subscriptions', titleClass: 'card-title-lime', subtitle: 'Avoid Leaks',
    description: 'Every addListener returns a subscription. Remove it in the effect cleanup so sensors stop when you leave the screen — otherwise they run forever and waste power.',
    code: 'useEffect(() => {\n  const sub = Accelerometer.addListener(handle);\n  return () => sub.remove(); // stop on unmount\n}, []);',
  },
];

const APPLY = [
  {
    icon: '🎮', title: 'What You Can Build', titleClass: 'card-title-cyan', subtitle: 'Sensor-Driven UX',
    description: 'Motion sensors unlock tilt games, a bubble level, step-count fitness cards, shake-to-undo, and parallax effects — features that feel native to a phone, impossible on the web.',
    code: '// tilt maze · bubble level · step tracker\n// shake-to-undo · shake-to-refresh · parallax',
  },
  {
    icon: '🔐', title: 'Availability & Permissions', titleClass: 'card-title-purple', subtitle: 'Check First',
    description: 'Not every device has every sensor, and some (like the pedometer) need permission. Check isAvailableAsync and request access before subscribing, with a graceful fallback.',
    code: 'const available = await Accelerometer.isAvailableAsync();\nif (!available) return; // hide the feature gracefully',
  },
  {
    icon: '🔜', title: 'Next: Camera & Media', titleClass: 'card-title-amber', subtitle: 'Day 109 Preview',
    description: 'Tomorrow: capturing the world — Expo Camera, recording audio, playing media, saving to the media library, and building a DevLog video journal.',
    link: { href: '/day-109', label: 'Go to Day 109 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Expo Sensors', titleClass: 'card-title-cyan', subtitle: 'Overview',
    description: 'The sensors overview — accelerometer, gyroscope, magnetometer, barometer and DeviceMotion, with the shared subscribe/remove API.',
    link: { href: SENSORS_DOCS, label: 'Read the sensors docs →', external: true },
  },
  {
    icon: '📳', title: 'Accelerometer', titleClass: 'card-title-purple', subtitle: 'API',
    description: 'The accelerometer reference — reading x/y/z, setting the update interval, and availability checks.',
    link: { href: ACCEL_DOCS, label: 'Read accelerometer docs →', external: true },
  },
  {
    icon: '👟', title: 'Pedometer', titleClass: 'card-title-amber', subtitle: 'API',
    description: 'The pedometer reference — live step watching, historical queries, permissions and platform support.',
    link: { href: PEDOMETER_DOCS, label: 'Read pedometer docs →', external: true },
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

export default function Day108() {
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
          <Link to="/day-107" className="day001-nav-btn day001-nav-prev">← Day 107</Link>
          <p className="day001-datetime">React Native Day 108 · 18 Apr 2027</p>
          <Link to="/day-109" className="day001-nav-btn day001-nav-next">Day 109 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>Sensors</span><span>RN Day 8</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 108 <span aria-hidden="true">📳</span></h1>
              <p className="day001-day-theme">SENSORS &amp; MOTION</p>
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
          Day 108 reads the phone’s motion hardware with <strong>Expo Sensors</strong>. The{' '}
          <strong>accelerometer</strong> streams x/y/z acceleration, the <strong>gyroscope</strong> reports rotation,
          and <strong>DeviceMotion</strong> combines them. I counted steps with the <strong>pedometer</strong>, tuned
          the <strong>update interval</strong> for battery, detected a <strong>shake</strong> from acceleration
          magnitude, and — crucially — <strong>removed subscriptions</strong> on unmount so sensors never leak.
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

        <CardSection icon="📳" title="1 · MOTION SENSORS" cards={MOTION} columns={3} />
        <CardSection icon="👟" title="2 · PEDOMETER, TUNING & SHAKE" cards={FEATURES} columns={4} />
        <CardSection icon="🎮" title="3 · APPLYING SENSORS" cards={APPLY} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#Sensors</span><span>#ExpoSensors</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
