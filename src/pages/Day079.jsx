import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://linuxcommand.org/';
const EXPLAIN_URL = 'https://explainshell.com/';

const LEARNT_TODAY = [
  {
    title: 'Filesystem',
    text: 'navigate with cd, ls, pwd from / down',
  },
  {
    title: 'Files',
    text: 'cp, mv, rm, mkdir, cat, less, touch',
  },
  {
    title: 'Permissions',
    text: 'rwx for user/group/other via chmod, chown',
  },
  {
    title: 'Pipes & redirects',
    text: '| chains commands; > and >> write files',
  },
  {
    title: 'Search',
    text: 'grep for text, find for files',
  },
  {
    title: 'Processes',
    text: 'ps, top, kill to manage running programs',
  },
  {
    title: 'Packages',
    text: 'apt / yum / dnf install software',
  },
  {
    title: 'Env & PATH',
    text: 'export vars; configure in .bashrc',
  },
  {
    title: 'SSH',
    text: 'connect to remote servers securely',
  },
  {
    title: 'Shell scripts',
    text: '#!/bin/bash — variables, conditionals, loops',
  },
];

const SHELL = [
  {
    icon: '🗂️',
    title: 'Filesystem',
    titleClass: 'card-title-cyan',
    subtitle: 'move around',
    description: 'Everything is a file under a single tree from /.',
    code: 'pwd            # where am I\ncd /var/log    # go there\nls -lah        # list with details',
  },
  {
    icon: '📄',
    title: 'Files',
    titleClass: 'card-title-green',
    subtitle: 'create & edit',
    description: 'Make, copy, move, remove, and read files.',
    code: 'mkdir app && cd app\ncp a.txt b.txt · mv b.txt /tmp\ncat file · less file · rm -rf dir',
  },
  {
    icon: '🔒',
    title: 'Permissions',
    titleClass: 'card-title-amber',
    subtitle: 'rwx',
    description: 'Read/write/execute for owner, group, and others.',
    code: 'chmod 755 script.sh   # rwxr-xr-x\nchown user:group file',
  },
  {
    icon: '🔗',
    title: 'Pipes & Redirects',
    titleClass: 'card-title-pink',
    subtitle: 'compose',
    description: 'Pipe output into commands; redirect to files.',
    code: 'cat log | grep ERROR | wc -l\ncommand > out.txt   # or >> to append',
  },
];

const POWER = [
  {
    icon: '🔎',
    title: 'Search & Processes',
    titleClass: 'card-title-cyan',
    subtitle: 'find + manage',
    description: 'Search files and text; inspect and kill processes.',
    code: 'grep -r "TODO" .   ·   find . -name "*.log"\nps aux | grep node   ·   kill -9 <pid>',
  },
  {
    icon: '📦',
    title: 'Packages & SSH',
    titleClass: 'card-title-green',
    subtitle: 'install + connect',
    description: 'Install software and reach remote machines.',
    code: 'sudo apt update && sudo apt install nginx\nssh user@server-ip',
  },
  {
    icon: '📜',
    title: 'Shell Scripting',
    titleClass: 'card-title-amber',
    subtitle: 'automate',
    description: 'Bundle commands into a script with logic.',
    code: '#!/bin/bash\nfor f in *.txt; do echo "$f"; done',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'LinuxCommand.org',
    titleClass: 'card-title-green',
    subtitle: 'Reference',
    description: 'A friendly, complete intro to the Linux command line & scripting.',
    link: { href: DOCS_URL, label: 'Open the site →', external: true },
  },
  {
    icon: '🧪',
    title: 'explainshell',
    titleClass: 'card-title-purple',
    subtitle: 'Try it live',
    description: 'Paste any command and see what every flag does.',
    link: { href: EXPLAIN_URL, label: 'Open explainshell →', external: true },
  },
  {
    icon: '▶️',
    title: 'Linux Command Line',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Linux Command Line for Beginners by Keep On Coding — supplement for Day 79.',
    link: {
      href: 'https://www.youtube.com/watch?v=16d2lHc0Pe8',
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

export default function Day079() {
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
          <Link to="/day-078" className="day001-nav-btn day001-nav-home">
            ← Day 78
          </Link>
          <p className="day001-datetime">Thunder Day 79 · 20 Mar 2027</p>
          <Link to="/day-080" className="day001-nav-btn day001-nav-next">
            Day 80 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>DevOps</span>
              <span>Linux</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 79 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">LINUX & SHELL ESSENTIALS</p>
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
          <div className="day001-progress-bar" style={{ width: '79%' }} />
        </div>

        <p className="day001-summary">
          Day seventy-nine — servers run <strong>Linux</strong>, so the shell is home. I drilled the{' '}
          <strong>filesystem</strong> (cd/ls/pwd), <strong>file</strong> commands (cp/mv/rm/cat),{' '}
          <strong>permissions</strong> (chmod/chown), and <strong>pipes &amp; redirects</strong>{' '}
          (<code>|</code>, <code>&gt;</code>). Then the power tools — <strong>grep/find</strong>,{' '}
          <strong>process</strong> management, <strong>package</strong> installs, <strong>SSH</strong>{' '}
          into remote boxes, and writing <strong>bash scripts</strong> to automate it all. Reference:{' '}
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            LinuxCommand.org
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

        <CardSection icon="🐧" title="THE SHELL" cards={SHELL} columns={4} />
        <CardSection icon="🛠️" title="POWER TOOLS" cards={POWER} columns={3} />
        <CardSection icon="📚" title="LINUX RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#DevOps</span>
          <span>#Linux</span>
          <span>#Shell</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
