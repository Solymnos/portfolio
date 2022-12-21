import React from 'react';

const HomeOptionButton = ({img, action}) =>
{
    return (
        <div className='flex'>
            <img className='w-14 m-5' src={img} alt='icon' onClick={action}></img>
        </div>
    )
}

export default HomeOptionButton;