import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useGrindProgress } from '../hooks/useGrindProgress.js';
import {
  TOTAL_WORK_DAYS,
  buildChronologicalEntries,
  getDayData,
  getTodayWorkDayNum,
  isTodaySunday,
} from '../utils/roadmap.js';
import { startOfDay } from '../utils/dates.js';
import { GrindTopBar } from '../components/grind/GrindTopBar.jsx';
import { GrindSidebar } from '../components/grind/GrindSidebar.jsx';
import { DayWorkView } from '../components/grind/DayWorkView.jsx';
import { SundayRestView } from '../components/grind/SundayRestView.jsx';

function MainSkeleton() {
  return (
    <div className="animate-pulse space-y-4 pt-2">
      <div className="h-40 bg-grind-surface border border-grind-border rounded-2xl" />
      <div className="h-24 bg-grind-surface border border-grind-border rounded-xl" />
      <div className="h-24 bg-grind-surface border border-grind-border rounded-xl" />
    </div>
  );
}

function SidebarSkeleton() {
  return (
    <div className="animate-pulse space-y-2 p-2">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className="h-8 bg-grind-surface2 rounded border border-grind-border/50" />
      ))}
    </div>
  );
}

function GrindShell() {
  const { user, profile } = useAuth();
  const { checked, setCheckedMap, currentDay, setDay, remoteReady } = useGrindProgress();
  const [menuOpen, setMenuOpen] = useState(false);
  const [view, setView] = useState({ mode: 'work', workDay: 1 });
  const didInit = useRef(false);

  const entries = useMemo(() => buildChronologicalEntries(), []);

  const isDayDone = useCallback(
    (dayNum) => {
      const d = getDayData(dayNum);
      if (!d?.tasks?.length) return false;
      return d.tasks.every((t) => checked[t.id]);
    },
    [checked],
  );

  const totalDone = useMemo(() => {
    let n = 0;
    for (let d = 1; d <= TOTAL_WORK_DAYS; d++) {
      if (isDayDone(d)) n++;
    }
    return n;
  }, [checked, isDayDone]);

  const progressPct = Math.round((totalDone / TOTAL_WORK_DAYS) * 100);

  const streak = useMemo(() => {
    let s = 0;
    for (let i = currentDay - 1; i >= 1; i--) {
      if (isDayDone(i)) s++;
      else break;
    }
    return s;
  }, [currentDay, isDayDone]);

  useEffect(() => {
    if (!remoteReady || didInit.current) return;
    didInit.current = true;
    if (isTodaySunday()) {
      setView({ mode: 'sunday', date: startOfDay(new Date()) });
      return;
    }
    const tw = getTodayWorkDayNum();
    let day = currentDay;
    if (day === 1 && tw) {
      day = tw;
      setDay(tw);
    }
    setView({ mode: 'work', workDay: day });
  }, [remoteReady, currentDay, setDay]);

  const didScrollSidebar = useRef(false);
  useEffect(() => {
    if (!remoteReady || didScrollSidebar.current) return;
    didScrollSidebar.current = true;
    const t = setTimeout(() => {
      document.getElementById('sidebar-active')?.scrollIntoView({ block: 'center' });
    }, 120);
    return () => clearTimeout(t);
  }, [remoteReady]);

  const onSelectWork = useCallback(
    (workDay) => {
      setDay(workDay);
      setView({ mode: 'work', workDay });
      setMenuOpen(false);
      window.scrollTo(0, 0);
    },
    [setDay],
  );

  const onSelectSunday = useCallback((date) => {
    setView({ mode: 'sunday', date: startOfDay(date) });
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, []);

  const onToggleTask = useCallback(
    (taskId) => {
      setCheckedMap((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
    },
    [setCheckedMap],
  );

  const onToggleDayDone = useCallback(
    (dayNum) => {
      const d = getDayData(dayNum);
      if (!d?.tasks) return;
      const done = isDayDone(dayNum);
      const next = { ...checked };
      d.tasks.forEach((t) => {
        next[t.id] = !done;
      });
      setCheckedMap(next);
    },
    [checked, isDayDone, setCheckedMap],
  );

  const onMarkDayDone = useCallback(
    (dayNum) => {
      onToggleDayDone(dayNum);
      const next = Math.min(TOTAL_WORK_DAYS, dayNum + 1);
      setDay(next);
      setView({ mode: 'work', workDay: next });
    },
    [onToggleDayDone, setDay],
  );

  const jumpToToday = useCallback(() => {
    if (isTodaySunday()) {
      setView({ mode: 'sunday', date: startOfDay(new Date()) });
    } else {
      const t = getTodayWorkDayNum();
      if (t) {
        setDay(t);
        setView({ mode: 'work', workDay: t });
      }
    }
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById('sidebar-active');
      el?.scrollIntoView({ block: 'center' });
    }, 100);
  }, [setDay]);

  const headerWorkDayLabel = view.mode === 'work' ? view.workDay : currentDay;

  return (
    <div className="min-h-screen bg-grind-bg text-grind-text font-sans">
      <GrindTopBar
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((o) => !o)}
        progressPct={progressPct}
        currentWorkDayLabel={headerWorkDayLabel}
        streak={streak}
        user={user}
        profile={profile}
      />

      <button
        type="button"
        className={`fixed inset-0 top-14 z-[89] bg-black/50 transition-opacity md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />

      <div className="flex pt-14 min-h-screen">
        <aside
          className={`w-[260px] min-w-[260px] bg-grind-surface border-r border-grind-border md:sticky md:top-14 h-[calc(100vh-56px)] overflow-y-auto py-3 z-[90] max-md:fixed max-md:top-14 max-md:transition-[left,box-shadow] max-md:duration-200 ${
            menuOpen
              ? 'max-md:left-0 max-md:shadow-[4px_0_20px_rgba(0,0,0,.5)]'
              : 'max-md:left-[-260px]'
          }`}
        >
          {!remoteReady ? (
            <SidebarSkeleton />
          ) : (
            <GrindSidebar
              entries={entries}
              view={view}
              onSelectWork={onSelectWork}
              onSelectSunday={onSelectSunday}
              isDayDone={isDayDone}
              onToggleDayDone={onToggleDayDone}
            />
          )}
        </aside>

        <main className="flex-1 py-6 px-5 sm:px-5 max-w-[800px] mx-auto w-full min-w-0">
          {!remoteReady ? (
            <MainSkeleton />
          ) : view.mode === 'sunday' ? (
            <SundayRestView date={view.date} />
          ) : (
            <div id="day-work-anchor">
              <DayWorkView
                workDay={view.workDay}
                checked={checked}
                onToggleTask={onToggleTask}
                onLoadDay={onSelectWork}
                onMarkDayDone={onMarkDayDone}
              />
            </div>
          )}
        </main>
      </div>

      <button
        type="button"
        onClick={jumpToToday}
        className="fixed bottom-5 right-5 z-[99] bg-grind-accent text-white border-none rounded-full py-2.5 px-[18px] font-sans text-xs font-semibold cursor-pointer shadow-[0_4px_20px_rgba(124,92,252,.4)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(124,92,252,.5)]"
      >
        📅 Today
      </button>
    </div>
  );
}

export function GrindApp() {
  const { user } = useAuth();
  if (!user) return null;
  return <GrindShell key={user.uid} />;
}
