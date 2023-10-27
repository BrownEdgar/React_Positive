import { useEffect, useState } from 'react'

import './App.scss'

export default function Test() {
  const [numbers, setNumbers] = useState([])
  const [total, setTotal] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault()
    const number = +e.target.number.value

    !numbers.includes(number) && setNumbers([...numbers, number])
    e.target.reset()
  }

  useEffect(() => {
    const sum = numbers.reduce((acc, cv) => acc + cv, 0);
    setTotal(sum)
  }, [numbers])


  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input type="number" id='number' required />
        <input type="submit" value='add' />
      </form>
      <hr />
      <h1>Total: {total}</h1>
      <pre>
        {JSON.stringify(numbers)}
      </pre>
    </div>
  )
}
