// import { addContact } from './redux/contactsListSlice';
import { useSelector } from 'react-redux';

export default function App() {
  const mySelector = useSelector(state => state.myListOfContacts);
  console.log(mySelector);
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
      <div>BLABLABLABLA</div>
    </div>
  );
}


























// import Input from './Input/Input';
// import { ContactList } from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import { nanoid } from 'nanoid';

// import React, { useState, useEffect } from 'react';

// export default function App() {
//   const [contacts, setContacts] = useState(
//     () =>
//       JSON.parse(localStorage.getItem('contacts')) ?? [
//         { id: 'id-1', name: 'Mykola Trush', number: '777-77-77' },
//         { id: 'id-2', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-3', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-4', name: 'Eden Clements', number: '645-17-79' },
//       ]
//   );

//   const [filter, setFilter] = useState('');

//   const newContact = data => {
//     const oneContact = {
//       id: nanoid(),
//       ...data,
//     };

//     alreadyExistName(oneContact);
//   };

//   const alreadyExistName = oneContact => {
//     for (const contact of contacts) {
//       if (contact.name.toLowerCase() === oneContact.name.toLowerCase()) {
//         alert(`${oneContact.name} is already in contacts`);

//         return;
//       }
//     }

//     return setContacts(contacts => [oneContact, ...contacts]);
//   };

//   const changeFilter = e => {
//     setFilter(e.target.value);
//   };

//   const visibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const deleteContact = contactId => {
//     setContacts(contacts =>
//       contacts.filter(contact => contact.id !== contactId)
//     );
//   };

//   useEffect(() => {
//     const contactsLocalStorage = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contactsLocalStorage);

//     console.log(parsedContacts);
//   });

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',

//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       <div>
//         <Input onSubmit={newContact} test={contacts} />

//         <Filter value={filter} onChange={changeFilter} />

//         <ContactList data={visibleContacts()} deleteContact={deleteContact} />
//       </div>
//     </div>
//   );
// }
