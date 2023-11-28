import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPostsAsync } from '../../features/posts/postSlice';
import './Post.css'

function PostsList() {

  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostsAsync())
  }, [])

  return (
    <div className='Post'>
      <pre>{JSON.stringify(posts, null, 1)}</pre>
    </div>
  )
}

export default PostsList