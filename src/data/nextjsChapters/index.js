import { buildNextjsChapters } from '../chapterFactory.js';
import { nextjsLessons } from '../nextjsCurriculum.js';

export const nextjsChapters = buildNextjsChapters(nextjsLessons);

export function getNextjsChapterBySlug(slug) {
  return nextjsChapters.find((c) => c.slug === slug);
}

export function searchNextjsChapters(query) {
  const q = query.toLowerCase().trim();
  if (!q) return nextjsChapters;
  return nextjsChapters.filter(
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
