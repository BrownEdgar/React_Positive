import React from 'react'
import './App.css'
import { useState } from 'react'

export default function App() {
  const [users, setUsers] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
const value = e.target.words .value

if(!users.includes(value)){
  setUsers([...users,value])
}else{
  alert("this word already writed")
}

  }
const handleClick = () =>{

  
}

  return (
    <div className='App'>

<form onSubmit={handleSubmit}>

<label htmlFor="words">add words</label>
    <input type="text" id='words' required/>
     <input type="submit"  value='add' />
</form>
<hr/>
    <div className="words">

      {
users.map(elem=> {
  return (
<div key={elem}>

<ul>
  <li className='map-li'>
    {elem} 
</li>
</ul>
<button onClick={handleDelete}>delete</button>
</div>
  
  )
})

  }
  </div>
   </div>
  )
}
