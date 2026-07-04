import { PAID_COURSE_URL, PAID_COURSE_LABEL } from './videoLinks.js';
import {
  TRACK_OFFSETS,
  NEXTJS_UDEMY_URL,
  MOBILE_COHORT_URL,
  ASHOK_IT_URL,
  KODEKLOUD_CLOUD_URL,
  KODEKLOUD_DEVOPS_URL,
} from './trackConfig.js';

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const COURSE_START = new Date(2026, 6, 1); // 1 Jul 2026 — Day 1

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
      question: `What is the main topic of ${meta.quizPrefix()}${['aws', 'devops', 'thunder'].includes(track) ? 'Day' : 'Module'} ${dayNum}?`,
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
    pyDay: entry.pyDay,
    awsDay: entry.awsDay,
    devopsDay: entry.devopsDay,
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

  return chapter;
}

export function buildChaptersFromCurriculum(curriculum, startId = 20, options = {}) {
  return curriculum.map((entry, index) => buildChapter(entry, startId + index, options));
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

export function buildMobileChapters(curriculum) {
  return curriculum.map((entry, index) =>
    buildChapter(entry, index + 1, { track: 'mobile' }),
  );
}
