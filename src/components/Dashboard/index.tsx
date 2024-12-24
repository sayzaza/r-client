import React from 'react';
import Balance from './Balance';
import Graph from './Graph';
import PiChart from './PiChart';

const Dashboard: React.FC = () => {
	return (
		<div className="py-11 px-12">
			<Balance />
			<div className='grid grid-cols-12 gap-20 mt-12'>
				<div className='xl:col-span-7 col-span-12'>
					<Graph />
				</div>
				<div className='xl:col-span-5 col-span-12'>
					<PiChart />
				</div>
			</div>
		</div>
	)
}

export default Dashboard