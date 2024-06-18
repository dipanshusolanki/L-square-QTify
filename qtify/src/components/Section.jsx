import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./Section.css";
import Carousel from "./Carousel";

const Section = ({ title, data }) => {
  const [albumsCollapsed, setAlbumsCollapsed] = useState(true);

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

  const toggleGridView = () => {
    setAlbumsCollapsed((albumsCollapsed) => !albumsCollapsed);
  };

  return (
    <>
      <section className="maingrid">
        <div className="gridheader">
          <p>{title}</p>
          {albumsCollapsed === true ? (
            <>
              <button onClick={toggleGridView}>Show All</button>
            </>
          ) : (
            <>
              <button onClick={toggleGridView}>Collapse</button>
            </>
          )}
          {/* <button>Collapse</button> */}
        </div>
        {albumsCollapsed === true ? (
          <>
            <Carousel data={data} />
          </>
        ) : (
          <>
            <div className="gridcontent">
              {data.map((album) => (
                <Card key={album.id} data={album} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Section;
