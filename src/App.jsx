import { useDispatch, useSelector } from 'react-redux'
import { addCount } from './features/counter/counterSlice';
import { useEffect } from 'react';
import axios from 'axios';
import { addUsers } from './features/users/usersSlice';

export default function App() {
  const counter = useSelector((state) => state.counter);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch()

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => dispatch(addUsers(res.data)))
  }, [])

  return (
    <div>
      <h1>counter:{counter}</h1>
      <button onClick={() => dispatch(addCount(7))}>add count</button>
      <pre>
        {JSON.stringify(users, null, 2)}
      </pre>
    </div>
  )
}
