import React, {useState} from 'react';
import HomeOptionButton from '../HomeOptionButton';
import MoonIcon from '../../assets/imgs/MoonIcon.png';
import SunIcon from '../../assets/imgs/SunIcon.png';
import EnglishIcon from '../../assets/imgs/EnglishIcon.png';
import FrenchIcon from '../../assets/imgs/FrenchIcon.png';

const HomeOptions = () => 
{
    const [ThemeImg, setThemeImg] = useState(MoonIcon);
    const [LanguageImg, setLanguageImg] = useState(FrenchIcon);
    const [Language, setLanguage] = useState('fr');

    const changeTheme = () =>
    {
        if (ThemeImg === MoonIcon)
        {
            setThemeImg(SunIcon);
        } else 
        {
            setThemeImg(MoonIcon);
        }
    }

    const changeLanguage = () =>
    {
        let loc = "http://localhost:3000/";

        if (LanguageImg === FrenchIcon)
        {
            setLanguageImg(EnglishIcon);
            setLanguage('en');
        } else 
        {
            setLanguageImg(FrenchIcon);
            setLanguage('fr');
        }
    }

    const Options = [
        { img : ThemeImg , action : changeTheme },
        { img : LanguageImg , action : changeLanguage }
    ]

    return (
        <div className='flex flex-row w-fit absolute top-10 right-10'>
            {Options.map(option => 
                <HomeOptionButton className='opacity-0' img={option.img} action={option.action} />
            )}
        </div>    
    )
}

export default HomeOptions;

