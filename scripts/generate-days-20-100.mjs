#!/usr/bin/env node
/**
 * Generates chaptersDays20to100.js from curriculum + updates videoLinks.js
 */
import { writeFileSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { days20to100 } from '../src/data/curriculum100.js';
import { buildChaptersFromCurriculum } from '../src/data/chapterFactory.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const chapters = buildChaptersFromCurriculum(days20to100, 20);

const outPath = join(root, 'src/data/chaptersDays20to100.js');
const content = `// Auto-generated — days 20–100 from Thunder syllabus\nexport const chaptersDays20to100 = ${JSON.stringify(chapters, null, 2)};\n`;
writeFileSync(outPath, content);
console.log(`Wrote ${chapters.length} chapters to ${outPath}`);

// Extend videoLinks.js youtubeByDay for days 20-100 (only if missing)
const videoPath = join(root, 'src/data/videoLinks.js');
let videoSrc = readFileSync(videoPath, 'utf8');

if (!videoSrc.includes('  100: {')) {
  const newEntries = days20to100
    .map(
      (d) => `  ${d.day}: {
    url: '${d.youtube.url}',
    title: '${d.youtube.title.replace(/'/g, "\\'")}',
    channel: '${d.youtube.channel.replace(/'/g, "\\'")}',
  }`,
    )
    .join(',\n');

  const start = videoSrc.indexOf('export const youtubeByDay = {');
  const end = videoSrc.indexOf('};', start) + 2;
  const existingBlock = videoSrc.slice(start, end);
  const insertPos = existingBlock.lastIndexOf('}');
  const mergedYoutube = `${existingBlock.slice(0, insertPos)},\n${newEntries}\n};`;
  videoSrc = videoSrc.slice(0, start) + mergedYoutube + videoSrc.slice(end);
  writeFileSync(videoPath, videoSrc);
  console.log('Updated videoLinks.js with days 20-100');
} else {
  console.log('videoLinks.js already has days 1-100 — skipped');
}
