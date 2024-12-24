import React, { useEffect, useRef, useState } from 'react';
import Dropdown from 'react-dropdown';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from '../../assets/images/avatar.png';
import { IAppBarProps, PageName } from '../Layout';
import Earnings from '../../assets/images/earnings.png';
import Wallet from '../../assets/images/wallet.png';

export type WalletAction = 'deposit' | 'withdraw' | undefined;

const AppBar: React.FC<IAppBarProps> = ({ pageName }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [walletAction, setWalletAction] = useState<WalletAction>(undefined);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef]);

  const handleDeposit = () => {
    setShowModal(true);
    setWalletAction('deposit');
  };

  const handleWithdraw = () => {
    setShowModal(true);
    setWalletAction('withdraw');
  };

  return (
    <>
      <div className="flex justify-between px-12 py-10 border-b border-[#EDEFF2]">
        <div className="relative">
          <h1 className="text-3xl font-semibold">{pageName}</h1>
          {pageName === PageName.wallet && (
            <div className="absolute mt-2.5 flex">
              <button
                className="bg-[#773EE2] rounded text-white font-semibold text-[8px] px-5 py-1 mr-2 w-20"
                onClick={handleDeposit}
              >
                Deposit
              </button>
              <button
                className="bg-[#fff] border border-[#773EE2] rounded text-[#773EE2] font-semibold text-[8px] px-5 py-1 w-20"
                onClick={handleWithdraw}
              >
                Withdraw
              </button>
            </div>
          )}
          {pageName === PageName.earn && (
            <div className="absolute mt-2 flex items-center">
              <div className="bg-[#00FF6B] rounded-[10px] py-1 px-2.5 text-xs font-bold mr-1.5">+06.5%</div>
              <p className="text-[#6D717D] text-[10px] font-medium w-32">in the last 24 hours</p>
            </div>
          )}
        </div>
        <div className="flex items-center">
          <div className="relative text-[#6D717D] mr-2">
            <div className="lg:absolute lg:left-0 lg:insert-y-0 pl-2.5 h-full flex items-center">
              <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
            </div>
            <input
              type="search"
              placeholder="Buscar..."
              className="w-72 h-12 rounded-[15px] border border-[#EDEFF2] pl-10 text-sm font-normal lg:block hidden"
            />
          </div>
          <div>
            <Dropdown
              arrowClosed={
                <div className="flex items-center pl-3">
                  <FontAwesomeIcon icon={faAngleDown} className="w-2.5 h-2.5 font-medium" />
                </div>
              }
              arrowOpen={
                <div className="flex items-center pl-3">
                  <FontAwesomeIcon icon={faAngleUp} className="w-2.5 h-2.5 font-medium" />
                </div>
              }
              options={['USD', 'ARS']}
              value="USD"
              controlClassName="flex items-center px-3 h-12 rounded-[15px] border border-[#EDEFF2] text-sm font-semibold text-[#6D717D] cursor-pointer"
              menuClassName="flex flex-col px-3 cursor-pointer absolute text-sm font-semibold text-[#6D717D]"
              placeholderClassName="dropdown-usd flex items-center"
            />
          </div>
          <div className="mx-6 w-px h-9 bg-[#EDEFF2]"></div>
          <div className="w-12 h-12 cursor-pointer" onClick={() => window.location.assign('/configuration/myprofile')}>
            <img src={Avatar} alt="Avatar" className="w-full h-full" />
          </div>
        </div>
      </div>
      {showModal && (
        <div className="h-screen w-screen bg-black bg-opacity-25 fixed top-0 left-0 z-50">
          <div
            ref={modalRef}
            className="px-3.5 pt-4 pb-8 w-80 border border-[#EDEFF2] rounded-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white"
          >
            <h1 className="text-xs font-semibold mb-[4px]">{walletAction === 'deposit' ? 'Deposit' : 'Withdraw'}</h1>
            <p className="text-[#6D717D] text-[9px] font-semibold mb-[14px]">
              {walletAction === 'deposit' ? 'Select how you want to deposit' : 'Select how you want to withdraw'}
            </p>
            <div
              className="flex items-center py-[18px] px-[15px] border border-[#EDEFF2] rounded-[20px] mb-[14px] cursor-pointer"
              onClick={() => {
                walletAction === 'deposit'
                  ? window.location.assign('/deposit-crypto')
                  : window.location.assign('/withdraw-crypto');
              }}
            >
              <img src={Earnings} alt="" className="w-[30px] h-auto shrink-0 mr-[15px]" />
              <div>
                <h1 className="text-[12px] text-[#000000] font-semibold mb-[2px]">
                  {walletAction === 'deposit' ? 'Desposit Crypto' : 'Withdraw Crypto'}
                </h1>
                <p className="text-[#6D717D] text-[9px] font-semibold">
                  {walletAction === 'deposit'
                    ? 'I have cryptocurrencies that I want to transfer to Rely'
                    : 'I have cryptocurrencies that I want to withdraw to my wallet'}
                </p>
              </div>
            </div>
            <div
              className="flex items-center py-[18px] px-[15px] border border-[#EDEFF2] rounded-[20px] cursor-pointer"
              onClick={() => {
                walletAction === 'deposit'
                  ? window.location.assign('/deposit-ars')
                  : window.location.assign('/withdraw-ars');
              }}
            >
              <img src={Wallet} alt="" className="w-[30px] h-auto shrink-0 mr-[15px]" />
              <div>
                <h1 className="text-[12px] text-[#000000] font-semibold mb-[2px]">
                  {walletAction === 'deposit' ? 'Desposit ARS' : 'Withdraw ARS'}
                </h1>
                <p className="text-[#6D717D] text-[9px] font-semibold">
                  {walletAction === 'deposit'
                    ? 'I have cryptocurrencies that I want to withdraw to my wallet'
                    : 'I have Argentine pesos that I want to withdraw to my bank account'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppBar;
