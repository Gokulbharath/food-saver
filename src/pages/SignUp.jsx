import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../firebaseConfig"; // Import Firebase auth
import "./../styles/signup.css";

const Signup = () => {
  const [role, setRole] = useState("receiver"); // Default role is receiver
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
    extraDetail: "",
    ageGroup: "both", // Default for receivers
    acceptPolicy: false,
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (role === "groceryDonor" && !formData.acceptPolicy) {
      alert("Please accept the commission policy.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log({ role, formData });
      alert("Signup successful!");
      window.location.href = "/login"; // Redirect to login page
    } catch (error) {
      alert(error.message); // Display Firebase error message
    }
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <h3>Select Role</h3>
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

        {/* Common Fields */}
        <input
          type="text"
          placeholder={
            role === "donor"
              ? "Hotel/Catering Service Name"
              : role === "receiver"
              ? "Organization Name"
              : "Store Name"
          }
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          required
        />

        {/* Conditional Fields */}
        {role === "receiver" && (
          <>
            <input
              type="number"
              placeholder="Number of People in Organization"
              value={formData.extraDetail}
              onChange={(e) =>
                setFormData({ ...formData, extraDetail: e.target.value })
              }
              required
            />
            <div className="age-group">
              <label>Age Group:</label>
              <select
                value={formData.ageGroup}
                onChange={(e) =>
                  setFormData({ ...formData, ageGroup: e.target.value })
                }
              >
                <option value="children">Children</option>
                <option value="adults">Adults</option>
                <option value="both">Both</option>
              </select>
            </div>
          </>
        )}

        {role === "groceryDonor" && (
          <div className="policy-section">
            <label>
              <input
                type="checkbox"
                checked={formData.acceptPolicy}
                onChange={(e) =>
                  setFormData({ ...formData, acceptPolicy: e.target.checked })
                }
              />
              Accept Commission Policy
            </label>
          </div>
        )}

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
