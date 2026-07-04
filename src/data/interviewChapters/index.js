import { buildInterviewChapters } from '../chapterFactory.js';
import { interviewLessons } from '../interviewCurriculum.js';

export const interviewChapters = buildInterviewChapters(interviewLessons);

export function getInterviewChapterBySlug(slug) {
  return interviewChapters.find((c) => c.slug === slug);
}

export function searchInterviewChapters(query) {
  const q = query.toLowerCase().trim();
  if (!q) return interviewChapters;
  return interviewChapters.filter(
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
