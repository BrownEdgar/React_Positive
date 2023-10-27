import { useState, useEffect } from "react"
import axios from "axios"
import Child from "./Child"
import "./App.scss"

export default function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url: "users",
      params: {
        _limit: 10,
        _start: 2
      }
    }).then(res => setUsers(res.data))
  }, [])

  return (
    <div>
      <Child users={users} />
    </div>
  )
}
