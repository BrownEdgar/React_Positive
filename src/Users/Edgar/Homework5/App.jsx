import { useState } from 'react'
import "./App.css"
const staff = [
  { id: 1, name: "john", surname: "smith", salary: 340_000, gender: 'male' },
  { id: 2, name: "Luiza", surname: "Sanches", salary: 340_000, gender: 'female' },
  { id: 3, name: "Karen", surname: "Hole", salary: 340_000, gender: 'female' },
  { id: 4, name: "Sebastian", surname: "Graff", salary: 540_000, gender: 'male' },
  { id: 5, name: "Leo", surname: "Yohan", salary: 790_000, gender: 'male' },
]


export default function App() {
  const [users, setUsers] = useState({
    original: staff,
    temp: staff,
  })

  const handleDelete = (index) => {
    console.log(index);
    setUsers(users.toSpliced(index, 1))
  }

  const filtered = (gender) => {
    let result;
    (gender === 'all')
      ? result = staff
      : result = users.original.filter((elem) => elem.gender === gender)
    setUsers({
      ...users,
      temp: result
    })
  }

  const changename = (username) => {
    const result = users.original.map(user => {
      if (user.name === username) {
        user.name = 'valod'
      }
      return user
    })
    setUsers({
      ...users,
      original: result
    })
  }

  return (
    <div className="App">
      <h1 className='title'>Our staff and some options</h1>
      <button onClick={() => filtered('male')}>Mans</button>
      <button onClick={() => filtered('all')}>All of them</button>
      <button onClick={() => filtered('female')}>Womens</button>
      <button onClick={() => changename("Karen")}>change name</button>
      <div className="container">
        {
          users.temp.map((elem, index) => {
            return (
              <div key={elem.id}>
                <h2>{elem.name}  {elem.surname}</h2>
                <span onClick={() => handleDelete(index)}>&#10006;</span>
                <h3>Salary: {elem.salary}</h3>
                <h4>Gender: {elem.gender}</h4>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


