import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./Section.css";

const Section = ({ title, data }) => {
  // const [albums, setAlbums] = useState([]);

  // useEffect(() => {
  //   const getAlbums = async () => {
  //     const response = await axios.get(
  //       "https://qtify-backend-labs.crio.do/albums/top"
  //     );
  //     //   console.log("Section Response => ", response.data);
  //     setAlbums(response.data);
  //   };
  //   getAlbums();
  // }, []);

  return (
    <>
      <section className="maingrid">
        <div className="gridheader">
          <p>{title}</p>
          <button>Collapse</button>
        </div>
        <div className="gridcontent">
          {data.map((album) => (
            <Card key={album.id} data={album} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Section;
