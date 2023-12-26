import { React } from 'react'
import CustomHook from "./CustomHook"
import useFetchData from './UseFetchData'


export default function App() {
  const [data] = useFetchData({
    baseURL: "https://jsonplaceholder.typicode.com",
    url: 'todos',
    limit: 5,
    start: 7
  })
  const [value, { randomTenNumbers }] = CustomHook({
    type: 'number',
    count: 10,
    min: 4800,
    max: 4000
  })
  return (
    <div>
      <div>
        <pre>{JSON.stringify(data, null, 1)}</pre>
      </div>
      <div>
        <h1>{value}</h1>
        <button onClick={randomTenNumbers}>Random Numbers</button>
      </div>



    </div>
  )
}
