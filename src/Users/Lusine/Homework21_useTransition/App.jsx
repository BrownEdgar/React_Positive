import axios from 'axios'
import React, { useEffect, useState, useTransition } from 'react'
import data from './data.json'


export default function App() {
    const [albums, setAlbums] = useState(data)
    const [query, setQuery] = useState("")
    

    const handleChange = (e) => {
        setQuery(e.target.value)

    }

    const filteredPhotos = (query) => {
        return albums.filter(elem => elem.title.includes(query))
    }
  return (
    <div>
        <form>
            <input type="search" placeholder='album name here' onChange={handleChange} />

        </form>
        <hr />
        <div className='flex'>
            {
                albums.map(elem => {
                    return (
                        <div key={elem.id}>
                            <h2>{elem.first_name}</h2>
                            <span>{elem.email}</span>

                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}
