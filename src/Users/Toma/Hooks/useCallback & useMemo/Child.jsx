import { useEffect, useState } from 'react'
import './Child.scss'

export default function Child({value}) {
  const [numbers, setNumbers] = useState([])
  useEffect(() => {
    const arr = new Array(1e4)
    .fill()
    .map(()=>Math.ceil(Math.random()*20000))
    setNumbers(arr)
  }, [])
  
    // let sum = 0;
    // for (let i = 0; i <= x; i++) {
    //   sum += i
        
    // }

  return (
    // <div onClick={handleClick}>
    //    {/* <h1>{sum}</h1> */}
    //    <h1>child component</h1>
    //    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vel, inventore saepe rem molestiae est sed magnam quas provident assumenda asperiores temporibus, voluptas doloribus consectetur iste voluptatibus sit impedit culpa.</p>
    // </div>
    <ul>
      {
       numbers
       .filter(n => n >= value)
       .map((elem,index) => <li key={index}>{elem}</li>)
      }
    </ul>
  )
}
