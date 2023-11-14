import axios from 'axios'
import { useLoaderData } from 'react-router-dom'

export default function Contact() {
  const comments = useLoaderData();
  console.log(comments);
  return (
    <div className='Comments'>
      {comments.map(elem => {
        return (
          <div key={elem.id}>
            <span>{elem.id}</span>
            <h2>{elem.name}</h2>
          </div>
        )
      })}
    </div>
  )
}

const commentsLoader = () => {
  return axios.get("https://jsonplaceholder.typicode.com/comments")
  .then(res => res.data)
}

  export { commentsLoader }
