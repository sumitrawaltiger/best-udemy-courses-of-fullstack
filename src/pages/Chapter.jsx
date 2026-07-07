import { Link, useParams, Navigate } from 'react-router-dom';
import { getChapterBySlug, chapters } from '../data/chapters';
import { getNextjsChapterBySlug, nextjsChapters } from '../data/nextjsChapters';
import { getPythonChapterBySlug, pythonChapters } from '../data/pythonChapters';
import { getJavaChapterBySlug, javaChapters } from '../data/javaChapters';
import { getAwsChapterBySlug, awsChapters } from '../data/awsChapters';
import { getDevopsChapterBySlug, devopsChapters } from '../data/devopsChapters';
import { getK8sChapterBySlug, k8sChapters } from '../data/k8sChapters';
import { getInterviewChapterBySlug, interviewChapters } from '../data/interviewChapters';
import { getMobileChapterBySlug, mobileChapters } from '../data/mobileChapters';
import { thunderRepo } from '../data/syllabus';
import { NEXTJS_META } from '../data/nextjsSyllabus';
import { PYTHON_META } from '../data/pythonSyllabus';
import { JAVA_META } from '../data/javaSyllabus';
import { AWS_META } from '../data/awsSyllabus';
import { DEVOPS_META } from '../data/devopsSyllabus';
import { K8S_META } from '../data/k8sSyllabus';
import { INTERVIEW_META } from '../data/interviewSyllabus';
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
  java: {
    getChapter: getJavaChapterBySlug,
    list: () => javaChapters,
    homePath: '/java',
    learnPath: '/java/learn',
    cssClass: 'chapter-java',
    codeRepo: null,
    codeLabel: 'Course Code',
    lessonLabel: 'Module',
    extraLink: { href: JAVA_META.primaryUdemyUrl, label: '🎬 Udemy — Java Course' },
    banner: {
      title: 'Watch the full Udemy lecture?',
      text: 'Get all video lessons, exercises, and projects on Udemy for this Java & Spring module.',
      cta: 'Open on Udemy →',
      btnClass: 'btn-java-udemy',
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
  k8s: {
    getChapter: getK8sChapterBySlug,
    list: () => k8sChapters,
    homePath: '/k8s',
    learnPath: '/k8s/learn',
    cssClass: 'chapter-k8s',
    codeRepo: null,
    codeLabel: 'Lab Code',
    lessonLabel: 'Day',
    extraLink: { href: K8S_META.playgroundsUrl, label: '🧪 K8s Playgrounds' },
    banner: {
      title: 'Ready for today\'s Kubernetes lab?',
      text: 'Practice in KodeKloud playgrounds, studio labs, and challenges with real cluster environments.',
      cta: 'Open Playgrounds →',
      btnClass: 'btn-k8s-kodekloud',
    },
  },
  interview: {
    getChapter: getInterviewChapterBySlug,
    list: () => interviewChapters,
    homePath: '/interview',
    learnPath: '/interview/learn',
    cssClass: 'chapter-interview',
    codeRepo: null,
    codeLabel: 'Practice Code',
    lessonLabel: 'Module',
    extraLink: { href: INTERVIEW_META.gfgDsaUrl, label: '💚 GeeksForGeeks DSA' },
    banner: {
      title: 'Practice on GeeksForGeeks?',
      text: 'Solve DSA problems and system design modules on your GfG paid course portal.',
      cta: 'Open GfG DSA →',
      btnClass: 'btn-interview-gfg',
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

function renderInlineMarkdown(text, keyPrefix) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (!part) return null;
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={`${keyPrefix}-${i}`}>{part.slice(1, -1)}</code>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const external = /^https?:\/\//.test(href);
      return (
        <a
          key={`${keyPrefix}-${i}`}
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {label}
        </a>
      );
    }
    return <span key={`${keyPrefix}-${i}`}>{part}</span>;
  });
}

function renderMarkdown(text) {
  if (!text) return null;
  return text.split('\n').map((line, j, arr) => (
    <span key={j}>
      {renderInlineMarkdown(line, j)}
      {j < arr.length - 1 && <br />}
    </span>
  ));
}

function getYoutubeEmbedUrl(url) {
  if (!url) return '';
  const id = url.match(/[?&]v=([^&]+)/)?.[1];
  const startMatch = url.match(/[?&]t=(\d+)(s)?/);
  const start = startMatch ? startMatch[1] : null;
  if (!id) return '';
  return `https://www.youtube.com/embed/${id}${start ? `?start=${start}` : ''}`;
}

function dayLabel(chapter, track) {
  if (track === 'mobile') return `RN Day ${chapter.rnDay}`;
  if (track === 'devops') return `DevOps Day ${chapter.devopsDay}`;
  if (track === 'k8s') return `K8s Day ${chapter.k8sDay}`;
  if (track === 'interview') return `IP Module ${chapter.interviewDay}`;
  if (track === 'aws') return `AWS Day ${chapter.awsDay}`;
  if (track === 'java') return `JV Module ${chapter.javaDay}`;
  if (track === 'nextjs') return `NX Module ${chapter.nextDay}`;
  if (track === 'python') return `PY Module ${chapter.pyDay}`;
  return `Day ${chapter.day}`;
}

