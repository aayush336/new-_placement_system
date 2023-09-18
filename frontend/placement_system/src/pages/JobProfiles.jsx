// JobView.js
import React, { useState } from "react";
import JobData from "../assests/dummy_data/NotificationData";
import JobCard from "../components/reusable/JobCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobView = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const handleApply = () => {
    toast.success("Applied!");
  };

  return (
    <div className="ml-[260px]">
    <div className="flex justify-between p-4 ">
      <div className="w-1/2 overflow-y-auto mr-2 border-2 border-b-gray-950">
        <h1 className="text-4xl font-semibold my-4">Job Listings</h1>
        {JobData.map((job) => (
          <div
            key={job.id}
            onClick={() => handleJobSelect(job)}
            className={`cursor-pointer ${
              selectedJob === job ? "bg-gray-300 p-2 m-2 drop-shadow-sm" : "border-2 m-2 drop-shadow-sm"
            } p-2  rounded-lg `}
          >
            <h2 className="text-lg">{job.jobRole}</h2>
            <p className="text-gray-500">{job.company}</p>
            
          </div>
        ))}
      </div>

      


      <div className="w-1/2 ml-2 p-4">
        {selectedJob && (
          <JobCard
            jobRole={selectedJob.jobRole}
            company={selectedJob.company}
            description={selectedJob.description}
            onApply={handleApply}
          />
        )}
      </div>
      <ToastContainer />
    </div>

    </div>
  );
};

export default JobView;
