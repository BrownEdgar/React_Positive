import { useEffect, useState } from "react"
import axios from "../axios"



export default function Comments() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    axios("comments?_limit=10")
      .then(res => setComments(res.data))
  }, [])

  return (
    <div>
      {
        comments.map(elem => {
          return (
            <h1 key={elem.id}>Comments_name: {elem.name}</h1>
          )
        })
      }
    </div>
  )
}
