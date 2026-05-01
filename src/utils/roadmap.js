import { phases } from '../data/phases.js';

export const START_DATE = new Date('2026-05-01T12:00:00');
export const TOTAL_WORK_DAYS = 180;

/** Flatten phase days */
function flattenPhases() {
  const all = [];
  phases.forEach((p) => {
    p.days.forEach((d) => {
      all.push({
        ...d,
        phase: p.id,
        phaseName: p.name,
        phaseColor: p.color,
      });
    });
  });
  return all;
}

/** Fill intermediate days for ranges (matches original HTML logic) */
export function expandDays(raw) {
  const expanded = [];
  for (let i = 0; i < raw.length; i++) {
    expanded.push(raw[i]);
    if (i < raw.length - 1) {
      const curr = raw[i].day;
      const next = raw[i + 1].day;
      for (let d = curr + 1; d < next; d++) {
        expanded.push({
          day: d,
          phase: raw[i].phase,
          phaseName: raw[i].phaseName,
          phaseColor: raw[i].phaseColor,
          title: `Continue: ${raw[i].title}`,
          tasks: [
            {
              id: `auto_${d}`,
              title: "Continue previous day's work",
              dur: '6h',
              type: 'practice',
              notes:
                'Continue the pattern: 2h learning + 4h practice (or full 6h project if in a project sprint). Always: 1h IndiaBix + 2h DSA/LeetCode.',
            },
            { id: `auto_dsa_${d}`, title: 'DSA LeetCode', dur: '2h', type: 'dsa' },
            {
              id: `auto_apta_${d}`,
              title: 'IndiaBix',
              dur: '1h',
              type: 'aptitude',
              link: 'https://www.indiabix.com/',
              linkLabel: 'IndiaBix',
            },
          ],
        });
      }
    }
  }
  return expanded.sort((a, b) => a.day - b.day);
}

export const allDays = expandDays(flattenPhases());

export function getPhaseColor(phaseId) {
  const p = phases.find((x) => x.id === phaseId);
  return p ? p.color : '#7c5cfc';
}

export function getDayData(dayNum) {
  return allDays.find((d) => d.day === dayNum) || allDays[0];
}

/** Calendar date for work-day N (Sundays skipped in counting) */
export function getCalendarDateForWorkDay(workDayNum) {
  const start = new Date(START_DATE);
  start.setHours(0, 0, 0, 0);
  let count = 0;
  const d = new Date(start);
  while (true) {
    if (d.getDay() !== 0) {
      count++;
      if (count === workDayNum) return new Date(d);
    }
    d.setDate(d.getDate() + 1);
  }
}

/** Last calendar day of the 180-work-day program */
export function getProgramEndCalendarDate() {
  return getCalendarDateForWorkDay(TOTAL_WORK_DAYS);
}

/** Work-day index for a calendar date (0 if before start); Sundays return null */
export function getWorkDayNumForCalendarDate(cal) {
  const today = new Date(cal);
  today.setHours(0, 0, 0, 0);
  const start = new Date(START_DATE);
  start.setHours(0, 0, 0, 0);
  if (today < start) return 1;
  if (today.getDay() === 0) return null;
  let count = 0;
  const d = new Date(start);
  while (d <= today) {
    if (d.getDay() !== 0) count++;
    d.setDate(d.getDate() + 1);
  }
  return Math.max(1, Math.min(count, TOTAL_WORK_DAYS));
}

export function isSundayDate(cal) {
  const x = new Date(cal);
  x.setHours(0, 0, 0, 0);
  return x.getDay() === 0;
}

/** Next work-day number after this calendar Sunday (Monday's number) */
export function getNextWorkDayAfterSunday(sundayCal) {
  const d = new Date(sundayCal);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 1);
  while (d.getDay() === 0) d.setDate(d.getDate() + 1);
  const end = getProgramEndCalendarDate();
  end.setHours(0, 0, 0, 0);
  if (d > end) return TOTAL_WORK_DAYS;
  const n = getWorkDayNumForCalendarDate(d);
  return Math.min(TOTAL_WORK_DAYS, Math.max(1, n));
}

/**
 * Chronological sidebar: every calendar day from START through program end,
 * with Sundays as rest rows and other days as work rows.
 */
export function buildChronologicalEntries() {
  const start = new Date(START_DATE);
  start.setHours(0, 0, 0, 0);
  const end = getProgramEndCalendarDate();
  end.setHours(0, 0, 0, 0);
  const entries = [];
  let workDay = 0;
  for (let cur = new Date(start); cur <= end; cur.setDate(cur.getDate() + 1)) {
    const dayCopy = new Date(cur);
    if (dayCopy.getDay() === 0) {
      entries.push({ kind: 'sunday', date: dayCopy });
    } else {
      workDay += 1;
      entries.push({
        kind: 'work',
        workDay,
        date: dayCopy,
        dayData: getDayData(workDay),
      });
    }
  }
  return entries;
}

export function formatShortDate(d) {
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatLongDate(d) {
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function isTodaySunday() {
  return new Date().getDay() === 0;
}

export function getTodayWorkDayNum() {
  return getWorkDayNumForCalendarDate(new Date());
}
