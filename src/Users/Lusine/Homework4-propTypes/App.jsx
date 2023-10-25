import {useState, useEffect} from 'react'
import Child from './Child'
import axios from 'axios'
import './Child.scss'


export default function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
      axios({
        baseURL: "https://jsonplaceholder.typicode.com/",
        url: 'users',
        params: {
          _limit: 5
        }
      }).then(res => setUsers(res.data))
    })
  return (
    <div>
        <Child users={users} />
    </div>
  )
}
