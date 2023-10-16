import React, { useState } from 'react'
import './App.scss'

const arr =['one', 'two', 'three', 'four']
export default function App() {
    const [currentIndex, setCurrentIndex] = useState(null)
    const handleClick = (index) =>{
        setCurrentIndex(index)
    }
  return (
    <div>
{
    arr.map((btnName,index) => <button 
    key = {index} 
    onClick={()=>handleClick(index)}
    className={`${currentIndex === index ? 'green' : ''}`}
    >
        {btnName}
        </button>)
}
    </div>
  )
}
