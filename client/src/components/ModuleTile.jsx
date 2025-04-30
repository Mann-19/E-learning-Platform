import React from 'react';

const ModuleTile = ({ module }) => {
  return (
    <div className="bg-[#f1f1f3] text-text-yellow text-lg font-semibold px-6 py-4 rounded-xl shadow-md transition-all duration-300 cursor-pointer hover:bg-primary-accent hover:text-white">
      {module.title}
    </div>
  );
};

export default ModuleTile;
