import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const FLATLIST_DOCS = 'https://reactnative.dev/docs/flatlist';
const IMAGE_DOCS = 'https://docs.expo.dev/versions/latest/sdk/image/';
const FILESYSTEM_DOCS = 'https://docs.expo.dev/versions/latest/sdk/filesystem/';

const LEARNT_TODAY = [
  { title: 'Image grid', text: 'a FlatList / FlashList with numColumns shows wallpapers in a masonry-style grid' },
  { title: 'Categories & search', text: 'filter by topic chips and a search box that hits an image API' },
  { title: 'Infinite scroll', text: 'onEndReached loads the next page when the user nears the bottom' },
  { title: 'Download & save', text: 'fetch the full image and write it with FileSystem / MediaLibrary' },
  { title: 'Image caching', text: 'expo-image (or FastImage) caches remote URLs so scroll stays smooth' },
  { title: 'Favorites', text: 'persist liked IDs in AsyncStorage and show a Favorites tab' },
  { title: 'Detail screen', text: 'tap a tile → full-screen preview with download and favorite actions' },
  { title: 'List performance', text: 'stable keys, getItemLayout where possible, and avoid re-renders on scroll' },
  { title: 'Project stack', text: 'networking + storage + media from earlier days, applied to a real gallery app' },
];

const CORE = [
  {
    icon: '🖼️', title: 'Image Grid', titleClass: 'card-title-cyan', subtitle: 'numColumns FlatList',
    description: 'Render wallpaper thumbnails in a multi-column FlatList. Use a fixed aspect ratio so rows stay even and scroll feels native.',
    code: '<FlatList\n  data={photos}\n  numColumns={2}\n  keyExtractor={(i) => i.id}\n  renderItem={({ item }) => <Thumb photo={item} />}\n/>',
  },
  {
    icon: '🔍', title: 'Categories & Search', titleClass: 'card-title-purple', subtitle: 'Find A Vibe',
    description: 'Chip filters (Nature, Abstract, Dark…) and a search query rebuild the request URL. Debounce typing so you don’t spam the API.',
    code: 'const url = `?q=${query}&category=${cat}&page=${page}`;\nconst { results } = await fetchPhotos(url);',
  },
  {
    icon: '♾️', title: 'Infinite Scroll', titleClass: 'card-title-amber', subtitle: 'onEndReached',
    description: 'When the list nears the end, bump the page and append results. Guard with a loading flag so you don’t fire duplicate requests.',
    code: 'onEndReached={() => {\n  if (!loading) loadMore();\n}}\nonEndReachedThreshold={0.4}',
  },
];

const POLISH = [
  {
    icon: '⬇️', title: 'Download & Save', titleClass: 'card-title-cyan', subtitle: 'To The Gallery',
    description: 'Download the full-resolution file with FileSystem, then save to the media library so it appears in Photos.',
    code: 'const file = await FileSystem.downloadAsync(url, path);\nawait MediaLibrary.saveToLibraryAsync(file.uri);',
  },
  {
    icon: '⚡', title: 'Image Caching', titleClass: 'card-title-purple', subtitle: 'Smooth Scroll',
    description: 'expo-image caches remotes on disk and memory. Prefer it over raw Image for long galleries — fewer spinners, less jank.',
    code: 'import { Image } from "expo-image";\n<Image source={uri} cachePolicy="memory-disk" style={s} />',
  },
  {
    icon: '❤️', title: 'Favorites', titleClass: 'card-title-amber', subtitle: 'Persist Likes',
    description: 'Store favorite IDs in AsyncStorage. A Favorites screen filters the cache or re-fetches by id so likes survive restarts.',
    code: 'await AsyncStorage.setItem("favs", JSON.stringify(ids));',
  },
  {
    icon: '🔜', title: 'Next: AI Study Assistant', titleClass: 'card-title-lime', subtitle: 'Day 117 Preview',
    description: 'Tomorrow: upload PDFs, summarize with AI, generate flashcards, and support offline study workflows.',
    link: { href: '/day-117', label: 'Go to Day 117 →' },
  },
];

const RESOURCES = [
  {
    icon: '📜', title: 'FlatList', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'numColumns, onEndReached, performance tips for long image grids.',
    link: { href: FLATLIST_DOCS, label: 'Read FlatList docs →', external: true },
  },
  {
    icon: '🖼️', title: 'Expo Image', titleClass: 'card-title-purple', subtitle: 'Caching',
    description: 'Cached remote images, placeholders, and transitions for gallery UIs.',
    link: { href: IMAGE_DOCS, label: 'Read expo-image docs →', external: true },
  },
  {
    icon: '📁', title: 'FileSystem', titleClass: 'card-title-amber', subtitle: 'Downloads',
    description: 'Download remote files to a local path before saving to the gallery.',
    link: { href: FILESYSTEM_DOCS, label: 'Read FileSystem docs →', external: true },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">{card.icon}</span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a href={card.link.href} target="_blank" rel="noopener noreferrer" className="day001-card-link">{card.link.label}</a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">{card.link.label}</Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title"><span aria-hidden="true">{icon}</span> {title}</h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (<TopicCard key={card.title} card={card} />))}
      </div>
    </section>
  );
}

export default function Day116() {
  const scaleRef = useRef(null);
  useEffect(() => {
    const wrap = scaleRef.current;
    if (!wrap) return;
    const page = wrap.parentElement;
    const fitToScreen = () => {
      wrap.style.transform = 'none';
      wrap.style.width = '100%';
      if (page) page.style.height = '';
      const pad = 12;
      const scale = Math.min((window.innerHeight - pad) / wrap.scrollHeight, (window.innerWidth - pad) / wrap.scrollWidth);
      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };
    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);
    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) avatar.addEventListener('load', fitToScreen);
    return () => { window.removeEventListener('resize', fitToScreen); observer.disconnect(); };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/" className="day001-nav-btn day001-nav-home">Home</Link>
          <Link to="/day-115" className="day001-nav-btn day001-nav-prev">← Day 115</Link>
          <p className="day001-datetime">React Native Day 116</p>
          <Link to="/day-117" className="day001-nav-btn day001-nav-next">Day 117 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>Project</span><span>RN Day 16</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 116 <span aria-hidden="true">🖼️</span></h1>
              <p className="day001-day-theme">PROJECT: WALLPAPER APP</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">RN · MOBILE DEV</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '32%' }} /></div>

        <p className="day001-summary">
          Day 116 builds a <strong>wallpaper gallery</strong>. An <strong>image grid</strong> with{' '}
          <strong>categories &amp; search</strong>, <strong>infinite scroll</strong> for more pages,{' '}
          <strong>download &amp; save</strong> to the gallery, <strong>image caching</strong> for smooth
          scrolling, and <strong>favorites</strong> that persist. FlatList performance meets media APIs.
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> — {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🖼️" title="1 · GRID, SEARCH & SCROLL" cards={CORE} columns={3} />
        <CardSection icon="⬇️" title="2 · SAVE, CACHE & FAVORITES" cards={POLISH} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#WallpaperApp</span><span>#Expo</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
