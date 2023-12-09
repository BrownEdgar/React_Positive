import { useEffect } from 'react'
import  './App.scss'
import axios from 'axios'
import { useState } from 'react'
import Pagination from './Pagination'
import Posts from './Posts'

export default function App() {
    const [users, setUsers] = useState([])
    console.log(users);
    const [page, setPage] = useState(2)
    const [perPage, setperPage] = useState(10)
    useEffect(() => {
      axios({
        baseURL: "https://jsonplaceholder.typicode.com/",
        url: "posts",
        params:{
            _limit:perPage,
            _start: (page * perPage) - perPage,
        }
      }).then(res=>setUsers(res.data))
    }, [page,perPage])

    const changePage = (page) => {
        setPage(page)
    }
    
  return (
    <div className='App'>
        <Pagination users={users}/>
        <Posts totalPage={100} perPage={perPage} changePage={changePage} page={page}/>
    </div>
  )
}
