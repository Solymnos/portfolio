import React from 'react';
import '../styles/Toolbar.css'

function ToolbarMenu() {
  return (
    <div className='ToolbarMenu'>
        <a href='/'>
            <div className='ToolbarButton'>
                Accueil
            </div>
        </a>
        <a href='/profile'>
            <div className='ToolbarButton'>
                Profil
            </div>
        </a>
        <a href='/career'>
            <div className='ToolbarButton'>
                Parcours
            </div>
        </a>
        <a href='/competences'>
            <div className='ToolbarButton'>
                Compétences
            </div>
        </a>
        <a href='/projects'>
            <div className='ToolbarButton'>
                Projets
            </div>
        </a>
        <a href='/contacts'>
            <div className='ToolbarButton'>
                Contacts
            </div>
        </a>
    </div>
  )
}

export default ToolbarMenu;