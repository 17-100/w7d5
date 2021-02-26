import React from 'react';
import { Route } from 'react-router-dom';
import Contacts from './Contacts'
import ContactDetails from './ContactDetails'

function App() {
  return (
    // React Fragment <>
    <>
      <Route exact path='/' component={Contacts} />
      <Route exact path='/contacts/:contactId' component={ContactDetails} />
    </>
  )
}

export default App;
