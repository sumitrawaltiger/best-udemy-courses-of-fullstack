import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture04';
const COINGECKO = 'https://www.coingecko.com/en/api';

const LEARNT_TODAY = [
  { title: 'The knowledge gap', text: 'an LLM only knows its training data up to a cutoff — no live prices, weather, or today’s news' },
  { title: 'Tools are just functions', text: 'to reach live data, write plain JavaScript functions that call real APIs and return the result' },
  { title: 'fetch in Node', text: 'modern Node has fetch built in — hit any REST endpoint and parse the JSON response' },
  { title: 'Crypto price tool', text: 'a getCryptoPrice(coin) function fetches live prices from the CoinGecko API' },
  { title: 'Weather & news tools', text: 'the same pattern — one function per data source (weather API, news API)' },
  { title: 'The routing problem', text: 'given a user question, which tool should run? A manual if/else chain is brittle and does not scale' },
  { title: 'Why this matters', text: 'this sets up function calling — instead of routing by hand, let the model choose the tool (Day 5)' },
];

const GAP = [
  {
    icon: '🕳️', title: 'The Knowledge Cutoff', titleClass: 'card-title-cyan', subtitle: 'No Live Data',
    description:
      'The model was trained up to a date and frozen. Ask for the Bitcoin price or today’s weather and it cannot know — it has no connection to the live world.',
    code: '// "What is the price of Bitcoin right now?"\n// → the model has no idea — training data is frozen',
  },
  {
    icon: '🌉', title: 'Bridge To Reality', titleClass: 'card-title-purple', subtitle: 'Give It Tools',
    description:
      'The fix is to fetch real data ourselves and hand it to the model. A "tool" is nothing magical — it is a normal function that calls an API and returns fresh information.',
    code: '// tool = a function the AI can use to reach the real world\n// fetch live data → feed it back into the answer',
  },
];

const TOOLS = [
  {
    icon: '🪙', title: 'Crypto Price Tool', titleClass: 'card-title-cyan', subtitle: 'CoinGecko API',
    description:
      'A function takes a coin id, calls the CoinGecko API, and returns the live price data. Node’s built-in fetch makes it a couple of lines.',
    code: 'async function getCryptoPrice(coin) {\n  const res = await fetch(\n    `https://api.coingecko.com/api/v3/coins/markets` +\n    `?vs_currency=inr&ids=${coin}`\n  );\n  return await res.json();\n}\nawait getCryptoPrice("bitcoin");',
  },
  {
    icon: '🌦️', title: 'Weather & News', titleClass: 'card-title-purple', subtitle: 'Same Pattern',
    description:
      'Every data source is one more function: a weather API by city, a news API by topic. Consistent shape — take an argument, fetch, return JSON.',
    code: 'async function getWeather(city) {\n  const res = await fetch(`.../current.json?q=${city}`);\n  return await res.json();\n}\nasync function getNews(topic) { /* fetch news */ }',
  },
  {
    icon: '🔌', title: 'fetch Is Built In', titleClass: 'card-title-amber', subtitle: 'No Extra Library',
    description:
      'Modern Node ships fetch, so calling REST APIs needs nothing extra. Await the response, parse the JSON, and you have real-world data inside your program.',
    code: 'const res = await fetch(url);\nconst data = await res.json();\n// live data — ready to feed the model',
  },
];

const ROUTING = [
  {
    icon: '🤔', title: 'Which Tool?', titleClass: 'card-title-cyan', subtitle: 'The Real Problem',
    description:
      'Now the hard part: for a given question, which function should run? "Delhi ki news bata" → news. "Bitcoin price?" → crypto. Deciding this in code is the whole challenge.',
    code: '// question: "Bhai delhi ki news bata"\n// → should call getNews("delhi") ... but how does the code know?',
  },
  {
    icon: '🧱', title: 'Manual Routing Breaks', titleClass: 'card-title-purple', subtitle: 'if / else Does Not Scale',
    description:
      'Hard-coding keyword checks (if the text has "price" call crypto…) is fragile and explodes as you add tools. Natural language is too varied for if/else.',
    code: 'if (q.includes("price")) getCryptoPrice(...)\nelse if (q.includes("weather")) getWeather(...)\nelse if (q.includes("news")) getNews(...)\n// brittle, and worse with every new tool',
  },
  {
    icon: '➡️', title: 'The Better Way', titleClass: 'card-title-amber', subtitle: 'Let The Model Decide',
    description:
      'Instead of routing by hand, describe the tools to the model and let it choose which one to call and with what arguments. That is function calling — tomorrow’s lecture.',
    footer: 'Manual routing → function calling (Day 5)',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 04 Code', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The crypto, weather and news functions and the routing experiment from this lecture in the STRIKE GenAI repo.',
    link: { href: GH_LECTURE, label: 'Open Lecture 04 →', external: true },
  },
  {
    icon: '📈', title: 'CoinGecko API', titleClass: 'card-title-purple', subtitle: 'Free Crypto Data',
    description:
      'The public API used for the crypto tool — live prices and market data, no key needed for basic endpoints.',
    link: { href: COINGECKO, label: 'CoinGecko API docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Function Calling', titleClass: 'card-title-amber', subtitle: 'Prereq 5 Preview',
    description:
      'Tomorrow is Lecture 05 — declare tools to the model with typed parameters so it decides which function to call. The first real step toward an agent.',
    link: { href: '/day-021', label: 'Go to Prereq 5 →' },
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

export default function Day020() {
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
          <Link to="/day-019" className="day001-nav-btn day001-nav-prev">← Prereq 3</Link>
          <p className="day001-datetime">Prerequisite · Gen AI 4</p>
          <Link to="/day-021" className="day001-nav-btn day001-nav-next">Prereq 5 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Prerequisite</span><span>Gen AI</span><span>Lecture 04</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">PREREQ 4 <span aria-hidden="true">🌐</span></h1>
              <p className="day001-day-theme">REACHING REAL-WORLD DATA WITH TOOLS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">PREREQUISITE · GEN AI</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '4%' }} /></div>

        <p className="day001-summary">
          Lecture 04 — the model has a <strong>knowledge cutoff</strong> and no live data, so I built{' '}
          <strong>tools</strong>: plain JavaScript functions that <code>fetch</code> real data from APIs —{' '}
          crypto prices from <strong>CoinGecko</strong>, plus weather and news. The catch is <strong>routing</strong>:
          for any given question, which tool should run? A manual <code>if/else</code> chain is brittle and does not
          scale. That is exactly the problem <strong>function calling</strong> solves — letting the model choose the
          tool itself. <em>Tomorrow, the AI starts deciding.</em>
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

        <CardSection icon="🕳️" title="THE KNOWLEDGE GAP" cards={GAP} columns={2} />
        <CardSection icon="🔧" title="BUILDING TOOLS" cards={TOOLS} columns={3} />
        <CardSection icon="🧭" title="THE ROUTING PROBLEM" cards={ROUTING} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#Tools</span><span>#CoderArmy</span><span>#JavaScript</span>
        </footer>
      </div>
    </div>
  );
}
