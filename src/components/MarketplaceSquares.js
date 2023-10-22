import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { db } from '../config/firebase';

import {collection, query, where, getDocs } from 'firebase/firestore'

function getRandomTruckerName() {
  const names = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Emily Davis', 'Tom Wilson'];
  return names[Math.floor(Math.random() * names.length)];
}

function MarketplaceSquares({ cargoListings }) {

  const[userTrips, setUserTrips] = useState([]);

  const userCollectionRef = collection(db, "trip");


  const getUsers = async () => {
    const data = await getDocs(userCollectionRef);
    setUserTrips(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log("HI")
  };

    useEffect(() => {
        getUsers();    
    }, []);


  return (
    <div className="bg-gray-100 p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Cargo Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-auto max-w-7xl">
        {userTrips.map((listing, index) => (
          <Link to={`/cargo-details/${index}`} key={index}>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-2">{getRandomTruckerName()}</h3>
              <p className="text-gray-700">
                <span className="font-semibold">Departure City:</span> {listing.startLocation}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Arrival City:</span> {listing.endLocation}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Departure Date:</span> {listing.startDate}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Arrival Date:</span> {listing.endDate}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Cargo Space:</span> {listing.cargoSpace} cubic feet
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MarketplaceSquares;
