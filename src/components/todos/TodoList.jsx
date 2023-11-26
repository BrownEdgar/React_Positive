import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getTodosAsync } from "../../feauters/todos/TodosSlice";

import './TodoList.css'
export default function TodoList() {
   const todos = useSelector(state => state. todos);
   const dispatch = useDispatch() 

   useEffect(() => {
    dispatch(getTodosAsync())

   }, [])
  return (
    <div>

        <p>
        <kbd> {JSON.stringify(todos, null, 1)} </kbd>
        </p>

    </div>
  )
}
