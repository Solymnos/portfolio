import React from 'react';

const HomeOptionButton = ({img}) =>
{
    return (
        <div className='flex'>
            <img className='w-14 m-5' src={img} alt='sunicon'></img>
        </div>
    )
}

export default HomeOptionButton;