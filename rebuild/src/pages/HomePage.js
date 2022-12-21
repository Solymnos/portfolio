import React from 'react';
import HomeMenuItem from '../components/HomeMenuItem';
import HomeOptions from '../components/HomeOptions';

const HomePage = () => 
{
    return (
        <React.Fragment>
            <div className='w-screen h-screen grid grid-rows-2 xl:grid-cols-2 bg-bgDark'>
                <div className='w-full h-full bg-bgDark xl:h-screen text-primary centered flex-col'>
                    <h1 className='text-9xl ml-32 font-bold'>CARL AMELINE</h1>
                    <h2 className='text-secondary text-4xl ml-32 mt-14'>Ingénieur fullstack, travaillant actuellement pour IIDRE, et à la recherche de nouvelles opportunités de travail !</h2>
                </div>
                <div className='w-full h-full bg-bgDark xl:h-screen text-primary flex-col pl-32 pr-44 flex justify-center text-right'>
                    {MenuItems.map(item => <HomeMenuItem name={item.name} url={item.url} id={item.id}/>)}
                </div>
            </div>
            <HomeOptions />
        </React.Fragment>
    )
}

export default HomePage;

const MenuItems = [
    { name : 'Profil', url : '/profile', id : '01' },
    { name : 'Parcours', url : '/career', id : '02' },
    { name : 'Compétences', url : '/competences', id : '03' },
    { name : 'Projets', url : '/projects', id : '04' },
    { name : 'Contacts', url : '/contacts', id : '05' },
]