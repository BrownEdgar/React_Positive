import { configureStore } from '@reduxjs/toolkit'
import { 
    counterSlice, 
    episodesSlice, 
    usersSlice,
    todosSlice, 
    postsSlice
} from '../feauters'
// import TodosSlice from '../feauters/todos/TodosSlice';
// import mainMiddleware from '../mi';


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
    reducer: {
        counter: counterSlice,
        episodes: episodesSlice,
        users: usersSlice,
        todos: todosSlice,
        posts: postsSlice
    },
    middleware: (defaultMD) => defaultMD().concat(checkUserMiddleWare)
    
})


export default store 