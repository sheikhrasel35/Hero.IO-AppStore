import React from "react";
import githubLogo from "../assets/github.svg";
import heroLogo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  // Only for desktop menu
  const getDesktopLinkClass = (path) => {
    return `px-2 py-1 ${
      location.pathname === path
        ? "border-b-4 border-[#7900ff] font-semibold"
        : "hover:border-b-4 hover:border-purple-400"
    }`;
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/apps">Apps</Link>
            </li>
            <li>
              <Link to="/installation">Installation</Link>
            </li>
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
          <img src={heroLogo} alt="Hero Logo" className="w-7 h-7" />
          <span className="font-semibold">Hero.io</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <Link to="/" className={getDesktopLinkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/apps" className={getDesktopLinkClass("/apps")}>
              Apps
            </Link>
          </li>
          <li>
            <Link to="/installation" className={getDesktopLinkClass("/installation")}>
              Installation
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com/Mahbub-Zaman" target="_blank" className="w-[145px] h-[43px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                    text-white text-[16px] font-medium rounded-md flex items-center justify-center gap-2"
        >
          <img src={githubLogo} alt="GitHub Logo" className="w-5 h-5 filter invert" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default NavBar;
