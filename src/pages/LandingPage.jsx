import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <section className="page landing-page">
      <div className="landing-content">
        <Header
          title="Welcome to PopX"
          subtitle="Create an account or log in to manage your profile."
        />
        <div className="stack">
          <Button onClick={() => navigate('/signup')}>Create Account</Button>
          <Button variant="secondary" onClick={() => navigate('/login')}>
            Already Registered? Login
          </Button>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
