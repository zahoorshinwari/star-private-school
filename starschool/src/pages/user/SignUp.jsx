// src/components/SignUpForm.js
import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

const SignUp = () => {
  const { name, setName, email, setEmail, handleSubmit } = useContext(DataContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form 
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" 
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
