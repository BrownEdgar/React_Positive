import React, { useReducer } from 'react'
import reducer, {initialState } from './reducer'
import { ADD_DEVELOPER, ADD_RANDOM_NUMBER, CHANGE_USERNAME, SHUFFLE_ARRAY } from "./actionTypes";
import './App.scss'
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDeveloper = () =>{
    dispatch({type: ADD_DEVELOPER,})
  }
  const handleShuffleArray = () =>{
    dispatch({type: SHUFFLE_ARRAY })
  }
  const handleAddRandomNumber = () =>{
    dispatch({type:ADD_RANDOM_NUMBER})
  }
  const handleChangeUsername = () =>{
    dispatch({type: CHANGE_USERNAME})
  }


  return (
    <div className='App'>
      <h1>State: {JSON.stringify(state)}</h1>
      <label>Add developer</label>
      <input onClick={handleDeveloper}/> 
      <button onClick={handleShuffleArray}>Shuffle Array</button>
      <button onClick={handleAddRandomNumber}>Add Random Number</button>
      <button onClick={handleChangeUsername}>Change Username</button>

    </div>
  )
}

