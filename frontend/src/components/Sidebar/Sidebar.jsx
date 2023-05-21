import React from 'react';
import './Sidebar.scss';
import { FiGithub, FiLinkedin, FiArrowUpCircle } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="app__sidebar">
        <div className="app__sidebar-numbers">
            <a href="#hero">1</a>
            <a href="#about">2</a>
            <a href="#tech">3</a>
            <a href="#portfolio">4</a>
        </div>
        <div className="app__sidebar-icons">
            <div className="app__sidebar-socials">
                <a href="https://www.linkedin.com/in/siddhesh-thakare-665954209/"><FiLinkedin size={22} /></a>
                <a href="https://github.com/sidd5449"><FiGithub size={22} /></a>
            </div>  
            <div className="app__sidebar-scrollup">
                <a href=""><FiArrowUpCircle size={50} strokeWidth={0.8} /></a>
            </div>    
        </div>          
    </div>
  )
}

export default Sidebar