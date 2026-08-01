import { searchChapters } from './chapters';
import { searchJavaChapters } from './javaChapters';
import { searchPythonChapters } from './pythonChapters';
import { searchGenaiChapters } from './genaiChapters';
import { searchDevopsChapters } from './devopsChapters';
import { searchAwsChapters } from './awsChapters';
import { searchK8sChapters } from './k8sChapters';
import { searchNextjsChapters } from './nextjsChapters';

const TRACKS = [
  { search: searchJavaChapters,   basePath: '/java/learn',   dayPrefix: 'JV',  label: 'Java' },
  { search: searchPythonChapters, basePath: '/python/learn', dayPrefix: 'PY',  label: 'Python' },
  { search: searchGenaiChapters,  basePath: '/genai/learn',  dayPrefix: 'GEN', label: 'Gen AI' },
  { search: searchDevopsChapters, basePath: '/devops/learn', dayPrefix: 'DO',  label: 'DevOps' },
  { search: searchAwsChapters,    basePath: '/aws/learn',    dayPrefix: 'AWS', label: 'AWS' },
  { search: searchK8sChapters,    basePath: '/k8s/learn',    dayPrefix: 'K8S', label: 'Kubernetes' },
  { search: searchNextjsChapters, basePath: '/nextjs/learn', dayPrefix: 'NX',  label: 'Next.js' },
  { search: searchChapters,       basePath: '/learn',        dayPrefix: 'Day', label: 'JavaScript' },
];

export function searchAllCurricula(query) {
  if (!query || !query.trim()) return [];
  return TRACKS.flatMap(({ search, basePath, dayPrefix, label }) =>
    search(query).map((ch) => ({ ...ch, _basePath: basePath, _dayPrefix: dayPrefix, _track: label })),
  );
}
