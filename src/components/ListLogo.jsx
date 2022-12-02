import React from 'react';
import logoLinkedin from '../assets/img/logoLinkedin.png';
import logoGithub from '../assets/img/logoGithub.png';
import logoCV from '../assets/img/logoCV.png';

function ListLogo() {
  return (
    <div className='ListLogo'>
        <a href='https://fr.linkedin.com/in/carl-ameline-47a087154' target='_blank' rel='noreferrer'>
            <img src={logoLinkedin} alt='logo linkedin'/>
        </a>
        <a href='https://github.com/solymnos' target='_blank' rel='noreferrer'>
            <img src={logoGithub} alt='logo Github'/>
        </a>
        <a href='/CV_Carl_Ameline.pdf' download>
            <img src={logoCV} alt='logo CV'/>
        </a>
    </div>
  )
}

export default ListLogo