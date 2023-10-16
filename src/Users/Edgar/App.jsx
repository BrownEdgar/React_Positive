import { useState } from 'react'
import JasonImage from '../../assets/images/jason.jpg'
import './App.scss'

export default function App() {
  const [data, setData] = useState([
    { id: 1, name: "Bruce Li", age: 34, role: 'actor', image: "https://wallup.net/wp-content/uploads/2019/07/24/170090-game-of-death-martial-arts-bruce-lee-748x421.jpg" },
    { id: 2, name: "Jan Clode Ban Dame", age: 55, role: 'actor', image: './public/jcvd.jpg' },
    { id: 3, name: "jason statham", age: 55, role: 'actor', image: JasonImage },
    { id: 4, name: "Dwayne Douglas Johnson", age: 51, role: 'actor' },
  ])

  return (
    <div className='App'>
      <h1 className='App-title'>Our Actors</h1>
      <div className="App-container">
        {data.map(elem => {
          return (
            <div key={elem.id}>
              {elem.image
                ? <img src={elem.image} alt="" />
                : <img src={"https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png?20190312180423"} alt="" />}
              <h3>{elem.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quos blanditiis impedit accusantium rerum amet qui laborum reprehenderit unde harum.</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
