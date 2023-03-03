import React, { useState } from 'react';
import Toolbar from '../components/Toolbar';
import GithubIcon from '../assets/imgs/GithubIcon.png';
import ProjectsIcon from '../assets/imgs/ProjectsIcon.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/ProjectsPage.css';

const Projects =
[
  { 
    name : 'Projet 0',  
    desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla eget ipsum viverra sodales porttitor quis mi. Proin nunc magna, sollicitudin ut augue vel, pharetra ullamcorper massa. Suspendisse ac aliquet libero. Morbi sit amet tellus laoreet, aliquet elit nec, convallis elit. Duis consequat consequat magna at gravida. Morbi vel massa rhoncus, tempus elit eget, suscipit dui. Donec sodales elementum felis a accumsan. Cras id urna nec urna lobortis ultricies. Nullam eleifend diam sit amet vulputate pulvinar. Nullam sed venenatis risus. Aliquam venenatis quam ante, ac dictum nisl mattis a. Mauris eu magna est. Donec eget risus eros. Lorem ipsum.', 
    tech : ['C', 'C++','Python' ],
    link : [{
      icon : GithubIcon, 
      url :'https://google.com',
    }],
    icon : ProjectsIcon,
    id : 0
  },
  { 
    name : 'Projet 1',  
    desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla eget ipsum viverra sodales porttitor quis mi. Proin nunc magna, sollicitudin ut augue vel, pharetra ullamcorper massa. Suspendisse ac aliquet libero. Morbi sit amet tellus laoreet, aliquet elit nec, convallis elit. Duis consequat consequat magna at gravida. Morbi vel massa rhoncus, tempus elit eget, suscipit dui. Donec sodales elementum felis a accumsan. Cras id urna nec urna lobortis ultricies. Nullam eleifend diam sit amet vulputate pulvinar. Nullam sed venenatis risus. Aliquam venenatis quam ante, ac dictum nisl mattis a. Mauris eu magna est. Donec eget risus eros. Lorem ipsum.', 
    tech : ['C', 'C++','Python' ],
    link : [{
      icon : GithubIcon, 
      url :'https://google.com',
    }, {
      icon : GithubIcon, 
      url :'https://google.com',
    }],
    icon : ProjectsIcon,
    id : 1
  },
  { 
    name : 'Projet 2',  
    desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla eget ipsum viverra sodales porttitor quis mi. Proin nunc magna, sollicitudin ut augue vel, pharetra ullamcorper massa. Suspendisse ac aliquet libero. Morbi sit amet tellus laoreet, aliquet elit nec, convallis elit. Duis consequat consequat magna at gravida. Morbi vel massa rhoncus, tempus elit eget, suscipit dui. Donec sodales elementum felis a accumsan. Cras id urna nec urna lobortis ultricies. Nullam eleifend diam sit amet vulputate pulvinar. Nullam sed venenatis risus. Aliquam venenatis quam ante, ac dictum nisl mattis a. Mauris eu magna est. Donec eget risus eros. Lorem ipsum.', 
    tech : ['C', 'C++','Python' ],
    link : [{
      icon : GithubIcon, 
      url :'https://google.com',
    }],
    icon : ProjectsIcon,
    id : 2
  },
  { 
    name : 'Projet 3',  
    desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla eget ipsum viverra sodales porttitor quis mi. Proin nunc magna, sollicitudin ut augue vel, pharetra ullamcorper massa. Suspendisse ac aliquet libero. Morbi sit amet tellus laoreet, aliquet elit nec, convallis elit. Duis consequat consequat magna at gravida. Morbi vel massa rhoncus, tempus elit eget, suscipit dui. Donec sodales elementum felis a accumsan. Cras id urna nec urna lobortis ultricies. Nullam eleifend diam sit amet vulputate pulvinar. Nullam sed venenatis risus. Aliquam venenatis quam ante, ac dictum nisl mattis a. Mauris eu magna est. Donec eget risus eros. Lorem ipsum.', 
    tech : ['C', 'C++','Python', 'javascript' ],
    link : [{
      icon : GithubIcon, 
      url :'https://google.com',
    }],
    icon : ProjectsIcon,
    id : 3
  },
  { 
    name : 'Projet 4',  
    desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla eget ipsum viverra sodales porttitor quis mi. Proin nunc magna, sollicitudin ut augue vel, pharetra ullamcorper massa. Suspendisse ac aliquet libero. Morbi sit amet tellus laoreet, aliquet elit nec, convallis elit. Duis consequat consequat magna at gravida. Morbi vel massa rhoncus, tempus elit eget, suscipit dui. Donec sodales elementum felis a accumsan. Cras id urna nec urna lobortis ultricies. Nullam eleifend diam sit amet vulputate pulvinar. Nullam sed venenatis risus. Aliquam venenatis quam ante, ac dictum nisl mattis a. Mauris eu magna est. Donec eget risus eros. Lorem ipsum.', 
    tech : ['C', 'C++','Python', 'javascript' ],
    link : [{
      icon : GithubIcon, 
      url :'https://google.com',
    }],
    icon : ProjectsIcon,
    id : 4
  },
  { 
    name : 'Projet 5',  
    desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla eget ipsum viverra sodales porttitor quis mi. Proin nunc magna, sollicitudin ut augue vel, pharetra ullamcorper massa. Suspendisse ac aliquet libero. Morbi sit amet tellus laoreet, aliquet elit nec, convallis elit. Duis consequat consequat magna at gravida. Morbi vel massa rhoncus, tempus elit eget, suscipit dui. Donec sodales elementum felis a accumsan. Cras id urna nec urna lobortis ultricies. Nullam eleifend diam sit amet vulputate pulvinar. Nullam sed venenatis risus. Aliquam venenatis quam ante, ac dictum nisl mattis a. Mauris eu magna est. Donec eget risus eros. Lorem ipsum.', 
    tech : ['C', 'C++','Python', 'javascript' ],
    link : [{
      icon : GithubIcon, 
      url :'https://google.com',
    }],
    icon : ProjectsIcon,
    id : 5
  },
  { 
    name : 'Projet 6',  
    desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla eget ipsum viverra sodales porttitor quis mi. Proin nunc magna, sollicitudin ut augue vel, pharetra ullamcorper massa. Suspendisse ac aliquet libero. Morbi sit amet tellus laoreet, aliquet elit nec, convallis elit. Duis consequat consequat magna at gravida. Morbi vel massa rhoncus, tempus elit eget, suscipit dui. Donec sodales elementum felis a accumsan. Cras id urna nec urna lobortis ultricies. Nullam eleifend diam sit amet vulputate pulvinar. Nullam sed venenatis risus. Aliquam venenatis quam ante, ac dictum nisl mattis a. Mauris eu magna est. Donec eget risus eros. Lorem ipsum.', 
    tech : ['C', 'C++','Python', 'javascript' ],
    link : [{
      icon : GithubIcon, 
      url :'https://google.com',
    }],
    icon : ProjectsIcon,
    id : 6
  },
  { 
    name : 'Projet 7',  
    desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla eget ipsum viverra sodales porttitor quis mi. Proin nunc magna, sollicitudin ut augue vel, pharetra ullamcorper massa. Suspendisse ac aliquet libero. Morbi sit amet tellus laoreet, aliquet elit nec, convallis elit. Duis consequat consequat magna at gravida. Morbi vel massa rhoncus, tempus elit eget, suscipit dui. Donec sodales elementum felis a accumsan. Cras id urna nec urna lobortis ultricies. Nullam eleifend diam sit amet vulputate pulvinar. Nullam sed venenatis risus. Aliquam venenatis quam ante, ac dictum nisl mattis a. Mauris eu magna est. Donec eget risus eros. Lorem ipsum.', 
    tech : ['C', 'C++','Python', 'javascript', 'C', 'C++','Python', 'javascript', 'C', 'C++','Python', 'javascript' ],
    link : [{
      icon : GithubIcon, 
      url :'https://google.com',
    }],
    icon : ProjectsIcon,
    id : 7
  },
  { 
    name : 'Projet 8',  
    desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla eget ipsum viverra sodales porttitor quis mi. Proin nunc magna, sollicitudin ut augue vel, pharetra ullamcorper massa. Suspendisse ac aliquet libero. Morbi sit amet tellus laoreet, aliquet elit nec, convallis elit. Duis consequat consequat magna at gravida. Morbi vel massa rhoncus, tempus elit eget, suscipit dui. Donec sodales elementum felis a accumsan. Cras id urna nec urna lobortis ultricies. Nullam eleifend diam sit amet vulputate pulvinar. Nullam sed venenatis risus. Aliquam venenatis quam ante, ac dictum nisl mattis a. Mauris eu magna est. Donec eget risus eros. Lorem ipsum.', 
    tech : ['C', 'C++','Python', 'javascript' ],
    link : [{
      icon : GithubIcon, 
      url :'https://google.com',
    }],
    icon : ProjectsIcon,
    id : 8
  },
]

