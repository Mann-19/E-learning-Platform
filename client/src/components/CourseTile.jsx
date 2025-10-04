import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router";

const CourseTile = ({ course }) => {
  const { state } = useAuthContext();

  return (
    <div className="bg-[#3a3a3a] rounded-3xl px-6 py-4 h-max flex justify-between items-center w-full max-w-[80%] shadow-md">
      <div className="flex flex-col justify-between gap-4 max-w-[80%]">
        <h3 className="text-text-yellow font-bold text-xl w-max flex gap-8 items-center">
          {course.title}
          <span className="capitalize text-sm text-green-300 font-normal bg-[#a0a0a0]/20 px-4 py-0.5 rounded-full mb-0.5">
            {course.status}
          </span>
        </h3>
        <p className="text-white/80 text-base truncate">{course.description}</p>
      </div>

      {state.role &&
        state.role === "Instructor" &&
        course.status === "draft" && <Link className="text-[#ead300] underline" to={`/draft-edit/${course.id}`}>Edit Draft</Link>
      }
    </div>
  );
};

export default CourseTile;
