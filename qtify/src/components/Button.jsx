import React from "react";
import "./Button.css";

const Button = ({ text }) => {
  return (
    <>
      <button className="feedback">{text}</button>
    </>
  );
};

export default Button;
