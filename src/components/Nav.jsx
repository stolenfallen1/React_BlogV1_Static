import { useState, useEffect } from "react";
import logo from "../assets/Logo.svg";
import "../styles/Nav.css";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsGithub } from "react-icons/bs";
import Switch from 'react-switch'
import { Link } from "react-router-dom";

const Nav = ({ isDarkMode, toggleTheme }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <div className={`nav-container ${isDarkMode ? "dark-mode" : ""} ${isSticky ? "sticky" : ""}`}>
      <div className="logo-container">
        <Link to="/" ><img src={logo} className="nav-logo" /></Link>
      </div>
      <div className="nav-icons">
        <a href="https://www.facebook.com/vandaxthegreat1">
          <FaFacebook style={{ marginRight: "20px" }} className="facebook" />
        </a>
        <a href="https://www.instagram.com/vandax/?hl=en">
          <BsInstagram style={{ marginRight: "20px" }} className="instagram" />
        </a>
        <a href="https://github.com/VandaxTheGreat">
          <BsGithub className="github" />
        </a>
      </div>
      <div className="toggle">
        <Switch
          checked={isDarkMode}
          onChange={toggleTheme}
          checkedIcon={false}
          uncheckedIcon={false}
        />
      </div>
    </div>
  );
};

export default Nav;
