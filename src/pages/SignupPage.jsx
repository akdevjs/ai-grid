import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase.js';
import { useAuth } from '../context/AuthContext.jsx';
import { uploadUserAvatar } from '../lib/uploadAvatar.js';

function mapAuthError(code) {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'That email is already registered. Try signing in.';
    case 'auth/invalid-email':
      return 'Enter a valid email address.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.';
    default:
      return 'Could not create account. Please try again.';
  }
}

export function SignupPage() {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');

  const onAvatar = (ev) => {
    const f = ev.target.files?.[0];
    setErrors((e) => ({ ...e, avatar: undefined }));
    if (!f) {
      setAvatar(null);
      setAvatarPreview('');
      return;
    }
    if (!f.type.startsWith('image/')) {
      setErrors((e) => ({ ...e, avatar: 'Please choose an image file.' }));
      setAvatar(null);
      setAvatarPreview('');
      return;
    }
    if (f.size > 4 * 1024 * 1024) {
      setErrors((e) => ({ ...e, avatar: 'Image must be under 4 MB.' }));
      setAvatar(null);
      setAvatarPreview('');
      return;
    }
    setAvatar(f);
    setAvatarPreview(URL.createObjectURL(f));
  };

  const validate = () => {
    const e = {};
    if (!displayName.trim()) e.displayName = 'Display name is required.';
    if (!email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = 'Enter a valid email.';
    if (!password) e.password = 'Password is required.';
    else if (password.length < 6) e.password = 'Use at least 6 characters.';
    if (password !== confirm) e.confirm = 'Passwords do not match.';
    if (!avatar) e.avatar = 'Profile picture is required for email sign-up.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    setFormError('');
    if (!validate()) return;
    setSubmitting(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
      const { user } = cred;
      const url = await uploadUserAvatar(user.uid, avatar);
      await updateProfile(user, { displayName: displayName.trim(), photoURL: url });
      await setDoc(
        doc(db, 'users', user.uid),
        {
          displayName: displayName.trim(),
          email: email.trim(),
          photoURL: url,
          createdAt: serverTimestamp(),
        },
        { merge: true },
      );
      navigate('/', { replace: true });
    } catch (err) {
      setFormError(mapAuthError(err?.code) || err?.message || 'Sign up failed.');
    } finally {
      setSubmitting(false);
    }
  };

  const onGoogle = async () => {
    setFormError('');
    setGoogleLoading(true);
    try {
      await signInWithGoogle();
      navigate('/', { replace: true });
    } catch (err) {
      setFormError(err?.message || 'Google sign-in failed.');
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-grind-bg flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-[400px] bg-grind-surface border border-grind-border rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-grind-accent to-grind-accent2" />
        <h1 className="font-mono text-xs text-grind-accent font-bold tracking-wider mb-1">⚡ AI GRIND</h1>
        <p className="text-xl font-semibold text-grind-text mb-1">Create account</p>
        <p className="text-sm text-grind-muted mb-6">Email sign-up requires a profile photo. Google includes one automatically — you can change it later in Profile.</p>

        {formError ? (
          <div className="mb-4 text-sm text-[#ffaaaa] bg-[rgba(255,107,107,.06)] border border-[rgba(255,107,107,.2)] rounded-lg px-3 py-2">
            {formError}
          </div>
        ) : null}

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-grind-muted mb-1.5">Profile photo *</label>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-grind-border overflow-hidden bg-grind-surface2 flex-shrink-0">
                {avatarPreview ? (
                  <img src={avatarPreview} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-grind-muted text-xs">?</div>
                )}
              </div>
              <label className="flex-1 cursor-pointer">
                <span className="inline-flex items-center justify-center w-full py-2.5 px-3 rounded-lg border border-grind-border bg-grind-surface2 text-sm text-grind-text hover:border-grind-accent transition">
                  Choose image
                </span>
                <input type="file" accept="image/*" className="hidden" onChange={onAvatar} />
              </label>
            </div>
            {errors.avatar ? <p className="text-xs text-grind-accent3 mt-1">{errors.avatar}</p> : null}
          </div>

          <div>
            <label className="block text-xs font-mono text-grind-muted mb-1.5">Display name</label>
            <input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full bg-grind-surface2 border border-grind-border rounded-lg px-3 py-2.5 text-sm text-grind-text focus:outline-none focus:border-grind-accent"
              placeholder="Your name"
            />
            {errors.displayName ? (
              <p className="text-xs text-grind-accent3 mt-1">{errors.displayName}</p>
            ) : null}
          </div>
          <div>
            <label className="block text-xs font-mono text-grind-muted mb-1.5">Email</label>
            <input
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-grind-surface2 border border-grind-border rounded-lg px-3 py-2.5 text-sm text-grind-text focus:outline-none focus:border-grind-accent"
              placeholder="you@example.com"
            />
            {errors.email ? <p className="text-xs text-grind-accent3 mt-1">{errors.email}</p> : null}
          </div>
          <div>
            <label className="block text-xs font-mono text-grind-muted mb-1.5">Password</label>
            <input
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-grind-surface2 border border-grind-border rounded-lg px-3 py-2.5 text-sm text-grind-text focus:outline-none focus:border-grind-accent"
              placeholder="At least 6 characters"
            />
            {errors.password ? <p className="text-xs text-grind-accent3 mt-1">{errors.password}</p> : null}
          </div>
          <div>
            <label className="block text-xs font-mono text-grind-muted mb-1.5">Confirm password</label>
            <input
              type="password"
              autoComplete="new-password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full bg-grind-surface2 border border-grind-border rounded-lg px-3 py-2.5 text-sm text-grind-text focus:outline-none focus:border-grind-accent"
              placeholder="Repeat password"
            />
            {errors.confirm ? <p className="text-xs text-grind-accent3 mt-1">{errors.confirm}</p> : null}
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-lg bg-grind-accent border border-grind-accent text-white text-sm font-semibold hover:bg-[#6a4de8] transition disabled:opacity-50"
          >
            {submitting ? 'Creating account…' : 'Sign up'}
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-grind-border" />
          <span className="text-[10px] font-mono text-grind-muted uppercase tracking-wider">or</span>
          <div className="flex-1 h-px bg-grind-border" />
        </div>

        <button
          type="button"
          onClick={onGoogle}
          disabled={googleLoading}
          className="w-full py-3 rounded-lg bg-grind-surface2 border border-grind-border text-grind-text text-sm font-medium hover:border-grind-accent hover:bg-[rgba(124,92,252,.08)] transition disabled:opacity-50"
        >
          {googleLoading ? 'Connecting…' : 'Sign up with Google'}
        </button>

        <p className="text-center text-sm text-grind-muted mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-grind-accent2 hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
