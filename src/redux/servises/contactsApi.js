import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { setUserAndToken, clearUserAndToken } from './authSlice';

const getTokenFromState = (state) => {
  if (state && state.auth && state.auth.token) {
    return state.auth.token;
  }
  return null; // или какое-то значение по умолчанию, если токен не найден
};
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      // Получите токен из состояния
      const token = getTokenFromState(getState());

      // Если есть токен, добавьте его к заголовку Authorization
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    // Операція для логіну
    login: builder.mutation({
      query: (newContact) => ({
        url: '/users/login', // Замініть це на правильний URL для логіну
        method: 'POST',
        body: {
          email: newContact.email,
        password: newContact.password,},
      }),
    }),

    // Операція для реєстрації
    register: builder.mutation({
      query: newContact => ({
    url: '/users/signup',
    method: 'POST',
    body: {
      name: newContact.name,
      email: newContact.email, // Убедитесь, что поле email присутствует
      password: newContact.password,
    },
  }),
  invalidatesTags: ['Contact'],
    }),

    // Решта операцій, які ви вже визначили
    getContactByName: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    createContact: builder.mutation({
      query: newContact => ({
    url: '/contacts',
    method: 'POST',
    body: {
      name: newContact.name,
      number: newContact.phone, // Убедитесь, что поле email присутствует
      
    },
  }),
  invalidatesTags: ['Contact'],
}),
     logout: builder.mutation({
      query: () => ({
        url: '/logout', // Замените на правильный URL для выхода
        method: 'POST', // Используйте метод, который подходит для вашего API
       }),
       }),
  }),
});

export const {
  useGetContactByNameQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
  useLoginMutation, // Додайте цю операцію
  useRegisterMutation,
  useLogoutMutation,// Додайте цю операцію
} = contactsApi;