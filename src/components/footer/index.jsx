import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <p> Vitesh Reddy</p>
        </div>
        <div className="footer__socials">
          <a href="https://www.instagram.com/vitesh_2116/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.linkedin.com/in/vitesh-reddy-b880032a7/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/Vitesh21" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
