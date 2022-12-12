import React from 'react';
import '../styles/ProjectsView.css';
import Toolbar from '../components/Toolbar';

function ProjectsView() {
  return (
    <div className='ProjectsView'>
      <Toolbar />
      <div className='ProjectsViewTitle'>
        <h1>Projets</h1>
      </div>
    </div>
  )
}

export default ProjectsView;