import { useState } from 'react'
import './App.scss'

export default function App() {

  const [data, setData] = useState([
    {  id: 1, name: "Bruce Lee",age: 34,
      role: "actor",image:
 "https://smartcdn.gprod.postmedia.digital/nationalpost/wp-content/uploads/2022/11/movies-bruce-lee.jpg",
    },
    { id: 2, name: "  Jan Clode Van-Dam", age: 55, role: "actor" },
    { id: 3, name: "Jasson Stephem", age: 55, role: "actor" },
    { id: 4, name: "The Rock", age: 51, role: "actor" },
  ]);
  
  return (
    <div className='App'>
      <h1 className='App-title'>
      Our Actors
        
      </h1>   
    
      <div className="App-container">
        {
          data.map(elem => {
            return (
              <div key={elem.id}>
{elem.image ?  <img src={elem.image} /> : <img src="https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png" /> }
               

                <h2>{ elem.name}</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illo asperiores provident voluptates harum enim fugit maiores modi ab dolorum.</p>
              
              </div>

              
            )

          })

}

      </div>
      

    </div>
)
  
  }