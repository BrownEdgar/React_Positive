import { useEffect,useState } from "react"
import axios from "../axios"

export default function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
      axios("posts?_limit=10")
      .then(res => setPosts(res.data))
    }, [])
    
  return (
    <div>
        {
            posts.map(elem=>{
                return (
                <h1 key={elem.id}>Posts_title{elem.title}</h1>
                )
            })
        }
    </div>
  )
}