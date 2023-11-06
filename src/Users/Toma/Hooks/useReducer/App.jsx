import React, { useReducer } from 'react'
import reducer, {initialValue } from './reducer'
import { ADD_ELEM, EVEN, PLUS, REMOVE_ELEM, SORT_ARRAY } from "./actonTypes"


export default function App() {

    const [state, dispatch] = useReducer(reducer, initialValue)
    const handleClick = () =>{
        dispatch({type: ADD_ELEM, payload: 444})
       }

       const handleDelete =() =>{
        dispatch({type: REMOVE_ELEM, payload: 4})

       }
       const handlePlus =() =>{
        dispatch({type: PLUS})
       }
  return (
    <div>
        <p>State:{JSON.stringify(state)}</p>
        <button onClick={handleClick}>add elem</button>
        <button onClick={handleDelete}>remove elem</button>
        <button onClick={() => dispatch({type: SORT_ARRAY})}>Sort</button>
        <button onClick={() => dispatch({type: EVEN})}>Even</button>
        <button onClick={handlePlus}>plus</button>


    </div>
  )
}
