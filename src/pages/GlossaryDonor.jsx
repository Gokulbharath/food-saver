import { useState } from "react";
import { database } from "../firebaseConfig";
import { ref, push } from "firebase/database";

const GlossaryDonor = () => {
  const [formData, setFormData] = useState({
    storeName: "",
    phoneNumber: "",
    email: "",
    product: "",
    price: "",
    justification: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const glossaryRef = ref(database, "glossaryDonations");
    push(glossaryRef, formData)
      .then(() => {
        setSuccessMessage("Thank you for your generous contribution!");
        setFormData({
          storeName: "",
          phoneNumber: "",
          email: "",
          product: "",
          price: "",
          justification: "",
        });
      })
      .catch((error) => {
        alert("Error submitting form: " + error.message);
      });
  };

  return (
    <div>
      <style>{`
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
          margin-top: 400px;
        }

        .container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
          background-color: #ffffff;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          border-radius: 15px;
          margin: 0 auto;
          padding: 3rem;
          max-width: 1200px;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            gap: 1.5rem;
          }
        }

        .form-section {
          width: 50%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        h2 {
            text-align: center;
            color: #ff5722;
            margin-top: 20px;
            font-size: 2.5rem;
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

        .form-section button:hover {
          background-color: #e64a19;
        }

        .success-message {
          color: #4caf50;
          font-weight: bold;
          text-align: center;
        }

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
          height: 180%;
          object-fit: cover;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <div className="home-page">
        <div className="container">
          {/* Form Section */}
          <div className="form-section">
            <h2>Glossary Donation</h2>
            
            <form onSubmit={handleSubmit}>
              <label htmlFor="storeName">Store Name</label>
              <input
                type="text"
                id="storeName"
                name="storeName"
                value={formData.storeName}
                onChange={handleChange}
                required
              />

              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="product">Product</label>
              <input
                type="text"
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                required
              />

              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />

              <label htmlFor="justification">Justification</label>
              <textarea
                id="justification"
                name="justification"
                value={formData.justification}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>

              <button type="submit">Submit</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
          </div>

          {/* Image and Thought Section */}
          <div className="text-section">
            <h2>
              <span>Empower Change</span> <br />
              <span className="highlight">One Grocery at a Time</span>
            </h2>
            <p>
              Every small act of kindness can create a ripple of positivity.
              Lets ensure no one goes hungry.
            </p>
            <p>
              By contributing groceries, youre providing families with
              nourishment and hope. Together, we can build a better community.
            </p>
            <div className="image-section">
              <img
                src="/gd.webp"
                alt="Grocery Donations"
              />
            </div>
            <p>
              Help those in need by donating essential groceries. Your
              contribution can make a significant difference in someones life.
              Fill out the form below to get started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlossaryDonor;
