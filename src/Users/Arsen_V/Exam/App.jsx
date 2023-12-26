import { useState } from 'react'
import "./App.css"

export default function App() {
    const [users, setUsers] = useState([
        {id: 1, name: "Artur"},
        {id: 2, name: "Garik"},
        {id: 3, name: "Gugo"},
        {id: 4, name: "Vardan"},
    ])

    
      const changeName = (id) => {
        const futureName = prompt("Please, write a new name for this user")
        const result = users.map(user => {
            if (user.id === id) {
              user.name = futureName
            }
            return user
          })
          setUsers(result)

      }
    
      return (
        <div className="App">
          <h1 className='title'>USER NAMES</h1>
          <div className="container">
            {
              users.map((elem) => {
                return (
                  <div key={elem.id}>
                    <h2>{elem.name}</h2>
                    <button onClick={() => changeName(elem.id)}>Change name</button>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }
    
    
    