import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const MULTER = 'https://github.com/expressjs/multer#readme';
const FORMDATA = 'https://developer.mozilla.org/en-US/docs/Web/API/FormData';
const MIME = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types';

const LEARNT_TODAY = [
  { title: 'multipart/form-data', text: 'file uploads are not JSON — browsers send multipart bodies' },
  { title: 'Multer', text: 'Express middleware that parses multipart and exposes req.file / req.files' },
  { title: 'disk vs memory', text: 'diskStorage writes to disk; memoryStorage keeps a Buffer — pick based on size' },
  { title: 'Limits', text: 'set fileSize and fileFilter so users cannot upload 2GB or .exe as an “image”' },
  { title: 'Single field', text: 'upload.single("avatar") for one file; .array / .fields for many' },
  { title: 'Serve or cloud', text: 'static /uploads locally, or pipe to S3/Cloudinary in production' },
  { title: 'Auth first', text: 'protect upload routes — anonymous uploads become a spam magnet' },
  { title: 'Virus & types', text: 'check MIME + extension; never trust the client Content-Type alone' },
  { title: 'Cleanup', text: 'delete orphan files if the DB write fails after upload' },
];

const CORE = [
  {
    icon: '📎', title: 'Install Multer', titleClass: 'card-title-cyan', subtitle: 'Parse Multipart',
    description: 'Add multer, configure storage, and mount it on the route that accepts files.',
    code: 'import multer from "multer";\nconst upload = multer({\n  dest: "uploads/",\n  limits: { fileSize: 2 * 1024 * 1024 },\n});\napp.post("/avatar", auth, upload.single("avatar"), handler);',
  },
  {
    icon: '🖼️', title: 'fileFilter', titleClass: 'card-title-purple', subtitle: 'Allow Images Only',
    description: 'Reject non-images early. Return a clear 400 via your error middleware when filter calls cb(err).',
    code: 'fileFilter(_req, file, cb) {\n  if (!file.mimetype.startsWith("image/")) {\n    return cb(new Error("Only images allowed"));\n  }\n  cb(null, true);\n}',
  },
  {
    icon: '💾', title: 'diskStorage', titleClass: 'card-title-amber', subtitle: 'Named Files',
    description: 'Control destination and filename so uploads are unique and organized.',
    code: 'multer.diskStorage({\n  destination: "uploads/",\n  filename: (_req, file, cb) => {\n    cb(null, `${Date.now()}-${file.originalname}`);\n  },\n})',
  },
];

const PROD = [
  {
    icon: '🌐', title: 'Serve Or Cloud', titleClass: 'card-title-cyan', subtitle: 'Where Files Live',
    description: 'Locally: express.static("uploads"). In production: upload to object storage and store the public URL in the DB.',
    code: 'app.use("/uploads", express.static("uploads"));\n// prod: await s3.upload({ Body, Key })',
  },
  {
    icon: '🔐', title: 'Protect Uploads', titleClass: 'card-title-purple', subtitle: 'Auth + Limits',
    description: 'Require JWT, keep fileSize low, and rate-limit the route. Uploads are expensive and abusable.',
    code: 'app.post("/avatar", auth, loginLimit, upload.single("avatar"), …);',
  },
  {
    icon: '🧾', title: 'Save Metadata', titleClass: 'card-title-amber', subtitle: 'DB Record',
    description: 'Persist path/URL, mime, size, and owner id. Never trust originalname for paths without sanitizing.',
    code: 'await db.files.create({\n  userId: req.user.sub,\n  url: `/uploads/${req.file.filename}`,\n  mime: req.file.mimetype,\n});',
  },
  {
    icon: '🔜', title: 'Next: API Tests', titleClass: 'card-title-lime', subtitle: 'Day 138 Preview',
    description: 'Tomorrow: Supertest + a test runner — assert status codes and JSON without clicking around.',
    link: { href: '/day-138', label: 'Go to Day 138 →' },
  },
];

const RESOURCES = [
  {
    icon: '📎', title: 'Multer', titleClass: 'card-title-cyan', subtitle: 'README',
    description: 'single, array, fields, storage engines, and limits.',
    link: { href: MULTER, label: 'Read Multer docs →', external: true },
  },
  {
    icon: '📦', title: 'FormData', titleClass: 'card-title-purple', subtitle: 'MDN',
    description: 'How clients build multipart bodies in the browser or RN.',
    link: { href: FORMDATA, label: 'Read FormData docs →', external: true },
  },
  {
    icon: '🏷️', title: 'MIME Types', titleClass: 'card-title-amber', subtitle: 'MDN',
    description: 'Understand Content-Type values you filter on.',
    link: { href: MIME, label: 'Read MIME types →', external: true },
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

export default function Day137() {
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
          <Link to="/day-136" className="day001-nav-btn day001-nav-prev">← Day 136</Link>
          <p className="day001-datetime">Express Day 137</p>
          <Link to="/day-138" className="day001-nav-btn day001-nav-next">Day 138 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>Uploads</span><span>Multer</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 137 <span aria-hidden="true">📎</span></h1>
              <p className="day001-day-theme">FILE UPLOADS WITH MULTER</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">EXPRESS · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '38%' }} /></div>

        <p className="day001-summary">
          Day 137 accepts files. <strong>Multer</strong> parses <strong>multipart</strong> uploads,{' '}
          <strong>fileFilter</strong> and <strong>limits</strong> keep abuse down, and you either{' '}
          <strong>serve</strong> locally or push to <strong>object storage</strong> — always behind auth.
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

        <CardSection icon="📎" title="1 · MULTER BASICS" cards={CORE} columns={3} />
        <CardSection icon="🔐" title="2 · STORAGE & SAFETY" cards={PROD} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#Multer</span><span>#Uploads</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
