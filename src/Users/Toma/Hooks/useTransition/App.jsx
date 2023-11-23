import axios from 'axios'
import React, { useEffect, useState, useTransition } from 'react'
import './App.css'

export default function App() {
    const [albums, setAlbums] = useState([])
    const [query, setQuery] = useState('')
    const [isPending, startTransition] = useTransition('')

    useEffect(() => {
      axios("https://jsonplaceholder.typicode.com/photos")
      .then(res => setAlbums(res.data))
    }, [])

    const handleChange = (e) =>{
        startTransition(() =>  setQuery(e.target.value))
      
    }

    const filteredPhotos = (query) =>{
        return albums.filter(elem => elem.title.includes(query))
    
    }
  return (
    <div>
      <form>
        <input type="search" placeholder='album name here...' onChange={handleChange} />
      </form>
      <hr/>
      {isPending && <h1>Loading...</h1>}
      <div className='flex'>
        {
           filteredPhotos(query).map(elem => {
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