function introClass(track) {
  if (track === 'mobile') return 'chapter-intro-mobile';
  if (track === 'devops') return 'chapter-intro-devops';
  if (track === 'k8s') return 'chapter-intro-k8s';
  if (track === 'interview') return 'chapter-intro-interview';
  if (track === 'aws') return 'chapter-intro-aws';
  if (track === 'java') return 'chapter-intro-java';
  if (track === 'nextjs') return 'chapter-intro-nextjs';
  if (track === 'python') return 'chapter-intro-python';
  return '';
}

function badgeClass(track) {
  if (track === 'mobile') return 'chapter-badge-mobile';
  if (track === 'devops') return 'chapter-badge-devops';
  if (track === 'k8s') return 'chapter-badge-k8s';
  if (track === 'interview') return 'chapter-badge-interview';
  if (track === 'aws') return 'chapter-badge-aws';
  if (track === 'java') return 'chapter-badge-java';
  if (track === 'nextjs') return 'chapter-badge-nextjs';
  if (track === 'python') return 'chapter-badge-python';
  return '';
}

function paidClass(track) {
  if (track === 'mobile') return 'paid-mobile';
  if (track === 'devops') return 'paid-devops';
  if (track === 'k8s') return 'paid-k8s';
  if (track === 'interview') return 'paid-interview';
  if (track === 'aws') return 'paid-aws';
  if (track === 'java') return 'paid-java';
  if (track === 'nextjs') return 'paid-nextjs';
  if (track === 'python') return 'paid-python';
  return '';
}

function bannerClass(track) {
  if (track === 'mobile') return 'paid-lecture-banner-mobile';
  if (track === 'devops') return 'paid-lecture-banner-devops';
  if (track === 'k8s') return 'paid-lecture-banner-k8s';
  if (track === 'interview') return 'paid-lecture-banner-interview';
  if (track === 'aws') return 'paid-lecture-banner-aws';
  if (track === 'java') return 'paid-lecture-banner-java';
  if (track === 'nextjs') return 'paid-lecture-banner-nextjs';
  if (track === 'python') return 'paid-lecture-banner-python';
  return '';
}

function sectionNumClass(track) {
  if (track === 'mobile') return 'section-num-mobile';
  if (track === 'devops') return 'section-num-devops';
  if (track === 'k8s') return 'section-num-k8s';
  if (track === 'interview') return 'section-num-interview';
  if (track === 'aws') return 'section-num-aws';
  if (track === 'java') return 'section-num-java';
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
          {chapter.notionUrl && (
            <a href={chapter.notionUrl} target="_blank" rel="noopener noreferrer" className="chapter-link-btn">
              📝{' '}
              {track === 'thunder'
                ? 'Notion Notes'
                : track === 'nextjs'
                ? 'Udemy Course'
                : track === 'python'
                  ? 'Ashok IT Portal'
                  : track === 'java'
                    ? 'Udemy Course'
                    : track === 'aws'
                    ? 'CloudFolks Course'
                    : track === 'devops'
                      ? 'CloudFolks DevOps'
                      : track === 'k8s'
                        ? 'KodeKloud K8s'
                        : track === 'interview'
                          ? 'ChaiCode Interview'
                          : track === 'mobile'
                            ? 'Notion Notes'
                            : 'My Notion Notes'}
            </a>
          )}
          {chapter.tldrawUrl && (
            <a
              href={chapter.tldrawUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="chapter-link-btn outline"
            >
              📐 Lecture Whiteboard
            </a>
          )}
          {chapter.pdfUrl && (
            <a
              href={chapter.pdfUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="chapter-link-btn outline"
            >
              📄 {chapter.pdfLabel || 'Download PDF Notes'}
            </a>
          )}
          {chapter.extraLinks?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="chapter-link-btn outline"
            >
              {link.icon ? `${link.icon} ` : ''}
              {link.label}
            </a>
          ))}
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

      {chapter.image && (
        <figure className="chapter-image">
          <a href={chapter.image} target="_blank" rel="noopener noreferrer">
            <img src={chapter.image} alt={chapter.imageAlt || `${chapter.title} visual note`} loading="lazy" />
          </a>
          <figcaption>Visual note — click to open full size</figcaption>
        </figure>
      )}

      {chapter.sections.map((section, index) => (
        <section key={section.id} id={section.id} className="chapter-section">
          <h2>
            <span className={`section-num ${sectionNumClass(track)}`}>{index + 1}</span>
            {section.title}
          </h2>
          <div className="section-content">{renderMarkdown(section.content)}</div>
          {section.code && <CodeBlock code={section.code} />}
          {section.image && (
            <figure className="chapter-image section-image">
              <a href={section.image} target="_blank" rel="noopener noreferrer">
                <img
                  src={section.image}
                  alt={section.imageAlt || `${section.title} diagram`}
                  loading="lazy"
                />
              </a>
              <figcaption>Click to open full size</figcaption>
            </figure>
          )}
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
