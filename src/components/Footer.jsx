import "../styles/Footer.css";
import { FcCollaboration } from "react-icons/fc";

const Footer = ({ isDarkMode }) => {
  return (
    <div className={`footer ${isDarkMode ? "dark-mode" : ""}`}>
      <p className="footer-text">
        Developed & Deployed &copy;&nbsp;
        <span className="underline">stolenfallen1</span>
        &nbsp;in collaboration with&nbsp;
        <span className="underline">Vandax The Great</span>
      </p>
    </div>
  );
};

export default Footer;
