import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAsyncUsers = createAsyncThunk(
   "users/getUsers",
   async() => {
    const respons = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = respons.json()
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
        addUser(state, action){
            state.push(action.payload)

        }

    },
    extraReducers:(builder) => {
        builder
        .addCase(getAsyncUsers.pending, (state, action) => {
            state.status = "pending"
        })
        .addCase(getAsyncUsers.fulfilled, (state, action) => {
            state.status = "succes",
            state.data = action.payload.map(elem => {
                return {id: Math.random().toString().slice(2, 8), username: elem.name}
            })
        })
        .addCase(getAsyncUsers.rejected, (state, action) => {
            return {
                ...state,
                status: "fail",
                error: action.error.message
            }

        })


    }
})


export const {addUser} = usersSlice.actions
export default usersSlice.reducer


