import  { useEffect,useState } from 'react'
import axios from '../axios'

export default function Comments() {
    const [comments, setComments] = useState([])
    useEffect(() => {
        axios('comments', {
            params: {
                _limit: 10
            }
        })
        .then(res => setComments(res.data))
    })
  return (
    <ul>
        {
            comments.map(elem => {
                return <li key={elem.id}>
                    <h1>{elem.id}</h1>
                    <h2>{elem.name}</h2>
                    <h3>{elem.email}</h3>
                </li>
            })
        }
    </ul>
  )
}
