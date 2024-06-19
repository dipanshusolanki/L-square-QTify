import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./Section.css";
import Carousel from "./Carousel";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Section = ({ title, data, hasExpandButton, hasTabFilter, tabData }) => {
  const [albumsCollapsed, setAlbumsCollapsed] = useState(true);
  const [genres, setGenres] = useState([]);
  const [currentGenre, setCurrentGenre] = useState("");
  const [filteredSongs, setFilteredSongs] = useState([]);

  const toggleGridView = () => {
    setAlbumsCollapsed((albumsCollapsed) => !albumsCollapsed);
  };

  useEffect(() => {
    setGenres(tabData);
    setCurrentGenre("all");
    setFilteredSongs(data);
  }, [data, tabData]);

  const handleGenreChange = (event, newGenre) => {
    console.log(event);
    console.log(newGenre);
    if (newGenre === "all") {
      setFilteredSongs(data);
    } else {
      const filteredData = data.filter((song) => song.genre.key === newGenre);
      console.log(filteredData);
      setFilteredSongs(filteredData);
    }
    setCurrentGenre(newGenre);
  };

  return (
    <>
      <section className="maingrid">
        <div className="gridheader">
          <p>{title}</p>
          {hasExpandButton === true ? (
            <>
              {albumsCollapsed === true ? (
                <>
                  <button onClick={toggleGridView}>Show All</button>
                </>
              ) : (
                <>
                  <button onClick={toggleGridView}>Collapse</button>
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
        {hasTabFilter === true ? (
          <>
            <div className="gridTabFilter">
              <Box>
                <Tabs
                  sx={{
                    "& .MuiTabs-indicator": {
                      backgroundColor: "#34c94b",
                      height: "4px", // Custom indicator color
                    },
                    "& .MuiTab-root.Mui-selected": {
                      color: "#34c94b", // Custom selected tab text color
                    },
                  }}
                  value={currentGenre}
                  onChange={handleGenreChange}
                  aria-label="filter tabs"
                >
                  <Tab
                    sx={{ color: "#ffffff" }}
                    value={"all"}
                    label={"All"}
                    className="tab"
                  />
                  {genres.map((genre) => (
                    <Tab
                      sx={{ color: "#ffffff" }}
                      className="tab"
                      value={genre.key}
                      label={genre.label}
                    />
                  ))}
                </Tabs>
              </Box>
            </div>
          </>
        ) : (
          <></>
        )}
        {albumsCollapsed === true ? (
          <>
            {hasTabFilter === true ? (
              <>
                <Carousel hasTabFilter={true} data={filteredSongs} />
              </>
            ) : (
              <>
                <Carousel hasTabFilter={false} data={data} />
              </>
            )}
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
