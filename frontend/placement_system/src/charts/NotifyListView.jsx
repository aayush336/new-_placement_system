// ListView.js
import React from "react";
import Card from "../components/reusable/NotifyCard";
import dummyData from "../assests/dummy_data/NotificationData";

const ListView = () => {
  return (
    <div className="flex flex-col  min-h-screen bg-gray-100">
      <div className=" w-full">
        <h1 className="text-3xl font-semibold text-center mb-6">Notifications</h1>
        {dummyData.map((item) => (
          <Card 
            key={item.id}
            message={item.message}
            jobRole={item.jobRole}
            company={item.company}
            
          />
        ))}
      </div>
    </div>
  );
};

export default ListView;
