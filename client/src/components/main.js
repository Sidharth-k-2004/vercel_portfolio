import React, { useState, useEffect } from 'react';
import './main.css'; // Ensure this CSS file includes styles for background, text, etc.
import head from '../screens/header-img.svg'; // Adjust path as necessary
import resumePdf from '../screens/Resume_sidharth.pdf';
const MainPage = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 200;
  const deletingSpeed = 100;
  const pauseTime = 2000; // Pause before starting to delete or type the next text

  useEffect(() => {
    const texts = ["machine learning enthusiast", "web developer"]; // Move texts array inside useEffect

    const handleTyping = () => {
      const currentFullText = texts[textIndex];
      if (isDeleting) {
        setCurrentText((prevText) => prevText.slice(0, -1));
      } else {
        setCurrentText((prevText) => currentFullText.substring(0, prevText.length + 1));
      }

      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
      }
    };

    const timeoutId = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, textIndex]);

  return (
    <div className="main-page">
      <div className="container">
        <div className="welcome-text">WELCOME TO MY PORTFOLIO</div>
        <div className="important-section">
          <div className="intro-text">Hi! I'm Sidharth...</div>
          <div className="typing-text">{currentText}<span className="cursor">|</span></div>
        </div>
        <div className='aboutme'>
          "Passionate coder with a flair for embracing cutting-edge technologies.
          Dedicated to crafting innovative solutions through code,
          with a keen eye for detail and a relentless drive for excellence."
        </div>
        <a className="download-button" href={resumePdf} download>Download Resume</a>
      </div>
      <div className='header-image-section'>
        <img src={head} alt="Header illustration" />
      </div>
    </div>
  );
};

export default MainPage;
