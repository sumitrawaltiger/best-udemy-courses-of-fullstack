# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Overview
A React 19 + Vite single-page app that presents multi-track programming curricula ("Thunder: 100 Days of Code" plus Next.js, React Native, Python, Java, AWS, DevOps, Kubernetes, and Interview Prep tracks). It is a static, client-only site: all lesson content lives in JavaScript data modules under `src/data/` — there is no backend, database, or API of its own.

## Commands
- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint over the repo
- `npm run generate:days` — regenerate `src/data/chaptersDays20to100.js` (see "Generated data" below)

There is no test runner configured in this project. `package-lock.json` is present, so use `npm`.

## Architecture

### Routing and track model
`src/App.jsx` defines all routes with `react-router-dom` v7. Every learning track (except Thunder, the default) shares one generic `Chapter` component via a `track` prop, e.g. `<Route path="python/learn/:slug" element={<Chapter track="python" />} />`. Each track has:
- a Home page in `src/pages/` (e.g. `PythonHome.jsx`)
- a Hero + Syllabus component pair in `src/components/` (e.g. `PythonHero.jsx`, `PythonSyllabus.jsx`)
- a data trio in `src/data/`: `{track}Curriculum.js`, `{track}Syllabus.js`, and a `{track}Chapters/index.js` builder module

`src/components/Layout.jsx` derives the active track from the URL path prefix and applies per-track CSS classes (e.g. `app-python`, `chapter-python`). The sidebar only shows on `/**/learn/*` routes.

Note: `/day-001` … `/day-011` are standalone, hand-built marketing/landing pages (`src/pages/Day0NN.jsx`) rendered outside the `Layout`. These are distinct from the data-driven `/learn/:slug` chapter pages and are not generated.

### Chapter data pipeline (the core abstraction)
`src/data/chapterFactory.js` is the heart of the app. `buildChapter(entry, id, { track })` normalizes a lightweight curriculum entry into a full chapter object (slug, sections, quiz, dates, YouTube/paid links, etc.), auto-generating sensible defaults (sections from `topics`, a quiz, `tryIt` snippets) when the entry omits them. Per-track behavior (labels, day-key names like `pyDay`/`awsDay`, paid-course URLs, section/quiz prefixes) is centralized in the `TRACK_META` map in that file.

Each `src/data/{track}Chapters/index.js` calls the matching `build{Track}Chapters(curriculum)` helper and exposes `get{Track}ChapterBySlug` + `search{Track}Chapters`. The generic `src/pages/Chapter.jsx` wires these together through its own `TRACKS` config object (getChapter, list, CSS classes, banners, extra links) and renders sections with a small custom inline-markdown renderer (`renderMarkdown`) plus `CodeBlock`, `CodePlayground`, and `Quiz` components.

Calendar dates are computed from a fixed `COURSE_START` (4 Jul 2026) offset by cumulative per-track day counts defined in `src/data/trackConfig.js` (`TRACK_OFFSETS`). `trackConfig.js` also holds every external course URL as a named export — add new course links there, not inline.

### Generated data
`src/data/chaptersDays20to100.js` is auto-generated and should not be hand-edited. To change Thunder days 20–100, edit `src/data/curriculum100.js` and run `npm run generate:days` (`scripts/generate-days-20-100.mjs`). That script also back-fills `src/data/videoLinks.js` `youtubeByDay` entries for days 20–100 only if missing. Days 1–19 are hand-authored in `src/data/chaptersDays01to19.js`.

## Conventions
- Content is Markdown-in-strings: section `content` and quiz text use a limited inline markdown subset (`**bold**`, `` `code` ``, `[label](url)`) parsed by `renderInlineMarkdown` in `Chapter.jsx` — not a full markdown library. Keep to that subset.
- When adding a new track, replicate the full set: route in `App.jsx`, `LEARNING_PATH` entry in `src/data/learningPath.js`, a `TRACK_OFFSETS` + `TRACK_META` entry, the data trio, Home/Hero/Syllabus components, a `TRACKS` entry in `Chapter.jsx`, and the path-prefix branches in `Layout.jsx`.
- ESLint uses the flat-config format (`eslint.config.js`) with react-hooks and react-refresh plugins; `dist` is ignored.
- The project is plain JavaScript/JSX (no TypeScript) despite `@types/react` being installed.
