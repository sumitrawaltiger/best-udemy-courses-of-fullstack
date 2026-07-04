import { chaptersDays01to19 } from '../chaptersDays01to19.js';
import { chaptersDays20to100 } from '../chaptersDays20to100.js';
import { formatDate } from '../chapterFactory.js';

export const chapters = [...chaptersDays01to19, ...chaptersDays20to100].map((ch) => ({
  ...ch,
  createdOn: formatDate(ch.day),
}));

export function getChapterBySlug(slug) {
  return chapters.find((c) => c.slug === slug);
}

export function getChapterById(id) {
  return chapters.find((c) => c.id === id);
}

export function searchChapters(query) {
  const q = query.toLowerCase().trim();
  if (!q) return chapters;
  return chapters.filter(
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
