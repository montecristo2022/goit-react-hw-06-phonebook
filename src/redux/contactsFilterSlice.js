import { createSlice } from '@reduxjs/toolkit';

export const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterContact } = contactsFilterSlice.actions;

export const getFilter = state => state.filter;