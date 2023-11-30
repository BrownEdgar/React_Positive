import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getTodosAsync, updateFilter, superSelector } from '../../features/todos/todosSlice';

import './TodoList.css'

function TodoList() {
  const todos = useSelector(superSelector);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTodosAsync())
  }, [])

  return (
    <div className='Todo'>
      <button className="all" onClick={() => dispatch(updateFilter('all'))}>A</button>
      <button className="completed" onClick={() => dispatch(updateFilter('completed'))}>C</button>
      <button className="uncompleted" onClick={() => dispatch(updateFilter('uncompleted'))}>U</button>
      <p>
        <kbd>{JSON.stringify(todos, null, 1)}</kbd>
      </p>
    </div>
  )
}

export default TodoList