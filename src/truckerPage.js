import React, {useState, useEffect} from "react";
import { auth, db } from './config/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate, useParams } from "react-router-dom";
import TripForm from "./tripForm";
import {collection, query, where, getDocs } from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarker, faWeight } from '@fortawesome/free-solid-svg-icons';


function TruckerPage() {
  const history = useNavigate();
  const { uid } = useParams();

  const handleClick = () => {
    signOut(auth).then(val => {
      history("/");
    });
  };

  const[userTrips, setUserTrips] = useState([]);

  const userCollectionRef = collection(db, "trip");


  const getUsers = async () => {
    const q = query(userCollectionRef, where('uid', '==', uid));
    const data = await getDocs(q);
    setUserTrips(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log("HI")
  };

    useEffect(() => {
        getUsers();    
    }, []);

  return (
    <div>
      <button
        onClick={handleClick}
        className="absolute top-0 right-0 mt-4 mr-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Sign Out
      </button>
      <div className="mt-16">
        <TripForm uid={uid} getUsers={getUsers}/>
      </div>
      <div>
      <div className="text-center mt-4 text-2xl font-bold">
        <p>My Trips</p>
      </div>
      {userTrips.map((data) => {
    return (
        <div key={data.tripId} className="p-4 mx-10 my-4 bg-blue-300 rounded-md shadow-md flex items-center justify-between">
            <div className="flex items-center">
                <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                <p className="text-lg font-semibold">Start Date: {data.startDate}</p>
            </div>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                <p className="text-lg font-semibold">End Date: {data.endDate}</p>
            </div>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faMapMarker} className="mr-2" />
                <p className="text-lg font-semibold">Start Location: {data.startLocation}</p>
            </div>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faMapMarker} className="mr-2" />
                <p className="text-lg font-semibold">End Location: {data.endLocation}</p>
            </div>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faWeight} className="mr-2" />
                <p className="text-lg font-semibold">Cargo Size: {data.cargoSpace}</p>
            </div>
        </div>
    );
})
  }
      </div>
    </div>
  );
}

export default TruckerPage;
