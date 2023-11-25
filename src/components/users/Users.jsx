import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addUser, getAsyncUasers } from '../../features/users/usersSlice';

import './Users.css'

export default function Users() {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username } = e.target;
    dispatch(addUser(username.value))
  }

  useEffect(() => {
    dispatch(getAsyncUasers())
  }, [])


  return (
    <div className='Users'>
      <form onSubmit={handleSubmit}>
        <input type="text" id='username' required />
        <input type="submit" value="save" />
      </form>
      <hr />
      <p>
        {JSON.stringify(users, null, 1)}
      </p>
      <ul>
        {users.data.map((elem) => {
          return <li key={elem.id}>{elem.username}</li>
        })}
      </ul>
    </div>
  )
}
