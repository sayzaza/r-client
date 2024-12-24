import React from 'react';
import Wall from '../../assets/images/wall.png';
import Sms from '../../assets/images/sms.png';
import Email from '../../assets/images/message.png';

const Security: React.FC = () => {
  return (
    <>
      <h1 className="text-lg font-semibold mb-6">Security</h1>
      <div className="flex items-center border border-[#EDEFF2] rounded-[20px] p-7 mb-9">
        <div className="flex items-start">
          <div>
            <div className="w-6 h-6 mr-3.5">
              <img src={Wall} alt="wall" className="w-full h-full" />
            </div>
          </div>
          <div>
            <p className="text-[#333333] text-lg font-semibold">Authenticator App</p>
            <p className="text-[#6D717D] text-sm font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non iaculis purus, nec fermentum est.
              Integer justo dui, varius et tempor vel, consequat vitae mauris.
            </p>
          </div>
        </div>
        <div className="border border-[#EDEFF2] rounded-[10px] py-3 px-6 text-[#6D717D] text-sm font-medium ml-16 cursor-pointer">
          Administrar
        </div>
      </div>
      <div className="flex items-center border border-[#EDEFF2] rounded-[20px] p-7 mb-9">
        <div className="flex items-start">
          <div>
            <div className="w-6 h-6 mr-3.5">
              <img src={Sms} alt="wall" className="w-full h-full" />
            </div>
          </div>
          <div>
            <p className="text-[#333333] text-lg font-semibold">SMS</p>
            <p className="text-[#6D717D] text-sm font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non iaculis purus, nec fermentum est.
              Integer justo dui, varius et tempor vel, consequat vitae mauris.
            </p>
          </div>
        </div>
        <div className="border border-[#EDEFF2] rounded-[10px] py-3 px-6 text-[#6D717D] text-sm font-medium ml-16 cursor-pointer">
          Administrar
        </div>
      </div>
      <div className="flex items-center border border-[#EDEFF2] rounded-[20px] p-7">
        <div className="flex items-start">
          <div>
            <div className="w-6 h-6 mr-3.5">
              <img src={Email} alt="wall" className="w-full h-full" />
            </div>
          </div>
          <div>
            <p className="text-[#333333] text-lg font-semibold">Email</p>
            <p className="text-[#6D717D] text-sm font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non iaculis purus, nec fermentum est.
              Integer justo dui, varius et tempor vel, consequat vitae mauris.
            </p>
          </div>
        </div>
        <div className="border border-[#EDEFF2] rounded-[10px] py-3 px-6 text-[#6D717D] text-sm font-medium ml-16 cursor-pointer">
          Administrar
        </div>
      </div>
    </>
  );
};

export default Security;
