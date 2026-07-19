import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutFounder.css';

const SKILLS = ['Java', 'Python', 'TypeScript', 'DevOps', 'Agentic AI'];

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lawyersumitrawal/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.65 21 11 21 14.1V21h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/sumitrawal',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.39-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
      </svg>
    ),
  },
  {
    label: 'Credly',
    href: 'https://www.credly.com/users/sumit-rawal658',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 1.5l2.9 1.68h3.35v3.35L21 10.4v3.35l-1.68 2.9v3.35h-3.35L12 22.5l-2.9-1.68H5.75v-3.35L4.07 13.6v-3.35l1.68-2.9V4h3.35zM12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6z" />
      </svg>
    ),
  },
];

export default function AboutFounder() {
  const [imgSrc, setImgSrc] = useState('/sumit-founder.jpg');

  return (
    <div className="gt-page">
      <div className="gt-shell">
        <div className="gt-top">
          <Link to="/" className="gt-back">← Back to Home</Link>
          <Link to="/" className="gt-close" aria-label="Close">✕</Link>
        </div>

        <div className="gt-avatar-wrap">
          <img
            src={imgSrc}
            alt="Sumit Rawal"
            className="gt-avatar"
            loading="lazy"
            onError={() => setImgSrc('/sumit-profile.png')}
          />
        </div>

        <h1 className="gt-title">Get in touch</h1>
        <hr className="gt-divider" />

        <p className="gt-bio">
          I'm <strong>Sumit Rawal</strong>, a full-stack engineer with{' '}
          <strong>12 years of experience</strong> crafting innovative solutions —
          driven by a passion for embracing new challenges and collaborating with
          visionary minds to bring transformative ideas to life.
        </p>

        <div className="gt-block">
          <p className="gt-label">Experience</p>
          <p className="gt-value">12 years building software, end to end</p>
        </div>

        <div className="gt-block">
          <p className="gt-label">Skills</p>
          <div className="gt-skills">
            {SKILLS.map((skill) => (
              <span key={skill} className="gt-skill">{skill}</span>
            ))}
          </div>
        </div>

        <div className="gt-block">
          <p className="gt-label">Social</p>
          <div className="gt-socials">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="gt-social"
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
