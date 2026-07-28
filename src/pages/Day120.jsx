import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EAS_BUILD = 'https://docs.expo.dev/build/introduction/';
const SUBMIT_DOCS = 'https://docs.expo.dev/submit/introduction/';
const PLAY_DOCS = 'https://docs.expo.dev/submit/android/';

const LEARNT_TODAY = [
  { title: 'EAS Build APK/AAB', text: 'production profile builds an AAB for Play and optional APK for sideload tests' },
  { title: 'Play Store upload', text: 'EAS Submit or Play Console upload ships the AAB to a track (internal → production)' },
  { title: 'App listing assets', text: 'icon, feature graphic, screenshots, short & full description ready before review' },
  { title: 'Versioning', text: 'version + android.versionCode / iOS buildNumber must bump every store upload' },
  { title: 'Release checklist', text: 'permissions copy, privacy policy, signing, and smoke test on a real device' },
  { title: 'Build profiles', text: 'production in eas.json differs from preview — store-ready signing and minify' },
  { title: 'Internal testing', text: 'ship to an internal track first; fix crashes before open production' },
  { title: 'Credentials', text: 'EAS-managed keystore keeps Play signing reproducible across machines' },
  { title: 'Deployment phase', text: 'projects are done — Days 120+ focus on shipping and OTA updates next' },
];

const BUILD = [
  {
    icon: '📦', title: 'EAS Build APK / AAB', titleClass: 'card-title-cyan', subtitle: 'Cloud Compile',
    description: 'Run a production build on EAS. Android store uploads need an AAB; keep an APK profile for quick device installs outside the store.',
    code: 'eas build --platform android --profile production\n# artifact: .aab (Play) or .apk (sideload)',
  },
  {
    icon: '📤', title: 'Play Store Upload', titleClass: 'card-title-purple', subtitle: 'Submit',
    description: 'eas submit --platform android sends the latest build to Play, or upload the AAB manually in Play Console to internal / closed / production tracks.',
    code: 'eas submit --platform android --latest',
  },
  {
    icon: '🎨', title: 'Listing Assets', titleClass: 'card-title-amber', subtitle: 'Store Presence',
    description: 'Prepare icon (512), feature graphic, phone screenshots, and short/full descriptions. Missing assets block review.',
    code: '// icon · feature graphic · screenshots\n// short description · full description · privacy URL',
  },
];

const SHIP = [
  {
    icon: '🔢', title: 'Versioning', titleClass: 'card-title-cyan', subtitle: 'Bump Every Release',
    description: 'app.json / app.config: version for users, android.versionCode (and iOS buildNumber) as the integer stores require to increase.',
    code: '{\n  "version": "1.0.1",\n  "android": { "versionCode": 2 }\n}',
  },
  {
    icon: '✅', title: 'Release Checklist', titleClass: 'card-title-purple', subtitle: 'Before You Hit Submit',
    description: 'Smoke-test login, payments, permissions copy, privacy policy URL, crash-free cold start, and correct package name / applicationId.',
    code: '// [ ] real-device smoke test\n// [ ] privacy policy URL\n// [ ] versionCode bumped\n// [ ] signing credentials OK',
  },
  {
    icon: '🧪', title: 'Internal Track First', titleClass: 'card-title-amber', subtitle: 'Safe Rollout',
    description: 'Ship to internal testers, watch crashes for a day, then promote to production. Faster feedback than a blind public launch.',
    code: '// Play Console: Internal testing → Production',
  },
  {
    icon: '🚀', title: 'What Comes Next', titleClass: 'card-title-lime', subtitle: 'Day 121 Preview',
    description: 'Tomorrow: Expo Updates for JS over-the-air fixes, rollback plans, channels, and a production monitoring checklist.',
    link: { href: '/day-121', label: 'Go to Day 121 →' },
  },
];

const RESOURCES = [
  {
    icon: '🏗️', title: 'EAS Build', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Profiles, artifacts, and running your first production cloud build.',
    link: { href: EAS_BUILD, label: 'Read EAS Build docs →', external: true },
  },
  {
    icon: '📤', title: 'EAS Submit', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Submit builds to App Store Connect and Google Play from the CLI.',
    link: { href: SUBMIT_DOCS, label: 'Read Submit docs →', external: true },
  },
  {
    icon: '🤖', title: 'Submit Android', titleClass: 'card-title-amber', subtitle: 'Play',
    description: 'Android-specific submit flow, service accounts, and tracks.',
    link: { href: PLAY_DOCS, label: 'Read Android submit docs →', external: true },
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

export default function Day120() {
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
          <Link to="/day-119" className="day001-nav-btn day001-nav-prev">← Day 119</Link>
          <p className="day001-datetime">React Native Day 120 · 30 Apr 2027</p>
          <Link to="/day-121" className="day001-nav-btn day001-nav-next">Day 121 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>Deploy</span><span>RN Day 20</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 120 <span aria-hidden="true">🚀</span></h1>
              <p className="day001-day-theme">EAS BUILD &amp; PLAY STORE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '33%' }} /></div>

        <p className="day001-summary">
          Day 120 ships the app. <strong>EAS Build</strong> produces store-ready{' '}
          <strong>AAB/APK</strong>, <strong>EAS Submit</strong> (or Play Console) uploads it, you prep{' '}
          <strong>listing assets</strong>, bump <strong>version / versionCode</strong>, and run a{' '}
          <strong>release checklist</strong> — internal track first, then production.
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

        <CardSection icon="📦" title="1 · BUILD & LISTING" cards={BUILD} columns={3} />
        <CardSection icon="✅" title="2 · VERSION, CHECKLIST & ROLLOUT" cards={SHIP} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#EAS</span><span>#PlayStore</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
