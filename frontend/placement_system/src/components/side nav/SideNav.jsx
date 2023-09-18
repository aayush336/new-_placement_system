import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../assests/dummy_data/navLinks";
import logo from "../../assests/icons/CampusConnectLogo.png";

const SideNav = () => {
  return (
    <div className="bg-english_blue w-64 h-screen fixed top-0 left-0 z-50 p-8 ">
      <div className="sidebar__logo ">
        <img src={logo} alt="Logo" className="rounded-xl"/>
      </div>

      <div className="sidebar__content flex flex-col justify-between h-5/6 mt-12">
        <div className="menu">
          <ul className="nav__list space-y-4">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  activeClassName="nav__active"
                  className="nav__link flex items-center gap-2 text-white hover:text-english_red hover:bg-white"
                >
                  <i className={item.icon}></i>
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__bottom mb-8 ">
          <span className="flex items-center justify-center space-x-2 text-small hover:px-2 hover:text-xl cursor-pointer bg-english_red text-white rounded-xl">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
