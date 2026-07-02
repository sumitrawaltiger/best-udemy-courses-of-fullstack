import { PAID_COURSE_URL, PAID_COURSE_LABEL } from './videoLinks.js';

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

export function buildChapter(entry, id) {
  const slug = entry.slug || slugify(entry.title);
  const topics = entry.topics?.length ? entry.topics : [entry.title];

  const sections =
    entry.sections ||
    topics.slice(0, 4).map((topic) => ({
      id: slugify(topic).slice(0, 48) || `section-${slug}`,
      title: topic,
      content: `Learn **${topic}** in Day ${entry.day} of Thunder: 100 Days of Code. ${entry.subtitle}`,
      code: entry.sampleCode,
      tryIt: entry.sampleTryIt || `console.log("Day ${entry.day}: ${entry.title}");`,
    }));

  const quiz = entry.quiz || [
    {
      question: `What is the main topic of Day ${entry.day}?`,
      options: [entry.title, 'HTML tables only', 'Linux kernel modules', 'Photoshop layers'],
      answer: 0,
      explanation: `Day ${entry.day} focuses on ${entry.title}.`,
    },
    {
      question: `Which Thunder phase includes this day?`,
      options: [entry.phase, 'Only Phase 7', 'Only Phase 1', 'Not part of Thunder'],
      answer: 0,
      explanation: `This day belongs to ${entry.phase}.`,
    },
  ];

  const chapter = {
    id,
    slug,
    day: entry.day,
    title: entry.title,
    subtitle: entry.subtitle,
    duration: entry.duration || '2 hrs',
    createdOn: formatDate(entry.day),
    status: 'published',
    topics,
    sections,
    quiz,
    youtubeUrl: entry.youtube.url,
    youtubeTitle: `${entry.youtube.title} — ${entry.youtube.channel}`,
    paidLectureUrl: PAID_COURSE_URL,
    paidLectureLabel: PAID_COURSE_LABEL,
  };

  if (entry.githubPath) chapter.githubPath = entry.githubPath;
  if (entry.notionUrl) chapter.notionUrl = entry.notionUrl;

  return chapter;
}

export function buildChaptersFromCurriculum(curriculum, startId = 20) {
  return curriculum.map((entry, index) => buildChapter(entry, startId + index));
}
