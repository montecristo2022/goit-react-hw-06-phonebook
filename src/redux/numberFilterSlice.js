import { createSlice } from '@reduxjs/toolkit';

export const numberFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContactByNumber(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterContactByNumber } = numberFilterSlice.actions;

export const getNumber = state => state.filter;