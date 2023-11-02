import { useState } from 'react'
import Component from './Component'
import Modal from './Modal'

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [users, setUsers] = useState([
        "Toma",
        "Lusine",
        "Hayk",
        "Arsen",
        "Martin",
        "Grigor",
        "Edgar"

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
                    <div key={user} style={{padding: '2em', margin: '30px'}}>
                        <p>{user}</p>
                        <button style={{padding: '1em', margin: '30px'}} onClick={() => {
                            toogleModal();
                            saveDeleteUser(user)
                        }}>X</button>
                    </div>
                )
            })
        }
        {
            isOpen ? (
                <Modal toogleModal={toogleModal}>
                    <h1>Are you sure?</h1>
                    <button className='delete'
                    onClick={deleteUserByName} >Delete</button>
                </Modal>
            ) : null
        }
    </div>
  )
}
