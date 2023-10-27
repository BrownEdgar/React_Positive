import { useEffect, useState } from 'react'

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div>
      {
        data.map(elem => {
          return (
            <h1 key={elem.id}>{elem.title}</h1>
          )
        })
      }
    </div>
  )
}
