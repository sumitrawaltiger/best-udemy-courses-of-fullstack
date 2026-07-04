import { Link, useParams, Navigate } from 'react-router-dom';
import { getChapterBySlug, chapters } from '../data/chapters';
import { getNextjsChapterBySlug, nextjsChapters } from '../data/nextjsChapters';
import { getPythonChapterBySlug, pythonChapters } from '../data/pythonChapters';
import { getAwsChapterBySlug, awsChapters } from '../data/awsChapters';
import { getDevopsChapterBySlug, devopsChapters } from '../data/devopsChapters';
import { getMobileChapterBySlug, mobileChapters } from '../data/mobileChapters';
import { thunderRepo } from '../data/syllabus';
import { NEXTJS_META } from '../data/nextjsSyllabus';
import { PYTHON_META } from '../data/pythonSyllabus';
import { AWS_META } from '../data/awsSyllabus';
import { DEVOPS_META } from '../data/devopsSyllabus';
import { MOBILE_META } from '../data/mobileSyllabus';
import CodeBlock from '../components/CodeBlock';
import CodePlayground from '../components/CodePlayground';
import Quiz from '../components/Quiz';

const TRACKS = {
  thunder: {
    getChapter: getChapterBySlug,
    list: () => chapters,
    homePath: '/',
    learnPath: '/learn',
    cssClass: '',
    codeRepo: thunderRepo,
    codeLabel: 'Thunder Code',
    lessonLabel: 'Lecture',
  },
  nextjs: {
    getChapter: getNextjsChapterBySlug,
    list: () => nextjsChapters,
    homePath: '/nextjs',
    learnPath: '/nextjs/learn',
    cssClass: 'chapter-nextjs',
    codeRepo: null,
    codeLabel: 'Course Code',
    lessonLabel: 'Module',
    extraLink: { href: NEXTJS_META.udemyUrl, label: '🎬 Udemy Course' },
    banner: {
      title: 'Want the full 95-hour course?',
      text: 'Get all 44 sections, projects, and AI builds on Udemy with Hitesh Choudhary & Suraj Kumar Jha.',
      cta: 'Open on Udemy →',
      btnClass: 'btn-nextjs-udemy',
    },
  },
  python: {
    getChapter: getPythonChapterBySlug,
    list: () => pythonChapters,
    homePath: '/python',
    learnPath: '/python/learn',
    cssClass: 'chapter-python',
    codeRepo: null,
    codeLabel: 'Course Code',
    lessonLabel: 'Module',
    extraLink: { href: PYTHON_META.portalUrl, label: '🏫 Ashok IT Portal' },
    banner: {
      title: 'Access full class notes?',
      text: 'Download notes and watch recordings on the Ashok IT student portal.',
      cta: 'Open Ashok IT Portal →',
      btnClass: 'btn-python-portal',
    },
  },
  aws: {
    getChapter: getAwsChapterBySlug,
    list: () => awsChapters,
    homePath: '/aws',
    learnPath: '/aws/learn',
    cssClass: 'chapter-aws',
    codeRepo: null,
    codeLabel: 'Lab Code',
    lessonLabel: 'Day',
    extraLink: { href: AWS_META.cloudfolksCourseUrl, label: '🏆 CloudFolks Hub' },
    banner: {
      title: 'Ready for today\'s cloud task?',
      text: 'Complete hands-on tasks on KodeKloud with automated validation in real AWS consoles.',
      cta: 'Open KodeKloud →',
      btnClass: 'btn-aws-kodekloud',
    },
  },
  devops: {
    getChapter: getDevopsChapterBySlug,
    list: () => devopsChapters,
    homePath: '/devops',
    learnPath: '/devops/learn',
    cssClass: 'chapter-devops',
    codeRepo: null,
    codeLabel: 'Lab Code',
    lessonLabel: 'Day',
    extraLink: { href: DEVOPS_META.cloudfolksUrl, label: '🏆 CloudFolks DevOps' },
    banner: {
      title: 'Ready for today\'s DevOps task?',
      text: 'Complete hands-on tasks on KodeKloud — Git, Docker, K8s, and real pipelines with automated validation.',
      cta: 'Open KodeKloud →',
      btnClass: 'btn-devops-kodekloud',
    },
  },
  mobile: {
    getChapter: getMobileChapterBySlug,
    list: () => mobileChapters,
    homePath: '/mobile',
    learnPath: '/mobile/learn',
    cssClass: 'chapter-mobile',
    codeRepo: MOBILE_META.githubRepo,
    codeLabel: 'ChaiCode Code',
    lessonLabel: 'Lesson',
    extraLink: { href: MOBILE_META.syllabusUrl, label: '📋 ChaiCode Syllabus' },
    banner: {
      title: 'Join the full cohort?',
      text: 'Get live classes, recordings, and community access on ChaiCode.',
      cta: 'Enroll on ChaiCode →',
      btnClass: 'btn-mobile-cohort',
    },
  },
};

