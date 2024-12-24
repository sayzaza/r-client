import React from 'react';
import Bitcoin from '../../../assets/images/bitcoin.png'
import Ether from '../../../assets/images/ether.png'
import Usdt from '../../../assets/images/usdt.png'

export enum CoinType {
	bitcoin = 'BTC',
	usdt = 'USDT',
	ether = 'ETH'
}

export interface IAsset {
	name: CoinType;
	value: number;
	balance: number;
}

const Asset: React.FC<IAsset> = (props) => {
	
	const { name, value, balance } = props;
	return (
		<div className="flex justify-between items-center mb-5">
      <div className="text-[#6D717D] text-base font-semibold flex items-center">
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
      <div className="flex justify-between items-center">
        <div className="mr-14 flex flex-col items-end">
          <div className="text-[#6D717D] text-base font-semibold">${value}</div>
          <div className="text-[#999CA6] text-sm font-medium">
            {balance} {name}
          </div>
        </div>
        <button className="bg-[#773EE2] rounded py-1 w-16 text-xs font-semibold text-white mr-3.5">BUY</button>
        <button className="bg-[#F4F0FD] rounded py-1 w-16 text-xs font-semibold text-black">SELL</button>
      </div>
    </div>
	)
}

export default Asset;