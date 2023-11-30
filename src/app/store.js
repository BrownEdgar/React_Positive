import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { 
    counterSlice, 
    episodesSlice, 
    usersSlice,
    todosSlice, 
    postsSlice
} from '../feauters'
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
    key: 'root',
    version: 1,
    storage,
    whiteList: ["episodes"],
  }
  
const persistedReducer = persistReducer(persistConfig, rootReducer)

const rootReducer = combineReducers({
        counter: counterSlice,
        episodes: episodesSlice,
        users: usersSlice,
        todos: todosSlice,
        posts: postsSlice
    }
)

const checkUserMiddleWare = (store) => (next) => (action) => { 
    console.log(new Date().toTimeString());
    if(action.type === 'users/addUser'){
        const users = store.getState().users;
        if(users.includes(action.payload)){
            return  
        }
    }
    next(action)
}

const store = configureStore({
    reducer: persistReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    
})

export const persistor = persistStore(store)
export default store 