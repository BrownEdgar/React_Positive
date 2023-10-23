import { useEffect,useState } from "react"
import axios from "../axios"

export default function Todos() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
      axios("todos?_limit=10")
      .then(res => setTodos(res.data))
    }, [])
    
  return (
    <div>
        {
            todos.map(elem=>{
                return (
                <h1 key={elem.id}>Todos_title: {elem.title}</h1>
                )
            })
        }
    </div>
  )
}