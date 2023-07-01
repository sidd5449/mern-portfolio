import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="app__hero">
      <div className="app__hero-headings">
        <h1 id='text-1'>SIDDHESH</h1>
        <h1 id='text-2'>THAKARE</h1>
      </div>
      <p>building the bridge between <span id='span1'>Design</span> and <span id='span2'>Functionality</span></p>
    </div>
  )
}

export default Hero