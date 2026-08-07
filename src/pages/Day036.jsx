import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const JWT_INTRO = 'https://jwt.io/introduction';
const BCRYPT_DOCS = 'https://www.npmjs.com/package/bcrypt';

const LEARNT_TODAY = [
  { title: 'Never store plain passwords', text: 'hash with bcrypt (salted) — even a leaked DB doesn\'t reveal passwords' },
  { title: 'JWT', text: 'a signed token proving who the user is, sent on each request' },
  { title: 'Sign on login', text: 'verify the password, then sign a JWT with the user id and an expiry' },
  { title: 'Verify per request', text: 'auth middleware checks the token and attaches req.user' },
  { title: 'Protect routes', text: 'put the auth middleware before routes that need a logged-in user' },
  { title: 'Secrets in env', text: 'the JWT secret and DB URL live in .env, never in code' },
  { title: 'CORS & rate limits', text: 'lock down origins and throttle abusive clients in production' },
  { title: 'Deploy the API', text: 'push to Render / Railway / Fly, set env vars, run migrations' },
  { title: 'Zod — TypeScript-first validation', text: 'define a schema once with z.object(), validate at runtime with safeParse' },
  { title: 'z.preprocess', text: 'transform (trim, lowercase) a value before the validation rule runs' },
  { title: 'safeParse — never throws', text: 'returns { success, data } or { success, error } — check success, read error.issues[0].message' },
];

const AUTH = [
  {
    icon: '🔒', title: 'Hash Passwords', titleClass: 'card-title-cyan', subtitle: 'bcrypt',
    description:
      'Store a salted bcrypt hash, never the password. On signup, hash it; on login, compare the attempt to the stored hash. A stolen database still can\'t reveal the real passwords.',
    code: 'const hash = await bcrypt.hash(password, 10);   // signup\nconst ok = await bcrypt.compare(attempt, user.hash); // login',
  },
  {
    icon: '🎫', title: 'JWT Login', titleClass: 'card-title-purple', subtitle: 'Sign On Success',
    description:
      'After the password checks out, sign a JWT carrying the user id and an expiry, and send it to the client. The client returns it (header or cookie) on every future request.',
    code: 'const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET!,\n  { expiresIn: "7d" });\nres.json({ token });',
  },
];

const PROTECT = [
  {
    icon: '🛂', title: 'Auth Middleware', titleClass: 'card-title-cyan', subtitle: 'Verify & Attach',
    description:
      'A middleware reads the token, verifies the signature, and attaches the user to req. Fail with 401 if it\'s missing or invalid — then downstream handlers can trust req.user.',
    code: 'function auth(req, res, next) {\n  const token = req.headers.authorization?.split(" ")[1];\n  try { req.user = jwt.verify(token!, SECRET); next(); }\n  catch { res.status(401).json({ error: "Unauthorized" }); }\n}\napp.get("/me", auth, getMe);',
  },
  {
    icon: '🛡️', title: 'Harden It', titleClass: 'card-title-purple', subtitle: 'Prod Basics',
    description:
      'Restrict CORS to your frontend origin, add rate limiting to slow brute force, set security headers with helmet, and keep every secret in environment variables.',
    code: 'app.use(cors({ origin: process.env.WEB_URL }));\napp.use(rateLimit({ windowMs: 60_000, max: 100 }));\napp.use(helmet());',
  },
  {
    icon: '🚀', title: 'Deploy', titleClass: 'card-title-amber', subtitle: 'Ship The API',
    description:
      'Deploy to Render, Railway or Fly.io: connect the repo, set the env vars (DB URL, JWT secret), run prisma migrate deploy, and the API is live behind HTTPS.',
    footer: 'build → set env → migrate → live over HTTPS',
  },
];

const ZOD_BASICS = [
  {
    icon: '🛡️', title: 'What is Zod?', titleClass: 'card-title-cyan', subtitle: 'Lecture 17 — Schema Validation',
    description:
      'Zod is a TypeScript-first schema validation library. Define the shape of your data once with z.object(), z.string(), z.number() etc., then validate any input against it at runtime. If validation fails, Zod returns structured errors instead of crashing.',
    code: 'import { z } from "zod";\n\nconst schema = z.object({\n  name: z.string().min(3),\n  age:  z.number().min(18).optional(),\n  email: z.string().email(),\n});',
  },
  {
    icon: '📧', title: 'z.preprocess', titleClass: 'card-title-purple', subtitle: 'Normalise Before Validating',
    description:
      'Use z.preprocess to transform a value before the validation rule runs. Classic use: trim and lower-case the email before checking z.string().email(), so "  User@MAIL.com  " always becomes "user@mail.com".',
    code: 'email: z.preprocess(\n  (v) => typeof v === "string" ? v.trim().toLowerCase() : "",\n  z.string().email("Email must be valid")\n)',
  },
  {
    icon: '🔑', title: 'Password Rules with .regex()', titleClass: 'card-title-amber', subtitle: 'Chained Validators',
    description:
      'Chain .min(), .max() and .regex() on z.string() to enforce every password policy in one place. Each regex call adds a separate failure message, so the user knows exactly which rule they broke.',
    code: 'password: z.string()\n  .min(8,  "min 8 chars")\n  .max(30, "max 30 chars")\n  .regex(/[A-Z]/, "needs uppercase")\n  .regex(/[a-z]/, "needs lowercase")\n  .regex(/[0-9]/, "needs digit")\n  .regex(/[!@#$%^&*]/, "needs special char")',
  },
];

