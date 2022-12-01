import React from 'react';
import logoLinkedin from '../assets/img/logoLinkedin.png';
import logoGithub from '../assets/img/logoGithub.png'

function ListLogo() {
  return (
    <div className='ListLogo'>
        <img src={logoLinkedin} alt='logo linkedin'/>
        <img src={logoGithub} alt='logo linkedin'/>
        <img src={logoLinkedin} alt='logo linkedin'/>
    </div>
  )
}

export default ListLogo