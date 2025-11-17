import React from "react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-purple-300 p-6 flex flex-col justify-between h-screen">
      <div>
        <div className="h-20 w-full bg-pink-200 rounded-2xl mb-6"></div>

        <nav className="flex flex-col gap-4">
          <button className="bg-pink-200 py-3 rounded-2xl text-red-600 font-semibold">
            Dashboard
          </button>
          <button className="bg-pink-200 py-3 rounded-2xl text-red-600 font-semibold">
            Account Server Engine
          </button>
          <button className="bg-pink-200 py-3 rounded-2xl text-red-600 font-semibold">
            Account Details
          </button>
          <button className="bg-pink-200 py-3 rounded-2xl text-red-600 font-semibold">
            Services
          </button>
        </nav>
      </div>

      <div className="text-center">
        <p className="text-sm">Need Help?</p>
        <img src="/robot.png" alt="bot" className="w-12 mx-auto mt-2" />
        <p className="text-sm font-semibold mt-1">Chat With Bunny!</p>
      </div>
    </div>
  );
}