const ProjectsPage = () => {

    const [projectIndex, setProjectIndex] = useState(0);
    const [isInBottom, setIsInBottom] = useState(false);
    const [isInTop, setIsInTop] = useState(true);

    function handleDivScroll(e) {
      let element = e.target;

      console.log(element.scrollHeight);
      console.log(element.scrollTop);
      console.log(element.clientHeight);
      console.log(element.scrollBottom);

      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        setIsInBottom(true);
      } else {
        setIsInBottom(false);
      }
      if (element.scrollTop === 0)
      {
        setIsInTop(true);
      } else {
        setIsInTop(false);
      }
    }

    var bottom;
    var top;

    if (!isInTop) {
      top = <div className='flex text-center items-center mx-auto text-7xl text-primary'>↑</div>
    } else {
      top = <div className='flex text-center items-center mx-auto text-7xl invisible'>↑</div>
    }
    
    if (!isInBottom) {
      bottom = <div className='flex text-center items-center mx-auto text-7xl text-primary'>↓</div>
    } else {
      bottom = <div className='flex text-center items-center mx-auto text-7xl invisible'>↓</div>  
    }

    return (
      
      <div class="flex flex-col h-screen bg-bgDark">
        <div className='text-center pt-24 pb-24'>
          <h1 className='text-primary text-8xl font-bold'>Projets</h1>
        </div>
        <div class="flex justify-center flex-row items-center flex-grow">
          <div className='flex w-full flex-grow h-full'>
            <div className='flex h-full w-2/5 flex-grow flex-col '>
              {top}
              <div className='flex h-80 w-4/5 mx-auto flex-col overflow-scroll' onScroll={handleDivScroll}>
                {Projects.map(project =>
                <>
                  {
                    project.id === projectIndex ? (
                      <div className='bg-primary' onClick={() => setProjectIndex(project.id)}>
                        <h1 className='text-bgDark text-5xl my-4'>{project.name}</h1>
                      </div>
                    ) : (
                      <div onClick={() => setProjectIndex(project.id)}>
                        <h1 className='text-primary text-5xl my-4'>{project.name}</h1>
                      </div>
                    )
                  }
                </>
                )}
              </div>
              {bottom}
            </div>
            <div className='flex h-full w-3/5 flex-grow flex-col'>
              <div className='flex flex-row items-center'>
                <h1 className='text-secondary text-5xl m-4 uppercase underline decoration-primary decoration-4'>{Projects[projectIndex].name}</h1>
                <div className='flex grow mr-16'>
                  {Projects[projectIndex].link.map(link =>
                    <img className='h-12 ml-8' src={link.icon} alt='icon of the link'/>
                  )}
                </div>
              </div>
              <div className='flex grow flex-row'>
                <p className='text-secondary'>
                  {Projects[projectIndex].desc}
                </p>
                <img className='h-40 my-12 ml-12 mr-24' src={Projects[projectIndex].icon} alt='project icon'/>
              </div>
              <div className='mt-4 flex grow flex-row w-3/4 overflow-y-scroll'>
                  {Projects[projectIndex].tech.map(tech =>
                  <div className='h-min mx-2 p-3 flex border-4 border-primary'>
                    <h1 className='text-primary text-2xl'>{tech}</h1>
                  </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProjectsPage;

/*
<div className='h-3/5 flex flex-grow w-2/5 flex-col items-center min-h-0'>
              <div class='flex flex-col w-4/5 h-2/5  overflow-y-scroll'>
              {Projects.map(project =>
                  <div onClick={() => setProjectIndex(project.id)}>
                    <h1 className='text-primary text-5xl my-4'>{project.name}</h1>
                  </div>
                )}
              </div>
            </div>
            <div className='bg-yellow-200 flex flex-grow w-3/5'>
              {projectIndex}
            </div> 
*/ 