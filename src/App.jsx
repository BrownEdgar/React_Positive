import { useDispatch, useSelector } from 'react-redux'
import { addCount, minusCount, resetCount } from './features/counter/counterSlice';
import { useEffect } from 'react';
import axios from 'axios';
import { addPosts } from './features/posts/postsSlice';
import './App.css'
import { addUsers } from './features/users/usersSlice';

export default function App() {
  const counter = useSelector((state) => state.counter);
  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then(res => dispatch(addUsers(res.data)))
   }, [])

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts?_limit=28")
    .then(res => dispatch(addPosts(res.data)))
   }, [])
  
return (
  <div>
    <h1>Counter:{counter}</h1>
    <div className='button'>
    <button onClick={() => dispatch(addCount())}>add count</button>
    <button onClick={() => dispatch(minusCount())}>Decrement</button>
    <button onClick={() => dispatch(resetCount())}>Reset</button>
    </div>
    <div className='pre'>
    <pre>
      {JSON.stringify(users, null, 2)}
    </pre>
    <pre>
      {JSON.stringify(posts, null, 2)}
    </pre>
    </div>
  </div>
  )
}

