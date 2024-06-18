import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import Section from "./components/Section";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
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

    fetchTopAlbumns();
    fetchNewAlbumns();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section title={"Top Albums"} data={topAlbums} />
      <Section title={"New Albums"} data={newAlbums} />

      {/* {albums.map((album) => (
        <Card key={album.id} data={album} />
        // <div key={album.id}>{album.id}</div>
      ))} */}
    </div>
  );
}

export default App;
