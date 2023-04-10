import svg from "../assets/Internship-amico.svg";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="text-container">
        <h1>My Internship Journey</h1>
        <p>
          " Internship is not just a stepping stone to your career, it's an
          opportunity to explore your passions, develop your skills, and create
          connections that will last a lifetime. "
        </p>
      </div>
      <div className="image-container">
        <img src={svg} className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
