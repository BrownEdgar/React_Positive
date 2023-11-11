import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Comments() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    axios({
      baseURL: 'https://jsonplaceholder.typicode.com/',
      url: 'comments',
      params: {_limit: 4}
  }).then(res=>setComments(res.data))
}, [])
  
  return (
    <div>
        <pre>
        {JSON.stringify(comments, null, 1)}
      </pre>
    </div>
  )
}

