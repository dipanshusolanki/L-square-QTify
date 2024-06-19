import React from "react";
import "./Card.css";
import Chip from "@mui/material/Chip";
// import Cat from "../assets/4tatbyl5.bmp";

const Card = ({ data, hasLikes }) => {
  return (
    <div className="card">
      <div className="cardContent">
        <img src={data.image} alt={data.title} className="cardImage" />
        <div className="cardFooter">
          <Chip
            sx={{
              // width: "71px",
              height: "23px",
              fontSize: "10px",
              fontFamily: "Poppins, sans-serif",
              paddingX: "8px",
              paddingY: "4px",
              marginLeft: "8px",
            }}
            label={
              hasLikes === true
                ? `${data.likes} Likes`
                : `${data.follows} Follows`
            }
          />
        </div>
      </div>
      <p className="cardText">{data.title}</p>
    </div>
  );
};

export default Card;
