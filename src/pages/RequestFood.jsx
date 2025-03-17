import { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";

const RequestFoodDonation = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    foodType: "",
    justification: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.phone || !formData.email || !formData.address || !formData.foodType || !formData.justification) {
      alert("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const db = getDatabase();
      const requestRef = ref(db, "foodRequests");
      await push(requestRef, {
        ...formData,
        createdAt: new Date().toISOString(),
      });
      alert("Food request submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        foodType: "",
        justification: "",
      });
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <style>{`
        /* General Styles */
        body {
          margin: 0;
          font-family: "Poppins", sans-serif;
          background-color: #f9f9f9;
          color: #333;
        }

        .home-page {
          display: flex;
          flex-direction: column;
          padding: 20px;
          margin-top: 200px;
        }

        /* Container Styles */
        .container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem; /* Gap between sections */
          background-color: #ffffff;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          border-radius: 15px;
          margin: 10rem ;
          padding: 2rem;
          max-width: 1200px;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            gap: 1.5rem; /* Reduce gap on small screens */
          }
        }

        /* Form Section */
        .form-section {
          width: 50%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-section label {
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .form-section input,
        .form-section textarea {
          width: 100%;
          padding: 10px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #ffffff;
        }

        .form-section button {
          padding: 10px 20px;
          font-size: 1rem;
          color: #ffffff;
          background-color: #ff5722;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .form-section button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        /* Text/Image Section */
        .text-section {
          width: 50%;
        }

        .text-section h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .text-section h2 span {
          display: inline-block;
        }

        .text-section h2 span.highlight {
          color: #ff5722;
        }

        .text-section p {
          font-size: 1.2rem;
          color: #333333;
          margin-bottom: 1rem;
        }

        .image-section img {
          width: 120%;
          height: 350%;
          object-fit: cover;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <div className="home-page">
        <div className="container">
          {/* Form Section */}
          <div className="form-section">
            <h2>Request Food Donation</h2>
            <form onSubmit={handleSubmit}>
              <label>Name Of Trust:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            <label>Phone Number:</label>
            <input
              type="text" // Use "text" instead of "tel" for better compatibility
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value;
                // Ensure only numbers are entered
                if (/^\d*$/.test(value)) {
                  setFormData({ ...formData, phone: value });
                }
              }}
              maxLength="10" // Restrict to 10 digits
              placeholder="Enter your mobile number"
              required
            />


              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />

              <label>Food Type:</label>
              <input
                type="text"
                name="foodType"
                value={formData.foodType}
                onChange={handleChange}
                placeholder="e.g., Vegetables, Fruits, Cooked Meals"
                required
              />

              <label>Justification for Requesting:</label>
              <textarea
                name="justification"
                value={formData.justification}
                onChange={handleChange}
                required
              />

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>

          {/* Text/Image Section */}
          <div className="text-section">
            <h2>
              Welcome to <span className="highlight">Food Saver</span>
            </h2>
            <p>
              Provide the necessary details to request food donations. We ensure
              that your needs are met with utmost priority.
            </p>
            <div className="image-section">
              {/* Replace the placeholder URL with your image */}
              <img
                src="/food1.jpg"
                alt="Food Donation"
              />
            </div>
            <p>
            I appreciate the opportunity to save this food. Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestFoodDonation;
