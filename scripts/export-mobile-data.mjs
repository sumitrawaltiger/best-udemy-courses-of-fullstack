// Exports the site's content into the two JSON files the mobile app bundles:
//   chapters.json — every track's data-driven chapters (/learn/:slug lessons)
//   days.json     — every bespoke DayNNN.jsx page (the Day Journal)
//
// Run from the web repo:   node scripts/export-mobile-data.mjs [--out <dir>]
// Default --out is the sibling mobile app's src/data.  Static imports resolve
// relative to THIS file, so it works from any cwd.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { chapters } from '../src/data/chapters/index.js';
import { nextjsChapters } from '../src/data/nextjsChapters/index.js';
import { genaiChapters } from '../src/data/genaiChapters/index.js';
import { pythonChapters } from '../src/data/pythonChapters/index.js';
import { javaChapters } from '../src/data/javaChapters/index.js';
import { awsChapters } from '../src/data/awsChapters/index.js';
import { devopsChapters } from '../src/data/devopsChapters/index.js';
import { k8sChapters } from '../src/data/k8sChapters/index.js';
import { interviewChapters } from '../src/data/interviewChapters/index.js';
import { mobileChapters } from '../src/data/mobileChapters/index.js';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');

// --out <dir>  (default: sibling mobile app)
const outFlag = process.argv.indexOf('--out');
const OUT_DIR = outFlag !== -1 && process.argv[outFlag + 1]
  ? path.resolve(process.argv[outFlag + 1])
  : path.resolve(ROOT, '../full-lifecycle-mobile/src/data');

if (!fs.existsSync(OUT_DIR)) {
  console.error(`Output dir not found: ${OUT_DIR}\nPass --out <dir> to point at the mobile app's src/data.`);
  process.exit(1);
}

// ---------- chapters ----------
function chapterDayLabel(c, track) {
  const map = { mobile: 'rnDay', devops: 'devopsDay', k8s: 'k8sDay', interview: 'interviewDay', aws: 'awsDay', java: 'javaDay', nextjs: 'nextDay', genai: 'genaiDay', python: 'pyDay' };
  const n = c[map[track]] ?? c.day;
  const prefix = { mobile: 'RN Day', devops: 'DevOps Day', k8s: 'K8s Day', interview: 'IP Module', aws: 'AWS Day', java: 'Module', nextjs: 'Module', genai: 'GenAI Module', python: 'Module' }[track] || 'Day';
  return `${prefix} ${n}`;
}

function exportChapters() {
  const TRACKS = { thunder: chapters, nextjs: nextjsChapters, genai: genaiChapters, python: pythonChapters, java: javaChapters, aws: awsChapters, devops: devopsChapters, k8s: k8sChapters, interview: interviewChapters, mobile: mobileChapters };
  const out = {};
  let total = 0;
  for (const [track, arr] of Object.entries(TRACKS)) {
    out[track] = arr.map((c) => {
      total++;
      return {
        slug: c.slug, track, dayLabel: chapterDayLabel(c, track),
        title: c.title, subtitle: c.subtitle || '', duration: c.duration || '', createdOn: c.createdOn || '',
        topics: c.topics || [], image: c.image || null, imageAlt: c.imageAlt || null,
        youtubeUrl: c.youtubeUrl || null, youtubeTitle: c.youtubeTitle || null, notionUrl: c.notionUrl || null,
        sections: (c.sections || []).map((s) => ({ id: s.id, title: s.title || '', content: s.content || '', code: s.code || null, image: s.image || null, imageAlt: s.imageAlt || null })),
        quiz: (c.quiz || []).map((q) => ({ question: q.question, options: q.options, answer: q.answer, explanation: q.explanation || '' })),
      };
    });
  }
  fs.writeFileSync(path.join(OUT_DIR, 'chapters.json'), JSON.stringify(out));
  return { total, counts: Object.fromEntries(Object.entries(out).map(([k, v]) => [k, v.length])) };
}

