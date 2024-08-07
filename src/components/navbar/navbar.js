import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <h1 className='logo'>R</h1>
      <div className={`desktopMenu ${isMenuOpen ? 'active' : ''}`}>
        <Link to="intro" className='desktopMenuListItem' smooth={true} duration={500}>Home</Link>
        <Link to="skills" className='desktopMenuListItem' smooth={true} duration={500}>Skills</Link>
        <Link to="projects" className='desktopMenuListItem' smooth={true} duration={500}>Projects</Link>
        <Link to="contact" className='desktopMenuListItem' smooth={true} duration={500}>Contact</Link>
      </div>
      <button className='menuToggle' onClick={toggleMenu}>
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
    </nav>
  );
};

export default Navbar;
