import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUsers(state, action){
            // state.push(...action.payload);
            return action.payload
        }
    }
})


export const { addUsers } = usersSlice.actions
export default usersSlice.reducer