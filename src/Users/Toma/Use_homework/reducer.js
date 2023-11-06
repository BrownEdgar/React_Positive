import { ADD_DEVELOPER, ADD_RANDOM_NUMBER, CHANGE_USERNAME, SHUFFLE_ARRAY } from "./actionTypes";

 
 
 export const initialState = {
  actions: 0,
  developers: [],
  user: {
    id: 1,
    name: "Armen"
  },
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}

export default function reducer(state, action){
    switch (action.type) {
        case ADD_DEVELOPER: 
        return {
            ...state, 
            developers: [...state.developers, action.payload],
            actions: state.actions + 1};
        
            case SHUFFLE_ARRAY: return {
            ...state, 
            arr: state.arr.toSorted(() => Math.random() - 0.5),
            actions: state.actions + 1};
        
            case ADD_RANDOM_NUMBER: 
        return {
            ...state, 
            arr: [...state.arr, Math.floor(Math.random() * 900) + 100],actions: state.actions + 1};
        
            case CHANGE_USERNAME: 
        return {
            ...state, 
            user: { ...state.user, name: 'New Name' },
            actions: state.actions + 1};

        
        default: return state;
    }

}