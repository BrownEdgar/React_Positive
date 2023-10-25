import { useEffect, useState } from "react"
import axios from "../axios"

export default function Users() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios("users?_limit=10")
      .then(res => setUsers(res.data))
  }, [])

  return (
    <div>
      {
        users.map(elem => {
          return (
            <h1 key={elem.id}>Users_name: {elem.name}</h1>
          )
        })
      }
    </div>
  )
}
