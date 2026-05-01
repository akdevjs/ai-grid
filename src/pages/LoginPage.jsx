import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase.js';
import { useAuth } from '../context/AuthContext.jsx';

function mapAuthError(code) {
  switch (code) {
    case 'auth/invalid-email':
      return 'Enter a valid email address.';
    case 'auth/user-disabled':
      return 'This account has been disabled.';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Invalid email or password.';
    case 'auth/too-many-requests':
      return 'Too many attempts. Try again later.';
    default:
      return 'Could not sign in. Please try again.';
  }
}

export function LoginPage() {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');

  const validate = () => {
    const e = {};
    if (!email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = 'Enter a valid email.';
    if (!password) e.password = 'Password is required.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    setFormError('');
    if (!validate()) return;
    setSubmitting(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      navigate('/', { replace: true });
    } catch (err) {
      setFormError(mapAuthError(err?.code));
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
        <p className="text-xl font-semibold text-grind-text mb-1">Welcome back</p>
        <p className="text-sm text-grind-muted mb-6">Sign in to continue your roadmap.</p>

        {formError ? (
          <div className="mb-4 text-sm text-[#ffaaaa] bg-[rgba(255,107,107,.06)] border border-[rgba(255,107,107,.2)] rounded-lg px-3 py-2">
            {formError}
          </div>
        ) : null}

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-grind-muted mb-1.5">Email</label>
            <input
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-grind-surface2 border border-grind-border rounded-lg px-3 py-2.5 text-sm text-grind-text placeholder:text-grind-muted focus:outline-none focus:border-grind-accent"
              placeholder="you@example.com"
            />
            {errors.email ? <p className="text-xs text-grind-accent3 mt-1">{errors.email}</p> : null}
          </div>
          <div>
            <label className="block text-xs font-mono text-grind-muted mb-1.5">Password</label>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-grind-surface2 border border-grind-border rounded-lg px-3 py-2.5 text-sm text-grind-text placeholder:text-grind-muted focus:outline-none focus:border-grind-accent"
              placeholder="••••••••"
            />
            {errors.password ? <p className="text-xs text-grind-accent3 mt-1">{errors.password}</p> : null}
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-lg bg-grind-accent border border-grind-accent text-white text-sm font-semibold hover:bg-[#6a4de8] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'Signing in…' : 'Sign in'}
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
          {googleLoading ? 'Connecting…' : 'Continue with Google'}
        </button>

        <p className="text-center text-sm text-grind-muted mt-6">
          No account?{' '}
          <Link to="/signup" className="text-grind-accent2 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
