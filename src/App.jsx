import { useDispatch, useSelector } from "react-redux"
import { addUsers } from "./features/user/userSlice"
import "./App.css"

export default function App() {
  const user = useSelector((state)=>state.user)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const {userName} = e.target
    dispatch(addUsers(userName.value.toUpperCase()))
    e.target.reset()
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" id="userName" required/>
        <input type="submit" value="add user" />
      </form>
      <ul>
       {
        user.map((elem,index)=>{
          return (
            <li key={index} >{elem}</li>
          )
        })
       }
      </ul>
    </div>
  )
}
