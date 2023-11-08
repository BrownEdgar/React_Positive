import React from 'react'
import useFetchData from '../Hooks_homework/UseFetchData'
import useRandom from '../Hooks_homework/UseRandom'
import './App.scss'

export default function App() {
    const [data] = useFetchData({
        baseURL: "https://jsonplaceholder.typicode.com/",
        url: 'todos',
        limit: 5,
        start: 7
    })
    const [numbers] = useRandom({
        type: 'number', 
        count: 10,
        min: 4000,
        max: 4800
    })

  return (
    <div className='App'>
    <div>
        <pre>
        {JSON.stringify(data, null, 1)}
      </pre>
    </div>
     
    <ul>
      {numbers.map((number, index) => <li key={index}>{number}</li>)}
    </ul>
    </div>
  )
}
