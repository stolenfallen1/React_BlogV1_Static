import challengesImg from "../assets/img-2.jpeg";
import "../styles/Challenges.css";

const Challenges = ({ isDarkMode }) => {
  return (
    <div className={`hero-container ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="challenges-text">
        <h1>Challenges</h1>
        <p>
          Challenge is an obstacle that an individual needs to overcome to be
          successful, During my stay at Chanel. To be honest it wasn't easy at
          all. The tasks is overwhelming, the adjustment that I needed to do
          since I work at night. A lot of challenges will be covered in some of
          my blogs in the collections slider.
        </p>
      </div>
      <div className="challenges-img">
        <img
          src={challengesImg}
          className="challenges-image"
          style={{ borderRadius: "10px" }}
        />
      </div>
    </div>
  );
};

export default Challenges;
