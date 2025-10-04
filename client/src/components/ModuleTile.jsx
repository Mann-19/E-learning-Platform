import React, { useState } from "react";
import EditableField from "./EditableField";
import { PlusCircle } from "lucide-react";

const ModuleTile = ({ moduleData, onChange }) => {

  return (
    <div className="bg-[#f3f3f3] px-6 py-3 rounded-lg mt-4">
      <div className="flex items-center gap-10">
        <p className="bg-primary-accent/50 rounded-full w-5 h-5 aspect-square flex justify-center items-center p-4 text-base font-black text-gray-700">{moduleData?.position}</p>

        <EditableField
          value={moduleData?.title || ""}
          onChange={(newValue) => onChange("title", newValue)}
          className="text-xl font-bold text-black mt-1"
          placeholder="Enter module title"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="border-1 border-gray-300 h-0 w-1/2"></div>
        <button className="flex gap-2 items-center bg-gray-300 font-semibold px-4 py-0.5 mx-8 rounded-full">
          <PlusCircle size={17} />
          <span className="mt-0.5 w-max">Add Lesson</span>
        </button>
        <div className="border-1 border-gray-300 w-1/2 h-0"></div>
      </div>
    </div>
  );
};

export default ModuleTile;
