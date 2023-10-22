import React, { useState } from 'react';
import {addDoc, collection} from 'firebase/firestore'
import {db} from './config/firebase';



const TripForm = (props) => {
  const [tripData, setTripData] = useState({
    startDate: '',
    endDate: '',
    startLocation: '',
    endLocation: '',
    cargoSpace: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripData({
      ...tripData,
      [name]: value,
    });
  };

  const userCollectionRef = collection(db, "trip");


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    await addDoc(userCollectionRef, { ...tripData, uid: props.uid });
    setTripData({
        startDate: '',
        endDate: '',
        startLocation: '',
        endLocation: '',
        cargoSpace: '',
      })
      props.getUsers();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add a Trip</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="startDate" className="block text-gray-600">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={tripData.startDate}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="block text-gray-600">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={tripData.endDate}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="startLocation" className="block text-gray-600">Start Location:</label>
          <input
            type="text"
            id="startLocation"
            name="startLocation"
            value={tripData.startLocation}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endLocation" className="block text-gray-600">End Location:</label>
          <input
            type="text"
            id="endLocation"
            name="endLocation"
            value={tripData.endLocation}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cargoSpace" className="block text-gray-600">Cargo Space (cubic inches):</label>
          <input
            type="number"
            id="cargoSpace"
            name="cargoSpace"
            value={tripData.cargoSpace}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Trip
        </button>
      </form>
    </div>
  );
};

export default TripForm;
