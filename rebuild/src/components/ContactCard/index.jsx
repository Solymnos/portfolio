import React from 'react';
import ProjectsIcon from '../../assets/imgs/ProjectsIcon.png';
import TestLogo from '../../assets/imgs/testlogo.png';

import { motion, useMotionValue, useTransform } from 'framer-motion';

export function ContactCard(props)
{
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
    <div className='w-full flex items-center justify-center'>    
        <motion.div className='border-8 border-primary  w-72 h-card-size flex flex-col rounded-3xl shadow-lg bg-bgDark text-white relative cursor-grab m-4' style={{ x, y, rotateX, rotateY, z: 100}} 
        drag dragElastic={0.16} dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}} whileTap={{cursor : "grabbing"}}>
            <div className='w-full flex flex-col relative items-center justify-end p-4 flex-12'>
                
                <motion.div className='w-full h-full absolute flex items-center justify-center' style={{ x, y, rotateX, rotateY, rotate: "-25deg", z: 10000 }} drag dragElastic={0.12} whileTap={{cursor:"grabbing"}}>
                    <div className='w-auto h-48 z-_99 select-none'>
                        <img src={TestLogo} alt='back icon' className='h-full w-auto select-none -rotate-12 mt-16 mr-12'/>
                    </div>
                </motion.div>
                <h1 className='text-white uppercase m-0 text-7xl font-black z-_10'>prout</h1>
            </div>
            <div className='flex p-4 flex-08'>bottom</div>
        </motion.div>
    </div>
    );
}