import React from 'react';
import '../styles/ContactsView.css';
import Toolbar from '../components/Toolbar';

function ContactsView() {
  return (
    <div className='ContactsView'>
      <Toolbar />
      <div className='ContactsViewTitle'>
        <h1>Contacts</h1>
      </div>
    </div>
  )
}

export default ContactsView;