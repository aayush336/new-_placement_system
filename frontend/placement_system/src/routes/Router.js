import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from '../components/login_components/login';
import SignUp from "../components/login_components/signUp";

import Dashboard from "../pages/Dashboard";
import JobProfiles from "../pages/JobProfiles";
import MyProfiles from "../pages/MyProfile";
import Layout from "../components/layouts/layout";




const Router = () => {
  return (
    <Routes> 
       <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/layout" element={<Layout/>}/>
      <Route path="/" element={<LoginComponent/>} />
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/job_profiles" element={<JobProfiles/>}/>
      <Route path="/my_profile" element={<MyProfiles/>}/>
      
    </Routes>
    
  );
};

export default Router;
