import React from 'react'
import useFetchData from './UseFetchData'


export default function App() {
  const [data] = useFetchData({
    fetchUrl: "https://jsonplaceholder.typicode.com/albums",
    limit: 10
  })

  return (
    <div>
      <pre>
        {JSON.stringify(data, null, 1)}
      </pre>
   
    </div>
  )
}
