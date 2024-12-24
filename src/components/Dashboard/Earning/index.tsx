import React from 'react';
import EarningBar, { IEarningBar } from './EarningBar';
import { CoinType } from '../Assets/Asset';

const mockEarning: IEarningBar[] = [
  {
    name: CoinType.bitcoin,
    staked: 60,
    disponible: 20,
  },
  {
    name: CoinType.usdt,
    staked: 30,
    disponible: 40,
  },
  {
    name: CoinType.ether,
    staked: 10,
    disponible: 80,
  },
];

const Earning: React.FC = () => {
  return (
    <div className='w-full'>
      <div className="flex justify-between mb-5">
        <h1 className="font-semibold text-3xl">Earn</h1>
        <div className="flex items-center">
          <div className="text-[#6D717D] text-[10px] font-medium mr-1">Staked</div>
          <div className="bg-[#773EE2] w-4 h-4 rounded-sm mr-2.5"></div>
          <div className="text-[#6D717D] text-[10px] font-medium mr-1">Disponible</div>
          <div className="bg-[#E5DAFB] w-4 h-4 rounded-sm"></div>
        </div>
      </div>
      {mockEarning.map(({ name, staked, disponible }) => (
        <EarningBar key={name} name={name} staked={staked} disponible={disponible} />
      ))}
    </div>
  );
};

export default Earning;
