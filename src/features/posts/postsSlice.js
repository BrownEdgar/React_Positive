import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
 name: 'posts',
 initialState: [],
 reducers:{
    addPosts(state,action){
        return action.payload
    }
 }
})
export const {addPosts} = postsSlice.actions
export default postsSlice.reducer