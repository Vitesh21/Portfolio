import React from "react";
import { Link } from "react-router-dom";
import './styles.scss';
import profileImage from '../../assets/images/20230217_080249.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="home__intro">
        <h1>Hello, I'm Vitesh Reddy</h1>
        <p>
          I am a passionate ,<strong>Fullstack Developer</strong> with experience in building
          web applications using the latest technologies. I enjoy solving
          complex problems and creating seamless user experiences.
        </p>
        <Link to="/contact" className="home__button">Hire Me</Link>
      </div>
      <div className="home__photo">
        <img src={profileImage} alt="Your Name" />
      </div>
    </div>
  );
}

export default Home;
