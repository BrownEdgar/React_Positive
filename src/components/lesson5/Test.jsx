import React, { useEffect, useState } from 'react'

export default function Test() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Karen');

  useEffect(() => {
    console.log('ok')
    setCount(0)
  }, [name])


  return (
    <div>
      <h1>count {count}</h1>
      <h1>name {name}</h1>
      <button onClick={() => setCount(count + 1)}>add count</button>
      <button onClick={() => setName('Valod')} > change name</button>
    </div>
  )
}
