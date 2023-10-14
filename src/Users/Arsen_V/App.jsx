import { useState } from 'react'
import "./App.scss"

export default function App() {
const [data, setSata] = useState([
  {id:1, name: 'Bruce li', age: 34, role: 'actor', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqc3UXqURR2Zuxj-M1N9cwHOsOJEwaj3salQ&usqp=CAU'},
  {id:2, name: 'Jan Clode Ban Dame', age: 55, role: 'actor'},
  {id:3, name: 'Jason Statham', age: 55, role: 'actor'},
  {id:4, name: 'Swayne Douglas Johnson', age: 34, role: 'actor'},
])

  return (
    <div className='App'>
      <h1 className='App-title'>Our Actors</h1>
      <div className='App-container'>
        {
          data.map(elem => {
            return(
              <div key={elem.id}>
                {elem.image ? <img src={elem.image} alt="" /> : null}
                <h3>{elem.name}</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
