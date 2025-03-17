import { Link } from "react-router-dom";

const NavbarDonor = () => {
  return (
    <>
      <style>
        {`
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

          .navbar-left {
            display: flex;
            align-items: center;
            gap: 15px;
            flex: 1;
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

          .navbar-center {
            display: flex;
            justify-content: center;
            gap: 50px;
            flex: 2;
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

          .navbar-right {
            flex: 1;
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
        {/* Left Section */}
        <div className="navbar-left">
          <img
            src="/logo.png"
            alt="Logo"
            className="navbar-logo-image"
          />
          <span className="navbar-logo-text">Food Saver</span>
        </div>

        {/* Center Section */}
        <div className="navbar-center">
          <Link to="/donor">Home</Link> {/* Home Link */}
          <Link to="/donor/donate-food">Donate Food</Link>
          <Link to="/donor/accept-requests">Accept Requests</Link>
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          <Link to="/logout" className="logout-button">Logout</Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarDonor;
