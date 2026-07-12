import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://aws.amazon.com/getting-started/';
const FREE_URL = 'https://aws.amazon.com/free/';

const LEARNT_TODAY = [
  {
    title: 'Cloud',
    text: 'on-demand compute & storage — no servers to own',
  },
  {
    title: 'Regions & AZs',
    text: 'global regions built from redundant availability zones',
  },
  {
    title: 'EC2',
    text: 'virtual servers you rent by the hour',
  },
  {
    title: 'S3',
    text: 'durable object storage for files and backups',
  },
  {
    title: 'IAM',
    text: 'users, roles, and policies — least privilege',
  },
  {
    title: 'VPC',
    text: 'your own private, isolated network',
  },
  {
    title: 'RDS',
    text: 'managed relational databases',
  },
  {
    title: 'Lambda',
    text: 'serverless functions — no server to manage',
  },
  {
    title: 'Pricing',
    text: 'pay-as-you-go, with a generous free tier',
  },
  {
    title: 'Shared responsibility',
    text: 'AWS secures the cloud; you secure what’s in it',
  },
];

const CORE = [
  {
    icon: '🖥️',
    title: 'EC2',
    titleClass: 'card-title-cyan',
    subtitle: 'compute',
    description: 'Launch virtual machines of any size, on demand.',
    code: '// pick an AMI + instance type\nt3.micro · Ubuntu · SSH in and run your app',
  },
  {
    icon: '🪣',
    title: 'S3',
    titleClass: 'card-title-green',
    subtitle: 'object storage',
    description: 'Store unlimited files with 11 nines of durability.',
    code: 's3://my-bucket/images/photo.jpg\n// static hosting, backups, uploads',
  },
  {
    icon: '🔑',
    title: 'IAM',
    titleClass: 'card-title-amber',
    subtitle: 'access',
    description: 'Grant least-privilege access with users, roles, policies.',
    code: '// role: read-only S3, nothing else\n// never use the root account daily',
  },
  {
    icon: '🕸️',
    title: 'VPC',
    titleClass: 'card-title-pink',
    subtitle: 'networking',
    description: 'A private network with subnets, routes, and security groups.',
    code: 'public subnet → load balancer\nprivate subnet → app + database',
  },
];

const MORE = [
  {
    icon: '🗄️',
    title: 'RDS & Lambda',
    titleClass: 'card-title-cyan',
    subtitle: 'managed + serverless',
    description: 'Managed databases; run code without servers.',
    code: 'RDS: Postgres/MySQL, backups + failover\nLambda: function runs on an event, scales to zero',
  },
  {
    icon: '🌍',
    title: 'Regions & AZs',
    titleClass: 'card-title-green',
    subtitle: 'resilience',
    description: 'Deploy across zones for high availability.',
    code: 'region: ap-south-1 (Mumbai)\nspread instances across 2–3 AZs',
  },
  {
    icon: '💳',
    title: 'Pricing & Model',
    titleClass: 'card-title-amber',
    subtitle: 'pay + secure',
    description: 'Pay for what you use; know the responsibility split.',
    code: 'free tier for a year · set billing alerts\nAWS: of the cloud · You: in the cloud',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'AWS Getting Started',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'AWS’ getting-started hub — core services and tutorials.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🆓',
    title: 'AWS Free Tier',
    titleClass: 'card-title-purple',
    subtitle: 'Practice free',
    description: 'Spin up EC2, S3, RDS, and Lambda within the free tier.',
    link: { href: FREE_URL, label: 'Open Free Tier →', external: true },
  },
  {
    icon: '▶️',
    title: 'AWS for Beginners',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'AWS Tutorial for Beginners — step-by-step by Kevin Stratvert — for Day 84.',
    link: {
      href: 'https://www.youtube.com/watch?v=Nzv-tzU-UAw',
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

export default function Day084() {
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
          <Link to="/day-083" className="day001-nav-btn day001-nav-home">
            ← Day 83
          </Link>
          <p className="day001-datetime">Thunder Day 84 · 26 Sep 2026</p>
          <Link to="/day-085" className="day001-nav-btn day001-nav-next">
            Day 85 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Cloud</span>
              <span>AWS</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 84 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">AWS CLOUD BASICS</p>
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
              <p className="day001-profile-role">AWS · CLOUD</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '84%' }} />
        </div>

        <p className="day001-summary">
          Day eighty-four — the <strong>cloud</strong> gives on-demand compute and storage across
          global <strong>regions</strong> and <strong>availability zones</strong>. The core AWS
          services: <strong>EC2</strong> (virtual servers), <strong>S3</strong> (object storage),{' '}
          <strong>IAM</strong> (least-privilege access), and <strong>VPC</strong> (private
          networking) — plus <strong>RDS</strong> and <strong>Lambda</strong>. It’s{' '}
          <strong>pay-as-you-go</strong> with a free tier, under a <strong>shared responsibility</strong>{' '}
          model. Reference:{' '}
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            AWS getting started
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

        <CardSection icon="☁️" title="CORE SERVICES" cards={CORE} columns={4} />
        <CardSection icon="🧩" title="MORE & THE MODEL" cards={MORE} columns={3} />
        <CardSection icon="📚" title="AWS RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#Cloud</span>
          <span>#AWS</span>
          <span>#DevOps</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
