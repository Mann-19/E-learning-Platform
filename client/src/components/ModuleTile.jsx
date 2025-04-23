import React from 'react';

const ModuleTile = ({ module }) => {
  return (
    <div className="bg-yellow-400 hover:bg-yellow-300 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-200 cursor-pointer">
      {module.title}
    </div>
  );
};

export default ModuleTile;
