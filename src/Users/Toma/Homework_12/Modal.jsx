import React from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'

export default function Modal({ posts, setSelectPostId, setOpen }) {

  return (
    <div className='Modal'>
      {
        posts.map(elem => {
          return <li key={elem.id} className='Modal-content'>
            <p className='Modal-par'><span>UserId:</span>{elem.userId}</p>
            <p className='Modal-par'><span>Id:</span>{elem.id}</p>
            <p className='title'><span>Title:</span>{elem.title}</p>
            <p className='body'><span>Body:</span>{elem.body}</p>
            <span className='symbol' onClick={() => {
              setSelectPostId(elem.id);
              setOpen(true);
            }}>&#x2718;</span>
          </li>
        })
      }
    </div>
  )
}

Modal.propTypes = {
  posts: PropTypes.arrayOf({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })
}.isRequired



