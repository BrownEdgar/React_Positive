import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUsers(state, action) {
      return action.payload
    },
    sertedUsers(state) {
      const sortuser = state.toSorted((a, b) => a > b ? 1 : -1);
      return sortuser
    }
  }
})

export const { addUsers, sertedUsers } = usersSlice.actions

export default usersSlice.reducer