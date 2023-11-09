import React from 'react'
import { useState } from 'react'
import './App.scss'

export default function App() {
  const [data, setdata] = useState([
    {id:1, name: "bruce li", age: 34, role: "actor",image:"https://media.gettyimages.com/id/159816248/es/foto/publicity-portrait-of-bruce-lee-from-the-film-the-way-of-the-dragon-1972.jpg?s=612x612&w=gi&k=20&c=fFhqMxmosmK3no5KGGme0HVe_ewWMJ5kjBkpkWIOOaY="},
    {id:2, name: "jan clode vandame", age: 55, role: "actor",image:"https://imgtest.mir24.tv/uploaded/images/2020/October/5409b227b6b7ae2e21d6a7aababf3acec56b48dac2574b98f9709abfb75ed569.jpg"},
    {id:3, name: "dwayn johnson", age: 55, role: "actor",image:"https://people.com/thmb/z2CR8CUU0NRCjDX3HWi-cdOcno4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/dwayne-johnson-open-to-wwe-comeback-091923-tout-92d99c24f06c4e33976706243c00bd6e.jpg"},
    {id:4, name: "jason statham", age: 51, role: "actor",image:"https://facts.net/wp-content/uploads/2023/07/38-facts-about-jason-statham-1688652848.jpg"},

   
  ])
  return (
    <div className='App'>
     
      <h1 className='App-title'>Our actors</h1>
      <div className='App-container' style={{background: '#2d2d2d'}}>
      {data.map(elem =>{
        return(
          <div key = {elem.id}>
            <img src={elem.image}/>
            <h3>{elem.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis voluptates fugiat voluptatibus maiores quae, atque at consequatur. Fugiat, iure?</p>
            </div>

        )
      })
      }
      </div>
    </div>
  )
}
