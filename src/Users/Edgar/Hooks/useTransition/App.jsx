import axios from 'axios';
import { useState, useEffect, useTransition } from 'react';

import data from './data.json'


export default function App() {
  const [albums, setAlbums] = useState(data);
  const [query, setQuery] = useState('')


  const [isPending, startTransition] = useTransition('')


  // useEffect(() => {
  //   axios('https://jsonplaceholder.typicode.com/photos')
  //     .then(res => setAlbums(res.data))
  // }, [])

  const handleChange = (e) => {
    startTransition(() => setQuery(e.target.value))
  }


  return (
    <div>
      <form>
        <input type="search" placeholder='album name here...' onChange={handleChange} />
      </form>
      <hr />
      {isPending && <h1>Loading...</h1>}
      <div className="flex">
        {
          albums.map(elem => {
            return (
              <div key={elem.id}>

                <h2>{elem.first_name}</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
