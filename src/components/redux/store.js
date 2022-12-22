import { configureStore } from "@reduxjs/toolkit"
import { contactReducer } from "./contactsListSlice"


export const store = configureStore({
reducer: {
    reducer: {
        myListOfContacts: contactReducer
      },
}
})