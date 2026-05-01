import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import { SignupPage } from './pages/SignupPage.jsx';
import { ProfilePage } from './pages/ProfilePage.jsx';
import { GrindApp } from './pages/GrindApp.jsx';

function AuthSkeleton() {
  return (
    <div className="min-h-screen bg-grind-bg flex items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-4 animate-pulse">
        <div className="h-10 bg-grind-surface2 rounded-lg border border-grind-border" />
        <div className="h-32 bg-grind-surface rounded-xl border border-grind-border" />
        <div className="h-10 bg-grind-surface2 rounded-lg border border-grind-border" />
      </div>
    </div>
  );
}

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <AuthSkeleton />;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

function PublicOnly({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <AuthSkeleton />;
  if (user) return <Navigate to="/" replace />;
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicOnly>
            <LoginPage />
          </PublicOnly>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicOnly>
            <SignupPage />
          </PublicOnly>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <GrindApp />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
