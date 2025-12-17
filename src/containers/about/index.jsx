import React from "react";
import { FaCode, FaTrophy, FaUser, FaLaptopCode } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import './styles.scss';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">
          About <span className="gradient-text">Me</span>
        </h1>
        <p className="about-subtitle">Get to know me better</p>
      </div>

      <div className="about-content">
        {/* Fullstack Experience Card */}
        <div className="about-card glass-card fade-in">
          <div className="about-card__icon">
            <FaLaptopCode size={40} />
          </div>
          <h2 className="about-card__title">Fullstack Experience</h2>
          <p className="about-card__description">
            I am proficient in <strong>MySQL</strong>, <strong>MongoDB</strong>, <strong>React.js</strong>,
            <strong> HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. With expertise in
            full-stack development, I deliver efficient web solutions. My skills extend to database management,
            front-end design, and back-end scripting, ensuring versatile and high-quality software products.
          </p>
        </div>

        {/* Competitive Programming Card */}
        <div className="about-card glass-card fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="about-card__icon">
            <FaCode size={40} />
          </div>
          <h2 className="about-card__title">Competitive Programming</h2>
          <p className="about-card__description">
            I have strong skills in competitive programming and usually code in <strong>C++</strong> and <strong>Python</strong>.
          </p>
          <div className="about-card__links">
            <a
              href="https://codeforces.com/profile/viteshlomada"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              <SiCodeforces size={20} />
              <span>Codeforces Profile</span>
            </a>
            <a
              href="https://leetcode.com/u/vitesh23/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              <SiLeetcode size={20} />
              <span>LeetCode Profile</span>
            </a>
          </div>
        </div>

        {/* Personal Info Card */}
        <div className="about-card glass-card fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="about-card__icon">
            <FaUser size={40} />
          </div>
          <h2 className="about-card__title">Personal Info</h2>
          <div className="about-info">
            <div className="about-info__item">
              <span className="about-info__label">Name:</span>
              <span className="about-info__value">Vitesh Reddy</span>
            </div>
            <div className="about-info__item">
              <span className="about-info__label">Age:</span>
              <span className="about-info__value">19</span>
            </div>
            <div className="about-info__item">
              <span className="about-info__label">Location:</span>
              <span className="about-info__value">Proddatur, Andhra Pradesh</span>
            </div>
            <div className="about-info__item">
              <span className="about-info__label">Email:</span>
              <span className="about-info__value">viteshlomada@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Tech Stack Highlights */}
        <div className="about-card about-card--highlight glass-card fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="about-card__icon">
            <FaTrophy size={40} />
          </div>
          <h2 className="about-card__title">Tech Stack</h2>
          <div className="tech-stack">
            <div className="tech-item">
              <span className="tech-icon">⚛️</span>
              <span>React.js</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">🟢</span>
              <span>Node.js</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">🍃</span>
              <span>MongoDB</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">🐬</span>
              <span>MySQL</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">🐍</span>
              <span>Python</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">⚡</span>
              <span>C++</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
