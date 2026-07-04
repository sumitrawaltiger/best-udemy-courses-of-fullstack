import { buildAwsChapters } from '../chapterFactory.js';
import { awsLessons } from '../awsCurriculum.js';

export const awsChapters = buildAwsChapters(awsLessons);

export function getAwsChapterBySlug(slug) {
  return awsChapters.find((c) => c.slug === slug);
}

export function searchAwsChapters(query) {
  const q = query.toLowerCase().trim();
  if (!q) return awsChapters;
  return awsChapters.filter(
    (c) =>
      c.title.toLowerCase().includes(q) ||
      c.subtitle.toLowerCase().includes(q) ||
      c.topics.some((t) => t.toLowerCase().includes(q)) ||
      c.sections.some(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          (s.content && s.content.toLowerCase().includes(q)),
      ),
  );
}
