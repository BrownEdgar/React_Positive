
import { useEffect, useState } from 'react'
import Child from './child'
import axios from 'axios'

export default function App() {

  const [posts, setPosts] = useState([])


  useEffect(() => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url: 'posts',
      params: {
        _limit: 5
      }

    }).then(res => setPosts(res.data))
    
  },[])


  return (
    <div>
  <Child  
   title='lorem ipsum dolar' 
   type='dark'
   obj={{id: 1, name: 'John',skills:['react.js']}}
   posts={posts}/>
    </div>
  )
}
