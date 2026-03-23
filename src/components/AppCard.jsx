import React from "react";
import { Link } from "react-router-dom";
import downloadIcon from "../assets/icon-downloads.png";
import starIcon from "../assets/icon-ratings.png";

const AppCard = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`}>
      <div className="w-[317px] h-[404px] rounded-[16px] bg-white shadow-lg p-[16px] flex flex-col items-center font-sans
                      transition-transform transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
        <div className="w-full h-[260px] bg-[#d9d9d9] rounded-[12px] object-cover mb-[16px] overflow-hidden">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full rounded-[12px] object-cover"
          />
        </div>
        <h3 className="text-[20px] font-semibold text-[#0c1b33] mb-[16px] text-left w-full">
          {app.title}
        </h3>
        <div className="flex justify-between w-full">
          <div className="text-[14px] py-[6px] px-[12px] rounded-[8px] flex items-center gap-[6px] font-medium bg-[#F1F5E8] text-[#10b981]">
            <img src={downloadIcon} alt="Download icon" className="w-[16px] h-[16px]" />
            {Math.round(app.downloads / 1_000_000)}M
          </div>
          <div className="text-[14px] py-[6px] px-[12px] rounded-[8px] flex items-center gap-[6px] font-medium bg-[#FFF0E1] text-[#f59e0b]">
            <img src={starIcon} alt="Star icon" className="w-[16px] h-[16px]" />
            {app.ratingAvg}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
