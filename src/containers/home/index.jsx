import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import './styles.scss';
import profileImage from '../../assets/images/20230217_080249.jpg';

const Home = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    // Typing animation effect
    const text = "Vitesh Reddy";
    let index = 0;
    const element = nameRef.current;

    if (element) {
      element.textContent = "";
      const timer = setInterval(() => {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
        } else {
          clearInterval(timer);
        }
      }, 100);

      return () => clearInterval(timer);
    }
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="home">
      {/* Animated Background */}
      <div className="home__background">
        <div className="home__gradient"></div>
        <div className="home__particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}></div>
          ))}
        </div>
      </div>

      <div className="home__content">
        <div className="home__intro">
          <div className="home__greeting">
            <span className="home__wave">👋</span>
            <span className="home__hello">Hello, I'm</span>
          </div>

          <h1 className="home__name">
            <span ref={nameRef} className="home__name-text gradient-text"></span>
            <span className="home__cursor">|</span>
          </h1>

          <div className="home__title-container">
            <h2 className="home__title">
              <span className="home__title-text">Fullstack Developer</span>
            </h2>
          </div>

          <p className="home__description">
            I craft beautiful, responsive web applications with modern technologies.
            Passionate about solving complex problems and creating seamless user experiences.
          </p>

          <div className="home__cta">
            <Link to="/contact" className="home__button home__button--primary">
              <span>Hire Me</span>
              <div className="home__button-glow"></div>
            </Link>
            <Link to="/resume" className="home__button home__button--secondary">
              <span>View Resume</span>
            </Link>
          </div>

          <div className="home__social">
            <a
              href="https://github.com/Vitesh21"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vitesh-reddy-b880032a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="home__photo-container">
          <div className="home__photo-wrapper">
            <div className="home__photo-glow"></div>
            <img src={profileImage} alt="Vitesh Reddy" className="home__photo" />
          </div>
        </div>
      </div>

      <button className="home__scroll-indicator" onClick={scrollToContent}>
        <FaArrowDown />
      </button>
    </div>
  );
}

export default Home;
