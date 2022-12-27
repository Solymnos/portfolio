import React from 'react';

const ToolbarItem = ({link, img}) =>
{
    return (
        <a href={link}>
            <img className='w-12 mt-1.5 mb-1.5' src={img} alt='icon to another page'/>
        </a>
    )
}

export default ToolbarItem;