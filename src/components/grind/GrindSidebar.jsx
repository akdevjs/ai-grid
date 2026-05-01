import { formatShortDate, getPhaseColor } from '../../utils/roadmap.js';
import { sameCalendarDay } from '../../utils/dates.js';

export function GrindSidebar({
  entries,
  view,
  onSelectWork,
  onSelectSunday,
  isDayDone,
  onToggleDayDone,
}) {
  let lastPhaseId = null;

  return (
    <div>
      {entries.map((entry, idx) => {
        if (entry.kind === 'sunday') {
          const active = view.mode === 'sunday' && sameCalendarDay(view.date, entry.date);
          const dateLabel = formatShortDate(entry.date);
          return (
            <button
              type="button"
              key={`sun-${entry.date.getTime()}`}
              id={active ? 'sidebar-active' : undefined}
              onClick={() => onSelectSunday(entry.date)}
              className={`w-full flex items-center gap-2 py-1.5 px-4 text-left border-l-2 transition cursor-pointer ${
                active
                  ? 'bg-[rgba(124,92,252,.1)] border-l-grind-accent'
                  : 'border-l-transparent hover:bg-grind-surface2 hover:border-l-grind-border'
              }`}
            >
              <span className="w-3.5 h-3.5 rounded flex-shrink-0 flex items-center justify-center text-[10px] border border-grind-accent2/50 text-grind-accent2 bg-[rgba(0,229,160,.08)]">
                ☀
              </span>
              <span className="font-mono text-[10px] text-grind-accent2 flex-shrink-0">REST</span>
              <span className="text-xs text-grind-muted flex-1 leading-snug">Sun · {dateLabel}</span>
            </button>
          );
        }

        const { workDay, dayData } = entry;
        const phaseChanged = dayData.phase !== lastPhaseId;
        lastPhaseId = dayData.phase;
        const done = isDayDone(workDay);
        const active = view.mode === 'work' && view.workDay === workDay;

        return (
          <div key={`w-${workDay}`}>
            {phaseChanged ? (
              <div className="py-2 px-4 text-[10px] font-mono text-grind-muted tracking-wider uppercase font-bold">
                {dayData.phaseName}
              </div>
            ) : null}
            <div
              role="button"
              tabIndex={0}
              id={active ? 'sidebar-active' : undefined}
              onClick={() => onSelectWork(workDay)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectWork(workDay);
                }
              }}
              className={`flex items-center gap-2 py-1.5 px-4 cursor-pointer border-l-2 transition ${
                done ? 'opacity-50' : ''
              } ${active ? 'bg-[rgba(124,92,252,.1)] border-l-grind-accent' : 'border-l-transparent hover:bg-grind-surface2 hover:border-l-grind-border'}`}
            >
              <span
                role="checkbox"
                aria-checked={done}
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleDayDone(workDay);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    onToggleDayDone(workDay);
                  }
                }}
                className={`w-3.5 h-3.5 rounded border flex-shrink-0 flex items-center justify-center text-[9px] cursor-pointer transition ${
                  done ? 'bg-grind-accent2 border-grind-accent2 text-black' : 'border-grind-border'
                }`}
              >
                {done ? '✓' : ''}
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: getPhaseColor(dayData.phase) }}
              />
              <span className={`font-mono text-[10px] text-grind-muted flex-shrink-0 ${done ? 'line-through' : ''}`}>
                D{workDay}
              </span>
              <span
                className={`text-xs text-grind-text flex-1 leading-snug line-clamp-2 ${done ? 'line-through' : ''}`}
              >
                {dayData.title}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
