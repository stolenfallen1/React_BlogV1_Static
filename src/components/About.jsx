import aboutImg from '../assets/img-1.jpg'
import '../styles/About.css'

const About = ({ isDarkMode }) => {
    return (
        <div className={`about-container ${isDarkMode ? "dark-mode" : ""}`}>
            <div className="about-text">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum aperiam nam neque pariatur quis obcaecati porro, dignissimos nulla dicta
                    excepturi odio vero aliquid vitae totam repudiandae dolore nihil animi! Recusandae expedita, illo quibusdam alias reprehenderit doloribus
                    repellendus id autem non enim, dicta labore quidem est mollitia optio magni dolores!</p>
            </div>
            <div className="about-img">
                <img src={aboutImg} className="about-image" style={{ borderRadius: "10px" }} />
            </div>
        </div>
    )
}

export default About
