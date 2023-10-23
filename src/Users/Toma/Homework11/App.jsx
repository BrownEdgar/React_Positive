import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Child from './Child'
import './App.scss'

export default function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios({
        baseURL: "https://jsonplaceholder.typicode.com/",
        url: 'users'
    })
    .then(res => setUsers(res.data))

    },[])
  return (
    <div className='App'>
      <Child users={users} />
    </div>
  )
}
