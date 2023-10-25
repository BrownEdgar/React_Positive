import React, { useState, useEffect } from 'react'
import axios from './axios'

export default function Posts() {

  const [posts, setoPsts] = useState([]);

  useEffect(() => {
    axios('posts?_limit=10').then(res => setoPsts(res.data))
  })
  return (
    <div>
      <h2>Posts</h2>
      <ul className='Post-ul'>
        {
          posts.map(elem => {
            return (
              <li key={elem.id} className='posts-li'>
                <p>Title: {elem.title}</p>
                <p>Body: {elem.body}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
