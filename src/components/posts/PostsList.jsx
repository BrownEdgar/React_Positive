import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deletePost, getPostsAsync } from "../../features/posts/postsSlice"
import './PostsList.css'


export default function PostsList() {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deletePost(id));
      };

    useEffect(() =>{
        dispatch(getPostsAsync())
    }, []);

    return (
    <div className="Posts">
         {posts.data.map(elem => (
         <div key={elem.id} className="posts-content">
         <span className='delete' onClick={() => handleDelete(elem.id)}>&#x2718;</span>
         <h1>UserId: <span>{elem.userId}</span></h1>
         <h1>ID: <span>{elem.id}</span></h1>
         <h1>Title: <span>{elem.title}</span> </h1>
         <h1>Body: <span>{elem.body}</span></h1>
    </div>
    ))}
         
    </div>
    )
    }