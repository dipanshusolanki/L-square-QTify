import React from "react";
import Right from "../assets/Group 3740.svg";
import "./RightNavigation.css";

const RightNavigation = ({ onClick, isHidden }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`rightnavbutton ${isHidden ? "hidden" : ""}`}
      >
        <img src={Right} alt=" Right Navigation" />
      </button>
    </>
  );
};

export default RightNavigation;
