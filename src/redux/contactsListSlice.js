import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

export const contactListSlice = createSlice({
  name: 'ListOfContacts',
  initialState: {
    myContacts: [
      { id: 'id-1', name: 'Alfredo Gaspacho', number: '285-34-98' },
      { id: 'id-2', name: 'Mikki Raikonen', number: '459-12-56' },
      { id: 'id-3', name: 'Tema Baget', number: '443-89-12' },
      { id: 'id-4', name: 'Bill Geits', number: '991-40-57' },
    ],
  },
  reducers: {
    addContact(state, action) {
      state.myContacts = [...state.myContacts, action.payload];
    },
    deleteContact(state, action) {
      state.myContacts = state.myContacts.filter(contact => contact.id !== action.payload);
    }, 
 
  },
});

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// export const contactReducer = persistReducer(
//   persistConfig,
//   contactListSlice.reducer
// );


export const contactReducer = contactListSlice.reducer


export const { addContact, deleteContact, } = contactListSlice.actions;

export const getContacts = state => state.myListOfContacts;


