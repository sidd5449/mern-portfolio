import React, { useEffect, useState } from 'react';
import './Portfolio.scss';
import axios from 'axios';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Portfolio = () => {

  const [works, setworks] = useState([]);

    // axios.get('http://localhost:8080/getWorks').then((data) => {
    //     setworks(data.data);
    //     console.log(works);
    // })  
    
  

  return (
    <div className="app__portfolio">
      <h1>My Portfolio</h1>
      <div className="app__portfolio-content">
        <div className="app__portfolio-image">
          <img src="" alt="" />
        </div>
        <div className="app__portfolio-info">
          <h2>Title</h2>
          <p>Desc</p>
          <div className="app__portfolio-icons">
            <a href=""><FiGithub size={25} /></a>
            <a href=""><FiExternalLink size={25} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio