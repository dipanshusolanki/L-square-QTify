import React from "react";
import logo from "../assets/qtify_logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <>
      <img
        className="logo"
        src={logo}
        alt="qtify-logo"
        width={67}
        height={34}
      />
    </>
  );
};

export default Logo;
