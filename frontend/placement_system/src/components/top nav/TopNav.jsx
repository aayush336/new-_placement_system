import React from 'react'
import { Link } from "react-router-dom";
import male_profileImg from "../../assests/icons/male_avatar.png";
import search_icon from "../../assests/icons/search_icon.png";
import notification_icon from "../../assests/icons/notification_icon.png";
import "./TopNav.css";

function TopNav() {
  return (
    <div className="top__nav">
    <div className="top__nav-wrapper ">
      <div className="search__box">
        <img class="icon"src={search_icon}/>
        <input type="text" placeholder="Search or type" />
        <span>
          <i class="ri-search-line"></i>
        </span>
      </div>
      <div className="top__nav-right">
        <span className="notification">
          <img class="icon"src={notification_icon}/>
        </span>
        <div className="profile">
          <Link to="/settings">
            <img src={male_profileImg} alt="profile pic" />
          </Link>
        </div>
      </div>
    </div>
  </div>
    )
}

export default TopNav