'use client';
import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-800 text-white min-h-screen">
        <div className="p-4 text-center font-bold text-xl">
          Dashboard
        </div>
        <nav>
          <ul className="space-y-2 p-4">
            <li>
              <a href="/" className="block p-2 rounded hover:bg-blue-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-blue-700">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-blue-700">
                Analytics
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-blue-700">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-4 shadow rounded mb-4">
          <h1 className="text-2xl font-bold">Welcome Back!</h1>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Log Out
          </button>
        </header>

        {/* Content */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-bold mb-2">Total Sales</h2>
            <p className="text-2xl">$15,230</p>
            <p className="text-sm text-green-500">↑ 12% from last month</p>
          </div>

          {/* Card 2 */}
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-bold mb-2">New Users</h2>
            <p className="text-2xl">1,280</p>
            <p className="text-sm text-blue-500">+200 this week</p>
          </div>

          {/* Card 3 */}
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-bold mb-2">Active Subscriptions</h2>
            <p className="text-2xl">430</p>
            <p className="text-sm text-yellow-500">→ Stable</p>
          </div>

          {/* Card 4 */}
          <div className="p-4 bg-white rounded shadow md:col-span-2 lg:col-span-3">
            <h2 className="text-lg font-bold mb-2">Recent Activities</h2>
            <ul className="space-y-2">
              <li className="border-b pb-2">User A registered.</li>
              <li className="border-b pb-2">User B purchased a subscription.</li>
              <li className="border-b pb-2">User C updated their profile.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}