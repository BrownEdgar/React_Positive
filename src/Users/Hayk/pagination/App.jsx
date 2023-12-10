import { useEffect } from 'react'
import  './App.scss'
import { useState } from 'react'
import Pagination from './Pagination'
import Posts from './Posts'
import { posts } from './postsJson'
console.log(posts);

export default function App() {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [perPage] = useState(10)
    useEffect(() => {
      const pegination = posts.slice((page * perPage) - perPage,(page * perPage))
      setUsers(pegination)
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
