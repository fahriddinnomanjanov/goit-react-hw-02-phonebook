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
    
    const { contacts } = this.state;
    const result = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase())

    result ? alert(`${name} is already in contact`) : this.setState(prevState => ({
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
  
  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parseContacts = JSON.parse(contacts);
    this.setState({ contacts: parseContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts))
    }
  }

  render() {
    const { handleDelete ,handleFilter } = this;
    const { contacts, filter } = this.state

    const FILTER = filter.toLowerCase()

    const filteredContacts = contacts.filter(({ name, number }) => name.toLowerCase().includes(FILTER) || number.includes(FILTER))

    return (
      <>
        <FormAddContact onSubmit={this.addToContacts} />
        <Filter
          value={filter}
          onChange={handleFilter}
        />
        <ContactList
          list={filteredContacts}
          onDelete={handleDelete}
        />
    </>
    );
  }
}

export default App;