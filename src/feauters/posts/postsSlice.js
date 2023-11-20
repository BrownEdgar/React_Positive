import { createSlice } from '@reduxjs/toolkit';


const postsSilce = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addPosts(state, action){
            return action.payload
        }
    }
})


export const { addPosts } = postsSilce.actions
export default postsSilce.reducer