import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import Section from "./components/Section";

function App() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const fetchAlbumns = async () => {
      const response = await fetch(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      const data = await response.json();
      console.log(data);
      setAlbums(data);
    };
    fetchAlbumns();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section title={"Top Albums"} />
      {/* {albums.map((album) => (
        <Card key={album.id} data={album} />
        // <div key={album.id}>{album.id}</div>
      ))} */}
    </div>
  );
}

export default App;
