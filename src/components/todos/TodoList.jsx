import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getTodosAsync } from "../../feauters/todos/TodosSlice";

export default function TodoList() {
   const todos = useSelector(state => state. todos);
   const dispatch = useDispatch() 

   useEffect(() => {
    dispatch(getTodosAsync())

   }, [])
  return (
    <div>
        <p>
            {JSON.stringify(todos, null, 1)}
        </p>

    </div>
  )
}
