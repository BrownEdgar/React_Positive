import React, { useState, useEffect } from 'react'
import axios from './axios'

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() =>{
        axios({
            url: 'users',
            params: {_limit: 40}
        })
        .then(res => setUsers(res.data))
    })
  return (
    <div>
        <h2>Users</h2>
        <ul className='Users-ul'>
            {
                users.map(elem =>{
                    return (<li key={elem.id} className='Users-li'>
                        <p className='Users_p'>{elem.id}</p>
                        <p>Name: {elem.name}</p>
                        <p>Email: {elem.email}</p>
                    </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
