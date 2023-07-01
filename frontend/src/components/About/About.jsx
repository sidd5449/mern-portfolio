import React from 'react';
import { FiLinkedin, FiGithub, FiLink } from 'react-icons/fi';
import './About.scss';

const About = () => {
  return (
    <div className="app__about">
      <h1>About Me</h1>
      <div className="app__about-content">
        <p>Hello, I am <span id='name'>Siddhesh Thakare</span>, an engineering student, a deadline-driven freelance web developer and designer with extensive experience in the <span id='stack'>MERN (MongoDB, Express.js, React.js, Node.js) stack</span>. With deep expertise, I specialize in creating impressive web solutions tailored to client requirements.Throughout my university education, I've mastered the MERN stack, enabling me to build dynamic and responsive web applications. From captivating front-end designs to efficient back-end functionality, I bring together the best of both worlds.

My strength lies in meeting tight deadlines without compromising quality. I excel under pressure and manage time efficiently to ensure timely project completion. Clients can trust me to stay focused, organized, and proactive, making me an ideal choice for time-sensitive projects.

In addition to technical skills, I'm an excellent communicator and collaborator. I prioritize building strong client relationships, understanding their vision, and actively involving them throughout the development process. By providing regular updates and seeking feedback, I ensure client satisfaction at every stage.

Whether it's crafting visually stunning websites, enhancing user experiences, or implementing complex functionalities, I'm dedicated to exceeding expectations and contributing to project success. With my professionalism, expertise, and commitment to deadlines, I guarantee exceptional results.

If you're looking to bring your ideas to life, I invite you to reach out and discuss your project. Let's collaborate to create something remarkable.</p>
        <div className="app__about-socials">
          <a href="https://github.com/sidd5449"><FiGithub size={25} /></a>
          <a href=""><FiLinkedin size={25}/></a>
        </div>
      </div>
    </div>
  )
}

export default About