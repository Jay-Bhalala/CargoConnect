// src/auth/SignUp.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {auth} from '../config/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth'

function SignUp() {

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email !== "" && password !== "") {
        signInWithEmailAndPassword(auth, email, password)
        .then( (user) => {
            history(`/truckUser/${user.user.uid}`);
            console.log(user.user.uid);
        }
        ).catch(e => {
            alert(e)
        })
    }
  }

  return (
    <div className="mt-28">
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600">Email:</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Password:</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
    </div>
    </div>
  );
}

export default SignUp;
