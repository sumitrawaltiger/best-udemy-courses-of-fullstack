import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day15';
const DOCS_URL = 'https://github.com/expressjs/multer#readme';

const LEARNT_TODAY = [
  {
    title: 'multipart/form-data',
    text: 'the encoding browsers use to send files',
  },
  {
    title: 'Multer',
    text: 'Express middleware that parses uploaded files',
  },
  {
    title: 'Storage engines',
    text: 'diskStorage saves to disk, memoryStorage keeps a Buffer',
  },
  {
    title: 'req.file / req.files',
    text: 'where Multer puts the parsed upload(s)',
  },
  {
    title: 'single / array',
    text: 'upload.single("photo") vs upload.array("photos", 5)',
  },
  {
    title: 'File filter',
    text: 'accept only images / PDFs, reject the rest',
  },
  {
    title: 'Size limits',
    text: 'cap fileSize so uploads cannot exhaust the server',
  },
  {
    title: 'Cloud storage',
    text: 'push to S3 / Cloudinary and keep only the URL',
  },
  {
    title: 'Store the URL',
    text: 'never store binaries in Mongo — save the path/URL',
  },
  {
    title: 'Serve statics',
    text: 'express.static exposes locally-saved files',
  },
];

const MULTER = [
  {
    icon: '📨',
    title: 'multipart/form-data',
    titleClass: 'card-title-cyan',
    subtitle: 'how files arrive',
    description: 'Files ride in a multipart body — express.json cannot read them.',
    code: '<form enctype="multipart/form-data" method="post">\n  <input type="file" name="photo" />\n</form>',
  },
  {
    icon: '📎',
    title: 'Multer Middleware',
    titleClass: 'card-title-green',
    subtitle: 'parse uploads',
    description: 'Add Multer to a route to parse one or many files.',
    code: 'const upload = multer({ dest: "uploads/" });\napp.post("/avatar", upload.single("photo"), handler);\napp.post("/gallery", upload.array("photos", 5), handler);',
  },
  {
    icon: '📥',
    title: 'req.file',
    titleClass: 'card-title-amber',
    subtitle: 'the result',
    description: 'Multer attaches the parsed file(s); text fields stay on req.body.',
    code: '// req.file = { originalname, mimetype, size, path }\nres.json({ url: `/uploads/${req.file.filename}` });',
  },
];

const STORAGE = [
  {
    icon: '💽',
    title: 'Disk vs Memory',
    titleClass: 'card-title-cyan',
    subtitle: 'storage engine',
    description: 'Save to disk, or keep a Buffer in memory to forward to the cloud.',
    code: 'const storage = multer.diskStorage({\n  destination: (req, file, cb) => cb(null, "uploads/"),\n  filename: (req, file, cb) => cb(null, Date.now() + file.originalname),\n});',
  },
  {
    icon: '🚦',
    title: 'Filter & Limits',
    titleClass: 'card-title-green',
    subtitle: 'guard uploads',
    description: 'Accept only allowed types and cap the file size.',
    code: 'multer({\n  limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB\n  fileFilter: (req, file, cb) =>\n    cb(null, file.mimetype.startsWith("image/")),\n});',
  },
  {
    icon: '☁️',
    title: 'Cloud Storage',
    titleClass: 'card-title-amber',
    subtitle: 'S3 / Cloudinary',
    description: 'For scale, stream the file to object storage instead of local disk.',
    code: 'const result = await cloudinary.uploader.upload(req.file.path);\n// result.secure_url',
  },
  {
    icon: '🔗',
    title: 'Store the URL',
    titleClass: 'card-title-pink',
    subtitle: 'not the bytes',
    description: 'Save only the URL/path on the document — never the binary.',
    code: 'user.avatar = result.secure_url;\nawait user.save();',
  },
];

const RESOURCES = [
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day15',
    description: 'Multer uploads with disk & memory storage, filters, limits, and cloud upload.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Multer README',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'The official Multer docs — storage engines, limits, and file filters.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'File Uploads with Multer',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Uploading Files with Node.js and Multer by Piyush Garg — for Day 34.',
    link: {
      href: 'https://www.youtube.com/watch?v=WqJ0P8JnftI',
      label: 'Watch on YouTube →',
      external: true,
    },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">
        {card.icon}
      </span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a
            href={card.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="day001-card-link"
          >
            {card.link.label}
          </a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">
            {card.link.label}
          </Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title">
        <span aria-hidden="true">{icon}</span> {title}
      </h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (
          <TopicCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

export default function Day034() {
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
      const scale = Math.min(
        (window.innerHeight - pad) / wrap.scrollHeight,
        (window.innerWidth - pad) / wrap.scrollWidth,
      );

      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };

    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);

    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) {
      avatar.addEventListener('load', fitToScreen);
    }

    return () => {
      window.removeEventListener('resize', fitToScreen);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/day-033" className="day001-nav-btn day001-nav-home">
            ← Day 33
          </Link>
          <p className="day001-datetime">Thunder Day 34</p>
          <Link to="/day-035" className="day001-nav-btn day001-nav-next">
            Day 35 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Node.js</span>
              <span>Express</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 34 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">FILE UPLOADS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img
              src="/sumit-profile.png"
              alt="Sumit Rawal"
              className="day001-avatar"
              width={48}
              height={48}
            />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">NODE · THUNDER</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '34%' }} />
        </div>

        <p className="day001-summary">
          Day thirty-four — forms send files as <code>multipart/form-data</code>, which{' '}
          <code>express.json()</code> can&apos;t read — so I added <strong>Multer</strong>. It parses
          uploads onto <code>req.file</code>/<code>req.files</code>, with a{' '}
          <strong>storage engine</strong> (disk or memory), a <strong>file filter</strong>, and a
          size <strong>limit</strong>. For scale I push the file to <strong>cloud storage</strong>{' '}
          (S3/Cloudinary) and store only the <strong>URL</strong> on the document. Code in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day15 on GitHub
          </a>
          .
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title">
            <span className="day001-learnt-line" aria-hidden="true" />
            WHAT I LEARNED TODAY
          </h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">
                  ✓
                </span>
                <span>
                  <strong>{item.title}</strong> — {item.text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="📎" title="MULTER BASICS" cards={MULTER} columns={3} />
        <CardSection icon="🗄️" title="STORAGE" cards={STORAGE} columns={4} />
        <CardSection icon="📚" title="THUNDER BACKEND DAY 15" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#FileUpload</span>
          <span>#Multer</span>
          <span>#Backend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
