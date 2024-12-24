import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import DashboardImg from '../../assets/images/dashboard.png';
import WalletImg from '../../assets/images/wallet.png';
import SwapImg from '../../assets/images/swap.png';
import EarnImg from '../../assets/images/earnings.png';
import TransactionImg from '../../assets//images/file.png';
import CreditImg from '../../assets/images/credit-card.png';
import BellImg from '../../assets/images/bell.png';
import SettingsImg from '../../assets/images/setting.png';
import QuestionImg from '../../assets/images/question.png';
import ChatImg from '../../assets/images/chat.png';

interface INavMenu {
  openNav: boolean;
  setOpenNav: (x: boolean) => void;
}

const NavMenu: React.FC<INavMenu> = ({ openNav, setOpenNav }) => {
  if (!openNav) {
    return (
      <div
        className="fixed mt-12 bg-[#EDEFF2] rounded-l py-2 px-1 flex cursor-pointer"
        onClick={() => setOpenNav(true)}
      >
        <FontAwesomeIcon icon={faAngleRight} className="w-2.5 h-2.5" />
      </div>
    );
  }
  return (
    <div className="fixed pt-12 pl-9 pb-28 w-72 h-screen flex flex-col justify-between border-r border-[#EDEFF2] overflow-auto">
      <div className="mb-[200px]">
        <div className="flex justify-between mb-16">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div className="bg-[#EDEFF2] rounded-l py-2 px-1 flex cursor-pointer" onClick={() => setOpenNav(false)}>
            <FontAwesomeIcon icon={faAngleLeft} className="w-2.5 h-2.5" />
          </div>
        </div>
        <div className="text-[#6D717D] mb-11">
          <h1 className="text-xs font-semibold mb-7">VISION GENERAL</h1>
          <Link to="/dashboard" className="flex items-center text-sm font-bold mb-8">
            <div className="mr-5 w-5 h-5">
              <img src={DashboardImg} alt="Dashboard" className="w-full h-full" />
            </div>
            Dashboard
          </Link>
          <Link to="/wallet" className="flex items-center text-sm font-bold mb-8">
            <div className="mr-5 w-5 h-5">
              <img src={WalletImg} alt="Wallet" className="w-full h-full" />
            </div>
            Wallet
          </Link>
          <Link to="/swap" className="flex items-center text-sm font-bold mb-8">
            <div className="mr-5 w-5 h-5">
              <img src={SwapImg} alt="Swap" className="w-full h-full" />
            </div>
            Swap
          </Link>
          <Link to="/earn" className="flex items-center text-sm font-bold mb-8">
            <div className="mr-5 w-5 h-5">
              <img src={EarnImg} alt="Earn" className="w-full h-full" />
            </div>
            Earn
          </Link>
          <Link to="/transaction" className="flex items-center text-sm font-bold mb-8">
            <div className="mr-5 w-5 h-5">
              <img src={TransactionImg} alt="Transaction" className="w-full h-full" />
            </div>
            Transacciones
          </Link>
          <Link to="/credit-card" className="flex items-center text-sm font-bold">
            <div className="mr-5 w-5 h-5">
              <img src={CreditImg} alt="Credit" className="w-full h-full" />
            </div>
            Tarjeta
          </Link>
        </div>
        <div className="text-[#6D717D]">
          <h1 className="text-xs font-semibold mb-7">CUENTA</h1>
          <Link to="/notification" className="flex items-center text-sm font-bold mb-8">
            <div className="mr-5 w-5 h-5">
              <img src={BellImg} alt="Credit" className="w-full h-full" />
            </div>
            Notificaciones
            <span className="flex justify-center w-10 h-6 bg-[#773EE2] rounded-full items-center text-xs text-white font-semibold ml-7">
              10
            </span>
          </Link>
          <Link to="/configuration" className="flex items-center text-sm font-bold">
            <div className="mr-5 w-5 h-5">
              <img src={SettingsImg} alt="Credit" className="w-full h-full" />
            </div>
            Configuración
          </Link>
        </div>
      </div>

      <div className="text-[#6D717D]">
        <Link to="/help" className="flex items-center text-sm font-bold mb-8">
          <div className="mr-5 w-5 h-5">
            <img src={QuestionImg} alt="Credit" className="w-full h-full" />
          </div>
          Soporte
        </Link>
        <Link to="/feedback" className="flex items-center text-sm font-bold">
          <div className="mr-5 w-5 h-5">
            <img src={ChatImg} alt="Credit" className="w-full h-full" />
          </div>
          Enviar feedback
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
