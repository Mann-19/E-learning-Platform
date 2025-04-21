import React from 'react';
import firstFilled from '../assets/first_checkpoint_filled.svg';
import firstEmpty from '../assets/first_checkpoint_empty.svg';
import filled from '../assets/checkpoint_filled.svg';
import empty from '../assets/checkpoint_empty.svg';

const Stepper = ({ modules, activeStep = 0 }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm">
      <div className="flex flex-col items-start relative space-y-6">
        {modules.map((module, index) => {
          const isFirst = index === 0;
          const isActive = index === activeStep;

          const iconSrc = isFirst
            ? isActive
              ? firstEmpty
              : firstFilled
            : isActive
              ? filled
              : empty;

          return (
            <div key={module.id} className="flex items-start space-x-4 relative z-10">
              <div className="flex flex-col items-center">
                <img src={iconSrc} alt={`Step ${index + 1}`} className="w-6 h-6" />
                {index < modules.length - 1 && (
                  <div className="w-px h-6 bg-violet-300 mt-1"></div>
                )}
              </div>
              <p className="text-yellow-600 font-medium pt-1">
                Step - {index + 1} : {module.title.split(' ')[0]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
