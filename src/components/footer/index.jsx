import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";
import './styles.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__left">
            <h3 className="footer__name">Vitesh Reddy</h3>
            <p className="footer__tagline">Fullstack Developer & Problem Solver</p>
          </div>

          <div className="footer__socials">
            <a
              href="https://www.instagram.com/vitesh_2116/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vitesh-reddy-b880032a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Vitesh21"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Vitesh Reddy. Made with <FaHeart className="footer__heart" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
