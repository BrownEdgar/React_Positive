import React from 'react'
import PropTypes from 'prop-types'

export default function Child( {} ) {
  return (
    <div>
        {title.toUppercase()}
       
    </div>
  )
}

Child.defaultProps ={
  type: "dark"
}

Child.propTypes = {
  obj: PropTypes.arrayOf(
    PropTypes.exact (
      {
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired
    })
  )
    
  
    

}