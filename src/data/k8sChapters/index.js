import { buildK8sChapters } from '../chapterFactory.js';
import { k8sLessons } from '../k8sCurriculum.js';

export const k8sChapters = buildK8sChapters(k8sLessons);

export function getK8sChapterBySlug(slug) {
  return k8sChapters.find((c) => c.slug === slug);
}

export function searchK8sChapters(query) {
  const q = query.toLowerCase().trim();
  if (!q) return k8sChapters;
  return k8sChapters.filter(
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
