// import { Link } from "react-router-dom";
// src/ThemeToggle.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import '../styles/ThemeToggle.css';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
    </button>
  );
};

export default ThemeToggle;
