import { Link } from 'react-router-dom';

const UPDATED = '18 July 2026';
const CONTACT = 'ersumitrawal7163@gmail.com';

const wrap = {
  minHeight: '100vh',
  background: '#0d1117',
  color: '#e6edf3',
  padding: '0 0 4rem',
};
const inner = { maxWidth: '820px', margin: '0 auto', padding: '0 1.25rem' };
const topbar = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
  padding: '1rem 1.25rem',
  borderBottom: '1px solid #2a3441',
  position: 'sticky',
  top: 0,
  background: 'rgba(13,17,23,0.9)',
  backdropFilter: 'blur(8px)',
  zIndex: 10,
};
const navBtn = {
  display: 'inline-block',
  padding: '0.5rem 1rem',
  borderRadius: '999px',
  border: '1px solid #2a3441',
  color: '#e6edf3',
  textDecoration: 'none',
  fontSize: '0.85rem',
  fontWeight: 600,
};
const h1 = { fontSize: 'clamp(1.7rem, 4vw, 2.3rem)', fontWeight: 800, margin: '2rem 0 0.4rem' };
const h2 = { fontSize: '1.15rem', fontWeight: 800, margin: '1.8rem 0 0.6rem', color: '#e6edf3' };
const p = { color: '#c9d6e4', lineHeight: 1.75, fontSize: '0.98rem', margin: '0 0 0.9rem' };
const li = { color: '#c9d6e4', lineHeight: 1.7, fontSize: '0.98rem', marginBottom: '0.4rem' };
const muted = { color: '#9aa7b4', fontSize: '0.85rem' };
const strong = { color: '#e6edf3', fontWeight: 700 };

export default function PrivacyPolicy() {
  return (
    <div style={wrap}>
      <div style={topbar}>
        <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9aa7b4' }}>
          Privacy Policy
        </span>
        <Link to="/" style={navBtn}>← Home</Link>
      </div>

      <div style={inner}>
        <h1 style={h1}>Privacy Policy</h1>
        <p style={muted}>Last updated: {UPDATED}</p>

        <p style={p}>
          This Privacy Policy explains how the website <strong style={strong}>sumit-rawal.online</strong> and its
          companion mobile application <strong style={strong}>“Full Lifecycle Engineer”</strong> (together, the
          “Service”) handle information. The Service is a free, personal, educational project — a study roadmap and
          learning-notes app. It has <strong style={strong}>no accounts, no sign-in, and no forms that collect
          personal information</strong>.
        </p>

        <h2 style={h2}>1. Information we collect</h2>
        <p style={p}>
          We do <strong style={strong}>not</strong> collect, store, sell, or share personal information. Specifically:
        </p>
        <ul>
          <li style={li}>There is no account creation, login, or user profile.</li>
          <li style={li}>We do not run advertising or third-party analytics/tracking on the Service.</li>
          <li style={li}>We do not ask for your name, email, location, contacts, or payment details.</li>
          <li style={li}>
            Any preferences or progress you set inside the app (for example, a quiz answer you tap) are kept
            <strong style={strong}> on your own device</strong> and are not transmitted to us.
          </li>
        </ul>

        <h2 style={h2}>2. Hosting &amp; server logs</h2>
        <p style={p}>
          The website is hosted by <strong style={strong}>Netlify</strong>. Like most web hosts, Netlify may
          automatically record standard technical logs (such as IP address, browser type, and pages requested) for
          security, abuse-prevention, and operational purposes. This processing is governed by Netlify’s own privacy
          policy. We do not use these logs to identify individual users.
        </p>

        <h2 style={h2}>3. Third-party content and links</h2>
        <p style={p}>The Service embeds and links to third-party content, each governed by its own privacy policy:</p>
        <ul>
          <li style={li}>
            <strong style={strong}>Embedded videos</strong> — some lessons embed YouTube players; YouTube/Google may
            set cookies or collect data when a video loads or plays.
          </li>
          <li style={li}>
            <strong style={strong}>Outbound links</strong> — links to course platforms (e.g. Udemy), documentation,
            and notes (e.g. Notion) open on those third parties’ own sites, which have their own policies.
          </li>
        </ul>
        <p style={p}>We are not responsible for the privacy practices of these third parties.</p>

        <h2 style={h2}>4. The mobile app</h2>
        <p style={p}>
          The mobile app presents the same educational content natively and, for a few pages, loads
          <strong style={strong}> sumit-rawal.online</strong> inside an in-app browser (WebView). External links open
          in your device’s default browser. The app itself does not collect personal data. The app is distributed
          through the <strong style={strong}>Google Play Store</strong> and built with <strong style={strong}>Expo</strong>;
          those platforms may collect standard installation, device, and crash-diagnostic information under their own
          policies (see Google Play’s and Expo’s privacy policies).
        </p>

        <h2 style={h2}>5. Children’s privacy</h2>
        <p style={p}>
          The Service is a general-audience educational resource and is not directed to children under 13. Because we
          collect no personal information, we do not knowingly collect any information from children.
        </p>

        <h2 style={h2}>6. Data sharing and sale</h2>
        <p style={p}>
          We do not sell, rent, or trade any information, and we have no personal data to share. We may disclose
          information only if required by law.
        </p>

        <h2 style={h2}>7. Your choices</h2>
        <p style={p}>
          Because the Service collects no personal information from you, there is generally nothing to access,
          correct, or delete on our side. You can clear the app’s local data at any time via your device settings, and
          you can manage cookies for embedded third-party content through your browser settings.
        </p>

        <h2 style={h2}>8. Changes to this policy</h2>
        <p style={p}>
          We may update this Privacy Policy from time to time. Material changes will be reflected by updating the
          “Last updated” date above.
        </p>

        <h2 style={h2}>9. Contact</h2>
        <p style={p}>
          Questions about this policy? Email <a href={`mailto:${CONTACT}`} style={{ color: '#f7df1e', fontWeight: 600 }}>{CONTACT}</a>.
        </p>

        <p style={{ ...muted, marginTop: '2rem' }}>
          This policy is provided in good faith for a personal, non-commercial educational project and is not legal
          advice.
        </p>
      </div>
    </div>
  );
}
