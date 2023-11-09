import { useReducer } from 'react'
import reducer, { initialState } from './reducer'
import { ADD_DEVELOPER, ADD_RANDOM_NUMBER, CHANGE_USERNAME, SHUFFLE_ARRAY } from "./actionTypes";
import './App.scss'
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

<<<<<<< HEAD
  const handleSubmit = (e) =>{
    e.preventDefault();
    const {username} = e.target;
    dispatch({type: ADD_DEVELOPER,payload: username.value})
    e.target.reset()
=======
  const handleDeveloper = (e) => {
    console.log(e)
    if (e.key === 'Enter') {
      dispatch({ type: ADD_DEVELOPER, payload: e.target.value })
    }
>>>>>>> da35e9283620c22795b03f93d752cc586be9e606
  }
  const handleShuffleArray = () => {
    dispatch({ type: SHUFFLE_ARRAY })
  }
  const handleAddRandomNumber = () => {
    dispatch({ type: ADD_RANDOM_NUMBER })
  }
  const handleChangeUsername = () => {
    dispatch({ type: CHANGE_USERNAME })
  }


  return (
    <div className='App'>
      <h1>State: {JSON.stringify(state)}</h1>
      <form onSubmit={handleSubmit}>
      <label>Add developer</label>
<<<<<<< HEAD
      <input type = 'text' id='username'/> 
      <input type = 'submit' value='save'/> 
      </form>
=======
      <input onInput={handleDeveloper} />
>>>>>>> da35e9283620c22795b03f93d752cc586be9e606
      <button onClick={handleShuffleArray}>Shuffle Array</button>
      <button onClick={handleAddRandomNumber}>Add Random Number</button>
      <button onClick={handleChangeUsername}>Change Username</button>

    </div>
  )
}

