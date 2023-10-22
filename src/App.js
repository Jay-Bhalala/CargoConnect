import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Home from './Home';
import TruckerPage from './truckerPage';
import CargoBooking from './components/CargoBooking';
import CargoDetails from './components/CargoDetails'; // Import the CargoDetails component


function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/truckUser/:uid" element={<TruckerPage />} />
            <Route path="/cargo-booking" element={<CargoBooking />} />
            <Route path="/cargo-details/:cargoId" element={<CargoDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
