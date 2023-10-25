import { useEffect, useState } from 'react'
import Child from './Child'
import axios from 'axios';

export default function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios({
      baseURL: 'https://jsonplaceholder.typicode.com/',
      url: 'todos',
      params: {
        _limit: 5
      }
    }).then(res => setPosts(0))
  }, [])


  return (
    <div>
      <Child posts={posts} />
    </div>
  )
}
