import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      state.contacts = [...state.contacts, payload];
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
