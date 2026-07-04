import { buildJavaChapters } from '../chapterFactory.js';
import { javaLessons } from '../javaCurriculum.js';

export const javaChapters = buildJavaChapters(javaLessons);

export function getJavaChapterBySlug(slug) {
  return javaChapters.find((c) => c.slug === slug);
}

export function searchJavaChapters(query) {
  const q = query.toLowerCase().trim();
  if (!q) return javaChapters;
  return javaChapters.filter(
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
