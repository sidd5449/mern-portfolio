import React, { useEffect, useState } from 'react';
import './Portfolio.scss';
import axios from 'axios';

const Portfolio = () => {
  const [workData, setworkData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/getWork/').then((data) => {
      setworkData(data);
      console.log(data);
    }).catch((err) => {console.log(err)})
  })
  

  return (
    <div className="app__portfolio">
      <h1 style={{fontSize:'6vw'}}>My Portfolio</h1>
      <div className="app__portfolio-cards">
        {workData.map((data) => (
          <div className="app__portfolio-card">
            <h2>{data.title}</h2>
            <p>{data.desc}</p>
            <a href="">{data.ghLing}</a>
            <a href="">{data.preview}</a>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Portfolio