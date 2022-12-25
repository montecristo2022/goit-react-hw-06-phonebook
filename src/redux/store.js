import { configureStore } from "@reduxjs/toolkit"
import { contactsFilterSlice } from "./contactsFilterSlice"
import { contactReducer } from "./contactsListSlice"



export const store = configureStore({
reducer: {
        filter: contactsFilterSlice.reducer,
        myListOfContacts: contactReducer,
      },

})