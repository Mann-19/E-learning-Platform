import React from "react";

const CourseTile = ({ course }) => {
  return (
    <div className="bg-[#3a3a3a] rounded-3xl px-6 py-4 h-max flex justify-between items-center w-full max-w-[80%] shadow-md">
      <div className="flex flex-col justify-between gap-4 max-w-[80%]">
        <h3 className="text-text-yellow font-bold text-xl w-max flex gap-8 items-center">
          {course.title}
          <span className="capitalize text-sm text-green-300 font-normal bg-[#a0a0a0]/20 px-4 py-0.5 rounded-full mb-0.5">{course.status}</span>
        </h3>
        <p className="text-white/80 text-base truncate">{course.description}</p>
      </div>
      <div className="w-10 aspect-square rounded-full border-4 border-yellow-400 border-opacity-80"></div>
    </div>
  );
};

export default CourseTile;
