import { useCallback, useEffect, useRef, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase.js';
import { TOTAL_WORK_DAYS } from '../utils/roadmap.js';

const LS_CHECKED = 'ai_grind_checked';
const LS_DAY = 'ai_grind_day';

function loadLocal() {
  let checked = {};
  let currentDay = 1;
  try {
    checked = JSON.parse(localStorage.getItem(LS_CHECKED) || '{}');
  } catch {
    checked = {};
  }
  const d = parseInt(localStorage.getItem(LS_DAY) || '1', 10);
  if (!Number.isNaN(d)) currentDay = d;
  return { checked, currentDay };
}

export function useGrindProgress() {
  const [checked, setChecked] = useState(() => loadLocal().checked);
  const [currentDay, setCurrentDay] = useState(() => loadLocal().currentDay);
  const [remoteReady, setRemoteReady] = useState(false);
  const saveTimer = useRef(null);

  const persistLocal = useCallback((c, day) => {
    localStorage.setItem(LS_CHECKED, JSON.stringify(c));
    localStorage.setItem(LS_DAY, String(day));
  }, []);

  useEffect(() => {
    const u = auth.currentUser;
    if (!u) {
      setRemoteReady(true);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const ref = doc(db, 'users', u.uid, 'grind', 'state');
        const snap = await getDoc(ref);
        if (cancelled) return;
        if (snap.exists()) {
          const data = snap.data();
          setChecked(data.checked && typeof data.checked === 'object' ? data.checked : {});
          const d = parseInt(data.currentDay, 10);
          if (!Number.isNaN(d) && d >= 1 && d <= TOTAL_WORK_DAYS) {
            setCurrentDay(d);
            persistLocal(data.checked || {}, d);
          }
        }
      } catch {
        /* keep local */
      } finally {
        if (!cancelled) setRemoteReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [persistLocal]);

  const scheduleRemoteSave = useCallback(
    (c, day) => {
      const u = auth.currentUser;
      if (!u || !remoteReady) return;
      if (saveTimer.current) clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(async () => {
        try {
          await setDoc(
            doc(db, 'users', u.uid, 'grind', 'state'),
            { checked: c, currentDay: day, updatedAt: new Date().toISOString() },
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
      setChecked((prev) => {
        const next = typeof updater === 'function' ? updater(prev) : updater;
        persistLocal(next, currentDay);
        scheduleRemoteSave(next, currentDay);
        return next;
      });
    },
    [currentDay, persistLocal, scheduleRemoteSave],
  );

  const setDay = useCallback(
    (day) => {
      const d = Math.max(1, Math.min(TOTAL_WORK_DAYS, day));
      setCurrentDay(d);
      persistLocal(checked, d);
      scheduleRemoteSave(checked, d);
    },
    [checked, persistLocal, scheduleRemoteSave],
  );

  return {
    checked,
    setCheckedMap,
    currentDay,
    setDay,
    remoteReady,
  };
}
