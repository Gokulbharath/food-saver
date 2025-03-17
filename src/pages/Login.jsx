import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../firebaseConfig"; // Import Firebase auth
import "./../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("receiver"); // Default role is receiver
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (role === "receiver") {
        navigate("/receiver");
      } else if (role === "donor") {
        navigate("/donor");
      } else if (role === "groceryDonor") {
        navigate("/grocery");
      }
    } catch (error) {
      alert(error.message); // Display Firebase error message
    }
  };


  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <div className="role-selection">
          <label>
            <input
              type="radio"
              value="receiver"
              checked={role === "receiver"}
              onChange={(e) => setRole(e.target.value)}
            />
            Receiver
          </label>
          <label>
            <input
              type="radio"
              value="donor"
              checked={role === "donor"}
              onChange={(e) => setRole(e.target.value)}
            />
            Donor
          </label>
          <label>
            <input
              type="radio"
              value="groceryDonor"
              checked={role === "groceryDonor"}
              onChange={(e) => setRole(e.target.value)}
            />
            Grocery 
          </label>
        </div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
        <div className="signup-link">
          Dont have an account?{" "}
          <Link to="/signup" className="signup-button">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
