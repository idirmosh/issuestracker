import React from "react";

function Menu() {
  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        <a
          href="#"
          className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
          aria-current="page"
        >
          Dashboard
        </a>

        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Team
        </a>

        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Projects
        </a>

        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Calendar
        </a>
      </div>
    </div>
  );
}

export default Menu;
