import React from 'react';
import Avatar from '../../assets/images/avatar-1.png';
import Check from '../../assets/images/check.png';
import Edit from './Edit';

const MyProfile: React.FC = () => {
  return (
    <>
      <h1 className="font-semibold text-lg mb-6">My Profile</h1>
      <div className="flex justify-between items-center p-6 border border-[#EDEFF2] rounded-[20px] mb-5">
        <div className="flex items-center">
          <div className="w-24 h-24 mr-6">
            <img src={Avatar} alt="avatar" className="w-full h-full" />
          </div>
          <div>
            <p className="font-semibold text-lg mb-px">John Doe</p>
            <div className="flex items-center">
              <p className="text-[#6D717D] font-bold text-base mr-2">Verified</p>
              <div className="w-5 h-5">
                <img src={Check} alt="check" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Edit />
        </div>
      </div>
      <div className="p-6 border border-[#EDEFF2] rounded-[20px] mb-5">
        <div className="flex justify-between items-center mb-7">
          <p className="font-semibold text-lg">Personal Information</p>
          <div>
            <Edit />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-6">
          <div>
            <p className="text-[#6D717D] text-sm font-medium mb-1.5">Name</p>
            <p className="font-semibold text-base">John</p>
          </div>
          <div>
            <p className="text-[#6D717D] text-sm font-medium mb-1.5">Last name</p>
            <p className="font-semibold text-base">Doe</p>
          </div>
          <div>
            <p className="text-[#6D717D] text-sm font-medium mb-1.5">Email</p>
            <p className="font-semibold text-base">johndoe@gmail.com</p>
          </div>
          <div>
            <p className="text-[#6D717D] text-sm font-medium mb-1.5">Telephone</p>
            <p className="font-semibold text-base">+54 9 26158899</p>
          </div>
          <div>
            <p className="text-[#6D717D] text-sm font-medium mb-1.5">Birthday</p>
            <p className="font-semibold text-base">20/04/1987</p>
          </div>
          <div>
            <p className="text-[#6D717D] text-sm font-medium mb-1.5">DNI</p>
            <p className="font-semibold text-base">33558992</p>
          </div>
        </div>
      </div>
      <div className="p-6 border border-[#EDEFF2] rounded-[20px] mb-5">
        <div className="flex justify-between items-center mb-7">
          <p className="font-semibold text-lg">Address</p>
          <div>
            <Edit />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-6">
          <div>
            <p className="text-[#6D717D] text-sm font-medium mb-1.5">Country</p>
            <p className="font-semibold text-base">Argentina</p>
          </div>
          <div>
            <p className="text-[#6D717D] text-sm font-medium mb-1.5">Province</p>
            <p className="font-semibold text-base">Mendoza</p>
          </div>
          <div>
            <p className="text-[#6D717D] text-sm font-medium mb-1.5">Zip code</p>
            <p className="font-semibold text-base">5500</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
