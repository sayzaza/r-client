import React from 'react';
import { Pie } from '@visx/shape';
import { Group } from '@visx/group';
import { scaleOrdinal } from 'd3-scale';

const colors = ['#E5DAFB', '#773EE2', '#F4F0FD'];
const colorScale = scaleOrdinal().range(colors);

const PiChart: React.FC = () => {
  const width = 334;
  const height = 334;
  const radius = 167;
  const margin = { top: radius, left: radius };

  const data = [
    { label: 'ETH', value: 10, color: '#E5DAFB' },
    { label: 'USDT', value: 30, color: '#773EE2' },
    { label: 'BTC', value: 60, color: '#F4F0FD' },
  ];
  return (
    <>
      <svg width={width} height={height}>
        <Group top={margin.top} left={margin.left}>
          <Pie
            data={data}
            pieValue={(d) => d.value}
            outerRadius={radius}
            padAngle={0.005}
            cornerRadius={3}
            centroid={(centroid, arc) => {
              const [x, y] = centroid;
              return (
                <g>
                  <text x={x} y={y} textAnchor="middle" fill="#6D717D" fontSize={20} fontWeight={600}>
                    {arc.data.label}
                  </text>
                  <text x={x} y={y + 15} textAnchor="middle" fill="#6D717D" fontSize={10} fontWeight={600}>
                    {`${arc.data.value}%`}
                  </text>
                </g>
              );
            }}
            fill={(d) => {
              const color = colorScale(d.data.color);
              if (typeof color === 'string') {
                return color;
              }
              return '#000000';
            }}
          />
        </Group>
      </svg>
    </>
  );
};

export default PiChart;
