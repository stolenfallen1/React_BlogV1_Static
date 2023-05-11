import React, { useState, Fragment } from "react";
import "../styles/Slider.css";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Slider = ({ slides, isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const currentSlide = slides[currentIndex];

  return (
    <Fragment>
      <h1 className={`slider-header ${isDarkMode ? "dark-mode" : ""}`}>
        Collections
      </h1>
      <div className="slider">
        <div className="left-arrow" onClick={goToPrev}>
          <BsFillArrowLeftSquareFill />
        </div>
        <div className="right-arrow" onClick={goToNext}>
          <BsFillArrowRightSquareFill />
        </div>
        <div
          className="slides"
          style={{ backgroundImage: `url(${currentSlide.image})` }}
          onClick={openModal}
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
      {isModalOpen && <Modal content={currentSlide} onClose={closeModal} />}
    </Fragment>
  );
};

export default Slider;
