import React, { Component } from 'react';
import ContactForm from './components/ContactForm';

import ContactList from './components/ContactList';
import { v4 as uuidv4 } from 'uuid';
import './styles.scss';

class App extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Test',
        number: '555-55-55',
      },
    ],
    // filter: '',
  };
  formSubmitHandler = data => {
    const newContact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