const ZOD_SCHEMAS = [
  {
    icon: '📝', title: 'signupSchema', titleClass: 'card-title-cyan', subtitle: 'validators/userValidator.js',
    description:
      'Validates a new user: name (min 3), optional age (18–100), preprocessed email, and a strong password. Export it to use in the signup route handler.',
    code: 'export const signupSchema = z.object({\n  name: z.string().trim().min(3, "Min 3 chars"),\n  age:  z.number().min(18).max(100).optional(),\n  email: z.preprocess(\n    (v) => typeof v === "string" ? v.trim().toLowerCase() : "",\n    z.string().email("Email must be valid")\n  ),\n  password: z.string()\n    .min(8).max(30)\n    .regex(/[A-Z]/).regex(/[a-z]/)\n    .regex(/[0-9]/).regex(/[!@#$%^&*]/),\n});',
  },
  {
    icon: '🔐', title: 'loginSchema', titleClass: 'card-title-purple', subtitle: 'Reuse Rules',
    description:
      'Login only needs email + password — no name or age. Reuse the same preprocess and regex rules from signupSchema to guarantee consistent normalisation on every request.',
    code: 'export const loginSchema = z.object({\n  email: z.preprocess(\n    (v) => typeof v === "string" ? v.trim().toLowerCase() : "",\n    z.string().email("Email must be valid")\n  ),\n  password: z.string()\n    .min(8).max(30)\n    .regex(/[A-Z]/).regex(/[a-z]/)\n    .regex(/[0-9]/).regex(/[!@#$%^&*]/),\n});',
  },
  {
    icon: '✅', title: 'safeParse in a Route', titleClass: 'card-title-amber', subtitle: 'Validate req.body',
    description:
      'Call schema.safeParse(req.body) — it never throws. If success is false, return 400 with the first error message. If success is true, destructure result.data for clean, typed values.',
    code: 'const result = signupSchema.safeParse(req.body);\nif (!result.success) {\n  return res.status(400).json({\n    message: result.error.issues[0].message\n  });\n}\nconst { name, age, email, password } = result.data;',
  },
];

const RESOURCES = [
  {
    icon: '🎫', title: 'JWT', titleClass: 'card-title-cyan', subtitle: 'Introduction',
    description:
      'What a JSON Web Token is, its structure (header.payload.signature), and how to use it safely for stateless auth.',
    link: { href: JWT_INTRO, label: 'Open the JWT intro →', external: true },
  },
  {
    icon: '🔒', title: 'bcrypt', titleClass: 'card-title-purple', subtitle: 'Password Hashing',
    description:
      'The standard salted-hash library — how salting and cost factors defend against brute-force and rainbow tables.',
    link: { href: BCRYPT_DOCS, label: 'Open bcrypt →', external: true },
  },
  {
    icon: '🔜', title: 'Next: DSA in TypeScript', titleClass: 'card-title-amber', subtitle: 'Day 37 Preview',
    description:
      'The Year-1 stack is built — frontend, mobile and backend. Next, practised alongside: Data Structures & Algorithms in TypeScript, starting with complexity, arrays and strings.',
    link: { href: '/day-037', label: 'Go to Day 37 →' },
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

export default function Day036() {
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
          <Link to="/day-035" className="day001-nav-btn day001-nav-prev">← Day 35</Link>
          <p className="day001-datetime">TypeScript Day 36 · 5 Feb 2027</p>
          <Link to="/day-037" className="day001-nav-btn day001-nav-next">Day 37 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Auth</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 36 <span aria-hidden="true">🔒</span></h1>
              <p className="day001-day-theme">EXPRESS — AUTH (JWT) &amp; DEPLOY</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '36%' }} /></div>

        <p className="day001-summary">
          Securing and shipping the API. Never store plain passwords — hash with <strong>bcrypt</strong> (salted) and
          compare on login. On success, sign a <strong>JWT</strong> carrying the user id + expiry; the client sends it
          back each request. An <strong>auth middleware</strong> verifies the token and attaches <code>req.user</code>{' '}
          (401 if invalid), placed before <strong>protected routes</strong>. Harden production — restrict{' '}
          <strong>CORS</strong>, add <strong>rate limiting</strong> and <strong>helmet</strong>, keep secrets in{' '}
          <code>.env</code> — then <strong>deploy</strong> to Render/Railway/Fly. Also: <strong>Zod</strong> for
          runtime validation — define <code>signupSchema</code> / <code>loginSchema</code> with <code>z.object()</code>,
          preprocess email, chain <code>.regex()</code> for password rules, and call <code>safeParse(req.body)</code>{' '}
          (never throws; check <code>result.success</code> before reading <code>result.data</code>).{' '}
          <em>Lecture 17.</em>
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

        <CardSection icon="🔒" title="PASSWORDS & TOKENS" cards={AUTH} columns={2} />
        <CardSection icon="🛂" title="PROTECT & SHIP" cards={PROTECT} columns={3} />
        <CardSection icon="🛡️" title="ZOD — SCHEMA VALIDATION" cards={ZOD_BASICS} columns={3} />
        <CardSection icon="📋" title="ZOD SCHEMAS & safeParse" cards={ZOD_SCHEMAS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#JWT</span><span>#Auth</span>
        </footer>
      </div>
    </div>
  );
}
