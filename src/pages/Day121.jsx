import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const UPDATES_DOCS = 'https://docs.expo.dev/eas-update/introduction/';
const ROLLBACK_DOCS = 'https://docs.expo.dev/eas-update/rollback/';
const RUNTIME_DOCS = 'https://docs.expo.dev/eas-update/runtime-versions/';

const LEARNT_TODAY = [
  { title: 'Expo Updates', text: 'push JS/asset bundles over-the-air without a full store rebuild' },
  { title: 'OTA strategy', text: 'use OTA for JS fixes and content; native changes still need a new binary' },
  { title: 'Runtime versions', text: 'tie updates to a runtime so incompatible native shells never load bad JS' },
  { title: 'Channels & branches', text: 'publish to preview vs production channels for safe rollouts' },
  { title: 'Rollback plans', text: 'republish a known-good update or roll back when metrics tank' },
  { title: 'Production monitoring', text: 'watch crash rate, update adoption, and support tickets after every publish' },
  { title: 'Ship checklist', text: 'smoke test, version bump rules, and “who can publish” before going live' },
  { title: 'Update vs build', text: 'EAS Update ≠ EAS Build — updates ride on an already-installed binary' },
  { title: 'Deployment deepens', text: 'Day 120 shipped the binary; Day 121 ships fixes without waiting for review' },
];

const CORE = [
  {
    icon: '📡', title: 'Expo Updates', titleClass: 'card-title-cyan', subtitle: 'JS Over The Air',
    description: 'EAS Update publishes a new JS bundle. On launch (or in background), the app downloads it and runs the new code — no Play/App Store wait for pure JS changes.',
    code: 'eas update --branch production --message "fix login crash"',
  },
  {
    icon: '🗺️', title: 'OTA Strategy', titleClass: 'card-title-purple', subtitle: 'What Belongs Where',
    description: 'Ship copy, UI, and logic bugs via OTA. New native modules, permission changes, or SDK bumps still need an EAS Build and store submit.',
    code: '// OTA  → JS, assets, most bugs\n// Build → native code, permissions, SDK',
  },
  {
    icon: '🔢', title: 'Runtime Versions', titleClass: 'card-title-amber', subtitle: 'Safe Matching',
    description: 'runtimeVersion links an update to a native binary. Mismatched runtimes are ignored so an old app never loads JS that needs newer native APIs.',
    code: '// app.json\n"runtimeVersion": { "policy": "appVersion" }',
  },
];

const PROD = [
  {
    icon: '🌿', title: 'Channels & Branches', titleClass: 'card-title-cyan', subtitle: 'Staged Rollout',
    description: 'Publish to a preview branch for testers first, then promote or publish to production. Same binary, different update streams.',
    code: 'eas update --branch preview\n# verify → then production',
  },
  {
    icon: '↩️', title: 'Rollback Plans', titleClass: 'card-title-purple', subtitle: 'Undo Fast',
    description: 'If an update causes crashes, roll back to the previous update or republish a known-good commit. Decide the rollback owner before you need them.',
    code: 'eas update:rollback --channel production',
  },
  {
    icon: '📊', title: 'Production Monitoring', titleClass: 'card-title-amber', subtitle: 'Watch After Ship',
    description: 'Track crash-free sessions, update download success, and support noise for 24–48h after every OTA. No monitoring = flying blind.',
    code: '// crashes ↑ after update? → rollback\n// adoption stuck? → check channel / runtime',
  },
  {
    icon: '🔜', title: 'Next: Peer Review', titleClass: 'card-title-lime', subtitle: 'Day 122 Preview',
    description: 'Tomorrow starts Graduation: peer class, code review, feedback loops, and polishing projects for your portfolio.',
    link: { href: '/day-122', label: 'Go to Day 122 →' },
  },
];

const RESOURCES = [
  {
    icon: '📡', title: 'EAS Update', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'How over-the-air updates work with Expo — publish, fetch, and apply.',
    link: { href: UPDATES_DOCS, label: 'Read EAS Update docs →', external: true },
  },
  {
    icon: '↩️', title: 'Rollback', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Roll back a bad update quickly when production metrics go wrong.',
    link: { href: ROLLBACK_DOCS, label: 'Read rollback docs →', external: true },
  },
  {
    icon: '🔢', title: 'Runtime Versions', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Match JS updates to the right native binary so incompatible bundles never load.',
    link: { href: RUNTIME_DOCS, label: 'Read runtime docs →', external: true },
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

export default function Day121() {
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
          <Link to="/day-120" className="day001-nav-btn day001-nav-prev">← Day 120</Link>
          <p className="day001-datetime">React Native Day 121 · 1 May 2027</p>
          <Link to="/day-122" className="day001-nav-btn day001-nav-next">Day 122 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>OTA</span><span>RN Day 21</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 121 <span aria-hidden="true">📡</span></h1>
              <p className="day001-day-theme">OTA UPDATES &amp; PRODUCTION</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '34%' }} /></div>

        <p className="day001-summary">
          Day 121 ships fixes without waiting for store review. <strong>Expo Updates</strong> pushes JS
          over-the-air, with a clear <strong>OTA strategy</strong>, <strong>runtime versions</strong>,{' '}
          <strong>channels</strong>, <strong>rollback plans</strong>, and <strong>production
          monitoring</strong>. Binary from Day 120 — continuous improvement from here.
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

        <CardSection icon="📡" title="1 · UPDATES & RUNTIME" cards={CORE} columns={3} />
        <CardSection icon="↩️" title="2 · CHANNELS, ROLLBACK & MONITORING" cards={PROD} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#EASUpdate</span><span>#OTA</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
