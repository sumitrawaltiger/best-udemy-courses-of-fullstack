import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REVENUECAT_DOCS = 'https://www.revenuecat.com/docs/getting-started/installation/reactnative';
const IAP_EXPO = 'https://docs.expo.dev/guides/in-app-purchases/';
const PAYWALLS = 'https://www.revenuecat.com/docs/tools/paywalls';

const LEARNT_TODAY = [
  { title: 'In-app purchases', text: 'one-time unlocks (remove ads, buy a pack) sold through the store' },
  { title: 'Subscriptions', text: 'recurring products (monthly/yearly) with free trials and grace periods' },
  { title: 'RevenueCat setup', text: 'SDK + API keys + products linked to App Store / Play Console' },
  { title: 'Paywall UI', text: 'a screen that lists packages and starts purchase() on tap' },
  { title: 'Entitlements', text: 'check CustomerInfo for “pro” (or similar) before unlocking features' },
  { title: 'Restore purchases', text: 'required by stores — let users reclaim buys on a new device' },
  { title: 'Sandbox testing', text: 'use sandbox / license testers before charging real money' },
  { title: 'Dev build needed', text: 'IAP does not work in Expo Go — use an EAS development build' },
  { title: 'Offerings', text: 'RevenueCat groups products into current offerings you fetch at runtime' },
];

const CORE = [
  {
    icon: '🛒', title: 'In-App Purchases', titleClass: 'card-title-cyan', subtitle: 'One-Time Unlocks',
    description: 'Sell a lifetime unlock or consumable pack through Play Billing / StoreKit. RevenueCat wraps the platform APIs so you write one purchase flow.',
    code: 'const offerings = await Purchases.getOfferings();\nconst pkg = offerings.current.availablePackages[0];\nawait Purchases.purchasePackage(pkg);',
  },
  {
    icon: '🔁', title: 'Subscriptions', titleClass: 'card-title-purple', subtitle: 'Recurring Revenue',
    description: 'Monthly and yearly plans with trials. Always read entitlements from CustomerInfo — never trust a local “isPro” flag alone.',
    code: 'const info = await Purchases.getCustomerInfo();\nconst isPro = Boolean(info.entitlements.active["pro"]);',
  },
  {
    icon: '⚙️', title: 'RevenueCat Setup', titleClass: 'card-title-amber', subtitle: 'SDK + Products',
    description: 'Create products in the stores, mirror them in RevenueCat, add the React Native SDK, and configure with your public SDK key at app launch.',
    code: 'Purchases.configure({ apiKey: REVENUECAT_KEY });',
  },
];

const PAYWALL = [
  {
    icon: '🧱', title: 'Paywall UI', titleClass: 'card-title-cyan', subtitle: 'Sell The Upgrade',
    description: 'Show plan names, prices and a clear CTA. Highlight the yearly save. Keep restore and legal links visible for store review.',
    code: '{packages.map((p) => (\n  <Button title={p.product.priceString}\n    onPress={() => buy(p)} />\n))}',
  },
  {
    icon: '🔓', title: 'Entitlements', titleClass: 'card-title-purple', subtitle: 'Gate Features',
    description: 'Wrap premium screens: if the entitlement is inactive, push the paywall. Listen for CustomerInfo updates after purchase.',
    code: 'if (!isPro) return <Redirect href="/paywall" />;',
  },
  {
    icon: '♻️', title: 'Restore Purchases', titleClass: 'card-title-amber', subtitle: 'Store Requirement',
    description: 'Call restorePurchases when the user taps Restore. Essential for reinstalls and new phones — reviewers look for this.',
    code: 'const info = await Purchases.restorePurchases();\nsetPro(Boolean(info.entitlements.active["pro"]));',
  },
  {
    icon: '🔜', title: 'Next: Jarvis AI', titleClass: 'card-title-lime', subtitle: 'Day 119 Preview',
    description: 'Tomorrow: a voice-driven AI agent — speech in, ElevenLabs (or similar) out, and a real-time conversational UI.',
    link: { href: '/day-119', label: 'Go to Day 119 →' },
  },
];

const RESOURCES = [
  {
    icon: '💰', title: 'RevenueCat + RN', titleClass: 'card-title-cyan', subtitle: 'Install',
    description: 'Install the Purchases SDK, configure keys, and fetch offerings in React Native.',
    link: { href: REVENUECAT_DOCS, label: 'Read RevenueCat RN docs →', external: true },
  },
  {
    icon: '📱', title: 'Expo IAP Guide', titleClass: 'card-title-purple', subtitle: 'Expo',
    description: 'How in-app purchases fit Expo projects and why you need a dev build.',
    link: { href: IAP_EXPO, label: 'Read Expo IAP guide →', external: true },
  },
  {
    icon: '🧱', title: 'Paywalls', titleClass: 'card-title-amber', subtitle: 'UI Patterns',
    description: 'RevenueCat paywall tools and patterns for presenting packages cleanly.',
    link: { href: PAYWALLS, label: 'Read paywalls docs →', external: true },
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

export default function Day118() {
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
          <Link to="/day-117" className="day001-nav-btn day001-nav-prev">← Day 117</Link>
          <p className="day001-datetime">React Native Day 118 · 28 Apr 2027</p>
          <Link to="/day-119" className="day001-nav-btn day001-nav-next">Day 119 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>IAP</span><span>RN Day 18</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 118 <span aria-hidden="true">💰</span></h1>
              <p className="day001-day-theme">MONETIZATION WITH REVENUECAT</p>
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
          Day 118 turns the app into a product. <strong>In-app purchases</strong> and{' '}
          <strong>subscriptions</strong> via <strong>RevenueCat</strong>, a clear{' '}
          <strong>paywall UI</strong>, <strong>entitlement checks</strong>, and{' '}
          <strong>restore purchases</strong>. Needs an EAS dev build — not Expo Go.
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

        <CardSection icon="🛒" title="1 · PRODUCTS & SETUP" cards={CORE} columns={3} />
        <CardSection icon="🧱" title="2 · PAYWALL, ENTITLEMENTS & RESTORE" cards={PAYWALL} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#RevenueCat</span><span>#IAP</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
