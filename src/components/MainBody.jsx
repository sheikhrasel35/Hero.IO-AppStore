import React from 'react';
import Playstore from "../assets/playstore.jpeg";
import Appstore from "../assets/App_Store.png";
import Banner from "../assets/hero.png";
const MainBody = () => {
    return (
    <div className="flex flex-col items-center justify-center text-center mt-[80px] m-0 p-0">

        {/* Section-1 */}
        <div className="max-w-[90%] sm:max-w-[700px] md:max-w-[900px] mb-[40px]"> 
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-tight'>
            We Build <br />
            <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>
                Productive
            </span> 
            Apps
            </h1>

            <p className='mt-4 text-base sm:text-lg text-gray-600'>
            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. 
            Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-8'>
            <button
                onClick={() => window.open("https://play.google.com/store/", "_blank")}
                className="w-[145px] h-[43px] bg-white border-2 border-[#D2D2D2] text-black text-[14px] sm:text-[16px] font-medium rounded-md flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-200"
            >
                <img src={Playstore} alt="Playstore Logo" className="w-5 h-5" />
                Google Play
            </button>

            <button
                onClick={() => window.open("https://www.apple.com/app-store/", "_blank")}
                className="w-[145px] h-[43px] bg-white border-2 border-[#D2D2D2] text-black text-[14px] sm:text-[16px] font-medium rounded-md flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-200"
            >
                <img src={Appstore} alt="Appstore Logo" className="w-5 h-5" />
                App Store
            </button>
            </div>
        </div>

        {/* Section-2 */}
        <div>
            <img src={Banner} alt="Hero Banner" className="w-full max-w-[900px] object-contain"/>
        </div>

        {/* Section-3 */}
        <div className="bg-gradient-to-r from-[#9C56E7] to-[#6A32C1] py-16 text-white w-full m-0">
            <div className="max-w-[90%] sm:max-w-[700px] md:max-w-[900px] mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold mb-8">
                Trusted By Millions, Built For You
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                <p className="text-sm sm:text-base text-gray-300">Total Downloads</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold">29.6M</p>
                <p className="text-sm sm:text-base text-gray-300">21% More Than Last Month</p>
                </div>

                <div className="space-y-2">
                <p className="text-sm sm:text-base text-gray-300">Total Reviews</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold">906K</p>
                <p className="text-sm sm:text-base text-gray-300">46% More Than Last Month</p>
                </div>

                <div className="space-y-2">
                <p className="text-sm sm:text-base text-gray-300">Active Apps</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold">132+</p>
                <p className="text-sm sm:text-base text-gray-300">31 More Will Launch</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
};

export default MainBody;