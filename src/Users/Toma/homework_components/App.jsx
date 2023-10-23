import React from 'react'
import Todos from './todos';
import Comments from './comments';
import Posts from './posts';
import Users from './users';

import './App.scss'





export default function App() {
  return (
    <div className='App'>
        <Comments />
        <Todos />
        <Posts />
        <Users />
    </div>
  )
}
