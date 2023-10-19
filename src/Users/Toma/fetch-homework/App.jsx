import  { useState, useEffect } from 'react'
import './App.scss'

export default function App() {
   const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users?_limit=20')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    const handleDelete = (id) => {
        setData(data.filter((elem) => elem.id !== id));
      };

  return (
    <div className='App'>
    {
    data.map(elem => {
    return(
    <div className='App-container' key={elem.id} >
        <h3>{elem.name}</h3>
        <h3>{elem.email}
        <span onClick={()=>handleDelete(elem.id)}>&#x2718;</span>
        </h3>
                       
    </div>
        )
    })
}

    </div>
  )
}
