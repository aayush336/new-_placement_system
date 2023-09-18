import React from "react";
import { BarChart, Bar, XAxis, YAxis,Tooltip, Legend,  ResponsiveContainer } from "recharts";
import placedStats from "../assests/dummy_data/PlacedStats";

const BranchChartComponent = () => {
    
  return (
    <BarChart width={400} height={200}  data={placedStats}>
      
      <XAxis dataKey="name" stroke="white" />
      <YAxis stroke="white"/>
      <Tooltip />
      <Legend />
      <Bar dataKey="totalNumber" fill="#0088FE" name="Students Placed"   barSize={20}
        
      />
      
    </BarChart>
  );
};

export default BranchChartComponent;
