import { useState, useEffect } from 'react'
import './App.scss'

export default function App() {
  const [data,
    setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit10")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  const handleClick = (id) => {
    const result = data.filter(elem => elem.id !== id)
    setData(result)
  }

  return (
    <div className='App'>
      <h1 className='App-title'>Users</h1>
      {data.map(elem => {
        return (
          <div className='Users' key={elem.id}>
            <h2>Name: {elem.name}</h2>
            <h2>Email: {elem.email}</h2>
            <button onClick={() => handleClick(elem.id)} className='Delete'>Delete</button>
          </div>
        )
      })
      }
    </div>
  )
}