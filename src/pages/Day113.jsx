import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTIF_DOCS = 'https://docs.expo.dev/versions/latest/sdk/notifications/';
const PUSH_DOCS = 'https://docs.expo.dev/push-notifications/overview/';
const SCHEDULE_DOCS = 'https://docs.expo.dev/versions/latest/sdk/notifications/#schedule-a-local-notification';

const LEARNT_TODAY = [
  { title: 'Local vs push', text: 'local notifications are scheduled on-device; push arrives from a server via a push token' },
  { title: 'Permissions', text: 'ask for notification permission before scheduling or registering for push' },
  { title: 'Push tokens', text: 'ExpoPushToken identifies this install so your backend can target it' },
  { title: 'Notification listeners', text: 'react when a notification is received in foreground or when the user taps it' },
  { title: 'Local scheduling', text: 'schedule a reminder for a date/time or a repeating trigger' },
  { title: 'Channels (Android)', text: 'Android needs a notification channel — importance, sound, and category' },
  { title: 'Custom sounds', text: 'bundle a sound asset and reference it from the notification content' },
  { title: 'Data payload', text: 'attach JSON data so a tap can deep-link into the right screen' },
  { title: 'Expo Push service', text: 'send via Expo’s push API with the token — no Firebase setup required for the basics' },
];

const CORE = [
  {
    icon: '🔔', title: 'Permissions First', titleClass: 'card-title-cyan', subtitle: 'Ask Before Alerting',
    description: 'Request notification permission early in a feature flow. Without it, local schedules and push delivery silently fail on iOS and are limited on Android.',
    code: 'import * as Notifications from "expo-notifications";\n\nconst { status } = await Notifications.requestPermissionsAsync();\nif (status !== "granted") return;',
  },
  {
    icon: '🎫', title: 'Push Tokens', titleClass: 'card-title-purple', subtitle: 'Address Of This Install',
    description: 'getExpoPushTokenAsync returns a token you store on your backend. When something happens for that user, the server posts to Expo’s push API with the token.',
    code: 'const { data: token } = await Notifications.getExpoPushTokenAsync();\n// POST token to your API → save per user',
  },
  {
    icon: '👂', title: 'Listeners', titleClass: 'card-title-amber', subtitle: 'Receive & Tap',
    description: 'addNotificationReceivedListener fires in the foreground. addNotificationResponseReceivedListener fires when the user taps — use the data payload to navigate.',
    code: 'Notifications.addNotificationResponseReceivedListener((r) => {\n  const id = r.notification.request.content.data.id;\n  router.push(`/item/${id}`);\n});',
  },
];

const LOCAL_PUSH = [
  {
    icon: '📅', title: 'Schedule Local', titleClass: 'card-title-cyan', subtitle: 'On-Device Reminders',
    description: 'scheduleNotificationAsync fires without a server — perfect for timers, habit reminders, and offline-friendly alerts.',
    code: 'await Notifications.scheduleNotificationAsync({\n  content: { title: "Stand up!", body: "Stretch break" },\n  trigger: { type: "timeInterval", seconds: 3600 },\n});',
  },
  {
    icon: '📡', title: 'Send A Push', titleClass: 'card-title-purple', subtitle: 'From Your Backend',
    description: 'Your server (or Expo’s tool) POSTs to https://exp.host/--/api/v2/push/send with the ExpoPushToken, title, body and optional data.',
    code: '// POST { to: token, title, body, data }\n// Expo delivers to APNs / FCM for you',
  },
  {
    icon: '🔊', title: 'Channels & Sounds', titleClass: 'card-title-amber', subtitle: 'Android + Polish',
    description: 'On Android, create a channel with an importance level. Custom sounds need a bundled asset referenced in the notification content.',
    code: 'await Notifications.setNotificationChannelAsync("alerts", {\n  name: "Alerts",\n  importance: Notifications.AndroidImportance.HIGH,\n});',
  },
  {
    icon: '🔜', title: 'Next: Authentication', titleClass: 'card-title-lime', subtitle: 'Day 114 Preview',
    description: 'Tomorrow: who is using the app — email/password, Google & GitHub OAuth, and protecting routes with Clerk (or similar).',
    link: { href: '/day-114', label: 'Go to Day 114 →' },
  },
];

const RESOURCES = [
  {
    icon: '🔔', title: 'Expo Notifications', titleClass: 'card-title-cyan', subtitle: 'API',
    description: 'Permissions, scheduling, listeners, channels, and the full notification content model.',
    link: { href: NOTIF_DOCS, label: 'Read notifications docs →', external: true },
  },
  {
    icon: '📡', title: 'Push Overview', titleClass: 'card-title-purple', subtitle: 'Guide',
    description: 'How Expo Push works end-to-end — tokens, sending, receipts, and platform setup.',
    link: { href: PUSH_DOCS, label: 'Read push guide →', external: true },
  },
  {
    icon: '📅', title: 'Scheduling', titleClass: 'card-title-amber', subtitle: 'Local Triggers',
    description: 'Time-interval, calendar, and daily triggers for on-device reminders.',
    link: { href: SCHEDULE_DOCS, label: 'Read scheduling docs →', external: true },
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

export default function Day113() {
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
          <Link to="/day-112" className="day001-nav-btn day001-nav-prev">← Day 112</Link>
          <p className="day001-datetime">React Native Day 113 · 27 Sep 2027</p>
          <Link to="/day-114" className="day001-nav-btn day001-nav-next">Day 114 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>Notifications</span><span>RN Day 13</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 113 <span aria-hidden="true">🔔</span></h1>
              <p className="day001-day-theme">LOCAL &amp; PUSH NOTIFICATIONS</p>
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
          Day 113 brings the app back to the user. <strong>Local notifications</strong> schedule
          reminders on-device; <strong>push</strong> uses an <strong>ExpoPushToken</strong> so your
          backend can alert any install. Add <strong>listeners</strong> for receive and tap,{' '}
          <strong>Android channels</strong>, and optional <strong>custom sounds</strong> — then route
          taps into the right screen with a data payload.
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

        <CardSection icon="🔔" title="1 · PERMISSIONS, TOKENS & LISTENERS" cards={CORE} columns={3} />
        <CardSection icon="📡" title="2 · LOCAL SCHEDULE & PUSH" cards={LOCAL_PUSH} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#PushNotifications</span><span>#Expo</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
