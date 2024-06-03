import React, { useState } from 'react';
import './skills.css'; // Import CSS for the Skills component
import skill1 from '../screens/meter2.svg';
import skill2 from '../screens/meter3.svg';
import skill3 from '../screens/meter1.svg';
import skill4 from '../screens/meter1.svg';
import skill5 from '../screens/meter3.svg';
import skill6 from '../screens/meter2.svg';
import leftArrow from '../screens/arrow1.svg';
import rightArrow from '../screens/arrow2.svg';

const Skills = () => {
  const skills = [skill1, skill2, skill3, skill4, skill5, skill6];
  const skillSubjects = ['Webdev', 'MachineLearning', 'python', 'C', 'c++', 'java'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? skills.length - 3 : prevIndex - 1));
    console.log(currentIndex);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === skills.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <div className="skills-container">
      <div className="skills-header">Skills</div>
      <div className="skills-subheader">Knowledgeable at</div>
      <div className="skills-slider-container">
        <img src={leftArrow} alt="left-arrow" className="arrow left-arrow" onClick={handlePrevClick} />
        <div className="skills-slider">
          {skills.slice(currentIndex, currentIndex + 3).map((skill, index) => (
            <div className="skill-item" key={index}>
              <img src={skill} alt={`skill-${index}`} />
              <h1>{skillSubjects[currentIndex + index]}</h1>
            </div>
          ))}
        </div>
        <img src={rightArrow} alt="right-arrow" className="arrow right-arrow" onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default Skills;
