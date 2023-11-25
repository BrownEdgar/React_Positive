import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getAsyncUasers = createAsyncThunk(
  'users/getusers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = response.json()
    return data;
  }
)

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {
    addUser(state, action) {
      state.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncUasers.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(getAsyncUasers.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload.map(elem => {
          return { id: Math.random().toString(36).slice(2, 8), username: elem.name }
        })
      })
      .addCase(getAsyncUasers.rejected, (state, action) => {
        return {
          ...state,
          status: 'fail',
          error: action.error.message
        }
      })
  }
})


export const { addUser } = usersSlice.actions
export default usersSlice.reducer