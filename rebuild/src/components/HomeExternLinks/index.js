import React from 'react';
import HomeLinkButton from '../HomeLinkButton';
import LinkedinIcon from '../../assets/imgs/LinkedinIcon.png';
import GithubIcon from '../../assets/imgs/GithubIcon.png';
import CVIcon from '../../assets/imgs/CVIcon.png';

const Links = [
    { name : 'Linkedin', img : LinkedinIcon, link : 'https://fr.linkedin.com/in/carl-ameline-47a087154', isDownload : false},
    { name : 'Github', img : GithubIcon, link : 'https://github.com/solymnos', isDownload : false},
    { name : 'CV', img : CVIcon, link : '/CV_Carl_Ameline.pdf', isDownload : true}
]

const HomeExternLinks = () =>
{
    return <div className='flex flex-row absolute bottom-10 left-1/2 -translate-x-1/2'>
        {Links.map(link =>
            <HomeLinkButton name={link.name} img={link.img} link={link.link} isDownload={link.isDownload}/>
        )}
    </div>
}

export default HomeExternLinks;