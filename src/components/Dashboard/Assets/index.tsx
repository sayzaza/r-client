import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Asset from './Asset';
import { IAsset } from './Asset';
import { CoinType } from './Asset';

const mockAssets: IAsset[] = [
  {
    name: CoinType.bitcoin,
    value: 18238.22,
    balance: 0.62,
  },
  {
    name: CoinType.usdt,
    value: 9128.02,
    balance: 9128.02,
  },
  {
    name: CoinType.ether,
    value: 1823.22,
    balance: 0.99,
  },
];

const Assets: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-semibold">Your assets</h1>
        <p className="text-xs text-[#6D717D] font-medium flex items-center">
          See all
          <FontAwesomeIcon icon={faAngleRight} className="ml-0.5 w-2 h-2" />
        </p>
      </div>
      {mockAssets.map(({ name, value, balance }) => (
        <Asset key={name} name={name} value={value} balance={balance} />
      ))}
    </div>
  );
};

export default Assets;
