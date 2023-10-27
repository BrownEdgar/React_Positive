import React from 'react'
import './Component.scss'

export default function Component(props) {
  console.log(props.children)
  return (
    <div className='Component'>
      <h1>{props.title}</h1>
      {props.childrenz}
    </div>
  )
}
