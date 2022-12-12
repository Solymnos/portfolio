import React from 'react';
import '../styles/Toolbar.css';
import homeIcon from '../assets/img/homeIcon.png';
import profileIcon from '../assets/img/profileIcon.png';
import careerIcon from '../assets/img/careerIcon.png';
import competencesIcon from '../assets/img/competencesIcon.png';
import projectsIcon from '../assets/img/projectsIcon.png';
import contactsIcon from '../assets/img/contactsIcon.png';

function Toolbar() {
  return (
    <div className='Toolbar'>
        <a href='/'><img src={homeIcon} alt='icon link to home page'/></a>
        <a href='/profile'><img src={profileIcon} alt='icon link to profile page'/></a>
        <a href='/career'><img src={careerIcon} alt='icon link to career page'/></a>
        <a href='/competences'><img src={competencesIcon} alt='icon link to competences page'/></a>
        <a href='/projects'><img src={projectsIcon} alt='icon link to projects page'/></a>
        <a href='/contacts'><img src={contactsIcon} alt='icon link to contacts page'/></a>
    </div>
  )
}

export default Toolbar;