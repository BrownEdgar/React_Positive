import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios({
      baseURL: 'https://jsonplaceholder.typicode.com/',
      url: 'posts',
      params: {_limit: 3}
  }).then(res=>setPosts(res.data))
}, [])
  
  return (
    <div>
        <pre>
        {JSON.stringify(posts, null, 1)}
      </pre>
    </div>
  )
}
