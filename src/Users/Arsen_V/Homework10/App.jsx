import { useState } from 'react'

import './App.scss'

export default function App() {
    const [users, setUsers] = useState([])
    
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username,password } = e.target;
        const isEmailExist = users.some(user => user.username.toLowerCase() === username.value)

        if(isEmailExist){
            alert("Username is already exist")
        } else {
            const user = {
                id: Date.now(),
                username: username.value,
                password: password.value,
            }
            setUsers([...users,user])
            e.target.reset()
        }
        
    }
    const handleCheck = (e) => {
        e.preventDefault();
        const checkProcess = users.some(user => user.username.toLowerCase() === e.target.checkUser.value)

        if(checkProcess){
            alert('This username is already used')
        } else {
            let answr = prompt('This username is empaty,do you want to USE IT?');
            if(answr === 'yes'){
                username.value = e.target.checkUser.value
            }
        }
        e.target.reset()  
    }
    
     
  return (
    <div className='App'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">userName</label>
            <input type="text" id='username' required/>
            <label htmlFor="password">password</label>
            <input type="text" id='password' required/>
            <input type="submit" value='add' />
        </form>
        <hr />
        {users.map(elem => <h3 key={elem.id}>{elem.username.toUpperCase()}</h3>)}
        <form onSubmit={handleCheck}>
            <label htmlFor="checkUser">CheckUser</label>
            <input type="text" id='checkUser' />
            <input type="submit" value='add' />
        </form>
    </div>
  )
}