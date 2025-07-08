import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white/70 rounded-3xl shadow-lg px-8 py-6 w-full backdrop-blur-lg transition-all duration-300">
      <span className="font-bold text-2xl text-gray-900">Dev</span>
      <div className="flex gap-10">
        <a
          href="#about"
          className="text-gray-600 text-md font-medium hover:text-gray-900 transition"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-gray-600 text-md font-medium hover:text-gray-900 transition"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-gray-600 text-md font-medium hover:text-gray-900 transition"
        >
          Contact
        </a>
      </div>
      <div className="flex items-center gap-3">
        {/* Sun Icon */}
        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle
              cx="12"
              cy="12"
              r="5"
              stroke="currentColor"
              strokeWidth="2"
              fill="currentColor"
            />
            <g stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
          </svg>
        </span>
        {/* Moon Icon */}
        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
