import { useState } from 'react';
import {
  TOTAL_WORK_DAYS,
  formatShortDate,
  getCalendarDateForWorkDay,
  getDayData,
  getPhaseColor,
} from '../../utils/roadmap.js';

const typeIcon = {
  learn: '📺',
  project: '🔨',
  practice: '💻',
  dsa: '🧮',
  aptitude: '🧠',
};
const typeLabel = {
  learn: 'Learn',
  project: 'Project',
  practice: 'Practice',
  dsa: 'DSA',
  aptitude: 'Aptitude',
};

export function DayWorkView({
  workDay,
  checked,
  onToggleTask,
  onLoadDay,
  onMarkDayDone,
  isDayDone,
}) {
  const [expanded, setExpanded] = useState(() => new Set());
  const d = getDayData(workDay);
  const dateStr = formatShortDate(getCalendarDateForWorkDay(workDay));
  const totalTasks = d.tasks?.length || 0;
  const doneTasks = d.tasks?.filter((t) => checked[t.id]).length || 0;
  const allDone = doneTasks === totalTasks && totalTasks > 0;
  const pct = totalTasks ? Math.round((doneTasks / totalTasks) * 100) : 0;
  const prevDay = workDay > 1 ? workDay - 1 : null;
  const nextDay = workDay < TOTAL_WORK_DAYS ? workDay + 1 : null;

  const toggleExpand = (id) => {
    setExpanded((prev) => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  };

  return (
    <div>
      <div className="relative bg-grind-surface border border-grind-border rounded-2xl p-6 mb-5 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-grind-accent to-grind-accent2" />
        <div className="font-mono text-[10px] text-grind-accent tracking-widest mb-1">
          DAY {d.day} / {TOTAL_WORK_DAYS}
        </div>
        <div className="text-[13px] text-grind-muted mb-3">{dateStr}</div>
        <h1 className="text-[22px] sm:text-[22px] font-semibold mb-1.5 leading-snug">{d.title}</h1>
        <div className="inline-flex items-center gap-1.5 bg-grind-surface2 border border-grind-border rounded-full px-3 py-1 text-[11px] font-mono text-grind-muted mb-4">
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: getPhaseColor(d.phase) }}
          />
          {d.phaseName}
        </div>
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          <div className="bg-grind-surface2 rounded-[10px] p-2.5 text-center">
            <div className="font-mono text-sm font-bold text-grind-text">
              {doneTasks}/{totalTasks}
            </div>
            <div className="text-[10px] text-grind-muted mt-0.5">Tasks done</div>
          </div>
          <div className="bg-grind-surface2 rounded-[10px] p-2.5 text-center">
            <div className="font-mono text-sm font-bold text-grind-text">{pct}%</div>
            <div className="text-[10px] text-grind-muted mt-0.5">Complete</div>
          </div>
          <div className="bg-grind-surface2 rounded-[10px] p-2.5 text-center">
            <div className="font-mono text-sm font-bold text-grind-text">{TOTAL_WORK_DAYS - d.day}</div>
            <div className="text-[10px] text-grind-muted mt-0.5">Days left</div>
          </div>
        </div>
        {allDone ? (
          <div className="text-xs text-[#7af5c8] bg-[rgba(0,229,160,.06)] border border-[rgba(0,229,160,.2)] rounded-lg px-3.5 py-3 leading-relaxed">
            ✅ All tasks for this day are complete! Move to the next day.
          </div>
        ) : null}
      </div>

      <div className="mb-5">
        <div className="flex items-center gap-2 mb-3">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center text-[13px] flex-shrink-0"
            style={{ background: 'rgba(124,92,252,.15)' }}
          >
            📋
          </div>
          <div className="text-[13px] font-semibold text-grind-text">Today&apos;s tasks</div>
        </div>
        {d.tasks?.map((t) => {
          const isOpen = expanded.has(t.id);
          const icon = typeIcon[t.type] || '📌';
          const label = typeLabel[t.type] || t.type;
          return (
            <div
              key={t.id}
              className={`bg-grind-surface border border-grind-border rounded-xl overflow-hidden mb-2.5 ${isOpen ? 'expanded' : ''}`}
            >
              <button
                type="button"
                className="w-full flex items-start gap-3 py-3.5 px-4 text-left cursor-pointer"
                onClick={() => toggleExpand(t.id)}
              >
                <span
                  role="checkbox"
                  aria-checked={!!checked[t.id]}
                  tabIndex={0}
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleTask(t.id);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      e.stopPropagation();
                      onToggleTask(t.id);
                    }
                  }}
                  className={`w-[18px] h-[18px] rounded border flex-shrink-0 mt-0.5 flex items-center justify-center text-[11px] cursor-pointer transition ${
                    checked[t.id]
                      ? 'bg-grind-accent2 border-grind-accent2 text-black font-bold'
                      : 'border-grind-border'
                  }`}
                >
                  {checked[t.id] ? '✓' : ''}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium mb-0.5 leading-snug">
                    {icon} {t.title}
                  </div>
                  <div className="text-[11px] text-grind-muted">
                    {label} · {t.dur}
                  </div>
                </div>
                <span
                  className={`text-[10px] text-grind-muted ml-auto flex-shrink-0 pt-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                >
                  ▼
                </span>
              </button>
              <div className={`px-4 pb-3.5 pl-[46px] ${isOpen ? 'block' : 'hidden'}`}>
                {t.link ? (
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 py-2.5 px-3 bg-grind-surface2 border border-grind-border rounded-lg text-grind-text mb-2 text-[13px] no-underline transition hover:border-grind-accent hover:bg-[rgba(124,92,252,.08)]"
                  >
                    <span className="text-sm">🔗</span>
                    <span className="flex-1 text-xs">{t.linkLabel || 'Open resource'}</span>
                    <span className="font-mono text-[10px] text-grind-muted whitespace-nowrap">{t.dur}</span>
                  </a>
                ) : null}
                {t.notes ? (
                  <div className="text-xs text-grind-muted leading-relaxed bg-[rgba(124,92,252,.06)] border border-[rgba(124,92,252,.2)] rounded-lg px-3.5 py-3">
                    {t.notes}
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mb-5">
        <div className="flex items-center gap-2 mb-3">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center text-[13px] flex-shrink-0"
            style={{ background: 'rgba(0,229,160,.1)' }}
          >
            ⏰
          </div>
          <div className="text-[13px] font-semibold text-grind-text">Daily schedule (9h effective)</div>
        </div>
        <div className="bg-grind-surface border border-grind-border rounded-xl overflow-hidden">
          <div className="py-3.5 px-4">
            {[
              ['1h', 'IndiaBix (arithmetic → move to next category when scoring 19-20)'],
              ['2h', 'DSA lecture (weeks 1-8) OR LeetCode problems (week 9+)'],
              ['3h', 'Main learning (course/lecture) — 45/15 pomodoro'],
              ['3h', 'Practice / project / W3Schools exercises'],
            ].map(([time, desc], i) => (
              <div
                key={i}
                className={`flex gap-2.5 items-start py-2 ${i < 3 ? 'border-b border-grind-border' : ''}`}
              >
                <div className="font-mono text-[10px] text-grind-accent min-w-[45px] pt-0.5">{time}</div>
                <div className="text-xs text-grind-text leading-snug flex-1">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-2.5 mt-6">
        {prevDay ? (
          <button
            type="button"
            onClick={() => onLoadDay(prevDay)}
            className="flex-1 py-3 bg-grind-surface border border-grind-border rounded-[10px] text-grind-text text-[13px] font-medium transition hover:border-grind-accent hover:bg-[rgba(124,92,252,.08)]"
          >
            ← Day {prevDay}
          </button>
        ) : (
          <div className="flex-1" />
        )}
        <button
          type="button"
          onClick={() => onMarkDayDone(workDay)}
          className="flex-[1.5] py-3 bg-grind-surface border border-grind-border rounded-[10px] text-grind-text text-[13px] font-medium transition hover:border-grind-accent hover:bg-[rgba(124,92,252,.08)]"
        >
          ✅ Mark day done
        </button>
        {nextDay ? (
          <button
            type="button"
            onClick={() => onLoadDay(nextDay)}
            className="flex-1 py-3 bg-grind-accent border border-grind-accent rounded-[10px] text-white text-[13px] font-medium transition hover:bg-[#6a4de8]"
          >
            Day {nextDay} →
          </button>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
}
