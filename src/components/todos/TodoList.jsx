import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTodosAsync } from "../../features/todos/todosSlice"
import './TodoList.css'


export default function TodoList() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getTodosAsync())
    }, [])
  return (
    <div className="Todo">
     <p>
        <kbd>{JSON.stringify(todos, null, 1)}</kbd>
     </p>
    </div>
  )
}
