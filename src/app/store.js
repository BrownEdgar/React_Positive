import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import episodesSlice from '../features/episodes/episodesSlice';


const store = configureStore({
  reducer: {
      counter: counterSlice,
      episodes: episodesSlice,
  }
}) 


export default store