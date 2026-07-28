import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ACTIONS = 'https://docs.github.com/en/actions';
const NODE = 'https://docs.github.com/en/actions/use-cases-and-examples/building-and-testing/building-and-testing-nodejs';
const PACKAGES = 'https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry';

const LEARNT_TODAY = [
  { title: 'CI', text: 'on every PR: install, lint, test — catch breaks before merge' },
  { title: 'CD', text: 'on main: build image, push registry, deploy or mark a release' },
  { title: 'GitHub Actions', text: 'workflows in .github/workflows/*.yml run on GitHub runners' },
  { title: 'Triggers', text: 'on: pull_request and on: push branches: [main]' },
  { title: 'Jobs & steps', text: 'checkout → setup-node → npm ci → npm test → docker build' },
  { title: 'Secrets', text: 'DATABASE_URL and registry tokens live in repo Secrets — not in YAML' },
  { title: 'Cache', text: 'cache npm to speed CI; still prefer npm ci for clean installs' },
  { title: 'Fail closed', text: 'required status checks block merge when tests fail' },
  { title: 'Same image CI→prod', text: 'build once, promote the digest — avoid rebuild drift' },
];

const CORE = [
  {
    icon: '⚙️', title: 'Test Workflow', titleClass: 'card-title-cyan', subtitle: 'PR Gate',
    description: 'A minimal Node CI job that must pass before merge.',
    code: 'name: ci\non: [pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: "22", cache: npm }\n      - run: npm ci\n      - run: npm test',
  },
  {
    icon: '🐳', title: 'Build & Push', titleClass: 'card-title-purple', subtitle: 'On Main',
    description: 'After tests, build the Docker image and push to GHCR or Docker Hub.',
    code: '- run: docker build -t ghcr.io/org/api:${{ github.sha }} .\n- run: docker push ghcr.io/org/api:${{ github.sha }}',
  },
  {
    icon: '🔐', title: 'Secrets', titleClass: 'card-title-amber', subtitle: 'Repo Settings',
    description: 'Reference secrets with ${{ secrets.NAME }}. Rotate when people leave.',
    code: 'env:\n  DATABASE_URL: ${{ secrets.DATABASE_URL }}',
  },
];

const PRACTICE = [
  {
    icon: '🛡️', title: 'Branch Protection', titleClass: 'card-title-cyan', subtitle: 'Required Checks',
    description: 'Require the ci job on main. No force-push; reviews optional but useful.',
    code: '// Settings → Branches → rule\n'// require status: ci / test',
  },
  {
    icon: '🏷️', title: 'Tag By SHA', titleClass: 'card-title-purple', subtitle: 'Traceability',
    description: 'Image tags matching commit SHA make rollbacks and audits easy.',
    code: 'api:abc1234  ← git sha',
  },
  {
    icon: '🧪', title: 'Service Containers', titleClass: 'card-title-amber', subtitle: 'Optional',
    description: 'Actions can spin Postgres for e2e tests — same idea as Compose.',
    code: 'services:\n  postgres:\n    image: postgres:16',
  },
  {
    icon: '🔜', title: 'Next: Secrets & Config', titleClass: 'card-title-lime', subtitle: 'Day 164 Preview',
    description: 'Tomorrow: 12-factor config — env per environment, secret stores, and no secrets in git.',
    link: { href: '/day-164', label: 'Go to Day 164 →' },
  },
];

const RESOURCES = [
  {
    icon: '⚙️', title: 'GitHub Actions', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Workflows, jobs, runners, and security.',
    link: { href: ACTIONS, label: 'Read Actions docs →', external: true },
  },
  {
    icon: '🟢', title: 'Node CI', titleClass: 'card-title-purple', subtitle: 'Example',
    description: 'Official building and testing Node.js guide.',
    link: { href: NODE, label: 'Read Node CI guide →', external: true },
  },
  {
    icon: '📦', title: 'Container Registry', titleClass: 'card-title-amber', subtitle: 'GHCR',
    description: 'Push and pull images with GitHub Packages.',
    link: { href: PACKAGES, label: 'Read GHCR docs →', external: true },
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

export default function Day163() {
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
          <Link to="/day-162" className="day001-nav-btn day001-nav-prev">← Day 162</Link>
          <p className="day001-datetime">Cloud Day 163 · 12 Jun 2027</p>
          <Link to="/day-164" className="day001-nav-btn day001-nav-next">Day 164 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>CI/CD</span><span>Year 1</span><span>GitHub Actions</span><span>Docker</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 163 <span aria-hidden="true">⚙️</span></h1>
              <p className="day001-day-theme">CI/CD WITH GITHUB ACTIONS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">CLOUD · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '46%' }} /></div>

        <p className="day001-summary">
          Day 163 automates the pipeline. <strong>Test on PRs</strong>,{' '}
          <strong>build and push</strong> images on main, keep <strong>secrets</strong> out of YAML, and
          tag images by <strong>commit SHA</strong>.
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

        <CardSection icon="⚙️" title="1 · WORKFLOWS" cards={CORE} columns={3} />
        <CardSection icon="🛡️" title="2 · PROTECTION & TAGS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GitHubActions</span><span>#CICD</span><span>#Docker</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
