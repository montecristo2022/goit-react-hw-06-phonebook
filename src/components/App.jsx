import Input from './Input/Input';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',

        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <h2>Phonebook</h2>
        <Input />

        <h3>Find contact</h3>
        <Filter />
        <h3>My contacts</h3>
        <ContactList />
      </div>
    </div>
  );
}
