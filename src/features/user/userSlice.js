import { createSlice } from "@reduxjs/toolkit";

 const userSlice = createSlice({
    name: "user",
    initialState:[],
    reducers:{
        addUsers(state,action){
           state.push(action.payload)
        }
    }
})

export const {addUsers} = userSlice.actions
export default userSlice.reducer