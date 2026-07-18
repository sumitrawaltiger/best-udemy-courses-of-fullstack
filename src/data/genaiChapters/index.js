import { buildGenaiChapters } from '../chapterFactory.js';
import { genaiLessons } from '../genaiCurriculum.js';

export const genaiChapters = buildGenaiChapters(genaiLessons);

export function getGenaiChapterBySlug(slug) {
  return genaiChapters.find((c) => c.slug === slug);
}

export function searchGenaiChapters(query) {
  const q = query.toLowerCase().trim();
  if (!q) return genaiChapters;
  return genaiChapters.filter(
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
