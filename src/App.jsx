import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarHome from "./components/NavbarHome";
import NavbarReceiver from "./components/NavbarReceiver";
import NavbarDonor from "./components/NavbarDonor";
import NavbarGrocery from "./components/NavbarGrocery";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ReceiverPage from "./pages/ReceiverPage";
import DonorPage from "./pages/DonorPage";
import GroceryDonorPage from "./pages/GroceryDonorPage";
import RequestFood from "./pages/RequestFood";
import ReceiveFood from "./pages/ReceiveFood";
import DonateFood from "./pages/DonateFood";
import AcceptRequests from "./pages/AcceptRequests";
import Logout from "./pages/Logout";
import GlossaryDonor from "./pages/GlossaryDonor";
import GlossaryReceiver from "./pages/GlossaryReceiver";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <NavbarHome />
              <Home />
            </>
          }
        />

        {/* Login Page */}
        <Route
          path="/login"
          element={
            <>
              <NavbarHome />
              <Login />
            </>
          }
        />

        {/* Signup Page */}
        <Route
          path="/signup"
          element={
            <>
              <NavbarHome />
              <SignUp />
            </>
          }
        />

        {/* Receiver Dashboard */}
        <Route
          path="/receiver"
          element={
            <>
              <NavbarReceiver />
              <ReceiverPage />
            </>
          }
        />
        <Route
          path="/receiver/request-food"
          element={
            <>
              <NavbarReceiver />
              <RequestFood />
            </>
          }
        />
        <Route
          path="/receiver/receive-food"
          element={
            <>
              <NavbarReceiver />
              <ReceiveFood />
            </>
          }
        />

        {/* Donor Dashboard */}
        <Route
          path="/donor"
          element={
            <>
              <NavbarDonor />
              <DonorPage />
            </>
          }
        />
        <Route
          path="/donor/donate-food"
          element={
            <>
              <NavbarDonor />
              <DonateFood />
            </>
          }
        />
        <Route
          path="/donor/accept-requests"
          element={
            <>
              <NavbarDonor />
              <AcceptRequests />
            </>
          }
        />

        {/* Grocery Dashboard */}
        <Route
          path="/grocery"
          element={
            <>
              <NavbarGrocery />
              <GroceryDonorPage />
            </>
          }
        />
        <Route
          path="/grocery/donate"
          element={
            <>
              <NavbarGrocery />
              <GlossaryDonor />
            </>
          }
        />
        <Route
          path="/grocery/receive"
          element={
            <>
              <NavbarGrocery />
              <GlossaryReceiver />
            </>
          }
        />

        {/* Logout */}
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default App;
