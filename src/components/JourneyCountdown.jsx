import { useEffect, useState } from 'react';

/** Day 1 of the 1,600-day journey (Phase 1 · Python starts here — no separate prerequisite phase). */
const JOURNEY_START = new Date(2026, 6, 25, 0, 0, 0, 0);
/** Target: end of Day 1,600 (last day 10 Dec 2030) — 16 sequential 100-day phases. */
export const JOURNEY_END = new Date(JOURNEY_START.getTime() + 1600 * 24 * 60 * 60 * 1000);

function getRemaining(now = new Date()) {
  const diff = Math.max(0, JOURNEY_END.getTime() - now.getTime());
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds, done: diff === 0 };
}

function pad(n) {
  return String(n).padStart(2, '0');
}

/**
 * Live countdown to the end of the 1,600-day journey — days, hours, minutes, seconds.
 * @param {{ variant?: 'banner' | 'hero' }} props
 */
export default function JourneyCountdown({ variant = 'banner' }) {
  const [time, setTime] = useState(() => getRemaining());

  useEffect(() => {
    setTime(getRemaining());
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'Days', value: time.days, wide: true },
    { label: 'Hours', value: pad(time.hours) },
    { label: 'Minutes', value: pad(time.minutes) },
    { label: 'Seconds', value: pad(time.seconds) },
  ];

  if (variant === 'hero') {
    return (
      <div className="journey-countdown journey-countdown--hero" role="timer" aria-live="polite">
        <p className="journey-countdown-label">
          {time.done ? '1,600-day journey complete' : 'Countdown to journey end'}
        </p>
        <div className="journey-countdown-units">
          {units.map((u) => (
            <div key={u.label} className={`journey-countdown-unit${u.wide ? ' journey-countdown-unit--wide' : ''}`}>
              <span className="journey-countdown-value">{u.value}</span>
              <span className="journey-countdown-unit-label">{u.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="journey-countdown journey-countdown--banner" role="timer" aria-live="polite">
      <div className="journey-countdown-inner">
        <span className="journey-countdown-label">
          {time.done ? 'Journey complete' : 'Until journey end'}
        </span>
        <div className="journey-countdown-units">
          {units.map((u) => (
            <div key={u.label} className="journey-countdown-unit">
              <span className="journey-countdown-value">{u.value}</span>
              <span className="journey-countdown-unit-label">{u.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
