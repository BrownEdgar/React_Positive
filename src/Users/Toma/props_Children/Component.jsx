import React from 'react'
import './Component.scss'

export default function Component(props) {
  return (
    <div className='Component'>
        <h1>{props.title}</h1>
      {props.children}  
    </div>
  )
}
