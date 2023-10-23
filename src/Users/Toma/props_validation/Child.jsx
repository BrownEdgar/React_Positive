import React from 'react'
import PropTypes from 'prop-types'

export default function Child({posts, title, type}) {
  return (
    <div>
    {title.toUpperCase()}
    <h1>{type}</h1>
    {posts.map(elem=>{
      return 
     })}
    </div>
  )
}

Child.propTypes ={
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['dark', 'light']).isRequired,
  obj: PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string)
  }),
  posts: PropTypes.arrayOf(
    PropTypes.exact({
      userId:PropTypes.number.isRequired,
      id:PropTypes.number.isRequired,
      title:PropTypes.string.isRequired,
      body:PropTypes.string.isRequired

    })

  )
 }
