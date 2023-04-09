import React, { useState } from "react";
import "../styles/Slider.css";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <h1 className="slider-header">Collections</h1>
      <div className="slider">
        <div className="left-arrow" onClick={goToPrev}>
          <BsFillArrowLeftSquareFill />
        </div>
        <div className="right-arrow" onClick={goToNext}>
          <BsFillArrowRightSquareFill />
        </div>
        <div
          className="slides"
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        >
          <div className="image-overlay">Tap to view</div>
        </div>
        <div className="dot-container">
          {slides.map((slide, index) => (
            <div
              className={`dot-styles ${
                index === currentIndex ? "active-dot" : ""
              }`}
              key={index}
              onClick={() => goToSlide(index)}
            >
              &#x25cf;
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
