import { useDispatch, useSelector } from 'react-redux'
import { addCount } from './feauters/counter/counterSlice'
import { useEffect } from 'react'
import axios from 'axios'
import { addPosts } from './feauters/posts/postsSlice'


export default function App() {
 const counter = useSelector((state) => state.counter)
 const posts = useSelector((state) => state.posts)
 const dispatch = useDispatch()

useEffect(() => {
  axios("https://jsonplaceholder.typicode.com/posts")
  .then(res => dispatch(addPosts(res.data)))
}, [])
  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={() => dispatch(addCount(7))}>add count</button>
      <pre>
        {JSON.stringify(posts, null, 2)}
      </pre>
    </div>
  )
}


