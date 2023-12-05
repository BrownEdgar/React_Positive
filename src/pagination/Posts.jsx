import axios from "axios"
import { useEffect, useState } from "react"

export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
     axios({
        baseURL:
     })
    }, [])
    
  return (
    <div>Posts</div>
  )
}
