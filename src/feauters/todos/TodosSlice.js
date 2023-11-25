import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getTodosAsync = createAsyncThunk("todos/getTodos", async () => {
  const responce = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await responce.json()
  return data

})

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
    status: "idle",
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodosAsync.pending, (state) => {
        state.status = "pending"
      })
      .addCase(getTodosAsync.fulfilled, (state, action) => {
        state.status = "succes"
        state.data = action.payload
      })
      .addCase(getTodosAsync.rejected, (state, action) => {
        return {
          ...state,
          status: "fail",
          error: action.error
        }
      })

  }
})

export default todosSlice.reducer