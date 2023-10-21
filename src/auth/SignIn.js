import React from 'react';
import {auth} from '../config/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'

function SignUp() {
  return (
    <div className="mt-28">
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
      <form>
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
