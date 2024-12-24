import React from 'react';
import { CoinType } from '../Assets/Asset';
import Bitcoin from '../../../assets/images/bitcoin.png';
import Usdt from '../../../assets/images/usdt.png';
import Ether from '../../../assets/images/ether.png';

export interface IEarningBar {
  name: CoinType;
  staked: number;
  disponible: number;
}

const EarningBar: React.FC<IEarningBar> = (props) => {
  const { name, staked, disponible } = props;

  return (
    <div className="flex items-center mb-5">
      <div className="text-[#6D717D] text-base font-semibold flex items-center mr-5">
        <div className="mr-2 w-7 h-7">
          {name === CoinType.bitcoin ? (
            <img src={Bitcoin} alt="bitcoin" className="w-full h-full" />
          ) : name === CoinType.ether ? (
            <img src={Ether} alt="ether" className="w-full h-full" />
          ) : (
            <img src={Usdt} alt="usdt" className="w-full h-full" />
          )}
        </div>
        <div className="w-11 h-5 flex items-center">{name}</div>
      </div>
      <div className="flex grow">
        <div className="h-6 bg-[#773EE2] rounded mr-1" style={{ width: `${staked}%` }}></div>
        <div className="h-6 bg-[#E5DAFB] rounded mr-1" style={{ width: `${disponible}%` }}></div>
        <div className="h-6 grow dots"></div>
      </div>
      <div className="text-[#6D717D] font-bold text-xs ml-4">{staked + disponible}%</div>
    </div>
  );
};

export default EarningBar;
