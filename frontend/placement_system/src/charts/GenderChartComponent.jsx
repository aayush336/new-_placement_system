import React from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import genderStatsData from '../assests/dummy_data/GenderStatsData'; // Import your data

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Define colors for each gender
const GenderChartComponent = () => {
  // You may need to process the data from genderStaticsData here
  // For example, calculate the percentages

  return (
    <PieChart width={200} height={200}>
      <Pie
        dataKey="value"
        nameKey="name"
        isAnimationActive={true} // Disable animation if needed
        data={genderStatsData}
        cx='50%'
        cy='50%'
        outerRadius={50}
        fill="#8884d8"
        label
        legendType='circle'
        
        
        
      >
        {genderStatsData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default GenderChartComponent;
