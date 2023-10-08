import "./App.css";
import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar";
import newBollywoodImage from "./assets/new-bollywood.png";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card name={"New Bollywood"} followers={100} image={newBollywoodImage} />
    </div>
  );
}

export default App;
