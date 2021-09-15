import React, { Component } from 'react';
import shortid from 'shortid';
import { ContactsList } from './ContactsList/ContactsList';
import { Form } from './Form/Form';
import { Filter  } from './Filter/Filter';
import '../index.css';

export class App extends Component {

  state = {
    contacts: [
      // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ],
    filter: ''  
  }

  formSubmitHandler = ({name, number}) => {
    const contact = {
      id: shortid.generate(),
      name,
      number
    };

    this.setState(prevState => ({contacts: [...prevState.contacts, contact]}))    
  }
    

  onFilterChange = (e) => {    
    this.setState({filter: e.currentTarget.value});
  } 

  contactsToRender = () => { 
  const {contacts, filter} = this.state;
  return (!filter 
    ? contacts 
    : contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())))  
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  render() {
    return (
      <div>
        <h2>Phonebook</h2>

        <Form onSubmit={this.formSubmitHandler} contacts={this.state.contacts}/>

        <h2>Contacts</h2>

        <Filter value={this.state.filter} onChange={this.onFilterChange}/>
        
        <ContactsList contacts={this.contactsToRender()}  deleteContact={this.deleteContact}/>
        
      </div>
    )
  }
}

export default App;
