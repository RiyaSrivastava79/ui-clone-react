import { useNavigate } from 'react-router-dom';

function Header({ title, subtitle, showBack = false }) {
  const navigate = useNavigate();

  return (
    <header className="page-header">
      {showBack ? (
        <button className="back-btn" onClick={() => navigate(-1)} aria-label="Go back">
          Back
        </button>
      ) : null}
      <h1>{title}</h1>
      {subtitle ? <p>{subtitle}</p> : null}
    </header>
  );
}

export default Header;
