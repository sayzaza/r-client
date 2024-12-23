import React from 'react'
import { IAppBarProps, PageName } from '../Layout'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AppBar: React.FC<IAppBarProps> = ({ pageName }) => {
	const handleDeposit = () => {
		console.log('handleDespoit')
	}

	const handleWithdraw = () => {
		console.log('handleWithdraw')
	}
	return (		
		<div className='flex justify-between px-12 py-10 border-b border-[#EDEFF2]'>
			<div className='relative'>
				<h1 className='text-3xl font-semibold'>{pageName}</h1>
				{pageName === PageName.wallet && (
					<div className='absolute mt-2.5 flex'>
						<button 
							className='bg-[#773EE2] rounded text-white font-semibold text-[8px] px-5 py-1 mr-2 w-20'
							onClick={handleDeposit}
						>
							Deposit
						</button>
						<button
                className="bg-[#fff] border border-[#773EE2] rounded text-[#773EE2] font-semibold text-[8px] px-5 py-1 w-20"
                onClick={handleWithdraw}
              >Withdraw
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
			<div className='flex items-center'>
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
			</div>
		</div>
	)
}

export default AppBar;