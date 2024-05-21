import React, { useState } from 'react';
import { FaReact, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to={'/'} className="navbar__container__logo">
          <FaReact size={30} />
        </Link>

        <div className="navbar__toggle" onClick={handleToggle}>
          {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        <ul className={`navbar__links ${isMobileMenuOpen ? 'navbar__links--active' : ''}`}>
          {data.map((item, index) => (
            <li key={index} className="navbar__item">
              <Link to={item.to} className="navbar__link" onClick={handleLinkClick}>
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
