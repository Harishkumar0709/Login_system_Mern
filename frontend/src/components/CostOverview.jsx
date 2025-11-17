import React from "react";

export default function CostOverview() {
  return (
    <div className="bg-pink-100 p-6 rounded-2xl h-full">
      <h2 className="text-xl font-bold text-red-500 mb-2">Cost Overview</h2>

      <p className="font-semibold">Available Credits:</p>
      <h1 className="text-4xl font-bold text-purple-700">$20</h1>

      <div className="mt-4">
        <p>Sanctioned Credits: $50</p>
        <p>Utilized Credits: $30</p>
        <p className="text-red-600 font-bold">
          Account Availability: Expires in 5 days
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <button className="bg-white py-2 rounded-xl font-semibold">
          Load More Credits
        </button>
        <button className="bg-white py-2 rounded-xl font-semibold">
          Extend Account
        </button>
        <button className="bg-white py-2 rounded-xl font-semibold">
          View More
        </button>
      </div>
    </div>
  );
}
