import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Modal from './Modal'

export default function App() {

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectPostId, setSelectPostId] = useState('');

  const handleCloseWindow = () => {
    setOpen(false);
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter((elem) => elem.id !== id));
    setOpen(false);
  };

  useEffect(() => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url: 'posts',
      params: { _limit: 10 }

    })
      .then(res => setPosts(res.data))
  }, [])

  return (
    <div>
      {
        open ? (
          <div className='App'>
            <div className='App-content'>
              <p>Are you sure you want to delete this post?</p>
              <button onClick={() => handleDeletePost(selectPostId)}>Yes</button>
              <button onClick={handleCloseWindow}>Close</button>
            </div>
          </div>
        ) : null
      }
      <Modal posts={posts} setSelectPostId={setSelectPostId} setOpen={setOpen} />
    </div>
  )
}



