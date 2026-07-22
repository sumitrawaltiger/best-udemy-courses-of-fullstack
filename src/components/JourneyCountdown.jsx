import { useEffect, useState } from 'react';

/** Target: 1 September 2030, 00:00:00 local time */
export const JOURNEY_END = new Date(2030, 8, 1, 0, 0, 0, 0);

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
 * Countdown to 1 Sep 2030 — days, hours, minutes, seconds.
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
          {time.done ? (
            <>1,500-day journey complete · <strong>1 Sep 2030</strong></>
          ) : (
            <>Countdown to journey end · <strong>1 Sep 2030</strong></>
          )}
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
          {time.done ? 'Journey complete · 1 Sep 2030' : 'Until 1 Sep 2030'}
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
