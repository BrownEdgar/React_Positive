import { useEffect } from 'react'
import './Modal.scss'
export default function Modal(props) {

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.classList.contains('Modal')) {
        props.toggleModal()
      }
    }
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (

    <div className='Modal'>
      <div className="Modal-content">
        {props.children}
      </div>
    </div>

  )
}
