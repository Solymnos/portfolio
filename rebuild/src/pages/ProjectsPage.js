import React from 'react';
import Toolbar from '../components/Toolbar';
import GithubIcon from '../assets/imgs/GithubIcon.png';

const projects =
[
  { 
    name : 'Projet 0',  
    desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla eget ipsum viverra sodales porttitor quis mi. Proin nunc magna, sollicitudin ut augue vel, pharetra ullamcorper massa. Suspendisse ac aliquet libero. Morbi sit amet tellus laoreet, aliquet elit nec, convallis elit. Duis consequat consequat magna at gravida. Morbi vel massa rhoncus, tempus elit eget, suscipit dui. Donec sodales elementum felis a accumsan. Cras id urna nec urna lobortis ultricies. Nullam eleifend diam sit amet vulputate pulvinar. Nullam sed venenatis risus. Aliquam venenatis quam ante, ac dictum nisl mattis a. Mauris eu magna est. Donec eget risus eros. Lorem ipsum.', 
    tech : ['C', 'C++','Python' ],
    link : [{
      icon : GithubIcon, 
      url :'https://google.com',
    }],
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
  },
  { 
    name : 'Projet 2',  
    desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla eget ipsum viverra sodales porttitor quis mi. Proin nunc magna, sollicitudin ut augue vel, pharetra ullamcorper massa. Suspendisse ac aliquet libero. Morbi sit amet tellus laoreet, aliquet elit nec, convallis elit. Duis consequat consequat magna at gravida. Morbi vel massa rhoncus, tempus elit eget, suscipit dui. Donec sodales elementum felis a accumsan. Cras id urna nec urna lobortis ultricies. Nullam eleifend diam sit amet vulputate pulvinar. Nullam sed venenatis risus. Aliquam venenatis quam ante, ac dictum nisl mattis a. Mauris eu magna est. Donec eget risus eros. Lorem ipsum.', 
    tech : ['C', 'C++','Python' ],
    link : [{
      icon : GithubIcon, 
      url :'https://google.com',
    }],
  },
  { 
    name : 'Projet 3',  
    desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nulla eget ipsum viverra sodales porttitor quis mi. Proin nunc magna, sollicitudin ut augue vel, pharetra ullamcorper massa. Suspendisse ac aliquet libero. Morbi sit amet tellus laoreet, aliquet elit nec, convallis elit. Duis consequat consequat magna at gravida. Morbi vel massa rhoncus, tempus elit eget, suscipit dui. Donec sodales elementum felis a accumsan. Cras id urna nec urna lobortis ultricies. Nullam eleifend diam sit amet vulputate pulvinar. Nullam sed venenatis risus. Aliquam venenatis quam ante, ac dictum nisl mattis a. Mauris eu magna est. Donec eget risus eros. Lorem ipsum.', 
    tech : ['C', 'C++','Python', 'javascript' ],
    link : [{
      icon : GithubIcon, 
      url :'https://google.com',
    }],
  },
]

const ProjectsPage = () =>
{
    return (
        <React.Fragment>
            <div className='bg-bgDark w-screen h-screen'>
                <div className='pt-24 pb-24 bg-bgDark text-center ml-auto mx-auto'>
                    <h1 className='text-primary text-8xl font-bold'>Projets</h1>
                </div>
                <div className='bg-bgDark grid grid-cols-2 w-full h-full'>
                    <div className='w-full h-full bg-plum'>
                        oui ouo
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProjectsPage;
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