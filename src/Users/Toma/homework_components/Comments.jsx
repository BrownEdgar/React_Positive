import React, { useState, useEffect } from 'react'
import axios from './axios'

export default function Comments() {

    const [comments, setComments] = useState([])

    useEffect(() =>{
        axios({
            url: 'comments',
            params: {_limit: 10}
        })
        .then(res => setComments(res.data))
    })

  return (
    <div>
        <h2>Comments</h2>
      <ul>
        {
            comments.map(elem =>{
                return <div key={elem.id} className='App-comments'>
                <h3>Name: {elem.name}</h3>
                <h3>Email: {elem.email}</h3>
                <h3>Body: {elem.body}</h3>
                </div>
            })
        }
      </ul>
    </div>
  )
}
