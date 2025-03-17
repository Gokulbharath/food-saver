import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout actions: Clear tokens, session data, etc.
    localStorage.removeItem("authToken"); // Example: Clear token from localStorage
    sessionStorage.clear(); // Clear session storage
    console.log("User logged out");

    // Redirect to the Home page
    navigate("/"); // Redirect to the home page
  }, [navigate]);

  return null; // No UI is needed
};

export default Logout;
