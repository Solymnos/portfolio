import React from 'react';
import HomeIcon from '../../assets/imgs/HomeIcon.png';
import ProfileIcon from '../../assets/imgs/ProfileIcon.png';
import CareerIcon from '../../assets/imgs/CareerIcon.png';
import CompetencesIcon from '../../assets/imgs/CompetencesIcon.png';
import ProjectsIcon from '../../assets/imgs/ProjectsIcon.png';
import ContactsIcon from '../../assets/imgs/ContactsIcon.png';
import ToolbarItem from '../ToolbarItem';


const ToolbarItems =
[
    { link : '/', img : HomeIcon },
    { link : '/profile', img : ProfileIcon },
    { link : '/career', img : CareerIcon },
    { link : '/competences', img : CompetencesIcon },
    { link : '/projects', img : ProjectsIcon },
    { link : '/contacts', img : ContactsIcon },
]

const Toolbar = () =>
{
    return (
        <div className='flex flex-col fixed left-10 top-1/2 -translate-y-1/2 border-primary border-4 border-solid rounded-3xl p-3'>
            {ToolbarItems.map(item =>
                <ToolbarItem link={item.link} img={item.img} />
            )}
        </div>
    )
}

export default Toolbar;