import React from 'react';
import Toolbar from '../components/Toolbar';
import { ContactCard } from '../components/ContactCard';

const ContactsPage = () =>
{
    return (
        <React.Fragment>
            <div className='pt-24 pb-24 bg-bgDark text-center ml-auto mx-auto'>
                <h1 className='text-primary text-8xl font-bold'>Contacts</h1>
            </div>
            <div className='w-full h-full flex items-center justify-center'>
                <ContactCard/>
            </div>
        </React.Fragment>
    )
}

export default ContactsPage;

//https://www.youtube.com/watch?v=cPKiilXlHAQ