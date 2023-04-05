import { useState, useEffect } from 'react'
import logo from '../assets/Logo.svg'
import '../styles/Nav.css'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsGithub } from 'react-icons/bs'

const Nav = () => {
    const [isSticky, setIsSticky] = useState(false)

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
        <div className={isSticky ? "nav-container sticky" : "nav-container"}>
            <img src={logo} className="nav-logo" />
            <div className="nav-icons">
                <FaFacebook style={{ marginRight: '20px' }} className="facebook" />
                <BsInstagram style={{ marginRight: '20px' }} className="instagram" />
                <BsGithub className="github" />
            </div>
        </div>
    )
}

export default Nav
