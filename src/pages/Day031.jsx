import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EAS_DOCS = 'https://docs.expo.dev/build/introduction/';
const OTA_DOCS = 'https://docs.expo.dev/eas-update/introduction/';

const LEARNT_TODAY = [
  { title: 'EAS Build', text: 'Expo Application Services builds native iOS/Android binaries in the cloud — no Mac needed for iOS' },
  { title: 'app config', text: 'app.json / app.config.ts sets the name, icon, splash, bundle id and permissions' },
  { title: 'Dev vs preview vs prod', text: 'build profiles in eas.json for internal testing and store releases' },
  { title: 'OTA updates', text: 'EAS Update ships JS/asset changes over the air — no store review for many fixes' },
  { title: 'EAS Submit', text: 'upload builds straight to App Store Connect and Google Play' },
  { title: 'Store requirements', text: 'icons, screenshots, privacy details and review guidelines to pass' },
  { title: 'Versioning', text: 'bump version + build number each release; OTA updates target a runtime version' },
  { title: 'Year-1 mobile: done', text: 'the React skills now ship to iOS and Android from one TypeScript codebase' },
];

const BUILD = [
  {
    icon: '🏗️', title: 'EAS Build', titleClass: 'card-title-cyan', subtitle: 'Cloud Native Builds',
    description:
      'EAS builds real iOS and Android binaries in the cloud from your Expo project — you don’t need Xcode or a Mac. Profiles in eas.json define dev, preview and production builds.',
    code: 'npm i -g eas-cli && eas login\neas build:configure\neas build --platform ios --profile production\neas build --platform android --profile production',
  },
  {
    icon: '⚙️', title: 'App Config', titleClass: 'card-title-purple', subtitle: 'Icon, Splash, IDs',
    description:
      'app.json (or app.config.ts) declares the app name, icon, splash screen, bundle identifier and required permissions — the metadata the stores and OS need.',
    code: '// app.json\n{\n  "expo": {\n    "name": "My App", "slug": "my-app",\n    "ios": { "bundleIdentifier": "com.sumit.myapp" },\n    "android": { "package": "com.sumit.myapp" }\n  }\n}',
  },
];

const SHIP = [
  {
    icon: '📡', title: 'OTA Updates', titleClass: 'card-title-cyan', subtitle: 'EAS Update',
    description:
      'Ship JavaScript and asset changes directly to installed apps with EAS Update — many bug fixes and tweaks go out without waiting for store review.',
    code: 'eas update --branch production --message "Fix crash"\n// users get it on next launch (same runtime version)',
  },
  {
    icon: '🚀', title: 'Submit To Stores', titleClass: 'card-title-purple', subtitle: 'EAS Submit',
    description:
      'eas submit uploads a finished build to App Store Connect and Google Play. Then add screenshots, descriptions and privacy details, and send it for review.',
    code: 'eas submit --platform ios\neas submit --platform android',
  },
  {
    icon: '🔢', title: 'Versioning', titleClass: 'card-title-amber', subtitle: 'Every Release',
    description:
      'Bump the app version and build number for each store release. OTA updates target a runtime version, so native changes still require a new build.',
    footer: 'store release → new build · JS-only fix → OTA update',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'EAS Build', titleClass: 'card-title-cyan', subtitle: 'Expo Docs',
    description:
      'Configuring builds, credentials, profiles, and producing store-ready iOS and Android binaries from the cloud.',
    link: { href: EAS_DOCS, label: 'Open EAS Build →', external: true },
  },
  {
    icon: '📡', title: 'EAS Update', titleClass: 'card-title-purple', subtitle: 'OTA',
    description:
      'How over-the-air updates work — branches, channels, runtime versions and rollout strategy for fast, safe releases.',
    link: { href: OTA_DOCS, label: 'Open EAS Update →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Express / Node', titleClass: 'card-title-amber', subtitle: 'Day 32 Preview',
    description:
      'The frontend is covered — next the Year-1 backend: Express JS on Node. Setting up a typed server, routing and middleware, then building a real REST API.',
    link: { href: '/day-032', label: 'Go to Day 32 →' },
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

export default function Day031() {
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
          <Link to="/day-030" className="day001-nav-btn day001-nav-prev">← Day 30</Link>
          <p className="day001-datetime">TypeScript Day 31 · 31 Jan 2027</p>
          <Link to="/day-032" className="day001-nav-btn day001-nav-next">Day 32 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>React Native</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 31 <span aria-hidden="true">🚀</span></h1>
              <p className="day001-day-theme">REACT NATIVE — BUILD &amp; PUBLISH</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '31%' }} /></div>

        <p className="day001-summary">
          From dev to the stores. <strong>EAS Build</strong> compiles real iOS and Android binaries in the cloud — no
          Mac needed for iOS — using build profiles in <code>eas.json</code>. <strong>app.json</strong> sets the name,
          icon, splash, bundle id and permissions. Ship JS-only changes instantly with <strong>OTA updates</strong>{' '}
          (EAS Update, no store review), and push store releases with <strong>EAS Submit</strong> to App Store Connect
          and Google Play — plus icons, screenshots and privacy details for review. Bump the version each release; OTA
          targets a runtime version, native changes need a new build. <em>The Year-1 frontend is done — next: the
          Express backend.</em>
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

        <CardSection icon="🏗️" title="BUILD & CONFIG" cards={BUILD} columns={2} />
        <CardSection icon="🚀" title="SHIP IT" cards={SHIP} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#ReactNative</span><span>#EAS</span>
        </footer>
      </div>
    </div>
  );
}
