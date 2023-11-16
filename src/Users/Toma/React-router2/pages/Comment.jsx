
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ErrorPage from './ErrorPage';

export default function Comment() {
  const { id } = useParams()
  const [comment, setComment] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setComment(res.data))
      .catch((e) => {
        if (e.response && e.response.status === 404) {
          setError(true);
        }
      })
  }, [id])


  if (error) {
    return <ErrorPage />
  }

  return (
    <div>
      <h1>Users id {id}</h1>
      <pre>
        {JSON.stringify(comment, null, 1)}
      </pre>
    </div>
  )
}
