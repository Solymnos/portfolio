import React from 'react';

const HomeLinkButton = ({name, img, link, isDownload}) =>
{
    return (
        <div className='flex rounded-2xl border-transparent border-4 border-solid hover:border-primary'>
            {
                isDownload ? (
                    <a href={link} target='_blank' rel='noreferrer' download>
                        <img className='w-14 m-5' src={img} alt='extern icon'></img>
                    </a>
                ) : (
                    <a href={link} target='_blank' rel='noreferrer'>
                        <img className='w-14 m-5' src={img} alt='extern icon'></img>
                    </a>
                )
            }
            
        </div>
    )
}

export default HomeLinkButton;