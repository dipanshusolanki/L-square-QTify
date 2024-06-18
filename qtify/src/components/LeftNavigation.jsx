import React from "react";
import Left from "../assets/Group 3741.svg";
import "./LeftNavigation.css";

const LeftNavigation = ({ onClick, isHidden }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`leftnavbutton ${isHidden ? "hidden" : ""}`}
      >
        <img width={32} height={32} src={Left} alt="Left Navigation" />
      </button>
    </>
  );
};

export default LeftNavigation;
