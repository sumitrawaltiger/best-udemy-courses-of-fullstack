import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { chapters } from '../data/chapters';
import { nextjsChapters } from '../data/nextjsChapters';
import { pythonChapters } from '../data/pythonChapters';
import { javaChapters } from '../data/javaChapters';
import { awsChapters } from '../data/awsChapters';
import { devopsChapters } from '../data/devopsChapters';
import { k8sChapters } from '../data/k8sChapters';
import { interviewChapters } from '../data/interviewChapters';
import { mobileChapters } from '../data/mobileChapters';
import { NEXTJS_MODULES, PYTHON_MODULES, JAVA_MODULES, AWS_DAYS, DEVOPS_DAYS, K8S_DAYS, INTERVIEW_MODULES, MOBILE_LESSONS } from '../data/trackConfig';

const TRACK_CONFIG = {
  thunder: {
    list: chapters,
    basePath: '/learn',
    heading: 'JavaScript Tutorial',
    dayLabel: (ch) => `Day ${ch.day}`,
    total: 100,
    unit: 'days',
    cssClass: '',
    activeClass: '',
    progressClass: '',
  },
  nextjs: {
    list: nextjsChapters,
    basePath: '/nextjs/learn',
    heading: 'React & Next.js',
    dayLabel: (ch) => `NX ${ch.nextDay}`,
    total: NEXTJS_MODULES,
    unit: 'modules',
    cssClass: 'sidebar-nextjs',
    activeClass: 'sidebar-link-nextjs',
    progressClass: 'progress-fill-nextjs',
  },
  python: {
    list: pythonChapters,
    basePath: '/python/learn',
    heading: 'Python & Agentic AI',
    dayLabel: (ch) => `PY ${ch.pyDay}`,
    total: PYTHON_MODULES,
    unit: 'modules',
    cssClass: 'sidebar-python',
    activeClass: 'sidebar-link-python',
    progressClass: 'progress-fill-python',
  },
  java: {
    list: javaChapters,
    basePath: '/java/learn',
    heading: 'Java & Spring',
    dayLabel: (ch) => `JV ${ch.javaDay}`,
    total: JAVA_MODULES,
    unit: 'modules',
    cssClass: 'sidebar-java',
    activeClass: 'sidebar-link-java',
    progressClass: 'progress-fill-java',
  },
  aws: {
    list: awsChapters,
    basePath: '/aws/learn',
    heading: '100 Days of AWS',
    dayLabel: (ch) => `Day ${ch.awsDay}`,
    total: AWS_DAYS,
    unit: 'days',
    cssClass: 'sidebar-aws',
    activeClass: 'sidebar-link-aws',
    progressClass: 'progress-fill-aws',
  },
  devops: {
    list: devopsChapters,
    basePath: '/devops/learn',
    heading: '100 Days of DevOps',
    dayLabel: (ch) => `Day ${ch.devopsDay}`,
    total: DEVOPS_DAYS,
    unit: 'days',
    cssClass: 'sidebar-devops',
    activeClass: 'sidebar-link-devops',
    progressClass: 'progress-fill-devops',
  },
  k8s: {
    list: k8sChapters,
    basePath: '/k8s/learn',
    heading: 'Kubernetes',
    dayLabel: (ch) => `Day ${ch.k8sDay}`,
    total: K8S_DAYS,
    unit: 'days',
    cssClass: 'sidebar-k8s',
    activeClass: 'sidebar-link-k8s',
    progressClass: 'progress-fill-k8s',
  },
  interview: {
    list: interviewChapters,
    basePath: '/interview/learn',
    heading: 'System Design',
    dayLabel: (ch) => `IP ${ch.interviewDay}`,
    total: INTERVIEW_MODULES,
    unit: 'modules',
    cssClass: 'sidebar-interview',
    activeClass: 'sidebar-link-interview',
    progressClass: 'progress-fill-interview',
  },
  mobile: {
    list: mobileChapters,
    basePath: '/mobile/learn',
    heading: 'React Native Tutorial',
    dayLabel: (ch) => `RN ${ch.rnDay}`,
    total: MOBILE_LESSONS,
    unit: 'lessons',
    cssClass: 'sidebar-mobile',
    activeClass: 'sidebar-link-mobile',
    progressClass: 'progress-fill-mobile',
  },
};

const INTERVIEW_PHASE_JUMPS = [
  { label: 'DSA', startDay: 1 },
  { label: 'System Design', startDay: 21 },
  { label: 'ChaiCode', startDay: 41 },
  { label: 'Mocks', startDay: 51 },
];

export default function Sidebar({ currentSlug, track = 'thunder' }) {
  const cfg = TRACK_CONFIG[track] || TRACK_CONFIG.thunder;
  const current = cfg.list.find((c) => c.slug === currentSlug);
  const activeRef = useRef(null);
  const navRef = useRef(null);
  const linkRefs = useRef({});

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth', inline: 'center' });
  }, [currentSlug]);

  function jumpToPhase(startDay) {
    const chapter = cfg.list.find((ch) => {
      if (track === 'interview') return ch.interviewDay === startDay;
      return false;
    });
    if (!chapter) return;
    const el = linkRefs.current[chapter.slug];
    el?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  }

  return (
    <aside className={`sidebar ${cfg.cssClass}`}>
      <div className="sidebar-section">
        <h3 className="sidebar-heading">{cfg.heading}</h3>
        {track === 'interview' && (
          <div className="sidebar-phase-jumps" aria-label="Interview phases">
            {INTERVIEW_PHASE_JUMPS.map((phase) => (
              <button
                key={phase.label}
                type="button"
                className="sidebar-phase-jump"
                onClick={() => jumpToPhase(phase.startDay)}
              >
                {phase.label}
              </button>
            ))}
          </div>
        )}
        <nav className="sidebar-nav" ref={navRef}>
          {cfg.list.map((ch) => (
            <NavLink
              key={ch.slug}
              ref={(node) => {
                if (ch.slug === currentSlug) activeRef.current = node;
                linkRefs.current[ch.slug] = node;
              }}
              to={`${cfg.basePath}/${ch.slug}`}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''} ${cfg.activeClass}`
              }
            >
              <span className="sidebar-day">{cfg.dayLabel(ch)}</span>
              <span className="sidebar-title">{ch.title}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {current && (
        <div className="sidebar-section sidebar-topics">
          <h3 className="sidebar-heading">In This Chapter</h3>
          <ul className="topic-list">
            {current.sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
            <li>
              <a href="#quiz">Quiz</a>
            </li>
          </ul>
        </div>
      )}

      <div className="sidebar-section sidebar-progress">
        <h3 className="sidebar-heading">Your Progress</h3>
        <div className="progress-bar">
          <div
            className={`progress-fill ${cfg.progressClass}`}
            style={{ width: `${(cfg.list.length / cfg.total) * 100}%` }}
          />
        </div>
        <p className="progress-text">
          {cfg.list.length} of {cfg.total} {cfg.unit} published
        </p>
      </div>
    </aside>
  );
}
