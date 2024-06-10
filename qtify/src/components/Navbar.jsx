import React from "react";
import "./Navbar.css";
import logo from "../assets/qtify_logo.png";
import searchIcon from "../assets/Search icon.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <img src={logo} alt="qtify-logo" width={67} height={34} />
        <div className="searchbar">
          <input
            type="text"
            name=""
            id="searchbarinput"
            placeholder="Search a song of your choice"
          />
          <button>
            <img src={searchIcon} width={20} height={20} alt="Search Icon" />
          </button>
        </div>
        <Button text={"Give Feedback"} />
      </nav>
    </>
  );
};

export default Navbar;
