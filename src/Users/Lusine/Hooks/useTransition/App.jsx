import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function App() {
    const [albums, setAlbums] = useState([])
    const [query, setQuery] = useState("")
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/photos")
        .then(res => setAlbums(res.data))
  
    }, [])
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
                filteredPhotos(query)
                .map(elem => {
                    return (
                        <div key={elem.id}>
                            <img src={elem.url} />
                            <h2>{elem.title}</h2>

                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}
