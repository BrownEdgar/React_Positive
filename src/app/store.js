import { configureStore } from "@reduxjs/toolkit";
import { counterSlice, episodesSlice, postsSlice, todosSlice, usersSlice } from "../features";
import mainMiddleWare from "../middlewares";


const store = configureStore({
    reducer:{
        counter: counterSlice,
        episodes: episodesSlice,
        users: usersSlice,
        todos: todosSlice,
        posts: postsSlice
       
    },
    middleware: mainMiddleWare
})
export default store