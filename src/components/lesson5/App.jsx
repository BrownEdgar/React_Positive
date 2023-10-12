import { useEffect, useState } from 'react'
import data from './data.json'

import './App.css'

export default function App() {
  const [value, setvalue] = useState(data);
  const [filteredArray, setfilteredArray] = useState(data)
  const [total, setTotal] = useState({
    completed: null,
    uncompleted: null
  })
  const toggle = (id) => {
    const result = value.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setvalue(result)
  }

  const calculate = () => {
    const options = {
      completed: 0,
      uncompleted: 0
    }
    value.forEach(todo => {
      todo.completed ? options.completed++ : options.uncompleted++;
    })
    setTotal(options)
  }

  useEffect(() => {

    calculate();
  }, [value])

  const onlyGreen = () => {
    const green = value.filter(todo => todo.completed);
    const red = value.filter(todo => !todo.completed);
    setfilteredArray([...green, ...red])
  }
  const sortedArray = () => {
    const sorted = filteredArray.toSorted((a, b) => a.title > b.title ? 1 : -1)
    setfilteredArray(sorted)
  }
  return (
    <div className='flex' >
      <div className='flex-fluid'>
        <h2>Todo actions</h2>
        <div className="buttons">
          <button onClick={onlyGreen}>
            All Completed
            <span>{total.completed}</span>
          </button>
          <button>
            All uncompleted
            <span>{total.uncompleted}</span>
          </button>
          <button onClick={() => setfilteredArray(value)}>
            All
            <span>{value.length}</span>
          </button>
          <button onClick={sortedArray}>
            SORT
          </button>

        </div>
      </div>
      {
        filteredArray.map(elem => {
          return (
            <p key={elem.id} onClick={() => {
              toggle(elem.id)
            }}>
              {elem.title}
              <span className={`indicator ${elem.completed ? "green" : "red"}`}></span>
            </p>
          )
        })
      }
    </div>
  )
}
