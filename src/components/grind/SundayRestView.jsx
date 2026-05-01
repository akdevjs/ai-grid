import { formatLongDate, getNextWorkDayAfterSunday } from '../../utils/roadmap.js';
import { sameCalendarDay } from '../../utils/dates.js';

export function SundayRestView({ date }) {
  const resumeDay = getNextWorkDayAfterSunday(date);
  const dateStr = formatLongDate(date);
  const isToday = sameCalendarDay(date, new Date());

  return (
    <div className="sun-page" id="sundayPage">
      <div
        className="star"
        style={{
          width: 2,
          height: 2,
          top: '8%',
          left: '10%',
          animation: 'grind-star-twinkle 2.1s ease-in-out infinite',
        }}
      />
      <div
        className="star"
        style={{
          width: 3,
          height: 3,
          top: '15%',
          left: '80%',
          animation: 'grind-star-twinkle 1.7s ease-in-out infinite 0.4s',
        }}
      />
      <div
        className="star"
        style={{
          width: 2,
          height: 2,
          top: '5%',
          left: '55%',
          animation: 'grind-star-twinkle 2.4s ease-in-out infinite 0.8s',
        }}
      />
      <div
        className="star"
        style={{
          width: 2,
          height: 2,
          top: '25%',
          left: '22%',
          animation: 'grind-star-twinkle 1.9s ease-in-out infinite 1.1s',
        }}
      />
      <div
        className="star"
        style={{
          width: 3,
          height: 3,
          top: '20%',
          left: '70%',
          animation: 'grind-star-twinkle 2.2s ease-in-out infinite 0.3s',
        }}
      />
      <div
        className="star"
        style={{
          width: 2,
          height: 2,
          top: '70%',
          left: '5%',
          animation: 'grind-star-twinkle 2s ease-in-out infinite 0.7s',
        }}
      />
      <div
        className="star"
        style={{
          width: 2,
          height: 2,
          top: '80%',
          left: '92%',
          animation: 'grind-star-twinkle 1.6s ease-in-out infinite 1.4s',
        }}
      />

      <div
        className="bubble"
        style={{ width: 30, height: 30, bottom: '10%', left: '8%', animationDelay: '0s', animationDuration: '5s' }}
      />
      <div
        className="bubble"
        style={{
          width: 18,
          height: 18,
          bottom: '15%',
          left: '85%',
          animationDelay: '1.5s',
          animationDuration: '4s',
        }}
      />
      <div
        className="bubble"
        style={{
          width: 22,
          height: 22,
          bottom: '5%',
          left: '45%',
          animationDelay: '0.8s',
          animationDuration: '6s',
        }}
      />

      <div className="sun-wrap">
        <div className="ring" />
        <div className="sun-core" />
        <div className="sun-rays">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <div
              key={deg}
              className="ray"
              style={{ transform: `rotate(${deg}deg) translateX(-50%) translateY(-100%)` }}
            />
          ))}
        </div>
      </div>

      <div className="hammock-scene">
        <div className="h-pole h-pole-l" />
        <div className="h-pole h-pole-r" />
        <div className="h-rope-l" />
        <div className="h-rope-r" />
        <div className="hammock" />
        <div className="person">
          <div className="p-head">
            <div className="p-eyes">
              <div className="p-eye" />
              <div className="p-eye" />
            </div>
            <div className="p-smile" />
          </div>
          <div className="p-body">
            <div className="p-arm-l" />
            <div className="p-arm-r" />
          </div>
          <div className="p-legs">
            <div className="p-leg" />
            <div className="p-leg" />
          </div>
        </div>
        <div className="zzz-wrap">
          <div className="zz zz1">z</div>
          <div className="zz zz2">z</div>
          <div className="zz zz3">Z</div>
        </div>
      </div>

      <div className="rest-tag">☀ SUNDAY</div>
      <div className="rest-title">Chill Out, Boy.</div>
      <div className="rest-sub">{isToday ? 'Today is a REST DAY' : 'Scheduled REST DAY'}</div>
      <div className="rest-date">{dateStr}</div>

      <div className="rest-msg">
        No code. No LeetCode. No IndiaBix.
        <br />
        Your brain needs this — recovery <em>is</em> part of the grind.
        <br />
        <br />
        Sleep in. Go for a walk. Watch something dumb.
        <br />
        You&apos;ve earned it. 💤
      </div>

      <div className="rest-footer">
        Back to work tomorrow →
        <div>
          <span className="rest-day-badge">▶ Resuming Day {resumeDay}</span>
        </div>
      </div>
    </div>
  );
}
