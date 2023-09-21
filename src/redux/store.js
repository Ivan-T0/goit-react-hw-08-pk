import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

import { contactsApi } from '../redux/servises/contactsApi';
import { filterReducer } from './filterSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import authSlice from './servises/authSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: authSlice,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
setupListeners(store.dispatch);
