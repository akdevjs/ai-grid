import { useState } from 'react';
import { Link } from 'react-router-dom';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase.js';
import { useAuth } from '../context/AuthContext.jsx';
import { getAvatarDisplayUrl, isGoogleUser } from '../lib/avatarUrl.js';

export function ProfilePage() {
  const { user, profile, signOut, refreshProfile } = useAuth();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const displayPhoto = user ? getAvatarDisplayUrl(user, profile) : '';
  const displayName = profile?.displayName || user?.displayName || 'User';

  const newRandomAvatar = async () => {
    if (!user) return;
    setError('');
    setMessage('');
    setBusy(true);
    try {
      const seed =
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      await setDoc(
        doc(db, 'users', user.uid),
        { avatarSeed: seed, updatedAt: serverTimestamp() },
        { merge: true },
      );
      await refreshProfile();
      setMessage('New avatar applied.');
    } catch (e) {
      setError(e?.message || 'Could not update avatar. Try again.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-grind-bg p-4 sm:p-6">
      <div className="max-w-md mx-auto">
        <Link
          to="/"
          className="inline-flex text-sm text-grind-muted hover:text-grind-accent2 mb-6 font-medium"
        >
          ← Back to grind
        </Link>
        <div className="bg-grind-surface border border-grind-border rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-grind-accent to-grind-accent2" />
          <h1 className="text-lg font-semibold text-grind-text mb-1">Profile</h1>
          <p className="text-sm text-grind-muted mb-6">
            Google accounts use your Google photo. Email accounts use a free illustration from{' '}
            <a
              href="https://www.dicebear.com"
              target="_blank"
              rel="noreferrer"
              className="text-grind-accent2 hover:underline"
            >
              DiceBear
            </a>
            .
          </p>

          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="w-24 h-24 rounded-full border-2 border-grind-border overflow-hidden bg-grind-surface2">
              {displayPhoto ? (
                <img src={displayPhoto} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-grind-muted">—</div>
              )}
            </div>
            <p className="font-medium text-grind-text">{displayName}</p>
            <p className="text-xs text-grind-muted break-all">{user?.email}</p>
          </div>

          {error ? (
            <div className="mb-3 text-sm text-[#ffaaaa] bg-[rgba(255,107,107,.06)] border border-[rgba(255,107,107,.2)] rounded-lg px-3 py-2">
              {error}
            </div>
          ) : null}
          {message ? (
            <div className="mb-3 text-sm text-[#7af5c8] bg-[rgba(0,229,160,.06)] border border-[rgba(0,229,160,.2)] rounded-lg px-3 py-2">
              {message}
            </div>
          ) : null}

          {!user || isGoogleUser(user) ? (
            <p className="text-xs text-grind-muted mb-4">
              Signed in with Google — your profile photo comes from Google.
            </p>
          ) : (
            <button
              type="button"
              onClick={newRandomAvatar}
              disabled={busy}
              className="w-full py-3 rounded-lg bg-grind-accent border border-grind-accent text-white text-sm font-semibold hover:bg-[#6a4de8] transition disabled:opacity-40 mb-3"
            >
              {busy ? 'Updating…' : 'New random avatar'}
            </button>
          )}
          <button
            type="button"
            onClick={() => signOut()}
            className="w-full py-3 rounded-lg bg-grind-surface2 border border-grind-border text-grind-text text-sm font-medium hover:border-grind-accent3"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
