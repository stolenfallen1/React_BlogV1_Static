import "./styles/Main.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Challenges from "./components/Challenges";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import slide1 from "./images/slider1.jpg";
import slide2 from "./images/slider2.jpg";
import slide3 from "./images/slider3.jpg";
import slide4 from "./images/slider4.jpg";
import slide5 from "./images/slider5.jpg";

function App() {
  const slides = [
    { image: slide1, title: "slider1" },
    { image: slide2, title: "slider2" },
    { image: slide3, title: "slider3" },
    { image: slide4, title: "slider4" },
    { image: slide5, title: "slider5" },
  ];

  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      {/* <Challenges />
      <div className="slide-container">
        <Slider slides={slides} />
      </div>
      <Footer /> */}
    </div>
  );
}

export default App;
