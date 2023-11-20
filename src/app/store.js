import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../feauters/counter/counterSlice'
import postsSlice from '../feauters/posts/postsSlice'

const store = configureStore({
    reducer: {
        counter: counterSlice,
        users: postsSlice
    }
})

export default store 