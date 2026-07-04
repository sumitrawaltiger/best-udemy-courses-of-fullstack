import { PAID_COURSE_URL, PAID_COURSE_LABEL } from './videoLinks.js';

const MOBILE_COHORT_URL = 'https://hitesh.ai/mobile-dev';

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const COURSE_START = new Date(2026, 6, 1); // 1 Jul 2026 — Day 1

function formatDate(day) {
  const d = new Date(COURSE_START);
  d.setDate(d.getDate() + (day - 1));
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export { formatDate };

export function buildChapter(entry, id, options = {}) {
  const { track = 'thunder' } = options;
  const slug = entry.slug || slugify(entry.title);
  const topics = entry.topics?.length ? entry.topics : [entry.title];
  const dayNum = entry.rnDay ?? entry.day;

  const sections =
    entry.sections ||
    topics.slice(0, 4).map((topic) => ({
      id: slugify(topic).slice(0, 48) || `section-${slug}`,
      title: topic,
      content:
        track === 'mobile'
          ? `Learn **${topic}** in RN Day ${dayNum} of Thunder++ — ChaiCode Mobile Cohort. ${entry.subtitle}`
          : `Learn **${topic}** in Day ${dayNum} of Thunder: 100 Days of Code. ${entry.subtitle}`,
      code: entry.sampleCode,
      tryIt:
        entry.sampleTryIt ||
        `console.log("${track === 'mobile' ? 'RN' : 'Day'} ${dayNum}: ${entry.title}");`,
    }));

  const quiz = entry.quiz || [
    {
      question: `What is the main topic of ${track === 'mobile' ? 'RN' : ''} Day ${dayNum}?`,
      options: [entry.title, 'HTML tables only', 'Linux kernel modules', 'Photoshop layers'],
      answer: 0,
      explanation: `${track === 'mobile' ? 'RN' : ''} Day ${dayNum} focuses on ${entry.title}.`,
    },
    {
      question: `Which phase includes this lesson?`,
      options: [entry.phase, 'Only DevOps', 'Only CSS', 'Not part of the cohort'],
      answer: 0,
      explanation: `This lesson belongs to ${entry.phase}.`,
    },
  ];

  const chapter = {
    id,
    slug,
    track,
    day: dayNum,
    rnDay: entry.rnDay,
    title: entry.title,
    subtitle: entry.subtitle,
    duration: entry.duration || '2 hrs',
    createdOn: formatDate(track === 'mobile' ? dayNum + 100 : dayNum),
    status: 'published',
    topics,
    sections,
    quiz,
    youtubeUrl: entry.youtube.url,
    youtubeTitle: `${entry.youtube.title} — ${entry.youtube.channel}`,
    paidLectureUrl: track === 'mobile' ? MOBILE_COHORT_URL : PAID_COURSE_URL,
    paidLectureLabel:
      track === 'mobile' ? 'ChaiCode Mobile Cohort' : PAID_COURSE_LABEL,
  };

  if (entry.githubPath) chapter.githubPath = entry.githubPath;
  if (entry.notionUrl) chapter.notionUrl = entry.notionUrl;
  if (entry.codeRepo) chapter.codeRepo = entry.codeRepo;

  return chapter;
}

export function buildChaptersFromCurriculum(curriculum, startId = 20, options = {}) {
  return curriculum.map((entry, index) => buildChapter(entry, startId + index, options));
}

export function buildMobileChapters(curriculum) {
  return curriculum.map((entry, index) =>
    buildChapter(entry, index + 1, { track: 'mobile' }),
  );
}
