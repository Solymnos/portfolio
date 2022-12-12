import React from 'react';
import '../styles/CompetencesView.css';
import Toolbar from '../components/Toolbar';

function CompetencesView() {
  return (
    <div className='CompetencesView'>
      <Toolbar />
      <div className='CompetencesViewTitle'>
        <h1>Compétences</h1>
      </div>
    </div>
  )
}

export default CompetencesView;