import { useState } from "react";
import "./styles/Main.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Challenges from "./components/Challenges";
import Slider from "./components/Slider";
import Cards from "./components/Cards"
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import slide1 from "./images/slider1.jpg";
import slide2 from "./images/slider2.jpg";
import slide3 from "./images/slider3.jpg";
import slide4 from "./images/slider4.jpg";
import slide5 from "./images/slider5.jpg";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevState => !prevState);
  };

  const slides = [
    { image: slide1, title: "slider1" },
    { image: slide2, title: "slider2" },
    { image: slide3, title: "slider3" },
    { image: slide4, title: "slider4" },
    { image: slide5, title: "slider5" },
  ];

  return (
    <BrowserRouter>
      <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
        <Nav isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={
            <div>
              <Hero />
              <About isDarkMode={isDarkMode} />
              <Challenges isDarkMode={isDarkMode} />
              <div className="slide-container">
                <Slider slides={slides} />
              </div>
              <Footer isDarkMode={isDarkMode} />
            </div>
          } />
          <Route path="/Cards" element={<Cards />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
