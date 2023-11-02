import React from 'react'
import  './Modal.scss'

export default function Modal(props) {
  return (
    <div className='Modal'>
<div className='Modal-content'>
  <button className='Modal-close' onClick={props.toogleModal}>
    No
  </button>

{props.children}
</div>
    </div>
  )
}
