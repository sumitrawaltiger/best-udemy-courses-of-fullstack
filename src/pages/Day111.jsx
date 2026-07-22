import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EAS_DOCS = 'https://docs.expo.dev/eas/';
const BUILD_DOCS = 'https://docs.expo.dev/build/introduction/';
const DEV_CLIENT_DOCS = 'https://docs.expo.dev/develop/development-builds/introduction/';

const LEARNT_TODAY = [
  { title: 'What is EAS', text: 'Expo Application Services — cloud builds, submit, and updates for Expo apps' },
  { title: 'Expo Go vs dev builds', text: 'Expo Go is limited to the SDK; custom native code needs a development build' },
  { title: 'Custom dev builds', text: 'eas build --profile development installs a client that can load your JS with native modules' },
  { title: 'Build profiles', text: 'eas.json defines development, preview, and production profiles with different settings' },
  { title: 'Device testing', text: 'install a build on a real phone via QR / internal distribution — not just the simulator' },
  { title: 'EAS CLI', text: 'log in, configure the project, and kick off builds from the terminal' },
  { title: 'Credentials', text: 'EAS can manage signing keys for Android and iOS so you don’t fight certificates by hand' },
  { title: 'Why leave Expo Go', text: 'background tasks, some sensors, and custom native libs require a real build' },
  { title: 'Production phase starts', text: 'Days 111–114 turn foundations into shippable apps: EAS, background work, push, auth' },
];

const EAS_CORE = [
  {
    icon: '☁️', title: 'What Is EAS', titleClass: 'card-title-cyan', subtitle: 'Cloud For Expo',
    description: 'EAS Build compiles your app in the cloud into APK/AAB/IPA. EAS Submit sends it to the stores. EAS Update pushes JS over-the-air later. One account, three production services.',
    code: 'npm i -g eas-cli\neas login\neas build:configure',
  },
  {
    icon: '📱', title: 'Expo Go vs Dev Builds', titleClass: 'card-title-purple', subtitle: 'When To Graduate',
    description: 'Expo Go ships a fixed set of native modules. The moment you need a custom native library, background fetch, or store-ready signing — you need a development build instead.',
    code: '// Expo Go  → quick UI & SDK APIs\n// Dev build → custom native + full APIs\n// Same JS codebase, different native shell',
  },
  {
    icon: '🛠️', title: 'Custom Dev Builds', titleClass: 'card-title-amber', subtitle: 'Your Own Client',
    description: 'A development build is Expo Go, but for your project — it includes your native dependencies and loads the Metro bundle. Install once, iterate on JS forever.',
    code: 'eas build --profile development --platform android\n# install the .apk, then\nnpx expo start --dev-client',
  },
];

const PROFILES = [
  {
    icon: '📋', title: 'Build Profiles', titleClass: 'card-title-cyan', subtitle: 'eas.json',
    description: 'eas.json holds named profiles: development (dev client), preview (internal APK for testers), production (store-ready AAB/IPA). Same project, different outputs.',
    code: '{\n  "build": {\n    "development": { "developmentClient": true },\n    "preview": { "distribution": "internal" },\n    "production": {}\n  }\n}',
  },
  {
    icon: '📲', title: 'Device Testing', titleClass: 'card-title-purple', subtitle: 'Real Hardware',
    description: 'Simulators miss sensors, battery behaviour and store install flows. Internal distribution lets teammates install a preview build from a link — no Play/App Store wait.',
    code: 'eas build --profile preview --platform android\n# share the install URL with testers',
  },
  {
    icon: '🔐', title: 'Credentials', titleClass: 'card-title-amber', subtitle: 'Signing Without Tears',
    description: 'EAS can generate and store Android keystores and iOS certificates. You choose local or remote credentials — either way, builds stay reproducible.',
    code: 'eas credentials\n# list / create / sync signing assets',
  },
  {
    icon: '🔜', title: 'Next: Background & Links', titleClass: 'card-title-lime', subtitle: 'Day 112 Preview',
    description: 'Tomorrow: keep work running when the app is backgrounded, schedule tasks, and open deep / universal links into the right screen.',
    link: { href: '/day-112', label: 'Go to Day 112 →' },
  },
];

const RESOURCES = [
  {
    icon: '☁️', title: 'EAS Overview', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Build, Submit, and Update — how the three Expo Application Services fit together for shipping apps.',
    link: { href: EAS_DOCS, label: 'Read EAS docs →', external: true },
  },
  {
    icon: '🏗️', title: 'EAS Build', titleClass: 'card-title-purple', subtitle: 'Cloud Compiles',
    description: 'Profiles, platforms, artifacts, and how to kick off your first cloud build from the CLI.',
    link: { href: BUILD_DOCS, label: 'Read Build docs →', external: true },
  },
  {
    icon: '🛠️', title: 'Development Builds', titleClass: 'card-title-amber', subtitle: 'Beyond Expo Go',
    description: 'When and how to create a custom development client that includes your native modules.',
    link: { href: DEV_CLIENT_DOCS, label: 'Read dev-build docs →', external: true },
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

export default function Day111() {
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
          <Link to="/day-110" className="day001-nav-btn day001-nav-prev">← Day 110</Link>
          <p className="day001-datetime">React Native Day 111</p>
          <Link to="/day-112" className="day001-nav-btn day001-nav-next">Day 112 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>EAS</span><span>RN Day 11</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 111 <span aria-hidden="true">☁️</span></h1>
              <p className="day001-day-theme">EXPO APPLICATION SERVICES (EAS)</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '31%' }} /></div>

        <p className="day001-summary">
          Day 111 leaves Expo Go behind. <strong>EAS</strong> is Expo’s cloud for compiling apps:{' '}
          <strong>dev builds</strong> for custom native code, <strong>build profiles</strong> in{' '}
          <code>eas.json</code>, and installs on <strong>real devices</strong>. Same JavaScript project —
          a production-ready native shell. The Production phase of the RN cohort starts here.
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

        <CardSection icon="☁️" title="1 · EAS & DEV BUILDS" cards={EAS_CORE} columns={3} />
        <CardSection icon="📋" title="2 · PROFILES, DEVICES & CREDENTIALS" cards={PROFILES} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#EAS</span><span>#Expo</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
