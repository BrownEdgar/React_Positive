import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPostsAsync } from '../../feauters/posts/PostsSlice';

import './PostList.css'

function PostList() {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostsAsync())
    }, [])
    
  return (
    <div className='Post'>
        <p>
            {JSON.stringify(posts, null, 1)}
        </p>

    </div>
  )
}

export default PostList
