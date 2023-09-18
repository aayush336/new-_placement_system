import React from "react";
import TopNav from "../top nav/TopNav";
import SideNav from "../side nav/SideNav";
import Router from "../../routes/Router"

function  Layout(props) {
  // You can access the form data passed as props to display on the dashboard
 

  return (

    
   
    <div className="layout">

      <div className="nav_bar">
            <TopNav/>
      </div>
      <div className="side_nav">
            <SideNav/>
      </div>
      
      <div>
        <Router/>
      </div>
    </div>
  );
}

export default Layout;
