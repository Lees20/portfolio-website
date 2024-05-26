import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <h1 className="logo">PANTELIS</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
