import {configureStore } from "@reduxjs/toolkit";
import { counterSlice, episodesSlice, postsSlice, taskSlice, todosSlice, usersSlice } from "../features";

 const store = configureStore({
    reducer:{
        counter: counterSlice,
        episodes: episodesSlice,
        users: usersSlice,
        todos: todosSlice,
        posts: postsSlice,
        task: taskSlice
    }
       
    })

export default store