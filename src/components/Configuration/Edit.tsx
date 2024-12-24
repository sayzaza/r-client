import React from 'react';
import Pen from '../../assets/images/pen.png';

const Edit: React.FC = () => {
  return (
    <div className="flex items-center border border-[#EDEFF2] rounded-[10px] text-[#6D717D] py-3.5 px-5 cursor-pointer">
      <p className="text-sm font-medium mr-3">Edit</p>
      <div className="w-3.5 h-3.5">
        <img src={Pen} alt="pen" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Edit;
