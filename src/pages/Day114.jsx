import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const AUTH_SESSION_DOCS = 'https://docs.expo.dev/guides/authentication/';
const CLERK_EXPO = 'https://clerk.com/docs/quickstarts/expo';
const SECURE_STORE = 'https://docs.expo.dev/versions/latest/sdk/securestore/';

const LEARNT_TODAY = [
  { title: 'Auth flows', text: 'sign up, sign in, session refresh, and sign out — the four states every app needs' },
  { title: 'Email & password', text: 'classic credentials against your API or an auth provider’s hosted UI' },
  { title: 'OAuth', text: 'Google / GitHub (and others) hand you a token after the user consents in a browser sheet' },
  { title: 'AuthSession', text: 'expo-auth-session opens the provider, handles the redirect, and returns tokens' },
  { title: 'Clerk integration', text: 'Clerk (or similar) gives UI components + session hooks so you skip building auth from scratch' },
  { title: 'Protected routes', text: 'gate screens behind a session — redirect guests to sign-in' },
  { title: 'Secure token storage', text: 'put refresh/access tokens in SecureStore, never AsyncStorage for secrets' },
  { title: 'Session on launch', text: 'read the stored session on boot and restore the user without a second login' },
  { title: 'Deep link redirects', text: 'OAuth return URLs use your app scheme — wire them in app.json and the provider console' },
];

const FLOWS = [
  {
    icon: '🔐', title: 'Auth Flows', titleClass: 'card-title-cyan', subtitle: 'The Full Loop',
    description: 'Every product needs sign-up, sign-in, a live session, and sign-out. Decide early whether you own the user table or delegate to a provider (Clerk, Auth0, Supabase Auth).',
    code: '// guest → signIn → session → protected screens\n// session expires → refresh or re-auth\n// signOut → clear SecureStore + redirect',
  },
  {
    icon: '✉️', title: 'Email & Password', titleClass: 'card-title-purple', subtitle: 'Classic Credentials',
    description: 'Collect email + password, POST to your auth endpoint, store the returned tokens securely, then load the user profile. Add verification email when you go production.',
    code: 'const res = await api.post("/auth/login", { email, password });\nawait SecureStore.setItemAsync("token", res.token);',
  },
  {
    icon: '🔑', title: 'OAuth (Google / GitHub)', titleClass: 'card-title-amber', subtitle: 'Social Sign-In',
    description: 'expo-auth-session opens the provider in a browser or system sheet. On success you get an authorization code or ID token — exchange it for your app session.',
    code: 'import * as AuthSession from "expo-auth-session";\n\nconst redirect = AuthSession.makeRedirectUri();\n// startAsync / useAuthRequest with provider config',
  },
];

const PROTECT = [
  {
    icon: '🛡️', title: 'Clerk (Or Similar)', titleClass: 'card-title-cyan', subtitle: 'Drop-In Auth',
    description: 'Clerk’s Expo SDK wraps sign-in UI, OAuth, and useAuth / useUser hooks. Wrap the app in ClerkProvider and gate routes with signed-in state.',
    code: 'import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";\n\n<SignedIn><App /></SignedIn>\n<SignedOut><SignIn /></SignedOut>',
  },
  {
    icon: '🚫', title: 'Protected Routes', titleClass: 'card-title-purple', subtitle: 'Gate The Screens',
    description: 'In Expo Router, use a root layout that checks the session and redirects to /(auth)/sign-in. Guests never see account or checkout screens.',
    code: '// app/_layout.tsx\nif (!isSignedIn) return <Redirect href="/(auth)/sign-in" />;\nreturn <Slot />;',
  },
  {
    icon: '🔒', title: 'SecureStore Tokens', titleClass: 'card-title-amber', subtitle: 'Secrets Belong Here',
    description: 'Access and refresh tokens go in expo-secure-store (Keychain / Keystore). AsyncStorage is fine for prefs — never for auth secrets.',
    code: 'import * as SecureStore from "expo-secure-store";\nawait SecureStore.setItemAsync("session", token);',
  },
  {
    icon: '🔜', title: 'Next: Weather App', titleClass: 'card-title-lime', subtitle: 'Day 115 Preview',
    description: 'Tomorrow starts the Projects phase — a weather app that combines location, API data, offline cache, and animations.',
    link: { href: '/day-115', label: 'Go to Day 115 →' },
  },
];

const RESOURCES = [
  {
    icon: '🔑', title: 'Expo Authentication', titleClass: 'card-title-cyan', subtitle: 'Guide',
    description: 'AuthSession, providers, redirect URIs, and patterns for signing users in with Expo.',
    link: { href: AUTH_SESSION_DOCS, label: 'Read auth guide →', external: true },
  },
  {
    icon: '🛡️', title: 'Clerk + Expo', titleClass: 'card-title-purple', subtitle: 'Quickstart',
    description: 'Install Clerk’s Expo SDK, wrap the tree, and ship email + OAuth with protected routes.',
    link: { href: CLERK_EXPO, label: 'Read Clerk Expo docs →', external: true },
  },
  {
    icon: '🔒', title: 'SecureStore', titleClass: 'card-title-amber', subtitle: 'Token Storage',
    description: 'Encrypted key-value storage for session tokens on iOS and Android.',
    link: { href: SECURE_STORE, label: 'Read SecureStore docs →', external: true },
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

export default function Day114() {
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
          <Link to="/day-113" className="day001-nav-btn day001-nav-prev">← Day 113</Link>
          <p className="day001-datetime">React Native Day 114</p>
          <Link to="/day-115" className="day001-nav-btn day001-nav-next">Day 115 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>Auth</span><span>RN Day 14</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 114 <span aria-hidden="true">🔐</span></h1>
              <p className="day001-day-theme">AUTHENTICATION</p>
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
          Day 114 answers “who is this user?” <strong>Email/password</strong>,{' '}
          <strong>Google &amp; GitHub OAuth</strong> via <strong>AuthSession</strong>, or a hosted
          provider like <strong>Clerk</strong>. Store tokens in <strong>SecureStore</strong>, restore
          the session on launch, and <strong>protect routes</strong> so guests never see private
          screens. That closes the Production phase — next up: real projects.
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

        <CardSection icon="🔐" title="1 · SIGN-IN FLOWS" cards={FLOWS} columns={3} />
        <CardSection icon="🛡️" title="2 · PROVIDERS, GATES & TOKENS" cards={PROTECT} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#Authentication</span><span>#OAuth</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
