import React from 'react';
import '../styles/ProjectsView.css';
import Toolbar from '../components/Toolbar';
import AwesomeSlider from 'react-awesome-slider';
import Style from'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/open-animation/open-animation.scss';
import projectsIcon from '../assets/img/projectsIcon.png';

const projects =
[
  
]

function ProjectsView() {
  return (
    <div className='ProjectsView'>
      <Toolbar />
      <div className='ProjectsViewTitle'>
        <h1>Projets</h1>
      </div>
      <div className='Content'>
        <div className='LeftPanel'>
          <AwesomeSlider cssModule={[AwesomeSliderStyles, Style]} bullets={false}>
            <div className='Slide'>
              <img src={projectsIcon} alt='icone'/>
            </div>
            <div className='Slide'>
              <img src={projectsIcon} alt='icone'/>
            </div>
            <div className='Slide'>
              <img src={projectsIcon} alt='icone'/>
            </div>
            <div className='Slide'>
              <img src={projectsIcon} alt='icone'/>
            </div>
          </AwesomeSlider>
        </div>
        <div className='RightPanel'>
          <div className='ProjectData'>
            <h1>> Solary Live Extension</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsView;