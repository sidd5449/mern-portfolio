import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import './Hero.scss';
import Logo from '../../assets/logo.png';


const tags = ['FREELANCER','WEB DEVELOPER', 'UI DESIGNER']
const Hero = () => {
  return (
    <div className="app__hero" id='hero'>
        <div className="app__hero-main">
            <div className="app__hero-main-logo">
                <img src={Logo} alt="logo" style={{width: '6vw'}} />
            </div>
            <div className="app__hero-main-text">
                <p>Hello, I am</p>
                <h1>Siddhesh Thakare</h1>
                <hr />
            </div>
        </div>
        <Sidebar />
        <div className="app__hero-tags">
          {tags.map((item) => (
            <p>{item}</p>
          ))}
        </div>
    </div>
  )
}

export default Hero