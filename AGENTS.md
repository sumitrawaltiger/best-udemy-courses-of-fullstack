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

Note: there are two distinct kinds of pages. The data-driven `/learn/:slug` chapter pages (described below) are generated from curriculum data. Separately, there are hundreds of hand-authored **standalone journey pages** — `Day000.jsx`…`Day230.jsx` (`/day-000`…`/day-230`), `AgenticDay01.jsx`…`AgenticDay190.jsx` (`/agentic-day-N`), and `GenaiDay01.jsx`… (`/genai-day-N`). Day/AgenticDay routes are registered outside `Layout`; GenAI day routes are nested inside `Layout`. Numbering is sparse (some numbers are intentionally skipped), so verify neighbors in `App.jsx` rather than assuming a contiguous range.

### Standalone journey pages (`StandaloneJourneyPage`)
Most `AgenticDayNNN.jsx` / `GenaiDayNNN.jsx` (and newer `DayNNN.jsx`) pages are thin wrappers around `src/pages/StandaloneJourneyPage.jsx`, which renders the shared `Day001.css` layout (top nav, hero, progress bar, "WHAT I LEARNED TODAY" list, three card sections, hashtag footer). A page file only declares four card/data arrays (`learntToday`, `core`, `practice`, `resources`) and passes props: `dayNumber`, `series`, `dateLabel`, `prev`/`next` (`{ href, label }`), `tags`, `theme`, `heroIcon`, `profileRole`, `progressWidth`, `summary` (JSX), and `hashtags`. Cards are objects with `icon`, `title`, `titleClass` (e.g. `card-title-cyan`), `subtitle`, `description`, optional `code`, `footer`, and `link` (`{ href, label, external? }` — internal links use `<Link>`, external use `<a target="_blank">`). Older pages like `Day135.jsx` inline this same markup instead of using the component; prefer `StandaloneJourneyPage` for new pages.

To add a new standalone day, copy the nearest existing sibling (e.g. `AgenticDay185.jsx`), update its content/props, chain `prev`/`next` to its neighbors, and register both an `import` and a `<Route>` in `App.jsx` (the arc's last day typically points `next` back to Home). When appending to an arc, also update the previous day's `next` (top-nav prop and its "what comes next" card) to point at the new page. Because strings live in single-quoted JS, avoid straight apostrophes — use the curly `’` as existing pages do. `dateLabel` and `progressWidth` are free-form display values continued from the prior day, not computed.

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
