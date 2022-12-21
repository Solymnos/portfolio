import React from 'react';

const HomeMenuItem = ({name, url, id}) => {
    return (
        <a href={url} className='text-primary-transparent hover:text-primary group'>
            <div className='flex flex-row w-full'>
                <h1 className='opacity-0 group-hover:opacity-100 ml-auto mr-6 text-7xl font-bold'>></h1>
                <h1 className='mt-auto text-7xl font-bold'>{name}</h1>
                <h2 className='ml-8 mt-auto text-2xl font-bold '>{id}</h2>
            </div>
        </a>
    )
}

export default HomeMenuItem;