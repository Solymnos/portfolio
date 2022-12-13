import React from 'react';
import '../styles/ProjectLink.css';

function ProjectsLink(props) {
  return (
    <div className='ProjectLink'>
      <a href={props.url} target='_blank' without rel="noreferrer">
        <img src={props.icon} alt='icon link to ref'/>
      </a>
    </div>
  )
}

export default ProjectsLink;