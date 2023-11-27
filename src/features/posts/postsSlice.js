import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPostsAsync = createAsyncThunk(
 'posts/getposts',
  async () => {
    const response = await fetch('https:/jsonplaceholder.typicode.com/posts?_limit=20');
    const data = response.json()
    return data
  }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
      data: [],
      status: 'idle',
      error: null
    },
reducers: {
    deletePost(state, action) {
      const id = action.payload;
      state.data = state.data.filter(elem => elem.id !== id);
    }
},
   
extraReducers: (builder) => {
    builder
      .addCase(getPostsAsync.pending, (state) => {
            state.status = 'pending'
      })
      .addCase(getPostsAsync.fulfilled, (state, action) => {
            state.status = 'success'
            state.data = action.payload
      })
      .addCase(getPostsAsync.rejected, (state, action) => {
        return {
            ...state,
            status: 'fail',
            error: action.error
      }
    })
  }
})

export const { deletePost } = postsSlice.actions
export default postsSlice.reducer