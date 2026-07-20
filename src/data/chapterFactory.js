import { PAID_COURSE_URL, PAID_COURSE_LABEL } from './videoLinks.js';
import {
  TRACK_OFFSETS,
  NEXTJS_UDEMY_URL,
  MOBILE_COHORT_URL,
  ASHOK_IT_URL,
  KODEKLOUD_CLOUD_URL,
  KODEKLOUD_DEVOPS_URL,
  KODEKLOUD_K8S_PATH_URL,
  CHAICODE_INTERVIEW_URL,
  JAVA_UDEMY_COMPLETE_URL,
  GENAI_COURSE_URL,
} from './trackConfig.js';

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const COURSE_START = new Date(2026, 6, 20); // 20 Jul 2026 — Day 1 (Mon)

function formatDate(calendarDay) {
  const d = new Date(COURSE_START);
  d.setDate(d.getDate() + (calendarDay - 1));
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export { formatDate };

const TRACK_META = {
  thunder: {
    dayKey: 'day',
    label: 'Day',
    offset: TRACK_OFFSETS.thunder,
    paidUrl: PAID_COURSE_URL,
    paidLabel: PAID_COURSE_LABEL,
    sectionPrefix: (n) => `Day ${n} of Thunder: 100 Days of Code`,
    quizPrefix: () => '',
  },
  nextjs: {
    dayKey: 'nextDay',
    label: 'NX',
    offset: TRACK_OFFSETS.nextjs,
    paidUrl: NEXTJS_UDEMY_URL,
    paidLabel: 'Udemy — ChaiCode Course',
    sectionPrefix: (n) => `Module ${n} of Thunder+ React & Next.js`,
    quizPrefix: () => 'NX ',
    tryIt: (n, title) => `console.log("NX ${n}: ${title}");`,
  },
  genai: {
    dayKey: 'genaiDay',
    label: 'GEN',
    offset: TRACK_OFFSETS.genai,
    paidUrl: GENAI_COURSE_URL,
    paidLabel: 'LangChain.js Docs',
    sectionPrefix: (n) => `Module ${n} of GenAI Engineering with JavaScript`,
    quizPrefix: () => 'GEN ',
    tryIt: (n, title) => `console.log("GEN ${n}: ${title}");`,
  },
  python: {
    dayKey: 'pyDay',
    label: 'PY',
    offset: TRACK_OFFSETS.python,
    paidUrl: ASHOK_IT_URL,
    paidLabel: 'Ashok IT Student Portal',
    sectionPrefix: (n) => `Module ${n} of Thunder++ Python & Agentic AI`,
    quizPrefix: () => 'PY ',
    tryIt: (n, title) => `print("PY ${n}: ${title}")`,
  },
  java: {
    dayKey: 'javaDay',
    label: 'JV',
    offset: TRACK_OFFSETS.java,
    paidUrl: JAVA_UDEMY_COMPLETE_URL,
    paidLabel: 'Udemy — Java Course',
    sectionPrefix: (n) => `Module ${n} of Thunder++ Java & Spring`,
    quizPrefix: () => 'JV ',
    tryIt: (n, title) => `System.out.println("JV ${n}: ${title}");`,
  },
  aws: {
    dayKey: 'awsDay',
    label: 'AWS',
    offset: TRACK_OFFSETS.aws,
    paidUrl: KODEKLOUD_CLOUD_URL,
    paidLabel: 'KodeKloud 100 Days of Cloud',
    sectionPrefix: (n) => `Day ${n} of 100 Days of AWS Cloud`,
    quizPrefix: () => 'AWS ',
    tryIt: (n, title) => `# AWS Day ${n}: ${title}\nprint("Cloud task complete")`,
  },
  devops: {
    dayKey: 'devopsDay',
    label: 'DO',
    offset: TRACK_OFFSETS.devops,
    paidUrl: KODEKLOUD_DEVOPS_URL,
    paidLabel: 'KodeKloud 100 Days of DevOps',
    sectionPrefix: (n) => `Day ${n} of 100 Days of DevOps`,
    quizPrefix: () => 'DO ',
    tryIt: (n, title) => `# DevOps Day ${n}: ${title}\necho "Task complete"`,
  },
  k8s: {
    dayKey: 'k8sDay',
    label: 'K8S',
    offset: TRACK_OFFSETS.k8s,
    paidUrl: KODEKLOUD_K8S_PATH_URL,
    paidLabel: 'KodeKloud Kubernetes Path',
    sectionPrefix: (n) => `Day ${n} of Kubernetes Learning Path`,
    quizPrefix: () => 'K8S ',
    tryIt: (n, title) => `# K8s Day ${n}: ${title}\nkubectl get pods`,
  },
  interview: {
    dayKey: 'interviewDay',
    label: 'IP',
    offset: TRACK_OFFSETS.interview,
    paidUrl: CHAICODE_INTERVIEW_URL,
    paidLabel: 'ChaiCode Interview Prep',
    sectionPrefix: (n) => `Module ${n} of Interview Preparation`,
    quizPrefix: () => 'IP ',
    tryIt: (n, title) => `// IP ${n}: ${title}\nconsole.log("Practice problem");`,
  },
  mobile: {
    dayKey: 'rnDay',
    label: 'RN',
    offset: TRACK_OFFSETS.mobile,
    paidUrl: MOBILE_COHORT_URL,
    paidLabel: 'ChaiCode Mobile Cohort',
    sectionPrefix: (n) => `RN Day ${n} of Thunder++`,
    quizPrefix: () => 'RN ',
    tryIt: (n, title) => `console.log("RN ${n}: ${title}");`,
  },
};

// thunder default
TRACK_META.thunder.tryIt = (n, title) => `console.log("Day ${n}: ${title}");`;

function getDayNum(entry, track) {
  const key = TRACK_META[track].dayKey;
  return entry[key] ?? entry.day;
}

export function buildChapter(entry, id, options = {}) {
  const track = options.track || 'thunder';
  const meta = TRACK_META[track];
  const slug = entry.slug || slugify(entry.title);
  const topics = entry.topics?.length ? entry.topics : [entry.title];
  const dayNum = getDayNum(entry, track);
  const calendarDay = dayNum + meta.offset;

  const sections =
    entry.sections ||
    topics.slice(0, 4).map((topic) => ({
      id: slugify(topic).slice(0, 48) || `section-${slug}`,
      title: topic,
      content: `Learn **${topic}** in ${meta.sectionPrefix(dayNum)}. ${entry.subtitle}`,
      code: entry.sampleCode,
      tryIt:
        entry.sampleTryIt ||
        meta.tryIt(dayNum, entry.title),
    }));

  const quiz = entry.quiz || [
    {
      question: `What is the main topic of ${meta.quizPrefix()}${['aws', 'devops', 'k8s', 'thunder'].includes(track) ? 'Day' : 'Module'} ${dayNum}?`,
      options: [entry.title, 'HTML tables only', 'Linux kernel modules', 'Photoshop layers'],
      answer: 0,
      explanation: `${meta.quizPrefix()}Module ${dayNum} focuses on ${entry.title}.`,
    },
    {
      question: 'Which phase includes this module?',
      options: [entry.phase, 'Only DevOps', 'Only CSS', 'Not part of the course'],
      answer: 0,
      explanation: `This module belongs to ${entry.phase}.`,
    },
  ];

  const chapter = {
    id,
    slug,
    track,
    day: dayNum,
    nextDay: entry.nextDay,
    genaiDay: entry.genaiDay,
    pyDay: entry.pyDay,
    javaDay: entry.javaDay,
    awsDay: entry.awsDay,
    devopsDay: entry.devopsDay,
    k8sDay: entry.k8sDay,
    interviewDay: entry.interviewDay,
    rnDay: entry.rnDay,
    title: entry.title,
    subtitle: entry.subtitle,
    duration: entry.duration || '2 hrs',
    createdOn: formatDate(calendarDay),
    status: 'published',
    topics,
    sections,
    quiz,
    youtubeUrl: entry.youtube.url,
    youtubeTitle: `${entry.youtube.title} — ${entry.youtube.channel}`,
    paidLectureUrl: entry.paidLectureUrl || meta.paidUrl,
    paidLectureLabel: meta.paidLabel,
  };

  if (entry.githubPath) chapter.githubPath = entry.githubPath;
  if (entry.notionUrl) chapter.notionUrl = entry.notionUrl;
  if (entry.codeRepo) chapter.codeRepo = entry.codeRepo;
  if (entry.tldrawUrl) chapter.tldrawUrl = entry.tldrawUrl;
  if (entry.pdfUrl) chapter.pdfUrl = entry.pdfUrl;
  if (entry.pdfLabel) chapter.pdfLabel = entry.pdfLabel;
  if (entry.extraLinks) chapter.extraLinks = entry.extraLinks;
  if (entry.image) chapter.image = entry.image;
  if (entry.imageAlt) chapter.imageAlt = entry.imageAlt;

  return chapter;
}

export function buildChaptersFromCurriculum(curriculum, startId = 20, options = {}) {
  return curriculum.map((entry, index) => buildChapter(entry, startId + index, options));
}

export function buildGenaiChapters(curriculum) {
  return curriculum.map((entry, index) =>
    buildChapter(entry, index + 1, { track: 'genai' }),
  );
}

export function buildNextjsChapters(curriculum) {
  return curriculum.map((entry, index) =>
    buildChapter(entry, index + 1, { track: 'nextjs' }),
  );
}

export function buildPythonChapters(curriculum) {
  return curriculum.map((entry, index) =>
    buildChapter(entry, index + 1, { track: 'python' }),
  );
}

export function buildJavaChapters(curriculum) {
  return curriculum.map((entry, index) =>
    buildChapter(entry, index + 1, { track: 'java' }),
  );
}

export function buildAwsChapters(curriculum) {
  return curriculum.map((entry, index) =>
    buildChapter(entry, index + 1, { track: 'aws' }),
  );
}

export function buildDevopsChapters(curriculum) {
  return curriculum.map((entry, index) =>
    buildChapter(entry, index + 1, { track: 'devops' }),
  );
}

export function buildK8sChapters(curriculum) {
  return curriculum.map((entry, index) =>
    buildChapter(entry, index + 1, { track: 'k8s' }),
  );
}

export function buildInterviewChapters(curriculum) {
  return curriculum.map((entry, index) =>
    buildChapter(entry, index + 1, { track: 'interview' }),
  );
}

export function buildMobileChapters(curriculum) {
  return curriculum.map((entry, index) =>
    buildChapter(entry, index + 1, { track: 'mobile' }),
  );
}
