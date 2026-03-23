import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Ratings = ({ ratings }) => {
  if (!ratings || ratings.length === 0) {
    return <p className="text-gray-500 text-center">No rating data available</p>;
  }

  // Convert JSON to consistent 5★ → 1★ format
  const ratingsData = [];
  for (let i = 5; i >= 1; i--) {
    const ratingObj = ratings.find(r => r.name.startsWith(i.toString()));
    ratingsData.push({
      name: `${i} Star`,
      count: ratingObj ? ratingObj.count : 0,
    });
  }

  return (
    <div className="w-90% h-[354px] sm:h-[354px] md:h-[354px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          data={ratingsData}
          margin={{ top: 20, right: 20, bottom: 20, left: 40 }}
        >
          <CartesianGrid stroke="#f0f0f0" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={60} />
          <Tooltip />
          <Bar dataKey="count" barSize={20} fill="#FF8811" radius={[4, 4, 0, 0]} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Ratings;
