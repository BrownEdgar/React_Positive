import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUsers(state, action){
        return action.payload
        } 
    }
})



export const { addUsers } = usersSlice.actions
export default usersSlice.reducer