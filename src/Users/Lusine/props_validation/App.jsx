import {useEffect, useState} from 'react'

export default function App() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        axios = ({
          baseURL: "https://jsonplaceholder.typicode.com/",
          url: "photos",
          params:  {
            _limit: 5,

          }
          
        }).then(res => setCount(res.data))

    }, [])
    
  return (
    <div>
        <child count={count} 
        title='lorem ipsum dolor' />
        obj={{id:1, name:"John", }}
    </div>
  )
}
