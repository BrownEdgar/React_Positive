import React, { useState, useEffect } from 'react'
import axios from './axios'
import Todos from './Todos';

import './App.scss'

export default function App() {
const [todos, setTodos] = useState([]);


useEffect(() => {
// axios("https://jsonplaceholder.typicode.com/todos?_limit=10")
// .then(res => setTodos(res.data));
/////params/////

// axios("https://jsonplaceholder.typicode.com/todos", {
//     params: {
//         _limit: 10,
//         _start: 20
//     }
// })
// .then(res => (res.data))
////baseUrl///

// axios({
//     baseURL: 'https://jsonplaceholder.typicode.com/',
//     url: 'todos',
//     params: {_limit: 20}
// })
// .then(res =>setTodos(res.data))

// axios({
//     url: 'https://jsonplaceholder.typicode.com/todos',
//     params: {_limit: 20}
// })
// .then(res => setTodos(res.data))

// axios with instance///
// axios('todos').then(res => console.log(res.data))
// axios('todos?_limit=10').then(res => console.log(res.data))
// axios({
//     url: 'users'
//     }).then(res => console.log(res.data))


axios('todos').then(res => setTodos(res.data))
}, [])

const toggleTodo = (todoIndex) => {
    const newTodo = {...todos[todoIndex], completed: !todos[todoIndex].completed}
    const result = todos.with(todoIndex, newTodo)
    setTodos(result)

}

  return (
    <div className='App'>
       <Todos  todos={todos} toggleTodo={toggleTodo}/> 
    </div>
  )
}
