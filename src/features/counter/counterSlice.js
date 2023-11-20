import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
     addCount(state){
          return state + 1
        },
     minusCount(state){
            return state - 1
        },
    resetCount(){
            return 0
        }
    }
})
export const {addCount, minusCount, resetCount} = counterSlice.actions
export default counterSlice.reducer