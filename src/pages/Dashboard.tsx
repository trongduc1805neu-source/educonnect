import { useAuth } from '../contexts/AuthContext';
import { StudentDashboard } from './StudentDashboard';
import { TutorDashboard } from './TutorDashboard';
import { Navigate } from 'react-router-dom';

export function Dashboard() {
  const { user, userData, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (userData && !userData.onboardingCompleted) {
    return <Navigate to="/onboarding" replace />;
  }

  if (userData?.role === 'tutor') {
    return <TutorDashboard />;
  }

  return <StudentDashboard />;
}
