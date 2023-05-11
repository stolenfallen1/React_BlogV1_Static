import { useState } from "react";
import "./styles/Main.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Challenges from "./components/Challenges";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import slide1 from "./images/slider1.jpg";
import slide2 from "./images/slider2.jpg";
import slide3 from "./images/slider3.jpg";
import slide4 from "./images/slider4.jpg";
import slide5 from "./images/slider5.jpg";
import slide6 from "./images/slider6.jpg";
import slide7 from "./images/slider7.jpg";
import slide8 from "./images/slider8.jpg";
import slide9 from "./images/slider9.jpg";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const slides = [
    {
      image: slide1,
      title: "Day 1",
      content:
        "The beginning after the end, where my dreams and nightmare begins. I have always dreamt to work in a big company, but at the same time I never expected it to be this hard, like the tasks is overwhelming together with the time management. Since I'm a very timid person, adjusting is the last thing I wanna do.",
    },
    {
      image: slide2,
      title: "GRIND",
      content:
        "I am a data analyst here at the company, Having zero knowledge about this field was a very diffucult situation for me. I even need to study right after duty or my free time in order to be able to perform better, even tho the company is taking very good care to their interns, training wise. I needed to exert extra effort, and this was the first time ever that I got out of my comfort zone.",
    },
    {
      image: slide3,
      title: "CHILLIN",
      content:
        "No matter how hard the tasks is, I always find ways to chill and take a break. Taking breaks such as what I did during this photo helps me regain my focus and composure to be able to perform better.",
    },
    {
      image: slide4,
      title: "TIME FLIES FAST",
      content:
        "Work, Work, Work. That was all I was doing. Working night shift is crazy hard, and it literally shrinks my day, and while working I came to realization that time flies by so fast that work made me so pre-occupied and almost forgot appreaciating things that I loved doing.",
    },
    {
      image: slide5,
      title: "TIRED",
      content:
        "I'm tired. But in order to be better at what I need to do, and to have at least a better future for myself and loved ones I need to grind. But being tired is part of it and is only natural.",
    },
    {
      image: slide6,
      title: "WORKSTATION",
      content:
        "This photo is my workstation and I have been blessed to have such peaceful and cozy workstation, as it helps me with productivity and also enables me to focus better doing the tasks at hand. Not just that but the environment of the company overall is really not that nice since they are really strict at work, and it's new to me. But still I just wanna flex this workstation.",
    },
    {
      image: slide8,
      title: "LATE NIGHT THOUGHTS",
      content:
        "Am I in the right path? I oftern ask myself this. Should I pursue data analytics? Is being an IT professional really want I wanted? Like this thoughts pop-up in my head and it's frustrating.",
    },
    {
      image: slide9,
      title: "THANK YOU CPI",
      content:
        "My Internship journey is coming to an end, I just wanted to say thank you for the time, knowledge and of course allowance that they have provided me and my fellow interns. I have been blessed to be working as an Intern under them. I will never take this experience for granted.",
    },
    {
      image: slide7,
      title: "ITS A WRAP",
      content:
        "Last image taken, this was a very heartfelt message by my superior and trainer. I have been blessed to be under her. Even tho she was a little bit strict but I know it was all for my sake and the company's. I will bring this experience and knowledge in the future voyage that I soon to set sail to.",
    },
  ];

  return (
    <BrowserRouter>
      <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
        <Nav isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <About isDarkMode={isDarkMode} />
                <Challenges isDarkMode={isDarkMode} />
                <div className="slide-container">
                  <Slider slides={slides} />
                </div>
                <Footer isDarkMode={isDarkMode} />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
