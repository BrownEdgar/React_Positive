import { useState,useEffect } from "react"
import Users from "./Users"
import axios from "axios"

export default function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url:"users",
      params:{
        _limit: 10,
      }
    }).then(res => setUsers(res.data))
  }, [])
  return (
    <div>
        <Users users={users} />
    </div>
  )
}
