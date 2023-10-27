import  { useEffect,useState } from 'react'
import axios from '../axios'

export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios('posts', {
            params:{
                _limit:10
            }
        })
        .then(res => setPosts(res.data))
    })
  return (
    <ul>
        {
            posts.map(elem => {
                return <li key={elem.id}>
                    <h1>{elem.id}</h1>
                    <h2>{elem.title}</h2>
                    <h3>{elem.body}</h3>
                </li>
            })
        }
    </ul>
  )
}
