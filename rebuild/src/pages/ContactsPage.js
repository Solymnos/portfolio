import React from 'react';
import Toolbar from '../components/Toolbar';

const ContactsPage = () =>
{
    return (
        <React.Fragment>
            <Toolbar />
            <div className='pt-24 pb-24 bg-bgDark text-center ml-auto mx-auto'>
                <h1 className='text-primary text-8xl font-bold'>Contacts</h1>
            </div>
        </React.Fragment>
    )
}

export default ContactsPage;

//https://www.youtube.com/watch?v=cPKiilXlHAQ