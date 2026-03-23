import React, { useState } from "react";

const AppsHeader = ({ totalApps, searchTerm, setSearchTerm }) => {
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setLoading(true);

    // simulate a small delay (optional visual feedback)
    setTimeout(() => setLoading(false), 500);
  };

  const SearchIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
      {/* Left: App count */}
      <h1 className="text-2xl font-bold text-gray-900">
        ({totalApps}) Apps Found
      </h1>

      {/* Right: Search bar */}
      <div className="relative w-auto sm:w-80">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Search Apps"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg outline-none text-black placeholder-gray-500"
        />

        {/* Spinner animation (shows briefly while typing) */}
        {loading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        )}
      </div>
    </div>
  );
};

export default AppsHeader;
