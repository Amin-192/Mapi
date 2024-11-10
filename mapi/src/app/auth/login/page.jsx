// app/auth/login/page.tsx
'use client'; // Ensure this component is client-side

import React from 'react';

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the login logic here (e.g., API calls, state updates)
    console.log('Login form submitted');
  };

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
            Log In
          </button>
        </form>
        <div className="mt-4 text-sm text-center">
          <a href="#" className="text-blue-500 hover:underline">Forgot your password?</a>
        </div>
        <div className="mt-4 text-sm text-center">
          <p>
            Don't have an account?{' '}
            <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}