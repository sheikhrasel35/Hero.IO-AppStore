import React from "react";
import { Link } from "react-router-dom";
import heroLogo from "../assets/logo.png"; // your logo
import xIcon from "../assets/x.png"; // X logo
import linkedinIcon from "../assets/linkedin.png"; // LinkedIn logo
import facebookIcon from "../assets/facebook.png"; // Facebook logo

const NavBar = () => {
  return (
    <div>
        <nav className="bg-[#0B1B3D] text-white px-6 py-4 flex items-center justify-between">
        {/* Left: Logo + Site Name */}
            <div className="flex items-center space-x-3">
                <img src={heroLogo} alt="Hero.io" className="w-8 h-8" />
                <span className="font-semibold text-lg">HERO.IO</span>
            </div>

            {/* Right: Social Links */}
            <div className="flex flex-col items-end space-y-1">
                <span>Social Links</span>
                <div className="flex items-center space-x-3">
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <img src={xIcon} alt="X" className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </nav>

        <div className="bg-[#0B1B3D]">
            <hr className="border-t border-white" />
        </div>

        <footer
            className="bg-[#0B1B3D] text-white px-6 py-4 flex items-center justify-center"
            style={{
                textAlign: "center",
                padding: "10px"
            }}
            >
            &copy; 2025 - All rights reserved
        </footer>
    </div>
  );
};

export default NavBar;
