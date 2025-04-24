import React from 'react';

const CourseTile = ({ course }) => {
  return (
    <div className="bg-[#3a3a3a] rounded-xl px-4 py-2 h-max flex justify-between items-center w-full max-w-md shadow-md">
      <div className="flex flex-col justify-between gap-2 max-w-[80%]">
        <h3 className="text-text-yellow font-bold text-xl w-max">{course.title}</h3>
        <p className="text-white/80 text-base truncate">{course.desc}</p>
      </div>
      <div className="w-10 aspect-square rounded-full border-4 border-yellow-400 border-opacity-80"></div>
    </div>
  );
};

export default CourseTile;
