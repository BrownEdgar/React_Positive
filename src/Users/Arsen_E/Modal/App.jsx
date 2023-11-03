import React, { useState } from 'react'
import Modal from './Modal'



export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([
      
      "Edgar",
      "Lusine",
      "Toma",
      "Hayk",
      "Grigor",
      "Arsen",
      "Martin"
])
  const [currentDeleteUser, setCurrentDeleteUser] = useState('')
  const toogleModal = () => {
      setIsOpen(!isOpen)

}

const saveDeleteUser = (name) => {
      setCurrentDeleteUser(name)
  }

const deleteUserByName = () => {
      const result = users.filter(elem => elem !== currentDeleteUser)
      setUsers(result);
      toogleModal()
  }

  return (
  <div>

{
 users.map(user => {
  return (
  <div key={user} style={{padding: '2em', margin: '30px',display:'flex',flexDirection:'column-reverse'}}>
  <p>{user}</p>
  <button style={{padding: '1em', margin: '20px'}} onClick={() => {
toogleModal();
saveDeleteUser(user)
}}>Delete</button>
    </div>
)})
}

{
      isOpen ? (
    <Modal toogleModal={toogleModal}>
      <h1>Are you sure</h1>
      <button className='Modal-delete'
      onClick={deleteUserByName} >Yes</button>
    </Modal>
          ) : null
}
</div>
)}