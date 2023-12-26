import { useState, useMemo } from 'react'
import data from './data.json'
import './App.css'

export default function App() {
  const [users] = useState(data)
  const [query, setQuery] = useState('')
  const [sortType, setSortType] = useState('')
  const [sortOrder, setSortOrder] = useState(true)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const sortedData = useMemo(() => {
    let sorted = [...users];
    let order = sortOrder ? 1 : -1;

    if (sortType === "name") {
      sorted.sort((a, b) => order * a.first_name.localeCompare(b.first_name))
    } else if (sortType === "email") {
      sorted.sort((a, b) => order * a.email.localeCompare(b.email))
    }

    return sorted;
  }, [sortType, users, sortOrder])

  const filteredData = useMemo(() => {
    return sortedData.filter(elem => elem.first_name.toLowerCase().includes(query.toLowerCase()))
  }, [query, sortedData])


  const sortByName = (e) => {
    e.preventDefault()
    setSortType('name')
    setSortOrder(sortType !== 'name' || !sortOrder)
  }

  const sortByEmail = (e) => {
    e.preventDefault()
    setSortType('email')
    setSortOrder(sortType !== 'email' || !sortOrder)
  }

  return (
    <div>
      <form>
        <input type="search" placeholder='first name here...' onChange={handleChange} />
        <div className='button'>
          <button onClick={sortByName}>Sort name</button>
          <button onClick={sortByEmail}>Sort email</button>
        </div>
      </form>

      <div className='flex'>
        {filteredData.map(elem => {
          return (
            <div key={elem.id}>
              <h2>First_name:<span> {elem.first_name}</span></h2>
              <h2>Last_name: <span>{elem.last_name}</span></h2>
              <h2>Email:<span> {elem.email}</span></h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}
