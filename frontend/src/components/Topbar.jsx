import React from "react";

export default function Topbar() {
  return (
    <div className="flex justify-end items-center mb-6">
      <div className="bg-pink-100 px-6 py-3 rounded-2xl flex items-center gap-3">
        <span className="text-red-500 font-semibold">Welcome Test-User!</span>
        <div className="w-10 h-10 bg-pink-300 rounded-full">
          <img src="/people.png" alt="user" className="w-6 mx-auto mt-2" />
        </div>
      </div>
    </div>
  );
}
