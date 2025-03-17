import { Link, useLocation } from "react-router-dom";
import "./../styles/navbarHome.css";

const NavbarHome = () => {
  const location = useLocation();

  // Check if the current path is either "/login" or "/signup"
  const isLoginOrSignUpPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="logo.png" /* Replace with your logo image path */
          alt="Food Saver Logo"
          className="navbar-logo-image"
        />
        <span className="navbar-logo-text">FOOD SAVER</span>
      </div>
      <div className="navbar-right">
        {/* Conditionally render the login button */}
        {!isLoginOrSignUpPage && (
          <Link to="/login" className="navbar-login-button">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavbarHome;
