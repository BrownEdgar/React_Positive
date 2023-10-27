import React, { useState } from 'react'
import Modal from './Modal'

export default function App() {

    const [isOpen, setIsOpen] = useState(false);
    const [users, setUsers] = useState([
        'Toma',
        'Lusine',
        'Hayk',
        'Martin',
        'Arsen',
        'Grigor'
    ])
    const [currentDeleteUser, setCurrentDeleteUser] = useState('')


    const toggleModal = () =>{
        setIsOpen(!isOpen)
    }

    const saveDeleteUserName = (name) => {
        setCurrentDeleteUser(name)

    }
    const deleteUserByName = () =>{
       const result =  users.filter(elem => elem !==currentDeleteUser)
       setUsers(result)
       toggleModal()
}


  return (
    <div>
      {
        users.map(user=>{
            return(
                <div key={user} style={{padding: '2em', margin: '30px'}}>
                    <p>{user}</p>
                    <button style={{padding: '1em', margin: '30px'}}
                    onClick={()=>{
                        toggleModal();
                        saveDeleteUserName(user)
                    }}
                    >Delete user</button>
                </div>

            )
        })
      }
      {
        isOpen ? (
            <Modal toggleModal={toggleModal}>
                <h1>Are you sure?</h1>
                <button className='delete' onClick={ deleteUserByName }>Delete</button>
            </Modal>
        ) : null
      }
    </div>
  )
}
