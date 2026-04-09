import { Navigate, Route, Routes } from 'react-router-dom';
import MobileFrame from './components/MobileFrame';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import './components/components.css';
import './pages/pages.css';

function App() {
  return (
    <div className="app-shell">
      <MobileFrame>
        <main className="screen-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </MobileFrame>
    </div>
  );
}

export default App;
