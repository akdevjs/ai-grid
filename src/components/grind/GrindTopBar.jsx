import { Link } from 'react-router-dom';
import { TOTAL_WORK_DAYS } from '../../utils/roadmap.js';

export function GrindTopBar({
  menuOpen,
  onMenuToggle,
  progressPct,
  currentWorkDayLabel,
  streak,
  user,
  profile,
}) {
  const photo = profile?.photoURL || user?.photoURL;
  const name = profile?.displayName || user?.displayName || 'Account';

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-[rgba(10,10,15,0.92)] backdrop-blur-md border-b border-grind-border px-4 h-14 flex items-center gap-3">
      <button
        type="button"
        className="md:hidden bg-transparent border-none text-grind-text text-lg cursor-pointer p-1"
        aria-label="Open menu"
        onClick={onMenuToggle}
      >
        ☰
      </button>
      <div className="font-mono text-xs text-grind-accent font-bold tracking-wider whitespace-nowrap">⚡ AI GRIND</div>
      <div className="flex-1 h-1 bg-grind-surface2 rounded-sm overflow-hidden min-w-0">
        <div
          className="h-full rounded-sm transition-all duration-300 ease-out bg-gradient-to-r from-grind-accent to-grind-accent2"
          style={{ width: `${progressPct}%` }}
        />
      </div>
      <div className="font-mono text-[11px] text-grind-muted whitespace-nowrap hidden sm:block">
        Day {currentWorkDayLabel} / {TOTAL_WORK_DAYS}
      </div>
      <div className="font-mono text-[11px] text-grind-accent2 whitespace-nowrap hidden sm:block bg-grind-surface2 border border-grind-border rounded-full px-2.5 py-1">
        🔥 {streak} day streak
      </div>
      <Link
        to="/profile"
        className="flex items-center gap-2 rounded-full pl-1 pr-2 py-1 border border-grind-border bg-grind-surface2 hover:border-grind-accent transition flex-shrink-0"
      >
        {photo ? (
          <img src={photo} alt="" className="w-7 h-7 rounded-full object-cover" />
        ) : (
          <div className="w-7 h-7 rounded-full bg-grind-border text-[10px] flex items-center justify-center text-grind-muted">
            ?
          </div>
        )}
        <span className="text-[11px] text-grind-text max-w-[72px] truncate hidden md:inline">{name}</span>
      </Link>
    </header>
  );
}
