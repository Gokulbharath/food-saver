import { useState, useEffect } from "react";
import { ref, onValue, remove } from "firebase/database";
import { database } from "../firebaseConfig";

const GlossaryReceiver = () => {
  const [donations, setDonations] = useState([]);

  // Fetch data from Firebase
  useEffect(() => {
    const donationsRef = ref(database, "glossaryDonations");
    onValue(donationsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const donationArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setDonations(donationArray);
      } else {
        setDonations([]);
      }
    });
  }, []);

  // Handle claim button
  const handleClaim = (id) => {
    const donationRef = ref(database, `glossaryDonations/${id}`);
    remove(donationRef)
      .then(() => {
        alert("You have successfully claimed this donation!");
      })
      .catch((error) => {
        alert("Error claiming donation: " + error.message);
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

          .donation-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 20px;
          }
          h1 {
            text-align: center;
            color: #ff5722;
            margin-top: 20px;
            font-size: 2.5rem;
          }
          .donation-card {
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            padding: 20px;
            width: 300px;
            transition: transform 0.2s ease-in-out;
          }

          .donation-card:hover {
            transform: translateY(-5px);
          }

          .donation-card h2 {
            font-size: 1.5rem;
            color: #333;
            margin-bottom: 10px;
          }

          .donation-card p {
            margin: 5px 0;
            color: #555;
          }

          .donation-card button {
            width: 100%;
            padding: 10px 20px;
            font-size: 1rem;
            color: #ffffff;
            background-color: #ff5722;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            margin-top: 10px;
          }

          .donation-card button:hover {
            background-color: #e64a19;
          }

          @media (max-width: 768px) {
            .donation-card {
              width: 100%;
            }
          }
        `}
      </style>
      <h1><center>Glossary Availability</center></h1>
      <div className="donation-container">
        {donations.length === 0 ? (
          <p>No donations available at the moment.</p>
        ) : (
          donations.map((donation) => (
            <div className="donation-card" key={donation.id}>
              <h2>{donation.product}</h2>
              <p><strong>Store Name:</strong> {donation.storeName}</p>
              <p><strong>Phone Number:</strong> {donation.phoneNumber}</p>
              <p><strong>Email:</strong> {donation.email}</p>
              <p><strong>Price:</strong> {donation.price}</p>
              <p><strong>Justification:</strong> {donation.justification}</p>
              <button onClick={() => handleClaim(donation.id)}>Claim</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GlossaryReceiver;
