import React from 'react';
import ProjectsIcon from '../../assets/imgs/ProjectsIcon.png';

import { motion } from 'framer-motion';

export function ContactCard(props)
{
    return (
    <div className='w-72 h-card-size flex flex-col rounded-3xl shadow-lg bg-black text-white relative cursor-grab m-4'>
        <div className='w-full flex flex-col relative items-center justify-end p-4 flex-12'>
            <div className='absolute top-0 left-0 min-w-full min-h-full overflow-hidden rounded-tr-3xl'>
                <div className='absolute w-80 h-80 -right-40 -top-16 z-10 bg-primary rounded-full'></div>
            </div>
            <motion.div className='w-full h-full absolute flex items-center justify-center'>
                <div className='w-auto h-48 z-30 select-none'>
                    <img src={ProjectsIcon} alt='back icon' className='h-full w-auto select-none -rotate-12 mt-16 mr-12'/>
                </div>
            </motion.div>
            <h1 className='text-white uppercase m-0 z-20 text-7xl font-black'> prout</h1>
        </div>
        <div className='flex p-4 flex-08'>bottom</div>
    </div>
    );
}