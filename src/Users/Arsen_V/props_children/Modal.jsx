import './Modal.scss'
export default function Modal(props) {
  return (
    <div className="Modal">
        <div className="Modal-content">
            <button className='Modal-close' onClick={props.toogleModal}></button>
            {props.children}
        </div>
    </div>
  )
}