function renderMarkdown(text) {
  if (!text) return null;
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i}>{part.slice(1, -1)}</code>;
    }
    return part.split('\n').map((line, j, arr) => (
      <span key={`${i}-${j}`}>
        {line}
        {j < arr.length - 1 && <br />}
      </span>
    ));
  });
}

function getYoutubeEmbedUrl(url) {
  if (!url) return '';
  const id = url.match(/[?&]v=([^&]+)/)?.[1];
  const start = url.match(/[?&]t=(\d+)/)?.[1];
  if (!id) return '';
  return `https://www.youtube.com/embed/${id}${start ? `?start=${start}` : ''}`;
}

function dayLabel(chapter, track) {
  if (track === 'mobile') return `RN Day ${chapter.rnDay}`;
  if (track === 'devops') return `DevOps Day ${chapter.devopsDay}`;
  if (track === 'aws') return `AWS Day ${chapter.awsDay}`;
  if (track === 'nextjs') return `NX Module ${chapter.nextDay}`;
  if (track === 'python') return `PY Module ${chapter.pyDay}`;
  return `Day ${chapter.day}`;
}

function introClass(track) {
  if (track === 'mobile') return 'chapter-intro-mobile';
  if (track === 'devops') return 'chapter-intro-devops';
  if (track === 'aws') return 'chapter-intro-aws';
  if (track === 'nextjs') return 'chapter-intro-nextjs';
  if (track === 'python') return 'chapter-intro-python';
  return '';
}

function badgeClass(track) {
  if (track === 'mobile') return 'chapter-badge-mobile';
  if (track === 'devops') return 'chapter-badge-devops';
  if (track === 'aws') return 'chapter-badge-aws';
  if (track === 'nextjs') return 'chapter-badge-nextjs';
  if (track === 'python') return 'chapter-badge-python';
  return '';
}

function paidClass(track) {
  if (track === 'mobile') return 'paid-mobile';
  if (track === 'devops') return 'paid-devops';
  if (track === 'aws') return 'paid-aws';
  if (track === 'nextjs') return 'paid-nextjs';
  if (track === 'python') return 'paid-python';
  return '';
}

function bannerClass(track) {
  if (track === 'mobile') return 'paid-lecture-banner-mobile';
  if (track === 'devops') return 'paid-lecture-banner-devops';
  if (track === 'aws') return 'paid-lecture-banner-aws';
  if (track === 'nextjs') return 'paid-lecture-banner-nextjs';
  if (track === 'python') return 'paid-lecture-banner-python';
  return '';
}

function sectionNumClass(track) {
  if (track === 'mobile') return 'section-num-mobile';
  if (track === 'devops') return 'section-num-devops';
  if (track === 'aws') return 'section-num-aws';
  if (track === 'nextjs') return 'section-num-nextjs';
  if (track === 'python') return 'section-num-python';
  return '';
}

