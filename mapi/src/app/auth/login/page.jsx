'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here (e.g., API calls, state updates)
    console.log('Login form submitted');
    router.push('/pages/dashboard');
  };

  return (
    <div className="flex justify-center items-center rounded-2xl h-screen">
      <div className="grid gap-8">
        <section
          id="back-div"
          className="rounded-3xl"
        >
          <div className="border-8 border-transparent rounded-xl bg-white shadow-xl p-8 m-2">
            <h1 className="text-5xl font-bold text-center cursor-default text-gray-900">
              Log In
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 text-lg text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  className="border p-3 shadow-md border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-lg text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  className="border p-3 shadow-md border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="w-full p-3 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="submit"
              >
                LOG IN
              </button>
            </form>
            <div className="flex flex-col mt-4 text-sm text-center text-gray-700">
              <p>
                Don't have an account? 
                <a href="/auth/register" className="text-blue-400 transition hover:underline">
                  Sign Up
                </a>
              </p>
            </div>
            
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>
                By logging in, you agree to our 
                <a href="#" className="text-blue-400 transition hover:underline"> Terms </a>
                and 
                <a href="#" className="text-blue-400 transition hover:underline"> Privacy Policy</a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}