import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="app__footer">
      <h2>Siddhesh Thakare</h2>
      <div className="app__socials">
        <a href=""><FiGithub size={23} /></a>
        <a href=""><FiLinkedin size={23} /></a>
      </div>
      <div className="app__footer-menu">
        <a href="">HOME</a>
        <a href="">ABOUT ME</a>
        <a href="">MY PORTFOLIO</a>
        <a href="">CONTACT ME</a>
      </div>
      <div className="app__cprights">
        <p>Copyright@2023 Siddhesh Thakare</p>
      </div>
    </div>
  )
}

export default Footer