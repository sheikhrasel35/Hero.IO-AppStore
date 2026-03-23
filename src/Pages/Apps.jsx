import React, { useState, useEffect } from "react";
import AppCard from "../components/AppCard";
import AppsHeader from "../components/AppsHeader";
import AppErrorImg from "../assets/App-Error.png";
import Loader from "../components/Loader";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    document.title = "Hero.IO - Apps";

    fetch("/Apps.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false); // Stop loading when data arrives
      })
      .catch((err) => {
        console.error("Failed to fetch apps:", err);
        setLoading(false); // Stop loading even on error
      });
  }, []);

  const filteredApps = apps.filter(
    (app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render loading spinner if loading
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#f5f7fa] min-h-screen py-8">
      {/* Header Section */}
      {(filteredApps.length > 0 || searchTerm.trim() === "") && (
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c1b33] mb-3">
            Our All Applications
          </h2>
          <p className="text-gray-600 mb-10 text-sm sm:text-base md:text-lg lg:text-xl text-center px-4 sm:px-0">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
      )}
      <AppsHeader
        totalApps={apps.length}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Apps Grid */}
      {filteredApps.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 justify-items-center">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}

      {/* No apps found */}
      {filteredApps.length === 0 && searchTerm.trim() !== "" && (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 mt-12">
          <img src={AppErrorImg} alt="App Not Found" className="w-[400px] mb-6" />
          <h1 className="text-4xl font-semibold mb-4">App Not Found</h1>
          <p className="text-[#627382] text-lg mb-6">
            No apps match your search: <strong>{searchTerm}</strong>
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="w-[150px] h-[48px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                      text-white text-[16px] font-medium rounded-lg flex items-center justify-center"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Apps;
