import { useState } from "react"
import './App.scss'

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "John", surname: "Smith", salary: 340_000, gender: 'male' },
    { id: 2, name: "Luiza", surname: "Sanches", salary: 340_000, gender: 'female' },
    { id: 3, name: "Karen", surname: "Hole", salary: 340_000, gender: 'female' },
    { id: 4, name: "Sebastian", surname: "Graff", salary: 540_000, gender: 'male' },
    { id: 5, name: "Leo", surname: "Yohan", salary: 790_000, gender: 'male' },
  ])
  const handleClick = (id) => {
    setUsers(users.filter(elem => elem.id !== id))
  }
  const deleteFemale = () => {
    setUsers(users.filter(elem => elem.gender === "male"))
  }
  return (
    <div className="App">
      <h1 className="App-title">User</h1>
      <div className="App-container">
        {users.map(elem => {
          return (
            <div key={elem.id}>
              <h3>name:{elem.name}</h3>
              <h3>surname:{elem.surname}</h3>
              <h4>salary:{elem.salary}</h4>
              <h6>gender:{elem.gender}</h6>
              <button onClick={() => handleClick(elem.id)}>Delete</button>
            </div>
          )
        })}
      </div>
      <button onClick={deleteFemale} className="btn">Delete female</button>
    </div>
  )

}