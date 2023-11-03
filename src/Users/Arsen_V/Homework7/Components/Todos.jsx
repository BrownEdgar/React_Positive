import  { useEffect,useState } from 'react'
import axios from '../axios'

export default function Todos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios('todos', {
            params: {
                _limit: 30,
                _start: 40,
            }
        })
        .then(res => setTodos(res.data))
      }, [])


  return (
    <ul>
        {
            todos.map(elem =>{
                return <li key={elem.id}>
                    <h1>{elem.title}</h1>
                    <span>{elem.id}</span>
                </li>
            })
        }
    </ul>
  )
}
