import { ADD_ELEM,REMOVE_ELEM,SORT_ARRAY } from "./actionTypes"

export const initialValues = {
data:  [1222,132,44,253,67,121,79,446,989,344],
count:0,
status:'idea'
};


export default function reducer(state=initialValues,action) {
  
  switch (action.type) {
    case ADD_ELEM:return {...state,data:[...state.data,action.payload]}
    case REMOVE_ELEM:return state.toSpliced(action.payload,1)  
    case SORT_ARRAY:return state.toSorted((a,b)=>b-a)

    default: return state
      
  }



}