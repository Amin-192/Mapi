'use client'; 

import React from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle registration logic here (e.g., API calls, state updates)
    console.log('Registration form submitted');
    router.push('/');
  };

  return (
    <div className="flex justify-center items-center rounded-2xl h-screen">
      <div className="grid gap-8">
        <section
          id="back-div"
          className=" rounded-3xl"
        >
          <div className="border-8 border-transparent rounded-xl bg-white shadow-xl p-8 m-2">
            <h1 className="text-5xl font-bold text-center cursor-default text-gray-900">
              Sign Up
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
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-lg text-gray-700">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  className="border p-3 shadow-md border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <button
                className="w-full p-3 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="submit"
              >
                SIGN UP
              </button>
            </form>
            <div className="flex flex-col mt-4 text-sm text-center text-gray-700">
              <p>
                Already have an account? 
                <a href="/auth/login" className="text-blue-400 transition hover:underline">
                  Log In
                </a>
              </p>
            </div>
            <div id="third-party-auth" className="flex justify-center gap-4 mt-5">
              {/* Normal links for third-party auth */}
              <a href="#" className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                <img className="w-6 h-6" src="YOUR_GOOGLE_IMAGE_URL" alt="Google" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                <img className="w-6 h-6" src="YOUR_LINKEDIN_IMAGE_URL" alt="LinkedIn" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                <img className="w-6 h-6" src="YOUR_GITHUB_IMAGE_URL" alt="GitHub" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                <img className="w-6 h-6" src="YOUR_FACEBOOK_IMAGE_URL" alt="Facebook" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                <img className="w-6 h-6" src="YOUR_TWITTER_IMAGE_URL" alt="Twitter" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                <img className="w-6 h-6" src="YOUR_APPLE_IMAGE_URL" alt="Apple" />
              </a>
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>
                By signing up, you agree to our 
                <a href="#" className="text-blue-400 transition hover:underline">Terms</a>
                and 
                <a href="#" className="text-blue-400 transition hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}