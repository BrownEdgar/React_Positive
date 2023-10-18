import { useEffect, useState } from 'react'
import "./App.css"

export default function App() {
 const [users, setUsers] = useState([])

 useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/users")
     .then(res=>res.json())
     .then(users=>setUsers(users))
 },[])

 const handleDelete = (index) => {
    console.log(index);
    setUsers(users.toSpliced(index, 1))
}



  return (
    <div>
        <h2>&#123;JSON&#125; PlaceHolder /users</h2>
        {
            users.map((elem,index) => {
                return(
                    <div className='list' key={elem.id}>
                    <ul>
                        <li>
                        <span>{elem.name} {elem.email}</span>
                        <span onClick={() => handleDelete(index)} className='cross'>&#10006;</span>
                        </li>
                    </ul>
                    </div>
                )
            })
        }
    </div>
  )
}
