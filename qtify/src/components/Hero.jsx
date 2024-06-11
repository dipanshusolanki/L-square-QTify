import React from "react";
import "./Hero.css";
import heroimage from "../assets/vibrating-headphone 1.svg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="heroText">
          <p>100 Thousand Songs, ad-free</p>
          <p>Over thousands podcast episodes</p>
        </div>
        <img className="heroImage" src={heroimage} alt="Hero" />
      </div>
    </>
  );
};

export default Hero;
