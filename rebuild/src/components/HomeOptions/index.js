import React from 'react';
import HomeOptionButton from '../HomeOptionButton';
import MoonIcon from '../../assets/imgs/MoonIcon.png';
import SunIcon from '../../assets/imgs/SunIcon.png';
import EnglishIcon from '../../assets/imgs/EnglishIcon.png';
import FrenchIcon from '../../assets/imgs/FrenchIcon.png';

const HomeOptions = () => 
{
    return (
        <div className='flex flex-row w-fit absolute top-10 right-10'>
            {Options.map(option => 
                <HomeOptionButton img={option.img}/>
            )}
        </div>    
    )
}

export default HomeOptions;

const Options = [
    { img : MoonIcon , function : {} },
    { img : FrenchIcon , function : {} }
]