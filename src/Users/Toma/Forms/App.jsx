import React, { useState } from 'react'
import './App.scss'

export default function App() {

    const [cities, setCities] = useState([
      {
        id: 1,
        name: 'London',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eum repellat odit, consequatur veniam at. Laborum praesentium id fugit mollitia! Itaque quas velit facilis autem minus quaerat expedita sint tenetur.',
        link:'https://en.wikipedia.org/wiki/London'

      },
      {
        id: 2,
        name: 'Moscow',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eum repellat odit, consequatur veniam at. Laborum praesentium id fugit mollitia! Itaque quas velit facilis autem minus quaerat expedita sint tenetur.',
        link:'https://en.wikipedia.org/wiki/Moscow'
    },
    {

    id: 3,
    name: 'Yerevan',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eum repellat odit, consequatur veniam at. Laborum praesentium id fugit mollitia! Itaque quas velit facilis autem minus quaerat expedita sint tenetur.',
    link:'https://en.wikipedia.org/wiki/Yerevan'
},
    ])
    const [selectedCity, setselectedCity] = useState('Yerevan')
    const city = cities.find(elem => elem.name === selectedCity)
    const handleChange = (e) =>{
        setselectedCity(e.target.value)
    }
  return (
    <div className='App'>
        <div className='App-header'>
        <select name='city' id='city' onChange={handleChange} defaultValue={selectedCity}>
            {
                cities.map(elem => elem.name)
                .map(elem =>{
                    return <option key={elem} value={elem}>{elem}</option>
                })
            }

        </select>
        </div>
        <div className='App-content'> 
           <h2>{city.name} (id: {city.id})</h2>
           <p>{city.description}</p>
           <a href={city.link} rel='noopener noreferrer' className='App-link'>Read more...</a>
        </div>

    </div>
  )
}






