import axios from 'axios';
import { useState, useEffect } from 'react';
import Posts from './Posts';


import './App.scss'
import Pagination from './Pagination';
import Loader from './Loader/Loader';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(2);
  const [perPage, setPerPage] = useState(10)

  useEffect(() => {
    axios({
      baseURL: 'https://jsonplaceholder.typicode.com/',
      url: 'posts',
      params: {
        _limit: perPage,
        _start: (perPage * page) - perPage
      }
    }).then(res => setPosts(res.data))
  }, [perPage, page])

  // const slicePart = page * perPage;
  // const currentPostsSlice = posts.slice(slicePart - perPage, slicePart);

  const changePage = (pageNumber) => {
    setPage(pageNumber)
  }

  return (
    <div className='App'>
      <h2>Our Posts</h2>
      <Posts posts={posts} />
      <Pagination totalPosts={100} perpage={perPage} changePage={changePage} page={page} />

    </div>
  )
}
