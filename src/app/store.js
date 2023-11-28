import {configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";

const chechMiddleWhere = (store)=>(next)=>(action)=>{
    if(action.type === "user/addUsers" ){
        const user = store.getState().user
        if(user.includes(action.payload)){
            return alert("Ara urish herosi anun chgites?");
        }
    }
  next(action)
}

const store = configureStore({
    reducer:{
        user: userSlice
    },
    middleware: (defaultMD)=> defaultMD().concat(chechMiddleWhere)
})

export default store