import { configureStore } from '@reduxjs/toolkit';
import {counterSlice, pokemonSlice} from './slices/';
import { todosApi } from './api';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },

  middleware: (getDefaultMiddelware) => getDefaultMiddelware().concat(todosApi.middleware),
})