import React from 'react';
import Check from '../../assets/images/check.png';

const Notification: React.FC = () => {
  return (
    <>
      <h1 className="text-lg font-semibold mb-6">Notificaciones</h1>
      <div className="border border-[#EDEFF2] rounded-[20px] p-7 grid grid-cols-2 gap-16 mb-9">
        <div>
          <h1 className="text-lg font-semibold">Marketing Updates</h1>
          <p className="text-[#6D717D] text-sm font-medium">
            Once disabled, you will not be able to receive marketing notifications (email, app push and on-site inbox
            notifications).
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2.5">
              <img src={Check} alt="check" className="w-full h-full" />
            </div>
            <p className="text-[#6D717D] text-sm font-bold">On</p>
          </div>
          <div className="text-[#6D717D] text-sm font-medium p-3.5 border border-[#EDEFF2] rounded-[10px] ml-16 cursor-pointer">
            Disable
          </div>
        </div>
      </div>
      <div className="border border-[#EDEFF2] rounded-[20px] p-7 grid grid-cols-2 gap-16 mb-9">
        <div>
          <h1 className="text-lg font-semibold">On-site Inbox Preference</h1>
          <p className="text-[#6D717D] text-sm font-medium">
            Once configured, you will receive relevant on-site inbox notifications within the app and website.
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2.5">
              <img src={Check} alt="check" className="w-full h-full" />
            </div>
            <p className="text-[#6D717D] text-sm font-bold">On</p>
          </div>
          <div className="text-[#6D717D] text-sm font-medium p-3.5 border border-[#EDEFF2] rounded-[10px] ml-16 cursor-pointer">
            Disable
          </div>
        </div>
      </div>
      <div className="border border-[#EDEFF2] rounded-[20px] p-7 grid grid-cols-2 gap-16 mb-9">
        <div>
          <h1 className="text-lg font-semibold">Operational App Push</h1>
          <p className="text-[#6D717D] text-sm font-medium">
            Once disabled, you will not receive app push for Activities, Trade notifications, Binance News, System
            Messages.
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2.5">
              <img src={Check} alt="check" className="w-full h-full" />
            </div>
            <p className="text-[#6D717D] text-sm font-bold">On</p>
          </div>
          <div className="text-[#6D717D] text-sm font-medium p-3.5 border border-[#EDEFF2] rounded-[10px] ml-16 cursor-pointer">
            Disable
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
