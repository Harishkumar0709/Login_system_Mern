import React from "react";

export default function CloudCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="bg-pink-100 p-6 rounded-2xl text-center">
        <img src="/AWS.png" className="w-20 mx-auto" />
        <p className="mt-2 font-semibold text-red-500">Amazon Web Services</p>
      </div>

      <div className="bg-pink-100 p-6 rounded-2xl text-center">
        <img src="/GC.png" className="w-20 mx-auto" />
        <p className="mt-2 font-semibold text-red-500">
          Google Cloud Computing
        </p>
      </div>

      <div className="bg-pink-100 p-6 rounded-2xl text-center">
        <img src="/MA.png" className="w-20 mx-auto" />
        <p className="mt-2 font-semibold text-red-500">Microsoft Azure</p>
      </div>
    </div>
  );
}
