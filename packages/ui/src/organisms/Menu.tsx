import React from "react";

function Menu() {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-[#1E194D] hover:text-white" --> */}
        <a
          href="/dashboard"
          className="rounded-md bg-[#1E194D] px-3 py-2 text-sm font-medium text-white"
          aria-current="page"
        >
          Dashboard
        </a>

        <a
          href="#"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#1E194D] hover:text-white"
        >
          Team
        </a>

        <a
          href="#"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#1E194D] hover:text-white"
        >
          Projects
        </a>

        <a
          href="#"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#1E194D] hover:text-white"
        >
          Calendar
        </a>
      </div>
    </div>
  );
}

export default Menu;
