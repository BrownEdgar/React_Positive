import { useState } from 'react'
import "./App.css"


export default function App() {
    const staff = [
        { id: 1, name: "john", surname: "smith", salary: 340_000, gender: 'male' },
        { id: 2, name: "Luiza", surname: "Sanches", salary: 340_000, gender: 'female' },
        { id: 3, name: "Karen", surname: "Hole", salary: 340_000, gender: 'female' },
        { id: 4, name: "Sebastian", surname: "Graff", salary: 540_000, gender: 'male' },
        { id: 5, name: "Leo", surname: "Yohan", salary: 790_000, gender: 'male' },
      ]

    const [users, setUsers] = useState(staff)

    const handleDelete = (index) => {
        console.log(index);
        setUsers(users.toSpliced(index, 1))
    }

    const mans = () => {
        setUsers(users.filter((elem) => elem.gender === 'male'))
    }
    const womens = () => {
        setUsers(users.filter((elem) => elem.gender === 'female'))
    }
    const all = () => {
        setUsers(staff)
    }



     return (
         <div className="App">
             <h1 className='title'>Our staff and some options</h1>
             <button className='male' onClick={() => mans()}>Mans</button>
             <button className='all' onClick={() => all()}>All of them</button>
             <button className='female' onClick={() => womens()}>Womens</button>
             <div className="container">
                 {
                     users.map((elem,index) => {
                         return (
                             
                             <div key={elem.id}>
                                 <h2>{elem.name}  {elem.surname}</h2>
                                 <span onClick={() => handleDelete(index)}>&#10006;</span>
                                 <h3>Salary: {elem.salary}</h3>
                                 <h4>Gender: {elem.gender}</h4>
                             </div>
                         )
                     })
                 }
             </div>
         </div>
     )
}