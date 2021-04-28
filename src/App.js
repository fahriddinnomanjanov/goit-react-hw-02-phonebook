import {Component} from 'react';
import FormAddContact from './components/FormAddContact';
import ContactList from './components/ContactList'
import Filter from './components/Filter'
import shortid from 'shortid'

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: '',
  }
  addToContacts = ({name, number}) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }));
  }
  handleDelete = (idx) => {
    this.setState(prevState => {
      const newContacts = [...prevState.contacts];
      newContacts.splice(idx, 1);
      return {
        contacts: newContacts
      }
    })
  }
    handleFilter = (e) => {
      this.setState({filter: e.currentTarget.value})
    }
  
    getContacts = () => {
      const { filter, contacts } = this.state;
      if (!filter) {
        return contacts
      }
      const normalizedFilter = filter.toLowerCase()
      const filteredContacts = contacts.filter(({ name }) => {
        if (name.toLowerCase().includes(normalizedFilter)) {
          return true
        }
        else {
          return false
        }
      }
        )
      return filteredContacts
    }

  render() {
    const { handleDelete, getContacts ,handleFilter } = this;
    const { filter } = this.state
    const contacts = getContacts();
    return (
      <>
        <FormAddContact onSubmit={this.addToContacts} />
        <Filter
          value={filter}
          onChange={handleFilter}
        />
        <ContactList
          list={contacts}
          onDelete={handleDelete}
        />
    </>
    );
  }
}

export default App;