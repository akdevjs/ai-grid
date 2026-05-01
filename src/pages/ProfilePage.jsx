import { useState } from 'react';
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase.js';
import { useAuth } from '../context/AuthContext.jsx';
import { uploadUserAvatar } from '../lib/uploadAvatar.js';

export function ProfilePage() {
  const { user, profile, signOut, refreshProfile } = useAuth();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const displayPhoto = preview || profile?.photoURL || user?.photoURL || '';
  const displayName = profile?.displayName || user?.displayName || 'User';

  const onFile = (ev) => {
    const f = ev.target.files?.[0];
    setMessage('');
    setError('');
    if (!f) {
      setFile(null);
      setPreview('');
      return;
    }
    if (!f.type.startsWith('image/')) {
      setError('Please choose an image file.');
      return;
    }
    if (f.size > 4 * 1024 * 1024) {
      setError('Image must be under 4 MB.');
      return;
    }
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const savePhoto = async () => {
    if (!file || !user) return;
    setError('');
    setMessage('');
    setUploading(true);
    try {
      const url = await uploadUserAvatar(user.uid, file);
      await updateProfile(user, { photoURL: url });
      await setDoc(
        doc(db, 'users', user.uid),
        { photoURL: url, updatedAt: serverTimestamp() },
        { merge: true },
      );
      await refreshProfile();
      setFile(null);
      setPreview('');
      setMessage('Profile picture updated.');
    } catch (e) {
      setError(e?.message || 'Upload failed. Check connection and try again.');
    } finally {
      setUploading(false);
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
          <p className="text-sm text-grind-muted mb-6">Update your photo anytime.</p>

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

          <label className="block text-xs font-mono text-grind-muted mb-2">New profile picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={onFile}
            className="w-full text-sm text-grind-muted file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border file:border-grind-border file:bg-grind-surface2 file:text-grind-text file:text-xs file:cursor-pointer mb-4"
          />
          <button
            type="button"
            onClick={savePhoto}
            disabled={!file || uploading}
            className="w-full py-3 rounded-lg bg-grind-accent border border-grind-accent text-white text-sm font-semibold hover:bg-[#6a4de8] transition disabled:opacity-40 mb-3"
          >
            {uploading ? 'Uploading…' : 'Save new photo'}
          </button>
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
