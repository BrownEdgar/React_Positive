import { useState } from "react"
import './App.scss'
import Dwayne from '../../assets/images/Dwayne.jpg'

export default function App() {
  const [data, setData] = useState([
    { id: 1, name: "Jason Statham", age: 56, role: "actor", image: "https://yt3.ggpht.com/KQ0suXk75DvLKJis6eoOvqS29hdo4YjcJGVXYUkYcjqavWw1jLitJ55dbWqQOMbyDVFxIX08TA=s900-c-k-c0x00ffffff-no-rj" },
    { id: 2, name: "Dwayne Johnson", age: 41, role: "actor", image: Dwayne },
    { id: 3, name: "Vin Diesel", age: 56, role: "actor" },
    { id: 4, name: "Robert John Downey Jr.", age: 58, role: "actor" }
  ])

  return (
    <div className="App">
      <h1 className="App-title">Actors</h1>
      <div className="App-container">
        {data.map((elem,) => {
          return (
            <div key={elem.id}>
              {elem.image
                ? <img src={elem.image} alt="" />
                : <img src='https://smart.mag-river.ru/uploads/goods/img/445-360/fit/no-image.png' alt="" />}

              <h3>name:{elem.name}</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere labore aperiam dolor voluptas vitae et rerum mollitia ratione quod aliquam.

              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