export default function Chapter({ track = 'thunder' }) {
  const { slug } = useParams();
  const cfg = TRACKS[track] || TRACKS.thunder;
  const chapter = cfg.getChapter(slug);
  const list = cfg.list();
  const isAlt = track !== 'thunder';

  if (!chapter) {
    return <Navigate to={cfg.homePath} replace />;
  }

  const prevChapter = list.find((c) => c.id === chapter.id - 1);
  const nextChapter = list.find((c) => c.id === chapter.id + 1);
  const label = dayLabel(chapter, track);
  const banner = cfg.banner;

  return (
    <article className={`chapter ${cfg.cssClass}`}>
      <header className="chapter-header">
        <div className="chapter-breadcrumb">
          <Link to={cfg.homePath}>Home</Link>
          <span>/</span>
          <span>{label}</span>
        </div>
        <div className={`chapter-badge ${badgeClass(track)}`}>
          {label} · {cfg.lessonLabel} {String(chapter.id).padStart(2, '0')}
        </div>
        <h1>{chapter.title}</h1>
        <p className="chapter-subtitle">{chapter.subtitle}</p>
        <div className="chapter-meta">
          <span>📅 {chapter.createdOn}</span>
          <span>⏱ {chapter.duration}</span>
          <span>📚 {chapter.sections.length} sections</span>
        </div>
        <div className="chapter-links">
          {chapter.paidLectureUrl && (
            <a
              href={chapter.paidLectureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`chapter-link-btn paid ${paidClass(track)}`}
            >
              🎓 {chapter.paidLectureLabel || 'Full In-Depth Lecture'}
            </a>
          )}
          {chapter.youtubeUrl && (
            <a
              href={chapter.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="chapter-link-btn youtube"
              title={chapter.youtubeTitle}
            >
              ▶ Free on YouTube
            </a>
          )}
          {chapter.notionUrl && track !== 'thunder' && (
            <a href={chapter.notionUrl} target="_blank" rel="noopener noreferrer" className="chapter-link-btn">
              📝{' '}
              {track === 'nextjs'
                ? 'Udemy Course'
                : track === 'python'
                  ? 'Ashok IT Portal'
                  : track === 'aws'
                    ? 'CloudFolks Course'
                    : track === 'devops'
                      ? 'CloudFolks DevOps'
                      : 'My Notion Notes'}
            </a>
          )}
          {cfg.extraLink && (
            <a
              href={cfg.extraLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="chapter-link-btn outline"
            >
              {cfg.extraLink.label}
            </a>
          )}
          {chapter.githubPath && (
            <a
              href={`${chapter.codeRepo || cfg.codeRepo}/${chapter.githubPath}`}
              target="_blank"
              rel="noopener noreferrer"
              className="chapter-link-btn outline"
            >
              💻 {cfg.codeLabel}
            </a>
          )}
        </div>
        {chapter.paidLectureUrl && (
          <div className={`paid-lecture-banner ${bannerClass(track)}`}>
            <div className="paid-lecture-text">
              <strong>{banner?.title || 'Want the full depth?'}</strong>
              <span>
                {banner?.text ||
                  'Watch the complete Thunder lecture with Rohit Negi on the course portal (login required).'}
              </span>
            </div>
            <a
              href={chapter.paidLectureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${banner?.btnClass || 'btn-paid'}`}
            >
              {banner?.cta || 'Open Full Lecture →'}
            </a>
          </div>
        )}
        {chapter.youtubeUrl && (
          <div className="youtube-block">
            <div className="youtube-block-header">
              <span>📺 Free Video — {label}</span>
              <span className="youtube-block-title">{chapter.youtubeTitle}</span>
            </div>
            <div className="youtube-embed-wrap">
              <iframe
                src={getYoutubeEmbedUrl(chapter.youtubeUrl)}
                title={chapter.youtubeTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </header>

      <div className={`chapter-intro ${introClass(track)}`}>
        <h2>What you'll learn</h2>
        <ul className="learn-list">
          {chapter.topics.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      {chapter.sections.map((section, index) => (
        <section key={section.id} id={section.id} className="chapter-section">
          <h2>
            <span className={`section-num ${sectionNumClass(track)}`}>{index + 1}</span>
            {section.title}
          </h2>
          <div className="section-content">{renderMarkdown(section.content)}</div>
          {section.code && <CodeBlock code={section.code} />}
          {section.tryIt && <CodePlayground initialCode={section.tryIt} />}
        </section>
      ))}

      <section id="quiz" className="chapter-section">
        <Quiz questions={chapter.quiz} />
      </section>

      <nav className="chapter-nav">
        {prevChapter ? (
          <Link to={`${cfg.learnPath}/${prevChapter.slug}`} className="nav-prev">
            <span className="nav-label">← Previous</span>
            <span className="nav-title">
              {dayLabel(prevChapter, track)}: {prevChapter.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {nextChapter ? (
          <Link to={`${cfg.learnPath}/${nextChapter.slug}`} className="nav-next">
            <span className="nav-label">Next →</span>
            <span className="nav-title">
              {dayLabel(nextChapter, track)}: {nextChapter.title}
            </span>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
