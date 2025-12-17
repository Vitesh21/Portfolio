import React, { useState, useEffect } from 'react';
import { FaReact, FaBars, FaTimes } from 'react-icons/fa';
import './styles.scss';

const data = [
  {
    label: 'HOME',
    to: '#home'
  },
  {
    label: 'ABOUT ME',
    to: '#about'
  },
  {
    label: 'SKILLS',
    to: '#skills'
  },
  {
    label: 'RESUME',
    to: '#resume'
  },
  {
    label: 'CONTACT',
    to: '#contact'
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);

      // Determine active section
      const sections = ['home', 'about', 'skills', 'resume', 'contact'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, to) => {
    e.preventDefault();
    const targetId = to.substring(1); // Remove the #
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 70; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__progress" style={{ width: `${scrollProgress}%` }}></div>

      <div className="navbar__container">
        <a href="#home" className="navbar__container__logo" onClick={(e) => handleLinkClick(e, '#home')}>
          <FaReact size={30} className="navbar__logo-icon" />
          <span className="navbar__logo-text">Vitesh</span>
        </a>

        <div className="navbar__toggle" onClick={handleToggle}>
          {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        <ul className={`navbar__links ${isMobileMenuOpen ? 'navbar__links--active' : ''}`}>
          {data.map((item, index) => (
            <li key={index} className="navbar__item">
              <a
                href={item.to}
                className={`navbar__link ${activeSection === item.to.substring(1) ? 'navbar__link--active' : ''}`}
                onClick={(e) => handleLinkClick(e, item.to)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
