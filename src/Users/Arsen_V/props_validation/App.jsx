import { useEffect, useState } from 'react'
import Child from "./Child"
import axios from 'axios'

export default function App() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      axios({
          baseURL: "https://jsonplaceholder.typicode.com/",
          url: "posts",
          params:{
              _limit: 10
          }
      }).then(res => setPosts(res.data))
    }, [])
    
  return (
    <div>
        <Child posts={posts} />
    </div>
  )
}
