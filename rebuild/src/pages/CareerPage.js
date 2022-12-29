import React from 'react';
import Toolbar from '../components/Toolbar';
import Timeline from '../components/Timeline';

const CareerPage = () =>
{
    return (
        <React.Fragment>
            <Toolbar />
            <div className='pt-24 pb-24 bg-bgDark text-center ml-auto mx-auto'>
                <h1 className='text-primary text-8xl font-bold'>Parcours</h1>
            </div>
            <div className='bg-bgDark ml-auto mx-auto'>
                <Timeline />
            </div>
            
        </React.Fragment>
    )
}

export default CareerPage;