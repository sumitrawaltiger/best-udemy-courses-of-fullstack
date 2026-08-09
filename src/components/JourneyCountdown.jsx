import { useEffect, useState } from 'react';

/** Day 1 is 11 Aug 2026 (Phase 1 · Python Stack). */
/** Target: 1 Feb 2032, 00:00 — end of Day 2000 (31 Jan 2032). 19 skills · 2,000 days. */
export const JOURNEY_END = new Date(2032, 1, 1, 0, 0, 0, 0);

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
 * Live countdown to the end of the journey (31 Aug 2031) — days, hours, minutes, seconds.
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
          {time.done ? 'Journey complete' : 'Countdown to journey end'}
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
