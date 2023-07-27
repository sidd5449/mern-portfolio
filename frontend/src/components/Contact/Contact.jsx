import React from 'react';
import './Contact.scss';
import { FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="app__contact">
      <h1>Contact Me</h1>
      <div className="app__contact-content">
        <div className="app__contact-content-left">
          <h2>Let's have a talk about your project!!</h2>
          <div className="app__contact-icons">
            <a href="mailto:sidd5449@gmail.com">
              <button><FiMail size={25} color='#fff'/></button>
              sidd5449@gmail.com
            </a>
            <a href="tel:+919146526676">
              <button><FiPhone size={25} color='#fff'/></button>
              +91-9146526676
            </a>
          </div>
        </div>
        <div className="app__content-right">
          <h2>Let's create something amazing!!</h2>
          <div className="app__inputs">
            <input type="text" placeholder='Your Name...' />
            <input type="text" placeholder='Email Address...' />
            <input type="text" placeholder='Message...' />
          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact