import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const AcceptRequests = () => {
  const [requests, setRequests] = useState([]); // State to store the list of requests
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const requestRef = ref(db, "foodRequests");

    // Listen for changes in the "foodRequests" database
    const unsubscribe = onValue(requestRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert the object to an array of requests
        const requestList = Object.entries(data).map(([id, request]) => ({
          id, // Add the Firebase-generated ID
          ...request,
        }));
        setRequests(requestList);
      } else {
        setRequests([]); // No data available
      }
      setLoading(false);
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <style>{`
          body {
            margin: 0;
            font-family: "Poppins", sans-serif;
            background-color: #f9f9f9;
            color: #333;
          }

          h1 {
            text-align: center;
            color: #ff5722;
            margin-top: 20px;
            font-size: 2.5rem;
          }

          .request-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 20px;
          }

          .request-card {
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            padding: 20px;
            width: 300px;
            transition: transform 0.2s ease-in-out;
          }

          .request-card:hover {
            transform: translateY(-5px);
          }

          .request-card h2 {
            font-size: 1.5rem;
            color: #333;
            margin-bottom: 10px;
          }

          .request-card p {
            margin: 5px 0;
            color: #555;
          }

          .request-card button {
            width: 48%;
            padding: 10px 20px;
            font-size: 1rem;
            color: #ffffff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            margin-top: 10px;
            transition: background-color 0.3s;
          }

          .accept-button {
            background-color: #4caf50;
          }

          .accept-button:hover {
            background-color: #388e3c;
          }

          .reject-button {
            background-color: #f44336;
          }

          .reject-button:hover {
            background-color: #d32f2f;
          }

          .loading, .no-requests {
            text-align: center;
            font-size: 1.2rem;
            color: #777;
            margin-top: 2rem;
          }

          @media (max-width: 768px) {
            .request-card {
              width: 100%;
            }
          }
        `}</style>

      <h1>Accept Food Requests</h1>
      <div className="request-container">
        {loading ? (
          <p className="loading">Loading requests...</p>
        ) : requests.length === 0 ? (
          <p className="no-requests">No requests available at the moment.</p>
        ) : (
          requests.map((request) => (
            <div key={request.id} className="request-card">
              <h2>{request.name}</h2>
              <p>
                <strong>Phone:</strong> {request.phone}
              </p>
              <p>
                <strong>Email:</strong> {request.email}
              </p>
              <p>
                <strong>Address:</strong> {request.address}
              </p>
              <p>
                <strong>Food Type:</strong> {request.foodType}
              </p>
              <p>
                <strong>Justification:</strong> {request.justification}
              </p>
              <p>
                <strong>Requested At:</strong> {new Date(request.createdAt).toLocaleString()}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  className="accept-button"
                  onClick={() => console.log(`Accepting request with ID: ${request.id}`)}
                >
                  Accept
                </button>
                <button
                  className="reject-button"
                  onClick={() => console.log(`Rejecting request with ID: ${request.id}`)}
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AcceptRequests;
