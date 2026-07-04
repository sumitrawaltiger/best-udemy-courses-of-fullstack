import { buildMobileChapters } from '../chapterFactory.js';
import { mobileLessons } from '../mobileCurriculum.js';

export const mobileChapters = buildMobileChapters(mobileLessons);

export function getMobileChapterBySlug(slug) {
  return mobileChapters.find((c) => c.slug === slug);
}

export function searchMobileChapters(query) {
  const q = query.toLowerCase().trim();
  if (!q) return mobileChapters;
  return mobileChapters.filter(
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
