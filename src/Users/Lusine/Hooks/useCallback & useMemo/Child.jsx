import { useState, useEffect } from 'react'



export default function Child({value}) {
  const [numbers, setNumbers] = useState([])

  console.log("Child run");

  useEffect(() => {
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

// const MemoChild = memo(child)