import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  counterSlice,
  episodesSlice,
  usersSlice,
  todosSlice
} from '../features';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'main',
  version: 1,
  storage,
  whitelist: ['episodes']
}

const rootReducer = combineReducers({
  counter: counterSlice,
  episodes: episodesSlice,
  users: usersSlice,
  todos: todosSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export default store