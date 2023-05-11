import aboutImg from "../assets/img-1.jpg";
import "../styles/About.css";

const About = ({ isDarkMode }) => {
  return (
    <div className={`about-container ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="about-text">
        <h1>About</h1>
        <p>
          This Journal is About my Internship Experience during my stay at
          Chanel Precision. The things I did and things that I have learned and
          experienced so far staying there. Disclaimer I didn't include anything
          that tackles about my tasks as a Intern Data Analyst in the company
          because it is forbidden.
        </p>
      </div>
      <div className="about-img">
        <img
          src={aboutImg}
          className="about-image"
          style={{ borderRadius: "10px" }}
        />
      </div>
    </div>
  );
};

export default About;
