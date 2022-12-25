import React from 'react';
import styles from '../ContactList/ContactList.module.css';
import { getContacts } from 'redux/contactsListSlice';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsListSlice';
import { useDispatch } from 'react-redux';
import { getFilter } from 'redux/contactsFilterSlice';
// import { getNumber } from 'redux/numberFilterSlice';

export const ContactList = () => {
  const contactsArray = useSelector(getContacts).myContacts;

  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const contactsLowerFilter = filter.toLowerCase();

  const visibleContacts = contactsArray.filter(contact =>
    contact.name.toLowerCase().includes(contactsLowerFilter)
  );

  // const numberFilter = useSelector(getNumber);
  // const visibleContactsByNumber = contactsArray.filter(contact =>
  //   contact.number.includes(numberFilter)
  // );

  return (
    <ul className={styles.contactsWrapper}>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li className={styles.oneContact} key={id}>
            <p className={styles.oneContactText}>
              {' '}
              {name}: {number}
            </p>

            <button
              className={styles.deleteButton}
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              delete
            </button>
          </li>
        );
      })}

      {/* {visibleContacts.length === 0 && visibleContactsByNumber.length > 0
        ? visibleContactsByNumber.map(({ id, name, number }) => {
            return (
              <li className={styles.oneContact} key={id}>
                <p className={styles.oneContactText}>
                  {' '}
                  {name}: {number}
                </p>

                <button
                  className={styles.deleteButton}
                  onClick={() => {
                    dispatch(deleteContact(id));
                  }}
                >
                  delete
                </button>
              </li>
            );
          })
        : false}

      {visibleContacts.length === 0 && visibleContactsByNumber.length === 0 ? (
        <p>There are no contacts here</p>
      ) : (
        false
      )} */}
    </ul>
  );
};
