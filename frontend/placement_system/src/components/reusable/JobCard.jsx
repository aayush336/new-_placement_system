// JobCard.js
import React from "react";

const JobCard = ({ jobRole, company, description, onApply }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold">{jobRole}</h2>
        <p className="text-gray-500">{company}</p>
        <p className="mt-2 text-gray-700">{description}</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
          onClick={onApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobCard;
