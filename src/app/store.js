import { configureStore } from "@reduxjs/toolkit";
import maketSlice from "../features/maket/maketSlice";

const store = configureStore({
    reducer: {
        maket:maketSlice
    }
})

export default store