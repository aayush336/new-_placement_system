import React, { useState } from "react";
import "../styles/MyProfile.css";

const MyProfile = () => {
    const [selectedGender, setSelectedGender] = useState("Male");
    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
      };

  return (
    <div className="bg-custom-blue min-h-screen py-4 ml-[260px]">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-center text-custom-navy my-4 ">
          My Profile
        </h2>

        <div className="flex justify-center space-x-4 mb-6">
          <button className="btn">My Details</button>
          <button className="btn active-btn bg-custom-orange rounded-full p-2 m-2 text-white">Profile</button>
          <button className="btn">Password</button>
          <button className="btn">Email</button>
          <button className="btn">Notification</button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-custom-navy mb-4">Profile</h2>
          <p className="text-custom-navy text-lg mb-4">
            Update your photo and personal details here.
          </p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-custom-navy">
                  First Name
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder="Jhon"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-custom-navy">
                  Last Name
                </label>
                <input type="text" className="input" placeholder="Cena" />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-custom-navy">
                  Email
                </label>
                <input
                  type="email"
                  className="input"
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-custom-navy">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="input"
                  placeholder="1020304405"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-custom-navy">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="input"
                  placeholder="dd/mm/yyyy"
                />
              </div>

              
            <div className="mb-4">
              <label className="block text-sm font-medium text-bg-start-color">
                Gender
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={selectedGender === "Male"}
                    onChange={handleGenderChange}
                  />
                  <span className="text-bg-start-color">Male</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={selectedGender === "Female"}
                    onChange={handleGenderChange}
                  />
                  <span className="text-bg-start-color">Female</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Others"
                    checked={selectedGender === "Others"}
                    onChange={handleGenderChange}
                  />
                  <span className="text-bg-start-color">Others</span>
                </label>
              </div>
            </div>

            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-custom-navy">
                Your Photo
              </label>
              <p className="text-custom-navy text-lg mb-2">
                This will be displayed in your profile.
              </p>
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  className="border rounded p-2 w-full"
                  placeholder="Choose file"
                />
                <button className="btn btn-danger bg-english_red text-white rounded-full p-2 hover:scale-110" >Delete</button>
                <button className="btn btn-primary bg-navytext-custom-navy">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
