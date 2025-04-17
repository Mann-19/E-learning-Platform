import React from 'react';

const CourseTile = ({ title, description }) => {
  return (
    <div className="bg-[#2c2c2c] rounded-xl px-4 py-3 h-[80px] flex justify-between items-center w-[25vw] max-w-md shadow-md">
      <div className="flex flex-col">
        <h3 className="text-[#f9d923] font-semibold text-lg">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
      <div className="w-6 h-6 rounded-full border-4 border-yellow-400 border-opacity-80"></div>
    </div>
  );
};

export default CourseTile;
