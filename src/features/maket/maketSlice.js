// import { createSlice } from "@reduxjs/toolkit";

// const maketSlice = createSlice({
//     name: "maket",
//     initialState:[],
//     reducers:{

//     }
// })

// export default maketSlice.reducer

const arr = [154,42,1,87,695,36,2,10,39,9];

const perPage = 4
const page = 2
const x = perPage * page

const result = arr.slice((x - perPage) - perPage)

console.log(result);

  