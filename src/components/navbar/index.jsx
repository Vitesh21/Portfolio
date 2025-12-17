import React, { useState, useEffect } from 'react';
import { FaReact, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './styles.scss';

const data = [
  {
    label: 'HOME',
    to: '/'
  },
  {
    label: 'ABOUT ME',
    to: '/about'
  },
  {
    label: 'SKILLS',
    to: '/skills'
  },
  {
    label: 'RESUME',
    to: '/resume'
  },
  {
    label: 'CONTACT',
    to: '/contact'
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__progress" style={{ width: `${scrollProgress}%` }}></div>

      <div className="navbar__container">
        <Link to={'/'} className="navbar__container__logo">
          <FaReact size={30} className="navbar__logo-icon" />
          <span className="navbar__logo-text">Vitesh</span>
        </Link>

        <div className="navbar__toggle" onClick={handleToggle}>
          {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        <ul className={`navbar__links ${isMobileMenuOpen ? 'navbar__links--active' : ''}`}>
          {data.map((item, index) => (
            <li key={index} className="navbar__item">
              <Link
                to={item.to}
                className={`navbar__link ${location.pathname === item.to ? 'navbar__link--active' : ''}`}
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
