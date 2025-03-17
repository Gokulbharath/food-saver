import { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "../firebaseConfig";

const DonateFood = () => {
  const [formData, setFormData] = useState({
    donorName: "",
    phoneNumber: "",
    email: "",
    foodDescription: "",
    quantity: "",
    location: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const donationsRef = ref(database, "donateFood");
    push(donationsRef, formData)
      .then(() => {
        alert("Donation added successfully!");
        setFormData({
          donorName: "",
          phoneNumber: "",
          email: "",
          foodDescription: "",
          quantity: "",
          location: "",
          description: "",
        });
      })
      .catch((error) => {
        alert("Error adding donation: " + error.message);
      });
  };

  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            font-family: "Poppins", sans-serif;
            background-color: #f9f9f9;
            color: #333;
          }

          .home-page {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 20px;
            margin-top: 500px;
            gap: 20px;
          }

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

          .form-container,
          .content-container {
            flex: 1;
            padding: 20px;
          }

          .form-container form {
            display: flex;
            flex-direction: column;
          }

          label {
            font-weight: bold;
            margin-bottom: 0.5rem;
            color: #333;
          }
           h1 {
            text-align: center;
            color: #ff5722;
            margin-top: 20px;
            font-size: 2.5rem;
          }
          input,
          textarea {
            width: 100%;
            padding: 10px;
            font-size: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #ffffff;
            margin-bottom: 1.5rem;
          }

          button {
            width: 100%;
            padding: 10px 20px;
            font-size: 1rem;
            color: #ffffff;
            background-color: #ff5722;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          }

          button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
          }

          .content-container {
            text-align: left;
          }

          .content-container h2 {
            font-size: 2rem;
            color: #ff5722;
            margin-bottom: 20px;
          }

          .content-container p {
            font-size: 1rem;
            line-height: 1.8;
            color: #555;
            margin-bottom: 20px;
          }

          .content-container img {
            width: 100%;
            border-radius: 10px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
          }

          .content-container .thought {
            font-size: 1.2rem;
            font-style: italic;
            color: #777;
            margin-top: 20px;
            text-align: center;
          }

          @media (max-width: 768px) {
            .container {
              flex-direction: column;
            }

            .form-container,
            .content-container {
              width: 100%;
            }

            .content-container img {
              margin-top: 10px;
            }
          }
        `}
      </style>
      <div className="home-page">
        <div className="container">
          {/* Form Section */}
          <div className="form-container">
            <form onSubmit={handleSubmit}>
            <h1>Donate Food</h1>
              <label>
                Donor Name:
                <input
                  type="text"
                  name="donorName"
                  value={formData.donorName}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                  Phone Number:
                  <input
                    type="text" // Change "tel" to "text" for full keyboard input
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    pattern="[0-9]*" // This ensures only numbers can be typed
                    maxLength="10" // Limits the input to 10 digits
                    placeholder="Enter your mobile number"
                    required
                  />
                </label>

              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Food Description:
                <textarea
                  name="foodDescription"
                  rows="3"
                  value={formData.foodDescription}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </label>
              <label>
                Quantity:
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Location:
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Additional Description:
                <textarea
                  name="description"
                  rows="4"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </label>
              <button type="submit">Donate</button>
            </form>
          </div>
          
          {/* Content Section */}
          <div className="content-container">
          <h2>Make a Difference, One Meal at a Time</h2>
            <p>
              Hunger is a reality for millions. By donating your excess food,
              you can bring hope and nourishment to those in need. Let’s work
              together to end food waste and ensure that no one goes hungry.
            </p>
            <img
              src="/food.jpg"
              alt="Food Donation"
            />
            <div className="thought">
              Every meal you save today can change someones tomorrow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateFood;
