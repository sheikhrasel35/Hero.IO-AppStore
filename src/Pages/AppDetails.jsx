import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Download, Star, MessageSquare } from "lucide-react";
import AppErrorImg from "../assets/App-Error.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Ratings from "../components/Ratings";
import Loader from "../components/Loader";

const AppDetails = () => {
  const { appId } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [installing, setInstalling] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const fetchApp = async () => {
      try {
        const res = await fetch("/Apps.json");
        const data = await res.json();
        const foundApp = data.find((a) => a.id.toString() === appId.toString());
        setApp(foundApp || null);
        setLoading(false);

        // Check if app is already installed
        const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        if (foundApp && installedApps.some((a) => a.id === foundApp.id)) {
          setInstalled(true);
        }
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchApp();
  }, [appId]);

  const handleInstall = () => {
    if (!app || installing || installed) return;

    setInstalling(true);
    setTimeout(() => {
      setInstalling(false);
      setInstalled(true);

      const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
      if (!installedApps.some((a) => a.id === app.id)) {
        localStorage.setItem("installedApps", JSON.stringify([...installedApps, app]));
      }

      toast.success(`${app.title} installed successfully!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }, 2000);
  };

  if (loading) return <p className="text-center mt-20"><Loader/></p>;

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 mt-12">
        <img src={AppErrorImg} alt="App Not Found" className="w-[400px] mb-6" />
        <h1 className="text-4xl font-semibold mb-4">App Not Found</h1>
        <Link
          to="/apps"
          className="w-[150px] h-[48px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                     text-white text-[16px] font-medium rounded-lg flex items-center justify-center"
        >
          Back to All Apps
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-[#f1eeeeda] min-h-screen mt-[40px] rounded-2xl shadow-lg">
      {/* Top section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
        <img
          src={app.image}
          alt={app.title}
          className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] object-cover rounded-xl shadow-md"
        />

        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-bold text-[#0c1b33] mb-2">{app.title}</h1>
          <p className="text-gray-600 mb-6">
            Developed by <span className="text-blue-600 font-semibold">{app.companyName}</span>
          </p>

          {/* Stats */}
          <div className="flex items-center gap-6 mb-6 justify-center md:justify-start">
            <div className="flex flex-col items-center">
              <Download className="text-green-600 mb-1" />
              <p className="font-bold">{Math.round(app.downloads / 1_000_000)}M</p>
              <p className="text-gray-500 text-sm">Downloads</p>
            </div>

            <div className="flex flex-col items-center">
              <Star className="text-yellow-500 mb-1" />
              <p className="font-bold">{app.ratingAvg}</p>
              <p className="text-gray-500 text-sm">Avg Rating</p>
            </div>

            <div className="flex flex-col items-center">
              <MessageSquare className="text-purple-500 mb-1" />
              <p className="font-bold">{Math.round(app.reviews / 1000)}K</p>
              <p className="text-gray-500 text-sm">Total Reviews</p>
            </div>
          </div>

          {/* Install button */}
          <button
            onClick={handleInstall}
            disabled={installing || installed}
            className={`w-full md:w-auto bg-[#00c853] text-white px-6 py-2 rounded-lg font-semibold shadow flex items-center justify-center gap-2 transition ${
              installing || installed ? "cursor-not-allowed opacity-70" : "hover:bg-green-600"
            }`}
          >
            {installing ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Installing...
              </div>
            ) : installed ? (
              "Installed"
            ) : (
              `Install Now (${app.size} MB)`
            )}
          </button>
        </div>
      </div>

<hr className="my-4 border-gray-300 mt-[20px]" />
      {/* Ratings Section */}
        {app.ratings && app.ratings.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-[#0c1b33] mb-4 text-center md:text-left">
              Ratings
            </h2>
            <Ratings ratings={app.ratings} />
          </div>
        )}

<hr className="my-4 border-gray-300" />

      {/* Description */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-[#0c1b33] mb-4 text-center md:text-left">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed">{app.description}</p>
      </div>

<hr className="my-4 border-gray-300" />

      {/* Back button */}
      <div className="flex justify-center mt-6">
        <Link
          to="/apps"
          className="w-[180px] h-[48px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                     text-white text-[16px] font-medium rounded-lg flex items-center justify-center"
        >
          Back to All Apps
        </Link>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default AppDetails;
