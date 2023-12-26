import axios from 'axios'
import { Link, useLoaderData } from 'react-router-dom'
import './Users.css'

export default function Users() {
  const comments = useLoaderData();
return (
    <div className='users'>
      {comments.map(elem => {
        return(
        <Link key={elem.id} to={`${elem.id}`}>
            <div>
            <h2>{elem.name}</h2>
          </div>
        </Link>
        )
      })}
    
    </div>
  )
}

 const commentsLoader = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users")
  .then(res => res.data)
}
export { commentsLoader}

