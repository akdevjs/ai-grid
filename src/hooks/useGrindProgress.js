import { useCallback, useEffect, useRef, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase.js';
import { useAuth } from '../context/AuthContext.jsx';
import { allDays, TOTAL_WORK_DAYS } from '../utils/roadmap.js';

function lsCheckedKey(uid) {
  return `ai_grind_checked_${uid}`;
}
function lsDayKey(uid) {
  return `ai_grind_day_${uid}`;
}

function loadLocal(uid) {
  if (!uid) return { checked: {}, currentDay: 1 };
  let checked = {};
  let currentDay = 1;
  try {
    checked = JSON.parse(localStorage.getItem(lsCheckedKey(uid)) || '{}');
  } catch {
    checked = {};
  }
  const d = parseInt(localStorage.getItem(lsDayKey(uid)) || '1', 10);
  if (!Number.isNaN(d)) currentDay = d;
  return { checked, currentDay };
}

/** Derive which work days are fully complete from per-task checks. */
function computeCompletedDaysMap(checkedMap) {
  const out = {};
  for (const d of allDays) {
    if (!d.tasks?.length) continue;
    if (d.tasks.every((t) => checkedMap[t.id])) out[String(d.day)] = true;
  }
  return out;
}

export function useGrindProgress() {
  const { user } = useAuth();
  const uid = user?.uid ?? null;

  const [checked, setChecked] = useState({});
  const [currentDay, setCurrentDay] = useState(1);
  const [remoteReady, setRemoteReady] = useState(false);
  const saveTimer = useRef(null);

  const persistLocal = useCallback((c, day, forUid) => {
    if (!forUid) return;
    localStorage.setItem(lsCheckedKey(forUid), JSON.stringify(c));
    localStorage.setItem(lsDayKey(forUid), String(day));
  }, []);

  useEffect(() => {
    if (!uid) {
      setChecked({});
      setCurrentDay(1);
      setRemoteReady(true);
      return;
    }

    const local = loadLocal(uid);
    setChecked(local.checked);
    setCurrentDay(local.currentDay);
    setRemoteReady(false);

    let cancelled = false;
    (async () => {
      try {
        const ref = doc(db, 'users', uid, 'grind', 'state');
        const snap = await getDoc(ref);
        if (cancelled) return;
        if (snap.exists()) {
          const data = snap.data();
          const remoteChecks =
            data.taskChecks && typeof data.taskChecks === 'object'
              ? data.taskChecks
              : data.checked && typeof data.checked === 'object'
                ? data.checked
                : {};
          setChecked(remoteChecks);
          const d = parseInt(data.currentDay, 10);
          if (!Number.isNaN(d) && d >= 1 && d <= TOTAL_WORK_DAYS) {
            setCurrentDay(d);
            persistLocal(remoteChecks, d, uid);
          } else {
            persistLocal(remoteChecks, local.currentDay, uid);
          }
        } else {
          persistLocal(local.checked, local.currentDay, uid);
        }
      } catch {
        if (!cancelled) persistLocal(local.checked, local.currentDay, uid);
      } finally {
        if (!cancelled) setRemoteReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [uid, persistLocal]);

  const scheduleRemoteSave = useCallback(
    (c, day, forUid) => {
      if (!forUid || !remoteReady) return;
      if (saveTimer.current) clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(async () => {
        try {
          const completedDays = computeCompletedDaysMap(c);
          await setDoc(
            doc(db, 'users', forUid, 'grind', 'state'),
            {
              userId: forUid,
              taskChecks: c,
              checked: c,
              currentDay: day,
              completedDays,
              updatedAt: new Date().toISOString(),
            },
            { merge: true },
          );
        } catch {
          /* offline */
        }
      }, 400);
    },
    [remoteReady],
  );

  const setCheckedMap = useCallback(
    (updater) => {
      if (!uid) return;
      setChecked((prev) => {
        const next = typeof updater === 'function' ? updater(prev) : updater;
        persistLocal(next, currentDay, uid);
        scheduleRemoteSave(next, currentDay, uid);
        return next;
      });
    },
    [currentDay, persistLocal, scheduleRemoteSave, uid],
  );

  const setDay = useCallback(
    (day) => {
      if (!uid) return;
      const d = Math.max(1, Math.min(TOTAL_WORK_DAYS, day));
      setCurrentDay(d);
      persistLocal(checked, d, uid);
      scheduleRemoteSave(checked, d, uid);
    },
    [checked, persistLocal, scheduleRemoteSave, uid],
  );

  return {
    checked,
    setCheckedMap,
    currentDay,
    setDay,
    remoteReady,
  };
}
