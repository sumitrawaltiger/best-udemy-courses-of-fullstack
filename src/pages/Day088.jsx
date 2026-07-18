import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://developer.hashicorp.com/terraform/intro';
const REGISTRY_URL = 'https://registry.terraform.io/';

const LEARNT_TODAY = [
  {
    title: 'IaC',
    text: 'infrastructure defined and versioned as code',
  },
  {
    title: 'Declarative',
    text: 'describe the desired state, not the steps',
  },
  {
    title: 'Providers',
    text: 'plugins for AWS, GCP, Azure, and more',
  },
  {
    title: 'Resources',
    text: 'the infra objects to create (an EC2, a bucket)',
  },
  {
    title: 'init / plan / apply',
    text: 'the core Terraform workflow',
  },
  {
    title: 'State',
    text: 'a state file tracks what really exists',
  },
  {
    title: 'Variables & outputs',
    text: 'parameterize inputs, export values',
  },
  {
    title: 'Modules',
    text: 'reusable, composable infrastructure',
  },
  {
    title: 'Remote state',
    text: 'store state in S3 for team collaboration',
  },
  {
    title: 'Idempotent',
    text: 'apply is safe to run again — converges to state',
  },
];

const IAC = [
  {
    icon: '📜',
    title: 'Why IaC',
    titleClass: 'card-title-cyan',
    subtitle: 'code, not clicks',
    description: 'Provision infra reproducibly and review it like code.',
    code: '// no manual console clicking\n// git-tracked, peer-reviewed infrastructure',
  },
  {
    icon: '🔌',
    title: 'Providers & Resources',
    titleClass: 'card-title-green',
    subtitle: 'declare it',
    description: 'A provider talks to a cloud; resources are what you create.',
    code: 'provider "aws" { region = "ap-south-1" }\nresource "aws_instance" "web" { ami = "...", instance_type = "t3.micro" }',
  },
  {
    icon: '🔁',
    title: 'The Workflow',
    titleClass: 'card-title-amber',
    subtitle: 'init → plan → apply',
    description: 'Initialize, preview the diff, then apply it.',
    code: 'terraform init    # download providers\nterraform plan    # preview changes\nterraform apply   # make them real',
  },
  {
    icon: '🗂️',
    title: 'State',
    titleClass: 'card-title-pink',
    subtitle: 'source of truth',
    description: 'The state file maps config to real resources.',
    code: 'terraform.tfstate\n// diff = desired (code) vs actual (state)',
  },
];

const SCALE = [
  {
    icon: '🎚️',
    title: 'Variables & Outputs',
    titleClass: 'card-title-cyan',
    subtitle: 'parameterize',
    description: 'Inputs make configs reusable; outputs export values.',
    code: 'variable "instance_type" { default = "t3.micro" }\noutput "public_ip" { value = aws_instance.web.public_ip }',
  },
  {
    icon: '📦',
    title: 'Modules',
    titleClass: 'card-title-green',
    subtitle: 'reuse infra',
    description: 'Package resources into reusable modules.',
    code: 'module "vpc" {\n  source = "./modules/vpc"\n  cidr   = "10.0.0.0/16"\n}',
  },
  {
    icon: '☁️',
    title: 'Remote State',
    titleClass: 'card-title-amber',
    subtitle: 'for teams',
    description: 'Share state via a backend, with locking.',
    code: 'backend "s3" {\n  bucket = "tf-state", key = "app/terraform.tfstate"\n}',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'Terraform Intro',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'HashiCorp’s intro to Terraform — providers, state, and workflow.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🧩',
    title: 'Terraform Registry',
    titleClass: 'card-title-purple',
    subtitle: 'Modules & providers',
    description: 'Thousands of ready-made providers and reusable modules.',
    link: { href: REGISTRY_URL, label: 'Browse the registry →', external: true },
  },
  {
    icon: '▶️',
    title: 'Terraform in 15 min',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Terraform Explained in 15 Minutes by TechWorld with Nana — for Day 88.',
    link: {
      href: 'https://www.youtube.com/watch?v=l5k1ai_GBDE',
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

export default function Day088() {
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
          <Link to="/day-087" className="day001-nav-btn day001-nav-home">
            ← Day 87
          </Link>
          <p className="day001-datetime">Thunder Day 88 · 19 Oct 2026</p>
          <Link to="/day-089" className="day001-nav-btn day001-nav-next">
            Day 89 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>DevOps</span>
              <span>Terraform</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 88 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">INFRASTRUCTURE AS CODE — TERRAFORM</p>
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
              <p className="day001-profile-role">DEVOPS</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '88%' }} />
        </div>

        <p className="day001-summary">
          Day eighty-eight — stop clicking in consoles: define infra as code with{' '}
          <strong>Terraform</strong>. It’s <strong>declarative</strong> — <strong>providers</strong>{' '}
          talk to clouds and <strong>resources</strong> describe what to create. The workflow is{' '}
          <code>init → plan → apply</code>, with a <strong>state file</strong> as the source of
          truth. Parameterize with <strong>variables/outputs</strong>, package reusable{' '}
          <strong>modules</strong>, and share <strong>remote state</strong> for teams — all{' '}
          <strong>idempotent</strong>. Reference:{' '}
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Terraform intro
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

        <CardSection icon="📜" title="IaC & TERRAFORM" cards={IAC} columns={4} />
        <CardSection icon="📈" title="SCALE IT" cards={SCALE} columns={3} />
        <CardSection icon="📚" title="TERRAFORM RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#DevOps</span>
          <span>#Terraform</span>
          <span>#IaC</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
