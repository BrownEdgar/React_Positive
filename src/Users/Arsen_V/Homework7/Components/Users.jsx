import  { useEffect,useState } from 'react'
import axios from '../axios'

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios('users',)
        .then(res => setUsers(res.data))
    }, [])
  return (
    <ul>
        {
            users.map(elem => {
                return <li key={elem.id}>
                    <h1>{elem.name}</h1>
                    <h2>{elem.username}</h2>
                    <h3>{elem.email}</h3>
                </li>
            })
        }
    </ul>
  )
}
