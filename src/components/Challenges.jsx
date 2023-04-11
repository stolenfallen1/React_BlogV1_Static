import challengesImg from '../assets/img-2.jpeg'
import '../styles/Challenges.css'

const Challenges = ({ isDarkMode }) => {
    return (
        <div className={`hero-container ${isDarkMode ? "dark-mode" : ""}`}>
            <div className="challenges-text">
                <h1>Challenges</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum aperiam nam neque pariatur quis obcaecati porro, dignissimos nulla dicta
                    excepturi odio vero aliquid vitae totam repudiandae dolore nihil animi! Recusandae expedita, illo quibusdam alias reprehenderit doloribus
                    repellendus id autem non enim, dicta labore quidem est mollitia optio magni dolores!</p>
            </div>
            <div className="challenges-img">
                <img src={challengesImg} className="challenges-image" />
            </div>
        </div>
    )
}

export default Challenges
