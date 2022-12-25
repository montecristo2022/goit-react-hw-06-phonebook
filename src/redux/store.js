import { configureStore } from '@reduxjs/toolkit';
import { contactsFilterSlice } from './contactsFilterSlice';
import { contactReducer } from './contactsListSlice';
import { numberFilterSlice } from './numberFilterSlice';
// import { filterReducerPersist } from './contactsFilterSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

// const myConfig = {
//   key: 'root',
//   storage,
// }
// почему не работает?

const persistedReducer = persistReducer(persistConfig, contactReducer);

// const persistedFilter = persistReducer(myConfig, filterReducerPersist);
// почему не работает?

export const store = configureStore({
  reducer: {
    filterNumber: numberFilterSlice.reducer,
    filter: contactsFilterSlice.reducer,

    // filter: persistedFilter,
    // почему не работает?

    myListOfContacts: persistedReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

