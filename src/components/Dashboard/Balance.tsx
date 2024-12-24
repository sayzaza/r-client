import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Balance: React.FC = () => {
  return (
    <div>
      <h1 className="text-[#6D717D] text-sm font-semibold mb-1.5">Total value of your assets</h1>
      <p className="text-black font-bold text-4xl mb-1.5 flex items-center">
        $28,471.26
        <span className="w-6 h-6 text-[#6D717D] w-6 h-6 ml-4 flex items-center">
          <FontAwesomeIcon icon={faEyeSlash} className="w-full h-full" />
        </span>
      </p>
      <p className="text-[#6D717D] font-medium text-[10px] flex items-center">
        <span className="text-black text-xs font-bold  rounded-xl bg-[#00FF6B] px-3.5 py-1 mr-1.5">+6.5%</span>in the last 24 hours
      </p>
    </div>
  );
};

export default Balance;
