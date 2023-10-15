import "./App.css";
import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar";
import newBollywoodImage from "./assets/new-bollywood.png";
import Grid from "./components/Grid/Grid";
import { useEffect, useState } from "react";
import { fetchTopAlbums } from "./api/api";
import Section from "./components/Section/Section";
function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);

  const generateTopAlbumsData = async () => {
    const res = await fetchTopAlbums();
    setTopAlbumsData(res);
    console.log(res);
  };

  useEffect(() => {
    generateTopAlbumsData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Card name={"New Bollywood"} followers={100} image={newBollywoodImage} /> */}
      <Section data={topAlbumsData} title={"Top Albums"} />
    </div>
  );
}

export default App;