// ---------- day pages ----------
function decode(s) {
  return String(s).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&apos;/g, "'");
}
function cleanProse(s) {
  return decode(String(s)
    .replace(/<strong>/g, '**').replace(/<\/strong>/g, '**')
    .replace(/<code>/g, '`').replace(/<\/code>/g, '`')
    .replace(/<[^>]+>/g, '')
    .replace(/\{'\s*'\}/g, ' ').replace(/\{"\s*"\}/g, ' ')
    .replace(/\s+/g, ' ')).trim();
}
function evalConsts(raw) {
  let cut = raw.search(/\nfunction TopicCard/);
  if (cut === -1) cut = raw.search(/\nexport default function/);
  let prefix = cut === -1 ? raw : raw.slice(0, cut);
  prefix = prefix.split('\n').filter((l) => !/^\s*import\b/.test(l)).join('\n');
  const names = [...prefix.matchAll(/^const (\w+) =/gm)].map((m) => m[1]);
  const fn = new Function(`${prefix}\n; return { ${names.join(', ')} };`);
  return fn();
}

function exportDays() {
  const PAGES = path.join(ROOT, 'src/pages');
  const files = fs.readdirSync(PAGES).filter((f) => /^Day\d{3}\.jsx$/.test(f)).sort();
  const out = [];
  const failed = [];
  for (const file of files) {
    const raw = fs.readFileSync(path.join(PAGES, file), 'utf8');
    const dayNum = parseInt(file.slice(3, 6), 10);
    let consts = {};
    try { consts = evalConsts(raw); } catch (e) { failed.push(`${file}: ${e.message}`); }

    const numM = raw.match(/day001-day-num">\s*DAY\s*(\d+)\s*<span[^>]*>([^<]*)<\/span>/);
    const themeM = raw.match(/day001-day-theme">([^<]+)<\/p>/);
    const dtM = raw.match(/day001-datetime">([^<]+)<\/p>/);
    const tagsBlock = raw.match(/day001-tags">([\s\S]*?)<\/div>/);
    const tags = tagsBlock ? [...tagsBlock[1].matchAll(/<span>([^<]+)<\/span>/g)].map((m) => decode(m[1])) : [];
    const summaryM = raw.match(/day001-summary">([\s\S]*?)<\/p>/);

    const sections = [...raw.matchAll(/<CardSection\s+icon="([^"]*)"\s+title="([^"]*)"\s+cards=\{(\w+)\}/g)].map((m) => {
      const arr = consts[m[3]] || [];
      return { icon: m[1], title: decode(m[2]), cards: arr.map((c) => ({
        icon: c.icon || '', title: c.title || '', subtitle: c.subtitle || '',
        description: cleanProse(c.description || ''), code: c.code || null, footer: c.footer || null,
        linkLabel: c.link?.label || null, linkHref: c.link?.href || null,
      })) };
    });

    const dt = dtM ? dtM[1].trim() : '';
    out.push({
      day: dayNum, slug: `day-${String(dayNum).padStart(3, '0')}`,
      emoji: numM ? numM[2].trim() : '',
      theme: themeM ? decode(themeM[1].trim()) : '',
      dayLabel: dt.includes('·') ? dt.split('·')[0].trim() : (dt || `Day ${dayNum}`),
      dateLabel: dt.includes('·') ? dt.split('·').pop().trim() : '',
      tags,
      summary: summaryM ? cleanProse(summaryM[1]) : '',
      learnt: (consts.LEARNT_TODAY || []).map((x) => ({ title: x.title || '', text: cleanProse(x.text || '') })),
      sections, episodeImage: consts.EP_IMAGE || null,
    });
  }
  fs.writeFileSync(path.join(OUT_DIR, 'days.json'), JSON.stringify(out));
  const cards = out.reduce((a, d) => a + d.sections.reduce((x, s) => x + s.cards.length, 0), 0);
  return { days: out.length, cards, failed };
}

console.log(`Exporting mobile content → ${OUT_DIR}`);
const ch = exportChapters();
console.log(`  chapters.json — ${ch.total} chapters ${JSON.stringify(ch.counts)}`);
const dy = exportDays();
console.log(`  days.json — ${dy.days} days, ${dy.cards} cards`);
if (dy.failed.length) {
  console.warn(`  ⚠ ${dy.failed.length} day page(s) failed to parse:`);
  dy.failed.forEach((f) => console.warn(`    - ${f}`));
  process.exit(1);
}
console.log('Done.');
