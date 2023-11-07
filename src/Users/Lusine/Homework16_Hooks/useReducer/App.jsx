import React, { useReducer } from 'react'
import reducer, { initialState } from './reducer'
import { SHUFFLE_NUMBERS, ADD_NUMBER, CHANGE_USERNAME, ADD_USER } from "./actionTypes"


export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)


  const handleShuffle = () => {
    dispatch({ type: SHUFFLE_NUMBERS })
  }
  const handleClick = () => {
    dispatch({ type: ADD_NUMBER })
  }
  const handleChange = () => {
    dispatch({ type: CHANGE_USERNAME })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username } = e.target;

    dispatch({ type: ADD_USER, payload: username.value })
    e.target.reset()
  }



  return (
    <div>
      <h1>State: {JSON.stringify(state)}</h1>
      <form onSubmit={handleSubmit}>
        <label>Add developers</label>
        <input type="text" id='username' />
        <input type="submit" value="save" />
      </form>
      <button onClick={handleShuffle}>Shuffle array</button>
      <button onClick={handleClick}>Add random number</button>
      <button onClick={handleChange}>Change username</button>
    </div>
  )
}
