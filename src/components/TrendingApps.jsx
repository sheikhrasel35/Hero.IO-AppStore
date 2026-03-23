import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppCard from "./AppCard";

const Trending = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/Apps.json") // ✅ Called Apps.json
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error("Error loading apps:", err));
  }, []);

  return (
    <div className="mt-10 mb-[80px] px-6 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c1b33] mb-3">Trending Apps</h2>
      <p className="text-gray-600 mb-10">Explore All Trending Apps on the Market developed by us</p>

      {/* Grid of App Cards (show only first 8) */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {apps.slice(0, 8).map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      {/* Show All Button */}
      <div className="mt-10">
        <Link to="/apps">
          <button className="mt-6 px-6 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-medium rounded-md hover:opacity-90 transition">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Trending;
