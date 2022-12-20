import React from 'react';

const HomePage = () => {
    return (
        <React.Fragment>
            <div className='w-screen h-screen grid grid-rows-2 xl:grid-cols-2'>
                <div className='w-full h-full bg-blue-400 centered xl:h-screen'>
                    <p>Home</p>
                </div>
                <div className='w-full h-full bg-red-400 centered xl:h-screen'>
                    <p>Page 2</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomePage;