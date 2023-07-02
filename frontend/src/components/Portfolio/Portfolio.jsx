import React, { useEffect, useState } from 'react';
import './Portfolio.scss';
import axios from 'axios';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Portfolio = () => {

  const [works, setworks] = useState([]);
  const [id, setid] = useState(0);
  const [loading, setloading] = useState(true);



  console.log(id);
  var Array = [];
    useEffect(() => {
      axios.get(`http://localhost:8080/getWorks`).then((data) => {
        setworks(data.data);
        setloading(false);
        // console.log(works)
      }) 
    },[])
    
      
    

    const dots = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
    ]
    
  
    if(loading){
      return(<h1>Loading...</h1>)
    }
    else{
  return (
    <div className="app__portfolio">
      <h1>My Portfolio</h1>
      <div className="app__portfolio-content">
          <div className="app__portfolio-card">
            <img src="" alt="" />
            <div className="app__content-text">
              <h2>{works[id].title}</h2>
              <p>{works[id].desc}</p>

              <div className="app__socials">
                <a href={works[id].preview}><FiExternalLink size={25}/></a>
                <a href={works[id].ghLink}><FiGithub size={25}/></a>
              </div>
            </div>
          </div>
        <div className='app__portfolio-dots'>
          {dots.map((item) => (
            <button className='dot' onClick={() => setid(item-1)}>{item}</button>
          ))}
        </div>
      </div>
    </div>
  )
  }
}

export default Portfolio