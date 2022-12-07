import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Images/Logo.png";
const Header = () => {
  return (
    <nav className="flex items-center justify-evenly md:justify-between py-2 lg:justift-between px-3">
      <div className="logo cursor-pointer	w-70">
        <Link to="/"> <img src={logo} alt="Logo" /></Link>
      </div>
      <div className="link">
        <div className="cursor-pointer text-2xl	">Help?</div>
      </div>
    </nav>
  );
};
export default Header;
