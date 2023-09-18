import React from "react";
import SingleCard from "../components/reusable/SingleCard";


import GenderStatsChart from "../charts/GenderChartComponent";

import studentsIcon from "../assests/icons/students_group_icon.png";
import placedIcon from "../assests/icons/placed_icon.png";
import companiesIcon from "../assests/icons/companies_icon.png";

import '../styles/Dashboard.css'
import BranchChartComponent from "../charts/BranchChartComponent";

import NotifyListView from"../charts/NotifyListView";


const totalStudentsObj = {
  title: "Total Students Applied",
  totalNumber: 250,
  icon: studentsIcon,
};

const placedObj = {
  title: "Placed Students",
  totalNumber: 150,
  icon: placedIcon,
};

const companiesObj = {
  title: "Companies OnCampus",
  totalNumber: 50,
  icon: companiesIcon,
};

const Dashboard = () => {
  return (
    
    <div className="dashboard">
      <div className="dashboard__wrapper ml-[260px]  ">
        <div className="dashboard__cards text-white justify-center">
          <SingleCard item={totalStudentsObj} />
          <SingleCard item={placedObj} />
          <SingleCard item={companiesObj} />
        </div>

        <div className="grid grid-cols-2 m-10 gap-8"> 
          <div className="card-container  flex flex-col bg-slate-900 rounded-lg  flex-wrap justify-center">         
          <h3 className=" text-white font-semibold text-center p-5 text-2xl">Gender Statistics</h3>
            <div className="self-center">
              <GenderStatsChart />
            </div>
          </div>
          <div className=" card-container flex flex-row bg-slate-900 rounded-lg  flex-wrap justify-center">
            <h3 className=" text-white font-semibold align-middle p-5 text-2xl">Branch Statistics</h3>
            <div className="self-center">
                  <BranchChartComponent/>
            </div>
          </div>
        </div>

        <div>
          <NotifyListView/>
        </div>


        


        
      </div>
    </div>
  );
};

export default Dashboard;
