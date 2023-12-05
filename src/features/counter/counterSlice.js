import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addCount(state, action){ 
            return action.payload
        }
    }
})


export const {addCount} = counterSlice.actions
export default counterSlice.reducer