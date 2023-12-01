import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk(
    'todos/getodos',
    async () =>{
        const response =await fetch('https:/jsonplaceholder.typicode.com/todos');
        const data =  response.json()
        return data
    }

)

 const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
        filter: 'all'
    },
    reducers:{
   updateFilter (state,action) {
    state.filter = action.payload
   }
    },
    extraReducers: (builder) => {
     builder
     .addCase(getTodosAsync.pending, (state) => {
        state.status = 'pending'
     })
     .addCase(getTodosAsync.fulfilled, (state,action) => {
        state.status = 'success'
        state.data = action.payload

     })
     .addCase(getTodosAsync.rejected, (state,action) => {
        return{
            ...state,
            status: 'fail',
            error: action.error
        }

     })
    }
})
//selectors

export const getFilterSelector = (state) => state.todos.filter;
export const getTodos= (state) => state.todos.data

export const superSelector = createSelector(
    [getTodos,getFilterSelector],
    (todos,filter) =>{
        if(filter === 'all') return todos;
    if(filter === 'completed'){
    return todos.filter(todo => todo.completed)
    }
    return todos.filter(todo => !todo.completed)

    }
)


export const {updateFilter} = todosSlice.actions
export default todosSlice.reducer
