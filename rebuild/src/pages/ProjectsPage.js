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
  },
]

const ProjectsPage = () => {

    const [projectIndex, setProjectIndex] = useState(0);

    const onTransition = (data) =>
    {
        setProjectIndex(data.nextIndex);
    }

    return (
      
      <div class="flex flex-col h-screen bg-bgDark">
        <Toolbar />
        <div className='text-center pt-24 pb-24'>
          <h1 className='text-primary text-8xl font-bold'>Projets</h1>
        </div>
        <div class="flex justify-center flex-row items-center flex-grow">
          <div className='flex w-full flex-grow h-full pl-56 pr-24'>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              onSlideChange={() => {
                console.log('slide change')
                
              }}
              onActiveIndexChange={(swiperCore) => {
                console.log(swiperCore.activeIndex);
              }}
              className="mySwiper">
                {Projects.map(project =>
                  <SwiperSlide>
                    <h1>{project.name}</h1>
                  </SwiperSlide>
                  )}
              </Swiper>
          </div>
        </div>
      </div>
       /* <div>
            
            <div class="bg-bgDark flex flex-col h-screen w-screen">
                <Toolbar />
                <div className='text-center pt-24 pb-24'>
                    <h1 className='text-primary text-8xl font-bold'>Projets</h1>
                </div>
                <div className='h-full grid grid-cols-2'>
                    <div className='h-full ml-36'>
                        <AwesomeSlider cssModule={AwesomeSliderStyle} bullets={false} onTransitionStart={onTransition}>
                            {Projects.map(project =>
                                <div className=' bg-bgDark h-full w-full flex'>
                                    <img className='m-auto w-60' src={project.icon} alt='icon of the project'/>
                                </div>
                            )}
                        </AwesomeSlider>
                    </div>
                    <div className='bg-bgDark h-full'>
                        <ProjectData project={Projects[projectIndex]}/>
                    </div>
                </div>   
            </div>
        </div>*/
    )
}

export default ProjectsPage;

// <div class="flex-1 w-2/3 mx-auto p-4 text-lg  h-full shadow-lg bg-green-400">

/*<div className='bg-bgDark w-screen h-screen'>
                <div className='pt-24 pb-24 bg-bgDark text-center ml-auto mx-auto'>
                    <h1 className='text-primary text-8xl font-bold'>Projets</h1>
                </div>
                <div className='bg-bgDark grid grid-cols-2 w-full'>
                    <div className='bg-plum grow h-full'>
                        oui ouo
                    </div>
                </div>
            </div>*/

/**
 * <Toolbar />
            <div className='pt-24 pb-24 bg-bgDark text-center ml-auto mx-auto'>
                <h1 className='text-primary text-8xl font-bold'>Projets</h1>
            </div>
            <div className='bg-bgDark grid grid-cols-2'>
                <div className='w-full h-full bg-plum'>
                    oui ouo
                </div>
            </div>
 */