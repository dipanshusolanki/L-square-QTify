import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import Section from "./components/Section";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const fetchTopAlbumns = async () => {
      const response = await fetch(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      const data = await response.json();
      // console.log(data);
      setTopAlbums(data);
    };

    const fetchNewAlbumns = async () => {
      const response = await fetch(
        "https://qtify-backend-labs.crio.do/albums/new"
      );
      const data = await response.json();
      // console.log(data);
      setNewAlbums(data);
    };

    const fetchSongs = async () => {
      const response = await fetch("https://qtify-backend-labs.crio.do/songs");
      const data = await response.json();
      setSongs(data);
    };

    const fetchGenres = async () => {
      const response = await fetch("https://qtify-backend-labs.crio.do/genres");
      const data = await response.json();
      // console.log("App = > ", data.data);
      setGenres(data.data);
    };

    fetchTopAlbumns();
    fetchNewAlbumns();
    fetchSongs();
    fetchGenres();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section
        title={"Top Albums"}
        data={topAlbums}
        hasExpandButton={true}
        hasTabFilter={false}
      />
      <Section
        title={"New Albums"}
        data={newAlbums}
        hasExpandButton={true}
        hasTabFilter={false}
      />
      <Section
        title={"Songs"}
        data={songs}
        hasExpandButton={false}
        hasTabFilter={true}
        tabData={genres}
      />
    </div>
  );
}

export default App;
