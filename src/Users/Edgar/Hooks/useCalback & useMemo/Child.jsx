import { memo, useEffect, useState } from 'react'

import './Child.scss'

export default function Child({ value }) {
  console.log("child run")
  const [numbers, setNumbers] = useState([])

  useEffect(() => {
    console.log('useEffct run')
    const arr = new Array(1e4)
      .fill()
      .map(() => Math.ceil(Math.random() * 20000))
    setNumbers(arr)
  }, [])


  return (
    <ul>
      {
        numbers
          .filter(n => n >= value)
          .map((elem, index) => <li key={index}>{elem}</li>)
      }
    </ul>
  )
}

