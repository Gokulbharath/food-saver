import { Link } from "react-router-dom";

const NavbarReceiver = () => {
  return (
    <>
      <style>
        {`
          /* Navbar Container */
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: white;
            padding: 0 20px;
            height: 80px;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 10;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            box-sizing: border-box;
          }

          /* Navbar Left Section: Logo and Text */
          .navbar-left {
            display: flex;
            align-items: center;
            gap: 15px;
            flex: 1; /* Allow spacing */
          }

          .navbar-logo-image {
            width: 60px;
            height: 60px;
          }

          .navbar-logo-text {
            font-size: 1.8rem;
            color: #ff5722;
            font-weight: bold;
          }

          /* Navbar Center Section: Links */
          .navbar-center {
            display: flex;
            justify-content: center;
            gap: 50px; /* Adjust gap between links */
            flex: 2; /* Center the links */
            font-size: 1rem;
          }

          .navbar-center a {
            text-decoration: none;
            color: black;
            font-weight: 500;
            transition: color 0.3s ease;
          }

          .navbar-center a:hover {
            color: #ff5722;
            border-bottom: 2px solid #ff5722;
          }

          /* Navbar Right Section: Logout Button */
          .navbar-right {
            flex: 1; /* Maintain space to the right */
            display: flex;
            justify-content: flex-end;
          }

          .logout-button {
            background-color: #ff5722;
            color: white;
            text-decoration: none;
            font-size: 1rem;
            font-weight: bold;
            padding: 10px 20px;
            border-radius: 5px;
            transition: background-color 0.3s ease;
            display: inline-block;
          }

          .logout-button:hover {
            background-color: #e64a19;
          }

          @media (max-width: 768px) {
            /* Mobile Responsiveness */
            .navbar {
              padding: 0 10px;
            }

            .navbar-center {
              gap: 20px;
            }

            .logout-button {
              padding: 8px 16px;
              font-size: 0.9rem;
            }
          }
        `}
      </style>
      <nav className="navbar">
        {/* Left Section: Logo and Text */}
        <div className="navbar-left">
          <img
            src="/logo.png"
            alt="Logo"
            className="navbar-logo-image"
          />
          <span className="navbar-logo-text">Food Saver</span>
        </div>

        {/* Center Section: Word Links */}
        <div className="navbar-center">
          <Link to="/receiver">Home</Link>
          <Link to="/receiver/request-food">Request Food</Link>
          <Link to="/receiver/receive-food">Receive Food</Link>
        </div>

        {/* Right Section: Logout Button */}
        <div className="navbar-right">
          <Link to="/logout" className="logout-button">Logout</Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarReceiver;
