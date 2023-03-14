import React from 'react';
import Toolbar from '../components/Toolbar';
import { ContactCard } from '../components/ContactCard';

const ContactsPage = () =>
{
    return (
        <React.Fragment className='h-full w-full bg-blue-400'>
            <div className='pt-24 pb-24 bg-bgDark text-center ml-auto mx-auto flex items-center justify-center'>
                <h1 className='text-primary text-8xl font-bold'>Contacts</h1>
            </div>
            <div className='w-full h-full flex items-center justify-center bg-bgDark flex-grow'>
                <ContactCard/>
                <ContactCard/>
                <ContactCard/>
            </div>
        </React.Fragment>
    )
}

export default ContactsPage;

//https://www.youtube.com/watch?v=cPKiilXlHAQ