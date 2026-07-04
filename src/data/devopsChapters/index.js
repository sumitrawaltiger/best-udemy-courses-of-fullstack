import { buildDevopsChapters } from '../chapterFactory.js';
import { devopsLessons } from '../devopsCurriculum.js';

export const devopsChapters = buildDevopsChapters(devopsLessons);

export function getDevopsChapterBySlug(slug) {
  return devopsChapters.find((c) => c.slug === slug);
}

export function searchDevopsChapters(query) {
  const q = query.toLowerCase().trim();
  if (!q) return devopsChapters;
  return devopsChapters.filter(
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
