import React from 'react';

const Stepper = ({ modules, activeStep = 0 }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm">
      <div className="flex flex-col items-start space-y-8 relative">
        {modules.map((module, index) => (
          <div key={module.id} className="flex items-center space-x-4 relative z-10">
            <div className="flex flex-col items-center">
              <div
                className={`w-4 h-4 rounded-full border-2 ${
                  index === activeStep
                    ? 'bg-yellow-300 border-yellow-400'
                    : 'bg-white border-yellow-400'
                }`}
              ></div>
              {index < modules.length - 1 && (
                <div className="w-px h-8 bg-yellow-400 mt-1"></div>
              )}
            </div>
            <p className="text-yellow-600 font-medium">
              Step - {index + 1} : {module.title.split(' ')[0]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
