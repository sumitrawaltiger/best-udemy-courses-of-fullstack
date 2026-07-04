import { buildPythonChapters } from '../chapterFactory.js';
import { pythonLessons } from '../pythonCurriculum.js';

export const pythonChapters = buildPythonChapters(pythonLessons);

export function getPythonChapterBySlug(slug) {
  return pythonChapters.find((c) => c.slug === slug);
}

export function searchPythonChapters(query) {
  const q = query.toLowerCase().trim();
  if (!q) return pythonChapters;
  return pythonChapters.filter(
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
