import { configureStore } from '@reduxjs/toolkit';
import {
  counterSlice,
  episodesSlice,
  usersSlice,
  todosSlice
} from '../features';
import mainMiddleware from '../middlewares';


const store = configureStore({
  reducer: {
    counter: counterSlice,
    episodes: episodesSlice,
    users: usersSlice,
    todos: todosSlice
  },
  middleware: mainMiddleware
})

export default store