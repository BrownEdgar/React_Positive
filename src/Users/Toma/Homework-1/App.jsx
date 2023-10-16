import React, { useState } from 'react'
import './App.scss'

export default function App() {
    const [users, setUsers] = useState([
    
{ id: 1, name: "John", surname: "Smith", salary: 340_000, gender: 'male' },
{ id: 2, name: "Luiza", surname: "Sanches", salary: 340_000, gender: 'female' },
{ id: 3, name: "Karen", surname: "Hole", salary: 340_000, gender: 'male' },
{ id: 4, name: "Sebastian", surname: "Graff", salary: 540_000, gender: 'male' },
{ id: 5, name: "Leo", surname: "Yohan", salary: 790_000, gender: 'male' },
          
])

const filterMen = () => {
setUsers(users.filter(elem => elem.gender === "male"))
};

const handleDelete = (id) => {
    setUsers(users.toSpliced(id,1))
};

  return (
    <div className='App'>
       
<div className='App-content'>
       
        { users.map(elem => {
        return(
         <div className='App-container' key={elem.id}>
            <h2>Name: {elem.name}</h2>
            <h2>Surname: {elem.surname}</h2>
            <h2>Salary: {elem.salary}</h2>
            <h2>Gender: {elem.gender}</h2>
            <span onClick={()=>handleDelete(elem.id)}>&#x2718;</span>
            
        </div>
 
        )
    })
            
 }
</div>
 <button onClick={filterMen}>Show Men</button>
 </div>
        
        
  )
}
