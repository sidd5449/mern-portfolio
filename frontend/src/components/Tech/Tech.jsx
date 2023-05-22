import React from 'react';
import './Tech.scss';
import { DiReact, DiNodejs, DiMongodb, DiGithubBadge, DiHtml5, DiCss3, DiJavascript1, DiSass, DiPython } from 'react-icons/di';


const iconList = [
  {comp: DiReact, name: "React.js"},
  {comp: DiNodejs, name: "Node.js"},
  {comp: DiMongodb, name: "MongoDB"},
  {comp: DiGithubBadge, name: "Github"},
  {comp: DiHtml5, name: "HTML5"},
  {comp: DiCss3, name: "CSS3"},
  {comp: DiJavascript1, name: "Javascript"},
  {comp: DiSass, name: "SASS"},
  {comp: DiPython, name: "Python"},
]
const Tech = () => {
  return (
    <div className="app__tech">
      <h1>Technologies Of Choice</h1>
      <div className="app__tech-cards">
        {iconList.map((icon) => (
          <div className="app__tech-card">
            <a href=""><icon.comp size={50} /></a>
            <p>{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tech