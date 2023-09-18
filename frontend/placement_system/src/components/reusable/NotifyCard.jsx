// Card.js
import React from "react";
import job_img from "../../assests/job_image.jpg";
const Card = ({ message, jobRole, company }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={job_img}
            alt="Card"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {message}
          </div>
          <p className="mt-2 text-gray-500">{jobRole}</p>
          <p className="mt-2 text-gray-500">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
