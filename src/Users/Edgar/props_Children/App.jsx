import React, { useState } from 'react'
import Modal from './Modal';

export default function App() {
  const [users, setusers] = useState([
    "Toma",
    "Lusine",
    "Hayk",
    "Arsen",
    "Martin",
    "Grigor",
  ])
  const [isOpen, setIsOpen] = useState(false);
  const [currentDeletedUser, setCurrentDeletedUser] = useState('');

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const saveUserName = (name) => {
    setCurrentDeletedUser(name)
  }

  const deleteUser = () => {
    const result = users.filter(elem => elem !== currentDeletedUser);
    setusers(result);
    toggleModal()
  }

  return (
    <div>
      <ul>
        {users.map(user => {
          return (
            <li key={user}>{user} <span onClick={() => {
              toggleModal()
              saveUserName(users)
            }}>X</span></li>
          )
        })}
        {
          isOpen ? (
            <Modal toggleModal={toggleModal} >
              <h1>Are you sure</h1>
              <button className="delete" onClick={deleteUser}>Delete user</button>
            </Modal>
          ) : null
        }

      </ul>
    </div>
  )
}
