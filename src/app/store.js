import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import episodesSlice from '../features/counter/episodes/episodesSlice';
import postSlice from '../features/posts/postSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
     episodes:episodesSlice,
     posts:postSlice
  }
})

export default store