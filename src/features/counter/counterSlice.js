import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        addCount(state, action){
            return state + 1
        }
    }
})

export const { addCount } = counterSlice.actions
export default counterSlice.reducer