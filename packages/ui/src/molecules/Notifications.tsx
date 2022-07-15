//@ts-nocheck
import { AuthContext } from "../../context/AuthContext";
import React, { useContext } from "react";

function Notifications() {
  const value = useContext(AuthContext);
  return (
    <button
      type="button"
      className="rounded-full bg-[#1E194D] p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-800"
    >
      <span className="sr-only">View notifications</span>
      {/* <!-- Heroicon name: outline/bell --> */}
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    </button>
  );
}

export default Notifications;
