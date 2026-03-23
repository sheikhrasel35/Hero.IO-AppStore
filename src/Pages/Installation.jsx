import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DownloadIcon from '../assets/icon-downloads.png';
import StarIcon from '../assets/icon-ratings.png';
import NotInstalled from '../assets/triangle-error-404.png';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InstallationPage = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [uninstallingApps, setUninstallingApps] = useState({});
  const [sortOrder, setSortOrder] = useState(""); // "" | "high-low" | "low-high"

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
  }, []);

const handleUninstall = (id) => {
  if (uninstallingApps[id]) return;

  setUninstallingApps((prev) => ({ ...prev, [id]: true }));

  const appToRemove = installedApps.find((app) => app.id === id);

  setTimeout(() => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    setUninstallingApps((prev) => ({ ...prev, [id]: false }));

    // Show toast
    toast.success(`${appToRemove.title} uninstalled successfully!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, 2000);
};

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    let sortedApps = [...installedApps];
    if (order === "high-low") {
      sortedApps.sort((a, b) => b.downloads - a.downloads);
    } else if (order === "low-high") {
      sortedApps.sort((a, b) => a.downloads - b.downloads);
    }

    setInstalledApps(sortedApps);
  };

  if (installedApps.length === 0) {
    return <div className="flex flex-col items-center justify-center text-center px-4 mt-[70px]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c1b33] mb-3">Your Installed Apps</h2>
        <p className="text-gray-600 mb-[40px]">All your Installed Apps will appear here</p>
        <img src={NotInstalled} alt="Downloads" className="w-[240px] mb-5" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c1b33] mb-3">No Apps Installed</h2>
        <p className="text-gray-600">Install some apps from the Apps page to see them here.</p>
        <div className="mt-10 text-center mb-10">
        <Link
          to="/apps"
          className="w-[180px] h-[48px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-[16px] font-medium rounded-lg flex items-center justify-center">
          Browse Apps
        </Link>
      </div>
    </div>
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 min-h-screen">
        <div className="flex flex-col items-center justify-center text-center px-4 mb-[40px]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c1b33] mb-3">Your Installed Apps</h2>
        <p className="text-gray-600">Explore All Trending Apps on the Market developed by us</p>
        </div>
      {/* Header with installed count */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          ({installedApps.length}) Apps Installed
        </h1>

        {/* Sort Dropdown */}
        <div>
          {/* <label className="mr-2 font-medium text-gray-700">Sort by Downloads:</label> */}
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="px-3 py-2 border rounded-lg text-gray-700"
          >
            <option value="">Sort By Size </option>
            <option value="high-low">High-Low</option>
            <option value="low-high">Low-High</option>
          </select>
        </div>
      </div>

        <div className="grid md:grid-cols-1 gap-6">
        {installedApps.map((app) => (
            <div
            key={app.id}
            className="p-4 rounded-xl bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-between gap-4"
            >
            <div className="flex items-center gap-4">
                <img
                src={app.image}
                alt={app.title}
                className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                <h2 className="font-semibold text-gray-800 mb-2">{app.title}</h2>

                {/* Downloads, Rating, Size in one line */}
                <div className="flex items-center gap-4 text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                    <img src={DownloadIcon} alt="Downloads" className="w-4 h-4" />
                    <span className="text-[#00D390] font-medium">{Math.round(app.downloads / 1_000_000)}M</span>
                    </div>
                    <div className="flex items-center gap-1">
                    <img src={StarIcon} alt="Rating" className="w-4 h-4" />
                    <span className="text-[#FF8811] font-medium">{app.ratingAvg}</span>
                    </div>
                    <div>
                    <span>{app.size} MB</span>
                    </div>
                </div>
                </div>
            </div>

            <button
                  onClick={() => handleUninstall(app.id)}
                  disabled={uninstallingApps[app.id]}
                  className={`text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 font-semibold shadow transition ${
                    uninstallingApps[app.id]
                      ? "bg-red-500 cursor-not-allowed opacity-80"
                      : "bg-green-500 hover:bg-red-600"
                  }`}
                >
                  {uninstallingApps[app.id] ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Removing...
                    </>
                  ) : (
                    "Uninstall"
                  )}
                </button>
            </div>
        ))}
        </div>

      <div className="mt-10 text-center">
        <Link
          to="/apps"
          className="w-[180px] h-[48px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                     text-white text-[16px] font-medium rounded-lg flex items-center justify-center"
        >
          Back to Apps
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default InstallationPage;
