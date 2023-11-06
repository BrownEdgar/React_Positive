import { ADD_ELEM, EVEN, PLUS, REMOVE_ELEM, SORT_ARRAY } from "./actonTypes"

 export const initialValue = {
data: [1,2,3,4,5,6,7,8,9],
count: 0,
status: 'idle'
 }



 export default function reducer(state = initialValue, action){
    switch (action.type) {
        case ADD_ELEM : return {...state,data: [...state.data, action.payload]}
        case  REMOVE_ELEM: return state.toSpliced(action.payload, 1)
        case   SORT_ARRAY: return sortArray(state)
        case   EVEN: return evenArray(state)
        case  PLUS: return {...state,count: state.count + 1, status: 'succes'}

        
        default: return state;
    }

}
function sortArray(state){
    return state.toSorted((a, b) => a - b)
}
function evenArray(state){
    return (
        state.map(elem => {
            return elem % 2 === 1 ? elem + 1 : elem
        })
    )
}