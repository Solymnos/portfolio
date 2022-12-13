import React, { useState } from 'react';
import '../styles/ProjectsView.css';
import Toolbar from '../components/Toolbar';
import AwesomeSlider from 'react-awesome-slider';
import Style from'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/open-animation/open-animation.scss';
import projectsIcon from '../assets/img/projectsIcon.png';
import UsedTechnologies from '../components/UsedTechnologies';
import ProjectsLink from '../components/ProjectLink';
import logoGithub from '../assets/img/logoGithub.png';

const projects =
[
  { 
    name : 'Projet 0',  
    desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla eget ipsum viverra sodales porttitor quis mi. Proin nunc magna, sollicitudin ut augue vel, pharetra ullamcorper massa. Suspendisse ac aliquet libero. Morbi sit amet tellus laoreet, aliquet elit nec, convallis elit. Duis consequat consequat magna at gravida. Morbi vel massa rhoncus, tempus elit eget, suscipit dui. Donec sodales elementum felis a accumsan. Cras id urna nec urna lobortis ultricies. Nullam eleifend diam sit amet vulputate pulvinar. Nullam sed venenatis risus. Aliquam venenatis quam ante, ac dictum nisl mattis a. Mauris eu magna est. Donec eget risus eros. Lorem ipsum.', 
    tech : ['C', 'C++','Python' ],
    link : [{
      icon : logoGithub, 
      url :'https://google.com',
    }],
  },
  { 
    name : 'Projet 1',  
    desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla eget ipsum viverra sodales porttitor quis mi. Proin nunc magna, sollicitudin ut augue vel, pharetra ullamcorper massa. Suspendisse ac aliquet libero. Morbi sit amet tellus laoreet, aliquet elit nec, convallis elit. Duis consequat consequat magna at gravida. Morbi vel massa rhoncus, tempus elit eget, suscipit dui. Donec sodales elementum felis a accumsan. Cras id urna nec urna lobortis ultricies. Nullam eleifend diam sit amet vulputate pulvinar. Nullam sed venenatis risus. Aliquam venenatis quam ante, ac dictum nisl mattis a. Mauris eu magna est. Donec eget risus eros. Lorem ipsum.', 
    tech : ['C', 'C++','Python' ],
    link : [{
      icon : logoGithub, 
      url :'https://google.com',
    }, {
      icon : logoGithub, 
      url :'https://google.com',
    }],
  },
  { 
    name : 'Projet 2',  
    desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla eget ipsum viverra sodales porttitor quis mi. Proin nunc magna, sollicitudin ut augue vel, pharetra ullamcorper massa. Suspendisse ac aliquet libero. Morbi sit amet tellus laoreet, aliquet elit nec, convallis elit. Duis consequat consequat magna at gravida. Morbi vel massa rhoncus, tempus elit eget, suscipit dui. Donec sodales elementum felis a accumsan. Cras id urna nec urna lobortis ultricies. Nullam eleifend diam sit amet vulputate pulvinar. Nullam sed venenatis risus. Aliquam venenatis quam ante, ac dictum nisl mattis a. Mauris eu magna est. Donec eget risus eros. Lorem ipsum.', 
    tech : ['C', 'C++','Python' ],
    link : [{
      icon : logoGithub, 
      url :'https://google.com',
    }],
  },
  { 
    name : 'Projet 3',  
    desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla eget ipsum viverra sodales porttitor quis mi. Proin nunc magna, sollicitudin ut augue vel, pharetra ullamcorper massa. Suspendisse ac aliquet libero. Morbi sit amet tellus laoreet, aliquet elit nec, convallis elit. Duis consequat consequat magna at gravida. Morbi vel massa rhoncus, tempus elit eget, suscipit dui. Donec sodales elementum felis a accumsan. Cras id urna nec urna lobortis ultricies. Nullam eleifend diam sit amet vulputate pulvinar. Nullam sed venenatis risus. Aliquam venenatis quam ante, ac dictum nisl mattis a. Mauris eu magna est. Donec eget risus eros. Lorem ipsum.', 
    tech : ['C', 'C++','Python', 'javascript' ],
    link : [{
      icon : logoGithub, 
      url :'https://google.com',
    }],
  },
]

function ProjectsView() {

  const [projectIndex, setProjectIndex] = useState(0);

  const onTransition = (data) =>
  {
    setProjectIndex(data.nextIndex);
  }

  return (
    <div className='ProjectsView'>
      <Toolbar />
      <div className='ProjectsViewTitle'>
        <h1>Projets</h1>
      </div>
      <div className='Content'>
        <div className='LeftPanel'>
          <AwesomeSlider cssModule={[AwesomeSliderStyles, Style]} bullets={false} onTransitionStart={onTransition}>
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
            <h1>> {projects[projectIndex].name}</h1>
            <div className='Content'>
              <div className='Description'>
                {projects[projectIndex].desc}
              </div>
              <div className='Details'>
                <div className='Technologies'>
                  {projects[projectIndex].tech.map((item, index) => (
                    <UsedTechnologies technologie={item} />
                  ))}
                </div>
                <div className='Sources'>
                  {projects[projectIndex].link.map((item, index) => (
                    <ProjectsLink icon={item.icon} url={item.url}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsView;