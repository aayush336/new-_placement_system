import React, { Component } from "react";
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom"; // Import Navigate

import './App.css';
import SurveyComponent from './components/survey_components/SurveyComponent';
import DashboardComponent from './components/dashboard_components/DashboardComponents';
import LoginComponent from './components/login_components/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
          <Route path="/" element={<LoginComponent/>} />
          <Route path="/dashboard" element={<DashboardComponent />} />

        </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
