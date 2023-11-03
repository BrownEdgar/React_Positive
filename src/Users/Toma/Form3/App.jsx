import React, { useState } from 'react'
import './App.scss'
import classNames from 'classnames'

const options = {
    'html&css': 40000,
    'js': 50000,
    'react': 60000,
    'node': 65000
}

export default function App() {
    const [users, setusers] = useState([])
    const [currentUserID, setcurrentUserID] = useState(null);
    const [userEmail, setUserEmail] = useState('')
    

    const handleSubmit = (e) =>{
        e.preventDefault()
        const {username, password, teacher, language, email} = e.target;
        const result = users.some((user) => user.email === email.value)
        if(result){
            alert('email is alredy exist')
        }else{
            const user = {
                id: Date.now(),
                username: username.value,
                password: password.value,
                teacher: teacher.value,
                language: language.value,
                email: email.value.toLowerCase()
    
            }
            setusers([...users,user])
 }
}
const searchSubmit = (e) =>{
    e.preventDefault();
    const {search} = e.target;
    setUserEmail(search.value)
}

const handleClick = (userId) =>{
    if(userId === currentUserID){
    setcurrentUserID(null)
}else{
    setcurrentUserID(userId)
}
    
}

const total =() => {
    return users.reduce((acc, cv) => acc + options[cv.language], 0)
}
const sortusers = () =>{
    setusers(users.tosorted((a,b) => a.username > b.username ? 1 : -1))
}
  return (
    <div className='container'>
        <form  onSubmit={handleSubmit}>
            <div className='form-group ' >
                <label htmlFor='username' name='username'>Username</label>
                <input type='text' id='username' />
            </div>

            <div className='form-group'>
                <label htmlFor='password' name='password'>password</label>
                <input type='password' id='password' />
            </div>

            <div className='form-group'>
                <label htmlFor='email' name='email'>Email</label>
                <input type='email' id='email' />
            </div>

            <div className='form-group'>
                <label htmlFor='teachers'>Select your teacher</label>
               <select name='teacher' id='teacher' defaultValue={'Emil'}>
               <option value="Hayk">Hayk</option>
               <option value="Zmruxt">Zmruxt</option>
               <option value="Emil">Emil</option>
               <option value="Edgar">Edgar</option>
               </select>
            </div>

            <div className='form-group form-group_check'>
                <label htmlFor='html&css'>
                <input type='radio'  name='language' value='htmlcss' id="html&css"/>
                <span>HTML & CSS</span>
                </label>
                <label htmlFor='javascript'>
                <input type='radio'  name='language' value='js' id="javascript"/>
                <span>Javascript</span>
                </label>  
                <label htmlFor='react'>
                <input type='radio'  name='language' value='react' id="react"/>
                <span>React.js</span>
                </label>  
                <label htmlFor='node'>
                <input type='radio'  name='language' value='node' id="node"/>
                <span>Node.js</span>
                </label>
            </div>
            <div className='form-group'>
                <input type='submit'value='add user' />
            </div>

        </form>
        <div className='users'>
<table>
    <thead>
        <tr>
            <th>id</th>
            <th>username</th>
            <th>password</th>
            <th>teacher</th>
            <th>language</th>
        </tr>
    </thead>
    <tbody>
        {users.map(elem =>{
            return(
                <tr key={elem.id } className={classNames({
                   [`color-${elem.language}`]: true,
                   selected: userEmail === email.value

                })}>
                <td>{elem.id % 1e4}</td>
                <td>{elem.username}</td>
                <td className='pass'>
                    {currentUserID === elem.id ? elem.password :'*'.repeat(10)}
                    <i className={classNames("fa-solid", {
                       "fa-eye":  currentUserID !== elem.id,
                        "fa-eye-slash": currentUserID === elem.id
                    })}
                    onClick={() => handleClick(elem.id)}></i>
                    </td>
                <td>{elem.teacher}</td>
                <td>{elem.language}</td>
               
            </tr>

            )
        })}
    </tbody>
    <tfoot>
        {
        <tr colSpan={5}>
            <td>
              {total()}
              դրամ
            </td>
        </tr>
}
    </tfoot>
</table>
        </div>
        <div>
            <form onSubmit={searchSubmit}>
            <div className='form-group'>
                <label htmlFor='search'>search</label>
                <input type='search' id='search'  name='search' />
            </div>
            </form>
        </div>
        <button onClick={sortusers}>sorted</button>

    </div>
  )
}
