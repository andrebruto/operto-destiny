import React from "react";
import GlobeIcon from "../assets/icons/globe-solid.svg";
import MenuIcon from "../assets/icons/bars-solid.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <img className="navbar__icon" src={GlobeIcon} alt="Globe Icon" />
        <h2 className="navbar__logo">destiny</h2>
      </div>
      <div className="navbar__menu">
        <p className="navbar__menu-item">HOTELS</p>
        <p className="navbar__menu-item">CAR RENTALS</p>
        <p className="navbar__menu-item">ATTRACTIONS</p>
        <img className="navbar__menu-icon" src={MenuIcon} alt="Menu Icon" />
      </div>
    </div>
  );
};

export default Navbar;
