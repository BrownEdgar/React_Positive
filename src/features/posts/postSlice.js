import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPostsAsync = createAsyncThunk("posts/getPosts", async () => {

  const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await responce.json();
  return data;

})


const postsSlice = createSlice({

  name: "posts",
  initialState: {
    data: [],
    status: "idle",
    error: null
  },

  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(getPostsAsync.pending, (state) => {
        state.status = "pending"
      })
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        state.status = "sucsces"
        state.data = action.payload
      })
      .addCase(getPostsAsync.rejected, (state, action) => {
        return {
          ...state,
          status: "fail",
          error: action.error
        }
      })
  }
})

export default postsSlice.reducer