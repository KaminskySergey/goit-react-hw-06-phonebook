import { persistStore, persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./Contacts/contacts.slice";
import { filterReducer } from 'redux/Filter/fllter.slice'


const initState = {
    contacts: [],
    filter: '',

}

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts'],
  }
  
  const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
  })

  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    preloadedState: initState,
    devTools: true,
    reducer: persistedReducer,
    // reducer: {
    //     contacts: contactsReducer,
    //     filter: filterReducer,
    // },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export const persistor = persistStore(store)
