import React from 'react';
import styles from '../ContactList/ContactList.module.css';
import { getContacts } from 'redux/contactsListSlice';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsListSlice';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contactsFilterSlice';
import { getFilter } from 'redux/contactsFilterSlice';

export const ContactList = () => {
  const contactsArray = useSelector(getContacts).myContacts;

  const dispatch = useDispatch();

  const filter = useSelector(getFilter);



  const contactsLowerFilter = filter.toLowerCase()


  const visibleContacts = contactsArray.filter(contact =>
    contact.name.toLowerCase().includes(contactsLowerFilter)
  );


  console.log(filter.length);

  return visibleContacts.map(({ id, name, number }) => {
    return (
      <p key={id}>
        {name}: {number}
        <button
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          delete
        </button>
      </p>
    );
  });
};

// import React from 'react';
// import styles from '../ContactList/ContactList.module.css';
// import PropTypes from 'prop-types';
// import { ContactListItem } from '../СontactListItem/ContactListItem';

// export const ContactList = ({ data, deleteContact }) => {
//   return (
//     <ul>
//       {data.map(({ name, number, id }) => (
//         <div className={styles.contactWrapper} key={id}>
//           <ContactListItem name={name} number={number} />
//           <button
//             type="button"
//             onClick={() => {
//               deleteContact(id);
//             }}
//           >
//             Удалить
//           </button>
//         </div>
//       ))}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };
