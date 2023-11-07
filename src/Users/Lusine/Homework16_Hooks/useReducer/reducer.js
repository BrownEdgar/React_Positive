import { ADD_NUMBER, ADD_USER } from "./actionTypes";

export const initialState = {
  actions: 0,
  developers: [],
  user: {
    id: 1,
    name: "Armen"
  },
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}


export default function reducer(state, action) { //acton={}
  switch (action.type) {
    case ADD_USER: return { ...state, developers: [...state.developers, action.payload] }
    case ADD_NUMBER: return { ...state, arr: [...state.arr = Math.round(Math.random() * 999 + 100)] }


    default: return state;
  }

}