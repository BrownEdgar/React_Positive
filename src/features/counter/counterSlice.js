import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    addCount(state, action) {
      console.log({ state, action });
      return state + action.payload
    },
    minusCount(state) {
      return state - 1
    }
  }
})


export const { addCount, minusCount } = counterSlice.actions
export default counterSlice.reducer