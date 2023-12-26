import axios from 'axios';
import { useEffect, useState, useTransition } from "react";
import './App.scss'

export default function App() {
    const [albums, setAlbums] = useState([])
    const [query, setQuery] = useState('')

    const [isPending, startTransition] = useTransition()
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/photos')
        .then(res => setAlbums(res.data))
    }, []) 

    const handleChange = (e) => {
        startTransition(() => setQuery(e.target.value))
        
    }

    const filteredphotos = (query) => {
        return albums.filter(elem => elem.title.includes(query))
    }
    
    return (
        <div>
            <form>
                <input type ="search" placeholder='album name here...' onChange={handleChange}/>
            </form>
            <hr />
            {isPending && <h1>Loading...</h1>}
            <div className="flex">
                {
                    filteredphotos(query).map(elem => {
                        return(
                            <div key={elem.id}>
                                <img src={elem.url} alt="" />
                                <h2>{elem.title}</h2>

                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}