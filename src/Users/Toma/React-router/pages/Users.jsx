import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios({
      baseURL: 'https://jsonplaceholder.typicode.com/',
      url: 'users',
      params: {_limit: 2}
  }).then(res=>setUsers(res.data))
}, [])
  
  return (
    <div>
        <pre>
        {JSON.stringify(users, null, 1)}
      </pre>
    </div>
  )
}

