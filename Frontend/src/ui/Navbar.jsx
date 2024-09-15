import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/home" className="navbar-logo">
          Fruits AI
        </Link>
      </div>
      <div className="navbar-actions">
        <Link to="/" className="navbar-login-button">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
