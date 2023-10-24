import { useState, useEffect } from 'react'
import './App.scss'

export default function App() {
  const [staff, setStaff] = useState([])
  const getStaff = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setStaff(data))
  }

  useEffect(() => {
    getStaff()
  }, [])

  const deleteStaff = ((id) => {
    setStaff(staff.filter(elem => elem.id !== id))
  })

  return (
    <div className='App'>


      {
        staff.length > 0 && staff.map(elem => {
          return (
            <div key={elem.id} className='App-container'>
              <p >{elem.name}</p>
              <p>{elem.email}</p>
              <span onClick={() => deleteStaff(elem.id)}>&#10026;</span>
            </div>


          )


        })
      }
    </div>
  )
}
