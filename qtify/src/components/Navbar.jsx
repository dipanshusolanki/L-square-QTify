import React from "react";
import "./Navbar.css";
import searchIcon from "../assets/Search icon.svg";
import Button from "./Button";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <Logo />
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
