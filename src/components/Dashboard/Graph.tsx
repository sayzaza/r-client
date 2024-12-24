import React from 'react';
import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';
import { cityTemperature } from '@visx/mock-data';
import { scaleLinear, scaleTime } from '@visx/scale';
import { extent } from 'd3-array';
import { curveMonotoneX } from '@visx/curve';
import { AxisBottom } from '@visx/axis';

const Graph: React.FC = () => {
	const width = 500;
	const height = 300;
	const margin = { left: 50 };
	const data = cityTemperature.slice(0, 8);
	
	// Define the graph dimensions
	const xMax = width - margin.left;
	const yMax = height;

	const getDate = (d: any) => new Date(d.date);
	const getTemp = (d: any) => Number(d['San Francisco'])

	const xScale = scaleTime({
		range: [0, xMax],
		domain: extent(data, getDate) as [Date, Date],
		nice: true
	})

	const yScale = scaleLinear({
		range: [0, xMax],
		domain: extent(data, getDate) as [Date, Date],
		nice: true
	})

	return (
		<div className="w-[580px]">
			<svg width={width} height={height}>
				<Group left={margin.left} top={0}>
					<LinePath 
						data={data}
						curve={curveMonotoneX}
						x={(d) => xScale(getDate(d)) ?? 0}
						y={(d) => yScale(getTemp(d)) ?? 0}
						stroke='#6D717D'
						strokeWidth={2}
					/>
					<AxisBottom
						scale={xScale}
						top={yMax}
						numTicks={4}
						tickLabelProps = {() => ({
							fill: '#6D717D',
							fontSize: 10,
							textAnchor: 'middle',
							dy: 4,
						})}
					/>
				</Group>
			</svg>
			<div className="flex justify-between mt-5">
        <div className="flex text-white text-xs font-medium">
          <button className="w-16 h-6 bg-[#6D717D] rounded-md flex justify-center items-center mr-4 hover:bg-[#773EE2] focus:bg-[#773EE2]">
            24H
          </button>
          <button className="w-16 h-6 bg-[#6D717D] rounded-md flex justify-center items-center mr-4 hover:bg-[#773EE2] focus:bg-[#773EE2]">
            7D
          </button>
          <button className="w-16 h-6 bg-[#6D717D] rounded-md flex justify-center items-center mr-4 hover:bg-[#773EE2] focus:bg-[#773EE2]">
            30D
          </button>
          <button className="w-16 h-6 bg-[#6D717D] rounded-md flex justify-center items-center mr-4 hover:bg-[#773EE2] focus:bg-[#773EE2]">
            90D
          </button>
          <button className="w-16 h-6 bg-[#6D717D] rounded-md flex justify-center items-center hover:bg-[#773EE2] focus:bg-[#773EE2]">
            LIVE
          </button>
        </div>
        <div className="flex text-[#6D717D] text-[10px] font-semibold">
          <div className="mr-4 flex items-center">
            <input type="radio" id="usd" name="coin" className="mr-1" />
            <label htmlFor="usd">USD</label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="btc" name="coin" className="mr-1" />
            <label htmlFor="btc">BTC</label>
          </div>
        </div>
      </div>
		</div>
	)
}

export default Graph