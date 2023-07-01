import React from 'react';
import Logo from '../../assets/logo.png';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="app__navbar">
        <img src={Logo} alt="logo" />
        <div className="app__navbar-menu">
            <a href="">Home</a>
            <a href="">About Me</a>
            <a href="">My Portfolio</a>
            <a href="">Contact Me</a>
        </div>
    </div>
  )
}

export default Navbar