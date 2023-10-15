import "./App.css";
import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar";
import newBollywoodImage from "./assets/new-bollywood.png";
import Grid from "./components/Grid/Grid";
import { useEffect, useState } from "react";
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";
import Section from "./components/Section/Section";
function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);

  const generateTopAlbumsData = async () => {
    const res = await fetchTopAlbums();
    setTopAlbumsData(res);
    console.log(res);
  };

  const generateNewAlbumsData = async () => {
    const res = await fetchNewAlbums();
    setNewAlbumsData(res);
    console.log(res);
  };

  useEffect(() => {
    generateTopAlbumsData();
    generateNewAlbumsData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Section data={topAlbumsData} title={"Top Albums"} />
      <Section data={newAlbumsData} title={"New Albums"} />
    </div>
  );
}

export default App;
