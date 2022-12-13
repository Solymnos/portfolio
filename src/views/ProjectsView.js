import React from 'react';
import '../styles/ProjectsView.css';
import Toolbar from '../components/Toolbar';
import AwesomeSlider from 'react-awesome-slider';
import Style from'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/open-animation/open-animation.scss';

function ProjectsView() {
  return (
    <div className='ProjectsView'>
      <Toolbar />
      <div className='ProjectsViewTitle'>
        <h1>Projets</h1>
      </div>
      <div className='LeftPanel'>
        <AwesomeSlider cssModule={[AwesomeSliderStyles, Style]} bullets={false}>
          <div className='Slide'>1</div>
          <div className='Slide'>2</div>
          <div className='Slide'>3</div>
          <div className='Slide'>4</div>
        </AwesomeSlider>
      </div>
    </div>
  )
}

export default ProjectsView;