import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/login', label: 'Login' },
  { path: '/signup', label: 'Signup' },
  { path: '/profile', label: 'Profile' }
];

function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Primary">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`.trim()}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNav;
